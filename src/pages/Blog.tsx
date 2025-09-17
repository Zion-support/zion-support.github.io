import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and innovations in AI, technology, and business transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Blog Post */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
                <span className="text-gray-500 text-sm ml-4">January 15, 2025</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                The Future of AI: Revolutionary Breakthroughs in 2025
              </h2>
              <p className="text-gray-600 mb-6">
                Explore the cutting-edge AI innovations that are reshaping industries and transforming the way we work, live, and interact with technology.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
              >
                Read More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Regular Blog Posts */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500"></div>
              <div className="p-6">
                <span className="text-gray-500 text-sm">January 12, 2025</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2">
                  Quantum Computing: The Next Frontier
                </h3>
                <p className="text-gray-600 text-sm">
                  Discover how quantum computing is revolutionizing data processing and what it means for businesses.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-pink-400 to-red-500"></div>
              <div className="p-6">
                <span className="text-gray-500 text-sm">January 10, 2025</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2">
                  Neural Interfaces: Bridging Mind and Machine
                </h3>
                <p className="text-gray-600 text-sm">
                  Learn about the latest developments in brain-computer interfaces and their potential applications.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* More Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
            <div className="p-6">
              <span className="text-gray-500 text-sm">January 8, 2025</span>
              <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2">
                Autonomous Systems: The Future of Operations
              </h3>
              <p className="text-gray-600 text-sm">
                How autonomous systems are transforming business operations and creating new opportunities.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-r from-indigo-400 to-purple-500"></div>
            <div className="p-6">
              <span className="text-gray-500 text-sm">January 5, 2025</span>
              <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2">
                Cybersecurity in the AI Era
              </h3>
              <p className="text-gray-600 text-sm">
                Essential security strategies for protecting AI systems and data in an increasingly connected world.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-r from-teal-400 to-cyan-500"></div>
            <div className="p-6">
              <span className="text-gray-500 text-sm">January 3, 2025</span>
              <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2">
                The Metaverse: Beyond Virtual Reality
              </h3>
              <p className="text-gray-600 text-sm">
                Exploring the evolution of virtual worlds and their impact on business and society.
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-6 opacity-90">
            Get the latest insights delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;