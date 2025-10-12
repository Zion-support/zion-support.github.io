import React from 'react'
import { Calculator, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AIAccountingAssistantPage: React.FC = () => {
  const features = [
    'Automated bookkeeping',
    'Invoice processing and management',
    'Expense categorization',
    'Financial reporting',
    'Tax preparation assistance',
    'Audit trail maintenance',
    'Compliance monitoring',
    'Real-time financial insights'
  ]

  const benefits = [
    {
      title: 'Time Savings',
      description: 'Save 10+ hours per week with automated accounting tasks',
      icon: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Accuracy',
      description: 'Achieve 99%+ accuracy in financial data entry and processing',
      icon: <Target className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce accounting costs by up to 70%',
      icon: <DollarSign className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Compliance',
      description: 'Ensure regulatory compliance with automated monitoring',
      icon: <CheckCircle className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Bookkeeping',
      description: 'Automate daily bookkeeping and data entry tasks',
      icon: '📚'
    },
    {
      title: 'Invoice Management',
      description: 'Process and manage invoices automatically',
      icon: '🧾'
    },
    {
      title: 'Expense Tracking',
      description: 'Categorize and track business expenses',
      icon: '💰'
    },
    {
      title: 'Financial Reporting',
      description: 'Generate comprehensive financial reports',
      icon: '📊'
    },
    {
      title: 'Tax Preparation',
      description: 'Prepare tax documents and ensure compliance',
      icon: '📋'
    },
    {
      title: 'Audit Support',
      description: 'Maintain audit trails and support compliance',
      icon: '🔍'
    }
  ]

  const stats = [
    { number: '10+', label: 'Hours Saved Weekly' },
    { number: '99%', label: 'Accuracy Rate' },
    { number: '70%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Processing' }
  ]

  const testimonials = [
    {
      name: 'Robert Kim',
      company: 'Small Business Owner',
      content: 'Accounting is now fully automated. I save 15 hours every week.',
      rating: 5
    },
    {
      name: 'Amanda Foster',
      company: 'Accounting Manager',
      content: 'Financial reporting has never been easier. The AI is incredibly accurate.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'CPA',
      content: 'Tax preparation is now automated and highly accurate. Client satisfaction has improved.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Accounting Assistant"
      description="Automate accounting tasks with AI-powered assistance. Streamline bookkeeping, process invoices, track expenses, and ensure compliance with intelligent accounting solutions."
      icon={<Calculator className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $99/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Accounting & Finance"
      popular={true}
    />
  )
}

export default AIAccountingAssistantPage