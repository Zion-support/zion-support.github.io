'use client';
import React from 'react';
import { FileText, CheckCircle, ArrowRight, Phone, Calculator, Target, BarChart, Settings, Brain, Zap, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIInvoiceGeneratorPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Generation',
      description: 'Automatically generate professional invoices using AI'
    },
    {
      icon: Calculator,
      title: 'Smart Calculations',
      description: 'Automatically calculate taxes, discounts, and totals'
    },
    {
      icon: Zap,
      title: 'Instant Processing',
      description: 'Create and send invoices in seconds, not minutes'
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Ensure compliance with tax regulations and security standards'
    }
  ];

  const invoiceTypes = [
    {
      title: 'Service Invoices',
      description: 'Professional invoices for service-based businesses',
      features: ['Time tracking', 'Hourly rates', 'Project billing', 'Recurring invoices']
    },
    {
      title: 'Product Invoices',
      description: 'Detailed invoices for product sales and inventory',
      features: ['Product catalogs', 'Inventory tracking', 'Bulk pricing', 'Shipping costs']
    },
    {
      title: 'Subscription Invoices',
      description: 'Automated recurring billing for subscription services',
      features: ['Auto-renewal', 'Prorated billing', 'Tiered pricing', 'Usage tracking']
    },
    {
      title: 'Custom Invoices',
      description: 'Fully customizable invoices for any business need',
      features: ['Brand customization', 'Custom fields', 'Multiple currencies', 'Multi-language']
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Faster Payments',
      description: 'Get paid 40% faster with professional invoices'
    },
    {
      icon: BarChart,
      title: 'Better Tracking',
      description: 'Track invoice status and payment history automatically'
    },
    {
      icon: Calculator,
      title: 'Error Reduction',
      description: 'Eliminate calculation errors with AI-powered accuracy'
    },
    {
      icon: Settings,
      title: 'Easy Management',
      description: 'Manage all invoices from a single dashboard'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Invoice
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Generator
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Create professional invoices instantly with our AI-powered invoice generator. 
                Save time, reduce errors, and get paid faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all">
                  <FileText className="w-5 h-5 mr-2" />
                  Generate Invoice
                </button>
                <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all">
                  <Phone className="w-5 h-5 mr-2" />
                  (302) 464-0950
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">AI Invoice Generator Features</h2>
            <p className="text-gray-400">Everything you need to create professional invoices</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Invoice Types Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Invoice Types</h2>
            <p className="text-gray-400">Create any type of invoice for your business needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {invoiceTypes.map((type, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-gray-400 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our AI Invoice Generator?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400">Simple steps to create professional invoices</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Enter Details</h3>
              <p className="text-gray-400">Input client and service/product information</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Generation</h3>
              <p className="text-gray-400">AI creates a professional invoice automatically</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Review & Customize</h3>
              <p className="text-gray-400">Review and make any necessary adjustments</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Send & Track</h3>
              <p className="text-gray-400">Send to client and track payment status</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Professional Invoices?</h2>
            <p className="text-gray-300 mb-8">Start generating invoices with AI today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/consultation"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Get Started
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AIInvoiceGeneratorPage;