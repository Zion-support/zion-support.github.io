import React from 'react'
import { Sprout, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AIAgriculturalIntelligenceProPage: React.FC = () => {
  const features = [
    'Crop monitoring and analysis',
    'Weather prediction and optimization',
    'Soil health assessment',
    'Pest and disease detection',
    'Yield prediction and optimization',
    'Irrigation management',
    'Precision farming recommendations',
    'Supply chain optimization'
  ]

  const benefits = [
    {
      title: 'Yield Optimization',
      description: 'Increase crop yields by up to 30% with AI insights',
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Resource Efficiency',
      description: 'Optimize water, fertilizer, and pesticide usage',
      icon: <Target className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce farming costs by up to 25%',
      icon: <DollarSign className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Sustainability',
      description: 'Promote sustainable farming practices',
      icon: <Globe className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Crop Monitoring',
      description: 'Monitor crop health and growth with satellite imagery',
      icon: '🌾'
    },
    {
      title: 'Weather Analysis',
      description: 'Predict weather patterns and optimize farming schedules',
      icon: '🌤️'
    },
    {
      title: 'Soil Management',
      description: 'Assess soil health and recommend improvements',
      icon: '🌱'
    },
    {
      title: 'Pest Control',
      description: 'Detect and manage pests and diseases early',
      icon: '🐛'
    },
    {
      title: 'Irrigation',
      description: 'Optimize water usage with smart irrigation systems',
      icon: '💧'
    },
    {
      title: 'Harvest Planning',
      description: 'Plan optimal harvest times and logistics',
      icon: '🚜'
    }
  ]

  const stats = [
    { number: '30%', label: 'Yield Increase' },
    { number: '25%', label: 'Cost Reduction' },
    { number: '95%', label: 'Prediction Accuracy' },
    { number: '24/7', label: 'Monitoring' }
  ]

  const testimonials = [
    {
      name: 'David Chen',
      company: 'Farm Manager',
      content: 'Crop yields have increased by 35%. The AI insights are incredibly valuable.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'Agricultural Consultant',
      content: 'Resource optimization has reduced costs significantly. Sustainability has improved.',
      rating: 5
    },
    {
      name: 'John Smith',
      company: 'Farm Owner',
      content: 'Pest detection has prevented major crop losses. The AI is game-changing.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Agricultural Intelligence Pro"
      description="Transform agriculture with AI-powered intelligence. Optimize crop yields, manage resources efficiently, and promote sustainable farming with advanced agricultural AI solutions."
      icon={<Sprout className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $499/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Agriculture & Farming"
      popular={false}
    />
  )
}

export default AIAgriculturalIntelligenceProPage