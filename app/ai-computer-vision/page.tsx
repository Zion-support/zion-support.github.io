import React from 'react'
import { Eye, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AIComputerVisionPage: React.FC = () => {
  const features = [
    'Image recognition and classification',
    'Object detection and tracking',
    'Facial recognition and analysis',
    'OCR and text extraction',
    'Video analysis and processing',
    'Quality inspection automation',
    'Medical image analysis',
    'Real-time video processing'
  ]

  const benefits = [
    {
      title: 'Automation',
      description: 'Automate visual tasks that previously required human intervention',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Accuracy',
      description: 'Achieve 99%+ accuracy in image recognition and analysis',
      icon: <Target className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Speed',
      description: 'Process images and videos 100x faster than manual methods',
      icon: <Clock className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduce visual inspection costs by up to 80%',
      icon: <DollarSign className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Quality Control',
      description: 'Automate product quality inspection in manufacturing',
      icon: '🔍'
    },
    {
      title: 'Security Systems',
      description: 'Implement facial recognition and surveillance systems',
      icon: '🔒'
    },
    {
      title: 'Medical Imaging',
      description: 'Analyze medical images for diagnosis and treatment',
      icon: '🏥'
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Enable computer vision for self-driving cars',
      icon: '🚗'
    },
    {
      title: 'Retail Analytics',
      description: 'Analyze customer behavior and store layouts',
      icon: '🛍️'
    },
    {
      title: 'Document Processing',
      description: 'Extract text and data from images and documents',
      icon: '📄'
    }
  ]

  const stats = [
    { number: '99%', label: 'Accuracy Rate' },
    { number: '100x', label: 'Faster Processing' },
    { number: '80%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Processing' }
  ]

  const testimonials = [
    {
      name: 'David Chen',
      company: 'Manufacturing Director',
      content: 'Quality control is now fully automated. Defect detection has improved by 95%.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'Security Manager',
      content: 'Facial recognition system is incredibly accurate. Security has never been better.',
      rating: 5
    },
    {
      name: 'John Smith',
      company: 'Medical Director',
      content: 'Medical image analysis has improved diagnosis accuracy significantly.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Computer Vision"
      description="Extract insights from images and videos with AI-powered computer vision. Automate quality control, enable facial recognition, and process visual data with intelligent computer vision solutions."
      icon={<Eye className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $299/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Computer Vision"
      popular={true}
    />
  )
}

export default AIComputerVisionPage