import React from 'react'
import { Link } from 'react-router-dom'

import React from 'react';

import { Link } from 'react-router-dom';
import {Bot} from 'lucide-react';

import {Calendar, Smartphone, Bot, Smartphone as Mobile} from 'lucide-react';

export default function AIProjectManagerPage() {
  const features = [
      icon: <Bot className="w-6h-6text-cyan-400" />,
      title: 'AI Task Prioritization',
      description: 'Intelligent task ranking based on deadlines, dependencies, and team capacity'
    },
      icon: <BarChart3 className="w-6h-6text-emerald-400" />,
      title: 'Predictive Analytics',
      description: 'AI-powered project forecasting and risk assessment with 95% accuracy'
    },
      icon: <Users className="w-6h-6text-purple-400" />,
      title: 'Smart Team Matching',
      description: 'AI algorithms match tasks to team members based on skills and availability'
    },
      icon: <Zap className="w-6h-6text-orange-400" />,
      title: 'Automated Workflows',
      description: 'Set up intelligent workflows that adapt and optimize based on project patterns'
    },
      icon: <Target className="w-6h-6text-pink-400" />,
      title: 'Resource Optimization',
      description: 'AI-driven resource allocation and capacity planning for maximum efficiency'
    },
      icon: <Shield className="w-6h-6text-red-400" />,

      title: 'Risk Management',
      description: 'Proactive risk identification and mitigation strategies powered by machine learning'
  ]

  const pricingPlans = [
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for small teams and freelancers',
      features: [
        'Up to 5 team members',
        'Unlimited projects',
        'Basic AI features',
        'Mobile app access',
        'Email support',
        'Basic reporting'
      ],
      popular: false
    },
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing teams and agencies',
      features: [
        'Up to 25 team members',
        'Advanced AI features',
        'Custom workflows',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Time tracking',
        'Resource management'
      ],
      popular: true
    },
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'All AI features',
        'Custom integrations',
        'Dedicated support',
        'White-label option',
        'Advanced security',
        'Custom reporting',
        'SLA guarantee'
      ],
      popular: false
  ]

  const testimonials = [
      name: 'Alex Thompson',
      company: 'Software Development Agency',
      content: 'Our project delivery time improved by 40% with AI task prioritization. The predictive analytics are incredibly accurate.',
      rating: 5,
      avatar: 'AT'
    },
      name: 'Maria Garcia',
      company: 'Marketing Agency',
      content: 'The smart team matching feature is a game-changer. It automatically assigns tasks to the right people every time.',
      rating: 5,
      avatar: 'MG'
    },
      name: 'Robert Lee',
      company: 'Construction Company',
      content: 'Risk management features helped us avoid 3 major project delays. The AI insights are invaluable.',
      rating: 5,
      avatar: 'RL'
  ]

  const benefits = [

      icon: <TrendingUp className="w-8h-8text-cyan-400" />,
      title: '40% Faster Delivery',
      description: 'AI optimization reduces project completion time significantly'
    },
      icon: <Target className="w-8h-8text-emerald-400" />,
      title: '95% Accuracy',
      description: 'Predictive analytics with industry-leading accuracy rates'
    },
      icon: <Users className="w-8h-8text-purple-400" />,
      title: 'Team Productivity +60%',
      description: 'Smart task allocation maximizes team efficiency'
    },
      icon: <Shield className="w-8h-8text-orange-400" />,

      title: 'Risk Reduction 80%',
      description: 'Proactive risk management prevents project failures'
  ]

  const integrations = [
    { name: 'Slack', icon: '💬' },
    { name: 'Microsoft Teams', icon: '👥' },
    { name: 'Jira', icon: '🎯' },
    { name: 'Asana', icon: '📋' },
    { name: 'Trello', icon: '📌' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Google Workspace', icon: '📧' },
    { name: 'Zoom', icon: '📹' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Notion', icon: '📝' 
  ]

  return (

        <title>5G Data Analytics - Zion Tech Group</title>

      {/* Hero Section */
    
            <span>AI-Powered Project Management</span>

            AI Project
    
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent">Manager
          
            Transform your project management with AI-powered task prioritization, predictive analytics, 
            and intelligent automation. Deliver projects 40% faster with 95% accuracy.

              <span>Start Free Trial</span>
              <span>View Pricing</span>

          {/* Key Stats */

              <div className="text-3 xl font-boldtext-cyan-400mb-2">40%</div>
              <div className="text-gray-300text-sm">Faster Delivery</div>
              <div className="text-3 xl font-boldtext-purple-400mb-2">95%</div>
              <div className="text-gray-300text-sm">Prediction Accuracy</div>
              <div className="text-3 xl font-boldtext-pink-400mb-2">60%</div>
              <div className="text-gray-300text-sm">Productivity Boost</div>
              <div className="text-3 xl font-boldtext-emerald-400mb-2">10 K+</div>
              <div className="text-gray-300text-sm">Active Projects</div>

      {/* Benefits Section */
    
              Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">AI Project Manager?</span>

              Experience the future of project management with cutting-edge AI technology that works for your team.

 (
    
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 mx-auto group-hover:scale-110transition-transformduration-300">{benefit.icon

                <h3 className="text-xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{benefit.title
                  {benefit.description
    
            ))

      {/* Features Section */
    
              Powerful Features for <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Smart Project Management</span>

              Everything you need to manage projects efficiently with AI-powered intelligence and automation.

 (
    
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon

                <h3 className="text-2 xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{feature.title
                  {feature.description
    
            ))

      {/* Integrations Section */
    
              Seamless <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Integrations</span>

              Connect with your favorite tools and platforms for a unified project management experience.

 (
    
                  <span className="text-3xl">{integration.icon}</span>
                <div className="text-gray-300group-hover:text-whitetransition-colors">{integration.name
            ))

      {/* Pricing Section */
    
              Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Pricing</span>

              Choose the plan that fits your team size and needs. All plans include our core AI features.

 (
                {plan.popular && (

                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold">Most Popular
                )

                  <h3 className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                  <p className="text-gray-300text-smmb-4">{plan.description}</p>
                    <span className="text-5 xlfont-boldtext-cyan-400">{plan.price}</span>
                    <span className="text-gray-300ml-2">{plan.period}</span>

 (

                      <span className="text-gray-300">{feature}</span>

                  ))

                  to="/contact"
                  className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`

Get Started
    
            ))

      {/* Testimonials Section */
    
              Trusted by <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">10,000+</span> Teams

              See what our customers are saying about their success with our AI project manager.

 (
    
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4">{testimonial.avatar
                    <div className="font-semiboldtext-white">{testimonial.name}</div>
                    <div className="text-gray-400text-sm">{testimonial.company}</div>

 (
                  ))

                <p className="text-gray-300italic">"{testimonial.content}"</p>

            ))

      {/* CTA Section */
