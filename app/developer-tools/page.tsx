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
        'IDE integration',
        'Team collaboration'
      ],
      benefits: [
        'Increase coding speed by 40%',
        'Reduce bugs by 60%',
        'Improve code quality',
        'Save development time'
      ],
      marketPrice: '$50-100/month',
      category: 'Development Tools',
      technologies: ['VS Code', 'IntelliJ', 'Sublime', 'Vim', 'Emacs']
    },
    {
      title: 'API Testing Suite',
      description: 'Comprehensive API testing and monitoring solution for developers and QA teams.',
      icon: '🔧',
      price: '$49/month',
      features: [
        'Automated API testing',
        'Performance monitoring',
        'Load testing',
        'Documentation generation',
        'Mock server creation',
        'Team collaboration'
      ],
      benefits: [
        'Reduce testing time by 70%',
        'Improve API reliability',
        'Faster deployment cycles',
        'Better documentation'
      ],
      marketPrice: '$80-150/month',
      category: 'Testing Tools',
      technologies: ['Postman', 'Newman', 'Jest', 'Mocha', 'Chai']
    },
    {
      title: 'Database Management Pro',
      description: 'Advanced database management and optimization tools for modern applications.',
      icon: '🗄️',
      price: '$39/month',
      features: [
        'Database design tools',
        'Query optimization',
        'Performance monitoring',
        'Backup automation',
        'Migration tools',
        'Security auditing'
      ],
      benefits: [
        'Improve database performance',
        'Reduce maintenance time',
        'Enhance security',
        'Simplify migrations'
      ],
      marketPrice: '$60-120/month',
      category: 'Database Tools',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Developer Tools
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Professional Development Tools for Modern Developers
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
              Boost your productivity with our comprehensive suite of developer tools. 
              From AI-powered code assistants to advanced testing frameworks, we provide 
              everything you need to build better software faster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Call: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Free Trial
              </a>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Developer Tools
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{tool.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{tool.title}</h3>
                  <p className="text-gray-300 mb-4">{tool.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {tool.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {tool.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-2xl font-bold text-cyan-400">{tool.price}</div>
                    <div className="text-sm text-gray-400">Market: {tool.marketPrice}</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tool.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href="/contact"
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg font-medium text-center transition-colors inline-block"
                  >
                    Start Free Trial
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-gray-800/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our Developer Tools?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Developer-Focused</h3>
                <p className="text-gray-300">Built by developers, for developers</p>
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
                <p className="text-gray-300">Built for team productivity</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Boost Your Development Productivity?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Start your free trial today and experience the power of our developer tools. 
              No credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Call: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DeveloperToolsPage;