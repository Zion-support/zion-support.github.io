import React from 'react'
import { Link } from 'react-router-dom'
export default function AIEmailMarketingAutomationPage() {
  const features = [
    {
      icon: <Bot className="w-5h-5ml-2" />,
      title: 'AI Content Generation',
      description: 'Generate personalized email content with AI that adapts to your brand voice and audience'
    },
    {
      icon: <Target className="w-5h-5ml-2" />,
      title: 'Smart Segmentation',
      description: 'Automatically segment your audience based on behavior, preferences, and engagement patterns'
    },
    {
      icon: <BarChart3 className="w-5h-5ml-2" />,
      title: 'Predictive Analytics',
      description: 'AI-powered insights predict the best send times, subject lines, and content for maximum engagement'
    },
    {
      icon: <Zap className="w-5h-5ml-2" />,
      title: 'Automated Workflows',
      description: 'Create intelligent email sequences that adapt based on recipient behavior and engagement'
    },
    {
      icon: <Eye className="w-5h-5ml-2" />,
      title: 'A/B Testing AI',
      description: 'Automatically test and optimize email elements with AI-driven insights and recommendations'
    },
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: 'Deliverability Optimization',
      description: 'AI-powered tools ensure maximum inbox placement and compliance with email regulations'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5,000 subscribers',
        'Basic AI features',
        'Email templates',
        'Mobile app access',
        'Email support',
        'Basic analytics'
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 25,000 subscribers',
        'Advanced AI features',
        'Custom workflows',
        'Priority support',
        'Advanced analytics',
        'API access',
        'A/B testing',
        'Landing pages'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited subscribers',
        'All AI features',
        'Custom integrations',
        'Dedicated support',
        'White-label option',
        'Advanced security',
        'Custom reporting',
        'SLA guarantee'
      ],
      popular: false;
    }
  ]

  const testimonials = [
    {
      name: 'Rachel Green',
      company: 'E-commerce Store',
      content: 'Increased our email open rates by 150% and revenue by 40%. The AI content generation is incredible.',
      rating: 5,
      avatar: 'RG'
    },
    {
      name: 'David Park',
      company: 'SaaS Company',
      content: 'The automated workflows save us 20+ hours per week. Customer engagement has never been higher.',
      rating: 5,
      avatar: 'DP'
    },
    {
      name: 'Lisa Chen',
      company: 'Marketing Agency',
      content: 'Our clients love the results. The AI segmentation and personalization features are game-changers.',
      rating: 5,
      avatar: 'LC'
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-5h-5ml-2" />,
      title: '150% Higher Open Rates',
      description: 'AI-optimized subject lines and send times maximize engagement'
    },
    {
      icon: <DollarSign className="w-5h-5ml-2" />,
      title: '40% Revenue Increase',
      description: 'Personalized content and smart segmentation drive conversions'
    },
    {
      icon: <Clock className="w-5h-5ml-2" />,
      title: 'Save 20+ Hours Weekly',
      description: 'Automated workflows and AI content generation eliminate manual work'
    },
    {
      icon: <Target className="w-5h-5ml-2" />,
      title: '95% Deliverability',
      description: 'AI-powered optimization ensures maximum inbox placement'
    }
  ]

  const emailTypes = [
    { name: 'Welcome Series', icon: '👋', description: 'Onboard new subscribers with personalized sequences' },
    { name: 'Product Recommendations', icon: '🛍️', description: 'AI-powered product suggestions based on behavior' },
    { name: 'Cart Abandonment', icon: '🛒', description: 'Recover lost sales with intelligent follow-up campaigns' },
    { name: 'Re-engagement', icon: '🔄', description: 'Win back inactive subscribers with targeted content' },
    { name: 'Birthday & Anniversaries', icon: '🎉', description: 'Celebrate special moments with personalized messages' },
    { name: 'Educational Content', icon: '📚', description: 'Nurture leads with valuable, AI-generated content' }
  ]

  return (

        <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>AI Email Marketing Automation - Zion Tech Group | Smart Email Campaigns</title>

                    <span>Start Free Trial</span>
                    <span>View All Plans</span>

                  <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>

      </>
  );

