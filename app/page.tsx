import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import FuturisticNavigation from './components/FuturisticNavigation';
import FuturisticFooter from './components/FuturisticFooter';
import { ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Lock, Award, TrendingUp, Users, Globe } from 'lucide-react';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('./components/ContentStatistics'));
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="cyber-card p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-700 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded w-5/6"></div>
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
    return () => clearTimeout(timer);
  }, []);

  // Analytics tracking for phone clicks
  const handlePhoneClick = useCallback(() => {
    if (
      typeof window !== 'undefined' &&
      (
        window as unknown as {
          gtag?: (command: string, action: string, parameters: Record<string, unknown>) => void;
        }
      ).gtag
    ) {
      (
        window as unknown as {
          gtag: (command: string, action: string, parameters: Record<string, unknown>) => void;
        }
      ).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number',
      });
    }
  }, []);

  const microSAASServices = [
    {
      title: 'AI Code Review Assistant',
      description: 'Automated code analysis, bug detection, and security vulnerability scanning for development teams.',
      icon: '🔍',
      price: '$89/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Git integration'],
      benefits: ['Reduce bugs by 70%', 'Improve code quality', 'Save 10+ hours/week'],
      marketPrice: '$150-300/month',
      category: 'Developer Tools',
      popular: true
    },
    {
      title: 'AI Document Intelligence',
      description: 'Advanced document processing with OCR, data extraction, and intelligent classification.',
      icon: '📄',
      price: '$149/month',
      features: ['OCR text extraction', 'Document classification', 'Data validation', 'Workflow automation'],
      benefits: ['Process documents 10x faster', 'Eliminate manual data entry', '99.5% accuracy rate'],
      marketPrice: '$200-500/month',
      category: 'Document Processing'
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated insights.',
      icon: '📊',
      price: '$99/month',
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom reports', 'API integration'],
      benefits: ['Increase decision speed by 40%', 'Reduce manual reporting by 80%', 'Identify trends early'],
      marketPrice: '$150-300/month',
      category: 'Analytics'
    },
    {
      title: 'Smart API Testing Suite',
      description: 'Automated API testing with intelligent test generation and performance monitoring.',
      icon: '🔌',
      price: '$79/month',
      features: ['Automated test generation', 'Performance testing', 'Load testing', 'API documentation'],
      benefits: ['Catch bugs 90% faster', 'Improve API reliability', 'Reduce testing time by 80%'],
      marketPrice: '$120-250/month',
      category: 'Developer Tools'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot with natural language processing and context-aware responses.',
      icon: '🤖',
      price: '$199/month',
      features: ['Natural language processing', 'Context-aware responses', 'Multi-language support', 'CRM integration'],
      benefits: ['Reduce support costs by 60%', 'Provide 24/7 support', 'Improve response time'],
      marketPrice: '$300-600/month',
      category: 'Customer Service'
    },
    {
      title: 'Smart Email Marketing Platform',
      description: 'AI-driven email campaigns with personalization, A/B testing, and optimal send times.',
      icon: '📧',
      price: '$149/month',
      features: ['Smart segmentation', 'A/B testing automation', 'Send time optimization', 'Content personalization'],
      benefits: ['Increase open rates by 35%', 'Boost conversion by 50%', 'Save 15 hours/week'],
      marketPrice: '$200-400/month',
      category: 'Marketing'
    }
  ];

  const coreServices = [
    {
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.',
      icon: <Brain className="w-8 h-8" />,
      price: 'Starting at $1,500/month',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT solutions including cloud, security, DevOps, and infrastructure management.',
      icon: <Cloud className="w-8 h-8" />,
      price: 'Starting at $1,200/month',
      features: ['Cloud Infrastructure', 'Cybersecurity', 'DevOps & CI/CD', 'Database Administration'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing capabilities for complex problem solving and optimization.',
      icon: <Zap className="w-8 h-8" />,
      price: 'Custom Pricing',
      features: ['Quantum Algorithms', 'Quantum Security', 'Optimization', 'Simulation'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing and self-optimizing systems for enterprise operations and infrastructure.',
      icon: <Shield className="w-8 h-8" />,
      price: 'Starting at $2,500/month',
      features: ['Self-Healing Infrastructure', 'Automated Operations', 'Intelligent Monitoring', 'Adaptive Learning'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      </div>

      {/* Navigation */}
      <FuturisticNavigation />
      
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Content Promotion Banner */}
      <Suspense fallback={<div className="h-16 bg-gray-800 animate-pulse"></div>}>
        <ContentPromotionBanner />
      </Suspense>

      <main id="main-content" className="relative z-10 container mx-auto px-4 py-16" role="main">
        {/* Hero Section */}
        <section
          className={`text-center mb-20 transition-all duration-1000 ${
            isLoaded && isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          aria-labelledby="hero-heading"
        >
          <div className="mb-8">
            <div className="inline-block p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-6">
              <div className="text-6xl animate-pulse">⚡</div>
            </div>
          </div>
          
          <h1 id="hero-heading" className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            Advanced AI & Technology Solutions
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
            Leading provider of enterprise AI solutions, digital transformation, and cutting-edge technology services. 
            Transform your business with our proven strategies delivering <span className="text-cyan-400 font-bold">$50M+ annual savings</span> and <span className="text-purple-400 font-bold">95% process automation</span>.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="cyber-card p-8 group hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 group-hover:animate-bounce">🚀</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">AI-Powered Solutions</h3>
              <p className="text-gray-300 leading-relaxed">
                Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies
              </p>
            </div>
            <div className="cyber-card p-8 group hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 group-hover:animate-bounce">⚡</div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Proven Results</h3>
              <p className="text-gray-300 leading-relaxed">
                Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients
              </p>
            </div>
            <div className="cyber-card p-8 group hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 group-hover:animate-bounce">🔒</div>
              <h3 className="text-xl font-bold text-pink-400 mb-4">Enterprise Security</h3>
              <p className="text-gray-300 leading-relaxed">
                Bank-level security and compliance for your critical data and infrastructure
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="cyber-button px-8 py-4 text-lg group"
            >
              <span className="flex items-center">
                📞 Call Now: +1 302 464 0950
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="px-8 py-4 text-lg border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 font-medium group"
            >
              <span className="flex items-center">
                ✉️ Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </section>

        {/* Micro SAAS Services Section */}
        <section className="mb-20" aria-labelledby="micro-saas-heading">
          <div className="text-center mb-12">
            <h2 id="micro-saas-heading" className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Affordable, powerful AI-driven tools for modern businesses. Start from $79/month with instant setup and 24/7 support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {microSAASServices.map((service, index) => (
              <div key={index} className={`cyber-card p-6 group hover:scale-105 transition-all duration-300 ${
                service.popular ? 'ring-2 ring-cyan-400' : ''
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">{service.price}</div>
                  <div className="text-sm text-gray-500">Market: {service.marketPrice}</div>
                </div>
                
                <div className="mb-4">
                  <div className="text-xs font-semibold text-purple-400 mb-2 uppercase tracking-wider">{service.category}</div>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <a 
                    href="/micro-saas"
                    className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 font-medium text-sm group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="/micro-saas"
              className="cyber-button px-8 py-4 text-lg group"
            >
              View All Micro SAAS Solutions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="mb-20" aria-labelledby="core-services-heading">
          <div className="text-center mb-12">
            <h2 id="core-services-heading" className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <div key={index} className="cyber-card p-8 group hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <div className="text-xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <a 
                    href={`/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 font-medium group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="cyber-card p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Proven Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="group">
                <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">$50M+</div>
                <div className="text-gray-300">Annual Savings</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">95%</div>
                <div className="text-gray-300">Process Automation</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-pink-400 mb-2 group-hover:scale-110 transition-transform">300%</div>
                <div className="text-gray-300">Average ROI</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform">500+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Carousel */}
        <Suspense fallback={<div className="h-64 bg-gray-800 rounded-lg animate-pulse"></div>}>
          <ContentCarousel />
        </Suspense>

        {/* Dynamic Content Showcase */}
        <Suspense fallback={<div className="h-64 bg-gray-800 rounded-lg animate-pulse"></div>}>
          <DynamicContentShowcase />
        </Suspense>

        {/* Content Statistics */}
        <Suspense fallback={<div className="h-32 bg-gray-800 rounded-lg animate-pulse"></div>}>
          <ContentStatistics />
        </Suspense>

        {/* Content Newsletter Signup */}
        <Suspense fallback={<div className="h-32 bg-gray-800 rounded-lg animate-pulse"></div>}>
          <ContentNewsletterSignup />
        </Suspense>
      </main>
      
      {/* Footer */}
      <FuturisticFooter />
    </div>
  );
};

export default HomePage;