'use client';
import React, { useState, useCallback, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, CheckCircle, Terminal, GitBranch, Bug, FileText, Zap, Target, Users, Shield, Brain, Cpu, Database, Cloud, Settings, Lock, Globe, Star, ArrowRight, Phone, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICodeAssistant: React.FC = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Code,
      title: 'Intelligent Code Generation',
      description: 'Generate clean, efficient code from natural language descriptions with AI-powered suggestions',
      color: 'text-purple-400'
    },
    {
      icon: Bug,
      title: 'Smart Debugging',
      description: 'Automatically detect and fix bugs, suggest optimizations, and improve code quality',
      color: 'text-blue-400'
    },
    {
      icon: Terminal,
      title: 'Code Review Assistant',
      description: 'AI-powered code review that identifies issues, suggests improvements, and ensures best practices',
      color: 'text-green-400'
    },
    {
      icon: FileText,
      title: 'Documentation Generator',
      description: 'Automatically generate comprehensive documentation and comments for your code',
      color: 'text-orange-400'
    }
  ];

  const capabilities = [
    {
      title: 'Code Completion',
      description: 'Intelligent code completion with context-aware suggestions',
      icon: Code,
      features: ['Context-aware suggestions', 'Multi-language support', 'Real-time analysis', 'Custom patterns']
    },
    {
      title: 'Refactoring',
      description: 'AI-powered code refactoring for better maintainability and performance',
      icon: GitBranch,
      features: ['Code optimization', 'Structure improvement', 'Performance tuning', 'Best practices']
    },
    {
      title: 'Testing Assistant',
      description: 'Generate comprehensive test cases and improve test coverage',
      icon: CheckCircle,
      features: ['Unit test generation', 'Integration tests', 'Test optimization', 'Coverage analysis']
    },
    {
      title: 'Security Analysis',
      description: 'Identify security vulnerabilities and suggest fixes',
      icon: Shield,
      features: ['Vulnerability detection', 'Security best practices', 'Compliance checking', 'Risk assessment']
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
    'Kotlin',
    'Dart'
  ];

  const pricing = [
    {
      name: 'Developer',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        'Basic code generation',
        'Standard debugging',
        'Email support',
        'Up to 10 projects',
        'Basic documentation'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$99',
      period: '/month',
      description: 'Ideal for development teams',
      features: [
        'Advanced AI features',
        'Team collaboration',
        'Priority support',
        'Unlimited projects',
        'Advanced analytics',
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
    'Increase coding speed by 3x',
    'Reduce bugs by 60%',
    'Improve code quality',
    'Save time on documentation',
    'Learn best practices',
    'Focus on creative problem-solving'
  ];

  return (
    <>
      <Helmet>
        <title>AI Code Assistant | Zion Tech Group</title>
        <meta name="description" content="Boost your coding productivity with our AI-powered code assistant. Generate code, debug issues, and improve code quality with intelligent suggestions." />
        <meta name="keywords" content="AI code assistant, code generation, debugging, code review, programming assistant, Zion Tech Group" />
      </Helmet>

      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Code Assistant
                <span className="block text-purple-400">for Developers</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Boost your coding productivity with our AI-powered assistant. Generate code, debug issues, 
                and improve code quality with intelligent suggestions and automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Start Coding
                </button>
                <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 hover:text-purple-600 transition-colors">
                  Try Demo
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
                AI Assistant Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI capabilities to enhance your coding experience
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI tools for modern development
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <capability.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{capability.title}</h3>
                  <p className="text-gray-300 mb-4">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
                Work with your favorite programming languages
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
                Why Choose Our AI Assistant?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that boost developer productivity
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
                Flexible pricing for developers and teams
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm p-8 rounded-xl border ${plan.popular ? 'border-purple-400' : 'border-white/20'}`}>
                  {plan.popular && (
                    <div className="bg-purple-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
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
                      ? 'bg-purple-600 text-white hover:bg-purple-700' 
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
              Ready to Code Better?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your AI-powered coding journey today and boost your productivity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 hover:text-purple-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
});

AICodeAssistant.displayName = 'AICodeAssistant';

export default AICodeAssistant;