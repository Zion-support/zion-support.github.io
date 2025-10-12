'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, CheckSquare, Users, Clock, Star, Zap, Shield, Brain, Globe, Database, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'

const TaskManagerProPage: React.FC = () => {
  const features = [
    {
      icon: <CheckSquare className="w-8 h-8 text-blue-500" />,
      title: 'Advanced Task Management',
      description: 'Comprehensive task management with project tracking, deadlines, and priority management.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Team Collaboration',
      description: 'Seamless team collaboration with real-time updates, comments, and file sharing.'
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: 'Time Tracking',
      description: 'Built-in time tracking and productivity analytics to optimize your workflow.'
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-500" />,
      title: 'AI-Powered Insights',
      description: 'AI-driven insights and recommendations to improve productivity and project outcomes.'
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-500" />,
      title: 'Automation',
      description: 'Automated workflows and task assignments to streamline your project management.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Security & Privacy',
      description: 'Enterprise-grade security with data encryption and privacy controls.'
    }
  ]

  const benefits = [
    'Increased productivity',
    'Better project visibility',
    'Improved team collaboration',
    'Automated workflows',
    'Real-time reporting',
    'Mobile accessibility',
    'Integration capabilities',
    'Customizable dashboards'
  ]

  const integrations = [
    'Slack',
    'Microsoft Teams',
    'Google Workspace',
    'Jira',
    'Trello',
    'Asana',
    'GitHub',
    'Salesforce'
  ]

  return (
    <>
      <Helmet>
        <title>Task Manager Pro - Zion Tech Group | Advanced Project Management</title>
        <meta name="description" content="Professional task management solution by Zion Tech Group. Advanced project management, team collaboration, and productivity tools." />
        <meta name="keywords" content="task manager, project management, team collaboration, productivity tools, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Task Manager Pro
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Advanced project management and task tracking solution. 
                Boost productivity with AI-powered insights and seamless team collaboration.
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
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need for effective project management
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Integrations</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Seamlessly integrate with your favorite tools
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-3" />
                  <p className="text-gray-300">{integration}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Task Manager Pro?</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                We provide comprehensive project management solutions that drive productivity
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {benefits.slice(4).map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
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
                  Transform your project management with Task Manager Pro. 
                  Get advanced features that help you and your team work more efficiently.
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
    </>
  )
}

export default TaskManagerProPage