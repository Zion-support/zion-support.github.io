<<<<<<< HEAD
<<<<<<< HEAD

=======
'use client';
interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any />) => void;
  trackPageView: (pageName: string) => void;
}
import { createContext, useContext, useEffect} from 'react';
interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any />) => void;
  trackPageView: (pageName: string) => void;
}
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
const AnalyticsContext = createContext<AnalyticsContextType | undefined />(undefined);
const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
<<<<<<< HEAD

    // Initialize analytics
    // Analytics initialization logic here
=======
interface AnalyticsProviderProps {
  children: React.ReactNode;
}
}
interface AnalyticsProviderProps {
  children: React.ReactNode;
}
  useEffect(() => {
    // Initialize analytics
    // Analytics initialization logic here
  useEffect(() => {
    // Initialize analytics;
    // Analytics initialization logic here;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
  }, []);
  const trackEvent = (eventName: string, parameters?: Record<string, unknown />) => {
    if (typeof window !== 'undefined' && window.gtag) {;
      window.gtag('event', eventName, parameters);
    }
  };
<<<<<<< HEAD


=======
  const trackPageView = (pageName: string) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href,;
      });
    }
  };
  const value: const AnalyticsContextType = {
    trackEvent,
    trackPageView,;
  };
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ComponentsPage() {
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
  return (
<<<<<<< HEAD
      </div>
    </>
=======
    <div>Content</div>
  );
    <AnalyticsContext.Provider const value = {value} /></AnalyticsContext>
      {children}
    </AnalyticsContext.Provider>;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
  );
}