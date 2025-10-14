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

  const categories = [
    {
      name: 'AI Development',
      description: 'Discuss AI models, algorithms, and implementation strategies',
      posts: 1250,
      icon: Code,
      bgColor: 'bg-blue-100',
      color: 'text-blue-600'
    },
    {
      name: 'Machine Learning',
      description: 'Share ML techniques, datasets, and best practices',
      posts: 980,
      icon: TrendingUp,
      bgColor: 'bg-green-100',
      color: 'text-green-600'
    },
    {
      name: 'Showcase',
      description: 'Show off your projects and get feedback from the community',
      posts: 450,
      icon: Award,
      bgColor: 'bg-purple-100',
      color: 'text-purple-600'
    },
    {
      name: 'Tutorials',
      description: 'Learn from step-by-step guides and tutorials',
      posts: 320,
      icon: BookOpen,
      bgColor: 'bg-orange-100',
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Join our developer community and connect with fellow AI and tech enthusiasts" />
        <meta name="keywords" content="community, developers, AI, machine learning, tech discussions" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Developer Community
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Best practices for AI model deployment in production
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-300">
                    <span>by Sarah Chen</span>
                    <span>•</span>
                    <span>AI Development</span>
                    <span>•</span>
                    <span>2 hours ago</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Solved</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Looking for advice on deploying machine learning models in production environments...
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>24 replies</span>
                  <span>•</span>
                  <span>156 views</span>
                </div>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <Star className="w-4 h-4" />
                  </button>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;