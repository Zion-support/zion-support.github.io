import Head from 'next/head.ts';
import Link from 'next/link.ts';
export default function PricingPage(...args: any[]): any {
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
      question: 'Can I change my plan at  time?',
      answer: 'Yes, you can upgrade or downgrade your plan at  time. Changes take effect at the start of your next billing cycle.'
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
      answer: 'Yes, you can cancel at  time with no penalties. Your access will continue until the end of your current billing period.'
    }
  ];
  return (
  {/* Empty JSX fragment */}
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for Zion Tech Group's AI, cloud, and cybersecurity solutions. Choose the plan that fits your business needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Competitive pricing for cutting-edge AI, IT, and micro SaaS services. 
              All prices include full support, updates, and enterprise-grade features.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="h-4 w-4 text-green-500" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users className="h-4 w-4 text-blue-500" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <TrendingUp className="h-4 w-4 text-purple-500" />
                <span>Continuous Updates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Price Comparison */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Market Price Comparison</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our pricing is competitive with industry leaders while providing superior value and features. 
              Compare with similar solutions in the market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">AI & Machine Learning</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>OpenAI API</span>
                  <span className="text-gray-600">$0.002-0.12/1K tokens</span>
                </div>
                <div className="flex justify-between">
                  <span>Anthropic Claude</span>
                  <span className="text-gray-600">$0.008-0.24/1K tokens</span>
                </div>
                <div className="flex justify-between">
                  <span>Google Vertex AI</span>
                  <span className="text-gray-600">$0.10-2.00/hour</span>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  *Our AI services include full platform access, not just API calls
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cloud & DevOps</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>AWS EC2</span>
                  <span className="text-gray-600">$0.01-3.20/hour</span>
                </div>
                <div className="flex justify-between">
                  <span>Azure DevOps</span>
                  <span className="text-gray-600">$6-52/user/month</span>
                </div>
                <div className="flex justify-between">
                  <span>GitLab Premium</span>
                  <span className="text-gray-600">$19/user/month</span>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  *Our DevOps platform includes AI automation and monitoring
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Security & Compliance</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Cloudflare Zero Trust</span>
                  <span className="text-gray-600">$7-25/user/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Okta Identity</span>
                  <span className="text-gray-600">$2-8/user/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Snyk Security</span>
                  <span className="text-gray-600">$25-500/month</span>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  *Our security includes quantum-resistant encryption
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing Tiers */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md: anygrid-cols-3 gap-8">
              {pricingTiers.map((tier, index)  => (
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

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.tagline}</p>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-blue-600">{service.price}</span>
                      <span className="text-gray-500">{service.period}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{service.marketPrice}</p>
                  </div>

                  {/* Category */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    {getCategoryIcon(service.category)}
                    <span className="capitalize">{service.category}</span>
                  </div>
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
            
            <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-8">
              {addOnServices.map((service, index)  => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-10">
                  <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-blue-400 mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-lg font-semibold text-blue-600">{service.customers}+</div>
                      <div className="text-xs text-gray-500">Customers</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-green-600">{service.rating}/5</div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-purple-600">{service.reviews}</div>
                      <div className="text-xs text-gray-500">Reviews</div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <Link
                      href={service.link}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      Learn More
                    </Link>
                    <Link
                      href="/contact"
                      className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Contact our team to discuss your specific needs and get a customized quote. 
              We offer flexible pricing and implementation options for all business sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-blue-100">
                <a href="tel:+13024640950" className="hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-blue-100">
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-blue-100">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )}
