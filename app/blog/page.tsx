import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';;
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: Trends and Predictions for 2024',
      excerpt: 'Explore the latest trends in enterprise AI adoption and how businesses are leveraging artificial intelligence to drive innovation and growth.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      featured: true
    },
    {
      id: 2,
      title: '5G Implementation: A Complete Guide for Businesses',
      excerpt: 'Everything you need to know about implementing 5G technology in your business, from planning to deployment and optimization.',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '12 min read',
      category: '5G Technology',
      featured: false
    },
    {
      id: 3,
      title: 'Cloud Migration Best Practices: Avoiding Common Pitfalls',
      excerpt: 'Learn from our experience helping 500+ companies migrate to the cloud successfully. Discover the best practices and common mistakes to avoid.',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Cloud Computing',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, 5G technology, and digital transformation from Zion Tech Group experts." />
        <meta name="keywords" content="blog, AI insights, cloud computing, 5G technology, cybersecurity, digital transformation, technology trends" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Insights, trends, and expert advice on AI, cloud computing, 5G technology, and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="bg-gray-800 rounded-lg h-48 flex items-center justify-center mb-6">
                  <span className="text-gray-400">Post Image</span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-purple-300 text-sm font-medium">{post.category}</span>
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <User className="w-4 h-4 mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium mt-4"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
