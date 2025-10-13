import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Blog - Latest Insights & News | Zion Tech Group"
        description="Stay updated with the latest insights, news, and trends in AI, technology, and digital transformation from Zion Tech Group."
        keywords="blog, technology news, AI insights, digital transformation, tech trends, industry updates"
        canonical="https://ziontechgroup.com/blog"
      />

      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Blog
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Coming soon - Stay tuned for the latest insights and updates!
          </p>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default BlogPage;