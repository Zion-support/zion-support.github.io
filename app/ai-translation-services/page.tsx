import React from 'react';
import { Helmet } from 'react-helmet-async'
import { Globe, Zap, Shield, Users, CheckCircle, ArrowRight, BarChart3, Brain, FileText, Mic } from 'lucide-react'
import { Link } from 'react-router-dom'
export default AITranslationServicesPage;
const AITranslationServicesPage: React.FC = () => {
  const features = [
    {
      icon: <Globe className="w-5h-5ml-2" />,
      title: '100+ Languages',
      description: 'Support for over 100 languages with native-level accuracy and cultural context.'
    },
    {
      icon: <Zap className="w-5h-5ml-2" />,
      title: 'Real-time Translation',
      description: 'Instant translation for live conversations, meetings, and customer support.'
    },
    {
      icon: <Brain className="w-5h-5ml-2" />,
      title: 'AI-Powered Context',
      description: 'Advanced AI understands context, tone, and cultural nuances for accurate translations.'
    },
    {
      icon: <FileText className="w-5h-5ml-2" />,
      title: 'Document Translation',
      description: 'Translate documents, websites, and content while preserving formatting and structure.'
    },
    {
      icon: <Mic className="w-5h-5ml-2" />,
      title: 'Voice Translation',
      description: 'Convert speech to text and translate in real-time with natural voice synthesis.'
    },
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption for sensitive business communications.'
    }
  ]

  const useCases = [
    {
      title: 'Global Customer Support',
      description: 'Provide support in any language with instant translation and cultural adaptation.',
      icon: <Users className="w-5h-5ml-2" /></Users>
    },
    {
      title: 'Multilingual Content',
      description: 'Translate websites, apps, and marketing materials for global audiences.',
      icon: <FileText className="w-5h-5ml-2" /></FileText>
    },
    {
      title: 'International Meetings',
      description: 'Break down language barriers in real-time during video conferences and calls.',
      icon: <Globe className="w-5h-5ml-2" /></Globe>
    },
    {
      title: 'E-commerce Expansion',
      description: 'Expand to new markets with localized product descriptions and customer communications.',
      icon: <BarChart3 className="w-5h-5ml-2" /></BarChart3>
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 50,000 words/month',
        '50+ languages',
        'Basic API access',
        'Email support'
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 500,000 words/month',
        '100+ languages',
        'Real-time translation',
        'Priority support',
        'Custom integrations'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited words',
        'All languages',
        'Custom AI training',
        'Dedicated support',
        'White-label options'
      ],
      popular: false;
    }
  ]

  return (

        <>
      <title>AiTranslationServices - Zion Tech Group</title>
      
            <h1 className="text-4xl font-bold text-white mb-6">AiTranslationServices</h1>
            <p className="text-lg text-gray-300 mb-8">Professional aitranslationservices services coming soon.</p>

      </>
  );
}

