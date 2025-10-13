import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore the latest AI trends shaping the business landscape in 2024 and how companies can leverage these technologies for growth.",
      author: "Zion Tech Group",
      date: "2024-01-15",
      category: "AI & Machine Learning",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "5G Technology: Transforming Industries and Creating New Opportunities",
      excerpt: "Discover how 5G technology is revolutionizing various industries and creating unprecedented opportunities for innovation.",
      author: "Zion Tech Group",
      date: "2024-01-10",
      category: "5G Technology",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Micro SAAS Solutions: The Future of Business Software",
      excerpt: "Learn about the growing trend of micro SAAS solutions and how they're changing the way businesses operate.",
      author: "Zion Tech Group",
      date: "2024-01-05",
      category: "Micro SAAS",
      readTime: "6 min read",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and innovations in AI, IT, and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-slate-800/50 backdrop-blur-md rounded-xl border border-cyan-500/20 p-6 hover:border-cyan-400/40 transition-all duration-300 group"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                  {post.category}
                </span>
              </div>
              
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {post.title}
              </h2>
              
              <p className="text-gray-300 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <Link
                to={`/blog/${post.id}`}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group-hover:translate-x-1"
              >
                Read More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            More articles coming soon! Subscribe to our newsletter to stay updated.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;