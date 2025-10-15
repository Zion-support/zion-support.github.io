import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const PricingPage: React.FC = () => {
  const aiServices = [
    {
      name: 'AI Content Generator',
      description: 'Advanced AI-powered content creation platform',
      plans: [
        { name: 'Starter', price: 29, features: ['10,000 words/month', 'Basic templates', 'Email support'] },
        { name: 'Professional', price: 79, features: ['50,000 words/month', 'Advanced templates', 'Priority support', 'SEO optimization'] },
        { name: 'Business', price: 199, features: ['200,000 words/month', 'Custom templates', '24/7 support', 'Team collaboration'] },
        { name: 'Enterprise', price: 499, features: ['Unlimited words', 'White-label solution', 'Dedicated support', 'Custom integrations'] }
      ]
    },
    {
      name: 'AI Customer Support Pro',
      description: 'Intelligent customer support automation platform',
      plans: [
        { name: 'Starter', price: 99, features: ['1,000 conversations/month', 'Basic chatbot', 'Email support'] },
        { name: 'Professional', price: 299, features: ['5,000 conversations/month', 'Advanced AI', 'Priority support', 'Analytics dashboard'] },
        { name: 'Business', price: 599, features: ['20,000 conversations/month', 'Multi-channel support', '24/7 support', 'Custom integrations'] },
        { name: 'Enterprise', price: 1299, features: ['Unlimited conversations', 'White-label solution', 'Dedicated support', 'Custom AI training'] }
      ]
    },
    {
      name: 'AI Workflow Automator Pro',
      description: 'Comprehensive business process automation platform',
      plans: [
        { name: 'Starter', price: 149, features: ['10 workflows', 'Basic integrations', 'Email support'] },
        { name: 'Professional', price: 399, features: ['50 workflows', 'Advanced integrations', 'Priority support', 'Analytics'] },
        { name: 'Business', price: 799, features: ['200 workflows', 'Custom integrations', '24/7 support', 'Team collaboration'] },
        { name: 'Enterprise', price: 1999, features: ['Unlimited workflows', 'White-label solution', 'Dedicated support', 'Custom development'] }
      ]
    }
  ];

  const microSaasServices = [
    {
      name: 'Smart Expense Tracker',
      description: 'Intelligent expense management SaaS',
      plans: [
        { name: 'Individual', price: 9, features: ['Unlimited receipts', 'Basic categorization', 'Mobile app'] },
        { name: 'Team', price: 29, features: ['Up to 5 users', 'Advanced analytics', 'Team reporting'] },
        { name: 'Business', price: 79, features: ['Up to 25 users', 'Custom categories', 'API access'] },
        { name: 'Enterprise', price: 199, features: ['Unlimited users', 'White-label solution', 'Dedicated support'] }
      ]
    },
    {
      name: 'Customer Satisfaction Monitor',
      description: 'Real-time customer satisfaction tracking platform',
      plans: [
        { name: 'Starter', price: 49, features: ['1,000 responses/month', 'Basic analytics', 'Email support'] },
        { name: 'Professional', price: 149, features: ['5,000 responses/month', 'Advanced analytics', 'Priority support'] },
        { name: 'Business', price: 399, features: ['20,000 responses/month', 'Custom dashboards', '24/7 support'] },
        { name: 'Enterprise', price: 999, features: ['Unlimited responses', 'White-label solution', 'Dedicated support'] }
      ]
    }
  ];

  const itServices = [
    {
      name: 'Cloud Infrastructure',
      description: 'Comprehensive cloud infrastructure solutions',
      plans: [
        { name: 'Basic', price: 1000, features: ['Cloud migration', 'Basic monitoring', 'Email support'] },
        { name: 'Professional', price: 5000, features: ['Advanced monitoring', 'Auto-scaling', 'Priority support'] },
        { name: 'Business', price: 15000, features: ['Multi-cloud setup', '24/7 monitoring', 'Dedicated support'] },
        { name: 'Enterprise', price: 50000, features: ['Custom solutions', 'White-label setup', 'Dedicated team'] }
      ]
    },
    {
      name: 'Cybersecurity Solutions',
      description: 'Advanced cybersecurity protection services',
      plans: [
        { name: 'Basic', price: 2000, features: ['Security assessment', 'Basic monitoring', 'Email support'] },
        { name: 'Professional', price: 8000, features: ['24/7 monitoring', 'Incident response', 'Priority support'] },
        { name: 'Business', price: 20000, features: ['Advanced threat detection', 'Compliance management', 'Dedicated support'] },
        { name: 'Enterprise', price: 75000, features: ['Custom security solutions', 'White-label setup', 'Dedicated team'] }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI services, Micro SaaS solutions, and IT services. Choose the plan that fits your business needs." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core features with no hidden fees.
            </p>
          </div>

          {/* AI Services Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Services</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-4">
                    {service.plans.map((plan, planIndex) => (
                      <div key={planIndex} className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold text-gray-900">{plan.name}</h4>
                          <span className="text-2xl font-bold text-blue-600">${plan.price}</span>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Micro SaaS Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Micro SaaS Solutions</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-4">
                    {service.plans.map((plan, planIndex) => (
                      <div key={planIndex} className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold text-gray-900">{plan.name}</h4>
                          <span className="text-2xl font-bold text-blue-600">${plan.price}</span>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IT Services Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">IT Services</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-4">
                    {service.plans.map((plan, planIndex) => (
                      <div key={planIndex} className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold text-gray-900">{plan.name}</h4>
                          <span className="text-2xl font-bold text-blue-600">${plan.price}</span>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6">Contact us today to discuss your specific needs and get a custom quote.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="tel:+13024640950" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Call +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Email Us
              </a>
              <Link to="/contact" className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;