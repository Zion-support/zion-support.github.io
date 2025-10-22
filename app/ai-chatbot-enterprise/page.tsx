'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, MessageCircle, Bot, Cpu, Workflow, Building, Crown } from 'lucide-react';
=======
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, Globe, Database, Cpu, Target, BarChart, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckSquare, ShoppingCart, Settings, Calendar, TrendingUp, Lock } from 'lucide-react';
>>>>>>> f563287378132e4fba4bd1b14d03814b3a513de2

const AiChatbotEnterprisePage: React.FC = () => {
  const features = [
    {
      icon: Crown,
      title: 'Enterprise-Grade Security',
      description: 'Bank-level security with advanced encryption, compliance, and data protection.',
      benefits: ['SOC 2 Type II', 'GDPR compliance', 'End-to-end encryption', 'Data residency controls']
    },
    {
      icon: Building,
      title: 'Scalable Infrastructure',
      description: 'Handle millions of conversations with our enterprise-grade infrastructure.',
      benefits: ['Auto-scaling', '99.9% uptime SLA', 'Global CDN', 'Load balancing']
    },
    {
      icon: Brain,
      title: 'Advanced AI Capabilities',
      description: 'State-of-the-art AI with custom model training and fine-tuning.',
      benefits: ['Custom model training', 'Multi-language support', 'Context awareness', 'Learning algorithms']
    },
    {
<<<<<<< HEAD
      icon: Settings,
      title: 'White-Label Solution',
      description: 'Fully customizable platform with your branding and custom features.',
      benefits: ['Custom branding', 'API access', 'Custom integrations', 'Dedicated support']
=======
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for speed and efficiency with real-time processing capabilities.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards.'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Scale effortlessly across multiple regions with automatic load balancing.'
>>>>>>> f563287378132e4fba4bd1b14d03814b3a513de2
    }
  ];

  const benefits = [
<<<<<<< HEAD
    'Reduce operational costs by up to 70%',
    'Handle unlimited conversations',
    '24/7 dedicated enterprise support',
    'Custom development and integrations',
    'Advanced analytics and reporting',
    'Compliance with industry standards'
  ];

  const testimonials = [
    {
      name: 'James Rodriguez',
      company: 'Fortune 500 Corp',
      role: 'CTO',
      content: 'The enterprise chatbot solution has transformed our customer service operations. The scalability and security features are outstanding.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      company: 'Global Tech Solutions',
      role: 'VP of Operations',
      content: 'Outstanding enterprise features and support. Our team productivity has increased significantly with the advanced AI capabilities.',
      rating: 5
    },
    {
      name: 'David Kim',
      company: 'Enterprise Systems',
      role: 'CEO',
      content: 'The best enterprise chatbot platform we have used. The white-label solution perfectly matches our brand requirements.',
      rating: 5
    }
  ];

  const enterpriseFeatures = [
    'Unlimited conversations and users',
    'Advanced AI model customization',
    'White-label branding and customization',
    'Dedicated account manager',
    '24/7 priority support',
    'Custom integrations and APIs',
    'Advanced analytics and reporting',
    'Compliance and security certifications',
    'On-premise deployment options',
    'Custom development services'
=======
    'AI-powered automation',
    'Real-time processing',
    'Scalable solutions',
    'Enterprise-grade security',
    '24/7 support',
    'Custom integrations'
>>>>>>> f563287378132e4fba4bd1b14d03814b3a513de2
  ];

  return (
    <React.Fragment>
      <Helmet>
<<<<<<< HEAD
        <title>AI Chatbot Enterprise - Zion Tech Group | Enterprise-Grade Conversational AI</title>
        <meta name="description" content="Enterprise-grade AI chatbot solution with advanced security, scalability, and customization. Perfect for large organizations and enterprises." />
        <meta name="keywords" content="enterprise chatbot, AI enterprise solution, conversational AI, enterprise automation, Zion Tech Group" />
=======
        <title>Ai Chatbot Enterprise - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="Professional ai chatbot enterprise solutions powered by advanced AI and cutting-edge technology." />
        <meta name="keywords" content="ai chatbot enterprise, AI solutions, IT services, automation, technology, business solutions" />
>>>>>>> f563287378132e4fba4bd1b14d03814b3a513de2
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Chatbot
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Enterprise
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade AI chatbot solution with advanced security, scalability, and customization. 
              Perfect for large organizations requiring robust conversational AI capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Contact Sales
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ai Chatbot Enterprise
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional ai chatbot enterprise solutions powered by advanced AI and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get Started
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View All Services
              </a>
>>>>>>> f563287378132e4fba4bd1b14d03814b3a513de2
            </div>
          </div>
        </section>

        {/* Features Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise-Grade Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built for enterprise requirements with advanced security, scalability, and customization.
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-lg text-gray-300">
                Everything you need for success
>>>>>>> f563287378132e4fba4bd1b14d03814b3a513de2
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
<<<<<<< HEAD
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
=======
                <div key={index} className="bg-white/5 rounded-2xl p-8 backdrop-blur-lg border border-white/10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
>>>>>>> f563287378132e4fba4bd1b14d03814b3a513de2
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
<<<<<<< HEAD
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Enterprise?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of enterprise-grade conversational AI.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Complete Enterprise Package
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need for enterprise-scale chatbot deployment.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {enterpriseFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trusted by Enterprise Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what enterprise customers say about our solution.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-cyan-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits
              </h2>
              <p className="text-lg text-gray-300">
                Why choose our solution
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
>>>>>>> f563287378132e4fba4bd1b14d03814b3a513de2
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for Enterprise AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our enterprise team to discuss your requirements and get a custom solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Sales
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let us help you implement this solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Start Your Project
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </a>
>>>>>>> f563287378132e4fba4bd1b14d03814b3a513de2
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

<<<<<<< HEAD
export default AiChatbotEnterprisePage;
=======
export default AiChatbotEnterprisePage;
>>>>>>> f563287378132e4fba4bd1b14d03814b3a513de2
