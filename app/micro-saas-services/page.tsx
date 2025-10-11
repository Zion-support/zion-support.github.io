'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Star, CheckCircle, Brain, Shield, Database, Cloud, Code, Network, Smartphone, Zap, Clock, DollarSign, Users } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function MicroSAASServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  React.useEffect(() => {
    setIsLoaded(true)
  }, [])

  const microSAASServices = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation with GPT-4 integration, SEO optimization, and multi-language support.',
      features: ['Unlimited content generation', 'SEO optimization', 'Multi-language support', 'Brand voice training'],
      pricing: '$29/month',
      popular: true,
      category: 'AI'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'CyberGuard Security Suite',
      description: 'Comprehensive cybersecurity monitoring with real-time threat detection and automated response.',
      features: ['Real-time monitoring', 'Automated threat response', 'Compliance reporting', '24/7 support'],
      pricing: '$99/month',
      popular: false,
      category: 'Security'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: 'DataViz Analytics Platform',
      description: 'Advanced business intelligence with interactive dashboards and predictive analytics.',
      features: ['Interactive dashboards', 'Predictive analytics', 'Custom reports', 'API integration'],
      pricing: '$49/month',
      popular: true,
      category: 'Analytics'
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: 'CloudOps Management',
      description: 'Complete cloud infrastructure management with cost optimization and performance monitoring.',
      features: ['Multi-cloud support', 'Cost optimization', 'Performance monitoring', 'Auto-scaling'],
      pricing: '$79/month',
      popular: false,
      category: 'Cloud'
    },
    {
      icon: <Code className="w-8 h-8 text-orange-400" />,
      title: 'DevOps Automation Hub',
      description: 'Streamlined CI/CD pipelines with automated testing, deployment, and monitoring.',
      features: ['CI/CD automation', 'Automated testing', 'Deployment pipelines', 'Performance monitoring'],
      pricing: '$59/month',
      popular: false,
      category: 'DevOps'
    },
    {
      icon: <Network className="w-8 h-8 text-pink-400" />,
      title: 'API Gateway Pro',
      description: 'Enterprise-grade API management with rate limiting, authentication, and analytics.',
      features: ['Rate limiting', 'Authentication', 'API analytics', 'Documentation generation'],
      pricing: '$39/month',
      popular: false,
      category: 'API'
    }
  ]

  const benefits = [
    {
      icon: <Zap className="w-12 h-12 text-cyan-400" />,
      title: 'Rapid Deployment',
      description: 'Get up and running in minutes with our pre-configured micro-services.'
    },
    {
      icon: <DollarSign className="w-12 h-12 text-green-400" />,
      title: 'Cost Effective',
      description: 'Pay only for what you use with flexible pricing and no hidden fees.'
    },
    {
      icon: <Clock className="w-12 h-12 text-purple-400" />,
      title: '24/7 Availability',
      description: 'Always-on services with 99.9% uptime guarantee and automatic scaling.'
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance, and threat protection.'
    },
    {
      icon: <Users className="w-12 h-12 text-orange-400" />,
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing tools and workflows via APIs.'
    },
    {
      icon: <Star className="w-12 h-12 text-pink-400" />,
      title: 'Expert Support',
      description: 'Dedicated support team to help you get the most out of your services.'
    }
  ]

  const stats = [
    { number: '50+', label: 'Micro Services' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
    { number: '1000+', label: 'Happy Customers' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful, affordable micro-services designed to solve specific business challenges with real-world applications. Starting at $29/month." />
        <meta name="keywords" content="micro saas, saas services, business tools, automation, productivity, cloud services" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Micro SAAS Solutions
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                  Micro SAAS <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Powerful, affordable micro-services designed to solve specific business challenges 
                  with real-world applications and instant value.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="/contact"
                    className="group bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-2xl"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#services"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    View Services
                  </a>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">50+</div>
                    <div className="text-gray-300">Services</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                    <div className="text-gray-300">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">24/7</div>
                    <div className="text-gray-300">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">1000+</div>
                    <div className="text-gray-300">Customers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Micro SAAS Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of focused, purpose-built solutions that deliver immediate value.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Micro SAAS Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of micro-services designed for specific business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSAASServices.map((service, index) => (
                <div key={index} className={`group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 transform hover:-translate-y-2 relative ${service.popular ? 'ring-2 ring-purple-500/50' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-6">{service.icon}</div>
                  <div className="mb-2">
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-white mb-2">{service.pricing}</div>
                    <div className="text-gray-400 text-sm">per month</div>
                  </div>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
                <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
                  Start your free trial today and experience the power of our micro SAAS services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Start Free Trial
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}