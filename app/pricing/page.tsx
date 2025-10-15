import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const PricingPage: React.FC = () => {
  const aiServices = servicesData.aiServices;
  const microSaas = servicesData.microSaas;
  const itSolutions = servicesData.itSolutions;

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Services Pricing</title>
        <meta name="description" content="Transparent pricing for our AI and IT services. Choose the plan that fits your business needs. Contact us at +1 302 464 0950 for custom pricing." />
        <meta name="keywords" content="AI services pricing, IT solutions pricing, micro SaaS pricing, business technology costs" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Transparent Pricing</h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Choose the perfect plan for your business needs. All our pricing is transparent with no hidden fees. 
                Contact us for custom enterprise solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
                  Get Custom Quote
                </Link>
                <a href="tel:+13024640950" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold">
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* AI Services Pricing */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">AI Services Pricing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced AI solutions with flexible pricing options
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service) => (
                <div key={service.id} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.shortDescription}</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">${service.pricing.basic.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">Starting price</div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Pricing Tiers:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Basic: ${service.pricing.basic.toLocaleString()}</li>
                      <li>Pro: ${service.pricing.pro.toLocaleString()}</li>
                      <li>Enterprise: ${service.pricing.enterprise.toLocaleString()}</li>
                    </ul>
                  </div>
                  
                  <Link 
                    to={`/${service.id}`} 
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Micro SAAS Pricing */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Micro SAAS Pricing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Affordable monthly subscriptions for specialized business tools
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaas.map((service) => (
                <div key={service.id} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.shortDescription}</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-green-600 mb-2">${service.pricing.basic}</div>
                    <div className="text-sm text-gray-500">per month starting</div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Monthly Plans:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Basic: ${service.pricing.basic}/month</li>
                      <li>Pro: ${service.pricing.pro}/month</li>
                      <li>Enterprise: ${service.pricing.enterprise}/month</li>
                    </ul>
                  </div>
                  
                  <Link 
                    to={`/${service.id}`} 
                    className="block w-full bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* IT Solutions Pricing */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">IT Solutions Pricing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional IT services with project-based and retainer pricing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itSolutions.map((service) => (
                <div key={service.id} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.shortDescription}</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-purple-600 mb-2">${service.pricing.basic.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">Starting price</div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Pricing Options:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Basic: ${service.pricing.basic.toLocaleString()}</li>
                      <li>Pro: ${service.pricing.pro.toLocaleString()}</li>
                      <li>Enterprise: ${service.pricing.enterprise.toLocaleString()}</li>
                    </ul>
                  </div>
                  
                  <Link 
                    to={`/${service.id}`} 
                    className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                  >
                    Get Quote
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* General Pricing Plans */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">General Service Plans</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Flexible service plans to meet your ongoing technology needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">$2,500<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">Basic AI consultation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">Email support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">Monthly reports</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">Up to 10 hours/month</span>
                  </li>
                </ul>
                <Link to="/contact" className="block w-full bg-gray-100 text-gray-900 text-center py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  Get Started
                </Link>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-xl shadow-lg border-2 border-blue-200 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">$7,500<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">Advanced AI solutions</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">Weekly reports</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">Custom integrations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">Up to 40 hours/month</span>
                  </li>
                </ul>
                <Link to="/contact" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Get Started
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">Custom<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">Full AI transformation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">24/7 support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">Real-time monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">Dedicated team</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">Unlimited hours</span>
                  </li>
                </ul>
                <Link to="/contact" className="block w-full bg-gray-100 text-gray-900 text-center py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Common questions about our pricing and services
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer free consultations?</h3>
                <p className="text-gray-600">Yes, we offer free initial consultations for all potential clients. Contact us to schedule your free consultation.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Are there any setup fees?</h3>
                <p className="text-gray-600">No, we don't charge any setup fees for our services. The pricing you see is what you pay.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I change my plan later?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer custom pricing?</h3>
                <p className="text-gray-600">Yes, we offer custom pricing for enterprise clients with specific requirements. Contact us to discuss your needs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today for a free consultation and custom pricing quote tailored to your business needs.
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

export default PricingPage;