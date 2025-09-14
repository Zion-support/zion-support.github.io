import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, Shield, Brain, Rocket, TrendingUp, Users, Award, Globe } from 'lucide-react';

const UltimatePromotionBanner2026 = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-lg animate-bounce"></div>
      <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-gradient-to-r from-pink-400/20 to-blue-400/20 rounded-full blur-md animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-yellow-400/30">
            <Star className="w-6 h-6 text-yellow-400 mr-3 animate-spin" />
            <span className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              🚀 2026 FUTURE TECH PREVIEW
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
            The Future is Here
          </h1>
          
          <p className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
            Discover the revolutionary technologies and AI breakthroughs that will define 2026 
            and transform every aspect of business and society.
          </p>
        </div>

        {/* Featured Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* AGI Breakthrough */}
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/30 hover:border-blue-300/50 transition-all duration-500 group hover:scale-105">
            <div className="flex items-center mb-6">
              <Brain className="w-10 h-10 text-blue-400 mr-4" />
              <h3 className="text-xl font-bold">AGI Revolution</h3>
            </div>
            <p className="text-gray-200 mb-6 text-sm leading-relaxed">
              Artificial General Intelligence breakthroughs that will reshape human-AI collaboration forever.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-blue-500/30 px-3 py-2 rounded-full font-medium">Coming 2026</span>
              <div className="w-8 h-8 bg-blue-500/30 rounded-full flex items-center justify-center group-hover:bg-blue-500/50 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Quantum AI */}
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30 hover:border-purple-300/50 transition-all duration-500 group hover:scale-105">
            <div className="flex items-center mb-6">
              <Zap className="w-10 h-10 text-purple-400 mr-4" />
              <h3 className="text-xl font-bold">Quantum AI</h3>
            </div>
            <p className="text-gray-200 mb-6 text-sm leading-relaxed">
              Quantum-enhanced artificial intelligence delivering unprecedented computational power and insights.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-purple-500/30 px-3 py-2 rounded-full font-medium">Revolutionary</span>
              <div className="w-8 h-8 bg-purple-500/30 rounded-full flex items-center justify-center group-hover:bg-purple-500/50 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Autonomous Systems */}
          <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-8 border border-green-400/30 hover:border-green-300/50 transition-all duration-500 group hover:scale-105">
            <div className="flex items-center mb-6">
              <Rocket className="w-10 h-10 text-green-400 mr-4" />
              <h3 className="text-xl font-bold">Autonomous Systems</h3>
            </div>
            <p className="text-gray-200 mb-6 text-sm leading-relaxed">
              Fully autonomous business operations and self-managing systems that require zero human intervention.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-green-500/30 px-3 py-2 rounded-full font-medium">Breakthrough</span>
              <div className="w-8 h-8 bg-green-500/30 rounded-full flex items-center justify-center group-hover:bg-green-500/50 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Quantum Security */}
          <div className="bg-gradient-to-br from-pink-500/20 to-red-500/20 backdrop-blur-sm rounded-3xl p-8 border border-pink-400/30 hover:border-pink-300/50 transition-all duration-500 group hover:scale-105">
            <div className="flex items-center mb-6">
              <Shield className="w-10 h-10 text-pink-400 mr-4" />
              <h3 className="text-xl font-bold">Quantum Security</h3>
            </div>
            <p className="text-gray-200 mb-6 text-sm leading-relaxed">
              Unbreakable quantum-resistant security protocols protecting against next-generation cyber threats.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-pink-500/30 px-3 py-2 rounded-full font-medium">Ultimate</span>
              <div className="w-8 h-8 bg-pink-500/30 rounded-full flex items-center justify-center group-hover:bg-pink-500/50 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-white/10">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Expected Impact by 2026
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-400 mb-2">500%</div>
              <div className="text-sm text-gray-300">Productivity Increase</div>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-purple-400 mb-2">2B+</div>
              <div className="text-sm text-gray-300">Jobs Transformed</div>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-green-400 mb-2">$50T</div>
              <div className="text-sm text-gray-300">Economic Impact</div>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-pink-400 mb-2">100%</div>
              <div className="text-sm text-gray-300">Global Adoption</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full px-12 py-6 mb-8 group hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-2xl">
            <Rocket className="w-8 h-8 mr-4 group-hover:animate-bounce" />
            <span className="text-2xl font-bold text-black">Get Early Access to 2026 Content</span>
            <ArrowRight className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform duration-200" />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/blog"
              className="bg-white text-purple-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              Explore Future Content
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-900 transition-colors shadow-xl"
            >
              Join the Revolution
            </Link>
          </div>
          
          <p className="text-gray-300 mt-8 text-lg">
            Be among the first to experience the technologies that will define the next decade
          </p>
        </div>
      </div>
    </div>
  );
};

export default UltimatePromotionBanner2026;