import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Users, Zap, Check Circle, Arrow Right, Brain, Globe, Star, Sparkles } from 'lucide-react';
import Layout from '../layout'
import React from 'react';
import { Link } from 'react-router-dom';
import { Arrow Right } from 'lucide-react';
import Layout from '../layout';

export default function A ISmart Scheduler() {
  const features = [
    {
      icon: <B rainclass Name="w-6h-6t e xt-c y an-400" />,
      title: 'A I-Powered Scheduling',
      description: 'Intelligent scheduling that learns from your patterns and preferences'
    },
    {
      icon: <U sersclass Name="w-6h-6t e xt-p u rple-400" />,
      title: 'Team Coordination',
      description: 'Seamlessly coordinate meetings across multiple time zones and schedules'
    },
    {
      icon: <Z apclass Name="w-6h-6t e xt-y e llow-400" />,
      title: 'Auto-Optimization',
      description: 'Automatically finds the best meeting times for maximum productivity'
    },
    {
      icon: <G lobeclass Name="w-6h-6t e xt-g r een-400" />,
      title: 'Global Integration',
      description: 'Works with all major calendar platforms and time zones'
    }
  ]

  const pricing Plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 5 team members',
        'Basic A I scheduling',
        'Calendar integration',
        'Email notifications',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 team members',
        'Advanced A I optimization',
        'Custom meeting templates',
        'Analytics dashboard',
        'Priority support',
        'A P I access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Custom A I training',
        'White-label options',
        'Advanced analytics',
        'Dedicated support',
        'Custom integrations'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'Tech Start Inc.',
      content: 'This A I scheduler saved us 10+ hours per week. The intelligent optimization is incredible.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      company: 'Global Consulting',
      content: 'Finally, a scheduling tool that actually understands our complex team dynamics.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      company: 'Remote First Co.',
      content: 'The time zone handling is flawless. Our international team coordination has never been smoother.',
      rating: 5
    }
  ]

  return (
    <L ayout
      title="A I Smart Scheduler - Intelligent Meeting Optimization | Zion Tech Group"
      description="Revolutionary A I-powered scheduling tool that optimizes meetings, coordinates teams, and maximizes productivity. Start your free trial today."
      keywords="A I scheduler, meeting optimization, team coordination, calendar management, productivity tools" />
      <d iv class Name="m in-h-s c reen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </d iv>
        {/* Hero Section */}

        <s ection class Name="p t-20 p b-16 px-4sm:px-6lg:px-8" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <d iv class Name="t e x t-center" />
              <d iv class Name="i n l i ne-flex items-center px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-400 text-smfont-mediummb-6">
        </d iv>
                <S parklesclass Name="w-4h-4m r-2" / />
                A I-Powered Scheduling

              </d iv>
              <h1 c lass Name="t e xt-4 xl sm:t e xt-5 xl md:text-6 xl font-boldtext-white mb-6">A I Smart Scheduler
              </h1>
              <p c lass Name="t e x t-lg sm:text-xl text-gray-300 max-w-3 xlmx-automb-8">
              Transform your scheduling chaos into organized efficiency with our intelligent A I-powered scheduler. 
                Optimize meetings, coordinate teams, and maximize productivity automatically.

              </p>
              <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>
                <L ink to="/contact" class Name="b g-g r a dient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
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
              <h2 c lass Name="t e xt-3 xl sm:t e xt-4 xl font-boldtext-whitemb-4">Intelligent Scheduling Features
              </h2>
              <p c lass Name="t e x t-lg text-gray-300 max-w-2xlmx-auto" />
                Powered by advanced A I to make scheduling effortless and efficient

              </p>
            </d iv>
            
            <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
              {features.map((feature, index) => (

                <d ivkey="{index}" class Name="b g-g r a dient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40transition-allduration-300" />
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

        {/* Pricing Section */}

        <s ection class Name="p y-16 p x-4 sm:px-6 lg:px-8 bg-g r adient-to-rfrom-slate-800/30to-purple-900/30" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-3 xl sm:t e xt-4 xl font-boldtext-whitemb-4">Simple, Transparent Pricing
              </h2>
              <p c lass Name="t e x t-lg text-gray-300 max-w-2xlmx-auto" />
                Choose the plan that fits your team size and needs

              </p>
            </d iv>
            
            <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
              {pricing Plans.map((plan, index) => (
                <d ivkey="{index}" class Name="{`b g-g r a dient-to-br" from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-cyan-400/40 scale-105 shadow-2 xl shadow-cyan-500/20' 
                    : 'border-cyan-500/20 hover: border-cyan-400/40'
                }`} />
                  {plan.popular && (

                    <d iv class Name="i n l i ne-flex items-center px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-400 text-smfont-mediummb-4">
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
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400/10'
                    }`}
                    />Get Started

                  </L ink>
                </d iv>
              ))}

            </d iv>
        </s ection>

        {/* Testimonials */}

        <s ection class Name="p y-16 p x-4sm:px-6lg:px-8" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-12">
        </d iv>
              <h2 c lass Name="t e xt-3 xl f o nt-boldtext-whitemb-4">Trusted by Teams Worldwide
              </h2>
              <p c lass Name="t e xt-g r ay-300" />
                See what our customers say about A I Smart Scheduler

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
            <d iv class Name="b g-g r a dient-to-r from-cyan-500/20 to-purple-500/20 rounded-2 xl p-8borderborder-cyan-500/30">
        </d iv>
              <h2 c lass Name="t e xt-3 xl f o nt-boldtext-whitemb-4">Ready to Transform Your Scheduling?
              </h2>
              <p c lass Name="t e x t-lgtext-gray-300 mb-8" />
                Join thousands of teams already using A I Smart Scheduler to optimize their productivity

              </p>
              <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>
                <L ink to="/contact" class Name="b g-g r a dient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700transition-allduration-300">Start Your Free Trial
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
