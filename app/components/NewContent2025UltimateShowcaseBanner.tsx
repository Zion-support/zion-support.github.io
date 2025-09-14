'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Brain, Cpu, Database, Shield, Zap, Target } from 'lucide-react';

const NewContent2025UltimateShowcaseBanner = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-pink-500 rounded-full opacity-10 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/4 w-16 h-16 bg-cyan-500 rounded-full opacity-10 animate-pulse delay-3000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-full px-8 py-3 mb-8">
            <Sparkles className="w-6 h-6 mr-3" />
            <span className="text-lg font-bold">🌟 NEW CONTENT 2025 ULTIMATE SHOWCASE</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Revolutionary AI Content
          </h1>
          
          <p className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed">
            Discover the most advanced AI transformation guides, breakthrough technologies, 
            and success stories that are reshaping the future of enterprise operations.
          </p>
        </div>

        {/* Featured Content Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Main Features */}
          <div className="space-y-8">
            {/* Generative AI Revolution */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 group">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Generative AI Enterprise Revolution</h3>
                  <p className="text-sm opacity-80 mb-4">Ultimate Breakthrough Guide</p>
                  <p className="text-lg opacity-90 leading-relaxed">
                    Discover how generative AI is revolutionizing enterprise operations with unprecedented 
                    automation, creativity, and efficiency gains across all business functions.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">NEW</span>
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">FEATURED</span>
                </div>
                <Link href="/blog/ai-2025-generative-ai-enterprise-revolution-ultimate-breakthrough" 
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 flex items-center">
                  Read Guide <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>

            {/* Edge Computing Revolution */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 group">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Edge Computing Revolution</h3>
                  <p className="text-sm opacity-80 mb-4">Real-Time Intelligence Guide</p>
                  <p className="text-lg opacity-90 leading-relaxed">
                    Explore how edge computing enables real-time processing, reduced latency, 
                    and unprecedented scalability across enterprise environments.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">HOT</span>
                  <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">TRENDING</span>
                </div>
                <Link href="/blog/ai-2025-edge-computing-revolution-ultimate-guide" 
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 flex items-center">
                  Read Guide <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Success Stories */}
          <div className="space-y-8">
            {/* Fortune 500 Success Story */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 group">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Fortune 500 Success Story</h3>
                  <p className="text-sm opacity-80 mb-4">400% ROI Transformation</p>
                  <p className="text-lg opacity-90 leading-relaxed">
                    Learn how a Fortune 500 manufacturing company achieved 400% ROI and 90% latency 
                    reduction through comprehensive edge computing implementation.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">CASE STUDY</span>
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">400% ROI</span>
                </div>
                <Link href="/case-studies/ai-2025-fortune-500-edge-computing-transformation-ultimate-success" 
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 flex items-center">
                  Read Story <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>

            {/* Additional Success Metrics */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-6 text-center">Success Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
                  <div className="text-sm opacity-80">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
                  <div className="text-sm opacity-80">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">340%</div>
                  <div className="text-sm opacity-80">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                  <div className="text-sm opacity-80">Expert Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack Showcase */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Cutting-Edge Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Generative AI</h3>
              <p className="text-sm opacity-80">Advanced AI models for content creation and automation</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Edge Computing</h3>
              <p className="text-sm opacity-80">Real-time processing at the edge of networks</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Database className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Big Data Analytics</h3>
              <p className="text-sm opacity-80">Advanced analytics for business intelligence</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Cybersecurity</h3>
              <p className="text-sm opacity-80">Advanced security for enterprise systems</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-10 py-5 rounded-2xl font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 flex items-center justify-center group"
            >
              <Zap className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center justify-center group"
            >
              <Target className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
              View Success Stories
            </Link>
          </div>
          
          <p className="text-lg opacity-80 max-w-3xl mx-auto leading-relaxed">
            Join thousands of enterprise leaders who have transformed their organizations 
            using our proven AI strategies, implementation guides, and cutting-edge technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateShowcaseBanner;