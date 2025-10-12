import React from 'react'
import { Mail, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AIEmailAssistantPage: React.FC = () => {
  const features = [
    'Smart email scheduling',
    'Auto-response generation',
    'Email categorization and prioritization',
    'Sentiment analysis',
    'Template suggestions',
    'Follow-up reminders',
    'Spam detection and filtering',
    'Integration with major email clients'
  ]

  const benefits = [
    {
      title: 'Time Management',
      description: 'Save 2-3 hours daily with intelligent email automation',
      icon: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Improved Response Time',
      description: 'Respond to important emails 5x faster with smart prioritization',
      icon: <Zap className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Better Organization',
      description: 'Keep your inbox organized with AI-powered categorization',
      icon: <Target className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Professional Communication',
      description: 'Maintain consistent, professional tone across all emails',
      icon: <Star className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Email Scheduling',
      description: 'Automatically schedule emails for optimal delivery times',
      icon: '⏰'
    },
    {
      title: 'Auto-Responses',
      description: 'Generate intelligent auto-responses for common inquiries',
      icon: '🤖'
    },
    {
      title: 'Email Prioritization',
      description: 'Sort emails by importance and urgency automatically',
      icon: '⭐'
    },
    {
      title: 'Template Suggestions',
      description: 'Get AI-powered suggestions for email templates and responses',
      icon: '📝'
    },
    {
      title: 'Follow-up Reminders',
      description: 'Never miss important follow-ups with smart reminders',
      icon: '🔔'
    },
    {
      title: 'Sentiment Analysis',
      description: 'Understand the tone and sentiment of incoming emails',
      icon: '😊'
    }
  ]

  const stats = [
    { number: '1,000+', label: 'Emails Processed Daily' },
    { number: '85%', label: 'Time Saved' },
    { number: '95%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'Email Management' }
  ]

  const testimonials = [
    {
      name: 'Michael Torres',
      company: 'Sales Director',
      content: 'My email productivity has increased dramatically. The AI helps me focus on what matters most.',
      rating: 5
    },
    {
      name: 'Sarah Lee',
      company: 'Customer Success Manager',
      content: 'The auto-responses are so natural, customers can\'t tell they\'re AI-generated. Amazing technology!',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'Executive Assistant',
      content: 'Email organization has never been easier. The prioritization feature is a game-changer.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Email Assistant"
      description="Streamline your email management with our intelligent AI assistant. Automate scheduling, responses, categorization, and follow-ups to boost productivity and never miss important communications."
      icon={<Mail className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $39/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Productivity"
      popular={false}
    />
  )
}

export default AIEmailAssistantPage