import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NewContentShowcase2025 = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            🚀 Revolutionary New Content 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover groundbreaking AI innovations, quantum computing breakthroughs, and transformative business solutions that are reshaping the future of technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* New AI Services */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400 transition-all duration-300"
          >
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI-Powered Business Automation</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary AI systems that automate complex business processes with 99.9% accuracy and deliver 2,500% ROI within 90 days.
            </p>
            <Link href="/ai-services-2025" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold">
              Explore Services →
            </Link>
          </motion.div>

          {/* Quantum Computing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300"
          >
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Quantum Computing Solutions</h3>
            <p className="text-gray-300 mb-6">
              Next-generation quantum computers solving problems 10,000x faster than classical systems. Error-corrected quantum supremacy achieved.
            </p>
            <Link href="/quantum-computing-2025" className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold">
              Learn More →
            </Link>
          </motion.div>

          {/* Neural Interfaces */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-green-400 transition-all duration-300"
          >
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-green-400">Neural Interface Revolution</h3>
            <p className="text-gray-300 mb-6">
              Direct brain-computer interfaces enabling thought-to-action control. The future of human-AI collaboration is here.
            </p>
            <Link href="/neural-interface-revolution" className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold">
              Discover →
            </Link>
          </motion.div>

          {/* Autonomous Operations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-yellow-400 transition-all duration-300"
          >
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Autonomous Operations</h3>
            <p className="text-gray-300 mb-6">
              Self-managing business systems that operate 24/7 without human intervention. Complete operational autonomy achieved.
            </p>
            <Link href="/autonomous-operations" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold">
              Explore →
            </Link>
          </motion.div>

          {/* Future Predictions */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-pink-400 transition-all duration-300"
          >
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-2xl font-bold mb-4 text-pink-400">2025-2030 Predictions</h3>
            <p className="text-gray-300 mb-6">
              Expert AI predictions for the next 5 years. Discover what breakthrough technologies will reshape our world.
            </p>
            <Link href="/ai-2025-2030-predictions" className="inline-flex items-center text-pink-400 hover:text-pink-300 font-semibold">
              View Predictions →
            </Link>
          </motion.div>

          {/* Success Stories */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-orange-400 transition-all duration-300"
          >
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold mb-4 text-orange-400">Success Stories</h3>
            <p className="text-gray-300 mb-6">
              Real-world case studies of businesses achieving 5,000% ROI through our revolutionary AI solutions.
            </p>
            <Link href="/success-stories" className="inline-flex items-center text-orange-400 hover:text-orange-300 font-semibold">
              Read Stories →
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-16"
        >
          <Link 
            href="/content-showcase" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
          >
            🌟 Explore All New Content
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NewContentShowcase2025;