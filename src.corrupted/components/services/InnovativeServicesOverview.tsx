import React, { useState, useMemo } from "react"
import { INNOVATIVE_SERVICES_2025, getServicesByCategory } from "../../data/innovativeServices2025"
interface InnovativeServicesOverviewProps {;
  maxServices?: number,;
  category?: string,;
  showViewAllButton?: boolean,;
};

const InnovativeServicesOverview: React.FC<InnovativeServicesOverviewProps> = ({;
  maxServices = 6;
  category,;
  showViewAllButton = true;
}) => {;
  const [activeTab, setActiveTab] = useState('featured'),;

  const tabs = [;
    { id: 'featured', label: 'Featured', count: 3 };
    { id: 'ai', label: 'AI Services', count: getServicesByCategory('AI Services').length };
    { id: 'it', label: 'IT Services', count: getServicesByCategory('IT Services').length };
    { id: 'saas', label: 'Micro SAAS', count: getServicesByCategory('Micro SAAS').length };
    { id: 'business', label: 'Business', count: getServicesByCategory('Business').length };
    { id: 'development', label: 'Development', count: getServicesByCategory('Development').length };
  ];
  const filteredServices = useMemo(() => {;
    let services = INNOVATIVE_SERVICES_2025;

    if (category) {;
      services = getServicesByCategory(category),;
    } else {;
      switch (activeTab) {;
        case 'featured':;
          services = INNOVATIVE_SERVICES_2025.filter(service => service.rating >= 4.5).slice(0, 3),;
          break,;
        case 'ai':;
          services = getServicesByCategory('AI Services'),;
          break,;
        case 'it':;
          services = getServicesByCategory('IT Services'),;
          break,;
        case 'saas':;
          services = getServicesByCategory('Micro SAAS'),;
          break,;
        case 'business':;
          services = getServicesByCategory('Business'),;
          break,;
        case 'development':;
          services = getServicesByCategory('Development'),;
          break,;
        default: services = INNOVATIVE_SERVICES_2025;
      };
    };

    return services.slice(0, maxServices),;
  }, [activeTab, category, maxServices]),;

  const ServiceCard: React.FC<{ service: typeof INNOVATIVE_SERVICES_2025[0] }> = ({ service }) => (;
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">;
      <div className="flex items-start justify-between mb-3">;
        <h3 className="text-lg font-semibold text-gray-900">{service.title}</[^>]*>
        <div className="flex items-center space-x-1">;
          <span className="text-yellow-500 text-sm">★</[^>]*>
          <span className="text-sm text-gray-600">{service.rating}</[^>]*>
        </[^>]*>
      </[^>]*>

      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{service.description}</[^>]*>

      <div className="flex items-center justify-between mb-3">;
        <span className="text-lg font-bold text-blue-600">{service.marketPrice}</[^>]*>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">;
          AI Score: {service.aiScore};
        </[^>]*>
      </[^>]*>

      <div className="mb-3">;
        <h4 className="font-medium text-gray-900 text-sm mb-2">Key Features:</[^>]*>
        <ul className="text-xs text-gray-600 space-y-1">;
          {service.features.slice(0, 2).map((feature, index) => (;
            <li key={index} className="flex items-center">;
              <span className="text-green-500 mr-1">✓</[^>]*>
              {feature};
            </[^>]*>
          ))};
        </[^>]*>
      </[^>]*>

      <div className="border-t pt-3">;
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">;
          <span>Delivery: {service.estimatedDelivery}</[^>]*>
          <span>Support: {service.supportLevel}</[^>]*>
        </[^>]*>

        <div className="flex space-x-2">;
          <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm hover: bg-blue-700 transition-colors">;
            Get Quote;
          </[^>]*>
          <button className="flex-1 border border-blue-600 text-blue-600 py-2 px-3 rounded text-sm hover:bg-blue-50 transition-colors">;
            Details;
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
  const totalServices = INNOVATIVE_SERVICES_2025.length
  const totalValue = INNOVATIVE_SERVICES_2025.reduce((sum, service) => sum + service.price, 0);
  const avgRating = INNOVATIVE_SERVICES_2025.reduce((sum, service) => sum + service.rating, 0) / totalServices;

  return (
    <div className="bg-gray-50 py-16">;
      <div className="container mx-auto px-4">;
        {/* Header Section */};
        <div className="text-center mb-12">;
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Innovative Services 2025</[^>]*>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">;
            Discover Zion Tech Group's comprehensive suite of cutting-edge AI, IT, and Micro SAAS solutions designed to transform your business operations and drive innovation.;
          </[^>]*>

          {/* Statistics */};
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-2xl mx-auto">;
            <div className="text-center">;
              <div className="text-3xl font-bold text-blue-600 mb-2">{totalServices}</[^>]*>
              <div className="text-gray-600">Total Services</[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="text-3xl font-bold text-green-600 mb-2">${totalValue.toLocaleString()}</[^>]*>
              <div className="text-gray-600">Total Value</[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="text-3xl font-bold text-yellow-600 mb-2">{avgRating.toFixed(1)}</[^>]*>
              <div className="text-gray-600">Avg Rating</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Contact Info Banner */};
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">;
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">;
            <div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Get Started?</[^>]*>
              <p className="text-gray-600">Contact our team for personalized solutions and competitive pricing</[^>]*>
            </[^>]*>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">;
              <div className="flex items-center">;
                <span className="text-blue-600 mr-2">📞</[^>]*>
                <span className="text-gray-700 font-medium">+1 302 464 0950</[^>]*>
              </[^>]*>
              <div className="flex items-center">;
                <span className="text-blue-600 mr-2">✉️</[^>]*>
                <span className="text-gray-700 font-medium">kleber@ziontechgroup.com</[^>]*>
              </[^>]*>
              <div className="flex items-center">;
                <span className="text-blue-600 mr-2">🌐</[^>]*>
                <span className="text-gray-700 font-medium">ziontechgroup.com</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Tabs */};
        {!category && (;&& (; (
          <div className="mb-8">;
            <div className="flex flex-wrap justify-center gap-2">;
              {tabs.map((tab) => (;
                <button;
                  key={tab.id};
                  onClick={() => setActiveTab(tab.id)};
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${;
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`};
                >;
                  {tab.label};
                  <span className="ml-2 text-xs opacity-75">({tab.count})</[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        )};

        {/* Services Grid */};
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">;
          {filteredServices.map((service) => (;
            <[^>]*/>
          ))};
        </[^>]*>

        {/* CTA Section */};
        <div className="text-center">;
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</[^>]*>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">;
            Our innovative services are designed to give you a competitive edge in today's rapidly evolving technology landscape.;
          </[^>]*>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">;
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">;
              Schedule a Consultation;
            </[^>]*>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">;
              View All Services;
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* View All Button */};
        {showViewAllButton && (;&& (; (
          <div className="text-center mt-8">;
            <a;
              href="/innovative-services-2025"
              className="[^"]*"
            >;
              View All {totalServices} Services;
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
                <[^>]*/>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        )};
      </[^>]*>
    </[^>]*>
  );
},;

export default InnovativeServicesOverview;