import React from 'react'
import { DollarSign, Zap, Globe, Target, TrendingUp, Users, Clock, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AIExpenseTrackerPage: React.FC = () => {
  const features = [
    'Automated expense categorization',
    'Receipt scanning and OCR',
    'Budget tracking and alerts',
    'Expense reporting and analytics',
    'Multi-currency support',
    'Integration with accounting software',
    'Tax preparation assistance',
    'Mobile app for on-the-go tracking'
  ]

  const benefits = [
    {
      title: 'Time Savings',
      description: 'Save 5+ hours per week with automated expense tracking',
      icon: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Accuracy',
      description: 'Achieve 99%+ accuracy in expense categorization and data entry',
      icon: <Target className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Cost Control',
      description: 'Better control over spending with real-time budget monitoring',
      icon: <DollarSign className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Tax Compliance',
      description: 'Ensure tax compliance with automated expense documentation',
      icon: <CheckCircle className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Business Expenses',
      description: 'Track and manage business expenses for tax deductions',
      icon: '💼'
    },
    {
      title: 'Travel Expenses',
      description: 'Automatically track travel expenses and mileage',
      icon: '✈️'
    },
    {
      title: 'Receipt Management',
      description: 'Scan and store receipts digitally with OCR extraction',
      icon: '🧾'
    },
    {
      title: 'Budget Planning',
      description: 'Create and monitor budgets with AI-powered insights',
      icon: '📊'
    },
    {
      title: 'Expense Reporting',
      description: 'Generate detailed expense reports for management',
      icon: '📈'
    },
    {
      title: 'Tax Preparation',
      description: 'Prepare tax documents with categorized expense data',
      icon: '📋'
    }
  ]

  const stats = [
    { number: '10,000+', label: 'Expenses Tracked' },
    { number: '99%', label: 'Accuracy Rate' },
    { number: '5+', label: 'Hours Saved Weekly' },
    { number: '24/7', label: 'Expense Tracking' }
  ]

  const testimonials = [
    {
      name: 'Mike Chen',
      company: 'Small Business Owner',
      content: 'Expense tracking is now effortless. The AI categorization is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'Freelance Consultant',
      content: 'Tax preparation has never been easier. All expenses are perfectly categorized.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Sales Manager',
      content: 'Travel expense tracking is now automated. Saves me hours every week.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Expense Tracker"
      description="Streamline expense management with AI-powered tracking and categorization. Automate receipt processing, budget monitoring, and tax preparation with intelligent expense management solutions."
      icon={<DollarSign className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $15/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Finance & Accounting"
      popular={true}
    />
  )
}

export default AIExpenseTrackerPage