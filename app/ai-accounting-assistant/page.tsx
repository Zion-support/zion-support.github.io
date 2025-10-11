'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calculator, FileText, TrendingUp, Shield, ArrowRight, CheckCircle, BarChart, DollarSign } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiAccountingAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Calculator,
      title: 'Automated Calculations',
      description: 'AI-powered calculations for complex accounting tasks and financial analysis.',
      benefits: ['Tax calculations', 'Financial ratios', 'Budget analysis', 'Cost tracking']
    },
    {
      icon: FileText,
      title: 'Document Processing',
      description: 'Intelligent document processing and data extraction from financial documents.',
      benefits: ['Invoice processing', 'Receipt scanning', 'Data extraction', 'Document classification']
    },
    {
      icon: TrendingUp,
      title: 'Financial Insights',
      description: 'Advanced analytics and insights to help make informed financial decisions.',
      benefits: ['Trend analysis', 'Forecasting', 'Risk assessment', 'Performance metrics']
    },
    {
      icon: Shield,
      title: 'Compliance',
      description: 'Ensure compliance with accounting standards and regulations.',
      benefits: ['GAAP compliance', 'Tax regulations', 'Audit trails', 'Reporting standards']
    }
  ];

  const benefits = [
    'Automate repetitive accounting tasks',
    'Reduce calculation errors by 95%',
    'Process documents 10x faster',
    'Generate financial reports instantly',
    'Ensure regulatory compliance',
    'Integrate with existing systems',
    'Real-time financial insights',
    '24/7 automated assistance'
  ];

  const stats = [
    { number: '95%', label: 'Error Reduction' },
    { number: '10x', label: 'Faster Processing' },
    { number: '24/7', label: 'Availability' },
    { number: '100%', label: 'Compliance' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Accounting Assistant - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered accounting assistant for automated financial calculations, document processing, and compliance management" />
        <meta name="keywords" content="AI accounting, accounting automation, financial assistant, bookkeeping AI, accounting software" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Accounting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Assistant</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your accounting with our AI-powered assistant that automates calculations, processes documents, and ensures compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Accounting Features
              </h2>
              <p className="text-xl text-gray-300">
                Intelligent automation for all your accounting needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                  <div className="text-blue-400 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our AI Accounting Assistant?
              </h2>
              <p className="text-xl text-gray-300">
                Transform your accounting workflow with intelligent automation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-400 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Automate?</h3>
                <p className="text-gray-300 mb-6">
                  Join thousands of businesses using our AI accounting assistant to streamline their financial processes.
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Accounting?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start using our AI accounting assistant today and experience the future of automated financial management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
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

export default AiAccountingAssistantPage;