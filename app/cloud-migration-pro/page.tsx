'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle, Cloud, Shield, Zap, BarChart3, Clock, Users, Database, Server, Globe, Star, TrendingUp, Lock, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'

const CloudMigrationProPage: React.FC = () => {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      title: 'Zero-Downtime Migration',
      description: 'Seamless migration to cloud infrastructure with zero business disruption using advanced migration strategies.'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security protocols and compliance standards ensure your data remains protected throughout the migration.'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      title: 'Performance Optimization',
      description: 'AI-powered optimization ensures your applications perform better in the cloud than on-premises infrastructure.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-500" />,
      title: 'Cost Optimization',
      description: 'Intelligent resource allocation and auto-scaling reduce cloud costs by up to 40% while maintaining performance.'
    }
  ]

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$2,999',
      period: 'one-time',
      description: 'Perfect for small businesses with basic cloud needs',
      features: [
        'Up to 10 servers',
        'Basic migration planning',
        'Standard security protocols',
        '30 days post-migration support',
        'Performance monitoring',
        'Cost optimization analysis'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$9,999',
      period: 'one-time',
      description: 'Ideal for growing businesses and departments',
      features: [
        'Up to 50 servers',
        'Advanced migration strategy',
        'Enhanced security protocols',
        '90 days post-migration support',
        'Real-time monitoring',
        'Advanced cost optimization',
        'Disaster recovery setup'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'quote',
      description: 'For large organizations with complex infrastructure',
      features: [
        'Unlimited servers',
        'Custom migration strategy',
        'Enterprise-grade security',
        '1 year post-migration support',
        '24/7 monitoring',
        'Custom cost optimization',
        'Full disaster recovery',
        'Dedicated migration team'
      ],
      popular: false
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: '40% Cost Reduction',
      description: 'Optimized cloud infrastructure reduces operational costs significantly.'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: '99.9% Uptime',
      description: 'Cloud infrastructure provides superior reliability and availability.'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'Enhanced Security',
      description: 'Advanced cloud security features protect your data and applications.'
    }
  ]

  const migrationSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and migration requirements.',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Custom migration strategy tailored to your business needs and objectives.',
      icon: '📋'
    },
    {
      step: '03',
      title: 'Migration Execution',
      description: 'Seamless migration with zero downtime and minimal business disruption.',
      icon: '🚀'
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'Post-migration optimization and ongoing support to ensure peak performance.',
      icon: '⚡'
    }
  ]

  const cloudProviders = [
    { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-orange-600' },
    { name: 'Microsoft Azure', icon: '🔵', color: 'from-blue-500 to-blue-700' },
    { name: 'Google Cloud', icon: '🔷', color: 'from-blue-400 to-blue-600' },
    { name: 'IBM Cloud', icon: '🔵', color: 'from-blue-600 to-blue-800' },
    { name: 'Oracle Cloud', icon: '🔴', color: 'from-red-500 to-red-700' },
    { name: 'Alibaba Cloud', icon: '🟠', color: 'from-orange-500 to-orange-700' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Cloud Migration Pro - Enterprise Cloud Migration Services | Zion Tech Group"
        description="Professional cloud migration services with zero downtime, enhanced security, and cost optimization. Migrate to AWS, Azure, Google Cloud with confidence."
        keywords="cloud migration, AWS migration, Azure migration, Google Cloud migration, cloud consulting, infrastructure migration, cloud optimization"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Cloud Migration
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Pro
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Seamlessly migrate your infrastructure to the cloud with zero downtime, enhanced security, 
            and significant cost savings. Trusted by enterprises worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Get Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Professional Migration Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our certified cloud architects ensure a smooth, secure, and cost-effective migration process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Migration Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven 4-step process that ensures successful cloud migration with minimal risk.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {migrationSteps.map((step, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-2xl font-bold text-purple-400 mb-2">{step.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Major Cloud Providers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with all leading cloud platforms to find the best fit for your business.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {cloudProviders.map((provider, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="text-3xl mb-2">{provider.icon}</div>
                <div className="text-white font-medium">{provider.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of enterprises that have successfully migrated to the cloud with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the migration package that fits your infrastructure size and requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500' : 'border-white/20'} hover:bg-white/20 transition-all duration-300 relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700' 
                      : 'border border-white text-white hover:bg-white hover:text-gray-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Migrate to the Cloud?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Get a free cloud migration assessment and discover how much you can save. No obligation required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Assessment
                </Link>
                <Link 
                  to="/demo" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CloudMigrationProPage