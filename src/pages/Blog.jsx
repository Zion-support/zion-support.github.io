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
        
        {/* Featured Post Section */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="aspect-video overflow-hidden rounded-lg bg-zion-slate-dark/50 border border-zion-cyan/20">
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light">
                  Featured Image
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-sm text-zion-cyan bg-zion-slate-dark/50 px-3 py-1 rounded-full inline-block mb-2">
                  {featuredPosts[0].category}
                </span>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {featuredPosts[0].title}
                </h3>
                <p className="text-zion-slate-light mb-6">
                  {featuredPosts[0].excerpt}
                </p>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-zion-cyan/20 mr-3 flex items-center justify-center">
                    <span className="text-zion-cyan text-sm">ZT</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">{featuredPosts[0].author.name}</p>
                    <p className="text-sm text-zion-slate-light">
                      {featuredPosts[0].publishedDate} • {featuredPosts[0].readTime}
                    </p>
                  </div>
                </div>
                <Link 
                  to={`/blog/${featuredPosts[0].slug}`}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 w-fit"
                >
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        )}
      
        {/* Filters and Search */}
        <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light"/>
              <input 
                type="text" 
                placeholder="Search articles..." 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
            
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            >
              {CATEGORIES.map((category) => (
                <option key={category} value={category} className="bg-zion-slate-dark text-white">
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl hover:border-zion-cyan/40 transition-all duration-300 overflow-hidden">
                <div className="aspect-[16/9] relative overflow-hidden bg-zion-slate-dark/30">
                  <div className="w-full h-full flex items-center justify-center text-zion-slate-light">
                    Blog Image
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-zion-cyan bg-zion-slate-dark/50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="text-xs text-zion-slate-light">
                      {post.publishedDate} • {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {post.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-zion-cyan/20 mr-2 flex items-center justify-center">
                      <span className="text-zion-cyan text-xs">ZT</span>
                    </div>
                    <span className="text-sm text-white">{post.author.name}</span>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-zion-cyan hover:text-zion-blue transition-colors font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
            <p className="text-zion-slate-light mb-6">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Categories");
              }} 
              className="px-6 py-3 border border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
