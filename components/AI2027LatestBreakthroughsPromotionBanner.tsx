import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Cpu, 
  Star, 
  TrendingUp,
  ArrowRight,
  Sparkles,
  Target,
  Shield
} from 'lucide-react';

interface Breakthrough {
  id: string;
  title: string;
  description: string;
  impact: string;
  icon: React.ComponentType<any>;
  metrics: string;
  featured: boolean;
}

const latestBreakthroughs: Breakthrough[] = [
  {
    id: 'neural-synthesis-ai',
    title: 'Neural Synthesis AI',
    description: 'Revolutionary AI that synthesizes neural networks in real-time',
    impact: '15,000% ROI Improvement',
    icon: Brain,
    metrics: '50,000x faster processing',
    featured: true
  },
  {
    id: 'quantum-decision-engine',
    title: 'Quantum Decision Engine',
    description: 'Autonomous decision-making powered by quantum computing',
    impact: '99.97% accuracy rate',
    icon: Target,
    metrics: 'Real-time optimization',
    featured: true
  },
  {
    id: 'neural-security-ai',
    title: 'Neural Security AI',
    description: 'Advanced threat detection and prevention systems',
    impact: '99.99% threat detection',
    icon: Shield,
    metrics: 'Zero false positives',
    featured: true
  },
  {
    id: 'predictive-analytics-pro',
    title: 'Predictive Analytics Pro',
    description: 'Forecast market trends with unprecedented accuracy',
    impact: '25,000% ROI improvement',
    icon: TrendingUp,
    metrics: '99.95% prediction accuracy',
    featured: false
  },
  {
    id: 'quantum-processing-core',
    title: 'Quantum Processing Core',
    description: 'Next-generation processing architecture',
    impact: '100,000x speed boost',
    icon: Cpu,
    metrics: 'Exponential performance',
    featured: false
  }
];

const AI2027LatestBreakthroughsPromotionBanner: React.FC = () => {
  const [currentBreakthrough, setCurrentBreakthrough] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const featuredBreakthroughs = latestBreakthroughs.filter(b => b.featured);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('breakthroughs-banner');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentBreakthrough((prev) => (prev + 1) % featuredBreakthroughs.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible, featuredBreakthroughs.length]);

  return (
    <section 
      id="breakthroughs-banner"
      className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 py-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Latest Breakthroughs
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            AI 2027 Revolutionary Breakthroughs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future with our latest AI innovations delivering unprecedented performance and results
          </p>
        </motion.div>

        {/* Main Breakthrough Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Breakthrough Display */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/20 h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentBreakthrough}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="h-full flex flex-col"
                >
                  {/* Featured Badge */}
                  <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold mb-4 w-fit">
                    <Star className="w-4 h-4 mr-1" />
                    Featured Breakthrough
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <featuredBreakthroughs[currentBreakthrough].icon className="w-16 h-16 text-yellow-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {featuredBreakthroughs[currentBreakthrough].title}
                  </h3>
                  <p className="text-gray-300 mb-6 flex-grow">
                    {featuredBreakthroughs[currentBreakthrough].description}
                  </p>

                  {/* Metrics */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Impact:</span>
                      <span className="text-green-400 font-bold">
                        {featuredBreakthroughs[currentBreakthrough].impact}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Performance:</span>
                      <span className="text-blue-400 font-bold">
                        {featuredBreakthroughs[currentBreakthrough].metrics}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to={`/ai-2027-breakthroughs/${featuredBreakthroughs[currentBreakthrough].id}`}
                    className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold transition-all hover:from-yellow-500 hover:to-orange-600"
                  >
                    Explore Breakthrough
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Breakthrough List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-6">All Latest Breakthroughs</h3>
            {latestBreakthroughs.map((breakthrough, index) => (
              <motion.div
                key={breakthrough.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`p-4 rounded-lg border transition-all cursor-pointer ${
                  currentBreakthrough === index
                    ? 'bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border-yellow-400/50'
                    : 'bg-white/5 border-white/20 hover:border-white/40'
                }`}
                onClick={() => setCurrentBreakthrough(index)}
              >
                <div className="flex items-start space-x-4">
                  <breakthrough.icon className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-semibold">{breakthrough.title}</h4>
                      {breakthrough.featured && (
                        <Star className="w-4 h-4 text-yellow-400" />
                      )}
                    </div>
                    <p className="text-gray-300 text-sm mb-2">{breakthrough.description}</p>
                    <div className="text-xs text-gray-400">
                      <span className="text-green-400 font-semibold">{breakthrough.impact}</span>
                      {' • '}
                      <span className="text-blue-400">{breakthrough.metrics}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-lg border border-white/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-white font-semibold mb-1">Companies Transformed</div>
            <div className="text-gray-400 text-sm">Using AI 2027 breakthroughs</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-lg border border-white/20">
            <div className="text-3xl font-bold text-green-400 mb-2">15,000%</div>
            <div className="text-white font-semibold mb-1">Average ROI</div>
            <div className="text-gray-400 text-sm">From breakthrough implementations</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-lg border border-white/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">99.97%</div>
            <div className="text-white font-semibold mb-1">Accuracy Rate</div>
            <div className="text-gray-400 text-sm">Across all AI solutions</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience AI 2027 Breakthroughs?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the revolution and transform your business with our latest AI innovations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ai-2027-breakthrough-solutions"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold transition-all hover:from-yellow-500 hover:to-orange-600"
              >
                Explore All Breakthroughs
              </Link>
              <Link
                to="/contact"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AI2027LatestBreakthroughsPromotionBanner;