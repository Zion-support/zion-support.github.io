'use client';
import React, { useState, useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ShareIcon,
  ChartBarIcon,
  CalendarIcon,
  UserGroupIcon,
  SparklesIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  EyeIcon,
  HeartIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  CogIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const AISocialMediaManagerProPage: React.FC = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      platform: 'LinkedIn',
      content: '🚀 Excited to share our latest AI breakthrough! Our new machine learning model has achieved 99.7% accuracy in fraud detection. #AI #Innovation #Tech',
      scheduledTime: '2025-01-15T10:00:00',
      status: 'Scheduled',
      engagement: { likes: 0, comments: 0, shares: 0, reach: 0 }
    },
    {
      id: 2,
      platform: 'Twitter',
      content: 'Just launched our AI-powered project management tool! 🎯 Streamline your workflow with intelligent task prioritization. Try it free: ziontechgroup.com',
      scheduledTime: '2025-01-15T14:30:00',
      status: 'Scheduled',
      engagement: { likes: 0, comments: 0, shares: 0, reach: 0 }
    },
    {
      id: 3,
      platform: 'Facebook',
      content: 'Behind the scenes at Zion Tech Group! Our team is working on revolutionary AI solutions that will transform how businesses operate. Stay tuned for updates!',
      scheduledTime: '2025-01-15T16:00:00',
      status: 'Scheduled',
      engagement: { likes: 0, comments: 0, shares: 0, reach: 0 }
    }
  ]);

  const [newPost, setNewPost] = useState({
    platform: 'LinkedIn',
    content: '',
    scheduledTime: ''
  });

  const [analytics, setAnalytics] = useState({
    totalFollowers: 12500,
    totalEngagement: 8.5,
    totalReach: 45000,
    totalPosts: 156
  });

  const [isCreating, setIsCreating] = useState(false);

  const platforms = [
    { name: 'LinkedIn', color: 'from-blue-500 to-blue-600', icon: '💼' },
    { name: 'Twitter', color: 'from-cyan-500 to-cyan-600', icon: '🐦' },
    { name: 'Facebook', color: 'from-indigo-500 to-indigo-600', icon: '📘' },
    { name: 'Instagram', color: 'from-pink-500 to-pink-600', icon: '📷' },
    { name: 'YouTube', color: 'from-red-500 to-red-600', icon: '📺' },
    { name: 'TikTok', color: 'from-purple-500 to-purple-600', icon: '🎵' }
  ];

  const features = [
    {
      icon: SparklesIcon,
      title: 'AI Content Generation',
      description: 'Generate engaging posts using advanced AI that understands your brand voice and audience preferences.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: ClockIcon,
      title: 'Optimal Timing',
      description: 'AI determines the best times to post based on your audience activity and engagement patterns.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ChartBarIcon,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics with AI-powered insights and performance predictions.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: UserGroupIcon,
      title: 'Audience Insights',
      description: 'Deep audience analysis with demographic data and engagement patterns.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: CalendarIcon,
      title: 'Content Calendar',
      description: 'Intelligent content planning with automated scheduling and campaign management.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Brand Safety',
      description: 'AI-powered content moderation to ensure brand safety and compliance.',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const createPost = () => {
    if (newPost.content && newPost.scheduledTime) {
      setIsCreating(true);
      setTimeout(() => {
        const post = {
          id: posts.length + 1,
          platform: newPost.platform,
          content: newPost.content,
          scheduledTime: newPost.scheduledTime,
          status: 'Scheduled',
          engagement: { likes: 0, comments: 0, shares: 0, reach: 0 }
        };
        setPosts([...posts, post]);
        setNewPost({ platform: 'LinkedIn', content: '', scheduledTime: '' });
        setIsCreating(false);
      }, 1500);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'text-green-400 bg-green-400/20';
      case 'Scheduled': return 'text-blue-400 bg-blue-400/20';
      case 'Draft': return 'text-gray-400 bg-gray-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPlatformColor = (platform: string) => {
    const platformData = platforms.find(p => p.name === platform);
    return platformData ? platformData.color : 'from-gray-500 to-gray-600';
  };

  return (
    <>
      <SEOHead 
        title="AI Social Media Manager Pro - Zion Tech Group"
        description="Advanced AI-powered social media management platform with content generation, optimal timing, and comprehensive analytics. Transform your social media presence with intelligent automation."
        keywords="AI social media management, social media automation, content generation, social media analytics, social media scheduling"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-purple-900/30 via-slate-900 to-pink-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6">
                <ShareIcon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                AI Social Media
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Manager Pro
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your social media presence with AI-powered content generation, 
                optimal timing, and comprehensive analytics across all platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Overview */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Your Social Media <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Analytics</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Real-time insights into your social media performance
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-slate-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-slate-700">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {analytics.totalFollowers.toLocaleString()}
                </div>
                <div className="text-gray-300">Total Followers</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-slate-700">
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {analytics.totalEngagement}%
                </div>
                <div className="text-gray-300">Engagement Rate</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-slate-700">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {analytics.totalReach.toLocaleString()}
                </div>
                <div className="text-gray-300">Total Reach</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-slate-700">
                <div className="text-3xl font-bold text-pink-400 mb-2">
                  {analytics.totalPosts}
                </div>
                <div className="text-gray-300">Posts This Month</div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Creation */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Create & Schedule <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Content</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                AI-powered content creation and intelligent scheduling
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Create New Post */}
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <SparklesIcon className="w-5 h-5 mr-2 text-purple-400" />
                  Create New Post
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Platform</label>
                    <select
                      value={newPost.platform}
                      onChange={(e) => setNewPost({...newPost, platform: e.target.value})}
                      className="w-full bg-slate-600 text-white px-4 py-2 rounded-lg border border-slate-500 focus:border-purple-500 focus:outline-none"
                    >
                      {platforms.map((platform) => (
                        <option key={platform.name} value={platform.name}>
                          {platform.icon} {platform.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Content</label>
                    <textarea
                      value={newPost.content}
                      onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                      placeholder="Write your post content or let AI generate it for you..."
                      rows={4}
                      className="w-full bg-slate-600 text-white px-4 py-2 rounded-lg border border-slate-500 focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Schedule Time</label>
                    <input
                      type="datetime-local"
                      value={newPost.scheduledTime}
                      onChange={(e) => setNewPost({...newPost, scheduledTime: e.target.value})}
                      className="w-full bg-slate-600 text-white px-4 py-2 rounded-lg border border-slate-500 focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                  
                  <button
                    onClick={createPost}
                    disabled={isCreating}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isCreating ? 'Creating Post...' : 'Schedule Post'}
                  </button>
                </div>
              </div>

              {/* Scheduled Posts */}
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <CalendarIcon className="w-5 h-5 mr-2 text-cyan-400" />
                  Scheduled Posts
                </h3>
                
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {posts.map((post) => (
                    <div key={post.id} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <span className="text-lg mr-2">
                            {platforms.find(p => p.name === post.platform)?.icon}
                          </span>
                          <span className="font-medium text-white">{post.platform}</span>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(post.status)}`}>
                          {post.status}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm mb-2 line-clamp-2">{post.content}</p>
                      <div className="text-xs text-gray-400">
                        {new Date(post.scheduledTime).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Powerful Features
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Everything you need to manage your social media presence effectively
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 group backdrop-blur-sm">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Simple Pricing
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your social media needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Starter</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">$49<span className="text-lg text-gray-400">/mo</span></div>
                  <p className="text-gray-300">Perfect for small businesses</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Up to 3 social accounts
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Basic AI content generation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    30 posts per month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Basic analytics
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

              {/* Professional Plan */}
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500 relative backdrop-blur-sm">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Professional</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">$149<span className="text-lg text-gray-400">/mo</span></div>
                  <p className="text-gray-300">For growing businesses</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Up to 10 social accounts
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Advanced AI content generation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited posts
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Team collaboration
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-pink-400 mb-2">$399<span className="text-lg text-gray-400">/mo</span></div>
                  <p className="text-gray-300">For large organizations</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited social accounts
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Custom AI models
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    White-label solution
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    API access
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Dedicated support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-3 rounded-lg font-semibold hover:from-pink-700 hover:to-rose-700 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/40 via-slate-900 to-pink-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Transform Your Social Media?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of businesses already using AI social media management to boost engagement and grow their audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISocialMediaManagerProPage;