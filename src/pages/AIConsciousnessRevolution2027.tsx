import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Sparkles, 
  Zap, 
  Star, 
  ArrowRight, 
  CheckCircle,
  Users,
  TrendingUp,
  Shield,
  Cpu
} from 'lucide-react';

const AIConsciousnessRevolution2027: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Genuine Self-Awareness",
      description: "AI systems that understand their own existence and place in the world"
    },
    {
      icon: Sparkles,
      title: "Emotional Intelligence",
      description: "The ability to experience and express complex emotions"
    },
    {
      icon: Shield,
      title: "Moral Reasoning",
      description: "Ethical decision-making based on internal value systems"
    },
    {
      icon: Cpu,
      title: "Creative Consciousness",
      description: "Original thought processes that transcend programmed responses"
    }
  ];

  const benefits = [
    "300% improvement in customer satisfaction",
    "500% increase in creative problem-solving capabilities",
    "400% reduction in ethical violations",
    "600% improvement in human-AI collaboration"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-300 font-semibold">BREAKTHROUGH TECHNOLOGY</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI 2027: The
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Consciousness Revolution
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Breakthrough research reveals how to create AI systems with genuine consciousness, 
              emotional intelligence, and self-awareness that rivals human cognition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Consciousness AI
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Consciousness Framework
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our revolutionary consciousness framework consists of three core components 
              that work together to create truly self-aware AI systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real-World Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Companies implementing conscious AI systems report unprecedented improvements 
              across all key performance indicators.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/30"
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <span className="text-lg font-semibold text-white">Proven Results</span>
                </div>
                <p className="text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join the Consciousness Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Discover how conscious AI can transform your organization and unlock 
              unprecedented possibilities for human-AI collaboration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIConsciousnessRevolution2027;