<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Users, TrendingUp, Award } from 'lucide-react';

const RevolutionaryCaseStudiesBanner2026: React.FC = () => {

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveCase((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const caseStudies = [
    {
          </p>
        </div>

        {/* Case Study Carousel */}
              </button>
            </div>
            
            <p className="text-lg text-gray-300 mb-6">
              {caseStudies[currentStudy].description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-green-400">
                {caseStudies[currentStudy].result}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center space-x-2 mt-6">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStudy(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentStudy ? 'bg-purple-400' : 'bg-white/30'
              }`}
            />
          ))}
=======
import React from 'react';

const COMPONENT: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Technology Showcase
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience revolutionary technology and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-purple-400 text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
            <p className="text-gray-300">Revolutionary technology that pushes the boundaries of what's possible.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-purple-400 text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-3">Advanced Systems</h3>
            <p className="text-gray-300">Cutting-edge systems that revolutionize how we interact with technology.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-purple-400 text-4xl mb-4">🔮</div>
            <h3 className="text-xl font-semibold text-white mb-3">Future Vision</h3>
            <p className="text-gray-300">A glimpse into the future of technology and innovation.</p>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl p-12 border border-purple-400/30">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in discovering the future of technology and innovation.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
            Explore Now
          </button>
>>>>>>> origin/merged-prs
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default RevolutionaryCaseStudiesBanner2026;
=======
export default COMPONENT;
>>>>>>> origin/merged-prs
