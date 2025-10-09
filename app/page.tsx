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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Advanced AI & IT
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence, cloud infrastructure, and innovative technology solutions. 
            We help enterprises achieve digital transformation through AI-powered automation and scalable IT infrastructure.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">5+</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
              aria-label="Get started with our AI and IT solutions"
            >
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
              aria-label="Explore our comprehensive services"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5" aria-labelledby="technology-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="technology-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest technologies to deliver innovative solutions that drive business success.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'Machine Learning', icon: Brain, color: 'text-cyan-400' },
              { name: 'Cloud Computing', icon: Cloud, color: 'text-blue-400' },
              { name: 'Cybersecurity', icon: Shield, color: 'text-red-400' },
              { name: 'Blockchain', icon: Database, color: 'text-green-400' },
              { name: 'IoT', icon: Smartphone, color: 'text-purple-400' },
              { name: 'Quantum Computing', icon: Cpu, color: 'text-yellow-400' }
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className={`${tech.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-sm font-semibold text-white">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                  <service.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="mt-4 inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="case-studies-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="case-studies-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with our AI and IT solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce AI Optimization",
                description: "Increased conversion rates by 40% using AI-powered personalization",
                metrics: "40% increase in conversions",
                industry: "E-commerce"
              },
              {
                title: "Healthcare Data Analytics",
                description: "Reduced patient wait times by 60% with predictive analytics",
                metrics: "60% reduction in wait times",
                industry: "Healthcare"
              },
              {
                title: "Financial Services Automation",
                description: "Automated 80% of manual processes using AI workflow automation",
                metrics: "80% process automation",
                industry: "Fintech"
              }
            ].map((caseStudy, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-cyan-400 text-sm font-semibold mb-2">{caseStudy.industry}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-300 mb-4">{caseStudy.description}</p>
                <div className="text-cyan-400 font-bold text-lg mb-4">{caseStudy.metrics}</div>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300"
                  aria-label={`Read full case study: ${caseStudy.title}`}
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600/20 to-purple-600/20" aria-labelledby="newsletter-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="newsletter-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Updated</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest insights on AI, IT trends, and technology innovations delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                aria-label="Email address for newsletter"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-400 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI and IT solutions can accelerate your digital transformation. 
            Get a free consultation and discover the possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
              aria-label="Call us at (302) 464-0950"
            >
              <Phone className="w-5 h-5" />
              Call (302) 464-0950
            </a>
            <Link
              to="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
              aria-label="Get a free quote"
            >
              <Mail className="w-5 h-5" />
              Get Free Quote
            </Link>
            <Link
              to="/consultation"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-purple-400/50"
              aria-label="Schedule a consultation"
            >
              <Calendar className="w-5 h-5" />
              Schedule Consultation
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
