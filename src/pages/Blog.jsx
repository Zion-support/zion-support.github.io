import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

// Mock blog data for now
const MOCK_BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of AI in Business",
    excerpt: "Discover how artificial intelligence is transforming business operations and creating new opportunities for growth and innovation.",
    category: "AI & Technology",
    publishedDate: "2024-01-15",
    readTime: "5 min read",
    author: { name: "Zion Tech Team", avatarUrl: "/images/avatar-placeholder.jpg" },
    featuredImage: "/images/blog-ai-future.jpg",
    slug: "future-of-ai-business",
    isFeatured: true
  },
  {
    id: 2,
    title: "Sustainable IT Solutions",
    excerpt: "Learn about green technology practices and how they can reduce costs while benefiting the environment.",
    category: "Sustainability",
    publishedDate: "2024-01-10",
    readTime: "4 min read",
    author: { name: "Eco Tech Expert", avatarUrl: "/images/avatar-placeholder.jpg" },
    featuredImage: "/images/blog-green-it.jpg",
    slug: "sustainable-it-solutions",
    isFeatured: false
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices",
    excerpt: "Essential security measures every business should implement to protect against cyber threats.",
    category: "Security",
    publishedDate: "2024-01-05",
    readTime: "6 min read",
    author: { name: "Security Specialist", avatarUrl: "/images/avatar-placeholder.jpg" },
    featuredImage: "/images/blog-cybersecurity.jpg",
    slug: "cybersecurity-best-practices",
    isFeatured: false
  }
];

// Categories for filtering
const CATEGORIES = [
  "All Categories",
  "AI & Technology",
  "Sustainability",
  "Security",
  "Cloud Computing",
  "Digital Transformation"
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [posts, setPosts] = useState([...MOCK_BLOG_POSTS]);

  // Filter blog posts based on search and category
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get featured posts
  const featuredPosts = posts.filter(post => post.isFeatured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            AI & Tech <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">Insights</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Expert perspectives on artificial intelligence, tech innovation, and digital transformation
          </p>
        </div>
        
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-all duration-300"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25"
                      : "bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-cyan/10 hover:text-zion-cyan border border-zion-cyan/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="group">
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 hover:shadow-2xl hover:shadow-zion-cyan/20 transition-all duration-300 transform hover:-translate-y-2">
                      <div className="aspect-video bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                        <div className="text-zion-cyan text-6xl font-bold opacity-20">Z</div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm font-medium rounded-full">
                            {post.category}
                          </span>
                          <span className="text-zion-slate-light text-sm">{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-zion-slate-light mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-zion-cyan/20 rounded-full flex items-center justify-center">
                              <span className="text-zion-cyan font-bold text-sm">Z</span>
                            </div>
                            <span className="text-zion-slate-light text-sm">{post.author.name}</span>
                          </div>
                          <span className="text-zion-slate-light text-sm">{post.publishedDate}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">
            {selectedCategory === "All Categories" ? "All Articles" : `${selectedCategory} Articles`}
          </h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-zion-slate-light text-xl mb-4">No articles found</div>
              <p className="text-zion-slate-light">Try adjusting your search or category filter</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="group">
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 hover:shadow-xl hover:shadow-zion-cyan/20 transition-all duration-300 transform hover:-translate-y-1">
                      <div className="aspect-video bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                        <div className="text-zion-cyan text-4xl font-bold opacity-20">Z</div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm font-medium rounded-full">
                            {post.category}
                          </span>
                          <span className="text-zion-slate-light text-sm">{post.readTime}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-zion-slate-light mb-4 line-clamp-3 text-sm">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-zion-cyan/20 rounded-full flex items-center justify-center">
                              <span className="text-zion-cyan font-bold text-xs">Z</span>
                            </div>
                            <span className="text-zion-slate-light text-sm">{post.author.name}</span>
                          </div>
                          <span className="text-zion-slate-light text-sm">{post.publishedDate}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 text-center">
          <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-zion-slate-light mb-6">
              Get the latest insights on AI, technology, and digital transformation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-all duration-300"
              />
              <button className="px-6 py-3 bg-zion-cyan text-white font-medium rounded-lg hover:bg-zion-cyan/90 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
