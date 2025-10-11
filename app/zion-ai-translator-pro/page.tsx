'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, Cloud, Code, BarChart, Database, Heart, DollarSign, Eye, Mic, Globe, FileText, Workflow, Cpu, Target, MessageCircle, MessageSquare, TrendingUp, CheckSquare, Settings, Package, Calendar, Mail, Monitor, Wifi, Lock, ShoppingCart, Link as LinkIcon, Server, Box } from 'lucide-react';

const ZionaitranslatorproPage = () => {
  const serviceName = "Zion Ai Translator Pro";
  const serviceDescription = "Ready-to-use zion ai translator pro solution for your business";
  
  const features = [
    "Easy setup and configuration",
    "AI-powered automation",
    "Real-time analytics and insights",
    "Cloud-based infrastructure",
    "Mobile-responsive design",
    "24/7 customer support"
  ];

  const benefits = [
    "Get started in minutes, not months",
    "No technical expertise required",
    "Affordable monthly pricing",
    "Regular updates and improvements",
    "Integrates with your existing tools",
    "Scale as your business grows"
  ];

  return (
    <>
      <Helmet>
        <title>Zion Ai Translator Pro | Zion Tech Group - Micro SAAS Solutions</title>
        <meta name="description" content="Ready-to-use zion ai translator pro solution for your business" />
        <meta name="keywords" content="micro saas, zion ai translator pro, business tools, automation, software as a service" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {serviceName}
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                {serviceDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-gray-300">Everything you need to get started quickly</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-900/50 p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose {serviceName}?</h2>
              <p className="text-gray-300">The perfect solution for modern businesses</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <Star className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-16 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Simple Pricing</h2>
              <p className="text-gray-300">Choose the plan that works for you</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-900/50 p-8 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Starter</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-4">$29<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 5 users
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Email support
                  </li>
                </ul>
                <button className="w-full px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Get Started
                </button>
              </div>
              
              <div className="bg-slate-900/50 p-8 rounded-xl border border-cyan-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Professional</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-4">$79<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 25 users
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    All features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                </ul>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Get Started
                </button>
              </div>
              
              <div className="bg-slate-900/50 p-8 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-4">$199<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited users
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    24/7 support
                  </li>
                </ul>
                <button className="w-full px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8">Start your free trial today and see the difference</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionaitranslatorproPage;
