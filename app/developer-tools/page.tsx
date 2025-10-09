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
      popular: true
    },
    {
      title: 'API Testing Suite',
      description: 'Comprehensive API testing and debugging tools with automated test generation and performance monitoring.',
      icon: '🔧',
      price: '$49/month',
      features: [
        'Automated test generation',
        'Performance monitoring',
        'Mock server creation',
        'API documentation',
        'Team collaboration'
      ],
      popular: false
    },
    {
      title: 'Database Management Tool',
      description: 'Powerful database administration and optimization tools with AI-powered query optimization.',
      icon: '🗄️',
      price: '$39/month',
      features: [
        'Query optimization',
        'Database monitoring',
        'Backup automation',
        'Performance analytics',
        'Multi-database support'
      ],
      popular: true
    },
    {
      title: 'Cloud Deployment Manager',
      description: 'Streamlined cloud deployment and infrastructure management with automated scaling and monitoring.',
      icon: '☁️',
      price: '$59/month',
      features: [
        'Automated deployments',
        'Infrastructure as code',
        'Auto-scaling',
        'Cost optimization',
        'Multi-cloud support'
      ],
      popular: false
    },
    {
      title: 'Security Scanner Pro',
      description: 'Comprehensive security scanning and vulnerability assessment tools for applications and infrastructure.',
      icon: '🔒',
      price: '$79/month',
      features: [
        'Vulnerability scanning',
        'Security monitoring',
        'Compliance checking',
        'Threat detection',
        'Automated patching'
      ],
      popular: true
    },
    {
      title: 'Performance Profiler',
      description: 'Advanced application performance profiling and optimization tools with real-time monitoring.',
      icon: '📊',
      price: '$69/month',
      features: [
        'Real-time monitoring',
        'Performance profiling',
        'Bottleneck detection',
        'Optimization suggestions',
        'Historical analysis'
      ],
      popular: false
    }
  ];

  const categories = [
    { name: 'AI Tools', count: 12, icon: '🤖' },
    { name: 'API Tools', count: 8, icon: '🔌' },
    { name: 'Database Tools', count: 6, icon: '🗄️' },
    { name: 'Cloud Tools', count: 10, icon: '☁️' },
    { name: 'Security Tools', count: 7, icon: '🔒' },
    { name: 'Performance Tools', count: 5, icon: '📊' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
              Developer Tools
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Powerful Development Utilities
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Accelerate your AI and IT projects with our comprehensive suite of developer tools and utilities.
            </p>
          </div>
        </section>

        {/* Tool Categories */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Tool Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-cyan-400 text-sm">{category.count} tools</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tools */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-900/50 to-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Featured Developer Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <div key={index} className="cyber-card hologram-card p-6 relative group hover:scale-105 transition-all duration-300">
                  {tool.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>POPULAR</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-4xl mb-4">{tool.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {tool.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {tool.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{tool.price}</div>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Developer Success Metrics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Developer Tools</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">10K+</div>
                <div className="text-gray-300">Active Developers</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-900/50 to-slate-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
              Ready to Boost Your Development?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Get started with our developer tools today and accelerate your AI and IT projects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
                <p className="text-gray-300 mb-4">Get detailed help via email</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-2">Phone Support</h3>
                <p className="text-gray-300 mb-4">Speak with our experts</p>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  +1 302 464 0950
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300 mb-4">Our headquarters</p>
                <p className="text-cyan-400 font-semibold">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DeveloperToolsPage;