import React from 'react'
import { Calculator, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AIFinancialAnalyzerPage: React.FC = () => {
  const features = [
    'Automated financial analysis',
    'Risk assessment and modeling',
    'Investment portfolio optimization',
    'Market trend analysis',
    'Financial forecasting',
    'Fraud detection and prevention',
    'Regulatory compliance monitoring',
    'Real-time financial insights'
  ]

  const benefits = [
    {
      title: 'Accurate Analysis',
      description: 'Achieve 99%+ accuracy in financial analysis and predictions',
      icon: <Target className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Risk Management',
      description: 'Identify and mitigate financial risks with AI analysis',
      icon: <CheckCircle className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Time Efficiency',
      description: 'Reduce analysis time from days to minutes with automation',
      icon: <Clock className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Cost Savings',
      description: 'Reduce financial analysis costs by up to 70%',
      icon: <DollarSign className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Investment Analysis',
      description: 'Analyze investment opportunities and portfolio performance',
      icon: '📈'
    },
    {
      title: 'Risk Assessment',
      description: 'Assess and manage financial risks across portfolios',
      icon: '⚠️'
    },
    {
      title: 'Market Analysis',
      description: 'Analyze market trends and economic indicators',
      icon: '📊'
    },
    {
      title: 'Fraud Detection',
      description: 'Detect and prevent financial fraud and irregularities',
      icon: '🔍'
    },
    {
      title: 'Compliance Monitoring',
      description: 'Ensure regulatory compliance and reporting',
      icon: '📋'
    },
    {
      title: 'Financial Forecasting',
      description: 'Predict future financial performance and trends',
      icon: '🔮'
    }
  ]

  const stats = [
    { number: '99%', label: 'Analysis Accuracy' },
    { number: '70%', label: 'Cost Reduction' },
    { number: '10x', label: 'Faster Analysis' },
    { number: '24/7', label: 'Monitoring' }
  ]

  const testimonials = [
    {
      name: 'David Chen',
      company: 'Investment Manager',
      content: 'Financial analysis is now incredibly accurate and fast. The AI insights are invaluable.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'Risk Manager',
      content: 'Risk assessment has improved dramatically. We can identify threats before they materialize.',
      rating: 5
    },
    {
      name: 'John Smith',
      company: 'Financial Director',
      content: 'Compliance monitoring is now automated and highly effective. Regulatory issues are minimized.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Financial Analyzer"
      description="Transform financial analysis with AI-powered insights. Automate risk assessment, optimize investments, detect fraud, and ensure compliance with intelligent financial analysis solutions."
      icon={<Calculator className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $299/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Financial Analysis"
      popular={true}
    />
  )
}

export default AIFinancialAnalyzerPage