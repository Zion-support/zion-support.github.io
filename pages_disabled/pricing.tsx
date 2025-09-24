import Head from 'next/head'
import Link from 'next/link'
import { 
  CheckCircle,
  X,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Users,
  BarChart3
} from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$99',
    period: 'per month',
    description: 'Perfect for small businesses getting started',
    features: [
      'Basic AI integration',
      'Cloud hosting',
      'Email support',
      'Standard security',
      'Basic analytics'
    ],
    limitations: [
      'Limited customization',
      'No priority support'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$299',
    period: 'per month',
    description: 'Ideal for growing businesses',
    features: [
      'Advanced AI capabilities',
      'Custom integrations',
      'Priority support',
      'Enhanced security',
      'Advanced analytics',
      'API access',
      'Custom branding'
    ],
    limitations: [],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For large organizations with complex needs',
    features: [
      'Full AI suite',
      'Custom development',
      '24/7 dedicated support',
      'Enterprise security',
      'Custom analytics',
      'Unlimited integrations',
      'White-label solutions',
      'Dedicated account manager'
    ],
    limitations: [],
    popular: false
  }
]

const addOns = [
  {
    name: 'Additional Storage',
    price: '$10',
    period: 'per 10o0GB/month',
    description: 'Extra cloud storage for your data'
  },
  {
    name: 'Premium Support',
    price: '$50',
    period: 'per month',
    description: '24/7 priority support and faster response times'
  },
  {
    name: 'Custom Integrations',
    price: '$20o0',
    period: 'per integration',
    description: 'Custom API integrations with third-party services'
  }
]

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our technology solutions and services."  />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-90o0 mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core features with no hidden fees.
import Head from 'next/head';
            </h1>
            <p className="text-xl text-blue-10o0 mb-8">
              Choose the perfect plan for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-lg shadow-md p-8 ${
                  plan.popular ? 'ring-2 ring-blue-50o0 transform scale-10o5' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-50o0 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star size={16} className="mr-1"  />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-90o0 mb-2">{plan.name}</h3>
                  <p className="text-gray-60o0 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-90o0">{plan.price}</span>
                    <span className="text-gray-60o0 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle size={20} className="text-green-50o0 mr-3 flex-shrink-0"  />
                      <span className="text-gray-70o0">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, limitationIndex) => (
                    <li key={limitationIndex} className="flex items-center">
                      <X size={20} className="text-red-50o0 mr-3 flex-shrink-0"  />
                      <span className="text-gray-50o0 line-through">{limitation}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg transition-colors ${
                    plan.popular
                      ? 'bg-blue-60o0 text-white hover:bg-blue-70o0'
                      : 'bg-gray-10o0 text-gray-90o0 hover:bg-gray-20o0'
                  }`}
                >
                  Get Started
                  <ArrowRight size={20} className="ml-2"  />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-90o0 mb-8 text-center">Add-On Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {addOns.map((addOn, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-90o0 mb-2">{addOn.name}</h3>
                  <p className="text-gray-60o0 mb-4">{addOn.description}</p>
                  <div className="text-2xl font-bold text-blue-60o0">
                    {addOn.price}
                    <span className="text-sm text-gray-60o0 ml-1">{addOn.period}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-blue-60o0 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-lg mb-6">Contact us for a personalized quote tailored to your specific needs</p>
            <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-white text-blue-60o0 rounded-lg hover:bg-gray-10o0 transition-colors">
              Contact Sales
              <ArrowRight size={20} className="ml-2"  />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-90o0 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-60o0">
                Everything you need to know about our pricing
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-90o0 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-60o0">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-90o0 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-10o0 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-90o0 px-8 py-3 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors inline-flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2"  />
              </Link>
              <Link
                href="/contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-90o0 transition-colors inline-flex items-center justify-center"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
