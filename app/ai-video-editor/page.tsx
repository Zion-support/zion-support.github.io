import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Video, ArrowRight, CheckCircle, Zap, Brain, Smartphone, Globe, Users, BarChart3, Star, Sparkles, TrendingUp, Target, Play, Scissors } from 'lucide-react'
import Layout from '../layout'

export default function AIVideoEditor() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Editing',
      description: 'Automatically edit videos with intelligent scene detection, color correction, and audio enhancement'
    },
    {
      icon: <Scissors className="w-6 h-6 text-purple-400" />,
      title: 'Smart Cut Detection',
      description: 'AI automatically identifies the best moments and creates seamless cuts and transitions'
    },
    {
      icon: <Play className="w-6 h-6 text-yellow-400" />,
      title: 'Auto-Generated Content',
      description: 'Create engaging videos from text, images, and audio with AI-generated animations and effects'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      title: 'Performance Analytics',
      description: 'Track video performance, engagement metrics, and optimize content for better results'
    }
  ]

  const editingFeatures = [
    {
      category: 'AI Editing',
      items: ['Auto Scene Detection', 'Smart Cuts', 'Color Correction', 'Audio Enhancement', 'Stabilization', 'Background Removal']
    },
    {
      category: 'Content Creation',
      items: ['Text to Video', 'Image Animation', 'Voice Synthesis', 'Music Generation', 'Template Library', 'Custom Branding']
    },
    {
      category: 'Export & Sharing',
      items: ['Multiple Formats', 'Social Media Optimization', 'Cloud Storage', 'Direct Publishing', 'Collaboration Tools', 'Version Control']
    },
    {
      category: 'Analytics',
      items: ['View Metrics', 'Engagement Tracking', 'A/B Testing', 'Performance Reports', 'Audience Insights', 'ROI Analysis']
    }
  ]

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$29',
      period: '/month',
      description: 'Perfect for content creators and influencers',
      features: [
        'Up to 10 hours of video/month',
        'Basic AI features',
        'Standard templates',
        'Email support',
        'Basic analytics',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for businesses and agencies',
      features: [
        'Up to 50 hours of video/month',
        'Advanced AI features',
        'Custom templates',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited video processing',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Alex Rodriguez',
      company: 'YouTube Creator',
      content: 'AI Video Editor cut my editing time by 70%. The auto-generated content is incredibly engaging.',
      rating: 5
    },
    {
      name: 'Sarah Kim',
      company: 'Marketing Agency',
      content: 'Creating professional videos for clients is now effortless. The AI quality is outstanding.',
      rating: 5
    },
    {
      name: 'Mike Johnson',
      company: 'E-learning Platform',
      content: 'The analytics help us understand what content performs best. Our engagement increased by 150%.',
      rating: 5
    }
  ]

  return (
    <Layout
      title="AI Video Editor - Intelligent Video Creation | Zion Tech Group"
      description="Transform your video creation with AI-powered editing, smart cut detection, and auto-generated content. Create professional videos in minutes. Start your free trial today."
      keywords="AI video editor, video editing, video creation, automated editing, video analytics, content creation"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-violet-500/20 rounded-full text-violet-400 text-sm font-medium mb-6">
                <Video className="w-4 h-4 mr-2" />
                AI-Powered Video Editing
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                AI Video Editor
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your video creation with AI-powered editing, smart cut detection, and auto-generated content. 
                Create professional videos in minutes, not hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="#demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Intelligent Video Creation
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                AI-powered features that revolutionize video editing and content creation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Editing Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Complete Video Solution
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Everything you need to create, edit, and optimize professional videos
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {editingFeatures.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.category}</h3>
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-violet-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your video creation needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-violet-400/40 scale-105 shadow-2xl shadow-violet-500/20' 
                    : 'border-violet-500/20 hover:border-violet-400/40'
                }`}>
                  {plan.popular && (
                    <div className="inline-flex items-center px-3 py-1 bg-violet-500/20 rounded-full text-violet-400 text-sm font-medium mb-4">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
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
                        <CheckCircle className="w-5 h-5 text-violet-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-600 hover:to-purple-700'
                        : 'border-2 border-violet-400 text-violet-400 hover:bg-violet-400/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Trusted by Content Creators
              </h2>
              <p className="text-gray-300">
                See how our AI Video Editor transforms video creation workflows
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl p-8 border border-violet-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">
                Create Amazing Videos Today
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Join thousands of creators using AI Video Editor to produce professional content
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300"
                >
                  Start Your Free Trial
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
}