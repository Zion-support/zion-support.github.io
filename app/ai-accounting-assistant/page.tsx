'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CalculatorIcon,
  DocumentTextIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ShieldCheckIcon,
  CogIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline';

export default function AIAccountingAssistantPage() {
  const features = [
    "Automated invoice processing and data extraction",
    "Real-time expense categorization and tracking",
    "AI-powered financial forecasting and budgeting",
    "Automated tax preparation and compliance",
    "Multi-currency support and conversion",
    "Integration with 50+ accounting software",
    "Fraud detection and anomaly alerts",
    "Automated financial reporting",
    "Receipt scanning and OCR technology",
    "Cash flow analysis and optimization"
  ];

  const benefits = [
    "90% reduction in manual data entry",
    "Real-time financial insights",
    "Automated compliance reporting",
    "Cost savings of $5,000+ monthly",
    "Error-free calculations",
    "24/7 financial monitoring"
  ];

  const useCases = [
    "Small business accounting",
    "Freelancer expense tracking",
    "E-commerce financial management",
    "Real estate accounting",
    "Restaurant financial tracking",
    "Professional services billing"
  ];

  const pricing = {
    starter: {
      price: "$199",
      period: "month",
      features: [
        "Up to 100 transactions/month",
        "Basic invoice processing",
        "Expense categorization",
        "Email support",
        "Standard integrations"
      ]
    },
    professional: {
      price: "$399",
      period: "month",
      features: [
        "Up to 1,000 transactions/month",
        "Advanced AI forecasting",
        "Tax preparation assistance",
        "Priority support",
        "All integrations",
        "Custom reporting"
      ]
    },
    enterprise: {
      price: "$799",
      period: "month",
      features: [
        "Unlimited transactions",
        "Custom AI models",
        "Dedicated account manager",
        "White-label solution",
        "API access",
        "Custom integrations"
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Accounting Assistant - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered accounting assistant that automates bookkeeping, expense tracking, and financial reporting. Save 90% time on accounting tasks." />
        <meta name="keywords" content="AI accounting, automated bookkeeping, expense tracking, financial reporting, tax preparation, accounting software" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Accounting Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Revolutionary AI-powered accounting that automates 90% of your bookkeeping tasks
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Transform your accounting workflow with intelligent automation, real-time insights, 
              and seamless integration. Our AI learns your business patterns and handles complex 
              financial tasks with precision and speed.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced artificial intelligence that understands your business and automates complex accounting tasks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircleIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-green-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your Accounting
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented efficiency and accuracy in your financial management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CalculatorIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perfect For Every Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From freelancers to enterprises, our AI accounting assistant adapts to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                  <DocumentTextIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase}</h3>
                <p className="text-gray-300">
                  Streamlined accounting processes tailored to your industry with specialized AI models.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-green-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business size and accounting needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(pricing).map(([plan, details], index) => (
              <div key={plan} className={`bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border ${index === 1 ? 'border-green-500 relative' : 'border-slate-600'}`}>
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4 capitalize">{plan}</h3>
                <div className="text-4xl font-bold text-green-400 mb-6">
                  {details.price}<span className="text-lg text-gray-400">/{details.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {details.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className={`w-full ${index === 1 ? 'bg-white text-green-900' : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'} px-6 py-3 rounded-lg font-semibold text-center hover:opacity-90 transition-all`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Revolutionize Your Accounting?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of businesses already saving 90% time on accounting with our AI assistant
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Watch Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-green-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-green-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}