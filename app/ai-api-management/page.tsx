import React from 'react'
import { Settings, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AIAPIManagementPage: React.FC = () => {
  const features = [
    'Intelligent API monitoring',
    'Automated performance optimization',
    'Smart rate limiting and throttling',
    'API security and compliance',
    'Usage analytics and insights',
    'Automated documentation generation',
    'Load balancing and scaling',
    'Real-time API health monitoring'
  ]

  const benefits = [
    {
      title: 'Performance Optimization',
      description: 'Improve API performance by up to 50% with AI optimization',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduce API management costs by up to 40%',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Reliability',
      description: 'Achieve 99.9% API uptime with intelligent monitoring',
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Security',
      description: 'Ensure API security with AI-powered threat detection',
      icon: <Target className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'API Monitoring',
      description: 'Monitor API performance and health in real-time',
      icon: '📊'
    },
    {
      title: 'Performance Optimization',
      description: 'Optimize API response times and throughput',
      icon: '⚡'
    },
    {
      title: 'Security Management',
      description: 'Protect APIs from threats and unauthorized access',
      icon: '🔒'
    },
    {
      title: 'Usage Analytics',
      description: 'Analyze API usage patterns and optimize resources',
      icon: '📈'
    },
    {
      title: 'Load Balancing',
      description: 'Distribute traffic across multiple API instances',
      icon: '⚖️'
    },
    {
      title: 'Documentation',
      description: 'Generate and maintain API documentation automatically',
      icon: '📚'
    }
  ]

  const stats = [
    { number: '50%', label: 'Performance Improvement' },
    { number: '40%', label: 'Cost Reduction' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Monitoring' }
  ]

  const testimonials = [
    {
      name: 'David Chen',
      company: 'API Architect',
      content: 'API performance has improved dramatically. The AI optimization is incredible.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'DevOps Manager',
      content: 'API management is now fully automated. Uptime has never been better.',
      rating: 5
    },
    {
      name: 'John Smith',
      company: 'CTO',
      content: 'Security monitoring has prevented several potential breaches. Highly effective.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI API Management"
      description="Optimize API performance and security with AI-powered management. Monitor, secure, and scale APIs with intelligent automation and real-time insights."
      icon={<Settings className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $199/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="API Management"
      popular={true}
    />
  )
}

export default AIAPIManagementPage