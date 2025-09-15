import React, { useState, useMemo } from 'react';
import { INNOVATIVE_SERVICES_2025, getServicesByCategory } from '../../data/innovativeServices2025';

interface InnovativeServicesOverviewProps {
  maxServices?: number;
  category?: string;
  showViewAllButton?: boolean;
}

const InnovativeServicesOverview: React.FC<InnovativeServicesOverviewProps> = ({
  maxServices = 6,
  category,
  showViewAllButton = true
}) => {
  const [activeTab, setActiveTab] = useState('featured');

  const tabs = [
    { id: 'featured', label: 'Featured', count: 3 },
    { id: 'ai', label: 'AI Services', count: getServicesByCategory('AI Services').length },
    { id: 'it', label: 'IT Services', count: getServicesByCategory('IT Services').length },
    { id: 'saas', label: 'Micro SAAS', count: getServicesByCategory('Micro SAAS').length },
    { id: 'business', label: 'Business', count: getServicesByCategory('Business').length },
    { id: 'development', label: 'Development', count: getServicesByCategory('Development').length }
  ];

  const filteredServices = useMemo(() => {
    let services = INNOVATIVE_SERVICES_2025;

    if (category) {
      services = getServicesByCategory(category);
    } else {
      switch (activeTab) {
        case 'featured':
          services = INNOVATIVE_SERVICES_2025.filter(service => service.rating >= 4.5).slice(0, 3);
          break;
        case 'ai':
          services = getServicesByCategory('AI Services');
          break;
        case 'it':
          services = getServicesByCategory('IT Services');
          break;
        case 'saas':
          services = getServicesByCategory('Micro SAAS');
          break;
        case 'business':
          services = getServicesByCategory('Business');
          break;
        case 'development':
          services = getServicesByCategory('Development');
          break;
        default:
          services = INNOVATIVE_SERVICES_2025;
      }
    }

    return services.slice(0, maxServices);
  }, [activeTab, category, maxServices]);

  const ServiceCard: React.FC<{ service: typeof INNOVATIVE_SERVICES_2025[0] }> = ({ service }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
        <div className="flex items-center space-x-1">
          <span className="text-yellow-500 text-sm">★</span>
          <span className="text-sm text-gray-600">{service.rating}</span>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{service.description}</p>

      <div className="flex items-center justify-between mb-3">
        <span className="text-lg font-bold text-blue-600">{service.marketPrice}</span>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
          AI Score: {service.aiScore}
        </span>
      </div>

      <div className="mb-3">
        <h4 className="font-medium text-gray-900 text-sm mb-2">Key Features:</h4>
        <ul className="text-xs text-gray-600 space-y-1">
          {service.features.slice(0, 2).map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-green-500 mr-1">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t pt-3">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <span>Delivery: {service.estimatedDelivery}</span>
          <span>Support: {service.supportLevel}</span>
        </div>

        <div className="flex space-x-2">
          <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm hover:bg-blue-700 transition-colors">
            Get Quote
          </button>
          <button className="flex-1 border border-blue-600 text-blue-600 py-2 px-3 rounded text-sm hover:bg-blue-50 transition-colors">
            Details
          </button>
        </div>
      </div>
    </div>
  );

  const totalServices = INNOVATIVE_SERVICES_2025.length;
  const totalValue = INNOVATIVE_SERVICES_2025.reduce((sum, service) => sum + service.price, 0);
  const avgRating = INNOVATIVE_SERVICES_2025.reduce((sum, service) => sum + service.rating, 0) / totalServices;

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Innovative Services 2025</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover Zion Tech Group's comprehensive suite of cutting-edge AI, IT, and Micro SAAS solutions designed to transform your business operations and drive innovation.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{totalServices}</div>
              <div className="text-gray-600">Total Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">${totalValue.toLocaleString()}</div>
              <div className="text-gray-600">Total Value</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">{avgRating.toFixed(1)}</div>
              <div className="text-gray-600">Avg Rating</div>
            </div>
          </div>
        </div>

        {/* Contact Info Banner */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Get Started?</h3>
              <p className="text-gray-600">Contact our team for personalized solutions and competitive pricing</p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
              <div className="flex items-center">
                <span className="text-blue-600 mr-2">📞</span>
                <span className="text-gray-700 font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 mr-2">✉️</span>
                <span className="text-gray-700 font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 mr-2">🌐</span>
                <span className="text-gray-700 font-medium">ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        {!category && (
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                  <span className="ml-2 text-xs opacity-75">({tab.count})</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our innovative services are designed to give you a competitive edge in today's rapidly evolving technology landscape.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Schedule a Consultation
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              View All Services
            </button>
          </div>
        </div>

        {/* View All Button */}
        {showViewAllButton && (
          <div className="text-center mt-8">
            <a
              href="/innovative-services-2025"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              View All {totalServices} Services
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default InnovativeServicesOverview;