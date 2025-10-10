'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Code, Brain, Zap, Target, BarChart, Shield } from 'lucide-react';

const AICodeAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Intelligent Code Generation',
      description: 'AI-powered code generation that understands context and generates high-quality code.',
      benefits: ['Context-aware generation', 'Multiple language support', 'Code optimization', 'Best practices']
    },
    {
      icon: Brain,
      title: 'Smart Code Analysis',
      description: 'Advanced code analysis with AI-powered insights and recommendations.',
      benefits: ['Code quality analysis', 'Performance optimization', 'Security scanning', 'Refactoring suggestions']
    },
    {
      icon: Zap,
      title: 'Real-time Assistance',
      description: 'Instant code assistance and suggestions as you type.',
      benefits: ['Live suggestions', 'Auto-completion', 'Error detection', 'Quick fixes']
    },
    {
      icon: Target,
      title: 'Code Review',
      description: 'Automated code review with AI-powered quality assessment and feedback.',
      benefits: ['Automated reviews', 'Quality metrics', 'Security checks', 'Style guidelines']
    },
    {
      icon: BarChart,
      title: 'Performance Insights',
      description: 'AI-driven performance analysis and optimization recommendations.',
      benefits: ['Performance metrics', 'Bottleneck detection', 'Optimization tips', 'Resource usage']
    },
    {
      icon: Shield,
      title: 'Security Analysis',
      description: 'Comprehensive security analysis and vulnerability detection.',
      benefits: ['Vulnerability scanning', 'Security best practices', 'Threat detection', 'Compliance checks']
    }
  ];

  const useCases = [
    {
      title: 'Web Development',
      description: 'AI assistance for frontend and backend web development',
      icon: '🌐'
    },
    {
      title: 'Mobile Apps',
      description: 'Code generation and optimization for mobile applications',
      icon: '📱'
    },
    {
      title: 'Data Science',
      description: 'AI-powered data analysis and machine learning code generation',
      icon: '📊'
    },
    {
      title: 'DevOps',
      description: 'Automated infrastructure and deployment code generation',
      icon: '⚙️'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Code Assistant - Zion Tech Group</title>
        <meta name="description" content="AI-powered code assistant for developers. Intelligent code generation, analysis, and optimization with real-time assistance and smart suggestions." />
        <meta name="keywords" content="AI code assistant, code generation, code analysis, developer tools, programming assistant, code optimization" />
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
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Assistant
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              AI-powered code assistant for developers. Intelligent code generation, analysis, and optimization with real-time assistance and smart suggestions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25">
                Get Started
              </button>
              <button className="border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI capabilities for modern development workflows
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Perfect for developers across all skill levels and technologies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
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
                Ready to Enhance Your Development?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start using our AI Code Assistant today and boost your productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
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