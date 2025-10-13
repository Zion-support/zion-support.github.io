import { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { name: "All", count: 12 },
    { name: "AI & Machine Learning", count: 4 },
    { name: "Cybersecurity", count: 3 },
    { name: "Cloud Computing", count: 2 },
    { name: "Digital Transformation", count: 3 }
  ];

  const featuredPost = {
    id: 1,
    title: "The Future of AI in Business: 2024 Trends and Predictions",
    excerpt: "Explore how artificial intelligence is reshaping industries and what businesses need to know to stay competitive.",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    image: "/api/placeholder/800/400",
    featured: true
  };

  const posts = [
    {
      id: 2,
      title: "Cybersecurity Best Practices for Remote Teams",
      excerpt: "Essential security measures to protect your distributed workforce and company data.",
      author: "Michael Rodriguez",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Step-by-step approach to successfully migrating your infrastructure to the cloud.",
      author: "Emily Johnson",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "Cloud Computing",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Digital Transformation: Where to Start",
      excerpt: "Practical advice for businesses beginning their digital transformation journey.",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Digital Transformation",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Machine Learning in Healthcare: Real-World Applications",
      excerpt: "How ML is revolutionizing patient care and medical research.",
      author: "Dr. Sarah Chen",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "AI & Machine Learning",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Zero Trust Security Architecture",
      excerpt: "Implementing a zero trust approach to protect your organization's assets.",
      author: "Michael Rodriguez",
      date: "2024-01-03",
      readTime: "8 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/400/250"
    },
    {
      id: 7,
      title: "The Rise of Edge Computing",
      excerpt: "Understanding edge computing and its impact on modern applications.",
      author: "Emily Johnson",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "Cloud Computing",
      image: "/api/placeholder/400/250"
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights and updates from Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Blog
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Insights, Innovation, and Industry Trends
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <span className="text-yellow-400 text-sm">Featured</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 group hover:scale-105"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest insights and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                Subscribe
                <Zap className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;