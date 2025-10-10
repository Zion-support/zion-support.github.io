'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Share2, BarChart3, Calendar, Users, Zap, Target, ArrowRight, Star, CheckSquare, Globe, Smartphone, Heart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const AISocialMediaManagerPage: React.FC = () => {
  const features = [
    {
      icon: Share2,
      title: 'AI Content Creation',
      description: 'Generate engaging social media content with AI-powered writing, image creation, and video editing',
      benefits: ['Auto-generated captions', 'Trend-based content', 'Multi-platform optimization', 'Brand voice consistency']
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Optimize posting times and schedule content across all platforms automatically',
      benefits: ['Optimal timing analysis', 'Cross-platform posting', 'Content calendar', 'Automated scheduling']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track performance with AI-driven insights and predictive analytics',
      benefits: ['Engagement prediction', 'ROI tracking', 'Audience insights', 'Performance optimization']
    },
    {
      icon: Users,
      title: 'Community Management',
      description: 'AI-powered community management with automated responses and sentiment analysis',
      benefits: ['Auto-responses', 'Sentiment monitoring', 'Crisis detection', 'Engagement optimization']
    }
  ];
  const platforms = [
    { name: 'Facebook', icon: '📘', users: '2.9B', engagement: '+45%' },
    { name: 'Instagram', icon: '📷', users: '2B', engagement: '+67%' },
    { name: 'Twitter', icon: '🐦', users: '450M', engagement: '+23%' },
    { name: 'LinkedIn', icon: '💼', users: '930M', engagement: '+89%' },
    { name: 'TikTok', icon: '🎵', users: '1B', engagement: '+156%' },
    { name: 'YouTube', icon: '📺', users: '2.7B', engagement: '+34%' }
  ];
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$45',
      period: '/month',
      description: 'Perfect for small businesses and influencers',
      features: [
        '3 social media accounts',
        '30 posts per month',
        'Basic analytics',
        'Content calendar',
        'Email support'
      ],
      popular: false},
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10 social media accounts',
        'Unlimited posts',
        'Advanced analytics',
        'AI content generation',
        'Priority support',
        'Team collaboration'
      ],
      popular: true},
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited accounts',
        'White-label solution',
        'Custom AI models',
        'Dedicated support',
        'API access',
        'Advanced reporting'
      ],
      popular: false}
  ];
  const testimonials = [
    {
      name: 'Jessica Martinez',
      role: 'Marketing Director',
      company: 'Fashion Forward',
      content: 'Our social media engagement increased by 200% since using AI Social Media Manager. The AI content creation saves us hours every week.',
      rating: 5},
    {
      name: 'David Kim',
      role: 'CEO',
      company: 'TechStartup',
      content: 'The analytics and insights are incredible. We can now predict which content will perform best before we even post it.',
      rating: 5},
    {
      name: 'Amanda Wilson',
      role: 'Social Media Manager',
      company: 'Creative Agency',
      content: 'Managing multiple client accounts is now effortless. The AI handles content creation while we focus on strategy.',
      rating: 5}
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Social Media Manager - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered social media management with content creation, scheduling, analytics, and community management. Boost engagement by 200%." />
        <meta name="keywords" content="AI social media management, social media automation, content creation, social media analytics, community management" />
      </Helmet>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center bg-pink-500/10 text-pink-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Share2 className="w-4 h-4 mr-2" />
              AI-Powered Social Media Management
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Social Media Manager
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your social media presence with AI-powered content creation, smart scheduling, and advanced analytics. 
              Boost engagement by 200% and save 10+ hours per week.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Watch Demo
              </button>
            </div>
            <div className="text-sm text-gray-400">
              ✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage artificial intelligence to create, schedule, and optimize your social media content across all platforms.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckSquare className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Platforms Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Manage All Your Platforms
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect and manage all your social media accounts from one powerful dashboard.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center hover: bg-white/10 transition-all duration-300 group">
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{platform.name}</h3>
                  <p className="text-sm text-gray-400 mb-2">{platform.users} users</p>
                  <div className="inline-flex items-center bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                    <Target className="w-3 h-3 mr-1" />
                    {platform.engagement} engagement
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your social media needs. All plans include our core AI features.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 relative ${plan.popular ? 'ring-2 ring-pink-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckSquare className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover: from-pink-600 hover:to-purple-600 text-white transform hover:scale-105' 
                      : 'border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses who have transformed their social media with AI.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-12 border border-pink-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Social Media?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and experience the power of AI-driven social media management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              <div className="mt-6 text-sm text-gray-400">
                Questions? Call us at <a href="tel:+13024640950" className="text-pink-400 hover:text-pink-300">(302) 464-0950</a> or email <a href="mailto:kleber@ziontechgroup.com" className="text-pink-400 hover:text-pink-300">kleber@ziontechgroup.com</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )};
export default AISocialMediaManagerPage