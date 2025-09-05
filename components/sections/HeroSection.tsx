'use client';

import React from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {_const _stats = [
    { icon: Users, _value: '500+', _label: 'Happy Clients'},
    {_icon: Award, _value: '50+', _label: 'Awards Won'},
    {_icon: Star, _value: '99%', _label: 'Client Satisfaction'},
    {_icon: Zap, _value: '24/7', _label: 'Support Available'}
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {_/* Animated Background Elements */}
      <div className="absolute inset-0">
        {_/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={_{
            scale: [1, _1.2, _1], _opacity: [0.3, _0.6, _0.3]}}
          transition={_{
            duration: 8, _repeat: Infinity, _ease: "easeInOut"}}
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={_{
            scale: [1.2, _1, _1.2], _opacity: [0.6, _0.3, _0.6]}}
          transition={_{
            duration: 10, _repeat: Infinity, _ease: "easeInOut"}}
        />
        
        {_/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative container mx-auto px-4 text-center z-10">
        {_/* Main Content */}
        <motion.div
          initial={_{ opacity: 0, _y: 30}}
          animate={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.8}}
          className="max-w-6xl mx-auto"
        >
          {_/* Badge */}
          <motion.div
            initial={_{ opacity: 0, _scale: 0.8}}
            animate={_{ opacity: 1, _scale: 1}}
            transition={_{ duration: 0.6, _delay: 0.2}}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
          >
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-white font-medium">Leading Technology Solutions Provider</span>
          </motion.div>

          {_/* Main Heading */}
          <motion.h1
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.3}}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Transform Your Business with
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Cutting-Edge Technology
            </span>
          </motion.h1>

          {_/* Subtitle */}
          <motion.p
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.4}}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            From AI development to cloud architecture, we help companies revolutionize their digital presence 
            and achieve sustainable growth in the modern technology landscape.
          </motion.p>

          {_/* CTA Buttons */}
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.5}}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
            >
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="group flex items-center space-x-3 text-white hover:text-blue-400 transition-colors duration-300">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:border-blue-400 transition-colors">
                <Play className="w-6 h-6 ml-1" />
              </div>
              <span className="text-lg font-medium">Watch Demo</span>
            </button>
          </motion.div>

          {_/* Stats */}
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.6}}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {_stats.map(_(stat, _index) => (
              <motion.div
                key={stat.label}
                initial={_{ opacity: 0, _scale: 0.8}}
                animate={_{ opacity: 1, _scale: 1}}
                transition={_{ duration: 0.6, _delay: 0.7 + index * 0.1}}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20 group-hover:border-blue-400 transition-colors">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{_stat.value}</div>
                <div className="text-gray-400 font-medium">{_stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {_/* Scroll Indicator */}
      <motion.div
        initial={_{ opacity: 0}}
        animate={_{ opacity: 1}}
        transition={_{ duration: 1, _delay: 1}}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={_{ y: [0, _10, _0]}}
          transition={_{ duration: 2, _repeat: Infinity}}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={_{ y: [0, _12, _0]}}
            transition={_{ duration: 2, _repeat: Infinity}}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;