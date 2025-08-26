import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Shield, BarChart3, Zap, Users, Target, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';

const AIPoweredITAssetManagement: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI-Powered IT Asset Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered IT asset management platform that provides complete visibility, optimization, and automation of your technology infrastructure." />
        <meta name="keywords" content="IT asset management, AI asset management, IT infrastructure, asset tracking, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-green-500/20 rounded-full">
                <Server className="h-8 w-8 text-green-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered IT Asset Management
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your IT infrastructure with intelligent asset management powered by artificial intelligence. 
              Gain complete visibility, optimize performance, and automate maintenance across your entire technology estate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Intelligent Asset Management
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Leverage AI to optimize every aspect of your IT infrastructure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
                <div className="p-3 bg-green-500/20 rounded-lg w-fit mb-4">
                  <Target className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Asset Discovery</h3>
                <p className="text-gray-300">
                  Automated discovery and mapping of all IT assets across your network infrastructure
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
                <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
                  <BarChart3 className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Performance Analytics</h3>
                <p className="text-gray-300">
                  Real-time monitoring and predictive analytics for optimal asset performance
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
                <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
                  <Zap className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Automated Maintenance</h3>
                <p className="text-gray-300">
                  AI-driven maintenance scheduling and automated issue resolution
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
                <div className="p-3 bg-red-500/20 rounded-lg w-fit mb-4">
                  <Shield className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Security Monitoring</h3>
                <p className="text-gray-300">
                  Continuous security assessment and threat detection across all assets
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
                <div className="p-3 bg-yellow-500/20 rounded-lg w-fit mb-4">
                  <TrendingUp className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cost Optimization</h3>
                <p className="text-gray-300">
                  Intelligent resource allocation and cost reduction recommendations
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
                <div className="p-3 bg-indigo-500/20 rounded-lg w-fit mb-4">
                  <Users className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Team Collaboration</h3>
                <p className="text-gray-300">
                  Multi-user access with role-based permissions and workflow automation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to manage your IT assets intelligently
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Asset Lifecycle Management</h3>
                <div className="space-y-4">
                  {[
                    'Automated Asset Discovery & Inventory',
                    'Real-time Asset Tracking & Monitoring',
                    'Predictive Maintenance Scheduling',
                    'Performance Optimization & Tuning',
                    'Automated Issue Detection & Resolution',
                    'Asset Retirement & Disposal Planning',
                    'Compliance & Audit Management',
                    'Vendor & Contract Management'
                  ].map((capability, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">AI-Powered Intelligence</h3>
                <div className="space-y-4">
                  {[
                    'Machine Learning Performance Analysis',
                    'Predictive Failure Detection',
                    'Intelligent Resource Allocation',
                    'Automated Cost Optimization',
                    'Smart Security Threat Detection',
                    'Dynamic Capacity Planning',
                    'Anomaly Detection & Alerting',
                    'Intelligent Workflow Automation'
                  ].map((capability, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Business Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your IT operations with intelligent asset management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Operational Excellence</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Reduce IT asset downtime by up to 60%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Automate 80% of routine maintenance tasks</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Improve asset utilization by 40%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">24/7 automated monitoring and alerting</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Cost Savings</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Reduce IT operational costs by 30-50%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Optimize asset lifecycle costs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Prevent costly equipment failures</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Eliminate redundant asset purchases</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your IT Assets?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations using AI to transform their IT infrastructure management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 text-lg">
                Get Started Today
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIPoweredITAssetManagement;