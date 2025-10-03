import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, TrendingUp, ArrowRight } from 'lucide-react';

const October2025AutonomousEdgeIntelligenceBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 rounded-2xl p-8 md:p-12 my-8 shadow-2xl"
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.5),transparent_50%)] animate-pulse" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="bg-cyan-500/20 p-3 rounded-lg"
          >
            <Cpu className="w-8 h-8 text-cyan-400" />
          </motion.div>
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold mb-1">
              <Zap className="w-4 h-4" />
              <span>OCTOBER 1, 2025 - BREAKTHROUGH TECHNOLOGY</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Autonomous Edge Intelligence Revolution
            </h2>
          </div>
        </div>

        {/* Content */}
        <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
          The future of real-time AI processing is here! Discover how autonomous edge intelligence 
          delivers <span className="font-bold text-cyan-300">sub-millisecond latency</span>, processes 
          <span className="font-bold text-cyan-300"> 100M+ events per second</span>, and achieves 
          <span className="font-bold text-cyan-300"> 99.97% accuracy</span> while reducing cloud costs by 85%.
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "ROI", value: "847%", icon: TrendingUp },
            { label: "Latency", value: "<5ms", icon: Zap },
            { label: "Savings", value: "$4.2B", icon: TrendingUp },
            { label: "Accuracy", value: "99.97%", icon: Cpu },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/30"
            >
              <div className="flex items-center gap-2 mb-2">
                <metric.icon className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 text-sm font-medium">{metric.label}</span>
              </div>
              <div className="text-2xl font-bold text-white">{metric.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            "Neuromorphic Edge Processors
            "Federated Learning at the Edge
            "Quantum-Enhanced Edge AI"
          ].map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-cyan-400/20"
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-100 font-medium">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            href="/blog/ai-2025-october-autonomous-edge-intelligence-breakthrough"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-cyan-500/50"
          >
            Read Full Article
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="/services/edge-ai-platform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all border-2 border-cyan-400/50 backdrop-blur-sm"
          >
            Explore Edge AI Platform
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Tag */}
        <div className="mt-6 inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
          JUST PUBLISHED - FORTUNE 500 PROVEN
        </div>
      </div>
    </motion.div>
  );
};

export default October2025AutonomousEdgeIntelligenceBanner;
