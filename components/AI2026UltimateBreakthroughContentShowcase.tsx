import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Cpu, 
  Database, 
  Shield, 
  Globe, 
  Rocket, 
  Star,
  ArrowRight,
  Play,
  BookOpen,
  Users,
  TrendingUp,
  CheckCircle,
  Sparkles
} from 'lucide-react';

interface BreakthroughContent {
  id: string;
  title: string;
  description: string;
  category: string;
  impact: string;
  features: string[];
  image: string;
  link: string;
  isNew: boolean;
  isFeatured: boolean;
  rating: number;
  views: number;
  publishedDate: string;
}

const breakthroughContent: BreakthroughContent[] = [
  {
    id: 'quantum-neural-fusion-2026',
    title: 'Quantum Neural Fusion Architecture',
    description: 'Revolutionary quantum-classical hybrid neural networks that process information at unprecedented speeds with 99.9% accuracy.',
    category: 'Quantum AI',
    impact: 'Transformational',
    features: [
      'Quantum entanglement processing',
      'Neural network optimization',
      'Real-time decision making',
      'Scalable architecture'
    ],
    image: '/images/quantum-neural-fusion.jpg',
    link: '/ai-2026-quantum-neural-fusion',
    isNew: true,
    isFeatured: true,
    rating: 4.9,
    views: 125000,
    publishedDate: '2026-01-15'
  },
  {
    id: 'autonomous-ai-ecosystem',
    title: 'Autonomous AI Ecosystem Platform',
    description: 'Self-evolving AI systems that adapt and improve without human intervention, creating intelligent business solutions.',
    category: 'Autonomous Systems',
    impact: 'Revolutionary',
    features: [
      'Self-learning algorithms',
      'Autonomous decision making',
      'Continuous optimization',
      'Zero-touch deployment'
    ],
    image: '/images/autonomous-ai-ecosystem.jpg',
    link: '/ai-2026-autonomous-ecosystem',
    isNew: true,
    isFeatured: true,
    rating: 4.8,
    views: 98000,
    publishedDate: '2026-01-10'
  },
  {
    id: 'neural-interface-revolution',
    title: 'Neural Interface Revolution',
    description: 'Direct brain-computer interfaces that enable seamless human-AI collaboration for enhanced productivity.',
    category: 'Neural Interfaces',
    impact: 'Breakthrough',
    features: [
      'Direct neural communication',
      'Enhanced cognitive abilities',
      'Seamless AI integration',
      'Privacy-first design'
    ],
    image: '/images/neural-interface.jpg',
    link: '/ai-2026-neural-interface',
    isNew: true,
    isFeatured: false,
    rating: 4.7,
    views: 87000,
    publishedDate: '2026-01-05'
  },
  {
    id: 'quantum-optimization-engine',
    title: 'Quantum Optimization Engine',
    description: 'Advanced quantum algorithms that solve complex optimization problems in seconds instead of years.',
    category: 'Quantum Computing',
    impact: 'Transformational',
    features: [
      'Exponential speed improvements',
      'Complex problem solving',
      'Resource optimization',
      'Real-time processing'
    ],
    image: '/images/quantum-optimization.jpg',
    link: '/ai-2026-quantum-optimization',
    isNew: false,
    isFeatured: true,
    rating: 4.9,
    views: 156000,
    publishedDate: '2025-12-20'
  },
  {
    id: 'ai-ethics-framework',
    title: 'AI Ethics & Governance Framework',
    description: 'Comprehensive ethical AI framework ensuring responsible development and deployment of artificial intelligence.',
    category: 'AI Ethics',
    impact: 'Critical',
    features: [
      'Ethical AI guidelines',
      'Bias detection and mitigation',
      'Transparency protocols',
      'Accountability measures'
    ],
    image: '/images/ai-ethics.jpg',
    link: '/ai-2026-ethics-framework',
    isNew: false,
    isFeatured: false,
    rating: 4.6,
    views: 72000,
    publishedDate: '2025-12-15'
  },
  {
    id: 'predictive-analytics-ai',
    title: 'Predictive Analytics AI Suite',
    description: 'Advanced predictive models that forecast business trends with 95% accuracy using machine learning.',
    category: 'Predictive Analytics',
    impact: 'High',
    features: [
      '95% prediction accuracy',
      'Real-time forecasting',
      'Multi-dimensional analysis',
      'Automated insights'
    ],
    image: '/images/predictive-analytics.jpg',
    link: '/ai-2026-predictive-analytics',
    isNew: false,
    isFeatured: false,
    rating: 4.5,
    views: 64000,
    publishedDate: '2025-12-10'
  }
];

const AI2026UltimateBreakthroughContentShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [filteredContent, setFilteredContent] = useState<BreakthroughContent[]>(breakthroughContent);

  const categories = ['All', 'Quantum AI', 'Autonomous Systems', 'Neural Interfaces', 'Quantum Computing', 'AI Ethics', 'Predictive Analytics'];

  useEffect(() => {
    let filtered = breakthroughContent;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    switch (sortBy) {
      case 'featured':
        filtered = filtered.filter(item => item.isFeatured).concat(filtered.filter(item => !item.isFeatured));
        break;
      case 'newest':
        filtered = filtered.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'views':
        filtered = filtered.sort((a, b) => b.views - a.views);
        break;
    }

    setFilteredContent(filtered);
  }, [selectedCategory, sortBy]);

  const formatViews = (views: number) => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
    return views.toString();
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            AI 2026 Ultimate Breakthroughs
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most advanced AI breakthroughs, quantum computing solutions, and revolutionary technology that will shape the future.
          </p>
        </motion.div>

        {/* Filters and Sorting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
          >
            <option value="featured">Featured First</option>
            <option value="newest">Newest First</option>
            <option value="rating">Highest Rated</option>
            <option value="views">Most Viewed</option>
          </select>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredContent.map((content, index) => (
            <motion.div
              key={content.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                {content.isNew && (
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    NEW
                  </span>
                )}
                {content.isFeatured && (
                  <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    FEATURED
                  </span>
                )}
              </div>

              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="flex items-center gap-1 text-white text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{content.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-400 text-sm font-medium">{content.category}</span>
                  <span className="text-gray-400 text-sm">{formatViews(content.views)} views</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {content.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {content.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                    {content.features.length > 2 && (
                      <span className="text-gray-400 text-xs">
                        +{content.features.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Impact Badge */}
                <div className="mb-4">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                    content.impact === 'Transformational' ? 'bg-purple-600 text-white' :
                    content.impact === 'Revolutionary' ? 'bg-red-600 text-white' :
                    content.impact === 'Breakthrough' ? 'bg-orange-600 text-white' :
                    content.impact === 'Critical' ? 'bg-yellow-600 text-white' :
                    'bg-green-600 text-white'
                  }`}>
                    <Zap className="w-3 h-3" />
                    {content.impact} Impact
                  </span>
                </div>

                {/* Action Button */}
                <Link
                  to={content.link}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group-hover:scale-105"
                >
                  <span>Explore Breakthrough</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already using our revolutionary AI solutions to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ai-2026-showcase"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                <Rocket className="w-5 h-5" />
                Explore All Breakthroughs
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 border border-gray-700"
              >
                <Users className="w-5 h-5" />
                Schedule Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AI2026UltimateBreakthroughContentShowcase;