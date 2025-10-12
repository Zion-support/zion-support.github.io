import React from 'react'
import { Shirt, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AIFashionDesignPage: React.FC = () => {
  const features = [
    'AI-powered design generation',
    'Trend analysis and prediction',
    'Color palette optimization',
    'Fabric and material recommendations',
    'Size and fit optimization',
    'Sustainable design suggestions',
    'Virtual try-on technology',
    'Design collaboration tools'
  ]

  const benefits = [
    {
      title: 'Creative Enhancement',
      description: 'Boost creativity with AI-powered design suggestions and inspiration',
      icon: <Star className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Trend Prediction',
      description: 'Stay ahead of fashion trends with AI analysis and forecasting',
      icon: <TrendingUp className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Time Efficiency',
      description: 'Create designs 5x faster with AI assistance and automation',
      icon: <Clock className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce design and production costs by up to 40%',
      icon: <DollarSign className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Fashion Design',
      description: 'Create innovative clothing designs with AI assistance',
      icon: '👗'
    },
    {
      title: 'Trend Analysis',
      description: 'Analyze fashion trends and predict future styles',
      icon: '📈'
    },
    {
      title: 'Color Matching',
      description: 'Optimize color combinations for maximum appeal',
      icon: '🎨'
    },
    {
      title: 'Size Optimization',
      description: 'Improve fit and sizing for better customer satisfaction',
      icon: '📏'
    },
    {
      title: 'Sustainable Fashion',
      description: 'Design eco-friendly and sustainable fashion items',
      icon: '🌱'
    },
    {
      title: 'Virtual Try-On',
      description: 'Enable customers to try on clothes virtually',
      icon: '👤'
    }
  ]

  const stats = [
    { number: '5x', label: 'Faster Design' },
    { number: '40%', label: 'Cost Reduction' },
    { number: '95%', label: 'Design Accuracy' },
    { number: '24/7', label: 'Design Studio' }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Fashion Designer',
      content: 'Design creativity has increased dramatically. The AI suggestions are incredibly inspiring.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Fashion Brand Owner',
      content: 'Trend prediction has given us a competitive edge. We stay ahead of the market.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Sustainable Fashion Advocate',
      content: 'Sustainable design suggestions have transformed our approach. We\'re now eco-friendly.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Fashion Design"
      description="Revolutionize fashion design with AI-powered creativity. Generate innovative designs, predict trends, optimize colors and fits, and create sustainable fashion with intelligent design solutions."
      icon={<Shirt className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $199/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Fashion & Design"
      popular={false}
    />
  )
}

export default AIFashionDesignPage