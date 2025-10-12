import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, Star, ArrowRight, Zap, Brain, Cloud, Code, Wifi } from 'lucide-react'

export default function PricingPage() {
  const aiServicesPricing = [
    {
      name: 'AI Content Generator',
      price: '$29',
      period: '/month',
      description: 'Generate high-quality content with AI',
      features: [
        'Up to 50 articles/month',
        'Multiple content formats',
        'SEO optimization',
        'Brand voice consistency',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'AI Chatbot Enterprise',
      price: '$99',
      period: '/month',
      description: 'Advanced conversational AI for businesses',
      features: [
        'Unlimited conversations',
        'Multi-language support',
        'Custom training',
        'Advanced analytics',
        'API integration',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'AI Voice Assistant',
      price: '$299',
      period: '/month',
      description: 'Intelligent voice AI solutions',
      features: [
        'Up to 10,000 conversations',
        'Natural voice recognition',
        'Custom voice models',
        'Multi-platform support',
        'Advanced security',
        'Dedicated support'
      ],
      popular: false
    }
  ]

  const microSaasPricing = [
    {
      name: 'AI Invoice Generator',
      price: '$79',
      period: '/month',
      description: 'Automated invoicing and payment tracking',
      features: [
        'Unlimited invoices',
        'Payment tracking',
        'Client management',
        'Advanced analytics',
        'Custom branding',
        'API access'
      ],
      popular: true
    },
    {
      name: 'AI Social Media Manager',
      price: '$99',
      period: '/month',
      description: 'Automated social media management',
      features: [
        '10 social accounts',
        'Unlimited posts',
        'AI content generation',
        'Advanced analytics',
        'Team collaboration',
        'Priority support'
      ],
      popular: false
    },
    {
      name: 'AI Project Management',
      price: '$79',
      period: '/month',
      description: 'Intelligent project management platform',
      features: [
        'Up to 25 team members',
        'AI-powered insights',
        'Custom workflows',
        'Advanced analytics',
        '100+ integrations',
        'Priority support'
      ],
      popular: false
    }
  ]

  const itServicesPricing = [
    {
      name: 'Cloud Migration',
      price: '$15,000',
      period: 'one-time',
      description: 'Complete cloud infrastructure migration',
      features: [
        'Up to 100 servers',
        'Zero-downtime migration',
        'Security & compliance',
        'Cost optimization',
        '90-day support',
        'Performance monitoring'
      ],
      popular: true
    },
    {
      name: 'Cybersecurity Audit',
      price: '$5,000',
      period: 'one-time',
      description: 'Comprehensive security assessment',
      features: [
        'Vulnerability scanning',
        'Penetration testing',
        'Compliance review',
        'Security recommendations',
        'Detailed report',
        '30-day follow-up'
      ],
      popular: false
    },
    {
      name: 'DevOps Implementation',
      price: '$25,000',
      period: 'one-time',
      description: 'Complete DevOps transformation',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code',
        'Monitoring & logging',
        'Security integration',
        'Team training',
        '6-month support'
      ],
      popular: false
    }
  ]

  const serviceCategories = [
    {
      name: 'AI Services',
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      description: 'Advanced AI solutions for content, chatbots, and automation',
      startingPrice: '$29/month'
    },
    {
      name: 'Micro SAAS',
      icon: <Code className="w-6 h-6 text-green-500" />,
      description: 'Ready-to-use software solutions for business automation',
      startingPrice: '$79/month'
    },
    {
      name: 'IT Services',
      icon: <Cloud className="w-6 h-6 text-purple-500" />,
      description: 'Infrastructure, security, and digital transformation services',
      startingPrice: '$5,000/project'
    },
    {
      name: '5G Solutions',
      icon: <Wifi className="w-6 h-6 text-yellow-500" />,
      description: 'Next-generation 5G network implementation and optimization',
      startingPrice: '$10,000/project'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent Pricing for AI and IT Services</title>
        <meta name="description" content="Transparent pricing for AI services, micro SAAS solutions, and IT services. Choose the plan that fits your business needs." />
        <meta name="keywords" content="pricing, AI services pricing, micro SAAS pricing, IT services pricing, cloud migration pricing" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Transparent Pricing
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business needs. No hidden fees, no surprises. 
              Scale up or down as your business grows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{category.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <div className="text-purple-400 font-semibold">Starting at {category.startingPrice}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Services Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI solutions with flexible pricing options
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiServicesPricing.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 transition-all duration-300 ${
                service.popular 
                  ? 'border-purple-500 bg-gradient-to-br from-purple-500/20 to-blue-500/20' 
                  : 'border-white/20 hover:border-white/40'
              }`}>
                {service.popular && (
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-300 ml-1">{service.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{service.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Micro SAAS Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use software solutions for business automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaasPricing.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 transition-all duration-300 ${
                service.popular 
                  ? 'border-purple-500 bg-gradient-to-br from-purple-500/20 to-blue-500/20' 
                  : 'border-white/20 hover:border-white/40'
              }`}>
                {service.popular && (
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-300 ml-1">{service.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{service.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              IT Services Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional IT services with transparent project-based pricing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {itServicesPricing.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 transition-all duration-300 ${
                service.popular 
                  ? 'border-purple-500 bg-gradient-to-br from-purple-500/20 to-blue-500/20' 
                  : 'border-white/20 hover:border-white/40'
              }`}>
                {service.popular && (
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-300 ml-1">{service.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{service.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We offer custom pricing for enterprise solutions and specialized requirements. 
              Contact us for a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Custom Quote
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}