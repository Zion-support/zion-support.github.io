import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Calendar, Clock, Users, Zap, CheckCircle, ArrowRight, Star, Shield, Globe, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AISmartSchedulerPage() {
  const features = [
    {
      icon: <Calendar className="w-6 h-6 text-blue-500" />,
      title: 'Intelligent Scheduling',
      description: 'AI-powered calendar optimization that automatically finds the best meeting times for all participants.'
    },
    {
      icon: <Clock className="w-6 h-6 text-green-500" />,
      title: 'Time Zone Management',
      description: 'Seamlessly handle multiple time zones with automatic conversion and availability detection.'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: 'Team Coordination',
      description: 'Coordinate complex team schedules with AI that understands individual preferences and constraints.'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: 'Smart Notifications',
      description: 'Get intelligent reminders and suggestions to optimize your daily schedule and productivity.'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 5 team members',
        'Basic AI scheduling',
        'Calendar integration',
        'Email notifications',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$19',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 team members',
        'Advanced AI scheduling',
        'All calendar integrations',
        'Custom notifications',
        'Priority support',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$49',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Enterprise AI features',
        'Custom integrations',
        'Advanced analytics',
        'Dedicated support',
        'API access'
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Smart Scheduler - Intelligent Calendar Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered scheduling tool that optimizes your calendar, manages time zones, and coordinates team meetings automatically." />
        <meta name="keywords" content="AI scheduler, calendar management, team scheduling, time zone management, productivity tool" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Smart Scheduler
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Revolutionize your scheduling with AI-powered calendar management that saves time and eliminates conflicts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Teams
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI understands your schedule patterns and optimizes your time automatically.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get started in minutes with our simple 3-step process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Connect Your Calendar</h3>
              <p className="text-gray-600">Integrate with Google Calendar, Outlook, or any calendar app you use.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Set Your Preferences</h3>
              <p className="text-gray-600">Tell our AI your working hours, meeting preferences, and availability patterns.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Let AI Schedule</h3>
              <p className="text-gray-600">Our AI automatically finds the best times and sends invitations to all participants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your team size and needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg p-8 shadow-lg ${plan.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Scheduling?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of teams who have already optimized their scheduling with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
