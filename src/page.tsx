'use client';
import React, { useCallback, useState, useEffect, memo } from 'react';
import { Phone, Mail, MapPin, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, Users, ArrowRight, CheckCircle, TrendingUp, Award, Lock, Database, Cloud, Code, Settings, FileText, Search, Bot, Calculator, Calendar, Home, Heart, Stethoscope, GraduationCap, Briefcase, Building, Factory, Truck, Smartphone, MessageSquare, Eye, Atom, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import Analytics from './components/Analytics';
import SecurityEnhancer from './components/SecurityEnhancer';
import { initializePerformanceOptimizations } from './utils/performanceOptimizations';

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
    
    // Initialize performance optimizations
    initializePerformanceOptimizations();
    
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

  // Streamlined service data - only top 6 services per category
  const topServices = [
    {
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning with AI-powered resource optimization',
      icon: '📊',
      price: '$199/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity'
    },
    {
      title: 'AI Writing Assistant Pro',
      description: 'Advanced AI-powered writing tool for content creation and optimization',
      icon: '✍️',
      price: '$89/month',
      features: ['Content generation', 'Grammar checking', 'SEO writing'],
      benefits: ['10x faster writing', '95% error reduction', 'SEO-optimized content'],
      link: '/ai-writing-assistant',
      popular: true,
      category: 'Content'
    },
    {
      title: 'AI CRM Intelligence',
      description: 'Smart CRM with AI-powered customer insights and automated sales',
      icon: '👥',
      price: '$299/month',
      features: ['Customer analytics', 'Lead scoring', 'Sales forecasting'],
      benefits: ['40% better conversions', 'Automated workflows', 'Customer insights'],
      link: '/ai-crm',
      popular: true,
      category: 'Sales'
    },
    {
      title: 'AI Cybersecurity Shield',
      description: 'AI-powered threat detection and prevention system',
      icon: '🛡️',
      price: '$399/month',
      features: ['Threat detection', 'Anomaly detection', 'Behavioral analysis'],
      benefits: ['99.9% threat detection', 'Real-time monitoring', 'Automated response'],
      link: '/ai-cybersecurity',
      popular: true,
      category: 'Security'
    },
    {
      title: 'AI Marketing Automation',
      description: 'Complete marketing automation with AI-powered campaign optimization',
      icon: '📈',
      price: '$249/month',
      features: ['Campaign automation', 'Lead scoring', 'Email marketing'],
      benefits: ['300% more leads', '50% better conversion', 'Automated nurturing'],
      link: '/ai-marketing',
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI Data Analytics Pro',
      description: 'Advanced data analytics with AI-powered insights and predictions',
      icon: '📊',
      price: '$299/month',
      features: ['Predictive analytics', 'Data visualization', 'Real-time dashboards'],
      benefits: ['Better insights', 'Faster decisions', 'Predictive capabilities'],
      link: '/ai-data-analytics',
      popular: true,
      category: 'Analytics'
    }
  ];

  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics and decision-making',
      icon: Brain,
      price: '$2,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup'],
      color: 'text-purple-400',
      benefits: ['40% better predictions', '60% faster insights', 'ROI tracking']
    },
    {
      title: 'AI Business Intelligence',
      description: 'Advanced business intelligence with AI-driven insights',
      icon: BarChart,
      price: '$3,200/month',
      features: ['AI Insights', 'Automated Reporting', 'Predictive Analytics'],
      color: 'text-blue-400',
      benefits: ['50% faster insights', 'Automated reporting', 'Better decisions']
    },
    {
      title: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with AI optimization',
      icon: Globe,
      price: '$4,500/month',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning'],
      color: 'text-green-400',
      benefits: ['30% cost reduction', '95% accuracy', 'Risk mitigation']
    },
    {
      title: 'AI Quality Assurance',
      description: 'Automated quality control with AI-powered defect detection',
      icon: Shield,
      price: '$2,800/month',
      features: ['Automated Testing', 'Defect Detection', 'Quality Metrics'],
      color: 'text-red-400',
      benefits: ['90% defect reduction', 'Faster testing', 'Cost savings']
    },
    {
      title: 'AI Human Resources',
      description: 'Intelligent HR management with AI-powered recruitment',
      icon: Users,
      price: '$2,200/month',
      features: ['Talent Acquisition', 'Employee Analytics', 'Performance Management'],
      color: 'text-orange-400',
      benefits: ['50% better hiring', 'Employee satisfaction', 'Retention improvement']
    },
    {
      title: 'AI Legal Assistant',
      description: 'AI-powered legal research and document analysis',
      icon: FileText,
      price: '$3,500/month',
      features: ['Legal Research', 'Document Analysis', 'Compliance Monitoring'],
      color: 'text-indigo-400',
      benefits: ['80% time savings', 'Better accuracy', 'Cost reduction']
    }
  ];

  const itServices = [
    {
      title: 'Cloud Services',
      description: 'Cloud migration, setup, and optimization services',
      icon: Cloud,
      price: '$1,999/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization'],
      color: 'text-blue-400',
      benefits: ['50% cost reduction', '99.9% uptime', 'Global deployment']
    },
    {
      title: 'Enterprise Security Solutions',
      description: 'Comprehensive security solutions for enterprise protection',
      icon: Shield,
      price: '$3,500/month',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management'],
      color: 'text-red-400',
      benefits: ['99.9% threat detection', 'Compliance ready', 'Risk mitigation']
    },
    {
      title: 'IT Infrastructure Management',
      description: 'Complete IT infrastructure design and management',
      icon: Settings,
      price: '$2,800/month',
      features: ['Infrastructure Design', 'Server Management', 'Network Setup'],
      color: 'text-green-400',
      benefits: ['99.9% uptime', 'Scalable infrastructure', 'Cost optimization']
    },
    {
      title: 'Data Center Solutions',
      description: 'Enterprise data center design and management',
      icon: Database,
      price: '$4,200/month',
      features: ['Data Center Design', 'Power & Cooling', 'Security Systems'],
      color: 'text-purple-400',
      benefits: ['High availability', 'Energy efficiency', 'Security compliance']
    },
    {
      title: 'Network Security & Firewall',
      description: 'Advanced network security with next-gen firewall solutions',
      icon: Lock,
      price: '$2,200/month',
      features: ['Firewall Management', 'Intrusion Detection', 'VPN Solutions'],
      color: 'text-orange-400',
      benefits: ['Advanced threat protection', 'Network visibility', 'Compliance ready']
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting and digital transformation advisory',
      icon: Briefcase,
      price: '$2,500/month',
      features: ['Digital Strategy', 'Technology Roadmap', 'Architecture Design'],
      color: 'text-indigo-400',
      benefits: ['Strategic guidance', 'Technology alignment', 'Cost optimization']
    }
  ];

  const specializedServices = [
    {
      title: 'Quantum Computing Solutions',
      description: 'Next-generation quantum algorithms and quantum security',
      icon: Atom,
      price: 'Custom Pricing',
      features: ['Quantum Algorithm Development', 'Quantum Security', 'Optimization Problems'],
      color: 'text-yellow-400',
      benefits: ['Exponential speedup', 'Unbreakable security', 'Future-proof technology'],
      category: 'Quantum'
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing and self-optimizing systems for enterprise',
      icon: Cpu,
      price: 'Custom Pricing',
      features: ['Self-Healing Systems', 'Predictive Maintenance', 'Resource Optimization'],
      color: 'text-green-400',
      benefits: ['Zero-downtime operations', 'Predictive maintenance', 'Cost optimization'],
      category: 'Autonomous'
    },
    {
      title: 'Blockchain & Web3',
      description: 'Decentralized solutions, smart contracts, and Web3 applications',
      icon: Lock,
      price: '$2,999/month',
      features: ['Smart Contract Development', 'DApp Creation', 'Token Economics'],
      color: 'text-purple-400',
      benefits: ['Decentralized security', 'Transparent operations', 'Tokenization'],
      category: 'Blockchain'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Connected devices and edge computing solutions',
      icon: Globe,
      price: '$1,999/month',
      features: ['Device Management', 'Edge Analytics', 'Real-time Processing'],
      color: 'text-cyan-400',
      benefits: ['Real-time insights', 'Reduced latency', 'Cost efficiency'],
      category: 'IoT'
    },
    {
      title: 'Business Intelligence',
      description: 'Data-driven insights and predictive analytics for decisions',
      icon: BarChart,
      price: '$2,299/month',
      features: ['Data Warehousing', 'ETL Processes', 'Advanced Analytics'],
      color: 'text-blue-400',
      benefits: ['Data-driven decisions', 'Predictive insights', 'Real-time analytics'],
      category: 'Analytics'
    },
    {
      title: 'Robotics Solutions',
      description: 'Intelligent robotic solutions for manufacturing and service',
      icon: Settings,
      price: 'Custom Pricing',
      features: ['Robotic Process Automation', 'Computer Vision Integration', 'Human-Robot Collaboration'],
      color: 'text-orange-400',
      benefits: ['Increased productivity', 'Consistent quality', '24/7 operation'],
      category: 'Robotics'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology."
        keywords={['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services']}
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
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        {/* Navigation */}
        <Navigation />
        
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
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse"
              >
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse" role="doc-subtitle">
                Advanced AI and IT Solutions
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
                Transform your business with our cutting-edge technology and achieve unprecedented growth.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12">
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🚀</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">AI-Powered Solutions</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence and automation</p>
                </div>
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">⚡</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">Proven Results</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings and 300% ROI for enterprise clients</p>
                </div>
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🔒</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">Enterprise Security</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data</p>
                </div>
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1 xl:col-span-1">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🌐</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">Global Reach</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Serving clients worldwide with 24/7 support</p>
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

          {/* Top Services Section */}
          <section className="mb-16" aria-labelledby="top-services-heading">
            <h2 id="top-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Our Top Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Powerful, affordable AI-powered tools designed for modern businesses
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {topServices.map((service, index) => (
                <article key={index} className={`cyber-card p-6 hover:scale-105 transition-all duration-300 ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </div>
                    </div>
                  )}
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
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
                  
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400 mb-2 neon-text">{service.price}</div>
                    <a 
                      href={service.link} 
                      className="cyber-button px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
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
            <h2 id="ai-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              AI Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Advanced artificial intelligence solutions for enterprise applications
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {aiServices.map((service, index) => (
                <article key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                    <a 
                      href="/ai-services" 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
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
            <h2 id="it-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              IT Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Comprehensive IT solutions for modern enterprise infrastructure
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {itServices.map((service, index) => (
                <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                    <a 
                      href="/it-services" 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                    >
                      Learn More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Specialized Services Section */}
          <section className="mb-16" aria-labelledby="specialized-services-heading">
            <h2 id="specialized-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Specialized Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Cutting-edge technologies for next-generation business solutions
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {specializedServices.map((service, index) => (
                <article key={index} className="quantum-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
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
                  
                  <div className="text-center">
                    <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                    <a 
                      href="/specialized-services" 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
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
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Get In Touch
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-4">+1 302 464 0950</p>
                <a 
                  href="tel:+13024640950" 
                  onClick={handlePhoneClick}
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Call Now
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Mail className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-pink-400 hover:text-pink-300 font-medium transition-colors"
                >
                  Send Email
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Location className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-300 mb-4">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                <a 
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium transition-colors"
                >
                  View on Map
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;