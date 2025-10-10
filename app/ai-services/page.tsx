'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, MessageSquare, Eye, Zap, BarChart, Box, Mic, Shield, TrendingUp, Target, FileText, Search, Phone, CheckCircle, ArrowRight, Star, Clock, Globe, Database, Users, Settings, Heart, Home, Package, Calendar, BookOpen, Lock, Sun, PawPrint, Leaf, Utensils, MapPin, Activity, Sprout, Timer, Cpu, Rocket } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPagePage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence Platform',
      description: 'Comprehensive AI platform with machine learning, natural language processing, and computer vision capabilities.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Real-time Processing'],
      price: 'Starting at $1,500/month',
      category: 'Core AI',
      popular: true
    },
    {
      icon: MessageSquare,
      title: 'AI Customer Support Suite',
      description: 'Revolutionary AI-powered customer support with chatbots, sentiment analysis, and automated ticket routing.',
      features: ['AI Chatbots', 'Sentiment Analysis', 'Ticket Routing', 'Knowledge Base', '24/7 Support'],
      price: 'Starting at $199/month',
      category: 'Customer Service',
      popular: true
    },
    {
      icon: BarChart,
      title: 'AI Data Analytics Platform',
      description: 'Transform your data into actionable insights with AI-powered analytics and predictive modeling.',
      features: ['Predictive Analytics', 'Data Visualization', 'Real-time Insights', 'Custom Dashboards', 'ML Models'],
      price: 'Starting at $399/month',
      category: 'Analytics',
      popular: false
    },
    {
      icon: Target,
      title: 'AI Marketing Automation',
      description: 'Revolutionary AI-powered marketing automation with personalized campaigns and intelligent optimization.',
      features: ['Campaign Automation', 'Personalization', 'A/B Testing', 'ROI Optimization', 'Multi-channel'],
      price: 'Starting at $299/month',
      category: 'Marketing',
      popular: true
    },
    {
      icon: FileText,
      title: 'AI Content Generation Studio',
      description: 'Create high-quality content at scale with AI-powered writing, image generation, and video production.',
      features: ['Content Writing', 'Image Generation', 'Video Creation', 'SEO Optimization', 'Multi-language'],
      price: 'Starting at $149/month',
      category: 'Content',
      popular: false
    },
    {
      icon: Heart,
      title: 'AI Healthcare Solutions',
      description: 'HIPAA-compliant AI solutions for medical imaging, drug discovery, and patient care optimization.',
      features: ['Medical Imaging', 'Drug Discovery', 'Patient Analytics', 'Diagnostic Support', 'HIPAA Compliance'],
      price: 'Starting at $1,999/month',
      category: 'Healthcare',
      popular: true
    },
    {
      icon: TrendingUp,
      title: 'AI Financial Services',
      description: 'Advanced AI solutions for fraud detection, risk assessment, and algorithmic trading.',
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring', 'Compliance'],
      price: 'Starting at $1,499/month',
      category: 'Finance',
      popular: false
    },
    {
      icon: Globe,
      title: 'AI E-commerce Solutions',
      description: 'Intelligent e-commerce platform with recommendation engines and dynamic pricing.',
      features: ['Recommendation Engine', 'Dynamic Pricing', 'Inventory Optimization', 'Customer Insights', 'Sales Forecasting'],
      price: 'Starting at $799/month',
      category: 'E-commerce',
      popular: false
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered cybersecurity with threat detection, vulnerability assessment, and automated response.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Automated Response', 'Behavioral Analysis', 'Compliance'],
      price: 'Starting at $599/month',
      category: 'Security',
      popular: true
    },
    {
      icon: Users,
      title: 'AI HR Assistant',
      description: 'Streamline HR processes with AI-powered recruitment, employee analytics, and performance management.',
      features: ['Resume Screening', 'Candidate Matching', 'Performance Analytics', 'Employee Engagement', 'Retention Analysis'],
      price: 'Starting at $399/month',
      category: 'HR',
      popular: false
    },
    {
      icon: Settings,
      title: 'AI Process Automation',
      description: 'Automate complex business processes with AI-powered decision making and exception handling.',
      features: ['Workflow Automation', 'Decision Making', 'Exception Handling', 'Process Optimization', 'Integration'],
      price: 'Starting at $599/month',
      category: 'Automation',
      popular: true
    },
    {
      icon: Database,
      title: 'AI Data Management',
      description: 'Intelligent data management with AI-powered data cleaning, integration, and quality assurance.',
      features: ['Data Cleaning', 'Data Integration', 'Quality Assurance', 'Data Governance', 'Compliance'],
      price: 'Starting at $299/month',
      category: 'Data Management',
      popular: false
    },
    {
      icon: Search,
      title: 'AI Search & Discovery',
      description: 'Advanced search capabilities with AI-powered semantic search and intelligent recommendations.',
      features: ['Semantic Search', 'Intelligent Recommendations', 'Natural Language Queries', 'Context Awareness', 'Personalization'],
      price: 'Starting at $199/month',
      category: 'Search',
      popular: false
    },
    {
      icon: Mic,
      title: 'AI Voice Assistant Platform',
      description: 'Build custom voice assistants with natural language understanding and multi-language support.',
      features: ['Voice Recognition', 'Natural Language Processing', 'Multi-language Support', 'Enterprise Integration', 'Custom Wake Words'],
      price: 'Starting at $299/month',
      category: 'Voice AI',
      popular: true
    },
    {
      icon: Eye,
      title: 'AI Computer Vision',
      description: 'Advanced computer vision solutions for image recognition, object detection, and visual analytics.',
      features: ['Image Recognition', 'Object Detection', 'Visual Analytics', 'Quality Control', 'Surveillance'],
      price: 'Starting at $499/month',
      category: 'Computer Vision',
      popular: false
    },
    {
      icon: Box,
      title: 'AI Document Processing',
      description: 'Automated document processing with AI-powered text extraction, classification, and analysis.',
      features: ['Text Extraction', 'Document Classification', 'Data Analysis', 'OCR Technology', 'Workflow Integration'],
      price: 'Starting at $149/month',
      category: 'Document Processing',
      popular: false
    },
    {
      icon: Cpu,
      title: 'AI Edge Computing',
      description: 'Deploy AI models at the edge for real-time processing and reduced latency.',
      features: ['Edge Deployment', 'Real-time Processing', 'Reduced Latency', 'Offline Capability', 'Resource Optimization'],
      price: 'Starting at $799/month',
      category: 'Edge Computing',
      popular: true
    },
    {
      icon: Rocket,
      title: 'AI Autonomous Systems',
      description: 'Build autonomous systems with AI-powered decision making and self-learning capabilities.',
      features: ['Autonomous Decision Making', 'Self-learning', 'Adaptive Behavior', 'Safety Systems', 'Performance Optimization'],
      price: 'Starting at $1,299/month',
      category: 'Autonomous Systems',
      popular: false
    }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered ai services service for modern businesses." />
        <meta name="keywords" content="AI ai services, artificial intelligence, ai services, AI services, intelligent automation" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai services service for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to transform your business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group relative ${
                  service.popular ? 'ring-2 ring-purple-400/50' : ''
                }`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-purple-500/20 text-purple-400 text-xs px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-purple-400 mb-2">{service.price}</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-gray-400 text-sm">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIServicesPagePage;