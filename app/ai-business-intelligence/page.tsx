import React from 'react'
import { BarChart3, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AIBusinessIntelligencePage: React.FC = () => {
  const features = [
    'Advanced data visualization',
    'Predictive analytics and forecasting',
    'Automated report generation',
    'Real-time dashboard creation',
    'Data integration from multiple sources',
    'Natural language query processing',
    'Anomaly detection and alerting',
    'Custom KPI tracking and monitoring'
  ]

  const benefits = [
    {
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions with comprehensive business insights',
      icon: <Target className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Predictive Power',
      description: 'Forecast trends and identify opportunities before they happen',
      icon: <TrendingUp className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Time Efficiency',
      description: 'Reduce analysis time from days to minutes with automation',
      icon: <Clock className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Cost Savings',
      description: 'Reduce BI costs by 60% while improving accuracy and speed',
      icon: <DollarSign className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Sales Analytics',
      description: 'Track sales performance and identify growth opportunities',
      icon: '💰'
    },
    {
      title: 'Customer Insights',
      description: 'Analyze customer behavior and preferences for better targeting',
      icon: '👥'
    },
    {
      title: 'Operational Efficiency',
      description: 'Monitor and optimize business operations and processes',
      icon: '⚙️'
    },
    {
      title: 'Financial Reporting',
      description: 'Generate comprehensive financial reports and analysis',
      icon: '📊'
    },
    {
      title: 'Market Research',
      description: 'Conduct market analysis and competitive intelligence',
      icon: '🔍'
    },
    {
      title: 'Risk Assessment',
      description: 'Identify and assess business risks using data analysis',
      icon: '⚠️'
    }
  ]

  const stats = [
    { number: '500+', label: 'Dashboards Created' },
    { number: '60%', label: 'Cost Reduction' },
    { number: '90%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'Analytics' }
  ]

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      company: 'Business Intelligence Director',
      content: 'Our decision-making process has been revolutionized. Insights are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Michael Torres',
      company: 'Sales Manager',
      content: 'Sales forecasting is now spot-on. We can plan better and close more deals.',
      rating: 5
    },
    {
      name: 'Sarah Lee',
      company: 'Operations Director',
      content: 'Operational insights have improved efficiency by 40%. The AI analysis is incredible.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Business Intelligence"
      description="Transform your business with AI-powered business intelligence. Get comprehensive insights, predictive analytics, and automated reporting to make data-driven decisions and drive growth."
      icon={<BarChart3 className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $199/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Business Intelligence"
      popular={true}
    />
  )
}

export default AIBusinessIntelligencePage