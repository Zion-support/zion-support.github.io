import React from 'react'
<<<<<<< HEAD
import { Share2, ArrowRight, Bot, RotateCcw, RotateCw, Receipt } from 'lucide-react'
=======
import { Helmet } from 'react-helmet-async'
import { Calendar, Share2, TrendingUp, BarChart3, Zap, CheckCircle, ArrowRight, Star, Clock, Globe, Brain } from 'lucide-react'
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
import { Link } from 'react-router-dom'

const AISocialSchedulerPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Content Generation',
      description: 'Generate engaging social media posts using AI that understands your brand voice and audience preferences.',
      benefits: ['Brand voice training', 'Audience analysis', 'Content optimization', 'Multi-platform adaptation']
    },
    {
      icon: <Calendar className="w-8 h-8 text-emerald-400" />,
      title: 'Smart Scheduling',
      description: 'AI determines optimal posting times based on your audience activity patterns and engagement data.',
      benefits: ['Optimal timing', 'Audience insights', 'Engagement prediction', 'Cross-platform sync']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics with AI-powered insights to improve your social media strategy.',
      benefits: ['Engagement metrics', 'ROI tracking', 'Trend analysis', 'Competitor insights']
    },
    {
      icon: <Share2 className="w-8 h-8 text-red-400" />,
      title: 'Multi-Platform Management',
      description: 'Manage all your social media accounts from one dashboard with platform-specific optimization.',
      benefits: ['Unified dashboard', 'Platform optimization', 'Bulk posting', 'Content adaptation']
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-400" />,
      title: 'Automated Engagement',
      description: 'AI-powered auto-responses and engagement tools to maintain active social media presence.',
      benefits: ['Auto-responses', 'Comment management', 'Hashtag optimization', 'Community building']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-pink-400" />,
      title: 'Campaign Management',
      description: 'Plan, execute, and track social media campaigns with AI-driven recommendations.',
      benefits: ['Campaign planning', 'A/B testing', 'Performance tracking', 'Budget optimization']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for individuals and small businesses',
      features: [
        'Up to 3 social accounts',
        '50 posts per month',
        'Basic AI content generation',
        'Standard analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 10 social accounts',
        'Unlimited posts',
        'Advanced AI features',
        'Team collaboration',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited accounts',
        'White-label options',
        'Custom integrations',
        'Dedicated support',
        'Advanced analytics',
        'Custom AI training'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Maria Garcia',
      company: 'Digital Marketing Agency',
      content: 'AI Social Scheduler increased our client engagement by 150%. The AI content generation is incredibly effective.',
      rating: 5,
      avatar: 'MG'
    },
    {
      name: 'Tom Anderson',
      company: 'E-commerce Brand',
      content: 'The optimal timing feature alone increased our reach by 200%. Best social media tool we\'ve ever used.',
      rating: 5,
      avatar: 'TA'
    },
    {
      name: 'Sarah Kim',
      company: 'Content Creator',
      content: 'Saves me 10+ hours per week on content planning. The AI understands my brand voice perfectly.',
      rating: 5,
      avatar: 'SK'
    }
  ]

  const stats = [
    { number: '150%', label: 'Engagement Increase', icon: <TrendingUp className="w-6 h-6 text-cyan-400" /> },
    { number: '200%', label: 'Reach Improvement', icon: <Globe className="w-6 h-6 text-emerald-400" /> },
    { number: '10hrs', label: 'Time Saved/Week', icon: <Clock className="w-6 h-6 text-purple-400" /> },
    { number: '50K+', label: 'Posts Scheduled', icon: <Calendar className="w-6 h-6 text-orange-400" /> }
  ]

  return (
    <>
      <Helmet>
        <title>AI Social Scheduler - Smart Social Media Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered social media management with content generation, smart scheduling, and performance analytics. Increase engagement by 150% and save 10+ hours per week." />
        <meta name="keywords" content="AI social media scheduler, social media automation, content generation, social media analytics, social media management, AI content creation" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-social-scheduler" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.3)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.3)_0%,transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 text-pink-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-pink-400/30">
            <Share2 className="w-4 h-4" />
            <span>AI-Powered Social Media Management</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            AI Social
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Scheduler Pro
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your social media presence with AI-powered content generation, 
            smart scheduling, and performance analytics that increase engagement by 150%.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-pink-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-pink-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transform hover:scale-105"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="#demo" 
              className="group border-2 border-pink-400 text-pink-400 px-10 py-4 rounded-xl font-semibold hover:bg-pink-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>Watch Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-pink-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our AI-powered social media scheduler uses advanced machine learning to create, 
              schedule, and optimize your social media content across all platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-cyan-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Affordable <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Choose the perfect plan for your social media management needs. All plans include our core AI features 
              with flexible options for businesses of all sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-pink-400/50 shadow-2xl shadow-pink-500/20' 
                  : 'border-white/20 hover:border-white/40'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-pink-500 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
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
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact" 
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-500 to-cyan-600 text-white hover:from-pink-600 hover:to-cyan-700 shadow-lg shadow-pink-500/25'
                      : 'border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-gray-900'
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
      <section className="py-20 px-4 bg-gradient-to-br from-pink-900/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Loved by <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Marketers</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              See how AI Social Scheduler is transforming social media management for businesses and creators worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your
            <br />
            <span className="bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text text-transparent">
              Social Media Strategy?
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
            Join thousands of marketers already increasing engagement and saving time with AI Social Scheduler. 
            Start your free trial today - no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="group bg-white text-pink-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
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
      </section>
    </>
  )
}

export default AISocialSchedulerPage