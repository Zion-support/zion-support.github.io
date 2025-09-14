import React from 'react';
import Link from 'next/link';

const NewContent2025ShowcaseBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium">✨ FEATURED CONTENT</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            New Content 2025
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Showcase Collection
            </span>
          </h2>
          
          {/* Subheading */}
          <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto">
            Explore our latest insights, strategies, and success stories. 
            Fresh content designed to accelerate your AI transformation journey.
          </p>
        </div>

        {/* Content Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Latest Blog Post */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">BLOG</span>
              <span className="text-sm opacity-80">Latest Post</span>
            </div>
            <h3 className="text-xl font-bold mb-3">AI Transformation Roadmap 2025</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Your complete guide to successful AI implementation with proven strategies and real-world examples.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/blog/ai-transformation-2025-roadmap"
                className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors text-sm"
              >
                Read More →
              </Link>
              <span className="text-xs opacity-60">5 min read</span>
            </div>
          </div>

          {/* Case Study */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">CASE STUDY</span>
              <span className="text-sm opacity-80">Success Story</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Fortune 500 Success: 340% ROI</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Discover how a manufacturing giant achieved unprecedented results with strategic AI implementation.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/case-studies/fortune-500-ai-success-story"
                className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors text-sm"
              >
                View Case Study →
              </Link>
              <span className="text-xs opacity-60">8 min read</span>
            </div>
          </div>

          {/* Implementation Guide */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">GUIDE</span>
              <span className="text-sm opacity-80">Free Resource</span>
            </div>
            <h3 className="text-xl font-bold mb-3">AI Implementation Guide</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Step-by-step roadmap from assessment to full implementation with templates and tools.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/blog/ai-transformation-2025-roadmap"
                className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors text-sm"
              >
                Download Guide →
              </Link>
              <span className="text-xs opacity-60">PDF Download</span>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">15+</div>
            <div className="text-sm opacity-80">New Articles</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-green-300 mb-2">8</div>
            <div className="text-sm opacity-80">Case Studies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-300 mb-2">5</div>
            <div className="text-sm opacity-80">Implementation Guides</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-purple-300 mb-2">100%</div>
            <div className="text-sm opacity-80">Free Resources</div>
          </div>
        </div>

        {/* Content Categories */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Content Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Strategy & Planning</h4>
              <p className="text-sm opacity-80">AI roadmaps and strategic frameworks</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Implementation</h4>
              <p className="text-sm opacity-80">Technical guides and best practices</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Success Stories</h4>
              <p className="text-sm opacity-80">Real-world results and case studies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔮</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Future Trends</h4>
              <p className="text-sm opacity-80">Predictions and emerging technologies</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link
              href="/blog"
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Explore All Content
            </Link>
            <Link
              href="/newsletter"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Subscribe for Updates
            </Link>
          </div>
          
          {/* Additional Resources */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm opacity-80">
            <Link href="/resources" className="hover:opacity-100 transition-opacity">
              📚 Free Resource Library
            </Link>
            <Link href="/webinar" className="hover:opacity-100 transition-opacity">
              🎥 Watch Webinars
            </Link>
            <Link href="/consultation" className="hover:opacity-100 transition-opacity">
              💬 Get Expert Advice
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025ShowcaseBanner;