import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, ChevronLeft, Share2, Facebook, Twitter, Linkedin, User } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
export default function BlogPost() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [showShareMenu, setShowShareMenu] = useState(false);
    // Mock blog post data
    const mockPost = {
        id: 1,
        title: "The Future of AI in Enterprise: 2024 Trends and Predictions",
        excerpt: "Discover how artificial intelligence is reshaping enterprise operations and what to expect in the coming year.",
        content: `
            <p>Artificial Intelligence has become the cornerstone of modern enterprise transformation. As we move through 2024, several key trends are emerging that will define how businesses leverage AI to drive growth and innovation.</p>
            
            <h2>1. AI-Powered Decision Intelligence</h2>
            <p>Organizations are increasingly adopting AI-driven decision intelligence platforms that combine data analytics, machine learning, and business intelligence to provide actionable insights in real-time.</p>
            
            <h2>2. Generative AI in Business Applications</h2>
            <p>Generative AI is moving beyond content creation to become a fundamental tool for business process automation, customer service, and product development.</p>
            
            <h2>3. AI Ethics and Governance</h2>
            <p>As AI becomes more pervasive, companies are prioritizing ethical AI practices and governance frameworks to ensure responsible deployment.</p>
            
            <h2>4. Edge AI and IoT Integration</h2>
            <p>The convergence of edge computing and AI is enabling real-time processing and decision-making at the network edge, revolutionizing IoT applications.</p>
            
            <p>These trends represent just the beginning of AI's transformative impact on enterprise operations. Organizations that embrace these technologies early will gain significant competitive advantages.</p>
        `,
        category: "AI & Machine Learning",
        author: {
            name: "Dr. Sarah Chen",
            title: "AI Research Director",
            avatarUrl: "/images/blog/author-1.jpg"
        },
        publishedDate: "Dec 15, 2024",
        readTime: "8 min read",
        featuredImage: "/images/blog/ai-enterprise.jpg",
        tags: ["artificial-intelligence", "enterprise", "trends", "machine-learning", "digital-transformation"]
    };
    const mockRelatedPosts = [
        {
            id: 2,
            title: "Zero Trust Security: Building a Modern Cybersecurity Framework",
            category: "Cybersecurity",
            featuredImage: "/images/blog/zero-trust.jpg",
            slug: "zero-trust-security-framework"
        },
        {
            id: 3,
            title: "Cloud Migration Strategies: A Comprehensive Guide for Enterprises",
            category: "Cloud Computing",
            featuredImage: "/images/blog/cloud-migration.jpg",
            slug: "cloud-migration-strategies"
        }
    ];
    useEffect(() => {
        // Simulate API call
        setPost(mockPost);
        setRelatedPosts(mockRelatedPosts);
        window.scrollTo(0, 0);
    }, [slug]);
    if (!post) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8 flex justify-center items-center">
                <div className="animate-pulse text-xl">Loading article...</div>
            </div>
        );
    }
    // Helper function to get share URL
    const getShareUrl = (platform) => {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(post.title);
        switch (platform) {
            case 'facebook':
                return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            case 'twitter':
                return `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
            case 'linkedin':
                return `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
            default:
                return '#';
        }
    };
    return (
<>
            <SEO 
                title={post.title} 
                description={post.excerpt} 
                keywords={post.tags.join(", ")} 
                image={post.featuredImage} 
                canonical={`https://ziontechgroup.com/blog/${post.slug}`} 
            />
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-12 pb-20 px-4">
                <div className="container mx-auto">
                    {/* Back to blog button */}
                    <div className="mb-8">
                        <Button variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white" asChild>
                            <Link to="/blog">
                                <ArrowLeft className="mr-2 h-4 w-4"/>
                                Back to all articles
                            </Link>
                        </Button>
                    </div>
                    
                    {/* Article header */}
                    <div className="mb-8 max-w-4xl mx-auto">
                        <span className="text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-4">
                            {post.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {post.title}
                        </h1>
                        <p className="text-xl text-zion-slate-light mb-8">
                            {post.excerpt}
                        </p>
                        
                        {/* Author and metadata */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
                            <div className="flex items-center mb-4 sm:mb-0">
                                <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center mr-3">
                                    <User className="w-6 h-6 text-zion-cyan" />
                                </div>
                                <div>
                                    <p className="text-white font-medium">{post.author.name}</p>
                                    <p className="text-sm text-zion-slate-light">{post.author.title}</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center text-zion-slate-light">
                                    <Calendar className="h-4 w-4 mr-1" />
                                    <span className="text-sm">{post.publishedDate}</span>
                                </div>
                                <div className="flex items-center text-zion-slate-light">
                                    <Clock className="h-4 w-4 mr-1" />
                                    <span className="text-sm">{post.readTime}</span>
                                </div>
                                <div className="relative">
                                    <Button 
                                        variant="ghost" 
                                        size="sm" 
                                        className="text-zion-slate-light hover:text-white hover:bg-zion-blue-dark"
                                        onClick={() => setShowShareMenu(!showShareMenu)}
                                    >
                                        <Share2 className="h-4 w-4 mr-1" />
                                        <span className="text-sm">Share</span>
                                    </Button>
                                    
                                    {showShareMenu && (
                                        <div className="absolute right-0 top-full mt-2 bg-zion-blue-dark border border-zion-blue-light rounded-md p-2 z-10">
                                            <a 
                                                href={getShareUrl('facebook')} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white"
                                                aria-label="Share on Facebook"
                                                title="Share on Facebook"
                                            >
                                                <Facebook className="h-4 w-4 mr-2" />
                                                <span>Facebook</span>
                                            </a>
                                            <a 
                                                href={getShareUrl('twitter')} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white"
                                                aria-label="Share on Twitter"
                                                title="Share on Twitter"
                                            >
                                                <Twitter className="h-4 w-4 mr-2" />
                                                <span>Twitter</span>
                                            </a>
                                            <a 
                                                href={getShareUrl('linkedin')} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white"
                                                aria-label="Share on LinkedIn"
                                                title="Share on LinkedIn"
                                            >
                                                <Linkedin className="h-4 w-4 mr-2" />
                                                <span>LinkedIn</span>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Featured image */}
                    <div className="mb-12 max-w-5xl mx-auto">
                        <div className="aspect-[21/9] rounded-lg overflow-hidden bg-zion-blue-dark">
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-24 h-24 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <User className="w-12 h-12 text-zion-cyan" />
                                    </div>
                                    <p className="text-zion-slate-light">Featured Image</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Article content */}
                    <div className="max-w-4xl mx-auto">
                        <div 
                            className="prose prose-lg prose-invert max-w-none text-zion-slate-light"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-12">
                            {post.tags.map(tag => (
                                <span key={tag} className="text-xs text-zion-slate-light bg-zion-blue-dark px-3 py-1 rounded-full">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                        
                        <Separator className="my-12 bg-zion-blue-light" />
                        
                        {/* Related articles */}
                        {relatedPosts.length > 0 && (
                            <div className="mt-12">
                                <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {relatedPosts.map(relatedPost => (
                                        <Link 
                                            key={relatedPost.id}
                                            to={`/blog/${relatedPost.slug}`} 
                                            className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-purple transition-all duration-300"
                                        >
                                            <div className="aspect-[16/9] relative bg-zion-blue-dark">
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <div className="text-center">
                                                        <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                                            <User className="w-6 h-6 text-zion-cyan" />
                                                        </div>
                                                        <p className="text-zion-slate-light text-sm">Blog Image</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <span className="text-xs text-zion-cyan">{relatedPost.category}</span>
                                                <h4 className="text-white font-bold mt-1 line-clamp-2">{relatedPost.title}</h4>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        {/* Back to blog */}
                        <div className="flex justify-between items-center mt-12">
                            <Button 
                                variant="outline" 
                                className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white" 
                                asChild
                            >
                                <Link to="/blog">
                                    <ChevronLeft className="mr-2 h-4 w-4" />
                                    All Articles
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
</>
    );
}
