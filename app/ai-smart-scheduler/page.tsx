import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout'

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../layout';

export default function AISmartScheduler() {
  const features = [
    {
      icon: <Brain className="w-5 h-5ml-2" />,
      title: 'AI-Powered Scheduling',
      description: 'Intelligent scheduling that learns from your patterns and preferences'
    },
    {
      icon: <Users className="w-5 h-5ml-2" />,
      title: 'Team Coordination',
      description: 'Seamlessly coordinate meetings across multiple time zones and schedules'
    },
    {
      icon: <Zap className="w-5 h-5ml-2" />,
      title: 'Auto-Optimization',
      description: 'Automatically finds the best meeting times for maximum productivity'
    },
    {
      icon: <Globe className="w-5 h-5ml-2" />,
      title: 'Global Integration',
      description: 'Works with all major calendar platforms and time zones'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 5 team members',
        'Basic AI scheduling',
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
        'Advanced AI optimization',
        'Custom meeting templates',
        'Analytics dashboard',
        'Priority support',
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
        'Unlimited team members',
        'Custom AI training',
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
      company: 'TechStart Inc.',
      content: 'This AI scheduler saved us 10+ hours per week. The intelligent optimization is incredible.',
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
      company: 'RemoteFirst Co.',
      content: 'The time zone handling is flawless. Our international team coordination has never been smoother.',
      rating: 5
    }
  ]

  return (
    <Layout
      title="AI Smart Scheduler - Intelligent Meeting Optimization | Zion Tech Group"
      description="Revolutionary AI-powered scheduling tool that optimizes meetings, coordinates teams, and maximizes productivity. Start your free trial today."
      keywords="AI scheduler, meeting optimization, team coordination, calendar management, productivity tools" />
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <Sparkles className="w-5 h-5ml-2" />
                AI-Powered Scheduling
              </div>
              <h1 className="w-5 h-5ml-2">AI Smart Scheduler
              </h1>
              <p className="w-5 h-5ml-2">Transform your scheduling chaos into organized efficiency with our intelligent AI-powered scheduler. 
                Optimize meetings, coordinate teams, and maximize productivity automatically.
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flexitems-center justify-center"
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
              <h2 className="w-5 h-5ml-2" />Intelligent Scheduling Features
              </h2>
              <p className="w-5 h-5ml-2">Powered by advanced AI to make scheduling effortless and efficient
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {features.map((feature, index) => (
                <div key="{index}" className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40transition-allduration-300" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    {feature.icon}
                    <h3 className="w-5 h-5ml-2" />{feature.title}</h3>
                  </div>
                  <p className="w-5 h-5ml-2">{feature.description}</p>
                </div>
              ))}
            </div>
        </section>

        {/* Pricing Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />Simple, Transparent Pricing
              </h2>
              <p className="w-5 h-5ml-2">Choose the plan that fits your team size and needs
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">

              {pricingPlans.map((plan, index) => (
                <d iv k ey="{index}" c las sNa me="{`b g-g rad ient-to-br" from-s late-800/50 to-purple-900/30 rounded-xl p-8 border transit ion-all duration-300 ${
                  plan.popular 
                    ? 'border-cyan-400/40 scale-105 shadow-2 xl shadow-cyan-500/20' 
                    : 'border-cyan-500/20 hover: border-cyan-400/40'
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
                        ? 'bg-g rad ient-to-r from-cyan-500 to-purple-600 text-w hit-e hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cy-a-n-400 hover: bg-cyan-400/10'
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
              <h2 className="w-5 h-5ml-2" />Trusted by Teams Worldwide
              </h2>
              <p className="w-5 h-5ml-2">See what our customers say about AI Smart Scheduler
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
              <h2 className="w-5 h-5ml-2" />Ready to Transform Your Scheduling?
              </h2>
              <p className="w-5 h-5ml-2">Join thousands of teams already using AI Smart Scheduler to optimize their productivity
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700transition-allduration-300">Start Your Free Trial
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