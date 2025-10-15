// Enhanced analytics integration for Zion Tech Group

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

interface PageView {
  page_title: string;
  page_location: string;
  page_path: string;
  content_group1?: string;
  content_group2?: string;
}

class AnalyticsManager {
  private isInitialized = false;
  private queue: AnalyticsEvent[] = [];
  private userId: string | null = null;
  private sessionId: string;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.initialize();
  }

  private initialize() {
    if (typeof window === 'undefined') return;

    // Initialize Google Analytics 4
    this.initializeGA4();
    
    // Initialize custom analytics
    this.initializeCustomAnalytics();
    
    this.isInitialized = true;
    this.processQueue();
  }

  private initializeGA4() {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX', {
      page_title: document.title,
      page_location: window.location.href,
      custom_map: {
        dimension1: 'user_type',
        dimension2: 'session_duration',
        dimension3: 'page_load_time'
      }
    });
  }

  private initializeCustomAnalytics() {
    // Track page views
    this.trackPageView();
    
    // Track performance metrics
    this.trackPerformanceMetrics();
    
    // Track user interactions
    this.trackUserInteractions();
    
    // Track errors
    this.trackErrors();
  }

  // Track page views
  trackPageView(pageData?: Partial<PageView>) {
    const pageView: PageView = {
      page_title: pageData?.page_title || document.title,
      page_location: pageData?.page_location || window.location.href,
      page_path: pageData?.page_path || window.location.pathname,
      content_group1: pageData?.content_group1 || this.getContentGroup(),
      content_group2: pageData?.content_group2 || this.getPageType()
    };

    if (this.isInitialized && window.gtag) {
      window.gtag('event', 'page_view', pageView);
    } else {
      this.queue.push({
        action: 'page_view',
        category: 'Navigation',
        custom_parameters: pageView
      });
    }
  }

  // Track custom events
  trackEvent(event: AnalyticsEvent) {
    if (this.isInitialized && window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event.custom_parameters
      });
    } else {
      this.queue.push(event);
    }
  }

  // Track user interactions
  private trackUserInteractions() {
    // Track button clicks
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const button = target.closest('button, a[href]');
      
      if (button) {
        const text = button.textContent?.trim() || '';
        const href = (button as HTMLAnchorElement).href;
        
        this.trackEvent({
          action: 'click',
          category: 'User Interaction',
          label: text || href || 'Unknown',
          custom_parameters: {
            element_type: button.tagName.toLowerCase(),
            element_text: text,
            element_href: href
          }
        });
      }
    });

    // Track form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      const formName = form.name || form.id || 'Unknown Form';
      
      this.trackEvent({
        action: 'form_submit',
        category: 'User Interaction',
        label: formName,
        custom_parameters: {
          form_name: formName,
          form_action: form.action
        }
      });
    });

    // Track file downloads
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a[href]') as HTMLAnchorElement;
      
      if (link && this.isDownloadLink(link.href)) {
        this.trackEvent({
          action: 'file_download',
          category: 'User Interaction',
          label: link.href,
          custom_parameters: {
            file_url: link.href,
            file_name: this.getFileName(link.href)
          }
        });
      }
    });
  }

  // Track performance metrics
  private trackPerformanceMetrics() {
    if (typeof window === 'undefined') return;

    // Track page load time
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
        
        this.trackEvent({
          action: 'page_load_time',
          category: 'Performance',
          value: Math.round(loadTime),
          custom_parameters: {
            load_time: loadTime,
            dom_content_loaded: domContentLoaded,
            navigation_type: navigation.type
          }
        });
      }
    });

    // Track Core Web Vitals
    this.trackWebVitals();
  }

  private async trackWebVitals() {
    try {
      const { onCLS, onFCP, onLCP, onTTFB, onINP } = await import('web-vitals');
      
      onCLS((metric) => {
        this.trackEvent({
          action: 'web_vital',
          category: 'Performance',
          label: 'CLS',
          value: Math.round(metric.value * 1000),
          custom_parameters: {
            metric_name: 'CLS',
            metric_value: metric.value,
            metric_delta: metric.delta,
            metric_id: metric.id
          }
        });
      });

      onFCP((metric) => {
        this.trackEvent({
          action: 'web_vital',
          category: 'Performance',
          label: 'FCP',
          value: Math.round(metric.value),
          custom_parameters: {
            metric_name: 'FCP',
            metric_value: metric.value,
            metric_delta: metric.delta,
            metric_id: metric.id
          }
        });
      });

      onLCP((metric) => {
        this.trackEvent({
          action: 'web_vital',
          category: 'Performance',
          label: 'LCP',
          value: Math.round(metric.value),
          custom_parameters: {
            metric_name: 'LCP',
            metric_value: metric.value,
            metric_delta: metric.delta,
            metric_id: metric.id
          }
        });
      });

      onTTFB((metric) => {
        this.trackEvent({
          action: 'web_vital',
          category: 'Performance',
          label: 'TTFB',
          value: Math.round(metric.value),
          custom_parameters: {
            metric_name: 'TTFB',
            metric_value: metric.value,
            metric_delta: metric.delta,
            metric_id: metric.id
          }
        });
      });

      onINP((metric) => {
        this.trackEvent({
          action: 'web_vital',
          category: 'Performance',
          label: 'INP',
          value: Math.round(metric.value),
          custom_parameters: {
            metric_name: 'INP',
            metric_value: metric.value,
            metric_delta: metric.delta,
            metric_id: metric.id
          }
        });
      });
    } catch (error) {
      console.warn('Failed to load web-vitals:', error);
    }
  }

  // Track errors
  private trackErrors() {
    window.addEventListener('error', (event) => {
      this.trackEvent({
        action: 'javascript_error',
        category: 'Error',
        label: event.message,
        custom_parameters: {
          error_message: event.message,
          error_filename: event.filename,
          error_lineno: event.lineno,
          error_colno: event.colno,
          error_stack: event.error?.stack
        }
      });
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.trackEvent({
        action: 'unhandled_promise_rejection',
        category: 'Error',
        label: event.reason?.message || 'Unknown',
        custom_parameters: {
          error_reason: event.reason?.message || String(event.reason),
          error_stack: event.reason?.stack
        }
      });
    });
  }

  // Set user ID
  setUserId(userId: string) {
    this.userId = userId;
    
    if (this.isInitialized && window.gtag) {
      window.gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX', {
        user_id: userId
      });
    }
  }

  // Track e-commerce events
  trackPurchase(transactionId: string, value: number, currency: string = 'USD', items: any[] = []) {
    this.trackEvent({
      action: 'purchase',
      category: 'E-commerce',
      value: Math.round(value * 100), // Convert to cents
      custom_parameters: {
        transaction_id: transactionId,
        value: value,
        currency: currency,
        items: items
      }
    });
  }

  // Track service interactions
  trackServiceView(serviceName: string, serviceCategory: string) {
    this.trackEvent({
      action: 'service_view',
      category: 'Service',
      label: serviceName,
      custom_parameters: {
        service_name: serviceName,
        service_category: serviceCategory
      }
    });
  }

  // Track AI tool usage
  trackAIToolUsage(toolName: string, action: string, result?: string) {
    this.trackEvent({
      action: 'ai_tool_usage',
      category: 'AI Tools',
      label: toolName,
      custom_parameters: {
        tool_name: toolName,
        tool_action: action,
        tool_result: result
      }
    });
  }

  // Process queued events
  private processQueue() {
    while (this.queue.length > 0) {
      const event = this.queue.shift();
      if (event) {
        this.trackEvent(event);
      }
    }
  }

  // Helper methods
  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private getContentGroup(): string {
    const path = window.location.pathname;
    if (path.startsWith('/ai-')) return 'AI Services';
    if (path.startsWith('/zion-ai-')) return 'AI Tools';
    if (path.startsWith('/it-')) return 'IT Services';
    if (path.startsWith('/cloud-')) return 'Cloud Services';
    return 'General';
  }

  private getPageType(): string {
    const path = window.location.pathname;
    if (path === '/') return 'Homepage';
    if (path.startsWith('/blog')) return 'Blog';
    if (path.startsWith('/case-studies')) return 'Case Studies';
    if (path.startsWith('/contact')) return 'Contact';
    if (path.startsWith('/pricing')) return 'Pricing';
    return 'Content Page';
  }

  private isDownloadLink(href: string): boolean {
    const downloadExtensions = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.zip', '.rar'];
    return downloadExtensions.some(ext => href.toLowerCase().includes(ext));
  }

  private getFileName(href: string): string {
    return href.split('/').pop() || 'unknown';
  }
}

// Export singleton instance
export const analytics = new AnalyticsManager();

// Export individual functions for convenience
export const {
  trackPageView,
  trackEvent,
  setUserId,
  trackPurchase,
  trackServiceView,
  trackAIToolUsage
} = analytics;