'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Share2, 
  TrendingUp, 
  Calendar, 
  BarChart3, 
  Users, 
  Hash, 
  Image, 
  Video, 
  MessageSquare, 
  Heart, 
  ThumbsUp, 
  Eye, 
  Target, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Clock,
  DollarSign,
  Globe,
  Smartphone,
  Monitor,
  Bot,
  Sparkles
} from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

export default function AISocialMediaManagerPage() {
  const features = [
    'AI-powered content creation for all platforms',
    'Automated posting and scheduling across 15+ platforms',
    'Real-time engagement monitoring and response',
    'Advanced analytics and performance insights',
    'Hashtag research and optimization',
    'Competitor analysis and benchmarking',
    'Influencer identification and outreach',
    'Crisis management and brand protection',
    'Multi-language content generation',
    'Visual content creation with AI',
    'Social listening and sentiment analysis',
    'ROI tracking and campaign optimization'
  ];

  const platforms = [
    { name: 'Facebook', icon: '📘', users: '2.9B' },
    { name: 'Instagram', icon: '📷', users: '2B' },
    { name: 'Twitter', icon: '🐦', users: '450M' },
    { name: 'LinkedIn', icon: '💼', users: '900M' },
    { name: 'TikTok', icon: '🎵', users: '1B' },
    { name: 'YouTube', icon: '📺', users: '2.7B' },
    { name: 'Pinterest', icon: '📌', users: '450M' },
    { name: 'Snapchat', icon: '👻', users: '600M' },
    { name: 'Reddit', icon: '🤖', users: '430M' },
    { name: 'Discord', icon: '💬', users: '150M' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        '3 social media accounts',
        '50 posts per month',
        'Basic analytics',
        'AI content suggestions',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10 social media accounts',
        'Unlimited posts',
        'Advanced analytics & insights',
        'AI content creation',
        'Automated scheduling',
        'Hashtag research',
        'Competitor analysis',
        'Priority support',
        'Team collaboration (5 users)'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited social media accounts',
        'Unlimited posts',
        'White-label analytics',
        'Custom AI training',
        'API access',
        'Advanced automation',
        'Dedicated account manager',
        'Custom integrations',
        'Unlimited team members',
        '24/7 phone support'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '2.5M+', label: 'Posts Published', icon: <Share2 className="w-6 h-6" /> },
    { number: '95%', label: 'Time Saved', icon: <Clock className="w-6 h-6" /> },
    { number: '300%', label: 'Engagement Increase', icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Social Media Manager - Zion Tech Group | Automated Social Media Management</title>
        <meta name="description" content="Revolutionize your social media with AI-powered content creation, automated posting, and advanced analytics. Manage all platforms from one dashboard. Starting at $49/month." />
        <meta name="keywords" content="ai social media manager, social media automation, content creation, social media analytics, automated posting, social media scheduling" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-social-media-manager" />
      </Helmet>

      <FuturisticBackground variant="service">
        <div className="pt-20 px-4 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                  <Share2 className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  AI Social Media Manager
                </h1>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your social media presence with AI-powered content creation, automated posting, and intelligent analytics. 
                Manage all platforms from one powerful dashboard.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
                <FuturisticButton
                  variant="ghost"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Watch Demo
                </FuturisticButton>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <FuturisticCard key={index} variant="stat" className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </FuturisticCard>
              ))}
            </div>

            {/* Features Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Powerful AI Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <FuturisticCard key={index} variant="feature">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  </FuturisticCard>
                ))}
              </div>
            </div>

            {/* Supported Platforms */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Supported Platforms
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {platforms.map((platform, index) => (
                  <FuturisticCard key={index} variant="platform" className="text-center">
                    <div className="text-4xl mb-3">{platform.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{platform.name}</h3>
                    <p className="text-sm text-gray-400">{platform.users} users</p>
                  </FuturisticCard>
                ))}
              </div>
            </div>

            {/* Pricing Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Simple, Transparent Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <FuturisticCard 
                    key={index} 
                    variant={plan.popular ? "pricing-popular" : "pricing"} 
                    className="relative"
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                        <span className="text-gray-400 ml-2">{plan.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <FuturisticButton
                      variant={plan.popular ? "primary" : "secondary"}
                      size="lg"
                      className="w-full"
                      onClick={() => window.open('/contact', '_blank')}
                    >
                      Get Started
                    </FuturisticButton>
                  </FuturisticCard>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <FuturisticCard variant="feature" className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Social Media?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 50,000+ businesses using AI to create, schedule, and optimize their social media content. 
                Start your free trial today - no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
                <FuturisticButton
                  variant="secondary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Schedule Demo
                </FuturisticButton>
              </div>
              <div className="mt-8 text-white/80 text-sm">
                <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
              </div>
            </FuturisticCard>
          </div>
        </div>
      </FuturisticBackground>
    </>
  );
}