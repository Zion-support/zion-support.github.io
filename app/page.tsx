'use client';
import React, { useEffect, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import { Brain, Cloud, Shield, Zap, ArrowRight, CheckCircle, Star, Users, Globe, Code, BarChart, Target, Sparkles, Cpu, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart, Rocket } from 'lucide-react';

// Loading skeleton component
const ServiceCardSkeleton = () => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
);

// Content promotion banner component
const ContentPromotionBanner = () => (
  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 text-center">
    <p className="text-sm font-medium">
      🚀 New: AI-Powered Business Solutions - Transform Your Operations Today!
    </p>
  </div>
);

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions that transform your business operations.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions to power your digital transformation.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security measures to protect your business from evolving threats.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Zap,
      title: 'Digital Innovation',
      description: 'Innovative technologies to accelerate your business growth and efficiency.',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'AI Solutions Deployed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  const aiServices = [
    {
      icon: Brain,
      name: 'AI Consulting',
      description: 'Strategic AI implementation and optimization for your business needs.'
    },
    {
      icon: BarChart,
      name: 'Data Analytics',
      description: 'Advanced analytics and insights to drive data-driven decisions.'
    },
    {
      icon: MessageCircle,
      name: 'Chatbots & NLP',
      description: 'Intelligent conversational AI for enhanced customer experience.'
    },
    {
      icon: Eye,
      name: 'Computer Vision',
      description: 'Visual recognition and image processing solutions.'
    },
    {
      icon: Workflow,
      name: 'Process Automation',
      description: 'Streamline operations with intelligent automation systems.'
    },
    {
      icon: Target,
      name: 'Predictive Analytics',
      description: 'Forecast trends and make proactive business decisions.'
    }
  ];

  const itServices = [
    {
      icon: Cloud,
      name: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with zero downtime.'
    },
    {
      icon: Server,
      name: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure setup and maintenance.'
    },
    {
      icon: Shield,
      name: 'Security Solutions',
      description: 'End-to-end cybersecurity and compliance management.'
    },
    {
      icon: Database,
      name: 'Database Management',
      description: 'Optimized database design and performance tuning.'
    },
    {
      icon: Smartphone,
      name: 'Mobile Development',
      description: 'Cross-platform mobile applications for iOS and Android.'
    },
    {
      icon: Globe,
      name: 'Web Development',
      description: 'Modern, responsive web applications and e-commerce solutions.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions | Leading Technology Company</title>
        <meta name="description" content="Transform your business with cutting-edge AI and IT solutions. Expert services in artificial intelligence, cloud computing, cybersecurity, and digital transformation." />
        <meta name="keywords" content="AI solutions, cloud computing, cybersecurity, digital transformation, machine learning, IT consulting" />
        <meta property="og:title" content="Zion Tech Group - AI & IT Solutions" />
        <meta property="og:description" content="Leading provider of AI and IT solutions for modern businesses" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - AI & IT Solutions" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI and IT solutions" />
      </Helmet>

      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transforming businesses through cutting-edge AI and IT solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Get Started
                </button>
                <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              AI Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                  <service.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* IT Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              IT Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Complete IT solutions to modernize your infrastructure and drive business growth
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                  <service.icon className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16" aria-labelledby="cta-heading">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20">
              <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI and IT solutions can accelerate your digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Start Your Project Today
                </button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;