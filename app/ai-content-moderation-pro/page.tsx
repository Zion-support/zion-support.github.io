import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout'

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../layout';

export default function AIContentModerationPro() {
  const features = [
    {
      icon: <Brain className="w-5 h-5ml-2" />,
      title: 'AI-Powered Detection',
      description: 'Advanced machine learning models detect harmful content with 99.7% accuracy'
    },
    {
      icon: <Shield className="w-5 h-5ml-2" />,
      title: 'Real-time Protection',
      description: 'Instant content analysis and moderation to keep your platform safe'
    },
    {
      icon: <Eye className="w-5 h-5ml-2" />,
      title: 'Multi-format Support',
      description: 'Text, images, videos, and audio content moderation in one platform'
    },
    {
      icon: <Globe className="w-5 h-5ml-2" />,
      title: 'Global Compliance',
      description: 'Meets international content standards and regulatory requirements'
    }
  ]

  const capabilities = [
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

  const pricingPlans = [
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

  const testimonials = [
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
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <Shield className="w-5 h-5ml-2" />
                Advanced Content Safety
              </div>
              <h1 className="w-5 h-5ml-2">AI Content Moderation Pro
              </h1>
              <p className="w-5 h-5ml-2">Protect your platform with industry-leading AI content moderation. Real-time detection, 
                multi-format support, and 99.7% accuracy to keep your community safe and compliant.
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <Link
          to="/contact"
          className="bg-gradient-to-rfrom-red-500to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 flexitems-center justify-center"
        >
          Start Free Trial
                  
          <ArrowRight className="w-5 h-5ml-2" />
        </Link>
                <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10 transition-colors">Watch Demo
                </Link>
              </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />Advanced Content Safety Features
              </h2>
              <p className="w-5 h-5ml-2">Comprehensive AI-powered protection for all your content needs
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {features.map((feature, index) => (
                <div key="{index}" className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-red-500/20 hover:border-red-400/40transition-allduration-300" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    {feature.icon}
                    <h3 className="w-5 h-5ml-2" />{feature.title}</h3>
                  </div>
                  <p className="w-5 h-5ml-2">{feature.description}</p>
                </div>
              ))}
            </div>
        </section>

        {/* Capabilities Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />Comprehensive Moderation Capabilities
              </h2>
              <p className="w-5 h-5ml-2">Handle any content type, language, or platform with our advanced AI
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {capabilities.map((capability, index) => (
                <div key="{index}" className="bg-slate-800/50 rounded-xl p-6borderborder-slate-700" />
                  <h3 className="w-5 h-5ml-2" />{capability.category}</h3>
                  <ul className="w-5 h-5ml-2" />
                    {capability.items.map((item, itemIndex) => (
                      <li key="{itemIndex}" className="flex items-center text-gray-300" />
                        <CheckCircle className="w-5 h-5ml-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </section>

        {/* Pricing Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />Flexible Pricing Plans
              </h2>
              <p className="w-5 h-5ml-2">Choose the plan that scales with your platform
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">

              {pricingPlans.map((plan, index) => (
                <d iv k ey="{index}" c las sNa me="{`b g-g rad ient-to-br" from-s late-800/50 to-purple-900/30 rounded-xl p-8 border transit ion-all duration-300 ${
                  plan.popular 
                    ? 'border-red-400/40 scale-105 shadow-2 xl shadow-red-500/20' 
                    : 'border-red-500/20 hover: border-red-400/40'
                }`} />
                  {plan.popular && (

                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                      <Star className="w-5 h-5ml-2" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="w-5 h-5ml-2" />{plan.name}</h3>
                  <p className="w-5 h-5ml-2">{plan.description}</p>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    <span className="w-5 h-5ml-2" />{plan.price}</span>
                    <span className="w-5 h-5ml-2" />{plan.period}</span>
                  </div>
                  <ul className="w-5 h-5ml-2" />
                    {plan.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="flex items-center text-gray-300" />
                        <CheckCircle className="w-5 h-5ml-2" />
                        {feature}

                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/c ont act"
                    c las sNa me="{`w-f ull" b lock text-c ente-r py-3 px-6 rounded-lg font-semibold transit ion-all duration-300 ${
                      plan.popular
                        ? 'bg-g rad ient-to-r from-red-500 to-purple-600 text-w hit-e hover:from-red-600 hover:to-purple-700'
                        : 'border-2 border-red-400 text-r-e-d-400 hover: bg-red-400/10'
                    }`}

                    />Get Started

                  </Link>
                </d iv>
              ))}

            </div>
        </section>

        {/* Testimonials */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />Trusted by Leading Platforms
              </h2>
              <p className="w-5 h-5ml-2">See how our AI content moderation protects platforms worldwide
              </p>
            </div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {testimonials.map((testimonial, index) => (
                <div key="{index}" className="bg-slate-800/50 rounded-xl p-6borderborder-slate-700" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key="{i}" className="w-5 h-5te xt-yellow-400fill-current"  />
                    ))}
                  </div>
                  <p className="w-5 h-5ml-2">"{testimonial.content}"</p>
                  <div />
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.name}</div>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.company}</div>
                </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />Protect Your Platform Today
              </h2>
              <p className="w-5 h-5ml-2">Join thousands of platforms using AI Content Moderation Pro to keep their communities safe
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <Link to="/contact" className="bg-gradient-to-rfrom-red-500to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700transition-allduration-300">Start Your Free Trial
                </Link>
                <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10 transition-colors">Learn More

                </Link>
              </d iv>
          </d iv>
        </s ect ion>
      </d iv>
    </Layout>
  )
};