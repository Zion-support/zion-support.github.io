'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Zap, Shield, Brain, Globe } from 'lucide-react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  category: string;
}

const DynamicContentShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [features, setFeatures] = useState<Feature[]>([]);

  const allFeatures: Feature[] = [
    {
      id: 1,
      title: 'AI-Powered Analytics',
      description: 'Advanced AI technology for data analysis and insights',
      icon: Brain,
      category: 'ai'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions',
      icon: Globe,
      category: 'cloud'
    },
    {
      id: 3,
      title: 'Security Solutions',
      description: 'Enterprise-grade security and compliance',
      icon: Shield,
      category: 'security'
    },
    {
      id: 4,
      title: 'Performance Optimization',
      description: 'High-performance solutions for your business',
      icon: Zap,
      category: 'performance'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Features' },
    { id: 'ai', name: 'AI Solutions' },
    { id: 'cloud', name: 'Cloud Services' },
    { id: 'security', name: 'Security' },
    { id: 'performance', name: 'Performance' }
  ];

  useEffect(() => {
    if (activeCategory === 'all') {
      setFeatures(allFeatures);
    } else {
      setFeatures(allFeatures.filter(feature => feature.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dynamic Content Showcase
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive range of technology solutions and services.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <button className="text-purple-400 hover:text-white transition-colors flex items-center">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center mx-auto">
            Explore All Solutions
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DynamicContentShowcase;