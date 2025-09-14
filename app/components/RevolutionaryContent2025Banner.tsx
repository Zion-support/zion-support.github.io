import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Download, FileText, TrendingUp, Users, Zap, Star, Award, Target } from 'lucide-react';

const RevolutionaryContent2025Banner = () => {
  return (
    <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-400 to-cyan-400 text-black rounded-full px-8 py-3 mb-8 font-bold text-lg">
            <Star className="w-6 h-6 mr-3" />
            🚀 REVOLUTIONARY 2025 AI CONTENT COLLECTION
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Transform Your Business with AI
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-5xl mx-auto leading-relaxed">
            Discover the latest AI breakthroughs, implementation strategies, and real-world success stories. 
            Join industry leaders achieving 400-800% ROI with cutting-edge AI solutions.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white border-opacity-20">
            <div className="text-4xl mb-4">💰</div>
            <div className="text-4xl font-bold text-emerald-400 mb-2">$2.3B+</div>
            <div className="text-gray-200">Cost Savings Achieved</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white border-opacity-20">
            <div className="text-4xl mb-4">📈</div>
            <div className="text-4xl font-bold text-cyan-400 mb-2">600%</div>
            <div className="text-gray-200">Efficiency Improvement</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white border-opacity-20">
            <div className="text-4xl mb-4">🎯</div>
            <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
            <div className="text-gray-200">System Reliability</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white border-opacity-20">
            <div className="text-4xl mb-4">⚡</div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">10x</div>
            <div className="text-gray-200">Faster Deployment</div>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - New Blog Posts */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center lg:text-left bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Latest AI Breakthrough Content
            </h2>
            <div className="space-y-6">
              {/* Generative AI Enterprise Automation */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">🤖</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-emerald-400">Generative AI Enterprise Automation Revolution</h3>
                    <p className="text-gray-200 mb-4 text-sm">
                      Discover how generative AI is transforming enterprise automation with 400-800% efficiency improvements and $500B market transformation.
                    </p>
                    <div className="flex items-center text-xs text-green-400 mb-3">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      <span>800% Efficiency Improvement</span>
                    </div>
                    <Link 
                      href="/blog/ai-2025-generative-ai-enterprise-automation-revolution"
                      className="inline-flex items-center text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* MLOps Breakthrough */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">⚙️</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-cyan-400">MLOps Breakthrough: 10x Faster Deployment</h3>
                    <p className="text-gray-200 mb-4 text-sm">
                      Learn how MLOps breakthroughs are enabling 10x faster model deployment with 99.9% reliability and 90% cost reduction.
                    </p>
                    <div className="flex items-center text-xs text-blue-400 mb-3">
                      <Zap className="w-4 h-4 mr-2" />
                      <span>10x Faster Deployment</span>
                    </div>
                    <Link 
                      href="/blog/ai-2025-machine-learning-operations-mlops-breakthrough"
                      className="inline-flex items-center text-white bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Autonomous Systems Revolution */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">🔄</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-blue-400">Next-Generation Autonomous Systems</h3>
                    <p className="text-gray-200 mb-4 text-sm">
                      Explore how autonomous systems are achieving 300-600% efficiency improvements with self-healing infrastructure and autonomous decision-making.
                    </p>
                    <div className="flex items-center text-xs text-purple-400 mb-3">
                      <Target className="w-4 h-4 mr-2" />
                      <span>600% Efficiency Gain</span>
                    </div>
                    <Link 
                      href="/blog/ai-2025-next-generation-autonomous-systems-revolution"
                      className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Case Studies & Resources */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center lg:text-left bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Success Stories & Resources
            </h2>
            <div className="space-y-6">
              {/* Financial Services Case Study */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">🏦</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-yellow-400">$500B Financial Services Transformation</h3>
                    <p className="text-gray-200 mb-4 text-sm">
                      Real case study: How a leading financial firm achieved 400% ROI and $2.3B in cost savings through comprehensive AI transformation.
                    </p>
                    <div className="flex items-center text-xs text-green-400 mb-3">
                      <Award className="w-4 h-4 mr-2" />
                      <span>400% ROI Achieved</span>
                    </div>
                    <Link 
                      href="/case-studies/ai-transformation-500b-financial-services"
                      className="inline-flex items-center text-white bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
                    >
                      Read Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* AI Implementation Guide */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📚</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-purple-400">Complete AI 2025 Implementation Guide</h3>
                    <p className="text-gray-200 mb-4 text-sm">
                      Download our comprehensive guide with proven strategies, frameworks, and step-by-step implementation plans for 400-800% ROI.
                    </p>
                    <div className="flex items-center text-xs text-orange-400 mb-3">
                      <Download className="w-4 h-4 mr-2" />
                      <span>Free Download Available</span>
                    </div>
                    <Link 
                      href="/resources/ai-2025-implementation-guide"
                      className="inline-flex items-center text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
                    >
                      Download Guide
                      <Download className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
                <h3 className="text-xl font-bold mb-4 text-center text-emerald-400">Content Statistics</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">18+</div>
                    <div className="text-sm text-gray-200">New Articles</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">5+</div>
                    <div className="text-sm text-gray-200">Case Studies</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">10+</div>
                    <div className="text-sm text-gray-200">Resources</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">25+</div>
                    <div className="text-sm text-gray-200">Min Read Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-12 border border-white border-opacity-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of industry leaders who are already achieving extraordinary results with AI. 
            Start your transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Your AI Journey
              <ArrowRight className="w-6 h-6 ml-2 inline" />
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-emerald-900 transition-all duration-300"
            >
              Explore All Resources
              <BookOpen className="w-6 h-6 ml-2 inline" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContent2025Banner;