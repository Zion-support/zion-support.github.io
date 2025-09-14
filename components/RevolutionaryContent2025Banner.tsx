import React from 'react';
import Link from 'next/link';

const RevolutionaryContent2025Banner = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🔥 REVOLUTIONARY CONTENT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Business with Revolutionary AI Content
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Access cutting-edge AI insights, implementation strategies, and real-world success stories that are transforming businesses across industries in 2025.
            </p>
            
            {/* Featured Content Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                <h3 className="text-lg font-bold mb-3">Enterprise AI Integration</h3>
                <p className="text-sm opacity-90 mb-4">Complete guide to revolutionizing enterprise operations with AI integration strategies.</p>
                <Link 
                  href="/blog/ai-2025-enterprise-integration-revolution" 
                  className="text-yellow-300 font-semibold hover:text-yellow-200 transition-colors"
                >
                  Read Guide →
                </Link>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                <h3 className="text-lg font-bold mb-3">Smart Automation</h3>
                <p className="text-sm opacity-90 mb-4">Discover the future of business operations with intelligent automation systems.</p>
                <Link 
                  href="/blog/ai-2025-smart-automation-breakthrough" 
                  className="text-yellow-300 font-semibold hover:text-yellow-200 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Explore All Content
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-center"
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>

          {/* Right Column - Statistics & Features */}
          <div className="space-y-8">
            {/* Key Statistics */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-6 text-center">Proven Results</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-300 mb-2">340%</div>
                  <div className="text-sm opacity-90">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-300 mb-2">99.8%</div>
                  <div className="text-sm opacity-90">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-300 mb-2">500+</div>
                  <div className="text-sm opacity-90">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-300 mb-2">24/7</div>
                  <div className="text-sm opacity-90">Support</div>
                </div>
              </div>
            </div>

            {/* Featured Case Studies */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
              <h3 className="text-xl font-bold mb-4">Featured Success Stories</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-300 pl-4">
                  <h4 className="font-semibold">Global Manufacturing Giant</h4>
                  <p className="text-sm opacity-90">Achieved 340% ROI with AI transformation</p>
                  <Link 
                    href="/case-studies/global-manufacturing-ai-transformation" 
                    className="text-yellow-300 text-sm hover:text-yellow-200 transition-colors"
                  >
                    Read Case Study →
                  </Link>
                </div>
                <div className="border-l-4 border-yellow-300 pl-4">
                  <h4 className="font-semibold">Financial Services Leader</h4>
                  <p className="text-sm opacity-90">99.8% fraud detection accuracy achieved</p>
                  <Link 
                    href="/case-studies/financial-services-ai-revolution" 
                    className="text-yellow-300 text-sm hover:text-yellow-200 transition-colors"
                  >
                    Read Case Study →
                  </Link>
                </div>
              </div>
            </div>

            {/* Free Resources */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
              <h3 className="text-xl font-bold mb-4">Free Resources</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-3">📖</span>
                  <div>
                    <div className="font-semibold">Complete AI Implementation Guide</div>
                    <div className="text-sm opacity-90">15-page comprehensive guide</div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-3">📊</span>
                  <div>
                    <div className="font-semibold">ROI Calculator & Templates</div>
                    <div className="text-sm opacity-90">Calculate your AI investment returns</div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-3">🎯</span>
                  <div>
                    <div className="font-semibold">Best Practices Whitepapers</div>
                    <div className="text-sm opacity-90">Industry-specific implementation guides</div>
                  </div>
                </li>
              </ul>
              <Link 
                href="/resources" 
                className="inline-flex items-center text-yellow-300 font-semibold hover:text-yellow-200 transition-colors mt-4"
              >
                Download All Resources →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContent2025Banner;