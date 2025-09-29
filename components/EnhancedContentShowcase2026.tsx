import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, Star, TrendingUp, Zap, Target, Award } from 'lucide-react';

export default function EnhancedContentShowcase2026() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              ✨ ENHANCED 2026 CONTENT
            </span>
            <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              BREAKTHROUGH INSIGHTS
            </span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI innovations, transformation guides, and real-world success stories 
            that are reshaping businesses in 2026. From quantum computing to autonomous operations.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Main Featured Article */}
          <div className="lg:col-span-2">
            <Link href="/blog/ai-2026-revolutionary-breakthroughs" className="group">
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-indigo-200">
                <div className="relative h-80 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600">
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-20 h-20 mx-auto mb-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <Zap className="w-10 h-10" />
                      </div>
                      <h3 className="text-3xl font-bold mb-3">AI 2026 Revolutionary Breakthroughs</h3>
                      <p className="text-purple-100 text-lg">The Future is Here</p>
                    </div>
                  </div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                      🔥 BREAKTHROUGH 2026
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">Article</span>
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      25 min read
                    </span>
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">$100B+ Opportunity</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                    AI 2026 Revolutionary Breakthroughs: The Future is Here
                  </h4>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    Discover the groundbreaking AI innovations reshaping enterprise technology in 2026. From quantum computing 
                    to autonomous operations, explore the $100B+ opportunity and learn how to implement these breakthrough technologies.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">1000x</div>
                        <div className="text-xs text-gray-500">Performance Gain</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">99.9%</div>
                        <div className="text-xs text-gray-500">Uptime</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">95%</div>
                        <div className="text-xs text-gray-500">Automation</div>
                      </div>
                    </div>
                    <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
                      Read Complete Guide →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Secondary Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* $50M Success Story */}
          <Link href="/case-studies/ai-enterprise-transformation-mega-success-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-200 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                    $50M ROI Success Story
                  </h3>
                  <p className="text-sm text-gray-500">Fortune 500 case study</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                See how a Fortune 500 company achieved $50M ROI with comprehensive AI transformation. 
                99% automation, 90% cost reduction, and complete business revolution.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">$50M</div>
                  <div className="text-xs text-gray-500">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">99%</div>
                  <div className="text-xs text-gray-500">Automation</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  20 min read
                </div>
                <div className="flex items-center text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                  View Success Story →
                </div>
              </div>
            </div>
          </Link>

          {/* AI Mega Trends */}
          <Link href="/blog/ai-2026-mega-trends" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    AI Mega Trends 2026
                  </h3>
                  <p className="text-sm text-gray-500">Complete enterprise guide</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Discover the 15 mega trends reshaping enterprise AI. From autonomous operations to quantum computing, 
                learn how to capitalize on $50B+ market opportunities.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">15</div>
                  <div className="text-xs text-gray-500">Mega Trends</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600">$50B+</div>
                  <div className="text-xs text-gray-500">Opportunity</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  45 min read
                </div>
                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                  Read Mega Trends →
                </div>
              </div>
            </div>
          </Link>

          {/* AI Agent Orchestration */}
          <Link href="/blog/ai-agent-orchestration-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-indigo-200 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    AI Agent Orchestration
                  </h3>
                  <p className="text-sm text-gray-500">Multi-agent systems</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Master multi-agent systems with 95% automation efficiency and $5M+ ROI through advanced 
                orchestration patterns and enterprise-grade coordination.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-indigo-600">95%</div>
                  <div className="text-xs text-gray-500">Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">$5M+</div>
                  <div className="text-xs text-gray-500">ROI</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  22 min read
                </div>
                <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 transition-colors">
                  Read Article →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Additional Content Row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link href="/blog/ai-sustainability-green-tech-2026" className="group">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 border border-gray-100 hover:border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 text-sm">🌱</span>
                </div>
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-semibold">Sustainability</span>
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                AI Sustainability & Green Tech 2026
              </h3>
              <p className="text-gray-600 text-xs mb-3">
                Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-500">18 min read</div>
                <div className="text-green-600 font-semibold text-xs">Read →</div>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-quantum-computing-2026" className="group">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 border border-gray-100 hover:border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 text-sm">⚛️</span>
                </div>
                <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs font-semibold">Quantum</span>
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                AI Quantum Computing 2026
              </h3>
              <p className="text-gray-600 text-xs mb-3">
                Harness quantum computing for AI breakthroughs with 1000x faster optimization.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-500">25 min read</div>
                <div className="text-purple-600 font-semibold text-xs">Read →</div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-sustainability-transformation-2026" className="group">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 border border-gray-100 hover:border-teal-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Award className="w-4 h-4 text-teal-600" />
                </div>
                <span className="bg-teal-100 text-teal-600 px-2 py-1 rounded-full text-xs font-semibold">Case Study</span>
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                $10M Sustainability Success
              </h3>
              <p className="text-gray-600 text-xs mb-3">
                See how a Fortune 500 achieved carbon neutrality and $10M ROI.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-500">15 min read</div>
                <div className="text-teal-600 font-semibold text-xs">View →</div>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-autonomous-enterprise-2026" className="group">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 border border-gray-100 hover:border-orange-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 text-sm">🤖</span>
                </div>
                <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-semibold">Autonomous</span>
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                AI Autonomous Enterprise 2026
              </h3>
              <p className="text-gray-600 text-xs mb-3">
                Master autonomous AI enterprise operations with zero-touch business management.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-500">30 min read</div>
                <div className="text-orange-600 font-semibold text-xs">Read →</div>
              </div>
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-indigo-100 mb-6 text-lg">
              Get personalized insights and implementation strategies for your organization's AI transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <span>🚀</span>
                Explore All Content
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors flex items-center justify-center gap-2"
              >
                <span>💬</span>
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}