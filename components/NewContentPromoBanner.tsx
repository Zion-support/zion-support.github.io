import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, TrendingUp } from 'lucide-react';

export default function NewContentPromoBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 text-white text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            New Content Available
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Content Just Released
          </h2>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Discover breakthrough insights, real-world case studies, and comprehensive guides 
            that will transform your understanding of AI in 2025.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-xl font-semibold mb-2">AI 2025 Breakthroughs</h3>
            <p className="text-blue-100 text-sm mb-4">
              Revolutionary AI innovations reshaping industries and creating unprecedented opportunities.
            </p>
            <Link 
              href="/blog/ai-2025-revolutionary-breakthroughs"
              className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
            >
              Read More
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-3">🏭</div>
            <h3 className="text-xl font-semibold mb-2">$2.3B Manufacturing Success</h3>
            <p className="text-blue-100 text-sm mb-4">
              How a Fortune 500 company achieved massive cost savings through AI transformation.
            </p>
            <Link 
              href="/case-studies/ai-manufacturing-transformation-2025"
              className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
            >
              View Case Study
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="text-xl font-semibold mb-2">200-Page AI Playbook</h3>
            <p className="text-blue-100 text-sm mb-4">
              Complete implementation guide with templates, checklists, and proven strategies.
            </p>
            <Link 
              href="/resources/ai-enterprise-transformation-playbook-2025"
              className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
            >
              Get Playbook
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/content-showcase"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Zap className="w-4 h-4 mr-2" />
              Explore All New Content
            </Link>
            <Link 
              href="/newsletter"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Get Updates
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}