import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Clock, Users, TrendingUp } from 'lucide-react';

export default function NewContent2026MegaBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🚀 BREAKTHROUGH 2026
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Discover the latest AI breakthroughs, autonomous enterprise guides, quantum computing innovations, 
            and real-world success stories that are reshaping business in 2026
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>150+ Articles</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>75+ Case Studies</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span>50K+ Readers</span>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Mega Breakthrough Article */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">AI 2026 Mega Breakthrough</h3>
                <p className="text-sm text-gray-500">Complete Enterprise Guide</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Revolutionary AI technologies reshaping enterprise operations with $100M+ ROI strategies, 
              autonomous systems, and quantum-enhanced computing.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  45 min
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  2.3k views
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-semibold">4.9</span>
              </div>
            </div>
            <Link
              href="/blog/ai-2026-mega-breakthrough"
              className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors group-hover:gap-3"
            >
              Read Complete Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mega Success Case Study */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">$150M ROI Success Story</h3>
                <p className="text-sm text-gray-500">Fortune 500 Case Study</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              How a Fortune 500 manufacturing giant achieved $150M ROI in 18 months through comprehensive 
              AI transformation and autonomous operations.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  35 min
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  1.8k views
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-semibold">4.8</span>
              </div>
            </div>
            <Link
              href="/case-studies/ai-mega-transformation-success-2026"
              className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors group-hover:gap-3"
            >
              View Success Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Content Hub */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-teal-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Content Hub 2026</h3>
                <p className="text-sm text-gray-500">Complete Library</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Explore our comprehensive library of AI innovation guides, case studies, success stories, 
              and implementation strategies all in one place.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Always Updated
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  50K+ Readers
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-semibold">4.9</span>
              </div>
            </div>
            <Link
              href="/content-hub"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:gap-3"
            >
              Explore Content Hub
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of companies already using our proven AI strategies to achieve unprecedented results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/content-hub"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore All Content
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}