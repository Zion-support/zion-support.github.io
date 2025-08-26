import React, { useState } from 'react';
import { innovativeMicroSaasServices2025 } from '../data/innovativeMicroSaasServices2025';
import { innovativeITServices2025 } from '../data/innovativeITServices2025';
import { innovativeAIServices2025 } from '../data/innovativeAIServices2025';

const ComprehensivePricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState('microsaas');
  const [selectedPlan, setSelectedPlan] = useState<string>('monthly');

  const tabs = [
    { id: 'microsaas', name: 'Micro SAAS Services', count: innovativeMicroSaasServices2025.length },
    { id: 'it', name: 'IT Services', count: innovativeITServices2025.length },
    { id: 'ai', name: 'AI Services', count: innovativeAIServices2025.length }
  ];

  const getServicesByTab = () => {
    switch (activeTab) {
      case 'microsaas':
        return innovativeMicroSaasServices2025;
      case 'it':
        return innovativeITServices2025;
      case 'ai':
        return innovativeAIServices2025;
      default:
        return [];
    }
  };

  const calculateAnnualPrice = (monthlyPrice: number) => {
    return Math.round(monthlyPrice * 12 * 0.8); // 20% discount for annual
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transparent pricing for all our innovative services. Choose the plan that fits your business needs.
          </p>
          
          {/* Pricing Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-1">
              <button
                onClick={() => setSelectedPlan('monthly')}
                className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                  selectedPlan === 'monthly'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setSelectedPlan('annual')}
                className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                  selectedPlan === 'annual'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Annual (20% Off)
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-blue-400">
                {innovativeMicroSaasServices2025.length + innovativeITServices2025.length + innovativeAIServices2025.length}
              </span>
              <p className="text-sm text-gray-300">Total Services</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-green-400">
                {selectedPlan === 'annual' ? '20%' : '0%'}
              </span>
              <p className="text-sm text-gray-300">Discount</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-purple-400">24/7</span>
              <p className="text-sm text-gray-300">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {tab.name} ({tab.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getServicesByTab().map((service, index) => (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">
                    {activeTab === 'microsaas' && '🚀'}
                    {activeTab === 'it' && '⚡'}
                    {activeTab === 'ai' && '🤖'}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-400">{service.category}</p>
                </div>

                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-blue-400 mb-1">
                    {activeTab === 'microsaas' && (
                      <>
                        ${selectedPlan === 'annual' ? calculateAnnualPrice(service.price) : service.price}
                        <span className="text-lg text-gray-400">
                          /{selectedPlan === 'annual' ? 'year' : service.pricingModel}
                        </span>
                      </>
                    )}
                    {activeTab === 'it' && (
                      <>
                        ${service.hourlyRate}
                        <span className="text-lg text-gray-400">/hour</span>
                      </>
                    )}
                    {activeTab === 'ai' && (
                      <>
                        ${selectedPlan === 'annual' ? calculateAnnualPrice(service.price) : service.price}
                        <span className="text-lg text-gray-400">
                          /{selectedPlan === 'annual' ? 'year' : service.pricingModel}
                        </span>
                      </>
                    )}
                  </div>
                  {activeTab === 'it' && (
                    <div className="text-lg text-gray-300">
                      Project Rate: ${service.projectRate}
                    </div>
                  )}
                  {activeTab === 'microsaas' && (
                    <div className="text-sm text-gray-400">
                      Market Price: {service.marketPrice}
                    </div>
                  )}
                  {activeTab === 'ai' && (
                    <div className="text-sm text-gray-400">
                      Market Price: {service.marketPrice}
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-400 text-center">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 mb-6">
                  {activeTab === 'microsaas' && (
                    <>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">User Limit:</span>
                        <span className="text-white">{service.userLimit}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-green-400">{service.roi}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Setup Time:</span>
                        <span className="text-white">{service.setupTime}</span>
                      </div>
                    </>
                  )}
                  {activeTab === 'it' && (
                    <>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Response Time:</span>
                        <span className="text-white">{service.responseTime}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">SLA:</span>
                        <span className="text-white">{service.sla}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Delivery:</span>
                        <span className="text-white">{service.deliveryTime}</span>
                      </div>
                    </>
                  )}
                  {activeTab === 'ai' && (
                    <>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">AI Score:</span>
                        <span className="text-green-400">{service.aiScore}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Accuracy:</span>
                        <span className="text-white">{service.accuracy}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Training Data:</span>
                        <span className="text-white">{service.trainingData}</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="text-center">
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 inline-block"
                  >
                    Get Started
                  </a>
                  <div className="mt-3 text-xs text-gray-400">
                    Contact: {service.contactInfo.phone}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Custom Solutions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We offer enterprise-grade custom solutions tailored to your specific business requirements
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="text-lg font-semibold text-white mb-2">Enterprise Plans</h3>
              <p className="text-sm text-gray-300">Custom pricing for large organizations</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="text-lg font-semibold text-white mb-2">Custom Development</h3>
              <p className="text-sm text-gray-300">Tailored solutions for unique needs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-semibold text-white mb-2">Consulting</h3>
              <p className="text-sm text-gray-300">Strategic technology advisory</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Enterprise Solutions Inquiry"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Contact Sales
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Call: +1 302 464 0950
            </a>
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
            Choose the perfect plan for your business and start transforming your operations today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Contact Us Today
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Call Now: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricing;