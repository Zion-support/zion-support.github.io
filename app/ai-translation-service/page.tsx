import React from 'react'
import { Link } from 'react-router-dom'
import { Brain, FileText, Clock, Target, Languages } from 'lucide-react'
import Layout from '../layout'

export default function AITranslationService() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'Neural Machine Translation',
      description: 'Advanced AI models provide contextually accurate translations in 100+ languages'
    },
    {
      icon: <FileText className="w-6 h-6 text-purple-400" />,
      title: 'Document Translation',
      description: 'Translate entire documents while preserving formatting, layout, and structure'
    },
    {
      icon: <Clock className="w-6 h-6 text-yellow-400" />,
      title: 'Real-time Translation',
      description: 'Instant translation for live conversations, meetings, and customer support'
    },
    {
      icon: <Target className="w-6 h-6 text-green-400" />,
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
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and individuals',
      features: [
        'Up to 10,000 words/month',
        '50+ languages',
        'Basic document translation',
        'Email support',
        'API access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100,000 words/month',
        '100+ languages',
        'Advanced document processing',
        'Priority support',
        'Custom terminology',
        'Quality assurance'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited words',
        'All languages',
        'Custom AI models',
        'Dedicated support',
        'White-label solution',
        'Custom integrations'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Anna Kowalski',
      company: 'Global Marketing Inc',
      content: 'The translation quality is exceptional. Our international campaigns now reach customers in their native languages perfectly.',
      rating: 5
    },
    {
      name: 'Carlos Mendez',
      company: 'Tech Solutions Ltd',
      content: 'Real-time translation during client meetings has been a game-changer. Communication barriers are completely eliminated.',
      rating: 5
    },
    {
      name: 'Yuki Tanaka',
      company: 'E-commerce Plus',
      content: 'Document translation with formatting preservation saved us countless hours. The AI understands context beautifully.',
      rating: 5
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Translation Service
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Break down language barriers with our advanced AI translation service. 
            Translate documents, websites, and conversations in real-time with 99% accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">
              Start Free Trial
            </button>
            <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Watch Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Advanced Translation Capabilities
          </h2>
          <p className="text-gray-300 text-center mb-12">
            Powered by cutting-edge AI to deliver accurate, context-aware translations
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Translation Features Grid */}
      <div className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Comprehensive Translation Solutions
          </h2>
          <p className="text-gray-300 text-center mb-12">
            Everything you need for professional translation services
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {translationFeatures.map((category, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 flex items-center">
                      <Languages className="w-4 h-4 text-blue-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-300 text-center mb-12">
            Choose the plan that fits your translation needs
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gray-800 p-8 rounded-lg border-2 relative ${plan.popular ? 'border-blue-400' : 'border-gray-700'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Languages className="w-5 h-5 text-blue-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                      : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Trusted by Global Companies
          </h2>
          <p className="text-gray-300 text-center mb-12">
            See how businesses worldwide are breaking language barriers
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Break Language Barriers?
          </h2>
          <p className="text-gray-300 mb-8">
            Join thousands of companies using AI translation to reach global audiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              Start Your Free Trial
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}