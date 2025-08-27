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

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <>
            <SEO 
                title="Blog - Zion Tech Group" 
                description="Stay updated with the latest insights, trends, and innovations in AI, cybersecurity, cloud computing, and digital transformation." 
                keywords="blog, tech insights, AI trends, cybersecurity, cloud computing, digital transformation" 
                canonical="https://ziontechgroup.com/blog" 
            />
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-24 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                            Blog & Insights
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Stay ahead of the curve with expert insights, industry trends, and cutting-edge technology analysis 
                            from Zion Tech Group's thought leaders.
                        </p>
                    </div>

                    {/* Search and Filter */}
                    <div className="mb-12">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                                <Input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10 bg-slate-800 border-slate-700 text-white placeholder-slate-400"
                                />
                            </div>
                            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                <SelectTrigger className="w-full md:w-48 bg-slate-800 border-slate-700 text-white">
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent className="bg-slate-800 border-slate-700">
                                    {CATEGORIES.map((category) => (
                                        <SelectItem key={category} value={category} className="text-white hover:bg-slate-700">
                                            {category}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Featured Post */}
                    {filteredPosts.filter(post => post.isFeatured).map(featuredPost => (
                        <div key={featuredPost.id} className="mb-16">
                            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                    <div className="p-8 flex flex-col justify-center">
                                        <div className="mb-4">
                                            <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm font-medium rounded-full">
                                                Featured
                                            </span>
                                        </div>
                                        <h2 className="text-3xl font-bold text-white mb-4">
                                            {featuredPost.title}
                                        </h2>
                                        <p className="text-slate-300 text-lg mb-6">
                                            {featuredPost.excerpt}
                                        </p>
                                        <div className="flex items-center text-slate-400 text-sm mb-6 space-x-6">
                                            <div className="flex items-center">
                                                <User className="h-4 w-4 mr-2" />
                                                {featuredPost.author}
                                            </div>
                                            <div className="flex items-center">
                                                <Calendar className="h-4 w-4 mr-2" />
                                                {featuredPost.publishedDate}
                                            </div>
                                            <div className="flex items-center">
                                                <Clock className="h-4 w-4 mr-2" />
                                                {featuredPost.readTime}
                                            </div>
                                        </div>
                                        <Button asChild className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90">
                                            <Link to={`/blog/${featuredPost.slug}`}>
                                                Read Full Article
                                            </Link>
                                        </Button>
                                    </div>
                                    <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 p-8 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-32 h-32 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                                                <span className="text-4xl">📰</span>
                                            </div>
                                            <p className="text-slate-300">Featured Article</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}

                    {/* Blog Posts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.filter(post => !post.isFeatured).map((post) => (
                            <Card key={post.id} className="bg-slate-800/50 border-slate-700 hover:border-zion-cyan/30 transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="mb-4">
                                        <span className="inline-block px-2 py-1 bg-slate-700 text-zion-cyan text-xs font-medium rounded">
                                            {post.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center text-slate-400 text-xs mb-4 space-x-4">
                                        <div className="flex items-center">
                                            <User className="h-3 w-3 mr-1" />
                                            {post.author}
                                        </div>
                                        <div className="flex items-center">
                                            <Calendar className="h-3 w-3 mr-1" />
                                            {post.publishedDate}
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="h-3 w-3 mr-1" />
                                            {post.readTime}
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="p-6 pt-0">
                                    <Button asChild variant="outline" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                                        <Link to={`/blog/${post.slug}`}>
                                            Read More
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    {/* Newsletter Signup */}
                    <div className="mt-20">
                        <Card className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border-zion-cyan/30">
                            <CardContent className="p-8 text-center">
                                <h2 className="text-2xl font-bold text-white mb-4">
                                    Stay Updated with Our Latest Insights
                                </h2>
                                <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                                    Get the latest technology trends, AI insights, and industry updates delivered directly to your inbox.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="bg-slate-800 border-slate-700 text-white placeholder-slate-400"
                                    />
                                    <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90">
                                        Subscribe
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
