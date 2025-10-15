'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CurrencyDollarIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  StarIcon,
  ShieldCheckIcon,
  CogIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const AIAccountingAssistantPage: React.FC = () => {
  const features = [
    "Automated invoice processing",
    "Expense categorization",
    "Tax preparation assistance",
    "Financial reporting",
    "Receipt scanning and OCR",
    "Multi-currency support",
    "Bank reconciliation",
    "Budget tracking and alerts",
    "Compliance monitoring",
    "Integration with accounting software"
  ];

  const benefits = [
    "Save 80% time on bookkeeping",
    "Reduce human errors by 95%",
    "Real-time financial insights",
    "Automated tax compliance",
    "Cost savings of $2,000+/month",
    "24/7 financial monitoring"
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$99/month",
      features: ["Up to 100 transactions", "Basic reporting", "Email support"],
      popular: false
    },
    {
      plan: "Professional",
      price: "$199/month",
      features: ["Up to 500 transactions", "Advanced analytics", "Priority support", "API access"],
      popular: true
    },
    {
      plan: "Enterprise",
      price: "$399/month",
      features: ["Unlimited transactions", "Custom integrations", "Dedicated support", "White-label options"],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Accounting Assistant - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered accounting assistant that automates bookkeeping, expense tracking, and financial reporting for businesses." />
        <meta name="keywords" content="AI accounting, automated bookkeeping, expense tracking, financial reporting, tax preparation, accounting software" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI Accounting Assistant
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Revolutionize your accounting with our AI-powered assistant that automates bookkeeping, 
              expense tracking, and financial reporting. Save time and reduce errors while gaining 
              real-time financial insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Powerful AI Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our AI Accounting Assistant?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <StarIcon className="w-6 h-6 text-yellow-500 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">{benefit}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Simple, Transparent Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white border-2 rounded-lg p-8 ${plan.popular ? 'border-green-500 relative' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.plan}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`w-full block text-center py-3 px-4 rounded-lg font-medium transition-colors ${
                      plan.popular 
                        ? 'bg-green-600 text-white hover:bg-green-700' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Accounting?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of businesses already saving time and money with our AI accounting assistant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                to="/contact" 
                className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-colors font-medium"
              >
                Schedule Demo
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-green-100">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAccountingAssistantPage;