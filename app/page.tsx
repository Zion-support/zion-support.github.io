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
    // Productivity & Management Tools
    {
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment. Trusted by 10,000+ teams worldwide.',
      icon: '📊',
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Resource optimization', 'Gantt charts', 'Time tracking'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity',
      rating: 4.9,
      users: '10,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Smart Calendar Pro',
      description: 'Revolutionary calendar that learns your patterns and automatically optimizes your schedule for maximum productivity and work-life balance.',
      icon: '📅',
      price: '$59/month',
      originalPrice: '$89/month',
      features: ['Smart scheduling', 'Pattern learning', 'Conflict resolution', 'Time blocking', 'Meeting optimization', 'Work-life balance', 'Integration support', 'Mobile sync'],
      benefits: ['50% time saved', '90% fewer conflicts', 'Perfect work-life balance', '25% more productive'],
      link: '/ai-smart-calendar',
      popular: true,
      category: 'Productivity',
      rating: 4.8,
      users: '5,000+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Voice Cloning Studio Pro',
      description: 'Professional voice cloning and synthesis platform for content creators, marketers, and businesses. Create natural-sounding voiceovers in minutes.',
      icon: '🎤',
      price: '$149/month',
      originalPrice: '$199/month',
      features: ['Voice cloning', 'Text-to-speech', 'Emotion control', 'Multiple languages', 'Real-time processing', 'API integration', 'Custom voices', 'Batch processing'],
      benefits: ['95% voice accuracy', '80% cost reduction', '10x faster production', 'Unlimited usage'],
      link: '/ai-voice-cloning-studio',
      popular: false,
      category: 'Creative',
      rating: 4.7,
      users: '2,500+',
      freeTrial: '3 days'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8">
            Advanced AI and IT Solutions
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto">
            Transform your business with cutting-edge AI technology, quantum computing, and digital transformation services. 
            We deliver enterprise-grade solutions that drive innovation and growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started Today
            </a>
            <a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Call: (302) 464-0950
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI-Powered Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT services designed to accelerate your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAASServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                    {service.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{service.originalPrice}</span>
                    )}
                  </div>
                  {service.popular && (
                    <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-blue-500 mr-2">→</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <span>⭐ {service.rating}</span>
                  <span>{service.users} users</span>
                  <span>{service.freeTrial} free trial</span>
                </div>

                <a
                  href={service.link}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 block"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-slate-800/30 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your AI and IT needs
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl mb-2">📞</div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a 
                  href="tel:+13024640950" 
                  onClick={handlePhoneClick}
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  {contactInfo.phone}
                </a>
              </div>
              
              <div className="text-center">
                <div className="text-2xl mb-2">✉️</div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="text-center">
                <div className="text-2xl mb-2">📍</div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-cyan-400">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;