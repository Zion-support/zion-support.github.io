'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Share2, 
  MessageSquare, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Brain, 
  Target, 
  TrendingUp, 
  Clock, 
  Shield,
  Globe,
  Smartphone,
  Mail,
  Phone,
  Calendar,
  FileText,
  PieChart,
  Activity,
  DollarSign,
  Image,
  Video,
  Hash,
  Users,
  Heart,
  Eye,
  ThumbsUp
} from 'lucide-react';
export default function AISocialMediaManagerPage() {
  const [selectedPlan, setSelectedPlan] = useState('pro');
import React from 'react'
import Layout from '../layout'
import { ArrowRight, MessageSquare } from 'lucide-react';
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Content Generation',
      description: 'Generate engaging social media posts using advanced AI algorithms',
      benefits: ['Platform-specific content', 'Trending hashtags', 'Engaging captions']
    },
    {
      icon: <Clock className="w-8 h-8 text-green-400" />,
      title: 'Smart Scheduling',
      description: 'Post at optimal times when your audience is most active',
      benefits: ['Optimal timing', 'Timezone management', 'Content calendar']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      title: 'Analytics & Insights',
      description: 'Track performance and get actionable insights for better engagement',
      benefits: ['Engagement metrics', 'Audience insights', 'ROI tracking']
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: 'Audience Targeting',
      description: 'Reach the right audience with AI-powered targeting and segmentation',
      benefits: ['Demographic targeting', 'Interest-based segments', 'Behavioral analysis']
    },
    {
      icon: <Activity className="w-8 h-8 text-red-400" />,
      title: 'Real-time Monitoring',
      description: 'Monitor mentions, comments, and engagement across all platforms',
      benefits: ['Brand monitoring', 'Sentiment analysis', 'Crisis management']
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Automation Tools',
      description: 'Automate repetitive tasks and focus on strategy and creativity',
      benefits: ['Auto-responses', 'Content recycling', 'Cross-platform posting']
    }
  ];
  const platforms = [
    {
      name: 'Facebook',
      icon: <Share2 className="w-6 h-6 text-blue-500" />,
      description: 'Manage Facebook pages and groups with AI optimization'
    },
    {
      name: 'Instagram',
      icon: <Image className="w-6 h-6 text-pink-500" />,
      description: 'Create stunning visual content and stories automatically'
    },
    {
      name: 'Twitter',
      icon: <Hash className="w-6 h-6 text-blue-400" />,
      description: 'Engage with trending topics and optimize tweet performance'
    },
    {
      name: 'LinkedIn',
      icon: <Users className="w-6 h-6 text-blue-600" />,
      description: 'Professional content for B2B engagement and networking'
    },
    {
      name: 'TikTok',
      icon: <Video className="w-6 h-6 text-black" />,
      description: 'Create viral short-form videos with AI assistance'
    },
    {
      name: 'YouTube',
      icon: <Video className="w-6 h-6 text-red-500" />,
      description: 'Optimize video content and manage channel growth'
    }
  ];
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and influencers',
      features: [
        '3 social media accounts',
        'Basic AI content generation',
        'Scheduling for 1 month',
        'Basic analytics',
        'Email support',
        'Mobile app'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10 social media accounts',
        'Advanced AI features',
        'Unlimited scheduling',
        'Advanced analytics',
        'Priority support',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited accounts',
        'All AI features',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'Advanced security',
        'Custom reporting'
      ],
      popular: false
    }
  ];
  const testimonials = [
    {
      name: 'Jessica Park',
      company: 'Digital Marketing Agency',
      content: 'The AI Social Media Manager has increased our client engagement by 200%. The content quality is incredible and our team saves 15+ hours per week.',
      rating: 5,
      avatar: 'JP'
    },
    {
      name: 'Marcus Thompson',
      company: 'E-commerce Brand',
      content: 'Our social media presence has grown by 300% since using this tool. The AI-generated content performs better than our manually created posts.',
      rating: 5,
      avatar: 'MT'
    },
    {
      name: 'Sarah Kim',
      company: 'Personal Brand',
      content: 'As an influencer, this tool has been a game-changer. The optimal posting times and content suggestions have doubled my follower growth.',
      rating: 5,
      avatar: 'SK'
    }
  ];
  const stats = [
    { number: '200%', label: 'Increase in Engagement', icon: <Heart className="w-6 h-6" /> },
    { number: '300%', label: 'Growth in Followers', icon: <Users className="w-6 h-6" /> },
    { number: '15hrs', label: 'Time Saved Per Week', icon: <Clock className="w-6 h-6" /> },
    { number: '95%', label: 'Content Performance', icon: <TrendingUp className="w-6 h-6" /> }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Social Media Manager - Zion Tech Group | Automated Social Media Management</title>
        <meta name="description" content="Transform your social media presence with our AI-powered Social Media Manager. Automate content creation, scheduling, and analytics. Increase engagement by 200% with intelligent automation." />
        <meta name="keywords" content="AI social media manager, social media automation, content generation, social media analytics, Zion Tech Group" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Social Media{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Manager
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your social media presence with our AI-powered Social Media Manager. 
            Automate content creation, scheduling, and analytics to increase engagement by 200%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/ai-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View All AI Services
            </Link>
          </div>
        </div>
        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Powerful Social Media Features</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our AI Social Media Manager comes packed with advanced features to automate and optimize 
              your social media presence across all platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Platforms Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Supported Platforms</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Manage all your social media accounts from one unified dashboard.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group text-center">
                <div className="flex items-center justify-center mb-4">
                  {platform.icon}
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{platform.name}</h3>
                <p className="text-xs text-gray-400">{platform.description}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Flexible pricing plans designed to scale with your social media needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 relative ${
                plan.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700 hover:border-cyan-500/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>
        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">What Our Customers Say</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Join thousands of satisfied customers who have transformed their social media presence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Social Media?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Start using our AI Social Media Manager today and see how intelligent automation 
              can increase your engagement by 200%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
              >
                Start Free Trial
                <Share2 className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}