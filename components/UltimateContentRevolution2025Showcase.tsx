import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Download, Share2, BookOpen, Brain, Cpu, Zap } from 'lucide-react';

const UltimateContentRevolution2025Showcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('predictions');

  const contentCategories = [
    {
      id: 'predictions',
      title: 'AI 2025-2030 Predictions',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      content: [
        {
          title: 'Neural Interface Revolution 2030',
          description: 'Direct brain-computer interfaces will transform human-computer interaction',
          type: 'Prediction',
          readTime: '8 min read',
          views: '12.5K',
          rating: 4.9
        },
        {
          title: 'Quantum-AI Fusion Breakthrough',
          description: 'Quantum machine learning algorithms achieving 10,000x speed improvements',
          type: 'Breakthrough',
          readTime: '12 min read',
          views: '18.2K',
          rating: 4.8
        },
        {
          title: 'Autonomous Business Operations',
          description: 'Self-managing AI systems running entire business processes',
          type: 'Implementation',
          readTime: '15 min read',
          views: '25.1K',
          rating: 4.9
        }
      ]
    },
    {
      id: 'quantum',
      title: 'Quantum Computing Solutions',
      icon: Cpu,
      color: 'from-cyan-500 to-blue-500',
      content: [
        {
          title: 'Error-Corrected Quantum Computers',
          description: 'Fault-tolerant quantum systems ready for commercial deployment',
          type: 'Technology',
          readTime: '10 min read',
          views: '15.3K',
          rating: 4.7
        },
        {
          title: 'Quantum Internet Infrastructure',
          description: 'Ultra-secure quantum communication networks',
          type: 'Infrastructure',
          readTime: '14 min read',
          views: '9.8K',
          rating: 4.8
        },
        {
          title: 'Quantum Machine Learning',
          description: 'Revolutionary algorithms for quantum advantage',
          type: 'Algorithm',
          readTime: '18 min read',
          views: '22.4K',
          rating: 4.9
        }
      ]
    },
    {
      id: 'automation',
      title: 'Advanced Automation',
      icon: Zap,
      color: 'from-green-500 to-teal-500',
      content: [
        {
          title: 'Intelligent Process Automation',
          description: 'AI-powered workflow optimization and automation',
          type: 'Solution',
          readTime: '11 min read',
          views: '16.7K',
          rating: 4.8
        },
        {
          title: 'Predictive Maintenance AI',
          description: 'Zero-downtime manufacturing through predictive analytics',
          type: 'Application',
          readTime: '13 min read',
          views: '14.2K',
          rating: 4.7
        },
        {
          title: 'Autonomous Decision Systems',
          description: 'Self-optimizing business intelligence platforms',
          type: 'Platform',
          readTime: '16 min read',
          views: '19.6K',
          rating: 4.9
        }
      ]
    }
  ];

  const activeCategory = contentCategories.find(cat => cat.id === activeTab) || contentCategories[0];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ultimate Content Revolution
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI predictions, quantum breakthroughs, 
            and revolutionary technology solutions for 2025 and beyond.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {activeCategory.content.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              {/* Content Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${activeCategory.color} text-white`}>
                      {item.type}
                    </span>
                    <span className="text-gray-400 text-sm">{item.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Content Stats */}
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {item.views} views
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    {item.rating}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Link
                  to={`/content/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 flex items-center justify-center group"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Read More
                </Link>
                <button className="bg-white/20 text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
                  <Download className="w-4 h-4" />
                </button>
                <button className="bg-white/20 text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/ultimate-content-revolution-2025"
            className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore All Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentRevolution2025Showcase;