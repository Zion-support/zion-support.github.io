import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Cpu, 
  Database, 
  Shield, 
  TrendingUp,
  ArrowRight,
  Star,
  Users,
  Target
} from 'lucide-react';

interface BreakthroughItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  category: string;
  impact: string;
  metrics: {
    improvement: string;
    accuracy: string;
    speed: string;
  };
  featured: boolean;
}

const breakthroughContent: BreakthroughItem[] = [
  {
    id: 'neural-synthesis-ai',
    title: 'Neural Synthesis AI',
    description: 'Revolutionary AI that synthesizes neural networks in real-time, adapting to complex business challenges with unprecedented intelligence.',
    icon: Brain,
    category: 'Core AI',
    impact: 'Transformative',
    metrics: {
      improvement: '15,000%',
      accuracy: '99.97%',
      speed: '50,000x'
    },
    featured: true
  },
  {
    id: 'quantum-neural-fusion',
    title: 'Quantum-Neural Fusion',
    description: 'Breakthrough technology combining quantum computing with neural networks for exponential processing power and decision-making capabilities.',
    icon: Cpu,
    category: 'Quantum AI',
    impact: 'Revolutionary',
    metrics: {
      improvement: '25,000%',
      accuracy: '99.99%',
      speed: '100,000x'
    },
    featured: true
  },
  {
    id: 'autonomous-decision-engine',
    title: 'Autonomous Decision Engine',
    description: 'Self-evolving AI system that makes complex business decisions autonomously while learning and improving continuously.',
    icon: Target,
    category: 'Autonomous Systems',
    impact: 'Game-Changing',
    metrics: {
      improvement: '12,000%',
      accuracy: '99.95%',
      speed: '30,000x'
    },
    featured: false
  },
  {
    id: 'predictive-analytics-pro',
    title: 'Predictive Analytics Pro',
    description: 'Advanced predictive analytics that forecasts market trends, customer behavior, and business outcomes with unprecedented accuracy.',
    icon: TrendingUp,
    category: 'Analytics',
    impact: 'Strategic',
    metrics: {
      improvement: '8,000%',
      accuracy: '99.92%',
      speed: '20,000x'
    },
    featured: false
  },
  {
    id: 'quantum-security-suite',
    title: 'Quantum Security Suite',
    description: 'Next-generation security powered by quantum encryption and AI threat detection for impenetrable digital protection.',
    icon: Shield,
    category: 'Security',
    impact: 'Critical',
    metrics: {
      improvement: '10,000%',
      accuracy: '99.98%',
      speed: '40,000x'
    },
    featured: true
  },
  {
    id: 'neural-database-optimizer',
    title: 'Neural Database Optimizer',
    description: 'AI-powered database optimization that learns from usage patterns and automatically optimizes performance in real-time.',
    icon: Database,
    category: 'Data Management',
    impact: 'Efficient',
    metrics: {
      improvement: '6,000%',
      accuracy: '99.90%',
      speed: '15,000x'
    },
    featured: false
  }
];

const AI2027BreakthroughContentShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(breakthroughContent.map(item => item.category)))];

  const filteredContent = selectedCategory === 'All' 
    ? breakthroughContent 
    : breakthroughContent.filter(item => item.category === selectedCategory);

  const featuredContent = breakthroughContent.filter(item => item.featured);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI 2027 Breakthrough Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover revolutionary AI technologies that are transforming industries and delivering unprecedented results
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Solutions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Featured Breakthrough Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-yellow-400/50 transition-all duration-300 h-full">
                  {/* Featured Badge */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    Featured
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <item.icon className="w-12 h-12 text-yellow-400" />
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-gray-300 mb-4 text-sm">{item.description}</p>

                  {/* Metrics */}
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">ROI Improvement:</span>
                      <span className="text-green-400 font-bold">{item.metrics.improvement}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Accuracy:</span>
                      <span className="text-blue-400 font-bold">{item.metrics.accuracy}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Speed:</span>
                      <span className="text-purple-400 font-bold">{item.metrics.speed}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    to={`/ai-2027-solutions/${item.id}`}
                    className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold text-sm group-hover:translate-x-1 transition-transform"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredContent.map((item, index) => (
              <motion.div
                key={`${item.id}-${selectedCategory}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-white/30 transition-all duration-300 h-full">
                  {/* Category Badge */}
                  <div className="inline-block bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                    {item.category}
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-gray-300 mb-4 text-sm">{item.description}</p>

                  {/* Impact */}
                  <div className="mb-4">
                    <span className="text-xs text-gray-400">Impact:</span>
                    <span className="ml-2 text-sm font-semibold text-green-400">{item.impact}</span>
                  </div>

                  {/* Metrics Preview */}
                  <div className="grid grid-cols-3 gap-2 text-xs mb-4">
                    <div className="text-center">
                      <div className="text-green-400 font-bold">{item.metrics.improvement}</div>
                      <div className="text-gray-400">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-blue-400 font-bold">{item.metrics.accuracy}</div>
                      <div className="text-gray-400">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-purple-400 font-bold">{item.metrics.speed}</div>
                      <div className="text-gray-400">Speed</div>
                    </div>
                  </div>

                  {/* Hover Action */}
                  <AnimatePresence>
                    {hoveredItem === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="pt-2"
                      >
                        <Link
                          to={`/ai-2027-solutions/${item.id}`}
                          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold text-sm"
                        >
                          Explore Solution
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience AI 2027 Breakthroughs?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join 500+ companies already transforming their business with our revolutionary AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold transition-all hover:from-yellow-500 hover:to-orange-600"
              >
                Start Your AI Journey
              </Link>
              <Link
                to="/case-studies"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AI2027BreakthroughContentShowcase;