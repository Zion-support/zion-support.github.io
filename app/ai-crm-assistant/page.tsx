import React from 'react'
import { Users, Zap, Globe, Target, TrendingUp, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AICRMAssistantPage: React.FC = () => {
  const features = [
    'Lead scoring and qualification',
    'Automated follow-up sequences',
    'Customer behavior analysis',
    'Sales forecasting',
    'Email template generation',
    'Meeting scheduling automation',
    'Pipeline management',
    'Integration with popular CRMs'
  ]

  const benefits = [
    {
      title: 'Higher Conversion',
      description: 'Increase conversion rates by up to 40% with intelligent lead scoring',
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Time Savings',
      description: 'Automate repetitive tasks and save 5+ hours per week',
      icon: <Clock className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Better Insights',
      description: 'Get deep insights into customer behavior and preferences',
      icon: <Target className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduce CRM management costs by 50% while improving results',
      icon: <DollarSign className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Lead Management',
      description: 'Automatically score and qualify leads for better conversion',
      icon: '🎯'
    },
    {
      title: 'Follow-up Automation',
      description: 'Send personalized follow-up emails at optimal times',
      icon: '📧'
    },
    {
      title: 'Sales Forecasting',
      description: 'Predict sales outcomes with AI-powered forecasting',
      icon: '📊'
    },
    {
      title: 'Customer Segmentation',
      description: 'Segment customers based on behavior and preferences',
      icon: '👥'
    },
    {
      title: 'Meeting Scheduling',
      description: 'Automatically schedule meetings with prospects and customers',
      icon: '📅'
    },
    {
      title: 'Pipeline Optimization',
      description: 'Optimize sales pipeline for maximum efficiency',
      icon: '⚙️'
    }
  ]

  const stats = [
    { number: '40%', label: 'Conversion Increase' },
    { number: '50%', label: 'Time Saved' },
    { number: '95%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'Automation' }
  ]

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      company: 'Sales Director',
      content: 'Lead scoring has transformed our sales process. We focus on the right prospects now.',
      rating: 5
    },
    {
      name: 'Michael Torres',
      company: 'Account Manager',
      content: 'Follow-up automation has increased our response rates by 60%. Game changer!',
      rating: 5
    },
    {
      name: 'Sarah Lee',
      company: 'CRM Manager',
      content: 'Sales forecasting is incredibly accurate. We can plan better and close more deals.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI CRM Assistant"
      description="Supercharge your CRM with AI-powered automation. Improve lead scoring, automate follow-ups, enhance customer insights, and boost sales performance with intelligent CRM assistance."
      icon={<Users className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $99/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Sales & CRM"
      popular={true}
    />
  )
}

export default AICRMAssistantPage