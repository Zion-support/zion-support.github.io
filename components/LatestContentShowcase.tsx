'use client';
import React from 'react';
import Link from 'next/link';
import { ClockIcon, TagIcon, StarIcon, FireIcon, ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function LatestContentShowcase() {
  const featuredContent = [
    {
      title: "AI 2025 Revolutionary Breakthroughs: The Future is Here",
      description: "Discover the groundbreaking AI innovations transforming 2025: autonomous systems, quantum AI, edge intelligence, and sustainable AI solutions.",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      icon: "🚀",
      category: "AI Innovations",
      readTime: "25 min read",
      date: "Jan 30, 2025",
      type: "Article",
      featured: true,
      trending: true,
      new: true
    },
    {
      title: "AI Financial Services Transformation: 300% ROI Success Story",
      description: "Complete case study: How a major bank achieved 300% ROI through strategic AI implementation. Learn the strategies, challenges, and results.",
      href: "/case-studies/ai-financial-services-transformation-2025",
      icon: "💰",
      category: "Case Study",
      readTime: "15 min read",
      date: "Jan 30, 2025",
      type: "Case Study",
      featured: true,
      trending: true,
      new: true
    },
    {
      title: "AI Implementation Master Guide 2025: Complete 200+ Page Resource",
      description: "Download our comprehensive AI Implementation Master Guide 2025. 200+ pages of step-by-step instructions, templates, and best practices.",
      href: "/resources/ai-implementation-master-guide-2025",
      icon: "📚",
      category: "Free Resource",
      readTime: "200+ pages",
      date: "Jan 30, 2025",
      type: "Free Download",
      featured: true,
      trending: true,
      new: true
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full px-6 py-2 mb-6">
            <SparklesIcon className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">FRESH CONTENT JUST DROPPED</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🚀 Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest breakthrough insights, success stories, and comprehensive resources. 
            Expert analysis on the AI innovations reshaping 2025 and beyond.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <Link key={index} href={content.href} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                {/* Content Header */}
                <div className="relative p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {content.icon}
                    </div>
                    <div className="flex items-center space-x-2">
                      {content.new && (
                        <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                          NEW
                        </span>
                      )}
                      {content.trending && (
                        <FireIcon className="h-5 w-5 text-orange-500" />
                      )}
                      {content.featured && (
                        <StarIcon className="h-5 w-5 text-yellow-500" />
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      content.type === 'Case Study' ? 'bg-green-100 text-green-800' :
                      content.type === 'Free Download' ? 'bg-purple-100 text-purple-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {content.type}
                    </span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {content.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {content.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {content.description}
                  </p>
                </div>

                {/* Content Footer */}
                <div className="px-6 pb-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {content.readTime}
                      </div>
                      <div className="flex items-center">
                        <TagIcon className="h-4 w-4 mr-1" />
                        {content.date}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700">
                    {content.type === 'Free Download' ? 'Download Free →' : 'Read Article →'}
                    <ArrowRightIcon className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Total Articles</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
            <div className="text-gray-600">Case Studies</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-gray-600">Free Resources</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-orange-600 mb-2">50K+</div>
            <div className="text-gray-600">Downloads</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="/content-showcase"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <SparklesIcon className="h-5 w-5" />
            Explore All Content
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}