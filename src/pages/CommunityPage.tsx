import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, MessageCircle, TrendingUp, Star, Calendar, User, MessageSquare, ThumbsUp, Eye } from 'lucide-react';

export default function CommunityPage() {
    const [activeTab, setActiveTab] = useState('featured');

    const featuredPosts = [
        {
            id: "1",
            title: "Best practices for AI model fine-tuning",
            content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",
            author: {
                name: "Alex Johnson",
                avatar: "https://i.pravatar.cc/150?img=3",
                role: "Verified Talent"
            },
            category: "AI Tools",
            tags: ["machine-learning", "fine-tuning", "gpt"],
            createdAt: "2025-04-01T12:00:00Z",
            likes: 48,
            views: 120,
            replyCount: 12,
            isPinned: false
        },
        {
            id: "2",
            title: "How to build an effective AI talent profile?",
            content: "I'm looking to improve my profile to get more client attention. What are the key elements I should focus on?",
            author: {
                name: "Sarah Chen",
                avatar: "https://i.pravatar.cc/150?img=5",
                role: "Verified Talent"
            },
            category: "Getting Hired",
            tags: ["profile", "tips", "hiring"],
            createdAt: "2025-04-03T09:15:00Z",
            likes: 32,
            views: 89,
            replyCount: 8,
            isPinned: true
        }
    ];

    const recentPosts = [
        {
            id: "3",
            title: "Looking for feedback on my automated testing approach",
            content: "I've set up a CI/CD pipeline with the following testing strategy...",
            author: {
                name: "Michael Wong",
                avatar: "https://i.pravatar.cc/150?img=7",
                role: "Developer"
            },
            category: "Project Help",
            tags: ["testing", "automation", "ci-cd"],
            createdAt: "2025-04-10T14:30:00Z",
            likes: 5,
            views: 45,
            replyCount: 2,
            isPinned: false
        }
    ];

    const communityStats = [
        { label: "Active Members", value: "2,847", icon: Users },
        { label: "Total Posts", value: "15,392", icon: MessageCircle },
        { label: "Topics Discussed", value: "1,203", icon: TrendingUp },
        { label: "Success Stories", value: "892", icon: Star }
    ];

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <>
            <SEO 
                title="Community - Zion Tech Group" 
                description="Join our tech community and connect with fellow professionals." 
                canonical="https://ziontechgroup.com/community" 
            />
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="mb-8">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
                                <Users className="w-4 h-4 mr-2" />
                                Community
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                Connect with
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Tech Professionals</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                                Join our vibrant community of AI experts, developers, and tech enthusiasts. Share knowledge, ask questions, and grow your network.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark">
                                    Join Community
                                </Button>
                                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                                    View Guidelines
                                </Button>
                            </div>
                        </div>

                        {/* Community Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                            {communityStats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <stat.icon className="w-8 h-8 text-zion-cyan" />
                                    </div>
                                    <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                                    <div className="text-zion-slate-light">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Community Content */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                            <TabsList className="grid w-full grid-cols-3 bg-zion-blue-dark border border-zion-blue-light">
                                <TabsTrigger value="featured" className="data-[state=active]:bg-zion-cyan data-[state=active]:text-zion-blue-dark">
                                    Featured Posts
                                </TabsTrigger>
                                <TabsTrigger value="recent" className="data-[state=active]:bg-zion-cyan data-[state=active]:text-zion-blue-dark">
                                    Recent Discussions
                                </TabsTrigger>
                                <TabsTrigger value="trending" className="data-[state=active]:bg-zion-cyan data-[state=active]:text-zion-blue-dark">
                                    Trending Topics
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="featured" className="mt-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {featuredPosts.map((post) => (
                                        <Card key={post.id} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-cyan transition-all duration-300">
                                            <CardHeader>
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 bg-zion-cyan/20 rounded-full flex items-center justify-center">
                                                            <User className="w-5 h-5 text-zion-cyan" />
                                                        </div>
                                                        <div>
                                                            <div className="font-semibold text-white">{post.author.name}</div>
                                                            <div className="text-sm text-zion-slate-light">{post.author.role}</div>
                                                        </div>
                                                    </div>
                                                    {post.isPinned && (
                                                        <Badge className="bg-zion-purple text-white">
                                                            Pinned
                                                        </Badge>
                                                    )}
                                                </div>
                                                <CardTitle className="text-xl text-white mb-2">{post.title}</CardTitle>
                                                <CardDescription className="text-zion-slate-light">
                                                    {post.content}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="flex items-center gap-4 mb-4">
                                                    <Badge variant="outline" className="border-zion-blue-light text-zion-slate-light">
                                                        {post.category}
                                                    </Badge>
                                                    <div className="text-sm text-zion-slate-light">
                                                        {formatDate(post.createdAt)}
                                                    </div>
                                                </div>
                                                
                                                <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                                                    <div className="flex items-center gap-1">
                                                        <ThumbsUp className="w-4 h-4" />
                                                        {post.likes}
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <MessageSquare className="w-4 h-4" />
                                                        {post.replyCount}
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Eye className="w-4 h-4" />
                                                        {post.views}
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mt-4">
                                                    {post.tags.map((tag, index) => (
                                                        <Badge key={index} variant="secondary" className="text-xs">
                                                            #{tag}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="recent" className="mt-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {recentPosts.map((post) => (
                                        <Card key={post.id} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-cyan transition-all duration-300">
                                            <CardHeader>
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-10 h-10 bg-zion-cyan/20 rounded-full flex items-center justify-center">
                                                        <User className="w-5 h-5 text-zion-cyan" />
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-white">{post.author.name}</div>
                                                        <div className="text-sm text-zion-slate-light">{post.author.role}</div>
                                                    </div>
                                                </div>
                                                <CardTitle className="text-xl text-white mb-2">{post.title}</CardTitle>
                                                <CardDescription className="text-zion-slate-light">
                                                    {post.content}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="flex items-center gap-4 mb-4">
                                                    <Badge variant="outline" className="border-zion-blue-light text-zion-slate-light">
                                                        {post.category}
                                                    </Badge>
                                                    <div className="text-sm text-zion-slate-light">
                                                        {formatDate(post.createdAt)}
                                                    </div>
                                                </div>
                                                
                                                <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                                                    <div className="flex items-center gap-1">
                                                        <ThumbsUp className="w-4 h-4" />
                                                        {post.likes}
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <MessageSquare className="w-4 h-4" />
                                                        {post.replyCount}
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Eye className="w-4 h-4" />
                                                        {post.views}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="trending" className="mt-8">
                                <div className="text-center py-16">
                                    <div className="w-24 h-24 bg-zion-blue-light rounded-full flex items-center justify-center mx-auto mb-6">
                                        <TrendingUp className="w-12 h-12 text-zion-slate-light" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Trending Topics Coming Soon</h3>
                                    <p className="text-zion-slate-light mb-8">
                                        We're working on bringing you the most popular and trending discussions from our community.
                                    </p>
                                    <Button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark">
                                        Get Notified
                                    </Button>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>

                {/* Coming Soon Section */}
                <section className="py-16 bg-zion-blue-dark">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="bg-zion-blue-light rounded-lg p-8 border border-zion-blue-lighter">
                            <h2 className="text-2xl font-bold text-white mb-6">Community Platform Coming Soon</h2>
                            <p className="text-zion-slate-light mb-6">
                                Our full community platform is currently under development. Soon you'll be able to create posts, join discussions, and connect with tech professionals worldwide.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark">
                                    Join Waitlist
                                </Button>
                                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
