import React from 'react';
import SEOHead from '../components/SEOHead';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations.',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI'
    },
    {
      title: 'Cybersecurity Best Practices for 2024',
      excerpt: 'Essential security measures every business should implement to protect their data.',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Security'
    },
    {
      title: 'Cloud Migration Strategies',
      excerpt: 'A comprehensive guide to migrating your infrastructure to the cloud.',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Cloud'
    }
  ];

  return (
    <>
      <SEOHead
        title="Blog - Zion Tech Group"
        description="Latest insights on AI, IT solutions, cybersecurity, and digital transformation from Zion Tech Group experts."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, IT solutions, cybersecurity, and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-300 mb-6">More articles coming soon!</p>
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Subscribe to Updates
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
