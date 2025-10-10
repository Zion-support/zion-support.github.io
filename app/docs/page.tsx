'use client';
import React from 'react';
import { BookOpen, FileText, Code, Users, Settings, BarChart, CheckCircle, ArrowRight, Star, Brain, Cloud, Database, Smartphone, Lock, TrendingUp, Calendar, Target, Clock, Zap, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Share2, Mic, Wrench, Truck, Shield } from 'lucide-react';

const DocsPage: React.FC = () => {
  const sections = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      description: 'Learn the basics of using our platform and services',
      topics: ['Quick Start Guide', 'Account Setup', 'First Project', 'Basic Configuration']
    },
    {
      title: 'API Documentation',
      icon: Code,
      description: 'Complete reference for our REST and GraphQL APIs',
      topics: ['Authentication', 'Endpoints', 'Rate Limits', 'Error Handling']
    },
    {
      title: 'User Guide',
      icon: Users,
      description: 'Detailed guides for all user types and roles',
      topics: ['Admin Panel', 'User Management', 'Permissions', 'Workflows']
    },
    {
      title: 'Configuration',
      icon: Settings,
      description: 'Configure and customize your experience',
      topics: ['Environment Setup', 'Custom Settings', 'Integrations', 'Webhooks']
    },
    {
      title: 'Analytics & Reporting',
      icon: BarChart,
      description: 'Understand your data with comprehensive analytics',
      topics: ['Dashboard Overview', 'Custom Reports', 'Data Export', 'Real-time Metrics']
    },
    {
      title: 'Troubleshooting',
      icon: Wrench,
      description: 'Common issues and their solutions',
      topics: ['FAQ', 'Error Codes', 'Performance Issues', 'Contact Support']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Documentation
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Documentation
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Center
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive documentation for all our services and APIs. 
              Find guides, tutorials, and reference materials to help you get the most out of our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#sections"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
              >
                <span className="relative z-10">Browse Documentation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900 hover:scale-105"
              >
                Get Help
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section id="sections" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Documentation <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Sections</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive documentation organized by topic and user type.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 transition-all duration-700 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <section.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {section.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {section.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {section.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="#"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-2 transition-all duration-300 mt-6"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Quick Links</h2>
            <p className="text-gray-300">Popular documentation pages and resources</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="#"
              className="group flex items-center p-6 bg-slate-800/50 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
            >
              <FileText className="w-8 h-8 text-cyan-400 mr-4 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  API Quick Start
                </h3>
                <p className="text-gray-400 text-sm">Get up and running with our API in minutes</p>
              </div>
            </a>
            
            <a
              href="#"
              className="group flex items-center p-6 bg-slate-800/50 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
            >
              <Code className="w-8 h-8 text-cyan-400 mr-4 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  SDK Examples
                </h3>
                <p className="text-gray-400 text-sm">Code examples and sample implementations</p>
              </div>
            </a>
            
            <a
              href="#"
              className="group flex items-center p-6 bg-slate-800/50 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
            >
              <Users className="w-8 h-8 text-cyan-400 mr-4 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  User Management
                </h3>
                <p className="text-gray-400 text-sm">Complete guide to user roles and permissions</p>
              </div>
            </a>
            
            <a
              href="#"
              className="group flex items-center p-6 bg-slate-800/50 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
            >
              <Wrench className="w-8 h-8 text-cyan-400 mr-4 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  Troubleshooting
                </h3>
                <p className="text-gray-400 text-sm">Common issues and their solutions</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need More Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
            >
              <span className="relative z-10">Contact Support</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="/api-docs"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900 hover:scale-105"
            >
              API Reference
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocsPage;