'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  EnvelopeIcon, 
  ChartBarIcon, 
  UserGroupIcon,
  ArrowRightIcon,
  CpuChipIcon,
  ArrowTrendingUpIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const AIEmailMarketingAutomationPage: React.FC = () => {
  const features = [
    'AI-powered email content generation',
    'Smart audience segmentation',
    'Automated A/B testing',
    'Predictive send time optimization',
    'Dynamic content personalization',
    'Advanced deliverability monitoring',
    'Behavioral trigger automation',
    'ROI tracking and analytics',
    'Multi-channel campaign orchestration',
    'Advanced reporting dashboard'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10,000 subscribers',
        'Basic AI features',
        'Email support',
        'Standard templates',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 50,000 subscribers',
        'Advanced AI automation',
        'Priority support',
        'Custom templates',
        'Advanced analytics',
        'A/B testing',
        'API integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited subscribers',
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
      title: 'Increase Open Rates by 65%',
      description: 'AI-optimized subject lines and send times'
    },
    {
      icon: ChartBarIcon,
      title: 'Boost Click-Through by 120%',
      description: 'Personalized content and smart segmentation'
    },
    {
      icon: ClockIcon,
      title: 'Save 20+ Hours Weekly',
      description: 'Automated campaign creation and management'
    },
    {
      icon: UserGroupIcon,
      title: 'Grow Revenue by 300%',
      description: 'Data-driven email marketing strategies'
    }
  ];

  const automationTypes = [
    {
      title: 'Welcome Series',
      description: 'Automated onboarding sequences for new subscribers',
      icon: '👋',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Abandoned Cart',
      description: 'Recover lost sales with intelligent cart abandonment emails',
      icon: '🛒',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Re-engagement',
      description: 'Win back inactive subscribers with targeted campaigns',
      icon: '🔄',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Upsell/Cross-sell',
      description: 'Increase average order value with smart product recommendations',
      icon: '💰',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Email Marketing Automation Pro - Zion Tech Group"
        description="Revolutionary AI-powered email marketing platform that automates campaigns, personalizes content, and maximizes ROI. Start your free trial today."
        keywords="AI email marketing, email automation, email marketing software, email campaigns, marketing automation, email personalization, email analytics"
        canonicalUrl="https://ziontechgroup.com/ai-email-marketing-automation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8">
                <CpuChipIcon className="w-4 h-4 mr-2" />
                AI-Powered Email Marketing
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
                AI Email Marketing
                <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Automation Pro
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your email marketing with AI that creates personalized campaigns, 
                optimizes send times, and delivers exceptional results automatically.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/25">
                  Start Free Trial
                  <ArrowRightIcon className="w-5 h-5 inline ml-2" />
                </button>
                <button className="border-2 border-indigo-400 text-indigo-300 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300">
                  Watch Demo
                </button>
              </div>
              
              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center p-6 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                    <benefit.icon className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Automation Types Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Powerful Automation Types
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Set up intelligent email sequences that nurture leads and drive conversions automatically.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {automationTypes.map((type, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105 text-center">
                  <div className={`text-4xl mb-4 bg-gradient-to-r ${type.color} bg-clip-text text-transparent`}>
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-300">{type.description}</p>
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
                Advanced AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI learns from your audience behavior and automatically optimizes 
                every aspect of your email marketing campaigns.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105">
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
                Choose the plan that fits your email marketing needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-indigo-500 shadow-lg shadow-indigo-500/25' 
                    : 'border-slate-700 hover:border-indigo-400'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
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
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
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
        <section className="py-20 bg-gradient-to-r from-indigo-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Your Email Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using AI Email Marketing Automation Pro to boost their email performance and drive more revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
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

export default AIEmailMarketingAutomationPage;