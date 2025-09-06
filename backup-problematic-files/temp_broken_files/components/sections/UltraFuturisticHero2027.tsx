import React from 'react',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield,
  Target, Cpu, Database, Cloud, Lock, ArrowRight,
  Star, TrendingUp, Users, CheckCircle
} from 'lucide-react',

export default function UltraFuturisticHero2027() {
  const features = [
    { icon: Brain, text: 'AI Consciousness Evolution', color: 'from-purple-400 to-pink-400' },
    { icon: Atom, text: 'Quantum Computing', color: 'from-blue-400 to-cyan-400' },
    { icon: Globe, text: 'Digital Reality', color: 'from-green-400 to-emerald-400' },
    { icon: Shield, text: 'Enterprise Security', color: 'from-red-400 to-orange-400' }
  ],

  const stats = [
    { number: '1000+', label: 'Happy Customers', icon: Users, color: 'text-cyan-400' },
    { number: '4.9', label: 'Average Rating', icon: Star, color: 'text-purple-400' },
    { number: '99.9%', label: 'Uptime SLA', icon: CheckCircle, color: 'text-green-400' },
    { number: '24/7', label: 'Support', icon: Zap, color: 'text-pink-400' }
  ],

  return (
    <section className=&quot;relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden&quot;>
      {/* Background Elements */}
      <div className=&quot;absolute inset-0 pointer-events-none&quot;>
        {/* Floating Orbs */}
        <motion.div,
className=&quot;absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl&quot;
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: &quot;easeInOut&quot
          }}
        />
        
        <motion.div,
className=&quot;absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl&quot;
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: &quot;easeInOut&quot
          }}
        />

        <motion.div,
className=&quot;absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl&quot;
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: &quot;easeInOut&quot
          }}
        />;
;
        {/* Grid Pattern */}
        <div className=&quot;absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)1px,transparent1px),linear-gradient(90deg,rgba(0,255,255,0.1)1px,transparent1px)] bg-[size:50px50px]&quot; />
      </div>

      <div className=&quot;max-w-7xl mx-auto relative z-10&quot;>
        <div className=&quot;text-center&quot;>
          {/* Main Heading */}
          <motion.div,
initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;mb-8&quot;          >
            <h1 className=&quot;text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight&quot;>
              <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                Welcome to 2027
              </span>
            </h1>
            <h2 className=&quot;text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6&quot;>
              The Future of
              <span className=&quot;bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent ml-4&quot;>
                Technology
              </span>
            </h2>
          </motion.div>

          {_/* Subtitle */}
          <motion.p,
initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=&quot;text-xl md:text-2xl lg:text-3xl text-cyan-300 mb-12 max-w-5xl mx-auto leading-relaxed&quot;          >
            Experience revolutionary AI consciousness evolution, quantum computing breakthroughs, and practical micro SAAS solutions that will transform your business beyond imagination.
          </motion.p>

          {_/* CTA Buttons */}
          <motion.div,
initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className=&quot;flex flex-col sm:flex-row gap-6 justify-center mb-16&quot;          >
            <Link,
href=&quot;/2027-services-showcase&quot;
              className=&quot;group px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xl rounded-2xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl shadow-cyan-500/25 flex items-center justify-center space-x-3&quot;
            >
              <Rocket className=&quot;w-6 h-6 group-hover:rotate-12 transition-transform duration-300&quot; />
              <span>Explore 2027 Services</span>
              <ArrowRight className=&quot;w-6 h-6 group-hover:translate-x-1 transition-transform duration-300&quot; />
            </a>
            
            <Link,
href=&quot;/contact&quot;
              className=&quot;px-10 py-5 border-2 border-cyan-500/50 text-cyan-400 font-bold text-xl rounded-2xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 flex items-center justify-center space-x-3&quot;
            >
              <Sparkles className=&quot;w-6 h-6&quot; />
              <span>Start Your Journey</span>
            </a>
          </motion.div>

          {_/* Features Grid */}
          <motion.div,
initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 mb-16&quot;          >
            {features.map(_(feature, index) => (
              <motion.div,
key={feature.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className=&quot;group&quot;
              >
                <div className=&quot;bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30&quot;>
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}>
                    <feature.icon className=&quot;w-8 h-8 text-white&quot; />
                  </div>
                  <h3 className=&quot;text-white font-semibold text-center group-hover:text-cyan-400 transition-colors duration-300&quot;>
                    {feature.text}                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {_/* Stats */}
          <motion.div,
initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 mb-16&quot;          >
            {stats.map(_(stat, index) => (
              <motion.div,
key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className=&quot;text-center group&quot;              >
                <div className={_`text-4xl md:text-5xl font-bold mb-2 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className=&quot;text-cyan-300 font-medium group-hover:text-cyan-400 transition-colors duration-300&quot;>
                  {stat.label}
                </div>
                <div className=&quot;flex justify-center mt-2&quot;>
                  <stat.icon className={`w-5 h-5 ${stat.color} group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`} />                </div>
              </motion.div>
            ))}
          </motion.div>

          {_/* Trust Indicators */}
          <motion.div,
initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className=&quot;bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 max-w-4xl mx-auto&quot;          >
            <h3 className=&quot;text-2xl font-bold text-white mb-6&quot;>
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Fortune 500Tech GiantsResearch LabsGovernment'].map((trust, index) => (                <motion.div,
key={trust}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  className=&quot;text-center&quot;
              {_['Fortune 500', _'Tech Giants', _'Research Labs', _'Government'].map(_(trust, index) => (
                <motion.div,
key={trust}
                  initial={_{ opacity: 0, x: -20}}
                  animate={_{ opacity: 1, x: 0}}
                  transition={_{ duration: 0.5, delay: 1.6 + index * 0.1}}
                  className="text-center"
                >
                  <div className=&quot;w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3&quot;>
                    <Shield className=&quot;w-8 h-8 text-cyan-400&quot; />
                  </div>
                  <div className=&quot;text-cyan-300 font-medium&quot;>{trust}</div>                </motion.div>
              ))}
            </div>;
          </motion.div>;
        </div>;
      </div>;
;
      {/* Bottom Glow */}
      <div className=&quot;absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent pointer-events-none&quot; />    </section>
  )}