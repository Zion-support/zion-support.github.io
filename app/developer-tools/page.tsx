'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { ArrowRight, Code, Zap, Globe, Brain, Target, BarChart, MessageSquare, Eye, Star, CheckCircle } from 'lucide-react';

const DeveloperToolsPage: React.FC = () => {
  const tools = [
    {
      title: 'AI Code Assistant Pro',
      description: 'Advanced AI-powered coding assistant with real-time suggestions, bug detection, and automated refactoring.',
      icon: '🤖',
      price: '$29/month',
      features: ['Real-time code suggestions', 'Bug detection', 'Automated refactoring', 'Multi-language support'],
      category: 'AI Development'
    },
    {
      title: 'API Testing Suite',
      description: 'Comprehensive API testing and monitoring tools with automated test generation.',
      icon: '🔧',
      price: '$19/month',
      features: ['Automated testing', 'Performance monitoring', 'Load testing', 'Documentation generation'],
      category: 'API Tools'
    },
    {
      title: 'Database Management Pro',
      description: 'Advanced database management and optimization tools with AI-powered insights.',
      icon: '🗄️',
      price: '$39/month',
      features: ['Query optimization', 'Performance monitoring', 'Backup automation', 'Schema management'],
      category: 'Database'
    },
    {
      title: 'DevOps Automation',
      description: 'Complete DevOps pipeline automation with CI/CD, monitoring, and deployment tools.',
      icon: '⚙️',
      price: '$49/month',
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring', 'Auto-scaling'],
      category: 'DevOps'
    },
    {
      title: 'Security Scanner',
      description: 'Advanced security scanning and vulnerability assessment tools.',
      icon: '🔒',
      price: '$34/month',
      features: ['Vulnerability scanning', 'Code analysis', 'Dependency checking', 'Compliance reporting'],
      category: 'Security'
    },
    {
      title: 'Performance Profiler',
      description: 'Application performance profiling and optimization tools with detailed analytics.',
      icon: '📊',
      price: '$24/month',
      features: ['Performance profiling', 'Memory analysis', 'CPU monitoring', 'Optimization suggestions'],
      category: 'Performance'
    }
  ];

  const categories = [...new Set(tools.map(tool => tool.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Developer Tools
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Powerful development tools and utilities to accelerate your coding workflow and improve productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/docs"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Documentation
            </Link>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{tool.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{tool.title}</h3>
                    <span className="text-sm text-cyan-400 bg-cyan-400/20 px-2 py-1 rounded">
                      {tool.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{tool.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-200 mb-2">Features:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-cyan-400">{tool.price}</span>
                  <Link
                    href="/contact"
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our Developer Tools?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-300">Optimized for speed and performance to keep your development workflow smooth.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI-Powered</h3>
              <p className="text-gray-300">Leverage artificial intelligence to enhance your development capabilities.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cloud-Native</h3>
              <p className="text-gray-300">Built for modern cloud environments with seamless integration capabilities.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Boost Your Development?
            </h2>
            <p className="text-gray-100 mb-6 max-w-2xl mx-auto">
              Join thousands of developers who are already using our tools to build amazing applications faster and more efficiently.
            </p>
            <Link
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DeveloperToolsPage;
