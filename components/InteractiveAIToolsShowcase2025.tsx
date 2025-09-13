'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Code, 
  Image, 
  FileText, 
  Video, 
  Music, 
  Search, 
  BarChart3,
  Zap,
  Sparkles,
  ArrowRight,
  Play,
  Download,
  Share2,
  Star,
  CheckCircle,
  Clock,
  Users
} from 'lucide-react';

const InteractiveAIToolsShowcase2025 = () => {
  const [activeTool, setActiveTool] = useState('ai-writer');
  const [isVisible, setIsVisible] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const aiTools = {
    'ai-writer': {
      title: "AI Content Writer",
      description: "Generate high-quality articles, blogs, and marketing copy in seconds",
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
      features: ["SEO Optimized", "Multiple Languages", "Tone Customization", "Plagiarism Free"],
      demo: {
        input: "Write a blog post about sustainable technology trends",
        output: "Sustainable technology is revolutionizing how we approach environmental challenges while driving innovation across industries. From renewable energy solutions to circular economy models, these trends are reshaping our future..."
      }
    },
    'ai-image': {
      title: "AI Image Generator",
      description: "Create stunning visuals, illustrations, and artwork with AI",
      icon: Image,
      color: "from-purple-500 to-pink-500",
      features: ["High Resolution", "Style Transfer", "Object Removal", "Background Change"],
      demo: {
        input: "Generate a futuristic cityscape at sunset",
        output: "A breathtaking futuristic metropolis with towering glass buildings reflecting golden sunlight, flying vehicles, and lush vertical gardens..."
      }
    },
    'ai-video': {
      title: "AI Video Creator",
      description: "Produce professional videos with AI-powered editing and effects",
      icon: Video,
      color: "from-red-500 to-orange-500",
      features: ["Auto Editing", "Voice Synthesis", "Motion Graphics", "Color Grading"],
      demo: {
        input: "Create a product demo video for a new smartphone",
        output: "Smooth camera movements showcasing the smartphone's sleek design, highlighting key features with dynamic text overlays and professional lighting..."
      }
    },
    'ai-music': {
      title: "AI Music Composer",
      description: "Generate original music tracks and sound effects",
      icon: Music,
      color: "from-green-500 to-teal-500",
      features: ["Multiple Genres", "Custom Length", "Mood Selection", "Royalty Free"],
      demo: {
        input: "Compose an upbeat electronic track for a tech presentation",
        output: "Energetic electronic beats with synthesized melodies, driving bass lines, and modern production techniques perfect for tech presentations..."
      }
    },
    'ai-code': {
      title: "AI Code Assistant",
      description: "Write, debug, and optimize code with AI assistance",
      icon: Code,
      color: "from-indigo-500 to-purple-500",
      features: ["Multi Language", "Bug Detection", "Code Review", "Documentation"],
      demo: {
        input: "Create a React component for a user dashboard",
        output: "A responsive React dashboard component with TypeScript, featuring user statistics, charts, and interactive elements with proper state management..."
      }
    },
    'ai-analytics': {
      title: "AI Analytics Engine",
      description: "Extract insights from data with intelligent analysis",
      icon: BarChart3,
      color: "from-yellow-500 to-red-500",
      features: ["Predictive Analysis", "Data Visualization", "Trend Detection", "Custom Reports"],
      demo: {
        input: "Analyze sales data and predict next quarter performance",
        output: "Comprehensive sales analysis showing 15% growth trend, identifying top-performing products and predicting 20% increase in Q4 revenue..."
      }
    }
  };

  const currentTool = aiTools[activeTool as keyof typeof aiTools];

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setGeneratedContent(currentTool.demo.output);
    setIsGenerating(false);
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Interactive AI Tools Showcase
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Tools That Work
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the power of AI with our interactive tool demonstrations
          </p>
        </motion.div>

        {/* Tool Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
        >
          {Object.entries(aiTools).map(([key, tool]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTool(key)}
              className={`p-4 rounded-2xl transition-all duration-300 ${
                activeTool === key
                  ? 'bg-white text-slate-900 shadow-2xl transform scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <tool.icon className="w-8 h-8 mx-auto mb-2" />
              <span className="text-xs font-medium text-center block">
                {tool.title.split(' ')[1]}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tool Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
        >
          <div className="flex items-center mb-8">
            <div className={`w-16 h-16 bg-gradient-to-r ${currentTool.color} rounded-2xl flex items-center justify-center mr-6`}>
              <currentTool.icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {currentTool.title}
              </h2>
              <p className="text-gray-300 text-lg">
                {currentTool.description}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Try It Now</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Input Prompt
                  </label>
                  <textarea
                    className="w-full h-32 bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={currentTool.demo.input}
                    defaultValue={currentTool.demo.input}
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  {isGenerating ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5 mr-2" />
                      Generate Content
                    </>
                  )}
                </motion.button>
              </div>
            </div>

            {/* Output Section */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Generated Result</h3>
              <div className="bg-white/5 border border-white/20 rounded-xl p-4 h-32 overflow-y-auto">
                {generatedContent ? (
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {generatedContent}
                  </p>
                ) : (
                  <p className="text-gray-500 text-sm">
                    Click "Generate Content" to see the AI in action
                  </p>
                )}
              </div>
              
              {generatedContent && (
                <div className="flex space-x-2 mt-4">
                  <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Features */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {currentTool.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2 bg-white/5 rounded-lg p-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { icon: Users, label: "Active Users", value: "50K+" },
            { icon: Zap, label: "Generations", value: "1M+" },
            { icon: Clock, label: "Avg. Speed", value: "2.3s" },
            { icon: Star, label: "Rating", value: "4.9/5" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="group bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 border border-white/30">
              <span className="flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveAIToolsShowcase2025;