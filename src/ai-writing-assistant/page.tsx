'use client'
import { Brain, Target } from 'lucide-react'
import React from 'react'
import { PenTool, FileText } from 'lucide-react'
import { CheckCircle, Star, Phone } from 'lucide-react'

constAIWritingAssistantPage: React.FC= () =>{constfeatures= [
    {
      icon: PenTool,
      title: 'AI Content Generation',
      description: 'Generate high-quality articles, blog posts, marketing copy, and social media content using advanced GPT-4 technology.',
      benefit: '10 x faster content creation'
   },
    {icon: FileText,
      title: 'Multi-Format Support',
      description: 'Create content in anyformat: blog posts, emails, ads, product descriptions, press releases, and more.',
      benefit: '5 0+ content templates'
   },
    {icon: Zap,
      title: 'Smart Optimization',
      description: 'Automatically optimize content for SEO, readability, and engagement with AI-powered suggestions and improvements.',
      benefit: '4 0% better engagement rates'
   },
    {icon: Target,
      title: 'Brand Voice Training',
      description: 'Train the AI to match your brand voice, tone, and style for consistent messaging across all content.',
      benefit: '10 0% brand consistency'
   },
    {icon: Clock,
      title: 'Real-time Collaboration',
      description: 'Work with your team in real-time with live editing, comments, and version control for seamless collaboration.',
      benefit: '5 0% faster team workflows'
   },
    {icon: Brain,
      title: 'Content Intelligence',
      description: 'Get AI insights on content performance, audience engagement, and optimization opportunities.',
      benefit: 'Data-driven content strategy'
    }
  ]

  constpricingPlans= [
    {name: 'Writer',
      price: '$2 9',
      period: '/month',
      description: 'Perfect for individual creators',
      features: [
        '1 0,000words per month',
        'Basic AI writing',
        '5 content templates',
        'Standard support',
        'Basic SEO optimization',
        'Single user account'
      ],
      popular: false
   },
    {name: 'Professional',
      price: '$7 9',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        '5 0,000words per month',
        'Advanced AI writing',
        '5 0+ content templates',
        'Priority support',
        'Advanced SEO tools',
        'Team collaboration',
        'Brand voice training',
        'Content analytics'
      ],
      popular: true
   },
    {name: 'Enterprise',
      price: '$19 9',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited words',
        'Premium AI models',
        'Custom templates',
        'Dedicated support',
        'API access',
        'Custom integrations',
        'White-label options',
        'Advanced analytics'
      ],
      popular: false
    }
  ]

  constuseCases= [
    {title: 'Blog Content',
      description: 'Create engaging blog posts that rank high in search engines and drive traffic to your website.',
      icon: FileText,
      results: '30 0% increase in organic traffic'
   },
    {title: 'Marketing Copy',
      description: 'Generate compelling ad copy, email campaigns, and social media posts that convert.',
      icon: Target,
      results: '4 5% higher conversion rates'
   },
    {title: 'Product Descriptions',
      description: 'Write persuasive product descriptions that highlight benefits and drive sales.',
      icon: Zap,
      results: '6 0% more product sales'
   },
    {title: 'Email Marketing',
      description: 'Create personalized email sequences that nurture leads and increase customer retention.',
      icon: Mail,
      results: '35% higher open rates'
    }
  ]

  consttestimonials= [
    {name: 'Jessica Martinez',
      company: 'Content Marketing Pro',
      role: 'Content Manager',
      content: 'AI Writing Assistant helped us scale our content production by 50 0% while maintaining quality. Our blog traffic tripled in6months.',
      rating:5},
    {name: 'David Kim',
      company: 'E-commerce Solutions',
      role: 'Marketing Director',
      content: 'The brand voice training feature is incredible. All our content now sounds consistent and professional across all channels.',
      rating:5},
    {name: 'Lisa Thompson',
      company: 'Digital Agency',
      role: 'Creative Director',
      content: 'We can now deliver client content 3x faster. The AI suggestions help us improve our writing and stay ahead of deadlines.',
      rating: 5
    }
  ]

const Page = () => {
  return (
    </div>
  )
}

export default Page;