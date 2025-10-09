'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, CheckCircle, AlertTriangle, Star, Zap, Shield, Clock, Users, TrendingUp, ArrowRight, Phone, Mail, MapPin, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles } from 'lucide-react';

const AICodeReviewAssistant: React.FC = () => {
  const [codeInput, setCodeInput] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleCodeAnalysis = async () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysisResult({
        quality: 85,
        security: 92,
        performance: 78,
        maintainability: 88,
        issues: [
          { type: 'warning', message: 'Consider using const instead of let for immutable variables' },
          { type: 'info', message: 'Function could be optimized for better performance' },
          { type: 'success', message: 'Good error handling implementation' }
        ],
        suggestions: [
          'Add JSDoc comments for better documentation',
          'Consider breaking down large functions into smaller ones',
          'Implement proper TypeScript types'
        ]
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze your code for quality, security, and performance issues',
      benefits: ['Real-time code analysis', 'Pattern recognition', 'Learning from best practices']
    },
    {
      icon: Shield,
      title: 'Security Scanning',
      description: 'Comprehensive security vulnerability detection and remediation suggestions',
      benefits: ['OWASP compliance', 'Dependency scanning', 'Vulnerability assessment']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Identify performance bottlenecks and suggest optimizations for better code execution',
      benefits: ['Performance metrics', 'Optimization suggestions', 'Memory usage analysis']
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Ensure code quality with automated testing and best practice recommendations',
      benefits: ['Code quality metrics', 'Best practice enforcement', 'Automated testing']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for individual developers and small teams',
      features: [
        'Up to 10,000 lines of code analysis per month',
        'Basic security scanning',
        'Performance analysis',
        'Email support',
        'Integration with GitHub/GitLab'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing development teams',
      features: [
        'Up to 100,000 lines of code analysis per month',
        'Advanced security scanning',
        'Performance optimization suggestions',
        'Priority support',
        'Custom rule configuration',
        'Team collaboration features'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations with complex codebases',
      features: [
        'Unlimited code analysis',
        'Enterprise security scanning',
        'Custom AI model training',
        '24/7 dedicated support',
        'On-premise deployment',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Reduce Bugs by 60%',
      description: 'Catch potential issues before they reach production'
    },
    {
      icon: Clock,
      title: 'Save 40% Development Time',
      description: 'Automated code review reduces manual review time'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Proactive security vulnerability detection'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Improve code quality across your entire team'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Code Review Assistant - Zion Tech Group</title>
        <meta name="description" content="Automated code analysis and quality improvement suggestions powered by AI. Reduce bugs by 60% and save 40% development time." />
        <meta name="keywords" content="ai code review, code analysis, automated testing, code quality, security scanning, performance optimization" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Code Review Assistant
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Automated code analysis and quality improvement suggestions powered by advanced AI. 
            Reduce bugs by 60% and save 40% development time with intelligent code review.
          </p>
          
          {/* Live Demo */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 cyber-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Try Our AI Code Analysis</h3>
            <div className="space-y-4">
              <textarea
                value={codeInput}
                onChange={(e) => setCodeInput(e.target.value)}
                placeholder="Paste your code here for AI analysis..."
                className="w-full h-32 p-4 bg-slate-800 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
              />
              <button
                onClick={handleCodeAnalysis}
                disabled={isAnalyzing || !codeInput.trim()}
                className="cyber-button disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze Code with AI'}
              </button>
            </div>
            
            {analysisResult && (
              <div className="mt-6 p-6 bg-slate-800/50 rounded-lg">
                <h4 className="text-lg font-bold text-white mb-4">Analysis Results</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{analysisResult.quality}%</div>
                    <div className="text-sm text-gray-300">Quality</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{analysisResult.security}%</div>
                    <div className="text-sm text-gray-300">Security</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">{analysisResult.performance}%</div>
                    <div className="text-sm text-gray-300">Performance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{analysisResult.maintainability}%</div>
                    <div className="text-sm text-gray-300">Maintainability</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {analysisResult.issues.map((issue, index) => (
                    <div key={index} className={`flex items-center space-x-2 p-2 rounded ${
                      issue.type === 'warning' ? 'bg-yellow-500/20' :
                      issue.type === 'error' ? 'bg-red-500/20' : 'bg-green-500/20'
                    }`}>
                      {issue.type === 'warning' ? <AlertTriangle className="w-4 h-4 text-yellow-400" /> :
                       issue.type === 'error' ? <AlertTriangle className="w-4 h-4 text-red-400" /> :
                       <CheckCircle className="w-4 h-4 text-green-400" />}
                      <span className="text-sm text-gray-300">{issue.message}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12 cyber-card">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our AI Code Review Assistant?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cyber-card">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 cyber-card relative ${
                plan.popular ? 'ring-2 ring-cyan-400' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan - AI Code Review Assistant`}
                  className="w-full cyber-button text-center block"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Improve Your Code Quality?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of developers who trust our AI-powered code review assistant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICodeReviewAssistant;