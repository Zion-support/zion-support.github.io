// import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Target, ArrowRight } from 'lucide-react';

const October2025CognitiveAutomationMasteryBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-violet-900 to-fuchsia-900 rounded-2xl p-8 md:p-12 my-8 shadow-2xl"
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(168,85,247,0.5),transparent_50%)] animate-pulse" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="bg-purple-500/20 p-3 rounded-lg"
          >
            <Brain className="w-8 h-8 text-purple-400" />
          </motion.div>
          <div>
            <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold mb-1">
              <Sparkles className="w-4 h-4" />
              <span>OCTOBER 1, 2025 - ENTERPRISE TRANSFORMATION</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Cognitive Automation Mastery
            </h2>
          </div>
        </div>

        {/* Content */}
        <p className="text-xl text-purple-100 mb-8 leading-relaxed">
          Transform your enterprise operations with cognitive automation that understands context, 
          learns from experience, and makes autonomous decisions. Achieve 
          <span className="font-bold text-purple-300"> 94% automation rates</span>, 
          <span className="font-bold text-purple-300"> $2.8B in savings</span>, and 
          <span className="font-bold text-purple-300"> 99.7% accuracy</span> across all processes.
        </p>

        {/* Key Results */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
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
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-purple-400/30 hover:border-purple-400/60 transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 text-sm font-medium">{metric.label}</span>
              </div>
              <div className="text-2xl font-bold text-white">{metric.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Industry Success Stories */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-purple-300 mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Industry Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
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
                className="bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 rounded-lg p-4 border border-purple-400/30"
              >
                <div className="text-purple-300 font-semibold mb-1">{story.industry}</div>
                <div className="text-xl font-bold text-white">{story.result}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Pillars */}
        <div className="grid md:grid-cols-4 gap-3 mb-8">
          {[
            "Neural Language Models",
            "Computer Vision Systems",
            "Predictive Analytics",
            "Decision Intelligence"
          ].map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-2 bg-white/5 rounded-lg p-3 border border-purple-400/20"
            >
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <span className="text-purple-100 text-sm font-medium">{tech}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            href="/blog/ai-2025-october-cognitive-automation-mastery"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-400 hover:to-fuchsia-400 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-purple-500/50"
          >
            Discover Cognitive Automation
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="/services/cognitive-automation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all border-2 border-purple-400/50 backdrop-blur-sm"
          >
            View Platform
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Status Badge */}
        <div className="mt-6 inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
          </span>
          NEW CONTENT - 500+ ENTERPRISE DEPLOYMENTS
        </div>
      </div>
    </motion.div>
  );
};

export default October2025CognitiveAutomationMasteryBanner;
