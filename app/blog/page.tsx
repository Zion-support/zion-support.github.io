import React from 'react';

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Blog & Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and innovations in AI, technology, and digital transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Articles */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-cyan-400 text-sm font-medium mb-2">Featured</div>
            <h3 className="text-xl font-bold text-white mb-3">
              The Future of AI in Enterprise
            </h3>
            <p className="text-gray-300 mb-4">
              Explore how artificial intelligence is transforming enterprise operations and driving unprecedented growth.
            </p>
            <div className="text-sm text-gray-400">October 2024</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-purple-400 text-sm font-medium mb-2">Technology</div>
            <h3 className="text-xl font-bold text-white mb-3">
              Quantum Computing Breakthroughs
            </h3>
            <p className="text-gray-300 mb-4">
              Discover the latest advances in quantum computing and their practical applications in business.
            </p>
            <div className="text-sm text-gray-400">September 2024</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-green-400 text-sm font-medium mb-2">Innovation</div>
            <h3 className="text-xl font-bold text-white mb-3">
              Autonomous Systems Revolution
            </h3>
            <p className="text-gray-300 mb-4">
              Learn how autonomous systems are reshaping industries and creating new opportunities.
            </p>
            <div className="text-sm text-gray-400">August 2024</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-orange-400 text-sm font-medium mb-2">Strategy</div>
            <h3 className="text-xl font-bold text-white mb-3">
              Digital Transformation Guide
            </h3>
            <p className="text-gray-300 mb-4">
              A comprehensive guide to successful digital transformation in modern enterprises.
            </p>
            <div className="text-sm text-gray-400">July 2024</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-blue-400 text-sm font-medium mb-2">Security</div>
            <h3 className="text-xl font-bold text-white mb-3">
              AI-Powered Cybersecurity
            </h3>
            <p className="text-gray-300 mb-4">
              How artificial intelligence is enhancing cybersecurity and protecting digital assets.
            </p>
            <div className="text-sm text-gray-400">June 2024</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-pink-400 text-sm font-medium mb-2">Future</div>
            <h3 className="text-xl font-bold text-white mb-3">
              The Next Decade of Tech
            </h3>
            <p className="text-gray-300 mb-4">
              Predictions and insights into the technological landscape of the next decade.
            </p>
            <div className="text-sm text-gray-400">May 2024</div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-purple-100 mb-6">
            Subscribe to our newsletter for the latest insights and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;