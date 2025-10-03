import React from 'react';
import { Link } from 'react-router-dom';

export default function AIContentGenerationBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="md:flex">
            {/* Content Section */}
            <div className="md:w-2/3 p-8 md:p-12">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  ✍️ NEW ARTICLE
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  CONTENT AI
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                AI Content Generation 2026: 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                  {' '}Revolutionary Tools for Enterprise Content Creation
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Discover how AI content generation is transforming enterprise content creation with 
                <strong className="text-green-600"> 95% efficiency gains</strong>, 
                <strong className="text-blue-600"> 80% cost reduction</strong>, and personalized 
                content at scale that's revolutionizing marketing and communications.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">95%</div>
                  <div className="text-sm text-gray-600">Efficiency Gains</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">80%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">400%</div>
                  <div className="text-sm text-gray-600">ROI Potential</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/blog/ai-content-generation-2026"
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl text-center"
                >
                  Read Full Article →
                </Link>
                <Link to="/services/ai-content-generation"
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 hover:text-white transition-colors text-center"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            
            {/* Visual Section */}
            <div className="md:w-1/3 bg-gradient-to-br from-green-100 to-blue-100 p-8 md:p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <span className="text-4xl text-white">✍️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Content Creation</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Generate high-quality, personalized content at scale across multiple modalities with enterprise-grade AI systems.
                </p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Multi-Modal Content</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Personalization at Scale</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>Brand Consistency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Content Preview */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                Feature
              </span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              Automated Content Pipeline
            </h4>
            <p className="text-gray-600 text-sm">
              End-to-end automation from ideation to publication with AI-powered workflows and quality assurance.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                Benefit
              </span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              Personalized Content
            </h4>
            <p className="text-gray-600 text-sm">
              Dynamic personalization that adapts content for different audience segments and engagement preferences.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                Impact
              </span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              Enterprise Scale
            </h4>
            <p className="text-gray-600 text-sm">
              Scale content operations across multiple channels and markets while maintaining quality and consistency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}