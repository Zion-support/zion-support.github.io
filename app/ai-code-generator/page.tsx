'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Code, Zap, CheckCircle, Star, ArrowRight, Brain, Terminal, FileText, Settings, Shield, Globe, Clock, Users, TrendingUp, Cpu, Database, Smartphone, Monitor } from 'lucide-react';

const AICodeGeneratorPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Code Generation',
      description: 'Generate code from natural language descriptions in 50+ programming languages',
      price: 'Included'
    },
    {
      icon: Terminal,
      title: 'Code Completion',
      description: 'Intelligent code completion and suggestions as you type',
      price: 'Included'
    },
    {
      icon: FileText,
      title: 'Documentation Generation',
      description: 'Automatically generate comprehensive code documentation',
      price: 'Included'
    },
    {
      icon: Settings,
      title: 'Code Optimization',
      description: 'AI-powered code optimization and performance improvements',
      price: 'Included'
    },
    {
      icon: Shield,
      title: 'Security Analysis',
      description: 'Automated security vulnerability detection and fixes',
      price: '+$99/month'
    },
    {
      icon: Database,
      title: 'Database Integration',
      description: 'Generate database schemas and queries automatically',
      price: '+$199/month'
    }
  ];

  const languages = [
    { name: 'JavaScript', icon: 'JS', color: 'text-yellow-400' },
    { name: 'Python', icon: 'PY', color: 'text-blue-400' },
    { name: 'Java', icon: 'JA', color: 'text-red-400' },
    { name: 'C++', icon: 'C++', color: 'text-cyan-400' },
    { name: 'TypeScript', icon: 'TS', color: 'text-blue-600' },
    { name: 'Go', icon: 'GO', color: 'text-cyan-300' },
    { name: 'Rust', icon: 'RS', color: 'text-orange-400' },
    { name: 'Swift', icon: 'SW', color: 'text-green-400' }
  ];

  const pricingPlans = [
    {
      name: 'Developer',
      price: '$79',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        'Up to 1,000 code generations/month',
        '10 programming languages',
        'Basic code completion',
        'Email support',
        'VS Code extension',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Most popular for teams',
      features: [
        'Up to 10,000 code generations/month',
        '50+ programming languages',
        'Advanced AI features',
        'Priority support',
        'Team collaboration (5 users)',
        'API access',
        'Code optimization',
        'Documentation generation'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited code generations',
        'All programming languages',
        'Custom AI training',
        '24/7 dedicated support',
        'Unlimited team members',
        'White-label solution',
        'Security analysis',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: '10x Faster Development',
      description: 'Generate code 10x faster than traditional coding',
      icon: Zap,
      metric: '10x'
    },
    {
      title: 'Reduce Bugs by 80%',
      description: 'AI-generated code has significantly fewer bugs',
      icon: Shield,
      metric: '80%'
    },
    {
      title: 'Save 20+ Hours Weekly',
      description: 'Automate repetitive coding tasks and boilerplate',
      icon: Clock,
      metric: '20+ hours'
    },
    {
      title: 'Learn New Languages',
      description: 'Generate code in languages you don\'t know yet',
      icon: Brain,
      metric: '50+ languages'
    }
  ];

  const useCases = [
    {
      title: 'Web Development',
      description: 'Generate React, Vue, Angular components and full-stack applications',
      icon: Monitor,
      savings: 'Build 5x faster'
    },
    {
      title: 'Mobile Apps',
      description: 'Create iOS and Android apps with AI-generated native code',
      icon: Smartphone,
      savings: 'Launch 3x faster'
    },
    {
      title: 'API Development',
      description: 'Generate REST APIs, GraphQL schemas, and microservices',
      icon: Globe,
      savings: 'Reduce dev time by 70%'
    },
    {
      title: 'Data Science',
      description: 'Generate machine learning models, data pipelines, and analytics',
      icon: Database,
      savings: 'Prototype 10x faster'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Code Generator - Zion Tech Group | Intelligent Code Generation</title>
        <meta name="description" content="AI-powered code generation for 50+ programming languages. Generate code 10x faster with intelligent suggestions and optimization. Starting at $79/month." />
        <meta name="keywords" content="AI code generator, code generation, programming AI, code completion, software development, coding assistant" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-code-generator" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-rain-effect">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text-enhanced cyber-text glitch">
              AI Code Generator
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Generate Code 10x Faster with AI
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your development workflow with AI-powered code generation. 
              Write code in 50+ programming languages using natural language descriptions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="cyber-button-enhanced inline-flex items-center text-lg px-8 py-4"
              >
                <Code className="w-5 h-5 mr-2" />
                Start Free Trial
              </Link>
              <Link
                href="#pricing"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>

            {/* Language Support */}
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 max-w-4xl mx-auto">
              {languages.map((lang, index) => (
                <div key={index} className="cyber-card p-4 text-center">
                  <div className={`text-2xl font-bold ${lang.color} mb-2`}>{lang.icon}</div>
                  <div className="text-white text-sm">{lang.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
              Why Developers Love Our AI
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card-advanced p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.metric}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
              Powerful Development Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="quantum-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                      <div className="text-cyan-400 font-semibold">{feature.price}</div>
                    </div>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
              Real-World Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card-advanced p-8">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{useCase.title}</h3>
                      <div className="text-green-400 font-semibold mb-2">{useCase.savings}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
              How AI Code Generation Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">1. Describe Your Code</h3>
                <p className="text-gray-300 text-lg">
                  Write what you want in plain English. Our AI understands your requirements and context.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">2. AI Generates Code</h3>
                <p className="text-gray-300 text-lg">
                  Our advanced AI analyzes your request and generates optimized, production-ready code.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">3. Optimize & Deploy</h3>
                <p className="text-gray-300 text-lg">
                  Review, test, and optimize the generated code. Deploy with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
              Choose Your Development Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card-advanced p-8 relative ${plan.popular ? 'border-2 border-cyan-400 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'cyber-button-enhanced'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Code 10x Faster?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 5,000+ developers already using our AI code generator to build amazing software faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button-enhanced inline-flex items-center text-lg px-8 py-4"
              >
                <Code className="w-5 h-5 mr-2" />
                Start Free Trial
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AICodeGeneratorPage;