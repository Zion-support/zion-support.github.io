'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import { 
  Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, 
  Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, 
  Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, 
  Calendar, CheckSquare, FileText, DollarSign, Award, Rocket, 
  Layers, Workflow, BarChart3, MessageSquare, Headphones, Monitor, 
  HardDrive, Wifi, Printer, Router, Package, Heart, Eye, Mic 
} from 'lucide-react';

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
      import('./components/ContentPromotionBanner');
      import('./components/ContentCarousel');
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
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    preloadComponents();
    setIsLoaded(true);
    // Trigger visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Service data
  const aiServices = [
    { name: 'AI Analytics', description: 'Advanced data insights', icon: BarChart, href: '/ai-analytics' },
    { name: 'AI Automation', description: 'Streamline workflows', icon: Zap, href: '/ai-automation' },
    { name: 'AI Chatbot', description: 'Intelligent conversations', icon: MessageSquare, href: '/ai-chatbot-builder' },
    { name: 'AI CRM', description: 'Customer relationship management', icon: Users, href: '/ai-crm' },
    { name: 'AI Cybersecurity', description: 'Advanced threat protection', icon: Shield, href: '/ai-cybersecurity' },
    { name: 'AI Data Analytics', description: 'Data-driven insights', icon: Database, href: '/ai-data-analytics' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', description: 'Scalable cloud solutions', icon: Cloud, href: '/cloud-infrastructure' },
    { name: 'API Development', description: 'API development & management', icon: Code, href: '/api-development' },
    { name: 'Cybersecurity', description: 'Comprehensive security', icon: Shield, href: '/cybersecurity-solutions' },
    { name: 'Database Management', description: 'Data processing & storage', icon: Database, href: '/database-management' },
    { name: 'Mobile Development', description: 'iOS & Android apps', icon: Smartphone, href: '/mobile-development' },
    { name: 'Web Development', description: 'Modern web applications', icon: Globe, href: '/web-development' }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', description: 'Business intelligence platform', icon: BarChart, href: '/zion-analytics-pro' },
    { name: 'Zion Chat AI', description: 'AI customer support', icon: MessageSquare, href: '/zion-chat-ai' },
    { name: 'Zion Security Shield', description: 'Cybersecurity monitoring', icon: Shield, href: '/zion-security-shield' },
    { name: 'Zion Cloud Vault', description: 'Cloud backup & recovery', icon: Cloud, href: '/zion-cloud-vault' },
    { name: 'Zion Content Studio', description: 'AI content creation', icon: FileText, href: '/zion-content-studio' },
    { name: 'Zion CRM Intelligence', description: 'AI-enhanced CRM', icon: Users, href: '/zion-crm-intelligence' }
  ];

  const stats = [
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '70%', label: 'Cost Reduction', icon: DollarSign },
    { number: '90%', label: 'Efficiency Gains', icon: Zap },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to transform your business operations and drive innovation.',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions that grow with your business needs.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced cybersecurity measures to protect your data and ensure compliance.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions designed specifically for your unique business requirements.',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains. Leading provider of AI and IT solutions."
        keywords={['AI solutions', 'artificial intelligence', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services', 'IT consulting']}
        canonicalUrl="https://ziontechgroup.com"
      />
      
      <PerformanceOptimizer>
        <AccessibilityEnhancer>
          <Navigation />
          
          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent"></div>
            
            <div className="relative max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Transform Your Business
                </span>
                <br />
                <span className="text-white">With AI & IT Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Achieve <span className="text-cyan-400 font-semibold">300% ROI</span>, 
                <span className="text-purple-400 font-semibold"> 70% cost reduction</span>, and 
                <span className="text-pink-400 font-semibold"> 90% efficiency gains</span> with our cutting-edge AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  Get Free Consultation
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105">
                  View Our Solutions
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Why Choose Zion Tech Group?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We deliver cutting-edge technology solutions that drive real business results.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Our Services
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive AI and IT solutions tailored to your business needs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* AI Services */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">AI Services</h3>
                  </div>
                  <div className="space-y-4">
                    {aiServices.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <service.icon className="w-5 h-5 text-cyan-400" />
                        <span className="text-gray-300">{service.name}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    View All AI Services
                  </button>
                </div>

                {/* IT Services */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                      <Cloud className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">IT Services</h3>
                  </div>
                  <div className="space-y-4">
                    {itServices.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <service.icon className="w-5 h-5 text-purple-400" />
                        <span className="text-gray-300">{service.name}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                    View All IT Services
                  </button>
                </div>

                {/* Micro SaaS */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Micro SaaS</h3>
                  </div>
                  <div className="space-y-4">
                    {microSaasServices.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <service.icon className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">{service.name}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                    View All Micro SaaS
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Get a free consultation and discover how our AI and IT solutions can drive your success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Schedule Free Consultation
                    <ArrowRight className="inline-block ml-2 w-5 h-5" />
                  </button>
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                    Call (302) 464-0950
                  </button>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </AccessibilityEnhancer>
      </PerformanceOptimizer>
    </div>
  );
};

export default HomePage;