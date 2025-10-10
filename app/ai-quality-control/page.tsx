'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, CheckCircle, BarChart, Users, Clock, ArrowRight, Brain, Cloud, Database, Smartphone, Settings, Target, Lightbulb, Zap, Eye, AlertTriangle, TrendingUp, Award, Gauge } from 'lucide-react';

const AIQualityControlPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Quality Control Solutions | Zion Tech Group</title>
        <meta name="description" content="AI-powered quality control and assurance solutions for manufacturing, production, and service industries. Automated defect detection, quality monitoring, and process optimization." />
        <meta name="keywords" content="AI quality control, quality assurance, defect detection, manufacturing AI, production monitoring, quality analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-quality-control" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Quality Control
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize quality assurance with AI-powered defect detection, automated quality monitoring, and intelligent process optimization for superior product quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <Brain className="w-5 h-5 mr-2" />
                  Start Quality Assessment
                </button>
                <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                  <BarChart className="w-5 h-5 mr-2" />
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Quality Control Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered quality control platform provides comprehensive solutions for defect detection and quality assurance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Visual Defect Detection</h3>
                <p className="text-gray-300 mb-6">
                  Advanced computer vision algorithms detect surface defects, dimensional variations, and quality issues in real-time.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Real-time defect detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    High-resolution image analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Automated classification
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Gauge className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Process Monitoring</h3>
                <p className="text-gray-300 mb-6">
                  Continuous monitoring of production processes with AI-powered anomaly detection and quality prediction.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Real-time process monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Anomaly detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Quality prediction models
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Predictive Quality</h3>
                <p className="text-gray-300 mb-6">
                  AI models predict quality issues before they occur, enabling proactive quality management and prevention.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Quality trend analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Early warning systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Root cause analysis
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Quality Analytics</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive quality analytics with detailed reporting, trend analysis, and performance metrics.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Real-time quality dashboards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Statistical process control
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Custom reporting
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Compliance Management</h3>
                <p className="text-gray-300 mb-6">
                  Automated compliance checking and certification management for industry standards and regulations.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Standards compliance checking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Certification tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Audit preparation
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Continuous Improvement</h3>
                <p className="text-gray-300 mb-6">
                  AI-driven recommendations for process optimization and quality improvement initiatives.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Process optimization suggestions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Quality improvement plans
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Performance benchmarking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Quality Control?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your quality assurance processes with AI technology that delivers measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">99.5%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Detection Accuracy</h3>
                <p className="text-gray-300">Defect detection accuracy rate</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">80%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Cost Reduction</h3>
                <p className="text-gray-300">Reduction in quality control costs</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">90%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Faster Inspection</h3>
                <p className="text-gray-300">Faster than traditional methods</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">95%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Quality Improvement</h3>
                <p className="text-gray-300">Overall product quality improvement</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Improve Your Quality Control?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading manufacturers already using AI to achieve superior quality and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                <Brain className="w-5 h-5 mr-2" />
                Start Quality Assessment
              </button>
              <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIQualityControlPage;