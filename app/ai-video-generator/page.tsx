'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  VideoCameraIcon, 
  CheckCircleIcon, 
  StarIcon,
  ArrowRightIcon,
  SparklesIcon,
  PhotoIcon,
  MicrophoneIcon,
  DocumentTextIcon,
  ClockIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

const AIVideoGeneratorPage: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('promotional');

  const features = [
    {
      icon: VideoCameraIcon,
      title: 'AI-Powered Video Creation',
      description: 'Generate professional videos from text prompts using advanced AI algorithms and machine learning.',
      benefits: ['Text-to-video generation', 'Smart scene composition', 'Automatic transitions', 'Professional quality']
    },
    {
      icon: PhotoIcon,
      title: 'Image-to-Video Conversion',
      description: 'Transform static images into dynamic videos with AI-powered animation and effects.',
      benefits: ['Static image animation', 'Motion graphics', 'Cinematic effects', 'Smooth transitions']
    },
    {
      icon: MicrophoneIcon,
      title: 'Voice Synthesis',
      description: 'Generate natural-sounding voiceovers in multiple languages with AI voice synthesis technology.',
      benefits: ['Natural voice generation', 'Multiple languages', 'Emotion control', 'Custom voice training']
    },
    {
      icon: DocumentTextIcon,
      title: 'Script Generation',
      description: 'Create compelling video scripts and storyboards using AI-powered content generation.',
      benefits: ['Auto script writing', 'Storyboard creation', 'Content optimization', 'SEO-friendly scripts']
    },
    {
      icon: CpuChipIcon,
      title: 'Smart Editing',
      description: 'Automatically edit and optimize videos with AI-powered cutting, transitions, and effects.',
      benefits: ['Auto editing', 'Smart cuts', 'Effect application', 'Quality optimization']
    },
    {
      icon: ClockIcon,
      title: 'Rapid Production',
      description: 'Create professional videos in minutes instead of hours with our streamlined AI workflow.',
      benefits: ['Fast rendering', 'Batch processing', 'Template library', 'One-click generation']
    }
  ];

  const videoTemplates = [
    {
      id: 'promotional',
      name: 'Promotional Videos',
      description: 'Create engaging promotional content for products and services',
      duration: '15-60 seconds',
      price: '$29',
      features: ['Product showcase', 'Call-to-action', 'Brand integration', 'Social media ready']
    },
    {
      id: 'educational',
      name: 'Educational Content',
      description: 'Generate informative and educational video content',
      duration: '2-10 minutes',
      price: '$49',
      features: ['Step-by-step tutorials', 'Infographic animations', 'Knowledge retention', 'Interactive elements']
    },
    {
      id: 'social',
      name: 'Social Media',
      description: 'Create viral content for social media platforms',
      duration: '15-30 seconds',
      price: '$19',
      features: ['Platform optimization', 'Trending formats', 'Engagement hooks', 'Mobile-first design']
    },
    {
      id: 'corporate',
      name: 'Corporate Videos',
      description: 'Professional corporate communications and presentations',
      duration: '1-5 minutes',
      price: '$79',
      features: ['Professional tone', 'Brand consistency', 'Executive presence', 'Meeting integration']
    }
  ];

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 29,
      period: 'month',
      description: 'Perfect for content creators',
      features: [
        '10 videos/month',
        'HD quality (1080p)',
        'Basic templates',
        '5 minutes max length',
        'Watermark included',
        'Email support',
        'Standard voice synthesis'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Professional',
      price: 79,
      period: 'month',
      description: 'Ideal for businesses',
      features: [
        '50 videos/month',
        '4K quality (2160p)',
        'Premium templates',
        '15 minutes max length',
        'No watermark',
        'Priority support',
        'Advanced voice synthesis',
        'Custom branding',
        'API access',
        'Batch processing'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 199,
      period: 'month',
      description: 'For large organizations',
      features: [
        'Unlimited videos',
        '8K quality (4320p)',
        'All templates',
        'Unlimited length',
        'White-label options',
        '24/7 support',
        'Custom voice training',
        'Dedicated account manager',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Marketing & Advertising',
      description: 'Create compelling ads and promotional content that converts',
      icon: '📢',
      examples: ['Product demos', 'Brand stories', 'Social media ads', 'Email campaigns']
    },
    {
      title: 'Education & Training',
      description: 'Develop engaging educational content and training materials',
      icon: '🎓',
      examples: ['Online courses', 'Tutorial videos', 'Training modules', 'Knowledge sharing']
    },
    {
      title: 'E-commerce',
      description: 'Showcase products and drive sales with dynamic video content',
      icon: '🛒',
      examples: ['Product showcases', 'How-to guides', 'Customer testimonials', 'Unboxing videos']
    },
    {
      title: 'Corporate Communications',
      description: 'Enhance internal and external communications with video',
      icon: '🏢',
      examples: ['Company updates', 'Team announcements', 'Client presentations', 'Recruitment videos']
    }
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      role: 'Marketing Director',
      company: 'BrandBoost Agency',
      content: 'Zion AI Video Generator has revolutionized our content creation process. We can now produce high-quality videos 10x faster than before.',
      rating: 5
    },
    {
      name: 'Robert Chen',
      role: 'E-learning Manager',
      company: 'EduTech Solutions',
      content: 'The AI-generated educational videos are incredibly engaging. Our students love the interactive content and completion rates have increased by 40%.',
      rating: 5
    },
    {
      name: 'Amanda Wilson',
      role: 'Content Creator',
      company: 'Social Media Pro',
      content: 'As a solo content creator, this tool has been a game-changer. I can now compete with larger agencies by producing professional videos quickly.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Video Generator - Zion Tech Group"
        description="Create professional videos with AI-powered video generation. Features text-to-video, image animation, voice synthesis, and smart editing capabilities."
        keywords="AI video generator, video creation, text to video, video AI, automated video, video marketing, content creation, video production"
        canonicalUrl="https://ziontechgroup.com/ai-video-generator"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
                <SparklesIcon className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-300 text-sm font-medium">AI-Powered Video Creation</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
                AI Video Generator
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Create professional videos in minutes with our advanced AI video generator. 
                Transform text, images, and ideas into stunning video content automatically.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-gray-300">
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span>10 free videos</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span>4K quality</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span>No watermark</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Templates Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Professional Video Templates
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our extensive library of AI-generated video templates
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {videoTemplates.map((template) => (
                <div key={template.id} className={`bg-slate-800 rounded-xl p-6 border-2 transition-all duration-300 hover:scale-105 ${
                  selectedTemplate === template.id ? 'border-purple-500' : 'border-slate-700'
                }`}>
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <VideoCameraIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{template.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{template.description}</p>
                    <div className="text-2xl font-bold text-purple-400 mb-2">{template.price}</div>
                    <div className="text-sm text-gray-500 mb-4">{template.duration}</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {template.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    selectedTemplate === template.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    {selectedTemplate === template.id ? 'Selected' : 'Select Template'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Powerful AI Video Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create professional videos with AI assistance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 border border-slate-700">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
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

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Perfect for Every Industry
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From marketing to education, create videos that engage and convert
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
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your video creation needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <div key={plan.id} className={`relative bg-slate-800 rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
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
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    {plan.id === 'enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Loved by Content Creators
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users have to say about their video creation experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-8 border border-slate-700">
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
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Start Creating Amazing Videos Today
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of creators who are already producing professional videos with AI assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            <div className="mt-8 text-purple-100">
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

export default AIVideoGeneratorPage;
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
        <title>Ai Video Generator - Zion Tech Group</title>
        <meta name="description" content="Professional ai video generator services and solutions by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Ai Video Generator
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional ai video generator services and solutions by Zion Tech Group.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              Our ai video generator services are currently under development. Contact us to learn more about our upcoming services.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
