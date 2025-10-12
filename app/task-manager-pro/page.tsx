'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, CheckSquare, Users, Calendar, BarChart3, Bell, Target, Zap, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const TaskManagerProPage: React.FC = () => {
  const features = [
    {
      icon: <CheckSquare className="w-8 h-8 text-blue-500" />,
      title: 'Task Management',
      description: 'Create, assign, and track tasks with advanced project management capabilities.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Team Collaboration',
      description: 'Seamless team collaboration with real-time updates and communication tools.'
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-500" />,
      title: 'Scheduling & Planning',
      description: 'Advanced scheduling and planning tools to optimize your workflow.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics and reporting to track productivity and performance.'
    },
    {
      icon: <Bell className="w-8 h-8 text-cyan-500" />,
      title: 'Smart Notifications',
      description: 'Intelligent notifications and reminders to keep you on track.'
    },
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: 'Goal Tracking',
      description: 'Set and track goals with progress monitoring and achievement metrics.'
    }
  ]

  const benefits = [
    'Improved productivity and efficiency',
    'Better team collaboration and communication',
    'Enhanced project visibility and tracking',
    'Streamlined workflow management',
    'Real-time progress monitoring',
    'Reduced project delays and bottlenecks'
  ]

  const useCases = [
    'Project Management', 'Team Collaboration', 'Task Tracking', 'Deadline Management', 
    'Resource Planning', 'Progress Monitoring', 'Goal Setting', 'Workflow Optimization'
  ]

  return (
    <>
      <Helmet>
        <title>Task Manager Pro | Zion Tech Group</title>
        <meta name="description" content="Advanced task management solution for teams and individuals. Boost productivity with our comprehensive project management tools." />
        <meta name="keywords" content="task manager, project management, team collaboration, productivity tools, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Task Manager
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced task management solution for teams and individuals. 
              Boost productivity with our comprehensive project management tools and collaboration features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage tasks, collaborate with teams, and boost productivity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Why Choose Task Manager Pro?
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our task management solution is designed to streamline your workflow, improve team collaboration, 
                  and boost overall productivity. Experience the difference with our advanced features.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Perfect For</h3>
                <div className="grid grid-cols-2 gap-4">
                  {useCases.map((useCase, index) => (
                    <div key={index} className="flex items-center">
                      <CheckSquare className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Boost Your Productivity?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Start using Task Manager Pro today and experience the power of advanced task management.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/micro-saas" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Explore Micro SaaS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default TaskManagerProPage