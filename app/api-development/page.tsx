import React from 'react';
import SEOHead from '../components/SEOHead';

const APIDevelopmentPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="API Development Services - Custom REST & GraphQL APIs | Zion Tech Group"
        description="Professional API development services including REST APIs, GraphQL, microservices, and API integration. Build scalable, secure, and high-performance APIs for your business."
        keywords="API development, REST API, GraphQL, microservices, API integration, web services, backend development, API design"
        canonicalUrl="https://ziontechgroup.com/api-development"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                API Development Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Build robust, scalable, and secure APIs that power your applications. 
                From REST to GraphQL, we create high-performance APIs that integrate seamlessly with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                  Get Free Consultation
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Our API Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive API development solutions for modern applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">REST API Development</h3>
              <p className="text-gray-300 mb-6">
                Design and develop RESTful APIs following industry best practices with proper documentation, versioning, and security.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• RESTful architecture design</li>
                <li>• OpenAPI/Swagger documentation</li>
                <li>• API versioning strategies</li>
                <li>• Rate limiting & throttling</li>
                <li>• Authentication & authorization</li>
              </ul>
            </div>

            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-purple-400 mb-4">GraphQL APIs</h3>
              <p className="text-gray-300 mb-6">
                Build flexible GraphQL APIs that allow clients to request exactly the data they need, reducing over-fetching and improving performance.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Schema design & optimization</li>
                <li>• Query & mutation resolvers</li>
                <li>• Real-time subscriptions</li>
                <li>• DataLoader implementation</li>
                <li>• Caching strategies</li>
              </ul>
            </div>

            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-8 hover:border-pink-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-2xl font-bold text-pink-400 mb-4">Microservices Architecture</h3>
              <p className="text-gray-300 mb-6">
                Design and implement microservices-based API architectures for scalable, maintainable, and resilient applications.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Service decomposition</li>
                <li>• API gateway implementation</li>
                <li>• Service discovery</li>
                <li>• Circuit breaker patterns</li>
                <li>• Distributed tracing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="bg-gray-800/30 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Modern tools and frameworks for robust API development
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="text-lg font-semibold text-cyan-400">Node.js</h3>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🐍</div>
                <h3 className="text-lg font-semibold text-purple-400">Python</h3>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">☕</div>
                <h3 className="text-lg font-semibold text-pink-400">Java</h3>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🔷</div>
                <h3 className="text-lg font-semibold text-green-400">C#</h3>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🐹</div>
                <h3 className="text-lg font-semibold text-yellow-400">Go</h3>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🦀</div>
                <h3 className="text-lg font-semibold text-red-400">Rust</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Development Packages
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options for projects of all sizes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Basic API</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$2,999<span className="text-lg text-gray-400">/project</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Up to 10 endpoints
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    REST API design
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Basic authentication
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    API documentation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    2 weeks delivery
                  </li>
                </ul>
                <button className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-colors">
                  Get Started
                </button>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/50 rounded-2xl p-8 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Advanced API</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$7,999<span className="text-lg text-gray-400">/project</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Up to 50 endpoints
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    REST + GraphQL APIs
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Advanced authentication
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Rate limiting & caching
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Monitoring & analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    4 weeks delivery
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300">
                  Get Started
                </button>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise API</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$19,999<span className="text-lg text-gray-400">/project</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Unlimited endpoints
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Microservices architecture
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Enterprise security
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    High availability setup
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Custom integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    8 weeks delivery
                  </li>
                </ul>
                <button className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600 to-purple-700 py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your API?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Let our expert developers create the perfect API solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-colors">
                View Portfolio
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-200">
              <p>Contact: +1 302 464 0950 | kleber@ziontechgroup.com</p>
              <p>364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default APIDevelopmentPage;