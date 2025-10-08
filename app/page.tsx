import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { ArrowRight, Play, Star, CheckCircle, Zap, Shield, Globe, Users, TrendingUp, Phone, Mail, MapPin, Award, Target, BarChart3, Lightbulb, Rocket, DollarSign } from 'lucide-react';
import './styles/futuristic.css';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('./components/ContentStatistics'));
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="futuristic-card animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-dark-border rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-dark-border rounded mb-2"></div>
    <div className="h-4 bg-dark-border rounded w-5/6"></div>
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

  // Real Micro SAAS Services
  const microSAASServices = [
    {
      title: 'AI Code Review Assistant',
      description: 'Automated code analysis with 99.2% accuracy',
      icon: '🔍',
      price: '$89/month',
      features: ['Security vulnerability detection', 'Performance optimization', 'Git integration'],
      link: '/micro-saas'
    },
    {
      title: 'AI Document Intelligence',
      description: 'OCR and data extraction with 99.5% accuracy',
      icon: '📄',
      price: '$149/month',
      features: ['Document classification', 'Workflow automation', 'Multi-format support'],
      link: '/micro-saas'
    },
    {
      title: 'Smart API Testing Suite',
      description: 'Automated API testing with AI generation',
      icon: '🔌',
      price: '$79/month',
      features: ['Performance testing', 'Load testing', 'CI/CD integration'],
      link: '/micro-saas'
    }
  ];

  // Professional Services
  const professionalServices = [
    {
      title: 'AI & Machine Learning',
      description: 'Custom AI solutions and ML models',
      icon: '🤖',
      price: 'Starting at $1,500/month',
      features: ['Custom AI development', 'NLP & Computer Vision', 'Predictive Analytics'],
      link: '/ai-services'
    },
    {
      title: 'IT Infrastructure',
      description: 'Cloud migration and cybersecurity',
      icon: '⚙️',
      price: 'Starting at $1,200/month',
      features: ['Cloud migration', 'DevOps & CI/CD', '24/7 monitoring'],
      link: '/it-services'
    },
    {
      title: 'Quantum Computing',
      description: 'Next-generation quantum solutions',
      icon: '⚛️',
      price: 'Custom Pricing',
      features: ['Quantum algorithms', 'Optimization', 'Research & Development'],
      link: '/quantum-computing'
    }
  ];

  const stats = [
    { label: 'Clients Served', value: '500+', icon: Users },
    { label: 'Projects Completed', value: '1,200+', icon: Target },
    { label: 'Cost Savings Delivered', value: '$50M+', icon: DollarSign },
    { label: 'Success Rate', value: '99.5%', icon: Award }
  ];

  return (
    <div className="min-h-screen futuristic-theme">
      <Helmet>
        <title>Zion Tech Group - Advanced AI & Technology Solutions</title>
        <meta name="description" content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, business intelligence" />
      </Helmet>

      {/* Navigation */}
      <Navigation />
      
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-neon-blue text-dark-bg px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="cyber-grid absolute inset-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 holographic">
            Zion Tech Group
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            Advanced AI & Technology Solutions
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-5xl mx-auto mb-8 leading-relaxed">
            Leading provider of enterprise AI solutions, digital transformation, and cutting-edge technology services. 
            Transform your business with our proven strategies delivering 
            <span className="neon-text-green"> $50M+ annual savings</span> and 
            <span className="neon-text-purple"> 95% process automation</span>.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="futuristic-card text-center group">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-neon-blue group-hover:neon-text transition-all" />
                <div className="text-3xl font-bold neon-text mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="neon-button text-lg px-8 py-4">
              <Zap className="w-6 h-6 mr-2" />
              Get Free Consultation
            </button>
            <button className="glass-card px-8 py-4 text-white border border-white/20 hover:border-neon-blue transition-all text-lg">
              <Play className="w-6 h-6 mr-2" />
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      <main id="main-content" className="container mx-auto px-4 py-16" role="main">
        {/* Micro SAAS Services Section */}
        <section className="mb-20" aria-labelledby="micro-saas-heading">
          <div className="text-center mb-12">
            <h2 id="micro-saas-heading" className="text-4xl md:text-5xl font-bold mb-6 neon-text">
              Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful AI-driven tools for modern businesses. 12+ ready-to-use solutions starting at $79/month.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {microSAASServices.map((service, index) => (
              <Suspense key={index} fallback={<ServiceCardSkeleton />}>
                <article className="futuristic-card group">
                  <div className="text-5xl mb-4 group-hover:neon-text transition-all">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:neon-text transition-all">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  <div className="text-2xl font-bold text-neon-green mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={service.link}
                    className="w-full neon-button inline-flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </article>
              </Suspense>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="/micro-saas"
              className="neon-button text-lg px-8 py-4 inline-flex items-center"
            >
              View All Micro SAAS Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </section>

        {/* Professional Services Section */}
        <section className="mb-20" aria-labelledby="professional-services-heading">
          <div className="text-center mb-12">
            <h2 id="professional-services-heading" className="text-4xl md:text-5xl font-bold mb-6 neon-text">
              Professional Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI, IT, and technology solutions designed to transform your business operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {professionalServices.map((service, index) => (
              <Suspense key={index} fallback={<ServiceCardSkeleton />}>
                <article className="futuristic-card group">
                  <div className="text-5xl mb-4 group-hover:neon-text transition-all">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:neon-text transition-all">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  <div className="text-2xl font-bold text-neon-purple mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={service.link}
                    className="w-full glass-card py-3 px-4 text-white hover:border-neon-blue transition-all inline-flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </article>
              </Suspense>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="/services"
              className="neon-button text-lg px-8 py-4 inline-flex items-center"
            >
              View All Professional Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-20 bg-dark-surface py-16 rounded-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
                Why Choose Zion Tech Group?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="futuristic-card text-center group">
                <div className="text-5xl mb-4 group-hover:neon-text transition-all">🏆</div>
                <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
                <p className="text-gray-300 text-sm">
                  $50M+ in cost savings delivered to clients with 99.5% success rate
                </p>
              </div>

              <div className="futuristic-card text-center group">
                <div className="text-5xl mb-4 group-hover:neon-text transition-all">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">Fast Implementation</h3>
                <p className="text-gray-300 text-sm">
                  Deploy solutions in weeks, not months with our proven methodologies
                </p>
              </div>

              <div className="futuristic-card text-center group">
                <div className="text-5xl mb-4 group-hover:neon-text transition-all">🔒</div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300 text-sm">
                  Bank-level security and compliance for your critical business data
                </p>
              </div>

              <div className="futuristic-card text-center group">
                <div className="text-5xl mb-4 group-hover:neon-text transition-all">🌍</div>
                <h3 className="text-xl font-bold text-white mb-3">Global Support</h3>
                <p className="text-gray-300 text-sm">
                  24/7 support across all time zones with dedicated account managers
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-2xl">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 500+ companies already using our technology solutions. 
              Get your free consultation and custom proposal today.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
              <div className="futuristic-card text-center">
                <Phone className="w-8 h-8 mx-auto mb-3 text-neon-blue" />
                <div className="font-semibold text-white mb-1">Call Us</div>
                <div className="text-gray-300 text-sm">+1 302 464 0950</div>
              </div>
              <div className="futuristic-card text-center">
                <Mail className="w-8 h-8 mx-auto mb-3 text-neon-purple" />
                <div className="font-semibold text-white mb-1">Email Us</div>
                <div className="text-gray-300 text-sm">kleber@ziontechgroup.com</div>
              </div>
              <div className="futuristic-card text-center">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-neon-green" />
                <div className="font-semibold text-white mb-1">Visit Us</div>
                <div className="text-gray-300 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="neon-button text-lg px-8 py-4 inline-flex items-center justify-center"
                onClick={handlePhoneClick}
              >
                <Phone className="w-6 h-6 mr-2" />
                Call Now for Free Consultation
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="glass-card px-8 py-4 text-white border border-white/20 hover:border-neon-blue transition-all text-lg inline-flex items-center justify-center"
              >
                <Mail className="w-6 h-6 mr-2" />
                Get Custom Proposal
              </a>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;