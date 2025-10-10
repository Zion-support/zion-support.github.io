'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, BarChart, Shield, CheckCircle, ArrowRight, Battery, Leaf, TrendingUp } from 'lucide-react';

const AiEnergyManagementPage: React.FC = () => {
  const features = [
    'Real-time energy consumption monitoring',
    'Predictive analytics for energy optimization',
    'Smart grid integration and management',
    'Renewable energy source optimization',
    'Automated demand response systems',
    'Carbon footprint tracking and reporting',
    'Energy cost optimization algorithms',
    'Integration with IoT energy devices'
  ];

  const benefits = [
    'Reduce energy costs by up to 30%',
    'Improve energy efficiency and sustainability',
    'Real-time monitoring and control',
    'Predictive maintenance for energy systems',
    'Compliance with environmental regulations',
    'Scalable solutions for any size operation'
  ];

  return (
    <>
      <Helmet>
        <title>AI Energy Management - Zion Tech Group | Smart Energy Solutions</title>
        <meta name="description" content="Optimize your energy consumption with AI-powered energy management solutions. Reduce costs, improve efficiency, and achieve sustainability goals." />
        <meta name="keywords" content="AI energy management, smart energy, energy optimization, renewable energy, energy analytics, sustainability" />
        <meta property="og:title" content="AI Energy Management - Zion Tech Group" />
        <meta property="og:description" content="Smart AI-powered energy management solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-energy-management" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Energy Management</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Optimize your energy consumption with intelligent AI solutions. Reduce costs, improve efficiency, and achieve your sustainability goals with smart energy management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="w-5 h-5" />
                Get Started
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5" />
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our AI Energy Management?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Energy Savings Dashboard</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Current Energy Cost</span>
                    <span className="text-white font-semibold">$2,500/month</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">With AI Optimization</span>
                    <span className="text-green-400 font-semibold">$1,750/month</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Monthly Savings</span>
                    <span className="text-cyan-400 font-bold">$750 (30%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Optimize Your Energy?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start saving on energy costs and improve your sustainability with our AI-powered energy management solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-5 h-5" />
                  Get Started Today
                </Link>
                <Link
                  to="/consultation"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiEnergyManagementPage;