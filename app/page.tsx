'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
import PerformanceImprovements from './components/PerformanceImprovements';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, DollarSign, Award, Rocket, Layers, Workflow, BarChart3, MessageSquare, Headphones, Monitor, HardDrive, Wifi, Printer, Router, Package, Heart, DollarSign as Dollar, Award as Trophy, Rocket as Launch, Layers as Stack, Workflow as Process, BarChart3 as Analytics, MessageSquare as Chat, Headphones as Support, Monitor as Screen, HardDrive as Storage, Wifi as Network, Printer as Print, Router as Gateway, Package as Box, Eye, Mic } from 'lucide-react';

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
}

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
    preloadComponents();
    setIsLoaded(true);
    // Trigger visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number'
      })
    }
  }, []);

  // Real AI Services with actual capabilities and pricing
  const aiServices = [
    {
      icon: Brain,
      title: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis',
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: ['Natural language processing', 'Multi-language support', 'Sentiment analysis', 'CRM integration', 'Real-time learning'],
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions'],
      category: 'Customer Service',
      popular: true
    },
    {
      icon: FileText,
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, and marketing',
      price: '$199/month',
      marketPrice: '$300-1500/month',
      features: ['Blog post generation', 'Social media content', 'Email marketing campaigns', 'SEO optimization', 'Brand voice customization'],
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing'],
      category: 'Content',
      popular: true
    },
    {
      icon: BarChart3,
      title: 'AI Data Analytics',
      description: 'Advanced analytics and business intelligence powered by machine learning algorithms',
      price: '$399/month',
      marketPrice: '$800-3000/month',
      features: ['Predictive analytics', 'Real-time dashboards', 'Automated reporting', 'Anomaly detection', 'Custom data models'],
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization'],
      category: 'Analytics',
      popular: false
    },
    {
      icon: Eye,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation',
      price: '$499/month',
      marketPrice: '$1000-5000/month',
      features: ['Object detection', 'Facial recognition', 'Quality control', 'Security monitoring', 'Real-time processing'],
      benefits: ['Automated quality control', 'Enhanced security', 'Reduced manual inspection', '24/7 monitoring'],
      category: 'Computer Vision',
      popular: false
    },
    {
      icon: MessageSquare,
      title: 'AI Customer Service',
      description: 'Intelligent customer support with automated ticket routing and response generation',
      price: '$349/month',
      marketPrice: '$600-2500/month',
      features: ['Automated ticket routing', 'Response generation', 'Customer sentiment analysis', 'Knowledge base integration', 'Multi-channel support'],
      benefits: ['Faster response times', 'Improved customer satisfaction', 'Reduced support costs', 'Scalable operations'],
      category: 'Customer Service',
      popular: true
    },
    {
      icon: Target,
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing campaigns with personalized content and automated optimization',
      price: '$449/month',
      marketPrice: '$800-3000/month',
      features: ['Personalized campaigns', 'A/B testing automation', 'Customer segmentation', 'Lead scoring', 'ROI optimization'],
      benefits: ['Higher conversion rates', 'Reduced marketing costs', 'Better customer targeting', 'Automated optimization'],
      category: 'Marketing',
      popular: true
    }
  ];

  // IT Services
  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Comprehensive cloud solutions including AWS, Azure, and GCP migration and management',
      price: '$999/month',
      marketPrice: '$2000-8000/month',
      features: ['Cloud migration', 'Infrastructure management', 'Cost optimization', 'Security compliance', '24/7 monitoring'],
      benefits: ['Reduced infrastructure costs', 'Improved scalability', 'Enhanced security', 'Better performance'],
      category: 'Infrastructure',
      popular: true
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure as code for faster, more reliable releases',
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Automated testing', 'Deployment automation', 'Monitoring & alerting'],
      benefits: ['Faster deployments', 'Reduced errors', 'Improved reliability', 'Better collaboration'],
      category: 'DevOps',
      popular: true
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, incident response, and compliance',
      price: '$1299/month',
      marketPrice: '$2500-10000/month',
      features: ['Threat detection', 'Incident response', 'Security audits', 'Compliance management', 'Penetration testing'],
      benefits: ['Enhanced security posture', 'Regulatory compliance', 'Reduced risk', '24/7 protection'],
      category: 'Security',
      popular: true
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern web applications built with the latest technologies and best practices',
      price: '$599/month',
      marketPrice: '$1000-4000/month',
      features: ['Responsive design', 'Performance optimization', 'SEO optimization', 'Security hardening', 'Maintenance & support'],
      benefits: ['Better user experience', 'Higher conversion rates', 'Improved SEO', 'Reduced maintenance costs'],
      category: 'Development',
      popular: false
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      price: '$799/month',
      marketPrice: '$1500-6000/month',
      features: ['Native development', 'Cross-platform solutions', 'App store optimization', 'Performance tuning', 'Maintenance & updates'],
      benefits: ['Better user engagement', 'Increased revenue', 'Brand visibility', 'Competitive advantage'],
      category: 'Development',
      popular: false
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Database design, optimization, and management for improved performance and reliability',
      price: '$699/month',
      marketPrice: '$1200-5000/month',
      features: ['Database design', 'Performance optimization', 'Backup & recovery', 'Security hardening', 'Monitoring & maintenance'],
      benefits: ['Improved performance', 'Data security', 'Reduced downtime', 'Better scalability'],
      category: 'Database',
      popular: false
    }
  ];

  // Micro SaaS Services
  const microSaasServices = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart, description: 'Business intelligence platform' },
    { name: 'Zion Chat AI', href: '/zion-chat-ai', icon: MessageSquare, description: 'AI customer support' },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield, description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud, description: 'Cloud backup & recovery' },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText, description: 'AI content creation' },
    { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence', icon: Users, description: 'AI-enhanced CRM' },
    { name: 'Zion Data Sync', href: '/zion-data-sync', icon: Database, description: 'Data integration platform' },
    { name: 'Zion Lead Magnet', href: '/zion-lead-magnet', icon: Target, description: 'Lead generation platform' }
  ];

  // Emerging Technologies
  const emergingTech = [
    { name: '5G Implementation', href: '/5g-implementation', icon: Zap, description: 'Next-gen connectivity' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Box, description: '3D content creation' },
    { name: 'AI Holographic Workspace', href: '/ai-holographic-workspace', icon: Monitor, description: 'Immersive work environments' },
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu, description: 'Quantum processing power' },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Settings, description: 'Self-operating systems' },
    { name: 'Blockchain Solutions', href: '/blockchain-solutions', icon: Lock, description: 'Decentralized applications' }
  ];

  // Success Stories
  const successStories = [
    {
      company: 'TechCorp Inc.',
      industry: 'Technology',
      testimonial: 'Zion Tech Group transformed our operations with their AI solutions, resulting in 300% ROI and 95% process automation.',
      results: ['300% ROI increase', '95% process automation', '60% cost reduction', '40% faster delivery']
    },
    {
      company: 'FinanceFlow Ltd.',
      industry: 'Financial Services',
      testimonial: 'Their cybersecurity solutions protected our sensitive data and helped us achieve full compliance with industry regulations.',
      results: ['100% compliance achieved', 'Zero security breaches', '50% faster audits', '30% cost savings']
    },
    {
      company: 'RetailMax Corp.',
      industry: 'Retail',
      testimonial: 'The AI-powered customer service solution reduced our support costs by 60% while improving customer satisfaction scores.',
      results: ['60% cost reduction', '40% faster response times', '95% customer satisfaction', '24/7 availability']
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOOptimizer
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology."
        keywords="AI solutions, IT services, digital transformation, quantum computing, cybersecurity, cloud infrastructure"
        canonicalUrl="https://ziontechgroup.com"
        ogImage="/og-image.svg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.svg",
          "description": "Leading provider of enterprise AI solutions and IT services",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com"
          }
        }}
      />
      
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableCodeSplitting={true}
        enableLazyLoading={true}
        enablePrefetching={true}
        enableCaching={true}
      />
      
      <PerformanceImprovements>
      
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-bg quantum-particles neural-connections">
        {/* Navigation */}
        <Navigation />
        
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50">
          Skip to main content
        </a>
        
        {/* Content Promotion Banner */}
        <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
          <ContentPromotionBanner />
        </Suspense>
        
        {/* Main Content */}
        <main id="main-content" className="relative">
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 text-center" aria-labelledby="hero-heading">
            <div className="max-w-6xl mx-auto">
              <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text" role="doc-subtitle">
                Advanced AI and IT Solutions
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
                Transform your business with our cutting-edge technology and achieve unprecedented growth.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-12">
                <div className="cyber-card hologram-card p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl mb-3">🚀</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">AI-Powered Solutions</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
                </div>
                <div className="cyber-card hologram-card p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl mb-3">⚡</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Proven Results</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
                </div>
                <div className="cyber-card hologram-card p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl mb-3">🔒</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Enterprise Security</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security with advanced encryption, compliance standards, and 24/7 monitoring</p>
                </div>
                <div className="cyber-card hologram-card p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl mb-3">🌐</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Global Reach</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Worldwide deployment and support for international businesses with local expertise</p>
                </div>
                <div className="cyber-card hologram-card p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl mb-3">📈</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Scalable Growth</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Solutions that grow with your business, from startup to enterprise scale</p>
                </div>
                <div className="cyber-card hologram-card p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl mb-3">🎯</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Custom Solutions</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Tailored AI and IT solutions designed specifically for your business needs</p>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="cyber-button-enhanced"
                  aria-label="Call us at (302) 464-0950"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  📧 Email Us
                </a>
                <a 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Get Free Consultation
                </a>
              </div>
            </div>
          </section>

          {/* AI Services Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="ai-services-heading">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 id="ai-services-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4 neon-text-enhanced">
                  AI Services
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Comprehensive AI solutions designed to transform your business operations and drive growth
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {aiServices.map((service, index) => (
                  <div key={index} className="cyber-card-enhanced hologram-card-enhanced p-6 group hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{service.title}</h3>
                        <span className="text-sm text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                          {service.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-green-400">{service.price}</span>
                        <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                      </div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <a
                        href="/contact"
                        className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                      >
                        Get Started
                      </a>
                      <a
                        href={`/ai-services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex-1 border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg text-center font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <a
                  href="/ai-services"
                  className="cyber-button-enhanced inline-flex items-center"
                >
                  View All AI Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          {/* IT Services Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5" aria-labelledby="it-services-heading">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 id="it-services-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4 neon-text-enhanced">
                  IT Services
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Comprehensive IT solutions to support your business infrastructure and digital transformation
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {itServices.map((service, index) => (
                  <div key={index} className="cyber-card-enhanced hologram-card-enhanced p-6 group hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{service.title}</h3>
                        <span className="text-sm text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                          {service.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-green-400">{service.price}</span>
                        <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                      </div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <a
                        href="/contact"
                        className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
                      >
                        Get Started
                      </a>
                      <a
                        href={`/it-services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex-1 border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg text-center font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <a
                  href="/it-services"
                  className="cyber-button-enhanced inline-flex items-center"
                >
                  View All IT Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          {/* Micro SaaS Services Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="micro-saas-heading">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 id="micro-saas-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4 neon-text-enhanced">
                  Micro SaaS Solutions
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Specialized AI-powered tools and platforms designed for specific business needs
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                {microSaasServices.map((service, index) => (
                  <div key={index} className="cyber-card-enhanced hologram-card-enhanced p-4 group hover:scale-105 transition-all duration-300">
                    <div className="text-center mb-3">
                      <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mx-auto mb-3 w-fit group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">{service.description}</p>
                    </div>
                    <a
                      href={service.href}
                      className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                    >
                      Explore
                    </a>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <a
                  href="/micro-saas"
                  className="cyber-button-enhanced inline-flex items-center"
                >
                  View All Micro SaaS
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          {/* Emerging Technologies Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5" aria-labelledby="emerging-tech-heading">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 id="emerging-tech-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4 neon-text-enhanced">
                  Emerging Technologies
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Cutting-edge technologies that will shape the future of business
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {emergingTech.map((tech, index) => (
                  <div key={index} className="cyber-card-enhanced hologram-card-enhanced p-6 group hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                        <tech.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{tech.name}</h3>
                        <span className="text-sm text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                          Emerging Tech
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">{tech.description}</p>
                    <a
                      href={tech.href}
                      className="block w-full bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:from-green-700 hover:to-teal-700 transition-all duration-300"
                    >
                      Learn More
                    </a>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <a
                  href="/emerging-technologies"
                  className="cyber-button-enhanced inline-flex items-center"
                >
                  View All Technologies
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          {/* Success Stories Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="success-stories-heading">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 id="success-stories-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4 neon-text-enhanced">
                  Success Stories
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Real results from our clients across various industries
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {successStories.map((story, index) => (
                  <div key={index} className="cyber-card-enhanced hologram-card-enhanced p-6 group hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">{story.company.charAt(0)}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{story.company}</h3>
                        <p className="text-sm text-gray-400">{story.industry}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">"{story.testimonial}"</p>
                    <div className="space-y-2">
                      {story.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center text-sm text-green-400">
                          <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="cta-heading">
            <div className="max-w-4xl mx-auto text-center">
              <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4 neon-text-enhanced">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Contact our experts today for a free consultation and discover how our AI and IT solutions can drive your success.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="cyber-card-enhanced hologram-card-enhanced p-6">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300 mb-4">Speak with our experts</p>
                  <a
                    href="tel:+13024640950"
                    onClick={handlePhoneClick}
                    className="text-cyan-400 hover:text-cyan-300 font-medium"
                    aria-label="Call us at (302) 464-0950"
                  >
                    (302) 464-0950
                  </a>
                </div>
                
                <div className="cyber-card-enhanced hologram-card-enhanced p-6">
                  <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300 mb-4">Send us a message</p>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    kleber@ziontechgroup.com
                  </a>
                </div>
                
                <div className="cyber-card-enhanced hologram-card-enhanced p-6">
                  <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300 mb-4">Our headquarters</p>
                  <p className="text-cyan-400 font-medium">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="cyber-button-enhanced"
                  aria-label="Call us at (302) 464-0950"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  📧 Email Us
                </a>
                <a 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Get Free Consultation
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
      </PerformanceImprovements>
    </>
  );
};

export default HomePage;