<<<<<<< HEAD
import {Share2, TrendingUp, Users, Calendar, BarChart, CheckCircle, ArrowRight, Star, MessageSquare} from 'lucide-react';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-3a03
import React from 'react';


const AISocialMediaManagerPage: React.FC = () => {
  const _features = [
    {
      icon: Share2,
      title: 'AI Content Creation',
      description: 'Automatically generate engaging posts, captions, and hashtags for all platforms'
    },
    {
      icon: TrendingUp,
      title: 'Trend Analysis',
      description: 'Real-time trend monitoring and content suggestions based on viral topics'
    },
    {
      icon: Users,
      title: 'Audience Insights',
      description: 'Deep analytics on your audience behavior and engagement patterns'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'AI-optimized posting times for maximum engagement across all platforms'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive reporting with actionable insights and ROI tracking'
    },
    {
      icon: MessageSquare,
      title: 'Auto-Responses',
      description: 'Intelligent chatbot responses and comment management'
    }
  ];

  const benefits = [
    'Increase engagement by 300%',
    'Save 20+ hours per week',
    'Grow followers by 150%',
    'Boost brand awareness by 200%',
    'Improve content performance by 250%'
  ];

  const platforms = [
    { name: 'Facebook', icon: '📘', color: 'text-blue-500' },
    { name: 'Instagram', icon: '📷', color: 'text-pink-500' },
    { name: 'Twitter', icon: '🐦', color: 'text-blue-400' },
    { name: 'LinkedIn', icon: '💼', color: 'text-blue-600' },
    { name: 'TikTok', icon: '🎵', color: 'text-black' },
    { name: 'YouTube', icon: '📺', color: 'text-red-500' }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '3 social media accounts',
        '50 posts per month',
        'Basic AI content generation',
        'Standard analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing brands',
      features: [
        '10 social media accounts',
        'Unlimited posts',
        'Advanced AI features',
        'Detailed analytics',
        'Priority support',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited accounts',
        'Unlimited posts',
        'Full AI suite',
        'Custom analytics',
        '24/7 support',
        'White-label options'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-pink-500/10 rounded-full text-pink-400 text-sm font-medium mb-6">
              <Share2 className="w-4 h-4 mr-2" />
              AI-Powered Social Media Management
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Social Media Manager
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Automate your social media presence with AI that creates, schedules, and optimizes 
              content across all platforms to maximize engagement and grow your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Platforms, One Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage all your social media accounts from a single, intelligent dashboard
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{platform.icon}</span>
                </div>
                <h3 className={`font-semibold ${platform.color}`}>
                  {platform.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology to streamline your social media management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of brands who have transformed their social media presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <p className="text-white font-semibold">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Social Media?
            </h3>
            <p className="text-gray-300 mb-6">
              Start your free trial today and experience the power of AI-driven social media management
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your social media needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-pink-400/60 ring-2 ring-pink-400/20' 
                  : 'border-slate-700/50'
              }`}>
                {plan.popular && (
                  <div className="bg-pink-500 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full text-center mb-4">
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
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                    : 'border-2 border-slate-600 text-white hover:border-pink-400 hover:text-pink-400'
                }`}>
                  {plan.popular ? 'Start Free Trial' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500/10 to-purple-500/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of brands already using AI Social Media Manager to grow their presence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISocialMediaManagerPage;
