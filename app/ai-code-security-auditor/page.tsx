'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Code, AlertTriangle, CheckCircle, XCircle, Eye, Lock, Unlock, FileText, Search, Filter, Download, Upload, Settings, Zap, Star, Users, Clock, Globe, Phone, Mail, MapPin, ArrowRight, Brain, BarChart3, DollarSign, Calendar, MessageSquare, Activity, TrendingUp, Target, Award, Sparkles } from 'lucide-react';

const AICodeSecurityAuditorPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Automated Vulnerability Detection',
      description: 'AI-powered scanning to identify security vulnerabilities, code flaws, and potential attack vectors.',
      benefits: ['Real-time scanning', 'Vulnerability detection', 'Threat analysis', 'Risk assessment']
    },
    {
      icon: Code,
      title: 'Security Code Analysis',
      description: 'Comprehensive analysis of code quality, security patterns, and compliance with security standards.',
      benefits: ['Code quality analysis', 'Security pattern detection', 'Compliance checking', 'Best practices']
    },
    {
      icon: AlertTriangle,
      title: 'Threat Intelligence',
      description: 'Advanced threat intelligence and security research to identify emerging vulnerabilities and attacks.',
      benefits: ['Threat intelligence', 'Attack pattern recognition', 'Security research', 'Risk prediction']
    },
    {
      icon: Lock,
      title: 'Access Control Analysis',
      description: 'Analyze authentication, authorization, and access control mechanisms for security weaknesses.',
      benefits: ['Access control review', 'Authentication analysis', 'Authorization checks', 'Permission auditing']
    },
    {
      icon: FileText,
      title: 'Compliance Auditing',
      description: 'Ensure compliance with security standards like OWASP, NIST, ISO 27001, and industry regulations.',
      benefits: ['OWASP compliance', 'NIST guidelines', 'ISO 27001', 'Industry standards']
    },
    {
      icon: Search,
      title: 'Penetration Testing',
      description: 'Automated penetration testing and security assessment to identify exploitable vulnerabilities.',
      benefits: ['Automated testing', 'Exploit detection', 'Security assessment', 'Vulnerability validation']
    }
  ];

  const benefits = [
    'Reduce security vulnerabilities by 90%',
    'Improve code security by 85%',
    'Lower security risks by 80%',
    'Increase compliance by 95%',
    'Enable automated security testing',
    'Accelerate security audits',
    'Scale security across teams',
    'Enhance security awareness'
  ];

  const useCases = [
    {
      title: 'Application Security',
      description: 'Secure web and mobile applications with comprehensive security auditing',
      icon: '🔒'
    },
    {
      title: 'Code Review',
      description: 'Automate security code reviews and identify potential vulnerabilities',
      icon: '🔍'
    },
    {
      title: 'Compliance Auditing',
      description: 'Ensure compliance with security standards and regulations',
      icon: '📋'
    },
    {
      title: 'Penetration Testing',
      description: 'Identify security weaknesses through automated penetration testing',
      icon: '🎯'
    },
    {
      title: 'Security Training',
      description: 'Educate developers on secure coding practices and common vulnerabilities',
      icon: '📚'
    },
    {
      title: 'Risk Management',
      description: 'Assess and manage security risks across the development lifecycle',
      icon: '⚠️'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Code Security Auditor - Zion Tech Group | Automated Security Analysis</title>
        <meta name="description" content="Advanced AI code security auditor with automated vulnerability detection, security analysis, and compliance checking. Secure your code with intelligent security auditing." />
        <meta name="keywords" content="AI security auditor, code security, vulnerability detection, security analysis, penetration testing, compliance auditing" />
      </Helmet>

      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-8">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Code Security Auditor
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Secure your code with our AI Code Security Auditor. Automated vulnerability detection, 
              security analysis, and compliance checking for better code security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
                Start Security Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-red-400 text-red-300 px-8 py-4 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Security Auditing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive security analysis powered by cutting-edge AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Use Cases & Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive security solutions for all types of applications and organizations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Security Auditor?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven results that enhance security and reduce risks
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Secure Your Code?
              </h2>
              <p className="text-xl text-red-100 mb-8">
                Join thousands of organizations using our AI security auditor
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Start Security Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AICodeSecurityAuditorPage;