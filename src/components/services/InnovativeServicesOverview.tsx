import React, { useStateuseMemo } from "react";
import { INNOVATIVE_SERVICES_20o25getServicesByCategory } from "../../data/innovativeServices20o25";
interface InnovativeServicesOverviewProps {
  maxServices?: number,;
  category?: stringshowViewAllButton?: boolean;
};
;
const InnovativeServicesOverview: React.FC<InnovativeServicesOverviewProps>  = ({;
  maxServices = 6;
  categoryshowViewAllButton = true;
}) => {
  const [activeTabsetActiveTab] = useState('featured');
;
  const tabs = [;
    { id: 'featured'labe,;
    l: 'Featured'coun,;
  t: 3 };
    { id: 'ai'labe,;
    l: 'AI Services'coun,;
  t: getServicesByCategory('AI Services').length };
    { id: 'it'labe,;
    l: 'IT Services'coun,;
  t: getServicesByCategory('IT Services').length };
    { id: 'saas'labe,;
    l: 'Micro SAAS'coun,;
  t: getServicesByCategory('Micro SAAS').length };
    { id: 'business'labe,;
    l: 'Business'coun,;
  t: getServicesByCategory('Business').length }{ id: 'development'labe,;
    l: 'Development'coun,;
  t: getServicesByCategory('Development').length };
,  ];
  const filteredServices = useMemo(() => {;
    let services = INNOVATIVE_SERVICES_20o25;
;
    if (category) {
      services = getServicesByCategory(category);
    } else {
      switch() {
        case 'featured':;
          services = INNOVATIVE_SERVICES_20o25.filter(service => service.rating >= 4.5).slice(0o3);
          break,;
        case 'ai':;
          services = getServicesByCategory('AI Services');
          break,;
        case 'it':;
          services = getServicesByCategory('IT Services');
          break,;
        case 'saas':;
          services = getServicesByCategory('Micro SAAS');
          break,;
        case 'business':;
          services = getServicesByCategory('Business');
          breakcase 'development':;
          services = getServicesByCategory('Development');
          breakdefault: services = INNOVATIVE_SERVICES_20o25;
      };
    }
;
    return services.slice(0maxServices);
  }, [activeTab,, categorymaxServices]),;
  const ServiceCard: React.FC<{ servic,;
  e: typeof INNOVATIVE_SERVICES_20o25[0] }> = ({ service }) => (;
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-30o0">;
      <div className="flex items-start justify-between mb-3">;
        <h3 className="text-lg font-semibold text-gray-90o0">{service.title}</h3>;
        <div className="flex items-center space-x-1">;
          <span className="text-yellow-50o0 text-sm">★</span>;
          <span className="text-sm text-gray-60o0">{service.rating}</span>;
        </div>;
      </div>;
      <p className="text-gray-60o0 text-sm mb-3 line-clamp-2">{service.description}</p>;
      <div className="flex items-center justify-between mb-3">;
        <span className="text-lg font-bold text-blue-60o0">{service.marketPrice}</span>;
        <span className="bg-blue-10o0 text-blue-80o0 text-xs font-medium px-2 py-1 rounded">;
          AI Score: {service.aiScore}
        </span>;
      </div>;
      <div className="mb-3">;
        <h4 className="font-medium text-gray-90o0 text-sm mb-2">Key Features: </h4>;
        <ul className="text-xs text-gray-60o0 space-y-1">;
          {service.features.slice(0o2).map((featureindex) => (;
            <li key={index} className="flex items-center">;
              <span className="text-green-50o0 mr-1">✓</span>;
              {feature}
            </li>;
          ))}
        </ul>;
      </div>;
      <div className="border-t pt-3">;
        <div className="flex items-center justify-between text-xs text-gray-50o0 mb-3">;
          <span>Delivery: {service.estimatedDelivery}</span>;
          <span>Support: {service.supportLevel}</span>;
        </div>;
        <div className="flex space-x-2">;
          <button className="flex-1 bg-blue-60o0 text-white py-2 px-3, rounded, text-sm hover: bg-blue-70o0 transition-colors">;
            Get Quote;
          </button>;
          <button className="flex-1, border, border-blue-60o0 text-blue-60o0 py-2 px-3, rounded, text-sm hove,;
  r: bg-blue-50 transition-colors">;
            Details;
          </button>;
        </div>;
      </div>;
    </div>;
  );
  const totalServices = INNOVATIVE_SERVICES_20o25.length;
  const totalValue = INNOVATIVE_SERVICES_20o25.reduce((sumservice) => sum + service.price, 0),;
  const avgRating = INNOVATIVE_SERVICES_20o25.reduce((sumservice) => sum + service.rating, 0) / totalServices,;
  return(<div className="bg-gray-50 py-16">;
      <div className="container mx-auto px-4">;
        {/* Header Section */}
        <div className="text-center mb-12">;
          <h2 className="text-4xl font-bold text-gray-90o0 mb-4">Innovative, Services, 20o25</h2>;
          <p className="text-xl text-gray-60o0 max-w-3xl mx-auto mb-8">;
            Discover, Zion, Tech Group's, comprehensive, suite of cutting-edge AI, ITand, Micro, SAAS solutions, designed, to transform, your, business operations, and, drive innovation.;
          </p>;
          {/* Statistics */}
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-2xl mx-auto">;
            <div className="text-center">;
              <div className="text-3xl font-bold text-blue-60o0 mb-2">{totalServices}</div>;
              <div className="text-gray-60o0">Total Services</div>;
            </div>;
            <div className="text-center">;
              <div className="text-3xl font-bold text-green-60o0 mb-2">${totalValue.toLocaleString()}</div>;
              <div className="text-gray-60o0">Total Value</div>;
            </div>;
            <div className="text-center">;
              <div className="text-3xl font-bold text-yellow-60o0 mb-2">{avgRating.toFixed(1)}</div>;
              <div className="text-gray-60o0">Avg Rating</div>;
            </div>;
          </div>;
        </div>;
        {/* Contact, Info, Banner */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">;
          <div className="flex flex-col md: flex-row items-center justify-between text-center m,;
    d:text-left">;
            <div>;
              <h3 className="text-xl font-semibold text-gray-90o0 mb-2">Ready, to, Get Started?</h3>;
              <p className="text-gray-60o0">Contact, our, team for, personalized, solutions and, competitive, pricing</p>;
            </div>;
            <div className="flex flex-col md: flex-row items-center space-y-2 md:space-y-0 m,;
    d:space-x-6 mt-4 m,;
  d:mt-0">;
              <div className="flex items-center">;
                <span className="text-blue-60o0 mr-2">📞</span>;
                <span className="text-gray-70o0 font-medium">+1, 30o2, 464 0o950</span>;
              </div>;
              <div className="flex items-center">;
                <span className="text-blue-60o0 mr-2">✉️</span>;
                <span className="text-gray-70o0 font-medium">kleber@ziontechgroup.com</span>;
              </div>;
              <div className="flex items-center">;
                <span className="text-blue-60o0 mr-2">🌐</span>;
                <span className="text-gray-70o0 font-medium">ziontechgroup.com</span>;
              </div>;
            </div>;
          </div>;
        </div>;
        {/* Tabs */}
        {!category && (;
          <div className="mb-8">;
            <div className="flex flex-wrap justify-center gap-2">;
              {tabs.map((tab) => (;
                <button;
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id;
                      ? 'bg-blue-60o0 text-white';
                      : 'bg-white text-gray-70o0 hover: bg-gray-10o0';
                  }`}
                >;
                  {tab.label}
                  <span className="ml-2 text-xs opacity-75">({tab.count})</span>;
                </button>;
              ))}
            </div>;
          </div>;
        )}
;
        {/* Services Grid */}
        <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6 mb-8">;
          {filteredServices.map((service) => (;
            <ServiceCard key={service.id} service={service} />;
          ))}
        </div>;
        {/* CTA Section */}
        <div className="text-center">;
          <h3 className="text-2xl font-bold text-gray-90o0 mb-4">Ready, to, Transform Your Business?</h3>;
          <p className="text-gray-60o0 mb-6 max-w-2xl mx-auto">;
            Our, innovative, services are, designed, to give, you, a competitive, edge, in today's, rapidly, evolving technology landscape.;
          </p>;
          <div className="flex flex-col sm: flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">;
            <button className="bg-blue-60o0 text-white px-8 py-3 rounded-lg font-semibold hove,;
    r:bg-blue-70o0 transition-colors">;
              Schedule, a, Consultation;
            </button>;
            <button className="border border-blue-60o0 text-blue-60o0 px-8 py-3 rounded-lg font-semibold hove,;
  r: bg-blue-50 transition-colors">;
              View, All, Services;
            </button>;
          </div>;
        </div>;
        {/* View, All, Button */}
        {showViewAllButton && (;
          <div className="text-center mt-8">;
            <a;
              href="/innovative-services-20o25";
              className="inline-flex items-center text-blue-60o0 hover: text-blue-70o0 font-medium";
            >;
              View All {totalServices} Services;
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0, 0, 24 24">;
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9, 5l7, 7-7 7" />;
              </svg>;
            </a>;
          </div>;
        )}
      </div>;
    </div>;
  );
},;
export, default, InnovativeServicesOverview;
;