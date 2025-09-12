import React from 'react';
import { Metadata } from 'next';
import EnhancedContentShowcase from '../../components/EnhancedContentShowcase';

export const metadata: Metadata = {
  title: 'AI Content Library - Articles, Case Studies & Resources | Zion Tech Group',
  description: 'Explore our comprehensive library of AI articles, case studies, implementation guides, and resources. Stay updated with the latest AI trends and best practices.',
  keywords: 'AI articles, case studies, AI resources, implementation guides, AI trends, technology insights',
  openGraph: {
    title: 'AI Content Library - Articles, Case Studies & Resources',
    description: 'Explore our comprehensive library of AI articles, case studies, implementation guides, and resources. Stay updated with the latest AI trends and best practices.',
    type: 'website',
  },
};

export default function ContentShowcasePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Content Library
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
              Discover our comprehensive collection of AI insights, case studies, implementation guides, and resources. Stay ahead with the latest trends and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm opacity-90">Articles</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm opacity-90">Case Studies</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">100K+</div>
                <div className="text-sm opacity-90">Monthly Readers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Showcase */}
      <EnhancedContentShowcase
        title="All Content"
        subtitle="Browse, filter, and discover our complete library of AI content"
        showFilters={true}
        maxItems={50}
        className="py-16"
      />

      {/* Categories Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Content Categories</h2>
            <p className="text-lg text-gray-600">Explore content by topic and expertise area</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Innovation</h3>
              <p className="text-gray-600 mb-4">Latest breakthroughs, trends, and innovations in artificial intelligence</p>
              <div className="text-sm text-blue-600 font-medium">15+ Articles</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Automation</h3>
              <p className="text-gray-600 mb-4">Implementation guides and best practices for AI automation</p>
              <div className="text-sm text-green-600 font-medium">12+ Articles</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Case Studies</h3>
              <p className="text-gray-600 mb-4">Real-world success stories and transformation examples</p>
              <div className="text-sm text-purple-600 font-medium">25+ Studies</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare AI</h3>
              <p className="text-gray-600 mb-4">AI applications in healthcare and medical technology</p>
              <div className="text-sm text-orange-600 font-medium">8+ Articles</div>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">AI-powered security solutions and threat detection</p>
              <div className="text-sm text-red-600 font-medium">6+ Articles</div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Engineering</h3>
              <p className="text-gray-600 mb-4">Data science, engineering, and AI-powered analytics</p>
              <div className="text-sm text-teal-600 font-medium">10+ Articles</div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest AI Insights</h2>
          <p className="text-xl mb-8 opacity-90">
            Get our weekly newsletter with the latest AI articles, case studies, and industry insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}