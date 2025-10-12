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

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Content Generation',
      description: 'Generate engaging social media content using advanced AI algorithms that understand your brand voice.',
      benefits: ['Automated post creation', 'Brand voice consistency', 'Trend analysis', 'Content optimization']
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-400" />,
      title: 'Smart Scheduling',
      description: 'Optimize your posting schedule based on audience engagement patterns and peak activity times.',
      benefits: ['Optimal timing', 'Cross-platform posting', 'Content calendar', 'Automated scheduling']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: 'Advanced Analytics',
      description: 'Get detailed insights into your social media performance with AI-powered analytics and reporting.',
      benefits: ['Engagement metrics', 'ROI tracking', 'Audience insights', 'Performance predictions']
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: 'Audience Targeting',
      description: 'Reach the right audience with AI-powered targeting and personalized content recommendations.',
      benefits: ['Demographic analysis', 'Interest targeting', 'Behavioral insights', 'Custom audiences']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Brand Safety',
      description: 'Ensure your content aligns with your brand values and avoid potential PR issues with AI monitoring.',
      benefits: ['Content moderation', 'Brand compliance', 'Crisis detection', 'Reputation management']
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Automation Suite',
      description: 'Automate repetitive tasks and focus on strategy with our comprehensive automation tools.',
      benefits: ['Auto-responses', 'Lead generation', 'Customer service', 'Workflow automation']
    }
  ];

  const platforms = [
    {
      name: 'Facebook',
      icon: <MessageSquare className="w-6 h-6 text-blue-500" />,
      description: 'Manage Facebook pages, groups, and advertising campaigns',
      features: ['Page management', 'Ad creation', 'Audience insights', 'Engagement tracking']
    },
    {
      name: 'Instagram',
      icon: <Image className="w-6 h-6 text-pink-500" />,
      description: 'Create stunning visual content and manage Instagram presence',
      features: ['Story creation', 'Reel optimization', 'Hashtag research', 'Visual analytics']
    },
    {
      name: 'Twitter',
      icon: <Hash className="w-6 h-6 text-blue-400" />,
      description: 'Engage with real-time conversations and trending topics',
      features: ['Tweet scheduling', 'Trend monitoring', 'Thread creation', 'Engagement tracking']
    },
    {
      name: 'LinkedIn',
      icon: <Users className="w-6 h-6 text-blue-600" />,
      description: 'Build professional networks and B2B relationships',
      features: ['Article publishing', 'Company updates', 'Lead generation', 'Professional networking']
    },
    {
      name: 'TikTok',
      icon: <Video className="w-6 h-6 text-black" />,
      description: 'Create viral short-form video content',
      features: ['Video editing', 'Trend analysis', 'Hashtag optimization', 'Viral tracking']
    },
    {
      name: 'YouTube',
      icon: <Video className="w-6 h-6 text-red-500" />,
      description: 'Manage YouTube channels and video content',
      features: ['Video optimization', 'SEO for videos', 'Thumbnail creation', 'Analytics dashboard']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and individuals',
      features: [
        '3 social media accounts',
        'Basic AI content generation',
        'Standard scheduling',
        'Basic analytics',
        'Email support',
        '5 posts per day'
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
        'Smart scheduling',
        'Advanced analytics',
        'Priority support',
        'Unlimited posts',
        'Team collaboration',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited accounts',
        'All AI features',
        'Custom automation',
        'White-label options',
        'Dedicated support',
        'API access',
        'Custom integrations',
        'Advanced reporting'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Digital Marketing Pro',
      content: 'The AI Social Media Manager has transformed our social media strategy. We\'ve seen a 200% increase in engagement and 150% more leads.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Solutions',
      content: 'The automation features save us 10+ hours per week. The AI content generation is incredibly accurate and on-brand.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Creative Agency',
      content: 'The analytics insights are game-changing. We can now make data-driven decisions and optimize our campaigns in real-time.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const stats = [
    { number: '200%', label: 'Increase in Engagement', icon: <Heart className="w-6 h-6" /> },
    { number: '50+', label: 'Social Platforms Supported', icon: <Globe className="w-6 h-6" /> },
    { number: '99.8%', label: 'Customer Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '24/7', label: 'AI Processing', icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Social Media Manager - Zion Tech Group | Automated Social Media Management</title>
        <meta name="description" content="Transform your social media strategy with our AI-powered social media manager. Automate content creation, scheduling, and analytics across all platforms. Increase engagement by 200%." />
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
            Transform your social media strategy with our AI-powered management platform. 
            Automate content creation, scheduling, and analytics across all platforms.
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
            <h2 className="text-3xl font-bold text-white mb-4">Powerful AI Features</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our AI Social Media Manager comes packed with advanced features to automate 
              and optimize your social media presence across all platforms.
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  {platform.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{platform.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{platform.description}</p>
                <div className="space-y-1">
                  {platform.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-sm text-gray-400">
                      • {feature}
                    </div>
                  ))}
                </div>
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
                Join thousands of satisfied customers who have transformed their social media strategy.
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
              Ready to Transform Your Social Media Strategy?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Start automating your social media management with our AI platform. 
              Join thousands of businesses already using our technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}