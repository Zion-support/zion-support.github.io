import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources | Zion Tech Group',
  description: 'Comprehensive technology resources, guides, and tools to help you succeed with your digital transformation journey.',
  keywords: 'technology resources, guides, tutorials, digital transformation, zion tech group',
  openGraph: {
    title: 'Resources | Zion Tech Group',
    description: 'Comprehensive technology resources, guides, and tools to help you succeed with your digital transformation journey.',
    url: 'https://ziontechgroup.com/resources',
    type: 'website',
  },
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Technology Resources
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Comprehensive technology resources, guides, and tools to help you succeed with your digital transformation journey.
            </p>
          </div>

          {/* Resource Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Guides */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Guides & Tutorials</h3>
              <p className="text-gray-600 mb-6">
                Step-by-step guides and tutorials to help you implement and optimize technology solutions for your business.
              </p>
              <a
                href="/guides"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                View Guides
              </a>
            </div>

            {/* Content Hub */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Hub</h3>
              <p className="text-gray-600 mb-6">
                Curated content, articles, and insights from our experts to keep you informed about the latest technology trends.
              </p>
              <a
                href="/content-hub"
                className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300"
              >
                Explore Content
              </a>
            </div>

            {/* Services Catalog */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Services Catalog</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive catalog of all our technology services and solutions to help you find exactly what you need.
              </p>
              <a
                href="/enhanced-services-catalog"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                View Catalog
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Resource Links</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a href="/guides" className="flex items-center space-x-3 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                <span className="text-2xl">📖</span>
                <span className="font-semibold text-gray-900">Guides</span>
              </a>
              
              <a href="/content-hub" className="flex items-center space-x-3 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                <span className="text-2xl">📋</span>
                <span className="font-semibold text-gray-900">Content Hub</span>
              </a>
              
              <a href="/enhanced-services-catalog" className="flex items-center space-x-3 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                <span className="text-2xl">📋</span>
                <span className="font-semibold text-gray-900">Services Catalog</span>
              </a>
              
              <a href="/case-studies" className="flex items-center space-x-3 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                <span className="text-2xl">📈</span>
                <span className="font-semibold text-gray-900">Case Studies</span>
              </a>
              
              <a href="/privacy" className="flex items-center space-x-3 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                <span className="text-2xl">🔐</span>
                <span className="font-semibold text-gray-900">Privacy Policy</span>
              </a>
              
              <a href="/terms" className="flex items-center space-x-3 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                <span className="text-2xl">📄</span>
                <span className="font-semibold text-gray-900">Terms of Service</span>
              </a>
              
              <a href="/security" className="flex items-center space-x-3 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                <span className="text-2xl">🛡️</span>
                <span className="font-semibold text-gray-900">Security</span>
              </a>
              
              <a href="/sitemap" className="flex items-center space-x-3 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                <span className="text-2xl">🗺️</span>
                <span className="font-semibold text-gray-900">Sitemap</span>
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Need Help Finding the Right Resource?</h2>
              <p className="text-xl mb-8 opacity-90">
                Our team of experts is here to help you navigate our resources and find exactly what you need.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Experts
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}