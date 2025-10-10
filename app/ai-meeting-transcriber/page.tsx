'use client';

import React from 'react';
import { Mic, FileText, Brain, Zap, Target, CheckCircle, ArrowRight, Activity, Globe, Shield, Clock, Award, Monitor, PieChart, TrendingUp, Database, Settings, Users, Lock, Cpu, Eye, Play } from 'lucide-react';
import SEOHead from '../../src/components/SEOHead';

const AIMeetingTranscriberPage: React.FC = () => {
  const features = [
    {
      icon: Mic,
      title: 'Real-time Transcription',
      description: 'Advanced speech-to-text technology that transcribes meetings in real-time with 99% accuracy.',
      benefits: ['99% accuracy', 'Real-time processing', 'Multi-language support']
    },
    {
      icon: Brain,
      title: 'AI-Powered Summarization',
      description: 'Intelligent meeting summaries with key points, action items, and decisions automatically extracted.',
      benefits: ['Key points extraction', 'Action items', 'Decision tracking']
    },
    {
      icon: FileText,
      title: 'Smart Note Generation',
      description: 'Automatically generate structured meeting notes with timestamps, speakers, and topics.',
      benefits: ['Structured notes', 'Speaker identification', 'Topic categorization']
    },
    {
      icon: Target,
      title: 'Action Item Tracking',
      description: 'Automatically identify and track action items, deadlines, and responsible parties from meetings.',
      benefits: ['Action item detection', 'Deadline tracking', 'Responsibility assignment']
    },
    {
      icon: Settings,
      title: 'Integration & Workflow',
      description: 'Seamless integration with calendar, CRM, and project management tools for automated workflows.',
      benefits: ['Calendar integration', 'CRM sync', 'Workflow automation']
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Enterprise-grade security with encryption, access controls, and compliance with data protection standards.',
      benefits: ['End-to-end encryption', 'Access controls', 'GDPR compliance']
    }
  ];

  const services = [
    {
      title: 'Basic Transcription',
      description: 'Real-time meeting transcription with basic summarization and note generation.',
      price: '$199/mo',
      features: ['Real-time transcription', 'Basic summaries', 'Meeting notes', 'Speaker identification']
    },
    {
      title: 'AI Meeting Assistant',
      description: 'Advanced AI-powered meeting assistant with intelligent insights and action tracking.',
      price: '$399/mo',
      features: ['AI insights', 'Action tracking', 'Smart summaries', 'Integration tools']
    },
    {
      title: 'Enterprise Solution',
      description: 'Complete enterprise meeting management with advanced features and custom integrations.',
      price: '$799/mo',
      features: ['Full enterprise features', 'Custom integrations', 'Advanced analytics', '24/7 support']
    },
    {
      title: 'Custom Development',
      description: 'Bespoke meeting transcription solution tailored to your specific requirements.',
      price: 'Custom',
      features: ['Custom development', 'Tailored features', 'Dedicated support', 'Ongoing maintenance']
    }
  ];

  const stats = [
    { number: '99%', label: 'Transcription Accuracy', icon: Target },
    { number: '< 1s', label: 'Processing Delay', icon: Zap },
    { number: '50+', label: 'Languages Supported', icon: Globe },
    { number: '24/7', label: 'Available', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      <SEOHead 
        title="AI Meeting Transcriber Pro | Zion Tech Group"
        description="Advanced AI-powered meeting transcription with real-time processing, intelligent summarization, and action item tracking. Transform your meetings with cutting-edge speech recognition technology."
        keywords="meeting transcription, AI meeting assistant, speech recognition, meeting notes, action items, meeting summarization, voice to text"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
              <Mic className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI Meeting Transcriber Pro
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Advanced AI-powered meeting transcription with real-time processing, 
            intelligent summarization, and action item tracking. Transform your 
            meetings with cutting-edge speech recognition technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-teal-400 text-teal-400 font-semibold py-4 px-8 rounded-xl hover:bg-teal-400 hover:text-slate-900 transition-all duration-300">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-teal-400 to-cyan-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
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
            <h2 className="text-4xl font-bold text-white mb-4">Meeting Transcription Features</h2>
            <p className="text-xl text-gray-300">Advanced AI-powered meeting management capabilities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-teal-400/20 rounded-xl p-8 hover:border-teal-400/40 hover:shadow-lg hover:shadow-teal-400/10 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-teal-400 mr-2 flex-shrink-0" />
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
      <section className="py-20 bg-gradient-to-r from-teal-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Transcription Services</h2>
            <p className="text-xl text-gray-300">Choose the right meeting transcription solution</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-teal-400/20 rounded-xl p-8 hover:border-teal-400/40 hover:shadow-lg hover:shadow-teal-400/10 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <div className="text-3xl font-bold text-teal-400 mb-6">{service.price}</div>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-teal-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500/10 to-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Meetings?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start your free trial today and experience the power of AI-powered 
            meeting transcription and intelligent note-taking.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-teal-400 text-teal-400 font-semibold py-4 px-8 rounded-xl hover:bg-teal-400 hover:text-slate-900 transition-all duration-300">
              Contact Sales Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIMeetingTranscriberPage;