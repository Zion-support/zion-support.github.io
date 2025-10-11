'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, ArrowRight } from 'lucide-react';

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
    { name: 'Cloud Infrastructure', price: '$1,500', period: '/month', marketPrice: '$2500-8000', features: ['Server Management', 'Auto-scaling', 'Backup Solutions', '24/7 Monitoring'] },
    { name: 'Cybersecurity Solutions', price: '$2,000', period: '/month', marketPrice: '$3500-12000', features: ['Threat Detection', 'Security Audits', 'Compliance', 'Incident Response'] },
    { name: 'Custom Development', price: '$150', period: '/hour', marketPrice: '$200-500/hour', features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration'] },
    { name: 'IT Consulting', price: '$200', period: '/hour', marketPrice: '$300-800/hour', features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Change Management'] }
  ];

  const microSaas = [
    { name: 'Zion Analytics Pro', price: '$89', period: '/month', marketPrice: '$150-500', features: ['Real-time Data Visualization', 'AI-powered Insights', 'Custom Dashboards', 'Automated Reports'] },
    { name: 'Zion Chat AI', price: '$149', period: '/month', marketPrice: '$300-800', features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Sentiment Analysis', 'Live Agent Handoff'] },
    { name: 'Zion Invoice Genius', price: '$49', period: '/month', marketPrice: '$100-300', features: ['AI-powered Generation', 'Automated Billing', 'Multi-currency Support', 'Payment Tracking'] },
    { name: 'Zion Lead Magnet', price: '$99', period: '/month', marketPrice: '$200-600', features: ['AI Lead Scoring', 'Multi-channel Capture', 'Automated Nurturing', 'CRM Integration'] }
  ];

  const getCurrentServices = () => {
    switch (activeTab) {
      case 'ai': return aiServices;
      case 'it': return itServices;
      case 'saas': return microSaas;
      default: return aiServices;
    }
  };

  return (
    <>
      <Helmet>
        <title>Pricing | Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Transparent pricing for our AI services, IT solutions, and Micro SaaS products. Choose the plan that fits your business needs." />
        <meta name="keywords" content="pricing, AI services pricing, IT solutions cost, micro SaaS pricing, technology services" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transparent Pricing
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All our services come with 24/7 support and money-back guarantee.
              </p>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('ai')}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                    activeTab === 'ai'
                      ? 'bg-cyan-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  AI Services
                </button>
                <button
                  onClick={() => setActiveTab('it')}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                    activeTab === 'it'
                      ? 'bg-cyan-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  IT Services
                </button>
                <button
                  onClick={() => setActiveTab('saas')}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                    activeTab === 'saas'
                      ? 'bg-cyan-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Micro SaaS
                </button>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getCurrentServices().map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-600">{service.price}</span>
                      <span className="text-gray-600 ml-1">{service.period}</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Market Price: <span className="line-through">{service.marketPrice}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact our team for a personalized quote tailored to your specific requirements.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Contact Us Today
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PricingPage;