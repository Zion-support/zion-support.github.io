import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Zap, TrendingUp, Sparkles } from 'lucide-react';

export default function October2025RealTimeIntelligenceBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-left"
    >
      {/* Animated circuit board pattern */}
      <div className="text-left">
        <svg className="text-left" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 0 50 L 50 50 L 50 0" stroke="currentColor" fill="none" strokeWidth="1" className="text-left" />
              <path d="M 50 100 L 50 50 L 100 50" stroke="currentColor" fill="none" strokeWidth="1" className="text-left" />
              <circle cx="50" cy="50" r="3" fill="currentColor" className="text-left" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Pulse effects */}
      <div className="text-left">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="text-left"
            style={{
              left: `${20 + i * 20}%`,
              top: '50%',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="text-left">
        <div className="text-left">
          {/* Icon section */}
          <div className="text-left">
            <div className="text-left">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="text-left"
              />
              <div className="text-left">
                <Brain className="text-left" />
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="text-left">
            <div className="text-left">
              <Zap className="text-left" />
              <span className="text-left">
                ⚡ Real-Time Revolution • October 2025
              <
            </div>

            <h2 className="text-left">
              Real-Time Enterprise Intelligence Systems
            </h2>

            <p className="text-left">
              Experience the future of business intelligence with <span className="text-left">sub-100ms decision-making<, 
              <span className="text-left"> 96.7% predictive accuracy<, and <span className="text-left">autonomous 
              intelligence< that transforms enterprise operations in real-time.
            </p>

            {/* Key highlights */}
            <div className="text-left">
              <div className="text-left">
                <div className="text-left">
                  <Zap className="text-left" />
                  <div className="text-left">&lt;100ms</div>
                </div>
                <div className="text-left">Decision Speed</div>
              </div>
              <div className="text-left">
                <div className="text-left">96.7%</div>
                <div className="text-left">Accuracy</div>
              </div>
              <div className="text-left">
                <div className="text-left">400%+</div>
                <div className="text-left">First Year ROI</div>
              </div>
              <div className="text-left">
                <div className="text-left">$47M+</div>
                <div className="text-left">Proven Savings</div>
              </div>
            </div>

            {/* Industry success badges */}
            <div className="text-left">
              <span className="text-left">
                🏦 Financial Services
              <
              <span className="text-left">
                🛒 Retail & E-commerce
              <
              <span className="text-left">
                🏥 Healthcare
              <
              <span className="text-left">
                🏭 Manufacturing
              <
            </div>

            {/* CTA buttons */}
            <div className="text-left">
              <Link
                to="/blog/ai-2025-oct-real-time-enterprise-intelligence"
                className="text-left"
              >
                Explore the Technology
                <Sparkles className="text-left" />
              </Link>
              <Link
                to="/contact"
                className="text-left"
              >
                Schedule Demo
                <TrendingUp className="text-left" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent with animated gradient */}
      <motion.div
        className="text-left"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear
        }}
      />
    </motion.div>
  );
}
