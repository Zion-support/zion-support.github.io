'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Database, Smartphone, Globe, Settings, Monitor, Package, Lock, Calendar, Link as LinkIcon, ShoppingCart, TrendingUp, CheckSquare, Cpu, Wifi, MessageSquare, FileText, Heart, DollarSign, Box, Eye, Mic, Workflow, MessageCircle } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const services = [
    {
      icon: BarChart,
      title: 'Zion Analytics Pro',
      description: 'Business intelligence platform with AI-powered insights',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data integration'],
      price: 'Starting at $99/month'
    },
    {
      icon: MessageCircle,
      title: 'Zion Chat AI',
      description: 'AI-powered customer support and engagement platform',
      features: ['Multi-channel support', 'Natural language processing', 'Integration APIs', 'Analytics'],
      price: 'Starting at $49/month'
    },
    {
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'Cybersecurity monitoring and threat detection platform',
      features: ['Threat monitoring', 'Automated alerts', 'Compliance reporting', 'Security audits'],
      price: 'Starting at $199/month'
    },
    {
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Cloud backup and recovery solution for businesses',
      features: ['Automated backups', 'Data encryption', 'Recovery tools', 'Multi-cloud support'],
      price: 'Starting at $79/month'
    },
    {
      icon: FileText,
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform',
      features: ['Content generation', 'SEO optimization', 'Social media scheduling', 'Analytics'],
      price: 'Starting at $39/month'
    },
    {
      icon: Users,
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management system',
      features: ['Lead scoring', 'Automated follow-ups', 'Sales forecasting', 'Integration tools'],
      price: 'Starting at $149/month'
    }
  ];

  const stats = [
    { number: '50+', label: 'Micro SAAS Products', icon: Cpu },
    { number: '1000+', label: 'Active Users', icon: Users },
    { number: '99.9%', label: 'Uptime', icon: Star },
    { number: '24/7', label: 'Support', icon: Award },
  ];

  return (
    <>
      <Helmet>

        <title>Micro SAAS - Zion Tech Group</title>
        <meta name="description" content="Ready-to-use micro SAAS solutions for businesses. AI-powered tools for analytics, security, content, and more." />
        <meta name="keywords" content="micro saas, business tools, AI solutions, analytics, security, content management, CRM" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Micro SAAS
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready-to-use business tools powered by AI and automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
              >
                Get Free Trial
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/pricing"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Micro SAAS Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use business tools with AI and automation built-in
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-cyan-400 font-semibold text-sm mb-4">
                    {service.price}
                  </div>
                  <Link 
                    to="/contact"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 inline-block"
                  >
                    Start Free Trial →
                  </Link>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Boost Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and experience the power of our micro SAAS solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/about"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More About Us
                </Link>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
