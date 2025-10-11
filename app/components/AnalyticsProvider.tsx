'use client';
import React from 'react';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target } from 'lucide-react';

<<<<<<< HEAD
import React from 'react';
interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any&gt;) =&gt; void;
  trackPageView: (pageName: string, pagePath: string) =&gt; void;
}
'use client'
import React from 'react';
    }
  }

        page_title: pageName,
        page_location: window.location.origin + pagePath,})
    }

    // Console logging for development;
    if (process.env.NODE_ENV === 'development') {console.log('Page View:', pageName, pagePath)}}
  const trackPageView = (pageName: string) => {
    if (!isInitialized) return

    // Track page view
    if (typeof window !== 'undefined') {
      console.log('Page View:', pageName)
      
      // Example: Send to Google Analytics
      // gtag('config', 'GA_MEASUREMENT_ID', {
      //   page_title: pageName,
      //   page_location: window.location.href
      // })
    }
  }

      // Custom analytics tracking
      if (enableDebug) {
        console.log('Analytics Event:', eventName, parameters);
      }

      // Send to custom analytics endpoint
      fetch('/api/analytics/event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: eventName,
          parameters,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          userAgent: navigator.userAgent
        })
      }).catch(error => {
        if (enableDebug) {
          console.error('Analytics tracking error:', error);
        }
      });

    } catch (error) {
      if (enableDebug) {
        console.error('Analytics error:', error);
      }
    }
  };

  const trackPageView = (pageName: string, pagePath: string) => {

  const value: AnalyticsContextType = {,
    trackEvent,
=======
interface AnalyticsProviderProps {
  className?: string;
  children?: React.ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ className = '', children }) => {
  return (
    <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group ${className}`}>
      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Brain className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">AnalyticsProvider Title</h3>
      <p className="text-gray-300 mb-4">AnalyticsProvider description goes here.</p>
      {children}
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
  );
};

export default AnalyticsProvider;