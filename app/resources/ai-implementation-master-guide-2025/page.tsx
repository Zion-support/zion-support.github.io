import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export default function AIImplementationMasterGuide2025() {
  return (
    <>
      <SEO
        title="AI Implementation Master Guide 2025: Complete 200+ Page Resource"
        description="Download our comprehensive AI implementation guide with 200+ pages of templates, checklists, frameworks, and proven strategies for successful AI deployment."
        keywords="AI implementation guide, AI templates, AI checklist, AI framework, AI deployment, AI resources"
        url="/resources/ai-implementation-master-guide-2025"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-indigo-100 text-indigo-800 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">📚 FREE DOWNLOAD</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Implementation Master Guide 2025
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Complete 200+ page resource with templates, checklists, frameworks, and proven strategies 
                for successful AI deployment in any organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-lg">
                  📥 Download Free Guide
                </button>
                <Link
                  href="#contents"
                  className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors text-lg"
                >
                  View Contents
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#download"
                  className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg"
                >
                  📥 Download Free Guide
                </a>
                <a
                  href="#preview"
                  className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors text-lg"
                >
                  👀 Preview Contents
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-indigo-50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-indigo-600 mb-2">200+</div>
                <div className="text-gray-600">Pages of Content</div>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">Templates & Checklists</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-purple-600 mb-2">15</div>
                <div className="text-gray-600">Implementation Frameworks</div>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-orange-600 mb-2">25</div>
                <div className="text-gray-600">Case Studies</div>
              </div>
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="py-16 bg-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Get Your Free AI Implementation Master Guide</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join 10,000+ professionals who have successfully implemented AI using our comprehensive guide. 
              Download now and start your AI transformation journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                📥 Download Free Guide
              </button>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
              >
                Get Custom Consultation
              </Link>
            </div>
            
            <p className="text-sm opacity-75 mt-4">
              No spam. Instant download. Free forever.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}