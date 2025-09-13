import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Download, Code, Brain, Zap, Target, Users, Shield, Globe } from 'lucide-react';

export default function AIToolsInteractiveShowcase2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Tools Interactive Showcase 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the most advanced AI tools and utilities through interactive demonstrations. 
              See how cutting-edge artificial intelligence can transform your workflow and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                Start Interactive Demo
              </button>
              <Link 
                href="/guides" 
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                View Implementation Guides
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Tools Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Interactive AI Tools & Utilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiTools.map((tool, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{tool.title}</h3>
                  <p className="text-gray-400 text-sm">{tool.category}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{tool.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-green-400 font-medium">{tool.status}</span>
                <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                  Try Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Demo Section */}
      <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Live AI Tool Demonstrations
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {liveDemos.map((demo, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg mr-4">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{demo.title}</h3>
                    <p className="text-gray-300 text-sm">{demo.duration}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{demo.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-medium">{demo.complexity}</span>
                  <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tool Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          AI Tool Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {toolCategories.map((category, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
              <p className="text-gray-300 mb-4">{category.description}</p>
              <div className="text-2xl font-bold text-blue-400 mb-2">{category.count}</div>
              <div className="text-gray-400 text-sm">Tools Available</div>
            </div>
          ))}
        </div>
      </div>

      {/* Integration Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Integrate AI Tools?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Get started with our comprehensive AI tool suite and transform your business operations today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              <Download className="mr-2 h-5 w-5" />
              Download Tool Suite
            </button>
            <Link 
              href="/contact" 
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center"
            >
              <Code className="mr-2 h-5 w-5" />
              Request Custom Integration
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const aiTools = [
  {
    icon: <Brain className="h-6 w-6 text-white" />,
    title: "Neural Code Generator",
    category: "Development",
    description: "Generate high-quality code using advanced neural networks with context-aware suggestions.",
    status: "Live Demo Available"
  },
  {
    icon: <Zap className="h-6 w-6 text-white" />,
    title: "Quantum Data Processor",
    category: "Data Science",
    description: "Process massive datasets using quantum-enhanced algorithms for unprecedented speed.",
    status: "Beta Testing"
  },
  {
    icon: <Target className="h-6 w-6 text-white" />,
    title: "AI Content Optimizer",
    category: "Marketing",
    description: "Automatically optimize content for SEO, engagement, and conversion rates.",
    status: "Production Ready"
  },
  {
    icon: <Users className="h-6 w-6 text-white" />,
    title: "Intelligent Chat Assistant",
    category: "Customer Service",
    description: "Advanced conversational AI that understands context and provides human-like responses.",
    status: "Live Demo Available"
  },
  {
    icon: <Shield className="h-6 w-6 text-white" />,
    title: "AI Security Scanner",
    category: "Cybersecurity",
    description: "Automatically detect vulnerabilities and security threats using machine learning.",
    status: "Production Ready"
  },
  {
    icon: <Globe className="h-6 w-6 text-white" />,
    title: "Global Analytics Engine",
    category: "Analytics",
    description: "Real-time analytics and insights across multiple data sources and platforms.",
    status: "Live Demo Available"
  }
];

const liveDemos = [
  {
    title: "Neural Code Generation in Action",
    duration: "15 minutes",
    description: "Watch as our AI generates a complete web application from natural language description.",
    complexity: "Beginner Friendly"
  },
  {
    title: "Quantum Data Processing Demo",
    duration: "20 minutes",
    description: "See how quantum algorithms can process datasets 1000x faster than traditional methods.",
    complexity: "Advanced"
  },
  {
    title: "AI Content Optimization Workshop",
    duration: "25 minutes",
    description: "Learn how to optimize your content for maximum engagement and conversion rates.",
    complexity: "Intermediate"
  },
  {
    title: "Intelligent Chatbot Configuration",
    duration: "18 minutes",
    description: "Step-by-step guide to setting up and customizing your AI chat assistant.",
    complexity: "Beginner Friendly"
  }
];

const toolCategories = [
  {
    icon: <Code className="h-10 w-10 text-white" />,
    title: "Development Tools",
    description: "AI-powered development utilities and code generation tools",
    count: "45"
  },
  {
    icon: <Brain className="h-10 w-10 text-white" />,
    title: "Machine Learning",
    description: "Advanced ML models and training utilities",
    count: "32"
  },
  {
    icon: <Target className="h-10 w-10 text-white" />,
    title: "Business Automation",
    description: "Tools for automating business processes and workflows",
    count: "67"
  },
  {
    icon: <Shield className="h-10 w-10 text-white" />,
    title: "Security & Privacy",
    description: "AI-powered security tools and privacy protection utilities",
    count: "28"
  }
];