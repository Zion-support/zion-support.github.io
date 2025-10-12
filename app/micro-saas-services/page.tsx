'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Shield,
  Code,
  Database,
  Smartphone,
  Cpu,
  Globe,
  Lock,
  Users,
  TrendingUp,
  Phone,
  BarChart3,
  MessageSquare,
  FileText,
  Camera,
  Brain
} from 'lucide-react';

export default function MicroSaasServicesPage() {
  const microSaasServices = [
    {
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation with natural language processing and brand voice training',
      price: '$299/month',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice training', 'Content analytics', 'Plagiarism detection', 'Content scheduling'],
      icon: FileText,
      path: '/ai-content-generator',
      category: 'Content Creation',
      rating: 4.9,
      reviews: 127
    },
    {
      name: 'AI Chatbot Enterprise',
      description: 'Intelligent conversational AI for customer service and support with multi-channel integration',
      price: '$499/month',
      features: ['24/7 availability', 'Multi-channel integration', 'Sentiment analysis', 'Custom training', 'Live handoff', 'Analytics dashboard'],
      icon: MessageSquare,
      path: '/ai-chatbot-enterprise',
      category: 'Customer Service',
      rating: 4.8,
      reviews: 89
    },
    {
      name: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and custom reporting',
      price: '$399/month',
      features: ['Real-time insights', 'Predictive modeling', 'Custom reports', 'API integration', 'Data visualization', 'Automated alerts'],
      icon: BarChart3,
      path: '/ai-analytics-dashboard',
      category: 'Analytics',
      rating: 4.9,
      reviews: 156
    },
    {
      name: 'AI 3D Generation Studio',
      description: 'Create stunning 3D models and animations with AI assistance for gaming, AR/VR, and marketing',
      price: '$799/month',
      features: ['3D model generation', 'Animation creation', 'Texture mapping', 'VR/AR support', 'Rendering optimization', 'Asset library'],
      icon: Camera,
      path: '/ai-3d-generation',
      category: '3D & Graphics',
      rating: 4.7,
      reviews: 73
    },
    {
      name: 'AI Drug Discovery Pro',
      description: 'Accelerate pharmaceutical research with AI-powered molecular analysis and clinical trial optimization',
      price: '$2,999/month',
      features: ['Molecular modeling', 'Drug interaction analysis', 'Clinical trial optimization', 'Regulatory compliance', 'Patent analysis', 'Toxicity prediction'],
      icon: Brain,
      path: '/ai-drug-discovery-pro',
      category: 'Healthcare',
      rating: 4.9,
      reviews: 45
    },
    {
      name: 'AI Cybersecurity Suite',
      description: 'Advanced threat detection and prevention using machine learning and behavioral analysis',
      price: '$1,299/month',
      features: ['Real-time monitoring', 'Threat intelligence', 'Automated response', 'Compliance reporting', 'Vulnerability scanning', 'Incident response'],
      icon: Shield,
      path: '/ai-cybersecurity-suite',
      category: 'Security',
      rating: 4.8,
      reviews: 112
    }
  ];

  const categories = [
    { name: 'All Services', count: microSaasServices.length, active: true },
    { name: 'Content Creation', count: microSaasServices.filter(s => s.category === 'Content Creation').length, active: false },
    { name: 'Customer Service', count: microSaasServices.filter(s => s.category === 'Customer Service').length, active: false },
    { name: 'Analytics', count: microSaasServices.filter(s => s.category === 'Analytics').length, active: false },
    { name: '3D & Graphics', count: microSaasServices.filter(s => s.category === '3D & Graphics').length, active: false },
    { name: 'Healthcare', count: microSaasServices.filter(s => s.category === 'Healthcare').length, active: false },
    { name: 'Security', count: microSaasServices.filter(s => s.category === 'Security').length, active: false }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Lightning Fast Setup',
      description: 'Get your micro SaaS up and running in minutes, not months'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance, and data protection'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Architecture',
      description: 'Built to handle growth from startup to enterprise scale'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your success'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group | Scalable Software Solutions</title>
        <meta name="description" content="Comprehensive micro SaaS services including AI tools, analytics platforms, content generation, and specialized software solutions. Build and scale your software business." />
        <meta name="keywords" content="micro SaaS, software as a service, AI tools, analytics platforms, content generation, software development, scalable solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-rose-600/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.3),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Micro SaaS Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Build, launch, and scale powerful micro SaaS applications with our comprehensive development and deployment services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Your SaaS Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  View Examples
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SaaS Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our micro SaaS solutions are designed to deliver exceptional value with minimal complexity and maximum scalability.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    category.active
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-1">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-white font-semibold">{service.rating}</span>
                      </div>
                      <div className="text-sm text-gray-400">{service.reviews} reviews</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {service.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>
                  
                  <div className="text-3xl font-bold text-purple-400 mb-6">{service.price}</div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Build Your Micro SaaS?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact our micro SaaS experts today to discuss your requirements and discover how our solutions can accelerate your software business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
