'use client';

import React from 'react';
import { GraduationCap, Brain, Eye, Target, CheckCircle, ArrowRight, Activity, Globe, Shield, Clock, Award, Monitor, PieChart, TrendingUp, Database, Settings, Users, Lock, Cpu, Headphones, BookOpen } from 'lucide-react';
import SEOHead from '../../src/components/SEOHead';

const AIImmersiveLearningPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Virtual Reality Learning',
      description: 'Immersive VR experiences that transport learners into realistic environments for hands-on training.',
      benefits: ['Immersive environments', 'Hands-on training', 'Realistic simulations']
    },
    {
      icon: Brain,
      title: 'AI-Powered Personalization',
      description: 'Intelligent learning paths that adapt to individual learning styles, pace, and preferences.',
      benefits: ['Adaptive learning', 'Personalized content', 'Learning optimization']
    },
    {
      icon: GraduationCap,
      title: 'Interactive Learning Modules',
      description: 'Engaging interactive content with gamification, quizzes, and real-time feedback systems.',
      benefits: ['Gamified learning', 'Interactive content', 'Real-time feedback']
    },
    {
      icon: Target,
      title: 'Skill Assessment & Tracking',
      description: 'Advanced assessment tools that track progress, identify knowledge gaps, and recommend improvements.',
      benefits: ['Progress tracking', 'Gap analysis', 'Improvement recommendations']
    },
    {
      icon: Settings,
      title: 'Multi-Modal Learning',
      description: 'Support for various learning modalities including visual, auditory, kinesthetic, and reading/writing.',
      benefits: ['Multiple learning styles', 'Accessibility features', 'Inclusive design']
    },
    {
      icon: Shield,
      title: 'Secure Learning Environment',
      description: 'Enterprise-grade security with data protection, access controls, and compliance with educational standards.',
      benefits: ['Data protection', 'Access controls', 'Educational compliance']
    }
  ];

  const services = [
    {
      title: 'Basic Immersive Learning',
      description: 'Entry-level immersive learning platform with VR capabilities and basic AI personalization.',
      price: '$2,000/mo',
      features: ['VR learning modules', 'Basic AI personalization', 'Progress tracking', 'Standard support']
    },
    {
      title: 'Advanced Learning Platform',
      description: 'Comprehensive learning platform with advanced AI, AR/VR, and analytics capabilities.',
      price: '$5,000/mo',
      features: ['Advanced AI', 'AR/VR support', 'Advanced analytics', 'Custom content']
    },
    {
      title: 'Enterprise Learning Suite',
      description: 'Complete enterprise learning solution with custom development and 24/7 support.',
      price: '$15,000/mo',
      features: ['Enterprise features', 'Custom development', '24/7 support', 'Advanced security']
    },
    {
      title: 'Custom Learning Solution',
      description: 'Bespoke immersive learning solution tailored to your specific educational requirements.',
      price: 'Custom',
      features: ['Custom development', 'Tailored features', 'Dedicated support', 'Ongoing maintenance']
    }
  ];

  const stats = [
    { number: '95%', label: 'Learning Retention', icon: Brain },
    { number: '3x', label: 'Faster Learning', icon: Clock },
    { number: '50+', label: 'Learning Modules', icon: BookOpen },
    { number: '10,000+', label: 'Active Learners', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <SEOHead 
        title="AI Immersive Learning | Zion Tech Group"
        description="Revolutionary AI-powered immersive learning platform with VR/AR capabilities, personalized learning paths, and interactive educational experiences. Transform education with cutting-edge technology."
        keywords="immersive learning, VR education, AR learning, AI education, personalized learning, virtual reality training, educational technology, e-learning"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              AI Immersive Learning
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionary AI-powered immersive learning platform with VR/AR capabilities, 
            personalized learning paths, and interactive educational experiences. Transform 
            education with cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Learning Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-emerald-400 text-emerald-400 font-semibold py-4 px-8 rounded-xl hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300">
              View Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-emerald-400 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Immersive Learning Features</h2>
            <p className="text-xl text-gray-300">Advanced AI-powered educational technology</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-emerald-400/20 rounded-xl p-8 hover:border-emerald-400/40 hover:shadow-lg hover:shadow-emerald-400/10 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/20 to-teal-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Learning Services</h2>
            <p className="text-xl text-gray-300">Comprehensive immersive learning solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-emerald-400/20 rounded-xl p-8 hover:border-emerald-400/40 hover:shadow-lg hover:shadow-emerald-400/10 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <div className="text-3xl font-bold text-emerald-400 mb-6">{service.price}</div>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-500/10 to-teal-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Learning?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get a comprehensive learning assessment and discover how immersive 
            AI-powered education can revolutionize your training and development programs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
              Get Learning Assessment
            </button>
            <button className="border-2 border-emerald-400 text-emerald-400 font-semibold py-4 px-8 rounded-xl hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300">
              Contact Learning Experts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIImmersiveLearningPage;