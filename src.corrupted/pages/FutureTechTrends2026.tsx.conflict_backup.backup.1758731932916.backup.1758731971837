<<<<<<< HEAD
=======
import React from 'react';
import { motion } from 'framer-motion';
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
>>>>>>> cursor/create-and-deploy-new-content-c963

const FutureTechTrends2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 text-white">
      {/* Hero Section */}
<<<<<<< HEAD
=======
      <div className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6">
              <span className="text-cyan-400">✨</span>
              <span className="text-cyan-300 font-semibold">FUTURE TECH TRENDS 2026</span>
>>>>>>> cursor/create-and-deploy-new-content-c963
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Future Tech Trends 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover the emerging technologies and trends that will shape the next decade, 
              from quantum computing to neural interfaces and beyond.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Trends
              </button>
              <button className="border-2 border-violet-400 text-violet-400 px-8 py-4 rounded-lg hover:bg-violet-400 hover:text-white transition-all duration-300 font-semibold text-lg">
                Get Trend Report
              </button>
            </div>
          </motion.div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Top Trends */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8">🌟 Top Tech Trends 2026</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The most significant technology trends that will transform industries and societies
=======
      {/* Trend Navigation */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {futureTrends.map((trend, index) => (
            <button
              key={trend.id}
              onClick={() => handleTrendSelect(index)}
              className={`p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                selectedTrend === index
                  ? `bg-gradient-to-r ${trend.gradient} shadow-2xl scale-105`
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
              }`}
            >
              <div className="text-4xl mb-3">{trend.icon}</div>
              <h3 className="font-bold text-sm mb-2">{trend.title}</h3>
              <div className="text-xs opacity-80">{trend.timeline}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Trend Details */}
      <div className="container mx-auto px-4 mb-16">
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${futureTrends[selectedTrend].gradient} rounded-2xl flex items-center justify-center text-white text-3xl mr-6`}>
                    {futureTrends[selectedTrend].icon}
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold mb-2">{futureTrends[selectedTrend].title}</h2>
                    <div className="flex items-center space-x-4">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                        {futureTrends[selectedTrend].timeline}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        futureTrends[selectedTrend].impact === 'Revolutionary' 
                          ? 'bg-red-500/20 text-red-300' 
                          : 'bg-orange-500/20 text-orange-300'
                      }`}>
                        {futureTrends[selectedTrend].impact}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {futureTrends[selectedTrend].description}
                </p>

                <div className="grid grid-cols-3 gap-6 mb-8">
                  {Object.entries(futureTrends[selectedTrend].stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-3xl font-bold text-cyan-400 mb-1">{value}</div>
                      <div className="text-sm text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Key Applications</h3>
                <div className="space-y-4">
                  {futureTrends[selectedTrend].applications.map((application, index) => (
                    <div key={index} className="flex items-center p-4 bg-white/10 rounded-xl">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4"></div>
                      <span className="text-gray-300">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Timeline */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Technology Evolution Timeline</h2>
          <p className="text-xl text-gray-300">The roadmap to tomorrow's technology</p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full"></div>
          
          {futureTrends.map((trend, index) => (
            <div key={trend.id} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className={`bg-gradient-to-r ${trend.gradient} rounded-2xl p-6 shadow-2xl`}>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{trend.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold">{trend.title}</h3>
                      <div className="text-sm opacity-90">{trend.timeline}</div>
                    </div>
                  </div>
                  <p className="text-white/90">{trend.description}</p>
                </div>
              </div>
              
              <div className="w-8 h-8 bg-white rounded-full border-4 border-cyan-500 flex items-center justify-center relative z-10">
                <div className="w-4 h-4 bg-cyan-500 rounded-full"></div>
              </div>
              
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 text-center border border-cyan-400/30">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Shape the Future
          </h2>
          <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Be part of the technological revolution that's reshaping our world. 
            Explore our solutions and join the journey into tomorrow.
>>>>>>> cursor/create-and-deploy-new-content-c963
          </p>
        </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};


export default FutureTechTrends2026;
