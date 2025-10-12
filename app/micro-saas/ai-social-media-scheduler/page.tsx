import React from 'react'
import { Link } from 'react-router-dom'

export default function AISocialMediaSchedulerPage() {
  const features = [
    {
      icon: <Calendar className="w-5h-5ml-2" />,
      title: 'Smart Scheduling',
      description: 'AI-powered optimal posting times based on audience engagement patterns'
    },
    {
      icon: <BarChart3 className="w-5h-5ml-2" />,
      title: 'Analytics Dashboard',
      description: 'Comprehensive performance metrics and ROI tracking across all platforms'
    },
    {
      icon: <Users className="w-5h-5ml-2" />,
      title: 'Audience Insights',
      description: 'AI-driven audience analysis and content personalization recommendations'
    },
    {
      icon: <Zap className="w-5h-5ml-2" />,
      title: 'Auto-Posting',
      description: 'Seamless cross-platform content distribution with smart formatting'
    },
    {
      icon: <Target className="w-5h-5ml-2" />,
      title: 'Content Optimization',
      description: 'AI suggestions for hashtags, captions, and optimal posting times'
    },
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: 'Brand Safety',
      description: 'Automated content moderation and brand compliance checking'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and individuals',
      features: [
        '3 social media accounts',
        '50 posts per month',
        'Basic analytics',
        'Email support',
        'Content calendar',
        'Hashtag suggestions'
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10 social media accounts',
        'Unlimited posts',
        'Advanced analytics',
        'Priority support',
        'Team collaboration',
        'AI content suggestions',
        'Competitor analysis',
        'Custom branding'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited accounts',
        'Unlimited posts',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced AI features',
        'API access',
        'Custom reporting'
      ],
      popular: false;
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Digital Marketing Agency',
      content: 'Increased our social media engagement by 300% in just 2 months. The AI scheduling is incredibly accurate.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Mike Chen',
      company: 'E-commerce Store',
      content: 'The analytics dashboard gives us insights we never had before. ROI tracking is spot-on.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Content Creator',
      content: 'Saves me 10+ hours per week. The AI content suggestions are always on-brand and engaging.',
      rating: 5,
      avatar: 'ER'
    }
  ]

  return (

  );


