'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, CheckCircle, AlertTriangle, Zap, Star, Users, Clock, Shield, Brain, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const AICodeReviewAssistantPage: React.FC = () => {
  const [codeInput, setCodeInput] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeCode = async () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysisResult({
        quality: 85,
        security: 92,
        performance: 78,
        maintainability: 88,
        issues: [
          { type: 'warning', message: 'Consider using const instead of let for variables that are not reassigned', line: 15 },
          { type: 'error', message: 'Potential null reference exception on line 23', line: 23 },
          { type: 'info', message: 'This function could be optimized for better performance', line: 45 },
          { type: 'suggestion', message: 'Consider adding error handling for this API call', line: 67 }
        ],
        suggestions: [
          'Add unit tests for this function',
          'Consider using TypeScript for better type safety',
          'Implement proper error handling',
          'Add JSDoc comments for better documentation'
        ]
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze your code for quality, security, and performance issues'
    },
    {
      icon: Shield,
      title: 'Security Scanning',
      description: 'Comprehensive security vulnerability detection including OWASP Top 10 and custom security rules'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Identify performance bottlenecks and suggest optimizations to improve code efficiency'
    },
    {
      icon: CheckCircle,
      title: 'Code Quality Metrics',
      description: 'Detailed quality metrics including complexity, maintainability, and best practices compliance'
    },
    {
      icon: Settings,
      title: 'Custom Rules',
      description: 'Configure custom coding standards and rules specific to your team and project requirements'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track code quality trends, team performance, and improvement metrics over time'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small teams and individual developers',
      features: [
        'Up to 10,000 lines of code per month',
        'Basic security scanning',
        'Code quality metrics',
        'Email support',
        'Standard analysis reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing development teams',
      features: [
        'Up to 50,000 lines of code per month',
        'Advanced security scanning',
        'Performance optimization suggestions',
        'Custom coding rules',
        'Priority support',
        'Team collaboration features',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited code analysis',
        'Enterprise security scanning',
        'Custom AI model training',
        'Dedicated support',
        'On-premise deployment',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Code Review Assistant - Zion Tech Group</title>
        <meta name="description" content="Automated AI-powered code analysis and quality improvement suggestions. Starting at $199/month. Improve code quality, security, and performance with intelligent code review." />
        <meta name="keywords" content="ai code review, code analysis, code quality, security scanning, performance optimization, automated code review, developer tools" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Code Analysis
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Code Review Assistant
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your code quality with intelligent AI analysis. Get instant feedback on security vulnerabilities, 
            performance issues, and code quality improvements.
          </p>
          
          {/* Interactive Demo */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 cyber-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Try Our AI Code Analysis</h3>
            <div className="space-y-4">
              <textarea
                value={codeInput}
                onChange={(e) => setCodeInput(e.target.value)}
                placeholder="Paste your code here for AI analysis..."
                className="w-full h-32 bg-gray-800 text-white p-4 rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none"
              />
              <button
                onClick={analyzeCode}
                disabled={!codeInput.trim() || isAnalyzing}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze Code'}
              </button>
            </div>
            
            {analysisResult && (
              <div className="mt-8 bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold text-white mb-4">Analysis Results</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
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
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-white mb-2">Issues Found:</h5>
                    <div className="space-y-2">
                      {analysisResult.issues.map((issue, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          {issue.type === 'error' && <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5" />}
                          {issue.type === 'warning' && <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5" />}
                          {issue.type === 'info' && <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5" />}
                          <div className="text-sm text-gray-300">
                            <span className="font-medium">Line {issue.line}:</span> {issue.message}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-white mb-2">Suggestions:</h5>
                    <ul className="space-y-1">
                      {analysisResult.suggestions.map((suggestion, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  </div>
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
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 cyber-card relative ${
                plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
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
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
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
            Start using our AI Code Review Assistant today and see the difference intelligent analysis can make.
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

export default AICodeReviewAssistantPage;