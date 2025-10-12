import React from 'react'
import { PenTool, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AIContentWriterPage: React.FC = () => {
  const features = [
    'Multi-format content creation',
    'SEO optimization',
    'Brand voice training',
    'Content templates library',
    'Plagiarism detection',
    'Grammar and style checking',
    'Multi-language support',
    'Content scheduling and publishing'
  ]

  const benefits = [
    {
      title: 'Content Quality',
      description: 'Generate high-quality, engaging content that resonates with your audience',
      icon: <Star className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Time Efficiency',
      description: 'Create content 10x faster than traditional writing methods',
      icon: <Clock className="w-6 h-6 text-green-500" />
    },
    {
      title: 'SEO Optimization',
      description: 'Automatically optimize content for search engines and better rankings',
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Cost Effective',
      description: 'Reduce content creation costs by up to 80%',
      icon: <DollarSign className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Blog Writing',
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
      description: 'Write persuasive marketing copy that converts prospects',
      icon: '📢'
    },
    {
      title: 'Product Descriptions',
      description: 'Create detailed, compelling product descriptions',
      icon: '🛍️'
    },
    {
      title: 'Email Marketing',
      description: 'Craft personalized email campaigns that engage subscribers',
      icon: '📧'
    },
    {
      title: 'Website Content',
      description: 'Generate website content that ranks and converts visitors',
      icon: '🌐'
    }
  ]

  const stats = [
    { number: '50,000+', label: 'Articles Written' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '80%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Content Creation' }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Content Marketing Manager',
      content: 'Our content output has increased 5x while maintaining quality. The AI understands our brand perfectly.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'E-commerce Director',
      content: 'Product descriptions are now compelling and SEO-optimized. Sales have increased significantly.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Marketing Agency',
      content: 'Client content is now produced faster and better. The AI has become our secret weapon.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Content Writer"
      description="Create high-quality, engaging content with AI-powered writing assistance. Generate blogs, social media posts, marketing copy, and more with intelligent content creation tools."
      icon={<PenTool className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $29/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Content Creation"
      popular={true}
    />
  )
}

export default AIContentWriterPage