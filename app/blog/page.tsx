import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "ai", name: "AI & Machine Learning", count: 5 },
    { id: "cybersecurity", name: "Cybersecurity", count: 3 },
    { id: "cloud", name: "Cloud Computing", count: 2 },
    { id: "development", name: "Development", count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends and how they're transforming businesses across industries.",
      author: "Zion Tech Team",
      date: "2024-01-15",
      category: "ai",
      readTime: "5 min read",
      image: "🤖",
      tags: ["AI", "Business", "Technology", "Future"]
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Essential cybersecurity measures every small business should implement to protect their data.",
      author: "Security Team",
      date: "2024-01-12",
      category: "cybersecurity",
      readTime: "7 min read",
      image: "🔒",
      tags: ["Security", "Small Business", "Data Protection"]
    },
    {
      id: 3,
      title: "Cloud Migration: A Step-by-Step Guide",
      excerpt: "Learn how to successfully migrate your business to the cloud with our comprehensive guide.",
      author: "Cloud Team",
      date: "2024-01-10",
      category: "cloud",
      readTime: "8 min read",
      image: "☁️",
      tags: ["Cloud", "Migration", "Guide", "Infrastructure"]
    },
    {
      id: 4,
      title: "Building Scalable Web Applications with Modern Technologies",
      excerpt: "Discover the latest technologies and practices for building scalable web applications.",
      author: "Development Team",
      date: "2024-01-08",
      category: "development",
      readTime: "6 min read",
      image: "💻",
      tags: ["Web Development", "Scalability", "Technology"]
    },
    {
      id: 5,
      title: "Machine Learning in Healthcare: Real-World Applications",
      excerpt: "How machine learning is revolutionizing healthcare and improving patient outcomes.",
      author: "AI Team",
      date: "2024-01-05",
      category: "ai",
      readTime: "9 min read",
      image: "🏥",
      tags: ["AI", "Healthcare", "Machine Learning", "Innovation"]
    },
    {
      id: 6,
      title: "Data Privacy Regulations: What Businesses Need to Know",
      excerpt: "Understanding GDPR, CCPA, and other data privacy regulations affecting your business.",
      author: "Legal Team",
      date: "2024-01-03",
      category: "cybersecurity",
      readTime: "6 min read",
      image: "📋",
      tags: ["Privacy", "Regulations", "Compliance", "GDPR"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Insights, trends, and best practices in AI, IT, and technology from Zion Tech Group experts." />
        <meta name="keywords" content="blog, AI insights, IT trends, technology, cybersecurity, cloud computing, Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and best practices in AI, IT, and technology.
          </p>
        </div>

        {/* Categories */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    category.id === 'all'
                      ? 'bg-purple-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-6xl mb-6">{post.image}</div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="inline-flex items-center px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{post.readTime}</span>
                    <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;