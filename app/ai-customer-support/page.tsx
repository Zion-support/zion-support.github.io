import React from 'react'
import { Headphones, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AICustomerSupportPage: React.FC = () => {
  const features = [
    'Intelligent ticket routing',
    'Automated response generation',
    'Multi-channel support (email, chat, phone)',
    'Knowledge base integration',
    'Sentiment analysis',
    'Escalation management',
    'Performance analytics',
    '24/7 availability'
  ]

  const benefits = [
    {
      title: 'Instant Resolution',
      description: 'Resolve 70% of customer issues instantly with AI automation',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce support costs by up to 50% while improving service quality',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: '24/7 Support',
      description: 'Provide round-the-clock customer support without additional staff',
      icon: <Clock className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Customer Satisfaction',
      description: 'Improve customer satisfaction scores with faster, more accurate responses',
      icon: <Star className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Ticket Management',
      description: 'Automatically categorize and route support tickets to the right team',
      icon: '🎫'
    },
    {
      title: 'Live Chat Support',
      description: 'Provide instant responses to customer queries via live chat',
      icon: '💬'
    },
    {
      title: 'Email Support',
      description: 'Handle email support requests with intelligent auto-responses',
      icon: '📧'
    },
    {
      title: 'Phone Support',
      description: 'Assist human agents with real-time information during calls',
      icon: '📞'
    },
    {
      title: 'Knowledge Base',
      description: 'Help customers find answers using intelligent search and suggestions',
      icon: '📚'
    },
    {
      title: 'Escalation Management',
      description: 'Automatically escalate complex issues to human agents',
      icon: '⬆️'
    }
  ]

  const stats = [
    { number: '70%', label: 'Issues Resolved Automatically' },
    { number: '50%', label: 'Cost Reduction' },
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '24/7', label: 'Support Availability' }
  ]

  const testimonials = [
    {
      name: 'Rachel Green',
      company: 'Customer Success Manager',
      content: 'Our response time has improved by 80%. Customers love the instant, accurate support.',
      rating: 5
    },
    {
      name: 'Tom Anderson',
      company: 'Support Director',
      content: 'The AI handles routine queries perfectly, allowing our team to focus on complex issues.',
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
      title="AI Customer Support"
      description="Revolutionize your customer support with AI-powered automation. Handle tickets, provide instant responses, and deliver exceptional customer experiences 24/7 with intelligent support solutions."
      icon={<Headphones className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $199/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Customer Service"
      popular={true}
    />
  )
}

export default AICustomerSupportPage