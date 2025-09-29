import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, Target, TrendingUp, Clock } from 'lucide-react';

export default function UltimateContent2026Showcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full text-lg font-bold">
              ⭐ ULTIMATE 2026 CONTENT
            </span>
            <span className="bg-gradient-to-r from-green-400 to-teal-500 text-black px-6 py-3 rounded-full text-lg font-bold">
              🚀 BREAKTHROUGH INNOVATIONS
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            The Ultimate AI Content
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              {' '}Showcase 2026
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the most comprehensive collection of AI innovations, quantum breakthroughs, 
            and autonomous enterprise solutions that are reshaping the future of business.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <Link href="/blog/ai-autonomous-enterprise-2026" className="group block">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-indigo-400/20"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                      FEATURED ARTICLE
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Enterprise AI
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
                    AI Autonomous Enterprise 2026: Complete Business Transformation Guide
                  </h3>
                  
                  <p className="text-purple-100 text-lg mb-6 leading-relaxed">
                    Transform your enterprise into an AI-powered autonomous organization with 95% automation efficiency, 
                    $10M+ ROI, and zero-touch operations. Learn the complete roadmap for enterprise AI transformation.
                  </p>
                  
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-yellow-300" />
                      <span className="text-purple-200">25 min read</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-300" />
                      <span className="text-purple-200">4.9/5 rating</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-300">95%</div>
                        <div className="text-purple-200 text-sm">Automation</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-300">$10M+</div>
                        <div className="text-purple-200 text-sm">ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-300">24/7</div>
                        <div className="text-purple-200 text-sm">Operations</div>
                      </div>
                    </div>
                    <div className="flex items-center text-white font-bold group-hover:text-yellow-300 transition-colors">
                      Read Full Article
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Side Content */}
          <div className="space-y-6">
            <Link href="/blog/ai-quantum-optimization-2026" className="group block">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-3 py-1 rounded-full text-xs font-bold">
                    REVOLUTIONARY
                  </span>
                  <span className="text-indigo-200 text-sm">Quantum AI</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  AI Quantum Optimization 2026: 1000x Faster Computing
                </h4>
                <p className="text-indigo-100 text-sm mb-3">
                  Unlock quantum-enhanced AI optimization with 1000x performance improvements and $12M+ additional returns.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-3 text-sm">
                    <span className="text-purple-300 font-bold">1000x</span>
                    <span className="text-green-300 font-bold">$12M+</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white group-hover:text-yellow-300 transition-colors" />
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-quantum-optimization-2026" className="group block">
              <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-3 py-1 rounded-full text-xs font-bold">
                    CASE STUDY
                  </span>
                  <span className="text-green-200 text-sm">Financial Services</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  Quantum Optimization: 1000x Speed Improvement
                </h4>
                <p className="text-green-100 text-sm mb-3">
                  See how a financial services company achieved 1000x optimization speed and $12M additional returns.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-3 text-sm">
                    <span className="text-orange-300 font-bold">1000x</span>
                    <span className="text-yellow-300 font-bold">$12M</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white group-hover:text-yellow-300 transition-colors" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Content Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">AI Innovations</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Cutting-edge AI technologies and breakthrough innovations that are transforming industries.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Autonomous Enterprise AI</li>
              <li>• Quantum-Enhanced Optimization</li>
              <li>• Neural Architecture Optimization</li>
              <li>• Space Technology AI</li>
            </ul>
            <Link href="/blog" className="inline-flex items-center text-blue-400 font-semibold mt-4 hover:text-blue-300 transition-colors">
              Explore AI Content
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Success Stories</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Real-world case studies showcasing remarkable results and ROI from AI implementations.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• $10M+ ROI Transformations</li>
              <li>• 1000x Performance Improvements</li>
              <li>• 95% Automation Achievements</li>
              <li>• Fortune 500 Success Stories</li>
            </ul>
            <Link href="/case-studies" className="inline-flex items-center text-green-400 font-semibold mt-4 hover:text-green-300 transition-colors">
              View Case Studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Future Trends</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Insights into emerging AI trends and future technologies that will shape tomorrow's business.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• 2026 AI Mega Trends</li>
              <li>• Quantum Computing Revolution</li>
              <li>• Autonomous Operations</li>
              <li>• Sustainability AI</li>
            </ul>
            <Link href="/blog" className="inline-flex items-center text-purple-400 font-semibold mt-4 hover:text-purple-300 transition-colors">
              Explore Trends
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-black">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-6 text-gray-800">
              Join thousands of companies already using our AI solutions to achieve breakthrough results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-black text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-black hover:text-white transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}