'use client'
import { ArrowRight, Brain, BarChart, Target } from 'lucide-react'
import React from 'react'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight } from 'lucide-react'

constAIServicesPage: React.FC= () =>{constservices= [
    {
      icon: Brain,
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, pattern recognition, and intelligent decision making.',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Custom Model Training', 'Real-time Processing'],
      price: 'Starting at $2,50 0/month',
      color: 'text-purple-40 0'
   },
    {icon: Target,
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing campaigns with AI-powered targeting, content generation, and optimization.',
      features: ['Smart Targeting', 'Content Generation', 'Campaign Optimization', 'ROI Tracking'],
      price: 'Starting at $1,20 0/month',
      color: 'text-pink-40 0'
   },
    {icon: Zap,
      title: 'Process Automation',
      description: 'Automate complex business processes with AI decision-making and exception handling.',
      features: ['Workflow Automation', 'Exception Handling', 'Smart Routing', 'Performance Monitoring'],
      price: 'Starting at $80 0/month',
      color: 'text-blue-40 0'
   },
    {icon: Shield,
      title: 'AI Cybersecurity',
      description: 'Advanced threat detection and response using AI-powered security monitoring.',
      features: ['Threat Detection', 'Automated Response', 'Behavioral Analysis', 'Compliance Reporting'],
      price: 'Starting at $1,50 0/month',
      color: 'text-red-40 0'
   },
    {icon: BarChart,
      title: 'Data Analytics & Insights',
      description: 'Transform raw data into actionable insights with AI-powered analytics and visualization.',
      features: ['Data Processing', 'Predictive Insights', 'Visualization', 'Automated Reports'],
      price: 'Starting at $90 0/month',
      color: 'text-teal-40 0'
   },
    {icon: Users,
      title: 'Customer Experience AI',
      description: 'Enhance customer interactions with AI chatbots, sentiment analysis, and personalized experiences.',
      features: ['AI Chatbots', 'Sentiment Analysis', 'Personalization', '24/7 Support'],
      price: 'Starting at $600/month',
      color: 'text-green-400'
    }
  ]

  constbenefits= [
    {icon: Star,
      title: 'Proven ROI',
      description: 'Average300% ROI within6months of implementation'
   },
    {icon: Zap,
      title: 'Rapid Deployment',
      description: 'Get your AI solutions up and running in 2-4 weeks'
   },
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all AI solutions'
   },
    {icon: Globe,
      title: 'Global Support',
      description: '24/7 support across all time zones with dedicated success managers'
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
    </div>
  )
}

export default Page;