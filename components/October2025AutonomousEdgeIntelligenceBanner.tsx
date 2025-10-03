import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, TrendingUp, ArrowRight } from 'lucide-react';

const October2025AutonomousEdgeIntelligenceBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-left"
    >
      {/* Animated background effect */}
      <div className="text-left">
        <div className="text-left" />
      </div>

      <div className="text-left">
        {/* Header */}
        <div className="text-left">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-left"
          >
            <Cpu className="text-left" />
          </motion.div>
          <div>
            <div className="text-left">
              <Zap className="text-left" />
              <span>OCTOBER 1, 2025 - BREAKTHROUGH TECHNOLOGY<
            </div>
            <h2 className="text-left">
              Autonomous Edge Intelligence Revolution
            </h2>
          </div>
        </div>

        {/* Content */}
        <p className="text-left">
          The future of real-time AI processing is here! Discover how autonomous edge intelligence 
          delivers <span className="text-left">sub-millisecond latency<, processes 
          <span className="text-left"> 100M+ events per second<, and achieves 
          <span className="text-left"> 99.97% accuracy< while reducing cloud costs by 85%.
        </p>

        {/* Key Metrics */}
        <div className="text-left">
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
              className="text-left"
            >
              <div className="text-left">
                <metric.icon className="text-left" />
                <span className="text-left">{metric.label}<
              </div>
              <div className="text-left">{metric.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="text-left">
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
              className="text-left"
            >
              <div className="text-left" />
              <span className="text-left">{feature}<
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="text-left">
          <motion.a
            href="/blog/ai-2025-october-autonomous-edge-intelligence-breakthrough"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-left"
          >
            Read Full Article
            <ArrowRight className="text-left" />
          </motion.a>
          <motion.a
            href="/services/edge-ai-platform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-left"
          >
            Explore Edge AI Platform
            <ArrowRight className="text-left" />
          </motion.a>
        </div>

        {/* Tag */}
        <div className="text-left">
          <span className="text-left">
            <span className="text-left"><
            <span className="text-left"><
          <
          JUST PUBLISHED - FORTUNE 500 PROVEN
        </div>
      </div>
    </motion.div>
  );
};

export default October2025AutonomousEdgeIntelligenceBanner;
