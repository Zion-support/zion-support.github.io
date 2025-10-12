import React from 'react'
import { Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AIEnergyPage: React.FC = () => {
  const features = [
    'Energy consumption optimization',
    'Predictive maintenance',
    'Renewable energy integration',
    'Smart grid management',
    'Energy storage optimization',
    'Demand forecasting',
    'Carbon footprint tracking',
    'Real-time monitoring and control'
  ]

  const benefits = [
    {
      title: 'Energy Savings',
      description: 'Reduce energy consumption by up to 30% with AI optimization',
      icon: <DollarSign className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Sustainability',
      description: 'Achieve carbon neutrality goals with intelligent energy management',
      icon: <Globe className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Cost Reduction',
      description: 'Lower energy costs by optimizing consumption and storage',
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Reliability',
      description: 'Improve energy system reliability with predictive maintenance',
      icon: <CheckCircle className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Smart Buildings',
      description: 'Optimize energy consumption in commercial and residential buildings',
      icon: '🏢'
    },
    {
      title: 'Industrial Energy',
      description: 'Manage energy consumption in manufacturing and industrial facilities',
      icon: '🏭'
    },
    {
      title: 'Renewable Integration',
      description: 'Integrate solar, wind, and other renewable energy sources',
      icon: '🌞'
    },
    {
      title: 'Grid Management',
      description: 'Optimize power grid operations and distribution',
      icon: '⚡'
    },
    {
      title: 'Energy Storage',
      description: 'Optimize battery storage and energy management systems',
      icon: '🔋'
    },
    {
      title: 'Carbon Tracking',
      description: 'Monitor and reduce carbon footprint with AI insights',
      icon: '🌱'
    }
  ]

  const stats = [
    { number: '30%', label: 'Energy Savings' },
    { number: '50%', label: 'Cost Reduction' },
    { number: '99%', label: 'System Reliability' },
    { number: '24/7', label: 'Monitoring' }
  ]

  const testimonials = [
    {
      name: 'David Chen',
      company: 'Facilities Manager',
      content: 'Energy costs have decreased by 40%. The AI optimization is incredibly effective.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'Sustainability Director',
      content: 'We\'ve achieved our carbon neutrality goals ahead of schedule. AI made it possible.',
      rating: 5
    },
    {
      name: 'John Smith',
      company: 'Industrial Plant Manager',
      content: 'Predictive maintenance has reduced downtime by 60%. Energy efficiency is at its peak.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Energy"
      description="Optimize energy consumption and sustainability with AI-powered solutions. Reduce costs, improve efficiency, and achieve carbon neutrality goals with intelligent energy management systems."
      icon={<Zap className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $299/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Energy & Sustainability"
      popular={false}
    />
  )
}

export default AIEnergyPage