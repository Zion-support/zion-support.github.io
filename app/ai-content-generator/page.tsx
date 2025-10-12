'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Zap,
  Shield,
  Globe,
  FileText,
  MessageSquare,
  BarChart3,
  Users,
  TrendingUp,
  Clock,
  Award,
  Sparkles
} from 'lucide-react';

export default function AIContentGeneratorPage() {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      category: 'Content Generation',
      items: [
        'AI-powered blog posts and articles',
        'Social media content creation',
        'Email marketing campaigns',
        'Product descriptions and copy',
        'Technical documentation',
        'Creative storytelling'
      ]
    },
    {
      category: 'SEO & Optimization',
      items: [
        'Keyword research and integration',
        'Meta descriptions and titles',
        'Content structure optimization',
        'Readability scoring',
        'Search intent analysis',
        'Competitor content analysis'
      ]
    },
    {
      category: 'Brand & Voice',
      items: [
        'Brand voice training and consistency',
        'Tone adaptation for different audiences',
        'Style guide enforcement',
        'Brand personality development',
        'Content approval workflows',
        'Multi-language support (50+ languages)'
      ]
    },
    {
      category: 'Analytics & Insights',
      items: [
        'Content performance tracking',
        'Engagement metrics analysis',
        'ROI measurement and reporting',
        'A/B testing capabilities',
        'Content calendar management',
        'Trend analysis and recommendations'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        '10,000 words per month',
        '5 brand voice profiles',
        'Basic SEO optimization',
        'Email support',
        'Standard templates',
        'Basic analytics'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Pro',
      price: '$299',
      period: '/month',
      description: 'Most popular for growing businesses',
      features: [
        '50,000 words per month',
        'Unlimited brand voice profiles',
        'Advanced SEO optimization',
        'Priority support',
        'Premium templates',
        'Advanced analytics',
        'API access',
        'Team collaboration'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited words per month',
        'Custom AI model training',
        'White-label solution',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced security features',
        'SLA guarantee',
        'Custom workflows'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      content: 'Zion Tech Group\'s AI Content Generator has revolutionized our content strategy. We\'ve seen a 300% increase in engagement and 150% more organic traffic.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'Digital Marketing Pro',
      content: 'The brand voice training feature is incredible. Our content now consistently reflects our brand personality across all channels.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'E-commerce Solutions',
      content: 'We\'ve reduced our content creation time by 80% while improving quality. The ROI is outstanding.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const stats = [
    { number: '10M+', label: 'Words Generated', icon: FileText },
    { number: '99.8%', label: 'Accuracy Rate', icon: Award },
    { number: '50+', label: 'Languages Supported', icon: Globe },
    { number: '24/7', label: 'AI Processing', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Content Generator Pro - Zion Tech Group | Advanced AI Content Creation</title>
        <meta name="description" content="Transform your content strategy with our advanced AI Content Generator Pro. Create high-quality, SEO-optimized content at scale with brand voice training and analytics." />
        <meta name="keywords" content="AI content generator, content creation, AI writing, content marketing, SEO content, brand voice, content automation" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase animate-pulse">
              ✨ AI-Powered Content Creation
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Content Generator{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Pro
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your content strategy with our advanced AI-powered content generation platform. 
            Create high-quality, SEO-optimized content at scale with brand voice training and comprehensive analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transform"
            >
              <span className="relative z-10">Start Free Trial</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </Link>
            <Link 
              to="#demo" 
              className="group border-2 border-cyan-400/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm hover:scale-105 transform"
            >
              <span className="relative z-10">Watch Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{stat.number}</div>
                  <div className="text-gray-300 group-hover:text-gray-200 transition-colors">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Features</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Everything you need to create, optimize, and scale your content strategy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((category, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <Sparkles className="w-6 h-6 text-cyan-400 mr-3" />
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your content needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 group relative hover:bg-slate-700/50 ${
                  plan.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20 scale-105' : 'border-slate-700 hover:border-cyan-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => setSelectedPlan(plan.name.toLowerCase())}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Join thousands of satisfied customers who have transformed their content strategy
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 italic">
                    "{testimonial.content}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your free trial today and experience the power of AI-driven content creation. 
              No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}