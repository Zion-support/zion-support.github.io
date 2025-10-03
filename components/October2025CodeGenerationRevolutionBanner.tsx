import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Sparkles, TrendingUp, Zap } from 'lucide-react';

export default function October2025CodeGenerationRevolutionBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-left"
    >
      {/* Animated background effects */}
      <div className="text-left">
        <div className="text-left">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="text-left"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="text-left">
        <div className="text-left">
          {/* Icon section */}
          <div className="text-left">
            <div className="text-left">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear
                }}
                className="text-left"
              />
              <div className="text-left">
                <Code2 className="text-left" />
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="text-left">
            <div className="text-left">
              <Sparkles className="text-left" />
              <span className="text-left">
                🚀 October 2025 Breakthrough
              <
            </div>

            <h2 className="text-left">
              Next-Gen AI Code Generation Revolution
            </h2>

            <p className="text-left">
              Discover how AI code generation is transforming software development in October 2025 
              with <span className="text-left">94% accuracy<, <span className="text-left">10x productivity gains<, 
              and <span className="text-left">$4.2M average savings< per development team annually.
            </p>

            {/* Key metrics */}
            <div className="text-left">
              <div className="text-left">
                <div className="text-left">94%</div>
                <div className="text-left">Code Accuracy</div>
              </div>
              <div className="text-left">
                <div className="text-left">10x</div>
                <div className="text-left">Productivity</div>
              </div>
              <div className="text-left">
                <div className="text-left">87%</div>
                <div className="text-left">Faster Delivery</div>
              </div>
              <div className="text-left">
                <div className="text-left">$4.2M</div>
                <div className="text-left">Annual Savings</div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="text-left">
              <Link
                to="/blog/ai-2025-oct-next-gen-code-generation-revolution"
                className="text-left"
              >
                Read Full Article
                <TrendingUp className="text-left" />
              </Link>
              <Link
                to="/contact"
                className="text-left"
              >
                Get Started
                <Zap className="text-left" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="text-left" />
    </motion.div>
  );
}
