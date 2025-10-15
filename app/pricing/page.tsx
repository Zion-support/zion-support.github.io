import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { allServices, getServicesByCategory } from '../data/servicesData';

const PricingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const categories = [
    { id: 'all', name: 'All Services', color: 'from-cyan-400 to-purple-400' },
    { id: 'saas', name: 'Micro SAAS', color: 'from-purple-400 to-pink-400' },
    { id: 'ai', name: 'AI Services', color: 'from-pink-400 to-cyan-400' },
    { id: 'it', name: 'IT Solutions', color: 'from-cyan-400 to-blue-400' },
    { id: 'cloud', name: 'Cloud Infrastructure', color: 'from-blue-400 to-indigo-400' },
    { id: 'automation', name: 'Automation', color: 'from-green-400 to-teal-400' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : getServicesByCategory(selectedCategory);

  const getPrice = (service: any) => {
    const price = billingCycle === 'yearly' 
      ? Math.round(service.pricing.starter * 10) // 20% discount for yearly
      : service.pricing.starter;
    return price;
  };

  const getYearlyDiscount = (service: any) => {
    const monthlyPrice = service.pricing.starter * 12;
    const yearlyPrice = Math.round(service.pricing.starter * 10);
    return Math.round(((monthlyPrice - yearlyPrice) / monthlyPrice) * 100);
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI and IT services. Choose the plan that fits your business needs." />
        <meta name="keywords" content="AI pricing, IT services pricing, micro SAAS pricing, cloud infrastructure pricing, business automation pricing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Pricing Plans
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Transparent pricing for our comprehensive AI, IT, and micro SAAS solutions. Choose the perfect plan for your business needs.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-1 border border-cyan-500/20">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-md transition-all duration-300 ${
                    billingCycle === 'monthly'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-2 rounded-md transition-all duration-300 ${
                    billingCycle === 'yearly'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Yearly
                  <span className="ml-2 bg-green-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white transform scale-105`
                    : 'bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredServices.map((service, index) => (
              <div key={service.id} className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">{service.icon || '🤖'}</span>
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm">{service.shortDescription}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-cyan-400">${getPrice(service)}</span>
                      <span className="text-gray-400 ml-2">/{billingCycle === 'yearly' ? 'year' : 'month'}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-green-400 text-sm font-semibold">
                        Save {getYearlyDiscount(service)}% with yearly billing
                      </div>
                    )}
                    <div className="text-sm text-gray-400 mt-2">
                      Professional: ${billingCycle === 'yearly' ? Math.round(service.pricing.pro * 10) : service.pricing.pro}/{billingCycle === 'yearly' ? 'year' : 'month'} • 
                      Enterprise: ${billingCycle === 'yearly' ? Math.round(service.pricing.enterprise * 10) : service.pricing.enterprise}/{billingCycle === 'yearly' ? 'year' : 'month'}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature: string, idx: number) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center">
                          <svg className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      {service.freeTrial && (
                        <span className="flex items-center">
                          <svg className="w-4 h-4 text-green-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Free Trial
                        </span>
                      )}
                      {service.apiAvailable && (
                        <span className="flex items-center">
                          <svg className="w-4 h-4 text-blue-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                          API
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-400">
                      Setup: {service.setupTime}
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3">
                    <a 
                      href={`/${service.id}`} 
                      className="w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
                    >
                      Get Started
                    </a>
                    {service.demoUrl && (
                      <a 
                        href={service.demoUrl} 
                        className="w-full text-center px-4 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                      >
                        View Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enterprise CTA */}
          <div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-12 border border-cyan-500/20">
            <h3 className="text-3xl font-bold text-white mb-6">
              Need Custom Solutions?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We offer custom enterprise solutions tailored to your specific needs. Contact us for a personalized quote and consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="relative z-10">Contact Sales</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;