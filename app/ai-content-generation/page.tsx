import React from 'react'
import { Brain } from 'lucide-react'
import ServicePageTemplate from '../service-template'

export default function AIContentGenerationPage() {
  return (
    <ServicePageTemplate
      title="AI Content Generation"
      description="Transform your content strategy with our advanced AI-powered content generation tools. Create high-quality, engaging content at scale."
      icon={<Brain className="w-10 h-10 text-cyan-400" />}
      benefits={[
        'Generate high-quality content 10x faster',
        'Maintain consistent brand voice across all content',
        'Reduce content creation costs by 70%',
        'Scale content production without additional resources',
        'Improve SEO performance with optimized content'
      ]}
      features={[
        'Natural language processing',
        'Multi-language support',
        'Brand voice customization',
        'SEO optimization',
        'Content templates and formats',
        'Real-time collaboration tools'
      ]}
      pricing="Starting at $99/month"
      seoTitle="AI Content Generation - Zion Tech Group"
      seoDescription="Transform your content strategy with AI-powered content generation. Create high-quality, engaging content at scale with our advanced tools."
      seoKeywords="AI content generation, content creation, artificial intelligence, content marketing, automated content"
    />
  )
}
