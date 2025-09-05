import React from 'react';
import Link from 'next/link';

export default function UltraFuturisticHero2029() {_const _features = [
    { icon: Brain, _text: 'AI Consciousness Evolution', _color: 'from-violet-500 to-purple-600'},
    {_icon: Atom, _text: 'Quantum Computing Solutions', _color: 'from-blue-500 to-cyan-600'},
    {_icon: Rocket, _text: 'Space Technology Innovation', _color: 'from-emerald-500 to-teal-600'},
    {_icon: Target, _text: 'Micro SAAS Excellence', _color: 'from-orange-500 to-red-600'},
    {_icon: Shield, _text: 'Enterprise Security', _color: 'from-indigo-500 to-blue-600'},
    {_icon: Cpu, _text: 'Autonomous IT Operations', _color: 'from-cyan-500 to-teal-600'}
  ];

  const _stats = [
    {_number: '500+', _label: 'Innovative Services', _icon: Sparkles},
    {_number: '$2.5B+', _label: 'Market Opportunity', _icon: TrendingUp},
    {_number: '99.9%', _label: 'Success Rate', _icon: Star},
    {_number: '24/7', _label: 'AI Operations', _icon: Zap}
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {_/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {_/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {_[...Array(50)].map(_(_, _i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20"
              animate={_{
                x: [0, _Math.random() * 1000], _y: [0, _Math.random() * 1000], _opacity: [0.2, _0.8, _0.2]}}
              transition={_{
                duration: Math.random() * 10 + 10, _repeat: Infinity, _ease: "linear"}}
              style={_{
                left: Math.random() * 100 + '%', _top: Math.random() * 100 + '%'}}
            />
          ))}
        </div>

        {_/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={_{
            backgroundImage: `radial-gradient(circle at 1px 1px, _rgba(6, _182, _212, _0.3) 1px, _transparent 0)`, _backgroundSize: '50px 50px'}} />
        </div>

        {_/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {_/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {_/* Main Heading */}
        <motion.div
          initial={_{ opacity: 0, _y: 30}}
          animate={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.8}}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              2029
            </span>
            <br />
            <span className="text-white">
              Future Technology
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Revolution
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of technology with Zion Tech Group's revolutionary 2029 services. 
            From AI consciousness evolution to quantum space mining, we're building tomorrow's solutions today.
          </p>
        </motion.div>

        {_/* CTA Buttons */}
        <motion.div
          initial={_{ opacity: 0, _y: 30}}
          animate={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.8, _delay: 0.2}}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link
            href="/services"
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Get Started</span>
            <Zap className="w-5 h-5" />
          </Link>
        </motion.div>

        {_/* Features Grid */}
        <motion.div
          initial={_{ opacity: 0, _y: 30}}
          animate={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.8, _delay: 0.4}}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {_features.map(_(feature, _index) => (
            <motion.div
              key={feature.text}
              initial={_{ opacity: 0, _scale: 0.8}}
              animate={_{ opacity: 1, _scale: 1}}
              transition={_{ duration: 0.5, _delay: 0.6 + index * 0.1}}
              className="group p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/50"
            >
              <div className={_`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-xs text-gray-300 group-hover:text-white transition-colors text-center leading-tight">
                {_feature.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {_/* Stats */}
        <motion.div
          initial={_{ opacity: 0, _y: 30}}
          animate={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.8, _delay: 0.6}}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {_stats.map(_(stat, _index) => (
            <motion.div
              key={stat.label}
              initial={_{ opacity: 0, _scale: 0.8}}
              animate={_{ opacity: 1, _scale: 1}}
              transition={_{ duration: 0.5, _delay: 0.8 + index * 0.1}}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform">
                <stat.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {_stat.number}
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {_stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {_/* Scroll Indicator */}
        <motion.div
          initial={_{ opacity: 0}}
          animate={_{ opacity: 1}}
          transition={_{ duration: 1, _delay: 1.2}}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={_{ y: [0, _10, _0]}}
            transition={_{ duration: 2, _repeat: Infinity}}
            className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={_{ y: [0, _12, _0]}}
              transition={_{ duration: 2, _repeat: Infinity}}
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>

      {_/* Floating Elements */}
      <motion.div
        animate={_{ rotate: 360}}
        transition={_{ duration: 20, _repeat: Infinity, _ease: "linear"}}
        className="absolute top-20 right-20 w-32 h-32 border border-cyan-500/20 rounded-full"
      />
      <motion.div
        animate={_{ rotate: -360}}
        transition={_{ duration: 25, _repeat: Infinity, _ease: "linear"}}
        className="absolute bottom-20 left-20 w-24 h-24 border border-purple-500/20 rounded-full"
      />
    </section>
  );
}