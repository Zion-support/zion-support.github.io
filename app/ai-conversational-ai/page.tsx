import React from 'react'
import { MessageCircle, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AIConversationalAIPage: React.FC = () => {
  const features = [
    'Natural language understanding',
    'Context-aware conversations',
    'Multi-language support',
    'Voice and text interfaces',
    'Sentiment analysis',
    'Intent recognition',
    'Conversation flow management',
    'Integration with business systems'
  ]

  const benefits = [
    {
      title: 'Natural Interaction',
      description: 'Create human-like conversations that feel natural and engaging',
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      title: '24/7 Availability',
      description: 'Provide round-the-clock customer support and assistance',
      icon: <Clock className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce customer service costs by up to 70%',
      icon: <DollarSign className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Scalability',
      description: 'Handle unlimited conversations simultaneously',
      icon: <TrendingUp className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Provide instant, intelligent customer support via chat and voice',
      icon: '🎧'
    },
    {
      title: 'Sales Assistant',
      description: 'Guide customers through the sales process with AI conversations',
      icon: '💰'
    },
    {
      title: 'Virtual Assistant',
      description: 'Create virtual assistants for various business functions',
      icon: '🤖'
    },
    {
      title: 'Lead Qualification',
      description: 'Qualify leads through intelligent conversations',
      icon: '🎯'
    },
    {
      title: 'Appointment Booking',
      description: 'Automate appointment scheduling and management',
      icon: '📅'
    },
    {
      title: 'Information Retrieval',
      description: 'Help users find information through natural conversations',
      icon: '🔍'
    }
  ]

  const stats = [
    { number: '70%', label: 'Cost Reduction' },
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '24/7', label: 'Availability' },
    { number: '1000+', label: 'Conversations Daily' }
  ]

  const testimonials = [
    {
      name: 'Rachel Green',
      company: 'Customer Success Manager',
      content: 'Customer satisfaction has increased by 40%. The AI conversations feel completely natural.',
      rating: 5
    },
    {
      name: 'Tom Anderson',
      company: 'Sales Director',
      content: 'Lead qualification is now automated and incredibly effective. Conversion rates have doubled.',
      rating: 5
    },
    {
      name: 'Lisa Park',
      company: 'Support Manager',
      content: 'Our support team can focus on complex issues while AI handles routine inquiries.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Conversational AI"
      description="Create intelligent, natural conversations with AI-powered conversational systems. Build chatbots, virtual assistants, and customer support solutions that understand and respond like humans."
      icon={<MessageCircle className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $149/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Conversational AI"
      popular={true}
    />
  )
}

export default AIConversationalAIPage