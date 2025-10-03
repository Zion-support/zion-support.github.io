// import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Code, Shield, Users, DollarSign, Clock, BarChart3, Database, Zap, Globe } from 'lucide-react';

export default function APIDevelopmentService() {
  return (
    <>
      <Helmet>
        <title>API Development Service | Zion Tech Group</title>
        <meta name="description" content="Professional API development services. RESTful APIs, GraphQL, microservices, and API integration for scalable applications." />
        <meta name="keywords" content="API development, RESTful API, GraphQL, microservices, API integration, web services" />
        <link rel="canonical" href="https://ziontechgroup.com/services/api-development-service" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                API Development Service
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Professional API development services. RESTful APIs, GraphQL, microservices, and API integration for scalable, secure applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#pricing" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Pricing
                </a>
                <a href="/contact" className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Comprehensive API Solutions</h2>
              <p className="text-xl text-gray-300">End-to-end API development and integration services</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Code className="h-12 w-12 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">RESTful APIs</h3>
                <p className="text-gray-300">Design and develop scalable REST APIs with proper HTTP methods, status codes, and error handling.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Globe className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">GraphQL APIs</h3>
                <p className="text-gray-300">Build efficient GraphQL APIs with type safety, real-time subscriptions, and optimized data fetching.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Database className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Microservices</h3>
                <p className="text-gray-300">Architect and develop microservices with service discovery, load balancing, and fault tolerance.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Shield className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">API Security</h3>
                <p className="text-gray-300">Implement OAuth 2.0, JWT tokens, rate limiting, and comprehensive security measures.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <BarChart3 className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">API Documentation</h3>
                <p className="text-gray-300">Comprehensive API documentation with OpenAPI/Swagger specifications and interactive testing.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Zap className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Performance Optimization</h3>
                <p className="text-gray-300">Optimize API performance with caching, compression, and efficient database queries.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our API Development?</h2>
              <p className="text-xl text-gray-300">Expert API development with proven results and best practices</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Faster Time to Market</h3>
                      <p className="text-gray-300">Well-designed APIs accelerate development and enable rapid feature deployment.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Scalable Architecture</h3>
                      <p className="text-gray-300">APIs designed for growth with horizontal scaling and load distribution capabilities.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Integration Ready</h3>
                      <p className="text-gray-300">APIs that seamlessly integrate with third-party services and existing systems.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                      <p className="text-gray-300">Bank-level security with authentication, authorization, and data protection.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6">API Performance Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-white">
                    <span>Average Response Time:</span>
                    <span className="font-semibold">50ms</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Uptime Guarantee:</span>
                    <span className="font-semibold">99.9%</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Concurrent Users:</span>
                    <span className="font-semibold">10,000+</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Security Score:</span>
                    <span className="font-semibold">A+</span>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between text-white text-lg font-bold">
                      <span>Client Satisfaction:</span>
                      <span className="text-green-300">98%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Technologies & Frameworks</h2>
              <p className="text-xl text-gray-300">We work with the latest API development technologies</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <div className="bg-green-600 text-white w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold mx-auto mb-4">N</div>
                <h3 className="text-xl font-semibold text-white mb-3">Node.js</h3>
                <p className="text-gray-300">Fast, scalable APIs with Express.js and modern JavaScript frameworks.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold mx-auto mb-4">P</div>
                <h3 className="text-xl font-semibold text-white mb-3">Python</h3>
                <p className="text-gray-300">Robust APIs with Django REST Framework and FastAPI for high performance.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <div className="bg-purple-600 text-white w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold mx-auto mb-4">G</div>
                <h3 className="text-xl font-semibold text-white mb-3">Go</h3>
                <p className="text-gray-300">High-performance APIs with Gin and Echo frameworks for microservices.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold mx-auto mb-4">J</div>
                <h3 className="text-xl font-semibold text-white mb-3">Java</h3>
                <p className="text-gray-300">Enterprise-grade APIs with Spring Boot and Spring Security.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Flexible Pricing Plans</h2>
              <p className="text-xl text-gray-300">Choose the plan that matches your API development needs</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Basic Plan */}
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
                  <div className="text-4xl font-bold text-indigo-400 mb-2">$3,500</div>
                  <div className="text-gray-300">per API</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Simple REST API
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Basic authentication
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    API documentation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    30 days support
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-colors block text-center">
                  Get Started
                </a>
              </div>
              
              {/* Professional Plan */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-8 rounded-lg border-2 border-indigo-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                  <div className="text-4xl font-bold text-white mb-2">$8,500</div>
                  <div className="text-indigo-100">per API</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    Advanced REST/GraphQL API
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    OAuth 2.0 & JWT
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    Rate limiting & caching
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    Comprehensive testing
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    90 days support
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-white hover:bg-gray-100 text-indigo-600 py-3 rounded-lg font-semibold transition-colors block text-center">
                  Get Started
                </a>
              </div>
              
              {/* Enterprise Plan */}
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">$15,000</div>
                  <div className="text-gray-300">per API</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Microservices architecture
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Advanced security
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Performance optimization
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Monitoring & analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    6 months support
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors block text-center">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your API?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free API consultation and discover how we can accelerate your development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Free Consultation
              </a>
              <a href="tel:+13024640950" className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Call: +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}