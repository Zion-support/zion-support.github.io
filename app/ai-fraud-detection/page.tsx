'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Brain, Zap, ArrowRight, CheckCircle, Star, AlertTriangle, Lock } from 'lucide-react';

export default function AiFraudDetectionPage() {
  const features = [
    {
      title: "Real-time Fraud Detection",
      description: "AI-powered fraud detection that analyzes transactions in real-time",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Instant analysis", "Pattern recognition", "Anomaly detection", "Risk scoring"]
    },
    {
      title: "Machine Learning Models",
      description: "Advanced ML algorithms that continuously learn and adapt to new fraud patterns",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Behavioral analysis", "Predictive modeling", "Adaptive learning", "False positive reduction"]
    },
    {
      title: "Multi-layered Security",
      description: "Comprehensive fraud prevention with multiple detection layers",
      icon: <Lock className="w-8 h-8" />,
      benefits: ["Device fingerprinting", "Location analysis", "Velocity checks", "Rule-based filtering"]
    }
  ];

  const detectionTypes = [
    {
      title: "Payment Fraud",
      description: "Detect fraudulent payment transactions and card usage",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Identity Theft",
      description: "Identify and prevent identity theft attempts",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Account Takeover",
      description: "Detect unauthorized account access and takeover attempts",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Synthetic Identity",
      description: "Identify and prevent synthetic identity fraud",
      icon: <AlertTriangle className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "99.9%", label: "Detection Accuracy" },
    { number: "50ms", label: "Response Time" },
    { number: "90%", label: "False Positive Reduction" },
    { number: "24/7", label: "Monitoring" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Fraud Detection - Zion Tech Group</title>
        <meta name="description" content="Protect your business with AI-powered fraud detection. Real-time analysis, machine learning, and multi-layered security." />
        <meta name="keywords" content="AI fraud detection, fraud prevention, security, machine learning, risk management" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Fraud Detection
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business with AI-powered fraud detection that analyzes transactions in real-time. 
              Advanced machine learning models that continuously adapt to new fraud patterns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              AI-Powered Fraud Detection Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI fraud detection platform provides comprehensive protection against various types of fraud.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detection Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Fraud Detection Types
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive fraud detection covering all major types of fraudulent activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {detectionTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {type.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-gray-300 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Protect Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our AI fraud detection experts help you implement comprehensive fraud prevention that protects your business and customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}