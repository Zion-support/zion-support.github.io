import React from 'react';
import Link from 'next/link';

const NewContent2025ShowcaseBanner = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 mb-8 font-bold text-lg">
            ✨ NEW AI 2025 CONTENT
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
            Revolutionary AI Breakthroughs
          </h2>
          <p className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed">
            Discover the latest AI 2025 innovations that are transforming industries and creating unprecedented opportunities for growth and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Featured Blog Posts */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-yellow-300 mb-8">Latest Blog Posts</h3>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">⚛️</div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-3 text-yellow-300">Quantum Computing Revolution</h4>
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    How quantum computing is revolutionizing enterprise AI with 1000x speed improvements and exponential processing power.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">January 15, 2025</span>
                    <Link 
                      href="/blog/ai-2025-quantum-computing-revolution-enterprise-breakthrough"
                      className="text-yellow-300 font-semibold hover:text-yellow-200 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🤖</div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-3 text-yellow-300">Autonomous Enterprise Guide</h4>
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    Complete implementation guide for transforming your organization into a fully autonomous entity with AI systems.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">January 15, 2025</span>
                    <Link 
                      href="/blog/ai-2025-autonomous-enterprise-transformation-complete-guide"
                      className="text-yellow-300 font-semibold hover:text-yellow-200 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Case Studies */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-yellow-300 mb-8">Success Stories</h3>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🏭</div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-3 text-yellow-300">Manufacturing Transformation</h4>
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    Fortune 500 manufacturer achieved 60% cost reduction and 99.5% efficiency through AI transformation.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">$2.3B savings achieved</span>
                    <Link 
                      href="/case-studies/ai-2025-global-manufacturing-autonomous-transformation-success"
                      className="text-yellow-300 font-semibold hover:text-yellow-200 transition-colors"
                    >
                      View Case Study →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🏥</div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-3 text-yellow-300">Healthcare Revolution</h4>
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    Major healthcare system achieved 90% patient satisfaction and 50% cost reduction through AI transformation.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">$1.8B savings achieved</span>
                    <Link 
                      href="/case-studies/ai-2025-healthcare-revolution-complete-transformation-success"
                      className="text-yellow-300 font-semibold hover:text-yellow-200 transition-colors"
                    >
                      View Case Study →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-yellow-300 mb-2">$4.1B+</div>
            <div className="text-xl text-gray-200">Total Savings Achieved</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-yellow-300 mb-2">99.5%</div>
            <div className="text-xl text-gray-200">Efficiency Rate</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-yellow-300 mb-2">90%</div>
            <div className="text-xl text-gray-200">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-yellow-300 mb-2">60%</div>
            <div className="text-xl text-gray-200">Cost Reduction</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-12 border border-white border-opacity-20">
            <h3 className="text-4xl font-bold mb-6 text-yellow-300">Ready to Join the AI Revolution?</h3>
            <p className="text-2xl mb-10 text-gray-200 max-w-4xl mx-auto">
              Don't let your competitors gain the AI advantage. Start your transformation journey today and discover how these breakthrough technologies can revolutionize your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-5 rounded-xl font-bold text-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Get Free AI Assessment
              </Link>
              <Link
                href="/blog"
                className="border-2 border-yellow-400 text-yellow-400 px-10 py-5 rounded-xl font-bold text-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Explore All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025ShowcaseBanner;