import React from 'react'
import { Palette, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AIDesignStudioPage: React.FC = () => {
  const features = [
    'AI-powered design generation',
    'Brand consistency automation',
    'Template library with AI suggestions',
    'Color palette optimization',
    'Layout optimization',
    'Typography recommendations',
    'Image generation and editing',
    'Export to multiple formats'
  ]

  const benefits = [
    {
      title: 'Design Speed',
      description: 'Create professional designs 5x faster with AI assistance',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Brand Consistency',
      description: 'Maintain consistent brand identity across all designs',
      icon: <Target className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Cost Savings',
      description: 'Reduce design costs by up to 70% while improving quality',
      icon: <DollarSign className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Creative Enhancement',
      description: 'Get AI-powered suggestions to enhance your creativity',
      icon: <Star className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Logo Design',
      description: 'Create unique, professional logos with AI assistance',
      icon: '🎨'
    },
    {
      title: 'Marketing Materials',
      description: 'Generate flyers, brochures, and promotional materials',
      icon: '📢'
    },
    {
      title: 'Social Media Graphics',
      description: 'Create engaging social media posts and stories',
      icon: '📱'
    },
    {
      title: 'Website Design',
      description: 'Design modern, responsive website layouts',
      icon: '🌐'
    },
    {
      title: 'Print Design',
      description: 'Create business cards, letterheads, and print materials',
      icon: '🖨️'
    },
    {
      title: 'Presentation Design',
      description: 'Design professional presentations and slides',
      icon: '📊'
    }
  ]

  const stats = [
    { number: '10,000+', label: 'Designs Created' },
    { number: '5x', label: 'Faster Design' },
    { number: '70%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Design Studio' }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Marketing Manager',
      content: 'Design quality has improved dramatically. The AI suggestions are incredibly creative.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Creative Director',
      content: 'Our design output has increased 5x while maintaining brand consistency.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Small Business Owner',
      content: 'Professional designs without the cost of a designer. The AI is amazing!',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Design Studio"
      description="Create stunning designs with AI-powered assistance. Generate logos, marketing materials, social media graphics, and more with intelligent design tools and automation."
      icon={<Palette className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $79/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Design"
      popular={false}
    />
  )
}

export default AIDesignStudioPage