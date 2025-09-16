import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Zap, Shield, Brain, Rocket } from 'lucide-react';

const NewContentPromotionBanner2026: React.FC = () => {
  const newContentItems = [
    {
      title: "Metaverse AI Integration",
      description: "The Future of Digital Reality",
      icon: <Brain className="w-6 h-6" />,
      category: "Metaverse Technology",
      featured: true
    },
    {
      title: "Autonomous Business Operations",
      description: "AI That Runs Your Company",
      icon: <Zap className="w-6 h-6" />,
      category: "Business AI",
      featured: true
    },
    {
      title: "AI-Powered Cybersecurity",
      description: "Ultimate Digital Defense",
      icon: <Shield className="w-6 h-6" />,
      category: "Cybersecurity",
      featured: true
    },
    {
      title: "AI-Driven Space Exploration",
      description: "The Next Frontier",
      icon: <Rocket className="w-6 h-6" />,
      category: "Space Technology",
      featured: true
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 mb-6">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-white">NEW CONTENT ALERT</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">AI Content</span>
            <br />
            Just Dropped
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover the latest breakthroughs in AI technology, from metaverse integration to autonomous business operations. 
            Stay ahead of the curve with our cutting-edge insights and revolutionary solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore All Content
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            
            <Link
              to="/comprehensive-tech-insights-2026"
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              View Tech Insights
            </Link>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {newContentItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl">
                  {item.icon}
                </div>
                {item.featured && (
                  <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold rounded-full">
                    FEATURED
                  </div>
                )}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-300 text-sm mb-3">
                {item.description}
              </p>
              
              <div className="text-xs text-purple-300 font-medium">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">7+</div>
              <div className="text-gray-300">New Articles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">5</div>
              <div className="text-gray-300">Featured Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-300">Cutting-Edge Content</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full mb-4">
            <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
            <span className="text-sm font-medium text-green-300">TRENDING NOW</span>
          </div>
          
          <p className="text-gray-300 mb-6">
            Join thousands of tech leaders who are already exploring these revolutionary AI insights
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/newsletter-signup"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
            >
              Subscribe for Updates
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-green-400/50 text-green-300 font-semibold rounded-full hover:bg-green-400/10 transition-all duration-300"
            >
              Get Custom Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2026;