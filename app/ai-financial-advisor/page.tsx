import React from 'react'
import { TrendingUp, Zap, Globe, Target, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AIFinancialAdvisorPage: React.FC = () => {
  const features = [
    'Personalized financial planning',
    'Investment portfolio optimization',
    'Risk assessment and management',
    'Retirement planning assistance',
    'Tax optimization strategies',
    'Market analysis and insights',
    'Goal tracking and monitoring',
    '24/7 financial guidance'
  ]

  const benefits = [
    {
      title: 'Better Returns',
      description: 'Optimize investment portfolios for maximum returns with AI analysis',
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Risk Management',
      description: 'Minimize financial risks with intelligent risk assessment',
      icon: <Target className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Cost Savings',
      description: 'Reduce financial advisory costs by up to 70%',
      icon: <DollarSign className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Personalized Advice',
      description: 'Get tailored financial advice based on your unique situation',
      icon: <Users className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Investment Planning',
      description: 'Create and optimize investment portfolios for long-term growth',
      icon: '📈'
    },
    {
      title: 'Retirement Planning',
      description: 'Plan for retirement with AI-powered financial projections',
      icon: '🏖️'
    },
    {
      title: 'Tax Optimization',
      description: 'Minimize tax burden with intelligent tax planning strategies',
      icon: '💰'
    },
    {
      title: 'Debt Management',
      description: 'Create strategies to pay off debt efficiently',
      icon: '💳'
    },
    {
      title: 'Emergency Fund',
      description: 'Build and maintain emergency funds with AI guidance',
      icon: '🚨'
    },
    {
      title: 'Goal Achievement',
      description: 'Track and achieve financial goals with personalized plans',
      icon: '🎯'
    }
  ]

  const stats = [
    { number: '15%', label: 'Average Return Improvement' },
    { number: '70%', label: 'Cost Reduction' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Financial Guidance' }
  ]

  const testimonials = [
    {
      name: 'David Thompson',
      company: 'Investment Manager',
      content: 'Portfolio performance has improved by 20%. The AI analysis is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      company: 'Financial Planner',
      content: 'Client satisfaction has never been higher. The personalized advice is spot-on.',
      rating: 5
    },
    {
      name: 'Mark Rodriguez',
      company: 'Retirement Planner',
      content: 'Retirement planning is now automated and incredibly effective. Clients love it.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Financial Advisor"
      description="Get personalized financial advice with AI-powered analysis. Optimize investments, plan for retirement, and achieve financial goals with intelligent financial advisory solutions."
      icon={<TrendingUp className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $99/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Finance & Investment"
      popular={true}
    />
  )
}

export default AIFinancialAdvisorPage