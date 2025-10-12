import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Code, Globe, Smartphone, Zap, Shield, Users, BarChart3, Database, Cpu } from 'lucide-react'

export default function WebDevelopmentPage() {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: 'Modern Technologies',
      description: 'Built with the latest frameworks and technologies including React, Next.js, Node.js, and more.'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Responsive Design',
      description: 'Mobile-first, responsive websites that look perfect on all devices and screen sizes.'
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: 'Performance Optimized',
      description: 'Lightning-fast websites with optimized loading times and superior user experience.'
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-500" />,
      title: 'Secure & Scalable',
      description: 'Enterprise-grade security and scalable architecture that grows with your business.'
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: 'User-Centered Design',
      description: 'Intuitive user interfaces designed with your customers and business goals in mind.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-indigo-500" />,
      title: 'SEO Optimized',
      description: 'Search engine optimized websites that help you rank higher and attract more customers.'
    }
  ]

  const services = [
    'Custom web applications',
    'E-commerce platforms',
    'Content management systems',
    'Progressive web apps',
    'API development',
    'Database design',
    'Third-party integrations',
    'Maintenance & support'
  ]

  const technologies = [
    'React & Next.js',
    'Vue.js & Nuxt.js',
    'Angular & TypeScript',
    'Node.js & Express',
    'Python & Django',
    'PHP & Laravel',
    'MongoDB & PostgreSQL',
    'AWS & Azure'
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,999',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO',
        'Contact form',
        '3 months support'
      ]
    },
    {
      name: 'Professional',
      price: '$7,999',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 15 pages',
        'Custom functionality',
        'Advanced SEO',
        'CMS integration',
        '6 months support',
        'Performance optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored for large organizations',
      features: [
        'Unlimited pages',
        'Custom web application',
        'Advanced integrations',
        'Dedicated support',
        'White-label solution',
        'Ongoing maintenance'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Web Development - Zion Tech Group</title>
        <meta name="description" content="Professional web development services. Custom websites, web applications, and e-commerce solutions built with modern technologies." />
        <meta name="keywords" content="web development, custom websites, web applications, e-commerce, responsive design, modern web development" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Web{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Development
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Create stunning, high-performance websites and web applications that drive business growth. 
            Built with modern technologies and optimized for success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Web Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 text-center">
                <p className="text-gray-300 text-sm">{service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 text-center">
                <p className="text-gray-300 text-sm">{tech}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20'
                    : 'border-slate-700 hover:border-cyan-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">{plan.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build Your Dream Website?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create a stunning, high-performance website that drives results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Project
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}