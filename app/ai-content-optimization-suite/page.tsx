'use client'
import React from 'react'
import { PenTool, Target, TrendingUp, CheckCircle, Star, ArrowRight, Shield, Zap, BarChart, Cpu, Smartphone, Globe, Lock, Settings, FileText, Calendar, Phone, Mail, MapPin, Eye, Users, MessageCircle, Search, Edit3, Image, Video, Music, BookOpen, Zap as ZapIcon } from 'lucide-react'

const AiContentOptimizationSuite: React.FC = () => {
  const features = [
    {
      icon: PenTool,
      title: 'AI Content Generation',
      description: 'Generate high-quality, SEO-optimized content for blogs, social media, and marketing campaigns using advanced GPT models.',
      benefits: ['SEO-optimized content', 'Multiple content types', 'Brand voice consistency', 'Plagiarism-free content']
    },
    {
      icon: Target,
      title: 'Content Performance Analytics',
      description: 'Track and analyze content performance across all channels with detailed insights and recommendations for improvement.',
      benefits: ['Real-time analytics', 'Performance tracking', 'ROI measurement', 'A/B testing insights']
    },
    {
      icon: Search,
      title: 'SEO Optimization Engine',
      description: 'Automatically optimize content for search engines with keyword research, density analysis, and ranking predictions.',
      benefits: ['Keyword research', 'SEO scoring', 'Ranking predictions', 'Competitor analysis']
    },
    {
      icon: Edit3,
      title: 'Content Editing & Enhancement',
      description: 'AI-powered editing tools that improve readability, grammar, tone, and overall content quality.',
      benefits: ['Grammar checking', 'Readability improvement', 'Tone optimization', 'Style suggestions']
    }
  ]

  const contentTypes = [
    {
      icon: BookOpen,
      title: 'Blog Posts & Articles',
      description: 'Long-form content optimized for search engines and reader engagement',
      price: '$0.10/word'
    },
    {
      icon: MessageCircle,
      title: 'Social Media Content',
      description: 'Engaging posts for Facebook, Twitter, LinkedIn, and Instagram',
      price: '$2.50/post'
    },
    {
      icon: FileText,
      title: 'Email Marketing',
      description: 'High-converting email campaigns and newsletters',
      price: '$5.00/email'
    },
    {
      icon: Video,
      title: 'Video Scripts',
      description: 'Compelling scripts for YouTube, TikTok, and marketing videos',
      price: '$15.00/script'
    },
    {
      icon: Image,
      title: 'Ad Copy & Headlines',
      description: 'High-converting ad copy for Google, Facebook, and other platforms',
      price: '$3.00/ad'
    },
    {
      icon: Music,
      title: 'Product Descriptions',
      description: 'Compelling product descriptions that drive sales',
      price: '$1.50/description'
    }
  ]

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and content creators',
      features: [
        '10,000 words/month',
        'Basic SEO optimization',
        '5 social media posts/month',
        'Email support',
        'Standard templates',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses and marketing teams',
      features: [
        '50,000 words/month',
        'Advanced SEO optimization',
        'Unlimited social media posts',
        'Priority support',
        'Custom templates',
        'Advanced analytics',
        'A/B testing',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited words',
        'Full SEO suite',
        'White-label solution',
        '24/7 dedicated support',
        'Custom integrations',
        'Advanced AI models',
        'API access',
        'Dedicated account manager'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      role: 'Content Marketing Manager, DigitalFlow',
      content: 'AI Content Optimization Suite increased our organic traffic by 280% and reduced content creation time by 70%. The SEO optimization is incredibly effective.',
      rating: 5,
      company: 'DigitalFlow'
    },
    {
      name: 'Marcus Thompson',
      role: 'Founder, StartupHub',
      content: 'This tool has been a game-changer for our content strategy. We went from struggling to create consistent content to publishing 3x more with better engagement.',
      rating: 5,
      company: 'StartupHub'
    },
    {
      name: 'Lisa Park',
      role: 'VP Marketing, TechCorp',
      content: 'The AI-generated content is so good that our readers can\'t tell the difference. Our conversion rates have improved by 150% since implementing this solution.',
      rating: 5,
      company: 'TechCorp'
    }
  ]

  const successMetrics = [
    {
      metric: '280%',
      label: 'Increase in Organic Traffic',
      icon: TrendingUp
    },
    {
      metric: '70%',
      label: 'Reduction in Content Creation Time',
      icon: ZapIcon
    },
    {
      metric: '150%',
      label: 'Improvement in Conversion Rates',
      icon: Target
    },
    {
      metric: '95%',
      label: 'SEO Score Improvement',
      icon: BarChart
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 mb-6">
              <PenTool className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-400 font-medium">AI-Powered Content Creation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Content Optimization
              <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Suite
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create, optimize, and scale high-quality content with our advanced AI-powered platform. 
              Generate SEO-optimized content, track performance, and drive engagement across all channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{item.metric}</div>
                <div className="text-gray-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge AI to create, optimize, and scale your content strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Create Any Type of Content
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From blog posts to social media content, our AI can create any type of content you need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                    <type.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{type.title}</h3>
                    <p className="text-purple-400 font-semibold">{type.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your content needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border ${
                tier.popular ? 'border-purple-400 ring-2 ring-purple-400/20' : 'border-white/10'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-300 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transform hover:scale-105' 
                    : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                }`}>
                  {tier.popular ? 'Start Free Trial' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of content creators and marketers using our AI platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-purple-400 text-sm">{testimonial.role}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start creating high-quality, SEO-optimized content with AI today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Contact Sales
            </button>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-gray-300">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-purple-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AiContentOptimizationSuite