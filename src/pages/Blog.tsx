import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business",
      excerpt: "Exploring how artificial intelligence is transforming modern business operations and what it means for your organization.",
      author: "Zion Tech Team",
      date: "2024-01-15",
      image: "/images/blog/ai-future.jpg"
    },
    {
      id: 2,
      title: "Cloud Computing Best Practices",
      excerpt: "Essential strategies for implementing and managing cloud infrastructure effectively in your business.",
      author: "Zion Tech Team",
      date: "2024-01-10",
      image: "/images/blog/cloud-computing.jpg"
    },
    {
      id: 3,
      title: "Cybersecurity Trends 2024",
      excerpt: "Stay ahead of the latest cybersecurity threats and learn how to protect your digital assets.",
      author: "Zion Tech Team",
      date: "2024-01-05",
      image: "/images/blog/cybersecurity.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Blog - Zion Tech Group"
        description="Insights, trends, and best practices in AI, cloud computing, and technology solutions."
        keywords={["blog", "insights", "technology", "AI", "cloud computing"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Our Blog</h1>
          <p className="text-xl text-gray-300">
            Insights, trends, and best practices in technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-slate-800/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-3">{post.title}</h2>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;