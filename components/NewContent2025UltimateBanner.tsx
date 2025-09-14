import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-6 py-2 mb-6 font-bold text-sm">
            🚀 NEW CONTENT 2025 - ULTIMATE COLLECTION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content for 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover cutting-edge AI insights, implementation guides, and breakthrough technologies 
            that will transform your business in 2025 and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Edge Computing Revolution */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Edge Computing Revolution</h3>
                <p className="text-sm opacity-80">Ultimate Guide</p>
              </div>
            </div>
            <p className="text-gray-200 mb-4">
              Master distributed intelligence, real-time processing, and edge AI deployment strategies 
              that are revolutionizing enterprise operations.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-500 bg-opacity-30 px-3 py-1 rounded-full text-xs">Edge AI</span>
              <span className="bg-green-500 bg-opacity-30 px-3 py-1 rounded-full text-xs">Real-time</span>
              <span className="bg-purple-500 bg-opacity-30 px-3 py-1 rounded-full text-xs">IoT</span>
            </div>
            <Link 
              href="/blog/ai-2025-edge-computing-revolution-ultimate-guide"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              Read Full Guide →
            </Link>
          </div>

          {/* Conversational AI Revolution */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">💬</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Conversational AI</h3>
                <p className="text-sm opacity-80">Enterprise Transformation</p>
              </div>
            </div>
            <p className="text-gray-200 mb-4">
              Transform customer experience with advanced chatbots, voice assistants, and natural 
              language processing that understands context and emotion.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-pink-500 bg-opacity-30 px-3 py-1 rounded-full text-xs">NLP</span>
              <span className="bg-blue-500 bg-opacity-30 px-3 py-1 rounded-full text-xs">Voice AI</span>
              <span className="bg-green-500 bg-opacity-30 px-3 py-1 rounded-full text-xs">Customer Experience</span>
            </div>
            <Link 
              href="/blog/ai-2025-conversational-ai-revolution-enterprise-transformation"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              Explore Now →
            </Link>
          </div>

          {/* Complete Implementation Roadmap */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🗺️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Implementation Roadmap</h3>
                <p className="text-sm opacity-80">Complete Guide</p>
              </div>
            </div>
            <p className="text-gray-200 mb-4">
              Step-by-step roadmap for AI transformation. From strategy development to full-scale 
              deployment with proven methodologies and best practices.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-orange-500 bg-opacity-30 px-3 py-1 rounded-full text-xs">Strategy</span>
              <span className="bg-red-500 bg-opacity-30 px-3 py-1 rounded-full text-xs">Implementation</span>
              <span className="bg-yellow-500 bg-opacity-30 px-3 py-1 rounded-full text-xs">ROI</span>
            </div>
            <Link 
              href="/resources/ai-2025-implementation-complete-roadmap"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              Get Started →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-black text-lg mb-6 opacity-90">
              Join thousands of forward-thinking companies already implementing these cutting-edge AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Get Expert Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-center">
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-sm opacity-80">New Articles</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-cyan-400 mb-2">25+</div>
            <div className="text-sm opacity-80">Implementation Guides</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
            <div className="text-sm opacity-80">Expert Authored</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">2025</div>
            <div className="text-sm opacity-80">Latest Trends</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateBanner;