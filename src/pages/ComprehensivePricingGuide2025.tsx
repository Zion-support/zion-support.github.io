import React from 'react.ts';
import { SEO  } from '../components/SEO';
import { servicesCatalog  } from '../data/servicesCatalog';
import { MICRO_SAAS_SERVICES  } from '../data/microSaasServices';

const ComprehensivePricingGuide2025: React.FC = (): JSX.Element => {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic features and functionality',
        'Email support',
        'Up to 3 users',
        'Standard integrations',
        'Community documentation'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Advanced features and automation',
        'Priority support',
        'Up to 10 users',
        'Advanced integrations',
        'Custom workflows',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Custom features and development',
        '24/7 dedicated support',
        'Unlimited users',
        'Custom integrations',
        'Advanced security',
        'SLA guarantees',
        'On-premise options'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2025 - Zion Tech Group"
        description="Explore our competitive pricing for AI, IT, and micro SaaS services. Get detailed pricing information, market analysis, and contact details for all our innovative solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Pricing Guide 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transparent pricing for our complete portfolio of AI-powered solutions, IT services, and innovative micro SaaS platforms
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`mailto:${contactInfo.email}?subject=Pricing Inquiry`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Custom Quote
            </a>
            <a 
              href={`tel:${contactInfo.mobile}`}
              className="bg-transparent border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call for Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-blue-900/20 border-t border-b border-blue-500/30 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-blue-400 font-semibold mb-2">Mobile</h3>
              <a href={`tel:${contactInfo.mobile}`} className="text-white hover:text-blue-300 transition-colors">
                {contactInfo.mobile}
              </a>
            </div>
            <div>
              <h3 className="text-blue-400 font-semibold mb-2">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-blue-300 transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div>
              <h3 className="text-blue-400 font-semibold mb-2">Address</h3>
              <p className="text-white">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Flexible Pricing Tiers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs and scale as you grow
            </p>
          </div>

          <div className="grid grid-cols-1 lg: grid-cols-3 gap-8">
            {pricingTiers.map((tier, index)  => (
              <div 
                key={tier.name}
                className={`relative rounded-xl p-8 ${
                  tier.popular 
                    ? 'bg-blue-900/20 border-2 border-blue-500/50' 
                    : 'bg-slate-800/50 border border-slate-700'
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
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-blue-400">{tier.price}</span>
                    <span className="text-gray-400 text-xl ml-1">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <span className="text-blue-400 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <a 
                    href={`mailto:${contactInfo.email}?subject=${tier.name} Plan Inquiry`}
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${
                      tier.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-slate-700 hover:bg-slate-600 text-white'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Service Category Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Detailed pricing for each service category with market comparison and value analysis
            </p>
          </div>

          <div className="space-y-12">
            {servicesCatalog.map((category) => (
              <div key={category.slug} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold text-white">{category.name}</h3>
                  <span className="text-blue-400 font-semibold">
                    {category.items.length} Services Available
                  </span>
                </div>
                
                <div className="grid grid-cols-1 lg: grid-cols-2 xl:grid-cols-3 gap-6">
                  {category.items.map((service)  => (
                    <div key={service.id} className="bg-slate-700/50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-3">{service.title}</h4>
                      <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Starting Price:</span>
                          <span className="text-blue-400 font-bold text-lg">{service.price}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Billing:</span>
                          <span className="text-white text-sm capitalize">{service.billing}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h5 className="text-white font-semibold text-sm mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="text-gray-300 text-xs flex items-center">
                              <span className="text-blue-400 mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex justify-between items-center">
                        <a 
                          href={service.href}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors"
                        >
                          {service.ctaLabel}
                        </a>
                        <a 
                          href={`mailto:${contactInfo.email}?subject=${service.title} Pricing`}
                          className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                        >
                          Get Quote
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Pricing Analysis */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Micro SaaS Pricing Analysis
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Competitive pricing analysis for our micro SaaS solutions with market comparison
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Pricing by Category</h3>
              <div className="space-y-6">
                {Array.from(new Set(MICRO_SAAS_SERVICES.map(s => s.category))).map((category) => {
                  const services = MICRO_SAAS_SERVICES.filter(s => s.category === category);
                  const avgPrice = services.reduce((sum, s) => sum + s.price, 0) / services.length;
                  const minPrice = Math.min(...services.map(s => s.price));
                  const maxPrice = Math.max(...services.map(s => s.price));
                  
                  return (
                    <div key={category} className="border-b border-slate-700 pb-4 last:border-b-0">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">{category}</span>
                        <span className="text-blue-400 font-bold">${Math.round(avgPrice)}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>Range: ${minPrice} - ${maxPrice}</span>
                        <span>{services.length} services</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Market Price Comparison</h3>
              <div className="space-y-6">
                <div className="text-center p-6 bg-blue-900/20 rounded-lg border border-blue-500/30">
                  <h4 className="text-white font-semibold mb-2">Average Market Price</h4>
                  <div className="text-3xl font-bold text-blue-400">
                    ${Math.round(MICRO_SAAS_SERVICES.reduce((sum, s) => {
                      const priceRange = s.marketPrice.match(/\$(\d+)/);
                      return sum + (priceRange ? parseInt(priceRange[1]) : s.price);
                    }, 0) / MICRO_SAAS_SERVICES.length)}
                  </div>
                  <p className="text-gray-300 text-sm">per month</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Our Average Price:</span>
                    <span className="text-white font-semibold">
                      ${Math.round(MICRO_SAAS_SERVICES.reduce((sum, s) => sum + s.price, 0) / MICRO_SAAS_SERVICES.length)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Market Average:</span>
                    <span className="text-blue-400 font-semibold">
                      ${Math.round(MICRO_SAAS_SERVICES.reduce((sum, s) => {
                        const priceRange = s.marketPrice.match(/\$(\d+)/);
                        return sum + (priceRange ? parseInt(priceRange[1]) : s.price);
                      }, 0) / MICRO_SAAS_SERVICES.length)}
                    </span>
                  </div>
                                      <div className="flex justify-between items-center">
                      <span className="text-gray-300">Savings:</span>
                      <span className="text-green-400 font-semibold">
                      {(() => {
                        const avgMarketPrice = MICRO_SAAS_SERVICES.reduce((sum, s) => {
                          const priceRange = s.marketPrice.match(/\$(\d+)/);
                          return sum + (priceRange ? parseInt(priceRange[1]) : s.price);
                        }, 0) / MICRO_SAAS_SERVICES.length;
                        
                        const avgOurPrice = MICRO_SAAS_SERVICES.reduce((sum, s) => sum + s.price, 0) / MICRO_SAAS_SERVICES.length;
                        
                        const savingsPercentage = ((avgMarketPrice - avgOurPrice) / avgMarketPrice) * 100;
                        return Math.round(savingsPercentage);
                      })()}%
                      </span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI and Value Proposition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Return on Investment & Value
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understand the real value and ROI of our services with detailed analysis and case studies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-white mb-4">Average ROI</h3>
              <div className="text-5xl font-bold text-green-400 mb-2">300%</div>
              <p className="text-gray-300">Within 12 months of implementation</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 text-center">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Time to Value</h3>
              <div className="text-5xl font-bold text-blue-400 mb-2">30 Days</div>
              <p className="text-gray-300">Average implementation timeline</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">Cost Savings</h3>
              <div className="text-5xl font-bold text-yellow-400 mb-2">40%</div>
              <p className="text-gray-300">Reduction in operational costs</p>
            </div>
          </div>

          <div className="mt-12 bg-blue-900/20 rounded-xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Value Proposition</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-semibold mb-4">Immediate Benefits</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Increased operational efficiency</li>
                  <li>• Reduced manual workload</li>
                  <li>• Improved data accuracy</li>
                  <li>• Enhanced customer experience</li>
                  <li>• Faster decision-making</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Long-term Value</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Scalable infrastructure</li>
                  <li>• Competitive advantage</li>
                  <li>• Innovation leadership</li>
                  <li>• Future-proof technology</li>
                  <li>• Strategic partnerships</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Quote Request */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Get Your Custom Quote
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us for personalized pricing and custom solutions tailored to your business needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-3">Request Custom Quote</h3>
              <p className="text-gray-300 mb-4">Get personalized pricing for your specific requirements</p>
              <a 
                href={`mailto:${contactInfo.email}?subject=Custom Quote Request`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                Request Quote
              </a>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-3">Schedule Consultation</h3>
              <p className="text-gray-300 mb-4">Book a free consultation to discuss your needs</p>
              <a 
                href={`mailto:${contactInfo.email}?subject=Consultation Request`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                Book Consultation
              </a>
            </div>
          </div>

          <div className="bg-blue-900/20 rounded-xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">Mobile</h4>
                <a href={`tel:${contactInfo.mobile}`} className="text-white hover:text-blue-300 transition-colors">
                  {contactInfo.mobile}
                </a>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">Email</h4>
                <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-blue-300 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">Website</h4>
                <a href={contactInfo.website} className="text-white hover:text-blue-300 transition-colors">
                  {contactInfo.website}
                </a>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-300">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2025;