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
      description: "Cutting-edge artificial intelligence services to transform your business operations with machine learning, NLP, and computer vision.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "Deep Learning", "Neural Networks"],
      pricing: "Starting at $199/month",
      marketPrice: "$399/month",
      link: "https://ziontechgroup.com/ai-services"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions for modern businesses with 99.9% uptime guarantee and enterprise-grade security.",
      features: ["AWS/Azure/GCP", "Cloud Migration", "DevOps", "Containerization", "Auto-scaling", "Disaster Recovery"],
      pricing: "Starting at $299/month",
      marketPrice: "$599/month",
      link: "https://ziontechgroup.com/cloud-infrastructure"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets with advanced threat detection and compliance management.",
      features: ["Security Audits", "Threat Detection", "Compliance", "Incident Response", "Penetration Testing", "Security Training"],
      pricing: "Starting at $249/month",
      marketPrice: "$499/month",
      link: "https://ziontechgroup.com/cybersecurity"
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions built to meet your specific needs with modern technologies and agile development methodology.",
      features: ["Web Applications", "Mobile Apps", "API Development", "Database Design", "Microservices", "Legacy Modernization"],
      pricing: "Starting at $149/hour",
      marketPrice: "$299/hour",
      link: "https://ziontechgroup.com/custom-development"
    },
    {
      icon: BarChart,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics, business intelligence, and data visualization tools.",
      features: ["Business Intelligence", "Data Visualization", "Predictive Analytics", "Real-time Dashboards", "Data Mining", "Statistical Analysis"],
      pricing: "Starting at $179/month",
      marketPrice: "$359/month",
      link: "https://ziontechgroup.com/data-analytics"
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Automate complex business processes with intelligent workflow automation, RPA, and AI-powered decision making.",
      features: ["Workflow Automation", "RPA", "AI Decision Making", "Process Optimization", "Integration", "Monitoring"],
      pricing: "Starting at $129/month",
      marketPrice: "$259/month",
      link: "https://ziontechgroup.com/process-automation"
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid neural-network-bg">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="absolute inset-0 particle-field"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight cyber-text neon-pulse">
            Advanced AI & IT
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 holographic-text">
              Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence, cloud infrastructure, and innovative technology solutions.
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto">
            Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. 
            Trusted by 500+ companies worldwide with 99.9% uptime guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free Quote
            </a>
          </div>
          
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/20">
              <Phone className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <p className="text-white font-semibold">+1 302 464 0950</p>
              <p className="text-gray-400 text-sm">24/7 Support</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/20">
              <Mail className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">Email Us</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/20">
              <MapPin className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Middletown, DE</p>
              <p className="text-gray-400 text-sm">364 E Main St STE 1008</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group cyber-card">
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                  <service.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-cyan-400 font-semibold">{service.pricing}</span>
                    {service.marketPrice && (
                      <span className="text-gray-500 text-sm line-through">{service.marketPrice}</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Clients Say</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 cyber-grid">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12 border border-white/20 cyber-card">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
                Let's discuss how our AI and IT solutions can accelerate your digital transformation. 
                Get a free consultation and custom solution recommendation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">500+ Successful Projects</h4>
                      <p className="text-gray-300 text-sm">Proven track record across industries</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">99.9% Uptime Guarantee</h4>
                      <p className="text-gray-300 text-sm">Enterprise-grade reliability</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">300% Average ROI</h4>
                      <p className="text-gray-300 text-sm">Measurable business impact</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">24/7 Expert Support</h4>
                      <p className="text-gray-300 text-sm">Always here when you need us</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+13024640950"
                    onClick={handlePhoneClick}
                    className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
                  >
                    <Phone className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
                    <div>
                      <p className="text-white font-semibold">+1 302 464 0950</p>
                      <p className="text-gray-400 text-sm">Call us anytime</p>
                    </div>
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
                  >
                    <Mail className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
                    <div>
                      <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                      <p className="text-gray-400 text-sm">Email us</p>
                    </div>
                  </a>
                  <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg border border-white/20">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                    <div>
                      <p className="text-white font-semibold">Middletown, DE 19709</p>
                      <p className="text-gray-400 text-sm">364 E Main St STE 1008</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Free Quote
              </a>
            </div>
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