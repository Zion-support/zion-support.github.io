import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Shield, Search, AlertTriangle, ArrowRight, Lock, Eye, FileCheck } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICodeSecurityAuditorPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const features = [
    {
      title: 'Vulnerability Detection',
      description: 'AI-powered detection of security vulnerabilities and potential threats in your code.',
      icon: Search,
      benefits: [
        'Automated vulnerability scanning',
        'Real-time threat detection',
        'Pattern recognition',
        'Risk assessment'
      ]
    },
    {
      title: 'Security Analysis',
      description: 'Comprehensive security analysis with detailed reports and recommendations.',
      icon: Shield,
      benefits: [
        'Code security analysis',
        'Compliance checking',
        'Security best practices',
        'Detailed reporting'
      ]
    },
    {
      title: 'Threat Assessment',
      description: 'Advanced threat assessment and risk evaluation for your applications.',
      icon: AlertTriangle,
      benefits: [
        'Threat modeling',
        'Risk evaluation',
        'Attack surface analysis',
        'Security recommendations'
      ]
    },
    {
      title: 'Compliance Monitoring',
      description: 'Automated compliance monitoring for security standards and regulations.',
      icon: FileCheck,
      benefits: [
        'Regulatory compliance',
        'Security standards',
        'Audit preparation',
        'Compliance reporting'
      ]
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
      description: 'Secure your web and mobile applications with AI-powered security auditing.',
      icon: Lock
    },
    {
      title: 'API Security',
      description: 'Protect your APIs with comprehensive security analysis and monitoring.',
      icon: Shield
    },
    {
      title: 'Cloud Security',
      description: 'Ensure cloud infrastructure security with automated auditing and monitoring.',
      icon: Eye
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Code Security Auditor - Zion Tech Group</title>
        <meta name="description" content="AI-powered code security auditing that detects vulnerabilities, analyzes threats, and ensures compliance. Protect your code with intelligent security analysis." />
        <meta name="keywords" content="AI security auditor, code security, vulnerability detection, security analysis, threat assessment, compliance monitoring" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,68,68,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Code Security
              <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Auditor
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Protect your code with AI-powered security auditing. Detect vulnerabilities, 
              analyze threats, and ensure compliance with intelligent security analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-red-400 text-red-300 px-8 py-4 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Security Auditor Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered security auditor provides comprehensive protection for your code.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-red-500 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
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
        <section className="py-20 px-4 bg-gradient-to-r from-red-900/20 to-orange-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Security Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Protect your applications across different platforms and environments.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-red-500 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4 mx-auto">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Security Auditor?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-powered security auditing that protects your code.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Secure Your Code?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of developers who trust our AI Security Auditor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Auditing
                </button>
                <button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AICodeSecurityAuditorPage;