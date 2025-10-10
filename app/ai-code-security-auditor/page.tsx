'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, Code, AlertTriangle, CheckCircle, XCircle, Eye, Lock, Unlock, 
  Search, Filter, Download, Upload, Settings, Play, Pause, RotateCcw,
  FileText, Database, Globe, Server, Key, User, Users, Building,
  Zap, Target, Star, ArrowRight, Phone, Mail, MapPin, TrendingUp
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface CodeSecurityAuditorProps {
  className?: string;
}

export default function CodeSecurityAuditor({ className = '' }: CodeSecurityAuditorProps) {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState<any[]>([]);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [codeContent, setCodeContent] = useState('');
  const [vulnerabilities, setVulnerabilities] = useState<any[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const securityIssues = [
    {
      id: 1,
      type: 'SQL Injection',
      severity: 'High',
      file: 'user-controller.js',
      line: 45,
      description: 'Potential SQL injection vulnerability in user authentication query',
      recommendation: 'Use parameterized queries or prepared statements'
    },
    {
      id: 2,
      type: 'XSS',
      severity: 'Medium',
      file: 'profile-page.tsx',
      line: 23,
      description: 'Cross-site scripting vulnerability in user input rendering',
      recommendation: 'Sanitize user input before rendering'
    },
    {
      id: 3,
      type: 'CSRF',
      severity: 'High',
      file: 'api-routes.js',
      line: 67,
      description: 'Missing CSRF protection on sensitive endpoints',
      recommendation: 'Implement CSRF tokens for state-changing operations'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Vulnerability Detection',
      description: 'Automatically detect security vulnerabilities in your codebase using AI-powered analysis',
      benefits: ['Real-time scanning', 'Multiple language support', 'Comprehensive coverage', 'False positive reduction']
    },
    {
      icon: Code,
      title: 'Code Analysis',
      description: 'Deep analysis of code patterns, dependencies, and security best practices',
      benefits: ['Pattern recognition', 'Dependency analysis', 'Best practice checking', 'Code quality metrics']
    },
    {
      icon: AlertTriangle,
      title: 'Risk Assessment',
      description: 'Prioritize security issues based on risk level and potential impact',
      benefits: ['Risk scoring', 'Impact analysis', 'Priority ranking', 'Remediation guidance']
    },
    {
      icon: CheckCircle,
      title: 'Compliance Checking',
      description: 'Ensure your code meets security standards and compliance requirements',
      benefits: ['Standards compliance', 'Regulatory checking', 'Audit trails', 'Documentation generation']
    }
  ];

  const supportedLanguages = [
    'JavaScript/TypeScript',
    'Python',
    'Java',
    'C#',
    'C++',
    'Go',
    'Rust',
    'PHP',
    'Ruby',
    'Swift',
    'Kotlin'
  ];

  const pricing = [
    {
      name: 'Developer',
      price: '$49',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        'Basic vulnerability scanning',
        'Up to 5 repositories',
        'Email support',
        'Standard reports',
        'Basic compliance checking'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$199',
      period: '/month',
      description: 'Ideal for development teams',
      features: [
        'Advanced AI scanning',
        'Unlimited repositories',
        'Priority support',
        'Custom rules',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Full customization',
        'Dedicated support',
        'On-premise deployment',
        'White-label solutions',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const benefits = [
    'Reduce security vulnerabilities by 80%',
    'Save 70% of security review time',
    'Improve code quality and compliance',
    'Prevent security breaches',
    'Meet regulatory requirements',
    'Build secure applications from the start'
  ];

  return (
    <>
      <Helmet>
        <title>AI Code Security Auditor | Zion Tech Group</title>
        <meta name="description" content="Secure your code with AI-powered security auditing. Detect vulnerabilities, ensure compliance, and build secure applications." />
        <meta name="keywords" content="AI security auditor, code security, vulnerability detection, security scanning, compliance checking, Zion Tech Group" />
      </Helmet>

      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Code Security Auditor
                <span className="block text-red-400">for Secure Development</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Secure your codebase with AI-powered security auditing. Detect vulnerabilities, 
                ensure compliance, and build secure applications from the ground up.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Start Security Scan
                </button>
                <button className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 hover:text-red-600 transition-colors">
                  View Demo
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
                Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered security analysis and auditing
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Issues Demo */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Security Issues Detected
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real-time security analysis and vulnerability detection
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
              <div className="p-6 border-b border-white/20">
                <h3 className="text-xl font-semibold text-white mb-2">Recent Security Scan Results</h3>
                <p className="text-gray-300">Found {securityIssues.length} security issues in your codebase</p>
              </div>
              <div className="divide-y divide-white/20">
                {securityIssues.map((issue) => (
                  <div key={issue.id} className="p-6 hover:bg-white/5 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            issue.severity === 'High' ? 'bg-red-500 text-white' :
                            issue.severity === 'Medium' ? 'bg-yellow-500 text-white' :
                            'bg-green-500 text-white'
                          }`}>
                            {issue.severity}
                          </span>
                          <span className="text-white font-medium">{issue.type}</span>
                        </div>
                        <p className="text-gray-300 mb-2">{issue.description}</p>
                        <p className="text-sm text-gray-400">File: {issue.file} • Line: {issue.line}</p>
                        <p className="text-sm text-green-400 mt-2">💡 {issue.recommendation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Supported Languages Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Supported Languages
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Security analysis for all major programming languages
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {supportedLanguages.map((language, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center border border-white/20">
                  <span className="text-white font-medium">{language}</span>
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
                Why Choose Our Security Auditor?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that enhance your security posture
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing for security auditing solutions
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm p-8 rounded-xl border ${plan.popular ? 'border-red-400' : 'border-white/20'}`}>
                  {plan.popular && (
                    <div className="bg-red-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-red-600 text-white hover:bg-red-700' 
                      : 'border border-white/30 text-white hover:bg-white/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Secure Your Code?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your security audit today and protect your applications from vulnerabilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Start Free Scan
              </button>
              <button className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 hover:text-red-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}