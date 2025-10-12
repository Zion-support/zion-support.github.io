import React from 'react'
import { Brain, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AIContentGeneratorPage: React.FC = () => {
  const features = [
    'Multi-language content generation',
    'SEO-optimized content',
    'Brand voice customization',
    'Content templates library',
    'Plagiarism detection',
    'Real-time collaboration',
    'Content scheduling',
    'Analytics and insights'
  ]

  const benefits = [
    {
      title: 'Save Time',
      description: 'Generate high-quality content 10x faster than manual writing',
      icon: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Consistent Quality',
      description: 'Maintain consistent tone and quality across all content',
      icon: <Star className="w-6 h-6 text-yellow-500" />
    },
    {
      title: 'SEO Optimized',
      description: 'Automatically optimize content for search engines',
      icon: <TrendingUp className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Cost Effective',
      description: 'Reduce content creation costs by up to 70%',
      icon: <DollarSign className="w-6 h-6 text-purple-500" />
    }
  ]

  const useCases = [
    {
      title: 'Blog Posts',
      description: 'Create engaging blog posts that drive traffic and engagement',
      icon: '📝'
    },
    {
      title: 'Social Media',
      description: 'Generate compelling social media content for all platforms',
      icon: '📱'
    },
    {
      title: 'Marketing Copy',
      description: 'Write persuasive marketing copy that converts',
      icon: '📢'
    },
    {
      title: 'Product Descriptions',
      description: 'Create detailed product descriptions that sell',
      icon: '🛍️'
    },
    {
      title: 'Email Campaigns',
      description: 'Craft personalized email campaigns that engage',
      icon: '📧'
    },
    {
      title: 'Website Content',
      description: 'Generate website content that ranks and converts',
      icon: '🌐'
    }
  ]

  const stats = [
    { number: '10,000+', label: 'Content Pieces Generated' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '70%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Available' }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Content Marketing Pro',
      content: 'The AI content generator has revolutionized our content strategy. We produce 5x more content with better quality.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'E-commerce Solutions',
      content: 'Perfect for product descriptions. The AI understands our brand voice and creates compelling copy that sells.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Agency',
      content: 'Our clients love the content quality. It saves us hours every week and the results speak for themselves.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Content Generator"
      description="Generate high-quality, SEO-optimized content for blogs, social media, marketing materials, and more using advanced AI models. Transform your content strategy with intelligent automation."
      icon={<Brain className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $29/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Content Generation"
      popular={true}
    />
  )
}

export default AIContentGeneratorPage