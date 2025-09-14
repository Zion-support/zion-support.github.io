import React from 'react';
import Link from 'next/link';

export default function NewContent2025MultimodalBanner() {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content Now Available
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover the latest breakthroughs in AI technology with our comprehensive guides to 
            multimodal AI, business intelligence, and enterprise automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Multimodal AI Card */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-3">Multimodal AI Revolution</h3>
            <p className="text-gray-200 mb-4 text-sm">
              Complete guide to implementing AI that processes text, images, audio, and video simultaneously.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-yellow-300">NEW CONTENT</span>
              <Link
                href="/blog/ai-2025-multimodal-revolution-ultimate-guide"
                className="text-white hover:text-yellow-300 font-semibold text-sm transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Business Intelligence Card */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">AI Business Intelligence</h3>
            <p className="text-gray-200 mb-4 text-sm">
              Transform your data into actionable insights with next-generation AI analytics solutions.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-yellow-300">NEW CONTENT</span>
              <Link
                href="/blog/ai-2025-business-intelligence-revolution"
                className="text-white hover:text-yellow-300 font-semibold text-sm transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Enterprise Automation Card */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Enterprise Automation</h3>
            <p className="text-gray-200 mb-4 text-sm">
              Revolutionary AI automation solutions that transform enterprise operations and boost productivity.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-yellow-300">FEATURED</span>
              <Link
                href="/blog/ai-2025-enterprise-automation-revolution"
                className="text-white hover:text-yellow-300 font-semibold text-sm transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg opacity-90 mb-6">
              Get expert implementation services and start your AI transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">500+</div>
            <div className="text-sm opacity-90">AI Projects Delivered</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">98%</div>
            <div className="text-sm opacity-90">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">340%</div>
            <div className="text-sm opacity-90">Average ROI</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">24/7</div>
            <div className="text-sm opacity-90">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}