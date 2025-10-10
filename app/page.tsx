'use client';

import React, { useState, useEffect, Suspense, memo } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ContentPromotionBanner } from './components/ContentPromotionBanner';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Code, 
  BarChart,
  Target,
  Globe,
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  Settings,
  Calendar,
  CheckSquare,
  FileText,
  Search,
  Sparkles,
  Cpu,
  Play,
  ChevronRight
} from 'lucide-react';

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-4 bg-gray-300 rounded mb-4"></div>
    <div className="h-3 bg-gray-300 rounded mb-2"></div>
    <div className="h-3 bg-gray-300 rounded"></div>
  </div>
));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const aiServices = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Comprehensive AI solutions for business transformation',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
      href: '/ai-services'
    },
    {
      icon: Target,
      title: 'AI Marketing',
      description: 'AI-powered marketing automation and optimization',
      features: ['Campaign Automation', 'Customer Segmentation', 'Predictive Analytics'],
      href: '/ai-marketing'
    },
    {
      icon: Settings,
      title: 'AI Automation',
      description: 'Intelligent process automation for efficiency',
      features: ['Workflow Automation', 'Document Processing', 'Task Optimization'],
      href: '/ai-automation'
    },
    {
      icon: Shield,
      title: 'AI Healthcare',
      description: 'Medical AI solutions for better patient care',
      features: ['Diagnostic AI', 'Treatment Planning', 'Medical Imaging'],
      href: '/ai-healthcare'
    },
    {
      icon: TrendingUp,
      title: 'AI Fintech',
      description: 'Financial AI applications for smart banking',
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading'],
      href: '/ai-fintech'
    },
    {
      icon: FileText,
      title: 'AI Content Generation',
      description: 'AI-powered content creation and management',
      features: ['Text Generation', 'Image Creation', 'Content Optimization'],
      href: '/ai-content-generation'
    }
  ];

  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern businesses',
      features: ['AWS Migration', 'Azure Solutions', 'Google Cloud'],
      href: '/cloud-infrastructure'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security solutions for data protection',
      features: ['Threat Detection', 'Security Audits', 'Compliance'],
      href: '/cybersecurity'
    },
    {
      icon: Users,
      title: 'IT Support',
      description: '24/7 IT support and maintenance services',
      features: ['Help Desk', 'System Maintenance', 'Troubleshooting'],
      href: '/it-support'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Secure data management and analytics',
      features: ['Data Warehousing', 'ETL Processes', 'Business Intelligence'],
      href: '/data-management'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with cutting-edge technology'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime'
    },
    {
      icon: Brain,
      title: 'AI-Powered',
      description: 'Intelligent automation and machine learning'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Worldwide deployment and support'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <ServiceCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className={`text-4xl md:text-6xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Transform Your Business with
              <span className="block text-blue-600">AI & IT Solutions</span>
            </h1>
            <p className={`text-xl text-gray-600 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Leading provider of cutting-edge AI and IT solutions, helping businesses 
              achieve digital transformation through innovative technology.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional results through innovative technology and expert solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href={service.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions to keep your business running smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href={service.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact our experts today to discuss your AI and IT needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Consultation
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;