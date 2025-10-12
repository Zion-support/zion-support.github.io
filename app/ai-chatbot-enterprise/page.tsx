<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
export default AiChatbotEnterprisePage;
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Brain, Users, Zap, BarChart, MessageCircle, Globe, Clock } from 'lucide-react';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AiChatbotEnterprisePage: React.FC = () => {
<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <>
      <Helmet>
        <title>AI Chatbot Enterprise - Zion Tech Group</title>
        <meta name="description" content="Enterprise AI chatbot solutions by Zion Tech Group. Professional AI and IT solutions for large organizations." />
        <meta name="keywords" content="ai-chatbot-enterprise, AI solutions, IT services, enterprise chatbot" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Chatbot Enterprise
=======
  return (
    <></>
      <Helmet></Helmet>
        <title>Ai Chatbot Enterprise - Zion Tech Group</title>
        <meta name="description" content="Ai Chatbot Enterprise services by Zion Tech Group. Professional AI and IT solutions." /></meta>
        <meta name="keywords" content="ai-chatbot-enterprise, AI solutions, IT services" /></meta>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h1 className="w-5h-5ml-2" /></h1>
              <span className="w-5h-5ml-2" />Ai Chatbot Enterprise;
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional AI chatbot enterprise services by Zion Tech Group.
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="w-5h-5ml-2">We're working on bringing you comprehensive ai chatbot enterprise solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="w-5h-5ml-2">Contact Us;
            </button>
          </div>
        </div>
      </div>
    </>
  const features = [
    {
      title: 'Enterprise-Grade Security',
      description: 'Advanced security protocols, data encryption, and compliance with industry standards',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Advanced AI Capabilities',
      description: 'Custom-trained models, multi-language support, and sophisticated conversation flows',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Handle millions of conversations with high availability and performance',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Multi-Channel Deployment',
      description: 'Deploy across websites, mobile apps, social media, and enterprise systems',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Advanced Analytics',
      description: 'Comprehensive reporting, real-time monitoring, and business intelligence',
      icon: <BarChart className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: '24/7 Support',
      description: 'Dedicated account management and round-the-clock technical support',
      icon: <Users className="w-6 h-6" />,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const enterpriseFeatures = [
    'Custom AI model training and fine-tuning',
    'Advanced security and compliance (SOC 2, GDPR, HIPAA)',
    'White-label solutions and custom branding',
    'Dedicated infrastructure and private cloud deployment',
    'Advanced integrations with enterprise systems',
    'Custom analytics and reporting dashboards',
    'Dedicated account management and support',
    'SLA guarantees and performance monitoring',
    'Multi-tenant architecture support',
    'Advanced conversation routing and escalation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Chatbot Enterprise - Zion Tech Group</title>
        <meta name="description" content="Enterprise-grade AI chatbot solutions with advanced security, scalability, and customization for large organizations." />
        <meta name="keywords" content="enterprise AI chatbot, business chatbot, corporate AI solutions, enterprise automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Chatbot
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {' '}Enterprise
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Enterprise-grade AI chatbot solutions designed for large organizations. 
            Advanced security, scalability, and customization to meet your complex business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Enterprise Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise-Grade Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for scale, security, and performance to meet the demands of large organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Enterprise Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need for enterprise-scale AI chatbot deployment and management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Core Features</h3>
              <ul className="space-y-4">
                {enterpriseFeatures.slice(0, 5).map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Advanced Capabilities</h3>
              <ul className="space-y-4">
                {enterpriseFeatures.slice(5).map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security & Compliance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade security and compliance to protect your data and meet regulatory requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'SOC 2 Type II Certified',
              'GDPR Compliant',
              'HIPAA Ready',
              'ISO 27001 Certified',
              'End-to-End Encryption',
              'Multi-Factor Authentication',
              'Regular Security Audits',
              'Data Residency Options'
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                <Shield className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-white font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Enterprise AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our enterprise AI chatbot solution can transform your organization's customer engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Contact Enterprise Sales
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Enterprise Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AiChatbotEnterprisePage;
=======
