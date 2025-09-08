import React, { useState } from 'react';
import { advancedInnovativeServicesExpansionV3 } from '../data/2025-advanced-innovative-services-expansion-v3';
import { specializedEnterpriseSolutions2025 } from '../data/2025-specialized-enterprise-solutions';

interface ServiceContact {
  mobile: string;
  email: string;
  address: string;
  website: string;
}

const EnhancedComprehensiveServicesShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<any>(null);

  const allServices = [
    ...advancedInnovativeServicesExpansionV3.map(service => ({ 
      ...service, 
      type: 'Advanced AI & Innovation',
      displayPrice: service.price
    })),
    ...specializedEnterpriseSolutions2025.map(service => ({ 
      ...service, 
      type: 'Specialized Enterprise',
      displayPrice: service.price
    }))
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.type === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'Advanced AI & Innovation', name: 'Advanced AI & Innovation', count: advancedInnovativeServicesExpansionV3.length },
    { id: 'Specialized Enterprise', name: 'Specialized Enterprise', count: specializedEnterpriseSolutions2025.length }
  ];

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
            Zion Tech Group
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Innovative Services 2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover our cutting-edge portfolio of micro SAAS solutions, IT services, and AI-powered innovations designed to transform your business and drive competitive advantage in the digital age
          </p>
          
          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">{allServices.length}+</div>
              <div className="text-sm text-gray-300">Innovative Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-sm text-gray-300">Technology Categories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">99%</div>
              <div className="text-sm text-gray-300">Client Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Support Available</div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services, features, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
              <svg className="absolute right-3 top-3 h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
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

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service)}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-600/30">
                    {service.category}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-green-400 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400">{service.period}</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-gray-400 flex items-center">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : 'fill-gray-600'}`} viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">({service.reviews})</span>
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business expertise to deliver solutions that drive real results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
              <p className="text-gray-300">
                We stay ahead of technology trends, offering the latest AI, quantum computing, and emerging tech solutions
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-white mb-3">Business Focused</h3>
              <p className="text-gray-300">
                Every solution is designed with ROI in mind, ensuring measurable business impact and value creation
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Grade</h3>
              <p className="text-gray-300">
                Built with security, scalability, and compliance in mind for enterprise-level reliability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our innovative services can help drive your digital transformation and competitive advantage
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
              Call Us: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-4xl mb-4">{selectedService.icon}</div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedService.name}</h2>
                  <p className="text-xl text-gray-300 mb-4">{selectedService.tagline}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Service Overview</h3>
                  <p className="text-gray-300 mb-6">{selectedService.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technology.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-600/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-white/10 rounded-lg p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Pricing & Plans</h4>
                    <div className="text-3xl font-bold text-green-400 mb-2">{selectedService.price}</div>
                    <div className="text-gray-400 mb-4">{selectedService.period}</div>
                    
                    {selectedService.setupFee && (
                      <div className="mb-2">
                        <span className="text-gray-400">Setup Fee: </span>
                        <span className="text-white">{selectedService.setupFee}</span>
                      </div>
                    )}
                    
                    {selectedService.annualDiscount && (
                      <div className="mb-2">
                        <span className="text-gray-400">Annual Discount: </span>
                        <span className="text-white">{selectedService.annualDiscount}</span>
                      </div>
                    )}
                  </div>

                  <div className="bg-white/10 rounded-lg p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Business Impact</h4>
                    <div className="mb-4">
                      <h5 className="text-blue-400 font-semibold mb-2">ROI</h5>
                      <p className="text-gray-300 text-sm">{selectedService.roi}</p>
                    </div>
                    <div className="mb-4">
                      <h5 className="text-blue-400 font-semibold mb-2">Market Position</h5>
                      <p className="text-gray-300 text-sm">{selectedService.marketPosition}</p>
                    </div>
                    <div>
                      <h5 className="text-blue-400 font-semibold mb-2">Target Audience</h5>
                      <p className="text-gray-300 text-sm">{selectedService.targetAudience}</p>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Get Started</h4>
                    <div className="space-y-3">
                      <a
                        href={`mailto:${selectedService.contactInfo.email}?subject=Inquiry about ${selectedService.name}`}
                        className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                      >
                        Request Demo
                      </a>
                      <a
                        href={`tel:${selectedService.contactInfo.mobile}`}
                        className="block w-full text-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                      >
                        Call Us: {selectedService.contactInfo.mobile}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedComprehensiveServicesShowcase;