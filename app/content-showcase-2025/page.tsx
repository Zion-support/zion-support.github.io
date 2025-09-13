import React from 'react';
import SEO from '../../../components/SEO';
import NewContent2025Showcase from '../../../components/NewContent2025Showcase';
import TechnologyTrends2025Banner from '../../../components/TechnologyTrends2025Banner';
import AIInnovationShowcase2025 from '../../../components/AIInnovationShowcase2025';
import Link from 'next/link';
import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/24/outline';

export default function ContentShowcase2025() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase 2025 - Latest AI & Technology Insights | Zion Tech Group"
        description="Explore our comprehensive collection of cutting-edge content covering AI innovations, quantum computing breakthroughs, and emerging technologies in 2025."
        keywords="AI content 2025, technology trends, quantum computing, neural interfaces, AI automation, business transformation"
        url="/content-showcase-2025"
      />
      
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-gray-900 hover:text-blue-600 transition-colors">
                <HomeIcon className="w-5 h-5 mr-2" />
                <span className="font-semibold">Zion Tech Group</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Content Showcase
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover the latest insights, innovations, and breakthroughs in AI, 
            quantum computing, and emerging technologies that are shaping the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#content"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
            >
              Explore Content
            </Link>
            <Link
              href="/newsletter"
              className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-medium rounded-xl hover:bg-white/10 transition-colors"
            >
              Subscribe to Updates
            </Link>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div id="content">
        <NewContent2025Showcase />
        <TechnologyTrends2025Banner />
        <AIInnovationShowcase2025 />
      </div>

      {/* Footer CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Stay Updated with the Latest Innovations
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get exclusive access to our latest content, case studies, and technology insights 
            delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/newsletter"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
            >
              Subscribe to Newsletter
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}