'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Zap, Globe, Rocket, Star, TrendingUp, Users, Shield, Sparkles } from 'lucide-react';

const AI2030FutureVisionPromotionBanner = () => {
  const predictions = [
    {
      year: "2026",
      title: "Quantum AI Integration",
      description: "First commercial quantum-AI hybrid systems launch, processing complex problems 1000x faster",
      icon: <Brain className="w-6 h-6 text-blue-400" />,
      status: "In Development"
    },
    {
      year: "2028",
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces become mainstream, enabling thought-based computing",
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      status: "Research Phase"
    },
    {
      year: "2030",
      title: "Artificial General Intelligence",
      description: "AGI systems achieve human-level reasoning across all domains, transforming every industry",
      icon: <Rocket className="w-6 h-6 text-green-400" />,
      status: "Theoretical"
    }
  ];

  const impactAreas = [
    { area: "Healthcare", impact: "95%", description: "Disease prediction accuracy" },
    { area: "Education", impact: "300%", description: "Learning efficiency increase" },
    { area: "Transportation", impact: "99.9%", description: "Autonomous vehicle safety" },
    { area: "Energy", impact: "80%", description: "Renewable energy optimization" },
    { area: "Manufacturing", impact: "500%", description: "Production efficiency boost" },
    { area: "Finance", impact: "99.99%", description: "Fraud detection accuracy" }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-300 font-medium">AI 2030 Future Vision</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Future of AI is
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Closer Than You Think</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive roadmap to 2030, featuring breakthrough technologies 
            that will reshape the world and transform every aspect of human life.
          </p>
        </motion.div>

        {/* Predictions Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Technology Roadmap 2026-2030
          </h3>
          
          <div className="space-y-8">
            {predictions.map((prediction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mr-4">
                        {prediction.icon}
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-400">{prediction.year}</div>
                        <div className="text-sm text-gray-400">{prediction.status}</div>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-3">
                    {prediction.title}
                  </h4>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {prediction.description}
                  </p>
                </div>
                
                <div className="w-1 h-24 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Areas */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Expected Impact Across Industries
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">{area.impact}</div>
                <div className="text-lg font-bold text-white mb-2">{area.area}</div>
                <div className="text-gray-300 text-sm">{area.description}</div>
                
                <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: area.impact.replace('%', '') + '%' }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Be Part of the AI Revolution
            </h3>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of forward-thinking organizations preparing for the AI-powered future. 
              Start your transformation journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
              >
                Download Roadmap
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AI2030FutureVisionPromotionBanner;