import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users,
  MessageCircle,
  Star,
  TrendingUp,
  Calendar,
  MapPin,
  Globe,
  BookOpen,
  Video,
  Download,
  ExternalLink,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Heart,
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { SEO } from "../components/SEO";

export default function Community() {
  const communityStats = [;
    { label: 'Active Members', value: '15,000+', icon: Users, color: 'from-blue-500 to-cyan-500' },;
    { label: 'Discussions', value: '50,000+', icon: MessageCircle, color: 'from-purple-500 to-pink-500' },;
    { label: 'Events Hosted', value: '200+', icon: Calendar, color: 'from-green-500 to-emerald-500' },;
    { label: 'Countries', value: '45+', icon: Globe, color: 'from-orange-500 to-red-500' };
  ];

  const communityForums = [
    {
      title: 'AI & Machine Learning',
      description: 'Discuss AI technologies, share projects, and get help with ML implementations',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      topics: 1250,
      posts: 8900,
      members: 3200,
      href: '/community/ai-ml'
    },
    {
      title: 'Cloud & DevOps',
      description: 'Cloud infrastructure, DevOps practices, and deployment strategies',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      topics: 980,
      posts: 6700,
      members: 2800,
      href: '/community/cloud-devops'
    },
    {
      title: 'Cybersecurity',
      description: 'Security best practices, threat discussions, and compliance topics',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      topics: 750,
      posts: 5200,
      members: 2100,
      href: '/community/cybersecurity'
    },
    {
      title: 'Digital Transformation',
      description: 'Business transformation strategies and technology adoption',
      icon: Rocket,;
      color: 'from-green-600 to-emerald-600',;
      topics: 620,;
      posts: 4100,;
      members: 1800,;
      href: '/community/digital-transformation';
    };
  ];

  const upcomingEvents = [
    {
      title: 'AI Innovation Summit 2025',
      description: 'Join industry leaders for insights on the future of AI in business',
      date: 'March 15-17, 2025',
      location: 'San Francisco, CA',
      type: 'Conference',
      attendees: 500,
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      href: '/events/ai-innovation-summit-2025'
    },
    {
      title: 'Cloud Security Workshop',
      description: 'Hands-on workshop on securing cloud infrastructure',
      date: 'March 22, 2025',
      location: 'Virtual Event',
      type: 'Workshop',
      attendees: 150,
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      href: '/events/cloud-security-workshop'
    },
    {
      title: 'DevOps Best Practices Meetup',
      description: 'Local meetup for DevOps professionals to share experiences',
      date: 'March 28, 2025',
      location: 'New York, NY',;
      type: 'Meetup',;
      attendees: 75,;
      icon: Cloud,;
      color: 'from-blue-500 to-cyan-500',;
      href: '/events/devops-meetup-nyc';
    };
  ];

  const featuredDiscussions = [
    {
      title: 'Implementing Zero Trust Architecture in Enterprise',
      author: 'Sarah Chen',
      category: 'Cybersecurity',
      replies: 45,
      views: 1200,
      lastActivity: '2 hours ago',
      tags: ['Zero Trust', 'Enterprise', 'Security'],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      href: '/community/discussions/zero-trust-enterprise'
    },
    {
      title: 'Best Practices for AI Model Deployment',
      author: 'Mike Rodriguez',
      category: 'AI & ML',
      replies: 32,
      views: 890,
      lastActivity: '5 hours ago',
      tags: ['AI', 'Deployment', 'Best Practices'],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      href: '/community/discussions/ai-model-deployment'
    },
    {
      title: 'Cost Optimization Strategies for Multi-Cloud',
      author: 'Lisa Thompson',
      category: 'Cloud & DevOps',
      replies: 28,
      views: 650,;
      lastActivity: '1 day ago',;
      tags: ['Multi-Cloud', 'Cost Optimization', 'DevOps'],;
      icon: Cloud,;
      color: 'from-blue-500 to-cyan-500',;
      href: '/community/discussions/multi-cloud-cost-optimization';
    };
  ];

  const communityResources = [
    {
      title: 'Community Guidelines',
      description: 'Learn about our community standards and participation rules',
      icon: BookOpen,
      href: '/community/guidelines',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Event Calendar',
      description: 'Browse upcoming community events and webinars',
      icon: Calendar,
      href: '/events',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Member Directory',
      description: 'Connect with other community members and experts',
      icon: Users,
      href: '/community/members',
      color: 'from-purple-500 to-pink-500'
    },
    {;
      title: 'Resource Library',;
      description: 'Access shared resources, templates, and tools',;
      icon: Download,;
      href: '/community/resources',;
      color: 'from-orange-500 to-red-500';
    };
  ];

export default function Community(...args[]):  {
  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Community - Zion Tech Group"
        description="Join our community of technology professionals and enthusiasts. Share knowledge, get help, and connect with peers."
      />
      
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
            className="text-center"

            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Join Our Community
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Connect with technology professionals, share knowledge, and stay ahead of industry trends.
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, MessageCircle, TrendingUp, Star, Clock, Search, Filter, Plus, Heart, Share2, Bookmark, MoreHorizontal, User, Calendar, Tag, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CommunityPost {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
    verified: boolean;
  };
  category: string;
  tags: string[];
  likes: number;
  replies: number;
  views: number;
  createdAt: string;
  isPinned: boolean;
  isFeatured: boolean;
}

interface CommunityCategory {
  id: string;
  name: string;
  description: string;
  icon: any;
  color: string;
  postCount: number;
  topics: string[];
}

const Community: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('latest');

  const communityCategories: CommunityCategory[] = [
    {
      id: 'general',
      name: 'General Discussion',
      description: 'General topics about Zion Tech Group and technology',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      postCount: 1247,
      topics: ['Company News', 'Technology Trends', 'Industry Updates']
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      description: 'Discussions about our AI and machine learning services',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
      postCount: 892,
      topics: ['AI Integration', 'Machine Learning', 'AI Best Practices']
    },
    {
      id: 'cloud-infrastructure',
      name: 'Cloud & Infrastructure',
      description: 'Cloud computing, DevOps, and infrastructure topics',
      icon: TrendingUp,
      color: 'from-green-500 to-blue-500',
      postCount: 654,
      topics: ['Cloud Migration', 'DevOps', 'Infrastructure Management']
    },
    {
      id: 'security-compliance',
      name: 'Security & Compliance',
      description: 'Cybersecurity, compliance, and data protection',
      icon: TrendingUp,
      color: 'from-red-500 to-orange-500',
      postCount: 456,
      topics: ['Cybersecurity', 'Compliance', 'Data Protection']
    },
    {
      id: 'micro-saas',
      name: 'Micro SaaS Solutions',
      description: 'Our micro SaaS products and integrations',
      icon: TrendingUp,
      color: 'from-yellow-500 to-orange-500',
      postCount: 789,
      topics: ['Product Updates', 'Integration Guides', 'Best Practices']
    },
    {
      id: 'support',
      name: 'Support & Help',
      description: 'Get help and support from the community',
      icon: MessageCircle,
      color: 'from-indigo-500 to-purple-500',
      postCount: 1234,
      topics: ['Technical Support', 'Troubleshooting', 'Feature Requests']
    }
  ];

  const communityPosts: CommunityPost[] = [
    {
      id: '1',
      title: 'Getting Started with AI Business Intelligence - Best Practices',
      content: 'I\'ve been using Zion Tech Group\'s AI Business Intelligence service for the past month and wanted to share some best practices I\'ve learned...',
      author: {
        name: 'Sarah Chen',
        avatar: '/avatars/sarah.jpg',
        role: 'Senior Data Scientist',
        verified: true
      },
      category: 'ai-services',
      tags: ['AI', 'Business Intelligence', 'Best Practices', 'Getting Started'],
      likes: 45,
      replies: 23,
      views: 1234,
      createdAt: '2 hours ago',
      isPinned: true,
      isFeatured: true
    },
    {
      id: '2',
      title: 'Cloud Migration Success Story: From On-Prem to Multi-Cloud',
      content: 'Just completed our migration to Zion Tech Group\'s cloud infrastructure. Here\'s our journey and lessons learned...',
      author: {
        name: 'Michael Rodriguez',
        avatar: '/avatars/michael.jpg',
        role: 'DevOps Engineer',
        verified: true
      },
      category: 'cloud-infrastructure',
      tags: ['Cloud Migration', 'DevOps', 'Success Story', 'Multi-Cloud'],
      likes: 67,
      replies: 34,
      views: 2156,
      createdAt: '5 hours ago',
      isPinned: false,
      isFeatured: true
    },
    {
      id: '3',
      title: 'Zero Trust Security Implementation Guide',
      content: 'Comprehensive guide on implementing zero trust security using Zion Tech Group\'s security services...',
      author: {
        name: 'Alex Thompson',
        avatar: '/avatars/alex.jpg',
        role: 'Security Architect',
        verified: true
      },
      category: 'security-compliance',
      tags: ['Zero Trust', 'Security', 'Implementation', 'Guide'],
      likes: 89,
      replies: 56,
      views: 3421,
      createdAt: '1 day ago',
      isPinned: false,
      isFeatured: false
    },
    {
      id: '4',
      title: 'Micro CRM Integration with Salesforce - Step by Step',
      content: 'Detailed walkthrough of integrating our Micro CRM with Salesforce. Includes code examples and troubleshooting tips...',
      author: {
        name: 'Jennifer Lee',
        avatar: '/avatars/jennifer.jpg',
        role: 'Integration Specialist',
        verified: false
      },
      category: 'micro-saas',
      tags: ['Micro CRM', 'Salesforce', 'Integration', 'Tutorial'],
      likes: 34,
      replies: 18,
      views: 987,
      createdAt: '2 days ago',
      isPinned: false,
      isFeatured: false
    },
    {
      id: '5',
      title: 'AI Content Creation API Performance Optimization',
      content: 'Tips and tricks for optimizing performance when using the AI Content Creation API at scale...',
      author: {
        name: 'David Kim',
        avatar: '/avatars/david.jpg',
        role: 'Software Engineer',
        verified: true
      },
      category: 'ai-services',
      tags: ['AI Content Creation', 'API', 'Performance', 'Optimization'],
      likes: 56,
      replies: 29,
      views: 1567,
      createdAt: '3 days ago',
      isPinned: false,
      isFeatured: false
    }
  ];

  const filteredPosts = communityPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'popular':
        return b.likes - a.likes;
      case 'most-replied':
        return b.replies - a.replies;
      case 'most-viewed':
        return b.views - a.views;
      default:
        return 0;
    }
  });

  const getCategoryColor = (categoryId: string) => {
    const category = communityCategories.find(cat => cat.id === categoryId);
    return category ? category.color : 'from-gray-500 to-gray-600';
  };

  const getCategoryName = (categoryId: string) => {
    const category = communityCategories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Unknown';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Community
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with fellow developers, share knowledge, and get support from the 
              Zion Tech Group community of technology professionals.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial = {
  { opacity: 0,
  y: 20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition = {
  { duration: 0.6,
  delay: 0.5 






}}
          className="text-3xl font-bold text-white text-center mb-12"

          Upcoming Events
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial = {
  { opacity: 0,
  y: 20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              transition = {
  { duration: 0.6,
  delay: 0.6 + index * 0.1 






}}
              className="group"

              <Link
                to={event.href}
                className="block bg-slate-800/30 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 h-full"

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.type === 'Conference' ? 'bg-purple-500/20 text-purple-400' :
                      event.type === 'Workshop' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {event.type}
                    </span>
                    <div className={`w-12 h-12 bg-gradient-to-br ${event.color} rounded-lg flex items-center justify-center`}>
                      <event.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">{event.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-slate-300">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-300">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-300">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>

                  <div className="w-full py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors duration-300 text-center">
                    Learn More
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Discussions */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition = {
  { duration: 0.6,
  delay: 0.7 






}}
            className="text-3xl font-bold text-white text-center mb-12"

            Featured Discussions
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredDiscussions.map((discussion, index) => (
              <motion.div
                key={discussion.title}
                initial = {
  { opacity: 0,
  y: 20 






}}
                animate = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.6,
  delay: 0.8 + index * 0.1 






}}
                className="group"

                <Link
                  to={discussion.href}
                  className="block bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 h-full"

                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${discussion.color} rounded-lg flex items-center justify-center`}>
                      <discussion.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400">{discussion.category}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {discussion.title}
                  </h3>

                  <div className="flex items-center justify-between text-sm text-slate-400 mb-3">
                    <span>by {discussion.author}</span>
                    <span>{discussion.lastActivity}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                    <span>{discussion.replies} replies</span>
                    <span>{discussion.views} views</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {discussion.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full"

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search community posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all" className="bg-slate-800 text-white">All Categories</option>
                {communityCategories.map((category) => (
                  <option key={category.id} value={category.id} className="bg-slate-800 text-white">
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Options */}
            <div className="lg:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="latest" className="bg-slate-800 text-white">Latest</option>
                <option value="popular" className="bg-slate-800 text-white">Most Popular</option>
                <option value="most-replied" className="bg-slate-800 text-white">Most Replied</option>
                <option value="most-viewed" className="bg-slate-800 text-white">Most Viewed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Community Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {communityCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-colors cursor-pointer"
              onClick={() => setSelectedCategory(category.id)}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
              <p className="text-gray-300 text-sm mb-4">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-blue-400 text-sm font-medium">{category.postCount} posts</span>
                <div className="flex flex-wrap gap-1">
                  {category.topics.slice(0, 2).map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Posts */}
        <div className="space-y-6">
          {sortedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-colors"
            >
              <div className="flex items-start space-x-4">
                {/* Author Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Post Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-semibold text-white hover:text-blue-300 transition-colors cursor-pointer">
                        {post.title}
                      </h3>
                      {post.isPinned && (
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                          Pinned
                        </span>
                      )}
                      {post.isFeatured && (
                        <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-gray-300 mb-3 line-clamp-2">{post.content}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
              Get Started Today
            </button>
            <button className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-lg hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300">
              Learn More
                  {/* Post Meta */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span className="text-white">{post.author.name}</span>
                        {post.author.verified && (
                          <span className="px-1.5 py-0.5 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                            Verified
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.createdAt}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Tag className="w-4 h-4" />
                        <span className={`px-2 py-1 bg-gradient-to-r ${getCategoryColor(post.category)} text-white text-xs rounded-full`}>
                          {getCategoryName(post.category)}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <button className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-green-400 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.replies}</span>
                      </button>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                      <button className="text-gray-400 hover:text-yellow-400 transition-colors">
                        <Bookmark className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-purple-400 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {sortedPosts.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No posts found</h3>
            <p className="text-gray-400">Try adjusting your search terms or category filter.</p>
          </div>
        )}
      </div>

      {/* Create New Post Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Share Your Knowledge
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Have a question, want to share your experience, or contribute to the community? 
            Create a new post and start a discussion!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors">
              <Plus className="w-5 h-5 mr-2" />
              Create New Post
            </button>
            <Link
              to="/community-guidelines"
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Community Guidelines
            </Link>
          </div>
        </div>
      </div>

      {/* Community Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">15,432</div>
            <p className="text-gray-300">Community Members</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
            <MessageCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">8,945</div>
            <p className="text-gray-300">Total Posts</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
            <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">23,567</div>
            <p className="text-gray-300">Total Replies</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
            <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">1,234</div>
            <p className="text-gray-300">Featured Posts</p>
          </div>
        </div>
      </div>
    </div>
  )};
            </Link>;
          </div>;
        </motion.div>;
      </div>;
    </div>;
  );
}
