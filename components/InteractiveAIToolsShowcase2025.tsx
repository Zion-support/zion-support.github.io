<<<<<<< HEAD
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain
  Zap
  Shield
  Globe
  Users
  TrendingUp,
  Play,
  Code,
  Database,
  Cpu,
  Network,
  BarChart3,
  MessageSquare,
  FileText,
  Image,
  Video,
  Music,
  Search,
  Filter,
  Settings,
  CheckCircle,
  ArrowRight,
  Star,
  ExternalLink
} from 'lucide-react';

const InteractiveAIToolsShowcase2025 = () => {
  const [activeToolsetActiveTool] = useState('ai-assistant');
  const [isVisiblesetIsVisible] = useState(false);
  const [hoveredToolsetHoveredTool] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)200);
    return () => clearTimeout(timer);
  }[]);

  const aiTools = {
    'ai-assistant': {
      name: 'AI Assistant',
      icon: Brain,
      description: 'Intelligent conversational AI that understands context and provides human-like responses',
      features: ['Natural Language 'Processing', 'Context 'Awareness', 'Multi-language 'Support', 'Real-time Learning'],
      stats: { users: '10M+'accuracy: '98.5%'languages: '50+' },
      color: 'from-blue-500 to-cyan-500'
    },
    'data-analyzer': {
      name: 'Data Analyzer',
      icon: BarChart3,
      description: 'Advanced analytics tool that processes complex datasets and generates actionable insights',
      features: ['Predictive 'Analytics', 'Real-time 'Processing', 'Visual 'Dashboards', 'Custom Reports'],
      stats: { datasets: '1B+'insights: '99.2%'speed: '10x faster' },
      color: 'from-green-500 to-emerald-500'
    },
    'content-generator': {
      name: 'Content Generator',
      icon: FileText,
      description: 'AI-powered content creation tool that generates high-quality textimagesand multimedia',
      features: ['Multi-format 'Support', 'Brand 'Consistency', 'SEO 'Optimization', 'Plagiarism Detection'],
      stats: { content: '100M+'quality: '95%'formats: '20+' },
      color: 'from-purple-500 to-pink-500'
    },
    'automation-engine': {
      name: 'Automation Engine',
      icon: Zap,
      description: 'Smart automation platform that streamlines workflows and reduces manual tasks',
      features: ['Workflow 'Automation', 'Task 'Scheduling', 'Error 'Handling', 'Performance Monitoring'],
      stats: { tasks: '50M+'efficiency: '85%'errors: '0.1%' },
      color: 'from-orange-500 to-red-500'
    },
    'security-guard': {
      name: 'Security Guard',
      icon: Shield,
      description: 'AI-powered security system that protects against threats and ensures data privacy',
      features: ['Threat 'Detection', 'Real-time 'Monitoring', 'Encryption'Compliance'],
      stats: { threats: '99.9%'uptime: '99.99%'compliance: '100%' },
      color: 'from-red-500 to-rose-500'
    },
    'search-engine': {
      name: 'Smart Search',
      icon: Search,
      description: 'Intelligent search engine that understands intent and delivers precise results',
      features: ['Semantic 'Search', 'Voice 'Search', 'Image 'Search', 'Personalization'],
      stats: { queries: '1B+'accuracy: '96%'speed: '0.1s' },
      color: 'from-indigo-500 to-blue-500'
    }
  };

  const useCases = [
    {
      title: 'E-commerce Optimization',
      description: 'Increase sales by 40% with AI-powered product recommendations and personalized shopping experiences',
      icon: TrendingUp,
      results: ['40% increase in sales'60% higher engagement'25% more conversions']
    },
    {
      title: 'Customer Support',
      description: 'Reduce response time by 80% with intelligent chatbots and automated ticket routing',
      icon: MessageSquare,
      results: ['80% faster responses'90% satisfaction rate'50% cost reduction']
    },
    {
      title: 'Content Marketing',
      description: 'Scale content production by 300% while maintaining quality and brand consistency',
      icon: FileText,
      results: ['300% more content'95% quality score'70% time savings']
    },
    {
      title: 'Data Insights',
      description: 'Uncover hidden patterns and trends in your data with advanced AI analytics',
      icon: BarChart3,
      results: ['90% faster insights'85% accuracy'200% more discoveries']
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Head of AITechStart',
      content: 'The AI tools from Zion Tech Group revolutionized our entire workflow. We saw immediate improvements in efficiency and accuracy.',
      avatar: 'AT',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'CTODataFlow Inc',
      content: 'Their automation engine saved us thousands of hours. The ROI was evident within the first week of implementation.',
      avatar: 'MG',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'VP EngineeringCloudScale',
      content: 'The security guard AI has been flawless. We\'ve had zero security incidents since implementing their solution.',
      avatar: 'DK',
      rating: 5
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Interactive AI Tools Suite
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience the power of artificial intelligence with our comprehensive suite of interactive tools designed to transform your business operations.
          </p>
        </motion.div>

        {/* AI Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {Object.entries(aiTools).map(([keytool]) => (
            <motion.button
              key={key}
              onClick={() => setActiveTool(key)}
              onMouseEnter={() => setHoveredTool(key)}
              onMouseLeave={() => setHoveredTool(null)}
              className={`relative p-6 rounded-2xl transition-all duration-300 ${
                activeTool === key
                  ? 'bg-white shadow-xl scale-105 border-2 border-indigo-200'
                  : 'bg-white/50 hover:bg-white hover:shadow-lg border border-slate-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-center">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${tool.color} flex items-center justify-center`}>
                  <tool.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">{tool.name}</h3>
              </div>
              
              {/* Hover Effect */}
              <AnimatePresence>
                {hoveredTool === key && activeTool !== key && (
                  <motion.div
                    initial={{ opacity: 0scale: 0.8 }}
                    animate={{ opacity: 1scale: 1 }}
                    exit={{ opacity: 0scale: 0.8 }}
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl"
                  />
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </motion.div>

        {/* Active Tool Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTool}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-xl mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Tool Info */}
              <div>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${aiTools[activeTool as keyof typeof aiTools].color} flex items-center justify-center mr-4`}>
                    <aiTools[activeTool as keyof typeof aiTools].icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{aiTools[activeTool as keyof typeof aiTools].name}</h3>
                    <p className="text-slate-600">{aiTools[activeTool as keyof typeof aiTools].description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {aiTools[activeTool as keyof typeof aiTools].features.map((featureindex) => (
                      <div key={index} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(aiTools[activeTool as keyof typeof aiTools].stats).map(([keyvalue]) => (
                    <div key={key} className="text-center p-3 bg-slate-50 rounded-xl">
                      <div className="text-xl font-bold text-slate-900">{value}</div>
                      <div className="text-xs text-slate-600 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Demo */}
              <div className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-2xl p-6">
                <h4 className="font-semibold text-slate-900 mb-4">Try It Live:</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm text-slate-600">AI is processing your request...</span>
                    </div>
                    <div className="text-sm text-slate-800">
                      {activeTool === 'ai-assistant' && "Hello! 'I', 'm your AI assistant. How can I help you today?"}
                      {activeTool === 'data-analyzer' && "Analyzing data patterns... Found 3 key insights in your dataset."}
                      {activeTool === 'content-generator' && "Generating content... Created 5 high-quality articles based on your requirements."}
                      {activeTool === 'automation-engine' && "Automation running... Completed 12 tasks in the last hour."}
                      {activeTool === 'security-guard' && "Security scan complete... All systems secure. No threats detected."}
                      {activeTool === 'search-engine' && "Search results: Found 1,247 relevant items in 0.1 seconds."}
                    </div>
                  </div>
                  <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center">
                    <Play className="w-4 h-4 mr-2" />
                    Start Demo
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Real-World Applications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCaseindex) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{useCase.title}</h4>
                <p className="text-slate-600 text-sm mb-4">{useCase.description}</p>
                <div className="space-y-1">
                  {useCase.results.map((resulti) => (
                    <div key={i} className="flex items-center text-sm text-green-600">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      {result}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
            What Our Users Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonialindex) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4delay: 1.0 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <span className="font-semibold text-indigo-600">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 1.2 }}
          className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Experience AI-Powered Tools?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses already using our AI tools to drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-indigo-50 transition-colors duration-300 flex items-center justify-center group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Try Free Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center justify-center group">
              <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveAIToolsShowcase2025;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
