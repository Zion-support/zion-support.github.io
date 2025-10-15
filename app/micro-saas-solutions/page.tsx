import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const MicroSAASSolutionsPage: React.FC = () => {
  const microSaasServices = servicesData.microSaas;

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Powerful micro SaaS solutions for modern businesses. AI-powered tools for task management, expense tracking, email marketing, social media, and workflow automation." />
        <meta name="keywords" content="micro saas, saas solutions, business software, task management, expense tracking, email marketing, social media management, workflow automation" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Powerful micro SaaS solutions for modern businesses. AI-powered tools for task management, expense tracking, email marketing, social media, and workflow automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Powerful, ready-to-use software solutions that solve specific business problems with intelligent automation and AI-powered features.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </a>
                <a href="#pricing" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Micro SaaS Solutions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive suite of micro SaaS solutions designed to streamline your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <li key={index}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Pricing:</h4>
                      <div className="text-2xl font-bold text-blue-600">{service.marketPrice}</div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <a 
                        href={`/contact?service=${service.id}`}
                        className="flex-1 bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        Get Started
                      </a>
                      <a 
                        href={`tel:+13024640950`}
                        className="flex-1 border border-blue-600 text-blue-600 text-center px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                No hidden fees, no surprises. Choose the plan that fits your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic Plans</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">$19 - $99</div>
                <p className="text-gray-600 mb-6">Perfect for small businesses and startups</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Essential features included</li>
                  <li>• Email support</li>
                  <li>• Basic analytics</li>
                  <li>• Up to 5 users</li>
                </ul>
                <a href="/contact" className="w-full bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors block">
                  Get Started
                </a>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border-2 border-blue-600 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pro Plans</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">$149 - $399</div>
                <p className="text-gray-600 mb-6">Ideal for growing businesses</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• All basic features</li>
                  <li>• Advanced analytics</li>
                  <li>• Priority support</li>
                  <li>• Up to 25 users</li>
                  <li>• API access</li>
                </ul>
                <a href="/contact" className="w-full bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors block">
                  Get Started
                </a>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Plans</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">$499 - $1299</div>
                <p className="text-gray-600 mb-6">For large organizations</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• All pro features</li>
                  <li>• Custom integrations</li>
                  <li>• Dedicated support</li>
                  <li>• Unlimited users</li>
                  <li>• Custom training</li>
                </ul>
                <a href="/contact" className="w-full bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors block">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-blue-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your needs and find the perfect micro SaaS solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Get Free Consultation
              </a>
              <a href="tel:+13024640950" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-blue-100">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSAASSolutionsPage;