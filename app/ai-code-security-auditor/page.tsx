'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const AiCodeSecurityAuditorPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'AI-Powered Security Auditing',
      description: 'Advanced AI algorithms that detect security vulnerabilities and provide remediation suggestions.',
      benefits: ['Vulnerability detection', 'Security scanning', 'Threat analysis', 'Risk assessment']
    },
    {
      icon: Brain,
      title: 'Intelligent Analysis',
      description: 'Deep code analysis using machine learning to identify complex security issues.',
      benefits: ['Pattern recognition', 'Anomaly detection', 'Behavioral analysis', 'Predictive security']
    },
    {
      icon: Target,
      title: 'Comprehensive Coverage',
      description: 'Cover all aspects of application security from code to deployment.',
      benefits: ['Code analysis', 'Dependency scanning', 'Configuration review', 'Runtime monitoring']
    },
    {
      icon: Settings,
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing development and CI/CD pipeline.',
      benefits: ['CI/CD integration', 'IDE plugins', 'API access', 'Webhook support']
    },
    {
      icon: Database,
      title: 'Compliance Support',
      description: 'Ensure compliance with security standards and regulations.',
      benefits: ['OWASP compliance', 'PCI DSS', 'SOC 2', 'GDPR compliance']
    },
    {
      icon: Globe,
      title: 'Real-Time Monitoring',
      description: 'Monitor security posture in real-time with continuous analysis.',
      benefits: ['Live monitoring', 'Alert system', 'Dashboard', 'Reporting']
    }
  ];

  const benefits = [
    'Detect security vulnerabilities before they become problems',
    'Ensure compliance with security standards and regulations',
    'Reduce security risks with intelligent analysis',
    'Automate security auditing and monitoring',
    'Gain insights with comprehensive security reports',
    'Scale security practices across your organization'
  ];

  const useCases = [
    {
      title: 'Code Review',
      description: 'Automated security code review and analysis',
      icon: Shield
    },
    {
      title: 'Vulnerability Scanning',
      description: 'Scan applications for known vulnerabilities',
      icon: Target
    },
    {
      title: 'Compliance Auditing',
      description: 'Ensure compliance with security standards',
      icon: Database
    },
    {
      title: 'Threat Modeling',
      description: 'Model and analyze potential security threats',
      icon: Brain
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Code Security Auditor - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered code security auditing for modern applications. Detect vulnerabilities and ensure compliance." />
        <meta name="keywords" content="code security, security auditing, vulnerability scanning, compliance, security analysis" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Code Security Auditor
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Secure your applications with our AI-powered security auditing. 
                Detect vulnerabilities, ensure compliance, and protect your code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#features"
                  className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Security Auditing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our security auditor provides everything you need to secure your applications and ensure compliance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="bg-cyan-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our security auditor can protect your applications across different industries.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/10 text-center">
                  <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Security Auditor?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our AI-powered security auditor is designed to help you protect your applications 
                  and ensure compliance with security standards.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <div className="text-center">
                    <div className="bg-cyan-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <Shield className="w-10 h-10 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Security First</h3>
                    <p className="text-gray-300 mb-6">
                      Protect your applications with comprehensive security analysis and monitoring.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                        <div className="text-gray-300 text-sm">Accuracy</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-purple-400">24/7</div>
                        <div className="text-gray-300 text-sm">Monitoring</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Secure Your Code?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start protecting your applications with our AI-powered security auditor. 
                Get started today and see the difference intelligent security analysis can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/pricing"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>View Pricing</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default AiCodeSecurityAuditorPage;