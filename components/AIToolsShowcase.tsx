'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface AITool {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  href: string;
  isNew?: boolean;
  isPopular?: boolean;
}

const AIToolsShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const tools: AITool[] = [
    {
      id: '1',
      name: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      icon: '✍️',
      category: 'content',
      href: '/tools/ai-content-generator',
      isNew: true
    },
    {
      id: '2',
      name: 'Code Assistant',
      description: 'AI-powered coding assistant that helps developers write better code faster.',
      icon: '💻',
      category: 'development',
      href: '/tools/code-assistant',
      isPopular: true
    },
    {
      id: '3',
      name: 'Data Analyzer',
      description: 'Advanced data analysis and visualization tools powered by machine learning.',
      icon: '📊',
      category: 'analytics',
      href: '/tools/data-analyzer'
    },
    {
      id: '4',
      name: 'Image Generator',
      description: 'Create stunning images and graphics using state-of-the-art AI image generation.',
      icon: '🎨',
      category: 'design',
      href: '/tools/image-generator',
      isNew: true
    },
    {
      id: '5',
      name: 'Voice Assistant',
      description: 'Natural language processing for voice commands and speech recognition.',
      icon: '🎤',
      category: 'voice',
      href: '/tools/voice-assistant'
    },
    {
      id: '6',
      name: 'ROI Calculator',
      description: 'Calculate return on investment for AI implementations and projects.',
      icon: '💰',
      category: 'business',
      href: '/tools/roi-calculator',
      isPopular: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tools', icon: '🔧' },
    { id: 'content', name: 'Content', icon: '✍️' },
    { id: 'development', name: 'Development', icon: '💻' },
    { id: 'analytics', name: 'Analytics', icon: '📊' },
    { id: 'design', name: 'Design', icon: '🎨' },
    { id: 'voice', name: 'Voice', icon: '🎤' },
    { id: 'business', name: 'Business', icon: '💰' }
  ];

  const filteredTools = selectedCategory === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🛠️ AI TOOLS SUITE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Revolutionary AI Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our comprehensive suite of AI tools designed to accelerate your workflow, 
            boost productivity, and unlock new possibilities for your business.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredTools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.href}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <div className="flex gap-2">
                  {tool.isNew && (
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                      New
                    </span>
                  )}
                  {tool.isPopular && (
                    <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {tool.name}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {tool.description}
              </p>
              
              <div className="flex items-center text-indigo-600 font-medium group-hover:text-purple-600 transition-colors">
                <span>Explore Tool</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Workflow?</h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Get access to our complete AI tools suite and start building the future today. 
              Join thousands of professionals who are already using our tools to achieve extraordinary results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tools"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                🚀 Explore All Tools
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
              >
                📞 Get Custom Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIToolsShowcase;