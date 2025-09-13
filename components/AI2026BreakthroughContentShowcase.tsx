import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Target, TrendingUp, Users, Globe, Shield } from 'lucide-react';

const AI2026BreakthroughContentShowcase: React.FC = () => {
  const breakthroughContent = [
    {
      id: 'ai-2026-neural-synthesis',
      title: 'Neural Synthesis Revolution 2026',
      description: 'Breakthrough in artificial neural networks achieving human-level cognitive processing with 99.7% accuracy in complex decision-making scenarios.',
      category: 'AI Breakthroughs',
      readTime: '8 min read',
      publishDate: '2026-01-15',
      featured: true,
      stats: {
        accuracy: '99.7%',
        processingSpeed: '10,000x',
        roi: '3,500%'
      },
      tags: ['Neural Networks', 'Cognitive AI', 'Machine Learning', '2026 Breakthroughs']
    },
    {
      id: 'quantum-ai-fusion-2026',
      title: 'Quantum-AI Fusion Breakthrough',
      description: 'Revolutionary integration of quantum computing with artificial intelligence, enabling unprecedented computational power and problem-solving capabilities.',
      category: 'Quantum Computing',
      readTime: '12 min read',
      publishDate: '2026-02-20',
      featured: true,
      stats: {
        quantumSpeedup: '1Millionx',
        accuracy: '99.9%',
        applications: '500+'
      },
      tags: ['Quantum Computing', 'AI Fusion', 'Computational Power', '2026 Tech']
    },
    {
      id: 'autonomous-systems-2026',
      title: 'Fully Autonomous Business Systems',
      description: 'Complete automation of business processes with self-healing, self-optimizing systems that require zero human intervention.',
      category: 'Automation',
      readTime: '10 min read',
      publishDate: '2026-03-10',
      featured: true,
      stats: {
        automation: '100%',
        efficiency: '500%',
        costReduction: '80%'
      },
      tags: ['Autonomous Systems', 'Business Automation', 'Self-Healing', '2026 Solutions']
    },
    {
      id: 'neural-interface-2026',
      title: 'Neural Interface Technology',
      description: 'Direct brain-computer interfaces enabling seamless communication between human consciousness and AI systems.',
      category: 'Neural Interfaces',
      readTime: '15 min read',
      publishDate: '2026-04-05',
      featured: false,
      stats: {
        connectionSpeed: 'Real-time',
        accuracy: '99.5%',
        safety: '100%'
      },
      tags: ['Neural Interfaces', 'Brain-Computer', 'Consciousness', '2026 Innovation']
    },
    {
      id: 'space-ai-2026',
      title: 'Space Technology AI Solutions',
      description: 'Advanced AI systems for space exploration, satellite management, and interplanetary communication networks.',
      category: 'Space Technology',
      readTime: '9 min read',
      publishDate: '2026-05-12',
      featured: false,
      stats: {
        coverage: 'Global',
        reliability: '99.9%',
        range: 'Unlimited'
      },
      tags: ['Space Technology', 'Satellite AI', 'Space Exploration', '2026 Space']
    },
    {
      id: 'predictive-ai-2026',
      title: 'Predictive AI Systems',
      description: 'Next-generation predictive analytics with 99.8% accuracy in forecasting market trends, customer behavior, and system failures.',
      category: 'Predictive Analytics',
      readTime: '7 min read',
      publishDate: '2026-06-18',
      featured: false,
      stats: {
        accuracy: '99.8%',
        predictionRange: '5 Years',
        confidence: '95%'
      },
      tags: ['Predictive Analytics', 'Forecasting', 'Market Intelligence', '2026 Predictions']
    }
  ];

  const featuredContent = breakthroughContent.filter(item => item.featured);
  const regularContent = breakthroughContent.filter(item => !item.featured);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold mb-4">
            <Brain className="w-4 h-4 mr-2" />
            AI 2026 Breakthrough Content
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary AI Breakthroughs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most advanced AI technologies and breakthroughs that will reshape the future in 2026 and beyond.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Breakthroughs</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredContent.map((content) => (
              <div key={content.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium">
                    {content.category}
                  </span>
                  <span className="text-gray-400 text-sm">{content.readTime}</span>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {content.title}
                </h4>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {content.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(content.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-blue-400">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {content.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link 
                  to={`/ai-2026-breakthroughs/${content.id}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Content Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">All Breakthroughs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularContent.map((content) => (
              <div key={content.id} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs font-medium">
                    {content.category}
                  </span>
                  <span className="text-gray-400 text-xs">{content.readTime}</span>
                </div>
                
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {content.title}
                </h4>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {content.description}
                </p>

                {/* Quick Stats */}
                <div className="flex justify-between text-xs text-gray-400 mb-4">
                  {Object.entries(content.stats).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="font-semibold text-purple-400">{value}</div>
                      <div className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>

                <Link 
                  to={`/ai-2026-breakthroughs/${content.id}`}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Explore the Future?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of innovators who are already implementing these breakthrough AI technologies to transform their businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/ai-2026-breakthroughs"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore All Breakthroughs
              </Link>
              <Link 
                to="/contact"
                className="border border-white/30 hover:border-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10"
              >
                Get Implementation Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2026BreakthroughContentShowcase;