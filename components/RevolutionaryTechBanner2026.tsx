'use client';

import React from 'react';
import { motion } from 'react';
import { ArrowRight, Sparkles, Cpu, Brain, Zap, Globe, Shield, Rocket } from 'lucide-react';

const RevolutionaryTechBanner2026 = () => {
  const technologies = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Neural AI",
      description: "Advanced neural networks with consciousness-level processing"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Quantum Computing",
      description: "Breakthrough quantum processors for complex problem solving"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Edge AI",
      description: "Ultra-fast AI processing at the edge of networks"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Mesh",
      description: "Worldwide distributed computing infrastructure"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quantum Security",
      description: "Unbreakable encryption using quantum principles"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Space Tech",
      description: "Revolutionary space-based computing solutions"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M50 50c0-27.614 22.386-50 50-50v100c-27.614 0-50-22.386-50-50z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium mb-6">
            <Sparkles className="w-5 h-5 mr-2" />
            REVOLUTIONARY TECH 2026
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Future of Technology
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Starts Here
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the most advanced technological breakthroughs that will define the next decade of innovation.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {tech.icon}
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">{tech.title}</h3>
              <p className="text-xs text-gray-300">{tech.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Be Among the First to Experience 2026 Technology
            </h3>
            <p className="text-gray-300 mb-6">
              Join our exclusive beta program and get early access to revolutionary solutions.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center mx-auto group">
              Join Beta Program
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevolutionaryTechBanner2026;