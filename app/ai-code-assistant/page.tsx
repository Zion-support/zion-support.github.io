'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Code, CheckCircle, Terminal, GitBranch, Bug, FileText, ArrowRight, Zap, Brain, Shield, Users, Star, Phone, Mail, MapPin } from 'lucide-react';

const AICodeAssistantPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Code,
      title: 'Intelligent Code Generation',
      description: 'Generate clean, efficient code from natural language descriptions with AI-powered suggestions.',
      benefits: ['Natural language to code', 'Code completion', 'Smart suggestions', 'Multi-language support']
    },
    {
      icon: Bug,
      title: 'Smart Debugging',
      description: 'Automatically detect and fix bugs, suggest optimizations, and improve code quality.',
      benefits: ['Bug detection', 'Auto-fix suggestions', 'Code optimization', 'Quality analysis']
    },
    {
      icon: Terminal,
      title: 'Multi-Language Support',
      description: 'Support for 50+ programming languages including Python, JavaScript, Java, C++, and more.',
      benefits: ['50+ languages', 'Syntax highlighting', 'Language-specific features', 'Cross-platform support']
    },
    {
      icon: GitBranch,
      title: 'Version Control Integration',
      description: 'Seamless integration with Git and other version control systems for collaborative development.',
      benefits: ['Git integration', 'Branch management', 'Merge conflict resolution', 'Code review assistance']
    },
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Learn new programming concepts and best practices with personalized AI tutoring.',
      benefits: ['Personalized learning', 'Concept explanations', 'Best practices', 'Code examples']
    },
    {
      icon: Shield,
      title: 'Security Analysis',
      description: 'Automatically scan code for security vulnerabilities and suggest secure coding practices.',
      benefits: ['Vulnerability detection', 'Security best practices', 'Code scanning', 'Compliance checking']
    }
  ];

  const benefits = [
    'Increase coding speed by 70%',
    'Reduce bugs by 80%',
    'Improve code quality by 90%',
    'Lower development time by 60%',
    'Enable faster learning',
    'Automate repetitive tasks',
    'Scale development teams',
    'Enhance code security'
  ];

  const useCases = [
    {
      title: 'Software Development',
      description: 'Accelerate software development with AI-powered coding assistance',
      icon: '💻'
    },
    {
      title: 'Code Review',
      description: 'Automated code review and quality assurance processes',
      icon: '🔍'
    },
    {
      title: 'Learning & Training',
      description: 'AI-powered programming education and skill development',
      icon: '🎓'
    },
    {
      title: 'Legacy Code Migration',
      description: 'Modernize and migrate legacy codebases with AI assistance',
      icon: '🔄'
    },
    {
      title: 'API Development',
      description: 'Generate and optimize APIs with intelligent code suggestions',
      icon: '🔌'
    },
    {
      title: 'Testing & QA',
      description: 'Automated test generation and quality assurance',
      icon: '🧪'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Code Assistant - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered code assistant for developers. Intelligent code generation, debugging, and learning with multi-language support." />
        <meta name="keywords" content="AI code assistant, code generation, debugging, programming AI, code completion, developer tools, coding assistance" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-8">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Code Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionary AI-powered code assistant for developers. Intelligent code generation, 
              debugging, and learning with multi-language support and advanced features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                Start Coding
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-indigo-400 text-indigo-300 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Code Assistant Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Powerful AI technology that transforms how you write and manage code
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Code Assistant?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven results that accelerate development and improve code quality
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
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
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Perfect for developers, teams, and organizations of all sizes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
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
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Code with AI?
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Join thousands of developers who are already using our AI Code Assistant
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AICodeAssistantPage;