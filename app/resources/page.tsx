import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Free AI & Business Resources - Zion Tech Group"
        description="Download free AI implementation guides, checklists, templates, and resources. Expert-created tools to accelerate your AI transformation and business growth."
        keywords="AI resources, free downloads, AI templates, business resources, AI checklists, implementation guides"
        url="/resources"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Free AI & Business Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Download our comprehensive collection of free resources, templates, and guides. 
            Expert-created tools to accelerate your AI transformation and business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/resources/ai-implementation-checklist-2025" className="group">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                <div className="text-8xl">📋</div>
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  FREE
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    Implementation Guide
                  </span>
                  <span className="text-gray-500 text-sm">2 hours</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  AI Implementation Checklist 2025
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  150+ actionable checklist items across 5 implementation phases. Complete step-by-step 
                  guide to successful AI deployment with timeline estimates and success metrics.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">ZT</span>
                    </div>
                    <span className="text-sm text-gray-600">Zion Tech Group</span>
                  </div>
                  <span className="text-green-600 font-medium group-hover:underline">
                    Download Free →
                  </span>
                </div>
              </div>
            </div>
          </Link>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
              <div className="text-8xl">💰</div>
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                COMING SOON
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  Funding Guide
                </span>
                <span className="text-gray-500 text-sm">3 hours</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI Startup Funding Toolkit
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Complete toolkit for AI startup funding including pitch deck templates, 
                investor contact lists, and funding strategy guides for the $47B AI market.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">ZT</span>
                  </div>
                  <span className="text-sm text-gray-600">Zion Tech Group</span>
                </div>
                <span className="text-gray-400 font-medium">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
              <div className="text-8xl">🏢</div>
              <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                COMING SOON
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                  Enterprise Guide
                </span>
                <span className="text-gray-500 text-sm">4 hours</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Enterprise AI Transformation Playbook
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Complete playbook for enterprise AI transformation including strategy, 
                implementation, change management, and success measurement frameworks.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">ZT</span>
                  </div>
                  <span className="text-sm text-gray-600">Zion Tech Group</span>
                </div>
                <span className="text-gray-400 font-medium">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            More Resources Coming Soon
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're constantly creating new resources to help you succeed with AI and business growth. 
            Sign up for our newsletter to be the first to know about new releases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Get Notified
            </Link>
            <Link
              href="/blog"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}