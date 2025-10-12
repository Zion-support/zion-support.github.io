import React from 'react'
import { Link } from 'react-router-dom'
import { Languages, ArrowRight, CheckCircle, Brain, Star, Target, Clock, File Text } from 'lucide-react';
import Layout from '../layout'
import React from 'react';
import { Link } from 'react-router-dom';
import { Languages, ArrowRight} from 'lucide-react';
import Layout from '../layout';

export default function A ITranslation Service() {
  const features = [
    {
      icon: <B rain class Name="w-6h-6t ext-cyan-400" />,
      title: 'Neural Machine Translation',
      description: 'Advanced A I models provide contextually accurate translations in 100+ languages'
    },
    {
      icon: <F ile Text class Name="w-6h-6t ext-purple-400" />,
      title: 'Document Translation',
      description: 'Translate entire documents while preserving formatting, layout, and structure'
    },
    {
      icon: <C lock class Name="w-6h-6t ext-yellow-400" />,
      title: 'Real-time Translation',
      description: 'Instant translation for live conversations, meetings, and customer support'
    },
    {
      icon: <T arget class Name="w-6h-6t ext-green-400" />,
      title: 'Industry-Specific Translation',
      description: 'Specialized translation models for legal, medical, technical, and business content'
    }
  ]

  const translation Features = [
    {
      category: 'Translation Types',
      items: ['Text Translation', 'Document Translation', 'Website Translation', 'Audio Translation', 'Video Subtitles', 'Live Translation']
    },
    {
      category: 'Languages',
      items: ['100+ Languages', 'Regional Dialects', 'Rare Languages', 'Sign Language', 'Technical Jargon', 'Cultural Adaptation']
    },
    {
      category: 'Quality Assurance',
      items: ['Human Review', 'Quality Scoring', 'Consistency Checks', 'Terminology Management', 'Style Guides', 'Proofreading']
    },
    {
      category: 'Integration',
      items: ['A PI Access', 'C MS Integration', 'Website Widgets', 'Mobile Apps', 'Desktop Software', 'Cloud Storage']
    }
  ]

  const pricing Plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and freelancers',
      features: [
        'Up to 10,000 words/month',
        '50+ languages',
        'Basic document translation',
        'Email support',
        'Standard quality',
        'A PI access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100,000 words/month',
        '100+ languages',
        'Advanced document translation',
        'Priority support',
        'High quality',
        'Human review',
        'Custom terminology'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited words',
        'All languages',
        'Custom translation models',
        'Dedicated support',
        'Premium quality',
        'White-label solution',
        'S LA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Maria Santos',
      company: 'Global Marketing Agency',
      content: 'A I Translation Service helped us expand to 15 new markets. The quality is exceptional and cost-effective.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'E-learning Platform',
      content: 'Translating our courses into 8 languages was seamless. The educational content translation is spot-on.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      company: 'Legal Firm',
      content: 'The legal translation accuracy is impressive. Our international clients are very satisfied with the service.',
      rating: 5
    }
  ]

  return (
    <L ayout
      title="A I Translation Service - Professional Translation Solutions | Zion Tech Group"
      description="Transform your global communication with A I-powered translation in 100+ languages. Professional quality, real-time translation, and industry-specific solutions. Start your free trial today."
      keywords="A I translation, machine translation, document translation, multilingual content, translation A PI, language services" />
      <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </d iv>
        {/* Hero Section */}

        <s ection class Name="p t-20 pb-16 px-4sm:px-6lg:px-8" />
          <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-center" />
              <d iv class Name="i nline-flex items-center px-4 py-2 bg-amber-500/20 rounded-full text-amber-400 text-smfont-mediummb-6">
        </d iv>
                <L anguages class Name="w-4h-4m r-2" / />
                A I-Powered Translation

              </d iv>
              <h1 c lass Name="t ext-4 xl sm:text-5 xl md:text-6 xl font-boldtext-whitemb-6">A I Translation Service
              </h1>
              <p c lass Name="t ext-lg sm:text-xl text-gray-300 max-w-3 xlmx-automb-8">
              Transform your global communication with A I-powered translation in 100+ languages. 
                Professional quality, real-time translation, and industry-specific solutions.

              </p>
              <d iv class Name="f lex flex-col sm:flex-rowgap-4justify-center">
        </d iv>
                <L ink to="/contact" class Name="b g-gradient-to-r from-amber-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
                  Start Free Trial

                  <A rrow Right class Name="w-5h-5m l-2" />
                </L ink>
                <L ink to="#demo" class Name="b order-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Try Demo
                </L ink>
              </d iv>
          </d iv>
        </s ection>

        {/* Features Section */}

        <s ection class Name="p y-16 px-4sm:px-6lg:px-8" />
          <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-3 xl sm:text-4 xl font-boldtext-whitemb-4">Intelligent Translation Solutions
              </h2>
              <p c lass Name="t ext-lg text-gray-300 max-w-2xlmx-auto" />
                A I-powered features that break down language barriers and enable global communication

              </p>
            </d iv>
            
            <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
              {features.map((feature, index) => (

                <d iv key="{index}" class Name="b g-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-amber-500/20 hover:border-amber-400/40transition-allduration-300" />
                  <d iv class Name="f lexitems-centermb-4">
        </d iv>
                    {feature.icon}

                    <h3 c lass Name="t ext-xl font-semiboldtext-whiteml-3">{feature.title}</h3>
                  </d iv>
                  <p c lass Name="t ext-gray-300">{feature.description}</p>
                </d iv>
              ))}

            </d iv>
        </s ection>

        {/* Translation Features */}

        <s ection class Name="p y-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-3 xl sm:text-4 xl font-boldtext-whitemb-4">Complete Translation Platform
              </h2>
              <p c lass Name="t ext-lg text-gray-300 max-w-2xlmx-auto" />
                Everything you need to translate content across languages and cultures

              </p>
            </d iv>
            
            <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
              {translation Features.map((feature, index) => (

                <d iv key="{index}" class Name="b g-slate-800/50 rounded-xl p-6borderborder-slate-700" />
                  <h3 c lass Name="t ext-xl font-semiboldtext-whitemb-4">{feature.category}</h3>
                  <u l class Name="s pace-y-2" />
                    {feature.items.map((item, item Index) => (

                      <l i key="{item Index}" class Name="f lexitems-centertext-gray-300" />
                        <C heck Circle class Name="w-4 h-4t ext-amber-400mr-2" / />
                        {item}
                      </l i>
                    ))}

                  </u l>
                </d iv>
              ))}

            </d iv>
        </s ection>

        {/* Pricing Section */}

        <s ection class Name="p y-16 px-4sm:px-6lg:px-8" />
          <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-3 xl sm:text-4 xl font-boldtext-whitemb-4">Flexible Pricing Plans
              </h2>
              <p c lass Name="t ext-lg text-gray-300 max-w-2xlmx-auto" />
                Choose the plan that fits your translation needs

              </p>
            </d iv>
            
            <d iv class Name="g rid grid-cols-1md:grid-cols-3gap-8">
        </d iv>
              {pricing Plans.map((plan, index) => (
                <d iv key="{index}" class Name="{`b g-gradient-to-br" from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-amber-400/40 scale-105 shadow-2 xl shadow-amber-500/20' 
                    : 'border-amber-500/20 hover: border-amber-400/40'
                }`} />
                  {plan.popular && (

                    <d iv class Name="i nline-flex items-center px-3 py-1 bg-amber-500/20 rounded-full text-amber-400 text-smfont-mediummb-4">
        </d iv>
                      <S tar class Name="w-4h-4m r-1" / />
                      Most Popular
                    </d iv>
                  )}

                  <h3 c lass Name="t ext-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                  <p c lass Name="t ext-gray-300mb-6">{plan.description}</p>
                  <d iv class Name="m b-6">
        </d iv>
                    <s pan class Name="t ext-4 xlfont-boldtext-white">{plan.price}</s pan>
                    <s pan class Name="t ext-gray-400">{plan.period}</s pan>
                  </d iv>
                  <u l class Name="s pace-y-3mb-8" />
                    {plan.features.map((feature, feature Index) => (

                      <l i key="{feature Index}" class Name="f lexitems-centertext-gray-300" />
                        <C heck Circle class Name="w-5 h-5t ext-amber-400mr-3" / />
                        {feature}
                      </l i>
                    ))}
                  </u l>
                  <L ink
                    to="/contact"
                    class Name="{`w-f ull" block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-amber-500 to-purple-600 text-white hover:from-amber-600 hover:to-purple-700'
                        : 'border-2 border-amber-400 text-amber-400 hover: bg-amber-400/10'
                    }`}
                    />Get Started

                  </L ink>
                </d iv>
              ))}

            </d iv>
        </s ection>

        {/* Testimonials */}

        <s ection class Name="p y-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-12">
        </d iv>
              <h2 c lass Name="t ext-3 xl font-boldtext-whitemb-4">Trusted by Global Businesses
              </h2>
              <p c lass Name="t ext-gray-300" />
                See how our A I Translation Service enables global communication

              </p>
            </d iv>
            <d iv class Name="g rid grid-cols-1md:grid-cols-3gap-8">
        </d iv>
              {testimonials.map((testimonial, index) => (

                <d iv key="{index}" class Name="b g-slate-800/50 rounded-xl p-6borderborder-slate-700" />
                  <d iv class Name="f lexitems-centermb-4">
        </d iv>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <S tar key="{i}" class Name="w-5 h-5t ext-yellow-400fill-current" />
                    ))}

                  </d iv>
                  <p c lass Name="t ext-gray-300mb-4">"{testimonial.content}"</p>
                  <d iv />
                    <d iv class Name="f ont-semiboldtext-white">{testimonial.name}</d iv>
                    <d iv class Name="t ext-smtext-gray-400">{testimonial.company}</d iv>
                </d iv>
              ))}

            </d iv>
        </s ection>

        {/* C TA Section */}

        <s ection class Name="p y-16 px-4sm:px-6lg:px-8" />
          <d iv class Name="m ax-w-4 xlmx-autotext-center">
        </d iv>
            <d iv class Name="b g-gradient-to-r from-amber-500/20 to-purple-500/20 rounded-2 xl p-8borderborder-amber-500/30">
        </d iv>
              <h2 c lass Name="t ext-3 xl font-boldtext-whitemb-4">Break Down Language Barriers Today
              </h2>
              <p c lass Name="t ext-lgtext-gray-300mb-8" />
                Join thousands of businesses using A I Translation Service to reach global audiences

              </p>
              <d iv class Name="f lex flex-col sm:flex-rowgap-4justify-center">
        </d iv>
                <L ink to="/contact" class Name="b g-gradient-to-r from-amber-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-purple-700transition-allduration-300">Start Your Free Trial
                </L ink>
                <L ink to="/about" class Name="b order-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Learn More
                </L ink>
              </d iv>
          </d iv>
        </s ection>
      </d iv>
    </L ayout>
  )
};
