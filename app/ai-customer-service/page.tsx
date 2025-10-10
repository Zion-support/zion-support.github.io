'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Phone, Mail, MessageSquare, Users, Clock, Star, CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, Target, BarChart, Activity, TrendingUp, Award, Lock, Database, Cloud, Code, Smartphone, Settings, Search, Bot, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Compass, Navigation as NavIcon, PieChart, TrendingDown } from 'lucide-react';

const AICustomerServicePage: React.FC = () => {
  const features = [
    {
      icon: MessageSquare,
      title: '24/7 AI Chat Support',
      description: 'Round-the-clock AI-powered customer support with instant responses and intelligent problem solving.',
      benefits: ['Instant responses', '24/7 availability', 'Intelligent routing', 'Multi-channel support']
    },
    {
      icon: Brain,
      title: 'Intelligent Problem Solving',
      description: 'AI agents that understand context and provide accurate solutions to complex customer issues.',
      benefits: ['Context understanding', 'Problem resolution', 'Learning capabilities', 'Escalation management']
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'Support customers in 50+ languages with natural language processing and translation.',
      benefits: ['50+ languages', 'Natural language processing', 'Cultural adaptation', 'Real-time translation']
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: 'Immediate responses to customer queries with sub-second response times.',
      benefits: ['Sub-second response', 'High availability', 'Scalable infrastructure', 'Performance optimization']
    },
    {
      icon: Target,
      title: 'Personalized Service',
      description: 'Tailored customer service based on individual preferences and history.',
      benefits: ['Personalization', 'Customer history', 'Preference learning', 'Customized solutions']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics and insights to improve customer service performance.',
      benefits: ['Performance metrics', 'Customer satisfaction', 'Trend analysis', 'ROI tracking']
    }
  ];

  const benefits = [
    'Increase customer satisfaction by 95%',
    'Reduce response time by 90%',
    'Lower support costs by 70%',
    'Enable 24/7 availability',
    'Improve resolution rates by 85%',
    'Scale support operations',
    'Enhance customer experience',
    'Reduce agent workload'
  ];

  const useCases = [
    {
      title: 'E-commerce Support',
      description: 'AI-powered customer support for online stores and marketplaces',
      icon: ShoppingCart
    },
    {
      title: 'Technical Support',
      description: 'Intelligent technical assistance and troubleshooting for software and hardware',
      icon: Settings
    },
    {
      title: 'Financial Services',
      description: 'Secure and compliant customer support for banking and financial institutions',
      icon: CreditCard
    },
    {
      title: 'Healthcare Support',
      description: 'Specialized customer support for healthcare providers and patients',
      icon: Stethoscope
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Service - Zion Tech Group</title>
        <meta name="description" content="Transform your customer service with our AI Customer Service solutions. 24/7 support, multilingual capabilities, and intelligent problem solving for better customer experience." />
        <meta name="keywords" content="AI customer service, chatbot, virtual assistant, customer support automation, multilingual support, AI support" />
      </Helmet>

      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(20,184,166,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Customer
              <span className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your customer service with our AI Customer Service solutions. 24/7 support, 
              multilingual capabilities, and intelligent problem solving for better customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-teal-400 text-teal-300 px-8 py-4 rounded-lg font-semibold hover:bg-teal-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Service Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI technology for intelligent customer service and support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Customer Service?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of customer service with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect for Every Industry
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From e-commerce to healthcare, our AI customer service adapts to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Customer Service?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start providing better customer support with our AI-powered service platform today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Started Free
                </button>
                <button className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AICustomerServicePage;