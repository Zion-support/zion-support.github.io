import React from 'react'
import { CheckCircle, Phone, Mail, Helmet } from 'lucide-react'
import { MapPin } from 'lucide-react'
import React from 'react';

constMarketingToolsPage: React.FC= () =>{constmarketingTools= [
    {
      title: 'AI Content Generator',
      price: '$19 9/month',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      features: ['Blog post generation', 'Social media content', 'Email campaigns', 'Ad copy creation', 'SEO optimization', 'Multi-language support'],
      icon: '✍️',
      category: 'Content Creation'
   },
    {title: 'AI SEO Optimizer',
      price: '$29 9/month',
      description: 'Advanced SEO analysis and optimization recommendations powered by machine learning.',
      features: ['Keyword research', 'Content optimization', 'Technical SEO', 'Competitor analysis', 'Rank tracking', 'Performance insights'],
      icon: '🔍',
      category: 'SEO'
   },
    {title: 'AI Social Media Manager',
      price: '$24 9/month',
      description: 'Automated social media management with intelligent posting and engagement optimization.',
      features: ['Content scheduling', 'Hashtag optimization', 'Engagement tracking', 'Trend analysis', 'Multi-platform posting', 'Performance analytics'],
      icon: '📱',
      category: 'Social Media'
   },
    {title: 'AI Email Marketing',
      price: '$17 9/month',
      description: 'Intelligent email marketing campaigns with personalization and automation capabilities.',
      features: ['Email templates', 'Personalization', 'A/B testing', 'Automation workflows', 'Analytics dashboard', 'List management'],
      icon: '📧',
      category: 'Email Marketing'
   },
    {title: 'AI Ad Campaign Manager',
      price: '$39 9/month',
      description: 'Automated ad campaign creation and optimization across multiple platforms.',
      features: ['Campaign creation', 'Bid optimization', 'Audience targeting', 'Performance tracking', 'Budget management', 'ROI analysis'],
      icon: '📊',
      category: 'Advertising'
   },
    {title: 'AI Analytics Dashboard',
      price: '$29 9/month',
      description: 'Comprehensive marketing analytics with AI-powered insights and predictions.',
      features: ['Real-time analytics', 'Predictive insights', 'Custom reports', 'Data visualization', 'ROI tracking', 'Performance forecasting'],
      icon: '📈',
      category: 'Analytics'
    }
  ]
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increase ROI',
      description: 'Average250% increase in marketing ROI with AI-powered optimization'
   },
    {icon: Clock,
      title: 'Save Time',
      description: 'Reduce marketing tasks by80% with intelligent automation'
   },
    {icon: Target,
      title: 'Better Targeting',
      description: 'Reach the right audience with AI-powered targeting and personalization'
   },
    {icon: BarChart,
      title: 'Data-Driven',
      description: 'Make informed decisions with comprehensive analytics and insights'
    }
  ]
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
export default MarketingToolsPage
