import React from 'react';
import Link from 'next/link';

export default function UltimateContent2027Showcase() {
  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            🚀 ULTIMATE 2027 CONTENT COLLECTION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content That
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Transforms Businesses
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover the most advanced AI breakthroughs, success stories, and implementation guides 
            that are helping Fortune 500 companies achieve unprecedented results in 2027.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Featured Article */}
          <div className="lg:col-span-2">
            <Link 
              href="/blog/ai-2027-revolutionary-breakthroughs" 
              className="group block bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-48 flex items-center justify-center">
                  <div className="text-6xl">🚀</div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">BREAKTHROUGH 2027</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">NEW</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span>📅 January 15, 2027</span>
                  <span>•</span>
                  <span>⏱️ 12 min read</span>
                  <span>•</span>
                  <span>👁️ 2.3K views</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  AI 2027 Revolutionary Breakthroughs: The Future is Here
                </h3>
                <p className="text-gray-600 mb-6">
                  Discover the revolutionary AI breakthroughs of 2027: quantum neural networks, autonomous enterprise systems, 
                  and cognitive computing that will transform your business forever.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Enterprise AI
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Quantum Computing
                    </span>
                  </div>
                  <span className="text-purple-600 font-semibold group-hover:text-purple-700">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Sidebar Content */}
          <div className="space-y-6">
            {/* Case Study */}
            <Link 
              href="/case-studies/ai-quantum-neural-networks-mega-success-2027" 
              className="group block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-green-600 to-blue-600 h-32 flex items-center justify-center">
                <div className="text-4xl">🏆</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">MEGA SUCCESS</span>
                  <span className="text-sm text-gray-500">Case Study</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  Quantum Neural Networks: $500M ROI
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  How a Fortune 500 company achieved unprecedented success with quantum neural networks.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>18 min read</span>
                  <span className="text-green-600 font-semibold">View Case Study →</span>
                </div>
              </div>
            </Link>

            {/* Quantum AI Article */}
            <Link 
              href="/blog/ai-quantum-neural-networks-2027" 
              className="group block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-32 flex items-center justify-center">
                <div className="text-4xl">⚛️</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">TECHNICAL</span>
                  <span className="text-sm text-gray-500">Deep Dive</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  Quantum Neural Networks 2027
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  The ultimate AI breakthrough with 99.7% accuracy and 10,000x speed improvements.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>15 min read</span>
                  <span className="text-indigo-600 font-semibold">Read More →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Content Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">AI Breakthroughs</h3>
            <p className="text-sm text-gray-600 mb-4">Latest AI innovations and technological advances</p>
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
              Explore Articles →
            </Link>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl mb-4">🏆</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Success Stories</h3>
            <p className="text-sm text-gray-600 mb-4">Real-world case studies with proven ROI</p>
            <Link href="/case-studies" className="text-green-600 hover:text-green-700 font-semibold text-sm">
              View Case Studies →
            </Link>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Implementation</h3>
            <p className="text-sm text-gray-600 mb-4">Practical guides and implementation strategies</p>
            <Link href="/services" className="text-purple-600 hover:text-purple-700 font-semibold text-sm">
              Get Started →
            </Link>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl mb-4">🔮</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Future Trends</h3>
            <p className="text-sm text-gray-600 mb-4">Predictions and insights for 2027 and beyond</p>
            <Link href="/blog" className="text-orange-600 hover:text-orange-700 font-semibold text-sm">
              Read Predictions →
            </Link>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">2027 AI Content Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-sm opacity-90">New Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">25+</div>
              <div className="text-sm opacity-90">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">100K+</div>
              <div className="text-sm opacity-90">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">$2B+</div>
              <div className="text-sm opacity-90">Proven ROI</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business with 2027 AI?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of enterprise leaders who are already implementing these revolutionary AI breakthroughs 
            and achieving unprecedented results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your AI Transformation
            </Link>
            <Link 
              href="/blog" 
              className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-300"
            >
              Explore All Content
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}