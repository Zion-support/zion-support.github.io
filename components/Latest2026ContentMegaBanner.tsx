import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Zap, CheckCircle } from 'lucide-react';

export default function Latest2026ContentMegaBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-emerald-200/20 to-blue-200/20 rounded-full translate-y-40 -translate-x-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              🚀 LATEST 2026
            </span>
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              MEGA CONTENT
            </span>
            <span className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              BREAKTHROUGH
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Latest 2026 Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600">
              That's Revolutionizing Industries
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed">
            Discover the most cutting-edge AI innovations, breakthrough case studies, and revolutionary technologies that are transforming businesses and delivering unprecedented results in 2026.
          </p>
        </div>

        {/* Featured Content Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Featured Article */}
          <div className="space-y-8">
            <Link href="/blog/ai-2026-mega-breakthrough-innovations" className="group block">
              <div className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-emerald-200">
                <div className="relative h-64 bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-600">
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-20 h-20 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="text-3xl">🚀</span>
                      </div>
                      <h3 className="text-3xl font-bold mb-2">AI 2026 Mega Breakthrough</h3>
                      <p className="text-emerald-100">Revolutionary Technologies</p>
                    </div>
                  </div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                      🚀 NEW 2026
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">Article</span>
                    <span className="text-gray-500 text-sm">28 min read</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-gray-600">4.9/5</span>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                    AI 2026 Mega Breakthrough Innovations: Revolutionary Technologies Shaping the Future
                  </h4>
                  <p className="text-gray-600 mb-6 text-lg">
                    Discover the groundbreaking AI innovations of 2026 that are revolutionizing industries. From quantum-enhanced AI to autonomous enterprise systems, explore the technologies driving the next wave of digital transformation.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-600">1000x</div>
                        <div className="text-xs text-gray-500">Performance</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">99.9%</div>
                        <div className="text-xs text-gray-500">Reliability</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">$100M+</div>
                        <div className="text-xs text-gray-500">ROI</div>
                      </div>
                    </div>
                    <div className="flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors">
                      Read More →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Column - Case Studies */}
          <div className="space-y-6">
            <Link href="/case-studies/ai-space-tech-mission-success-2026" className="group block">
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    🛰️ NEW 2026
                  </span>
                  <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    $50M+ SUCCESS
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Space Tech Mission Success 2026
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  $50M cost savings and 99.9% reliability in autonomous space operations with deep space intelligence.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>5.0/5</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span>25K+ views</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-blue-600" />
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-sustainability-transformation-2026" className="group block">
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-200 hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    🌱 NEW 2026
                  </span>
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                    $10M ROI
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  AI Sustainability Transformation 2026
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  See how a Fortune 500 company achieved carbon neutrality and $10M ROI with comprehensive AI sustainability transformation.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>4.9/5</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span>30K+ views</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-green-600" />
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-quantum-optimization-2026" className="group block">
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-purple-200 hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ⚛️ NEW 2026
                  </span>
                  <span className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    1000x FASTER
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  AI Quantum Optimization 2026
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  See how a financial services company achieved 1000x optimization speed and $12M additional returns.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>4.8/5</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span>20K+ views</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-purple-600" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16 border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Content Impact by the Numbers</h3>
            <p className="text-xl text-gray-600">Real results from our breakthrough AI content and case studies</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">500K+</div>
              <div className="text-gray-600">Total Content Views</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">$100M+</div>
              <div className="text-gray-600">Total ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join thousands of professionals who are already using our breakthrough AI content and case studies to revolutionize their businesses and achieve unprecedented results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Explore All Content
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Star className="w-5 h-5" />
                View Success Stories
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}