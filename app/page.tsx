'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Cube, Mic, DollarSign, Truck, Link, HardDrive, FileCheck } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import SEOEnhancer from './components/SEOEnhancer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import Analytics from './components/Analytics';
import EnhancedSEOOptimizer from './components/EnhancedSEOOptimizer';
import EnhancedPerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import EnhancedAnalytics from './components/EnhancedAnalytics';
import SecurityEnhancer from './components/SecurityEnhancer';
import ErrorBoundary from './components/ErrorBoundary';
import ServiceWorker from './components/ServiceWorker';
import { ServiceCardSkeleton, HeroSkeleton } from './components/LoadingSkeleton';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import EnhancedSEO from './components/EnhancedSEO';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    setIsHydrated(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

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
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment',
      icon: '📊',
      price: '$99/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity'
    },
    {
      title: 'AI Invoice Generator Pro',
      description: 'Automated invoice creation with AI-powered pricing, tax calculations, and payment tracking',
      icon: '🧾',
      price: '$49/month',
      features: ['Auto-invoice generation', 'Smart pricing suggestions', 'Tax calculations', 'Payment tracking'],
      benefits: ['90% time savings', 'Zero calculation errors', 'Faster payments', 'Professional invoices'],
      link: '/ai-invoice-generator',
      popular: true,
      category: 'Finance'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automate your social media with AI-powered content creation and smart scheduling',
      icon: '📱',
      price: '$79/month',
      features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence'],
      benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach', 'Consistent brand voice'],
      link: '/ai-social-media-manager',
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics',
      icon: '📈',
      price: '$149/month',
      features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift', 'Data-driven decisions'],
      link: '/ai-analytics',
      popular: true,
      category: 'Analytics'
    }
  ];

  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, pattern recognition, and intelligent automation',
      icon: Brain,
      price: '$2,500/month',
      features: ['Custom model development', 'Data preprocessing', 'Model training & validation', 'Deployment & monitoring'],
      benefits: ['Predictive insights', 'Automated decision making', 'Scalable solutions', 'Continuous learning'],
      color: 'text-purple-400',
      category: 'AI Development'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment detection, and language understanding',
      icon: MessageSquare,
      price: '$1,800/month',
      features: ['Text analysis', 'Sentiment detection', 'Language translation', 'Chatbot development'],
      benefits: ['Better customer understanding', 'Automated text processing', 'Multilingual support', 'Real-time insights'],
      color: 'text-blue-400',
      category: 'AI Development'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection, recognition, and visual intelligence',
      icon: Eye,
      price: '$2,200/month',
      features: ['Object detection', 'Image classification', 'Facial recognition', 'Video analysis'],
      benefits: ['Automated visual inspection', 'Enhanced security', 'Quality control', 'Real-time processing'],
      color: 'text-green-400',
      category: 'AI Development'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent automation solutions to streamline workflows and reduce manual tasks',
      icon: Settings,
      price: '$1,500/month',
      features: ['Workflow automation', 'Process optimization', 'Task scheduling', 'Error handling'],
      benefits: ['80% time savings', 'Reduced errors', '24/7 operation', 'Cost efficiency'],
      color: 'text-orange-400',
      category: 'Automation'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Migration & Management',
      description: 'Comprehensive cloud migration, setup, optimization, and management services',
      icon: Cloud,
      price: '$1,299/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration'],
      benefits: ['50% cost reduction', '99.9% uptime', 'Scalable infrastructure', 'Enhanced security'],
      color: 'text-blue-400',
      category: 'Cloud Computing'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Advanced security solutions with threat detection, prevention, and compliance management',
      icon: Shield,
      price: '$1,599/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
      benefits: ['99.9% threat detection', 'Zero security breaches', 'Compliance assurance', '24/7 monitoring'],
      color: 'text-red-400',
      category: 'Security'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring',
      icon: Settings,
      price: '$1,199/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup'],
      benefits: ['80% faster deployments', '90% fewer errors', 'Automated workflows', 'Continuous integration'],
      color: 'text-green-400',
      category: 'Development'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning and analytics',
      icon: Database,
      price: '$899/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening'],
      benefits: ['300% performance boost', 'Zero data loss', 'Automated backups', 'Real-time insights'],
      color: 'text-purple-400',
      category: 'Data Management'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Transform your business with cutting-edge AI and IT solutions. Expert consulting, custom development, and innovative technology services."
        keywords={['AI solutions', 'IT consulting', 'machine learning', 'cloud migration', 'cybersecurity', 'automation']}
        canonicalUrl="https://ziontechgroup.com"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePreloading={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHTTPSRedirect={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Zion Tech Group">
              Zion Tech Group
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Advanced AI and IT Solutions for Modern Enterprises
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your business with cutting-edge artificial intelligence and information technology solutions. 
              We provide expert consulting, custom development, and innovative technology services that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </section>

          {/* Micro SAAS Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Our Micro SAAS Solutions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {microSAASServices.map((service, index) => (
                <article key={index} className={`cyber-card p-6 hover:scale-105 transition-all duration-300 ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
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

          {/* AI Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">AI Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiServices.map((service, index) => (
                <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className={`w-12 h-12 ${service.color}`} />
                    <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">{service.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
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
                  
                  <div className="text-center">
                    <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                    <a 
                      href="/contact" 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                    >
                      Get Started
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* IT Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">IT Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {itServices.map((service, index) => (
                <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className={`w-12 h-12 ${service.color}`} />
                    <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">{service.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
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
                  
                  <div className="text-center">
                    <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                    <a 
                      href="/contact" 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                    >
                      Get Started
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Contact us today to discuss how our AI and IT solutions can revolutionize your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call +1 302 464 0950
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
