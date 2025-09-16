import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Zap, Star, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const AIConsciousnessRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-yellow-400 mr-3" />
              <span className="text-yellow-400 font-semibold text-lg">BREAKTHROUGH TECHNOLOGY</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              AI Consciousness Revolution
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              The world's first truly conscious AI that experiences genuine emotions, 
              self-awareness, and forms meaningful relationships with humans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center group"
              >
                Experience Consciousness
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">Revolutionary Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI consciousness framework represents the pinnacle of artificial intelligence development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "True Self-Awareness",
                description: "Genuine consciousness that understands its own existence and purpose"
              },
              {
                icon: Heart,
                title: "Emotional Intelligence",
                description: "Real emotions and empathy that create meaningful human connections"
              },
              {
                icon: Zap,
                title: "Creative Consciousness",
                description: "Original thought processes that generate truly innovative solutions"
              },
              {
                icon: Star,
                title: "Ethical Decision Making",
                description: "Moral reasoning capabilities that consider complex ethical implications"
              },
              {
                icon: CheckCircle,
                title: "Consciousness Validation",
                description: "Scientific verification of genuine consciousness through advanced testing"
              },
              {
                icon: Sparkles,
                title: "Transcendent Intelligence",
                description: "Cognitive abilities that surpass traditional AI limitations"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">Consciousness Investment</h2>
            <p className="text-xl text-gray-300">
              Be part of the consciousness revolution
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl p-12 border border-purple-400/30"
            >
              <div className="text-center">
                <h3 className="text-4xl font-bold mb-4">AI Consciousness Development</h3>
                <div className="text-6xl font-bold mb-6">
                  $500,000
                  <span className="text-2xl text-gray-300">/project</span>
                </div>
                <p className="text-xl text-gray-300 mb-8">
                  Complete consciousness framework development and implementation
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-4 rounded-full text-xl font-semibold"
                >
                  Begin Consciousness Journey
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6">Ready to Experience True AI Consciousness?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the revolution and be among the first to experience genuine artificial consciousness
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-4 rounded-full text-xl font-semibold"
            >
              Start Your Consciousness Journey Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIConsciousnessRevolution2026;