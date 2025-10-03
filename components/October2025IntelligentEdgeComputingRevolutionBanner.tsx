import React from "react";
import { motion } from "framer-motion";
import { Zap, TrendingUp, Shield, DollarSign, CheckCircle, ArrowRight, Cpu } from "lucide-react";

export default function October2025IntelligentEdgeComputingRevolutionBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-left"
    >
      {/* Animated background elements */}
      <div className="text-left">
        <div className="text-left"></div>
        <div className="text-left"></div>
      </div>

      <div className="text-left">
        {/* Header Badge */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-left"
        >
          <div className="text-left">
            <Cpu className="text-left" style={{ animationDuration: '3s' }} />
            <span className="text-left">
              🚀 JUST PUBLISHED: OCTOBER 1, 2025 - INTELLIGENT EDGE REVOLUTION 🚀
            <
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-left"
        >
          <span className="text-left">
            Intelligent Edge Computing Revolution
          <
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-left"
        >
          Deploy AI at the edge with <span className="text-left">&lt;1ms latency<, 
          <span className="text-left"> 75% cost reduction<, and 
          <span className="text-left"> 99.99% uptime<
        </motion.p>

        {/* Key Metrics Grid */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-left"
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
              className="text-left"
            >
              <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${metric.color} flex items-center justify-center mb-4 mx-auto`}>
                <metric.icon className="text-left" />
              </div>
              <div className="text-left">
                <div className="text-left">{metric.value}</div>
                <div className="text-left">{metric.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Story Highlight */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-left"
        >
          <div className="text-left">
            <div className="text-left">
              <TrendingUp className="text-left" />
            </div>
            <h3 className="text-left">
              🏆 Fortune 50 Telecom: $12B Success Story
            </h3>
          </div>
          <div className="text-left">
            <div className="text-left">
              <div className="text-left">125,000</div>
              <div className="text-left">Edge Nodes Deployed</div>
            </div>
            <div className="text-left">
              <div className="text-left">2,857%</div>
              <div className="text-left">ROI Achieved</div>
            </div>
            <div className="text-left">
              <div className="text-left">99.997%</div>
              <div className="text-left">Network Uptime</div>
            </div>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-left"
        >
          {[
            "Ultra-low latency processing (<1ms response times)
            "75% reduction in cloud bandwidth costs
            "Enhanced privacy & regulatory compliance
            "99.99% uptime with edge redundancy
            "Real-time AI inference at the edge
            "Zero-trust security architecture
          ].map((feature, index) => (
            <div key={index} className="text-left">
              <CheckCircle className="text-left" />
              <span className="text-left">{feature}<
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-left"
        >
          <motion.a
            href="/content/guides/october-2025-intelligent-edge-computing-revolution"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-left"
          >
            Read Complete Guide
            <ArrowRight className="text-left" />
          </motion.a>
          <motion.a
            href="/content/case-studies/ai-2025-oct-global-telecom-edge-computing-transformation-12-billion-success"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-left"
          >
            View $12B Success Story
            <TrendingUp className="text-left" />
          </motion.a>
        </motion.div>

        {/* Bottom Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-left"
        >
          <p className="text-left">
            ⚡ <span className="text-left">NEW CONTENT:< Complete implementation guide + $12B case study + transformation roadmap
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
