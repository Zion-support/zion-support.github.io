'use client';
import React, { useState, useEffect, useCallback, memo, lazy, Suspense } from 'react';
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import { ServiceCardSkeleton, StatsSkeleton } from './components/EnhancedLoadingStates';
import StructuredData from './components/StructuredData';
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));

// Performance optimization: Debounce scroll events
const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Memoized components for better performance
const ServiceCard = memo(({ icon: Icon, title, description, features, href, delay = 0 }: {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  href: string;
  delay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="flex flex-col h-full">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-300 mb-6 flex-grow group-hover:text-gray-200 transition-colors">
          {description}
        </p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        
        <a
          href={href}
          className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-all duration-300"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

const StatsCard = memo(({ icon: Icon, value, label, delay = 0 }: {
  icon: React.ComponentType<any>;
  value: string;
  label: string;
  delay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-500`}>
      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-3xl font-bold text-white mb-2">{value}</div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
});

StatsCard.displayName = 'StatsCard';

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  // Performance optimization: Debounced scroll handler
  const handleScroll = useCallback(
    debounce(() => {
      setScrollY(window.scrollY);
    }, 10),
    []
  );

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => setIsLoading(false), 1000);
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Comprehensive artificial intelligence services including machine learning, natural language processing, and computer vision.',
      features: ['Machine Learning Models', 'NLP Processing', 'Computer Vision', 'Predictive Analytics'],
      href: '/ai-solutions'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud Platform integration.',
      features: ['Cloud Migration', 'Auto-scaling', 'Security', 'Cost Optimization'],
      href: '/cloud-infrastructure'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets and ensure compliance.',
      features: ['Security Audits', 'Threat Detection', 'Compliance', 'Incident Response'],
      href: '/cybersecurity'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built with modern technologies and best practices.',
      features: ['Web Applications', 'Mobile Apps', 'APIs', 'Database Design'],
      href: '/custom-development'
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: ['Data Visualization', 'Business Intelligence', 'Reporting', 'Predictive Modeling'],
      href: '/data-analytics'
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Expert guidance on technology strategy, digital transformation, and process optimization.',
      features: ['Strategy Planning', 'Digital Transformation', 'Process Optimization', 'Training'],
      href: '/consultation'
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: CheckCircle, value: '1000+', label: 'Projects Completed' },
    { icon: Star, value: '99%', label: 'Client Satisfaction' },
    { icon: Clock, value: '24/7', label: 'Support Available' }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <div className="text-white text-xl font-semibold">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <PerformanceOptimizer />
      <SEOOptimizer />
      <AccessibilityEnhancer />
      <StructuredData />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI & IT Solutions
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              for the Future
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge artificial intelligence and information technology solutions. 
            We deliver innovative, scalable, and secure solutions that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatsCard
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your digital transformation and drive business success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                href={service.href}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI and IT solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Carousel */}
      <Suspense fallback={<div className="h-64 bg-gray-800 rounded-lg animate-pulse" />}>
        <ContentCarousel />
      </Suspense>

      {/* Content Promotion Banner */}
      <Suspense fallback={<div className="h-32 bg-gray-800 rounded-lg animate-pulse" />}>
        <ContentPromotionBanner />
      </Suspense>
    </div>
  );
};

export default HomePage;