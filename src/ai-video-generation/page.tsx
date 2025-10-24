import React from 'react'
import { Play } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
import { CheckCircle, Zap, Video } from 'lucide-react'

constAIVideoGenerationPage: React.FC= () =>{constfeatures= []
    'AI Video Creation',
    'Auto-editing',
    'Voice Synthesis',
    'Text-to-video',
    'Template Library',
    'Brand Customization',
    'Multi-language Support',
    'HD/4 K Export',
    'Real-time Preview',
    'Collaboration Tools'
  ]

  constbenefits= []
    '9 0% time savings',
    'Professional quality',
    'Unlimited videos',
    'Multi-language support',
    'No technical skills needed',
    'Cost-effective solution'
  ]

  constpricingPlans= [
    {
      name: 'Starter',
      price: '$19 9',
      period: '/month',
      features: ['10videos/month', 'HD quality', 'Basic templates', 'Email support'],
      popular: false
   },
    {name: 'Professional',
      price: '$39 9',
      period: '/month',
      features: ['Unlimited videos', '4 K quality', 'Premium templates', 'Voice cloning', 'Priority support'],
      popular: true
   },
    {name: 'Enterprise',
      price: '$79 9',
      period: '/month',
      features: ['Everything in Pro', 'Custom templates', 'API access', 'Dedicated support', 'White-label'],
      popular: false
    }
  ]

const Page = $2;
export default Page;