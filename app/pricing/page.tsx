'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Brain, Cloud, Cpu, Phone, Mail, MapPin, DollarSign, Users, Shield, BarChart3, FileText, Target, Globe, Database, Settings, Calendar, Eye, Mic, Heart, Lock, Package, Monitor, Wifi, Code, Smartphone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const aiServices = [
    { name: 'AI-Powered Chatbots', price: '$299', period: '/month', marketPrice: '$500-2000', features: ['Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'CRM Integration'] },
    { name: 'AI Content Generation', price: '$199', period: '/month', marketPrice: '$300-1500', features: ['Blog Post Generation', 'Social Media Content', 'Email Campaigns', 'SEO Optimization'] },
    { name: 'AI Data Analytics', price: '$399', period: '/month', marketPrice: '$800-3000', features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Anomaly Detection'] },
    { name: 'AI Workflow Automation', price: '$349', period: '/month', marketPrice: '$600-2500', features: ['Process Mining', 'Workflow Optimization', 'Task Automation', 'Exception Handling'] },
    { name: 'AI Computer Vision', price: '$599', period: '/month', marketPrice: '$1000-5000', features: ['Object Detection', 'Quality Control Automation', 'Facial Recognition', 'Video Analytics'] },
    { name: 'AI Fraud Detection', price: '$799', period: '/month', marketPrice: '$1500-5000', features: ['Real-time Monitoring', 'Behavioral Analysis', 'Risk Scoring', 'Anomaly Detection'] }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure & Migration', price: '$2,500', period: '/month', marketPrice: '$4000-15000', features: ['Cloud Architecture Design', 'Multi-cloud Strategies', 'Cost Optimization', 'Disaster Recovery'] },
    { name: 'Cybersecurity Solutions', price: '$1,800', period: '/month', marketPrice: '$3000-12000', features: ['Threat Detection & Response', 'Vulnerability Assessments', 'Penetration Testing', 'Security Monitoring'] },
    { name: 'Database Management', price: '$1,200', period: '/month', marketPrice: '$2000-8000', features: ['Database Design & Optimization', 'Performance Tuning', 'Backup & Recovery', 'Data Migration'] },
    { name: 'DevOps & CI/CD', price: '$2,200', period: '/month', marketPrice: '$3500-10000', features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging'] },
    { name: 'Custom Software Development', price: '$150', period: '/hour', marketPrice: '$200-500', features: ['Custom Application Development', 'API Development', 'Integration Services', 'Performance Optimization'] },
    { name: 'Mobile App Development', price: '$8,000', period: '/project', marketPrice: '$15000-50000', features: ['iOS & Android Development', 'Cross-platform Solutions', 'App Store Optimization', 'Push Notifications'] }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', price: '$89', period: '/month', marketPrice: '$150-500', features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors'] },
    { name: 'Zion Chat AI', price: '$149', period: '/month', marketPrice: '$300-800', features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing'] },
    { name: 'Zion Invoice Genius', price: '$49', period: '/month', marketPrice: '$100-300', features: ['AI-powered Invoice Generation', 'Automated Recurring Billing', 'Multi-currency Support', 'Payment Tracking'] },
    { name: 'Zion Security Shield', price: '$199', period: '/month', marketPrice: '$400-1200', features: ['Real-time Threat Detection', 'Automated Security Scanning', 'Compliance Monitoring', 'Incident Response'] },
    { name: 'Zion Content Studio', price: '$79', period: '/month', marketPrice: '$150-400', features: ['AI Content Generation', 'Brand Voice Training', 'Multi-platform Publishing', 'Content Calendar Management'] },
    { name: 'Zion CRM Intelligence', price: '$129', period: '/month', marketPrice: '$250-700', features: ['AI Lead Scoring', 'Automated Follow-ups', 'Customer Journey Mapping', 'Sales Forecasting'] }
  ];

  const tabs = [
    { id: 'ai', name: 'AI Services', icon: Brain, count: aiServices.length },
    { id: 'it', name: 'IT Services', icon: Cloud, count: itServices.length },
    { id: 'micro-saas', name: 'Micro SaaS', icon: Cpu, count: microSaasServices.length }
  ];

  const getCurrentServices = () => {
    switch (activeTab) {
      case 'ai': return aiServices;
      case 'it': return itServices;
      case 'micro-saas': return microSaasServices;
      default: return aiServices;
    }
  };

  const getCurrentIcon = () => {
    const tab = tabs.find(t => t.id === activeTab);
    return tab ? tab.icon : Brain;
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Services Pricing</title>
        <meta name="description" content="Transparent pricing for Zion Tech Group's AI services, IT solutions, and Micro SaaS tools. Get competitive rates with no hidden fees." />
        <meta name="keywords" content="pricing, AI services pricing, IT services cost, Micro SaaS pricing, transparent pricing" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                Transparent <span className="text-cyan-400">Pricing</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Choose the perfect plan for your business needs. No hidden fees, no surprises - just honest, competitive pricing.
              </p>
            </div>
          </div>
        </section>

        {/* Service Tabs */}
        <section className="py-8 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.name}</span>
                  <span className="px-2 py-1 bg-slate-700 text-xs rounded-full">
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-center mb-12">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4">
                  {React.createElement(getCurrentIcon(), { className: "w-6 h-6 text-cyan-400" })}
                </div>
                <h2 className="text-3xl font-bold text-white">
                  {tabs.find(t => t.id === activeTab)?.name} Pricing
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getCurrentServices().map((service, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                      {index < 3 && (
                        <span className="flex items-center px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </span>
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                        <span className="text-gray-400 ml-1">{service.period}</span>
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        Market price: <span className="line-through">{service.marketPrice}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <Link 
                        to="/contact"
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-all duration-300"
                      >
                        Get Started
                      </Link>
                      <Link 
                        to="/contact"
                        className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 text-center py-2 px-4 rounded-lg font-medium transition-all duration-300"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  We offer competitive pricing without compromising on quality or service excellence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Transparent Pricing</h3>
                  <p className="text-gray-300 text-sm">No hidden fees or surprise charges. What you see is what you pay.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Quality Guarantee</h3>
                  <p className="text-gray-300 text-sm">100% satisfaction guarantee on all our services and solutions.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Expert Support</h3>
                  <p className="text-gray-300 text-sm">Dedicated support team available 24/7 to help you succeed.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Fast Implementation</h3>
                  <p className="text-gray-300 text-sm">Quick deployment and setup to get you up and running fast.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Contact us today for a free consultation and custom quote tailored to your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get Free Consultation
                  </Link>
                  <a 
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default PricingPage;