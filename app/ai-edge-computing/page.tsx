import React from 'react'
import { Cpu, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AIEdgeComputingPage: React.FC = () => {
  const features = [
    'Edge AI model deployment',
    'Real-time data processing',
    'Low-latency inference',
    'Distributed computing',
    'Edge device management',
    'Data synchronization',
    'Offline capability',
    'Edge security and compliance'
  ]

  const benefits = [
    {
      title: 'Ultra-Low Latency',
      description: 'Achieve sub-millisecond response times with edge processing',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduce cloud costs by processing data at the edge',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Reliability',
      description: 'Ensure continuous operation even with network issues',
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Scalability',
      description: 'Scale AI processing across distributed edge devices',
      icon: <TrendingUp className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Autonomous Vehicles',
      description: 'Enable real-time decision making for self-driving cars',
      icon: '🚗'
    },
    {
      title: 'Industrial IoT',
      description: 'Process sensor data in manufacturing and industrial settings',
      icon: '🏭'
    },
    {
      title: 'Smart Cities',
      description: 'Implement intelligent traffic and infrastructure management',
      icon: '🏙️'
    },
    {
      title: 'Healthcare',
      description: 'Enable real-time medical monitoring and diagnosis',
      icon: '🏥'
    },
    {
      title: 'Retail',
      description: 'Provide personalized shopping experiences in stores',
      icon: '🛍️'
    },
    {
      title: 'Security',
      description: 'Implement real-time surveillance and threat detection',
      icon: '🔒'
    }
  ]

  const stats = [
    { number: '< 1ms', label: 'Latency' },
    { number: '50%', label: 'Cost Reduction' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Processing' }
  ]

  const testimonials = [
    {
      name: 'David Chen',
      company: 'IoT Director',
      content: 'Edge computing has transformed our IoT operations. Response times are incredible.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'Smart City Manager',
      content: 'Traffic management is now real-time and highly efficient. The AI edge processing is amazing.',
      rating: 5
    },
    {
      name: 'John Smith',
      company: 'Manufacturing CTO',
      content: 'Industrial automation has never been more responsive. Edge AI is game-changing.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Edge Computing"
      description="Deploy AI at the edge for ultra-low latency processing. Enable real-time decision making, reduce cloud costs, and ensure reliable operation with intelligent edge computing solutions."
      icon={<Cpu className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $399/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Edge Computing"
      popular={true}
    />
  )
}

export default AIEdgeComputingPage