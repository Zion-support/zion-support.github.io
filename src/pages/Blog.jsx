import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Calendar, User, Clock, ArrowRight, BookOpen } from 'lucide-react';

export default function Blog() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Categories');

    // Sample blog posts
    const blogPosts = [
        {
            id: 1,
            title: "The Future of AI in Enterprise: 2025 Trends and Predictions",
            excerpt: "Explore how artificial intelligence is transforming enterprise operations and what to expect in the coming year.",
            category: "AI & Technology",
            author: "Dr. Sarah Chen",
            publishedDate: "January 15, 2025",
            readTime: "8 min read",
            featuredImage: "/api/placeholder/400/250",
            isFeatured: true,
            slug: "future-ai-enterprise-2025"
        },
        {
            id: 2,
            title: "Cybersecurity in the Age of AI: New Threats and Defenses",
            excerpt: "Understanding how AI is both enhancing cybersecurity threats and providing innovative defense mechanisms.",
            category: "Cybersecurity",
            author: "Alex Thompson",
            publishedDate: "January 12, 2025",
            readTime: "6 min read",
            featuredImage: "/api/placeholder/400/250",
            isFeatured: false,
            slug: "cybersecurity-ai-threats-defenses"
        },
        {
            id: 3,
            title: "Cloud Migration Strategies: Best Practices for 2025",
            excerpt: "Comprehensive guide to successful cloud migration with real-world case studies and optimization techniques.",
            category: "Cloud & Infrastructure",
            author: "David Kim",
            publishedDate: "January 10, 2025",
            readTime: "10 min read",
            featuredImage: "/api/placeholder/400/250",
            isFeatured: false,
            slug: "cloud-migration-strategies-2025"
        },
        {
            id: 4,
            title: "Digital Transformation: Building a Future-Ready Organization",
            excerpt: "Learn how to create and execute a successful digital transformation strategy for your organization.",
            category: "Digital Transformation",
            author: "Lisa Anderson",
            publishedDate: "January 8, 2025",
            readTime: "7 min read",
            featuredImage: "/api/placeholder/400/250",
            isFeatured: false,
            slug: "digital-transformation-future-ready"
        },
        {
            id: 5,
            title: "Quantum Computing: Enterprise Applications and Opportunities",
            excerpt: "Exploring the potential of quantum computing in enterprise environments and early adoption strategies.",
            category: "Emerging Technology",
            author: "Dr. James Wilson",
            publishedDate: "January 5, 2025",
            readTime: "9 min read",
            featuredImage: "/api/placeholder/400/250",
            isFeatured: false,
            slug: "quantum-computing-enterprise-opportunities"
        },
        {
            id: 6,
            title: "Sustainable Technology: Green IT Solutions for Modern Businesses",
            excerpt: "Implementing environmentally conscious technology solutions for modern businesses.",
            category: "Sustainability",
            author: "Marcus Rodriguez",
            publishedDate: "January 3, 2025",
            readTime: "5 min read",
            featuredImage: "/api/placeholder/400/250",
            isFeatured: false,
            slug: "sustainable-technology-green-it"
        }
    ];

    const categories = [
        "All Categories",
        "AI & Technology",
        "Cybersecurity",
        "Cloud & Infrastructure",
        "Digital Transformation",
        "Emerging Technology",
        "Sustainability"
    ];

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.category.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const featuredPosts = blogPosts.filter(post => post.isFeatured);

    return (
        <div className="min-h-screen bg-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mb-6">
                            <BookOpen className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                            AI & Tech Insights
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Expert perspectives on artificial intelligence, tech innovation, and digital transformation
                        </p>

                        {/* Search and Filters */}
                        <div className="max-w-4xl mx-auto mb-8">
                            <div className="flex flex-col lg:flex-row gap-4">
                                <div className="relative flex-1">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        placeholder="Search articles..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    {categories.map((category) => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Post Section */}
            {featuredPosts.length > 0 && (
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Featured Article
                            </h2>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="aspect-video overflow-hidden rounded-lg bg-slate-700"></div>
                            <div className="flex flex-col justify-center">
                                <span className="text-sm text-cyan-400 bg-cyan-500/20 px-3 py-1 rounded-full inline-block mb-2">
                                    {featuredPosts[0].category}
                                </span>
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    {featuredPosts[0].title}
                                </h3>
                                <p className="text-gray-300 mb-6">
                                    {featuredPosts[0].excerpt}
                                </p>
                                <div className="flex items-center mb-6">
                                    <div className="w-10 h-10 rounded-full bg-slate-700 mr-3"></div>
                                    <div>
                                        <p className="text-white font-medium">{featuredPosts[0].author}</p>
                                        <p className="text-sm text-gray-400">
                                            {featuredPosts[0].publishedDate} • {featuredPosts[0].readTime}
                                        </p>
                                    </div>
                                </div>
                                <Link
                                    to={`/blog/${featuredPosts[0].slug}`}
                                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 w-fit"
                                >
                                    Read Article
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Blog Posts Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Latest Articles
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Stay updated with the latest insights and trends in technology
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="aspect-video bg-slate-700 group-hover:bg-slate-600 transition-colors duration-300"></div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                                            {post.category}
                                        </span>
                                        <span className="text-gray-400 text-sm flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                                        {post.title}
                                    </h3>
                                    
                                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                                    
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center text-gray-400 text-sm">
                                            <User className="w-4 h-4 mr-2" />
                                            {post.author}
                                        </div>
                                        <div className="flex items-center text-gray-400 text-sm">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            {post.publishedDate}
                                        </div>
                                    </div>
                                    
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group-hover:underline"
                                    >
                                        Read More
                                        <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                    
                    {filteredPosts.length === 0 && (
                        <div className="text-center py-12">
                            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-300 mb-2">No articles found</h3>
                            <p className="text-gray-400">Try adjusting your search terms or category filter</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Stay Updated
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Subscribe to our newsletter for the latest tech insights and industry updates
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                                Subscribe
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
