'use client';
import React, { useState, useEffect, useCallback, memo, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle, Star, Users, Globe, Brain, Zap, Shield, Sparkles, Cpu, Database, Cloud, Lock, BarChart3, Target, Rocket, Layers, Bot, Code, Eye, TrendingUp } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';

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
      // Preload components after initial render
    }, 100);
  }
};

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-6 animate-pulse border border-cyan-400/20" role="status" aria-label="Loading service card">
    <div className="h-8 bg-cyan-400/20 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-cyan-400/20 rounded mb-2"></div>
    <div className="h-4 bg-cyan-400/20 rounded w-5/6"></div>
  </div>
));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      preloadComponents();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number',
      });
    }
  }, []);

  // Analytics tracking for email clicks
  const handleEmailClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'email_click', {
        event_category: 'engagement',
        event_label: 'main_email_address',
      });
    }
  }, []);

  // Analytics tracking for CTA clicks
  const handleCTAClick = useCallback((ctaType: string) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'cta_click', {
        event_category: 'engagement',
        event_label: ctaType,
      });
    }
  }, []);

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      content: "Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "InnovateLab",
      content: "Outstanding service and cutting-edge technology. The team's expertise in AI and cloud solutions is unmatched.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "FutureTech Inc",
      content: "Professional, reliable, and innovative. They delivered exactly what we needed and more.",
      rating: 5
    }
  ];

  // Real AI Services with pricing and features
  const aiServices = [
    {
      icon: Brain,
      title: 'AI-Powered Business Intelligence',
      description: 'Transform raw data into actionable insights with our advanced AI analytics platform.',
      features: ['Real-time data processing', 'Predictive analytics', 'Custom dashboards', 'Automated reporting'],
      pricing: 'Starting at $2,999/month',
      link: '/ai-services/business-intelligence'
    },
    {
      icon: Bot,
      title: 'Intelligent Customer Support Bot',
      description: '24/7 AI-powered customer service that understands context and provides instant solutions.',
      features: ['Natural language processing', 'Multi-language support', 'Integration with existing systems', 'Performance analytics'],
      pricing: 'Starting at $1,499/month',
      link: '/ai-services/customer-support-bot'
    },
    {
      icon: Code,
      title: 'AI Code Generation & Review',
      description: 'Accelerate development with AI that writes, reviews, and optimizes your code.',
      features: ['Code generation', 'Automated testing', 'Security scanning', 'Performance optimization'],
      pricing: 'Starting at $3,999/month',
      link: '/ai-services/code-generation'
    },
    {
      icon: Eye,
      title: 'Computer Vision Solutions',
      description: 'Advanced image and video analysis for quality control, security, and automation.',
      features: ['Object detection', 'Facial recognition', 'Quality inspection', 'Real-time processing'],
      pricing: 'Starting at $4,999/month',
      link: '/ai-services/image-recognition'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics Platform',
      description: 'Forecast trends and make data-driven decisions with machine learning models.',
      features: ['Time series forecasting', 'Risk assessment', 'Demand planning', 'Custom models'],
      pricing: 'Starting at $2,499/month',
      link: '/ai-services/predictive-analytics'
    },
    {
      icon: Target,
      title: 'AI Marketing Automation',
      description: 'Personalize customer experiences and optimize marketing campaigns with AI.',
      features: ['Customer segmentation', 'Content personalization', 'Campaign optimization', 'ROI tracking'],
      pricing: 'Starting at $1,999/month',
      link: '/ai-services/marketing-automation'
    }
  ];

  // Real Micro SaaS Services
  const microSaasServices = [
    {
      icon: BarChart3,
      title: 'Smart Analytics Dashboard',
      description: 'Real-time business intelligence with customizable widgets and automated insights.',
      features: ['Real-time data visualization', 'Custom dashboards', 'Automated alerts', 'Export capabilities'],
      pricing: 'Starting at $99/month',
      link: '/micro-saas/analytics-dashboard'
    },
    {
      icon: Bot,
      title: 'AI Social Media Manager',
      description: 'Automate social media posting, engagement, and content creation across platforms.',
      features: ['Multi-platform posting', 'Content scheduling', 'Engagement tracking', 'AI content suggestions'],
      pricing: 'Starting at $199/month',
      link: '/micro-saas/social-manager'
    },
    {
      icon: Mail,
      title: 'Intelligent Email Marketing',
      description: 'AI-powered email campaigns with personalization and automated workflows.',
      features: ['Email automation', 'A/B testing', 'Personalization', 'Analytics dashboard'],
      pricing: 'Starting at $149/month',
      link: '/micro-saas/email-marketing'
    },
    {
      icon: Database,
      title: 'Inventory Management System',
      description: 'Smart inventory tracking with predictive restocking and automated ordering.',
      features: ['Real-time tracking', 'Predictive analytics', 'Automated reordering', 'Multi-location support'],
      pricing: 'Starting at $299/month',
      link: '/micro-saas/inventory-management'
    },
    {
      icon: Calendar,
      title: 'Smart Appointment Scheduler',
      description: 'AI-powered scheduling that optimizes bookings and reduces no-shows.',
      features: ['Automated scheduling', 'Calendar integration', 'Reminder system', 'Analytics'],
      pricing: 'Starting at $79/month',
      link: '/micro-saas/appointment-scheduler'
    },
    {
      icon: FileText,
      title: 'Document Processing AI',
      description: 'Automatically extract, process, and organize documents with intelligent OCR.',
      features: ['OCR processing', 'Data extraction', 'Document classification', 'Workflow automation'],
      pricing: 'Starting at $199/month',
      link: '/micro-saas/document-processor'
    }
  ];

  // IT Services
  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure Solutions',
      description: 'Scalable, secure cloud infrastructure designed for your business needs.',
      features: ['AWS/Azure/GCP expertise', 'Auto-scaling', 'Disaster recovery', '24/7 monitoring'],
      pricing: 'Starting at $1,999/month',
      link: '/cloud-infrastructure'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions to protect your business from threats.',
      features: ['Threat detection', 'Vulnerability scanning', 'Security audits', 'Incident response'],
      pricing: 'Starting at $2,499/month',
      link: '/cybersecurity'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Optimize and secure your databases with expert management services.',
      features: ['Performance optimization', 'Backup & recovery', 'Security hardening', 'Monitoring'],
      pricing: 'Starting at $1,299/month',
      link: '/database-management'
    },
    {
      icon: Users,
      title: 'Managed IT Services',
      description: 'Complete IT management to keep your systems running smoothly.',
      features: ['24/7 support', 'Proactive monitoring', 'Software updates', 'Help desk'],
      pricing: 'Starting at $1,599/month',
      link: '/managed-it'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Countries Served' },
    { number: '4.9/5', label: 'Customer Rating' }
  ];

  return (
    <>
      <SEOHead 
        title="Zion Tech Group - Advanced AI & IT Solutions"
        description="Transform your business with cutting-edge artificial intelligence, cloud infrastructure, and innovative technology solutions. Expert AI and IT consulting services."
        keywords="AI solutions, IT consulting, cloud infrastructure, cybersecurity, automation, machine learning, artificial intelligence, business transformation"
        canonical="https://ziontechgroup.com"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section 
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          role="banner"
          aria-label="Hero section with company introduction"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" aria-hidden="true"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Advanced AI & IT
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence, cloud infrastructure, and innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                onClick={() => handleCTAClick('hero_get_started')}
                aria-label="Get started with Zion Tech Group services"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </a>
              <a
                href="/services"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                onClick={() => handleCTAClick('hero_explore_services')}
                aria-label="Explore our comprehensive service offerings"
              >
                Explore Services
              </a>
            </div>
            
            {/* Contact Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto" role="complementary" aria-label="Contact information">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 text-center border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" aria-hidden="true" />
                <p className="text-white font-semibold">Call Us</p>
                <a 
                  href="tel:+13024640950" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded"
                  onClick={handlePhoneClick}
                  aria-label="Call Zion Tech Group at (302) 464-0950"
                >
                  (302) 464-0950
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 text-center border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-2" aria-hidden="true" />
                <p className="text-white font-semibold">Email Us</p>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded"
                  onClick={handleEmailClick}
                  aria-label="Email Zion Tech Group at kleber@ziontechgroup.com"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 text-center border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-2" aria-hidden="true" />
                <p className="text-white font-semibold">Visit Us</p>
                <address className="text-cyan-400 text-sm not-italic">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </address>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" role="region" aria-labelledby="ai-services-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="ai-services-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-cyan-400 max-w-3xl mx-auto">
                Cutting-edge artificial intelligence solutions that transform your business operations and drive growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
              {aiServices.map((service, index) => (
                <article key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-105" role="listitem">
                  <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors" aria-hidden="true">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4" role="list">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-cyan-400 font-semibold mb-4">{service.pricing}</div>
                  <a 
                    href={service.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                    onClick={() => handleCTAClick(`ai_service_${service.title.toLowerCase().replace(/\s+/g, '_')}`)}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SaaS Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5" role="region" aria-labelledby="micro-saas-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="micro-saas-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                Micro <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">SaaS</span> Solutions
              </h2>
              <p className="text-xl text-cyan-400 max-w-3xl mx-auto">
                Purpose-built applications that solve specific business challenges with elegant, focused solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
              {microSaasServices.map((service, index) => (
                <article key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-105" role="listitem">
                  <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors" aria-hidden="true">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4" role="list">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-cyan-400 font-semibold mb-4">{service.pricing}</div>
                  <a 
                    href={service.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                    onClick={() => handleCTAClick(`micro_saas_${service.title.toLowerCase().replace(/\s+/g, '_')}`)}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" role="region" aria-labelledby="it-services-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="it-services-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                IT <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-cyan-400 max-w-3xl mx-auto">
                Comprehensive IT solutions to keep your business running smoothly and securely.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
              {itServices.map((service, index) => (
                <article key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-105" role="listitem">
                  <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors" aria-hidden="true">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4" role="list">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-cyan-400 font-semibold mb-4">{service.pricing}</div>
                  <a 
                    href={service.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                    onClick={() => handleCTAClick(`it_service_${service.title.toLowerCase().replace(/\s+/g, '_')}`)}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" role="region" aria-labelledby="stats-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="stats-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trusted by <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Thousands</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="text-white">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-cyan-400">{stat.number}</div>
                  <div className="text-lg text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5" role="region" aria-labelledby="testimonials-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
              {testimonials.map((testimonial, index) => (
                <blockquote key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 group" role="listitem">
                  <div className="flex mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <footer className="text-cyan-400">
                    <cite className="not-italic font-semibold">{testimonial.name}</cite>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500 to-purple-500" role="region" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Join thousands of businesses that trust Zion Tech Group for their AI and IT needs. 
              Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                onClick={() => handleCTAClick('cta_contact')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300 inline-flex items-center justify-center"
                onClick={handlePhoneClick}
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;