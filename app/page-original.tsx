'use client';

import React, { useCallback, useState, useEffect, _Suspense, lazy, memo } from 'react';
import { _Phone, _Mail, _MapPin, _Clock } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import Analytics from './components/Analytics';
import SecurityEnhancer from './components/SecurityEnhancer';

// Dynamically import heavy components for better performance
const _ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const _ContentCarousel = lazy(() => import('./components/ContentCarousel'));
const _DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
const _ContentStatistics = lazy(() => import('./components/ContentStatistics'));
const _ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));

// Preload critical components
const preloadComponents = () => {
  if (typeof window !== 'undefined') {
    // Preload critical components after initial render
    setTimeout(() => {
      import('./components/ContentPromotionBanner');
      import('./components/ContentCarousel');
    }, 100);
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

const HomePage: React.FC = memo(() => {
  const [_isLoaded, setIsLoaded] = useState(false);
  const [_isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Trigger visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    // Preload components
    preloadComponents();
    return () => clearTimeout(timer);
  }, []);

  // Analytics tracking for phone clicks - optimized
  const _handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement'
        event_label: 'header_phone'
      });
    }
  }, []);

  // Analytics tracking for email clicks - optimized
  const _handleEmailClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'email_click', {
        event_category: 'engagement'
        event_label: 'header_email'
      });
    }
  }, []);

  const features = [
    {
      icon: '🤖'
      title: 'AI-Powered Solutions'
      ,
      description: 'Cutting-edge artificial intelligence to transform your business operations and drive innovation.'
    }
    ,
    { icon: '🛡️'
      title: 'Enterprise Security'
      ,
      description: 'Bank-level security measures to protect your data and ensure compliance with industry standards.'
    }
    ,
    { icon: '👥'
      title: 'Expert Team'
      ,
      description: 'Experienced developers and consultants dedicated to delivering exceptional results for your projects.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' }
    ,
    { number: '50+', label: 'Happy Clients' }
    ,
    { number: '99%', label: 'Client Satisfaction' }
    ,
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <SEOOptimizer
      title="Zion Tech Group - Leading Technology Solutions Provider"
      description="Transform your business with cutting-edge AI, cloud architecture, and innovative development services from Zion Tech Group."
      keywords="AI solutions, cloud architecture, web development, mobile apps, data analytics, cybersecurity"
    >
      <AccessibilityEnhancer>
        <PerformanceOptimizer>
          <Analytics>
            <SecurityEnhancer>
              <Navigation />
              
              <main className="pt-16">
                {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
                  <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                      <h1 className="text-5xl font-bold mb-6">
                        Transform Your Business with 
                        <span className="block text-yellow-300">Cutting-Edge Technology</span>
                      </h1>
                      <p className="text-xl mb-8 text-blue-100">
                        Leading technology solutions provider helping businesses transform their digital
                        presence with AI, cloud architecture, and innovative development services.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors">
                          Get Started Today
                        </button>
                        <button className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Stats Section */}
        <section className="py-16 bg-white">
                  <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                      {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-4xl font-bold text-blue-600 mb-2">
                            {stat.number}
                          </div>
                          <div className="text-gray-600">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Features Section */}
        <section className="py-16 bg-gray-50">
                  <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                      <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                          Why Choose Zion Tech Group?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                          We deliver exceptional results through innovative technology solutions and expert guidance.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                          <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                              {feature.title}
                            </h3>
                            <p className="text-gray-600">
                              {feature.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* CTA Section */}
        <section className="py-16 bg-blue-600">
                  <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                      <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Transform Your Business?
                      </h2>
                      <p className="text-xl text-blue-100 mb-8">
                        Let's discuss how we can help you achieve your technology goals.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                          Start Your Project
                        </button>
                        <button className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                          Schedule Consultation
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </main>

              <Footer />
            </SecurityEnhancer>
          </Analytics>
        </PerformanceOptimizer>
      </AccessibilityEnhancer>
    </SEOOptimizer>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;