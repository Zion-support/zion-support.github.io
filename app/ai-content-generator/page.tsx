import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, FileText, Zap, Brain, CheckCircle, Star, Users, Clock, Target, BarChart3, Globe, Shield, Sparkles, PenTool, Image, Video, Mic, Code, Mail, MessageSquare, Calendar, DollarSign } from 'lucide-react'

const AIContentGeneratorPage: React.FC = () => {
  const features = [
    {
      icon: <FileText className="w-6 h-6 text-cyan-400" />,
      title: 'Multi-Format Content',
      description: 'Generate blogs, articles, social media posts, emails, and more with AI-powered writing assistance.'
    },
    {
      icon: <Brain className="w-6 h-6 text-emerald-400" />,
      title: 'AI-Powered Intelligence',
      description: 'Advanced natural language processing that understands context and creates human-like content.'
    },
    {
      icon: <Target className="w-6 h-6 text-purple-400" />,
      title: 'SEO Optimization',
      description: 'Automatically optimize content for search engines with keyword integration and meta descriptions.'
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-400" />,
      title: 'Multi-Language Support',
      description: 'Generate content in 50+ languages with cultural context and localization features.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-pink-400" />,
      title: 'Performance Analytics',
      description: 'Track content performance with detailed analytics and engagement metrics.'
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: 'Plagiarism Detection',
      description: 'Built-in plagiarism checker ensures 100% original content every time.'
    }
  ]

  const contentTypes = [
    {
      icon: <FileText className="w-8 h-8 text-cyan-400" />,
      title: 'Blog Posts & Articles',
      description: 'Long-form content with research-backed insights and engaging narratives.',
      price: '$0.10/word',
      features: ['SEO optimized', 'Research integration', 'Multiple tones', 'Fact-checking']
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-emerald-400" />,
      title: 'Social Media Content',
      description: 'Platform-specific content for Twitter, LinkedIn, Instagram, and Facebook.',
      price: '$0.05/post',
      features: ['Platform optimization', 'Hashtag suggestions', 'Visual descriptions', 'Engagement hooks']
    },
    {
      icon: <Mail className="w-8 h-8 text-purple-400" />,
      title: 'Email Marketing',
      description: 'Compelling email campaigns with subject lines and personalized content.',
      price: '$0.15/email',
      features: ['A/B testing', 'Personalization', 'Call-to-action optimization', 'Mobile-friendly']
    },
    {
      icon: <Video className="w-8 h-8 text-orange-400" />,
      title: 'Video Scripts',
      description: 'Engaging video scripts for YouTube, TikTok, and marketing videos.',
      price: '$0.20/script',
      features: ['Hook optimization', 'Visual cues', 'Timing notes', 'Call-to-action']
    },
    {
      icon: <Code className="w-8 h-8 text-pink-400" />,
      title: 'Technical Documentation',
      description: 'Clear, comprehensive technical docs and API documentation.',
      price: '$0.25/page',
      features: ['Code examples', 'Step-by-step guides', 'Troubleshooting', 'Version control']
    },
    {
      icon: <PenTool className="w-8 h-8 text-blue-400" />,
      title: 'Creative Writing',
      description: 'Stories, poems, and creative content with emotional intelligence.',
      price: '$0.30/word',
      features: ['Character development', 'Plot structure', 'Emotional depth', 'Style adaptation']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small businesses',
      features: [
        '10,000 words/month',
        '5 content types',
        'Basic SEO optimization',
        'Email support',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '50,000 words/month',
        'All content types',
        'Advanced SEO tools',
        'Priority support',
        'Custom templates',
        'Team collaboration',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Unlimited words',
        'All features included',
        'Custom AI training',
        'Dedicated support',
        'API access',
        'White-label options',
        'Custom integrations'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Content Marketing Pro',
      content: 'Zion Tech Group\'s AI Content Generator has revolutionized our content strategy. We\'ve increased our content output by 300% while maintaining quality.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'TechStart Inc.',
      content: 'The SEO optimization features are incredible. Our organic traffic has grown by 150% since we started using their AI content generator.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Agency Co.',
      content: 'The multi-language support has helped us expand globally. We can now create content for clients in 20+ countries effortlessly.',
      rating: 5
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Content Generator - Advanced AI Writing Assistant | Zion Tech Group</title>
        <meta name="description" content="Transform your content strategy with our AI-powered content generator. Create blogs, social media posts, emails, and more with 99% accuracy and SEO optimization." />
        <meta name="keywords" content="AI content generator, content creation, AI writing, blog writing, social media content, email marketing, SEO content" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-content-generator" />
      </Helmet>

      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <Brain className="w-4 h-4" />
              <span>AI-Powered Content Creation</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Advanced <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Content Generator</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Create high-quality, SEO-optimized content at scale with our advanced AI writing assistant. 
              From blog posts to social media content, transform your content strategy with artificial intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>Watch Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Everything you need to create compelling, high-quality content at scale.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Content <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Types</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Generate any type of content you need with our versatile AI writing assistant.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentTypes.map((type, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        {type.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {type.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">
                      {type.price}
                    </div>
                    <div className="space-y-1">
                      {type.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-xs">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link 
                      to="/contact"
                      className="block w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your content needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                    : 'border-white/20 hover:border-cyan-400/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-900/50 to-pink-900/50 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Join thousands of satisfied customers who have transformed their content strategy with our AI.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Transform Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Content Strategy?</span>
              </h2>
              
              <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                Join thousands of businesses already using our AI content generator to create 
                high-quality, engaging content at scale. Start your free trial today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/contact" 
                  className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/pricing" 
                  className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                >
                  <span>View All Plans</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AIContentGeneratorPage
