import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Target, Brain, Zap, Shield, Users, Clock, DollarSign, Star, TrendingUp, BarChart3, FileText, Headphones, Mail, Phone, MapPin, Calendar, Settings, Smartphone, Globe } from 'lucide-react'

export default function AITaskManagerProPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Prioritization',
      description: 'Intelligent task prioritization based on deadlines, importance, and your work patterns.',
      benefits: ['Smart scheduling', 'Deadline management', 'Priority optimization', 'Workload balancing']
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Automated Workflows',
      description: 'Create custom automation rules to streamline repetitive tasks and boost productivity.',
      benefits: ['Rule-based automation', 'Custom triggers', 'Action sequences', 'Integration workflows']
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Team Collaboration',
      description: 'Seamless team collaboration with real-time updates, shared workspaces, and communication tools.',
      benefits: ['Real-time sync', 'Team workspaces', 'Comment system', 'File sharing']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics to track productivity, identify bottlenecks, and optimize workflows.',
      benefits: ['Productivity metrics', 'Time tracking', 'Performance insights', 'Trend analysis']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 5 team members',
        'Unlimited tasks',
        'Basic AI prioritization',
        'Mobile app access',
        'Email support',
        '5GB storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 team members',
        'Advanced AI features',
        'Custom workflows',
        'Priority support',
        'Analytics dashboard',
        '50GB storage',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited team members',
        'Full AI capabilities',
        'Custom integrations',
        '24/7 phone support',
        'Advanced analytics',
        'Unlimited storage',
        'White-label options'
      ],
      popular: false
    }
  ]

  const benefits = [
    'Increase productivity by up to 40%',
    'Reduce time spent on task management by 60%',
    'Improve team collaboration and communication',
    'Gain valuable insights into work patterns',
    'Automate repetitive tasks and workflows',
    'Access from anywhere with mobile apps'
  ]

  const stats = [
    { number: '40%', label: 'Productivity Boost', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '60%', label: 'Time Saved', icon: <Clock className="w-6 h-6" /> },
    { number: '95%', label: 'User Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '10K+', label: 'Active Users', icon: <Users className="w-6 h-6" /> }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      content: 'AI Task Manager Pro transformed how our team works. We\'re 40% more productive and never miss deadlines.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Digital Agency Co.',
      content: 'The AI prioritization is incredible. It knows exactly what I need to work on next.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Marketing Solutions',
      content: 'Our team collaboration improved dramatically. The real-time updates keep everyone aligned.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Task Manager Pro - Zion Tech Group | Intelligent Task Management</title>
        <meta name="description" content="Revolutionary AI-powered task management that boosts productivity by 40%. Smart prioritization, automated workflows, and team collaboration in one powerful platform." />
        <meta name="keywords" content="AI task manager, productivity software, task management, team collaboration, workflow automation, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Task Manager Pro</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Revolutionize your productivity with AI-powered task management that learns your work patterns, 
              prioritizes intelligently, and automates workflows to boost efficiency by 40%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/micro-saas-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Micro SAAS
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 group-hover:from-cyan-400/30 group-hover:to-purple-400/30 transition-all duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{stat.number}</div>
                  <div className="text-gray-300 text-sm group-hover:text-white transition-colors">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Intelligent task management powered by cutting-edge artificial intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 inline-block">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 mb-6 group-hover:text-white transition-colors">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your team size and needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-cyan-400/50 scale-105' 
                  : 'border-white/20 hover:border-cyan-400/50'
              }`}>
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-white text-white hover:bg-white/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose AI Task Manager Pro?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our AI-powered platform learns from your work patterns and continuously optimizes 
                your productivity, making task management effortless and efficient.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                  <span>Setup in 5 minutes</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                  <span>Cancel anytime</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mt-6"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Real feedback from teams who transformed their productivity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Boost Your Productivity?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of teams using AI Task Manager Pro to streamline workflows, 
                improve collaboration, and achieve more in less time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/micro-saas-services"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  View All Micro SAAS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
