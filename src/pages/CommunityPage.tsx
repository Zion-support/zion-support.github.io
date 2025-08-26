
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  BookOpen, 
  Award, 
  Globe, 
  Lightbulb, 
  Rocket, 
  Heart, 
  Star, 
  Zap, 
  Target,
  TrendingUp,
  Eye,
  ThumbsUp,
  MessageSquare,
  Clock
} from 'lucide-react';

interface CommunityPost {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  category: string;
  tags: string[];
  createdAt: string;
  likes: number;
  views: number;
  replies: number;
  isPinned: boolean;
  isAnswered: boolean;
}

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('featured');

  const communityFeatures = [
    {
      icon: MessageCircle,
      title: 'Discussion Forums',
      description: 'Engage in meaningful conversations about AI, technology trends, and industry insights with fellow professionals.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BookOpen,
      title: 'Knowledge Sharing',
      description: 'Access and contribute to our growing library of technical articles, tutorials, and best practices.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Calendar,
      title: 'Events & Meetups',
      description: 'Join our virtual and in-person events, workshops, and networking opportunities.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Recognition Program',
      description: 'Get recognized for your contributions and achievements within the community.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Connect with professionals from around the world and expand your professional network.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Collaborate on innovative projects and share breakthrough ideas with the community.',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Ethics & Responsible Development',
      date: 'March 15, 2024',
      time: '2:00 PM EST',
      type: 'Webinar',
      attendees: 127,
      icon: Rocket
    },
    {
      title: 'Quantum Computing Workshop',
      date: 'March 22, 2024',
      time: '10:00 AM EST',
      type: 'Workshop',
      attendees: 89,
      icon: Zap
    },
    {
      title: 'Cybersecurity Best Practices',
      date: 'March 29, 2024',
      time: '3:00 PM EST',
      type: 'Panel Discussion',
      attendees: 156,
      icon: Target
    }
  ];

  const communityStats = [
    { label: 'Active Members', value: '2,847', icon: Users },
    { label: 'Discussions', value: '1,234', icon: MessageCircle },
    { label: 'Resources Shared', value: '567', icon: BookOpen },
    { label: 'Events Hosted', value: '89', icon: Calendar }
  ];

  const featuredPosts: CommunityPost[] = [
    {
      id: '1',
      title: 'Best practices for AI model fine-tuning',
      content: 'I\'ve been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me. What strategies do you use for different types of models?',
      author: {
        name: 'Alex Johnson',
        avatar: '/api/placeholder/40/40',
        role: 'AI Engineer'
      },
      category: 'AI & Machine Learning',
      tags: ['machine-learning', 'fine-tuning', 'gpt'],
      createdAt: '2 hours ago',
      likes: 48,
      views: 120,
      replies: 12,
      isPinned: false,
      isAnswered: true
    },
    {
      id: '2',
      title: 'How to build an effective AI talent profile?',
      content: 'I\'m looking to improve my profile to get more client attention. What are the key elements I should focus on to stand out in the marketplace?',
      author: {
        name: 'Sarah Chen',
        avatar: '/api/placeholder/40/40',
        role: 'Data Scientist'
      },
      category: 'Career & Hiring',
      tags: ['profile', 'tips', 'hiring'],
      createdAt: '4 hours ago',
      likes: 32,
      views: 89,
      replies: 8,
      isPinned: true,
      isAnswered: false
    },
    {
      id: '3',
      title: 'Looking for feedback on my automated testing approach',
      content: 'I\'ve set up a CI/CD pipeline with the following testing strategy. Would love to get feedback from the community on how to improve it.',
      author: {
        name: 'Michael Wong',
        avatar: '/api/placeholder/40/40',
        role: 'DevOps Engineer'
      },
      category: 'Development',
      tags: ['testing', 'automation', 'ci-cd'],
      createdAt: '6 hours ago',
      likes: 15,
      views: 67,
      replies: 5,
      isPinned: false,
      isAnswered: false
    }
  ];

  const recentPosts: CommunityPost[] = [
    {
      id: '4',
      title: 'Quantum computing applications in finance',
      content: 'Exploring how quantum computing can revolutionize financial modeling and risk assessment. Anyone working on similar projects?',
      author: {
        name: 'Dr. Elena Petrov',
        avatar: '/api/placeholder/40/40',
        role: 'Quantum Researcher'
      },
      category: 'Quantum Computing',
      tags: ['quantum', 'finance', 'research'],
      createdAt: '1 day ago',
      likes: 28,
      views: 156,
      replies: 9,
      isPinned: false,
      isAnswered: false
    },
    {
      id: '5',
      title: 'Cybersecurity challenges in AI systems',
      content: 'As AI systems become more prevalent, what are the biggest security challenges you\'ve encountered and how do you address them?',
      author: {
        name: 'David Kim',
        avatar: '/api/placeholder/40/40',
        role: 'Security Specialist'
      },
      category: 'Cybersecurity',
      tags: ['security', 'ai', 'cybersecurity'],
      createdAt: '2 days ago',
      likes: 42,
      views: 203,
      replies: 18,
      isPinned: false,
      isAnswered: true
    }
  ];

  const categories = [
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 456, color: 'from-blue-500 to-cyan-500' },
    { id: 'quantum', name: 'Quantum Computing', count: 123, color: 'from-purple-500 to-pink-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 234, color: 'from-red-500 to-orange-500' },
    { id: 'cloud', name: 'Cloud & DevOps', count: 345, color: 'from-green-500 to-emerald-500' },
    { id: 'career', name: 'Career & Hiring', count: 178, color: 'from-yellow-500 to-orange-500' },
    { id: 'general', name: 'General Discussion', count: 567, color: 'from-gray-500 to-slate-500' }
  ];

  return (
    <>
      <SEO
        title="Community Forum | Zion AI Marketplace"
        description="Join the Zion AI Marketplace community forum. Ask questions, share knowledge, and connect with other AI professionals."
        keywords="community, forum, discussion, AI marketplace, questions, answers"
        canonical="https://ziontechgroup.com/community"
      />
      
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Zion Community
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Connect, learn, and grow with fellow AI professionals in our vibrant community
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {communityStats.map((stat, index) => (
              <Card key={index} className="bg-zion-blue-dark border-zion-purple/20 text-center">
                <CardContent className="p-6">
                  <div className="bg-zion-purple/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-zion-slate-light">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Community Features */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">What We Offer</h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Discover the tools and opportunities available in our community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {communityFeatures.map((feature, index) => (
                <Card key={index} className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-zion-slate-light">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Main Content Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="bg-zion-blue-dark border border-zion-blue-light grid grid-cols-3 w-full">
              <TabsTrigger value="featured" className="data-[state=active]:bg-zion-purple/20">
                Featured Posts
              </TabsTrigger>
              <TabsTrigger value="recent" className="data-[state=active]:bg-zion-purple/20">
                Recent Discussions
              </TabsTrigger>
              <TabsTrigger value="categories" className="data-[state=active]:bg-zion-purple/20">
                Categories
              </TabsTrigger>
            </TabsList>

            <TabsContent value="featured" className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Featured Discussions</h2>
                <Button className="bg-zion-purple hover:bg-zion-purple-dark">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Start Discussion
                </Button>
              </div>

              <div className="space-y-4">
                {featuredPosts.map((post) => (
                  <Card key={post.id} className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={post.author.avatar} />
                          <AvatarFallback className="bg-zion-purple text-white">
                            {post.author.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            {post.isPinned && (
                              <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/40">
                                📌 Pinned
                              </Badge>
                            )}
                            {post.isAnswered && (
                              <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/40">
                                ✅ Answered
                              </Badge>
                            )}
                            <Badge variant="outline" className="border-zion-blue-light text-zion-slate-light">
                              {post.category}
                            </Badge>
                          </div>
                          
                          <h3 className="text-xl font-bold text-white mb-2 hover:text-zion-cyan transition-colors cursor-pointer">
                            {post.title}
                          </h3>
                          
                          <p className="text-zion-slate-light mb-3 line-clamp-2">
                            {post.content}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.tags.map((tag) => (
                              <Badge key={tag} variant="outline" size="sm" className="border-zion-blue-light text-zion-slate-light">
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                              <span className="flex items-center gap-1">
                                <Eye className="w-4 h-4" />
                                {post.views}
                              </span>
                              <span className="flex items-center gap-1">
                                <ThumbsUp className="w-4 h-4" />
                                {post.likes}
                              </span>
                              <span className="flex items-center gap-1">
                                <MessageSquare className="w-4 h-4" />
                                {post.replies}
                              </span>
                            </div>
                            
                            <div className="text-right">
                              <div className="text-sm text-white font-medium">{post.author.name}</div>
                              <div className="text-xs text-zion-slate-light">{post.author.role}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recent" className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Recent Discussions</h2>
                <Button className="bg-zion-purple hover:bg-zion-purple-dark">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Start Discussion
                </Button>
              </div>

              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <Card key={post.id} className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={post.author.avatar} />
                          <AvatarFallback className="bg-zion-purple text-white">
                            {post.author.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            {post.isAnswered && (
                              <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/40">
                                ✅ Answered
                              </Badge>
                            )}
                            <Badge variant="outline" className="border-zion-blue-light text-zion-slate-light">
                              {post.category}
                            </Badge>
                          </div>
                          
                          <h3 className="text-xl font-bold text-white mb-2 hover:text-zion-cyan transition-colors cursor-pointer">
                            {post.title}
                          </h3>
                          
                          <p className="text-zion-slate-light mb-3 line-clamp-2">
                            {post.content}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.tags.map((tag) => (
                              <Badge key={tag} variant="outline" size="sm" className="border-zion-blue-light text-zion-slate-light">
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                              <span className="flex items-center gap-1">
                                <Eye className="w-4 h-4" />
                                {post.views}
                              </span>
                              <span className="flex items-center gap-1">
                                <ThumbsUp className="w-4 h-4" />
                                {post.likes}
                              </span>
                              <span className="flex items-center gap-1">
                                <MessageSquare className="w-4 h-4" />
                                {post.replies}
                              </span>
                            </div>
                            
                            <div className="text-right">
                              <div className="text-sm text-white font-medium">{post.author.name}</div>
                              <div className="text-xs text-zion-slate-light">{post.author.role}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="categories" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Browse Categories</h2>
                <p className="text-zion-slate-light">Find discussions in your areas of interest</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                  <Card key={category.id} className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <MessageCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white text-center mb-2">{category.name}</h3>
                      <div className="text-center text-zion-slate-light">
                        {category.count} discussions
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Upcoming Events */}
          <section className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Upcoming Events</h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Join our community events and expand your network
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-zion-purple/20 w-12 h-12 rounded-full flex items-center justify-center">
                        <event.icon className="w-6 h-6 text-zion-cyan" />
                      </div>
                      <div>
                        <Badge variant="secondary" className="bg-zion-blue-light/20 text-zion-cyan">
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-white text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-zion-slate-light">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>
                    
                    <Button className="w-full mt-6 bg-zion-purple hover:bg-zion-purple-dark">
                      Join Event
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-zion-purple/20 to-zion-blue/20 border-zion-purple/40">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Join the Community?</h2>
                <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                  Connect with thousands of AI professionals, share your knowledge, and stay updated with the latest industry trends.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Start Discussion
                  </Button>
                  <Button size="lg" variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                    <Users className="w-5 h-5 mr-2" />
                    Browse Members
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
}
