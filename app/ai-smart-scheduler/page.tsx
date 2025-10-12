import React from 'react'
import { Link } from 'react-router-dom'

import {Calendar} from 'lucide-react';

import Layout from '../layout'

import React from 'react';

import { Link } from 'react-router-dom';

import Layout from '../layout';

export default function AISmartScheduler() {
  const features = [

      icon: <Brain className="w-6h-6text-cyan-400" />,
      title: 'AI-Powered Scheduling',
      description: 'Intelligent scheduling that learns from your patterns and preferences'
    },
      icon: <Users className="w-6h-6text-purple-400" />,
      title: 'Team Coordination',
      description: 'Seamlessly coordinate meetings across multiple time zones and schedules'
    },
      icon: <Zap className="w-6h-6text-yellow-400" />,
      title: 'Auto-Optimization',
      description: 'Automatically finds the best meeting times for maximum productivity'
    },
      icon: <Globe className="w-6h-6text-green-400" />,

      title: 'Global Integration',
      description: 'Works with all major calendar platforms and time zones'
  ]

  const pricingPlans = [
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
  ]

  const testimonials = [
      name: 'Sarah Chen',
      company: 'TechStart Inc.',
      content: 'This AI scheduler saved us 10+ hours per week. The intelligent optimization is incredible.',
      rating: 5
    },
      name: 'Michael Rodriguez',
      company: 'Global Consulting',
      content: 'Finally, a scheduling tool that actually understands our complex team dynamics.',
      rating: 5
    },
      name: 'Emily Watson',
      company: 'RemoteFirst Co.',
      content: 'The time zone handling is flawless. Our international team coordination has never been smoother.',
      rating: 5
  ]

  return (

        {/* Hero Section */
    
                AI-Powered Scheduling

              <h1 className="text-4 xl sm:text-5 xl md:text-6 xl font-boldtext-whitemb-6">AI Smart Scheduler

              Transform your scheduling chaos into organized efficiency with our intelligent AI-powered scheduler. 
                Optimize meetings, coordinate teams, and maximize productivity automatically.
    
                  Start Free Trial

                <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Watch Demo

        {/* Features Section */
    
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-whitemb-4">Intelligent Scheduling Features
                Powered by advanced AI to make scheduling effortless and efficient

 (

                    {feature.icon
    
                    <h3 className="text-xl font-semiboldtext-whiteml-3">{feature.title}</h3>

                  <p className="text-gray-300">{feature.description}</p>

              ))

        {/* Pricing Section */
    
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-whitemb-4">Simple, Transparent Pricing
                Choose the plan that fits your team size and needs

 (
                  {plan.popular && (

                      Most Popular
                  )

                  <h3 className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                  <p className="text-gray-300mb-6">{plan.description}</p>
                    <span className="text-4 xlfont-boldtext-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
 (

                        {feature
                    ))
                  
                    to="/contact"
                    className="{`w-full" block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400/10'
                    }`

Get Started
    
              ))

        {/* Testimonials */
    
              <h2 className="text-3 xl font-boldtext-whitemb-4">Trusted by Teams Worldwide
                See what our customers say about AI Smart Scheduler

 (

 (
                    ))

                  <p className="text-gray-300mb-4">"{testimonial.content}"</p>
                    <div className="font-semiboldtext-white">{testimonial.name}</div>
                    <div className="text-smtext-gray-400">{testimonial.company}</div>

              ))

        {/* CTA Section */
    
              <h2 className="text-3 xl font-boldtext-whitemb-4">Ready to Transform Your Scheduling?
                Join thousands of teams already using AI Smart Scheduler to optimize their productivity

                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700transition-allduration-300">Start Your Free Trial
                <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Learn More
  )
