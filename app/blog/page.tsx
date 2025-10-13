import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore the latest AI trends shaping the business landscape in 2024, from quantum computing to neural interfaces.",
      author: "Zion Tech Group",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI Technology",
      image: "/api/placeholder/600/400",
      slug: "future-ai-business-2024-trends"
    },
    {
      id: 2,
      title: "Quantum Computing: Breaking Through Traditional Barriers",
      excerpt: "Discover how quantum computing is revolutionizing data processing and what it means for your business.",
      author: "Zion Tech Group",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Quantum Computing",
      image: "/api/placeholder/600/400",
      slug: "quantum-computing-breaking-barriers"
    },
    {
      id: 3,
      title: "Cybersecurity in the Age of AI: New Threats and Solutions",
      excerpt: "Learn about the evolving cybersecurity landscape and how AI is both a threat and a solution.",
      author: "Zion Tech Group",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/600/400",
      slug: "cybersecurity-ai-threats-solutions"
    },
    {
      id: 4,
      title: "5G Technology: Transforming Industries and Creating Opportunities",
      excerpt: "Explore how 5G technology is creating new opportunities across various industries and sectors.",
      author: "Zion Tech Group",
      date: "2024-01-01",
      readTime: "8 min read",
      category: "5G Technology",
      image: "/api/placeholder/600/400",
      slug: "5g-technology-transforming-industries"
    },
    {
      id: 5,
      title: "Micro SAAS: The Future of Software Distribution",
      excerpt: "Discover how micro SAAS solutions are changing the way businesses access and use software.",
      author: "Zion Tech Group",
      date: "2023-12-28",
      readTime: "4 min read",
      category: "Micro SAAS",
      image: "/api/placeholder/600/400",
      slug: "micro-saas-future-software-distribution"
    },
    {
      id: 6,
      title: "Neural Interfaces: The Next Frontier in Human-Computer Interaction",
      excerpt: "Learn about the latest developments in brain-computer interfaces and their potential applications.",
      author: "Zion Tech Group",
      date: "2023-12-25",
      readTime: "9 min read",
      category: "Neural Technology",
      image: "/api/placeholder/600/400",
      slug: "neural-interfaces-human-computer-interaction"
    }
  ];

  const categories = [
    "All Posts",
    "AI Technology",
    "Quantum Computing",
    "Cybersecurity",
    "5G Technology",
    "Micro SAAS",
    "Neural Technology"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and emerging technologies from Zion Tech Group experts."
        keywords="AI blog, technology insights, quantum computing, cybersecurity, 5G technology, micro SAAS, neural interfaces"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Technology Insights & News
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights on AI, quantum computing, cybersecurity, 
            and the latest technological innovations shaping our future.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Categories Filter */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                  <div className="text-6xl text-purple-400/50">📝</div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <div className="mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300">
                      <Tag className="w-3 h-3 mr-1" />
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group-hover:translate-x-1 transform duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
              Load More Posts
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest technology insights, AI breakthroughs, and industry news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
