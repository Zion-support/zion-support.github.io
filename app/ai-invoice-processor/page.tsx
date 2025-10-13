'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  DocumentTextIcon,
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  CogIcon,
  EyeIcon,
  ShieldCheckIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline';

export default function AIInvoiceProcessorPage() {
  const features = [
    "AI-powered OCR for 99.9% accuracy",
    "Automatic data extraction and validation",
    "Smart invoice categorization",
    "Duplicate detection and prevention",
    "Approval workflow automation",
    "Integration with accounting systems",
    "Real-time processing and validation",
    "Multi-language support",
    "PDF and image format support",
    "Automated approval routing",
    "Compliance checking",
    "Audit trail and reporting"
  ];

  const benefits = [
    "90% reduction in processing time",
    "99.9% accuracy in data extraction",
    "50% cost savings on invoice processing",
    "Eliminate manual data entry errors",
    "Faster payment processing",
    "Complete audit trail"
  ];

  const useCases = [
    "Accounting firms",
    "Accounts payable departments",
    "Small business finance",
    "Procurement teams",
    "Financial services",
    "Healthcare billing"
  ];

  const integrations = [
    { name: "QuickBooks", icon: "📊", color: "from-blue-500 to-blue-600" },
    { name: "Xero", icon: "💼", color: "from-green-500 to-emerald-500" },
    { name: "Sage", icon: "📈", color: "from-purple-500 to-pink-500" },
    { name: "NetSuite", icon: "☁️", color: "from-orange-500 to-red-500" },
    { name: "SAP", icon: "🔧", color: "from-indigo-500 to-blue-500" },
    { name: "Excel", icon: "📋", color: "from-green-600 to-green-700" }
  ];

  const pricing = {
    starter: {
      price: "$49",
      period: "month",
      features: [
        "Up to 100 invoices/month",
        "Basic OCR processing",
        "Standard integrations",
        "Email support",
        "Basic reporting",
        "1 user account"
      ]
    },
    professional: {
      price: "$149",
      period: "month",
      features: [
        "Up to 500 invoices/month",
        "Advanced OCR processing",
        "All integrations",
        "Priority support",
        "Advanced reporting",
        "Up to 5 user accounts",
        "Custom workflows",
        "API access"
      ]
    },
    enterprise: {
      price: "$399",
      period: "month",
      features: [
        "Unlimited invoices",
        "Premium OCR processing",
        "Custom integrations",
        "Dedicated support",
        "Enterprise reporting",
        "Unlimited users",
        "White-label options",
        "Custom development",
        "SLA guarantee"
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Invoice Processor - Zion Tech Group</title>
        <meta name="description" content="AI-powered invoice processing that reduces processing time by 90% and achieves 99.9% accuracy. Automated data extraction, validation, and accounting integration." />
        <meta name="keywords" content="AI invoice processing, OCR, accounts payable, invoice automation, data extraction, accounting integration" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <DocumentTextIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Invoice Processor
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Automate invoice processing with AI-powered accuracy
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
              Our AI Invoice Processor uses advanced OCR and machine learning to automatically extract, 
              validate, and process invoices with 99.9% accuracy, reducing processing time by 90%.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="#demo" 
                className="group border-2 border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Watch Demo
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Invoice Processor delivers measurable improvements to your invoice processing
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-green-400 mb-2">90%</h3>
              <p className="text-xl text-gray-300">Reduction in Processing Time</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChartBarIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-400 mb-2">99.9%</h3>
              <p className="text-xl text-gray-300">Accuracy in Data Extraction</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CurrencyDollarIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-purple-400 mb-2">50%</h3>
              <p className="text-xl text-gray-300">Cost Savings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-green-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing accounting and business systems
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {integrations.map((integration, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${integration.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-3xl">{integration.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{integration.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to automate and optimize your invoice processing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-green-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your invoice volume and business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(pricing).map(([plan, details], index) => (
              <div 
                key={plan}
                className={`bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border ${
                  plan === 'professional' ? 'border-green-500 relative' : 'border-slate-600'
                }`}
              >
                {plan === 'professional' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-4 capitalize">{plan}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-green-400">{details.price}</span>
                  <span className="text-gray-400">/{details.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {details.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan === 'professional'
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700'
                      : 'border-2 border-green-400 text-green-300 hover:bg-green-400 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perfect For
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ideal for businesses looking to automate and optimize their invoice processing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <LightBulbIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-green-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Automate Your Invoice Processing?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of businesses already using AI Invoice Processor to streamline their operations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}