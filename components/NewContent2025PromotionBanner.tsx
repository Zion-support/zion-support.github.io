import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, TrendingUp, BookOpen, Users, Target } from 'lucide-react';

const NewContent2025PromotionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Header */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-semibold">
              <Star className="w-4 h-4 fill-current" />
              <span>NEW CONTENT 2025</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary AI Content
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the latest breakthroughs in AI, quantum computing, and business transformation. 
            Our comprehensive 2025 content library features cutting-edge insights, real-world case studies, 
            and actionable implementation guides.
          </p>

          {/* Content Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Blog Posts */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4 mx-auto">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Latest Blog Posts</h3>
              <ul className="text-gray-200 space-y-2 text-left">
                <li className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>Generative AI Business Transformation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>Quantum Computing Applications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>AI Automation Revolution</span>
                </li>
              </ul>
            </div>

            {/* Case Studies */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl mb-4 mx-auto">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Success Stories</h3>
              <ul className="text-gray-200 space-y-2 text-left">
                <li className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span>500% Manufacturing Productivity</span>
                </li>
                <li className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span>$75M Annual Cost Savings</span>
                </li>
                <li className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span>Enterprise AI Transformation</span>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl mb-4 mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Implementation Guides</h3>
              <ul className="text-gray-200 space-y-2 text-left">
                <li className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-orange-400" />
                  <span>Complete AI Implementation Checklist</span>
                </li>
                <li className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-orange-400" />
                  <span>ROI Calculation Tools</span>
                </li>
                <li className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-orange-400" />
                  <span>Best Practices Guide</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">25+</div>
              <div className="text-gray-300">New Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">15+</div>
              <div className="text-gray-300">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">10+</div>
              <div className="text-gray-300">Implementation Guides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">500%</div>
              <div className="text-gray-300">Avg. ROI</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/blog"
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>Explore All Content</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/case-studies"
              className="group bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>View Case Studies</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Additional Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-300">
            <Link href="/resources" className="hover:text-yellow-400 transition-colors flex items-center space-x-1">
              <BookOpen className="w-4 h-4" />
              <span>Resources</span>
            </Link>
            <Link href="/webinars" className="hover:text-yellow-400 transition-colors flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>Webinars</span>
            </Link>
            <Link href="/newsletter" className="hover:text-yellow-400 transition-colors flex items-center space-x-1">
              <Zap className="w-4 h-4" />
              <span>Newsletter</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-400/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-blue-400/20 rounded-full animate-pulse delay-500"></div>
    </div>
  );
};

export default NewContent2025PromotionBanner;