import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, Shield, DollarSign, TrendingUp, CheckCircle, ArrowRight, Star, Globe } from "lucide-react";

export default function October2025EdgeComputingMegaShowcase() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-left"
    >
      {/* Animated Grid Background */}
      <div className="text-left">
        <div className="text-left" style={{
          backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="text-left">
        {/* Main Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-left"
        >
          <div className="text-left">
            <Star className="text-left" />
            <span className="text-left">
              🌟 Complete Edge Computing Content Suite
            <
            <Star className="text-left" />
          </div>
          
          <h2 className="text-left">
            <span className="text-left">
              Master Edge Computing
            <
          </h2>
          
          <p className="text-left">
            Everything you need to deploy <span className="text-left">intelligent edge AI systems< at scale
          </p>
        </motion.div>

        {/* Content Cards Grid */}
        <div className="text-left">
          {/* Implementation Guide Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="text-left"
          >
            <div className="text-left">
              <Cpu className="text-left" />
            </div>
            <h3 className="text-left">
              📘 Implementation Guide
            </h3>
            <p className="text-left">
              Complete technical guide to deploying edge AI infrastructure with proven frameworks and best practices
            </p>
            <ul className="text-left">
              {[
                "Architecture patterns & design
                "Hardware selection & optimization
                "Security & compliance framework
                "Deployment & monitoring strategies
              ].map((item, i) => (
                <li key={i} className="text-left">
                  <CheckCircle className="text-left" />
                  <span className="text-left">{item}<
                </li>
              ))}
            </ul>
            <a
              href="/content/guides/october-2025-intelligent-edge-computing-revolution"
              className="text-left"
            >
              Read Guide
              <ArrowRight className="text-left" />
            </a>
          </motion.div>

          {/* Success Story Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="text-left"
          >
            <div className="text-left">
              <TrendingUp className="text-left" />
            </div>
            <h3 className="text-left">
              🏆 $12B Success Story
            </h3>
            <p className="text-left">
              Fortune 50 telecom deploys 125,000 edge nodes achieving unprecedented results
            </p>
            <div className="text-left">
              <div className="text-left">
                <div className="text-left">2,857%</div>
                <div className="text-left">ROI</div>
              </div>
              <div className="text-left">
                <div className="text-left">$12B</div>
                <div className="text-left">Value</div>
              </div>
              <div className="text-left">
                <div className="text-left">99.997%</div>
                <div className="text-left">Uptime</div>
              </div>
              <div className="text-left">
                <div className="text-left">&lt;3ms</div>
                <div className="text-left">Latency</div>
              </div>
            </div>
            <a
              href="/content/case-studies/ai-2025-oct-global-telecom-edge-computing-transformation-12-billion-success"
              className="text-left"
            >
              View Case Study
              <TrendingUp className="text-left" />
            </a>
          </motion.div>

          {/* Services Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="text-left"
          >
            <div className="text-left">
              <Globe className="text-left" />
            </div>
            <h3 className="text-left">
              🚀 Transformation Services
            </h3>
            <p className="text-left">
              End-to-end edge computing transformation with proven methodologies
            </p>
            <ul className="text-left">
              {[
                "Edge infrastructure assessment
                "Architecture & design services
                "Implementation & deployment
                "Ongoing optimization & support
              ].map((item, i) => (
                <li key={i} className="text-left">
                  <CheckCircle className="text-left" />
                  <span className="text-left">{item}<
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className="text-left"
            >
              Get Started
              <ArrowRight className="text-left" />
            </a>
          </motion.div>
        </div>

        {/* Key Benefits Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-left"
        >
          <h3 className="text-left">
            🎯 Proven Business Impact
          </h3>
          <div className="text-left">
            {[
              { icon: Zap, value: "<1ms", label: "Sub-Millisecond Latency", color: "from-yellow-400 to-orange-500" },
              { icon: DollarSign, value: "75%", label: "Cost Reduction", color: "from-green-400 to-emerald-500" },
              { icon: Shield, value: "99.99%", label: "Uptime SLA", color: "from-blue-400 to-cyan-500" },
              { icon: TrendingUp, value: "420%", label: "Average ROI", color: "from-purple-400 to-pink-500" },
            ].map((metric, index) => (
              <div key={index} className="text-left">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${metric.color} flex items-center justify-center mx-auto mb-4`}>
                  <metric.icon className="text-left" />
                </div>
                <div className="text-left">{metric.value}</div>
                <div className="text-left">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-left"
        >
          <p className="text-left">
            Ready to revolutionize your infrastructure with intelligent edge computing?
          </p>
          <div className="text-left">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-left"
            >
              Schedule Consultation
              <ArrowRight className="text-left" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
