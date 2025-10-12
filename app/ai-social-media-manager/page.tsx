<<<<<<< HEAD
import React, { useState } from 'react'
import { Share2, TrendingUp, Users, BarChart3, Calendar, Zap, Target, Heart, MessageCircle, Eye, Plus, Filter, Settings, Star, CheckCircle, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const AISocialMediaManager: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const features = [
    {
      icon: <Share2 className="w-6 h-6 text-pink-400" />,
      title: 'AI Content Creation',
      description: 'Generate engaging posts, captions, and hashtags tailored to your brand voice'
    },
    {
      icon: <Calendar className="w-6 h-6 text-blue-400" />,
      title: 'Smart Scheduling',
      description: 'AI-powered optimal posting times based on audience engagement patterns'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      title: 'Performance Analytics',
      description: 'Advanced insights and recommendations to boost your social media ROI'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: 'Audience Intelligence',
      description: 'Deep insights into your audience demographics, interests, and behavior'
    }
  ]

  const platforms = [
    { name: 'Instagram', icon: '📷', posts: 24, engagement: '4.2%', followers: '12.5K' },
    { name: 'Twitter', icon: '🐦', posts: 18, engagement: '2.8%', followers: '8.9K' },
    { name: 'LinkedIn', icon: '💼', posts: 12, engagement: '3.5%', followers: '5.2K' },
    { name: 'Facebook', icon: '👥', posts: 15, engagement: '1.9%', followers: '18.7K' },
    { name: 'TikTok', icon: '🎵', posts: 8, engagement: '6.1%', followers: '3.4K' },
    { name: 'YouTube', icon: '📺', posts: 6, engagement: '2.3%', followers: '2.1K' }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '3 social media accounts',
        'Basic AI content generation',
        'Standard scheduling',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing brands',
      features: [
        '10 social media accounts',
        'Advanced AI content creation',
        'Smart scheduling & optimization',
        'Advanced analytics & insights',
        'Priority support',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited accounts',
        'Full AI suite',
        'Custom brand voice training',
        'White-label options',
        'Dedicated support',
        'API access'
      ],
      popular: false
    }
  ]

  const stats = [
    { number: '300%', label: 'Engagement Increase' },
    { number: '50%', label: 'Time Saved' },
    { number: '2,500+', label: 'Happy Customers' },
    { number: '24/7', label: 'AI Monitoring' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Share2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Social Media
              <br />
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Manager
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your social media presence with AI-powered content creation, smart scheduling, 
              and advanced analytics. Increase engagement by 300% while saving 50% of your time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center"
              >
                Start Free Trial
                <Zap className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="#demo" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage artificial intelligence to create, schedule, and optimize your social media content.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of AI-driven social media management with our interactive demo.
            </p>
          </div>
          
          {/* Demo Tabs */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8">
            <div className="flex flex-wrap justify-center mb-8">
              {['overview', 'content', 'analytics', 'scheduling'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 mr-2 mb-2 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Demo Content */}
            <div className="min-h-[400px] bg-gray-900/50 rounded-lg p-8">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">Social Media Dashboard</h3>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-green-400">
                        <TrendingUp className="w-5 h-5 mr-2" />
                        <span>+15% This Week</span>
                      </div>
                      <div className="flex items-center text-blue-400">
                        <Users className="w-5 h-5 mr-2" />
                        <span>52.8K Total Followers</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {platforms.map((platform, index) => (
                      <div key={index} className="bg-white/10 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <span className="text-2xl mr-3">{platform.icon}</span>
                            <h4 className="text-lg font-semibold text-white">{platform.name}</h4>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-300">Posts</div>
                            <div className="text-lg font-bold text-white">{platform.posts}</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm text-gray-300">Engagement</div>
                            <div className="text-lg font-bold text-green-400">{platform.engagement}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-300">Followers</div>
                            <div className="text-lg font-bold text-blue-400">{platform.followers}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'content' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">AI Content Creation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Generated Posts</h4>
                      <div className="space-y-4">
                        <div className="bg-gray-800/50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-300">Instagram Post</span>
                            <div className="flex items-center text-green-400">
                              <CheckCircle className="w-4 h-4 mr-1" />
                              <span className="text-sm">Ready</span>
                            </div>
                          </div>
                          <p className="text-white text-sm mb-2">
                            "Transform your business with AI! 🚀 Our latest innovation is changing the game. 
                            #AI #Innovation #BusinessGrowth"
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-gray-400">
                            <span>📷 Image: Auto-generated</span>
                            <span>⏰ Best time: 2:30 PM</span>
                          </div>
                        </div>
                        
                        <div className="bg-gray-800/50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-300">Twitter Post</span>
                            <div className="flex items-center text-yellow-400">
                              <AlertCircle className="w-4 h-4 mr-1" />
                              <span className="text-sm">Pending Review</span>
                            </div>
                          </div>
                          <p className="text-white text-sm mb-2">
                            "Just discovered the power of AI in social media management! 
                            Game-changing insights ahead. #AI #SocialMedia #Tech"
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-gray-400">
                            <span>🐦 Character count: 98/280</span>
                            <span>⏰ Best time: 3:45 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Content Ideas</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Target className="w-5 h-5 text-pink-400 mr-3 mt-1" />
                          <div>
                            <p className="text-white text-sm font-medium">Trending Topic</p>
                            <p className="text-gray-300 text-xs">AI automation in small businesses - high engagement potential</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Heart className="w-5 h-5 text-red-400 mr-3 mt-1" />
                          <div>
                            <p className="text-white text-sm font-medium">Engagement Boost</p>
                            <p className="text-gray-300 text-xs">Behind-the-scenes content performs 40% better</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <MessageCircle className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                          <div>
                            <p className="text-white text-sm font-medium">Community Building</p>
                            <p className="text-gray-300 text-xs">Ask questions to increase comments by 60%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'analytics' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Performance Analytics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Engagement Metrics</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">Total Reach</span>
                          <div className="flex items-center">
                            <div className="w-24 bg-gray-700 rounded-full h-2 mr-2">
                              <div className="bg-pink-400 h-2 rounded-full" style={{width: '85%'}}></div>
                            </div>
                            <span className="text-pink-400 text-sm">+23%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">Engagement Rate</span>
                          <div className="flex items-center">
                            <div className="w-24 bg-gray-700 rounded-full h-2 mr-2">
                              <div className="bg-green-400 h-2 rounded-full" style={{width: '92%'}}></div>
                            </div>
                            <span className="text-green-400 text-sm">+18%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">Click-through Rate</span>
                          <div className="flex items-center">
                            <div className="w-24 bg-gray-700 rounded-full h-2 mr-2">
                              <div className="bg-blue-400 h-2 rounded-full" style={{width: '76%'}}></div>
                            </div>
                            <span className="text-blue-400 text-sm">+12%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">AI Insights</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <TrendingUp className="w-5 h-5 text-green-400 mr-3 mt-1" />
                          <div>
                            <p className="text-white text-sm font-medium">Peak Performance</p>
                            <p className="text-gray-300 text-xs">Posts at 2-4 PM get 40% more engagement</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Eye className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                          <div>
                            <p className="text-white text-sm font-medium">Content Type</p>
                            <p className="text-gray-300 text-xs">Video content performs 3x better than images</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Users className="w-5 h-5 text-purple-400 mr-3 mt-1" />
                          <div>
                            <p className="text-white text-sm font-medium">Audience Growth</p>
                            <p className="text-gray-300 text-xs">Targeting tech professionals increased followers by 25%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'scheduling' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Smart Scheduling</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Content Calendar</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                          <div>
                            <p className="text-white text-sm font-medium">Monday, Dec 9</p>
                            <p className="text-gray-300 text-xs">3 posts scheduled</p>
                          </div>
                          <div className="flex items-center text-green-400">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            <span className="text-sm">Ready</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                          <div>
                            <p className="text-white text-sm font-medium">Tuesday, Dec 10</p>
                            <p className="text-gray-300 text-xs">2 posts scheduled</p>
                          </div>
                          <div className="flex items-center text-yellow-400">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            <span className="text-sm">Pending</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                          <div>
                            <p className="text-white text-sm font-medium">Wednesday, Dec 11</p>
                            <p className="text-gray-300 text-xs">4 posts scheduled</p>
                          </div>
                          <div className="flex items-center text-blue-400">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span className="text-sm">Optimized</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Optimal Timing</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-300">Instagram</span>
                            <span className="text-sm text-white">2:30 PM</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-pink-400 h-2 rounded-full" style={{width: '85%'}}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-300">Twitter</span>
                            <span className="text-sm text-white">3:45 PM</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-blue-400 h-2 rounded-full" style={{width: '92%'}}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-300">LinkedIn</span>
                            <span className="text-sm text-white">8:15 AM</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-purple-400 h-2 rounded-full" style={{width: '78%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with a free trial and scale as your social media presence grows.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:bg-white/20 ${plan.popular ? 'border-pink-400 ring-2 ring-pink-400/50' : 'border-white/20'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-8">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 text-xl">{plan.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-4 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {plan.name === 'Starter' ? 'Start Free Trial' : 'Get Started'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Social Media?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Join thousands of brands already using AI to boost their social media presence and engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AISocialMediaManager
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function AiSocialMediaManagerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Ai Social Media Manager - Zion Tech Group</title>
        <meta name="description" content="Professional ai social media manager services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Ai Social Media Manager</h1>
        <p className="text-lg text-gray-300 mb-8">Professional ai social media manager services coming soon.</p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  )
}
>>>>>>> main
