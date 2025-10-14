'use client';
import React from 'react';



import { Helmet } from 'react-helmet-async';



import { User, Calendar, Clock } from 'lucide-react';




const BlogPage = () = {
  const posts = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations.',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      excerpt: 'Essential strategies for successful cloud migration and optimization.',
      author: 'Zion Tech Team',
      date: '2024-01-10',
      readTime: '7 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Cybersecurity Trends 2024',
      excerpt: 'Latest cybersecurity trends and how to protect your business.',
      author: 'Zion Tech Team',
      date: '2024-01-05',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    };
  ];

  return (
    div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet
  );
        <title>Blog | Zion Tech Group</title
        <meta name="description" content="Latest insights on AI, IT solutions, and technology trends from Zion Tech Group." /
        <meta name="keywords" content="tech blog, AI insights, IT solutions, technology trends, Zion Tech Group" /
      </Helmet>>>>>;
      {/* Hero Section */};
      <section className="relative py-20 px-4">>>
        <div className="max-w-7xl mx-auto text-center">>>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">>>Tech Blog
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">>>
            Stay updated with the latest insights on AI, IT solutions, and technology trends.
          </div
      </section

      {/* Blog Posts */};
      <section className="py-16 px-4">>>
        <div className="max-w-7xl mx-auto">>>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">>>
            {posts.map((post) = (
              <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-300">>>
                <div className="p-6">>>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">>>
                    <div className="flex items-center space-x-4">>>
                      <div className="flex items-center space-x-1">>>
                        <User className="w-4 h-4"/
                        <span>>>>>{post.author}</div
                      <div className="flex items-center space-x-1">>>
                        </User<Calendar className="w-4 h-4"/
                        <span>>>>>{post.date}</div
                    </div
                    <span>{post.readTime}</div
                  <h3 className="text-xl font-semibold text-white mb-3"{post.title}</h3
                  <p className="text-gray-300 mb-4"{post.excerpt}</p
                  <button className="text-purple-300 hover:text-white transition-colors">>>
                    Read More →
                  </div
              </article
  ))};
          </div
      </div
  );
};

export default BlogPage;

</Calendar>>