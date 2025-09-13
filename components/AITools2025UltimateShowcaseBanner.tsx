import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code, Zap, Brain, Settings, BarChart3, Shield, Sparkles } from 'lucide-react';

export default function AITools2025UltimateShowcaseBanner() {
  const tools = [
    { icon: Code, name: "Code Assistant", color: "from-blue-400 to-blue-600" },
    { icon: BarChart3, name: "Analytics", color: "from-green-400 to-green-600" },
    { icon: Shield, name: "Security", color: "from-red-400 to-red-600" },
    { icon: Settings, name: "Automation", color: "from-purple-400 to-purple-600" },
    { icon: Brain, name: "Intelligence", color: "from-indigo-400 to-indigo-600" },
    { icon: Zap, name: "Performance", color: "from-orange-400 to-orange-600" }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-purple-600/30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Ultimate AI Tools Collection 2025
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                AI Tools 2025
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Ultimate Showcase
                </span>
              </h2>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Explore the most advanced AI tools and platforms that are revolutionizing how businesses operate, innovate, and grow in 2025.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/ai-tools-2025-ultimate-showcase"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Explore AI Tools
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                  Try Free Demo
                </button>
              </div>
            </div>
            
            {/* Visual Elements */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                {/* AI Tools Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {tools.map((tool, index) => (
                    <div key={index} className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/30 transition-all duration-300">
                      <div className={`w-12 h-12 bg-gradient-to-r ${tool.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                        <tool.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-white font-bold text-sm mb-1">{tool.name}</h3>
                      <p className="text-blue-100 text-xs">AI Powered</p>
                    </div>
                  ))}
                </div>
                
                {/* Tool Categories */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white">50+</div>
                    <div className="text-blue-100 text-sm">AI Tools</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white">99.9%</div>
                    <div className="text-blue-100 text-sm">Uptime</div>
                  </div>
                </div>
                
                {/* Features */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
                    <span className="text-blue-100 text-sm">Code Generation & Review</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    <span className="text-blue-100 text-sm">Predictive Analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-blue-100 text-sm">Automated Workflows</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                    <span className="text-blue-100 text-sm">Security & Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}