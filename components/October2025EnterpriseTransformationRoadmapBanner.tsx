// import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Rocket, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';

const October2025EnterpriseTransformationRoadmapBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 rounded-2xl p-8 md:p-12 my-8 shadow-2xl"
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.5),transparent_50%)] animate-pulse" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            animate={{ 
              y: [0, -10, 0]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="bg-emerald-500/20 p-3 rounded-lg"
          >
            <Rocket className="w-8 h-8 text-emerald-400" />
          </motion.div>
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold mb-1">
              <BookOpen className="w-4 h-4" />
              <span>OCTOBER 1, 2025 - COMPREHENSIVE GUIDE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Enterprise AI Transformation Roadmap 2025
            </h2>
          </div>
        </div>

        {/* Content */}
        <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
          Your complete blueprint for enterprise AI transformation. Based on 
          <span className="font-bold text-emerald-300"> 500+ successful implementations</span> at 
          Fortune 500 companies, this comprehensive guide delivers 
          <span className="font-bold text-emerald-300"> 400-800% ROI</span> and proven frameworks 
          for every phase of your AI journey.
        </p>

        {/* Implementation Phases */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-emerald-300 mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            4-Phase Implementation Framework
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { phase: "Foundation", duration: "1-3 months", investment: "$5M-$15M" },
              { phase: "Pilots", duration: "4-9 months", investment: "$10M-$30M" },
              { phase: "Scale", duration: "10-18 months", investment: "$30M-$100M" },
              { phase: "Transform", duration: "19-36 months", investment: "$100M-$500M" },
            ].map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg p-4 border border-emerald-400/30"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-emerald-500/30 rounded-full flex items-center justify-center text-emerald-300 font-bold">
                    {index + 1}
                  </div>
                  <span className="text-emerald-300 font-bold">{phase.phase}</span>
                </div>
                <div className="text-sm text-emerald-200 mb-1">{phase.duration}</div>
                <div className="text-xs text-emerald-300/80">{phase.investment}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-lg font-bold text-emerald-300 mb-3">What You'll Learn</h3>
            <div className="space-y-2">
              {[
                "Strategic assessment frameworks",
                "Cloud-native AI architecture",
                "MLOps platform setup",
                "Governance & compliance",
                "ROI measurement models"
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-emerald-100"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-emerald-300 mb-3">Proven Results</h3>
            <div className="space-y-3">
              {[
                { metric: "Average ROI", value: "400-800%" },
                { metric: "Payback Period", value: "6-12 months" },
                { metric: "Cost Reduction", value: "40-70%" },
                { metric: "Revenue Increase", value: "15-35%" }
              ].map((result, index) => (
                <motion.div
                  key={result.metric}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex justify-between items-center bg-white/5 rounded-lg p-3"
                >
                  <span className="text-emerald-200">{result.metric}</span>
                  <span className="text-xl font-bold text-white">{result.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stories Preview */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { company: "Fortune 100 Retailer", result: "$2.8B saved, 840% ROI" },
            { company: "Global Bank", result: "$1.4B cost reduction" },
            { company: "Healthcare System", result: "$847M savings, 15% better outcomes" }
          ].map((story, index) => (
            <motion.div
              key={story.company}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-emerald-400/30"
            >
              <div className="text-emerald-300 font-semibold mb-2 text-sm">{story.company}</div>
              <div className="text-white font-bold">{story.result}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            href="/guides/enterprise-ai-transformation-roadmap-2025"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/50"
          >
            Download Complete Guide
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all border-2 border-emerald-400/50 backdrop-blur-sm"
          >
            Schedule Consultation
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Status Badge */}
        <div className="mt-6 inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          COMPREHENSIVE GUIDE - 500+ IMPLEMENTATIONS
        </div>
      </div>
    </motion.div>
  );
};

export default October2025EnterpriseTransformationRoadmapBanner;
