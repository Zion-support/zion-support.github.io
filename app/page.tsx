'use client';
import React, { useState, useEffect, Suspense } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';
import PerformanceMonitor from './components/PerformanceMonitor';
import { 
  Brain, 
  Zap, 
  Target, 
  BarChart, 
  Shield, 
  Users, 
  Globe, 
  Lock, 
  Settings, 
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
  Rocket,
  Code,
  Cloud,
  Smartphone
} from 'lucide-react';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      id: 1,
      name: 'AI-Powered Analytics',
      description: 'Advanced analytics solutions powered by machine learning and artificial intelligence',
      icon: BarChart,
      features: [
        'Predictive Analytics',
        'Real-time Data Processing',
        'Custom Dashboard Creation',
        'ROI Optimization'
      ],
      popular: true,
      rating: 4.8,
      users: '2,800+',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 2,
      name: 'AI Workflow Automation',
      description: 'Streamline your business processes with intelligent automation',
      icon: Zap,
      features: [
        'Process Automation',
        'Smart Workflows',
        'Error Detection',
        'Performance Optimization'
      ],
      popular: true,
      rating: 4.9,
      users: '3,200+',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 3,
      name: 'AI Security Solutions',
      description: 'Advanced security solutions powered by artificial intelligence',
      icon: Shield,
      features: [
        'Threat Detection',
        'Anomaly Detection',
        'Automated Response',
        'Security Analytics'
      ],
      popular: false,
      rating: 4.7,
      users: '1,500+',
      color: 'from-red-500 to-orange-600'
    },
    {
      id: 4,
      name: 'AI Document Processing',
      description: 'Intelligent document processing and data extraction with OCR and NLP',
      icon: FileText,
      features: [
        'OCR Processing',
        'Data Extraction',
        'Document Classification',
        'Automated Workflows'
      ],
      popular: false,
      rating: 4.6,
      users: '1,800+',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const microSAASServices = [
    { 
      name: 'AI Project Manager Pro', 
      icon: BarChart, 
      category: 'Productivity', 
      price: '$199/mo',
      description: 'Intelligent project management with AI-powered insights',
      popular: true
    },
    { 
      name: 'AI Smart Calendar Pro', 
      icon: Clock, 
      category: 'Productivity', 
      price: '$89/mo',
      description: 'AI-powered calendar management and scheduling',
      popular: true
    },
    { 
      name: 'AI Content Writer Pro', 
      icon: FileText, 
      category: 'Content', 
      price: '$129/mo',
      description: 'Advanced AI content creation with SEO optimization',
      popular: true
    },
    { 
      name: 'AI Social Media Manager Pro', 
      icon: Smartphone, 
      category: 'Marketing', 
      price: '$99/mo',
      description: 'Automated social media management with AI',
      popular: false
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <SEOHead />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {' '}AI Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading provider of AI-powered enterprise solutions, quantum computing, 
              autonomous systems, and digital transformation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 ${
                  service.popular ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div className="flex items-center space-x-2">
                    {service.popular && (
                      <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    )}
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{service.rating}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.name}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm text-gray-400">
                    {service.users} users
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful AI-powered micro SaaS tools to streamline your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {microSAASServices.map((service, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 ${
                  service.popular ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div className="flex items-center space-x-2">
                    {service.popular && (
                      <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.name}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-white">
                    {service.price}
                  </div>
                  <div className="text-sm text-gray-400">
                    {service.category}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of companies already using our AI solutions
          </p>
          <button className="bg-white text-purple-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
            Start Your Free Trial
          </button>
        </div>
      </section>

        <Footer />
        <PerformanceMonitor />
      </div>
    </ErrorBoundary>
  );
};

export default HomePage;