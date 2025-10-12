import React from 'react'
import { ShoppingCart, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AIEcommerceSolutionsPage: React.FC = () => {
  const features = [
    'AI-powered product recommendations',
    'Dynamic pricing optimization',
    'Inventory management',
    'Customer behavior analysis',
    'Automated customer service',
    'Personalized shopping experiences',
    'Fraud detection and prevention',
    'Sales forecasting'
  ]

  const benefits = [
    {
      title: 'Increased Sales',
      description: 'Boost sales by up to 35% with personalized recommendations',
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Better Customer Experience',
      description: 'Provide personalized shopping experiences that convert',
      icon: <Users className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Cost Optimization',
      description: 'Reduce operational costs by 40% with intelligent automation',
      icon: <DollarSign className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Real-time Insights',
      description: 'Get real-time insights into customer behavior and preferences',
      icon: <Target className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Product Recommendations',
      description: 'Show customers products they\'re most likely to buy',
      icon: '🎯'
    },
    {
      title: 'Dynamic Pricing',
      description: 'Optimize prices based on demand, competition, and inventory',
      icon: '💰'
    },
    {
      title: 'Inventory Management',
      description: 'Predict demand and optimize inventory levels automatically',
      icon: '📦'
    },
    {
      title: 'Customer Service',
      description: 'Provide 24/7 AI-powered customer support and assistance',
      icon: '🎧'
    },
    {
      title: 'Personalization',
      description: 'Create personalized shopping experiences for each customer',
      icon: '✨'
    },
    {
      title: 'Fraud Prevention',
      description: 'Detect and prevent fraudulent transactions in real-time',
      icon: '🛡️'
    }
  ]

  const stats = [
    { number: '35%', label: 'Sales Increase' },
    { number: '40%', label: 'Cost Reduction' },
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '24/7', label: 'AI Support' }
  ]

  const testimonials = [
    {
      name: 'Lisa Park',
      company: 'E-commerce Manager',
      content: 'Our conversion rate increased by 40% with AI recommendations. Revenue is up significantly.',
      rating: 5
    },
    {
      name: 'Tom Anderson',
      company: 'Online Store Owner',
      content: 'Dynamic pricing has maximized our profits. The AI adjusts prices perfectly based on demand.',
      rating: 5
    },
    {
      name: 'Rachel Green',
      company: 'Marketing Director',
      content: 'Customer personalization has transformed our shopping experience. Engagement is through the roof.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI E-commerce Solutions"
      description="Transform your e-commerce business with AI-powered solutions. Boost sales with personalized recommendations, optimize pricing, manage inventory, and provide exceptional customer experiences."
      icon={<ShoppingCart className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $199/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="E-commerce"
      popular={true}
    />
  )
}

export default AIEcommerceSolutionsPage