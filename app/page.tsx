import React, { useCallback, useState, useEffect, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Cpu, 
  Shield, 
  Phone, 
  Mail, 
  ArrowRight, 
  Star, 
  CheckCircle,
  Sparkles,
  Target,
  BarChart,
  Users,
  Clock,
  Award
} from 'lucide-react';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('./components/ContentStatistics'));
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));

// Loading skeleton component
const ServiceCardSkeleton: React.FC = () => (
  <div className="card-futuristic animate-pulse">
    <div className="h-8 bg-gray-700 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded w-5/6"></div>
  </div>
);

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
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

  const featuredServices = [
    {
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence services including machine learning, NLP, computer vision, and predictive analytics.',
      icon: Brain,
      color: 'neon-pink',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'Starting at $1,500/month',
      link: '/ai-services'
    },
    {
      title: 'Micro SAAS Tools',
      description: 'Affordable, powerful AI-driven tools for modern businesses. Ready-to-use solutions for immediate deployment.',
      icon: Zap,
      color: 'neon-green',
      features: ['Code Review Assistant', 'Document Intelligence', 'Analytics Dashboard', 'API Testing Suite'],
      price: 'Starting at $79/month',
      link: '/micro-saas'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT solutions including cloud migration, cybersecurity, DevOps, and system integration.',
      icon: Cpu,
      color: 'neon-blue',
      features: ['Cloud Migration', 'Cybersecurity Solutions', 'DevOps & Automation', 'System Integration'],
      price: 'Starting at $1,200/month',
      link: '/it-services'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions including threat detection, vulnerability assessment, and compliance monitoring.',
      icon: Shield,
      color: 'neon-red',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Monitoring', 'Incident Response'],
      price: 'Starting at $2,000/month',
      link: '/cybersecurity'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Clock },
    { number: '50+', label: 'Expert Team Members', icon: Users },
    { number: '24/7', label: 'Support Available', icon: Shield }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Content Promotion Banner */}
      <Suspense fallback={<div className="h-16"></div>}>
        <ContentPromotionBanner />
      </Suspense>

      <main id="main-content" className="relative z-10" role="main">
        {/* Hero Section */}
        <section
          className={`relative py-20 px-4 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          aria-labelledby="hero-heading"
        >
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h1 
                id="hero-heading" 
                className="text-6xl md:text-8xl font-bold mb-6 holographic glitch"
                data-text="Zion Tech Group"
              >
                Zion Tech Group
              </h1>
              <p className="text-2xl md:text-3xl text-cyan-400 mb-8 font-semibold" role="doc-subtitle">
                Advanced AI & IT Solutions
              </p>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and cutting-edge technology. 
                Transform your business with our innovative micro SAAS tools and comprehensive IT services.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="btn-neon flex items-center space-x-2 text-lg px-8 py-4"
                aria-label="Call us at +1 302 464 0950"
              >
                <Phone className="w-5 h-5" />
                <span>Call +1 302 464 0950</span>
              </a>
              <Link
                to="/services"
                className="glass border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 text-lg"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20 px-4" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="holographic">Featured Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to transform your business and drive innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredServices.map((service, index) => (
                <Suspense key={index} fallback={<ServiceCardSkeleton />}>
                  <div className="card-futuristic group hover:scale-105 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center neon-glow-${service.color}`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-4">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                      <div className="text-sm text-green-400 font-semibold">
                        Save up to 50% vs market rates
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={service.link}
                      className="w-full btn-neon flex items-center justify-center space-x-2 group-hover:scale-105 transition-transform"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </Suspense>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="holographic">Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with expert knowledge to deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">AI Expertise</h3>
                <p className="text-gray-300">PhD-level data scientists and AI researchers with proven industry experience</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow-green">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Rapid Deployment</h3>
                <p className="text-gray-300">Deploy AI solutions in weeks, not months with our streamlined process</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow-pink">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Custom Solutions</h3>
                <p className="text-gray-300">Tailored AI models and IT solutions for your specific business needs</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 pulse-neon">
                  <BarChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Proven ROI</h3>
                <p className="text-gray-300">Average 400% ROI within 12 months for our enterprise clients</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 floating">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security and compliance with industry standards</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
                <p className="text-gray-300">Always at the forefront of technology with cutting-edge solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Carousel */}
        <Suspense fallback={<div className="h-64"></div>}>
          <ContentCarousel />
        </Suspense>

        {/* Dynamic Content Showcase */}
        <Suspense fallback={<div className="h-64"></div>}>
          <DynamicContentShowcase />
        </Suspense>

        {/* Content Statistics */}
        <Suspense fallback={<div className="h-64"></div>}>
          <ContentStatistics />
        </Suspense>

        {/* Newsletter Signup */}
        <Suspense fallback={<div className="h-32"></div>}>
          <ContentNewsletterSignup />
        </Suspense>

        {/* Call to Action Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-blue-600" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Contact us today for a free consultation and custom solution recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-50 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                aria-label="Call us at +1 302 464 0950"
              >
                <Phone className="w-5 h-5" />
                <span>Call +1 302 464 0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
            <div className="mt-8 text-cyan-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
