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
        'Code refactoring assistance',
        'Multi-language support',
        'IDE integration'
      ],
      category: 'AI Development'
    },
    {
      title: 'API Testing Suite',
      description: 'Comprehensive API testing and monitoring platform with automated testing capabilities.',
      icon: '🔧',
      price: '$49/month',
      features: [
        'Automated API testing',
        'Performance monitoring',
        'Load testing capabilities',
        'API documentation generation',
        'Team collaboration tools'
      ],
      category: 'Testing & QA'
    },
    {
      title: 'Database Management Pro',
      description: 'Advanced database management and optimization tools for modern applications.',
      icon: '🗄️',
      price: '$39/month',
      features: [
        'Database optimization',
        'Query performance analysis',
        'Automated backups',
        'Schema migration tools',
        'Real-time monitoring'
      ],
      category: 'Database'
    },
    {
      title: 'DevOps Pipeline Manager',
      description: 'Streamlined CI/CD pipeline management with automated deployment capabilities.',
      icon: '⚙️',
      price: '$59/month',
      features: [
        'Automated deployments',
        'Environment management',
        'Rollback capabilities',
        'Performance monitoring',
        'Security scanning'
      ],
      category: 'DevOps'
    },
    {
      title: 'Code Quality Analyzer',
      description: 'Comprehensive code quality analysis and improvement recommendations.',
      icon: '📊',
      price: '$34/month',
      features: [
        'Code quality metrics',
        'Technical debt analysis',
        'Security vulnerability detection',
        'Performance optimization tips',
        'Team reporting'
      ],
      category: 'Code Quality'
    },
    {
      title: 'Cloud Infrastructure Manager',
      description: 'Multi-cloud infrastructure management and optimization platform.',
      icon: '☁️',
      price: '$79/month',
      features: [
        'Multi-cloud support',
        'Cost optimization',
        'Resource monitoring',
        'Automated scaling',
        'Security compliance'
      ],
      category: 'Cloud'
    }
  ];

  const categories = [...new Set(tools.map(tool => tool.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Developer Tools
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Powerful development tools and utilities to accelerate your coding workflow and improve productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{tool.icon}</div>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                    {tool.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{tool.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{tool.description}</p>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{tool.price}</div>
                  <ul className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our Developer Tools?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Modern Technology</h3>
              <p className="text-gray-300 text-sm">Built with the latest technologies and best practices</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">High Performance</h3>
              <p className="text-gray-300 text-sm">Optimized for speed and efficiency</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure & Reliable</h3>
              <p className="text-gray-300 text-sm">Enterprise-grade security and reliability</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Team Collaboration</h3>
              <p className="text-gray-300 text-sm">Built for team productivity and collaboration</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gray-800/50 rounded-xl p-12 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Boost Your Development Workflow?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with our developer tools today and experience the difference in your coding productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DeveloperToolsPage;