'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Code, 
  Shield, 
  Zap, 
  CheckCircle, 
  AlertTriangle, 
  Star, 
  Users, 
  Clock, 
  ArrowRight,
  Brain,
  GitBranch,
  Bug,
  Lock,
  BarChart3,
  MessageSquare,
  FileText,
  Settings,
  Play,
  Download,
  Upload
} from 'lucide-react';

export default function AICodeReviewerPage() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze your code for bugs, security vulnerabilities, and performance issues.'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: 'Security Scanning',
      description: 'Comprehensive security analysis including OWASP Top 10 vulnerabilities, dependency scanning, and threat modeling.'
    },
    {
      icon: <Bug className="w-6 h-6 text-red-400" />,
      title: 'Bug Detection',
      description: 'Intelligent bug detection with 99.7% accuracy, identifying potential runtime errors and logic flaws.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: 'Performance Insights',
      description: 'Detailed performance analysis with optimization recommendations and bottleneck identification.'
    },
    {
      icon: <GitBranch className="w-6 h-6 text-blue-400" />,
      title: 'Git Integration',
      description: 'Seamless integration with GitHub, GitLab, and Bitbucket for automated code reviews on every commit.'
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-yellow-400" />,
      title: 'Smart Comments',
      description: 'AI-generated code comments and suggestions to improve code quality and maintainability.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        'Up to 10,000 lines of code/month',
        'Basic security scanning',
        'GitHub integration',
        'Email support',
        'Standard bug detection'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        'Up to 100,000 lines of code/month',
        'Advanced security scanning',
        'All Git platform integrations',
        'Priority support',
        'Advanced bug detection',
        'Performance analysis',
        'Custom rules engine'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large development teams',
      features: [
        'Unlimited code analysis',
        'Enterprise security scanning',
        'Custom integrations',
        '24/7 dedicated support',
        'AI-powered code suggestions',
        'Team collaboration tools',
        'Advanced reporting',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '99.7%', label: 'Bug Detection Accuracy', icon: <CheckCircle className="w-6 h-6" /> },
    { number: '50K+', label: 'Developers Trust Us', icon: <Users className="w-6 h-6" /> },
    { number: '2M+', label: 'Lines Analyzed Daily', icon: <Code className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Code Reviewer - Automated Code Analysis & Security Scanning | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered code review tool with 99.7% bug detection accuracy. Automated security scanning, performance analysis, and intelligent code suggestions. Starting at $29/month." />
        <meta name="keywords" content="AI code review, automated code analysis, security scanning, bug detection, code quality, developer tools, static analysis" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-code-reviewer" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Code Analysis
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Code Reviewer
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Revolutionize your development workflow with our AI-powered code review tool. 
                Detect bugs, security vulnerabilities, and performance issues with 99.7% accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to maintain high code quality and security standards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your development needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                  plan.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-white/20'
                } hover:bg-white/15 transition-all duration-300 relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700' 
                      : 'border-2 border-white text-white hover:bg-white/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Improve Your Code Quality?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of developers who trust our AI-powered code review tool. 
                Start your free trial today - no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Contact Sales
                </button>
              </div>
              <div className="mt-8 text-white/80 text-sm">
                <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}