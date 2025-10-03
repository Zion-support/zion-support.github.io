import React from 'react';
import { Helmet } from 'react-helmet-async';

const APIIntegrationServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>API Integration Services | Zion Tech Group</title>
        <meta name="description" content="Professional API integration services to connect your software applications. Seamless data sharing, enhanced functionality, and custom API development solutions." />
        <meta name="keywords" content="API integration, software integration, data sharing, API development, system integration" />
        <link rel="canonical" href="https://ziontechgroup.com/services/api-integration-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              API Integration Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect your software applications seamlessly with our professional API integration services. 
              Enhance functionality, enable data sharing, and streamline your business processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                📞 Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold border-2 border-orange-600 hover:bg-orange-50 transition-colors"
              >
                ✉️ Get Integration Quote
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Comprehensive Integration Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-xl font-semibold mb-3">Third-Party Integrations</h3>
                <p className="text-gray-600">
                  Connect with popular platforms like Salesforce, HubSpot, Shopify, and 100+ other services.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Real-time Sync</h3>
                <p className="text-gray-600">
                  Keep data synchronized across all your applications with real-time API connections.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-semibold mb-3">Custom API Development</h3>
                <p className="text-gray-600">
                  Build custom APIs tailored to your specific business requirements and workflows.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-3">Data Transformation</h3>
                <p className="text-gray-600">
                  Transform and map data between different systems with intelligent data processing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-3">Secure Authentication</h3>
                <p className="text-gray-600">
                  Implement robust security protocols including OAuth, JWT, and API key management.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-semibold mb-3">Performance Monitoring</h3>
                <p className="text-gray-600">
                  Monitor API performance, track usage, and optimize for maximum efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Integration Service Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Basic Integration</h3>
                <div className="text-4xl font-bold text-orange-600 mb-6">$2,500<span className="text-lg text-gray-500">/project</span></div>
                <ul className="space-y-3 mb-8">
                  <li>✓ Up to 3 API connections</li>
                  <li>✓ Basic data mapping</li>
                  <li>✓ Standard authentication</li>
                  <li>✓ 30-day support</li>
                </ul>
                <a href="mailto:kleber@ziontechgroup.com" className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-orange-700 transition-colors">
                  Get Started
                </a>
              </div>
              <div className="bg-orange-600 p-8 rounded-xl text-white relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-semibold mb-4">Advanced Integration</h3>
                <div className="text-4xl font-bold mb-6">$7,500<span className="text-lg opacity-80">/project</span></div>
                <ul className="space-y-3 mb-8">
                  <li>✓ Up to 10 API connections</li>
                  <li>✓ Complex data transformation</li>
                  <li>✓ Custom authentication</li>
                  <li>✓ Real-time monitoring</li>
                  <li>✓ 90-day support</li>
                </ul>
                <a href="mailto:kleber@ziontechgroup.com" className="w-full bg-white text-orange-600 py-3 rounded-lg font-semibold text-center block hover:bg-gray-100 transition-colors">
                  Get Started
                </a>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Enterprise Integration</h3>
                <div className="text-4xl font-bold text-orange-600 mb-6">Custom</div>
                <ul className="space-y-3 mb-8">
                  <li>✓ Unlimited API connections</li>
                  <li>✓ Custom API development</li>
                  <li>✓ Enterprise security</li>
                  <li>✓ White-label solution</li>
                  <li>✓ Ongoing support</li>
                </ul>
                <a href="tel:+13024640950" className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-orange-700 transition-colors">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Streamline Your Operations
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Connect Everything</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3">✓</span>
                    <span>Eliminate manual data entry and reduce errors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3">✓</span>
                    <span>Improve workflow efficiency by 50%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3">✓</span>
                    <span>Enable real-time data synchronization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3">✓</span>
                    <span>Scale your business with integrated systems</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-8 rounded-xl text-white">
                <h4 className="text-xl font-semibold mb-4">Integration Benefits</h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold">50%</div>
                    <div className="text-sm opacity-80">Efficiency improvement</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">90%</div>
                    <div className="text-sm opacity-80">Error reduction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">75%</div>
                    <div className="text-sm opacity-80">Time savings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Connect Your Systems?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your API integration needs and discover how we can streamline your business operations.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">📞 Phone</h3>
                <a href="tel:+13024640950" className="text-orange-400 hover:text-orange-300">
                  +1 302 464 0950
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">✉️ Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-orange-400 hover:text-orange-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">📍 Address</h3>
                <div className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default APIIntegrationServicesPage;