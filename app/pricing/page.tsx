import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Star, Phone, Mail, MapPin } from 'lucide-react'
import { NeonText, NeonCard, NeonButton } from '../components/NeonEffects'
import { allServices } from '../data/services'

export default function PricingPage() {
  const aiServices = allServices.filter(service => service.category === 'ai')
  const microSaasServices = allServices.filter(service => service.category === 'micro-saas')
  const itServices = allServices.filter(service => service.category === 'it')

  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: '$99',
      period: '/month',
      features: [
        'Up to 3 AI services',
        'Basic support',
        'Email assistance',
        'Standard implementation',
        'Basic analytics',
        'Monthly reports'
      ],
      services: aiServices.slice(0, 3).concat(microSaasServices.slice(0, 2))
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: '$299',
      period: '/month',
      features: [
        'Up to 8 services',
        'Priority support',
        'Phone & email support',
        'Advanced implementation',
        'Advanced analytics',
        'Weekly reports',
        'API access',
        'Custom integrations'
      ],
      services: aiServices.slice(0, 5).concat(microSaasServices.slice(0, 3)),
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      price: '$599',
      period: '/month',
      features: [
        'Unlimited services',
        '24/7 dedicated support',
        'Dedicated account manager',
        'Custom development',
        'Real-time analytics',
        'Daily reports',
        'Full API access',
        'White-label options',
        'Custom training',
        'SLA guarantee'
      ],
      services: allServices.slice(0, 10),
      popular: false
    }
  ]

  const addOnServices = [
    {
      name: 'Custom AI Development',
      description: 'Bespoke AI solutions tailored to your specific needs',
      price: '$2,999',
      period: '/project'
    },
    {
      name: 'Dedicated Support',
      description: '24/7 dedicated technical support and monitoring',
      price: '$499',
      period: '/month'
    },
    {
      name: 'Training & Onboarding',
      description: 'Comprehensive training for your team on all services',
      price: '$1,999',
      period: '/session'
    },
    {
      name: 'Custom Integrations',
      description: 'Integrate our services with your existing systems',
      price: '$1,499',
      period: '/integration'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Service Pricing</title>
        <meta name="description" content="Transparent pricing for our AI and IT services. Choose from flexible plans designed for businesses of all sizes. No hidden fees, no surprises." />
        <meta name="keywords" content="pricing, AI services, IT solutions, micro SAAS, Zion Tech Group, transparent pricing" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <NeonText intensity="high">Simple, Transparent Pricing</NeonText>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your business needs. All plans include our core services with no hidden fees or surprises.
          </p>
          <div className="flex items-center justify-center space-x-4 text-cyan-400">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-semibold">30-day money-back guarantee</span>
            <Star className="w-5 h-5 fill-current" />
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <NeonCard key={index} className={`relative ${tier.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 mb-4">{tier.description}</p>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 text-lg">{tier.period}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-cyan-400 font-semibold mb-4">Included Services:</h4>
                  <div className="space-y-2">
                    {tier.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {service.name}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-cyan-400 font-semibold mb-4">Features:</h4>
                  <ul className="space-y-2">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <NeonButton 
                  variant={tier.popular ? "primary" : "secondary"}
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

        {/* Add-on Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <NeonText intensity="medium">Add-on Services</NeonText>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Enhance your plan with additional services tailored to your specific needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((service, index) => (
              <NeonCard key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">
                    {service.price}
                    <span className="text-gray-400 text-sm">{service.period}</span>
                  </div>
                  <NeonButton 
                    variant="secondary"
                    size="sm"
                    onClick={() => window.location.href = '/contact'}
                    className="w-full"
                  >
                    Learn More
                  </NeonButton>
                </div>
              </NeonCard>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <NeonText intensity="medium">Frequently Asked Questions</NeonText>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about our pricing and services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <NeonCard>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Can I change my plan anytime?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
              </div>
            </NeonCard>
            <NeonCard>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Is there a setup fee?</h3>
                <p className="text-gray-300">No setup fees for any of our plans. You only pay the monthly subscription fee, with no hidden costs or surprises.</p>
              </div>
            </NeonCard>
            <NeonCard>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3">What if I need more services?</h3>
                <p className="text-gray-300">You can add additional services as add-ons or upgrade to a higher tier. We also offer custom development for unique requirements.</p>
              </div>
            </NeonCard>
            <NeonCard>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Do you offer discounts for annual billing?</h3>
                <p className="text-gray-300">Yes, we offer a 20% discount for annual billing. Contact us to learn more about our annual pricing options.</p>
              </div>
            </NeonCard>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            <NeonText intensity="high">Need Help Choosing a Plan?</NeonText>
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is here to help you find the perfect solution for your business needs. 
            Contact us for a free consultation and personalized recommendations.
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