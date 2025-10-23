import React from 'react'
import React from 'react';

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Phone, TrendingUp } from 'lucide-react'

constAIProjectManagerPage: React.FC= () =>{constfeatures= [
    'AI-powered project planning and resource allocation',
    'Intelligent timeline prediction and risk assessment',
    'Smart task management with priority optimization',
    'Real-time collaboration and team coordination',
    'Predictive analytics for project success',
    'Automated progress tracking and reporting',
    'Budget optimization and cost forecasting',
    'Integration with popular project management tools'
  ]

  const benefits = [
    '40% increase in project delivery speed',
    '70% reduction in project delays',
    '85% improvement in planning accuracy',
    '30% cost reduction through optimization',
    '95% team productivity boost',
    '50% faster decision making'
  ]

  constpricing= [
    {
      plan: 'Starter',
      price: '$19 9',
      period: '/month',
      features: ['Up to5projects', '10team members', 'Basic AI planning', 'Email support'],
      popular: false
   },
    {plan: 'Professional',
      price: '$39 9',
      period: '/month',
      features: ['Unlimited projects', '50team members', 'Advanced AI features', 'Priority support', 'Custom integrations'],
      popular: true
   },
    {plan: 'Enterprise',
      price: 'Custom',
      period: '',
      features: ['Unlimited everything', 'Custom AI training', 'Dedicated support', 'On-premise deployment', 'SLA guarantee'],
      popular: false
    }
  ]

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Page
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </>
  )
}

export default Page;