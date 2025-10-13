import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore the latest AI trends shaping the business landscape in 2024 and how companies can leverage these technologies for growth.",
      author: "Zion Tech Group",
      date: "2024-01-15",
      category: "AI",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "5G Technology: Transforming Industries and Creating New Opportunities",
      excerpt: "Discover how 5G technology is revolutionizing various industries and creating unprecedented opportunities for innovation.",
      author: "Zion Tech Group",
      date: "2024-01-10",
      category: "5G",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Micro SAAS Solutions: The Future of Business Software",
      excerpt: "Learn about the growing trend of micro SAAS solutions and how they're changing the way businesses approach software needs.",
      author: "Zion Tech Group",
      date: "2024-01-05",
      category: "Technology",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO 
        title="Blog - Zion Tech Group"
        description="Latest insights, trends, and updates from Zion Tech Group on AI, IT services, 5G technology, and digital transformation."
        keywords="AI blog, technology trends, business insights, digital transformation, 5G technology, micro SAAS"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Blog</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Stay updated with the latest insights, trends, and innovations in AI, IT services, and technology.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-blue-500 transition-colors overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold text-white mb-3 hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest insights and updates delivered directly to your inbox.
          </p>
          <Link 
            to="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center"
          >
            Subscribe Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
