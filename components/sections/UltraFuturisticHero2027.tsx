import React from 'react';
import Link from 'next/link';
import {_Rocket, _Brain, _Atom, _Globe, _Zap, _Sparkles, _Shield, _Target, _Cpu, _Database, _Cloud, _Lock, _ArrowRight, _Star, _TrendingUp, _Users, _CheckCircle} from 'lucide-react';

export default function UltraFuturisticHero2027() {_const _features = [
    { icon: Brain, _text: 'AI Consciousness Evolution', _color: 'from-purple-400 to-pink-400'},
    {_icon: Atom, _text: 'Quantum Computing', _color: 'from-blue-400 to-cyan-400'},
    {_icon: Globe, _text: 'Digital Reality', _color: 'from-green-400 to-emerald-400'},
    {_icon: Shield, _text: 'Enterprise Security', _color: 'from-red-400 to-orange-400'}
  ];

  const _stats = [
    {_number: '1000+', _label: 'Happy Customers', _icon: Users, _color: 'text-cyan-400'},
    {_number: '4.9★', _label: 'Average Rating', _icon: Star, _color: 'text-purple-400'},
    {_number: '99.9%', _label: 'Uptime SLA', _icon: CheckCircle, _color: 'text-green-400'},
    {_number: '24/7', _label: 'Support', _icon: Zap, _color: 'text-pink-400'}
  ];

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {_/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {_/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={_{
            y: [0, _-20, _0], _scale: [1, _1.2, _1], _opacity: [0.3, _0.6, _0.3]}}
          transition={_{
            duration: 8, _repeat: Infinity, _ease: "easeInOut"}}
        />
        
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={_{
            y: [0, _20, _0], _scale: [1, _1.3, _1], _opacity: [0.2, _0.5, _0.2]}}
          transition={_{
            duration: 10, _repeat: Infinity, _ease: "easeInOut"}}
        />

        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={_{
            y: [0, _-30, _0], _scale: [1, _1.1, _1], _opacity: [0.4, _0.7, _0.4]}}
          transition={_{
            duration: 12, _repeat: Infinity, _ease: "easeInOut"}}
        />

        {_/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {_/* Main Heading */}
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Welcome to 2027
              </span>
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              The Future of
              <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent ml-4">
                Technology
              </span>
            </h2>
          </motion.div>

          {_/* Subtitle */}
          <motion.p
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.2}}
            className="text-xl md:text-2xl lg:text-3xl text-cyan-300 mb-12 max-w-5xl mx-auto leading-relaxed"
          >
            Experience revolutionary AI consciousness evolution, quantum computing breakthroughs, and practical micro SAAS solutions that will transform your business beyond imagination.
          </motion.p>

          {_/* CTA Buttons */}
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.4}}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <Link
              href="/2027-services-showcase"
              className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xl rounded-2xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl shadow-cyan-500/25 flex items-center justify-center space-x-3"
            >
              <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>Explore 2027 Services</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              href="/contact"
              className="px-10 py-5 border-2 border-cyan-500/50 text-cyan-400 font-bold text-xl rounded-2xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 flex items-center justify-center space-x-3"
            >
              <Sparkles className="w-6 h-6" />
              <span>Start Your Journey</span>
            </Link>
          </motion.div>

          {_/* Features Grid */}
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.6}}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {_features.map(_(feature, _index) => (
              <motion.div
                key={feature.text}
                initial={_{ opacity: 0, _scale: 0.8}}
                animate={_{ opacity: 1, _scale: 1}}
                transition={_{ duration: 0.5, _delay: 0.8 + index * 0.1}}
                className="group"
              >
                <div className="bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30">
                  <div className={_`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-center group-hover:text-cyan-400 transition-colors duration-300">
                    {_feature.text}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {_/* Stats */}
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 1.0}}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {_stats.map(_(stat, _index) => (
              <motion.div
                key={stat.label}
                initial={_{ opacity: 0, _scale: 0.8}}
                animate={_{ opacity: 1, _scale: 1}}
                transition={_{ duration: 0.5, _delay: 1.2 + index * 0.1}}
                className="text-center group"
              >
                <div className={_`text-4xl md:text-5xl font-bold mb-2 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300 ${stat.color}`}>
                  {_stat.number}
                </div>
                <div className="text-cyan-300 font-medium group-hover:text-cyan-400 transition-colors duration-300">
                  {_stat.label}
                </div>
                <div className="flex justify-center mt-2">
                  <stat.icon className={_`w-5 h-5 ${stat.color} group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {_/* Trust Indicators */}
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 1.4}}
            className="bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {_['Fortune 500', _'Tech Giants', _'Research Labs', _'Government'].map(_(trust, _index) => (
                <motion.div
                  key={trust}
                  initial={_{ opacity: 0, _x: -20}}
                  animate={_{ opacity: 1, _x: 0}}
                  transition={_{ duration: 0.5, _delay: 1.6 + index * 0.1}}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-cyan-300 font-medium">{_trust}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {_/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent pointer-events-none" />
    </section>
  );
}