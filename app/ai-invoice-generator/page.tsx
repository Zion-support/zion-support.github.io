'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const AIInvoiceGeneratorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Invoice Generator - Zion Tech Group</title>
        <meta name="description" content="AI-powered invoice generation with smart categorization, automated billing, and intelligent payment tracking." />
        <meta name="keywords" content="AI invoice generator, automated billing, smart invoicing, payment tracking, business automation" />
        <meta property="og:title" content="AI Invoice Generator - Zion Tech Group" />
        <meta property="og:description" content="AI-powered invoice generation with smart categorization, automated billing, and intelligent payment tracking." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-invoice-generator" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Invoice Generator - Zion Tech Group" />
        <meta name="twitter:description" content="AI-powered invoice generation with smart categorization, automated billing, and intelligent payment tracking." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Invoice Generator
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Automatically generate professional invoices, track payments, and manage billing with AI-powered smart categorization and intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </button>
              <button className="border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                View Demo
              </button>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Powerful AI Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-cyan-400 mb-4">
                    <Brain className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Smart Categorization</h3>
                  <p className="text-gray-300">AI automatically categorizes expenses and generates appropriate invoice line items.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-cyan-400 mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Automated Generation</h3>
                  <p className="text-gray-300">Generate professional invoices in seconds with AI-powered templates and formatting.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-cyan-400 mb-4">
                    <BarChart className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Payment Tracking</h3>
                  <p className="text-gray-300">Intelligent payment tracking with automated reminders and status updates.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-cyan-400 mb-4">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Secure & Compliant</h3>
                  <p className="text-gray-300">Bank-level security with compliance to international invoicing standards.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-cyan-400 mb-4">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Custom Templates</h3>
                  <p className="text-gray-300">Create and customize invoice templates that match your brand identity.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-cyan-400 mb-4">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Analytics & Insights</h3>
                  <p className="text-gray-300">Get detailed insights into your billing patterns and revenue trends.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Simple Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">$29<span className="text-lg text-gray-400">/month</span></div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      100 invoices/month
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Basic AI categorization
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Standard templates
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Email support
                    </li>
                  </ul>
                  <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    Get Started
                  </button>
                </div>
                <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-8 rounded-lg relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                  <div className="text-4xl font-bold text-white mb-6">$79<span className="text-lg text-cyan-200">/month</span></div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-cyan-100">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      500 invoices/month
                    </li>
                    <li className="flex items-center text-cyan-100">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Advanced AI features
                    </li>
                    <li className="flex items-center text-cyan-100">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Custom templates
                    </li>
                    <li className="flex items-center text-cyan-100">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Payment tracking
                    </li>
                    <li className="flex items-center text-cyan-100">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Priority support
                    </li>
                  </ul>
                  <button className="w-full bg-white text-cyan-600 hover:bg-gray-100 py-3 rounded-lg font-semibold transition-colors">
                    Get Started
                  </button>
                </div>
                <div className="bg-gray-800 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">$199<span className="text-lg text-gray-400">/month</span></div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Unlimited invoices
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Full AI suite
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      White-label options
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      API access
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      24/7 support
                    </li>
                  </ul>
                  <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">10,000+</div>
                  <div className="text-gray-300">Invoices Generated</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
                  <div className="text-gray-300">Time Saved</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-gray-300">Happy Customers</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-300">AI Processing</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Invoicing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using AI to streamline their billing process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Free Trial
                </button>
                <button className="border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AIInvoiceGeneratorPage;