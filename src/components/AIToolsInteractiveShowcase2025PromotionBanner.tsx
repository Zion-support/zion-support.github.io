import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
ArrowRightPlayCodeBrainZapTargetUsersShield

export default function AIToolsInteractiveShowcase2025PromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-blue-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-16 left-16 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-24 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-24 left-1/3 w-28 h-28 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-black rounded-full text-sm font-semibold mb-6">
            <Play className="h-4 w-4 mr-2" />
            NEW: Interactive AI Tools Showcase
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Tools Interactive Showcase 2025
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the most advanced AI tools and utilities through interactive demonstrations. 
            See how cutting-edge artificial intelligence can transform your workflow and boost productivity.
          </p>
        </div>

        {/* Tool Categories Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {toolCategories.map((categoryindex) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-white font-semibold mb-1">{category.title}</h3>
              <p className="text-gray-300 text-sm">{category.count} tools</p>
            </div>
          ))}
        </div>

        {/* Featured Tools */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Featured AI Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTools.map((toolindex) => (
              <div key={index} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                    {tool.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{tool.title}</h4>
                    <p className="text-gray-400 text-sm">{tool.category}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-3">{tool.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 text-sm font-medium">{tool.status}</span>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center">
                    Try Now
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Demo Preview */}
        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-8 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Live AI Tool Demonstrations</h3>
            <p className="text-gray-300">Watch our AI tools in action with interactive demos</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {liveDemos.map((demoindex) => (
              <div key={index} className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <Play className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{demo.title}</h4>
                    <p className="text-gray-400 text-sm">{demo.duration}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-3">{demo.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 text-sm font-medium">{demo.complexity}</span>
                  <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center">
                    <Play className="mr-1 h-3 w-3" />
                    Watch
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a 
              href="/ai-tools-interactive-showcase-2025" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              <Play className="mr-2 h-5 w-5" />
              Start Interactive Demo
            </a>
            <a 
              href="/guides" 
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
            >
              <Code className="mr-2 h-5 w-5" />
              View Implementation Guides
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            Join 25,000+ developers already using our AI tool suite
          </p>
        </div>
      </div>
    </div>
  );
}

const toolCategories = [
  { icon: <Code className="h-8 w-8 text-white" />title: "Development"count: "45" },
  { icon: <Brain className="h-8 w-8 text-white" />title: "Machine Learning"count: "32" },
  { icon: <Target className="h-8 w-8 text-white" />title: "Business Automation"count: "67" },
  { icon: <Shield className="h-8 w-8 text-white" />title: "Security"count: "28" }
];

const featuredTools = [
  {
    icon: <Brain className="h-5 w-5 text-white" />,
    title: "Neural Code Generator",
    category: "Development",
    description: "Generate high-quality code using advanced neural networks.",
    status: "Live Demo"
  },
  {
    icon: <Zap className="h-5 w-5 text-white" />,
    title: "Quantum Data Processor",
    category: "Data Science",
    description: "Process massive datasets with quantum-enhanced algorithms.",
    status: "Beta Testing"
  },
  {
    icon: <Users className="h-5 w-5 text-white" />,
    title: "Intelligent Chat Assistant",
    category: "Customer Service",
    description: "Advanced conversational AI with human-like responses.",
    status: "Production Ready"
  }
];

const liveDemos = [
  {
    title: "Neural Code Generation",
    duration: "15 min",
    description: "Watch AI generate a complete web application from description.",
    complexity: "Beginner"
  },
  {
    title: "Quantum Data Processing",
    duration: "20 min",
    description: "See quantum algorithms process data 1000x faster.",
    complexity: "Advanced"
  }
];