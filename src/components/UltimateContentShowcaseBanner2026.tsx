import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Users, Clock, Play, BookOpen, Zap } from 'lucide-react';

const UltimateContentShowcaseBanner2026 = () => {
  const features = [
    { icon: BookOpen, text: "500+ Expert Articles" },
    { icon: Play, text: "100+ Video Tutorials" },
    { icon: Users, text: "50+ Industry Experts" },
    { icon: TrendingUp, text: "95% Success Rate" }
  ];

  const stats = [
    { number: "2M+", label: "Monthly Readers" },
    { number: "500+", label: "Published Articles" },
    { number: "50+", label: "Expert Authors" },
    { number: "95%", label: "Reader Satisfaction" }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/tech-pattern.svg')] opacity-5"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-500/20 rounded-full animate-pulse delay-2000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-4 py-2">
                <Zap className="h-4 w-4 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">New Content Available</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Ultimate Content
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Showcase 2026
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Discover the most comprehensive collection of AI insights, breakthrough technologies, 
                and revolutionary innovations that are reshaping our world. From quantum computing 
                to neural interfaces, explore the future today.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-3">
                  <feature.icon className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300 text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/ai-2026-ultimate-content-hub"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Content Hub
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="/revolutionary-tech-insights-2026"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <Play className="h-5 w-5" />
                Watch Insights
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4 text-green-400" />
                <span>2M+ Readers</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>Updated Daily</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Content */}
          <div className="relative">
            {/* Main Content Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">Featured Content</h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 text-sm font-medium">4.9</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">AI Consciousness Breakthrough 2026</h4>
                    <p className="text-gray-300 text-sm mb-3">Revolutionary advances in AI consciousness that are reshaping how we interact with intelligent systems.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-400 text-sm">8 min read</span>
                      <span className="text-gray-400 text-sm">125K views</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Quantum Business Automation</h4>
                    <p className="text-gray-300 text-sm mb-3">Complete guide to implementing quantum-powered automation in your enterprise.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-400 text-sm">12 min read</span>
                      <span className="text-gray-400 text-sm">98K views</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Neural Interface Implementation</h4>
                    <p className="text-gray-300 text-sm mb-3">Step-by-step guide to integrating neural interfaces in your organization.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-400 text-sm">15 min read</span>
                      <span className="text-gray-400 text-sm">156K views</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg p-4 transform rotate-3">
              <div className="text-white text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Articles</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-4 transform -rotate-3">
              <div className="text-white text-center">
                <div className="text-2xl font-bold">2M+</div>
                <div className="text-sm">Readers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcaseBanner2026;