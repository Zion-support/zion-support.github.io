<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, Rocket, Brain, Globe } from 'lucide-react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> cursor/create-and-deploy-new-content-e058

const RevolutionaryContentBanner2026: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Consciousness",
      description: "True self-aware AI systems",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Space Technology",
      description: "Interplanetary business solutions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Holographic Computing",
      description: "3D immersive interfaces",
      color: "from-green-500 to-emerald-500"
    },
    {
<<<<<<< HEAD
      icon: Rocket,
      title: "Biotech AI",
      description: "Personalized medicine at scale",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-white">Revolutionary 2026 Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Future is{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Here
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience the most advanced AI, space technology, and biotech solutions that are reshaping the world in 2026. 
            Join the revolution that's transforming industries and creating unprecedented opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              Explore Revolutionary Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View Case Studies
            </motion.button>
          </div>
        </motion.div>
=======
      id: 4,
    }
  ];

  const items = contentItems.length > 0 ? contentItems : defaultContent;

  useEffect(() => {

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Main Banner */}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      {getCategoryIcon(currentItem.category)}
                    </div>
                    <p className="text-sm opacity-80">Featured Content</p>
                  </div>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
>>>>>>> cursor/create-and-deploy-new-content-e058

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 text-sm">
                {feature.description}
              </p>
              
              <div className="absolute top-4 right-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

<<<<<<< HEAD
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-300">Revolutionary Projects</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <div className="text-3xl font-bold text-white mb-2">$2.3B+</div>
            <div className="text-gray-300">Revenue Generated</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <div className="text-3xl font-bold text-white mb-2">99%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
        </motion.div>
=======
      {/* Content Preview Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.slice(0, 4).map((item, index) => (
          <div
            key={item.id}
            className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
              index === currentIndex
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300 bg-white hover:shadow-md'
            }`}
            onClick={() => goToSlide(index)}
          >
>>>>>>> cursor/create-and-deploy-new-content-e058
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;