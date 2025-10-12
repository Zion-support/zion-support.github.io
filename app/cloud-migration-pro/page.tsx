import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Cloud, ArrowRight, CheckCircle, Zap, Shield, Database, Smartphone, Globe, BarChart3, Star, Sparkles, Server, Lock, Users } from 'lucide-react'
import Layout from '../layout'

export default function CloudMigrationPro() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: 'Zero-Downtime Migration',
      description: 'Seamless migration with guaranteed zero downtime and data integrity'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: 'Security-First Approach',
      description: 'Enterprise-grade security throughout the entire migration process'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Performance Optimization',
      description: 'Optimize your infrastructure for maximum performance and cost efficiency'
    },
    {
      icon: <Database className="w-6 h-6 text-green-400" />,
      title: 'Data Integrity Guarantee',
      description: '100% data integrity with comprehensive backup and validation systems'
    }
  ]

  const migrationSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and migration requirements',
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Custom migration strategy tailored to your business needs and timeline',
      icon: <Users className="w-8 h-8 text-purple-400" />
    },
    {
      step: '03',
      title: 'Infrastructure Setup',
      description: 'Cloud infrastructure provisioning and configuration for optimal performance',
      icon: <Server className="w-8 h-8 text-yellow-400" />
    },
    {
      step: '04',
      title: 'Data Migration',
      description: 'Secure and efficient data transfer with real-time monitoring and validation',
      icon: <Database className="w-8 h-8 text-green-400" />
    },
    {
      step: '05',
      title: 'Testing & Validation',
      description: 'Comprehensive testing to ensure all systems work perfectly in the cloud',
      icon: <CheckCircle className="w-8 h-8 text-blue-400" />
    },
    {
      step: '06',
      title: 'Go-Live & Support',
      description: 'Smooth transition with 24/7 support and ongoing optimization',
      icon: <Zap className="w-8 h-8 text-red-400" />
    }
  ]

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$2,500',
      period: 'one-time',
      description: 'Perfect for small businesses with basic cloud needs',
      features: [
        'Up to 10 servers',
        'Basic migration planning',
        'Standard security measures',
        'Email support',
        '30-day post-migration support'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$15,000',
      period: 'one-time',
      description: 'Comprehensive migration for growing enterprises',
      features: [
        'Up to 100 servers',
        'Advanced migration strategy',
        'Enterprise security compliance',
        'Priority support',
        'Custom optimization',
        '90-day post-migration support'
      ],
      popular: true
    },
    {
      name: 'Custom Solution',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored migration for large-scale organizations',
      features: [
        'Unlimited servers',
        'Custom migration strategy',
        'Full compliance certification',
        'Dedicated team',
        'White-glove service',
        '1-year support included'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Jennifer Adams',
      company: 'TechCorp Solutions',
      content: 'The migration was flawless. Zero downtime and our performance improved by 40%.',
      rating: 5
    },
    {
      name: 'Robert Chen',
      company: 'Global Manufacturing Inc.',
      content: 'Professional team, excellent communication, and delivered exactly what was promised.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'Financial Services Group',
      content: 'Security compliance was perfect. Our auditors were impressed with the implementation.',
      rating: 5
    }
  ]

  return (
    <Layout
      title="Cloud Migration Pro - Expert Cloud Migration Services | Zion Tech Group"
      description="Professional cloud migration services with zero downtime guarantee. Expert team, security-first approach, and comprehensive support. Get your free assessment today."
      keywords="cloud migration, AWS migration, Azure migration, Google Cloud, infrastructure migration, cloud consulting"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                <Cloud className="w-4 h-4 mr-2" />
                Expert Cloud Migration
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Cloud Migration Pro
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your infrastructure with our expert cloud migration services. 
                Zero downtime, security-first approach, and guaranteed performance optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Free Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="#process"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Process
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Why Choose Our Migration Services
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Professional expertise with proven methodologies and guaranteed results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Process */}
        <section id="process" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Proven Migration Process
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Six-step methodology ensuring successful cloud migration
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {migrationSteps.map((step, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mr-4">
                      {step.icon}
                    </div>
                    <div className="text-2xl font-bold text-cyan-400">{step.step}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Transparent Pricing
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                One-time pricing with no hidden costs or ongoing fees
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-blue-400/40 scale-105 shadow-2xl shadow-blue-500/20' 
                    : 'border-blue-500/20 hover:border-blue-400/40'
                }`}>
                  {plan.popular && (
                    <div className="inline-flex items-center px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                        : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Success Stories
              </h2>
              <p className="text-gray-300">
                See how we've helped businesses transform their infrastructure
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Migrate to the Cloud?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Get your free infrastructure assessment and migration plan today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Free Assessment
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}