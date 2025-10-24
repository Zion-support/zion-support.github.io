'use client'
import { Brain, BarChart } from 'lucide-react'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Zap, Brain, Eye, BarChart } from 'lucide-react'

constAIContentGenerationPage: React.FC= () =>{constcontentServices= [
    {
      title: 'AI Blog Content Generator Pro',
      description: 'Advanced AI-powered blog content creation with SEO optimization, research integration, and brand voice consistency.',
      icon: '✍️',
      price: '$19 9/month',
      features: ['SEO-optimized content', 'Brand voice consistency', 'Research integration', 'Multi-format output'],
      popular: true
   },
    {title: 'Social Media Content Suite',
      description: 'Create engaging social media posts, captions, and hashtags across all platforms with AI-powered optimization.',
      icon: '📱',
      price: '$14 9/month',
      features: ['Platform-specific content', 'Hashtag optimization', 'Visual content ideas', 'Engagement analytics'],
      popular: false
   },
    {title: 'Email Marketing AI',
      description: 'Generate compelling email campaigns, subject lines, and personalized content that converts.',
      icon: '📧',
      price: '$17 9/month',
      features: ['Subject line optimization', 'Personalization', 'A/B testing', 'Conversion tracking'],
      popular: false
   },
    {title: 'E-commerce Product Descriptions',
      description: 'Create compelling product descriptions, reviews, and marketing copy that drives sales.',
      icon: '🛍️',
      price: '$12 9/month',
      features: ['Product descriptions', 'Review generation', 'Marketing copy', 'SEO optimization'],
      popular: false
    }
  ]
  const processSteps = [
    {
      step: '1',
      title: 'Input Your Requirements',
      description: 'Tell us about your brand, target audience, and content goals.',
     icon:<BrainclassName=&quot;w-6h-6&quot; />},
    {step: '2',
      title: 'AI Content Generation',
      description: 'Our AI creates high-quality, engaging content tailored to your needs.',
     icon:<ZapclassName=&quot;w-6h-6&quot; />},
    {step: '3',
      title: 'Review & Refine',
      description: 'Review the generated content and make any necessary adjustments.',
     icon:<EyeclassName=&quot;w-6h-6&quot; />},
    {step: '4',
      title: 'Publish & Monitor',
      description: 'Publish your content and monitor performance with detailed analytics.',
      icon: <BarChart className=&quot;w-6 h-6&quot; />
    }
  ]
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Page
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  )
}
export default AIContentGenerationPage
