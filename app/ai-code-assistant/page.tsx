'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const AiCodeAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Code Assistant',
      description: 'Advanced AI algorithms that provide intelligent code suggestions and assistance.',
      benefits: ['Smart suggestions', 'Code completion', 'Error detection', 'Refactoring help']
    },
    {
      icon: Code,
      title: 'Multi-Language Support',
      description: 'Support for multiple programming languages and frameworks.',
      benefits: ['JavaScript', 'Python', 'Java', 'C++', 'TypeScript', 'React']
    },
    {
      icon: Shield,
      title: 'Code Security',
      description: 'Advanced security analysis to detect vulnerabilities and security issues.',
      benefits: ['Vulnerability scanning', 'Security best practices', 'Code review', 'Compliance checks']
    },
    {
      icon: Settings,
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing development environment.',
      benefits: ['VS Code extension', 'IDE plugins', 'CLI tools', 'API integration']
    },
    {
      icon: Target,
      title: 'Performance Optimization',
      description: 'Optimize code performance with intelligent suggestions and analysis.',
      benefits: ['Performance metrics', 'Optimization suggestions', 'Bottleneck identification', 'Efficiency improvements']
    },
    {
      icon: Globe,
      title: 'Collaborative Features',
      description: 'Work together with your team using collaborative coding features.',
      benefits: ['Real-time collaboration', 'Code sharing', 'Team reviews', 'Version control']
    }
  ];

  const benefits = [
    'Write better code with AI-powered suggestions',
    'Detect and fix errors before they become problems',
    'Learn best practices and coding patterns',
    'Improve code quality and maintainability',
    'Speed up development with intelligent automation',
    'Collaborate effectively with your team'
  ];

  const useCases = [
    {
      title: 'Code Generation',
      description: 'Generate code from natural language descriptions',
      icon: Code
    },
    {
      title: 'Code Review',
      description: 'Automated code review and quality analysis',
      icon: Shield
    },
    {
      title: 'Refactoring',
      description: 'Intelligent code refactoring and optimization',
      icon: Settings
    },
    {
      title: 'Documentation',
      description: 'Generate documentation and comments automatically',
      icon: Database
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Code Assistant - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered code assistant for modern development. Write better code with intelligent suggestions and automation." />
        <meta name="keywords" content="AI code assistant, code generation, code review, programming assistant, development tools" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Code Assistant
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Write better code with our AI-powered assistant. Get intelligent suggestions, 
                error detection, and automated code generation.
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
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Code Assistance</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI code assistant provides everything you need to write better code faster and more efficiently.
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
                Discover how our AI code assistant can transform your development workflow.
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
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Code Assistant?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our AI-powered code assistant is designed to help you write better code, 
                  faster, and with fewer errors.
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
                      <Code className="w-10 h-10 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Intelligent Coding</h3>
                    <p className="text-gray-300 mb-6">
                      Get intelligent code suggestions and assistance powered by advanced AI.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-cyan-400">50%</div>
                        <div className="text-gray-300 text-sm">Faster Coding</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-purple-400">90%</div>
                        <div className="text-gray-300 text-sm">Error Reduction</div>
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
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Code Better?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start writing better code with our AI-powered assistant. 
                Get started today and see the difference intelligent coding can make.
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

export default AiCodeAssistantPage;