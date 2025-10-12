import React from 'react'
import { Check, Star, Zap, Brain, Cloud, Code, Wifi, Shield, BarChart3, Users, Clock, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'

const PricingPage: React.FC = () => {
  const aiServices = [
    {
      name: 'AI Content Generator',
      price: '$99',
      period: '/month',
      description: 'Generate high-quality content with AI assistance',
      features: [
        'Unlimited content generation',
        'Multiple content types (blog, social, email)',
        'SEO optimization',
        'Brand voice customization',
        '24/7 support'
      ],
      popular: false
    },
    {
      name: 'AI Chatbot Enterprise',
      price: '$299',
      period: '/month',
      description: 'Advanced AI chatbot for customer service',
      features: [
        'Multi-language support',
        'Custom training',
        'Integration with CRM',
        'Analytics dashboard',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'AI Analytics Dashboard',
      price: '$199',
      period: '/month',
      description: 'AI-powered business intelligence platform',
      features: [
        'Real-time analytics',
        'Predictive insights',
        'Custom reports',
        'Data visualization',
        'API access'
      ],
      popular: false
    },
    {
      name: 'AI 3D Generation',
      price: '$399',
      period: '/month',
      description: 'Create stunning 3D models with AI',
      features: [
        'Unlimited 3D models',
        'High-resolution output',
        'Multiple formats',
        'Custom training',
        'Commercial license'
      ],
      popular: false
    }
  ]

  const itServices = [
    {
      name: 'Cloud Migration',
      price: '$2,500',
      period: '/project',
      description: 'Complete cloud infrastructure migration',
      features: [
        'Assessment & planning',
        'Data migration',
        'Security configuration',
        'Performance optimization',
        '6 months support'
      ],
      popular: true
    },
    {
      name: 'DevOps Solutions',
      price: '$1,800',
      period: '/month',
      description: 'Comprehensive DevOps implementation',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code',
        'Monitoring & alerting',
        'Security scanning',
        '24/7 monitoring'
      ],
      popular: false
    },
    {
      name: 'Cybersecurity Audit',
      price: '$1,200',
      period: '/project',
      description: 'Complete security assessment and hardening',
      features: [
        'Vulnerability assessment',
        'Penetration testing',
        'Security recommendations',
        'Implementation support',
        'Compliance reporting'
      ],
      popular: false
    },
    {
      name: 'Mobile App Development',
      price: '$5,000',
      period: '/project',
      description: 'Custom mobile applications',
      features: [
        'iOS & Android development',
        'UI/UX design',
        'Backend integration',
        'App store deployment',
        '3 months maintenance'
      ],
      popular: false
    }
  ]

  const microSaasServices = [
    {
      name: 'AI-Powered CRM',
      price: '$49',
      period: '/month',
      description: 'Intelligent customer relationship management',
      features: [
        'Lead scoring',
        'Automated follow-ups',
        'Sales forecasting',
        'Integration capabilities',
        'Basic support'
      ],
      popular: false
    },
    {
      name: 'Smart Analytics',
      price: '$79',
      period: '/month',
      description: 'AI-driven business analytics',
      features: [
        'Real-time dashboards',
        'Custom metrics',
        'Automated reports',
        'Data export',
        'Email support'
      ],
      popular: true
    },
    {
      name: 'Automated Testing',
      price: '$129',
      period: '/month',
      description: 'AI-powered software testing',
      features: [
        'Automated test generation',
        'Cross-browser testing',
        'Performance testing',
        'Bug tracking',
        'Priority support'
      ],
      popular: false
    },
    {
      name: 'Content Management',
      price: '$39',
      period: '/month',
      description: 'AI content management system',
      features: [
        'Content scheduling',
        'SEO optimization',
        'Multi-platform publishing',
        'Analytics integration',
        'Basic support'
      ],
      popular: false
    }
  ]

  const enterpriseServices = [
    {
      name: 'Custom AI Solution',
      price: 'Custom',
      period: '',
      description: 'Tailored AI solutions for enterprise needs',
      features: [
        'Custom AI model development',
        'Dedicated team',
        'Unlimited support',
        'SLA guarantees',
        'On-premise deployment'
      ],
      popular: false
    },
    {
      name: 'Digital Transformation',
      price: 'Custom',
      period: '',
      description: 'Complete digital transformation package',
      features: [
        'Strategy development',
        'Technology implementation',
        'Change management',
        'Training & support',
        'Ongoing optimization'
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transparent
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your business needs. All plans include our commitment to excellence and 24/7 support.
          </p>
        </div>
      </div>

      {/* AI Services Pricing */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Brain className="w-8 h-8 text-purple-400 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">AI Services</h2>
            </div>
            <p className="text-xl text-gray-300">Advanced AI solutions to transform your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:bg-white/20 ${service.popular ? 'border-purple-400 ring-2 ring-purple-400/50' : 'border-white/20'}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-400">{service.period}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      service.popular
                        ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Pricing */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Cloud className="w-8 h-8 text-blue-400 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">IT Services</h2>
            </div>
            <p className="text-xl text-gray-300">Professional IT solutions and infrastructure</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:bg-white/20 ${service.popular ? 'border-blue-400 ring-2 ring-blue-400/50' : 'border-white/20'}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Recommended
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-400">{service.period}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      service.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Pricing */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Code className="w-8 h-8 text-green-400 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Micro SAAS</h2>
            </div>
            <p className="text-xl text-gray-300">Ready-to-use software solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:bg-white/20 ${service.popular ? 'border-green-400 ring-2 ring-green-400/50' : 'border-white/20'}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Best Value
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-400">{service.period}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      service.popular
                        ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Services */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-yellow-400 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Enterprise Solutions</h2>
            </div>
            <p className="text-xl text-gray-300">Custom solutions for large organizations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {enterpriseServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 transition-all duration-300 hover:bg-white/20">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="mb-8">
                    <span className="text-5xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-400 text-xl">{service.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="w-full block text-center py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all duration-300"
                  >
                    Contact Sales
                  </Link>
                </div>
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
                Ready to Get Started?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Contact us today to discuss your specific needs and get a customized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PricingPage
