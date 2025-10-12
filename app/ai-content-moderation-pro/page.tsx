import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, Eye, CheckCircle, ArrowRight, Brain, Globe, Star } from 'lucide-react';
import Layout from '../layout'
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../layout';

export default function AIContentModerationPro() {
  features = [
    {
      icon: <Brain className="w-6 h-6text-cyan-400" />,
      title: 'AI-Powered Detection',
      description: 'Advanced machine learning models detect harmful content with 99.7% accuracy'
    },
    {
      icon: <Shield className="w-6 h-6text-purple-400" />,
      title: 'Real-time Protection',
      description: 'Instant content analysis and moderation to keep your platform safe'
    },
    {
      icon: <Eye className="w-6 h-6text-yellow-400" />,
      title: 'Multi-format Support',
      description: 'Text, images, videos, and audio content moderation in one platform'
    },
    {
      icon: <Globe className="w-6 h-6text-green-400" />,
      title: 'Global Compliance',
      description: 'Meets international content standards and regulatory requirements'
    }
  ]

  capabilities = [
    {
      category: 'Content Types',
      items: ['Text & Comments', 'Images & Videos', 'Audio & Voice', 'Live Streams', 'User Profiles', 'Chat Messages']
    },
    {
      category: 'Detection Categories',
      items: ['Hate Speech', 'Spam & Scam', 'Violence', 'Adult Content', 'Terrorism', 'Self-Harm']
    },
    {
      category: 'Languages',
      items: ['English', 'Spanish', 'French', 'German', 'Chinese', '50+ More Languages']
    },
    {
      category: 'Platforms',
      items: ['Social Media', 'E-commerce', 'Forums', 'Gaming', 'Streaming', 'Custom APIs']
    }
  ]

  pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small platforms',
      features: [
        'Up to 10,000 content checks/month',
        'Basic AI moderation',
        'Text & image analysis',
        'Email support',
        'Standard response time'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing platforms',
      features: [
        'Up to 100,000 content checks/month',
        'Advanced AI models',
        'All content types',
        'Priority support',
        'Custom rules engine',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large-scale platforms',
      features: [
        'Unlimited content checks',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'Compliance reporting',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  testimonials = [
    {
      name: 'David Kim',
      company: 'SocialFlow Platform',
      content: 'AI Content Moderation Pro reduced our moderation workload by 85% while improving accuracy significantly.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'E-commerce Plus',
      content: 'The real-time detection saved us from multiple PR disasters. Essential for any growing platform.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'Gaming Community Hub',
      content: 'Multi-language support is incredible. We can now moderate content in 15+ languages automatically.',
      rating: 5
    }
  ]

  return (
    <Layout
      title="AI Content Moderation Pro - Advanced Content Safety Platform | Zion Tech Group"
      description="Protect your platform with AI-powered content moderation. Real-time detection, multi-format support, and 99.7% accuracy. Start your free trial today."
      keywords="AI content moderation, content safety, platform protection, automated moderation, content filtering" />
      <div className="mi n-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </div>
        {/* Hero Section */}
    <>
        <section className="p t-20 pb-16 px-4sm:px-6lg:px-8" />
          <div className="ma x-w-7xlmx-auto">
            <div className="tex t-center">
              <div className="inlin e-flex items-center px-4 py-2 bg-red-500/20 rounded-full text-red-400 text-smfont-mediummb-6">
                <Shield className="w-4 h-4mr-2" />
                Advanced Content Safety
    <>
              </div>
              <h1 className="tex t-4xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6"  />AI Content Moderation Pro
              </h1>
              <p className="tex t-lg sm:text-xl text-gray-300 max-w-3 xlmx-automb-8">
              Protect your platform with industry-leading AI content moderation. Real-time detection, 
                multi-format support, and 99.7% accuracy to keep your community safe and compliant.
    <>
              </p>
              <div className="fle x flex-col sm:flex-rowgap-4justify-center">
                <Link to="/contact" className="b g-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 flex items-centerjustify-center" >
          Start Free Trial
                  
          <ArrowRight className="w-5 h-5ml-2"  />
        </Link>
                <Link to="#demo" className="borde r-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Watch Demo
                </Link>
              </div>
          </div>
        </section>

        {/* Features Section */}
    <>
        <section className="p y-16 px-4sm:px-6lg:px-8" />
          <div className="ma x-w-7xlmx-auto">
            <div className="tex t-centermb-16">
              <h2 className="tex t-3 xl sm:text-4xl font-bold text-white mb-4"  />Advanced Content Safety Features
              </h2>
              <p className="tex t-lg text-gray-300 max-w-2xlmx-auto">
              Comprehensive AI-powered protection for all your content needs
              </p>
            </div>
            
            <div className="gri d grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </div>
              {features.map((feature, index) => (
    <>
                <div key="{index}" className="b g-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-red-500/20 hover:border-red-400/40transition-allduration-300" />
                  <div className="fle x items-centermb-4">
                    {feature.icon}
    <>
                    <h3 className="tex t-xl font-semiboldtext-whiteml-3">{feature.title}</h3>
                  </div>
                  <p className="tex t-gray-300">
              {feature.description}</p>
                </div>
              ))}
    <>
            </div>
        </section>

        {/* Capabilities Section */}
    <>
        <section className="p y-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <div className="ma x-w-7xlmx-auto">
            <div className="tex t-centermb-16">
              <h2 className="tex t-3 xl sm:text-4xl font-bold text-white mb-4"  />Comprehensive Moderation Capabilities
              </h2>
              <p className="tex t-lg text-gray-300 max-w-2xlmx-auto">
              Handle any content type, language, or platform with our advanced AI
              </p>
            </div>
            
            <div className="gri d grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </div>
              {capabilities.map((capability, index) => (
    <>
                <div key="{index}" className="b g-slate-800/50 rounded-xl p-6borderborder-slate-700" />
                  <h3 className="tex t-xl font-semiboldtext-white mb-4"   />{capability.category}</h3>
                  <ul className="spac e-y-2" />
                    {capability.items.map((item, itemIndex) => (
                      <li key="{itemIndex}" className="fle x items-center text-gray-300" />
                        <CheckCircle className="w-4 h-4tex t-green-400mr-2" />
                        {item}
                      </li>
                    ))}
    <>
                  </ul>
                </div>
              ))}
    <>
            </div>
        </section>

        {/* Pricing Section */}
    <>
        <section className="p y-16 px-4sm:px-6lg:px-8" />
          <div className="ma x-w-7xlmx-auto">
            <div className="tex t-centermb-16">
              <h2 className="tex t-3 xl sm:text-4xl font-bold text-white mb-4"  />Flexible Pricing Plans
              </h2>
              <p className="tex t-lg text-gray-300 max-w-2xlmx-auto">
              Choose the plan that scales with your platform
              </p>
            </div>
            
            <div className="gri d grid-cols-1md:grid-cols-3gap-8">
        </div>
              {pricingPlans.map((plan, index) => (
                <div key="{index}" className="{`b g-gradient-to-br" from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-red-400/40 scale-105 shadow-2 xl shadow-red-500/20' 
                    : 'border-red-500/20 hover: border-red-400/40'
                }`} />
                  {plan.popular && (
                    <div className="inlin e-flex items-center px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-smfont-mediummb-4">
                      <Star className="w-4 h-4mr-1" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="tex t-2 xl font-bold text-white mb-2"   />{plan.name}</h3>
                  <p className="tex t-gray-300 mb-6">
              {plan.description}</p>
                  <div className="m b-6">
                    <span className="tex t-4xlfont-bold text-white"   />{plan.price}</span>
                    <span className="tex t-gray-400"   />{plan.period}</span>
                  </div>
                  <ul className="spac e-y-3mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="fle x items-center text-gray-300" />
                        <CheckCircle className="w-5 h-5tex t-green-400mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="{`w-ful l" block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white hover:from-red-600 hover:to-purple-700'
                        : 'border-2 border-red-400 text-red-400 hover: bg-red-400/10'
                    }`}
                    />Get Started
    <>
                  </Link>
                </div>
              ))}
    <>
            </div>
        </section>

        {/* Testimonials */}
    <>
        <section className="p y-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <div className="ma x-w-7xlmx-auto">
            <div className="tex t-centermb-12">
              <h2 className="tex t-3 xl font-bold text-white mb-4"  />Trusted by Leading Platforms
              </h2>
              <p className="tex t-gray-300">
              See how our AI content moderation protects platforms worldwide
              </p>
            </div>
            <div className="gri d grid-cols-1md:grid-cols-3gap-8">
              {testimonials.map((testimonial, index) => (
    <>
                <div key="{index}" className="b g-slate-800/50 rounded-xl p-6borderborder-slate-700" />
                  <div className="fle x items-centermb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key="{i}" className="w-5 h-5tex t-yellow-400fill-current" />
                    ))}
    <>
                  </div>
                  <p className="tex t-gray-300 mb-4">
              "{testimonial.content}"</p>
                  <div />
                    <div className="fon t-semiboldtext-white"   />{testimonial.name}</div>
                    <div className="tex t-smtext-gray-400"   />{testimonial.company}</div>
                </div>
              ))}
    <>
            </div>
        </section>

        {/* CTA Section */}
    <>
        <section className="p y-16 px-4sm:px-6lg:px-8" />
          <div className="ma x-w-4 xlmx-autotext-center">
            <div className="b g-gradient-to-r from-red-500/20 to-purple-500/20 rounded-2 xl p-8borderborder-red-500/30">
              <h2 className="tex t-3 xl font-bold text-white mb-4"  />Protect Your Platform Today
              </h2>
              <p className="tex t-lg text-gray-300 mb-8">
              Join thousands of platforms using AI Content Moderation Pro to keep their communities safe
              </p>
              <div className="fle x flex-col sm:flex-rowgap-4justify-center">
                <Link to="/contact" className="b g-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700transition-allduration-300">Start Your Free Trial
                </Link>
                <Link to="/about" className="borde r-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Learn More
                </Link>
              </div>
          </div>
        </section>
      </div>
    </Layout>
  )
};
    </>