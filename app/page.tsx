'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, 
  BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, 
  Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, 
  Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, 
  Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, 
  GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, 
  Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, 
  Activity, Zap as Lightning, Target as Crosshair, Shield as Security, 
  Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, 
  Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Cube, Mic, 
  DollarSign, Truck, Link, HardDrive, FileCheck 
} from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import SEOHead from './components/SEOHead';
import AnalyticsHead from './components/AnalyticsHead';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import { ServiceCardSkeleton, HeroSkeleton } from './components/LoadingSkeleton';

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
      import('./components/ContentPromotionBanner');
      import('./components/ContentCarousel');
    }, 100);
  }
};

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    setIsHydrated(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    preloadComponents();
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

  // Contact information
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const microSAASServices = [
    // Productivity & Management Tools
    {
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment. Trusted by 10,000+ teams worldwide.',
      icon: '📊',
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Resource optimization', 'Gantt charts', 'Time tracking'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity',
      rating: 4.9,
      users: '10,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Task Manager Pro',
      description: 'Smart task management with AI prioritization, deadline prediction, and productivity insights. Boost your productivity by 60%.',
      icon: '✅',
      price: '$49/month',
      originalPrice: '$79/month',
      features: ['AI task prioritization', 'Smart scheduling', 'Progress tracking', 'Team collaboration', 'Deadline alerts', 'Productivity analytics', 'Habit tracking', 'Goal setting'],
      benefits: ['60% productivity boost', '50% better time management', '90% task completion rate', '25% less stress'],
      link: '/task-manager-pro',
      popular: false,
      category: 'Productivity',
      rating: 4.8,
      users: '5,000+',
      freeTrial: '7 days'
    },
    {
      title: 'AI CRM Intelligence',
      description: 'Revolutionary CRM with AI-powered lead scoring, automated follow-ups, and predictive sales analytics. Increase sales by 45%.',
      icon: '💼',
      price: '$79/month',
      originalPrice: '$120/month',
      features: ['AI lead scoring', 'Automated follow-ups', 'Predictive analytics', 'Sales forecasting', 'Customer insights', 'Pipeline management', 'Email automation', 'Integration hub'],
      benefits: ['45% sales increase', '60% better lead quality', '35% faster deal closure', '50% time savings'],
      link: '/ai-crm',
      popular: true,
      category: 'Sales & Marketing',
      rating: 4.9,
      users: '8,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Content Writer Pro',
      description: 'Advanced AI content creation with SEO optimization, brand voice consistency, and multi-language support. Create 10x more content.',
      icon: '✍️',
      price: '$59/month',
      originalPrice: '$89/month',
      features: ['SEO optimization', 'Brand voice training', 'Multi-language support', 'Content templates', 'Plagiarism detection', 'Grammar checking', 'Tone adjustment', 'Bulk generation'],
      benefits: ['10x content output', '95% SEO score', '80% time savings', '300% engagement increase'],
      link: '/ai-content-writer',
      popular: false,
      category: 'Content & Marketing',
      rating: 4.7,
      users: '12,000+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Email Assistant',
      description: 'Smart email management with AI-powered responses, scheduling, and priority sorting. Master your inbox in minutes.',
      icon: '📧',
      price: '$39/month',
      originalPrice: '$59/month',
      features: ['Smart email sorting', 'AI responses', 'Auto-scheduling', 'Priority detection', 'Spam filtering', 'Template library', 'Follow-up reminders', 'Analytics dashboard'],
      benefits: ['70% inbox efficiency', '50% response time', '90% accuracy', '60% time savings'],
      link: '/ai-email-assistant',
      popular: false,
      category: 'Productivity',
      rating: 4.6,
      users: '6,000+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Complete social media automation with AI content creation, optimal posting times, and engagement analytics.',
      icon: '📱',
      price: '$69/month',
      originalPrice: '$99/month',
      features: ['Multi-platform posting', 'AI content creation', 'Optimal timing', 'Engagement analytics', 'Hashtag optimization', 'Competitor analysis', 'Scheduling', 'Performance tracking'],
      benefits: ['300% engagement boost', '80% time savings', '200% follower growth', '95% consistency'],
      link: '/ai-social-media-manager',
      popular: true,
      category: 'Content & Marketing',
      rating: 4.8,
      users: '9,000+',
      freeTrial: '14 days'
    }
  ];

  if (!isLoaded) {
    return <HeroSkeleton />;
  }

  return (
    <ErrorBoundary>
      <SEOHead />
      <AnalyticsHead />
      <AccessibilityEnhancer />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now: {contactInfo.phone}</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200 flex items-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Quote</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Micro SAAS Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from 50+ AI-powered tools designed to transform your business operations and boost productivity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSAASServices.map((service, index) => (
                <div
                  key={index}
                  className={`bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                    service.popular ? 'ring-2 ring-cyan-500/50' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-semibold">{service.rating}</span>
                      </div>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-300">{service.users} users</span>
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                      <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                    </div>
                    <span className="text-cyan-400 text-sm font-semibold">
                      {service.freeTrial} free trial
                    </span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="bg-slate-700/50 rounded-lg p-2 text-center">
                          <span className="text-cyan-400 text-sm font-bold">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get in touch with our experts to discuss your AI and IT transformation needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-4">{contactInfo.phone}</p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  onClick={handlePhoneClick}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                >
                  Call Now
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-4">{contactInfo.email}</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                >
                  Send Email
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300 mb-4">{contactInfo.address}</p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Lazy loaded components */}
        <Suspense fallback={<div className="h-32 bg-slate-800 animate-pulse rounded-lg mx-4"></div>}>
          <ContentPromotionBanner />
        </Suspense>

        <Suspense fallback={<div className="h-64 bg-slate-800 animate-pulse rounded-lg mx-4"></div>}>
          <ContentCarousel />
        </Suspense>

        <Suspense fallback={<div className="h-48 bg-slate-800 animate-pulse rounded-lg mx-4"></div>}>
          <DynamicContentShowcase />
        </Suspense>

        <Suspense fallback={<div className="h-32 bg-slate-800 animate-pulse rounded-lg mx-4"></div>}>
          <ContentStatistics />
        </Suspense>

        <Suspense fallback={<div className="h-24 bg-slate-800 animate-pulse rounded-lg mx-4"></div>}>
          <ContentNewsletterSignup />
        </Suspense>

        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default memo(HomePage);