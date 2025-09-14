import React from 'react';
import Link from 'next/link';
import { BookOpen, FileText, TrendingUp, ArrowRight, Star } from 'lucide-react';

export default function NewContent2026ShowcaseBanner() {
  return (
    <section className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">NEW 2026 CONTENT SHOWCASE</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Discover the Latest AI Breakthroughs and Success Stories
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive collection of 2026 AI content, featuring quantum computing, 
            enterprise automation, and real-world transformation success stories.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <BookOpen className="w-8 h-8 mx-auto mb-3" />
              <div className="text-lg font-bold mb-2">Quantum AI Revolution</div>
              <div className="text-sm opacity-90">10,000x faster processing</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <FileText className="w-8 h-8 mx-auto mb-3" />
              <div className="text-lg font-bold mb-2">Enterprise Automation</div>
              <div className="text-sm opacity-90">95% efficiency gains</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <TrendingUp className="w-8 h-8 mx-auto mb-3" />
              <div className="text-lg font-bold mb-2">Success Stories</div>
              <div className="text-sm opacity-90">$2.3B value creation</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Explore All Content
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors inline-flex items-center"
            >
              View Success Stories
              <FileText className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}