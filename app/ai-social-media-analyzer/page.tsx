'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  ChartBarIcon, 
  ShareIcon, 
  EyeIcon,
  ArrowRightIcon,
  CpuChipIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const AISocialMediaAnalyzerPage: React.FC = () => {
  const features = [
    'AI-powered sentiment analysis',
    'Real-time trend detection',
    'Competitor analysis automation',
    'Influencer identification',
    'Content performance prediction',
    'Audience insights and demographics',
    'Hashtag optimization suggestions',
    'Optimal posting time recommendations',
    'Brand mention monitoring',
    'ROI tracking and analytics'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 social accounts',
        'Basic analytics',
        'Email support',
        'Monthly reports',
        'Standard insights'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing brands',
      features: [
        'Up to 20 social accounts',
        'Advanced AI analytics',
        'Priority support',
        'Real-time monitoring',
        'Competitor analysis',
        'Custom reports',
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
        'Unlimited accounts',
        'Full AI suite',
        '24/7 dedicated support',
        'White-label options',
        'Custom AI models',
        'Advanced security',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: ArrowTrendingUpIcon,
      title: 'Increase Engagement by 85%',
      description: 'AI-optimized content and posting strategies'
    },
    {
      icon: ChartBarIcon,
      title: 'Save 15+ Hours Weekly',
      description: 'Automated analysis and reporting'
    },
    {
      icon: UserGroupIcon,
      title: 'Grow Followers by 200%',
      description: 'Data-driven audience targeting'
    },
    {
      icon: EyeIcon,
      title: 'Track 50+ Metrics',
      description: 'Comprehensive social media analytics'
    }
  ];

  const platforms = [
    { name: 'Facebook', icon: '📘', color: 'from-blue-600 to-blue-800' },
    { name: 'Instagram', icon: '📷', color: 'from-pink-500 to-purple-600' },
    { name: 'Twitter', icon: '🐦', color: 'from-blue-400 to-blue-600' },
    { name: 'LinkedIn', icon: '💼', color: 'from-blue-700 to-blue-900' },
    { name: 'TikTok', icon: '🎵', color: 'from-pink-600 to-red-600' },
    { name: 'YouTube', icon: '📺', color: 'from-red-500 to-red-700' }
  ];

  return (
    <>
      <SEOHead
        title="AI Social Media Analyzer Pro - Zion Tech Group"
        description="Revolutionary AI-powered social media analytics platform that provides deep insights, trend analysis, and optimization recommendations. Start your free trial today."
        keywords="AI social media analyzer, social media analytics, social media insights, trend analysis, social media monitoring, engagement analytics, social media AI"
        canonicalUrl="https://ziontechgroup.com/ai-social-media-analyzer"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-sm font-medium mb-8">
                <CpuChipIcon className="w-4 h-4 mr-2" />
                AI-Powered Social Media Analytics
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
                AI Social Media
                <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Analyzer Pro
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Unlock the power of AI to analyze your social media performance, 
                predict trends, and optimize your content strategy for maximum engagement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/25">
                  Start Free Trial
                  <ArrowRightIcon className="w-5 h-5 inline ml-2" />
                </button>
                <button className="border-2 border-pink-400 text-pink-300 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300">
                  Watch Demo
                </button>
              </div>
              
              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center p-6 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                    <benefit.icon className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                All Major Platforms Supported
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Analyze performance across all your social media channels with unified insights and recommendations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105 text-center">
                  <div className={`text-4xl mb-3 bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
                    {platform.icon}
                  </div>
                  <h3 className="text-white font-semibold">{platform.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Advanced AI Analytics
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI analyzes millions of social media posts to provide insights 
                that help you create more engaging content and grow your audience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-4">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300">
                Choose the plan that fits your social media needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-pink-500 shadow-lg shadow-pink-500/25' 
                    : 'border-slate-700 hover:border-pink-400'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-700 hover:to-purple-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-pink-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Master Social Media?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of brands already using AI Social Media Analyzer Pro to optimize their social media strategy and drive engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Your Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Contact Sales
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
              <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISocialMediaAnalyzerPage;