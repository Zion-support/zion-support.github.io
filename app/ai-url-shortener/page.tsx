import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Link, BarChart3, Globe, Smartphone, QrCode, Zap, Shield, Phone, Mail, MapPin } from 'lucide-react'
import { NeonText, NeonCard, NeonButton } from '../components/NeonEffects'

export default function AIURLShortenerPage() {
  const features = [
    {
      icon: <Link className="w-8 h-8 text-cyan-400" />,
      title: 'Custom Branded Domains',
      description: 'Create short links with your own custom domain for enhanced brand recognition'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: 'Advanced Analytics',
      description: 'Track clicks, demographics, device types, and geographic data in real-time'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: 'Geographic Tracking',
      description: 'See exactly where your clicks are coming from with detailed location insights'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      title: 'Device & Browser Insights',
      description: 'Understand your audience with detailed device and browser analytics'
    },
    {
      icon: <QrCode className="w-8 h-8 text-orange-400" />,
      title: 'QR Code Generation',
      description: 'Automatically generate QR codes for your short links for offline marketing'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Bulk Link Management',
      description: 'Create and manage hundreds of links at once with our bulk tools'
    }
  ]

  const benefits = [
    'Improve click-through rates by 20%',
    'Gain detailed audience insights',
    'Enhance brand recognition',
    'Optimize marketing campaigns',
    'Track campaign performance in real-time',
    'Save time with bulk link management'
  ]

  const capabilities = [
    'Link shortening and management',
    'Analytics and reporting',
    'Custom branding',
    'QR code generation',
    'API access',
    'Team collaboration',
    'Link expiration controls',
    'Bulk operations'
  ]

  const pricing = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 1,000 links',
        'Basic analytics',
        'Custom domain',
        'QR code generation',
        'Email support',
        'API access'
      ]
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 links',
        'Advanced analytics',
        'Multiple custom domains',
        'Team collaboration',
        'Priority support',
        'Bulk operations',
        'Link expiration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited links',
        'AI-powered insights',
        'White-label options',
        'Custom integrations',
        'Dedicated support',
        'Advanced security',
        'Custom reporting'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI URL Shortener Pro - Zion Tech Group | Smart Link Management</title>
        <meta name="description" content="Create branded short links with AI-powered analytics and insights. Track clicks, demographics, and optimize your marketing campaigns with our intelligent URL shortener." />
        <meta name="keywords" content="URL shortener, link management, analytics, QR codes, marketing tools, Zion Tech Group" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase bg-cyan-400/10 px-3 py-1 rounded-full">
              Micro SAAS
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <NeonText intensity="high">AI URL Shortener Pro</NeonText>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Create branded short links with advanced analytics and AI-powered insights. 
            Track clicks, demographics, device types, and geographic data to optimize your marketing campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <NeonButton 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
              className="group"
            >
              Start Shortening Links
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </NeonButton>
            <NeonButton 
              variant="secondary" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              Try Free Demo
            </NeonButton>
          </div>
          <div className="text-center">
            <p className="text-cyan-400 font-semibold text-lg">Starting at $29/month</p>
            <p className="text-gray-400 text-sm">Market Price: $50-100/month</p>
          </div>
        </div>

        {/* Key Benefits */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <NeonText intensity="medium">Why Choose Our URL Shortener?</NeonText>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Advanced features that give you complete control over your links
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <NeonCard key={index} className="flex items-center group hover:scale-105 transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                <span className="text-gray-300 font-medium">{benefit}</span>
              </NeonCard>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <NeonText intensity="medium">Powerful Features</NeonText>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Everything you need to manage and optimize your links
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <NeonCard key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </NeonCard>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <NeonText intensity="medium">What You Can Do</NeonText>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive link management and analytics capabilities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <NeonCard key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="p-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <p className="text-gray-300 text-sm">{capability}</p>
                </div>
              </NeonCard>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <NeonText intensity="medium">Simple Pricing</NeonText>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your link management needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <NeonCard key={index} className={`relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <NeonButton 
                    variant={plan.popular ? "primary" : "secondary"}
                    size="lg"
                    onClick={() => window.location.href = '/contact'}
                    className="w-full"
                  >
                    Get Started
                  </NeonButton>
                </div>
              </NeonCard>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            <NeonText intensity="high">Ready to Optimize Your Links?</NeonText>
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to learn how AI URL Shortener Pro can improve your marketing campaigns and provide valuable insights.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Call Us</p>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Email Us</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Visit Us</p>
              <p className="text-gray-300 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeonButton 
              variant="accent" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              Get Free Consultation
            </NeonButton>
            <NeonButton 
              variant="secondary" 
              size="lg"
              onClick={() => window.location.href = '/services'}
              className="border-2 border-white text-white hover:bg-white/10"
            >
              View All Services
            </NeonButton>
          </div>
        </section>
      </div>
    </div>
  )
}