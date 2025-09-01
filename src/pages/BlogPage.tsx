import React from 'react';

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Blog & Insights</h1>
        <p className="text-lg text-gray-300 max-w-3xl mb-8">
          Stay updated with the latest technology trends, industry insights, and company news.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">AI in Modern Business</h3>
              <p className="text-gray-300 mb-4">
                Exploring how artificial intelligence is transforming business operations and decision-making processes.
              </p>
              <span className="text-sm text-cyan-400">Read More →</span>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Cybersecurity Trends 2025</h3>
              <p className="text-gray-300 mb-4">
                The latest developments in cybersecurity and how to protect your digital assets.
              </p>
              <span className="text-sm text-cyan-400">Read More →</span>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-green-500 to-teal-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Cloud Computing Solutions</h3>
              <p className="text-gray-300 mb-4">
                Understanding cloud infrastructure and its benefits for modern businesses.
              </p>
              <span className="text-sm text-cyan-400">Read More →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage; 