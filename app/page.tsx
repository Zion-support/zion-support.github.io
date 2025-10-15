import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData } from './data/servicesData';

const HomePage: React.FC = () => {
  const featuredServices = [
    ...servicesData.aiServices.slice(0, 3),
    ...servicesData.microSaas.slice(0, 3),
    ...servicesData.itSolutions.slice(0, 3)
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Services</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, micro SAAS solutions, and digital transformation. Contact us at +1 302 464 0950." />
        <meta name="keywords" content="AI services, IT solutions, micro SAAS, cloud infrastructure, web development, mobile apps, cybersecurity, 5G solutions" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Welcome to <span className="text-blue-600">Zion Tech Group</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Leading provider of cutting-edge AI and IT solutions to help your business thrive in the digital age. 
                From micro SAAS applications to enterprise AI solutions, we deliver innovation that drives results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl">
                  Get Started Today
                </Link>
                <Link to="/services" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold">
                  Explore Our Services
                </Link>
              </div>
              
              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-semibold text-blue-600">📞 Phone</div>
                    <div>+1 302 464 0950</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-blue-600">✉️ Email</div>
                    <div>kleber@ziontechgroup.com</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-blue-600">📍 Address</div>
                    <div>364 E Main St STE 1008<br />Middletown DE 19709</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Services Section */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Featured Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our comprehensive range of AI and IT solutions designed to accelerate your business growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">${service.pricing.basic}</span>
                    <span className="text-gray-500 text-sm">/month starting</span>
                  </div>
                  <Link 
                    to={`/${service.id}`} 
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation First</h3>
                <p className="text-gray-600">We stay ahead of technology trends to deliver cutting-edge solutions</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Rapid development and deployment to get you to market quickly</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Results Driven</h3>
                <p className="text-gray-600">Every solution is designed to deliver measurable business impact</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Partnership</h3>
                <p className="text-gray-600">We work as your technology partner, not just a vendor</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI and IT solutions can drive your business forward. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold">
                Get Free Consultation
              </Link>
              <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-lg font-semibold">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;