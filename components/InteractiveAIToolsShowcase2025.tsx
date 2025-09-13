'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Code, 
  Image, 
  FileText, 
  BarChart3, 
  MessageSquare,
  Play,
  Pause,
  RotateCcw,
  Download,
  Share2,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  Zap,
  Brain,
  Target
} from 'lucide-react';

const InteractiveAIToolsShowcase2025 = () => {
  const [activeTool, setActiveTool] = useState('code-generator');
  const [isVisible, setIsVisible] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsRunning(false);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const handleRun = () => {
    setIsRunning(true);
    setProgress(0);
  };

  const handleReset = () => {
    setIsRunning(false);
    setProgress(0);
  };

  const tools = {
    'code-generator': {
      title: 'AI Code Generator',
      description: 'Generate clean, efficient code in any programming language with AI assistance.',
      icon: Code,
      color: 'blue',
      features: ['Multi-language Support', 'Error Detection', 'Code Optimization', 'Documentation'],
      demo: {
        input: 'Create a React component for a user profile card',
        output: `import React from 'react';

const UserProfileCard = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
      <div className="flex items-center space-x-4">
        <img 
          src={user.avatar} 
          alt={user.name}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-sm text-gray-500">{user.role}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;`
      }
    },
    'image-generator': {
      title: 'AI Image Generator',
      description: 'Create stunning images from text descriptions using advanced AI models.',
      icon: Image,
      color: 'purple',
      features: ['Text-to-Image', 'Style Transfer', 'High Resolution', 'Multiple Formats'],
      demo: {
        input: 'A futuristic cityscape at sunset with flying cars',
        output: 'Generated image would appear here...'
      }
    },
    'content-writer': {
      title: 'AI Content Writer',
      description: 'Generate engaging, SEO-optimized content for blogs, articles, and marketing.',
      icon: FileText,
      color: 'green',
      features: ['SEO Optimized', 'Multiple Tones', 'Plagiarism Free', 'Grammar Check'],
      demo: {
        input: 'Write a blog post about the benefits of AI in business',
        output: `# The Revolutionary Benefits of AI in Modern Business

Artificial Intelligence is transforming the business landscape at an unprecedented pace. Companies that embrace AI technology are seeing remarkable improvements in efficiency, productivity, and profitability.

## Key Benefits of AI in Business

### 1. Enhanced Productivity
AI automates repetitive tasks, allowing employees to focus on strategic initiatives that drive growth.

### 2. Improved Decision Making
Advanced analytics and machine learning provide insights that help businesses make data-driven decisions.

### 3. Cost Reduction
By automating processes and optimizing operations, AI significantly reduces operational costs.

### 4. Better Customer Experience
AI-powered chatbots and personalization engines create more engaging customer interactions.

## Conclusion
The integration of AI in business is no longer optional—it's essential for staying competitive in today's digital economy.`
      }
    },
    'data-analyzer': {
      title: 'AI Data Analyzer',
      description: 'Analyze complex datasets and generate actionable insights automatically.',
      icon: BarChart3,
      color: 'orange',
      features: ['Pattern Recognition', 'Predictive Analytics', 'Visual Reports', 'Real-time Processing'],
      demo: {
        input: 'Analyze sales data for Q4 2024',
        output: 'Sales Analysis Report:\n\n• Total Revenue: $2.4M (+15% vs Q3)\n• Top Product: AI Software Suite (35% of sales)\n• Best Performing Region: North America (42%)\n• Growth Trend: Steady 12% month-over-month\n• Recommendation: Focus on European market expansion'
      }
    },
    'chat-assistant': {
      title: 'AI Chat Assistant',
      description: 'Intelligent conversational AI that can handle customer support and inquiries.',
      icon: MessageSquare,
      color: 'pink',
      features: ['Natural Language', 'Multi-language', 'Context Aware', '24/7 Available'],
      demo: {
        input: 'How can I improve my website\'s loading speed?',
        output: 'Here are several ways to improve your website\'s loading speed:\n\n1. **Optimize Images**: Compress and use modern formats like WebP\n2. **Enable Caching**: Implement browser and server-side caching\n3. **Minify Code**: Remove unnecessary characters from CSS, JS, and HTML\n4. **Use CDN**: Distribute content across multiple servers\n5. **Optimize Database**: Clean up unused data and optimize queries\n6. **Reduce HTTP Requests**: Combine files and use sprites\n7. **Enable Gzip Compression**: Compress text-based files\n\nWould you like me to elaborate on any of these techniques?'
      }
    }
  };

  const currentTool = tools[activeTool as keyof typeof tools];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      green: 'from-green-500 to-green-600',
      orange: 'from-orange-500 to-orange-600',
      pink: 'from-pink-500 to-pink-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Bot className="w-4 h-4" />
            Interactive AI Tools Showcase 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Experience AI Tools in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Try our cutting-edge AI tools and see how they can transform your workflow. 
            Each tool is designed to boost productivity and deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool Selection */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose a Tool</h3>
            {Object.entries(tools).map(([key, tool]) => (
              <button
                key={key}
                onClick={() => setActiveTool(key)}
                className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                  activeTool === key
                    ? 'bg-white shadow-lg border-2 border-blue-500'
                    : 'bg-white/50 hover:bg-white hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getColorClasses(tool.color)} flex items-center justify-center`}>
                    <tool.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{tool.title}</h4>
                    <p className="text-sm text-gray-600">{tool.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Tool Header */}
              <div className={`bg-gradient-to-r ${getColorClasses(currentTool.color)} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <currentTool.icon className="w-8 h-8" />
                    <div>
                      <h3 className="text-2xl font-bold">{currentTool.title}</h3>
                      <p className="text-blue-100">{currentTool.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleRun}
                      disabled={isRunning}
                      className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2 disabled:opacity-50"
                    >
                      {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      {isRunning ? 'Running...' : 'Run Demo'}
                    </button>
                    <button
                      onClick={handleReset}
                      className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors duration-300"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Demo Content */}
              <div className="p-6 space-y-6">
                {/* Input Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Input Prompt
                  </label>
                  <div className="bg-gray-50 rounded-lg p-4 border">
                    <p className="text-gray-800 font-mono text-sm">
                      {currentTool.demo.input}
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                {isRunning && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Processing...</span>
                      <span>{progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${getColorClasses(currentTool.color)}`}
                        style={{ width: `${progress}%` }}
                        transition={{ duration: 0.1 }}
                      />
                    </div>
                  </div>
                )}

                {/* Output Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    AI Output
                  </label>
                  <div className="bg-gray-900 rounded-lg p-4 border min-h-[200px]">
                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
                      {progress >= 100 ? currentTool.demo.output : 'Click "Run Demo" to see AI output...'}
                    </pre>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {currentTool.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4 border-t">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Result
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    Save
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Workflow?
            </h3>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who are already using our AI tools to boost productivity and achieve better results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                View All Tools
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveAIToolsShowcase2025;