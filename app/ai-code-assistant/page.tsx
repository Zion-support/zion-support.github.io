'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Bug, 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock,
  Terminal,
  FileText,
  GitBranch,
  Database
} from 'lucide-react';

const AICodeAssistantPage: React.FC = () => {
  const features = [
    'Intelligent Code Completion',
    'Multi-Language Support',
    'Bug Detection & Fixing',
    'Code Optimization',
    'Documentation Generation',
    'Refactoring Suggestions',
    'Security Analysis',
    'Performance Monitoring'
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

  const pricingPlans = [
    {
      name: 'Developer',
      price: '$39',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        'Up to 1,000 code suggestions/day',
        'Basic language support',
        'Email support',
        'Standard models',
        'Basic analytics',
        'VS Code extension'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$99',
      period: '/month',
      description: 'Ideal for development teams',
      features: [
        'Up to 10,000 code suggestions/day',
        'All language support',
        'Priority support',
        'Advanced models',
        'Team analytics',
        'All IDE extensions',
        'API access',
        'Custom training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited suggestions',
        'Custom language models',
        'Dedicated support',
        'On-premise deployment',
        'Advanced security',
        'Custom integrations',
        'SLA guarantee',
        'White-label solution'
      ],
      popular: false
    }
  ];

  const capabilities = [
    {
      icon: Code,
      title: 'Code Generation',
      description: 'Generate code from natural language descriptions and comments.',
      examples: ['Create a REST API endpoint', 'Implement authentication', 'Build a data model']
    },
    {
      icon: Bug,
      title: 'Bug Detection',
      description: 'Identify and fix bugs automatically with intelligent analysis.',
      examples: ['Memory leaks', 'Logic errors', 'Performance issues']
    },
    {
      icon: Zap,
      title: 'Code Optimization',
      description: 'Improve code performance and efficiency with AI suggestions.',
      examples: ['Algorithm optimization', 'Memory usage', 'Database queries']
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Generate comprehensive documentation from your codebase.',
      examples: ['API documentation', 'Code comments', 'README files']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Code Assistant - Zion Tech Group | Intelligent Coding AI</title>
        <meta name="description" content="Revolutionary AI code assistant with intelligent completion, bug detection, and multi-language support. Boost your coding productivity with advanced AI technology." />
        <meta name="keywords" content="AI code assistant, code completion, bug detection, code optimization, programming AI, developer tools" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
              <Code className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">AI Development Tools</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text">
              AI Code Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your intelligent coding companion that understands context, detects bugs, 
              and suggests optimizations. Write better code faster with AI assistance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="cyber-button text-center px-8 py-4"
              >
                Start Coding with AI
              </Link>
              <Link
                to="/demo"
                className="border-2 border-green-500 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300"
              >
                Try Live Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">50%</div>
                <div className="text-gray-300">Faster Coding</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">12+</div>
                <div className="text-gray-300">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-gray-300">Bug Detection</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300">Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Powerful AI Coding Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that understands your codebase and provides 
                intelligent assistance for every aspect of development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                What Our AI Can Do
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From code generation to bug fixing, our AI assistant handles 
                every aspect of the development process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="quantum-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <capability.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                      <p className="text-gray-300 mb-4">{capability.description}</p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-cyan-400 mb-2">Examples:</h4>
                        {capability.examples.map((example, exampleIndex) => (
                          <div key={exampleIndex} className="text-sm text-gray-400 flex items-center">
                            <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></div>
                            {example}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Languages Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Multi-Language Support
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI understands and works with the most popular programming languages.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {supportedLanguages.map((language, index) => (
                <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-white font-medium">{language}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start coding with AI today. All plans include our core features.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card hologram-card p-8 relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'cyber-button'
                        : 'border-2 border-green-500 text-green-400 hover:bg-green-500/10'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Code with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of developers using our AI code assistant to write 
                better code faster and more efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button text-center px-8 py-4"
                >
                  Start Coding
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-green-500 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300"
                >
                  Try Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICodeAssistantPage;