import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, Shield, DollarSign, TrendingUp, CheckCircle, ArrowRight, Star, Globe } from "lucide-react";

export default function October2025EdgeComputingMegaShowcase() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-indigo-950 to-purple-950 py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Main Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6 shadow-2xl">
            <Star className="w-7 h-7 text-yellow-300 animate-pulse" />
            <span className="text-white font-bold text-lg uppercase tracking-wider">
              🌟 Complete Edge Computing Content Suite
            </span>
            <Star className="w-7 h-7 text-yellow-300 animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">
              Master Edge Computing
            </span>
          </h2>
          
          <p className="text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Everything you need to deploy <span className="text-yellow-300 font-bold">intelligent edge AI systems</span> at scale
          </p>
        </motion.div>

        {/* Content Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Implementation Guide Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-lg rounded-3xl p-8 border-2 border-cyan-400/30 shadow-2xl hover:shadow-cyan-500/50 transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
              <Cpu className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              📘 Implementation Guide
            </h3>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Complete technical guide to deploying edge AI infrastructure with proven frameworks and best practices
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Architecture patterns & design
                "Hardware selection & optimization
                "Security & compliance framework
                "Deployment & monitoring strategies
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/content/guides/october-2025-intelligent-edge-computing-revolution"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full hover:shadow-lg transition-all"
            >
              Read Guide
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Success Story Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-lg rounded-3xl p-8 border-2 border-pink-400/30 shadow-2xl hover:shadow-pink-500/50 transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              🏆 $12B Success Story
            </h3>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Fortune 50 telecom deploys 125,000 edge nodes achieving unprecedented results
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/10 rounded-xl p-3 text-center">
                <div className="text-2xl font-bold text-yellow-300">2,857%</div>
                <div className="text-xs text-blue-200">ROI</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 text-center">
                <div className="text-2xl font-bold text-green-300">$12B</div>
                <div className="text-xs text-blue-200">Value</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 text-center">
                <div className="text-2xl font-bold text-pink-300">99.997%</div>
                <div className="text-xs text-blue-200">Uptime</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 text-center">
                <div className="text-2xl font-bold text-cyan-300">&lt;3ms</div>
                <div className="text-xs text-blue-200">Latency</div>
              </div>
            </div>
            <a
              href="/content/case-studies/ai-2025-oct-global-telecom-edge-computing-transformation-12-billion-success"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:shadow-lg transition-all"
            >
              View Case Study
              <TrendingUp className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Services Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-orange-600/30 to-yellow-600/30 backdrop-blur-lg rounded-3xl p-8 border-2 border-yellow-400/30 shadow-2xl hover:shadow-yellow-500/50 transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center mb-6">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              🚀 Transformation Services
            </h3>
            <p className="text-blue-200 mb-6 leading-relaxed">
              End-to-end edge computing transformation with proven methodologies
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Edge infrastructure assessment
                "Architecture & design services
                "Implementation & deployment
                "Ongoing optimization & support
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold rounded-full hover:shadow-lg transition-all"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Key Benefits Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-lg rounded-3xl p-10 border-2 border-white/20 mb-12"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-8">
            🎯 Proven Business Impact
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Zap, value: "<1ms", label: "Sub-Millisecond Latency", color: "from-yellow-400 to-orange-500" },
              { icon: DollarSign, value: "75%", label: "Cost Reduction", color: "from-green-400 to-emerald-500" },
              { icon: Shield, value: "99.99%", label: "Uptime SLA", color: "from-blue-400 to-cyan-500" },
              { icon: TrendingUp, value: "420%", label: "Average ROI", color: "from-purple-400 to-pink-500" },
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${metric.color} flex items-center justify-center mx-auto mb-4`}>
                  <metric.icon className="w-9 h-9 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-sm text-blue-200">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xl text-blue-200 mb-6">
            Ready to revolutionize your infrastructure with intelligent edge computing?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-cyan-500/50"
            >
              Schedule Consultation
              <ArrowRight className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
