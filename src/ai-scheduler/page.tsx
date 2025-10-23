<<<<<<< HEAD
'use client'
import React from 'react'
import { CheckCircle, Star, Phone, Calendar } from 'lucide-react'
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b7a8

constAISchedulerPage: React.FC= () =>{constfeatures= [
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling that automatically finds the best meeting times based on availability, preferences, and time zones.',
      benefit: 'Save 5+ hours per week'
   },
    {icon: Users,
      title: 'Team Coordination',
      description: 'Coordinate complex team schedules with intelligent conflict resolution and resource optimization.',
      benefit: 'Eliminate scheduling conflicts'
   },
    {icon: Brain,
      title: 'Predictive Planning',
      description: 'AI learns from your scheduling patterns to suggest optimal meeting times and prevent do uble-bookings.',
      benefit: '9 5% accuracy in predictions'
   },
    {icon: Zap,
      title: 'Automated Reminders',
      description: 'Smart reminder system that adapts to each participant\'s preferences and communication style.',
      benefit: 'Reduce no-shows by60%'
   },
    {icon: Target,
      title: 'Meeting Optimization',
      description: 'Analyze meeting effectiveness and suggest improvements for better productivity and outcomes.',
      benefit: 'Improve meeting ROI by40%'
   },
    {icon: Shield,
      title: 'Privacy & Security',
      description: 'Enterprise-grade security with end-to-end encryption and compliance with data protection regulations.',
      benefit: '100% secure scheduling'
    }
  ]

  constpricingPlans= [
    {name: 'Personal',
      price: '$1 9',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        'Unlimited personal meetings',
        'Basic AI scheduling',
        'Calendar integration',
        'Email reminders',
        'Mobile app access',
        'Standard support'
      ],
      popular: false
   },
    {name: 'Team',
      price: '$4 9',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        'Up to 10team members',
        'Advanced AI scheduling',
        'Team coordination',
        'Custom meeting types',
        'Analytics dashboard',
        'Priority support',
        'API access',
        'Custom branding'
      ],
      popular: true
   },
    {name: 'Enterprise',
      price: '$14 9',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Premium AI features',
        'Advanced analytics',
        'Custom integrations',
        'Dedicated support',
        'White-label options',
        'SSO integration',
        'Custom workflows'
      ],
      popular: false
    }
  ]

  const integrations = [
    { name: 'Google Calendar', icon: '📅', description: 'Seamless Google integration' },
    { name: 'Outlook', icon: '📧', description: 'Microsoft Office 365' },
    { name: 'Zoom', icon: '🎥', description: 'Video conferencing' },
    { name: 'Slack', icon: '💬', description: 'Team communication' },
    { name: 'Teams', icon: '👥', description: 'Microsoft Teams' },
    { name: 'Calendly', icon: '⏰', description: 'Scheduling platform' },
    { name: 'Salesforce', icon: '💼', description: 'CRM integration' },
    { name: 'HubSpot', icon: '🎯', description: 'Marketing automation' }
  ]

  consttestimonials= [
    {name: 'Jennifer Lee',
      company: 'TechStart',
      role: 'Operations Manager',
      content: 'AI Scheduler eliminated all our scheduling headaches. We save6hours per week and never have conflicts anymore.',
      rating:5},
    {name: 'Robert Martinez',
      company: 'Consulting Group',
      role: 'Senior Partner',
      content: 'The AI predictions are incredibly accurate. It knows our team\'s patterns better than we do.',
      rating:5},
    {name: 'Amanda Chen',
      company: 'Digital Agency',
      role: 'Project Manager',
      content: 'Client meetings are now perfectly coordinated. Our client satisfaction scores improved by 35%.',
      rating: 5
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