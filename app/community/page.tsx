import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, MessageCircle, Star, TrendingUp, Calendar, Award, BookOpen, Code, Lightbulb, Share2 } from 'lucide-react';

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
      replies: 31,
      views: 178,
      lastActivity: '8 hours ago',
      category: 'API Usage',
      tags: ['rate-limiting', 'scaling', 'performance'],
      solved: true
    }
  ];

  const categories = [
    {
      name: 'AI Development',
      description: 'General AI development discussions',
      icon: Code,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      posts: 1250
    },
    {
      name: 'Machine Learning',
      description: 'ML algorithms, models, and techniques',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      posts: 890
    },
    {
      name: 'API Usage',
      description: 'API integration and usage questions',
      icon: BookOpen,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      posts: 650
    },
    {
      name: 'Showcase',
      description: 'Share your AI projects and achievements',
      icon: Star,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      posts: 320
    },
    {
      name: 'Troubleshooting',
      description: 'Get help with technical issues',
      icon: Lightbulb,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      posts: 480
    },
    {
      name: 'Feature Requests',
      description: 'Suggest new features and improvements',
      icon: MessageCircle,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      posts: 150
    }
  ];

  const featuredProjects = [
    {
      title: 'AI-Powered E-commerce Recommendation Engine',
      author: 'Emma Wilson',
      description: 'Built a sophisticated recommendation system using our AI API that increased sales by 35%',
      image: '/images/projects/recommendation-engine.jpg',
      likes: 45,
      comments: 12,
      tags: ['recommendation-engine', 'e-commerce', 'machine-learning']
    },
    {
      title: 'Real-time Sentiment Analysis Dashboard',
      author: 'James Park',
      description: 'Created a live dashboard for monitoring social media sentiment using our NLP API',
      image: '/images/projects/sentiment-dashboard.jpg',
      likes: 38,
      comments: 8,
      tags: ['sentiment-analysis', 'dashboard', 'real-time']
    },
    {
      title: 'Automated Content Moderation System',
      author: 'Lisa Zhang',
      description: 'Developed an AI system for automatically moderating user-generated content',
      image: '/images/projects/content-moderation.jpg',
      likes: 52,
      comments: 15,
      tags: ['content-moderation', 'automation', 'nlp']
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
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          
          <div className="space-y-4">
            {recentDiscussions.map((discussion) => (
              <div key={discussion.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                        {discussion.category}
                      </span>
                      {discussion.solved && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                          <Award className="w-3 h-3 mr-1" />
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
                      {discussion.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
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

      {/* Featured Projects */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                  <div className="text-4xl">🚀</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">by {project.author}</span>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        {project.likes}
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {project.comments}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Community CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Connect with thousands of developers building amazing AI applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Sign Up Free
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;