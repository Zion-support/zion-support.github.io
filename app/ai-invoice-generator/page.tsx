import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, FileText, Bot, Zap, Target, BarChart, TrendingUp, Users, Clock, Star, Mic, Smartphone, Globe } from 'lucide-react';

const AiInvoiceGeneratorPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Smart Invoice Generation',
      description: 'AI-powered invoice generation with automatic data extraction and formatting.',
      benefits: ['Auto data extraction', 'Template generation', 'Custom formatting', 'Brand consistency']
    },
    {
      icon: Bot,
      title: 'Automated Processing',
      description: 'Automatically process invoices with AI-powered data validation and error checking.',
      benefits: ['Data validation', 'Error detection', 'Auto-correction', 'Quality assurance']
    },
    {
      icon: Zap,
      title: 'Real-time Generation',
      description: 'Generate professional invoices instantly with real-time data processing.',
      benefits: ['Instant generation', 'Live updates', 'Real-time sync', 'Fast processing']
    },
    {
      icon: Target,
      title: 'Precision Accuracy',
      description: 'Generate accurate invoices with precise calculations and data validation.',
      benefits: ['Accurate calculations', 'Data precision', 'Error prevention', 'Quality control']
    },
    {
      icon: BarChart,
      title: 'Invoice Analytics',
      description: 'Get insights into your invoicing process with comprehensive analytics.',
      benefits: ['Invoice tracking', 'Payment analytics', 'Revenue insights', 'Performance metrics']
    },
    {
      icon: TrendingUp,
      title: 'Workflow Optimization',
      description: 'Optimize your invoicing workflow with AI-powered automation and insights.',
      benefits: ['Process optimization', 'Automation rules', 'Efficiency gains', 'Workflow insights']
    }
  ];

  const benefits = [
    '90% reduction in manual work',
    'Real-time invoice generation',
    'Automated data validation',
    'Professional templates',
    'Advanced analytics',
    'Seamless integration'
  ];

  return (
    <>
      <Helmet>
        <title>AI Invoice Generator - Smart Invoice Creation | Zion Tech Group</title>
        <meta name="description" content="Transform your invoicing with AI-powered invoice generation. Automated processing, smart templates, and real-time analytics for better financial management." />
        <meta name="keywords" content="AI invoice generator, invoice automation, smart invoicing, invoice templates, financial automation, invoice analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Invoice
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Generator
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your invoicing with AI-powered invoice generation. 
              Automated processing, smart templates, and real-time analytics for better financial management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Smart Invoice Generation Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Why Choose AI Invoice Generator?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Invoicing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using AI-powered invoice generation 
              to streamline their financial processes and improve efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiInvoiceGeneratorPage;