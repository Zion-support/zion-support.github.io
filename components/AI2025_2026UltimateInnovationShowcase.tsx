'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Cpu, 
  Database, 
  Shield, 
  Globe, 
  Rocket, 
  Target,
  TrendingUp,
  Users,
  BarChart3,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Sparkles
} from 'lucide-react';

const AI2025_2026UltimateInnovationShowcase = () => {
  const [activeTab, setActiveTab] = useState('breakthroughs');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const innovations = {
    breakthroughs: [
      {
        title: "Neural Quantum Computing Fusion",
        description: "Revolutionary integration of quantum computing with neural networks, achieving 1000x processing speed improvements",
        icon: <Brain className="w-8 h-8" />,
        impact: "1000x faster processing",
        category: "Computing",
        status: "Available Now",
        link: "/ai-innovations/neural-quantum-fusion-2025"
      },
      {
        title: "Conscious AI Systems",
        description: "First generation of AI systems with self-awareness and emotional intelligence capabilities",
        icon: <Sparkles className="w-8 h-8" />,
        impact: "True AI consciousness",
        category: "AI Consciousness",
        status: "Beta Testing",
        link: "/ai-innovations/conscious-ai-systems-2025"
      },
      {
        title: "Predictive Business Intelligence",
        description: "AI that predicts market trends 6 months in advance with 95% accuracy",
        icon: <TrendingUp className="w-8 h-8" />,
        impact: "95% prediction accuracy",
        category: "Business Intelligence",
        status: "Live",
        link: "/ai-innovations/predictive-business-intelligence-2025"
      },
      {
        title: "Autonomous Code Generation",
        description: "AI that writes, tests, and deploys production-ready code automatically",
        icon: <Cpu className="w-8 h-8" />,
        impact: "90% faster development",
        category: "Software Development",
        status: "Available Now",
        link: "/ai-innovations/autonomous-code-generation-2025"
      }
    ],
    tools: [
      {
        title: "AI Content Generator Pro",
        description: "Generate high-quality content for any industry in seconds",
        icon: <Zap className="w-8 h-8" />,
        features: ["Multi-language support", "SEO optimized", "Brand voice matching"],
        pricing: "Free Trial Available",
        link: "/ai-tools/content-generator-pro-2025"
      },
      {
        title: "Quantum Analytics Dashboard",
        description: "Real-time business analytics with quantum-enhanced insights",
        icon: <BarChart3 className="w-8 h-8" />,
        features: ["Real-time data", "Predictive analytics", "Custom dashboards"],
        pricing: "Starting at $99/month",
        link: "/ai-tools/quantum-analytics-dashboard-2025"
      },
      {
        title: "AI Security Guardian",
        description: "Advanced AI-powered cybersecurity protection for enterprises",
        icon: <Shield className="w-8 h-8" />,
        features: ["Threat detection", "Automated response", "24/7 monitoring"],
        pricing: "Enterprise pricing",
        link: "/ai-tools/ai-security-guardian-2025"
      },
      {
        title: "Neural Marketing Optimizer",
        description: "AI that optimizes marketing campaigns for maximum ROI",
        icon: <Target className="w-8 h-8" />,
        features: ["Campaign optimization", "A/B testing", "ROI tracking"],
        pricing: "Starting at $199/month",
        link: "/ai-tools/neural-marketing-optimizer-2025"
      }
    ],
    predictions: [
      {
        title: "AI-Human Collaboration Revolution",
        description: "By 2026, 80% of jobs will involve AI-human collaboration",
        icon: <Users className="w-8 h-8" />,
        timeline: "2026",
        confidence: "95%",
        impact: "Transformative"
      },
      {
        title: "Quantum AI Breakthrough",
        description: "Quantum AI will solve previously unsolvable problems in medicine and climate",
        icon: <Globe className="w-8 h-8" />,
        timeline: "2025-2026",
        confidence: "90%",
        impact: "Revolutionary"
      },
      {
        title: "AI-Powered Space Exploration",
        description: "AI will enable autonomous space missions and Mars colonization planning",
        icon: <Rocket className="w-8 h-8" />,
        timeline: "2026-2027",
        confidence: "85%",
        impact: "Historic"
      },
      {
        title: "Conscious AI Integration",
        description: "Conscious AI systems will become standard in healthcare and education",
        icon: <Lightbulb className="w-8 h-8" />,
        timeline: "2026",
        confidence: "88%",
        impact: "Life-changing"
      }
    ]
  };

  const tabs = [
    { id: 'breakthroughs', label: 'Breakthrough Innovations', count: innovations.breakthroughs.length },
    { id: 'tools', label: 'AI Tools & Solutions', count: innovations.tools.length },
    { id: 'predictions', label: 'Future Predictions', count: innovations.predictions.length }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 text-yellow-400" />
            <span>2025-2026 AI Innovation Showcase</span>
            <Award className="w-4 h-4 text-yellow-400" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            The Future of AI is
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent block">
              Here Today
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover groundbreaking AI innovations, cutting-edge tools, and future predictions that will transform industries and reshape the world.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-white text-indigo-900 shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {tab.label}
              <span className="ml-2 bg-indigo-500 text-white text-xs px-2 py-1 rounded-full">
                {tab.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Content Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {innovations[activeTab as keyof typeof innovations].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Link href={item.link || '#'}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-xl text-white">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Features or Impact */}
                  <div className="space-y-3">
                    {item.features && (
                      <div className="space-y-2">
                        {item.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {item.impact && (
                      <div className="flex items-center gap-2 text-sm font-semibold text-yellow-400">
                        <TrendingUp className="w-4 h-4" />
                        <span>{item.impact}</span>
                      </div>
                    )}

                    {item.confidence && (
                      <div className="flex items-center gap-2 text-sm font-semibold text-green-400">
                        <Target className="w-4 h-4" />
                        <span>{item.confidence} confidence</span>
                      </div>
                    )}

                    {item.timeline && (
                      <div className="flex items-center gap-2 text-sm font-semibold text-blue-400">
                        <Rocket className="w-4 h-4" />
                        <span>Timeline: {item.timeline}</span>
                      </div>
                    )}

                    {/* Status or Pricing */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/20">
                      <div className="flex items-center gap-2">
                        {item.status && (
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full">
                            {item.status}
                          </span>
                        )}
                        {item.pricing && (
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full">
                            {item.pricing}
                          </span>
                        )}
                        {item.category && (
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-semibold rounded-full">
                            {item.category}
                          </span>
                        )}
                      </div>
                      <ArrowRight className="w-5 h-5 text-white group-hover:text-yellow-400 transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Join thousands of companies already using our AI innovations to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/ai-solutions"
                className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Explore AI Solutions
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-900 transition-all duration-300 flex items-center gap-2"
              >
                <Users className="w-5 h-5" />
                Schedule Demo
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AI2025_2026UltimateInnovationShowcase;