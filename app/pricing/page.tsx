'use client';
export default function Pricing() {
import React from 'react;

import { Helmet } from 'react-helmet-async;

import { Link } from 'react-router-dom;

import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react;

const PagePage: React.FC = () => {}
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Phone, Mail, ArrowRight, Zap, Shield, Users, Clock, DollarSign, Award, TrendingUp } from 'lucide-react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { CheckCircle, Star, Phone, Mail, MapPin, Zap, Brain, Cloud, Code } from 'lucide-react';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, ArrowRight, Zap, Brain, Cloud, Cpu, DollarSign, Users, Shield, BarChart3, FileText, Target, Globe, Database, Settings, Calendar, Eye, Mic, Heart, Lock, Package, Monitor, Wifi, Code, Smartphone } from 'lucide-react';

const PricingPage: React.FC = () => {
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Phone, Mail } from 'lucide-react';

        'Up to 5 AI services',
        'Basic IT support',
        'Email support',
        'Standard security',
        'Monthly reports',
        'Basic analytics'
      name: 'AI Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: '$1,500',
      period: '/month',
      icon: Brain,
      color: 'from-purple-500 to-purple-600',
      features: [
        'AI Strategy Consultation',
        'Basic ML Model Development',
        'Monthly Performance Review',
        'Email Support',
        'Basic Analytics Dashboard',
        'Up to 5 AI Integrations'
      ],
      popular: false
    },
    {
        'Up to 15 AI services',
        'Priority IT support',
        'Phone & email support',
        'Advanced security',
        'Weekly reports',
        'Advanced analytics',
        'Custom integrations',
        'Dedicated account manager'
      name: 'AI Professional',
      description: 'Comprehensive AI solutions for growing businesses',
      price: '$2,500',
      period: '/month',
      icon: Zap,
      color: 'from-cyan-500 to-blue-600',
      features: [
        'Advanced AI Strategy & Planning',
        'Custom ML Model Development',
        'AI Workflow Automation',
        'Priority Support (24/7)',
        'Advanced Analytics & Reporting',
        'Up to 15 AI Integrations',
        'Monthly Strategy Sessions',
        'Performance Optimization',
        'Security & Compliance Review'
      ],
      popular: true
    },
    {
        'Unlimited AI services',
        '24/7 IT support',
        'Dedicated support team',
        'Enterprise security',
        'Real-time reports',
        'Custom analytics',
        'Custom integrations',
        'On-premise deployment',
        'SLA guarantee'
      name: 'AI Enterprise',
      description: 'Complete AI transformation for large organizations',
      price: '$5,000',
      period: '/month',
      icon: Cloud,
      color: 'from-green-500 to-teal-600',
      features: [
        'Full AI Transformation Strategy',
        'Custom AI Solution Development',
        'Advanced Workflow Automation',
        'Dedicated Account Manager',
        'Real-time Analytics & Monitoring',
        'Unlimited AI Integrations',
        'Weekly Strategy Sessions',
        'Advanced Security & Compliance',
        'Custom Training & Support',
        'ROI Guarantee'
      ],
      popular: false
    }
  ];

  const aiServices = [
    { name: 'AI-Powered Chatbots', price: '$299', period: '/month', marketPrice: '$500-2000', features: ['Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'CRM Integration'] },
    { name: 'AI Content Generation', price: '$199', period: '/month', marketPrice: '$300-1500', features: ['Automated Content Creation', 'SEO Optimization', 'Multi-format Support', 'Brand Voice Training'] },
    { name: 'AI Data Analytics', price: '$399', period: '/month', marketPrice: '$800-3000', features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Machine Learning Models'] },
    { name: 'AI Computer Vision', price: '$499', period: '/month', marketPrice: '$1000-4000', features: ['Image Recognition', 'Object Detection', 'Video Analysis', 'Custom Model Training'] },
    { name: 'AI Voice Solutions', price: '$349', period: '/month', marketPrice: '$600-2500', features: ['Speech Recognition', 'Text-to-Speech', 'Voice Commands', 'Multi-language Support'] },
    { name: 'AI Workflow Automation', price: '$249', period: '/month', marketPrice: '$400-1800', features: ['Process Automation', 'Task Scheduling', 'Integration APIs', 'Custom Workflows'] }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', price: '$199', period: '/month', marketPrice: '$300-1200', features: ['AWS/Azure/GCP Setup', 'Auto-scaling', 'Load Balancing', '24/7 Monitoring'] },
    { name: 'Web Development', price: '$299', period: '/month', marketPrice: '$500-2000', features: ['Modern Web Apps', 'Responsive Design', 'Performance Optimization', 'SEO Ready'] },
    { name: 'Mobile Development', price: '$399', period: '/month', marketPrice: '$800-3000', features: ['iOS & Android Apps', 'Cross-platform', 'App Store Optimization', 'Push Notifications'] },
    { name: 'Cybersecurity', price: '$199', period: '/month', marketPrice: '$400-1500', features: ['Security Audits', 'Threat Monitoring', 'Penetration Testing', 'Compliance Support'] },
    { name: 'API Development', price: '$149', period: '/month', marketPrice: '$200-1000', features: ['RESTful APIs', 'GraphQL', 'Documentation', 'Rate Limiting'] },
    { name: 'Database Management', price: '$179', period: '/month', marketPrice: '$300-1200', features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration Support'] }
  ];

  const microSaasServices = [
    { name: 'AI Analytics Dashboard', price: '$99', period: '/month', marketPrice: '$200-800', features: ['Real-time Analytics', 'Custom Dashboards', 'Data Visualization', 'Export Reports'] },
    { name: 'AI Chatbot Builder', price: '$79', period: '/month', marketPrice: '$150-600', features: ['No-code Builder', 'Multi-channel', 'Analytics', 'Custom Branding'] },
    { name: 'AI Email Marketing', price: '$59', period: '/month', marketPrice: '$100-400', features: ['Automated Campaigns', 'A/B Testing', 'Segmentation', 'Analytics'] },
    { name: 'AI Project Management', price: '$89', period: '/month', marketPrice: '$150-500', features: ['Task Management', 'Team Collaboration', 'Time Tracking', 'Reporting'] },
    { name: 'AI SEO Optimizer', price: '$69', period: '/month', marketPrice: '$120-450', features: ['Keyword Research', 'Content Optimization', 'Rank Tracking', 'Competitor Analysis'] },
    { name: 'AI Sales CRM', price: '$129', period: '/month', marketPrice: '$200-800', features: ['Lead Management', 'Sales Pipeline', 'Automation', 'Integration'] }
  ];

  const getCurrentServices = () => {
    switch (activeTab) {
      case 'ai': return aiServices;
      case 'it': return itServices;
      case 'micro-saas': return microSaasServices;
      default: return aiServices;
    }
  };

  const getTabIcon = (tab: string) => {
    switch (tab) {
      case 'ai': return Brain;
      case 'it': return Code;
      case 'micro-saas': return Cloud;
      default: return Brain;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
      </div>
    <>
  </>
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Pricing services from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Pricing</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
export default PricingPage;
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our industry-leading support and cutting-edge technology.
            </p>
          </div>
        </section>

        {/* Main Pricing Plans */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              AI & IT Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
  const addOnServices = [
    {
      name: 'AI Content Generation',
      price: '$500/month',
      description: 'Automated content creation for blogs, social media, and marketing'
    },
    {
      name: 'AI Data Analytics',
      price: '$750/month',
      description: 'Advanced data insights and predictive analytics'
    },
    {
      name: 'AI Cybersecurity',
      price: '$1,000/month',
      description: 'AI-powered security monitoring and threat detection'
    },
    {
      name: 'Quantum Computing Solutions',
      price: '$2,500/month',
      description: 'Next-generation quantum algorithms and security'
    }
  ];

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Transparent pricing for AI and IT services. Choose from our flexible plans designed to meet your business needs and budget." />
        <meta name="keywords" content="AI pricing, IT services pricing, enterprise AI solutions, AI consulting costs, technology pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our 30-day money-back guarantee.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border ${
                    plan.popular 
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-400/20' 
                      : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <title>Pricing - Zion Tech Group | Affordable AI & IT Solutions</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from our flexible plans designed to fit your business needs and budget." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent <span className="text-cyan-400">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our flexible pricing plans designed to fit your business needs and budget. 
              No hidden fees, no surprises.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-2 border border-slate-700">
              {[
                { id: 'ai', label: 'AI Services', icon: Brain },
                { id: 'it', label: 'IT Services', icon: Code },
                { id: 'micro-saas', label: 'Micro SaaS', icon: Cloud }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentServices().map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <div className="flex items-baseline justify-center space-x-2">
                    <span className="text-4xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-gray-400">{service.period}</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    Market price: <span className="line-through">{service.marketPrice}</span>
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Enterprise Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Solution?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We offer custom enterprise solutions tailored to your specific needs. 
                Contact us for a personalized quote and consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Contact Sales</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2">
                  <span>Schedule Demo</span>
                  <Calendar className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-3">Can I change my plan anytime?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-3">Is there a free trial?</h3>
                <p className="text-gray-300">We offer a 14-day free trial for all our services. No credit card required.</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-3">What support do you provide?</h3>
                <p className="text-gray-300">We provide 24/7 email support and live chat during business hours for all plans.</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-3">Do you offer refunds?</h3>
                <p className="text-gray-300">Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-on Services */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Add-on Services</h2>
              <p className="text-xl text-gray-300">Enhance your plan with additional services</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOnServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Guarantee */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-2xl p-8 border border-green-500/30">
              <Star className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">ROI Guarantee</h2>
              <p className="text-xl text-gray-300 mb-6">
                We guarantee a minimum 300% ROI within 12 months or we'll refund your investment.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">300%</div>
                  <div className="text-gray-300">Minimum ROI</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">12</div>
                  <div className="text-gray-300">Months</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                  <div className="text-gray-300">Money Back</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss your specific requirements and get a personalized quote.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">{contactInfo.phone}</div>
                  <div className="text-gray-400 text-sm">Call us anytime</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">{contactInfo.email}</div>
                  <div className="text-gray-400 text-sm">Email us</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">Middletown, DE</div>
                  <div className="text-gray-400 text-sm">Our location</div>
                </div>
              </div>
            </div>
            
            <Link
              href="/contact"
              className="cyber-button inline-flex items-center text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Link>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default PricingPage;
