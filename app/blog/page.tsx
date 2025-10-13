'use client';
import React from 'react';

const BlogPage = () => {
  const posts = [
    {
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations.',
      date: '2024-01-15',
      author: 'John Doe'
    },
    {
      title: 'Cloud Migration Best Practices',
      excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud.',
      date: '2024-01-10',
      author: 'Jane Smith'
    },
    {
      title: 'Cybersecurity Trends 2024',
      excerpt: 'Stay ahead of the latest cybersecurity threats and protection strategies.',
      date: '2024-01-05',
      author: 'Mike Johnson'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and best practices in AI and IT.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-800/70 transition duration-300">
              <h2 className="text-xl font-bold text-white mb-3">{post.title}</h2>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>By {post.author}</span>
                <span>{post.date}</span>
              </div>
              <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                Read More
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced page solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Page</h1>
          <p className="text-xl text-gray-300 mb-8">
            Advanced page solutions by Zion Tech Group
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
        <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
        <p className="text-gray-300">
          This page is under development. Please check back later for updates.
        </p>
      </div>
    
        </div>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
