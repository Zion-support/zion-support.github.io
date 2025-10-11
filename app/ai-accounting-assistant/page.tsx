'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calculator, FileText, BarChart, CheckCircle, ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAccountingAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Calculator,
      title: 'Automated Calculations',
      description: 'AI-powered calculations for complex accounting tasks with 99.9% accuracy.',
      benefits: ['Tax calculations', 'Depreciation schedules', 'Financial ratios', 'Cost analysis']
    },
    {
      icon: FileText,
      title: 'Document Processing',
      description: 'Intelligent document analysis and data extraction from invoices and receipts.',
      benefits: ['Invoice processing', 'Receipt scanning', 'Data extraction', 'Error detection']
    },
    {
      icon: BarChart,
      title: 'Financial Analytics',
      description: 'Advanced analytics and reporting for better financial decision making.',
      benefits: ['Financial reports', 'Trend analysis', 'Budget forecasting', 'Performance metrics']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Instant processing of accounting transactions and immediate insights.',
      benefits: ['Real-time updates', 'Instant calculations', 'Live reporting', 'Immediate alerts']
    }
  ];

  const capabilities = [
    {
      title: 'Tax Preparation',
      description: 'Automated tax calculations and form preparation for all business types.',
      icon: Calculator
    },
    {
      title: 'Bookkeeping',
      description: 'Automated entry of transactions and maintenance of general ledger.',
      icon: FileText
    },
    {
      title: 'Financial Reporting',
      description: 'Generate comprehensive financial reports and statements automatically.',
      icon: BarChart
    },
    {
      title: 'Audit Support',
      description: 'Prepare audit-ready documentation and compliance reports.',
      icon: Target
    }
  ];

  const benefits = [
    'Reduce accounting time by up to 80%',
    'Eliminate human calculation errors',
    'Automated compliance monitoring',
    'Real-time financial insights',
    'Seamless integration with existing systems',
    '24/7 automated processing'
  ];

  return (
    <>
      <Helmet>
        <title>AI Accounting Assistant - Zion Tech Group</title>
        <meta name="description" content="Streamline your accounting with our AI-powered assistant. Automate calculations, document processing, and financial reporting." />
        <meta name="keywords" content="AI accounting, automated accounting, financial software, accounting assistant, bookkeeping automation" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <Calculator className="inline-block w-16 h-16 mr-4 text-cyan-400" />
                AI Accounting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Assistant</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your accounting processes with our intelligent AI assistant. 
                Automate calculations, document processing, and financial reporting with unprecedented accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced AI technology for modern accounting needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-slate-800/50 p-6 rounded-lg">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Core Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive accounting solutions for businesses of all sizes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{capability.title}</h3>
                    <p className="text-gray-300">{capability.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Assistant?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of accounting with our intelligent automation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4" />
                  <span className="text-white text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Accounting?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our AI accounting assistant to streamline their financial processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AIAccountingAssistantPage;