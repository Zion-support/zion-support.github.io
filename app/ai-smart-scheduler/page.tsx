import React from 'react'
import { Link } from 'react-router-dom'
import { Brain, Users, Zap, Globe, Calendar } from 'lucide-react'
import Layout from '../layout'

export default function AISmartScheduler() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Scheduling',
      description: 'Intelligent scheduling that learns from your patterns and preferences'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: 'Team Coordination',
      description: 'Seamlessly coordinate meetings across multiple time zones and schedules'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Auto-Optimization',
      description: 'Automatically finds the best meeting times for maximum productivity'
    },
    {
      icon: <Globe className="w-6 h-6 text-green-400" />,
      title: 'Global Integration',
      description: 'Works with all major calendar platforms and time zones'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
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
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 team members',
        'Advanced AI optimization',
        'Custom meeting templates',
        'Analytics dashboard',
        'Priority support',
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
        'Custom AI training',
        'White-label options',
        'Advanced analytics',
        'Dedicated support',
        'Custom integrations'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'TechStart Inc.',
      content: 'This AI scheduler saved us 10+ hours per week. The intelligent optimization is incredible.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      company: 'Global Consulting',
      content: 'Finally, a scheduling tool that actually understands our complex team dynamics.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      company: 'RemoteFirst Co.',
      content: 'The time zone handling is flawless. Our international team coordination has never been smoother.',
      rating: 5
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Smart Scheduler
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your scheduling chaos into organized efficiency with our intelligent AI-powered scheduler. 
            Optimize meetings, coordinate teams, and maximize productivity automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all">
              Start Free Trial
            </button>
            <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Watch Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Intelligent Scheduling Features
          </h2>
          <p className="text-gray-300 text-center mb-12">
            Powered by advanced AI to make scheduling effortless and efficient
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-colors">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-300 text-center mb-12">
            Choose the plan that fits your team size and needs
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gray-800 p-8 rounded-lg border-2 relative ${plan.popular ? 'border-cyan-400' : 'border-gray-700'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Calendar className="w-5 h-5 text-cyan-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Trusted by Teams Worldwide
          </h2>
          <p className="text-gray-300 text-center mb-12">
            See what our customers say about AI Smart Scheduler
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Scheduling?
          </h2>
          <p className="text-gray-300 mb-8">
            Join thousands of teams already using AI Smart Scheduler to optimize their productivity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Start Your Free Trial
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}