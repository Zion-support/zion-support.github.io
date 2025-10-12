<<<<<<< HEAD
import React, { useState } from 'react'
import { Brain, Calendar, Users, BarChart3, Clock, CheckCircle, AlertCircle, Plus, Filter, Search, Settings, Zap, Target, TrendingUp, Award, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const AIProjectManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      title: 'AI-Powered Planning',
      description: 'Intelligent project planning with predictive analytics and resource optimization'
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: 'Smart Team Management',
      description: 'Automated task assignment based on team member skills and availability'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: 'Real-time Analytics',
      description: 'Advanced analytics dashboard with AI-driven insights and recommendations'
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-400" />,
      title: 'Time Tracking',
      description: 'Automatic time tracking with productivity analysis and efficiency metrics'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 team members',
        'Basic AI recommendations',
        'Standard project templates',
        'Email support',
        '5GB storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 team members',
        'Advanced AI analytics',
        'Custom project templates',
        'Priority support',
        '50GB storage',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Full AI suite',
        'White-label options',
        'Dedicated support',
        'Unlimited storage',
        'Custom integrations'
      ],
      popular: false
    }
  ]

  const stats = [
    { number: '95%', label: 'Project Success Rate' },
    { number: '40%', label: 'Time Saved' },
    { number: '500+', label: 'Happy Teams' },
    { number: '24/7', label: 'AI Support' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Project
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Management
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionize your project management with AI-powered insights, automated task assignment, 
              and intelligent resource optimization. Boost productivity by 40% with our smart project management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
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
              Leverage artificial intelligence to streamline your project management and boost team productivity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
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
              Experience the power of AI-driven project management with our interactive demo.
            </p>
          </div>
          
          {/* Demo Tabs */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8">
            <div className="flex flex-wrap justify-center mb-8">
              {['overview', 'analytics', 'team', 'settings'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 mr-2 mb-2 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
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
                    <h3 className="text-2xl font-bold text-white">Project Dashboard</h3>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-green-400">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span>3 Active Projects</span>
                      </div>
                      <div className="flex items-center text-blue-400">
                        <Clock className="w-5 h-5 mr-2" />
                        <span>On Track</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Q4 Website Redesign</h4>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-300">Progress</span>
                        <span className="text-sm text-green-400">75%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-sm text-gray-300">Due: Dec 15</span>
                        <span className="text-sm text-blue-400">5 days left</span>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Mobile App Launch</h4>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-300">Progress</span>
                        <span className="text-sm text-yellow-400">45%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full" style={{width: '45%'}}></div>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-sm text-gray-300">Due: Jan 20</span>
                        <span className="text-sm text-yellow-400">25 days left</span>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-2">AI Integration</h4>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-300">Progress</span>
                        <span className="text-sm text-purple-400">90%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-sm text-gray-300">Due: Dec 10</span>
                        <span className="text-sm text-green-400">2 days left</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'analytics' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">AI Analytics Dashboard</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Team Productivity</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">John Doe</span>
                          <div className="flex items-center">
                            <div className="w-24 bg-gray-700 rounded-full h-2 mr-2">
                              <div className="bg-green-400 h-2 rounded-full" style={{width: '85%'}}></div>
                            </div>
                            <span className="text-green-400 text-sm">85%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">Jane Smith</span>
                          <div className="flex items-center">
                            <div className="w-24 bg-gray-700 rounded-full h-2 mr-2">
                              <div className="bg-blue-400 h-2 rounded-full" style={{width: '92%'}}></div>
                            </div>
                            <span className="text-blue-400 text-sm">92%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">Mike Johnson</span>
                          <div className="flex items-center">
                            <div className="w-24 bg-gray-700 rounded-full h-2 mr-2">
                              <div className="bg-yellow-400 h-2 rounded-full" style={{width: '78%'}}></div>
                            </div>
                            <span className="text-yellow-400 text-sm">78%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">AI Recommendations</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-yellow-400 mr-3 mt-1" />
                          <div>
                            <p className="text-white text-sm font-medium">Resource Optimization</p>
                            <p className="text-gray-300 text-xs">Consider reassigning 2 tasks from John to Jane for better balance</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1" />
                          <div>
                            <p className="text-white text-sm font-medium">Timeline Adjustment</p>
                            <p className="text-gray-300 text-xs">Mobile App project is ahead of schedule by 3 days</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <TrendingUp className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                          <div>
                            <p className="text-white text-sm font-medium">Performance Boost</p>
                            <p className="text-gray-300 text-xs">Team productivity increased by 15% this week</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'team' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Smart Team Management</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { name: 'John Doe', role: 'Frontend Developer', status: 'Available', avatar: 'JD', tasks: 8 },
                      { name: 'Jane Smith', role: 'Backend Developer', status: 'Busy', avatar: 'JS', tasks: 12 },
                      { name: 'Mike Johnson', role: 'UI/UX Designer', status: 'Available', avatar: 'MJ', tasks: 5 },
                      { name: 'Sarah Wilson', role: 'Project Manager', status: 'In Meeting', avatar: 'SW', tasks: 15 },
                      { name: 'David Brown', role: 'DevOps Engineer', status: 'Available', avatar: 'DB', tasks: 6 },
                      { name: 'Lisa Davis', role: 'QA Tester', status: 'Busy', avatar: 'LD', tasks: 10 }
                    ].map((member, index) => (
                      <div key={index} className="bg-white/10 rounded-lg p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                            {member.avatar}
                          </div>
                          <div>
                            <h4 className="text-white font-semibold">{member.name}</h4>
                            <p className="text-gray-300 text-sm">{member.role}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-300">Status</span>
                          <span className={`text-sm px-2 py-1 rounded-full ${
                            member.status === 'Available' ? 'bg-green-500/20 text-green-400' :
                            member.status === 'Busy' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {member.status}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-300">Active Tasks</span>
                          <span className="text-sm text-white">{member.tasks}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">AI Configuration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">AI Preferences</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">Auto-assign tasks</span>
                          <div className="w-12 h-6 bg-green-500 rounded-full relative">
                            <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">Smart notifications</span>
                          <div className="w-12 h-6 bg-green-500 rounded-full relative">
                            <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">Predictive analytics</span>
                          <div className="w-12 h-6 bg-gray-600 rounded-full relative">
                            <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Performance Metrics</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-300">AI Accuracy</span>
                            <span className="text-sm text-white">94%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-green-400 h-2 rounded-full" style={{width: '94%'}}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-300">Time Saved</span>
                            <span className="text-sm text-white">40%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-blue-400 h-2 rounded-full" style={{width: '40%'}}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-300">Team Satisfaction</span>
                            <span className="text-sm text-white">92%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-purple-400 h-2 rounded-full" style={{width: '92%'}}></div>
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
              Start with a free trial and scale as your team grows. All plans include our AI-powered features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:bg-white/20 ${plan.popular ? 'border-purple-400 ring-2 ring-purple-400/50' : 'border-white/20'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
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
                        ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
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
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Project Management?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Join thousands of teams already using AI to boost their productivity and project success rates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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

export default AIProjectManagement
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function AiProjectManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Ai Project Management - Zion Tech Group</title>
        <meta name="description" content="Professional ai project management services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Ai Project Management</h1>
        <p className="text-lg text-gray-300 mb-8">Professional ai project management services coming soon.</p>
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
