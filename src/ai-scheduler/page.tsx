'use client'
import { Brain, Target } from 'lucide-react'
import React from 'react'
import { CheckCircle, Star, Phone, Calendar } from 'lucide-react'

constAISchedulerPage: React.FC= () =>{constfeatures= [
    {
      ico,
  n: Calendar,
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

  constpricingPlans= []
    {name: 'Personal',
      price: '$1 9',
      period: '/month',
      description: 'Perfect for individuals',
      features: []
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
      features: []
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
      features: []
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

  const integrations = $2;
export default Page;
