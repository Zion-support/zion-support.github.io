import React from 'react';
import Link from 'next/link';

export default function NewContent2026MegaBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                🚀 New Content 2026
              </span>
              <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Revolutionary AI Breakthrough Technologies 2026
            </h2>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Discover the groundbreaking AI technologies reshaping industries and creating unprecedented opportunities for business transformation
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Featured Article */}
            <div className="lg:col-span-2">
              <Link href="/blog/ai-2026-breakthrough-technologies" className="group block">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-white/30">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      Featured Article
                    </span>
                    <span className="text-white/70 text-sm">25 min read</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
                    AI Breakthrough Technologies 2026: Revolutionary Innovations
                  </h3>
                  <p className="text-white/80 mb-4 leading-relaxed">
                    Explore quantum AI computing, neural interfaces, autonomous systems, and cognitive computing breakthroughs that are transforming businesses in 2026.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-white/70">5.0</span>
                      </div>
                      <div className="text-white/70">•</div>
                      <div className="text-white/70">Jan 15, 2026</div>
                    </div>
                    <div className="text-blue-300 font-semibold group-hover:text-yellow-300 transition-colors">
                      Read Article →
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Cost Optimization Article */}
            <div>
              <Link href="/blog/ai-cost-optimization-2026" className="group block">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-white/30 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      Cost Optimization
                    </span>
                    <span className="text-white/70 text-sm">18 min read</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
                    AI Cost Optimization 2026: Maximize ROI
                  </h3>
                  <p className="text-white/80 mb-4 text-sm leading-relaxed">
                    Learn proven strategies to reduce AI implementation costs by 60-80% while maximizing performance and achieving faster ROI.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-white/70 text-sm">Jan 20, 2026</div>
                    <div className="text-green-300 font-semibold group-hover:text-yellow-300 transition-colors">
                      Read Guide →
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Mega Success Case Study */}
            <div className="lg:col-span-3">
              <Link href="/case-studies/ai-transformation-mega-success-2026" className="group block">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-white/30">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                          Mega Success Story
                        </span>
                        <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Fortune 500
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
                        $50M Revenue Increase: AI Transformation Mega Success
                      </h3>
                      <p className="text-white/80 mb-6 leading-relaxed">
                        Discover how a Fortune 500 manufacturing company achieved $50M revenue increase, 300% ROI, and industry-leading efficiency through comprehensive AI transformation.
                      </p>
                      <div className="flex items-center gap-6 text-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-400">$50M</div>
                          <div className="text-white/70">Revenue Increase</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-400">300%</div>
                          <div className="text-white/70">ROI</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-400">95%</div>
                          <div className="text-white/70">Efficiency Gain</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-yellow-400 text-6xl mb-4">🏆</div>
                      <div className="text-white/80 text-sm mb-4">18-month transformation journey</div>
                      <div className="text-yellow-300 font-semibold group-hover:text-white transition-colors">
                        View Case Study →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/blog"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Explore All Content
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                View Success Stories
              </Link>
            </div>
            <p className="text-white/70 mt-4 text-sm">
              Join 50,000+ professionals staying ahead with our latest AI insights and success stories
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}