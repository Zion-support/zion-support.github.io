'use client';
import React, { useState, useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ShareIcon, 
  PlusIcon, 
  PencilIcon,
  TrashIcon,
  PlayIcon,
  PauseIcon,
  ChartBarIcon,
  UserGroupIcon,
  EyeIcon,
  HeartIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  CalendarIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

interface SocialPost {
  id: string;
  content: string;
  platforms: string[];
  status: 'draft' | 'scheduled' | 'published' | 'failed';
  scheduledFor?: string;
  publishedAt?: string;
  createdAt: string;
  aiOptimized: boolean;
  hashtags: string[];
  mediaUrls: string[];
  engagement: {
    likes: number;
    comments: number;
    shares: number;
    views: number;
  };
}

interface SocialAccount {
  id: string;
  platform: string;
  username: string;
  followers: number;
  engagement: number;
  status: 'connected' | 'disconnected' | 'error';
  lastSync: string;
}

const AISocialMediaManager: React.FC = () => {
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [accounts, setAccounts] = useState<SocialAccount[]>([]);
  const [selectedPost, setSelectedPost] = useState<SocialPost | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showAccounts, setShowAccounts] = useState(false);
  const [filter, setFilter] = useState<'all' | 'draft' | 'scheduled' | 'published' | 'failed'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [newPost, setNewPost] = useState({
    content: '',
    platforms: [] as string[],
    scheduledFor: '',
    hashtags: [] as string[],
    mediaUrls: [] as string[],
    aiOptimized: true
  });

  // Load data from localStorage
  useEffect(() => {
    const savedPosts = localStorage.getItem('socialPosts');
    const savedAccounts = localStorage.getItem('socialAccounts');
    
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      // Initialize with sample data
      const samplePosts: SocialPost[] = [
        {
          id: '1',
          content: '🚀 Excited to announce our new AI-powered analytics dashboard! Transform your data into actionable insights. #AI #Analytics #Innovation',
          platforms: ['twitter', 'linkedin', 'facebook'],
          status: 'published',
          publishedAt: '2024-01-15T10:00:00Z',
          createdAt: '2024-01-15T09:30:00Z',
          aiOptimized: true,
          hashtags: ['AI', 'Analytics', 'Innovation'],
          mediaUrls: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'],
          engagement: {
            likes: 45,
            comments: 12,
            shares: 8,
            views: 1250
          }
        },
        {
          id: '2',
          content: '💡 Did you know? AI can increase productivity by up to 40%! Learn how to implement AI solutions in your business. #Productivity #AI #Business',
          platforms: ['twitter', 'linkedin'],
          status: 'scheduled',
          scheduledFor: '2024-01-20T14:00:00Z',
          createdAt: '2024-01-18T16:45:00Z',
          aiOptimized: true,
          hashtags: ['Productivity', 'AI', 'Business'],
          mediaUrls: [],
          engagement: {
            likes: 0,
            comments: 0,
            shares: 0,
            views: 0
          }
        },
        {
          id: '3',
          content: '🎉 Thank you to all our amazing clients! Your success stories inspire us every day. #Gratitude #ClientSuccess #ThankYou',
          platforms: ['facebook', 'instagram'],
          status: 'draft',
          createdAt: '2024-01-19T11:20:00Z',
          aiOptimized: false,
          hashtags: ['Gratitude', 'ClientSuccess', 'ThankYou'],
          mediaUrls: [],
          engagement: {
            likes: 0,
            comments: 0,
            shares: 0,
            views: 0
          }
        }
      ];
      setPosts(samplePosts);
    }

    if (savedAccounts) {
      setAccounts(JSON.parse(savedAccounts));
    } else {
      // Initialize with sample accounts
      const sampleAccounts: SocialAccount[] = [
        {
          id: '1',
          platform: 'Twitter',
          username: '@ziontechgroup',
          followers: 12500,
          engagement: 4.2,
          status: 'connected',
          lastSync: '2024-01-19T10:30:00Z'
        },
        {
          id: '2',
          platform: 'LinkedIn',
          username: 'Zion Tech Group',
          followers: 8500,
          engagement: 6.8,
          status: 'connected',
          lastSync: '2024-01-19T10:30:00Z'
        },
        {
          id: '3',
          platform: 'Facebook',
          username: 'ZionTechGroup',
          followers: 15200,
          engagement: 3.5,
          status: 'connected',
          lastSync: '2024-01-19T10:30:00Z'
        },
        {
          id: '4',
          platform: 'Instagram',
          username: '@ziontechgroup',
          followers: 9800,
          engagement: 5.1,
          status: 'disconnected',
          lastSync: '2024-01-15T14:20:00Z'
        }
      ];
      setAccounts(sampleAccounts);
    }
  }, []);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem('socialPosts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem('socialAccounts', JSON.stringify(accounts));
  }, [accounts]);

  const createPost = () => {
    if (newPost.content.trim() && newPost.platforms.length > 0) {
      const post: SocialPost = {
        id: Date.now().toString(),
        ...newPost,
        status: newPost.scheduledFor ? 'scheduled' : 'draft',
        createdAt: new Date().toISOString(),
        engagement: {
          likes: 0,
          comments: 0,
          shares: 0,
          views: 0
        }
      };
      setPosts([...posts, post]);
      setNewPost({
        content: '',
        platforms: [],
        scheduledFor: '',
        hashtags: [],
        mediaUrls: [],
        aiOptimized: true
      });
      setShowCreateForm(false);
    }
  };

  const updatePostStatus = (id: string, status: SocialPost['status']) => {
    setPosts(posts.map(post => 
      post.id === id ? { 
        ...post, 
        status,
        publishedAt: status === 'published' ? new Date().toISOString() : post.publishedAt
      } : post
    ));
  };

  const deletePost = (id: string) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const getStatusColor = (status: SocialPost['status']) => {
    switch (status) {
      case 'draft': return 'text-gray-400 bg-gray-900/20 border-gray-500';
      case 'scheduled': return 'text-blue-400 bg-blue-900/20 border-blue-500';
      case 'published': return 'text-green-400 bg-green-900/20 border-green-500';
      case 'failed': return 'text-red-400 bg-red-900/20 border-red-500';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500';
    }
  };

  const getStatusIcon = (status: SocialPost['status']) => {
    switch (status) {
      case 'draft': return <PencilIcon className="w-4 h-4" />;
      case 'scheduled': return <ClockIcon className="w-4 h-4" />;
      case 'published': return <CheckCircleIcon className="w-4 h-4" />;
      case 'failed': return <ExclamationTriangleIcon className="w-4 h-4" />;
      default: return <ShareIcon className="w-4 h-4" />;
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'twitter': return '🐦';
      case 'linkedin': return '💼';
      case 'facebook': return '📘';
      case 'instagram': return '📷';
      default: return '📱';
    }
  };

  const filteredPosts = posts.filter(post => {
    const matchesFilter = filter === 'all' || post.status === filter;
    const matchesSearch = post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.hashtags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const stats = {
    totalPosts: posts.length,
    totalAccounts: accounts.filter(a => a.status === 'connected').length,
    totalFollowers: accounts.reduce((sum, account) => sum + account.followers, 0),
    avgEngagement: accounts.length > 0 ? 
      accounts.reduce((sum, account) => sum + account.engagement, 0) / accounts.length : 0,
    scheduledPosts: posts.filter(p => p.status === 'scheduled').length,
    publishedPosts: posts.filter(p => p.status === 'published').length
  };

  return (
    <>
      <SEOHead 
        title="AI Social Media Manager Pro - Intelligent Social Media Management | Zion Tech Group"
        description="Advanced AI-powered social media management platform with intelligent content optimization, automated posting, and comprehensive analytics. Boost your social media presence."
        keywords="social media management, AI social media, social media automation, content optimization, social media analytics, social media scheduling"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Header */}
        <section className="bg-slate-800/50 border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    AI Social Media Manager Pro
                  </span>
                </h1>
                <p className="text-gray-300">Intelligent social media management with AI-powered optimization</p>
              </div>
              <div className="flex items-center gap-4 mt-4 lg:mt-0">
                <button
                  onClick={() => setShowAccounts(true)}
                  className="bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300 flex items-center gap-2"
                >
                  <UserGroupIcon className="w-5 h-5" />
                  Accounts
                </button>
                <button
                  onClick={() => setShowCreateForm(true)}
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
                >
                  <PlusIcon className="w-5 h-5" />
                  Create Post
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Dashboard */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-purple-400 mb-2">{stats.totalPosts}</div>
                <div className="text-gray-300">Total Posts</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-blue-400 mb-2">{stats.totalAccounts}</div>
                <div className="text-gray-300">Connected Accounts</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-green-400 mb-2">{stats.totalFollowers.toLocaleString()}</div>
                <div className="text-gray-300">Total Followers</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{stats.avgEngagement.toFixed(1)}%</div>
                <div className="text-gray-300">Avg Engagement</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stats.scheduledPosts}</div>
                <div className="text-gray-300">Scheduled</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-pink-400 mb-2">{stats.publishedPosts}</div>
                <div className="text-gray-300">Published</div>
              </div>
            </div>
          </div>
        </section>

        {/* Posts List */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filters */}
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex gap-4">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value as any)}
                  className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Posts</option>
                  <option value="draft">Draft</option>
                  <option value="scheduled">Scheduled</option>
                  <option value="published">Published</option>
                  <option value="failed">Failed</option>
                </select>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <div key={post.id} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {post.platforms.map(platform => (
                          <span key={platform} className="text-lg" title={platform}>
                            {getPlatformIcon(platform)}
                          </span>
                        ))}
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(post.status)}`}>
                          {getStatusIcon(post.status)}
                          <span className="ml-1">{post.status}</span>
                        </span>
                        {post.aiOptimized && (
                          <span className="text-xs bg-purple-900/20 text-purple-400 px-2 py-1 rounded">
                            AI Optimized
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 mb-3">{post.content}</p>
                      {post.hashtags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {post.hashtags.map(tag => (
                            <span key={tag} className="text-xs bg-slate-700 text-cyan-400 px-2 py-1 rounded">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedPost(post)}
                        className="p-2 text-blue-400 hover:bg-blue-900/20 rounded-lg transition-all duration-300"
                        title="View details"
                      >
                        <EyeIcon className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deletePost(post.id)}
                        className="p-2 text-red-400 hover:bg-red-900/20 rounded-lg transition-all duration-300"
                        title="Delete post"
                      >
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Engagement Stats */}
                  {post.status === 'published' && (
                    <div className="grid grid-cols-4 gap-4 pt-4 border-t border-slate-700">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-red-400">{post.engagement.likes}</div>
                        <div className="text-xs text-gray-400">Likes</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-blue-400">{post.engagement.comments}</div>
                        <div className="text-xs text-gray-400">Comments</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-green-400">{post.engagement.shares}</div>
                        <div className="text-xs text-gray-400">Shares</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-purple-400">{post.engagement.views}</div>
                        <div className="text-xs text-gray-400">Views</div>
                      </div>
                    </div>
                  )}

                  {/* Post Actions */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-sm text-gray-400">
                      {post.scheduledFor ? (
                        <>Scheduled for {new Date(post.scheduledFor).toLocaleString()}</>
                      ) : post.publishedAt ? (
                        <>Published {new Date(post.publishedAt).toLocaleString()}</>
                      ) : (
                        <>Created {new Date(post.createdAt).toLocaleString()}</>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {post.status === 'draft' && (
                        <button
                          onClick={() => updatePostStatus(post.id, 'scheduled')}
                          className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-all duration-300"
                        >
                          Schedule
                        </button>
                      )}
                      {post.status === 'scheduled' && (
                        <button
                          onClick={() => updatePostStatus(post.id, 'published')}
                          className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-all duration-300"
                        >
                          Publish Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Create Post Modal */}
        {showCreateForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 rounded-xl border border-slate-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-slate-700">
                <h3 className="text-xl font-semibold text-white">Create New Post</h3>
              </div>
              <div className="p-6 space-y-4">
                <textarea
                  placeholder="What's on your mind?"
                  value={newPost.content}
                  onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Select Platforms</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map(platform => (
                      <label key={platform} className="flex items-center gap-2 p-3 bg-slate-700 rounded-lg hover:bg-slate-600 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={newPost.platforms.includes(platform.toLowerCase())}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setNewPost({...newPost, platforms: [...newPost.platforms, platform.toLowerCase()]});
                            } else {
                              setNewPost({...newPost, platforms: newPost.platforms.filter(p => p !== platform.toLowerCase())});
                            }
                          }}
                          className="w-4 h-4 text-purple-600 bg-slate-700 border-slate-600 rounded focus:ring-purple-500"
                        />
                        <span className="text-sm text-gray-300">{platform}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="datetime-local"
                    value={newPost.scheduledFor}
                    onChange={(e) => setNewPost({...newPost, scheduledFor: e.target.value})}
                    className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="text"
                    placeholder="Hashtags (comma separated)"
                    value={newPost.hashtags.join(', ')}
                    onChange={(e) => setNewPost({...newPost, hashtags: e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag)})}
                    className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="aiOptimized"
                    checked={newPost.aiOptimized}
                    onChange={(e) => setNewPost({...newPost, aiOptimized: e.target.checked})}
                    className="w-4 h-4 text-purple-600 bg-slate-700 border-slate-600 rounded focus:ring-purple-500"
                  />
                  <label htmlFor="aiOptimized" className="text-sm text-gray-300">
                    Enable AI optimization for content and hashtags
                  </label>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={createPost}
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Create Post
                  </button>
                  <button
                    onClick={() => setShowCreateForm(false)}
                    className="bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Accounts Modal */}
        {showAccounts && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 rounded-xl border border-slate-700 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-slate-700">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">Social Media Accounts</h3>
                  <button
                    onClick={() => setShowAccounts(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {accounts.map((account) => (
                    <div key={account.id} className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">{getPlatformIcon(account.platform)}</span>
                        <div>
                          <h4 className="font-semibold text-white">{account.platform}</h4>
                          <p className="text-sm text-gray-400">{account.username}</p>
                        </div>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Followers:</span>
                          <span className="text-white">{account.followers.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Engagement:</span>
                          <span className="text-white">{account.engagement}%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Status:</span>
                          <span className={`px-2 py-1 rounded text-xs ${
                            account.status === 'connected' ? 'bg-green-900/20 text-green-400' :
                            account.status === 'disconnected' ? 'bg-red-900/20 text-red-400' :
                            'bg-yellow-900/20 text-yellow-400'
                          }`}>
                            {account.status}
                          </span>
                        </div>
                      </div>
                      <button className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                        account.status === 'connected' 
                          ? 'bg-slate-600 text-white hover:bg-slate-500' 
                          : 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                      }`}>
                        {account.status === 'connected' ? 'Manage' : 'Connect'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Features Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                AI-Powered <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Social Media Management</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <SparklesIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Content Optimization</h3>
                <p className="text-gray-300">Automatically optimize your posts for maximum engagement across all platforms.</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <CalendarIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Scheduling</h3>
                <p className="text-gray-300">AI-powered optimal posting times to reach your audience when they're most active.</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <ChartBarIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
                <p className="text-gray-300">Comprehensive analytics and insights to track performance and optimize your strategy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Social Media <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Pricing Plans</span>
              </h2>
              <p className="text-xl text-gray-300">Choose the perfect plan for your social media needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-bold mb-4">Starter</h3>
                <div className="text-4xl font-bold text-purple-400 mb-6">$149<span className="text-lg text-gray-400">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Up to 5 social accounts
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited posts
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Basic AI optimization
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Email support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Get Started
                </button>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-xl border border-purple-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                <div className="text-4xl font-bold text-purple-400 mb-6">$399<span className="text-lg text-gray-400">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Up to 15 social accounts
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Advanced AI optimization
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Content calendar
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Get Started
                </button>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-purple-400 mb-6">$999<span className="text-lg text-gray-400">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited social accounts
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Full AI suite
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Team collaboration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Custom integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    24/7 support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Transform Your Social Media Presence with AI
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of AI-driven social media management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 (302) 464-0950</a></p>
              <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISocialMediaManager;