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

  const services = [
    {
      title: 'AI Smart Calendar Pro',
      description: 'Revolutionary calendar management with AI-powered scheduling, conflict resolution, and intelligent meeting optimization. Used by Fortune 500 companies.',
      icon: '📅',
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['Smart scheduling', 'Conflict resolution', 'Productivity analytics', 'Team coordination', 'Meeting optimization', 'Time blocking', 'Priority management', 'Integration support'],
      benefits: ['40% time savings', 'Zero scheduling conflicts', 'Improved productivity', 'Better work-life balance'],
      link: '/ai-smart-calendar',
      popular: true,
      category: 'Productivity',
      rating: 4.8,
      users: '35,000+',
      freeTrial: '21 days',
      realFeatures: ['Google Calendar sync', 'Outlook integration', 'Zoom scheduling', 'Calendly automation', 'Time zone management', 'Recurring events', 'Conflict resolution', 'Mobile notifications']
    },
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
      features: ['Team analytics', 'Smart notifications', 'Project tracking', 'Communication tools', 'File sharing', 'Meeting insights', 'Workload balancing', 'Performance metrics'],
      benefits: ['30% better team coordination', 'Reduced miscommunication', 'Improved project visibility', 'Enhanced productivity'],
      link: '/ai-team-collaboration',
      popular: false,
      category: 'Collaboration',
      rating: 4.6,
      users: '20,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Data Analytics Pro',
      description: 'Advanced data analytics platform with AI-powered insights, predictive modeling, and automated reporting.',
      icon: '📈',
      price: '$149/month',
      originalPrice: '$199/month',
      features: ['Predictive analytics', 'Automated reporting', 'Data visualization', 'Machine learning models', 'Real-time insights', 'Custom dashboards', 'Data integration', 'Trend analysis'],
      benefits: ['90% faster insights', 'Better decision making', 'Automated reporting', 'Predictive accuracy'],
      link: '/ai-data-analytics',
      popular: true,
      category: 'Analytics',
      rating: 4.8,
      users: '30,000+',
      freeTrial: '21 days'
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
      <PerformanceOptimizer />
      <SEOOptimizer />
      <AccessibilityEnhancer />
      
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI-Powered
              </span>
              <br />
              <span className="text-white">Business Solutions</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI technology, quantum computing, and advanced IT solutions. 
              Join thousands of companies already revolutionizing their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="/contact"
                className="cyber-button text-lg px-8 py-4"
              >
                Get Started Today
              </a>
              <a
                href="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 text-lg"
              >
                Watch Demo
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Companies Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">$2M+</div>
                <div className="text-gray-300">Cost Savings</div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-16 px-4" aria-labelledby="ai-services-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="ai-services-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI Services
              </span>
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Cutting-edge AI solutions designed to revolutionize your business operations and drive unprecedented growth
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <Suspense key={service.title} fallback={<ServiceCardSkeleton />}>
                  <article className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl mb-4 text-center">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                    <p className="text-gray-300 mb-4 text-center leading-relaxed">{service.description}</p>
                    
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">{service.price}</div>
                      {service.originalPrice && (
                        <div className="text-sm text-gray-400 line-through">{service.originalPrice}</div>
                      )}
                    </div>
                    
                    <div className="flex justify-center mb-4">
                      <a
                        href={service.link}
                        className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300"
                      >
                        Learn More →
                      </a>
                    </div>
                    
                    {service.popular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </div>
                    )}
                  </article>
                </Suspense>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4" aria-labelledby="contact-heading">
          <div className="max-w-4xl mx-auto">
            <div className="cyber-card p-8 text-center">
              <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Contact us today for a free consultation and discover how our AI and IT solutions can revolutionize your operations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl mb-2">📞</div>
                  <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-medium">
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📧</div>
                  <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-medium">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📍</div>
                  <h3 className="text-lg font-bold text-white mb-2">Address</h3>
                  <p className="text-gray-300">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="cyber-button"
                >
                  📞 Call Now
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Get Free Quote
                </a>
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