"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiInvoiceGeneratorZionTechGroup() {
  return (
    <React.Fragment>
      <Helmet>
        <title>AiInvoiceGenerator - Zion Tech Group</title>
      </Helmet>
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AiinvoicegeneratorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Invoice Generator - Zion Tech Group</title>
        <meta name="description" content="Professional ai invoice generator services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Invoice Generator</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai invoice generator services coming soon.</p>
          
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Invoice Generator
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai invoice generator solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div></div></div></div></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div></div></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div></div></div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
const Page: React.FC = () => {
import { ArrowRight, Brain } from 'lucide-react';

export default function AIInvoiceGenerator() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Generation',
      description: 'Automatically generate professional invoices with smart data extraction and formatting'
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-400" />,
      title: 'Automated Billing',
      description: 'Set up recurring invoices and automated payment reminders to streamline your billing process'
    },
    {
      icon: <CreditCard className="w-6 h-6 text-yellow-400" />,
      title: 'Payment Integration',
      description: 'Accept payments directly through invoices with integrated payment gateways'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: 'Financial Analytics',
      description: 'Track revenue, outstanding payments, and financial performance with detailed reports'
    }
  ]

  const invoiceFeatures = [
    {
      category: 'Invoice Creation',
      items: ['AI Template Generation', 'Custom Branding', 'Multi-currency Support', 'Tax Calculations', 'Line Item Management', 'Discount Application']
    },
    {
      category: 'Automation',
      items: ['Recurring Invoices', 'Auto-reminders', 'Payment Tracking', 'Status Updates', 'Expense Integration', 'Time Tracking']
    },
    {
      category: 'Payment Processing',
      items: ['Online Payments', 'Credit Card Processing', 'Bank Transfers', 'Payment Links', 'Mobile Payments', 'International Payments']
    },
    {
      category: 'Reporting',
      items: ['Revenue Reports', 'Outstanding Invoices', 'Payment History', 'Tax Reports', 'Client Analytics', 'Export Options']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for freelancers and small businesses',
      features: [
        'Up to 50 invoices/month',
        'Basic AI features',
        'Standard templates',
        'Email support',
        'Basic reporting',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 500 invoices/month',
        'Advanced AI features',
        'Custom branding',
        'Priority support',
        'Advanced reporting',
        'Payment integration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited invoices',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Mark Thompson',
      company: 'Freelance Designer',
      content: 'AI Invoice Generator saves me 5 hours per week. The automated reminders ensure I get paid on time.',
      rating: 5
    },
    {
      name: 'Sarah Wilson',
      company: 'Consulting Firm',
      content: 'Professional invoices with zero effort. Our clients love the automated payment options.',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'Service Provider',
      content: 'The financial analytics help us track our business performance. Highly recommended!',
      rating: 5
    }
  ]

import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code } from 'lucide-react';

export default function Page() {
  return (
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <title>- Zion Tech Group</title>
        <meta const name = "description" content="Professional  services by Zion Tech Group. Expert solutions tailored to your business needs." / / />
        <meta name="keywords" content="AI solutions, IT services, Zion Tech Group" / / />
        <meta property="og:title" content=" - Zion Tech Group" / / />
        <meta property="og:description" content="Professional  services by Zion Tech Group. Expert solutions tailored to your business needs." / / />
        <meta property="og:type" content="website" / / />
        <meta property="og:url" content="https://ziontechgroup.com/ai-invoice-generator" / / />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-16">
        </div>
        {/* Hero Section */}

              Professional  services by Zion Tech Group. Expert solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4justify-centermb-12">
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-centerjustify-centergroup" >
          Get Started
                
          <ArrowRight className="ml-2group-hover:translate-x-1transition-transform"  />
        </Link>
              <Link to="/contact" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">Learn More
              </Link>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" />
          <div className="containermx-autopx-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xllp-12text-center">
              <h2 className="text-4xl font-bold text-white mb-6"  />Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25">Contact Us
                </Link>
                <Link to="/services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">View All Services
                </Link>
              </div>
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
}
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function AiInvoiceGenerator() {return (
    <>
      <title>AiInvoiceGenerator - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">AiInvoiceGenerator</h1>
            <p className="text-lg text-gray-300 mb-8">Professional aiinvoicegenerator services coming soon.</p>

              Contact Us

      <  />
  );}

            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

}
