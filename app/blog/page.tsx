import React from 'react';
import SEOHead from '../components/SEOHead';

const BlogPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Blog - Zion Tech Group | AI & IT Solutions"
        description="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends."
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Coming Soon</h3>
              <p className="text-gray-300">We're working on bringing you the latest insights and updates.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
