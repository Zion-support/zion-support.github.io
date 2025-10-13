import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, Clock, Search, Filter } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';
import ResponsiveText from '../components/ResponsiveText';

const BlogPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Zion Tech Group Blog",
    "description": "Latest insights on AI, technology, and digital transformation",
    "url": "https://ziontechgroup.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.",
      author: "Zion Tech Team",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI & Machine Learning",
      image: "/api/placeholder/600/300",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Modern Enterprises",
      excerpt: "Learn essential cybersecurity strategies to protect your organization from evolving digital threats.",
      author: "Security Team",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 3,
      title: "5G Technology: Transforming Industries and Connectivity",
      excerpt: "Discover how 5G technology is revolutionizing industries and enabling new possibilities for innovation.",
      author: "5G Solutions Team",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "5G Technology",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 4,
      title: "Micro SAAS Solutions: The Future of Business Software",
      excerpt: "Understanding how micro SAAS solutions are changing the way businesses approach software and automation.",
      author: "Product Team",
      date: "2024-01-01",
      readTime: "4 min read",
      category: "Micro SAAS",
      image: "/api/placeholder/600/300",
      featured: false
    }
  ];

  const categories = [
    "All",
    "AI & Machine Learning",
    "Cybersecurity",
    "5G Technology",
    "Micro SAAS",
    "Cloud Computing",
    "Digital Transformation"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion Tech Group Blog - AI, Technology & Digital Transformation Insights"
        description="Stay updated with the latest insights on AI, cybersecurity, 5G technology, and digital transformation from Zion Tech Group experts."
        keywords="AI blog, technology insights, cybersecurity, 5G technology, digital transformation, business automation"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <ResponsiveContainer>
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tech Insights & News
            </h1>
            <ResponsiveText className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead with the latest insights on AI, technology, and digital transformation
            </ResponsiveText>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4">
        <ResponsiveContainer>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
            {blogPosts.filter(post => post.featured).map((post) => (
              <FuturisticCard key={post.id} className="group hover:scale-105 transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/2">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <div className="lg:w-1/2 space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">
                        <Tag className="w-3 h-3 mr-1" />
                        {post.category}
                      </span>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4">
        <ResponsiveContainer>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Latest Articles</h2>
            <ResponsiveGrid className="gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <FuturisticCard key={post.id} className="group hover:scale-105 transition-all duration-300">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="space-y-3">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {post.category}
                      </span>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <ResponsiveText className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest tech insights and updates delivered to your inbox
            </ResponsiveText>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default BlogPage;
