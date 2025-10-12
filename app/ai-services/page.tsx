'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Zap,
  Shield,
  Globe,
  Database,
  Code,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  Camera,
  Cpu,
  Users,
  TrendingUp
} from 'lucide-react';

export default function AIServicesPage() {
  const aiServices = [
    {
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation with natural language processing, SEO optimization, and brand voice customization.',
      price: '$299/month',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice training', 'Content analytics', 'Plagiarism detection', 'Content templates'],
      icon: FileText,
      path: '/ai-content-generator',
      category: 'Content Creation',
      rating: 4.9,
      reviews: 234,
      duration: '1-2 weeks',
      popular: true
    },
    {
      name: 'AI Chatbot Enterprise',
      description: 'Intelligent conversational AI for customer service and support with advanced natural language understanding.',
      price: '$499/month',
      features: ['24/7 availability', 'Multi-channel integration', 'Sentiment analysis', 'Custom training', 'Voice integration', 'Analytics dashboard'],
      icon: MessageSquare,
      path: '/ai-chatbot-enterprise',
      category: 'Conversational AI',
      rating: 4.8,
      reviews: 189,
      duration: '2-3 weeks'
    },
    {
      name: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated insights generation.',
      price: '$399/month',
      features: ['Real-time insights', 'Predictive modeling', 'Custom reports', 'API integration', 'Data visualization', 'Automated alerts'],
      icon: BarChart3,
      path: '/ai-analytics-dashboard',
      category: 'Business Intelligence',
      rating: 4.7,
      reviews: 156,
      duration: '2-4 weeks'
    },
    {
      name: 'AI 3D Generation Studio',
      description: 'Create stunning 3D models and animations with AI assistance for gaming, AR/VR, and marketing.',
      price: '$799/month',
      features: ['3D model generation', 'Animation creation', 'Texture mapping', 'VR/AR support', 'Rendering optimization', 'Asset management'],
      icon: Camera,
      path: '/ai-3d-generation',
      category: '3D & Graphics',
      rating: 4.6,
      reviews: 98,
      duration: '3-5 weeks'
    },
    {
      name: 'AI Drug Discovery Pro',
      description: 'Accelerate pharmaceutical research with AI-powered molecular analysis and drug interaction prediction.',
      price: '$2,999/month',
      features: ['Molecular modeling', 'Drug interaction analysis', 'Clinical trial optimization', 'Regulatory compliance', 'Patent analysis', 'Toxicity prediction'],
      icon: Brain,
      path: '/ai-drug-discovery-pro',
      category: 'Healthcare AI',
      rating: 4.9,
      reviews: 67,
      duration: '6-8 weeks'
    },
    {
      name: 'AI Cybersecurity Suite',
      description: 'Advanced threat detection and prevention using machine learning with real-time monitoring and response.',
      price: '$1,299/month',
      features: ['Real-time monitoring', 'Threat intelligence', 'Automated response', 'Compliance reporting', 'Behavioral analysis', 'Incident forensics'],
      icon: Shield,
      path: '/ai-cybersecurity-suite',
      category: 'Cybersecurity',
      rating: 4.8,
      reviews: 145,
      duration: '3-4 weeks'
    },
    {
      name: 'AI Computer Vision',
      description: 'Advanced image and video analysis with object detection, facial recognition, and scene understanding.',
      price: '$599/month',
      features: ['Object detection', 'Facial recognition', 'Scene analysis', 'Video processing', 'Custom model training', 'API integration'],
      icon: Camera,
      path: '/ai-computer-vision',
      category: 'Computer Vision',
      rating: 4.7,
      reviews: 123,
      duration: '2-3 weeks'
    },
    {
      name: 'AI Voice Assistant',
      description: 'Intelligent voice recognition and synthesis with natural language processing and multi-language support.',
      price: '$399/month',
      features: ['Voice recognition', 'Text-to-speech', 'Multi-language support', 'Custom wake words', 'Integration APIs', 'Voice analytics'],
      icon: MessageSquare,
      path: '/ai-voice-assistant',
      category: 'Voice AI',
      rating: 4.6,
      reviews: 178,
      duration: '2-4 weeks'
    },
    {
      name: 'AI Automation Platform',
      description: 'Intelligent process automation with AI-powered decision making and workflow optimization.',
      price: '$699/month',
      features: ['Process automation', 'Workflow optimization', 'Decision intelligence', 'Integration connectors', 'Monitoring dashboard', 'Custom triggers'],
      icon: Cpu,
      path: '/ai-automation',
      category: 'Process Automation',
      rating: 4.8,
      reviews: 134,
      duration: '3-5 weeks'
    }
  ];

  const microSaasServices = [
    {
      name: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with AI insights',
      price: '$99/month',
      features: ['Lead scoring', 'Automated follow-ups', 'Sales forecasting', 'Integration APIs'],
      icon: Users,
      path: '/ai-crm'
    },
    {
      name: 'Smart Analytics Platform',
      description: 'Business intelligence with AI-powered insights and reporting',
      price: '$149/month',
      features: ['Custom dashboards', 'Predictive analytics', 'Data visualization', 'Export capabilities'],
      icon: TrendingUp,
      path: '/smart-analytics'
    },
    {
      name: 'Automated Testing Suite',
      description: 'AI-driven automated testing for web and mobile applications',
      price: '$199/month',
      features: ['Cross-browser testing', 'Performance testing', 'API testing', 'Test reporting'],
      icon: Cpu,
      path: '/ai-automated-testing'
    },
    {
      name: 'Content Management System',
      description: 'AI-enhanced CMS with intelligent content optimization',
      price: '$79/month',
      features: ['SEO optimization', 'Content scheduling', 'Multi-language support', 'Analytics integration'],
      icon: FileText,
      path: '/ai-content-management'
    }
  ];

  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: Brain },
    { number: '99.8%', label: 'Accuracy Rate', icon: Shield },
    { number: '24/7', label: 'AI Monitoring', icon: Globe },
    { number: '50+', label: 'Languages Supported', icon: MessageSquare }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our advanced AI services including content generation, chatbots, analytics, and automation. Enterprise-grade AI solutions from Zion Tech Group." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI chatbots, content generation, AI analytics, automation, Zion Tech Group" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Advanced{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              AI Services
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From content generation to predictive analytics, we deliver AI that works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/about" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise AI Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Enterprise AI Solutions</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Powerful AI services designed for enterprise-scale operations and maximum impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 hover:bg-slate-700/50 group relative ${
                service.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700 hover:border-cyan-500/30'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                      <p className="text-sm text-gray-400">{service.category}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    <div className="flex items-center">
                      <div className="flex items-center mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">({service.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-400 mb-4">Duration: {service.duration}</div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={service.path}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Micro SAAS Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">AI Micro SAAS Solutions</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Specialized AI-powered tools for specific business needs. Start small, scale big.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                    <p className="text-cyan-400 font-medium">{service.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.path}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center text-sm"
                >
                  Explore
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Our AI Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our AI Services?</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We combine cutting-edge technology with practical business solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Advanced AI Models</h3>
                <p className="text-gray-300">State-of-the-art machine learning models trained on enterprise data for maximum accuracy and performance.</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security and compliance with industry standards to protect your data and operations.</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-600 rounded-full mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Rapid Deployment</h3>
                <p className="text-gray-300">Quick implementation and integration with your existing systems for immediate business impact.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can drive growth, efficiency, and innovation in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your AI Journey
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}