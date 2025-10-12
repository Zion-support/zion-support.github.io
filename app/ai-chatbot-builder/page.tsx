import React from 'react'
import { MessageSquare, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AIChatbotBuilderPage: React.FC = () => {
  const features = [
    'No-code chatbot builder',
    'Multi-channel deployment',
    'Natural language processing',
    'Custom conversation flows',
    'Integration with CRM systems',
    'Analytics and reporting',
    '24/7 customer support',
    'Easy customization'
  ]

  const benefits = [
    {
      title: '24/7 Availability',
      description: 'Provide instant customer support around the clock',
      icon: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce customer support costs by up to 60%',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Instant Response',
      description: 'Respond to customer queries in milliseconds',
      icon: <Zap className="w-6 h-6 text-yellow-500" />
    },
    {
      title: 'Scalable Support',
      description: 'Handle unlimited conversations simultaneously',
      icon: <Users className="w-6 h-6 text-purple-500" />
    }
  ]

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Handle common customer inquiries and support tickets',
      icon: '🎧'
    },
    {
      title: 'Lead Generation',
      description: 'Qualify leads and capture contact information',
      icon: '🎯'
    },
    {
      title: 'E-commerce Assistant',
      description: 'Help customers find products and process orders',
      icon: '🛒'
    },
    {
      title: 'Booking System',
      description: 'Manage appointments and reservations automatically',
      icon: '📅'
    },
    {
      title: 'FAQ Bot',
      description: 'Answer frequently asked questions instantly',
      icon: '❓'
    },
    {
      title: 'Sales Assistant',
      description: 'Guide customers through the sales process',
      icon: '💰'
    }
  ]

  const stats = [
    { number: '500+', label: 'Chatbots Deployed' },
    { number: '80%', label: 'Query Resolution Rate' },
    { number: '60%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Availability' }
  ]

  const testimonials = [
    {
      name: 'David Thompson',
      company: 'TechStart Inc.',
      content: 'Our chatbot handles 80% of customer inquiries automatically. Customer satisfaction has increased significantly.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      company: 'E-commerce Plus',
      content: 'The no-code builder made it so easy to create our chatbot. It was up and running in just a few hours.',
      rating: 5
    },
    {
      name: 'Mark Rodriguez',
      company: 'Service Solutions',
      content: 'The analytics help us understand customer needs better. It\'s been a game-changer for our support team.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Chatbot Builder"
      description="Create intelligent chatbots for customer support, lead generation, and sales automation. No coding required - build, deploy, and manage chatbots with our intuitive platform."
      icon={<MessageSquare className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $49/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Conversational AI"
      popular={true}
    />
  )
}

export default AIChatbotBuilderPage