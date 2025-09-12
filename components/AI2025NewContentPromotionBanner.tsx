import React from 'react';
import { Link } from 'react-router-dom';

export default function AI2025NewContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-pulse">
            🔥 NEW BREAKTHROUGH CONTENT
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI 2025: Revolutionary Content Collection
          </h2>
          <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
            Discover the latest insights, strategies, and success stories that are transforming businesses worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-2xl mb-3">🚀</div>
            <h3 className="text-xl font-bold mb-3">Generative AI Revolution</h3>
            <p className="text-blue-100 mb-4">
              Complete guide to implementing generative AI solutions that deliver 300-500% ROI
            </p>
            <Link 
              href="/blog/ai-2025-generative-ai-revolution" 
              className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Guide →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-2xl mb-3">🤖</div>
            <h3 className="text-xl font-bold mb-3">Automation Mastery</h3>
            <p className="text-blue-100 mb-4">
              Master intelligent automation with our proven framework for 200-400% efficiency gains
            </p>
            <Link 
              href="/blog/ai-2025-automation-mastery" 
              className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Learn More →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-2xl mb-3">🏆</div>
            <h3 className="text-xl font-bold mb-3">Success Case Study</h3>
            <p className="text-blue-100 mb-4">
              See how a Fortune 500 company achieved 800% ROI through strategic AI automation
            </p>
            <Link 
              href="/case-studies/ai-2025-global-enterprise-automation-success" 
              className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Case Study →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <Link 
              href="/content-showcase" 
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore All Content
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}