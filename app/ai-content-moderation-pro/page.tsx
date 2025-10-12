import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, Eye, Check Circle, Arrow Right, Brain, Globe, Star } from 'lucide-react';
import Layout from '../layout'
import React from 'react';
import { Link } from 'react-router-dom';
import { Arrow Right } from 'lucide-react';
import Layout from '../layout';

export default function A IContent Moderation Pro() {
  const features = [
    {
      icon: <B rainclass Name="w-6h-6t e xt-c y an-400" />,
      title: 'A I-Powered Detection',
      description: 'Advanced machine learning models detect harmful content with 99.7% accuracy'
    },
    {
      icon: <S hieldclass Name="w-6h-6t e xt-p u rple-400" />,
      title: 'Real-time Protection',
      description: 'Instant content analysis and moderation to keep your platform safe'
    },
    {
      icon: <E yeclass Name="w-6h-6t e xt-y e llow-400" />,
      title: 'Multi-format Support',
      description: 'Text, images, videos, and audio content moderation in one platform'
    },
    {
      icon: <G lobeclass Name="w-6h-6t e xt-g r een-400" />,
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
      items: ['Social Media', 'E-commerce', 'Forums', 'Gaming', 'Streaming', 'Custom A P Is']
    }
  ]

  const pricing Plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small platforms',
      features: [
        'Up to 10,000 content checks/month',
        'Basic A I moderation',
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
        'Advanced A I models',
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
        'Custom A I training',
        'White-label solution',
        'Dedicated support',
        'Compliance reporting',
        'S L A guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'David Kim',
      company: 'Social Flow Platform',
      content: 'A I Content Moderation Pro reduced our moderation workload by 85% while improving accuracy significantly.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'E-commerce Plus',
      content: 'The real-time detection saved us from multiple P R disasters. Essential for any growing platform.',
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
    <L ayout
      title="A I Content Moderation Pro - Advanced Content Safety Platform | Zion Tech Group"
      description="Protect your platform with A I-powered content moderation. Real-time detection, multi-format support, and 99.7% accuracy. Start your free trial today."
      keywords="A I content moderation, content safety, platform protection, automated moderation, content filtering" />
      <d iv class Name="m in-h-s c reen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </d iv>
        {/* Hero Section */}

        <s ection class Name="p t-20 p b-16 px-4sm:px-6lg:px-8" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <d iv class Name="t e x t-center" />
              <d iv class Name="i n l i ne-flex items-center px-4 py-2 bg-red-500/20 rounded-full text-red-400 text-smfont-mediummb-6">
        </d iv>
                <S hieldclass Name="w-4h-4m r-2" / />
                Advanced Content Safety

              </d iv>
              <h1 c lass Name="t e xt-4 xl sm:t e xt-5 xl md:text-6 xl font-boldtext-white mb-6">A I Content Moderation Pro
              </h1>
              <p c lass Name="t e x t-lg sm:text-xl text-gray-300 max-w-3 xlmx-automb-8">
              Protect your platform with industry-leading A I content moderation. Real-time detection, 
                multi-format support, and 99.7% accuracy to keep your community safe and compliant.

              </p>
              <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>
                <L ink to="/contact" class Name="b g-g r a dient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
                  Start Free Trial

                  <A rrow Rightclass Name="w-5h-5m l-2" />
                </L ink>
                <L ink to="#demo" class Name="b o r d er-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Watch Demo
                </L ink>
              </d iv>
          </d iv>
        </s ection>

        {/* Features Section */}

        <s ection class Name="p y-16 p x-4sm:px-6lg:px-8" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-3 xl sm:t e xt-4 xl font-boldtext-whitemb-4">Advanced Content Safety Features
              </h2>
              <p c lass Name="t e x t-lg text-gray-300 max-w-2xlmx-auto" />
                Comprehensive A I-powered protection for all your content needs

              </p>
            </d iv>
            
            <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
              {features.map((feature, index) => (

                <d ivkey="{index}" class Name="b g-g r a dient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-red-500/20 hover:border-red-400/40transition-allduration-300" />
                  <d iv class Name="f l e x items-centermb-4">
        </d iv>
                    {feature.icon}

                    <h3 c lass Name="t e xt-xl f o nt-semiboldtext-whiteml-3">{feature.title}</h3>
                  </d iv>
                  <p c lass Name="t e xt-g r ay-300">{feature.description}</p>
                </d iv>
              ))}

            </d iv>
        </s ection>

        {/* Capabilities Section */}

        <s ection class Name="p y-16 p x-4 sm:px-6 lg:px-8 bg-g r adient-to-rfrom-slate-800/30to-purple-900/30" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-3 xl sm:t e xt-4 xl font-boldtext-whitemb-4">Comprehensive Moderation Capabilities
              </h2>
              <p c lass Name="t e x t-lg text-gray-300 max-w-2xlmx-auto" />
                Handle any content type, language, or platform with our advanced A I

              </p>
            </d iv>
            
            <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
              {capabilities.map((capability, index) => (

                <d ivkey="{index}" class Name="b g-s l a te-800/50 rounded-xl p-6borderborder-slate-700" />
                  <h3 c lass Name="t e xt-xl f o nt-semiboldtext-whitemb-4">{capability.category}</h3>
                  <u lclass Name="s p a c e-y-2" />
                    {capability.items.map((item, item Index) => (

                      <l ikey="{item Index}" class Name="f l e x items-centertext-gray-300" />
                        <C heck Circleclass Name="w-4 h-4t e xt-g r een-400mr-2" / />
                        {item}
                      </l i>
                    ))}

                  </u l>
                </d iv>
              ))}

            </d iv>
        </s ection>

        {/* Pricing Section */}

        <s ection class Name="p y-16 p x-4sm:px-6lg:px-8" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-3 xl sm:t e xt-4 xl font-boldtext-whitemb-4">Flexible Pricing Plans
              </h2>
              <p c lass Name="t e x t-lg text-gray-300 max-w-2xlmx-auto" />
                Choose the plan that scales with your platform

              </p>
            </d iv>
            
            <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
              {pricing Plans.map((plan, index) => (
                <d ivkey="{index}" class Name="{`b g-g r a dient-to-br" from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-red-400/40 scale-105 shadow-2 xl shadow-red-500/20' 
                    : 'border-red-500/20 hover: border-red-400/40'
                }`} />
                  {plan.popular && (

                    <d iv class Name="i n l i ne-flex items-center px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-smfont-mediummb-4">
        </d iv>
                      <S tarclass Name="w-4h-4m r-1" / />
                      Most Popular
                    </d iv>
                  )}

                  <h3 c lass Name="t e xt-2 xl f o nt-boldtext-whitemb-2">{plan.name}</h3>
                  <p c lass Name="t e xt-g r ay-300mb-6">{plan.description}</p>
                  <d iv class Name="m b-6">
        </d iv>
                    <s pan class Name="t e xt-4 x l font-boldtext-white">{plan.price}</s pan>
                    <s pan class Name="t e xt-g r ay-400">{plan.period}</s pan>
                  </d iv>
                  <u lclass Name="s p a c e-y-3mb-8" />
                    {plan.features.map((feature, feature Index) => (

                      <l ikey="{feature Index}" class Name="f l e x items-centertext-gray-300" />
                        <C heck Circleclass Name="w-5 h-5t e xt-g r een-400mr-3" / />
                        {feature}
                      </l i>
                    ))}
                  </u l>
                  <L ink
                    to="/contact"
                    class Name="{`w-f u ll" block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white hover:from-red-600 hover:to-purple-700'
                        : 'border-2 border-red-400 text-red-400 hover: bg-red-400/10'
                    }`}
                    />Get Started

                  </L ink>
                </d iv>
              ))}

            </d iv>
        </s ection>

        {/* Testimonials */}

        <s ection class Name="p y-16 p x-4 sm:px-6 lg:px-8 bg-g r adient-to-rfrom-slate-800/30to-purple-900/30" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-12">
        </d iv>
              <h2 c lass Name="t e xt-3 xl f o nt-boldtext-whitemb-4">Trusted by Leading Platforms
              </h2>
              <p c lass Name="t e xt-g r ay-300" />
                See how our A I content moderation protects platforms worldwide

              </p>
            </d iv>
            <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
              {testimonials.map((testimonial, index) => (

                <d ivkey="{index}" class Name="b g-s l a te-800/50 rounded-xl p-6borderborder-slate-700" />
                  <d iv class Name="f l e x items-centermb-4">
        </d iv>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <S tarkey="{i}" class Name="w-5 h-5t e xt-y e llow-400fill-current" />
                    ))}

                  </d iv>
                  <p c lass Name="t e xt-g r ay-300mb-4">"{testimonial.content}"</p>
                  <d iv />
                    <d iv class Name="f o nt-s e miboldtext-white">{testimonial.name}</d iv>
                    <d iv class Name="t e xt-s m text-gray-400">{testimonial.company}</d iv>
                </d iv>
              ))}

            </d iv>
        </s ection>

        {/* C T A Section */}

        <s ection class Name="p y-16 p x-4sm:px-6lg:px-8" />
          <d iv class Name="m a x-w-4 x l mx-autotext-center">
        </d iv>
            <d iv class Name="b g-g r a dient-to-r from-red-500/20 to-purple-500/20 rounded-2 xl p-8borderborder-red-500/30">
        </d iv>
              <h2 c lass Name="t e xt-3 xl f o nt-boldtext-whitemb-4">Protect Your Platform Today
              </h2>
              <p c lass Name="t e x t-lgtext-gray-300 mb-8" />
                Join thousands of platforms using A I Content Moderation Pro to keep their communities safe

              </p>
              <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>
                <L ink to="/contact" class Name="b g-g r a dient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700transition-allduration-300">Start Your Free Trial
                </L ink>
                <L ink to="/about" class Name="b o r d er-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Learn More
                </L ink>
              </d iv>
          </d iv>
        </s ection>
      </d iv>
    </L ayout>
  )
};
