'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { XMarkIcon, SparklesIcon, BookOpenIcon, DocumentTextIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function UltraContentPromotionBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const featuredContent = [
    {
      title: "Advanced RAG Systems 2025",
      description: "Production-ready implementation guide for retrieval-augmented generation systems",
      href: "/blog/ai-2025-advanced-rag-systems",
      icon: "🔍",
      type: "Article",
      readTime: "25 min read",
      category: "Advanced AI"
    },
    {
      title: "AI Multimodal Revolution 2025",
      description: "Vision, voice, and text integration transforming human-computer interaction",
      href: "/blog/ai-2025-multimodal-revolution",
      icon: "🎭",
      type: "Article",
      readTime: "28 min read",
      category: "Multimodal AI"
    },
    {
      title: "$200M Manufacturing Success",
      description: "Complete case study: Fortune 500 manufacturer achieves massive cost savings",
      href: "/case-studies/ai-2025-autonomous-manufacturing-revolution",
      icon: "🏭",
      type: "Case Study",
      readTime: "15 min read",
      category: "Success Story"
    }
  ];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
              <SparklesIcon className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">🚀 FRESH CONTENT DROP</span>
            </div>
            <div className="hidden md:flex items-center text-sm opacity-90">
              <span>January 28, 2025</span>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Main Content */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            🎉 Revolutionary AI Content Just Released!
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover our latest breakthrough content: Advanced RAG Systems, AI Multimodal Revolution, 
            and real-world success stories with proven ROI. Expert insights to accelerate your AI transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/content-showcase"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              🎯 Explore All New Content
            </Link>
            <Link
              href="/mega-content-showcase"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              📚 Mega Content Drop
            </Link>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {featuredContent.map((content, index) => (
            <Link key={index} href={content.href} className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">{content.icon}</div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">NEW</span>
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">FEATURED</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-200 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-sm opacity-90 mb-4">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between text-xs opacity-75">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <BookOpenIcon className="h-4 w-4 mr-1" />
                      {content.readTime}
                    </span>
                    <span className="flex items-center">
                      <DocumentTextIcon className="h-4 w-4 mr-1" />
                      {content.type}
                    </span>
                  </div>
                  <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full">
                    {content.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <div className="text-2xl font-bold mb-1">25+</div>
            <div className="text-sm opacity-90">New Articles</div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <div className="text-2xl font-bold mb-1">10</div>
            <div className="text-sm opacity-90">Case Studies</div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <div className="text-2xl font-bold mb-1">200+</div>
            <div className="text-sm opacity-90">Pages of Content</div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <div className="text-2xl font-bold mb-1">30K+</div>
            <div className="text-sm opacity-90">Downloads</div>
          </div>
        </div>
      </div>
    </div>
  );
}