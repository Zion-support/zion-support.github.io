import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, MessageCircle, Star, TrendingUp, Award, BookOpen, Code, Lightbulb, Share2 } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const communityStats = [
    { label: 'Active Members', value: '2,500+', icon: Users },
    { label: 'Discussions', value: '15,000+', icon: MessageCircle },
    { label: 'Solutions', value: '8,500+', icon: Lightbulb },
    { label: 'Projects Shared', value: '1,200+', icon: Share2 }
  ];

  const recentDiscussions = [
    {
      id: 1,
      title: 'Best practices for AI model deployment in production',
      author: 'Sarah Chen',
      replies: 24,
      views: 156,
      lastActivity: '2 hours ago',
      category: 'AI Development',
      tags: ['deployment', 'production', 'best-practices'],
      solved: true
    },
    {
      id: 2,
      title: 'Custom sentiment analysis model not performing well',
      author: 'Mike Rodriguez',
      replies: 12,
      views: 89,
      lastActivity: '4 hours ago',
      category: 'Machine Learning',
      tags: ['sentiment-analysis', 'model-performance', 'troubleshooting'],
      solved: false
    },
    {
      id: 3,
      title: 'Showcase: AI-powered customer service chatbot',
      author: 'Alex Johnson',
      replies: 18,
      views: 203,
      lastActivity: '6 hours ago',
      category: 'Showcase',
      tags: ['chatbot', 'customer-service', 'showcase'],
      solved: false
    },
    {
      id: 4,
      title: 'API rate limiting strategies for high-traffic applications',
      author: 'David Kim',
      replies: 8,
      views: 67,
      lastActivity: '8 hours ago',
      category: 'Backend Development',
      tags: ['api', 'rate-limiting', 'performance'],
      solved: false
    }
  ];

  const categories = [
    {
      name: 'AI Development',
      description: 'Discuss AI models, frameworks, and development best practices',
      posts: 1250,
      icon: Code,
      bgColor: 'bg-blue-100',
      color: 'text-blue-600'
    },
    {
      name: 'Machine Learning',
      description: 'Share ML algorithms, data science techniques, and research',
      posts: 890,
      icon: TrendingUp,
      bgColor: 'bg-green-100',
      color: 'text-green-600'
    },
    {
      name: 'Showcase',
      description: 'Show off your projects and get feedback from the community',
      posts: 456,
      icon: Award,
      bgColor: 'bg-purple-100',
      color: 'text-purple-600'
    },
    {
      name: 'Troubleshooting',
      description: 'Get help with technical issues and debugging',
      posts: 2100,
      icon: Lightbulb,
      bgColor: 'bg-yellow-100',
      color: 'text-yellow-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Join our developer community. Share projects, get help, and connect with other AI developers using Zion Tech Group services." />
        <meta name="keywords" content="developer community, AI community, developer forum, project showcase, technical discussions" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Developer Community
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Connect with fellow developers, share your projects, get help, and learn from the community.
          </p>
          
          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {communityStats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="w-8 h-8 text-cyan-400 mr-2" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Join Community
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Browse Discussions
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Discussion Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.posts} posts</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors">
                  View Discussions
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">Recent Discussions</h2>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Start Discussion
            </button>
          </div>
          
          <div className="space-y-6">
            {recentDiscussions.map((discussion) => (
              <div key={discussion.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {discussion.category}
                      </span>
                      {discussion.solved && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full flex items-center">
                          <Star className="w-3 h-3 mr-1" />
                          Solved
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-purple-600 cursor-pointer">
                      {discussion.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <span>by {discussion.author}</span>
                      <span>{discussion.replies} replies</span>
                      <span>{discussion.views} views</span>
                      <span>{discussion.lastActivity}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {discussion.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;