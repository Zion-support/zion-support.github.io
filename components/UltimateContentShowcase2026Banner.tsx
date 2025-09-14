import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, FileText, Users, Award, TrendingUp, Zap } from 'lucide-react';

export default function UltimateContentShowcase2026Banner() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.3),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.3),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-full px-6 py-2 mb-6">
            <Award className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">🏆 ULTIMATE CONTENT SHOWCASE 2026</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Revolutionary Content
            <br />
            <span className="text-yellow-400">Library</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Access the most comprehensive collection of <span className="text-yellow-400 font-semibold">AI transformation guides</span>, 
            <span className="text-green-400 font-semibold"> case studies</span>, and 
            <span className="text-purple-400 font-semibold"> implementation blueprints</span> - 
            featuring <span className="text-yellow-400 font-bold">3000% ROI success stories</span>
          </p>
        </div>

        {/* Content Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Case Studies */}
          <div className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 backdrop-blur-sm rounded-xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Success Stories</h3>
                <p className="text-green-200 text-sm">3000% ROI Achievements</p>
              </div>
            </div>
            <p className="text-green-200 mb-6">
              Real-world case studies showcasing transformative AI implementations across Fortune 500 companies
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                <span className="text-green-200">Global Manufacturing: $2.4B Savings</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                <span className="text-green-200">Healthcare: 95% Treatment Success</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                <span className="text-green-200">Finance: 500% Trading Returns</span>
              </div>
            </div>
            <Link
              href="/content/case-studies"
              className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold group"
            >
              Explore Case Studies
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Implementation Guides */}
          <div className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Implementation Guides</h3>
                <p className="text-blue-200 text-sm">Step-by-Step Blueprints</p>
              </div>
            </div>
            <p className="text-blue-200 mb-6">
              Comprehensive guides for implementing cutting-edge AI technologies in your organization
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                <span className="text-blue-200">Quantum Neural Superintelligence</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                <span className="text-blue-200">Autonomous Enterprise Systems</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                <span className="text-blue-200">AI Business Intelligence</span>
              </div>
            </div>
            <Link
              href="/content/resources"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group"
            >
              Browse Guides
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Blog Articles */}
          <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Expert Insights</h3>
                <p className="text-purple-200 text-sm">Latest AI Trends & Analysis</p>
              </div>
            </div>
            <p className="text-purple-200 mb-6">
              In-depth articles covering the latest breakthroughs in AI, quantum computing, and business transformation
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span className="text-purple-200">Quantum Neural Revolution</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span className="text-purple-200">AI 2026 Predictions</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span className="text-purple-200">Business Transformation</span>
              </div>
            </div>
            <Link
              href="/content/blog"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group"
            >
              Read Articles
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Featured Content */}
        <div className="bg-gradient-to-r from-yellow-800/20 to-orange-800/20 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-yellow-500/30">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium text-black">⚡ FEATURED CONTENT</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Latest Breakthrough Content</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Quantum Neural Superintelligence</h4>
                  <p className="text-blue-200 text-sm">Ultimate Implementation Guide</p>
                </div>
              </div>
              <p className="text-blue-200 text-sm mb-4">
                Complete roadmap for implementing the most advanced AI technology ever created
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-xs text-yellow-400">
                  <Award className="w-3 h-3 mr-1" />
                  <span>3000% ROI Potential</span>
                </div>
                <Link
                  href="/content/resources/ai-2025-quantum-neural-superintelligence-implementation-ultimate-guide"
                  className="text-blue-400 hover:text-blue-300 text-sm font-semibold"
                >
                  Read Guide →
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Global Enterprise Success</h4>
                  <p className="text-green-200 text-sm">3000% ROI Case Study</p>
                </div>
              </div>
              <p className="text-green-200 text-sm mb-4">
                How a Fortune 100 company achieved $2.4B in savings through AI transformation
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-xs text-green-400">
                  <Users className="w-3 h-3 mr-1" />
                  <span>Fortune 100 Company</span>
                </div>
                <Link
                  href="/content/case-studies/ai-2025-global-enterprise-transformation-3000-roi-ultimate-success"
                  className="text-green-400 hover:text-green-300 text-sm font-semibold"
                >
                  Read Case Study →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-blue-200 text-sm">Case Studies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">200+</div>
            <div className="text-blue-200 text-sm">Implementation Guides</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">1000+</div>
            <div className="text-blue-200 text-sm">Blog Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">50K+</div>
            <div className="text-blue-200 text-sm">Downloads</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/content"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Explore All Content
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
            >
              <Users className="w-5 h-5 mr-2" />
              Get Custom Content
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="text-blue-200 text-sm">
            <p className="mb-2">🎯 <strong>Exclusive Access:</strong> Premium content library for enterprise clients</p>
            <p>📈 <strong>Proven Results:</strong> Join 1000+ companies transforming with our content</p>
          </div>
        </div>
      </div>
    </section>
  );
}