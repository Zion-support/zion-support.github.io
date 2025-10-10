'use client';
import React, { useState, useEffect, useCallback, lazy, memo, Suspense } from 'react';
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

  const services = [
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
      freeTrial: '30 days',
      realFeatures: ['OpenAI GPT-4 integration', 'Microsoft Teams sync', 'Slack notifications', 'Jira integration', 'GitHub tracking', 'Calendar sync', 'Email automation', 'Mobile app']
    },
    {
      title: 'AI Smart Calendar Pro',
      description: 'Intelligent calendar management with AI-powered scheduling, conflict resolution, and productivity optimization.',
      icon: '📅',
      price: '$89/month',
      originalPrice: '$129/month',
      features: ['Pattern learning AI', 'Auto-optimization', 'Energy mapping', 'Focus time blocks', 'Meeting intelligence', 'Travel optimization', 'Work-life balance', 'Smart suggestions'],
      benefits: ['35% more productive time', 'Better work-life balance', 'Reduced scheduling stress', 'Optimal energy usage'],
      link: '/ai-smart-calendar',
      popular: true,
      category: 'Productivity',
      rating: 4.8,
      users: '35,000+',
      freeTrial: '21 days',
      realFeatures: ['Google Calendar sync', 'Outlook integration', 'Zoom scheduling', 'Calendly automation', 'Time zone management', 'Recurring events', 'Conflict resolution', 'Mobile notifications']
    },
    {
      title: 'AI Document Intelligence Pro',
      description: 'Transform any document into actionable insights with AI-powered analysis, summarization, and knowledge extraction.',
      icon: '📄',
      price: '$89/month',
      originalPrice: '$129/month',
      features: ['Document analysis', 'Smart summarization', 'Knowledge extraction', 'Search & discovery', 'Version control', 'Collaboration tools', 'OCR processing', 'Multi-format support'],
      benefits: ['80% faster document processing', 'Better knowledge retention', 'Improved search', 'Enhanced collaboration'],
      link: '/ai-document-intelligence',
      popular: true,
      category: 'Productivity',
      rating: 4.7,
      users: '15,000+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Personal Assistant Pro',
      description: 'Your intelligent personal assistant that manages emails, schedules, and tasks with natural language processing.',
      icon: '🤖',
      price: '$49/month',
      originalPrice: '$79/month',
      features: ['Email management', 'Smart scheduling', 'Task automation', 'Voice commands', 'Calendar sync', 'Reminder system', 'Travel planning', 'Expense tracking'],
      benefits: ['50% time savings', 'Never miss important tasks', 'Better organization', 'Reduced stress'],
      link: '/ai-personal-assistant',
      popular: true,
      category: 'Productivity',
      rating: 4.9,
      users: '45,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Team Collaboration Hub',
      description: 'Advanced team collaboration platform with AI-powered insights, smart notifications, and productivity analytics.',
      icon: '👥',
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['Team analytics', 'Smart notifications', 'Project tracking', 'Communication tools', 'File sharing', 'Video conferencing', 'Task management', 'Performance insights'],
      benefits: ['35% team productivity increase', 'Better communication', 'Reduced meetings', 'Improved outcomes'],
      link: '/ai-team-collaboration',
      popular: true,
      category: 'Productivity',
      rating: 4.8,
      users: '25,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Quantum Task Optimizer',
      description: 'Revolutionary quantum-inspired task optimization that processes millions of task combinations to find the perfect workflow. Achieve 99.9% efficiency.',
      icon: '⚛️',
      price: '$199/month',
      originalPrice: '$299/month',
      features: ['Quantum algorithms', 'Multi-dimensional optimization', 'Real-time adaptation', 'Predictive scheduling', 'Energy efficiency', 'Parallel processing', 'Quantum encryption', 'Neural networks'],
      benefits: ['99.9% efficiency', 'Quantum speed', 'Zero waste', 'Future-proof'],
      link: '/ai-quantum-task-optimizer',
      popular: true,
      category: 'Productivity',
      rating: 4.9,
      users: '2,500+',
      freeTrial: '30 days'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <PerformanceOptimizer />
      <SEOOptimizer />
      <AccessibilityEnhancer />
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8">
            AI-Powered Solutions for the Future
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI technology, quantum computing, and intelligent automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our AI Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to accelerate your business growth and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 ${
                  service.popular ? 'ring-2 ring-cyan-400/50' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Popular
                    </span>
                  </div>
                )}

                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-white font-semibold">{service.rating}</span>
                    <span className="text-gray-400 ml-1">({service.users})</span>
                  </div>
                  <span className="text-cyan-400 font-medium">{service.category}</span>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl font-bold text-white">${service.price.split('/')[0]}</span>
                    <span className="text-gray-400 line-through">${service.originalPrice.split('/')[0]}</span>
                  </div>
                  <span className="text-gray-400">per month</span>
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-cyan-400">{contactInfo.phone}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-3xl mb-4">✉️</div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-cyan-400">{contactInfo.email}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-3xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
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