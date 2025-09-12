import React from 'react';
import Link from 'next/link';

export default function NewContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🎉 BREAKTHROUGH CONTENT UPDATE</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Automation Content Just Released!
          </h2>
          
          <p className="text-xl opacity-90 mb-6 max-w-4xl mx-auto">
            Discover our latest expert content: <strong>Advanced AI Automation Strategies</strong>, 
            <strong> Enterprise Workflow Success Stories</strong>, and <strong>AI Automation Consulting Services</strong>. 
            Real case studies showing 85% cost reduction and 10x efficiency gains!
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="font-semibold mb-1">Advanced Strategies</h3>
              <p className="text-sm opacity-90">18 min comprehensive guide</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">🏆</div>
              <h3 className="font-semibold mb-1">Success Stories</h3>
              <p className="text-sm opacity-90">$12M savings case study</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">💼</div>
              <h3 className="font-semibold mb-1">Expert Consulting</h3>
              <p className="text-sm opacity-90">Guaranteed ROI services</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/ai-2025-advanced-automation-strategies"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Advanced Strategies
            </Link>
            
            <Link
              href="/case-studies/ai-enterprise-workflow-automation-success-2025"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Success Story
            </Link>
            
            <Link
              href="/services/ai-automation-consulting"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Expert Consulting
            </Link>
          </div>
          
          <div className="mt-6 text-sm opacity-75">
            <p>✨ Free consultation available • 📋 Download implementation checklist • 🎯 500+ successful projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}