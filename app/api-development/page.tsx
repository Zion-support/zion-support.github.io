import React from 'react';
import SEOHead from '../components/SEOHead';

const APIDevelopmentPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="API Development Services - Zion Tech Group"
        description="Professional API development and integration services. Build robust, scalable APIs with modern technologies, comprehensive documentation, and security best practices."
        keywords="API development, REST API, GraphQL, API integration, microservices, API documentation, API security"
        canonicalUrl="https://ziontechgroup.com/api-development"
      />
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">API Development Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional API development and integration services. Build robust, scalable APIs with modern technologies, comprehensive documentation, and enterprise-grade security.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Development Services</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">REST API Development</h3>
                    <p className="text-gray-600">Build scalable RESTful APIs with modern frameworks and best practices</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">GraphQL APIs</h3>
                    <p className="text-gray-600">Develop efficient GraphQL APIs with type safety and real-time subscriptions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Microservices Architecture</h3>
                    <p className="text-gray-600">Design and implement microservices-based API architectures</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">API Integration</h3>
                    <p className="text-gray-600">Integrate with third-party APIs and legacy systems seamlessly</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">API Documentation</h3>
                    <p className="text-gray-600">Comprehensive documentation with interactive examples and testing tools</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pricing Plans</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900">Basic API</h4>
                  <p className="text-3xl font-bold text-blue-600">$2,999<span className="text-lg text-gray-600">/project</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Up to 10 endpoints</li>
                    <li>• Basic authentication</li>
                    <li>• Standard documentation</li>
                    <li>• 2 weeks delivery</li>
                    <li>• Email support</li>
                  </ul>
                </div>
                <div className="border border-blue-500 rounded-lg p-4 bg-blue-50">
                  <h4 className="text-lg font-semibold text-gray-900">Professional API</h4>
                  <p className="text-3xl font-bold text-blue-600">$7,999<span className="text-lg text-gray-600">/project</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Up to 50 endpoints</li>
                    <li>• Advanced security</li>
                    <li>• Interactive documentation</li>
                    <li>• Rate limiting</li>
                    <li>• 4 weeks delivery</li>
                    <li>• Priority support</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900">Enterprise API</h4>
                  <p className="text-3xl font-bold text-blue-600">$19,999<span className="text-lg text-gray-600">/project</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Unlimited endpoints</li>
                    <li>• Enterprise security</li>
                    <li>• Custom integrations</li>
                    <li>• Performance optimization</li>
                    <li>• 8 weeks delivery</li>
                    <li>• 24/7 support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Build Your API Today</h2>
            <p className="text-gray-600 mb-6">Professional API development services for your business needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Quote
              </a>
              <a href="tel:+13024640950" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Call: +1 (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default APIDevelopmentPage;