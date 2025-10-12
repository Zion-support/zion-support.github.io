import React from 'react'
import { Box, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AI3DGenerationPage: React.FC = () => {
  const features = [
    'AI-powered 3D model generation',
    'Text-to-3D conversion',
    'Image-to-3D reconstruction',
    '3D model optimization',
    'Texture and material generation',
    'Animation and rigging',
    '3D printing optimization',
    'Virtual reality integration'
  ]

  const benefits = [
    {
      title: 'Creative Speed',
      description: 'Generate 3D models 10x faster than traditional methods',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduce 3D modeling costs by up to 80%',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Quality',
      description: 'Create high-quality 3D models with professional results',
      icon: <Star className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Accessibility',
      description: 'Make 3D modeling accessible to non-technical users',
      icon: <Users className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Game Development',
      description: 'Create 3D assets and characters for video games',
      icon: '🎮'
    },
    {
      title: 'Architecture',
      description: 'Generate 3D architectural models and visualizations',
      icon: '🏗️'
    },
    {
      title: 'Product Design',
      description: 'Create 3D product prototypes and designs',
      icon: '📦'
    },
    {
      title: 'Virtual Reality',
      description: 'Generate 3D content for VR experiences',
      icon: '🥽'
    },
    {
      title: '3D Printing',
      description: 'Create optimized 3D models for printing',
      icon: '🖨️'
    },
    {
      title: 'Marketing',
      description: 'Generate 3D visualizations for marketing materials',
      icon: '📢'
    }
  ]

  const stats = [
    { number: '10x', label: 'Faster Generation' },
    { number: '80%', label: 'Cost Reduction' },
    { number: '95%', label: 'Quality Score' },
    { number: '24/7', label: 'Generation' }
  ]

  const testimonials = [
    {
      name: 'Alex Thompson',
      company: 'Game Developer',
      content: '3D asset creation is now 10x faster. The AI-generated models are incredibly detailed.',
      rating: 5
    },
    {
      name: 'Lisa Park',
      company: 'Architect',
      content: 'Architectural visualization has never been easier. The AI understands design intent perfectly.',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'Product Designer',
      content: 'Product prototyping is now automated and highly accurate. Design iteration is incredibly fast.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI 3D Generation"
      description="Create stunning 3D models with AI-powered generation. Transform text and images into 3D assets, optimize models for various applications, and accelerate 3D content creation."
      icon={<Box className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $199/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="3D & Visualization"
      popular={false}
    />
  )
}

export default AI3DGenerationPage