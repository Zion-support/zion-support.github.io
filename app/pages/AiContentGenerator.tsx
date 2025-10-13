import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Clock, 
  Zap, 
  Globe,
  BarChart3,
  Shield,
  Smartphone,
  Code
} from 'lucide-react';

const AiContentGenerator: React.FC = () => {
  const features = [
    {
      title: 'Multi-Language Support',
      description: 'Generate content in 50+ languages with native-level quality',
      icon: Globe
    },
    {
      title: 'SEO Optimization',
      description: 'AI-powered SEO optimization for better search rankings',
      icon: BarChart3
    },
    {
      title: 'Brand Voice Customization',
      description: 'Train the AI to match your unique brand voice and tone',
      icon: Users
    },
    {
      title: 'Content Scheduling',
      description: 'Schedule and publish content across multiple platforms',
      icon: Clock
    },
    {
      title: 'Analytics Dashboard',
      description: 'Track performance and engagement metrics in real-time',
      icon: BarChart3
    },
    {
      title: 'API Integration',
      description: 'Seamlessly integrate with your existing tools and workflows',
      icon: Code
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and content creators',
      features: [
        '10,000 words/month',
        '5 languages supported',
        'Basic SEO optimization',
        'Email support',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and marketing teams',
      features: [
        '50,000 words/month',
        '25 languages supported',
        'Advanced SEO optimization',
        'Priority support',
        'Custom templates',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited words',
        'All 50+ languages',
        'Custom AI training',
        'Dedicated support',
        'White-label solution',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Generator Pro - Zion Tech Group | $29/month</title>
        <meta name="description" content="Advanced AI-powered content creation tool with multi-language support, SEO optimization, and brand voice customization. Start your free trial today." />
        <meta name="keywords" content="AI content generator, content creation, SEO optimization, multi-language, brand voice, content marketing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-8">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Content Creation
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Content Generator Pro
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Create high-quality, SEO-optimized content in 50+ languages with our advanced AI technology. 
                Perfect for blogs, social media, marketing materials, and more.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link to="/contact" className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link to="/demo" className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-gray-300 text-sm">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">10K+</div>
                  <div className="text-gray-300 text-sm">Happy Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-gray-300 text-sm">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-gray-300 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, optimize, and distribute content at scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group p-8 bg-slate-800/50 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your content creation needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-slate-800/50 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                tier.popular 
                  ? 'border-purple-500/50 shadow-2xl shadow-purple-500/25' 
                  : 'border-purple-500/20 hover:border-purple-500/40'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 ml-2">{tier.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-purple-500/25'
                        : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-12 text-center border border-purple-500/20">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Content Creation?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of content creators, marketers, and businesses already using our AI Content Generator Pro 
              to create amazing content at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                Start Free Trial
              </Link>
              <Link to="/pricing" className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300">
                View All Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiContentGenerator;