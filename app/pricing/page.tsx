'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, ArrowRight, Zap, Brain, Cloud, Cpu, DollarSign, Users, Shield, BarChart3, FileText, Target, Globe, Database, Settings, Calendar, Eye, Mic, Heart, Lock, Package, Monitor, Wifi, Code, Smartphone } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

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
    <>
      <Helmet>
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
    </>
  );
};

export default PricingPage;