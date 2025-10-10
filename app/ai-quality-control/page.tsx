'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, ArrowRight, Eye, BarChart, Settings, AlertTriangle, Target } from 'lucide-react';

const AiQualityControlPage: React.FC = () => {
  const features = [
    'Automated defect detection and classification',
    'Real-time quality monitoring and alerts',
    'Predictive quality analytics',
    'Computer vision-based inspection',
    'Statistical process control (SPC)',
    'Quality trend analysis and reporting',
    'Integration with production systems',
    'Custom quality metrics and thresholds'
  ];

  const benefits = [
    'Reduce defects by up to 90%',
    'Improve product quality consistency',
    'Reduce inspection time by 80%',
    'Real-time quality monitoring',
    'Predictive maintenance for quality issues',
    'Compliance with quality standards'
  ];

  return (
    <>
      <Helmet>
        <title>AI Quality Control - Zion Tech Group | Intelligent Quality Solutions</title>
        <meta name="description" content="Enhance your quality control processes with AI-powered inspection and monitoring. Reduce defects, improve consistency, and ensure compliance." />
        <meta name="keywords" content="AI quality control, quality inspection, defect detection, quality monitoring, manufacturing quality, quality analytics" />
        <meta property="og:title" content="AI Quality Control - Zion Tech Group" />
        <meta property="og:description" content="Intelligent AI-powered quality control solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-quality-control" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Quality Control</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Revolutionize your quality control processes with intelligent AI solutions. Detect defects, monitor quality in real-time, and ensure consistent product excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <Shield className="w-5 h-5" />
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
                    <Eye className="w-6 h-6 text-white" />
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
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our AI Quality Control?</h2>
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
                <h3 className="text-2xl font-bold text-white mb-6">Quality Metrics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Defect Detection Rate</span>
                    <span className="text-green-400 font-semibold">99.5%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Inspection Speed</span>
                    <span className="text-cyan-400 font-semibold">10x Faster</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">False Positive Rate</span>
                    <span className="text-purple-400 font-semibold">&lt; 0.1%</span>
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
                Ready to Improve Your Quality Control?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your quality processes with AI-powered inspection and monitoring solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Shield className="w-5 h-5" />
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

export default AiQualityControlPage;