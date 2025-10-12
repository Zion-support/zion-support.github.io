import React from 'react'
import { Cloud, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AICloudInfrastructurePage: React.FC = () => {
  const features = [
    'AI-powered infrastructure optimization',
    'Automated scaling and resource management',
    'Cost optimization and monitoring',
    'Performance analytics and insights',
    'Security monitoring and compliance',
    'Disaster recovery automation',
    'Multi-cloud management',
    '24/7 infrastructure monitoring'
  ]

  const benefits = [
    {
      title: 'Cost Optimization',
      description: 'Reduce cloud costs by up to 40% with AI-powered optimization',
      icon: <DollarSign className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Performance',
      description: 'Improve application performance with intelligent resource allocation',
      icon: <Zap className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Reliability',
      description: 'Achieve 99.9% uptime with automated monitoring and recovery',
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Scalability',
      description: 'Automatically scale resources based on demand patterns',
      icon: <TrendingUp className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Auto Scaling',
      description: 'Automatically scale resources based on traffic and demand',
      icon: '📈'
    },
    {
      title: 'Cost Management',
      description: 'Optimize cloud spending with intelligent cost analysis',
      icon: '💰'
    },
    {
      title: 'Performance Monitoring',
      description: 'Monitor and optimize application performance in real-time',
      icon: '📊'
    },
    {
      title: 'Security Compliance',
      description: 'Ensure security compliance with automated monitoring',
      icon: '🔒'
    },
    {
      title: 'Disaster Recovery',
      description: 'Automate disaster recovery and backup processes',
      icon: '🔄'
    },
    {
      title: 'Multi-Cloud',
      description: 'Manage resources across multiple cloud providers',
      icon: '☁️'
    }
  ]

  const stats = [
    { number: '40%', label: 'Cost Reduction' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '50%', label: 'Performance Improvement' },
    { number: '24/7', label: 'Monitoring' }
  ]

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      company: 'Cloud Architect',
      content: 'Infrastructure costs have decreased by 45%. The AI optimization is incredible.',
      rating: 5
    },
    {
      name: 'Michael Torres',
      company: 'DevOps Manager',
      content: 'Auto-scaling has improved performance significantly. Uptime is now 99.9%.',
      rating: 5
    },
    {
      name: 'Sarah Lee',
      company: 'CTO',
      content: 'Multi-cloud management is now effortless. The AI handles everything automatically.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Cloud Infrastructure"
      description="Optimize cloud infrastructure with AI-powered management. Reduce costs, improve performance, and ensure reliability with intelligent cloud infrastructure solutions."
      icon={<Cloud className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $199/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Cloud Infrastructure"
      popular={true}
    />
  )
}

export default AICloudInfrastructurePage