import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, Search } from 'lucide-react';

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore the latest AI trends that are transforming businesses in 2024, from automation to predictive analytics.",
      author: "Zion Tech Group",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["AI", "Business", "Technology"],
      image: "/api/placeholder/600/300",
      featured: true
    },
    {
      id: 2,
      title: "5G Technology: Revolutionizing Connectivity and IoT",
      excerpt: "Discover how 5G technology is enabling new possibilities in IoT, edge computing, and smart city solutions.",
      author: "Zion Tech Group",
      date: "2024-01-10",
      readTime: "7 min read",
      tags: ["5G", "IoT", "Connectivity"],
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 3,
      title: "Micro SAAS Solutions: The Future of Business Software",
      excerpt: "Learn about the growing trend of micro SAAS solutions and how they're changing the software landscape.",
      author: "Zion Tech Group",
      date: "2024-01-05",
      readTime: "6 min read",
      tags: ["SAAS", "Software", "Business"],
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 4,
      title: "Cybersecurity Best Practices for Modern Businesses",
      excerpt: "Essential cybersecurity strategies to protect your business from evolving threats in the digital age.",
      author: "Zion Tech Group",
      date: "2024-01-01",
      readTime: "8 min read",
      tags: ["Cybersecurity", "Security", "Business"],
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 5,
      title: "Cloud Infrastructure: Scaling Your Business with the Cloud",
      excerpt: "How cloud infrastructure can help your business scale efficiently and cost-effectively.",
      author: "Zion Tech Group",
      date: "2023-12-28",
      readTime: "6 min read",
      tags: ["Cloud", "Infrastructure", "Scaling"],
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 6,
      title: "Digital Transformation: A Complete Guide for Businesses",
      excerpt: "A comprehensive guide to digital transformation and how to successfully implement it in your organization.",
      author: "Zion Tech Group",
      date: "2023-12-25",
      readTime: "10 min read",
      tags: ["Digital Transformation", "Business", "Strategy"],
      image: "/api/placeholder/600/300",
      featured: false
    }
  ];

  const categories = ["All", "AI", "5G", "SAAS", "Cybersecurity", "Cloud", "Digital Transformation"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.tags.includes(selectedCategory);
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Tech Blog
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay updated with the latest insights, trends, and innovations in AI, 5G, 
            micro SAAS, and digital transformation.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-cyan-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {selectedCategory === "All" && searchTerm === "" && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>
            {(() => {
              const featuredPost = posts.find(post => post.featured);
              if (!featuredPost) return null;
              
              return (
                <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden hover:bg-white/20 transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <User className="w-4 h-4 mr-1" />
                          {featuredPost.author}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {featuredPost.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredPost.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                          >
                            <Tag className="w-3 h-3 inline mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">{featuredPost.readTime}</span>
                        <Link
                          to={`/blog/${featuredPost.id}`}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {post.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-500/20 flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
            <p className="text-gray-400">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl border border-white/20 p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Updated with Our Latest Articles
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get the latest insights on AI, 5G, micro SAAS, and digital transformation 
            delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
