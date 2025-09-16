import React, { useEffect } from 'react';

interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
}

class AnalyticsManager {
  private events: AnalyticsEvent[] = [];
  private sessionId: string;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.initializeTracking();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeTracking() {
    // Track page views
    this.trackEvent('page_view', 'navigation', 'view', window.location.pathname);
    
    // Track user interactions
    this.trackScrollDepth();
    this.trackClickEvents();
    this.trackFormInteractions();
  }

  trackEvent(event: string, category: string, action: string, label?: string, value?: number) {
    const analyticsEvent: AnalyticsEvent = {
      event,
      category,
      action,
      label,
      value,
      timestamp: Date.now()
    };

    this.events.push(analyticsEvent);
    
    // Send to analytics service (placeholder)
    this.sendToAnalytics(analyticsEvent);
    
    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', analyticsEvent);
    }
  }

  private sendToAnalytics(event: AnalyticsEvent) {
    // In a real application, this would send to Google Analytics, Mixpanel, etc.
    // For now, we'll just store locally
    const storedEvents = JSON.parse(localStorage.getItem('analytics_events') || '[]');
    storedEvents.push(event);
    localStorage.setItem('analytics_events', JSON.stringify(storedEvents.slice(-100))); // Keep last 100 events
  }

  private trackScrollDepth() {
    let maxScroll = 0;
    
    const trackScroll = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        // Track milestone scroll depths
        if ([25, 50, 75, 90, 100].includes(scrollPercent)) {
          this.trackEvent('scroll_depth', 'engagement', 'scroll', `${scrollPercent}%`, scrollPercent);
        }
      }
    };

    window.addEventListener('scroll', trackScroll, { passive: true });
  }

  private trackClickEvents() {
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      
      // Track button clicks
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        const buttonText = target.textContent || target.closest('button')?.textContent || 'Unknown';
        this.trackEvent('button_click', 'interaction', 'click', buttonText);
      }
      
      // Track link clicks
      if (target.tagName === 'A' || target.closest('a')) {
        const linkText = target.textContent || target.closest('a')?.textContent || 'Unknown';
        const linkHref = (target as HTMLAnchorElement).href || target.closest('a')?.href || '';
        this.trackEvent('link_click', 'navigation', 'click', linkText, undefined);
      }
    });
  }

  private trackFormInteractions() {
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      this.trackEvent('form_submit', 'interaction', 'submit', form.id || 'unknown_form');
    });

    document.addEventListener('input', (event) => {
      const input = event.target as HTMLInputElement;
      if (input.type === 'email' || input.type === 'text') {
        this.trackEvent('form_input', 'interaction', 'input', input.name || input.placeholder || 'unknown_field');
      }
    });
  }

  trackPageView(page: string) {
    this.trackEvent('page_view', 'navigation', 'view', page);
  }

  trackCustomEvent(eventName: string, properties: Record<string, any>) {
    this.trackEvent('custom_event', 'custom', eventName, JSON.stringify(properties));
  }

  getSessionData() {
    return {
      sessionId: this.sessionId,
      events: this.events,
      totalEvents: this.events.length,
      sessionDuration: Date.now() - parseInt(this.sessionId.split('_')[1])
    };
  }
}

// Create global analytics instance
export const analytics = new AnalyticsManager();

// Analytics Tracker Component
const AnalyticsTracker: React.FC = () => {
  useEffect(() => {
    // Track component mount
    analytics.trackEvent('component_mount', 'lifecycle', 'mount', 'AnalyticsTracker');
    
    // Track page performance
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      analytics.trackEvent('page_performance', 'performance', 'load', 'main_page', Math.round(loadTime));
    });

    return () => {
      analytics.trackEvent('component_unmount', 'lifecycle', 'unmount', 'AnalyticsTracker');
    };
  }, []);

  // This component doesn't render anything visible
  return null;
};

export default AnalyticsTracker;