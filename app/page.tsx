'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Atom, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

// Dynamically import components for better performance
const Navigation = lazy(() => import('../src/components/Navigation'));
const Footer = lazy(() => import('../src/components/Footer'));
const PerformanceOptimizer = lazy(() => import('../src/components/PerformanceOptimizer'));
const SEOOptimizer = lazy(() => import('../src/components/SEOOptimizer'));
const AccessibilityEnhancer = lazy(() => import('../src/components/AccessibilityEnhancer'));
const Analytics = lazy(() => import('../src/components/Analytics'));
const SecurityEnhancer = lazy(() => import('../src/components/SecurityEnhancer'));

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
    return () => clearTimeout(timer);
  }, []);

  // Analytics tracking for phone clicks
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number'
      });
    }
  }, []);

  // Comprehensive Micro SAAS Services
  const microSAASServices = [
    {
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning with AI-powered resource optimization and timeline prediction',
      icon: '📊',
      price: '$199/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Budget optimization'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automate your social media with AI-powered content creation and smart scheduling',
      icon: '📱',
      price: '$149/month',
      features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence', 'Hashtag optimization', 'Competitor analysis'],
      benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach', '50% better ROI'],
      link: '/ai-social-media-manager',
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics',
      icon: '📈',
      price: '$299/month',
      features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking', 'Predictive modeling', 'Custom reports'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift', '25% faster decisions'],
      link: '/ai-analytics-dashboard',
      popular: true,
      category: 'Analytics'
    },
    {
      title: 'AI Email Marketing Suite',
      description: 'Transform your email marketing with AI-powered content generation and automation',
      icon: '📧',
      price: '$199/month',
      features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns', 'A/B testing', 'Deliverability optimization'],
      benefits: ['65% open rate increase', '40% revenue growth', '80% time saved', '35% higher click rates'],
      link: '/ai-email-marketing',
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Provide 24/7 intelligent customer support with AI-powered chatbot',
      icon: '🤖',
      price: '$249/month',
      features: ['Natural language processing', '24/7 availability', 'Human handoff', 'Analytics & insights', 'Multi-language support', 'Integration APIs'],
      benefits: ['90% response time reduction', '45% satisfaction increase', '80% queries handled automatically', '60% cost savings'],
      link: '/ai-customer-support-bot',
      popular: true,
      category: 'Support'
    },
    {
      title: 'AI Code Review Assistant',
      description: 'Advanced automated code analysis with AI-powered bug detection and optimization',
      icon: '🔍',
      price: '$179/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Git integration', 'Code quality metrics', 'Team collaboration'],
      benefits: ['70% fewer bugs', '15+ hours saved/week', 'Improved code quality', 'Faster deployment cycles'],
      link: '/ai-code-generation',
      popular: false,
      category: 'Development'
    },
    {
      title: 'AI Content Generator',
      description: 'Create high-quality content with AI-powered writing assistance',
      icon: '✍️',
      price: '$99/month',
      features: ['Blog post generation', 'Social media content', 'Email templates', 'SEO optimization', 'Tone adjustment', 'Plagiarism check'],
      benefits: ['10x content production', '50% time savings', 'Better SEO rankings', 'Consistent brand voice'],
      link: '/ai-content-generation',
      popular: false,
      category: 'Content'
    },
    {
      title: 'AI Sales Automation',
      description: 'Automate your sales process with AI-powered lead scoring and follow-up',
      icon: '💰',
      price: '$299/month',
      features: ['Lead scoring', 'Automated follow-up', 'Sales forecasting', 'CRM integration', 'Email sequences', 'Performance analytics'],
      benefits: ['35% more qualified leads', '50% faster sales cycles', '25% revenue increase', 'Automated nurturing'],
      link: '/ai-sales-automation',
      popular: true,
      category: 'Sales'
    },
    {
      title: 'AI Data Visualization',
      description: 'Transform complex data into stunning visualizations with AI insights',
      icon: '📊',
      price: '$199/month',
      features: ['Interactive dashboards', 'AI-powered insights', 'Real-time updates', 'Custom visualizations', 'Export capabilities', 'Team collaboration'],
      benefits: ['Faster data analysis', 'Better decision making', 'Improved presentations', 'Data storytelling'],
      link: '/ai-data-visualization',
      popular: false,
      category: 'Analytics'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Streamline business processes with intelligent workflow automation',
      icon: '⚡',
      price: '$249/month',
      features: ['Process automation', 'Workflow design', 'Integration APIs', 'Error handling', 'Monitoring & alerts', 'Custom triggers'],
      benefits: ['80% process efficiency', '60% time savings', 'Reduced errors', 'Scalable automation'],
      link: '/ai-workflow-automation',
      popular: true,
      category: 'Automation'
    },
    {
      title: 'AI Video Generator',
      description: 'Create professional videos with AI-powered editing and generation',
      icon: '🎥',
      price: '$199/month',
      features: ['AI video creation', 'Auto-editing', 'Voice synthesis', 'Template library', 'Brand customization', 'Export options'],
      benefits: ['10x faster video production', 'Professional quality', 'Cost-effective', 'No editing skills needed'],
      link: '/ai-video-generation',
      popular: false,
      category: 'Media'
    },
    {
      title: 'AI Voice Cloning',
      description: 'Create realistic voice clones for content and communication',
      icon: '🎤',
      price: '$149/month',
      features: ['Voice synthesis', 'Emotion control', 'Multiple languages', 'Real-time processing', 'API integration', 'Quality optimization'],
      benefits: ['Consistent brand voice', 'Multilingual content', 'Accessibility features', 'Cost savings'],
      link: '/ai-voice-cloning',
      popular: false,
      category: 'Media'
    }
  ];

  // Advanced AI Services
  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics and decision-making',
      icon: Brain,
      price: '$2,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring', 'A/B Testing', 'Performance Optimization'],
      benefits: ['50% better predictions', '30% cost reduction', 'Real-time insights', 'Scalable solutions'],
      color: 'text-purple-400',
      category: 'AI/ML'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis and language understanding',
      icon: MessageSquare,
      price: '$2,000/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development', 'Document Processing', 'Voice Recognition'],
      benefits: ['90% accuracy', 'Multi-language support', 'Real-time processing', 'Custom solutions'],
      color: 'text-blue-400',
      category: 'AI/ML'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection and recognition',
      icon: Eye,
      price: '$3,000/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition', 'Quality Control', 'Security Monitoring'],
      benefits: ['99% accuracy', 'Real-time processing', 'Custom models', 'Integration ready'],
      color: 'text-green-400',
      category: 'AI/ML'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities',
      icon: Zap,
      price: '$2,200/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling', 'Integration APIs', 'Monitoring'],
      benefits: ['80% efficiency gain', '24/7 operation', 'Error reduction', 'Cost savings'],
      color: 'text-cyan-400',
      category: 'Automation'
    },
    {
      title: 'Quantum AI Computing',
      description: 'Next-generation quantum computing solutions for complex problem solving',
      icon: Atom,
      price: '$5,000/month',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation', 'Research Support', 'Custom Development'],
      benefits: ['Exponential speedup', 'Complex problem solving', 'Future-proof technology', 'Competitive advantage'],
      color: 'text-yellow-400',
      category: 'Quantum'
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing systems with AI-powered decision making',
      icon: Settings,
      price: '$4,000/month',
      features: ['Self-healing Systems', 'Predictive Maintenance', 'Autonomous Operations', 'Learning Algorithms', 'Safety Protocols', 'Monitoring'],
      benefits: ['99.9% uptime', 'Reduced maintenance', 'Self-optimization', 'Cost efficiency'],
      color: 'text-red-400',
      category: 'Autonomous'
    }
  ];

  // Comprehensive IT Services
  const itServices = [
    {
      title: 'Cloud Services & Migration',
      description: 'Complete cloud migration, setup, and optimization services',
      icon: Cloud,
      price: '$2,500/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Disaster Recovery', 'Monitoring'],
      benefits: ['50% cost reduction', '99.9% uptime', 'Scalable infrastructure', 'Enhanced security'],
      color: 'text-blue-400',
      category: 'Cloud'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Advanced security solutions with threat detection and prevention',
      icon: Shield,
      price: '$3,000/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Compliance', 'Penetration Testing'],
      benefits: ['Zero breaches', '24/7 monitoring', 'Compliance ready', 'Risk mitigation'],
      color: 'text-red-400',
      category: 'Security'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing and deployment',
      icon: Settings,
      price: '$2,200/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'GitOps'],
      benefits: ['10x faster deployment', 'Reduced errors', 'Better collaboration', 'Scalable processes'],
      color: 'text-green-400',
      category: 'DevOps'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning',
      icon: Database,
      price: '$1,800/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Migration', 'Monitoring'],
      benefits: ['50% performance boost', 'Zero data loss', 'Automated backups', 'Cost optimization'],
      color: 'text-purple-400',
      category: 'Database'
    },
    {
      title: 'Network Infrastructure',
      description: 'Design, implement, and manage robust network infrastructure',
      icon: Globe,
      price: '$2,000/month',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', 'Monitoring', 'Troubleshooting', 'Upgrades'],
      benefits: ['99.9% uptime', 'Enhanced security', 'Better performance', 'Scalable design'],
      color: 'text-cyan-400',
      category: 'Network'
    },
    {
      title: 'IT Support & Maintenance',
      description: 'Comprehensive IT support and maintenance services',
      icon: Wrench,
      price: '$1,500/month',
      features: ['24/7 Support', 'Hardware Maintenance', 'Software Updates', 'Troubleshooting', 'User Training', 'Documentation'],
      benefits: ['Quick resolution', 'Proactive maintenance', 'User satisfaction', 'Cost predictability'],
      color: 'text-orange-400',
      category: 'Support'
    }
  ];

  return (
    <>
      <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
        <SEOOptimizer
          title="Zion Tech Group - Advanced AI and IT Solutions"
          description="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology."
          keywords={['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services', 'micro SAAS', 'IT services']}
          canonicalUrl="https://ziontechgroup.com"
          structuredData={{
            '@context': 'https://schema.org',
            '@type': 'TechCompany',
            name: 'Zion Tech Group',
            url: 'https://ziontechgroup.com',
            description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
            foundingDate: '2020',
            numberOfEmployees: '50-100',
            industry: 'Technology',
            services: [
              'AI Solutions',
              'Quantum Computing',
              'Autonomous Systems',
              'Digital Transformation',
              'Cloud Services',
              'Micro SAAS',
              'IT Services',
              'Automation',
              'Business Intelligence'
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-302-464-0950',
              contactType: 'Customer Service',
              areaServed: 'US',
              availableLanguage: 'en'
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: '364 E Main St STE 1008',
              addressLocality: 'Middletown',
              addressRegion: 'DE',
              postalCode: '19709',
              addressCountry: 'US'
            }
          }}
        />
      </Suspense>

      <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
        <PerformanceOptimizer
          enableImageOptimization={true}
          enableLazyLoading={true}
          enableCodeSplitting={true}
          enablePrefetching={true}
        />
      </Suspense>

      <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
        <AccessibilityEnhancer
          enableKeyboardNavigation={true}
          enableScreenReader={true}
          enableHighContrast={true}
          enableFocusManagement={true}
        />
      </Suspense>

      <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
        <SecurityEnhancer
          enableCSP={true}
          enableHSTS={true}
          enableXSSProtection={true}
          enableClickjackingProtection={true}
        />
      </Suspense>

      <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
        <Analytics />
      </Suspense>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
          <Navigation />
        </Suspense>
        
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <section
            className={`text-center mb-16 transition-all duration-1000 ${
              isLoaded && isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            aria-labelledby="hero-heading"
          >
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              >
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium" role="doc-subtitle">
                Advanced AI and IT Solutions
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
                Transform your business with our cutting-edge technology and achieve unprecedented growth.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">🚀</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">AI-Powered Solutions</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">⚡</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Proven Results</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">🔒</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Enterprise Security</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1 xl:col-span-1">
                  <div className="text-2xl sm:text-3xl mb-3">🌐</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Global Reach</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Serving clients worldwide with 24/7 support and multi-language capabilities</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-all duration-300"
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
            <h2 id="micro-saas-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Micro SAAS Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Powerful, affordable AI-powered tools designed for modern businesses
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {microSAASServices.map((service, index) => (
                <article key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:scale-105 transition-all duration-300 ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </div>
                    </div>
                  )}
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400 mb-2">{service.price}</div>
                    <a 
                      href={service.link} 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                    >
                      Learn More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* AI Services Section */}
          <section className="mb-16" aria-labelledby="ai-services-heading">
            <h2 id="ai-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Advanced AI Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Enterprise-grade artificial intelligence solutions for complex business challenges
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {aiServices.map((service, index) => (
                <article key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:scale-105 transition-all duration-300">
                  <div className={`text-4xl mb-4 ${service.color}`}>
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400 mb-2">{service.price}</div>
                    <a 
                      href={`/ai-services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                    >
                      Learn More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* IT Services Section */}
          <section className="mb-16" aria-labelledby="it-services-heading">
            <h2 id="it-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              IT Services & Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Comprehensive IT infrastructure and support services for modern businesses
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {itServices.map((service, index) => (
                <article key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:scale-105 transition-all duration-300">
                  <div className={`text-4xl mb-4 ${service.color}`}>
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400 mb-2">{service.price}</div>
                    <a 
                      href={`/it-services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                    >
                      Learn More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-16" aria-labelledby="contact-heading">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
              <h2 id="contact-heading" className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your AI and IT needs. Our experts are ready to help you achieve your goals.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-cyan-400 mb-2" />
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-cyan-400 mb-2" />
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-cyan-400 mb-2" />
                  <h3 className="font-semibold text-white mb-1">Address</h3>
                  <p className="text-cyan-400 text-sm text-center">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Call Now
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse"></div>}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default HomePage;