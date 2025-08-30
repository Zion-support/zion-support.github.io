import React, { useEffect, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3,
  TrendingUp,
  Users,
  Eye,
  MousePointer,
  Clock,
  Globe,
  X,
  Activity,
  Zap,
  Target,
  MapPin,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Settings,
  X,
  Download,
  Share2,
  Filter,
  Calendar,
  RefreshCw
} from 'lucide-react';

interface AnalyticsProps {
  enabled: boolean;
  showMetrics?: boolean;
  enableHeatmaps?: boolean;
  enableSessionRecording?: boolean;
  enableAITracking?: boolean;
}

interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
  sessionId: string;
  userId?: string;
  pageUrl: string;
  userAgent: string;
  referrer: string;
}

export function AdvancedAnalytics({
  enabled,
  showMetrics = false,
  enableHeatmaps = true,
  enableSessionRecording = false,
  enableAITracking = true
}: AnalyticsProps) {
  const [sessionId] = useState(() => generateSessionId());
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [isTracking, setIsTracking] = useState(false);

  // Generate unique session ID
  function generateSessionId(): string {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  // Track custom events
  const trackEvent = useCallback((event: string, category: string, action: string, label?: string, value?: number) => {
    if (!enabled) return;

    const analyticsEvent: AnalyticsEvent = {
      event,
      category,
      action,
      label,
      value,
      timestamp: Date.now(),
      sessionId,
      pageUrl: window.location.href,
      userAgent: navigator.userAgent,
      referrer: document.referrer
    };

    setEvents(prev => [...prev, analyticsEvent]);

    // Send to analytics service (Google Analytics, custom endpoint, etc.)
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }

    // Custom analytics endpoint
    sendToAnalytics(analyticsEvent);
  }, [enabled, sessionId]);

  // Send data to analytics endpoint
  const sendToAnalytics = useCallback(async (event: AnalyticsEvent) => {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });
    } catch (error) {
      console.warn('Failed to send analytics event:', error);
    }
  }, []);

  // Track page views
  const trackPageView = useCallback(() => {
    if (!enabled) return;

    trackEvent('page_view', 'navigation', 'page_view', window.location.pathname);
  }, [enabled, trackEvent]);

  // Track user interactions
  const trackUserInteraction = useCallback((element: HTMLElement, action: string) => {
    if (!enabled) return;

    const category = element.dataset.analyticsCategory || 'user_interaction';
    const label = element.dataset.analyticsLabel || element.textContent?.trim() || 'unknown';
    
    trackEvent('user_interaction', category, action, label);
  }, [enabled, trackEvent]);

  // Track performance metrics
  const trackPerformance = useCallback(() => {
    if (!enabled) return;

    if ('performance' in window) {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (perfData) {
        trackEvent('performance', 'metrics', 'page_load', 'total_load_time', 
          Math.round(perfData.loadEventEnd - perfData.fetchStart));
        
        trackEvent('performance', 'metrics', 'dom_content_loaded', 'dom_content_loaded_time',
          Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart));
        
        trackEvent('performance', 'metrics', 'first_paint', 'first_paint_time',
          Math.round(perfData.responseEnd - perfData.fetchStart));
      }
    }
  }, [enabled, trackEvent]);

  // Track Core Web Vitals
  const trackCoreWebVitals = useCallback(() => {
    if (!enabled) return;

    // LCP (Largest Contentful Paint)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          trackEvent('performance', 'core_web_vitals', 'lcp', 'largest_contentful_paint',
            Math.round(lastEntry.startTime));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('LCP tracking failed:', e);
      }

      // FID (First Input Delay)
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          trackEvent('performance', 'core_web_vitals', 'fid', 'first_input_delay',
            Math.round(lastEntry.processingStart - lastEntry.startTime));
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.warn('FID tracking failed:', e);
      }

      // CLS (Cumulative Layout Shift)
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          trackEvent('performance', 'core_web_vitals', 'cls', 'cumulative_layout_shift',
            Math.round(clsValue * 1000));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.warn('CLS tracking failed:', e);
      }
    }
  }, [enabled, trackEvent]);

  // Track user engagement
  const trackUserEngagement = useCallback(() => {
    if (!enabled) return;

    let startTime = Date.now();
    let isActive = true;

    const trackEngagement = () => {
      if (isActive) {
        const engagementTime = Date.now() - startTime;
        trackEvent('engagement', 'user_behavior', 'session_duration', 'engagement_time', 
          Math.round(engagementTime / 1000));
      }
    };

    // Track when user becomes inactive
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isActive = false;
        trackEngagement();
      } else {
        isActive = true;
        startTime = Date.now();
      }
    };

    // Track when user leaves the page
    const handleBeforeUnload = () => {
      isActive = false;
      trackEngagement();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [enabled, trackEvent]);

  // Enhanced click tracking
  const trackClicks = useCallback(() => {
    if (!enabled) return;

    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        const element = target.tagName === 'BUTTON' || target.tagName === 'A' ? target : 
                       target.closest('button') || target.closest('a') as HTMLElement;
        
        trackUserInteraction(element, 'click');
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [enabled, trackUserInteraction]);

  // Track form interactions
  const trackForms = useCallback(() => {
    if (!enabled) return;

    const handleFormSubmit = (e: Event) => {
      const form = e.target as HTMLFormElement;
      trackEvent('form', 'user_interaction', 'form_submit', form.action || 'unknown_form');
    };

    const handleInputFocus = (e: Event) => {
      const input = e.target as HTMLInputElement;
      trackEvent('form', 'user_interaction', 'input_focus', input.name || input.type);
    };

    document.addEventListener('submit', handleFormSubmit);
    document.addEventListener('focusin', handleInputFocus);

    return () => {
      document.removeEventListener('submit', handleFormSubmit);
      document.removeEventListener('focusin', handleInputFocus);
    };
  }, [enabled, trackEvent]);

  // AI-powered tracking insights
  const enableAITracking = useCallback(() => {
    if (!enabled || !enableAITracking) return;

    // Track user behavior patterns
    let userActions: string[] = [];
    
    const trackUserAction = (action: string) => {
      userActions.push(action);
      
      // Analyze patterns every 10 actions
      if (userActions.length >= 10) {
        analyzeUserBehavior(userActions);
        userActions = [];
      }
    };

    // Simple pattern analysis
    const analyzeUserBehavior = (actions: string[]) => {
      const patterns = {
        'explorer': actions.filter(a => a.includes('navigation')).length,
        'researcher': actions.filter(a => a.includes('search')).length,
        'buyer': actions.filter(a => a.includes('pricing') || a.includes('contact')).length,
        'learner': actions.filter(a => a.includes('documentation') || a.includes('blog')).length
      };

      const dominantPattern = Object.entries(patterns).reduce((a, b) => 
        patterns[a[0] as keyof typeof patterns] > patterns[b[0] as keyof typeof patterns] ? a : b
      )[0];

      trackEvent('ai_insight', 'user_behavior', 'pattern_analysis', dominantPattern);
    };

    // Track all user actions
    const originalTrackEvent = trackEvent;
    trackEvent = (event: string, category: string, action: string, label?: string, value?: number) => {
      originalTrackEvent(event, category, action, label, value);
      trackUserAction(action);
    };
  }, [enabled, enableAITracking, trackEvent]);

  // Initialize analytics
  useEffect(() => {
    if (!enabled) return;

    setIsTracking(true);
    
    // Track initial page view
    trackPageView();
    
    // Track performance metrics
    trackPerformance();
    
    // Track Core Web Vitals
    trackCoreWebVitals();
    
    // Track user engagement
    const cleanupEngagement = trackUserEngagement();
    
    // Track clicks
    const cleanupClicks = trackClicks();
    
    // Track forms
    const cleanupForms = trackForms();
    
    // Enable AI tracking
    enableAITracking();

    return () => {
      cleanupEngagement?.();
      cleanupClicks?.();
      cleanupForms?.();
      setIsTracking(false);
    };
  }, [enabled, trackPageView, trackPerformance, trackCoreWebVitals, trackUserEngagement, trackClicks, trackForms, enableAITracking]);

  // Track route changes for SPA
  useEffect(() => {
    if (!enabled) return;

    const handleRouteChange = () => {
      setTimeout(() => {
        trackPageView();
      }, 100);
    };

    // Listen for popstate events (browser back/forward)
    window.addEventListener('popstate', handleRouteChange);
    
    // For React Router, you might want to use useLocation hook instead
    // This is a fallback for general route changes
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [enabled, trackPageView]);

  // Expose tracking function globally for manual tracking
  useEffect(() => {
    if (!enabled) return;

    (window as any).trackEvent = trackEvent;
    (window as any).trackPageView = trackPageView;
    (window as any).trackUserInteraction = trackUserInteraction;

    return () => {
      delete (window as any).trackEvent;
      delete (window as any).trackPageView;
      delete (window as any).trackUserInteraction;
    };
  }, [enabled, trackEvent, trackPageView, trackUserInteraction]);

  return null; // This component doesn't render anything
}