import React from 'react'
import { BarChart3, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AIDataAnalyticsPage: React.FC = () => {
  const features = [
    'Advanced data processing',
    'Machine learning insights',
    'Predictive analytics',
    'Real-time data visualization',
    'Automated reporting',
    'Data integration from multiple sources',
    'Custom dashboard creation',
    'Natural language queries'
  ]

  const benefits = [
    {
      title: 'Actionable Insights',
      description: 'Transform raw data into actionable business insights',
      icon: <Target className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Predictive Power',
      description: 'Forecast trends and make data-driven predictions',
      icon: <TrendingUp className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Time Efficiency',
      description: 'Reduce analysis time from days to minutes',
      icon: <Clock className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Cost Savings',
      description: 'Reduce analytics costs by 60% while improving accuracy',
      icon: <DollarSign className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Business Intelligence',
      description: 'Generate comprehensive business intelligence reports',
      icon: '📊'
    },
    {
      title: 'Sales Forecasting',
      description: 'Predict sales trends and revenue projections',
      icon: '💰'
    },
    {
      title: 'Customer Analytics',
      description: 'Analyze customer behavior and preferences',
      icon: '👥'
    },
    {
      title: 'Market Research',
      description: 'Conduct market analysis and competitive intelligence',
      icon: '🔍'
    },
    {
      title: 'Operational Analytics',
      description: 'Optimize operations with data-driven insights',
      icon: '⚙️'
    },
    {
      title: 'Risk Assessment',
      description: 'Identify and assess business risks using data',
      icon: '⚠️'
    }
  ]

  const stats = [
    { number: '1M+', label: 'Data Points Processed' },
    { number: '90%', label: 'Accuracy Rate' },
    { number: '60%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Processing' }
  ]

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      company: 'Data Science Director',
      content: 'The AI analytics have revolutionized our decision-making process. Insights are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Michael Torres',
      company: 'Business Analyst',
      content: 'What used to take weeks now takes hours. The predictive capabilities are game-changing.',
      rating: 5
    },
    {
      name: 'Sarah Lee',
      company: 'Marketing Manager',
      content: 'Customer insights have never been clearer. Our campaigns are now perfectly targeted.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Data Analytics"
      description="Unlock the power of your data with AI-driven analytics. Process, analyze, and visualize data to gain actionable insights, predict trends, and make informed business decisions."
      icon={<BarChart3 className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $149/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Data Analytics"
      popular={true}
    />
  )
}

export default AIDataAnalyticsPage