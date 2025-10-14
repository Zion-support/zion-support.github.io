import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Brain, Target, BarChart3, CheckCircle2, Star, Users, Clock, Zap, Globe, Shield, Sparkles, PenTool, Calendar, DollarSign, FileText, Mail, MessageSquare, Mic, Code, Eye, EyeOff, Key, Fingerprint, Smartphone, Laptop, Monitor, Database, Cpu, Network, AlertTriangle } from 'lucide-react'

const AITaskManagerPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI Task Prioritization',
      description: 'Intelligent AI algorithms automatically prioritize your tasks based on deadlines, importance, and your work patterns.'
    },
    {
      icon: <Target className="w-6 h-6 text-emerald-400" />,
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling that considers your energy levels, meeting times, and optimal productivity windows.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: 'Progress Analytics',
      description: 'Detailed analytics and insights to track your productivity patterns and identify areas for improvement.'
    },
    {
      icon: <Users className="w-6 h-6 text-orange-400" />,
      title: 'Team Collaboration',
      description: 'Seamless team collaboration with shared workspaces, task assignments, and real-time updates.'
    },
    {
      icon: <Zap className="w-6 h-6 text-pink-400" />,
      title: 'Automation',
      description: 'Automate repetitive tasks and workflows to focus on what matters most with AI-powered automation.'
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: 'Cross-Platform Sync',
      description: 'Sync your tasks across all devices and platforms with real-time updates and offline access.'
    }
  ]

  const taskFeatures = [
    {
      icon: <CheckCircle className="w-8 h-8 text-cyan-400" />,
      title: 'Smart Task Creation',
      description: 'Create tasks using natural language and let AI extract details, set priorities, and suggest deadlines.',
      price: 'Included',
      features: ['Natural language input', 'Auto-categorization', 'Priority detection', 'Deadline suggestions']
    },
    {
      icon: <Calendar className="w-8 h-8 text-emerald-400" />,
      title: 'Intelligent Scheduling',
      description: 'AI-powered calendar integration that finds optimal time slots and prevents scheduling conflicts.',
      price: 'Included',
      features: ['Calendar sync', 'Time blocking', 'Conflict detection', 'Energy optimization']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      title: 'Productivity Analytics',
      description: 'Comprehensive analytics dashboard to track your productivity and identify improvement opportunities.',
      price: 'Included',
      features: ['Time tracking', 'Productivity metrics', 'Goal tracking', 'Performance insights']
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: 'Team Management',
      description: 'Advanced team collaboration features with task assignments, progress tracking, and communication tools.',
      price: '$4.99/month',
      features: ['Team workspaces', 'Task assignments', 'Progress tracking', 'Team analytics']
    },
    {
      icon: <Zap className="w-8 h-8 text-pink-400" />,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and create custom workflows to boost your productivity.',
      price: '$2.99/month',
      features: ['Custom workflows', 'Task automation', 'Integration triggers', 'Smart notifications']
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: 'Enterprise Security',
      description: 'Advanced security features for enterprise teams including SSO, audit logs, and compliance.',
      price: '$9.99/month',
      features: ['SSO integration', 'Audit logs', 'Compliance tools', 'Advanced permissions']
    }
  ]

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$4.99',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        'Unlimited tasks',
        'AI prioritization',
        'Smart scheduling',
        'Basic analytics',
        'Cross-platform sync',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$9.99',
      period: '/month',
      description: 'Ideal for professionals',
      features: [
        'Everything in Personal',
        'Advanced analytics',
        'Team collaboration',
        'Workflow automation',
        'Priority support',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$19.99',
      period: '/month',
      description: 'For teams and organizations',
      features: [
        'Everything in Professional',
        'Advanced team features',
        'Enterprise security',
        'Custom AI training',
        'Dedicated support',
        'White-label options'
      ],
      popular: false
    }
  ]

  const stats = [
    { number: '40%', label: 'Productivity Increase', icon: <Zap className="w-6 h-6 text-cyan-400" /> },
    { number: '95%', label: 'Task Completion Rate', icon: <CheckCircle className="w-6 h-6 text-emerald-400" /> },
    { number: '2hrs', label: 'Time Saved Daily', icon: <Clock className="w-6 h-6 text-purple-400" /> },
    { number: '50K+', label: 'Active Users', icon: <Users className="w-6 h-6 text-orange-400" /> }
  ]

  const testimonials = [
    {
      name: 'Jessica Martinez',
      company: 'Product Manager',
      content: 'Zion Tech Group\'s AI Task Manager has completely transformed how I organize my work. The AI prioritization is incredibly accurate and I\'ve increased my productivity by 40%.',
      rating: 5
    },
    {
      name: 'David Kim',
      company: 'Freelance Designer',
      content: 'The smart scheduling feature is a game-changer. It automatically finds the best times for my creative work and blocks out distractions. I\'ve never been more organized.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'Team Lead',
      content: 'The team collaboration features are outstanding. We can now track everyone\'s progress in real-time and the AI helps us identify bottlenecks before they become problems.',
      rating: 5
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Task Manager - Intelligent Task Management | Zion Tech Group</title>
        <meta name="description" content="Boost your productivity with our AI-powered task manager. Smart prioritization, intelligent scheduling, and team collaboration with 40% productivity increase." />
        <meta name="keywords" content="AI task manager, task management, productivity, smart scheduling, team collaboration, workflow automation" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/ai-task-manager" />
      </Helmet>

      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <CheckCircle className="w-4 h-4" />
              <span>AI-Powered Task Management</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Intelligent <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Task Manager</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Boost your productivity with our AI-powered task manager. Smart prioritization, 
              intelligent scheduling, and team collaboration to help you achieve more.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Task Management?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-driven productivity with our proven results.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Task Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Everything you need to manage tasks efficiently with artificial intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Task Features Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Task <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Comprehensive task management features powered by artificial intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {taskFeatures.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">
                      {feature.price}
                    </div>
                    <div className="space-y-1">
                      {feature.features.map((feat, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-xs">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                    <Link 
                      to="/contact"
                      className="block w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your productivity needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                    : 'border-white/20 hover:border-cyan-400/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-900/50 to-pink-900/50 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Users Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Join thousands of users who have transformed their productivity with our AI task manager.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
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
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Boost Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Productivity?</span>
              </h2>
              
              <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                Join thousands of users who have transformed their productivity with our AI task manager. 
                Start your free trial today and experience the power of intelligent task management.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/contact" 
                  className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/pricing" 
                  className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                >
                  <span>View All Plans</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AITaskManagerPage