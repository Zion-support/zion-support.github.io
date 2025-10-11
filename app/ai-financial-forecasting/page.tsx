'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, Cloud, Code, BarChart, Database, Heart, DollarSign, Eye, Mic, Globe, FileText, Workflow, Cpu, Target, MessageCircle, MessageSquare, TrendingUp, CheckSquare, Settings, Package, Calendar, Mail, Monitor, Wifi, Lock, ShoppingCart, Link as LinkIcon, Server, Box } from 'lucide-react';

const AifinancialforecastingPage = () => {
  const serviceName = "Ai Financial Forecasting";
  const serviceDescription = "Advanced AI-powered solutions for ai financial forecasting";
  
  const features = [
    "AI-powered automation and intelligence",
    "Real-time data processing and analysis", 
    "Scalable cloud infrastructure",
    "Enterprise-grade security",
    "24/7 monitoring and support",
    "Custom integration capabilities"
  ];

  const benefits = [
    "Increase efficiency by up to 300%",
    "Reduce operational costs by 40%",
    "Improve accuracy and reliability",
    "Scale seamlessly with your business",
    "Get insights from your data",
    "Stay ahead of the competition"
  ];

  return (
    <>
      <Helmet>
        <title>Ai Financial Forecasting | Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Advanced AI-powered solutions for ai financial forecasting" />
        <meta name="keywords" content="AI, artificial intelligence, ai financial forecasting, automation, technology solutions" />
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
                  Get Started
                </button>
                <button className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Learn More
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
              <p className="text-gray-300">Powerful AI capabilities designed for modern businesses</p>
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
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our {serviceName}?</h2>
              <p className="text-gray-300">Transform your business with cutting-edge AI technology</p>
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

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8">Contact us today to learn more about our {serviceName} solutions</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Contact Sales
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

export default AifinancialforecastingPage;
