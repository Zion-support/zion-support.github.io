import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, TrendingUp, Users } from 'lucide-react';

export default function LatestContent2026Banner() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
              🔥 LATEST 2026 CONTENT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Revolutionary AI Content & Success Stories
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Discover the latest AI innovations, transformation guides, and real-world success stories 
            that are reshaping businesses in 2026
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link href="/blog/ai-enterprise-transformation-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
              </div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-yellow-200 transition-colors">
                Enterprise Transformation 2026
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Complete $50M+ ROI implementation guide with proven strategies for Fortune 500 companies.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-white/70">
                  <Clock className="w-4 h-4 mr-1" />
                  40 min read
                </div>
                <div className="text-white font-semibold text-sm group-hover:text-yellow-200 transition-colors">
                  Read Guide →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-2026-revolutionary-automation" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  REVOLUTIONARY
                </span>
              </div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-yellow-200 transition-colors">
                Revolutionary Automation 2026
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Master revolutionary AI automation with 98% process efficiency and $8M+ savings.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-white/70">
                  <Clock className="w-4 h-4 mr-1" />
                  35 min read
                </div>
                <div className="text-white font-semibold text-sm group-hover:text-yellow-200 transition-colors">
                  Read Guide →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-2026-mega-transformation-success" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  $50M SUCCESS
                </span>
              </div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-yellow-200 transition-colors">
                Mega Transformation Success
              </h3>
              <p className="text-white/80 text-sm mb-4">
                See how a Fortune 500 company achieved $50M ROI with comprehensive AI transformation.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-white/70">
                  <Clock className="w-4 h-4 mr-1" />
                  25 min read
                </div>
                <div className="text-white font-semibold text-sm group-hover:text-yellow-200 transition-colors">
                  Read Case Study →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-revolutionary-automation-success-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  $8M SUCCESS
                </span>
              </div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-yellow-200 transition-colors">
                Revolutionary Automation Success
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Discover how a Fortune 500 retail company achieved $8M ROI with revolutionary automation.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-white/70">
                  <Clock className="w-4 h-4 mr-1" />
                  20 min read
                </div>
                <div className="text-white font-semibold text-sm group-hover:text-yellow-200 transition-colors">
                  Read Case Study →
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
          >
            <span className="w-5 h-5 mr-2">🔥</span>
            Explore All Latest Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}