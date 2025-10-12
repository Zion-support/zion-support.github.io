import React from 'react'
import { TrendingDown, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AICustomerChurnPage: React.FC = () => {
  const features = [
    'Predictive churn modeling',
    'Customer behavior analysis',
    'Risk scoring and segmentation',
    'Automated retention campaigns',
    'Real-time churn alerts',
    'Retention strategy recommendations',
    'Customer lifetime value prediction',
    'A/B testing for retention tactics'
  ]

  const benefits = [
    {
      title: 'Churn Prevention',
      description: 'Identify and prevent customer churn before it happens',
      icon: <Target className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Revenue Protection',
      description: 'Protect revenue by retaining high-value customers',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduce customer acquisition costs by improving retention',
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Personalized Retention',
      description: 'Create personalized retention strategies for each customer',
      icon: <Users className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Subscription Services',
      description: 'Prevent churn in subscription-based businesses',
      icon: '📱'
    },
    {
      title: 'E-commerce',
      description: 'Retain customers in online retail and e-commerce',
      icon: '🛍️'
    },
    {
      title: 'SaaS Companies',
      description: 'Reduce churn in software-as-a-service businesses',
      icon: '💻'
    },
    {
      title: 'Financial Services',
      description: 'Retain customers in banking and financial services',
      icon: '🏦'
    },
    {
      title: 'Telecommunications',
      description: 'Prevent customer churn in telecom and mobile services',
      icon: '📞'
    },
    {
      title: 'Healthcare',
      description: 'Retain patients and improve healthcare outcomes',
      icon: '🏥'
    }
  ]

  const stats = [
    { number: '30%', label: 'Churn Reduction' },
    { number: '25%', label: 'Revenue Protection' },
    { number: '95%', label: 'Prediction Accuracy' },
    { number: '24/7', label: 'Monitoring' }
  ]

  const testimonials = [
    {
      name: 'David Chen',
      company: 'Customer Success Director',
      content: 'Churn has decreased by 35%. The AI predictions are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'Retention Manager',
      content: 'Retention campaigns are now highly targeted and effective. ROI has improved significantly.',
      rating: 5
    },
    {
      name: 'John Smith',
      company: 'VP of Customer Experience',
      content: 'Customer lifetime value has increased by 40%. The AI insights are game-changing.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Customer Churn"
      description="Predict and prevent customer churn with AI-powered analysis. Identify at-risk customers, create retention strategies, and protect revenue with intelligent churn prediction and prevention."
      icon={<TrendingDown className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $199/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Customer Retention"
      popular={true}
    />
  )
}

export default AICustomerChurnPage