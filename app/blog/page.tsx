'use client';
import React, { useState, useEffect } from 'react';
import { Calendar, User, Search, Clock } from 'lucide-react';
import SEOHead from '../components/EnhancedSEOHead';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Enterprise Solutions",
    excerpt: "Discover how artificial intelligence is revolutionizing enterprise operations and driving unprecedented growth.",
    content: "Artificial intelligence is transforming the way businesses operate, from automating routine tasks to providing deep insights into customer behavior...",
    author: "Dr. Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "AI & Technology",
    image: "/api/placeholder/600/400",
    tags: ["AI", "Enterprise", "Automation", "Technology"]
  },
  {
    id: 2,
    title: "Quantum Computing: Breaking New Ground",
    excerpt: "Exploring the latest breakthroughs in quantum computing and their potential impact on business applications.",
    content: "Quantum computing represents a paradigm shift in computational power, offering solutions to problems that are intractable for classical computers...",
    author: "Prof. Michael Chen",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Quantum Computing",
    image: "/api/placeholder/600/400",
    tags: ["Quantum Computing", "Technology", "Innovation", "Research"]
  },
  {
    id: 3,
    title: "Digital Transformation Best Practices",
    excerpt: "Learn the essential strategies for successful digital transformation in modern organizations.",
    content: "Digital transformation is not just about adopting new technologies; it's about fundamentally changing how organizations operate and deliver value...",
    author: "Lisa Rodriguez",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Digital Transformation",
    image: "/api/placeholder/600/400",
    tags: ["Digital Transformation", "Strategy", "Business", "Technology"]
  },
  {
    id: 4,
    title: "Cybersecurity in the AI Era",
    excerpt: "Understanding the evolving cybersecurity landscape and how AI is both a threat and a solution.",
    content: "As artificial intelligence becomes more prevalent, cybersecurity challenges and solutions are evolving rapidly...",
    author: "James Wilson",
    date: "2024-01-01",
    readTime: "8 min read",
    category: "Cybersecurity",
    image: "/api/placeholder/600/400",
    tags: ["Cybersecurity", "AI", "Security", "Technology"]
  },
  {
    id: 5,
    title: "Building Scalable Cloud Infrastructure",
    excerpt: "Essential strategies for designing and implementing cloud infrastructure that can grow with your business.",
    content: "Cloud infrastructure design is critical for modern applications that need to scale efficiently and cost-effectively...",
    author: "Alex Thompson",
    date: "2023-12-28",
    readTime: "9 min read",
    category: "Cloud Computing",
    image: "/api/placeholder/600/400",
    tags: ["Cloud Computing", "Infrastructure", "Scalability", "DevOps"]
  },
  {
    id: 6,
    title: "The Rise of Micro-SaaS Solutions",
    excerpt: "How small, focused software solutions are changing the business landscape and creating new opportunities.",
    content: "Micro-SaaS solutions are revolutionizing how businesses approach software needs, offering specialized tools at affordable prices...",
    author: "Maria Garcia",
    date: "2023-12-20",
    readTime: "6 min read",
    category: "SaaS",
    image: "/api/placeholder/600/400",
    tags: ["SaaS", "Business", "Software", "Innovation"]
  }
];

const categories = ["All", "AI & Technology", "Quantum Computing", "Digital Transformation", "Cybersecurity", "Cloud Computing", "SaaS"];

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    let filtered = blogPosts;

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <SEOHead
        title="Blog - Zion Tech Group | AI & Technology Insights"
        description="Stay updated with the latest insights on AI, quantum computing, digital transformation, and emerging technologies from our expert team."
        keywords={['AI blog', 'technology insights', 'quantum computing', 'digital transformation', 'cybersecurity', 'cloud computing']}
        canonicalUrl="https://ziontechgroup.com/blog"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
              Technology Insights
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on AI, quantum computing, digital transformation, and emerging technologies.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="cyber-card hologram-card hover:scale-105 transition-all duration-300">
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-800 text-cyan-400 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    Read More →
                  </a>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No articles found matching your search criteria.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;