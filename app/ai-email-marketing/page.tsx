import React from 'react'
import { Mail, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AIEmailMarketingPage: React.FC = () => {
  const features = [
    'AI-powered email content generation',
    'Personalized email campaigns',
    'Optimal send time prediction',
    'Subject line optimization',
    'A/B testing automation',
    'Segmentation and targeting',
    'Performance analytics',
    'Automated follow-up sequences'
  ]

  const benefits = [
    {
      title: 'Higher Open Rates',
      description: 'Increase email open rates by up to 35% with AI optimization',
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Better Engagement',
      description: 'Improve click-through rates and engagement with personalized content',
      icon: <Target className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Time Savings',
      description: 'Create and send campaigns 5x faster with AI automation',
      icon: <Clock className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduce email marketing costs by 50% while improving results',
      icon: <DollarSign className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Newsletter Campaigns',
      description: 'Create engaging newsletters with AI-generated content',
      icon: '📰'
    },
    {
      title: 'Product Promotions',
      description: 'Send targeted product promotion emails to the right audience',
      icon: '🛍️'
    },
    {
      title: 'Welcome Series',
      description: 'Automate welcome email sequences for new subscribers',
      icon: '👋'
    },
    {
      title: 'Abandoned Cart',
      description: 'Send personalized abandoned cart recovery emails',
      icon: '🛒'
    },
    {
      title: 'Event Invitations',
      description: 'Create compelling event invitation emails',
      icon: '📅'
    },
    {
      title: 'Customer Retention',
      description: 'Send retention emails to keep customers engaged',
      icon: '💝'
    }
  ]

  const stats = [
    { number: '35%', label: 'Open Rate Increase' },
    { number: '50%', label: 'Cost Reduction' },
    { number: '5x', label: 'Faster Campaign Creation' },
    { number: '24/7', label: 'Campaign Management' }
  ]

  const testimonials = [
    {
      name: 'Lisa Park',
      company: 'Marketing Manager',
      content: 'Email open rates have increased by 40%. The AI-generated content is incredibly engaging.',
      rating: 5
    },
    {
      name: 'Tom Anderson',
      company: 'E-commerce Director',
      content: 'Campaign creation is now 5x faster. The AI understands our audience perfectly.',
      rating: 5
    },
    {
      name: 'Rachel Green',
      company: 'Digital Marketing Agency',
      content: 'Client email campaigns are now more effective than ever. ROI has increased significantly.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Email Marketing"
      description="Supercharge your email marketing with AI-powered automation. Create personalized campaigns, optimize send times, and boost engagement with intelligent email marketing solutions."
      icon={<Mail className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $99/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Email Marketing"
      popular={true}
    />
  )
}

export default AIEmailMarketingPage