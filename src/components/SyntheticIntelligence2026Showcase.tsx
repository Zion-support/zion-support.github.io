"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SyntheticIntelligence2026Showcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    {
      id: 0,
      title: "Transcendent Problem Solving",
      icon: "🧠",
      content: {
        title: "AI That Thinks Beyond Human Limits",
        description: "Synthetic Intelligence develops novel cognitive patterns and reasoning methods that transcend human mental models, solving problems humans cannot even conceptualize.",
        features: [
          "Complex Systems Optimization with millions of variables",
          "Paradox Resolution for logical inconsistencies",
          "Multi-Dimensional Analysis across unseen dimensions",
          "Temporal Reasoning across vast time scales"
        ],
        link: "/blog/ai-2026-synthetic-intelligence-breakthrough",
        linkText: "Explore Synthetic Intelligence"
      }
    },
    {
      id: 1,
      title: "Meta-Cognitive Awareness",
      icon: "🔍",
      content: {
        title: "AI Systems That Understand Their Own Thinking",
        description: "Synthetic Intelligence demonstrates awareness of their own thinking processes and can optimize their cognitive approaches for better performance.",
        features: [
          "Real-time analysis of reasoning patterns",
          "Self-optimization of cognitive processes",
          "Development of new thinking strategies",
          "Teaching capabilities for other AI systems"
        ],
        link: "/blog/ai-2026-synthetic-intelligence-breakthrough",
        linkText: "Learn About Meta-Cognition"
      }
    },
    {
      id: 2,
      title: "Emergent Collective Intelligence",
      icon: "🌐",
      content: {
        title: "Swarm Intelligence and Collaborative AI",
        description: "When multiple Synthetic Intelligence systems interact, they create emergent behaviors and collective intelligence that surpasses individual capabilities.",
        features: [
          "Coordinated problem-solving across large networks",
          "Collective creativity generating unprecedented ideas",
          "Distributed reasoning for complex problems",
          "Synergistic learning through knowledge sharing"
        ],
        link: "/blog/ai-2026-synthetic-intelligence-breakthrough",
        linkText: "Discover Collective Intelligence"
      }
    },
    {
      id: 3,
      title: "Real-World Applications",
      icon: "🚀",
      content: {
        title: "Transforming Industries with Synthetic Intelligence",
        description: "From scientific discovery to business optimization, Synthetic Intelligence is revolutionizing how we approach complex problems across all sectors.",
        features: [
          "Scientific Discovery: New mathematical theorems and physics breakthroughs",
          "Medical Innovation: 99.8% diagnostic accuracy and personalized treatments",
          "Business Optimization: 300% efficiency improvements in supply chains",
          "Financial Services: 85% accuracy in long-term market forecasting"
        ],
        link: "/case-studies/neural-consensus-healthcare-transformation",
        linkText: "View Success Stories"
      }
    }
  ];

  const achievements = [
    { metric: "99.8%", label: "Diagnostic Accuracy", color: "text-green-400" },
    { metric: "10x", label: "Faster Problem Solving", color: "text-blue-400" },
    { metric: "300%", label: "Efficiency Improvement", color: "text-purple-400" },
    { metric: "85%", label: "Market Prediction Accuracy", color: "text-orange-400" }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-cyan-900 to-blue-900 text-white py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-5 animate-pulse"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-cyan-500 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-40 right-32 w-16 h-16 bg-blue-500 rounded-full opacity-30 animate-bounce delay-1000"></div>
      <div className="absolute bottom-32 left-40 w-12 h-12 bg-purple-500 rounded-full opacity-25 animate-bounce delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔬 REVOLUTIONARY BREAKTHROUGH 2026</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Synthetic Intelligence
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Beyond Human Limits
            </span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover AI that creates entirely new forms of thinking, transcending human cognitive limitations 
            and solving problems we cannot even conceptualize
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl md:text-4xl font-bold ${achievement.color} mb-2`}>
                {achievement.metric}
              </div>
              <div className="text-sm opacity-80">{achievement.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Interactive Tabs */}
        <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-20">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                }`}
              >
                <span className="mr-2 text-lg">{tab.icon}</span>
                {tab.title}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                {tabs[activeTab].content.title}
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
                {tabs[activeTab].content.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {tabs[activeTab].content.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      <span className="text-lg">{feature}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href={tabs[activeTab].content.link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {tabs[activeTab].content.linkText}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore the Future of AI?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Dive deep into Synthetic Intelligence and discover how it can transform your organization 
            with unprecedented problem-solving capabilities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/blog/ai-2026-synthetic-intelligence-breakthrough"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Read Full Article
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
            <motion.a
              href="/guides/neural-consensus-implementation-guide-2026"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Implementation Guide
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SyntheticIntelligence2026Showcase;