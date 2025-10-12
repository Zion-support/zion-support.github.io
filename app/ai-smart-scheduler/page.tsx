import React from 'react'
import { Link } from 'react-router-dom'

import { Calendar, Users, Zap, CheckCircle, ArrowRight, Brain, Globe, Star, Sparkles } from 'lucide-react';

import Layout from '../layout'

import React from 'react';

export default function AISmartScheduler() {
  const features = [
    {
      icon: <Brain className="w-5h-5ml-2" />,
      title: 'AI-Powered Scheduling',
      description: 'Intelligent scheduling that learns from your patterns and preferences'
    },
    {
      icon: <Users className="w-5h-5ml-2" />,
      title: 'Team Coordination',
      description: 'Seamlessly coordinate meetings across multiple time zones and schedules'
    },
    {
      icon: <Zap className="w-5h-5ml-2" />,
      title: 'Auto-Optimization',
      description: 'Automatically finds the best meeting times for maximum productivity'
    },
    {
      icon: <Globe className="w-5h-5ml-2" />,
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
      popular: false;
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
      popular: true;
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
      popular: false;
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'TechStart Inc.',
      content: 'This AI scheduler saved us 10+ hours per week. The intelligent optimization is incredible.',
      rating: 5;
    },
    {
      name: 'Michael Rodriguez',
      company: 'Global Consulting',
      content: 'Finally, a scheduling tool that actually understands our complex team dynamics.',
      rating: 5;
    },
    {
      name: 'Emily Watson',
      company: 'RemoteFirst Co.',
      content: 'The time zone handling is flawless. Our international team coordination has never been smoother.',
      rating: 5;
    }
  ]