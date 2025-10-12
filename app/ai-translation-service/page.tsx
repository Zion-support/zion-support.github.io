import React from 'react'
import { Link } from 'react-router-dom'

import {Languages} from 'lucide-react';

import Layout from '../layout'

import React from 'react';

import { Link } from 'react-router-dom';
import {Languages} from 'lucide-react';
import Layout from '../layout';

export default function AITranslationService() {
  const features = [

      icon: <Brain className="w-6h-6text-cyan-400" />,
      title: 'Neural Machine Translation',
      description: 'Advanced AI models provide contextually accurate translations in 100+ languages'
    },
      icon: <FileText className="w-6h-6text-purple-400" />,
      title: 'Document Translation',
      description: 'Translate entire documents while preserving formatting, layout, and structure'
    },
      icon: <Clock className="w-6h-6text-yellow-400" />,
      title: 'Real-time Translation',
      description: 'Instant translation for live conversations, meetings, and customer support'
    },
      icon: <Target className="w-6h-6text-green-400" />,

      title: 'Industry-Specific Translation',
      description: 'Specialized translation models for legal, medical, technical, and business content'
  ]

  const translationFeatures = [
      category: 'Translation Types',
      items: ['Text Translation', 'Document Translation', 'Website Translation', 'Audio Translation', 'Video Subtitles', 'Live Translation']
    },
      category: 'Languages',
      items: ['100+ Languages', 'Regional Dialects', 'Rare Languages', 'Sign Language', 'Technical Jargon', 'Cultural Adaptation']
    },
      category: 'Quality Assurance',
      items: ['Human Review', 'Quality Scoring', 'Consistency Checks', 'Terminology Management', 'Style Guides', 'Proofreading']
    },
      category: 'Integration',
      items: ['API Access', 'CMS Integration', 'Website Widgets', 'Mobile Apps', 'Desktop Software', 'Cloud Storage']
  ]

  const pricingPlans = [
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
      popular: false
    },
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
      popular: true
    },
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
      popular: false
  ]

  const testimonials = [
      name: 'Maria Santos',
      company: 'Global Marketing Agency',
      content: 'AI Translation Service helped us expand to 15 new markets. The quality is exceptional and cost-effective.',
      rating: 5
    },
      name: 'James Wilson',
      company: 'E-learning Platform',
      content: 'Translating our courses into 8 languages was seamless. The educational content translation is spot-on.',
      rating: 5
    },
      name: 'Lisa Chen',
      company: 'Legal Firm',
      content: 'The legal translation accuracy is impressive. Our international clients are very satisfied with the service.',
      rating: 5
  ]

  return (

        {/* Hero Section */
    
                AI-Powered Translation

              <h1 className="text-4 xl sm:text-5 xl md:text-6 xl font-boldtext-whitemb-6">AI Translation Service

              Transform your global communication with AI-powered translation in 100+ languages. 
                Professional quality, real-time translation, and industry-specific solutions.
    
                  Start Free Trial

                <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Try Demo

        {/* Features Section */
    
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-whitemb-4">Intelligent Translation Solutions
                AI-powered features that break down language barriers and enable global communication

 (

                    {feature.icon
    
                    <h3 className="text-xl font-semiboldtext-whiteml-3">{feature.title}</h3>

                  <p className="text-gray-300">{feature.description}</p>

              ))

        {/* Translation Features */
    
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-whitemb-4">Complete Translation Platform
                Everything you need to translate content across languages and cultures

 (
    
                  <h3 className="text-xl font-semiboldtext-whitemb-4">{feature.category}</h3>
 (

                        {item
                    ))

              ))

        {/* Pricing Section */
    
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-whitemb-4">Flexible Pricing Plans
                Choose the plan that fits your translation needs

 (
                  {plan.popular && (

                      Most Popular
                  )

                  <h3 className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                  <p className="text-gray-300mb-6">{plan.description}</p>
                    <span className="text-4 xlfont-boldtext-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
 (

                        {feature
                    ))
                  
                    to="/contact"
                    className="{`w-full" block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-amber-500 to-purple-600 text-white hover:from-amber-600 hover:to-purple-700'
                        : 'border-2 border-amber-400 text-amber-400 hover: bg-amber-400/10'
                    }`

Get Started
    
              ))

        {/* Testimonials */
    
              <h2 className="text-3 xl font-boldtext-whitemb-4">Trusted by Global Businesses
                See how our AI Translation Service enables global communication

 (

 (
                    ))

                  <p className="text-gray-300mb-4">"{testimonial.content}"</p>
                    <div className="font-semiboldtext-white">{testimonial.name}</div>
                    <div className="text-smtext-gray-400">{testimonial.company}</div>

              ))

        {/* CTA Section */
    
              <h2 className="text-3 xl font-boldtext-whitemb-4">Break Down Language Barriers Today
                Join thousands of businesses using AI Translation Service to reach global audiences

                <Link to="/contact" className="bg-gradient-to-r from-amber-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-purple-700transition-allduration-300">Start Your Free Trial
                <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Learn More
  )
