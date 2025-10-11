'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Star, Users, Clock, Shield, Globe, FileText, Brain, Target, TrendingUp } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

const AIContentWriterPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Writing',
      description: 'Advanced GPT-4 and Claude AI models for high-quality content generation',
      benefits: ['GPT-4 Integration', 'Claude AI Support', 'Custom AI Training', 'Multi-Language Support']
    },
    {
      icon: <Target className="w-6 h-6 text-purple-400" />,
      title: 'SEO Optimization',
      description: 'Built-in SEO tools to ensure your content ranks high in search engines',
      benefits: ['Keyword Research', 'Meta Tags Generation', 'Content Scoring', 'Competitor Analysis']
    },
    {
      icon: <FileText className="w-6 h-6 text-green-400" />,
      title: 'Multiple Formats',
      description: 'Generate content in various formats for different platforms and purposes',
      benefits: ['Blog Posts', 'Social Media', 'Email Campaigns', 'Product Descriptions']
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-orange-400" />,
      title: 'Analytics & Insights',
      description: 'Track content performance and get insights to improve your strategy',
      benefits: ['Performance Metrics', 'Engagement Tracking', 'ROI Analysis', 'Content Suggestions']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and individual creators',
      features: [
        '10,000 words/month',
        '5 AI models access',
        'Basic SEO tools',
        'Email support',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and content teams',
      features: [
        '50,000 words/month',
        'All AI models access',
        'Advanced SEO tools',
        'Priority support',
        'Custom templates',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with high content needs',
      features: [
        'Unlimited words',
        'Premium AI models',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const useCases = [
    {
      title: 'Blog Content Creation',
      description: 'Generate engaging blog posts that drive traffic and engagement',
      icon: <FileText className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Social Media Marketing',
      description: 'Create compelling social media posts for all platforms',
      icon: <Globe className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Email Marketing',
      description: 'Write effective email campaigns that convert',
      icon: <Target className="w-8 h-8 text-green-400" />
    },
    {
      title: 'E-commerce Content',
      description: 'Generate product descriptions and marketing copy',
      icon: <TrendingUp className="w-8 h-8 text-orange-400" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Content Writer - Advanced AI Writing Tool | Zion Tech Group</title>
        <meta name="description" content="Transform your content creation with our AI-powered writing tool. Generate high-quality, SEO-optimized content for blogs, social media, and marketing campaigns. Starting at $29/month." />
        <meta name="keywords" content="AI content writer, content generation, AI writing tool, SEO content, blog writing, social media content" />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Content Writer</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your content creation with our advanced AI-powered writing tool. Generate high-quality, SEO-optimized content for blogs, social media, email campaigns, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-20">
              <div className="text-center px-2 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-2">10M+</div>
                <div className="text-gray-300 text-xs sm:text-sm">Words Generated</div>
              </div>
              <div className="text-center px-2 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-2">50K+</div>
                <div className="text-gray-300 text-xs sm:text-sm">Active Users</div>
              </div>
              <div className="text-center px-2 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-gray-300 text-xs sm:text-sm">User Satisfaction</div>
              </div>
              <div className="text-center px-2 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300 text-xs sm:text-sm">AI Processing</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to create exceptional content with AI assistance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Perfect For</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Whether you're a blogger, marketer, or business owner, our AI content writer adapts to your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {useCases.map((useCase, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your content creation needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25' 
                    : 'border-white/20'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-2" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Content?</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join thousands of content creators who are already using AI to produce better content faster.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/micro-saas" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View All Tools
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default AIContentWriterPage