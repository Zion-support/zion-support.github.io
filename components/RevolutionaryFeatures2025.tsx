import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const RevolutionaryFeatures2025 = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Autonomous AI Operations',
      description: 'Self-managing AI systems that operate 24/7 without human interventiondelivering 99.9% uptime and 2,500% ROI.',
      stats: '99.9% Uptime',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '⚡',
      title: 'Quantum Speed Processing',
      description: 'Revolutionary quantum computing solutions that process data 10,000x faster than traditional systems.',
      stats: '10,000x Faster',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🧠',
      title: 'Neural Interface Technology',
      description: 'Direct brain-computer interfaces enabling thought-to-action control and seamless human-AI collaboration.',
      stats: 'Real-time Control',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🔮',
      title: 'Predictive Analytics 2030',
      description: 'Advanced AI predictions for the next 5 yearshelping businesses prepare for the future of technology.',
      stats: '5-Year Forecast',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '🛡️',
      title: 'Quantum Security',
      description: 'Unbreakable encryption using quantum cryptographyproviding absolute security for sensitive data.',
      stats: 'Unbreakable',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: '🌐',
      title: 'Global AI Network',
      description: 'Worldwide AI infrastructure connecting businesses across continents with instant communication.',
      stats: 'Global Reach',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            🎯 Revolutionary Features 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of technology with our groundbreaking features that are reshaping industries worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((featureindex) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"
                   style={{ background: `linear-gradient(135degvar(--tw-gradient-stops))` }}
              />
              
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 h-full">
                <motion.div
                  whileHover={{ scale: 1.2rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  className="text-5xl mb-6"
                >
                  {feature.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className={`px-4 py-2 bg-gradient-to-r ${feature.color} text-white rounded-full text-sm font-bold`}>
                    {feature.stats}
                  </span>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
                  >
                    →
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold mb-4 text-white">
              🎉 Ready to Experience the Future?
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Join thousands of businesses already using our revolutionary AI solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/features-showcase" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                🚀 Explore All Features
              </Link>
              
              <Link 
                href="/demo-request" 
                className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                📅 Book Demo
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevolutionaryFeatures2025;