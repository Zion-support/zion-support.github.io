'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, Shield, CheckCircle, Users, Clock, ArrowRight, Brain, Cloud, Database, Smartphone, Settings, Target, Lightbulb, Zap, TrendingUp, Activity, Monitor, AlertTriangle } from 'lucide-react';

const ITPerformanceMonitoringPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Performance Monitoring | Zion Tech Group</title>
        <meta name="description" content="Professional IT performance monitoring services with real-time monitoring, analytics, and optimization. Monitor system performance, uptime, and efficiency." />
        <meta name="keywords" content="IT performance monitoring, system monitoring, performance analytics, uptime monitoring, IT metrics" />
        <link rel="canonical" href="https://ziontechgroup.com/it-performance-monitoring" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IT Performance
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                  Monitoring
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Professional IT performance monitoring services with real-time monitoring, analytics, and optimization to ensure optimal system performance and reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center">
                  <Brain className="w-5 h-5 mr-2" />
                  Start Performance Assessment
                </button>
                <button className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                  <BarChart className="w-5 h-5 mr-2" />
                  View Monitoring Dashboard
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
                IT Performance Monitoring Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive IT performance monitoring solutions provide real-time insights and optimization recommendations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Real-Time Monitoring</h3>
                <p className="text-gray-300 mb-6">
                  Continuous real-time monitoring of system performance, resource utilization, and application health.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    System performance tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    Resource utilization monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    Application health checks
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Performance Analytics</h3>
                <p className="text-gray-300 mb-6">
                  Advanced analytics with performance trends, capacity planning, and optimization recommendations.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    Performance trend analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    Capacity planning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    Optimization recommendations
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Alert Management</h3>
                <p className="text-gray-300 mb-6">
                  Intelligent alerting system with threshold-based notifications and escalation procedures.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    Threshold-based alerts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    Escalation procedures
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    Alert correlation
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Capacity Planning</h3>
                <p className="text-gray-300 mb-6">
                  Proactive capacity planning with growth forecasting and resource optimization recommendations.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    Growth forecasting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    Resource optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    Scaling recommendations
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Security Monitoring</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive security monitoring with threat detection, vulnerability assessment, and incident response.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    Threat detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    Vulnerability assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    Incident response
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Automated Remediation</h3>
                <p className="text-gray-300 mb-6">
                  Automated remediation capabilities with self-healing systems and proactive issue resolution.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    Self-healing systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    Proactive resolution
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    Automated workflows
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
                Performance Monitoring Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IT performance monitoring services deliver measurable improvements in system reliability and efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">99.9%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Uptime</h3>
                <p className="text-gray-300">System uptime guarantee</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">50%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Performance Gain</h3>
                <p className="text-gray-300">Average performance improvement</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">80%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Issue Reduction</h3>
                <p className="text-gray-300">Reduction in system issues</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">24/7</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Monitoring</h3>
                <p className="text-gray-300">Continuous monitoring coverage</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your IT Performance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you monitor and optimize your IT infrastructure for maximum performance and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center">
                <Brain className="w-5 h-5 mr-2" />
                Start Performance Assessment
              </button>
              <button className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-white transition-all duration-300 flex items-center justify-center">
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

export default ITPerformanceMonitoringPage;