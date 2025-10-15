import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { servicesData } from '../data/servicesData';

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Services - Zion Tech Group"
        description="Explore our comprehensive range of AI and IT services designed to accelerate your business growth."
        keywords="AI services, IT services, cloud solutions, digital transformation, business automation, technology consulting"
        canonicalUrl="https://ziontechgroup.com/services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions tailored to your business needs. From cutting-edge AI tools to enterprise infrastructure, we provide everything you need to succeed.
            </p>
          </div>
          
          {/* AI Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">AI & Machine Learning Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.aiServices.map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  <div className="text-sm text-gray-500 mb-4">{service.marketPrice}</div>
                  <Link to={service.link} className="text-blue-600 hover:text-blue-800 font-medium">
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Micro SaaS Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Micro SaaS Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.microSaas.map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  <div className="text-sm text-gray-500 mb-4">{service.marketPrice}</div>
                  <Link to={service.link} className="text-blue-600 hover:text-blue-800 font-medium">
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* IT Solutions Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">IT Solutions & Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.itSolutions.map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  <div className="text-sm text-gray-500 mb-4">{service.marketPrice}</div>
                  <Link to={service.link} className="text-blue-600 hover:text-blue-800 font-medium">
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* AI Tools Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">AI-Powered Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.aiTools.map((tool) => (
                <div key={tool.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">{tool.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{tool.title}</h3>
                  <p className="text-gray-600 mb-4">{tool.shortDescription}</p>
                  <div className="text-sm text-gray-500 mb-4">{tool.marketPrice}</div>
                  <Link to={tool.link} className="text-blue-600 hover:text-blue-800 font-medium">
                    Try Now →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Specialized Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Specialized Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.specializedServices.map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  <div className="text-sm text-gray-500 mb-4">{service.marketPrice}</div>
                  <Link to={service.link} className="text-blue-600 hover:text-blue-800 font-medium">
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our experts to discuss your project and discover how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Pricing
              </Link>
            </div>
            <div className="mt-8 text-sm opacity-75">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
              <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;