import React from 'react'
import { BarChart3, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AIAnalyticsDashboardPage: React.FC = () => {
  const features = [
    'Real-time data visualization',
    'Predictive analytics',
    'Custom dashboard creation',
    'Automated reporting',
    'Data integration from multiple sources',
    'AI-powered insights',
    'Interactive charts and graphs',
    'Mobile-responsive design'
  ]

  const benefits = [
    {
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions with real-time insights and predictions',
      icon: <Target className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Time Savings',
      description: 'Automate reporting and analysis, saving hours every week',
      icon: <Clock className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Predictive Insights',
      description: 'Forecast trends and identify opportunities before they happen',
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Easy Integration',
      description: 'Connect with your existing tools and data sources seamlessly',
      icon: <Globe className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Business Intelligence',
      description: 'Track KPIs and business performance metrics in real-time',
      icon: '📊'
    },
    {
      title: 'Sales Analytics',
      description: 'Monitor sales performance and identify growth opportunities',
      icon: '💰'
    },
    {
      title: 'Marketing ROI',
      description: 'Measure marketing campaign effectiveness and ROI',
      icon: '📈'
    },
    {
      title: 'Customer Insights',
      description: 'Understand customer behavior and preferences',
      icon: '👥'
    },
    {
      title: 'Financial Reporting',
      description: 'Track financial metrics and generate automated reports',
      icon: '💼'
    },
    {
      title: 'Operational Efficiency',
      description: 'Monitor operational metrics and optimize processes',
      icon: '⚙️'
    }
  ]

  const stats = [
    { number: '200+', label: 'Dashboards Created' },
    { number: '99.9%', label: 'Uptime' },
    { number: '50%', label: 'Time Saved' },
    { number: '24/7', label: 'Monitoring' }
  ]

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      company: 'DataCorp Solutions',
      content: 'The predictive analytics have helped us identify market trends months in advance. Incredible insights!',
      rating: 5
    },
    {
      name: 'Robert Kim',
      company: 'Marketing Pro',
      content: 'Our reporting time has been reduced from days to minutes. The automated insights are spot-on.',
      rating: 5
    },
    {
      name: 'Amanda Foster',
      company: 'Finance First',
      content: 'The dashboard integration was seamless. We now have a complete view of our business performance.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Analytics Dashboard"
      description="Transform your data into actionable insights with our AI-powered analytics dashboard. Get real-time visualizations, predictive analytics, and automated reporting for better business decisions."
      icon={<BarChart3 className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $79/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Data Analytics"
      popular={true}
    />
  )
}

export default AIAnalyticsDashboardPage