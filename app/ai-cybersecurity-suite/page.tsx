import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Brain, Shield, Zap, Users, BarChart3, Clock, Lock, AlertTriangle, Eye, Network } from 'lucide-react'

export default function AICybersecuritySuitePage() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent cyber threats in real-time with 99.9% accuracy.'
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: 'Automated Security Response',
      description: 'Instant automated responses to security incidents, minimizing damage and reducing response time.'
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      title: 'Behavioral Analytics',
      description: 'Monitor user and system behavior patterns to identify anomalies and potential security risks.'
    },
    {
      icon: <Network className="w-8 h-8 text-orange-500" />,
      title: 'Network Security Monitoring',
      description: 'Comprehensive network traffic analysis and intrusion detection across all network layers.'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: 'Vulnerability Assessment',
      description: 'Automated vulnerability scanning and risk assessment with AI-powered prioritization.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-500" />,
      title: 'Security Analytics Dashboard',
      description: 'Real-time security metrics, threat intelligence, and compliance reporting in one unified dashboard.'
    }
  ]

  const capabilities = [
    'Real-time threat detection',
    'Automated incident response',
    'Behavioral anomaly detection',
    'Network traffic analysis',
    'Vulnerability scanning',
    'Compliance monitoring',
    'Threat intelligence integration',
    'Security orchestration'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Cybersecurity Suite - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity suite with real-time threat detection, automated response, and comprehensive security monitoring." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security monitoring, automated response, network security, vulnerability assessment" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity Suite
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Protect your organization with our advanced AI-powered cybersecurity suite. 
              Real-time threat detection, automated response, and comprehensive security monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered cybersecurity solutions to protect your digital assets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Security Capabilities
              </h2>
              <p className="text-xl text-gray-300">
                Our AI cybersecurity suite provides comprehensive protection across all security domains
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Protect your digital assets with our advanced AI-powered cybersecurity suite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Security Assessment
              </Link>
              <Link
                to="/cybersecurity"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}