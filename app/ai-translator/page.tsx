'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  GlobeAltIcon, 
  CheckCircleIcon, 
  StarIcon,
  ArrowRightIcon,
  SparklesIcon,
  DocumentTextIcon,
  MicrophoneIcon,
  CameraIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  ShieldCheckIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

const AITranslatorPage: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [translationText, setTranslationText] = useState('');

  const features = [
    {
      icon: GlobeAltIcon,
      title: '100+ Languages Supported',
      description: 'Translate between 100+ languages with high accuracy using advanced neural machine translation.',
      benefits: ['Global reach', 'Cultural accuracy', 'Context understanding', 'Regional dialects']
    },
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Translation',
      description: 'Advanced neural networks provide contextually accurate translations that preserve meaning and tone.',
      benefits: ['Natural translations', 'Context awareness', 'Tone preservation', 'Cultural sensitivity']
    },
    {
      icon: DocumentTextIcon,
      title: 'Document Translation',
      description: 'Translate entire documents while preserving formatting, structure, and professional terminology.',
      benefits: ['Format preservation', 'Batch processing', 'Professional accuracy', 'Multiple file formats']
    },
    {
      icon: MicrophoneIcon,
      title: 'Real-time Voice Translation',
      description: 'Convert speech to text and translate instantly with voice synthesis in target languages.',
      benefits: ['Live conversations', 'Voice synthesis', 'Accent recognition', 'Real-time processing']
    },
    {
      icon: CameraIcon,
      title: 'Image Translation',
      description: 'Extract text from images and translate it instantly using OCR and AI translation technology.',
      benefits: ['Visual text extraction', 'Instant translation', 'Multiple image formats', 'Mobile-friendly']
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Conversation Mode',
      description: 'Facilitate real-time conversations between people speaking different languages.',
      benefits: ['Bidirectional translation', 'Conversation flow', 'Context retention', 'Natural dialogue']
    }
  ];

  const supportedLanguages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'de', name: 'German', flag: '🇩🇪' },
    { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
    { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
    { code: 'ko', name: 'Korean', flag: '🇰🇷' },
    { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
    { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
    { code: 'ru', name: 'Russian', flag: '🇷🇺' },
    { code: 'it', name: 'Italian', flag: '🇮🇹' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳' }
  ];

  const pricingPlans = [
    {
      id: 'free',
      name: 'Free',
      price: 0,
      period: 'month',
      description: 'Perfect for personal use',
      features: [
        '1,000 characters/month',
        '10 languages',
        'Basic translation',
        'Text only',
        'Community support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Professional',
      price: 19,
      period: 'month',
      description: 'Ideal for professionals',
      features: [
        '50,000 characters/month',
        '100+ languages',
        'Advanced AI translation',
        'Document translation',
        'Voice translation',
        'Image translation',
        'Priority support',
        'API access',
        'Custom glossaries'
      ],
      popular: true
    },
    {
      id: 'business',
      name: 'Business',
      price: 49,
      period: 'month',
      description: 'For teams and businesses',
      features: [
        '200,000 characters/month',
        'All languages',
        'Premium AI models',
        'Batch processing',
        'Team collaboration',
        'White-label options',
        '24/7 support',
        'Advanced analytics',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'E-commerce',
      description: 'Translate product descriptions, customer reviews, and support content for global markets',
      icon: '🛒',
      examples: ['Product listings', 'Customer support', 'Marketing content', 'Legal documents']
    },
    {
      title: 'Travel & Tourism',
      description: 'Break language barriers for travelers and hospitality businesses worldwide',
      icon: '✈️',
      examples: ['Travel guides', 'Hotel information', 'Restaurant menus', 'Tourist attractions']
    },
    {
      title: 'Education',
      description: 'Make educational content accessible to students in their native languages',
      icon: '🎓',
      examples: ['Course materials', 'Research papers', 'Student communications', 'Academic resources']
    },
    {
      title: 'Healthcare',
      description: 'Ensure clear communication between healthcare providers and patients',
      icon: '🏥',
      examples: ['Medical records', 'Patient instructions', 'Research documents', 'Emergency communications']
    }
  ];

  const testimonials = [
    {
      name: 'Maria Gonzalez',
      role: 'E-commerce Manager',
      company: 'GlobalRetail Inc.',
      content: 'Zion AI Translator has helped us expand to 15 new markets. The translation quality is exceptional and our international sales have increased by 300%.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Content Manager',
      company: 'EduTech Solutions',
      content: 'We use the AI translator for our online courses. Students can now access content in their native language, significantly improving engagement.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Travel Blogger',
      company: 'Wanderlust Adventures',
      content: 'As a travel blogger, I need to communicate with locals everywhere I go. This translator has been a game-changer for my travels.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Translator - Zion Tech Group"
        description="Advanced AI-powered translation service supporting 100+ languages. Features real-time translation, document processing, voice translation, and image translation."
        keywords="AI translator, translation service, language translation, real-time translation, document translation, voice translation, multilingual support"
        canonicalUrl="https://ziontechgroup.com/ai-translator"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
                <SparklesIcon className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-300 text-sm font-medium">AI-Powered Translation</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
                AI Translator
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Break language barriers with our advanced AI translation service. 
                Translate text, documents, voice, and images in 100+ languages with unprecedented accuracy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  Try Live Demo
                </button>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-gray-300">
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span>100+ languages</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span>Real-time translation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span>Free tier available</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Translation Demo */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Try It Now
              </h2>
              <p className="text-xl text-gray-300">
                Experience the power of AI translation in real-time
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Source Language
                  </label>
                  <select 
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                  >
                    {supportedLanguages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.flag} {lang.name}
                      </option>
                    ))}
                  </select>
                  
                  <label className="block text-sm font-medium text-gray-300 mb-2 mt-6">
                    Enter text to translate
                  </label>
                  <textarea
                    className="w-full h-32 p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    placeholder="Type your text here..."
                    value={translationText}
                    onChange={(e) => setTranslationText(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Target Language
                  </label>
                  <select className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    {supportedLanguages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.flag} {lang.name}
                      </option>
                    ))}
                  </select>
                  
                  <label className="block text-sm font-medium text-gray-300 mb-2 mt-6">
                    Translation
                  </label>
                  <div className="w-full h-32 p-3 bg-slate-700 border border-slate-600 rounded-lg text-white">
                    {translationText ? (
                      <div className="text-green-400">
                        {translationText} → [AI Translation will appear here]
                      </div>
                    ) : (
                      <div className="text-gray-500">Translation will appear here...</div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300">
                  Translate Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Powerful Translation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need for accurate, fast, and professional translation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 border border-slate-700">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Languages */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                100+ Languages Supported
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Translate between any of these languages with high accuracy
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {supportedLanguages.map((lang) => (
                <div key={lang.code} className="bg-slate-800 rounded-lg p-4 text-center hover:bg-slate-700 transition-colors">
                  <div className="text-2xl mb-2">{lang.flag}</div>
                  <div className="text-white font-medium">{lang.name}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-400">And 90+ more languages...</p>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Perfect for Every Industry
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From e-commerce to healthcare, our AI translator adapts to your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {useCase.examples.map((example, idx) => (
                      <li key={idx}>• {example}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your translation needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <div key={plan.id} className={`relative bg-slate-800 rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-white mb-2">
                      ${plan.price}
                      <span className="text-lg text-gray-400">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    {plan.id === 'free' ? 'Get Started' : plan.id === 'business' ? 'Contact Sales' : 'Start Free Trial'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Trusted by Global Businesses
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users have to say about their translation experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Break Language Barriers Today
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join millions of users who trust our AI translator for accurate, fast, and professional translations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            <div className="mt-8 text-green-100">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
              <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AITranslatorPage;
'use client'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <div>
      <Head>
        <title>Ai Translator - Zion Tech Group</title>
        <meta name="description" content="Professional ai translator services and solutions by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Ai Translator
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional ai translator services and solutions by Zion Tech Group.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              Our ai translator services are currently under development. Contact us to learn more about our upcoming services.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
