'use client';

import React, { useState, useEffect, useCallback, lazy, memo, Suspense } from 'react';
import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('./components/ContentStatistics'));
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));

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
  <div className="quantum-card p-4 sm:p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-700 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded w-5/6"></div>
  </div>
));

ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

// Micro SAAS Services Data
const microSaasServices = [
  {
    id: 'ai-content-generator',
    title: 'AI Content Generator Pro',
    description: 'Generate high-quality content, articles, and marketing copy using advanced AI models',
    price: '$29/month',
    features: ['Unlimited content generation', '50+ content templates', 'SEO optimization', 'Multi-language support'],
    category: 'AI Tools',
    icon: '🤖',
    link: '/ai-content-generator'
  },
  {
    id: 'smart-analytics',
    title: 'Smart Analytics Dashboard',
    description: 'Real-time business analytics with AI-powered insights and predictive modeling',
    price: '$49/month',
    features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'API integration'],
    category: 'Analytics',
    icon: '📊',
    link: '/smart-analytics'
  },
  {
    id: 'automation-workflow',
    title: 'Workflow Automation Suite',
    description: 'Automate repetitive tasks and create complex workflows without coding',
    price: '$39/month',
    features: ['Visual workflow builder', '500+ integrations', 'Custom triggers', 'Team collaboration'],
    category: 'Automation',
    icon: '⚡',
    link: '/automation-workflow'
  },
  {
    id: 'ai-chatbot-builder',
    title: 'AI Chatbot Builder',
    description: 'Create intelligent chatbots for customer support and lead generation',
    price: '$19/month',
    features: ['No-code builder', 'Multi-channel deployment', 'Analytics dashboard', 'Custom training'],
    category: 'AI Tools',
    icon: '💬',
    link: '/ai-chatbot-builder'
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization Studio',
    description: 'Transform complex data into stunning, interactive visualizations',
    price: '$35/month',
    features: ['Interactive charts', 'Real-time updates', 'Export options', 'Custom themes'],
    category: 'Data Tools',
    icon: '📈',
    link: '/data-visualization'
  },
  {
    id: 'api-management',
    title: 'API Management Platform',
    description: 'Manage, monitor, and secure your APIs with enterprise-grade tools',
    price: '$79/month',
    features: ['API gateway', 'Rate limiting', 'Analytics', 'Security monitoring'],
    category: 'Development',
    icon: '🔧',
    link: '/api-management'
  }
];

// IT Services Data
const itServices = [
  {
    id: 'cloud-migration',
    title: 'Cloud Migration Services',
    description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime',
    price: 'Starting at $2,500',
    features: ['Zero-downtime migration', 'Cost optimization', 'Security compliance', '24/7 support'],
    category: 'Cloud Services',
    icon: '☁️',
    link: '/cloud-migration'
  },
  {
    id: 'cybersecurity-audit',
    title: 'Cybersecurity Audit & Assessment',
    description: 'Comprehensive security assessment and vulnerability testing',
    price: 'Starting at $1,500',
    features: ['Penetration testing', 'Vulnerability assessment', 'Compliance audit', 'Security roadmap'],
    category: 'Security',
    icon: '🔒',
    link: '/cybersecurity-audit'
  },
  {
    id: 'devops-automation',
    title: 'DevOps Automation',
    description: 'Complete CI/CD pipeline setup and infrastructure automation',
    price: 'Starting at $3,000',
    features: ['CI/CD pipelines', 'Infrastructure as Code', 'Monitoring setup', 'Team training'],
    category: 'DevOps',
    icon: '🚀',
    link: '/devops-automation'
  },
  {
    id: 'database-optimization',
    title: 'Database Optimization',
    description: 'Performance tuning and optimization for MySQL, PostgreSQL, and MongoDB',
    price: 'Starting at $1,200',
    features: ['Performance analysis', 'Query optimization', 'Index tuning', 'Monitoring setup'],
    category: 'Database',
    icon: '🗄️',
    link: '/database-optimization'
  }
];

// AI Services Data
const aiServices = [
  {
    id: 'custom-ai-models',
    title: 'Custom AI Model Development',
    description: 'Build and deploy custom machine learning models for your specific business needs',
    price: 'Starting at $5,000',
    features: ['Custom model training', 'Data preprocessing', 'Model deployment', 'Performance monitoring'],
    category: 'AI Development',
    icon: '🧠',
    link: '/custom-ai-models'
  },
  {
    id: 'nlp-processing',
    title: 'Natural Language Processing',
    description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding',
    price: 'Starting at $2,500',
    features: ['Sentiment analysis', 'Text classification', 'Language translation', 'Chatbot integration'],
    category: 'AI Tools',
    icon: '🗣️',
    link: '/nlp-processing'
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision Solutions',
    description: 'Image and video analysis using advanced computer vision and deep learning',
    price: 'Starting at $3,500',
    features: ['Object detection', 'Image classification', 'Video analysis', 'Real-time processing'],
    category: 'AI Tools',
    icon: '👁️',
    link: '/computer-vision'
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics Platform',
    description: 'Forecast trends and make data-driven decisions with AI-powered predictive models',
    price: 'Starting at $4,000',
    features: ['Trend forecasting', 'Risk assessment', 'Demand prediction', 'Custom algorithms'],
    category: 'Analytics',
    icon: '🔮',
    link: '/predictive-analytics'
  }
];

export default function HomePage() {
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
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number',
      });
    }
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="relative z-10">
          {/* Hero Section */}
          <section 
            className="relative py-20 px-4 text-center overflow-hidden"
            aria-labelledby="hero-heading"
          >
            <div className="max-w-7xl mx-auto">
              <h1 
                id="hero-heading"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 quantum-gradient"
              >
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow" role="doc-subtitle">
                Advanced AI and IT Solutions
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12">
                <a 
                  href="tel:+13024640950" 
                  className="cyber-card px-6 py-3 text-white hover:text-cyan-400 transition-all duration-300"
                  onClick={handlePhoneClick}
                >
                  📞 +1 (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="cyber-card px-6 py-3 text-white hover:text-cyan-400 transition-all duration-300"
                >
                  ✉️ kleber@ziontechgroup.com
                </a>
                <div className="cyber-card px-6 py-3 text-white">
                  📍 364 E Main St STE 1008, Middletown DE 19709
                </div>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 max-w-4xl mx-auto">
                <div className="cyber-card hologram-card p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl mb-3">💰</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Proven Results</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
                </div>
                <div className="cyber-card hologram-card p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
                  <div className="text-2xl sm:text-3xl mb-3">🔒</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Enterprise Security</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
                </div>
                <div className="cyber-card hologram-card p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
                  <div className="text-2xl sm:text-3xl mb-3">⚡</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Rapid Deployment</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Get your AI solutions up and running in weeks, not months</p>
                </div>
              </div>
            </div>
          </section>

          {/* Micro SAAS Services Section */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 quantum-gradient">
                  Micro SAAS Services
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Powerful, affordable tools to accelerate your business growth
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {microSaasServices.map((service) => (
                  <div key={service.id} className="quantum-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 text-sm ml-2">/month</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-center">
                          <span className="text-green-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={service.link}
                      className="block w-full text-center cyber-card py-3 text-white hover:text-cyan-400 transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* IT Services Section */}
          <section className="py-16 px-4 bg-gray-900/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 quantum-gradient">
                  IT Services & Solutions
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Comprehensive IT services to modernize and secure your infrastructure
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {itServices.map((service) => (
                  <div key={service.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-center">
                          <span className="text-green-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={service.link}
                      className="block w-full text-center quantum-card py-3 text-white hover:text-cyan-400 transition-all duration-300"
                    >
                      Get Started
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI Services Section */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 quantum-gradient">
                  AI Services & Solutions
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Cutting-edge AI solutions to transform your business operations
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aiServices.map((service) => (
                  <div key={service.id} className="hologram-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-center">
                          <span className="text-green-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={service.link}
                      className="block w-full text-center cyber-card py-3 text-white hover:text-cyan-400 transition-all duration-300"
                    >
                      Explore Solution
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>}>
            <ContentStatistics />
          </Suspense>

          {/* Content Carousel */}
          <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded-lg"></div>}>
            <ContentCarousel />
          </Suspense>

          {/* Dynamic Content Showcase */}
          <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>}>
            <DynamicContentShowcase />
          </Suspense>

          {/* Newsletter Signup */}
          <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>}>
            <ContentNewsletterSignup />
          </Suspense>
        </main>

        {/* Footer */}
        <Footer />
        
        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </ErrorBoundary>
  );
}