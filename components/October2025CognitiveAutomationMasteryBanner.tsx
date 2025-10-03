import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Target, ArrowRight } from 'lucide-react';

const October2025CognitiveAutomationMasteryBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
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
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-left"
          >
            <Brain className="text-left" />
          </motion.div>
          <div>
            <div className="text-left">
              <Sparkles className="text-left" />
              <span>OCTOBER 1, 2025 - ENTERPRISE TRANSFORMATION<
            </div>
            <h2 className="text-left">
              Cognitive Automation Mastery
            </h2>
          </div>
        </div>

        {/* Content */}
        <p className="text-left">
          Transform your enterprise operations with cognitive automation that understands context, 
          learns from experience, and makes autonomous decisions. Achieve 
          <span className="text-left"> 94% automation rates<, 
          <span className="text-left"> $2.8B in savings<, and 
          <span className="text-left"> 99.7% accuracy< across all processes.
        </p>

        {/* Key Results */}
        <div className="text-left">
          {[
            { label: "Automation", value: "94%", color: "purple" },
            { label: "ROI", value: "640%", color: "violet" },
            { label: "Savings", value: "$2.8B", color: "fuchsia" },
            { label: "Accuracy", value: "99.7%", color: "purple" },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="text-left"
            >
              <div className="text-left">
                <Target className="text-left" />
                <span className="text-left">{metric.label}<
              </div>
              <div className="text-left">{metric.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Industry Success Stories */}
        <div className="text-left">
          <h3 className="text-left">
            <Sparkles className="text-left" />
            Industry Success Stories
          </h3>
          <div className="text-left">
            {[
              { industry: "Manufacturing", result: "$2.8B saved" },
              { industry: "Financial Services", result: "97% automated" },
              { industry: "Healthcare", result: "$847M savings" },
            ].map((story, index) => (
              <motion.div
                key={story.industry}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-left"
              >
                <div className="text-left">{story.industry}</div>
                <div className="text-left">{story.result}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Pillars */}
        <div className="text-left">
          {[
            "Neural Language Models
            "Computer Vision Systems
            "Predictive Analytics
            "Decision Intelligence"
          ].map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="text-left"
            >
              <div className="text-left" />
              <span className="text-left">{tech}<
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="text-left">
          <motion.a
            href="/blog/ai-2025-october-cognitive-automation-mastery"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-left"
          >
            Discover Cognitive Automation
            <ArrowRight className="text-left" />
          </motion.a>
          <motion.a
            href="/services/cognitive-automation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-left"
          >
            View Platform
            <ArrowRight className="text-left" />
          </motion.a>
        </div>

        {/* Status Badge */}
        <div className="text-left">
          <span className="text-left">
            <span className="text-left"><
            <span className="text-left"><
          <
          NEW CONTENT - 500+ ENTERPRISE DEPLOYMENTS
        </div>
      </div>
    </motion.div>
  );
};

export default October2025CognitiveAutomationMasteryBanner;
