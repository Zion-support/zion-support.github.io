'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import { ServiceCardSkeleton, StatsSkeleton } from './components/EnhancedLoadingStates';
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('./components/ContentStatistics'));
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));

// Preload critical components
const preloadComponents = () => {
  if (typeof window !== 'undefined') {
    // Preload critical components after initial render
    setTimeout(() => {
      import('./components/ContentPromotionBanner')
      import('./components/ContentCarousel')
    }, 100)
  }
};

const HomePage: React.FC = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    preloadComponents();
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence solutions that transform your business operations.',
      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions designed for modern businesses.',
      benefits: ['AWS/Azure/GCP', 'Microservices', 'Containerization', 'Auto-scaling']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      benefits: ['Threat Detection', 'Data Encryption', 'Compliance', 'Security Audits']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built specifically for your business needs.',
      benefits: ['Web Applications', 'Mobile Apps', 'API Development', 'Database Design']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights for better decision making.',
      benefits: ['Business Intelligence', 'Data Visualization', 'Real-time Analytics', 'Reporting']
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Expert guidance to optimize your technology infrastructure and strategy.',
      benefits: ['Technology Assessment', 'Digital Transformation', 'Process Optimization', 'Training']
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '99.9%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '50+', label: 'Expert Team Members', icon: Users }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CEO',
      content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 40%.',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CTO',
      content: 'Outstanding expertise in cloud migration and security. They delivered exactly what we needed.',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLab',
      role: 'Founder',
      content: 'The custom development team exceeded our expectations. Professional, reliable, and innovative.',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    }
  ];

  const handlePhoneClick = useCallback(() => {
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'contact',
        event_label: 'header_phone'
      });
    }
  }, []);

  const handleEmailClick = useCallback(() => {
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'email_click', {
        event_category: 'contact',
        event_label: 'header_email'
      });
    }
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center">
              <div className="animate-pulse">
                <div className="h-16 bg-gray-300 rounded mb-8 mx-auto w-3/4"></div>
                <div className="h-6 bg-gray-300 rounded mb-4 mx-auto w-1/2"></div>
                <div className="h-6 bg-gray-300 rounded mb-8 mx-auto w-2/3"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <PerformanceOptimizer />
      <SEOOptimizer />
      <AccessibilityEnhancer />
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                AI & IT Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We deliver cutting-edge artificial intelligence and information technology solutions 
              that drive growth, efficiency, and innovation for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                aria-label="Get started with our AI and IT solutions"
              >
                Get Started Today
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button 
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                aria-label="Learn more about our services"
              >
                Learn More
              </button>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how our AI and IT solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                onClick={handlePhoneClick}
              >
                <Phone className="inline-block mr-2 w-5 h-5" />
                Call Us Now
              </button>
              <button 
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
                onClick={handleEmailClick}
              >
                <Mail className="inline-block mr-2 w-5 h-5" />
                Send Email
              </button>
            </div>
          </div>
        </section>

        {/* Dynamic Content Sections */}
        <Suspense fallback={<div className="h-32 bg-gray-800 animate-pulse rounded-lg mx-4" />}>
          <ContentPromotionBanner />
        </Suspense>
        
        <Suspense fallback={<div className="h-64 bg-gray-800 animate-pulse rounded-lg mx-4 my-8" />}>
          <ContentCarousel />
        </Suspense>
        
        <Suspense fallback={<div className="h-48 bg-gray-800 animate-pulse rounded-lg mx-4 my-8" />}>
          <DynamicContentShowcase />
        </Suspense>
        
        <Suspense fallback={<div className="h-32 bg-gray-800 animate-pulse rounded-lg mx-4 my-8" />}>
          <ContentStatistics />
        </Suspense>
        
        <Suspense fallback={<div className="h-48 bg-gray-800 animate-pulse rounded-lg mx-4 my-8" />}>
          <ContentNewsletterSignup />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;