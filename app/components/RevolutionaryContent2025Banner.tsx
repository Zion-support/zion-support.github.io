import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Users, Award, Zap, Brain, Cpu, Database } from 'lucide-react';

const RevolutionaryContent2025Banner = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30 animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <Brain className="w-5 h-5 mr-2 text-yellow-400" />
              <span className="text-sm font-medium">🧠 REVOLUTIONARY CONTENT 2025</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Revolutionary AI
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Discover cutting-edge AI solutions, quantum computing breakthroughs, and enterprise transformation strategies. 
              Join the revolution that's reshaping industries worldwide.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">340% ROI Increase</h4>
                  <p className="text-gray-300 text-sm">Proven results from our case studies</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Quantum Computing</h4>
                  <p className="text-gray-300 text-sm">Next-generation technology solutions</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Enterprise AI</h4>
                  <p className="text-gray-300 text-sm">Complete transformation strategies</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Real Success Stories</h4>
                  <p className="text-gray-300 text-sm">Fortune 500 case studies</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Explore All Content
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                View Success Stories
                <Star className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* Right Column - Content Cards */}
          <div className="space-y-6">
            {/* Featured Content Card */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-sm text-yellow-400 font-medium">FEATURED</span>
                  <h3 className="text-lg font-bold">AI Enterprise Transformation</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-sm">
                Complete guide to AI transformation in 2025. Implementation strategies, 
                real-world success stories, and proven ROI methodologies.
              </p>
              <div className="flex items-center justify-between">
                <Link 
                  href="/blog/ai-2025-enterprise-transformation-complete-guide"
                  className="text-yellow-400 hover:text-yellow-300 font-semibold text-sm"
                >
                  Read Full Guide →
                </Link>
                <div className="flex items-center text-xs text-gray-400">
                  <Users className="w-3 h-3 mr-1" />
                  2.3K readers
                </div>
              </div>
            </div>

            {/* Quantum Computing Card */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-sm text-cyan-400 font-medium">BREAKTHROUGH</span>
                  <h3 className="text-lg font-bold">Quantum Computing</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-sm">
                Explore quantum computing business applications. Discover how quantum 
                technology is revolutionizing industries and creating competitive advantages.
              </p>
              <div className="flex items-center justify-between">
                <Link 
                  href="/blog/quantum-computing-business-applications-2025"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm"
                >
                  Explore Quantum →
                </Link>
                <div className="flex items-center text-xs text-gray-400">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  1.8K views
                </div>
              </div>
            </div>

            {/* Case Study Card */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-green-500 rounded-lg flex items-center justify-center mr-3">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-sm text-emerald-400 font-medium">SUCCESS STORY</span>
                  <h3 className="text-lg font-bold">Manufacturing AI</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-sm">
                Real-world case study: How a Fortune 500 manufacturer achieved 340% ROI 
                through comprehensive AI transformation and strategic implementation.
              </p>
              <div className="flex items-center justify-between">
                <Link 
                  href="/case-studies/ai-transformation-manufacturing-success"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold text-sm"
                >
                  View Case Study →
                </Link>
                <div className="flex items-center text-xs text-gray-400">
                  <Star className="w-3 h-3 mr-1" />
                  4.9/5 rating
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-gray-300 text-sm">Projects Delivered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-cyan-400 mb-2">98%</div>
            <div className="text-gray-300 text-sm">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-400 mb-2">340%</div>
            <div className="text-gray-300 text-sm">Average ROI</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-gray-300 text-sm">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContent2025Banner;