'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calculator, FileText, BarChart, CheckCircle, ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiAccountingAssistantPage: React.FC = () => {
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
      title: 'Financial Reporting',
      description: 'Generate comprehensive financial reports and analytics automatically.',
      benefits: ['P&L statements', 'Balance sheets', 'Cash flow reports', 'Trend analysis']
    },
    {
      icon: Target,
      title: 'Compliance Monitoring',
      description: 'Ensure compliance with accounting standards and regulations.',
      benefits: ['GAAP compliance', 'Tax regulations', 'Audit preparation', 'Risk assessment']
    }
  ];

  const benefits = [
    'Reduce accounting errors by 95%',
    'Save 80% of time on routine tasks',
    'Automated compliance checking',
    'Real-time financial insights',
    'Seamless integration with existing systems',
    '24/7 automated processing'
  ];

  return (
    <>
      <Helmet>
        <title>AI Accounting Assistant - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered accounting assistant for automated calculations, document processing, and financial reporting." />
        <meta name="keywords" content="AI accounting, automated accounting, financial software, accounting assistant, bookkeeping automation" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Accounting Assistant</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your accounting processes with our intelligent AI assistant that automates calculations, document processing, and financial reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300">Everything you need for automated accounting</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Accounting Assistant?</h2>
              <p className="text-xl text-gray-300">Transform your accounting with intelligent automation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Automate Your Accounting?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI accounting assistant to streamline their financial processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AiAccountingAssistantPage;
