import React from 'react'
import { Headphones, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AICustomerServicePage: React.FC = () => {
  const features = [
    'Multi-channel support automation',
    'Intelligent ticket routing',
    'Automated response generation',
    'Customer sentiment analysis',
    'Knowledge base integration',
    'Escalation management',
    'Performance analytics',
    '24/7 availability'
  ]

  const benefits = [
    {
      title: 'Instant Resolution',
      description: 'Resolve 75% of customer issues instantly with AI automation',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce customer service costs by up to 60%',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Better Experience',
      description: 'Provide consistent, high-quality customer service 24/7',
      icon: <Star className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Scalability',
      description: 'Handle unlimited customer inquiries simultaneously',
      icon: <Users className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Live Chat Support',
      description: 'Provide instant responses to customer queries via chat',
      icon: '💬'
    },
    {
      title: 'Email Support',
      description: 'Handle email support requests with intelligent responses',
      icon: '📧'
    },
    {
      title: 'Phone Support',
      description: 'Assist human agents with real-time information during calls',
      icon: '📞'
    },
    {
      title: 'Ticket Management',
      description: 'Automatically categorize and route support tickets',
      icon: '🎫'
    },
    {
      title: 'Knowledge Base',
      description: 'Help customers find answers using intelligent search',
      icon: '📚'
    },
    {
      title: 'Sentiment Analysis',
      description: 'Monitor customer satisfaction and identify issues early',
      icon: '😊'
    }
  ]

  const stats = [
    { number: '75%', label: 'Issues Resolved Automatically' },
    { number: '60%', label: 'Cost Reduction' },
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '24/7', label: 'Support Availability' }
  ]

  const testimonials = [
    {
      name: 'Rachel Green',
      company: 'Customer Success Manager',
      content: 'Response time improved by 80%. Customers love the instant, accurate support.',
      rating: 5
    },
    {
      name: 'Tom Anderson',
      company: 'Support Director',
      content: 'AI handles routine queries perfectly, allowing our team to focus on complex issues.',
      rating: 5
    },
    {
      name: 'Lisa Park',
      company: 'E-commerce Manager',
      content: 'Customer satisfaction scores have never been higher. The AI understands context perfectly.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Customer Service"
      description="Revolutionize customer service with AI-powered automation. Handle inquiries, resolve issues, and provide exceptional support experiences across all channels with intelligent customer service solutions."
      icon={<Headphones className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $149/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Customer Service"
      popular={true}
    />
  )
}

export default AICustomerServicePage