import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const MicroSAASSolutionsPage: React.FC = () => {
  const microSaasServices = servicesData.microSaas;

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Specialized Business Software</title>
        <meta name="description" content="Comprehensive micro SaaS solutions including task management, expense tracking, workflow automation, and email marketing. Streamline your business with specialized software." />
        <meta name="keywords" content="micro SaaS, business software, task management, expense tracking, workflow automation, email marketing, productivity tools" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Specialized software solutions designed to solve specific business challenges. 
                Our micro SaaS products are built with AI-powered features and modern technology to maximize your productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold"
                >
                  Get Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Micro SaaS Products</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our suite of specialized business tools, each designed to solve specific challenges
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {microSaasServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">{service.shortDescription}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <svg className="h-4 w-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-gray-900">Pricing</h4>
                        <p className="text-2xl font-bold text-green-600">{service.marketPrice}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Starting from</p>
                        <p className="text-lg font-semibold text-gray-900">${service.pricing.basic.toLocaleString()}/mo</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={`mailto:${service.contactInfo.email}?subject=Free Trial Request for ${service.title}`}
                      className="flex-1 bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                    >
                      Start Free Trial
                    </a>
                    <a 
                      href={`tel:${service.contactInfo.phone}`}
                      className="flex-1 border border-green-600 text-green-600 text-center py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold"
                    >
                      Call for Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our micro SaaS products are built with modern technology and AI-powered features
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: '🚀', title: 'Quick Setup', description: 'Get started in minutes with our intuitive onboarding process' },
                { icon: '🤖', title: 'AI-Powered', description: 'Built with artificial intelligence for smarter automation' },
                { icon: '📱', title: 'Mobile Ready', description: 'Access your tools anywhere with responsive mobile design' },
                { icon: '🔒', title: 'Secure & Compliant', description: 'Enterprise-grade security with SOC 2 compliance' },
                { icon: '⚡', title: 'High Performance', description: 'Lightning-fast performance with 99.9% uptime' },
                { icon: '🔧', title: 'Easy Integration', description: 'Seamlessly integrate with your existing tools and workflows' }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Comparison */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include free setup and migration support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Basic', price: '$29', description: 'Perfect for small teams', features: ['Up to 5 users', 'Basic features', 'Email support', '1GB storage'] },
                { name: 'Pro', price: '$79', description: 'Ideal for growing businesses', features: ['Up to 25 users', 'Advanced features', 'Priority support', '10GB storage', 'API access'] },
                { name: 'Enterprise', price: '$199', description: 'For large organizations', features: ['Unlimited users', 'All features', '24/7 support', 'Unlimited storage', 'Custom integrations', 'Dedicated manager'] }
              ].map((plan, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-lg p-8 ${index === 1 ? 'ring-2 ring-green-500 relative' : ''}`}>
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-gray-900 mb-6">{plan.price}<span className="text-lg text-gray-600">/month</span></div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a 
                      href={`mailto:kleber@ziontechgroup.com?subject=Interested in ${plan.name} Plan`}
                      className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                        index === 1 
                          ? 'bg-green-600 text-white hover:bg-green-700' 
                          : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-green-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Streamline Your Business?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Start your free trial today and experience the power of our micro SaaS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSAASSolutionsPage;