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

  const microSAASServices = [
    {
      title: 'AI Project Manager Pro',
      description: 'Revolutionary project management with quantum-inspired algorithms, real-time collaboration, and predictive analytics. Used by Fortune 500 companies.',
      icon: '📊',
      price: '$199/month',
      originalPrice: '$299/month',
      features: ['Quantum task optimization', 'Real-time collaboration', 'Predictive analytics', 'AI risk assessment', 'Resource optimization', 'Gantt charts', 'Time tracking', 'Team insights'],
      benefits: ['60% productivity increase', '85% fewer delays', '95% planning accuracy', '40% cost reduction'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity',
      rating: 4.9,
      users: '25,000+',
      freeTrial: '30 days'
    },
    {
      title: 'AI Smart Calendar Pro',
      description: 'Advanced calendar AI that learns your work patterns, optimizes meetings, and prevents burnout. Integrates with 50+ calendar apps.',
      icon: '📅',
      price: '$89/month',
      originalPrice: '$129/month',
      features: ['Smart scheduling', 'Meeting optimization', 'Burnout prevention', 'Calendar integration', 'Time blocking', 'Automated reminders', 'Conflict resolution', 'Productivity insights'],
      benefits: ['50% fewer meeting conflicts', '30% time savings', 'Better work-life balance', 'Increased focus time'],
      link: '/ai-smart-calendar',
      popular: false,
      category: 'Productivity',
      rating: 4.8,
      users: '15,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Content Writer Pro',
      description: 'Professional content creation with advanced AI that understands your brand voice and industry. Generate high-quality content at scale.',
      icon: '✍️',
      price: '$129/month',
      originalPrice: '$199/month',
      features: ['Blog post generation', 'Social media content', 'Email marketing copy', 'SEO optimization', 'Brand voice training', 'Multi-language support', 'Content calendar', 'Performance analytics'],
      benefits: ['10x faster content creation', '95% SEO score average', 'Consistent brand voice', '50+ language support'],
      link: '/ai-content-writer',
      popular: true,
      category: 'Content',
      rating: 4.7,
      users: '35,000+',
      freeTrial: '7 days'
    }
  ];

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

          {/* Micro SaaS Services Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8">Our Micro SaaS Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSAASServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                      {service.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="ml-1">{service.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{service.users} users</span>
                      <span>•</span>
                      <span>{service.freeTrial} free trial</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <span className="text-green-400 mr-2">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;