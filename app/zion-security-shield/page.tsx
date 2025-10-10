'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight, Star, Award, Clock, Target, BarChart, Settings, Brain, Cloud, Zap } from 'lucide-react'

const ZionSecurityShield: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Security Shield - Advanced Cybersecurity Monitoring Platform | Zion Tech Group</title>
        <meta name="description" content="Protect your business with Zion Security Shield. Advanced cybersecurity monitoring, threat detection, and automated security response for enterprise-grade protection." />
        <meta name="keywords" content="cybersecurity, threat detection, security monitoring, automated security, enterprise security, Zion Security Shield" />
        <meta property="og:title" content="Zion Security Shield - Advanced Cybersecurity Monitoring Platform" />
        <meta property="og:description" content="Protect your business with Zion Security Shield. Advanced cybersecurity monitoring and threat detection for enterprise-grade protection." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-security-shield" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-security-shield" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl mb-6 shadow-lg shadow-red-500/25">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                Zion Security Shield
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advanced cybersecurity monitoring platform that protects your business 24/7. Detect threats, prevent breaches, and respond to incidents with AI-powered security automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-red-500/40">
                  Start Free Trial
                </button>
                <button className="border border-red-500 text-red-400 px-8 py-4 rounded-xl font-semibold hover:bg-red-500/10 transition-all duration-300">
                  Security Assessment
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Security Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to protect your business from cyber threats and security breaches
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Real-Time Threat Detection</h3>
                <p className="text-gray-300 mb-6">
                  Monitor your network, endpoints, and cloud infrastructure for threats in real-time with advanced AI detection.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Network monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Endpoint protection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Cloud security
                  </li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">AI-Powered Analysis</h3>
                <p className="text-gray-300 mb-6">
                  Leverage machine learning to identify patterns, anomalies, and potential security risks before they become threats.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Behavioral analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Anomaly detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Predictive threat modeling
                  </li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Automated Response</h3>
                <p className="text-gray-300 mb-6">
                  Automatically respond to security incidents with predefined playbooks and intelligent remediation actions.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Incident response
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Automated blocking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Threat containment
                  </li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Security Analytics</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive security dashboards and reports to track your security posture and compliance status.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Security dashboards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Compliance reporting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Risk assessment
                  </li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Threat Intelligence</h3>
                <p className="text-gray-300 mb-6">
                  Stay ahead of emerging threats with real-time threat intelligence feeds and global security updates.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Global threat feeds
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    IOCs and signatures
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Threat hunting
                  </li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Easy Management</h3>
                <p className="text-gray-300 mb-6">
                  Simple, intuitive interface for managing security policies, monitoring rules, and incident responses.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Policy management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Rule configuration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    User management
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Security Metrics Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Proven Security Performance</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Trusted by thousands of businesses worldwide to protect their critical assets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="cyber-card-enhanced p-8 rounded-2xl text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300 mb-2">Threat Detection Accuracy</div>
                <div className="text-sm text-gray-400">Advanced AI algorithms</div>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">< 30s</div>
                <div className="text-gray-300 mb-2">Average Response Time</div>
                <div className="text-sm text-gray-400">Automated threat response</div>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300 mb-2">Continuous Monitoring</div>
                <div className="text-sm text-gray-400">Never stops protecting</div>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">1000+</div>
                <div className="text-gray-300 mb-2">Threats Blocked Daily</div>
                <div className="text-sm text-gray-400">Across all clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Flexible Security Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security level that matches your business needs and risk profile
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Essential</h3>
                  <div className="text-4xl font-bold text-red-400 mb-2">$199</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
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
                    Basic reporting
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-red-500 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl border-2 border-red-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                  <div className="text-4xl font-bold text-red-400 mb-2">$499</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
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
                    Advanced analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-red-500 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                  <div className="text-4xl font-bold text-red-400 mb-2">$1,299</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited endpoints
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    AI-powered analysis
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    On-premise deployment
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-red-500 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card-enhanced p-12 rounded-3xl">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses using Zion Security Shield to protect their critical assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-red-500/40">
                  Start Your Free Trial
                </button>
                <button className="border border-red-500 text-red-400 px-8 py-4 rounded-xl font-semibold hover:bg-red-500/10 transition-all duration-300">
                  Security Assessment
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ZionSecurityShield