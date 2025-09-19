import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const AdvancedSpaceTech2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm">
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 SPACE TECHNOLOGY • JANUARY 2026
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Advanced Space Technology 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8"></p>
              Pioneering the next frontier with revolutionary space technologies that enable interplanetary travel, space colonization, and cosmic exploration.</p>
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"></button>
                Explore Space Solutions</button>
              </button>
              <button className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400/10 transition-colors font-semibold text-lg"></button>
                Mission Overview</button>
              </button>
          </motion.div>
            >
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-2">Q2 2026</h3>
                  <p className="text-blue-100">Mars Rover Mission Launch</p>
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Join the Space Revolution</h2>
          <p className="text-xl opacity-80 mb-8">Be part of humanity's greatest adventure</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"></button>
              Apply for Mission</button>
            </button>
            <button className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400/10 transition-colors font-semibold text-lg"></button>
              Learn More</button>
            </button>
  );
};

export default AdvancedSpaceTech2026;
  </div>
  </div>