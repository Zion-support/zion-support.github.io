'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DeveloperToolsPage: React.FC = () => {
  const tools = [
    {
      title: 'AI Code Assistant Pro',
      description: 'Advanced AI-powered coding assistant with real-time suggestions, bug detection, and automated refactoring.',
      category: 'AI Development',
      features: ['Real-time code suggestions', 'Automated bug detection', 'Code refactoring', 'Multi-language support'],
      pricing: 'Starting at $99/month'
    },
    {
      title: 'API Testing Suite',
      description: 'Comprehensive API testing and monitoring tools for robust application development.',
      category: 'Testing',
      features: ['Automated testing', 'Performance monitoring', 'Load testing', 'API documentation'],
      pricing: 'Starting at $49/month'
    },
    {
      title: 'Cloud Development Environment',
      description: 'Fully configured cloud-based development environment with pre-installed tools and frameworks.',
      category: 'Cloud',
      features: ['Pre-configured environments', 'Collaborative coding', 'Version control integration', 'Scalable resources'],
      pricing: 'Starting at $79/month'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Developer Tools
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful development tools and utilities to accelerate your AI and software development workflow.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-3">{tool.title}</h3>
              <p className="text-gray-300 mb-4">{tool.description}</p>
              <div className="mb-4">
                <span className="bg-cyan-500 text-cyan-900 px-3 py-1 rounded-full text-sm font-medium">
                  {tool.category}
                </span>
              </div>
              <ul className="text-gray-300 text-sm mb-4 space-y-1">
                {tool.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>• {feature}</li>
                ))}
              </ul>
              <div className="text-cyan-400 font-semibold">{tool.pricing}</div>
            </div>
          ))}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DeveloperToolsPage;