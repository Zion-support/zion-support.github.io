import React, { useState } from 'react';
import { enhancedInnovativeMicroSaasServices2025, enhancedITServices2025, enhancedAIServices2025 } from '../data/enhancedInnovativeServices2025';
import { nextGenInnovativeServices2025 } from '../data/nextGenInnovativeServices2025';

const ComprehensivePricing2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const allServices = [
    ...enhancedInnovativeMicroSaasServices2025.map(service => ({ 
      ...service, 
      type: 'Micro SAAS',
      displayPrice: service.price,
      displayPricingModel: service.pricingModel
    })),
    ...enhancedITServices2025.map(service => ({ 
      ...service, 
      type: 'IT Services',
      displayPrice: service.hourlyRate,
      displayPricingModel: 'hourly'
    })),
    ...enhancedAIServices2025.map(service => ({ 
      ...service, 
      type: 'AI Services',
      displayPrice: service.price,
      displayPricingModel: service.pricingModel
    })),
    ...nextGenInnovativeServices2025.map(service => ({ 
      ...service, 
      type: 'Next-Gen Services',
      displayPrice: service.price,
      displayPricingModel: service.pricingModel
    }))
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.type === selectedCategory);

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'Micro SAAS', name: 'Micro SAAS', count: enhancedInnovativeMicroSaasServices2025.length },
    { id: 'IT Services', name: 'IT Services', count: enhancedITServices2025.length },
    { id: 'AI Services', name: 'AI Services', count: enhancedAIServices2025.length },
    { id: 'Next-Gen Services', name: 'Next-Gen Services', count: nextGenInnovativeServices2025.length }
  ];

  const formatPrice = (price: number, model: string) => {
    if (model === 'monthly') return `$${price.toLocaleString()}/month`;
    if (model === 'one-time') return `$${price.toLocaleString()}`;
    if (model === 'hourly') return `$${price.toLocaleString()}/hour`;
    return `$${price.toLocaleString()}`;
  };

  const getAnnualDiscount = (monthlyPrice: number) => {
    return Math.round(monthlyPrice * 12 * 0.15); // 15% annual discount
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Pricing 2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transparent pricing for all our innovative services. Choose the perfect solution for your business needs and budget.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                billingCycle === 'annual' ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
              Annual Billing
              <span className="ml-1 text-green-400 text-xs">(Save 15%)</span>
            </span>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-white/10 backdrop-blur-lg border border-white/20 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Service Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full font-medium">
                      {service.type}
                    </span>
                    <span className="text-2xl">
                      {service.type === 'Micro SAAS' ? '🚀' : 
                       service.type === 'IT Services' ? '🖥️' : 
                       service.type === 'AI Services' ? '🤖' : '⚡'}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>

                {/* Pricing */}
                <div className="mb-4 p-4 bg-white/5 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-1">
                      {billingCycle === 'annual' && service.displayPricingModel === 'monthly'
                        ? `$${Math.round(service.displayPrice * 12 * 0.85).toLocaleString()}/year`
                        : formatPrice(service.displayPrice, service.displayPricingModel)
                      }
                    </div>
                    {billingCycle === 'annual' && service.displayPricingModel === 'monthly' && (
                      <div className="text-sm text-green-400 mb-1">
                        Save ${getAnnualDiscount(service.displayPrice).toLocaleString()} annually
                      </div>
                    )}
                    <div className="text-sm text-gray-400">
                      {service.displayPricingModel === 'monthly' 
                        ? billingCycle === 'annual' ? 'billed annually' : 'per month'
                        : service.displayPricingModel === 'hourly' ? 'per hour' : 'one-time'
                      }
                    </div>
                    {service.marketPrice && (
                      <p className="text-xs text-gray-400 mt-2">
                        Market: {service.marketPrice}
                      </p>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 5).map((feature, idx) => (
                      <div key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 5 && (
                      <div className="text-xs text-gray-500 mt-1">
                        +{service.features.length - 5} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mb-4 space-y-2">
                  {service.type === 'Micro SAAS' && 'userLimit' in service && (
                    <>
                      {service.userLimit && (
                        <div className="text-xs text-gray-400">
                          👥 <strong>Users:</strong> {service.userLimit}
                        </div>
                      )}
                      {service.setupTime && (
                        <div className="text-xs text-gray-400">
                          ⚡ <strong>Setup:</strong> {service.setupTime}
                        </div>
                      )}
                      {service.freeTier && (
                        <div className="text-xs text-green-400">
                          🆓 <strong>Free tier available</strong>
                        </div>
                      )}
                    </>
                  )}
                  {service.type === 'IT Services' && 'responseTime' in service && (
                    <>
                      {service.responseTime && (
                        <div className="text-xs text-gray-400">
                          ⏱️ <strong>Response:</strong> {service.responseTime}
                        </div>
                      )}
                      {service.sla && (
                        <div className="text-xs text-gray-400">
                          📊 <strong>SLA:</strong> {service.sla}
                        </div>
                      )}
                    </>
                  )}
                  {service.type === 'AI Services' && 'accuracy' in service && (
                    <>
                      {service.accuracy && (
                        <div className="text-xs text-gray-400">
                          🎯 <strong>Accuracy:</strong> {service.accuracy}
                        </div>
                      )}
                      {service.aiScore && (
                        <div className="text-xs text-gray-400">
                          🤖 <strong>AI Score:</strong> {service.aiScore}/10
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white/10 text-xs text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="border-t border-white/20 pt-4">
                  <div className="text-center space-y-2">
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                      className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                    >
                      Get Started
                    </a>
                    <div className="text-xs text-gray-400">
                      📧 {service.contactInfo.email}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pricing Comparison
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our pricing compares to market alternatives and understand the value we deliver
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Market Alternatives</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Enterprise Software</span>
                  <span className="text-red-400">$50K-500K/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Consulting Services</span>
                  <span className="text-red-400">$300-500/hour</span>
                </div>
                <div className="flex justify-between">
                  <span>Custom Development</span>
                  <span className="text-red-400">$100K-1M+</span>
                </div>
                <div className="flex justify-between">
                  <span>AI Solutions</span>
                  <span className="text-red-400">$25K-200K/year</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Zion Tech Group</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Micro SAAS</span>
                  <span className="text-green-400">$79-399/month</span>
                </div>
                <div className="flex justify-between">
                  <span>IT Services</span>
                  <span className="text-green-400">$150-250/hour</span>
                </div>
                <div className="flex justify-between">
                  <span>AI Services</span>
                  <span className="text-green-400">$800-25K</span>
                </div>
                <div className="flex justify-between">
                  <span>Next-Gen Services</span>
                  <span className="text-green-400">$6.5K-25K/month</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Savings</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Cost Reduction</span>
                  <span className="text-green-400">30-70%</span>
                </div>
                <div className="flex justify-between">
                  <span>Setup Time</span>
                  <span className="text-green-400">Days vs Months</span>
                </div>
                <div className="flex justify-between">
                  <span>Customization</span>
                  <span className="text-green-400">Included</span>
                </div>
                <div className="flex justify-between">
                  <span>Support</span>
                  <span className="text-green-400">24/7 Included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss your needs and get a personalized quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Custom Quote
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Call Now: +1 302 464 0950
            </a>
          </div>
          <div className="mt-8 text-gray-400">
            <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
            <p>🌐 https://ziontechgroup.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricing2025;