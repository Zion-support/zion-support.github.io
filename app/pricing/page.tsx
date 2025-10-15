import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const PricingPage: React.FC = () => {
  const aiServicesPricing = [
    {
      name: 'AI Development Services',
      basic: '$5,000',
      pro: '$15,000',
      enterprise: '$50,000',
      description: 'Custom AI solutions and machine learning models'
    },
    {
      name: 'AI Consulting',
      basic: '$2,000',
      pro: '$8,000',
      enterprise: '$25,000',
      description: 'Strategic AI guidance and implementation planning'
    },
    {
      name: 'AI Content Generator Pro',
      basic: '$49/month',
      pro: '$149/month',
      enterprise: '$499/month',
      description: 'AI-powered content creation platform'
    },
    {
      name: 'AI Customer Support Pro',
      basic: '$99/month',
      pro: '$299/month',
      enterprise: '$999/month',
      description: 'Intelligent customer support with chatbots'
    },
    {
      name: 'AI Fraud Detection',
      basic: '$199/month',
      pro: '$599/month',
      enterprise: '$1,999/month',
      description: 'Advanced fraud detection and prevention'
    },
    {
      name: 'AI Image Recognition',
      basic: '$99/month',
      pro: '$299/month',
      enterprise: '$999/month',
      description: 'Computer vision and image analysis'
    }
  ];

  const microSaasPricing = [
    {
      name: 'AI Chatbot Builder',
      basic: '$49/month',
      pro: '$149/month',
      enterprise: '$499/month',
      description: 'No-code chatbot builder with AI capabilities'
    },
    {
      name: 'AI Form Builder Pro',
      basic: '$29/month',
      pro: '$79/month',
      enterprise: '$199/month',
      description: 'Intelligent form builder with conditional logic'
    },
    {
      name: 'AI Document Processor',
      basic: '$79/month',
      pro: '$199/month',
      enterprise: '$599/month',
      description: 'AI-powered document processing and OCR'
    },
    {
      name: 'AI Scheduling Assistant',
      basic: '$39/month',
      pro: '$99/month',
      enterprise: '$299/month',
      description: 'Smart scheduling with calendar integration'
    },
    {
      name: 'AI Social Media Manager',
      basic: '$59/month',
      pro: '$149/month',
      enterprise: '$399/month',
      description: 'Comprehensive social media management'
    },
    {
      name: 'AI CRM Optimizer',
      basic: '$99/month',
      pro: '$299/month',
      enterprise: '$999/month',
      description: 'AI-powered CRM enhancement'
    }
  ];

  const itServicesPricing = [
    {
      name: 'Cloud Infrastructure',
      basic: '$1,000/month',
      pro: '$5,000/month',
      enterprise: '$20,000/month',
      description: 'Scalable cloud solutions and infrastructure'
    },
    {
      name: 'Cybersecurity Solutions',
      basic: '$2,000/month',
      pro: '$8,000/month',
      enterprise: '$25,000/month',
      description: 'Advanced cybersecurity and threat protection'
    },
    {
      name: 'Data Analytics',
      basic: '$1,500/month',
      pro: '$6,000/month',
      enterprise: '$20,000/month',
      description: 'Business intelligence and data analytics'
    },
    {
      name: 'Mobile Development',
      basic: '$5,000',
      pro: '$25,000',
      enterprise: '$100,000',
      description: 'Native and cross-platform mobile apps'
    },
    {
      name: 'Web Development',
      basic: '$3,000',
      pro: '$15,000',
      enterprise: '$75,000',
      description: 'Modern web development and optimization'
    },
    {
      name: 'API Development',
      basic: '$2,000',
      pro: '$8,000',
      enterprise: '$25,000',
      description: 'Custom API development and integration'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI and IT services. Choose the plan that fits your business needs with competitive rates and flexible options." />
        <meta name="keywords" content="AI pricing, IT services pricing, micro saas pricing, cloud solutions pricing, cybersecurity pricing, data analytics pricing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Transparent Pricing</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Choose the perfect plan for your business needs. All our services come with flexible pricing options and no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Call +1 302 464 0950
              </a>
              <Link 
                to="/contact" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>

          {/* AI Services Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">AI Services Pricing</h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Service</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Basic</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Professional</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {aiServicesPricing.map((service, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{service.name}</div>
                            <div className="text-sm text-gray-500">{service.description}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{service.basic}</td>
                        <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{service.pro}</td>
                        <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{service.enterprise}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Micro SaaS Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Micro SaaS Solutions Pricing</h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Service</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Basic</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Professional</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {microSaasPricing.map((service, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{service.name}</div>
                            <div className="text-sm text-gray-500">{service.description}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-sm font-semibold text-green-600">{service.basic}</td>
                        <td className="px-6 py-4 text-center text-sm font-semibold text-green-600">{service.pro}</td>
                        <td className="px-6 py-4 text-center text-sm font-semibold text-green-600">{service.enterprise}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* IT Services Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">IT Services Pricing</h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Service</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Basic</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Professional</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {itServicesPricing.map((service, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{service.name}</div>
                            <div className="text-sm text-gray-500">{service.description}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-sm font-semibold text-purple-600">{service.basic}</td>
                        <td className="px-6 py-4 text-center text-sm font-semibold text-purple-600">{service.pro}</td>
                        <td className="px-6 py-4 text-center text-sm font-semibold text-purple-600">{service.enterprise}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Choose Our Pricing?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparent Pricing</h3>
                <p className="text-gray-600">No hidden fees or surprise charges. What you see is what you pay.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Plans</h3>
                <p className="text-gray-600">Scale up or down based on your business needs with flexible pricing options.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Value Guarantee</h3>
                <p className="text-gray-600">30-day money-back guarantee on all our services. We're confident you'll love the results.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today for a custom quote tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Email kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-6 text-sm opacity-75">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="underline hover:no-underline">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;