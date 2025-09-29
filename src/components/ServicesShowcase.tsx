import React from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  pricing?: string;
  popular?: boolean;
}

interface ServicesShowcaseProps {
  services: Service[];
  title?: string;
  subtitle?: string;
}

const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({
  services,
  title = "Our Premium Services",
  subtitle = "Choose from our comprehensive suite of technology solutions"
}) => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden ${
                service.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {service.pricing && (
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold text-blue-600">{service.pricing}</span>
                  </div>
                )}

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;