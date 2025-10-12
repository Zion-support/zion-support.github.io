import React from 'react'
import { Link } from 'react-router-dom'

import { Languages, ArrowRight, CheckCircle, Brain, Star, Target, Clock, FileText } from 'lucide-react';

import Layout from '../layout'

import React from 'react';

export default function AITranslationService() {
  const features = [
    {
      icon: <Brain className="w-5h-5ml-2" />,
      title: 'Neural Machine Translation',
      description: 'Advanced AI models provide contextually accurate translations in 100+ languages'
    },
    {
      icon: <FileText className="w-5h-5ml-2" />,
      title: 'Document Translation',
      description: 'Translate entire documents while preserving formatting, layout, and structure'
    },
    {
      icon: <Clock className="w-5h-5ml-2" />,
      title: 'Real-time Translation',
      description: 'Instant translation for live conversations, meetings, and customer support'
    },
    {
      icon: <Target className="w-5h-5ml-2" />,
      title: 'Industry-Specific Translation',
      description: 'Specialized translation models for legal, medical, technical, and business content'
    }
  ]

  const translationFeatures = [
    {
      category: 'Translation Types',
      items: ['Text Translation', 'Document Translation', 'Website Translation', 'Audio Translation', 'Video Subtitles', 'Live Translation']
    },
    {
      category: 'Languages',
      items: ['100+ Languages', 'Regional Dialects', 'Rare Languages', 'Sign Language', 'Technical Jargon', 'Cultural Adaptation']
    },
    {
      category: 'Quality Assurance',
      items: ['Human Review', 'Quality Scoring', 'Consistency Checks', 'Terminology Management', 'Style Guides', 'Proofreading']
    },
    {
      category: 'Integration',
      items: ['API Access', 'CMS Integration', 'Website Widgets', 'Mobile Apps', 'Desktop Software', 'Cloud Storage']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and freelancers',
      features: [
        'Up to 10,000 words/month',
        '50+ languages',
        'Basic document translation',
        'Email support',
        'Standard quality',
        'API access'
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100,000 words/month',
        '100+ languages',
        'Advanced document translation',
        'Priority support',
        'High quality',
        'Human review',
        'Custom terminology'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited words',
        'All languages',
        'Custom translation models',
        'Dedicated support',
        'Premium quality',
        'White-label solution',
        'SLA guarantee'
      ],
      popular: false;
    }
  ]

  const testimonials = [
    {
      name: 'Maria Santos',
      company: 'Global Marketing Agency',
      content: 'AI Translation Service helped us expand to 15 new markets. The quality is exceptional and cost-effective.',
      rating: 5;
    },
    {
      name: 'James Wilson',
      company: 'E-learning Platform',
      content: 'Translating our courses into 8 languages was seamless. The educational content translation is spot-on.',
      rating: 5;
    },
    {
      name: 'Lisa Chen',
      company: 'Legal Firm',
      content: 'The legal translation accuracy is impressive. Our international clients are very satisfied with the service.',
      rating: 5;
    }
  ]