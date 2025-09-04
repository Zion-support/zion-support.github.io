import React from 'react';
import Head from 'next/head';
import { CheckCircle, XCircle, Star } from 'lucide-react';

export default function ServicesComparison() {
  const contact = { 
    phone: '+1 302 464 0950', 
    email: 'kleber@ziontechgroup.com', 
    address: '364 E Main St STE 1008 Middletown DE 19709', 
    site: 'https://ziontechgroup.com' 
  };

  const serviceCategories = [
    {
      name: 'Micro SaaS Products',
      count: '150+',
      description: 'Focused software solutions for specific business needs',
      features: ['Quick deployment', 'Scalable architecture', 'API integrations', 'Custom branding'],
      pricing: 'Starting at $99/month',
      bestFor: 'Small to medium businesses'
    },
    {
      name: 'AI Services',
      count: '100+',
      description: 'Artificial intelligence solutions to automate and optimize processes',
      features: ['Machine learning models', 'Natural language processing', 'Computer vision', 'Predictive analytics'],
      pricing: 'Starting at $199/month',
      bestFor: 'Data-driven organizations'
    },
    {
      name: 'IT Services',
      count: '100+',
      description: 'Comprehensive IT infrastructure and support services',
      features: ['Cloud migration', 'System administration', 'Security audits', 'Technical support'],
      pricing: 'Starting at $299/month',
      bestFor: 'Large enterprises'
    }
  ];

  return (
    <>
      <Head>
        <title>Services Comparison - Zion Tech Group</title>
        <meta name="description" content="Compare Zion Tech Group's service categories to find the best solution for your business needs." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Services Comparison
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare our service categories to find the perfect solution for your business needs.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Features</th>
                    {serviceCategories.map((category, index) => (
                      <th key={index} className="px-6 py-4 text-center text-sm font-medium text-gray-900">
                        {category.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Service Count</td>
                    {serviceCategories.map((category, index) => (
                      <td key={index} className="px-6 py-4 text-center text-sm text-gray-600">
                        {category.count}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Starting Price</td>
                    {serviceCategories.map((category, index) => (
                      <td key={index} className="px-6 py-4 text-center text-sm text-gray-600">
                        {category.pricing}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Best For</td>
                    {serviceCategories.map((category, index) => (
                      <td key={index} className="px-6 py-4 text-center text-sm text-gray-600">
                        {category.bestFor}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Quick Deployment</td>
                    {serviceCategories.map((category, index) => (
                      <td key={index} className="px-6 py-4 text-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">24/7 Support</td>
                    {serviceCategories.map((category, index) => (
                      <td key={index} className="px-6 py-4 text-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">API Access</td>
                    {serviceCategories.map((category, index) => (
                      <td key={index} className="px-6 py-4 text-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Detailed Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-blue-600 font-semibold text-lg mb-4">
                    {category.pricing}
                  </p>
                  <p className="text-gray-600">
                    {category.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                  <ul className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Help Choosing?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our experts can help you choose the right services for your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Get Personalized Recommendation
              </a>
              <a href="/schedule-demo" className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}