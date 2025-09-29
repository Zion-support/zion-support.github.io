import React from 'react';
import Link from 'next/link';

export default function NewContent2027Showcase() {
  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-lg font-bold mb-6">
            <span className="animate-bounce">🚀</span>
            NEW 2027 CONTENT SHOWCASE
            <span className="animate-bounce">🚀</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cutting-Edge AI Content for 2027
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest insights, breakthroughs, and success stories from the forefront of AI innovation. 
            Stay ahead with content that defines the future.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Blog Post 1 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden border border-gray-200">
            <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <div className="text-6xl">🧠</div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">BLOG</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">NEW 2027</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                AI 2027 Breakthrough Technologies
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Discover the revolutionary AI technologies that will define 2027: quantum-neural hybrid systems, 
                consciousness-level AI, and self-evolving architectures.
              </p>
              <div className="flex items-center justify-between">
                <Link
                  href="/blog/ai-2027-breakthrough-technologies"
                  className="text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  Read More →
                </Link>
                <span className="text-sm text-gray-500">18 min read</span>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden border border-gray-200">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <div className="text-6xl">🏢</div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">BLOG</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">BREAKTHROUGH</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Autonomous Enterprise Operations
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Learn how AI systems are managing entire organizations autonomously, achieving 400-600% 
                improvements in operational efficiency.
              </p>
              <div className="flex items-center justify-between">
                <Link
                  href="/blog/ai-autonomous-enterprise-operations-2027"
                  className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Read More →
                </Link>
                <span className="text-sm text-gray-500">15 min read</span>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden border border-gray-200">
            <div className="h-48 bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
              <div className="text-6xl">⚛️</div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">BLOG</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">REVOLUTIONARY</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                Quantum Neural Networks
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Explore the revolutionary fusion of quantum computing and neural networks, creating 
                the next generation of AI capabilities.
              </p>
              <div className="flex items-center justify-between">
                <Link
                  href="/blog/ai-quantum-neural-networks-2027"
                  className="text-green-600 font-semibold hover:text-green-800 transition-colors"
                >
                  Read More →
                </Link>
                <span className="text-sm text-gray-500">18 min read</span>
              </div>
            </div>
          </div>

          {/* Case Study 1 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden border border-gray-200">
            <div className="h-48 bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
              <div className="text-6xl">💰</div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">CASE STUDY</span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">MEGA SUCCESS</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                $500M Revenue Growth Success
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                See how a Fortune 100 company achieved unprecedented growth through comprehensive AI transformation, 
                with 1,200% ROI in just 18 months.
              </p>
              <div className="flex items-center justify-between">
                <Link
                  href="/case-studies/ai-2027-transformation-mega-success"
                  className="text-yellow-600 font-semibold hover:text-yellow-800 transition-colors"
                >
                  Read More →
                </Link>
                <span className="text-sm text-gray-500">20 min read</span>
              </div>
            </div>
          </div>

          {/* Coming Soon Card */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden text-white">
            <div className="h-48 flex items-center justify-center">
              <div className="text-6xl">🔮</div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">COMING SOON</span>
                <span className="bg-yellow-400/20 text-yellow-200 px-3 py-1 rounded-full text-sm font-semibold">EXCLUSIVE</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                AI Consciousness & Ethics 2027
              </h3>
              <p className="text-gray-200 mb-4 leading-relaxed">
                Deep dive into the ethical implications of consciousness-level AI systems and the frameworks 
                needed for responsible AI development.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-white/70 font-semibold">Coming Soon</span>
                <span className="text-sm text-white/70">Q2 2027</span>
              </div>
            </div>
          </div>

          {/* Interactive Demo Card */}
          <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden text-white">
            <div className="h-48 flex items-center justify-center">
              <div className="text-6xl">🎮</div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">INTERACTIVE</span>
                <span className="bg-green-400/20 text-green-200 px-3 py-1 rounded-full text-sm font-semibold">DEMO</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                AI 2027 Technology Simulator
              </h3>
              <p className="text-gray-200 mb-4 leading-relaxed">
                Experience the power of 2027 AI technologies through our interactive simulator. 
                Test quantum neural networks and consciousness-level AI systems.
              </p>
              <div className="flex items-center justify-between">
                <Link
                  href="/demo/ai-2027-simulator"
                  className="text-white font-semibold hover:text-yellow-200 transition-colors"
                >
                  Try Demo →
                </Link>
                <span className="text-sm text-white/70">Interactive</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Stats */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 text-white mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">2027 Content Impact</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-gray-300">New Articles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">1M+</div>
              <div className="text-gray-300">Monthly Readers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-gray-300">Reader Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">25</div>
              <div className="text-gray-300">Success Stories</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Ahead of the AI Revolution
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get exclusive access to the latest AI insights, breakthrough technologies, and success stories 
            that are shaping the future of business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              Explore All Content
            </Link>
            <Link
              href="/contact"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-600 hover:text-white transition-all"
            >
              Get Custom AI Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}