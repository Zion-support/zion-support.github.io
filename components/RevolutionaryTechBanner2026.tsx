'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Cpu, Database, Cloud, Lock, Zap, Target } from 'lucide-react';

const RevolutionaryTechBanner2026 = () => {
  const technologies = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Quantum Computing",
      description: "Next-generation quantum processors for complex problem solving"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Neural Networks",
      description: "Advanced AI models with unprecedented learning capabilities"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Edge Computing",
      description: "Distributed processing for real-time decision making"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Blockchain Security",
      description: "Immutable security protocols for enterprise applications"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            REVOLUTIONARY TECH 2026
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Future of Technology
            <span className="block bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
              Starts Here
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience cutting-edge technologies that will define the next decade. 
            From quantum computing to neural interfaces, we're building tomorrow's solutions today.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-blue-400 mb-4">
                {tech.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {tech.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">10x Performance</h3>
              <p className="text-gray-300">Revolutionary speed improvements over traditional systems</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">99.9% Accuracy</h3>
              <p className="text-gray-300">Unprecedented precision in AI decision making</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Military Grade</h3>
              <p className="text-gray-300">Enterprise-level security and compliance</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center mx-auto">
            Explore 2026 Technologies
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default RevolutionaryTechBanner2026;