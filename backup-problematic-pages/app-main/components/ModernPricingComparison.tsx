'use client'

import React, { useState } from 'react'
import { Check, X, Zap, Crown, Rocket } from 'lucide-react'
import Link from 'next/link'

interface PricingTier {
  id: string
  name: string
  description: string
  price: {
    monthly: number
    yearly: number
  }
  features: string[]
  limitations: string[]
  icon: React.ReactNode
  color: string
  popular?: boolean
  cta: string
  ctaLink: string
}

const ModernPricingComparison: React.FC = () => {
  const [isYearly, setIsYearly] = useState(true)

  const pricingTiers: PricingTier[] = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small teams getting started with AI automation',
      price: {
        monthly: 99,
        yearly: 990
      },
      features: [
        'AI-powered workflow automation',
        'Basic analytics dashboard',
        'Email support',
        'Up to 5 team members',
        'Standard integrations',
        'Monthly reports'
      ],
      limitations: [
        'Limited AI model access',
        'Basic customization',
        'Standard SLA'
      ],
      icon: <Zap className="h-8 w-8" />,
      color: 'blue',
      cta: 'Start Free Trial',
      ctaLink: '/contact?plan=starter'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses ready to scale with AI',
      price: {
        monthly: 299,
        yearly: 2990
      },
      features: [
        'Advanced AI automation suite',
        'Real-time analytics & insights',
        'Priority support',
        'Up to 25 team members',
        'Advanced integrations',
        'Custom workflows',
        'API access',
        'Weekly reports'
      ],
      limitations: [
        'Limited custom AI training',
        'Standard performance SLA'
      ],
      icon: <Crown className="h-8 w-8" />,
      color: 'purple',
      popular: true,
      cta: 'Start Free Trial',
      ctaLink: '/contact?plan=professional'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Complete solution for large organizations with complex needs',
      price: {
        monthly: 999,
        yearly: 9990
      },
      features: [
        'Full AI automation platform',
        'Advanced analytics & BI',
        'Dedicated support team',
        'Unlimited team members',
        'All integrations',
        'Custom AI model training',
        'Full API access',
        'Real-time monitoring',
        'Custom SLA',
        'On-premise deployment',
        'Advanced security features',
        'White-label options'
      ],
      limitations: [],
      icon: <Rocket className="h-8 w-8" />,
      color: 'indigo',
      cta: 'Contact Sales',
      ctaLink: '/contact?plan=enterprise'
    }
  ]

  const getColorClasses = (color: string, isPopular: boolean = false) : any => {
    const colors = {
      blue: isPopular 
        ? 'bg-blue-600 border-blue-600 text-white' 
        : 'bg-blue-50 border-blue-200 text-blue-900',
      purple: isPopular 
        ? 'bg-purple-600 border-purple-600 text-white' 
        : 'bg-purple-50 border-purple-200 text-purple-900',
      indigo: isPopular 
        ? 'bg-indigo-600 border-indigo-600 text-white' 
        : 'bg-indigo-50 border-indigo-200 text-indigo-900'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your AI Transformation Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Scale your business with our flexible AI automation solutions. All plans include a 30-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg ${!isYearly ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              style={{
                backgroundColor: isYearly ? '#3B82F6' : '#D1D5DB'
              }}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${isYearly ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                Save 17%
              </span>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier) : any => {
            const isPopular = tier.popular
            const currentPrice = isYearly ? tier.price.yearly : tier.price.monthly
            const monthlyEquivalent = isYearly ? tier.price.yearly / 12 : tier.price.monthly

            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl border-2 p-8 transition-all hover:shadow-xl ${
                  isPopular 
                    ? 'shadow-2xl scale-105 border-purple-600' 
                    : 'shadow-lg hover:scale-102 border-gray-200'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-600 text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    isPopular ? 'bg-white text-purple-600' : getColorClasses(tier.color)
                  }`}>
                    {tier.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {tier.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">
                        ${currentPrice}
                      </span>
                      <span className="text-xl text-gray-500 ml-2">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    </div>
                    {isYearly && (
                      <div className="text-sm text-gray-500 mt-1">
                        ${Math.round(monthlyEquivalent)}/month billed annually
                      </div>
                    )}
                  </div>

                  <Link
                    href={tier.ctaLink}
                    className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                      isPopular
                        ? 'bg-purple-600 hover:bg-purple-700 text-white'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
                  {tier.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Limitations */}
                {tier.limitations.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-2">Limitations:</h4>
                    {tier.limitations.map((limitation, index) => (
                      <div key={index} className="flex items-start">
                        <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5 mr-3" />
                        <span className="text-gray-600 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We offer custom AI solutions tailored to your specific business needs. 
              Contact our team to discuss your requirements and get a personalized quote.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-900 mb-2">30-Day</div>
            <div className="text-gray-600">Free Trial</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900 mb-2">No Setup</div>
            <div className="text-gray-600">Fees</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900 mb-2">Cancel</div>
            <div className="text-gray-600">Anytime</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModernPricingComparison