import React from 'react';
import Link from 'next/link';

export default function LatestContent2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-semibold">
              ✨ NEW 2026 CONTENT
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Revolutionary AI Content & Success Stories
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the latest AI innovations, transformation guides, and real-world success stories 
            that are reshaping businesses in 2026
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Featured Article */}
          <Link href="/blog/ai-enterprise-transformation-2026" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-white bg-opacity-20 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className="text-sm opacity-75">25 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-200 transition-colors">
                AI Enterprise Transformation 2026
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Master enterprise AI transformation with 95% automation, $10M+ ROI, and complete business revolution.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-200">95%</div>
                  <div className="text-xs opacity-75">Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-200">$10M+</div>
                  <div className="text-xs opacity-75">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-200">300%</div>
                  <div className="text-xs opacity-75">Productivity</div>
                </div>
              </div>
              <div className="flex items-center text-yellow-200 font-semibold text-sm group-hover:text-yellow-100 transition-colors">
                Read Complete Guide →
              </div>
            </div>
          </Link>

          {/* Featured Case Study */}
          <Link href="/case-studies/ai-enterprise-transformation-success-2026" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-white bg-opacity-20 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW CASE STUDY
                </span>
                <span className="text-sm opacity-75">15 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-200 transition-colors">
                $10M ROI Success Story
              </h3>
              <p className="text-sm opacity-90 mb-4">
                See how a Fortune 500 company achieved $10M ROI with comprehensive AI transformation.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-200">$10M</div>
                  <div className="text-xs opacity-75">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-200">95%</div>
                  <div className="text-xs opacity-75">Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-200">18</div>
                  <div className="text-xs opacity-75">Months</div>
                </div>
              </div>
              <div className="flex items-center text-yellow-200 font-semibold text-sm group-hover:text-yellow-100 transition-colors">
                View Success Story →
              </div>
            </div>
          </Link>

          {/* Featured Guide */}
          <Link href="/blog/ai-autonomous-operations-2026" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-white bg-opacity-20 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className="text-sm opacity-75">30 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-200 transition-colors">
                AI Autonomous Operations 2026
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Master autonomous AI enterprise operations with zero-touch business management and self-optimizing systems.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-200">99.9%</div>
                  <div className="text-xs opacity-75">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-200">90%</div>
                  <div className="text-xs opacity-75">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-200">Zero</div>
                  <div className="text-xs opacity-75">Touch Ops</div>
                </div>
              </div>
              <div className="flex items-center text-yellow-200 font-semibold text-sm group-hover:text-yellow-100 transition-colors">
                Read Complete Guide →
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore All AI Content
          </Link>
        </div>
      </div>
    </section>
  );
}