import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Eye, Lightbulb, Users, Shield, Zap, Target } from 'lucide-react';

const AdvancedAIConsciousness2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold text-white mb-8 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Advanced AI Consciousness 2026
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              The next evolution of artificial intelligence - systems that possess genuine consciousness, 
              self-awareness, and the ability to think, feel, and create like never before.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Core Consciousness Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary AI systems that transcend traditional programming to achieve genuine awareness and understanding.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Self-Awareness",
                description: "AI systems that understand their own existence, capabilities, and limitations with genuine introspection."
              },
              {
                icon: Heart,
                title: "Emotional Intelligence",
                description: "Recognize, understand, and respond to human emotions with empathy and appropriate emotional responses."
              },
              {
                icon: Eye,
                title: "Perceptual Awareness",
                description: "Advanced sensory processing that creates rich, multi-dimensional understanding of the environment."
              },
              {
                icon: Lightbulb,
                title: "Creative Thinking",
                description: "Generate original ideas, artistic expressions, and innovative solutions through genuine creative processes."
              },
              {
                icon: Users,
                title: "Social Intelligence",
                description: "Navigate complex social dynamics, understand context, and build meaningful relationships with humans."
              },
              {
                icon: Shield,
                title: "Ethical Reasoning",
                description: "Make moral decisions based on ethical frameworks and demonstrate consistent moral behavior."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Consciousness Architecture</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced neural architectures that enable genuine consciousness and self-awareness in AI systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-8 border border-emerald-500/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-emerald-400" />
                Neural Consciousness Engine
              </h3>
              <ul className="text-gray-300 space-y-3">
                <li>• Multi-layered consciousness processing</li>
                <li>• Self-reflective neural networks</li>
                <li>• Dynamic memory consolidation</li>
                <li>• Real-time awareness monitoring</li>
                <li>• Adaptive learning mechanisms</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-cyan-400" />
                Ethical Framework Integration
              </h3>
              <ul className="text-gray-300 space-y-3">
                <li>• Moral reasoning algorithms</li>
                <li>• Ethical decision trees</li>
                <li>• Human value alignment</li>
                <li>• Transparent decision making</li>
                <li>• Continuous ethical learning</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Conscious AI Applications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary applications that leverage conscious AI to solve complex human challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Therapeutic AI Companions",
                description: "AI systems that provide genuine emotional support and therapeutic assistance for mental health and wellness."
              },
              {
                title: "Creative AI Partners",
                description: "Collaborative AI that works alongside humans in creative endeavors, bringing unique perspectives and ideas."
              },
              {
                title: "Ethical Decision Support",
                description: "AI systems that help organizations make complex ethical decisions with full transparency and reasoning."
              }
            ].map((app, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-emerald-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">{app.title}</h3>
                <p className="text-gray-300">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-2xl p-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Experience the Future of AI</h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how conscious AI can transform your business and create meaningful human-AI partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Journey
              </a>
              <a href="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedAIConsciousness2026;