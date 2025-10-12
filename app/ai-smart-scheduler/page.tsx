import React from 'react'
import { Link } from 'react-router-dom';
;
import { Calendar, Users, Zap, CheckCircle, ArrowRight, Brain, Globe, Star, Sparkles } from 'lucide-react';
import Layout from '../layout';
;
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function AISmartScheduler() {
  const features = [
    {
      icon: <Brain className="w-5h-5ml-2" />,
      title: 'AI-Powered Scheduling',
      description: 'Intelligent scheduling that learns from your patterns and preferences'
    },
    {
      icon: <Users className="w-5h-5ml-2" />,
      title: 'Team Coordination',
      description: 'Seamlessly coordinate meetings across multiple time zones and schedules'
    },
    {
      icon: <Zap className="w-5h-5ml-2" />,
      title: 'Auto-Optimization',
      description: 'Automatically finds the best meeting times for maximum productivity'
    },
    {
      icon: <Globe className="w-5h-5ml-2" />,
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
      popular: false;
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
      popular: true;
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
      popular: false;
    }
  ]
  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'TechStart Inc.',
      content: 'This AI scheduler saved us 10+ hours per week. The intelligent optimization is incredible.',
      rating: 5;
    },
    {
      name: 'Michael Rodriguez',
      company: 'Global Consulting',
      content: 'Finally, a scheduling tool that actually understands our complex team dynamics.',
      rating: 5;
    },
    {
      name: 'Emily Watson',
      company: 'RemoteFirst Co.',
      content: 'The time zone handling is flawless. Our international team coordination has never been smoother.',
      rating: 5;
    }
  ]
  return (
    <Layout;</Layout></Layout>
      title="AI Smart Scheduler - Intelligent Meeting Optimization | Zion Tech Group"
      description="Revolutionary AI-powered scheduling tool that optimizes meetings, coordinates teams, and maximizes productivity. Start your free trial today."
      keywords="AI scheduler, meeting optimization, team coordination, calendar management, productivity tools" /><div></Layout>
      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
        {/* Hero Section */}
        <div><div><section className="w-5h-5ml-2"></section></div></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
              <div><div><div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                <Sparkles className="w-5h-5ml-2"><div></div></Sparkles></div></div>
                AI-Powered Scheduling;
              </div>
              <h1 className="w-5h-5ml-2">AI Smart Scheduler;
              </h1>
              <p className="w-5h-5ml-2">Transform your scheduling chaos into organized efficiency with our intelligent AI-powered scheduler.
                Optimize meetings, coordinate teams, and maximize productivity automatically.
              <div></p>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                <Link;</Link></Link>
          to="/contact"
          className="bg-gradient-to-rfrom-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
        ></Link>
          Start Free Trial;
          <div><div><ArrowRight className="w-5h-5ml-2"></ArrowRight></div></div>
        </Link></div>
                <Link to="#demo" className="border-2border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10 transition-colors">Watch Demo;
                <div><div></Link>
              </div></div></div>
          </div><div></div>
        </section></div></div>
        {/* Features Section */}
        <div><div><section className="w-5h-5ml-2"></section></div></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
              <h2 className="w-5h-5ml-2" />Intelligent Scheduling Features;
              </h2>
              <p className="w-5h-5ml-2">Powered by advanced AI to make scheduling effortless and efficient;
              <div><div></p>
            </div></div></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
              {features.map((feature, index) => (
                <div><div><div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40transition-all duration-300"></div></div></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                    {feature.icon}
                    <h3 className="w-5h-5ml-2" />{feature.title}<div><div></h3>
                  </div></div></div>
                  <p className="w-5h-5ml-2"></div>{feature.description}</p>
                </div>
              ))}
            </div>
        </section>
        {/* Pricing Section */}
        <div><div><section className="w-5h-5ml-2"></section></div></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
              <h2 className="w-5h-5ml-2" />Simple, Transparent Pricing;
              </h2>
              <p className="w-5h-5ml-2">Choose the plan that fits your team size and needs;
              <div><div></p>
            </div></div></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular;
                    ? 'border-cyan-400/40 scale-105 shadow-2 xl shadow-cyan-500/20'
                    : 'border-cyan-500/20 hover: border-cyan-400/40'
                }`}></div>
                  {plan.popular && (
                    <div><div><div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                      <Star className="w-5h-5ml-2"><div></div></Star></div></div>
                      Most Popular;
                    </div>
                  )}
                  <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                  <p className="w-5h-5ml-2">{plan.description}<div></p>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                    <span className="w-5h-5ml-2" />{plan.price}</span>
                    <span className="w-5h-5ml-2" />{plan.period}<div><div></span>
                  </div></div></div>
                  <ul className="w-5h-5ml-2"><div></div></ul></div></div>
                    {plan.features.map((feature, featureIndex) => (
                      <div><div><li key={featureIndex} className="flex items-center text-gray-300"></li></div></div>
                        <CheckCircle className="w-5h-5ml-2"><div></div></CheckCircle></div></div>
                        {feature}
                      </li>
                    ))}
                  <div></ul>
                  <Link;</Link><div></Link></div></div></div>
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular;
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400/10'
                    }`}
                    />Get Started;
                  </Link>
                </div>
              ))}
            </div>
        </section>
        {/* Testimonials */}
        <div><div><section className="w-5h-5ml-2"></section></div></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
              <h2 className="w-5h-5ml-2" />Trusted by Teams Worldwide;
              </h2>
              <p className="w-5h-5ml-2">See what our customers say about AI Smart Scheduler;
              <div><div></p>
            </div></div></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
              {testimonials.map((testimonial, index) => (
                <div><div><div key={index} className="bg-slate-800/50rounded-xl p-6 border border-slate-700"></div></div></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5h-5tex t-yellow-400fill-current"></Star>
                    ))}
                  </div>
                  <p className="w-5h-5ml-2">"{testimonial.content}"<div></p>
                  <div><div></div></div></div></div>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.name}</div>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.company}</div>
                </div>
              ))}
            </div>
        </section>
        {/* CTA Section */}
        <div><div><section className="w-5h-5ml-2"></section></div></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
              <h2 className="w-5h-5ml-2" />Ready to Transform Your Scheduling?
              </h2>
              <p className="w-5h-5ml-2">Join thousands of teams already using AI Smart Scheduler to optimize their productivity;
              <div></p>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                <Link to="/contact" className="bg-gradient-to-rfrom-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700transition-all duration-300">Start Your Free Trial;
                </Link>
                <Link to="/about" className="border-2border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10 transition-colors">Learn More;
                <div><div></Link>
              </div></div></div>
          </div></div>
        <div><div></section></div></div>
      </div>
    <div></Layout></div></div></div>
  )
};
};