'use client';
import React, { useState, useEffect, useCallback, memo, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle, Star, Users, Globe, Brain, Zap, Shield } from 'lucide-react';
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
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
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

  // Services data
  const services = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning technologies.'
    },
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'Get up and running quickly with our streamlined deployment and integration processes.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security and compliance to protect your most sensitive data and operations.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 support from our team of certified professionals and industry experts.'
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
          className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid neural-network-bg"
          role="banner"
          aria-label="Hero section with company introduction"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" aria-hidden="true"></div>
          <div className="absolute inset-0 particle-field" aria-hidden="true"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight cyber-text neon-pulse">
              Advanced AI & IT
              <span className="block holographic-text">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-3xl mx-auto neon-glow">
              Transform your business with cutting-edge artificial intelligence, cloud infrastructure, and innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                onClick={() => handleCTAClick('hero_get_started')}
                aria-label="Get started with Zion Tech Group services"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                onClick={() => handleCTAClick('hero_explore_services')}
                aria-label="Explore our comprehensive service offerings"
              >
                Explore Services
              </Link>
            </div>
            
            {/* Contact Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto" role="complementary" aria-label="Contact information">
              <div className="cyber-card p-4 text-center">
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
              <div className="cyber-card p-4 text-center">
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
              <div className="cyber-card p-4 text-center">
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

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 cyber-scan-line" role="region" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text">
                Our <span className="holographic-text">Services</span>
              </h2>
              <p className="text-xl text-cyan-400 max-w-3xl mx-auto neon-glow">
                Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
              {services.map((service, index) => (
                <article key={index} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse" role="listitem">
                  <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors animate-float" aria-hidden="true">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 neural-pattern" role="region" aria-labelledby="testimonials-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text">
                What Our <span className="holographic-text">Clients Say</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
              {testimonials.map((testimonial, index) => (
                <blockquote key={index} className="hologram-card p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 group" role="listitem">
                  <div className="flex mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current animate-pulse" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic neon-glow">"{testimonial.content}"</p>
                  <footer>
                    <cite className="font-semibold text-white not-italic">{testimonial.name}</cite>
                    <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 cyber-scan-effect" role="region" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-400 mb-8 neon-glow">
              Let's discuss how our AI and IT solutions can accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                aria-label="Call Zion Tech Group at (302) 464-0950 to discuss your project"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call (302) 464-0950
              </a>
              <Link
                to="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                onClick={() => handleCTAClick('cta_get_quote')}
                aria-label="Get a quote for your AI and IT solutions"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                Get Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Lazy loaded components */}
        <Suspense fallback={<ServiceCardSkeleton />}>
          <ContentPromotionBanner />
        </Suspense>
        <Suspense fallback={<ServiceCardSkeleton />}>
          <ContentCarousel />
        </Suspense>
        <Suspense fallback={<ServiceCardSkeleton />}>
          <DynamicContentShowcase />
        </Suspense>
        <Suspense fallback={<ServiceCardSkeleton />}>
          <ContentStatistics />
        </Suspense>
        <Suspense fallback={<ServiceCardSkeleton />}>
          <ContentNewsletterSignup />
        </Suspense>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;