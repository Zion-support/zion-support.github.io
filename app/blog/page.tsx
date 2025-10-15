import React from 'react';
import SEOHead from '../components/SEOHead';

const BlogPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Blog - Zion Tech Group | AI & IT Solutions"
        description="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
            <p className="text-gray-300">Coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
