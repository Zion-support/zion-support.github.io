import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import Layout from '../layout'
import React from 'react';
=======

import { Languages, ArrowRight, CheckCircle, Brain, Star, Target, Clock, FileText } from 'lucide-react';

import Layout from '../layout'

import React from 'react';

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
import { Link } from 'react-router-dom';
import { Languages, ArrowRight} from 'lucide-react';
import Layout from '../layout';

export default function AITranslationService() {
  const features = [
<<<<<<< HEAD
    {
      icon: <Brain className="w-5 h-5ml-2" />,
      title: 'Neural Machine Translation',
      description: 'Advanced AI models provide contextually accurate translations in 100+ languages'
    },
    {
      icon: <FileText className="w-5 h-5ml-2" />,
      title: 'Document Translation',
      description: 'Translate entire documents while preserving formatting, layout, and structure'
    },
    {
      icon: <Clock className="w-5 h-5ml-2" />,
      title: 'Real-time Translation',
      description: 'Instant translation for live conversations, meetings, and customer support'
    },
    {
      icon: <Target className="w-5 h-5ml-2" />,
=======
      icon: <Brain className="w-6h-6text-cyan-400" />,
      title: 'Neural Machine Translation',
      description: 'Advanced AI models provide contextually accurate translations in 100+ languages'
    },
      icon: <FileText className="w-6h-6text-purple-400" />,
      title: 'Document Translation',
      description: 'Translate entire documents while preserving formatting, layout, and structure'
    },
      icon: <Clock className="w-6h-6text-yellow-400" />,
      title: 'Real-time Translation',
      description: 'Instant translation for live conversations, meetings, and customer support'
    },
      icon: <Target className="w-6h-6text-green-400" />,
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
      title: 'Industry-Specific Translation',
      description: 'Specialized translation models for legal, medical, technical, and business content'
  ]

  const translationFeatures = [
      category: 'Translation Types',
      items: ['Text Translation', 'Document Translation', 'Website Translation', 'Audio Translation', 'Video Subtitles', 'Live Translation']
    },
      category: 'Languages',
      items: ['100+ Languages', 'Regional Dialects', 'Rare Languages', 'Sign Language', 'Technical Jargon', 'Cultural Adaptation']
    },
      category: 'Quality Assurance',
      items: ['Human Review', 'Quality Scoring', 'Consistency Checks', 'Terminology Management', 'Style Guides', 'Proofreading']
    },
      category: 'Integration',
      items: ['API Access', 'CMS Integration', 'Website Widgets', 'Mobile Apps', 'Desktop Software', 'Cloud Storage']
  ]

  const pricingPlans = [
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
        'API access'
      ],
      popular: false
    },
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
        'SLA guarantee'
      ],
      popular: false
  ]

  const testimonials = [
      name: 'Maria Santos',
      company: 'Global Marketing Agency',
      content: 'AI Translation Service helped us expand to 15 new markets. The quality is exceptional and cost-effective.',
      rating: 5
    },
      name: 'James Wilson',
      company: 'E-learning Platform',
      content: 'Translating our courses into 8 languages was seamless. The educational content translation is spot-on.',
      rating: 5
    },
      name: 'Lisa Chen',
      company: 'Legal Firm',
      content: 'The legal translation accuracy is impressive. Our international clients are very satisfied with the service.',
      rating: 5
  ]

  return (
<<<<<<< HEAD
    <Layout
      title="AI Translation Service - Professional Translation Solutions | Zion Tech Group"
      description="Transform your global communication with AI-powered translation in 100+ languages. Professional quality, real-time translation, and industry-specific solutions. Start your free trial today."
      keywords="AI translation, machine translation, document translation, multilingual content, translation API, language services" />
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <Languages className="w-5 h-5ml-2" />
                AI-Powered Translation
              </div>
              <h1 className="w-5 h-5ml-2">AI Translation Service
              </h1>
              <p className="w-5 h-5ml-2">Transform your global communication with AI-powered translation in 100+ languages. 
                Professional quality, real-time translation, and industry-specific solutions.
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <Link
          to="/contact"
          className="bg-gradient-to-rfrom-amber-500to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-purple-700 transition-all duration-300 flexitems-center justify-center"
        >
          Start Free Trial
                  
          <ArrowRight className="w-5 h-5ml-2" />
        </Link>
                <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10 transition-colors">Try Demo
                </Link>
              </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />Intelligent Translation Solutions
              </h2>
              <p className="w-5 h-5ml-2">AI-powered features that break down language barriers and enable global communication
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {features.map((feature, index) => (
                <div key="{index}" className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-amber-500/20 hover:border-amber-400/40transition-allduration-300" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    {feature.icon}
                    <h3 className="w-5 h-5ml-2" />{feature.title}</h3>
                  </div>
                  <p className="w-5 h-5ml-2">{feature.description}</p>
                </div>
              ))}
            </div>
        </section>

        {/* Translation Features */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />Complete Translation Platform
              </h2>
              <p className="w-5 h-5ml-2">Everything you need to translate content across languages and cultures
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {translationFeatures.map((feature, index) => (
                <div key="{index}" className="bg-slate-800/50 rounded-xl p-6borderborder-slate-700" />
                  <h3 className="w-5 h-5ml-2" />{feature.category}</h3>
                  <ul className="w-5 h-5ml-2" />
                    {feature.items.map((item, itemIndex) => (
                      <li key="{itemIndex}" className="flex items-center text-gray-300" />
                        <CheckCircle className="w-5 h-5ml-2" />
=======

        {/* Hero Section */}
    
                AI-Powered Translation

              <h1 className="text-4 xl sm:text-5 xl md:text-6 xl font-boldtext-whitemb-6">AI Translation Service

              Transform your global communication with AI-powered translation in 100+ languages. 
                Professional quality, real-time translation, and industry-specific solutions.
    
                  Start Free Trial

                <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Try Demo

        {/* Features Section */}
    
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-whitemb-4">Intelligent Translation Solutions
                AI-powered features that break down language barriers and enable global communication

 (

                    {feature.icon}
    
                    <h3 className="text-xl font-semiboldtext-whiteml-3">{feature.title}</h3>

                  <p className="text-gray-300">{feature.description}</p>

              ))}

        {/* Translation Features */}
    
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-whitemb-4">Complete Translation Platform
                Everything you need to translate content across languages and cultures

 (
    
                  <h3 className="text-xl font-semiboldtext-whitemb-4">{feature.category}</h3>
 (
    
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
                        {item}
                    ))}
<<<<<<< HEAD
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
              <p className="w-5 h-5ml-2">Choose the plan that fits your translation needs
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {pricingPlans.map((plan, index) => (
                <div key="{index}" className="{`bg-gradient-to-br" from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-amber-400/40 scale-105 shadow-2 xl shadow-amber-500/20' 
                    : 'border-amber-500/20 hover: border-amber-400/40'
                }`} />
                  {plan.popular && (
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                      <Star className="w-5 h-5ml-2" />
=======
    
              ))}

        {/* Pricing Section */}
    
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-whitemb-4">Flexible Pricing Plans
                Choose the plan that fits your translation needs

 (
                  {plan.popular && (

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
                      Most Popular
                  )}
<<<<<<< HEAD
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
=======
    
                  <h3 className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                  <p className="text-gray-300mb-6">{plan.description}</p>
                    <span className="text-4 xlfont-boldtext-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
 (
    
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
                        {feature}
                    ))}
                  
                    to="/contact"
                    className="{`w-full" block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-amber-500 to-purple-600 text-white hover:from-amber-600 hover:to-purple-700'
                        : 'border-2 border-amber-400 text-amber-400 hover: bg-amber-400/10'
                    }`}
<<<<<<< HEAD
                    />Get Started
                  </Link>
                </div>
              ))}
            </div>
        </section>

        {/* Testimonials */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />Trusted by Global Businesses
              </h2>
              <p className="w-5 h-5ml-2">See how our AI Translation Service enables global communication
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
              <h2 className="w-5 h-5ml-2" />Break Down Language Barriers Today
              </h2>
              <p className="w-5 h-5ml-2">Join thousands of businesses using AI Translation Service to reach global audiences
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <Link to="/contact" className="bg-gradient-to-rfrom-amber-500to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-purple-700transition-allduration-300">Start Your Free Trial
                </Link>
                <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10 transition-colors">Learn More
                </Link>
              </div>
          </div>
        </section>
      </div>
    </Layout>
  )
};
=======
Get Started
    
              ))}

        {/* Testimonials */}
    
              <h2 className="text-3 xl font-boldtext-whitemb-4">Trusted by Global Businesses
                See how our AI Translation Service enables global communication

 (

 (
                    ))}

                  <p className="text-gray-300mb-4">"{testimonial.content}"</p>
                    <div className="font-semiboldtext-white">{testimonial.name}</div>
                    <div className="text-smtext-gray-400">{testimonial.company}</div>

              ))}

        {/* CTA Section */}
    
              <h2 className="text-3 xl font-boldtext-whitemb-4">Break Down Language Barriers Today
                Join thousands of businesses using AI Translation Service to reach global audiences

                <Link to="/contact" className="bg-gradient-to-r from-amber-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-purple-700transition-allduration-300">Start Your Free Trial
                <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Learn More
  )
};
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
