import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const MicroSAASSolutionsPage: React.FC = () => {
  const microSaasServices = servicesData.microSaas;

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Specialized Business Software</title>
        <meta name="description" content="Specialized micro SaaS solutions for specific business needs and workflows. Affordable, scalable software solutions starting from $19/month. Contact us at +1 302 464 0950." />
        <meta name="keywords" content="micro SaaS, business software, expense tracking, workflow automation, email marketing, inventory management" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Specialized software solutions designed for specific business needs. 
                Affordable, scalable, and ready-to-use applications that solve real problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold">
                  Get Started Today
                </Link>
                <a href="tel:+13024640950" className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-colors text-lg font-semibold">
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Micro SaaS Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful, focused applications that solve specific business challenges with minimal setup
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service) => (
                <div key={service.id} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-green-600 mb-1">${service.pricing.basic}</div>
                    <div className="text-sm text-gray-500">per month starting</div>
                  </div>
                  
                  <Link 
                    to={`/${service.id}`} 
                    className="block w-full bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    Try Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Micro SaaS?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Micro SaaS solutions offer focused functionality with lower costs and faster implementation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Affordable Pricing</h3>
                <p className="text-gray-600">Start from $19/month with no long-term contracts or hidden fees</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Setup</h3>
                <p className="text-gray-600">Get up and running in minutes with our intuitive setup process</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Focused Solutions</h3>
                <p className="text-gray-600">Each tool solves one specific problem exceptionally well</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalable Growth</h3>
                <p className="text-gray-600">Grow with your business with flexible plans and features</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your needs. All plans include free trials and no setup fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
                <div className="text-4xl font-bold text-green-600 mb-6">$19<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">Basic features</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">Email support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">5GB storage</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">Up to 5 users</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-medium">
                  Start Free Trial
                </button>
              </div>
              
              <div className="bg-green-50 p-8 rounded-xl shadow-lg border-2 border-green-200 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
                <div className="text-4xl font-bold text-green-600 mb-6">$49<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">All Starter features</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">50GB storage</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">Up to 25 users</span>
                  </li>
                </ul>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                  Start Free Trial
                </button>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-green-600 mb-6">$99<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">All Professional features</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">Custom integrations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">24/7 phone support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">Unlimited storage</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-600">Unlimited users</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-medium">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-green-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Streamline Your Business?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Start your free trial today and see how our micro SaaS solutions can transform your workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold">
                Start Free Trial
              </Link>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-green-600 transition-colors text-lg font-semibold">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSAASSolutionsPage;