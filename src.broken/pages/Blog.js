:src.broken/pages/Blog.js
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GradientHeading } from "@/components/GradientHeading";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { generateRandomBlogPost } from "@/utils/generateRandomBlogPost";
import { BLOG_POSTS } from "@/data/blog-posts";
import { Search } from "lucide-react";
// Categories for filtering
const CATEGORIES = [
    "All Categories",
    "Trends",
    "Marketing",
    "Sustainability",
    "Ethics",
    "Recruitment",
    "Infrastructure"
];
export default function Blog() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [posts, setPosts] = useState([...BLOG_POSTS]);
    useEffect(() => {
        const interval = setInterval(() => {
            setPosts(prev => [...prev, generateRandomBlogPost()]);
        }, 120000); // every 2 minutes
        return () => clearInterval(interval);
    }, []);
    // Filter blog posts based on search and category
    const filteredPosts = posts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    // Get featured posts
    const featuredPosts = posts.filter(post => post.isFeatured);
    return (<>
      <SEO title="Blog - AI & Tech Insights" description="Stay updated with the latest trends in AI technology, marketplace strategies, and IT services. Expert articles on innovation, sustainability, and digital transformation." keywords="AI blog, tech trends, IT services blog, artificial intelligence news, technology innovation, digital transformation, sustainable IT" canonical="https://ziontechgroup.com/blog"/>
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <GradientHeading>AI & Tech Insights</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Expert perspectives on artificial intelligence, tech innovation, and digital transformation
            </p>
          </div>
          
          {/* Featured Post Section - Only show if there are featured posts */}
          {featuredPosts.length > 0 && (<div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img src={featuredPosts[0].featuredImage} alt={featuredPosts[0].title} className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" onError={(e) => {
                const target = e.currentTarget;
                target.src = "/images/blog-placeholder.svg";
            }}/>
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
                    <img src={featuredPosts[0].author.avatarUrl} alt={featuredPosts[0].author.name} className="w-10 h-10 rounded-full mr-3" onError={(e) => {
                const target = e.currentTarget;
                target.src = "/images/blog-placeholder.svg";
            }}/>
                    <div>
                      <p className="text-white font-medium">{featuredPosts[0].author.name}</p>
                      <p className="text-sm text-zion-slate-light">
                        {featuredPosts[0].publishedDate} • {featuredPosts[0].readTime}
                      </p>
                    </div>
                  </div>
                  <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple w-fit">
                    <Link to={`/blog/${featuredPosts[0].slug}`}>
                      Read Article
                    </Link>
                  </Button>
                </div>
              </div>
            </div>)}
        
          {/* Filters and Search */}
          <div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate"/>
                <Input type="text" placeholder="Search articles..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10 bg-zion-blue border border-zion-blue-light text-white"/>
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
                  <SelectValue placeholder="Select Category"/>
                </SelectTrigger>
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                  {CATEGORIES.map((category) => (<SelectItem key={category} value={category} className="text-white">
                      {category}
                    </SelectItem>))}
                </SelectContent>
              </Select>
            </div>
          </div>
import React from 'react';

export default function Blog() {
    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-foreground mb-6">Blog</h1>
                <p className="text-lg text-muted-foreground mb-8">
                    Latest insights and updates from Zion Tech Group.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="border border-border rounded-lg p-6">
                        <h3 className="text-xl font-bold text-foreground mb-3">AI in Modern Business</h3>
                        <p className="text-muted-foreground mb-4">
                            Discover how artificial intelligence is transforming business operations and creating new opportunities.
                        </p>
                        <span className="text-sm text-muted-foreground">January 15, 2025</span>
                    </div>
                    <div className="border border-border rounded-lg p-6">
                        <h3 className="text-xl font-bold text-foreground mb-3">Cloud Migration Best Practices</h3>
                        <p className="text-muted-foreground mb-4">
                            Learn the essential steps and strategies for successful cloud migration projects.
                        </p>
                        <span className="text-sm text-muted-foreground">January 10, 2025</span>
                    </div>
                    <div className="border border-border rounded-lg p-6">
                        <h3 className="text-xl font-bold text-foreground mb-3">Cybersecurity Trends 2025</h3>
                        <p className="text-muted-foreground mb-4">
                            Stay ahead of emerging cybersecurity threats and protect your business with the latest security measures.
                        </p>
                        <span className="text-sm text-muted-foreground">January 5, 2025</span>
                    </div>
                    <div className="border border-border rounded-lg p-6">
                        <h3 className="text-xl font-bold text-foreground mb-3">Digital Transformation Guide</h3>
                        <p className="text-muted-foreground mb-4">
                            A comprehensive guide to digital transformation for businesses of all sizes.
                        </p>
                        <span className="text-sm text-muted-foreground">December 28, 2024</span>
                    </div>
                </div>
            </div>
        </div>
:src.broken/pages/Blog.js
      </div>
    </>);
    );
