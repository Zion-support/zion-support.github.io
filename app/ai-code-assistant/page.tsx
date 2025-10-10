'use client';
import React, { useState, useCallback, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, CheckCircle, Terminal, GitBranch, Bug, FileText, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain } from 'lucide-react';

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
      description: 'Get instant code reviews with suggestions for improvements, best practices, and security',
      color: 'text-green-400'
    },
    {
      icon: GitBranch,
      title: 'Version Control Integration',
      description: 'Seamlessly integrate with Git workflows for automated code analysis and suggestions',
      color: 'text-orange-400'
    }
  ];

  const benefits = [
    'Reduce development time by up to 50%',
    'Improve code quality and maintainability',
    'Automated bug detection and fixing',
    'Real-time code suggestions and optimization',
    'Support for 20+ programming languages',
    'Integration with popular IDEs and editors',
    'AI-powered code documentation generation',
    'Automated testing and validation'
  ];

  const useCases = [
    {
      title: 'Web Development',
      description: 'Generate React, Vue, Angular components and full-stack applications',
      icon: Code
    },
    {
      title: 'Mobile Development',
      description: 'Create iOS and Android apps with AI-assisted development',
      icon: Terminal
    },
    {
      title: 'Data Science',
      description: 'Generate Python scripts for data analysis and machine learning',
      icon: Brain
    },
    {
      title: 'DevOps & Automation',
      description: 'Create deployment scripts and infrastructure as code',
      icon: GitBranch
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Code Assistant | Zion Tech Group</title>
        <meta name="description" content="AI-powered code assistant for intelligent code generation, debugging, and optimization. Boost your development productivity with advanced AI tools." />
        <meta name="keywords" content="AI code assistant, code generation, debugging, code review, programming, development tools, AI coding" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Code Assistant
              </span>
              <br />
              <span className="text-white">Intelligent Development</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your coding experience with our AI-powered code assistant. 
              Generate code, debug issues, and optimize performance with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
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
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI code assistant provides intelligent tools to enhance your development workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
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
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of AI-assisted development for faster, better coding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our AI code assistant can transform your development process across different domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4">
                  <useCase.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Code with AI?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your AI code assistant needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

AICodeAssistant.displayName = 'AICodeAssistant';

export default AICodeAssistant;