'use client';
import React, { useState, useEffect, useCallback, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('./components/ContentStatistics'));
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));

// Preload critical components
const preloadComponents = () => {
  if (typeof window !== 'undefined') {
    // Use requestIdleCallback for better performance
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        import('./components/ContentPromotionBanner');
        import('./components/ContentCarousel');
        import('./components/DynamicContentShowcase');
      });
    } else {
      setTimeout(() => {
        import('./components/ContentPromotionBanner');
        import('./components/ContentCarousel');
        import('./components/DynamicContentShowcase');
      }, 100);
    }
  }
};

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Trigger visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    // Preload components
    preloadComponents();
    return () => clearTimeout(timer);
  }, []);

  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as { gtag: (command: string, action: string, params: Record<string, string>) => void }).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number',
      });
    }
  }, []);

  // Contact information
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <PerformanceOptimizer />
      <SEOOptimizer />
      <AccessibilityEnhancer />
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Advanced AI and IT Solutions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-2">AI Solutions</h2>
              <p className="text-gray-600">Cutting-edge artificial intelligence services</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-2">IT Services</h2>
              <p className="text-gray-600">Comprehensive IT infrastructure solutions</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-2">Cloud Solutions</h2>
              <p className="text-gray-600">Scalable cloud computing services</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;