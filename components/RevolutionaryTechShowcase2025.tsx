import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, TrendingUp, Users, Award, Target } from 'lucide-react';

interface TechItem {
  id: string;
  title: string;
  description: string;
  category: string;
  impact: string;
  icon: React.ReactNode;
  link: string;
  featured: boolean;
}

const RevolutionaryTechShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [techItems, setTechItems] = useState<TechItem[]>([]);

  useEffect(() => {
    const items: TechItem[] = [
      {
        id: '1',
        title: 'Neural-Synthetic Intelligence',
        description: 'Advanced AI systems that combine neural networks with synthetic data generation for unprecedented accuracy and speed.',
        category: 'ai',
        impact: '99.97% accuracy',
        icon: <TrendingUp className="w-8 h-8" />,
        link: '/neural-synthetic-intelligence',
        featured: true
      },
      {
        id: '2',
        title: 'Quantum-AI Fusion',
        description: 'Revolutionary computing that merges quantum mechanics with artificial intelligence for exponential processing power.',
        category: 'quantum',
        impact: '50,000x faster',
        icon: <Target className="w-8 h-8" />,
        link: '/quantum-ai-fusion',
        featured: true
      },
      {
        id: '3',
        title: 'Autonomous Business Systems',
        description: 'Self-managing enterprise solutions that adapt and optimize operations without human intervention.',
        category: 'automation',
        impact: 'Zero downtime',
        icon: <Award className="w-8 h-8" />,
        link: '/autonomous-business-systems',
        featured: true
      },
      {
        id: '4',
        title: 'Predictive Analytics Engine',
        description: 'Advanced forecasting systems that predict market trends, customer behavior, and operational outcomes.',
        category: 'analytics',
        impact: '95% accuracy',
        icon: <Users className="w-8 h-8" />,
        link: '/predictive-analytics',
        featured: false
      },
      {
        id: '5',
        title: 'Edge Computing Networks',
        description: 'Distributed computing infrastructure that brings processing power closer to data sources.',
        category: 'infrastructure',
        impact: '10x faster response',
        icon: <Play className="w-8 h-8" />,
        link: '/edge-computing-networks',
        featured: false
      },
      {
        id: '6',
        title: 'Blockchain Integration Platform',
        description: 'Seamless blockchain technology integration for secure, transparent, and decentralized operations.',
        category: 'blockchain',
        impact: '100% secure',
        icon: <Award className="w-8 h-8" />,
        link: '/blockchain-integration',
        featured: false
      }
    ];
    setTechItems(items);
  }, []);

  const categories = [
    { id: 'all', name: 'All Technologies' },
    { id: 'ai', name: 'Artificial Intelligence' },
    { id: 'quantum', name: 'Quantum Computing' },
    { id: 'automation', name: 'Automation' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'blockchain', name: 'Blockchain' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? techItems 
    : techItems.filter(item => item.category === activeCategory);

  const featuredItems = techItems.filter(item => item.featured);

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Technology Showcase 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the cutting-edge technologies that are reshaping industries and creating unprecedented opportunities for growth and innovation.
          </p>
        </div>

        {/* Featured Technologies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Breakthrough Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <div key={item.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 group">
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.impact}
                  </span>
                  <Link 
                    to={item.link}
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group">
              <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400 mb-4 text-sm">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">
                  {item.impact}
                </span>
                <Link 
                  to={item.link}
                  className="text-purple-400 hover:text-purple-300 transition-colors text-sm flex items-center"
                >
                  Explore
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link 
            to="/revolutionary-tech-2025"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 inline-flex items-center"
          >
            Explore All Technologies
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;