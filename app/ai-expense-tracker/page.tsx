import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Receipt, Calculator, TrendingUp, Shield, Users, Clock, Star, Mic, Smartphone, Globe } from 'lucide-react';

const AiExpenseTrackerPage: React.FC = () => {
  const features = [
    {
      icon: Receipt,
      title: 'Smart Receipt Scanning',
      description: 'AI-powered receipt scanning that automatically extracts expense data.',
      benefits: ['OCR technology', 'Data extraction', 'Category detection', 'Amount recognition']
    },
    {
      icon: Calculator,
      title: 'Automated Calculations',
      description: 'Automatically calculate totals, taxes, and reimbursements.',
      benefits: ['Tax calculations', 'Reimbursement tracking', 'Budget monitoring', 'Expense categorization']
    },
    {
      icon: TrendingUp,
      title: 'Expense Analytics',
      description: 'Get insights into your spending patterns and trends.',
      benefits: ['Spending analysis', 'Trend identification', 'Budget insights', 'Cost optimization']
    },
    {
      icon: Shield,
      title: 'Secure Processing',
      description: 'Bank-grade security for all your financial data.',
      benefits: ['Data encryption', 'Secure storage', 'Privacy protection', 'Compliance standards']
    },
    {
      icon: Users,
      title: 'Team Management',
      description: 'Manage expenses for your entire team with role-based access.',
      benefits: ['Team oversight', 'Approval workflows', 'Role management', 'Collaborative tracking']
    },
    {
      icon: Clock,
      title: 'Real-time Tracking',
      description: 'Track expenses in real-time with instant notifications.',
      benefits: ['Live updates', 'Instant alerts', 'Real-time sync', 'Mobile notifications']
    }
  ];

  const benefits = [
    '90% reduction in manual data entry',
    'Real-time expense tracking',
    'Automated categorization',
    'Advanced analytics dashboard',
    'Team collaboration tools',
    'Mobile-first design'
  ];

  return (
    <>
      <Helmet>
        <title>AI Expense Tracker - Smart Financial Management | Zion Tech Group</title>
        <meta name="description" content="Transform your expense management with AI-powered tracking. Smart receipt scanning, automated calculations, and comprehensive analytics." />
        <meta name="keywords" content="AI expense tracker, expense management, receipt scanning, financial tracking, expense analytics, budget management" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Expense
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Tracker
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your expense management with AI-powered tracking. 
              Smart receipt scanning, automated calculations, and comprehensive analytics.
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
              Smart Expense Tracking Features
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
              Why Choose AI Expense Tracker?
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
              Ready to Simplify Your Expenses?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of professionals already using AI-powered expense tracking 
              to streamline their financial management.
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

export default AiExpenseTrackerPage;