import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
=======
import { Calendar, Users, Zap, CheckCircle, ArrowRight, Brain, Globe, Star, Sparkles } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-33de
import Layout from '../layout'
<<<<<<< HEAD
import React  from 'react';
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../layout';

export default function AISmartScheduler() {
  const features = [
    {
      icon: <Brain className="w-6h-6text-cyan-400" />,
      title: 'AI-Powered Scheduling',
      description: 'Intelligent scheduling that learns from your patterns and preferences'
    },
    {
      icon: <Users className="w-6h-6text-purple-400" />,
      title: 'Team Coordination',
      description: 'Seamlessly coordinate meetings across multiple time zones and schedules'
    },
    {
      icon: <Zap className="w-6h-6text-yellow-400" />,
      title: 'Auto-Optimization',
      description: 'Automatically finds the best meeting times for maximum productivity'
    },
    {
      icon: <Globe className="w-6h-6text-green-400" />,
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
<<<<<<< HEAD
=======
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
        {/* Hero Section */}
    <>
        <section className="pt-20 pb-16 px-4sm:px-6lg:px-8" />
          <div className="max-w-7xlmx-auto">
<<<<<<< HEAD
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-400 text-smfont-mediummb-6">
                <Sparkles className="w-4h-4mr-2" />
=======
        </div>
            <div className="text-center" />
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-400 text-smfont-mediummb-6">
        </div>
                <Sparkles className="w-4h-4mr-2" / />
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                AI-Powered Scheduling
    <>
              </div>
<<<<<<< HEAD
              <h1 className="text-4xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6"  />AI Smart Scheduler
=======
              <h1 className="text-4 xl sm:text-5 xl md:text-6 xl font-boldtext-whitemb-6">AI Smart Scheduler
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3 xlmx-automb-8">
              Transform your scheduling chaos into organized efficiency with our intelligent AI-powered scheduler. 
                Optimize meetings, coordinate teams, and maximize productivity automatically.
    <>
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
<<<<<<< HEAD
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-centerjustify-center" >
          Start Free Trial
                  
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
=======
        </div>
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
                  Start Free Trial
    <>
                  <ArrowRight className="w-5h-5ml-2" />
                </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Watch Demo
                </Link>
              </div>
          </div>
        </section>

        {/* Features Section */}
    <>
        <section className="py-16 px-4sm:px-6lg:px-8" />
          <div className="max-w-7xlmx-auto">
<<<<<<< HEAD
            <div className="text-centermb-16">
              <h2 className="text-3 xl sm:text-4xl font-bold text-white mb-4"  />Intelligent Scheduling Features
              </h2>
              <p className="text-lg text-gray-300 max-w-2xlmx-auto">
              Powered by advanced AI to make scheduling effortless and efficient
=======
        </div>
            <div className="text-centermb-16">
        </div>
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-whitemb-4">Intelligent Scheduling Features
              </h2>
              <p className="text-lg text-gray-300 max-w-2xlmx-auto" />
                Powered by advanced AI to make scheduling effortless and efficient
    <>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
<<<<<<< HEAD
=======
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              {features.map((feature, index) => (
    <>
                <div key="{index}" className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40transition-allduration-300" />
<<<<<<< HEAD
                  <div className="flex items-centermb-4">
=======
                  <div className="flexitems-centermb-4">
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                    {feature.icon}
    <>
                    <h3 className="text-xl font-semiboldtext-whiteml-3">{feature.title}</h3>
                  </div>
<<<<<<< HEAD
                  <p className="text-gray-300">
              {feature.description}</p>
=======
                  <p className="text-gray-300">{feature.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                </div>
              ))}
    <>
            </div>
        </section>

        {/* Pricing Section */}
    <>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <div className="max-w-7xlmx-auto">
<<<<<<< HEAD
            <div className="text-centermb-16">
              <h2 className="text-3 xl sm:text-4xl font-bold text-white mb-4"  />Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-gray-300 max-w-2xlmx-auto">
              Choose the plan that fits your team size and needs
=======
        </div>
            <div className="text-centermb-16">
        </div>
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-whitemb-4">Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-gray-300 max-w-2xlmx-auto" />
                Choose the plan that fits your team size and needs
    <>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              </p>
            </div>
            
            <div className="grid grid-cols-1md:grid-cols-3gap-8">
<<<<<<< HEAD
=======
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              {pricingPlans.map((plan, index) => (
                <div key="{index}" className="{`bg-gradient-to-br" from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-cyan-400/40 scale-105 shadow-2 xl shadow-cyan-500/20' 
                    : 'border-cyan-500/20 hover: border-cyan-400/40'
                }`} />
                  {plan.popular && (
<<<<<<< HEAD
                    <div className="inline-flex items-center px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-400 text-smfont-mediummb-4">
                      <Star className="w-4h-4mr-1" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2 xl font-bold text-white mb-2"   />{plan.name}</h3>
                  <p className="text-gray-300 mb-6">
              {plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xlfont-bold text-white"   />{plan.price}</span>
                    <span className="text-gray-400"   />{plan.period}</span>
                  </div>
                  <ul className="space-y-3mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="flex items-center text-gray-300" />
                        <CheckCircle className="w-5 h-5text-green-400mr-3" />
=======
    <>
                    <div className="inline-flex items-center px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-400 text-smfont-mediummb-4">
        </div>
                      <Star className="w-4h-4mr-1" / />
                      Most Popular
                    </div>
                  )}
    <>
                  <h3 className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                  <p className="text-gray-300mb-6">{plan.description}</p>
                  <div className="mb-6">
        </div>
                    <span className="text-4 xlfont-boldtext-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3mb-8" />
                    {plan.features.map((feature, featureIndex) => (
    <>
                      <li key="{featureIndex}" className="flexitems-centertext-gray-300" />
                        <CheckCircle className="w-5 h-5text-green-400mr-3" / />
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="{`w-full" block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400/10'
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
        <section className="py-16 px-4sm:px-6lg:px-8" />
          <div className="max-w-7xlmx-auto">
<<<<<<< HEAD
            <div className="text-centermb-12">
              <h2 className="text-3 xl font-bold text-white mb-4"  />Trusted by Teams Worldwide
              </h2>
              <p className="text-gray-300">
              See what our customers say about AI Smart Scheduler
              </p>
            </div>
            <div className="grid grid-cols-1md:grid-cols-3gap-8">
=======
        </div>
            <div className="text-centermb-12">
        </div>
              <h2 className="text-3 xl font-boldtext-whitemb-4">Trusted by Teams Worldwide
              </h2>
              <p className="text-gray-300" />
                See what our customers say about AI Smart Scheduler
    <>
              </p>
            </div>
            <div className="grid grid-cols-1md:grid-cols-3gap-8">
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              {testimonials.map((testimonial, index) => (
    <>
                <div key="{index}" className="bg-slate-800/50 rounded-xl p-6borderborder-slate-700" />
<<<<<<< HEAD
                  <div className="flex items-centermb-4">
=======
                  <div className="flexitems-centermb-4">
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key="{i}" className="w-5 h-5text-yellow-400fill-current" />
                    ))}
    <>
                  </div>
<<<<<<< HEAD
                  <p className="text-gray-300 mb-4">
              "{testimonial.content}"</p>
                  <div />
                    <div className="font-semiboldtext-white"   />{testimonial.name}</div>
                    <div className="text-smtext-gray-400"   />{testimonial.company}</div>
=======
                  <p className="text-gray-300mb-4">"{testimonial.content}"</p>
                  <div />
                    <div className="font-semiboldtext-white">{testimonial.name}</div>
                    <div className="text-smtext-gray-400">{testimonial.company}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                </div>
              ))}
    <>
            </div>
        </section>

        {/* CTA Section */}
    <>
        <section className="py-16 px-4sm:px-6lg:px-8" />
          <div className="max-w-4 xlmx-autotext-center">
<<<<<<< HEAD
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2 xl p-8borderborder-cyan-500/30">
              <h2 className="text-3 xl font-bold text-white mb-4"  />Ready to Transform Your Scheduling?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
              Join thousands of teams already using AI Smart Scheduler to optimize their productivity
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
=======
        </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2 xl p-8borderborder-cyan-500/30">
        </div>
              <h2 className="text-3 xl font-boldtext-whitemb-4">Ready to Transform Your Scheduling?
              </h2>
              <p className="text-lgtext-gray-300mb-8" />
                Join thousands of teams already using AI Smart Scheduler to optimize their productivity
    <>
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700transition-allduration-300">Start Your Free Trial
                </Link>
                <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Learn More
                </Link>
              </div>
          </div>
        </section>
      </div>
    </Layout>
  )
};
    </>