import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, Brain, TrendingUp, BookOpen, FileText, Users } from 'lucide-react';

export default function NewContent2025PromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4 mr-2 text-yellow-300" />
              Fresh Content Just Released
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Discover Our Latest AI Breakthroughs
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore cutting-edge insights, revolutionary case studies, and breakthrough technologies 
              that are reshaping the future of business and AI.
            </p>
          </div>

          {/* Featured Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Blog Post 1 */}
            <Link href="/blog/ai-2025-next-gen-autonomous-systems" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <Brain className="w-8 h-8 text-yellow-300 mr-3" />
                  <span className="text-sm font-medium text-blue-100">Latest Blog</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                  Next-Generation Autonomous Systems
                </h3>
                <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                  Discover how next-generation autonomous systems are transforming business operations 
                  with neural interfaces and quantum-enhanced AI.
                </p>
                <div className="flex items-center text-yellow-300 text-sm font-medium">
                  Read More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Blog Post 2 */}
            <Link href="/blog/quantum-ai-breakthrough-2025" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-purple-300 mr-3" />
                  <span className="text-sm font-medium text-blue-100">Breakthrough</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                  Quantum AI Fusion Revolution
                </h3>
                <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                  The impossible has become possible. Quantum AI fusion technology is rewriting 
                  the rules of computing and artificial intelligence.
                </p>
                <div className="flex items-center text-purple-300 text-sm font-medium">
                  Explore <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Case Study */}
            <Link href="/case-studies/fortune-500-quantum-ai-transformation" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-green-300 mr-3" />
                  <span className="text-sm font-medium text-blue-100">Case Study</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-green-300 transition-colors">
                  $50M ROI Transformation
                </h3>
                <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                  See how a Fortune 500 company achieved unprecedented results with quantum AI 
                  implementation across their global operations.
                </p>
                <div className="flex items-center text-green-300 text-sm font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          {/* Content Categories */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-yellow-300" />
              </div>
              <h4 className="font-semibold mb-2">AI Insights</h4>
              <p className="text-sm text-blue-100">Latest research and breakthroughs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-purple-300" />
              </div>
              <h4 className="font-semibold mb-2">Case Studies</h4>
              <p className="text-sm text-blue-100">Real-world success stories</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-300" />
              </div>
              <h4 className="font-semibold mb-2">Expert Analysis</h4>
              <p className="text-sm text-blue-100">Industry expert insights</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-300" />
              </div>
              <h4 className="font-semibold mb-2">Market Trends</h4>
              <p className="text-sm text-blue-100">Future technology predictions</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Stay Ahead of the AI Revolution
              </h3>
              <p className="text-blue-100 mb-6">
                Get exclusive access to our latest content, insights, and breakthrough technologies. 
                Join thousands of forward-thinking professionals who are already transforming their businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/blog" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore All Content
                </Link>
                <Link 
                  href="/newsletter" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Subscribe to Updates
                </Link>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center mt-12">
            <p className="text-blue-100 text-sm mb-4">Trusted by industry leaders</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold">Fortune 500</div>
              <div className="text-2xl font-bold">Startups</div>
              <div className="text-2xl font-bold">Enterprises</div>
              <div className="text-2xl font-bold">Innovators</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}