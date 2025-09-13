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
  Shield,
  Database,
  Network
} from 'lucide-react';

interface NeuralSynthesisFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  metrics: string;
  benefit: string;
}

const neuralSynthesisFeatures: NeuralSynthesisFeature[] = [
  {
    id: 'real-time-adaptation',
    title: 'Real-Time Adaptation',
    description: 'Neural networks that adapt and evolve in real-time based on changing conditions',
    icon: Brain,
    metrics: '50,000x faster adaptation',
    benefit: 'Instant optimization'
  },
  {
    id: 'quantum-neural-fusion',
    title: 'Quantum-Neural Fusion',
    description: 'Breakthrough fusion of quantum computing with neural network architecture',
    icon: Network,
    metrics: '100,000x processing power',
    benefit: 'Exponential performance'
  },
  {
    id: 'autonomous-learning',
    title: 'Autonomous Learning',
    description: 'Self-evolving AI that learns and improves without human intervention',
    icon: Target,
    metrics: '99.97% accuracy improvement',
    benefit: 'Continuous optimization'
  },
  {
    id: 'predictive-synthesis',
    title: 'Predictive Synthesis',
    description: 'Predicts and synthesizes optimal neural configurations before problems arise',
    icon: TrendingUp,
    metrics: '99.95% prediction accuracy',
    benefit: 'Proactive solutions'
  },
  {
    id: 'distributed-intelligence',
    title: 'Distributed Intelligence',
    description: 'Neural networks that can operate across multiple systems simultaneously',
    icon: Database,
    metrics: 'Unlimited scalability',
    benefit: 'Global optimization'
  },
  {
    id: 'quantum-security',
    title: 'Quantum Security',
    description: 'Quantum-encrypted neural networks for ultimate security and privacy',
    icon: Shield,
    metrics: 'Unbreakable encryption',
    benefit: 'Complete protection'
  }
];

const AI2027NeuralSynthesisPromotionBanner: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('neural-synthesis-banner');
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
      setCurrentFeature((prev) => (prev + 1) % neuralSynthesisFeatures.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section 
      id="neural-synthesis-banner"
      className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.5) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 80%, rgba(147, 51, 234, 0.5) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.5) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-purple-400 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-6">
            <Brain className="w-6 h-6 mr-3" />
            Neural Synthesis Technology
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI 2027 Neural Synthesis
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Revolutionary neural synthesis technology that creates, adapts, and optimizes AI networks in real-time for unprecedented performance and intelligence
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-1">50,000x</div>
              <div className="text-white font-semibold">Faster Processing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-1">99.97%</div>
              <div className="text-white font-semibold">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-1">Real-Time</div>
              <div className="text-white font-semibold">Adaptation</div>
            </div>
          </div>
        </motion.div>

        {/* Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Main Feature Display */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/30 h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="h-full flex flex-col"
                >
                  {/* Feature Badge */}
                  <div className="inline-flex items-center bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 w-fit">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Neural Synthesis Feature
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <neuralSynthesisFeatures[currentFeature].icon className="w-20 h-20 text-purple-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {neuralSynthesisFeatures[currentFeature].title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg flex-grow">
                    {neuralSynthesisFeatures[currentFeature].description}
                  </p>

                  {/* Metrics */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                      <span className="text-gray-300">Performance:</span>
                      <span className="text-green-400 font-bold text-lg">
                        {neuralSynthesisFeatures[currentFeature].metrics}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                      <span className="text-gray-300">Benefit:</span>
                      <span className="text-blue-400 font-bold text-lg">
                        {neuralSynthesisFeatures[currentFeature].benefit}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to={`/neural-synthesis/${neuralSynthesisFeatures[currentFeature].id}`}
                    className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:from-purple-600 hover:to-pink-600"
                  >
                    Explore Feature
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Neural Synthesis Capabilities</h3>
            {neuralSynthesisFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`p-6 rounded-xl border transition-all cursor-pointer ${
                  currentFeature === index
                    ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/50'
                    : 'bg-white/5 border-white/20 hover:border-white/40'
                }`}
                onClick={() => setCurrentFeature(index)}
              >
                <div className="flex items-start space-x-4">
                  <feature.icon className="w-10 h-10 text-purple-400 flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <h4 className="text-white font-bold text-lg mb-2">{feature.title}</h4>
                    <p className="text-gray-300 mb-3">{feature.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-400 font-semibold">{feature.metrics}</span>
                      <span className="text-blue-400">{feature.benefit}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Technology Deep Dive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                How Neural Synthesis Works
              </h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Our neural synthesis technology creates and optimizes AI networks using quantum-enhanced algorithms
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Neural Creation</h4>
                <p className="text-gray-300">AI networks are synthesized from scratch based on specific requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Real-Time Adaptation</h4>
                <p className="text-gray-300">Networks continuously evolve and optimize based on new data</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Optimization</h4>
                <p className="text-gray-300">Continuous performance tuning for maximum efficiency and accuracy</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-2xl p-12 border border-white/30">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experience Neural Synthesis Technology
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with AI that thinks, learns, and adapts in real-time. Join the neural synthesis revolution today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/ai-2027-breakthrough-solutions"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all hover:from-purple-600 hover:to-pink-600"
              >
                Explore Neural Synthesis
              </Link>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all hover:from-blue-600 hover:to-purple-600"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AI2027NeuralSynthesisPromotionBanner;