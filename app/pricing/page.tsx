import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const PricingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('ai');

  const categories = [
    { id: 'ai', name: 'AI Services', icon: '🤖' },
    { id: 'saas', name: 'Micro SAAS', icon: '💼' },
    { id: 'it', name: 'IT Solutions', icon: '💻' }
  ];

  const getServicesByCategory = (category: string) => {
    switch (category) {
      case 'ai':
        return servicesData.aiServices;
      case 'saas':
        return servicesData.microSaas;
      case 'it':
        return servicesData.itSolutions;
      default:
        return [];
    }
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Service Pricing</title>
        <meta name="description" content="Transparent pricing for our AI and IT services. Choose the plan that fits your business needs. Starting from $29/month for micro SAAS tools." />
        <meta name="keywords" content="pricing, AI services pricing, IT services pricing, micro SAAS pricing, business solutions pricing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transparent <span className="text-blue-600">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Choose the perfect plan for your business needs. All our services come with transparent pricing and no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Custom Quote
              </Link>
              <Link to="/services" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View All Services
              </Link>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 m-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {getServicesByCategory(selectedCategory).map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-3xl font-bold text-blue-600">${service.pricing.basic}</span>
                    <span className="text-gray-500 text-sm ml-1">/month</span>
                    <span className="text-sm text-gray-500 ml-2">Basic</span>
                  </div>
                  <div className="flex items-baseline mb-2">
                    <span className="text-2xl font-bold text-green-600">${service.pricing.pro}</span>
                    <span className="text-gray-500 text-sm ml-1">/month</span>
                    <span className="text-sm text-gray-500 ml-2">Pro</span>
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-purple-600">${service.pricing.enterprise}</span>
                    <span className="text-gray-500 text-sm ml-1">/month</span>
                    <span className="text-sm text-gray-500 ml-2">Enterprise</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    Market Price: {service.marketPrice}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col space-y-2">
                  <Link 
                    to={service.link} 
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
                  >
                    Learn More
                  </Link>
                  <Link 
                    to="/contact" 
                    className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-center font-medium"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Enterprise Solutions */}
          <section className="bg-gray-900 rounded-2xl p-12 text-center text-white mb-16">
            <h2 className="text-3xl font-bold mb-6">Enterprise Solutions</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Need a custom solution? We offer tailored enterprise packages with dedicated support, 
              custom development, and 24/7 monitoring.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Custom Development</h3>
                <p className="text-gray-300">Tailored solutions built specifically for your business needs</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock technical support and monitoring</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-semibold mb-2">Dedicated Team</h3>
                <p className="text-gray-300">Your own dedicated team of experts</p>
              </div>
            </div>
            <Link to="/contact" className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Contact Sales Team
            </Link>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer free trials?</h3>
                <p className="text-gray-600">Yes! Most of our micro SAAS tools offer 14-day free trials. Contact us to learn more about trial availability for enterprise solutions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I change plans anytime?</h3>
                <p className="text-gray-600">Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What's included in support?</h3>
                <p className="text-gray-600">All plans include email support. Pro and Enterprise plans include priority support, phone support, and dedicated account managers.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer custom pricing?</h3>
                <p className="text-gray-600">Yes! For enterprise solutions and large-scale implementations, we offer custom pricing based on your specific requirements and usage.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-blue-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact our team today to discuss your needs and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Get Free Consultation
              </Link>
              <a href="tel:+13024640950" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold">
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm">
              <p>✉️ kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PricingPage;