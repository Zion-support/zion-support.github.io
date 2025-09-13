import React from 'react';
import Link from 'next/link';
import { 
  Brain, 
  Zap, 
  Target, 
  Users, 
  Shield, 
  Globe, 
  TrendingUp, 
  ArrowRight,
  Code,
  Database,
  Cpu,
  Network,
  BarChart3,
  FileText,
  Image,
  Video,
  Mic,
  Eye,
  Search
} from 'lucide-react';

export default function AIToolsUltimateShowcase2025() {
  const tools = [
    {
      category: "Neural Processing",
      icon: Brain,
      color: "from-purple-500 to-purple-700",
      tools: [
        { name: "Advanced Neural Networks", description: "Deep learning models with 99.9% accuracy", status: "Available" },
        { name: "Cognitive Computing", description: "Human-like reasoning and decision making", status: "Beta" },
        { name: "Neural Architecture Search", description: "Automated neural network design", status: "Available" }
      ]
    },
    {
      category: "Quantum Computing",
      icon: Zap,
      color: "from-blue-500 to-blue-700",
      tools: [
        { name: "Quantum Neural Networks", description: "Exponential speedup for complex problems", status: "Research" },
        { name: "Quantum Machine Learning", description: "Quantum algorithms for ML tasks", status: "Beta" },
        { name: "Quantum Optimization", description: "Solve optimization problems instantly", status: "Available" }
      ]
    },
    {
      category: "Computer Vision",
      icon: Eye,
      color: "from-green-500 to-green-700",
      tools: [
        { name: "Real-time Object Detection", description: "Identify objects with 99.8% accuracy", status: "Available" },
        { name: "Facial Recognition", description: "Advanced biometric identification", status: "Available" },
        { name: "Medical Image Analysis", description: "Diagnose diseases from medical scans", status: "Beta" }
      ]
    },
    {
      category: "Natural Language",
      icon: FileText,
      color: "from-yellow-500 to-yellow-700",
      tools: [
        { name: "Advanced Language Models", description: "GPT-5 level text generation", status: "Available" },
        { name: "Real-time Translation", description: "Translate 100+ languages instantly", status: "Available" },
        { name: "Sentiment Analysis", description: "Understand emotional context", status: "Available" }
      ]
    },
    {
      category: "Audio Processing",
      icon: Mic,
      color: "from-red-500 to-red-700",
      tools: [
        { name: "Voice Synthesis", description: "Generate human-like speech", status: "Available" },
        { name: "Audio Recognition", description: "Identify sounds and music", status: "Available" },
        { name: "Real-time Transcription", description: "Convert speech to text instantly", status: "Available" }
      ]
    },
    {
      category: "Data Analytics",
      icon: BarChart3,
      color: "from-indigo-500 to-indigo-700",
      tools: [
        { name: "Predictive Analytics", description: "Forecast future trends accurately", status: "Available" },
        { name: "Anomaly Detection", description: "Identify unusual patterns in data", status: "Available" },
        { name: "Automated Reporting", description: "Generate insights automatically", status: "Available" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Tools Ultimate Showcase 2025
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto">
              Discover the most advanced AI tools and technologies that are revolutionizing industries and transforming the way we work, create, and innovate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Get Access <ArrowRight className="ml-2" />
              </Link>
              <Link 
                href="/case-studies" 
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center"
              >
                View Implementations <Target className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary AI Tools
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge AI technologies organized by category for easy discovery and implementation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tools.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1">{tool.name}</h4>
                        <p className="text-gray-300 text-sm">{tool.description}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        tool.status === 'Available' ? 'bg-green-500/20 text-green-400' :
                        tool.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {tool.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Key Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Why Choose Our AI Tools?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Enterprise Security</h3>
            <p className="text-gray-300">Bank-level encryption and security protocols</p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Proven Results</h3>
            <p className="text-gray-300">500+ successful implementations worldwide</p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Expert Support</h3>
            <p className="text-gray-300">24/7 technical support and consultation</p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Global Scale</h3>
            <p className="text-gray-300">Deploy anywhere with cloud infrastructure</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl p-12 text-center border border-blue-400/30">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already using our AI tools to achieve unprecedented results and competitive advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your AI Journey
            </Link>
            <Link 
              href="/guides" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}