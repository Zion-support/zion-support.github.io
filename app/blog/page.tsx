import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Blog - Zion Tech Group"
        description="Latest insights, tutorials, and updates from Zion Tech Group on AI, technology, and digital transformation."
        keywords="blog, technology insights, AI tutorials, digital transformation, tech news"
        canonical="/blog"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Blog
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest insights, tutorials, and updates from Zion Tech Group on AI, technology, and digital transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Coming Soon</h3>
            <p className="text-gray-300 mb-4">We're working on exciting content for our blog. Check back soon for the latest insights and tutorials.</p>
            <div className="text-cyan-400 text-sm">Stay tuned...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;