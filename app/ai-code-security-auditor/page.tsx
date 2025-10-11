<<<<<<< HEAD
<<<<<<< HEAD
'use client';
import React from 'react';
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';
=======
=======
'use client';
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-7175
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const AiCodeSecurityAuditorPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Automated Security Scanning',
      description: 'AI-powered code analysis that identifies security vulnerabilities and potential threats.',
      benefits: ['Vulnerability detection', 'Code quality analysis', 'Security recommendations', 'Automated reporting']
    },
    {
      icon: Brain,
<<<<<<< HEAD
      title: 'Intelligent Analysis',
      description: 'Advanced AI algorithms that understand code patterns and detect complex security issues.',
      benefits: ['Pattern recognition', 'Threat intelligence', 'Risk assessment', 'Predictive analysis']
    },
    {
      icon: BarChart,
      title: 'Comprehensive Reporting',
      description: 'Detailed security reports with actionable insights and remediation guidance.',
      benefits: ['Detailed reports', 'Risk prioritization', 'Remediation steps', 'Compliance tracking']
    },
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: 'Continuous monitoring of code changes and security posture.',
      benefits: ['Real-time alerts', 'Change tracking', 'Continuous scanning', 'Instant notifications']
    }
  ];

=======

import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings }  } from 'lucide-react';
const AiCodeSecurityAuditorPage: React.FC = () => {,
'use client'
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
  const benefits = [
    'Enhanced code security',
    'Reduced security vulnerabilities',
    'Automated compliance checking',
    'Improved code quality',
    'Real-time threat detection',
    'Comprehensive security coverage'
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7

const PagePage: React.FC = () => {
  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Page
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive solutions designed to transform your business.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                This page is under development. Please check back soon for updates.
              </p>
              <button className="cyber-button">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
=======
      <Helmet>
        <title>Ai Code Security Auditor - Zion Tech Group</title>
        <meta name="description" content="AI-powered ai code security auditor solution for intelligent automation and optimization" />
        <meta name="keywords" content="AI, ai, code, security, auditor, automation, artificial intelligence, business solutions" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Ai Code Security Auditor
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p></p>
              Advanced AI-powered ai code security auditor solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
              <button className="bg-gradient-to-r from-yellow-500 to-blue-600 hover:from-yellow-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
=======
      title: 'AI-Powered Analysis',
      description: 'Advanced AI algorithms that automatically detect security vulnerabilities and code issues.',
      benefits: ['Automated vulnerability scanning', 'Code quality assessment', 'Security pattern recognition', 'Risk prioritization']
    },
    {
      icon: Shield,
      title: 'Security Auditing',
      description: 'Comprehensive security auditing with real-time threat detection and prevention.',
      benefits: ['Threat detection', 'Vulnerability assessment', 'Security compliance', 'Risk mitigation']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Detailed analytics dashboard with security metrics and performance insights.',
      benefits: ['Security metrics', 'Performance tracking', 'Trend analysis', 'Compliance reporting']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific security issues and vulnerabilities with precision and accuracy.',
      benefits: ['Focused scanning', 'Issue prioritization', 'Custom rules', 'Targeted fixes']
    }
  ];

  const benefits = [
    'Increase security by up to 95%',
    'Reduce vulnerabilities by 80% with automated scanning',
    'Improve code quality with AI insights',
    'Ensure compliance with security standards',
    'Real-time threat detection and prevention',
    'Seamless integration with existing development workflows'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Code Security Auditor - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered code security auditing solution. Automated vulnerability detection, security analysis, and compliance checking for your codebase." />
        <meta name="keywords" content="AI code security, security auditor, vulnerability detection, code analysis, security compliance" />
      </Helmet>

      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              AI Code Security Auditor
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your codebase with advanced AI-powered security auditing and vulnerability detection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
>>>>>>> cursor/fix-errors-and-merge-to-main-7175
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
<<<<<<< HEAD
              <button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
                View Demo
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
=======
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
>>>>>>> cursor/fix-errors-and-merge-to-main-7175
              </button>
            </div>
          </div>
        </section>
      </div>
      
=======
      <Helmet>
        <title>AI Code Security Auditor - Zion Tech Group</title>
        <meta name="description" content="AI-powered code security auditing solution that automatically detects vulnerabilities and security issues in your codebase." />
        <meta name="keywords" content="AI code security, security auditing, code analysis, vulnerability detection, AI security tools" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Code Security Auditor
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Protect your codebase with AI-powered security auditing that automatically detects vulnerabilities and security issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI security technology that protects your code
              </p>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Advanced AI technology for comprehensive code security</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-7175
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
<<<<<<< HEAD
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
=======
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    <feature.icon className="h-8 w-8" />
>>>>>>> cursor/fix-errors-and-merge-to-main-7175
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
<<<<<<< HEAD
=======
        <section className="py-20 px-4"></section></section>
        </section>
          <div className="max-w-7xl mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2></h2>
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>
                Advanced AI technology that drives results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div></div>
              {features.map((feature, index) => (
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4"></h3></h3>{feature.title}</h3>
                  <p className="text-gray-300 mb-4"></p></p>{feature.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
<<<<<<< HEAD
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
=======
                        <li key={idx} className="flex items-center text-sm text-gray-400"></li>
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
=======
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
>>>>>>> cursor/fix-errors-and-merge-to-main-7175
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
=======
        <section className="py-20 px-4"></section></section>
        </section>
          <div className="max-w-7xl mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2></h2>
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that enhance your code security
              </p>
            </div>

<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Security Auditor?</h2>
              <p className="text-xl text-gray-300">Transform your code security with intelligent automation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-7175
                </div>
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div></div>
              {benefits.map((benefit, index) =&gt; (
                </div&gt;
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Secure Your Code?
=======
        <section className="py-20 px-4"></section></section>
        </section>
          <div className="max-w-4xl mx-auto text-center"></div></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2></h2>
                Ready to Get Started?
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your security requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Secure Your Code?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers already using our AI-powered security auditing solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-7175
            </div>
          </div>
        </section>
      </main>

<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
      <Footer />
    </>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default PagePage;
=======
export default AiCodeSecurityAuditorPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
=======
export default AiCodeSecurityAuditorPage;
      {/* CTA Section */}
      <section className="py-20 px-4"></section></section>
        </section>< className="$2 />
          </div><h2 className="text-4xl font-bold text-white mb-6"></h2></h2>Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8"></p></p>
            Transform your business with our page solutions today
  
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div></div>
            </div><button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
              Start Free Trial
  
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300" /></button>
              Contact Sales
  
          </div>
        </div>
      </section>

        <div className="max-w-4xl mx-auto text-center"></div></div>
          <h2 className="text-4xl font-bold text-white mb-6"></h2></h2>Ready to Get Started?
          <p className="text-xl text-gray-300 mb-8"></p></p>Transform your business with our page solutions today
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>Start Free Trial
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>Contact Sales
      <Footer />
  )
}

export default AiCodeSecurityAuditorPage
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
=======
      <Footer />
    </div>
  );
};

export default AiCodeSecurityAuditorPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-7175
