import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
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
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence services to transform your business operations.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions for modern businesses.",
      features: ["AWS/Azure/GCP", "Cloud Migration", "DevOps", "Containerization"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
      features: ["Security Audits", "Threat Detection", "Compliance", "Incident Response"]
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions built to meet your specific needs.",
      features: ["Web Applications", "Mobile Apps", "API Development", "Database Design"]
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-white">Loading Zion Tech Group...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid-advanced neural-network-bg matrix-rain-enhanced"
        role="banner"
        aria-label="Hero section with company introduction"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" aria-hidden="true"></div>
        <div className="absolute inset-0 particle-system" aria-hidden="true"></div>
        <div className="absolute inset-0 quantum-field" aria-hidden="true"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full animate-float" aria-hidden="true"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400/20 rounded-full animate-float" style={{animationDelay: '1s'}} aria-hidden="true"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-green-400/20 rounded-full animate-float" style={{animationDelay: '2s'}} aria-hidden="true"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-pink-400/20 rounded-full animate-float" style={{animationDelay: '3s'}} aria-hidden="true"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6">
              <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider cyber-text">
                🚀 Leading AI & IT Innovation
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight cyber-text-enhanced neon-pulse">
            Advanced AI & IT
            <span className="block holographic-text-enhanced cyber-glow-enhanced">
              Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-cyan-400 mb-8 max-w-4xl mx-auto neon-glow cyber-glow-enhanced">
            Transform your business with cutting-edge artificial intelligence, cloud infrastructure, and innovative technology solutions that drive real results.
          </p>
          
          {/* Stats Counter */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="cyber-card-enhanced p-4 text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 cyber-glow-enhanced">500+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>
            <div className="cyber-card-enhanced p-4 text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 cyber-glow-enhanced">99.9%</div>
              <div className="text-sm text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="cyber-card-enhanced p-4 text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2 cyber-glow-enhanced">24/7</div>
              <div className="text-sm text-gray-300">Support Available</div>
            </div>
            <div className="cyber-card-enhanced p-4 text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2 cyber-glow-enhanced">5+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button-advanced px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
              onClick={() => handleCTAClick('hero_get_started')}
              aria-label="Get started with Zion Tech Group services"
            >
              <Rocket className="w-5 h-5 inline mr-2" />
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 neon-glow cyber-glow-enhanced focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
              onClick={() => handleCTAClick('hero_explore_services')}
              aria-label="Explore our comprehensive service offerings"
            >
              <Eye className="w-5 h-5 inline mr-2" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 cyber-scan-line-enhanced quantum-shimmer" role="region" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-400/30 mb-6">
              <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider cyber-text">
                ⚡ Advanced Technology Solutions
              </span>
            </div>
            <h2 id="services-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 cyber-text-enhanced neon-pulse">
              Our <span className="holographic-text-enhanced cyber-glow-enhanced">Services</span>
            </h2>
            <p className="text-xl md:text-2xl text-cyan-400 max-w-4xl mx-auto neon-glow cyber-glow-enhanced">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation with cutting-edge AI and IT innovations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
            {services.map((service, index) => (
              <article key={index} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse cyber-glow-pulse" role="listitem">
                <div className="relative">
                  <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors animate-float quantum-rotation" aria-hidden="true">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <div className="absolute top-0 right-0 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" aria-hidden="true"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-glow cyber-glow-enhanced">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2" role="list">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400 group-hover:text-cyan-300 transition-colors">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0 group-hover:text-green-400 transition-colors" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-cyan-400/20">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-cyan-400 font-semibold">Learn More</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Service Categories Quick Links */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <Link to="/ai-services" className="cyber-card-enhanced p-4 group hover:scale-105 transition-all duration-300">
                <Brain className="w-8 h-8 text-purple-400 mx-auto mb-2 group-hover:text-purple-300 transition-colors" />
                <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">AI Services</div>
              </Link>
              <Link to="/micro-saas" className="cyber-card-enhanced p-4 group hover:scale-105 transition-all duration-300">
                <Code className="w-8 h-8 text-green-400 mx-auto mb-2 group-hover:text-green-300 transition-colors" />
                <div className="text-sm font-semibold text-white group-hover:text-green-300 transition-colors">Micro SAAS</div>
              </Link>
              <Link to="/it-consulting" className="cyber-card-enhanced p-4 group hover:scale-105 transition-all duration-300">
                <Cloud className="w-8 h-8 text-blue-400 mx-auto mb-2 group-hover:text-blue-300 transition-colors" />
                <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">IT Services</div>
              </Link>
              <Link to="/contact" className="cyber-card-enhanced p-4 group hover:scale-105 transition-all duration-300">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2 group-hover:text-cyan-300 transition-colors" />
                <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">Get Quote</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 neural-pattern holographic-border" role="region" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-400/30 mb-6">
              <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider cyber-text">
                ⭐ Client Success Stories
              </span>
            </div>
            <h2 id="testimonials-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 cyber-text-enhanced neon-pulse">
              What Our <span className="holographic-text-enhanced cyber-glow-enhanced">Clients Say</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
            {testimonials.map((testimonial, index) => (
              <blockquote key={index} className="hologram-card p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 group cyber-glow-pulse" role="listitem">
                <div className="flex items-center mb-4">
                  <div className="flex mb-2" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current animate-pulse" aria-hidden="true" />
                    ))}
                  </div>
                  <div className="ml-auto">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic neon-glow cyber-glow-enhanced">"{testimonial.content}"</p>
                <footer className="border-t border-cyan-400/20 pt-4">
                  <cite className="font-semibold text-white not-italic cyber-glow-enhanced">{testimonial.name}</cite>
                  <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                </footer>
              </blockquote>
            ))}
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="cyber-card-enhanced p-4">
                <div className="text-2xl font-bold text-cyan-400 mb-1">500+</div>
                <div className="text-xs text-gray-400">Happy Clients</div>
              </div>
              <div className="cyber-card-enhanced p-4">
                <div className="text-2xl font-bold text-purple-400 mb-1">99%</div>
                <div className="text-xs text-gray-400">Satisfaction Rate</div>
              </div>
              <div className="cyber-card-enhanced p-4">
                <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
                <div className="text-xs text-gray-400">Support</div>
              </div>
              <div className="cyber-card-enhanced p-4">
                <div className="text-2xl font-bold text-pink-400 mb-1">5★</div>
                <div className="text-xs text-gray-400">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 cyber-scan-effect quantum-field" role="region" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full border border-green-400/30 mb-6">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider cyber-text">
              🚀 Ready to Get Started?
            </span>
          </div>
          <h2 id="cta-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 cyber-text-enhanced neon-pulse">
            Ready to Transform Your <span className="holographic-text-enhanced cyber-glow-enhanced">Business?</span>
          </h2>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 neon-glow cyber-glow-enhanced">
            Let's discuss how our AI and IT solutions can accelerate your digital transformation and drive real business results.
          </p>
          
          {/* Contact Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="cyber-card-enhanced p-6 group hover:scale-105 transition-all duration-300">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4 group-hover:text-cyan-300 transition-colors" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-sm text-gray-400 mb-4">Speak directly with our experts</p>
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
                aria-label="Call Zion Tech Group at (302) 464-0950"
              >
                (302) 464-0950
              </a>
            </div>
            <div className="cyber-card-enhanced p-6 group hover:scale-105 transition-all duration-300">
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4 group-hover:text-purple-300 transition-colors" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-sm text-gray-400 mb-4">Get a detailed response</p>
              <a
                href="mailto:kleber@ziontechgroup.com"
                onClick={handleEmailClick}
                className="text-purple-400 font-semibold hover:text-purple-300 transition-colors"
                aria-label="Email Zion Tech Group at kleber@ziontechgroup.com"
              >
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="cyber-card-enhanced p-6 group hover:scale-105 transition-all duration-300">
              <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4 group-hover:text-green-300 transition-colors" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-sm text-gray-400 mb-4">Come see us in person</p>
              <address className="text-green-400 font-semibold not-italic">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </address>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="cyber-button-advanced px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
              aria-label="Call Zion Tech Group at (302) 464-0950 to discuss your project"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call (302) 464-0950
            </a>
            <Link
              to="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 neon-glow cyber-glow-enhanced focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
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
  );
};

export default HomePage;