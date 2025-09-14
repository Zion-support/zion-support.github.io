import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary AI Content
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the latest AI innovations, implementation guides, and real-world success stories 
            that are transforming businesses in 2025.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Blog Post 1 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">NEW</span>
              <span className="ml-3 text-sm opacity-75">Blog Post</span>
            </div>
            <h3 className="text-xl font-bold mb-4">
              AI 2025: Generative AI Enterprise Revolution
            </h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Complete guide to implementing generative AI in enterprise operations. 
              Learn how to achieve 340% ROI with cutting-edge AI solutions.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/blog/ai-2025-generative-ai-enterprise-revolution-ultimate-guide"
                className="text-blue-400 hover:text-blue-300 font-semibold text-sm"
              >
                Read More →
              </Link>
              <span className="text-xs opacity-75">15 min read</span>
            </div>
          </div>

          {/* Featured Blog Post 2 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">HOT</span>
              <span className="ml-3 text-sm opacity-75">Blog Post</span>
            </div>
            <h3 className="text-xl font-bold mb-4">
              Quantum Computing Business Breakthrough
            </h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Explore how quantum computing is revolutionizing business operations. 
              Discover implementation strategies and real-world success stories.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/blog/ai-2025-quantum-computing-business-breakthrough-ultimate-guide"
                className="text-blue-400 hover:text-blue-300 font-semibold text-sm"
              >
                Read More →
              </Link>
              <span className="text-xs opacity-75">18 min read</span>
            </div>
          </div>

          {/* Featured Blog Post 3 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">TRENDING</span>
              <span className="ml-3 text-sm opacity-75">Blog Post</span>
            </div>
            <h3 className="text-xl font-bold mb-4">
              Autonomous Enterprise Systems Revolution
            </h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Learn how autonomous AI systems are transforming enterprise operations. 
              Complete implementation guide with real-world examples.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/blog/ai-2025-autonomous-enterprise-systems-revolution"
                className="text-blue-400 hover:text-blue-300 font-semibold text-sm"
              >
                Read More →
              </Link>
              <span className="text-xs opacity-75">20 min read</span>
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Real-World Success Stories</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
              <div className="flex items-center mb-4">
                <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">CASE STUDY</span>
                <span className="ml-3 text-sm opacity-75">Manufacturing</span>
              </div>
              <h4 className="text-xl font-bold mb-4">
                Global Manufacturing Giant: 340% ROI
              </h4>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                How a Fortune 500 manufacturing company achieved $50M+ in annual savings 
                through comprehensive AI transformation.
              </p>
              <div className="flex items-center justify-between">
                <Link 
                  href="/case-studies/global-manufacturing-ai-transformation"
                  className="text-blue-400 hover:text-blue-300 font-semibold text-sm"
                >
                  View Case Study →
                </Link>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-400">340%</div>
                  <div className="text-xs opacity-75">ROI</div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
              <div className="flex items-center mb-4">
                <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">CASE STUDY</span>
                <span className="ml-3 text-sm opacity-75">Financial Services</span>
              </div>
              <h4 className="text-xl font-bold mb-4">
                Financial Services Leader: 280% ROI
              </h4>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                How a major financial services company revolutionized operations 
                and achieved $35M+ in annual savings with AI.
              </p>
              <div className="flex items-center justify-between">
                <Link 
                  href="/case-studies/financial-services-ai-revolution"
                  className="text-blue-400 hover:text-blue-300 font-semibold text-sm"
                >
                  View Case Study →
                </Link>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-400">280%</div>
                  <div className="text-xs opacity-75">ROI</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resource Guides Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Implementation Resources</h3>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <div className="flex items-center mb-4">
              <span className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">RESOURCE</span>
              <span className="ml-3 text-sm opacity-75">Implementation Guide</span>
            </div>
            <h4 className="text-2xl font-bold mb-4">
              AI Implementation Checklist 2025
            </h4>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Complete step-by-step checklist for successful AI implementation. 
              Covering strategy, technology, team, and execution phases.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">12</div>
                <div className="text-sm opacity-75">Implementation Phases</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">150+</div>
                <div className="text-sm opacity-75">Action Items</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
                <div className="text-sm opacity-75">Success Rate</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Link 
                href="/resources/ai-implementation-checklist-2025-ultimate"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Download Checklist →
              </Link>
              <span className="text-sm opacity-75">Free Resource</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already leveraging AI to achieve unprecedented growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-lg"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateShowcase;