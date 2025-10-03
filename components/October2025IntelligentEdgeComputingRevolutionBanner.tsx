import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, CheckCircle, ArrowRight, Cpu } from 'lucide-react';
export default function October2025IntelligentEdgeComputingRevolutionBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Badge */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg">
            <Cpu className="w-6 h-6 text-white animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-white font-bold text-sm sm:text-base uppercase tracking-wider">
              🚀 JUST PUBLISHED: OCTOBER 1, 2025 - INTELLIGENT EDGE REVOLUTION 🚀
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-6 text-white"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
            Intelligent Edge Computing Revolution
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl sm:text-2xl text-center text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Deploy AI at the edge with <span className="text-yellow-300 font-bold">&lt;1ms latency</span>, 
          <span className="text-green-300 font-bold"> 75% cost reduction</span>, and 
          <span className="text-pink-300 font-bold"> 99.99% uptime</span>
        </motion.p>

        {/* Key Metrics Grid */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {[
            { icon: Zap, label: "Sub-Millisecond", value: "<1ms Latency", color: "from-yellow-400 to-orange-500" },
            { icon: DollarSign, label: "Cost Savings", value: "$8.7M Annual", color: "from-green-400 to-emerald-500" },
            { icon: TrendingUp, label: "Success Rate", value: "94% Reduction", color: "from-blue-400 to-cyan-500" },
            { icon: Shield, label: "Uptime", value: "99.97% SLA", color: "from-purple-400 to-pink-500" },
          ].map((metric, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 border-white/20 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${metric.color} flex items-center justify-center mb-4 mx-auto`}>
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-sm text-blue-200">{metric.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Story Highlight */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-gradient-to-r from-indigo-600/40 to-purple-600/40 backdrop-blur-lg rounded-3xl p-8 mb-8 border-2 border-white/20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              🏆 Fortune 50 Telecom: $12B Success Story
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-3xl font-bold text-yellow-300">125,000</div>
              <div className="text-sm text-blue-200">Edge Nodes Deployed</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-3xl font-bold text-green-300">2,857%</div>
              <div className="text-sm text-blue-200">ROI Achieved</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-3xl font-bold text-pink-300">99.997%</div>
              <div className="text-sm text-blue-200">Network Uptime</div>
            </div>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-4 mb-10"
        >
          {[
            "Ultra-low latency processing (<1ms response times)",
            "75% reduction in cloud bandwidth costs",
            "Enhanced privacy & regulatory compliance",
            "99.99% uptime with edge redundancy",
            "Real-time AI inference at the edge",
            "Zero-trust security architecture",
          ].map((feature, index) => (
            <div key={index} className="flex items-start gap-3 bg-white/5 backdrop-blur rounded-xl p-4 hover:bg-white/10 transition-all">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-white text-base">{feature}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="/content/guides/october-2025-intelligent-edge-computing-revolution"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-yellow-500/50 transition-all"
          >
            Read Complete Guide
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="/content/case-studies/ai-2025-oct-global-telecom-edge-computing-transformation-12-billion-success"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur text-white font-bold text-lg rounded-full border-2 border-white/40 hover:bg-white/30 transition-all"
          >
            View $12B Success Story
            <TrendingUp className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Bottom Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-blue-200 text-sm">
            ⚡ <span className="font-bold text-yellow-300">NEW CONTENT:</span> Complete implementation guide + $12B case study + transformation roadmap
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
