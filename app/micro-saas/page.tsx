'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const MicroSaaSPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'AI Email Assistant',
      description: 'Automated email management and response system',
      icon: MessageCircle,
      features: ['Smart Categorization', 'Auto-Responses', 'Sentiment Analysis', 'Priority Scoring'],
      price: '$29/month',
      popular: true
    },
    {
      id: 2,
      title: 'Content Generator',
      description: 'AI-powered content creation for blogs and social media',
      icon: FileText,
      features: ['Blog Posts', 'Social Media', 'SEO Optimization', 'Multi-language'],
      price: '$19/month',
      popular: false
    },
    {
      id: 3,
      title: 'Lead Generation',
      description: 'Automated lead capture and qualification system',
      icon: Target,
      features: ['Lead Scoring', 'CRM Integration', 'Email Sequences', 'Analytics'],
      price: '$39/month',
      popular: false
    },
    {
      id: 4,
      title: 'Analytics Dashboard',
      description: 'Real-time business analytics and reporting',
      icon: BarChart,
      features: ['Real-time Data', 'Custom Reports', 'Data Visualization', 'Export Options'],
      price: '$24/month',
      popular: false
    }
  ]

  const stats = [
    { number: '10K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
    { number: '50+', label: 'Integrations' }
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get started in minutes with our easy onboarding process'
    },
    {
      icon: Shield,
      title: 'Secure  & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team'
    },
    {
      icon: TrendingUp,
      title: 'Scalable',
      description: 'Grows with your business needs and requirements'
    }

import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  BarChart,
  Code,
  Cloud,
  Smartphone} from 'lucide-react'

const MicroSaasPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed and performance with minimal resource usage.',
      benefits: ['Sub-second load times', 'Minimal memory footprint', 'Efficient algorithms']
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee.',
      benefits: ['End-to-end encryption', 'Regular security audits', 'Automated backups']
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics to track your business metrics.',
      benefits: ['Real-time metrics', 'Custom reports', 'Data visualization']
    },
    {
      icon: Code,
      title: 'Easy Integration',
      description: 'Simple APIs and webhooks for seamless integration.',
      benefits: ['RESTful APIs', 'Webhook support', 'SDK libraries']
    },
    {
      icon: Cloud,
      title: 'Scalable Infrastructure',
      description: 'Auto-scaling infrastructure that grows with your business.',
      benefits: ['Auto-scaling', 'Global CDN', 'Load balancing']
    },
    {
      icon: Smartphone,
      title: 'Mobile Ready',
      description: 'Responsive design that works on all devices.',
      benefits: ['Mobile-first design', 'Touch-friendly interface', 'Offline support']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 1,000 users',
        'Basic analytics',
        'Email support',
        'Standard security'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 users',
        'Advanced analytics',
        'Priority support',
        'Enhanced security',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Custom analytics',
        '24/7 support',
        'Enterprise security',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false
    }
  ]

  const stats = [
    { number: '10K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '50+', label: 'Integrations' },
    { number: '24/7', label: 'Support' }
]

  return (
    <></>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
</div><section className="pt-20 pb-16 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SaaS</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Powerful, focused tools designed to solve specific business problems. 
                Start small, scale big with our micro SaaS solutions.
              </p>

            </div>
          </div>
        </section>

{/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                </div>
<div key={index} className="text-center">
                  </div>
<div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
<div className="text-gray-300">{stat.label}</div>

<section className="pt-20 pb-16 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SaaS</span> Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Build, launch, and scale your micro SaaS business with our comprehensive development and deployment solutions.
              </p>
              </div>
<div className="flex flex-col sm: flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Start Building
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Examples
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SaaS Solutions
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to build a successful micro SaaS business
              </p>
            </div>
<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                </div>
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  </div>
<div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8 bg-black/20">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Thousands
              </h2>
              <p className="text-xl text-gray-300">
                Join the growing community of successful micro SaaS businesses
              </p>
            </div>
<div className="grid grid-cols-2 md: grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                </div>
<div key={index} className="text-center">
                  </div>
<div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
<div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300">
                Choose the plan that fits your business needs
              </p>
            </div>
<div className="grid grid-cols-1 md: grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                </div>
<div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 ${plan.popular  ? 'ring-2 ring-cyan-400'  : ''}`}>
                  {plan.popular && (
                    </div>
<div className="text-center mb-4">
                      <span className="bg-cyan-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    </div>
<div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                       ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover : from-cyan-600 hover:to-blue-700' 
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
</div>
              ))}
            </div>
          </div>
        </section>

{/* Benefits Section */}
<section className="py-16 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Micro SaaS?
              </h2>
              <p className="text-xl text-gray-300">
                Focused solutions that deliver maximum value with minimal complexity.
              </p>
            </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                </div>
<div key={index} className="text-center">
                  </div>
<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SaaS Solutions
              </h2>
              <p className="text-xl text-gray-300">
                Choose from our range of specialized tools designed for specific business needs.
              </p>
            </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service) => (
                </div>
<div
                  key={service.id}
                  className={`bg-white/5 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 group relative ${
                    service.popular
                      ? 'border-cyan-500 bg-cyan-500/10' 
                      : 'border-white/10 hover:bg-white/10'
                  }`}
                >
                  {service.popular && (
                    </div>
<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-6">
                    </div>
<div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
<div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                  </div>
<div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features: </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-gray-300 flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
<div className="flex items-center justify-between mb-6">
                    </div>
<div className="text-3xl font-bold text-cyan-400">{service.price}</div>
<div className="text-gray-400">per month</div>
                  </div>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular
                      ? 'bg-cyan-500 text-white hover: bg-cyan-600'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<section className="py-16 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose the perfect micro SaaS solution for your business and start seeing results today.
            </p>
            </div>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button">
                Browse All Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="cyber-button-secondary">
                Schedule Demo
                <Calendar className="w-5 h-5 ml-2" />

              </button>
            </div>
          </div>
        </section>

      </div>
      
</main>

<Footer />
    </>
  )
};

export default MicroSaaSPage;

export default MicroSaasPage;
