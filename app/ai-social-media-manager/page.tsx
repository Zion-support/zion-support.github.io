'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Globe, Lock, Code2, MessageSquare, Target, TrendingUp, Sparkles, Rocket, Mail, Video, FileText, Smartphone, Cpu, Database, BarChart3, Settings, Calendar, Share2, BarChart, Clock, DollarSign, TrendingUp as TrendingUpIcon, Eye, Heart, MessageCircle, Share, Plus, Edit, Trash2, Save, Upload, Download, Filter, Search, RefreshCw, Play, Pause, Stop, SkipForward, SkipBack } from 'lucide-react';

const AISocialMediaManager: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [posts, setPosts] = useState([
    {
      id: 1,
      content: "🚀 Excited to announce our new AI-powered social media management platform! Transform your content strategy with intelligent automation.",
      platform: 'twitter',
      scheduledTime: '2024-01-15T10:00:00Z',
      status: 'scheduled',
      engagement: { likes: 245, shares: 89, comments: 34 }
    },
    {
      id: 2,
      content: "💡 Did you know? AI can increase your social media engagement by up to 300%! Our platform makes it easy.",
      platform: 'linkedin',
      scheduledTime: '2024-01-15T14:30:00Z',
      status: 'published',
      engagement: { likes: 156, shares: 23, comments: 12 }
    },
    {
      id: 3,
      content: "🎯 Ready to revolutionize your social media presence? Try our AI Social Media Manager today!",
      platform: 'facebook',
      scheduledTime: '2024-01-16T09:00:00Z',
      status: 'draft',
      engagement: { likes: 0, shares: 0, comments: 0 }
    }
  ]);
  const [analytics, setAnalytics] = useState({
    totalFollowers: 125000,
    engagementRate: 4.2,
    reach: 890000,
    impressions: 2100000,
    clicks: 15600,
    conversions: 234
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Generate engaging posts, captions, and hashtags using advanced AI algorithms',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Automatically schedule posts at optimal times for maximum engagement',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics to track performance and ROI',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Multi-Platform Management',
      description: 'Manage all your social media accounts from one unified dashboard',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      features: [
        'Up to 3 social accounts',
        '50 AI-generated posts/month',
        'Basic analytics',
        'Email support',
        'Content calendar'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      features: [
        'Up to 10 social accounts',
        'Unlimited AI-generated posts',
        'Advanced analytics',
        'Priority support',
        'Team collaboration',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      features: [
        'Unlimited social accounts',
        'Unlimited AI-generated posts',
        'White-label solution',
        'Dedicated account manager',
        'Custom integrations',
        'API access'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      content: 'The AI Social Media Manager increased our engagement by 300% and saved us 20 hours per week!',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Mike Chen',
      company: 'Digital Marketing Pro',
      content: 'Finally, a tool that understands our brand voice and creates content that actually converts.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'E-commerce Solutions',
      content: 'The analytics are incredible. We can see exactly which content performs best and why.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Social Media Manager - Zion Tech Group</title>
        <meta name="description" content="Transform your social media presence with AI-powered content creation, smart scheduling, and comprehensive analytics. Increase engagement by 300%." />
        <meta name="keywords" content="AI social media, content generation, social media automation, social media analytics, social media management" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl mb-6">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Social Media Manager
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your social media presence with AI-powered content creation, smart scheduling, and comprehensive analytics
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group">
                  Start Free Trial
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105">
                  Watch Demo
                </button>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center group">
                  <div className="text-3xl font-bold text-white mb-2">300%</div>
                  <div className="text-gray-400 text-sm">Increase in Engagement</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-white mb-2">20hrs</div>
                  <div className="text-gray-400 text-sm">Time Saved Weekly</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-400 text-sm">Social Platforms</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to dominate social media with AI-powered automation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Command Center</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Manage all your social media accounts from one powerful dashboard
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              {/* Tab Navigation */}
              <div className="flex space-x-4 mb-8">
                {['overview', 'content', 'analytics', 'scheduling'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeTab === tab
                        ? 'bg-cyan-500 text-white'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Dashboard Content */}
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-slate-700/50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">Total Followers</h3>
                      <Users className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{analytics.totalFollowers.toLocaleString()}</div>
                    <div className="text-green-400 text-sm">+12.5% from last month</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">Engagement Rate</h3>
                      <TrendingUpIcon className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{analytics.engagementRate}%</div>
                    <div className="text-green-400 text-sm">+0.8% from last month</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">Reach</h3>
                      <Eye className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{analytics.reach.toLocaleString()}</div>
                    <div className="text-green-400 text-sm">+8.2% from last month</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">Conversions</h3>
                      <Target className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{analytics.conversions}</div>
                    <div className="text-green-400 text-sm">+15.3% from last month</div>
                  </div>
                </div>
              )}

              {activeTab === 'content' && (
                <div className="space-y-4">
                  {posts.map((post) => (
                    <div key={post.id} className="bg-slate-700/50 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${
                            post.status === 'published' ? 'bg-green-400' :
                            post.status === 'scheduled' ? 'bg-yellow-400' : 'bg-gray-400'
                          }`}></div>
                          <span className="text-sm text-gray-400 capitalize">{post.platform}</span>
                          <span className="text-sm text-gray-400">
                            {new Date(post.scheduledTime).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          <button className="text-gray-400 hover:text-cyan-400 transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-gray-400 hover:text-red-400 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <p className="text-white mb-4">{post.content}</p>
                      <div className="flex items-center space-x-6 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{post.engagement.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.engagement.comments}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Share className="w-4 h-4" />
                          <span>{post.engagement.shares}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 relative ${
                    plan.popular 
                      ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                      : 'border-gray-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Customers Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using our AI Social Media Manager
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Social Media?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Start your free trial today and see the difference AI can make for your social media presence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                    Start Free Trial
                  </button>
                  <Link 
                    to="/contact"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Contact Sales
                  </Link>
                </div>
                <div className="mt-8 text-sm text-gray-400">
                  <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
                  <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AISocialMediaManager;
