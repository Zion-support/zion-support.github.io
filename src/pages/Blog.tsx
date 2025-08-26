
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise Technology",
      excerpt: "Discover how artificial intelligence is transforming business operations and what it means for your organization.",
      author: "Zion Tech Team",
      date: "2024-01-15",
      category: "AI & Machine Learning",
      readTime: "5 min read",
      image: "/images/blog/ai-enterprise.jpg"
    },
    {
      id: 2,
      title: "Cybersecurity Trends for 2024",
      excerpt: "Stay ahead of emerging threats with our comprehensive analysis of cybersecurity trends and best practices.",
      author: "Security Experts",
      date: "2024-01-10",
      category: "Cybersecurity",
      readTime: "7 min read",
      image: "/images/blog/cybersecurity-2024.jpg"
    },
    {
      id: 3,
      title: "Cloud Migration Strategies for SMBs",
      excerpt: "Learn the best practices for migrating your small to medium business to the cloud efficiently and securely.",
      author: "Cloud Specialists",
      date: "2024-01-05",
      category: "Cloud Computing",
      readTime: "6 min read",
      image: "/images/blog/cloud-migration.jpg"
    },
    {
      id: 4,
      title: "Quantum Computing: What Businesses Need to Know",
      excerpt: "Explore the potential impact of quantum computing on business operations and strategic planning.",
      author: "Quantum Research Team",
      date: "2024-01-01",
      category: "Emerging Tech",
      readTime: "8 min read",
      image: "/images/blog/quantum-computing.jpg"
    }
  ];

  const categories = [
    "All Posts",
    "AI & Machine Learning",
    "Cybersecurity",
    "Cloud Computing",
    "Digital Transformation",
    "Emerging Tech",
    "IT Infrastructure",
    "Case Studies"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="bg-zion-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Zion Tech Blog</h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and innovations in technology. 
            From AI breakthroughs to cybersecurity best practices, discover what's shaping the future of tech.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Categories Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-zion-purple text-white'
                    : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-purple/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-zion-cyan to-zion-purple flex items-center justify-center">
                <span className="text-white text-lg font-medium">{post.category}</span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-3">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-zion-slate-dark mb-3 hover:text-zion-purple transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                
                <p className="text-zion-slate-light mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zion-slate-light">{post.readTime}</span>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="flex items-center gap-2 text-zion-purple hover:text-zion-cyan transition-colors font-medium"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-zion-gradient rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
            Get the latest tech insights and industry updates delivered directly to your inbox. 
            Join thousands of professionals staying ahead of the curve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-zion-slate-dark placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            />
            <button className="bg-zion-purple hover:bg-zion-purple/80 px-6 py-3 rounded-lg font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
