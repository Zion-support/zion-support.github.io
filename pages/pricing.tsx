import Head from 'next/head';
import Link from 'next/link';
export default function PricingPage() {
  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: '$99',
      period: '/month',
      features: [
        'AI-Powered Analytics Dashboard',
        'Basic Cloud Infrastructure',
        'Email Support',
        'Standard Security Features',
        'Monthly Reports',
        'Up to 5 Users'
      ],
      cta: 'Get Started',
      ctaLink: '/contact',
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: '$299',
      period: '/month',
      features: [
        'Everything in Starter',
        'Advanced AI Decision Engine',
        'Priority Support',
        'Enhanced Security & Compliance',
        'Custom Integrations',
        'Up to 25 Users',
        'Advanced Analytics',
        'API Access'
      ],
      cta: 'Start Free Trial',
      ctaLink: '/contact',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: 'Custom',
      period: '',
      features: [
        'Everything in Professional',
        'Custom AI Solutions',
        '24/7 Dedicated Support',
        'Enterprise Security',
        'Custom Development',
        'Unlimited Users',
        'Advanced Compliance',
        'Dedicated Account Manager',
        'SLA Guarantees',
        'On-Premise Options'
      ],
      cta: 'Contact Sales',
      ctaLink: '/contact',
      popular: false
    }
  ];
  const addOnServices = [
    {
      name: 'AI Model Training',
      description: 'Custom AI model development and training',
      price: 'From $2,500',
      features: ['Custom Data Processing', 'Model Optimization', 'Performance Tuning']
    },
    {
      name: 'Quantum Computing Access',
      description: 'Access to quantum computing resources',
      price: 'From $5,000',
      features: ['Quantum Algorithm Development', 'Hardware Access', 'Expert Consultation']
    },
    {
      name: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment',
      price: 'From $1,500',
      features: ['Vulnerability Assessment', 'Compliance Review', 'Security Recommendations']
    },
    {
      name: 'Cloud Migration',
      description: 'Complete cloud infrastructure migration',
      price: 'From $10,000',
      features: ['Architecture Design', 'Data Migration', 'Performance Optimization']
    }
  ];
  const faqs = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and can accommodate custom payment terms for enterprise clients.'
    },
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for our standard plans. Custom enterprise solutions may have one-time implementation costs.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide email support for all plans, priority support for Professional and Enterprise plans, and 24/7 support for Enterprise clients.'
    },
    {
      question: 'Do you offer discounts for annual payments?',
      answer: 'Yes, we offer a 20% discount for annual payments on all plans.'
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel at any time with no penalties. Your access will continue until the end of your current billing period.'
    }
  ];
  return (
    <>
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for Zion Tech Group's AI, cloud, and cybersecurity solutions. Choose the plan that fits your business needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI and security features with no hidden costs.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <span className="text-gray-400">Monthly</span>
              <div className="relative">
                <div className="w-12 h-6 bg-blue-600 rounded-full p-1">
                  <div className="w-4 h-4 bg-white rounded-full ml-1"></div>
                </div>
              </div>
              <span className="text-gray-400">Annual (20% off)</span>
            </div>
          </div>
        </section>
        {/* Pricing Tiers */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div 
                  key={index} 
                  className={`relative bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 border transition-all hover:bg-opacity-20 ${
                    tier.popular 
                      ? 'border-blue-400 border-2 scale-105' 
                      : 'border-white border-opacity-10'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-6">{tier.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      <span className="text-gray-400">{tier.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={tier.ctaLink}
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      tier.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Add-on Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Additional Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your solution with our specialized add-on services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {addOnServices.map((service, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-10">
                  <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-blue-400 mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact"
                    className="text-blue-400 hover:text-blue-300 font-medium text-sm"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">
                Get answers to common questions about our pricing and services
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-10">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Choose the perfect plan for your business or contact us for a custom solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Sales
              </Link>
              <Link 
                href="/services" 
                className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
