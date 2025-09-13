import React from 'react';
import Link from 'next/link';
import { 
  Wrench, 
  Code, 
  Database, 
  BarChart3, 
  Shield, 
  Zap, 
  Brain, 
  Target,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

export default function AIToolsUtilities2025() {
  const tools = [
    {
      category: "Development Tools",
      icon: Code,
      color: "blue",
      tools: [
        { name: "AI Code Generator", description: "Generate code with AI assistance", rating: 4.9 },
        { name: "Code Review Assistant", description: "Automated code review and suggestions", rating: 4.8 },
        { name: "API Documentation Generator", description: "Auto-generate comprehensive API docs", rating: 4.7 },
        { name: "Test Case Generator", description: "Create comprehensive test suites", rating: 4.6 }
      ]
    },
    {
      category: "Data & Analytics",
      icon: Database,
      color: "green",
      tools: [
        { name: "Data Pipeline Builder", description: "Visual data pipeline creation", rating: 4.9 },
        { name: "Predictive Analytics Engine", description: "Advanced predictive modeling", rating: 4.8 },
        { name: "Real-time Data Processor", description: "Process streaming data efficiently", rating: 4.7 },
        { name: "Data Quality Monitor", description: "Automated data quality checks", rating: 4.6 }
      ]
    },
    {
      category: "Business Intelligence",
      icon: BarChart3,
      color: "purple",
      tools: [
        { name: "ROI Calculator", description: "Calculate AI implementation ROI", rating: 4.9 },
        { name: "Performance Dashboard", description: "Real-time performance monitoring", rating: 4.8 },
        { name: "Trend Analyzer", description: "Identify business trends and patterns", rating: 4.7 },
        { name: "Report Generator", description: "Automated business reports", rating: 4.6 }
      ]
    },
    {
      category: "Security & Compliance",
      icon: Shield,
      color: "red",
      tools: [
        { name: "Security Scanner", description: "Comprehensive security vulnerability scan", rating: 4.9 },
        { name: "Compliance Checker", description: "Ensure regulatory compliance", rating: 4.8 },
        { name: "Threat Detector", description: "Real-time threat detection", rating: 4.7 },
        { name: "Audit Logger", description: "Comprehensive audit trail logging", rating: 4.6 }
      ]
    },
    {
      category: "Automation Tools",
      icon: Zap,
      color: "yellow",
      tools: [
        { name: "Workflow Automator", description: "Automate complex business workflows", rating: 4.9 },
        { name: "Task Scheduler", description: "Intelligent task scheduling", rating: 4.8 },
        { name: "Process Optimizer", description: "Optimize business processes", rating: 4.7 },
        { name: "Integration Hub", description: "Connect disparate systems", rating: 4.6 }
      ]
    },
    {
      category: "AI & ML Tools",
      icon: Brain,
      color: "pink",
      tools: [
        { name: "Model Trainer", description: "Train custom AI models", rating: 4.9 },
        { name: "Feature Engineer", description: "Automated feature engineering", rating: 4.8 },
        { name: "Model Deployer", description: "Deploy models to production", rating: 4.7 },
        { name: "Performance Monitor", description: "Monitor model performance", rating: 4.6 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 text-blue-400 border-blue-500/30",
      green: "from-green-500 to-green-600 text-green-400 border-green-500/30",
      purple: "from-purple-500 to-purple-600 text-purple-400 border-purple-500/30",
      red: "from-red-500 to-red-600 text-red-400 border-red-500/30",
      yellow: "from-yellow-500 to-yellow-600 text-yellow-400 border-yellow-500/30",
      pink: "from-pink-500 to-pink-600 text-pink-400 border-pink-500/30"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Wrench className="h-12 w-12 text-blue-400 mr-4" />
            <h1 className="text-6xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Tools & Utilities 2025
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the most powerful collection of AI tools and utilities designed to accelerate 
            your development, streamline operations, and maximize productivity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold">
              🛠️ 100+ Tools Available
            </span>
            <span className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-semibold">
              ⚡ Real-time Processing
            </span>
            <span className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold">
              🔒 Enterprise Security
            </span>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="space-y-12">
          {tools.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            const colorClasses = getColorClasses(category.color);
            
            return (
              <div key={categoryIndex} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="flex items-center mb-8">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} mr-6`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{category.category}</h2>
                    <p className="text-gray-400">Professional-grade tools for {category.category.toLowerCase()}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-yellow-400 text-sm font-medium ml-1">{tool.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Available Now</span>
                        <button className={`px-4 py-2 bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity`}>
                          Try Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our AI Tools?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our tools are designed by industry experts and battle-tested in real-world scenarios.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Ready</h3>
              <p className="text-gray-300">
                Built with enterprise-grade security, scalability, and reliability in mind.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
              <p className="text-gray-300">
                Optimized for speed and performance with real-time processing capabilities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Precision Built</h3>
              <p className="text-gray-300">
                Designed with precision and accuracy to deliver consistent, reliable results.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Supercharge Your Workflow?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of developers and businesses using our AI tools to achieve unprecedented productivity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
              Get Started Today
            </Link>
            <Link href="/ai-2025-ultimate-content-revolution" className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
              Explore More Content
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}