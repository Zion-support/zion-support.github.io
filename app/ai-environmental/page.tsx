'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Leaf, Globe, Recycle, TreePine, Wind, Sun, Droplets, Shield, BarChart, Users, Clock, CheckCircle, ArrowRight, Brain, Cloud, Database, Smartphone, Settings, Target, Lightbulb, Zap } from 'lucide-react';

const AIEnvironmentalPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Environmental Solutions | Zion Tech Group</title>
        <meta name="description" content="AI-powered environmental monitoring and sustainability solutions for climate change mitigation, pollution control, and ecosystem protection." />
        <meta name="keywords" content="AI environmental, climate change, sustainability, pollution monitoring, ecosystem protection, green technology" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-environmental" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Environmental
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Harness the power of AI to protect our planet with advanced environmental monitoring, climate change mitigation, and sustainable technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center">
                  <Brain className="w-5 h-5 mr-2" />
                  Start Environmental Assessment
                </button>
                <button className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                  <BarChart className="w-5 h-5 mr-2" />
                  View Impact Reports
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
                Environmental AI Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered environmental platform provides comprehensive solutions for monitoring, analyzing, and protecting our natural environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <Wind className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Climate Monitoring</h3>
                <p className="text-gray-300 mb-6">
                  Real-time climate data analysis with AI-powered weather prediction and extreme event forecasting.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Weather pattern analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Extreme event prediction
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Climate trend modeling
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Water Quality Management</h3>
                <p className="text-gray-300 mb-6">
                  Advanced water quality monitoring and contamination detection using AI-powered sensor networks.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Real-time contamination detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Water treatment optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Pollution source tracking
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <TreePine className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Ecosystem Protection</h3>
                <p className="text-gray-300 mb-6">
                  AI-driven biodiversity monitoring and habitat protection systems for endangered species conservation.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Species population tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Habitat health monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Conservation strategy optimization
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <Recycle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Waste Management</h3>
                <p className="text-gray-300 mb-6">
                  Smart waste sorting and recycling optimization using computer vision and machine learning algorithms.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Automated waste sorting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Recycling efficiency optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Circular economy modeling
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <Sun className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Renewable Energy Optimization</h3>
                <p className="text-gray-300 mb-6">
                  AI-powered optimization of renewable energy systems for maximum efficiency and minimal environmental impact.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Solar panel efficiency optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Wind farm placement analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Energy storage optimization
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Environmental Compliance</h3>
                <p className="text-gray-300 mb-6">
                  Automated compliance monitoring and reporting for environmental regulations and sustainability standards.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Regulatory compliance tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Automated reporting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Risk assessment and mitigation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Environmental Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI environmental solutions are making a measurable difference in protecting our planet.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">85%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Pollution Reduction</h3>
                <p className="text-gray-300">Average reduction in environmental pollution</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">70%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Energy Efficiency</h3>
                <p className="text-gray-300">Improvement in renewable energy efficiency</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">95%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Accuracy</h3>
                <p className="text-gray-300">Environmental prediction accuracy</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">50%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Cost Savings</h3>
                <p className="text-gray-300">Reduction in environmental compliance costs</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join the Environmental Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with us to create a sustainable future using AI-powered environmental solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center">
                <Brain className="w-5 h-5 mr-2" />
                Start Environmental Assessment
              </button>
              <button className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIEnvironmentalPage;