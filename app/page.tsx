'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('./components/ContentStatistics'));
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));

// Preload critical components
const preloadComponents = () => {
  if (typeof window !== 'undefined') {
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

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    preloadComponents();
    return () => clearTimeout(timer);
  }, []);

  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number'
      });
    }
  }, []);

  const microSAASServices = [
    {
      title: 'AI Project Manager',
      description: 'Intelligent project planning with AI-powered resource optimization and timeline prediction',
      icon: '📊',
      price: '$99/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy'],
      link: '/ai-project-manager',
      popular: true
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automate your social media with AI-powered content creation and smart scheduling',
      icon: '📱',
      price: '$79/month',
      features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence'],
      benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach'],
      link: '/ai-social-media-manager',
      popular: true
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics',
      icon: '📈',
      price: '$149/month',
      features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift'],
      link: '/ai-analytics-dashboard',
      popular: true
    },
    {
      title: 'AI Email Marketing',
      description: 'Transform your email marketing with AI-powered content generation and automation',
      icon: '📧',
      price: '$99/month',
      features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns'],
      benefits: ['65% open rate increase', '40% revenue growth', '80% time saved'],
      link: '/ai-email-marketing',
      popular: true
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Provide 24/7 intelligent customer support with AI-powered chatbot',
      icon: '🤖',
      price: '$149/month',
      features: ['Natural language processing', '24/7 availability', 'Human handoff', 'Analytics & insights'],
      benefits: ['90% response time reduction', '45% satisfaction increase', '80% queries handled automatically'],
      link: '/ai-customer-support-bot',
      popular: true
    },
    {
      title: 'AI Code Review Assistant',
      description: 'Advanced automated code analysis with AI-powered bug detection and optimization',
      icon: '🔍',
      price: '$89/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Git integration'],
      benefits: ['70% fewer bugs', '15+ hours saved/week', 'Improved code quality'],
      link: '/ai-code-generation',
      popular: false
    },
    {
      title: 'AI Content Generator',
      description: 'Create high-quality content at scale with AI-powered writing tools',
      icon: '✍️',
      price: '$69/month',
      features: ['Blog posts & articles', 'Social media content', 'Product descriptions', 'SEO optimization'],
      benefits: ['10x content production', '50% cost reduction', 'Higher engagement rates'],
      link: '/ai-content-generation',
      popular: false
    },
    {
      title: 'AI SEO Optimizer',
      description: 'Boost your search rankings with AI-powered SEO analysis and optimization',
      icon: '🎯',
      price: '$79/month',
      features: ['Keyword research', 'Content optimization', 'Technical SEO', 'Competitor analysis'],
      benefits: ['300% traffic increase', '50% ranking improvement', 'Automated optimization'],
      link: '/ai-seo-optimizer',
      popular: false
    },
    {
      title: 'AI Invoice Generator',
      description: 'Automate invoicing with AI-powered invoice creation and payment tracking',
      icon: '📄',
      price: '$49/month',
      features: ['Automated invoicing', 'Payment tracking', 'Tax calculations', 'Multi-currency support'],
      benefits: ['90% time saved', 'Zero errors', 'Faster payments'],
      link: '/ai-invoice-generator',
      popular: false
    },
    {
      title: 'AI Lead Scoring',
      description: 'Identify high-value prospects with AI-powered lead qualification',
      icon: '🎯',
      price: '$129/month',
      features: ['Lead scoring', 'Behavioral analysis', 'Predictive modeling', 'CRM integration'],
      benefits: ['60% conversion increase', '40% sales efficiency', 'Better lead quality'],
      link: '/ai-lead-scoring',
      popular: false
    },
    {
      title: 'AI Sales Forecasting',
      description: 'Predict sales outcomes with AI-powered forecasting and analytics',
      icon: '📊',
      price: '$199/month',
      features: ['Sales forecasting', 'Pipeline analysis', 'Revenue prediction', 'Risk assessment'],
      benefits: ['85% accuracy', 'Better planning', 'Reduced uncertainty'],
      link: '/ai-sales-forecasting',
      popular: false
    },
    {
      title: 'AI E-commerce Optimizer',
      description: 'Maximize your online store performance with AI-powered optimization',
      icon: '🛒',
      price: '$179/month',
      features: ['Product recommendations', 'Price optimization', 'Inventory management', 'Customer insights'],
      benefits: ['35% sales increase', '25% conversion boost', 'Reduced cart abandonment'],
      link: '/ai-ecommerce-optimizer',
      popular: false
    }
  ];

  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics and decision-making',
      icon: Brain,
      price: '$1,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring'],
      color: 'text-purple-400'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis and language understanding',
      icon: MessageSquare,
      price: '$1,200/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],
      color: 'text-blue-400'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection and recognition',
      icon: Eye,
      price: '$1,800/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition'],
      color: 'text-green-400'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities',
      icon: Zap,
      price: '$1,400/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'],
      color: 'text-cyan-400'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Services',
      description: 'Cloud migration, setup, and optimization services',
      icon: Cloud,
      price: '$1,299/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration'],
      color: 'text-blue-400'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions with threat detection and prevention',
      icon: Shield,
      price: '$1,599/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
      color: 'text-red-400'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing and deployment',
      icon: Settings,
      price: '$1,199/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup'],
      color: 'text-green-400'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning',
      icon: Database,
      price: '$899/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening'],
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
      {/* Navigation */}
      <Navigation />
      
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Content Promotion Banner */}
      <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
        <ContentPromotionBanner />
      </Suspense>

      <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
        {/* Hero Section */}
        <section
          className={`text-center mb-16 transition-all duration-1000 cyber-scan-line ${
            isLoaded && isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          aria-labelledby="hero-heading"
        >
          <div className="max-w-6xl mx-auto">
            <h1 
              id="hero-heading" 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch"
              data-text="Zion Tech Group"
            >
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect" role="doc-subtitle">
              Advanced AI and IT Solutions
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
              Transform your business with our cutting-edge technology and achieve unprecedented growth.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12">
              <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🚀</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">AI-Powered Solutions</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
              </div>
              <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-2xl sm:text-3xl mb-3 neon-pulse">⚡</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">Proven Results</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
              </div>
              <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🔒</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">Enterprise Security</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
              </div>
              <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1 xl:col-span-1">
                <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🌐</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">Global Reach</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Serving clients worldwide with 24/7 support and multi-language capabilities</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Section */}
        <section className="mb-16" aria-labelledby="micro-saas-heading">
          <h2 id="micro-saas-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Micro SAAS Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
            Powerful AI-powered tools designed for modern businesses. Start with any solution and scale as you grow.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12">
            {microSAASServices.map((service, index) => (
              <Suspense key={index} fallback={<ServiceCardSkeleton />}>
                <article className={`quantum-card p-4 sm:p-6 energy-pulse ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-2 -right-2 bg-cyan-400 text-slate-900 px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </div>
                  )}
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">{service.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                  <div className="text-center mb-4">
                    <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2 neon-text">{service.price}</div>
                    <div className="text-xs sm:text-sm text-gray-400">per month</div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <a 
                      href={service.link} 
                      className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow"
                    >
                      Learn More →
                    </a>
                  </div>
                </article>
              </Suspense>
            ))}
          </div>
        </section>

        {/* AI Services Section */}
        <section className="mb-16" aria-labelledby="ai-services-heading">
          <h2 id="ai-services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            AI Services & Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
            Comprehensive AI solutions designed to transform your business operations and drive innovation
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12">
            {aiServices.map((service, index) => (
              <Suspense key={index} fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                  <div className="text-center mb-4">
                    <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2 neon-text">{service.price}</div>
                    <div className="text-xs sm:text-sm text-gray-400">per month</div>
                  </div>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </article>
              </Suspense>
            ))}
          </div>
        </section>

        {/* IT Services Section */}
        <section className="mb-16" aria-labelledby="it-services-heading">
          <h2 id="it-services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            IT Services & Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
            Complete IT infrastructure and support services to keep your business running smoothly
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12">
            {itServices.map((service, index) => (
              <Suspense key={index} fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                  <div className="text-center mb-4">
                    <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2 neon-text">{service.price}</div>
                    <div className="text-xs sm:text-sm text-gray-400">per month</div>
                  </div>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </article>
              </Suspense>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Get started with our AI-powered solutions and see results in 30 days
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Inquiry"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-cyan-100">
              <p>Contact: kleber@ziontechgroup.com | Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
