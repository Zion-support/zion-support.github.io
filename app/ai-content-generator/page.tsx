'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, PenTool, FileText, Image, Video, Mic, Globe, Zap, Users } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIContentGeneratorPage() {
  const features = [
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: 'AI Blog Writing',
      description: 'Generate high-quality blog posts, articles, and long-form content automatically.',
      benefits: ['SEO Optimized', 'Multiple Tones', 'Research Integration', 'Plagiarism Free']
    },
    {
      icon: <Image className="w-8 h-8 text-purple-500" />,
      title: 'Visual Content Creation',
      description: 'Create stunning images, infographics, and visual content with AI.',
      benefits: ['Custom Graphics', 'Brand Consistency', 'Multiple Formats', 'High Resolution']
    },
    {
      icon: <Video className="w-8 h-8 text-red-500" />,
      title: 'Video Content',
      description: 'Generate video scripts, captions, and even AI-powered video content.',
      benefits: ['Script Generation', 'Auto Captions', 'Video Editing', 'Multiple Languages']
    },
    {
      icon: <Mic className="w-8 h-8 text-green-500" />,
      title: 'Audio Content',
      description: 'Create podcasts, voiceovers, and audio content with AI voice synthesis.',
      benefits: ['Natural Voices', 'Multiple Languages', 'Custom Voices', 'Audio Editing']
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Multi-Language Support',
      description: 'Generate content in 50+ languages with cultural adaptation.',
      benefits: ['50+ Languages', 'Cultural Adaptation', 'Local SEO', 'Regional Optimization']
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Real-time Generation',
      description: 'Generate content instantly with our high-speed AI processing.',
      benefits: ['Instant Results', 'Batch Processing', 'API Integration', 'Real-time Updates']
    }
  ]

  const contentTypes = [
    'Blog Posts & Articles',
    'Social Media Content',
    'Email Marketing',
    'Product Descriptions',
    'Ad Copy & Headlines',
    'Website Content',
    'Press Releases',
    'Technical Documentation',
    'Creative Writing',
    'Educational Content'
  ]

  const pricing = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '10,000 words/month',
        'Basic templates',
        'Standard quality',
        'Email support',
        '5 languages'
      ],
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for content teams',
      features: [
        '50,000 words/month',
        'Premium templates',
        'High quality output',
        'Priority support',
        '25 languages',
        'API access'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited words',
        'Custom templates',
        'Highest quality',
        'Dedicated support',
        'All languages',
        'White-label options'
      ],
      cta: 'Contact Sales'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Content Generator - Zion Tech Group</title>
        <meta name="description" content="Advanced AI content generator for blogs, social media, marketing copy, and more. Create high-quality content at scale with our intelligent writing assistant." />
        <meta name="keywords" content="AI content generator, content creation, blog writing, social media content, marketing copy, AI writing" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl">
                  <PenTool className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Content Generator</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Create high-quality content at scale with our advanced AI writing assistant. Generate blogs, social media posts, marketing copy, and more in seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Creating Content
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="#demo"
                  className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  Try Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Content Creation Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI content generator provides everything you need to create engaging, high-quality content across all platforms.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Content Types We Generate</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Create any type of content you need with our versatile AI content generator.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {contentTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-white font-semibold text-sm">{type}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your content creation needs. All plans include our core AI capabilities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${plan.popular ? 'border-purple-400 ring-2 ring-purple-400' : 'border-white/20'} hover:bg-white/15 transition-all duration-300`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Start Creating Amazing Content Today</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of content creators, marketers, and businesses using our AI content generator.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <PenTool className="w-5 h-5 mr-2" />
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}