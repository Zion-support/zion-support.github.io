// import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket, Shield, BarChart3, CheckCircle } from 'lucide-react';

const October2025AutonomousCognitionPlatformBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 rounded-2xl shadow-2xl overflow-hidden my-8 mx-4"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="relative z-10 p-8 lg:p-12">
        {/* Top Badge */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-3 bg-emerald-500/20 border-2 border-emerald-500/50 rounded-full px-6 py-3 mb-6"
        >
          <Brain className="w-6 h-6 text-emerald-400 animate-pulse" />
          <span className="text-emerald-300 font-bold text-base">
            💎 NEW: AUTONOMOUS COGNITION PLATFORM 💎
          </span>
        </motion.div>

        {/* Title Section */}
        <div className="mb-8">
          <motion.h2
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl lg:text-7xl font-black mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400">
              Autonomous Cognition
            </span>
            <br />
            <span className="text-white">Revolution 2025</span>
          </motion.h2>
          <motion.p
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-slate-300 max-w-4xl leading-relaxed"
          >
            Self-learning AI platform achieving{' '}
            <span className="text-yellow-400 font-bold">99.97% autonomous operation</span> with{' '}
            <span className="text-emerald-400 font-bold">$8.4B proven ROI</span> across{' '}
            <span className="text-cyan-400 font-bold">342 Fortune 500 companies</span>
          </motion.p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {[
            { label: 'Companies', value: '342', unit: 'Fortune 500', color: 'from-blue-400 to-cyan-400' },
            { label: 'ROI', value: '$8.4B', unit: 'Proven Value', color: 'from-emerald-400 to-green-400' },
            { label: 'Autonomy', value: '99.97%', unit: 'Self-Operating', color: 'from-purple-400 to-pink-400' },
            { label: 'Uptime', value: '99.999%', unit: 'Reliability', color: 'from-yellow-400 to-orange-400' },
            { label: 'Speed', value: '10,000x', unit: 'Faster', color: 'from-red-400 to-pink-400' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className={`text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-slate-400 text-xs">{stat.unit}</div>
            </motion.div>
          ))}
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            {
              icon: Brain,
              title: 'Autonomous Learning',
              description: 'Self-improving algorithms that adapt and optimize without human intervention',
              color: 'text-purple-400',
            },
            {
              icon: Shield,
              title: 'Enterprise Security',
              description: 'Military-grade encryption with zero-trust architecture and SOC 2 Type II compliance',
              color: 'text-emerald-400',
            },
            {
              icon: Rocket,
              title: 'Instant Deployment',
              description: 'Production-ready in 48 hours with complete integration and migration support',
              color: 'text-cyan-400',
            },
            {
              icon: BarChart3,
              title: 'Real-Time Analytics',
              description: 'Comprehensive dashboards with predictive insights and automated reporting',
              color: 'text-yellow-400',
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:from-white/10 hover:to-white/15 transition-all duration-300"
            >
              <feature.icon className={`w-10 h-10 ${feature.color} mb-3`} />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Success Stories */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-xl p-6 mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <CheckCircle className="w-7 h-7 text-emerald-400" />
            Proven Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { company: 'Global Manufacturing Leader', savings: '$2.8B', improvement: '94% efficiency' },
              { company: 'Fortune 100 Retailer', savings: '$3.2B', improvement: '87% cost reduction' },
              { company: 'Tech Giant Enterprise', savings: '$2.4B', improvement: '99.9% uptime' },
            ].map((story, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-4">
                <div className="text-emerald-400 font-bold mb-2">{story.company}</div>
                <div className="text-white text-xl font-bold">{story.savings}</div>
                <div className="text-slate-400 text-sm">{story.improvement}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex flex-wrap gap-4"
        >
          <button className="group bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white font-bold px-10 py-5 rounded-xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 text-lg">
            <span className="flex items-center gap-3">
              Start Free Trial
              <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white font-bold px-10 py-5 rounded-xl transition-all duration-300 text-lg">
            View Technical Specs
          </button>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold px-10 py-5 rounded-xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 text-lg">
            Contact Sales Team
          </button>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-8 pt-6 border-t border-white/20 flex flex-wrap gap-6 text-slate-300"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm">Available globally</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm">24/7 enterprise support</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-sm">SOC 2 Type II certified</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default October2025AutonomousCognitionPlatformBanner;
