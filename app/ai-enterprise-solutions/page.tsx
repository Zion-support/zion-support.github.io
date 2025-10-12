import React from 'react'
import { Building, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AIEnterpriseSolutionsPage: React.FC = () => {
  const features = [
    'Enterprise-grade AI platform',
    'Custom AI model development',
    'Scalable cloud infrastructure',
    'Advanced security and compliance',
    'Integration with existing systems',
    'Dedicated support team',
    'Custom training and onboarding',
    '24/7 monitoring and maintenance'
  ]

  const benefits = [
    {
      title: 'Scalable Solutions',
      description: 'Scale AI solutions across your entire organization',
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Custom Development',
      description: 'Build AI solutions tailored to your specific business needs',
      icon: <Target className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for sensitive data',
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'ROI Optimization',
      description: 'Achieve measurable ROI with enterprise AI implementations',
      icon: <DollarSign className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Process Automation',
      description: 'Automate complex business processes across departments',
      icon: '⚙️'
    },
    {
      title: 'Data Analytics',
      description: 'Implement enterprise-wide data analytics and insights',
      icon: '📊'
    },
    {
      title: 'Customer Experience',
      description: 'Enhance customer experience with AI-powered solutions',
      icon: '👥'
    },
    {
      title: 'Supply Chain',
      description: 'Optimize supply chain operations with AI intelligence',
      icon: '🚚'
    },
    {
      title: 'HR Automation',
      description: 'Streamline HR processes with AI-powered automation',
      icon: '👔'
    },
    {
      title: 'Financial Services',
      description: 'Implement AI solutions for financial analysis and reporting',
      icon: '💼'
    }
  ]

  const stats = [
    { number: '500+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '50%', label: 'Efficiency Gain' },
    { number: '24/7', label: 'Support' }
  ]

  const testimonials = [
    {
      name: 'David Chen',
      company: 'CTO, Fortune 500',
      content: 'The enterprise AI platform has transformed our operations. ROI exceeded expectations by 200%.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'VP Operations',
      content: 'Custom AI development has given us a competitive edge. The solutions are perfectly tailored to our needs.',
      rating: 5
    },
    {
      name: 'John Smith',
      company: 'IT Director',
      content: 'Enterprise security and compliance are top-notch. We trust them with our most sensitive data.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Enterprise Solutions"
      description="Comprehensive AI solutions for large enterprises. Custom development, scalable infrastructure, and enterprise-grade security to transform your organization with artificial intelligence."
      icon={<Building className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $2,999/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Enterprise"
      popular={true}
    />
  )
}

export default AIEnterpriseSolutionsPage