import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../layout'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckSquare, Clock, Users, Brain, CheckCircle, Star, Zap, TrendingUp, Globe } from 'lucide-react'

const AITaskManagerPage: React.FC = () => {
  const features = [
    {
      icon: <CheckSquare className="w-6 h-6 text-cyan-400" />,
      title: "Smart Task Creation",
      description: "AI-powered task generation and prioritization based on your goals and deadlines"
    },
    {
      icon: <Clock className="w-6 h-6 text-green-400" />,
      title: "Time Management",
      description: "Intelligent time tracking and scheduling with automatic time allocation"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: "Team Collaboration",
      description: "Seamless team task management with AI-powered workload distribution"
    },
    {
      icon: <Brain className="w-6 h-6 text-yellow-400" />,
      title: "AI Insights",
      description: "Get personalized productivity insights and recommendations for better performance"
    }
  ]

  const pricingPlans = [
    {
      name: "Personal",
      price: "$12",
      period: "/month",
      features: [
        "Up to 100 tasks",
        "Basic AI insights",
        "Time tracking",
        "Mobile app",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      features: [
        "Unlimited tasks",
        "Advanced AI features",
        "Team collaboration",
        "Project management",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$79",
      period: "/month",
      features: [
        "Everything in Professional",
        "Advanced analytics",
        "Custom integrations",
        "White-label solution",
        "Dedicated support",
        "SSO integration"
      ],
      popular: false
    }
  ]

  return (
    <Layout
      title="AI Task Manager - Zion Tech Group"
      description="Boost productivity with AI-powered task management, smart scheduling, and intelligent insights. Organize your work and achieve your goals faster."
      keywords="AI task manager, productivity app, task management, project management, time tracking, productivity tools"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Task Manager
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Supercharge your productivity with AI-powered task management, smart scheduling, 
              and intelligent insights. Organize your work and achieve your goals faster than ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Watch Demo
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-2">40%</div>
              <div className="text-gray-300">Productivity Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">100K+</div>
              <div className="text-gray-300">Tasks Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">50K+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-gray-300">Goal Completion</div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Productivity Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">AI-Powered Intelligence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Smart Task Prioritization</h3>
                <p className="text-gray-300 mb-6">
                  Our AI analyzes your tasks, deadlines, and work patterns to automatically prioritize 
                  your to-do list for maximum productivity and goal achievement.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Deadline-based prioritization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Energy level optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Dependency mapping
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Intelligent Scheduling</h3>
                <p className="text-gray-300 mb-6">
                  AI-powered scheduling that considers your energy levels, meeting patterns, 
                  and personal preferences to create the optimal daily schedule.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Time blocking optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Meeting conflict detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Break time suggestions
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Simple, Transparent Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-indigo-500' : 'border-white/20'} relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-indigo-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                        : 'border-2 border-white text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white/5 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our AI Task Manager?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Zap className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Boost Productivity</h3>
                <p className="text-gray-300">Users report 40% increase in productivity within the first month of using our AI task manager.</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Achieve Goals</h3>
                <p className="text-gray-300">95% of users complete their goals faster with our intelligent task prioritization and scheduling.</p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Work Anywhere</h3>
                <p className="text-gray-300">Access your tasks and insights from any device with seamless synchronization across platforms.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Supercharge Your Productivity?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join over 50,000 users who have transformed their productivity with our AI-powered task management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AITaskManagerPage