'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, CheckCircle, BarChart, Zap, Brain, Target, Users, Globe, ArrowRight, Star, Award, TrendingUp } from 'lucide-react';

const AIQualityControlPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Quality Control Solutions | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered quality control systems for manufacturing, production, and service industries. Real-time defect detection, predictive quality analytics, and automated quality assurance." />
        <meta name="keywords" content="AI quality control, quality assurance, defect detection, manufacturing AI, predictive quality, automated inspection" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-quality-control" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Quality Control
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your quality assurance with AI-powered inspection systems, real-time defect detection, 
                and predictive quality analytics that ensure consistent excellence across all production lines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Advanced Quality Control Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered quality control systems provide comprehensive inspection and analysis capabilities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Real-time Defect Detection</h3>
                <p className="text-gray-300 mb-4">
                  Instant identification of defects, anomalies, and quality issues using advanced computer vision and machine learning algorithms.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Visual inspection automation</li>
                  <li>• Pattern recognition</li>
                  <li>• Anomaly detection</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Predictive Quality Analytics</h3>
                <p className="text-gray-300 mb-4">
                  Forecast quality issues before they occur using predictive models and historical data analysis.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Quality trend analysis</li>
                  <li>• Risk prediction</li>
                  <li>• Performance forecasting</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Automated Inspection</h3>
                <p className="text-gray-300 mb-4">
                  Fully automated quality control processes that reduce human error and increase inspection speed.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• 24/7 continuous monitoring</li>
                  <li>• High-speed processing</li>
                  <li>• Consistent standards</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Machine Learning Models</h3>
                <p className="text-gray-300 mb-4">
                  Custom-trained ML models that learn from your specific quality standards and improve over time.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Custom model training</li>
                  <li>• Continuous learning</li>
                  <li>• Adaptive algorithms</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Precision Measurement</h3>
                <p className="text-gray-300 mb-4">
                  Accurate dimensional analysis and measurement verification with sub-millimeter precision.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Dimensional accuracy</li>
                  <li>• Tolerance checking</li>
                  <li>• Geometric analysis</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-green-500 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Quality Management</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive quality management dashboard with reporting, analytics, and compliance tracking.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Quality dashboards</li>
                  <li>• Compliance reporting</li>
                  <li>• Team collaboration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our AI Quality Control?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your quality assurance processes with cutting-edge AI technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">99.9% Accuracy</h3>
                <p className="text-gray-300">Superior defect detection accuracy compared to manual inspection</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">10x Faster</h3>
                <p className="text-gray-300">Dramatically faster inspection speeds than traditional methods</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Cost Effective</h3>
                <p className="text-gray-300">Reduce quality control costs by up to 60%</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Scalable</h3>
                <p className="text-gray-300">Easily scale across multiple production lines and facilities</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Quality Control?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI-powered quality control solutions and ensure consistent excellence in your production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIQualityControlPage;