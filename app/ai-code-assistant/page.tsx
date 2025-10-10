import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Code, Zap, Brain, ArrowRight, Terminal, FileText, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICodeAssistantPage: React.FC = () => {
  const features = [
    {
      title: 'Code Generation',
      description: 'AI-powered code generation that understands context and generates high-quality code.',
      icon: Code,
      benefits: [
        'Context-aware code generation',
        'Multiple programming languages',
        'Best practices integration',
        'Real-time suggestions'
      ]
    },
    {
      title: 'Code Review',
      description: 'Automated code review with AI-powered analysis and improvement suggestions.',
      icon: Shield,
      benefits: [
        'Automated code analysis',
        'Security vulnerability detection',
        'Performance optimization',
        'Code quality metrics'
      ]
    },
    {
      title: 'Documentation',
      description: 'Intelligent documentation generation and maintenance for your codebase.',
      icon: FileText,
      benefits: [
        'Auto-generated documentation',
        'API documentation',
        'Code comments',
        'README generation'
      ]
    },
    {
      title: 'Debugging',
      description: 'AI-powered debugging assistance that helps identify and fix issues quickly.',
      icon: Terminal,
      benefits: [
        'Error detection',
        'Root cause analysis',
        'Fix suggestions',
        'Performance profiling'
      ]
    }
  ];

  const benefits = [
    'Increase development speed by 300%',
    'Reduce bugs and errors by 80%',
    'Improve code quality consistently',
    'Accelerate learning for new developers',
    'Automate repetitive coding tasks',
    'Scale development teams efficiently'
  ];

  return (
    <>
      <Helmet>
        <title>AI Code Assistant - Zion Tech Group</title>
        <meta name="description" content="AI-powered code assistant that helps developers write better code faster. Code generation, review, documentation, and debugging with artificial intelligence." />
        <meta name="keywords" content="AI code assistant, code generation, code review, programming AI, developer tools, code automation" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Code
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Assistant
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Supercharge your development with AI-powered code assistance. 
              Generate, review, debug, and document code with the power of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-indigo-400 text-indigo-300 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-300">
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
                Code Assistant Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered code assistant provides comprehensive tools for modern development.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-indigo-500 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
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
        <section className="py-20 px-4 bg-gradient-to-r from-indigo-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Code Assistant?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-powered code assistance that transforms your development workflow.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-indigo-400 flex-shrink-0" />
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
                Ready to Code with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of developers who are already using our AI Code Assistant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Coding
                </button>
                <button className="border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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

export default AICodeAssistantPage;