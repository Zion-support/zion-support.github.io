'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Code, AlertTriangle, CheckCircle, XCircle, Eye, Lock, Unlock, ArrowRight, Phone, Mail, MapPin, Zap, Brain, Database } from 'lucide-react';

const AICodeSecurityAuditorPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Automated Security Scanning',
      description: 'Comprehensive security analysis of your codebase with AI-powered vulnerability detection',
      color: 'text-red-400'
    },
    {
      icon: Code,
      title: 'Code Quality Assessment',
      description: 'Evaluate code quality, maintainability, and adherence to security best practices',
      color: 'text-blue-400'
    },
    {
      icon: AlertTriangle,
      title: 'Threat Detection',
      description: 'Identify potential security threats, vulnerabilities, and attack vectors in your code',
      color: 'text-orange-400'
    },
    {
      icon: Lock,
      title: 'Compliance Checking',
      description: 'Ensure compliance with security standards and regulatory requirements',
      color: 'text-green-400'
    }
  ];

  const benefits = [
    'Automated security vulnerability detection',
    'Real-time code quality assessment',
    'Compliance with security standards',
    'Detailed security reports and recommendations',
    'Integration with CI/CD pipelines',
    'Support for multiple programming languages',
    'Custom security rule configuration',
    'Continuous monitoring and alerting'
  ];

  const securityChecks = [
    {
      title: 'SQL Injection Prevention',
      description: 'Detect and prevent SQL injection vulnerabilities in database queries',
      icon: Database
    },
    {
      title: 'XSS Protection',
      description: 'Identify and fix cross-site scripting vulnerabilities in web applications',
      icon: Eye
    },
    {
      title: 'Authentication Security',
      description: 'Audit authentication mechanisms and password security practices',
      icon: Lock
    },
    {
      title: 'Data Encryption',
      description: 'Verify proper encryption of sensitive data and secure communication',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <Helmet>
        <title>AI Code Security Auditor | Zion Tech Group</title>
        <meta name="description" content="AI-powered code security auditor for automated vulnerability detection, compliance checking, and security assessment. Protect your codebase with advanced AI tools." />
        <meta name="keywords" content="AI security auditor, code security, vulnerability detection, security scanning, compliance checking, code quality" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                AI Code Security
              </span>
              <br />
              <span className="text-white">Auditor</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your codebase with our AI-powered security auditor. 
              Detect vulnerabilities, ensure compliance, and maintain code quality with automated analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
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
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI security auditor provides comprehensive protection for your codebase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of AI-driven security auditing for your codebase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Checks Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Checks
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security analysis covering all major vulnerability types and compliance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityChecks.map((check, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg mb-4">
                  <check.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{check.title}</h3>
                <p className="text-gray-300">{check.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Secure Your Code?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Contact our experts to discuss your security auditing needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICodeSecurityAuditorPage;