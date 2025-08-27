import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';
import { Search, Calendar, Clock, User } from 'lucide-react';
export default function Blog() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const CATEGORIES = [
        "All Categories",
        "AI & Machine Learning",
        "Cybersecurity",
        "Cloud Computing",
        "Digital Transformation",
        "Tech Trends",
        "Industry Insights"
    ];
    const blogPosts = [
        {
            id: 1,
            title: "The Future of AI in Enterprise: 2024 Trends and Predictions",
            excerpt: "Discover how artificial intelligence is reshaping enterprise operations and what to expect in the coming year.",
            category: "AI & Machine Learning",
            author: "Dr. Sarah Chen",
            publishedDate: "Dec 15, 2024",
            readTime: "8 min read",
            slug: "future-ai-enterprise-2024",
            featuredImage: "/images/blog/ai-enterprise.jpg",
            isFeatured: true
        },
        {
            id: 2,
            title: "Zero Trust Security: Building a Modern Cybersecurity Framework",
            excerpt: "Learn about implementing zero trust security principles to protect your organization from evolving threats.",
            category: "Cybersecurity",
            author: "Mike Rodriguez",
            publishedDate: "Dec 12, 2024",
            readTime: "6 min read",
            slug: "zero-trust-security-framework",
            featuredImage: "/images/blog/zero-trust.jpg",
            isFeatured: false
        },
        {
            id: 3,
            title: "Cloud Migration Strategies: A Comprehensive Guide for Enterprises",
            excerpt: "Navigate the complexities of cloud migration with proven strategies and best practices.",
            category: "Cloud Computing",
            author: "Lisa Thompson",
            publishedDate: "Dec 10, 2024",
            readTime: "10 min read",
            slug: "cloud-migration-strategies",
            featuredImage: "/images/blog/cloud-migration.jpg",
            isFeatured: false
        },
        {
            id: 4,
            title: "Digital Transformation: Key Success Factors for Modern Businesses",
            excerpt: "Explore the essential elements that drive successful digital transformation initiatives.",
            category: "Digital Transformation",
            author: "David Kim",
            publishedDate: "Dec 8, 2024",
            readTime: "7 min read",
            slug: "digital-transformation-success-factors",
            featuredImage: "/images/blog/digital-transformation.jpg",
            isFeatured: false
        },
        {
            id: 5,
            title: "Emerging Tech Trends That Will Shape 2025",
            excerpt: "Stay ahead of the curve with insights into the most promising technology trends for the coming year.",
            category: "Tech Trends",
            author: "Alex Johnson",
            publishedDate: "Dec 5, 2024",
            readTime: "9 min read",
            slug: "emerging-tech-trends-2025",
            featuredImage: "/images/blog/tech-trends.jpg",
            isFeatured: false
        },
        {
            id: 6,
            title: "Sustainable Technology: Green IT Solutions for the Future",
            excerpt: "Discover how organizations are implementing eco-friendly technology solutions.",
            category: "Industry Insights",
            author: "Emma Wilson",
            publishedDate: "Dec 3, 2024",
            readTime: "5 min read",
            slug: "sustainable-technology-green-it",
            featuredImage: "/images/blog/sustainable-tech.jpg",
            isFeatured: false
        }
    ];
    // Filter blog posts based on search and category
    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    // Get featured posts
    const featuredPosts = blogPosts.filter(post => post.isFeatured);
    return (
<>
            <SEO 
                title="Blog - AI & Tech Insights" 
                description="Stay updated with the latest trends in AI technology, marketplace strategies, and IT services. Expert articles on innovation, sustainability, and digital transformation." 
                keywords="AI blog, tech trends, IT services blog, artificial intelligence news, technology innovation, digital transformation, sustainable IT" 
                canonical="https://ziontechgroup.com/blog" 
            />
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-12 pb-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            AI & Tech
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Insights</span>
                        </h1>
                        <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
                            Expert perspectives on artificial intelligence, tech innovation, and digital transformation
                        </p>
                    </div>
                    {/* Featured Post Section */}
                    {featuredPosts.length > 0 && (
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="aspect-video overflow-hidden rounded-lg bg-zion-blue-dark">
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Search className="w-8 h-8 text-zion-cyan" />
                                            </div>
                                            <p className="text-zion-slate-light">Featured Image</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <span className="text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-2">
                                        {featuredPosts[0].category}
                                    </span>
                                    <h3 className="text-3xl font-bold text-white mb-4">
                                        {featuredPosts[0].title}
                                    </h3>
                                    <p className="text-zion-slate-light mb-6">
                                        {featuredPosts[0].excerpt}
                                    </p>
                                    <div className="flex items-center mb-6">
                                        <div className="w-10 h-10 bg-zion-cyan/20 rounded-full flex items-center justify-center mr-3">
                                            <User className="w-5 h-5 text-zion-cyan" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">{featuredPosts[0].author}</p>
                                            <div className="flex items-center text-sm text-zion-slate-light">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {featuredPosts[0].publishedDate}
                                                <span className="mx-2">•</span>
                                                <Clock className="w-4 h-4 mr-1" />
                                                {featuredPosts[0].readTime}
                                            </div>
                                        </div>
                                    </div>
                                    <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple w-fit">
                                        <Link to={`/blog/${featuredPosts[0].slug}`}>
                                            Read Article
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* Search and Filter */}
                    <div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-5 w-5" />
                                <Input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10 bg-zion-blue border border-zion-blue-light text-white"
                                />
                            </div>
                            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                                    {CATEGORIES.map((category) => (
                                        <SelectItem key={category} value={category} className="text-white">
                                            {category}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    {/* Blog Posts Grid */}
                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post) => (
                                <Card key={post.id} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-all duration-300">
                                    <div className="aspect-[16/9] relative overflow-hidden bg-zion-blue-dark">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                                    <Search className="w-6 h-6 text-zion-cyan" />
                                                </div>
                                                <p className="text-zion-slate-light text-sm">Blog Image</p>
                                            </div>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-xs text-zion-cyan bg-zion-blue px-3 py-1 rounded-full">
                                                {post.category}
                                            </span>
                                            <div className="flex items-center text-xs text-zion-slate-light">
                                                <Calendar className="w-3 h-3 mr-1" />
                                                {post.publishedDate}
                                                <span className="mx-1">•</span>
                                                <Clock className="w-3 h-3 mr-1" />
                                                {post.readTime}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                                        <p className="text-zion-slate-light mb-4 line-clamp-3">{post.excerpt}</p>
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 bg-zion-cyan/20 rounded-full flex items-center justify-center mr-2">
                                                <User className="w-4 h-4 text-zion-cyan" />
                                            </div>
                                            <span className="text-sm text-white">{post.author}</span>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="p-6 pt-0">
                                        <Button variant="link" className="text-zion-cyan p-0 hover:text-zion-purple" asChild>
                                            <Link to={`/blog/${post.slug}`}>
                                                Read More →
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
                            <p className="text-zion-slate-light mb-6">
                                Try adjusting your search or filter criteria
                            </p>
                            <Button 
                                variant="outline" 
                                onClick={() => {
                                    setSearchQuery("");
                                    setSelectedCategory("All Categories");
                                }}
                                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
                            >
                                Clear all filters
                            </Button>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
</>
    );
}
