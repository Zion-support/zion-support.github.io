import React, { useState } from 'react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';
import { innovativeITServices2025 } from '../data/innovativeITServices2025';
import { innovativeAIServices2025 } from '../data/innovativeAIServices2025';

const InnovativeServicesShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('microsaas');
  const [selectedService, setSelectedService] = useState<any>(null);

  const tabs = [
    { id: 'microsaas', name: 'Micro SAAS Services', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.length },
    { id: 'it', name: 'IT Services', count: innovativeITServices2025.length },
    { id: 'ai', name: 'AI Services', count: innovativeAIServices2025.length }
  ];

  const getServicesByTab = () => {
    switch (activeTab) {
      case 'microsaas':
        return INNOVATIVE_MICRO_SAAS_SERVICES_2025;
      case 'it':
        return innovativeITServices2025;
      case 'ai':
        return innovativeAIServices2025;
      default:
        return [];
    }
  };

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Innovative
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Services 2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Cutting-edge technology solutions designed to transform your business and drive innovation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-blue-400">
                {INNOVATIVE_MICRO_SAAS_SERVICES_2025.length + innovativeITServices2025.length + innovativeAIServices2025.length}
              </span>
              <p className="text-sm text-gray-300">Total Services</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-green-400">24/7</span>
              <p className="text-sm text-gray-300">Support Available</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-purple-400">99.9%</span>
              <p className="text-sm text-gray-300">Uptime SLA</p>
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

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getServicesByTab().map((service, index) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service)}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-3xl">
                    {activeTab === 'microsaas' && '🚀'}
                    {activeTab === 'it' && '⚡'}
                    {activeTab === 'ai' && '🤖'}
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-400">
                      {activeTab === 'microsaas' && `$${service.price}`}
                      {activeTab === 'it' && `$${service.hourlyRate}/hr`}
                      {activeTab === 'ai' && `$${service.price}`}
                    </div>
                    <div className="text-sm text-gray-400">
                      {activeTab === 'microsaas' && service.pricingModel}
                      {activeTab === 'it' && 'Professional'}
                      {activeTab === 'ai' && service.pricingModel}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-400">
                    {activeTab === 'microsaas' && service.userLimit}
                    {activeTab === 'it' && service.deliveryTime}
                    {activeTab === 'ai' && `${service.aiScore}% AI Score`}
                  </div>
                  <div className="text-blue-400 text-sm font-semibold group-hover:text-blue-300 transition-colors">
                    Learn More →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedService.name}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Description</h3>
                  <p className="text-gray-300 mb-6">{selectedService.description}</p>

                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Features</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedService.features.map((feature: string, idx: number) => (
                      <li key={idx} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Benefits</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedService.benefits.map((benefit: string, idx: number) => (
                      <li key={idx} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="bg-white/10 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold text-blue-400 mb-4">Pricing & Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Price:</span>
                        <span className="text-white font-semibold">
                          {activeTab === 'microsaas' && `$${selectedService.price}/${selectedService.pricingModel}`}
                          {activeTab === 'it' && `$${selectedService.hourlyRate}/hour`}
                          {activeTab === 'ai' && `$${selectedService.price}/${selectedService.pricingModel}`}
                        </span>
                      </div>
                      {activeTab === 'microsaas' && (
                        <>
                          <div className="flex justify-between">
                            <span className="text-gray-300">User Limit:</span>
                            <span className="text-white">{selectedService.userLimit}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Market Price:</span>
                            <span className="text-white">{selectedService.marketPrice}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">ROI:</span>
                            <span className="text-white text-green-400">{selectedService.roi}</span>
                          </div>
                        </>
                      )}
                      {activeTab === 'it' && (
                        <>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Project Rate:</span>
                            <span className="text-white">${selectedService.projectRate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Response Time:</span>
                            <span className="text-white">{selectedService.responseTime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">SLA:</span>
                            <span className="text-white">{selectedService.sla}</span>
                          </div>
                        </>
                      )}
                      {activeTab === 'ai' && (
                        <>
                          <div className="flex justify-between">
                            <span className="text-gray-300">AI Score:</span>
                            <span className="text-white text-green-400">{selectedService.aiScore}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Accuracy:</span>
                            <span className="text-white">{selectedService.accuracy}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Market Price:</span>
                            <span className="text-white">{selectedService.marketPrice}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-400 mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-white">{selectedService.contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-white">{selectedService.contactInfo.email}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <span className="text-white">{selectedService.contactInfo.website}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <a
                        href={`mailto:${selectedService.contactInfo.email}`}
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-center block"
                      >
                        Get Started Today
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our innovative services can drive your success in 2025 and beyond
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

export default InnovativeServicesShowcase;