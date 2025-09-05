import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Zap, Brain, Atom, Rocket, Target, Shield, Cpu, Globe, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function UltraFuturisticHero2029() {
  const features = [
    { icon: Brain, text: 'AI Consciousness Evolution', color: 'from-violet-500 to-purple-600' },
    { icon: Atom, text: 'Quantum Computing Solutions', color: 'from-blue-500 to-cyan-600' },
    { icon: Rocket, text: 'Space Technology Innovation', color: 'from-emerald-500 to-teal-600' },
    { icon: Target, text: 'Micro SAAS Excellence', color: 'from-orange-500 to-red-600' },
    { icon: Shield, text: 'Enterprise Security', color: 'from-indigo-500 to-blue-600' },
    { icon: Cpu, text: 'Autonomous IT Operations', color: 'from-cyan-500 to-teal-600' }
  ];

  const stats = [
    { number: '500+', label: 'Innovative Services', icon: Sparkles },
    { number: '$2.5B+', label: 'Market Opportunity', icon: TrendingUp },
    { number: '99.9%', label: 'Success Rate', icon: Star },
    { number: '24/7', label: 'AI Operations', icon: Zap }
  ];

  return (
    <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden&quot;>
      {/* Animated Background */}
      <div className=&quot;absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black&quot;>
        {/* Floating Particles */}
        <div className=&quot;absolute inset-0 overflow-hidden&quot;>
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className=&quot;absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20&quot;
              animate={{
                x: [0, Math.random() * 1000],
                y: [0, Math.random() * 1000],
                opacity: [0.2, 0.8, 0.2]}}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: &quot;linear&quot;
              }}
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%'}}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className=&quot;absolute inset-0 opacity-10&quot;>
          <div className=&quot;absolute inset-0&quot; style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Gradient Orbs */}
        <div className=&quot;absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse&quot; />
        <div className=&quot;absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000&quot; />
      </div>

      {/* Content */}
      <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=&quot;mb-8&quot;
        >
          <h1 className=&quot;text-5xl md:text-7xl lg:text-8xl font-bold mb-6&quot;>
            <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent&quot;>
              2029
            </span>
            <br />
            <span className=&quot;text-white&quot;>
              Future Technology
            </span>
            <br />
            <span className=&quot;bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent&quot;>
              Revolution
            </span>
          </h1>
          
          <p className=&quot;text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed&quot;>
            Experience the future of technology with Zion Tech Group's revolutionary 2029 services. 
            From AI consciousness evolution to quantum space mining, we're building tomorrow's solutions today.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className=&quot;flex flex-col sm:flex-row gap-4 justify-center mb-16&quot;
        >
          <Link
            href=&quot;/services&quot;
            className=&quot;group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2&quot;
          >
            <span>Explore Services</span>
            <ArrowRight className=&quot;w-5 h-5 group-hover:translate-x-1 transition-transform&quot; />
          </a>
          
          <Link
            href=&quot;/contact&quot;
            className=&quot;px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2&quot;
          >
            <span>Get Started</span>
            <Zap className=&quot;w-5 h-5&quot; />
          </a>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className=&quot;grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16&quot;
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.text}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className=&quot;group p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/50&quot;
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform`}>
                <feature.icon className=&quot;w-6 h-6 text-white&quot; />
              </div>
              <p className=&quot;text-xs text-gray-300 group-hover:text-white transition-colors text-center leading-tight&quot;>
                {feature.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8&quot;
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className=&quot;text-center group&quot;
            >
              <div className=&quot;w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform&quot;>
                <stat.icon className=&quot;w-8 h-8 text-cyan-400&quot; />
              </div>
              <div className=&quot;text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors&quot;>
                {stat.number}
              </div>
              <div className=&quot;text-sm text-gray-400 group-hover:text-gray-300 transition-colors&quot;>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className=&quot;absolute bottom-8 left-1/2 transform -translate-x-1/2&quot;
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className=&quot;w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center&quot;
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className=&quot;w-1 h-3 bg-cyan-400 rounded-full mt-2&quot;
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: &quot;linear&quot; }}
        className=&quot;absolute top-20 right-20 w-32 h-32 border border-cyan-500/20 rounded-full&quot;
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: &quot;linear&quot; }}
        className=&quot;absolute bottom-20 left-20 w-24 h-24 border border-purple-500/20 rounded-full&quot;
      />
    </section>
  );
}