'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, CheckCircle, BarChart, Zap, Brain, Target, Users, Globe } from 'lucide-react';

const AIQualityControlPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Quality Control Solutions | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered quality control systems for manufacturing, healthcare, and enterprise. Automated defect detection, predictive quality analytics, and intelligent process optimization." />
        <meta name="keywords" content="AI quality control, automated inspection, defect detection, predictive quality, manufacturing AI, quality assurance AI" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-quality-control" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Quality Control
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your quality assurance with AI-powered inspection, automated defect detection, 
                and predictive quality analytics for superior product excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              AI Quality Control Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <Shield className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Automated Inspection</h3>
                <p className="text-gray-300">
                  AI-powered visual inspection systems that detect defects with 99.9% accuracy, 
                  reducing human error and increasing throughput.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <BarChart className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
                <p className="text-gray-300">
                  Machine learning models that predict quality issues before they occur, 
                  enabling proactive quality management.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <Zap className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Real-time Monitoring</h3>
                <p className="text-gray-300">
                  Continuous quality monitoring with instant alerts and automated 
                  corrective actions for optimal production quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Quality Control?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our AI experts to learn how our quality control solutions can 
              improve your product quality and reduce costs.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Contact Us Today
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIQualityControlPage;