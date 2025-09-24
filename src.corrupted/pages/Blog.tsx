import React from 'react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations.',
      date: 'January 15, 2025',
      author: 'Tech Team'
    },
    {
      title: 'Cloud Computing Best Practices',
      excerpt: 'Essential strategies for successful cloud migration and optimization.',
      date: 'January 10, 2025',
      author: 'Cloud Experts'
    },
    {
      title: 'Cybersecurity Trends 2025',
      excerpt: 'Latest developments in cybersecurity and how to protect your business.',
      date: 'January 5, 2025',
      author: 'Security Team'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Our Blog</h1>
        <p className="text-gray-300 text-lg text-center mb-12 max-w-3xl mx-auto">
          Stay updated with the latest insights, trends, and innovations in technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <h2 className="text-xl font-bold text-white mb-3">{post.title}</h2>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;