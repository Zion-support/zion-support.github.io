'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import { CheckCircle, ArrowRight, Settings, Zap, Shield, Users, BarChart3 } from 'lucide-react';

const AIApiManagerPage: React.FC = () => {

  const features = [
    {
      title: 'Centralized API Control',
      description: 'Manage all your APIs from a single, intuitive dashboard with comprehensive monitoring and control capabilities.',
      benefits: ['Unified dashboard', 'Centralized control', 'Real-time monitoring', 'Easy management']
    },
    {
      title: 'Advanced Analytics',
      description: 'Get deep insights into API usage, performance metrics, and user behavior with AI-powered analytics.',
      benefits: ['Usage analytics', 'Performance metrics', 'User insights', 'Predictive analytics']
    },
    {

      title: 'Security & Compliance',
      description: 'Enterprise-grade security with automated compliance monitoring and threat detection.',
      benefits: ['Threat detection', 'Compliance monitoring', 'Security scanning', 'Access control']
    }
  ];

  const benefits = [
    'Centralized API management',
    'Real-time performance monitoring',
    'Advanced security features',
    'Comprehensive analytics',
    'Easy integration',
    '24/7 support'
  ];

  const stats = [
    { icon: <Settings className="w-8 h-8 text-blue-500" />, value: '500+', label: 'APIs Managed' },</Settings className="w-8 h-8 text-blue-500" />
    { icon: <Zap className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime' },</Zap className="w-8 h-8 text-green-500" />
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '100%', label: 'Security' },</Shield className="w-8 h-8 text-purple-500" />
    { icon: <BarChart3 className="w-8 h-8 text-orange-500" />, value: '60%', label: 'Efficiency Gain' }</BarChart3 className="w-8 h-8 text-orange-500" />
  ]</BarChart3 className="w-8 h-8 text-orange-500" />return (<//BarChart3 className="w-8 h-8 text-orange-500" />
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>AI API Manager | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI-powered API management platform by Zion Tech Group. Centralized control, analytics, and security for all your APIs." />
        <meta name="keywords" content="API manager, API platform, API analytics, API security, centralized management, Zion Tech Group" />
</meta name="keywords" content="API manager, API platform, API analytics, API security, centralized management, Zion Tech Group" />
      </Helmet>
      <Navigation />{/* Hero Section */}</Navigation />
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">AI API Manager</div className="relative max-w-7xl mx-auto text-center">
</div className="relative max-w-7xl mx-auto text-center">
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">Comprehensive API management platform with AI-powered insights, security, and optimization</p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Get Started</button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">View Demo,</button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
  </
          </div>
      </section>{/* Stats Section */}<//section>
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">{stats.map((stat, index) => (</div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div className="flex justify-center mb-4">
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>))}<//div>
          </div>
      </section>{/* Features Section */}<//section>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Platform Features</h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Everything you need to manage your APIs effectively</p className="text-xl text-gray-300 max-w-3xl mx-auto">
            </p>
          </div>  {features.map((feature, index) => (<//div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul className="space-y-2">
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{benefit} ))}</span>
                </ul>
              </div>))}<//div>
          </div>
      </section>{/* Benefits Section */}<//section>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Platform?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the benefits of our comprehensive API management solution </p className="text-xl text-gray-300 max-w-3xl mx-auto">
</p className="text-xl text-gray-300 max-w-3xl mx-auto">
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{benefits.map((benefit, index) => (</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
              </div>))}<//div>
          </div>
      </section>{/* CTA Section */}<//section>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
</div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">Ready to Manage Your APIs?</h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
            </h2>
            <p className="text-xl text-gray-300 mb-8">Start managing your APIs more effectively with our comprehensive platform.</p className="text-xl text-gray-300 mb-8">
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Start Free Trial</button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">Contact Sales</button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              </button>
            </div>
      </section>
<//section>
      <Footer />
    </div>),
}<//div>
<//div>
export default AIApiManagerPage<//div>