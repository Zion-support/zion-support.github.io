'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Check, Star, Zap } from 'lucide-react'

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI and IT solutions',
      features: [
        'Basic AI consultation (2 hours/month)',
        'Email support',
        'Monthly performance reports',
        'Basic analytics dashboard',
        '5 hours of technical support',
        'Standard security monitoring',
        'Basic cloud infrastructure',
        'Up to 5 users'
      ],
      popular: false,
      category: 'Small Business'
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI solutions & automation',
        'Priority support (4-hour response)',
        'Weekly detailed reports',
        'Advanced analytics & insights',
        '20 hours of technical support',
        'Custom integrations',
        'Training sessions (2/month)',
        'Enhanced security suite',
        'Scalable cloud infrastructure',
        'Up to 25 users',
        'API access'
      ],
      popular: true,
      category: 'Growing Business'
    },
    {
      name: 'Enterprise',
      price: '$2,499',
      period: '/month',
      description: 'For large organizations requiring comprehensive solutions',
      features: [
        'Full AI suite with custom models',
        '24/7 dedicated support',
        'Real-time monitoring & reports',
        'Custom analytics & BI',
        'Unlimited technical support',
        'Custom development projects',
        'Dedicated account manager',
        'SLA guarantee (99.9% uptime)',
        'Enterprise security suite',
        'Multi-cloud infrastructure',
        'Unlimited users',
        'Full API access',
        'On-site training',
        'Compliance support (SOC2, GDPR)'
      ],
      popular: false,
      category: 'Enterprise'
    }
  ]

  const microSaasPricing = [
    {
      name: 'AI Content Generator',
      price: '$29',
      period: '/month',
      description: 'Generate high-quality content with AI',
      features: ['10,000 words/month', 'Multiple content types', 'SEO optimization', 'Email support'],
      link: 'https://ziontechgroup.com/ai-content-generator'
    },
    {
      name: 'Business Analytics',
      price: '$49',
      period: '/month',
      description: 'Real-time business intelligence',
      features: ['Unlimited dashboards', 'Custom reports', 'Data visualization', 'Priority support'],
      link: 'https://ziontechgroup.com/business-analytics'
    },
    {
      name: 'API Management',
      price: '$39',
      period: '/month',
      description: 'Complete API lifecycle management',
      features: ['API gateway', 'Rate limiting', 'Authentication', 'Documentation'],
      link: 'https://ziontechgroup.com/api-management'
    },
    {
      name: 'Mobile App Builder',
      price: '$79',
      period: '/month',
      description: 'No-code mobile app development',
      features: ['Drag & drop builder', 'Native performance', 'Push notifications', 'App store deployment'],
      link: 'https://ziontechgroup.com/mobile-builder'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI and IT services.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-purple-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                      : 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro-SaaS Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Micro-SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Individual software solutions with transparent, affordable pricing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {microSaasPricing.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-gray-300 ml-1">{service.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Try Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We understand that every business is unique. Contact us to discuss your specific requirements and get a tailored quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              Contact Sales
            </a>
            <a 
              href="tel:+13024640950"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
            >
              Call Us: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PricingPage