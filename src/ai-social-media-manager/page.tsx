'use client';
import React from 'react';
import { MessageSquare, Brain, Target, BarChart, Users, Calendar, CheckCircle, ArrowRight, Star, Zap, Shield, Clock, TrendingUp, Award, Phone, Mail, MapPin, ArrowLeft, Share2, Hash, Image, Video, Heart, ThumbsUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AISocialMediaManagerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Content Creation',
      description: 'Generate engaging social media posts with AI-powered content creation for all platforms.',
      benefits: ['200% engagement', 'Platform optimization', 'Trend analysis', 'Viral content']
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Automatically schedule posts at optimal times based on audience behavior and engagement data.',
      benefits: ['Optimal timing', 'Audience insights', 'Auto-scheduling', 'Cross-platform']
    },
    {
      icon: BarChart,
      title: 'Engagement Analytics',
      description: 'Comprehensive analytics and insights to track performance and optimize your social media strategy.',
      benefits: ['Real-time analytics', 'Performance tracking', 'ROI measurement', 'Competitor analysis']
    },
    {
      icon: Hash,
      title: 'Hashtag Optimization',
      description: 'AI-powered hashtag research and optimization to maximize reach and engagement.',
      benefits: ['Trending hashtags', 'Reach optimization', 'Engagement boost', 'Niche targeting']
    },
    {
      icon: Users,
      title: 'Audience Insights',
      description: 'Deep audience analysis to understand your followers and create targeted content.',
      benefits: ['Demographic analysis', 'Interest mapping', 'Behavior patterns', 'Content preferences']
    },
    {
      icon: Target,
      title: 'Campaign Management',
      description: 'Plan, execute, and track social media campaigns with AI-powered optimization.',
      benefits: ['Campaign planning', 'A/B testing', 'Performance optimization', 'Goal tracking']
    }
  ];

  const platforms = [
    {
      name: 'Facebook',
      icon: MessageSquare,
      description: 'Engaging Facebook posts and stories',
      features: ['Post creation', 'Story optimization', 'Ad integration', 'Page management']
    },
    {
      name: 'Instagram',
      icon: Image,
      description: 'Visual content for Instagram feed and stories',
      features: ['Photo optimization', 'Story creation', 'Reels support', 'IGTV management']
    },
    {
      name: 'Twitter',
      icon: Hash,
      description: 'Tweet optimization and thread creation',
      features: ['Tweet generation', 'Thread creation', 'Trend monitoring', 'Engagement tracking']
    },
    {
      name: 'LinkedIn',
      icon: Users,
      description: 'Professional content for LinkedIn',
      features: ['Article creation', 'Post optimization', 'Company updates', 'Professional networking']
    },
    {
      name: 'TikTok',
      icon: Video,
      description: 'Viral video content for TikTok',
      features: ['Video ideas', 'Trend analysis', 'Hashtag research', 'Engagement optimization']
    },
    {
      name: 'YouTube',
      icon: Video,
      description: 'YouTube content and optimization',
      features: ['Video titles', 'Description optimization', 'Thumbnail suggestions', 'SEO optimization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$89',
      period: 'month',
      description: 'Perfect for small businesses and influencers',
      features: [
        'Up to 3 social accounts',
        'Basic AI features',
        '50 posts/month',
        'Email support',
        'Basic analytics',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$179',
      period: 'month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 10 social accounts',
        'Advanced AI features',
        'Unlimited posts',
        'Priority support',
        'Advanced analytics',
        'Up to 5 user accounts',
        'Campaign management',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited social accounts',
        'Full AI capabilities',
        'Unlimited posts',
        '24/7 dedicated support',
        'Custom integrations',
        'Unlimited users',
        'White-label solution',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      role: 'Social Media Manager',
      company: 'Fashion Brand Co.',
      content: 'AI Social Media Manager has increased our engagement by 200%. The AI creates content that resonates with our audience and drives real results.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Marketing Director',
      company: 'Tech Startup',
      content: 'The scheduling feature is a game-changer. Posts go out at the perfect time, and our reach has increased by 150% since we started using it.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Content Creator',
      company: 'Lifestyle Blog',
      content: 'The hashtag optimization feature has helped me reach new audiences. My follower growth has increased by 300% in just 3 months.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <a href="/micro-saas" className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Micro SAAS
            </a>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI Social Media Manager
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Complete social media management with AI-powered content creation, scheduling, and analytics. 
            Increase engagement by 200% and reach by 150% with intelligent social media automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
            >
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <Phone className="w-4 h-4 inline mr-2" />
              (302) 464-0950
            </a>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-slate-800/50 rounded-xl">
              <div className="text-3xl font-bold text-cyan-400 mb-2">200%</div>
              <div className="text-gray-300">Engagement Increase</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl">
              <div className="text-3xl font-bold text-green-400 mb-2">150%</div>
              <div className="text-gray-300">Reach Increase</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl">
              <div className="text-3xl font-bold text-purple-400 mb-2">70%</div>
              <div className="text-gray-300">Time Savings</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl">
              <div className="text-3xl font-bold text-orange-400 mb-2">6</div>
              <div className="text-gray-300">Platforms</div>
            </div>
          </div>
        </section>

        {/* Supported Platforms */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Supported Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <platform.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{platform.name}</h3>
                <p className="text-gray-300 mb-4">{platform.description}</p>
                <div className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-green-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-green-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Simple Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 ${plan.popular ? 'border-2 border-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="bg-cyan-500 text-white text-center py-1 rounded-t-lg -mt-6 -mx-6 mb-6">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {plan.price}
                  <span className="text-lg text-gray-400">/{plan.period}</span>
                </div>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Social Media?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses and creators already using AI Social Media Manager 
              to grow their audience and increase engagement across all platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-4 h-4 inline mr-2" />
                (302) 464-0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p className="flex items-center justify-center gap-4">
                <span className="flex items-center">
                  <Mail className="w-4 h-4 mr-1" />
                  kleber@ziontechgroup.com
                </span>
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  364 E Main St STE 1008, Middletown DE 19709
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AISocialMediaManagerPage;