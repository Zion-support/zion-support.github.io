import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOHead from '../components/SEOHead';

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog posts will be added here */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-3 text-white">Coming Soon</h3>
              <p className="text-gray-300">Blog posts are being prepared. Check back soon for the latest insights!</p>
            </div>
          </div>
        </div>
      </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-13a9
  );
}
};

export default BlogPage;