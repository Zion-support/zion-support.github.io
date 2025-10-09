'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Star, CheckCircle, Code, Zap, Shield, Clock, Users } from 'lucide-react';

const DeveloperToolsPage: React.FC = () => {
  const tools = [
    {
      title: 'AI Code Assistant Pro',
      description: 'Advanced AI-powered coding assistant with real-time suggestions, bug detection, and automated refactoring.',
      icon: '🤖',
      price: '$29/month',
      features: [
        'Real-time code suggestions',
        'Automated bug detection',
        'Code refactoring',
        'Multi-language support',
        'IDE integration'
      ],
      category: 'AI Development'
    },
    {
      title: 'API Testing Suite',
      description: 'Comprehensive API testing and monitoring tools for developers.',
      icon: '🔧',
      price: '$19/month',
      features: [
        'Automated API testing',
        'Performance monitoring',
        'Load testing',
        'Documentation generation',
        'Team collaboration'
      ],
      category: 'API Tools'
    },
    {
      title: 'Database Management Pro',
      description: 'Advanced database management and optimization tools.',
      icon: '🗄️',
      price: '$39/month',
      features: [
        'Database design tools',
        'Query optimization',
        'Performance monitoring',
        'Backup automation',
        'Migration tools'
      ],
      category: 'Database'
    },
    {
      title: 'DevOps Pipeline',
      description: 'Complete CI/CD pipeline automation and deployment tools.',
      icon: '⚙️',
      price: '$49/month',
      features: [
        'Automated deployments',
        'Container orchestration',
        'Monitoring & alerting',
        'Security scanning',
        'Rollback capabilities'
      ],
      category: 'DevOps'
    },
    {
      title: 'Code Quality Analyzer',
      description: 'Comprehensive code quality analysis and improvement suggestions.',
      icon: '📊',
      price: '$24/month',
      features: [
        'Code complexity analysis',
        'Security vulnerability detection',
        'Performance optimization',
        'Code style enforcement',
        'Technical debt tracking'
      ],
      category: 'Quality Assurance'
    },
    {
      title: 'Cloud Development Kit',
      description: 'Complete toolkit for cloud-native application development.',
      icon: '☁️',
      price: '$59/month',
      features: [
        'Multi-cloud support',
        'Infrastructure as code',
        'Auto-scaling',
        'Cost optimization',
        'Security compliance'
      ],
      category: 'Cloud Development'
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
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful development tools and utilities to accelerate your coding workflow and improve productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/api-docs"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all"
            >
              View Documentation
            </a>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Available Tools</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg font-medium">
              All Tools
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg font-medium hover:bg-gray-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-cyan-500 transition-colors">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{tool.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{tool.title}</h3>
                    <span className="text-sm text-cyan-400">{tool.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{tool.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-200 mb-2">Features:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-cyan-400">{tool.price}</span>
                  <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors flex items-center">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Developer Tools?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Modern Technology</h3>
              <p className="text-gray-300">Built with the latest technologies and best practices</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">High Performance</h3>
              <p className="text-gray-300">Optimized for speed and efficiency</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure & Reliable</h3>
              <p className="text-gray-300">Enterprise-grade security and reliability</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Team Collaboration</h3>
              <p className="text-gray-300">Built for team workflows and collaboration</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gray-800/50 rounded-lg p-12 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already using our tools to build amazing applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Start Free Trial
            </a>
            <a
              href="/api-docs"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all"
            >
              View Documentation
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DeveloperToolsPage;