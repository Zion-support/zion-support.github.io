import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Brain, Shield, Cpu } from 'lucide-react';

const NewContentPromotionBanner2026 = () => {
  const newContent = [
    {
      id: 1,
      title: "Autonomous AI Agents Revolution",
      excerpt: "Transform your enterprise with intelligent autonomous systems",
      icon: Brain,
      category: "AI Innovation",
      featured: true
    },
    {
      id: 2,
      title: "Quantum-AI Fusion Breakthrough",
      excerpt: "Unlock unprecedented computational power",
      icon: Zap,
      category: "Quantum Computing",
      featured: true
    },
    {
      id: 3,
      title: "Neural Interface Technology",
      excerpt: "Bridge human consciousness with AI",
      icon: Cpu,
      category: "Neural Technology",
      featured: true
    },
    {
      id: 4,
      title: "Edge AI Revolution",
      excerpt: "Bring intelligence to every device",
      icon: Star,
      category: "Edge Computing",
      featured: true
    },
    {
      id: 5,
      title: "AI-Powered Cybersecurity",
      excerpt: "Next-generation digital defense",
      icon: Shield,
      category: "Cybersecurity",
      featured: true
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-400/30 mb-6">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm font-medium">NEW CONTENT 2026</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Revolutionary AI Content
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the latest breakthroughs in artificial intelligence, quantum computing, and neural technology that are reshaping our future.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newContent.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs font-semibold text-purple-300 bg-purple-500/20 px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                      {item.featured && (
                        <span className="text-xs font-semibold text-yellow-300 bg-yellow-500/20 px-2 py-1 rounded-full flex items-center">
                          <Star className="w-3 h-3 mr-1" />
                          FEATURED
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/blog"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span>Explore All Content</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              to="/services"
              className="group inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105"
            >
              <span>View Our Services</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          
          <p className="text-sm text-gray-400 mt-6">
            Join 50,000+ professionals already transforming their businesses with our AI solutions
          </p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
    </div>
  );
};

export default NewContentPromotionBanner2026;