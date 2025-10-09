import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Healthcare: Transforming Patient Care",
      excerpt: "Explore how artificial intelligence is revolutionizing healthcare delivery, from diagnostic imaging to personalized treatment plans.",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI Healthcare",
      image: "/blog/ai-healthcare.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing: The Next Frontier in Business Technology",
      excerpt: "Discover how quantum computing is poised to solve complex business problems that are impossible for classical computers.",
      author: "Michael Rodriguez",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Quantum Computing",
      image: "/blog/quantum-computing.jpg",
      featured: true
    },
    {
      id: 3,
      title: "Building Scalable AI Infrastructure: Best Practices",
      excerpt: "Learn the essential strategies for creating robust, scalable AI infrastructure that can grow with your business needs.",
      author: "Alex Thompson",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "AI Infrastructure",
      image: "/blog/ai-infrastructure.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Cybersecurity in the Age of AI: New Threats and Solutions",
      excerpt: "Understand the evolving cybersecurity landscape and how AI is both creating new challenges and providing innovative solutions.",
      author: "Jennifer Park",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Cybersecurity",
      image: "/blog/cybersecurity.jpg",
      featured: false
    },
    {
      id: 5,
      title: "The ROI of AI Implementation: A Comprehensive Guide",
      excerpt: "Calculate the true return on investment for AI projects and learn how to measure success beyond just cost savings.",
      author: "David Kim",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "Business Strategy",
      image: "/blog/ai-roi.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Edge Computing and AI: Bringing Intelligence to the Edge",
      excerpt: "Explore how edge computing is enabling real-time AI processing and transforming industries from manufacturing to retail.",
      author: "Lisa Wang",
      date: "2024-01-03",
      readTime: "5 min read",
      category: "Edge Computing",
      image: "/blog/edge-computing.jpg",
      featured: false
    }
  ];

  const categories = [
    "All Posts",
    "AI Healthcare",
    "Quantum Computing",
    "AI Infrastructure",
    "Cybersecurity",
    "Business Strategy",
    "Edge Computing"
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, and business transformation from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, business transformation, AI trends, tech news" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center neon-text cyber-text">
              Technology Blog
            </h1>
            
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Stay ahead of the curve with insights, trends, and expert analysis on AI, 
              technology, and business transformation from our team of experts.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    index === 0
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Featured Posts */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {blogPosts.filter(post => post.featured).map((post) => (
                  <article key={post.id} className="cyber-card p-6 hover:scale-105 transition-transform duration-300">
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-4xl">📚</div>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        By {post.author}
                      </div>
                      <button className="text-cyan-400 hover:text-cyan-300 flex items-center space-x-1 transition-colors">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* All Posts */}
            <div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">All Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                  <article key={post.id} className="cyber-card p-4 hover:scale-105 transition-transform duration-300">
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-2xl">📖</div>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>By {post.author}</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16">
              <div className="cyber-card p-8 text-center">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Stay Updated</h2>
                <p className="text-gray-300 mb-6">
                  Get the latest AI and technology insights delivered to your inbox. 
                  Join thousands of professionals who trust our expertise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  />
                  <button className="cyber-button">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;