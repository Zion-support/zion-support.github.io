'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Eye, Lock, AlertTriangle, CheckCircle, ArrowRight, Star, Globe, Clock, DollarSign, Zap, Database } from 'lucide-react';

const ZionSecurityShieldPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Security Shield - Cybersecurity Monitoring Platform | Zion Tech Group</title>
        <meta name="description" content="Advanced cybersecurity monitoring platform with real-time threat detection, automated response, and comprehensive security analytics." />
        <meta name="keywords" content="cybersecurity, threat detection, security monitoring, automated response, security analytics, compliance" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-security-shield" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                Zion Security Shield
              </h1>
              <p className="text-xl md:text-2xl text-red-400 mb-8 font-medium">
                Advanced Cybersecurity Monitoring Platform
              </p>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Protect your business with enterprise-grade cybersecurity monitoring that detects threats in real-time, 
                automates incident response, and provides comprehensive security analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="cyber-button-enhanced px-8 py-4 text-lg font-semibold">
                  Start Free Trial
                </button>
                <button className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text-enhanced">
              Comprehensive Security Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card-enhanced p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Real-time Threat Detection</h3>
                <p className="text-gray-300 mb-4">Monitor your entire infrastructure 24/7 with AI-powered threat detection and analysis.</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Network monitoring</li>
                  <li>• Endpoint protection</li>
                  <li>• Cloud security</li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Automated Response</h3>
                <p className="text-gray-300 mb-4">Instantly respond to security incidents with automated containment and remediation.</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Auto-quarantine threats</li>
                  <li>• Block malicious IPs</li>
                  <li>• Isolate compromised systems</li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Security Analytics</h3>
                <p className="text-gray-300 mb-4">Comprehensive security analytics and reporting with actionable insights.</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Threat intelligence</li>
                  <li>• Risk assessment</li>
                  <li>• Compliance reporting</li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Incident Management</h3>
                <p className="text-gray-300 mb-4">Streamlined incident response with automated workflows and team collaboration.</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Incident tracking</li>
                  <li>• Team notifications</li>
                  <li>• Response playbooks</li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Compliance Monitoring</h3>
                <p className="text-gray-300 mb-4">Ensure compliance with industry standards including GDPR, HIPAA, and SOC 2.</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• GDPR compliance</li>
                  <li>• HIPAA monitoring</li>
                  <li>• SOC 2 reporting</li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Vulnerability Management</h3>
                <p className="text-gray-300 mb-4">Continuous vulnerability scanning and patch management across your infrastructure.</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Vulnerability scanning</li>
                  <li>• Patch management</li>
                  <li>• Risk prioritization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text-enhanced">
              Security-First Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card-enhanced p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Essential</h3>
                <div className="text-4xl font-bold text-red-400 mb-6">$299<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 50 endpoints
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic threat detection
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Email alerts
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Standard support
                  </li>
                </ul>
                <button className="w-full cyber-button-enhanced py-3">
                  Get Started
                </button>
              </div>

              <div className="cyber-card-enhanced p-8 border-2 border-red-400 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-red-400 mb-6">$799<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 200 endpoints
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced threat detection
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Automated response
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Compliance monitoring
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                </ul>
                <button className="w-full cyber-button-enhanced py-3">
                  Get Started
                </button>
              </div>

              <div className="cyber-card-enhanced p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-red-400 mb-6">Custom</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited endpoints
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    AI-powered threat hunting
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    White-label solution
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Dedicated support
                  </li>
                </ul>
                <button className="w-full border-2 border-red-400 text-red-400 py-3 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text-enhanced">
              Secure Your Business Today
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Don't wait for a security breach. Protect your business with Zion Security Shield's advanced monitoring and response capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="cyber-button-enhanced px-8 py-4 text-lg font-semibold">
                Start Your Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionSecurityShieldPage;