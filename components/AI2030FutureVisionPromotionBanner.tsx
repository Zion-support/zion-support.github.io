'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Eye, Brain, Globe, Rocket, Star, Zap, Users } from 'lucide-react';

const AI2030FutureVisionPromotionBanner = () => {
  const visionFeatures = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "Conscious AI",
      description: "Artificial general intelligence that thinks and reasons like humans"
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: "Global Neural Network",
      description: "Worldwide AI infrastructure connecting every device and system"
    },
    {
      icon: <Rocket className="w-8 h-8 text-orange-400" />,
      title: "Space AI",
      description: "AI systems operating in space for interplanetary exploration"
    },
    {
      icon: <Users className="w-8 h-8 text-pink-400" />,
      title: "Human-AI Fusion",
      description: "Seamless integration between human consciousness and AI"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-6">
            <Eye className="w-5 h-5 mr-2" />
            AI 2030 FUTURE VISION
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            The Future of
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Step into 2030 where artificial intelligence transcends current limitations, 
            creating a world of infinite possibilities and unprecedented human-AI collaboration.
          </p>
        </motion.div>

        {/* Vision Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {visionFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/20 mb-16"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-cyan-400 mb-2">10B+</div>
              <div className="text-gray-300">AI Devices Connected</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Problem Solving Accuracy</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-pink-400 mb-2">1000x</div>
              <div className="text-gray-300">Processing Speed Increase</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-400 mb-2">∞</div>
              <div className="text-gray-300">Possibilities Unlocked</div>
            </div>
          </div>
        </motion.div>

        {/* Future Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            The Road to 2030
          </h3>
          <div className="space-y-8">
            {[
              { year: "2025", milestone: "Quantum AI Integration", status: "In Progress" },
              { year: "2027", milestone: "Neural Interface Breakthrough", status: "Planned" },
              { year: "2029", milestone: "Conscious AI Emergence", status: "Research" },
              { year: "2030", milestone: "Human-AI Symbiosis", status: "Vision" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-center justify-between bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{item.year}</div>
                    <div className="text-gray-300">{item.milestone}</div>
                  </div>
                </div>
                <div className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 text-sm font-medium">
                  {item.status}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/20">
            <h3 className="text-4xl font-bold text-white mb-6">
              Be Part of the Future
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join us in shaping the future of artificial intelligence. 
              Your journey to 2030 starts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center">
                Explore Future Vision
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-cyan-500/30 text-cyan-300 px-8 py-4 rounded-full font-semibold hover:border-cyan-500/50 transition-all duration-300">
                Join Research Program
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AI2030FutureVisionPromotionBanner;