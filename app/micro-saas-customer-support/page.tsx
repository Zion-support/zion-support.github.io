'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageCircle, Headphones, Zap, Shield, Users, BarChart, CheckCircle, ArrowRight, Clock, Target, TrendingUp, FileText } from 'lucide-react';

export default function MicroSaasCustomerSupportPage() {
  const features = [
    {
      icon: MessageCircle,
      title: 'Multi-Channel Support',
      description: 'Email, chat, phone, and social media support in one platform'
    },
    {
      icon: Headphones,
      title: '24/7 Availability',
      description: 'Round-the-clock customer support with AI-powered assistance'
    },
    {
      icon: Zap,
      title: 'Quick Response',
      description: 'Automated responses and intelligent ticket routing'
    },
    {
      icon: Shield,
      title: 'Knowledge Base',
      description: 'Comprehensive self-service portal for customers'
    }
  ];

  const capabilities = [
    {
      title: 'Ticket Management',
      description: 'Organize and track customer support tickets efficiently',
      icon: FileText
    },
    {
      title: 'Live Chat',
      description: 'Real-time customer support with chat integration',
      icon: MessageCircle
    },
    {
      title: 'Customer Analytics',
      description: 'Track support metrics and customer satisfaction',
      icon: BarChart
    },
    {
      title: 'Team Management',
      description: 'Manage support agents and workload distribution',
      icon: Users
    },
    {
      title: 'Automation Rules',
      description: 'Set up automated responses and ticket routing',
      icon: Zap
    },
    {
      title: 'Performance Tracking',
      description: 'Monitor agent performance and response times',
      icon: TrendingUp
    }
  ];

  const benefits = [
    'Reduce response time by 60%',
    'Increase customer satisfaction by 45%',
    'Handle 3x more support requests',
    'Improve agent productivity',
    'Better ticket organization',
    'Real-time performance insights'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Customer Support - Zion Tech Group</title>
        <meta name="description" content="Efficient customer support solution. Multi-channel support, ticket management, and customer analytics in one platform." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Customer Support
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Streamlined customer support solution with multi-channel communication and AI assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Support Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to provide exceptional customer support
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Capabilities Section */}
      <div className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Support Suite
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive tools for managing customer support operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <capability.icon className="w-8 h-8 text-blue-400 mr-3 group-hover:text-blue-300" />
                  <h3 className="text-xl font-semibold text-white">{capability.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{capability.description}</p>
                <div className="flex items-center text-blue-400 group-hover:text-blue-300">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Proven Results
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our customer support solution delivers measurable improvements
              </p>
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Pricing Plans</h3>
              <div className="space-y-6">
                <div className="border border-cyan-500/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Starter</h4>
                  <p className="text-3xl font-bold text-cyan-400 mb-2">$39/month</p>
                  <p className="text-gray-300 text-sm">Perfect for small teams</p>
                </div>
                <div className="border border-purple-500/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Professional</h4>
                  <p className="text-3xl font-bold text-purple-400 mb-2">$99/month</p>
                  <p className="text-gray-300 text-sm">Ideal for growing businesses</p>
                </div>
                <div className="border border-green-500/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Enterprise</h4>
                  <p className="text-3xl font-bold text-green-400 mb-2">Custom</p>
                  <p className="text-gray-300 text-sm">Tailored for large organizations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Improve Your Customer Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial today and see the difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}