'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Users, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Shield,
  Globe,
  Smartphone,
  Mail,
  Phone,
  MapPin,
  Brain,
  Cpu,
  BarChart3,
  MessageSquare,
  FileText,
  Camera,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';

export default function AISmartCalendarPage() {
  const features = [
    {
      title: 'AI-Powered Scheduling',
      description: 'Intelligent calendar management that learns your preferences and optimizes your schedule automatically.',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      benefits: ['Smart meeting suggestions', 'Conflict resolution', 'Time zone optimization', 'Priority-based scheduling']
    },
    {
      title: 'Natural Language Processing',
      description: 'Schedule meetings using natural language commands like "Schedule lunch with John next Tuesday at 1 PM".',
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
      benefits: ['Voice commands', 'Text-based scheduling', 'Context understanding', 'Multi-language support']
    },
    {
      title: 'Team Collaboration',
      description: 'Seamless team scheduling with AI-powered availability detection and meeting optimization.',
      icon: <Users className="w-8 h-8 text-green-400" />,
      benefits: ['Team availability', 'Meeting room booking', 'Resource allocation', 'Collaborative planning']
    },
    {
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics on your time usage, meeting patterns, and productivity insights.',
      icon: <BarChart3 className="w-8 h-8 text-yellow-400" />,
      benefits: ['Time tracking', 'Productivity metrics', 'Meeting effectiveness', 'Schedule optimization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'AI-powered scheduling',
        'Natural language processing',
        'Basic analytics',
        'Email integration',
        'Mobile app access',
        '5 team members max'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Everything in Starter',
        'Advanced team collaboration',
        'Detailed analytics & insights',
        'Custom integrations',
        'Priority support',
        '25 team members max',
        'Meeting room booking',
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
        'Everything in Professional',
        'Unlimited team members',
        'Custom AI training',
        'Advanced security features',
        'Dedicated support',
        'Custom branding',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'TechStart Inc.',
      content: 'AI Smart Calendar has revolutionized how we manage our team schedules. The AI suggestions are incredibly accurate and save us hours every week.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      company: 'Global Consulting',
      content: 'The natural language processing is amazing. I can just say "schedule a meeting with the marketing team next week" and it handles everything.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Emily Johnson',
      company: 'Innovation Labs',
      content: 'The analytics insights have helped us optimize our meeting culture. We\'ve reduced unnecessary meetings by 40% while improving productivity.',
      rating: 5,
      avatar: 'EJ'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Smart Calendar - Intelligent Scheduling & Time Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered calendar management with natural language processing, team collaboration, and intelligent scheduling. Start your free trial today!" />
        <meta name="keywords" content="AI calendar, smart scheduling, time management, team collaboration, natural language processing, productivity tools" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Smart Calendar - Intelligent Scheduling & Time Management" />
        <meta property="og:description" content="Revolutionary AI-powered calendar management with natural language processing and team collaboration features." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-smart-calendar" />
        <meta property="og:image" content="https://ziontechgroup.com/og-ai-smart-calendar.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI Smart Calendar",
            "description": "AI-powered calendar management with natural language processing and team collaboration",
            "url": "https://ziontechgroup.com/ai-smart-calendar",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "29",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "29",
                "priceCurrency": "USD",
                "unitText": "MONTH"
              }
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-8">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                AI Smart Calendar
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary AI-powered calendar management with natural language processing, 
                intelligent scheduling, and seamless team collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="#demo" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Watch Demo
                </Link>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50K+</div>
                  <div className="text-gray-300">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                  <div className="text-gray-300">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">4.9/5</div>
                  <div className="text-gray-300">User Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Powerful Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage your time efficiently with AI-powered intelligence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                  plan.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-white/20'
                } hover:bg-white/15 transition-all duration-300 relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700' 
                        : 'border-2 border-white text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">What Our Users Say</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of satisfied users who have transformed their productivity
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-300 italic">
                    "{testimonial.content}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl p-8 sm:p-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Scheduling?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                  Join 50,000+ users who have revolutionized their time management with AI Smart Calendar. 
                  Start your free trial today - no credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link 
                    to="#demo" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Watch Demo
                  </Link>
                </div>
                <div className="mt-8 text-white/80 text-sm">
                  <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cyan-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">+1 (302) 464-0950</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">364 E Main St STE 1008, Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}