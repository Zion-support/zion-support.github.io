import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const microSaasPricing = [
    {
      name: 'AI Content Moderator',
      monthly: '$29',
      annual: '$290',
      features: ['Real-time content analysis', 'Multi-language support', 'Custom rules', 'API access'],
      popular: false
    },
    {
      name: 'Customer Churn Predictor',
      monthly: '$49',
      annual: '$490',
      features: ['Predictive analytics', 'Risk scoring', 'Automated alerts', 'Customer segmentation'],
      popular: true
    },
    {
      name: 'Document Analyzer',
      monthly: '$59',
      annual: '$590',
      features: ['OCR text extraction', 'Document classification', 'Key information extraction', 'Batch processing'],
      popular: false
    },
    {
      name: 'Financial Forecaster',
      monthly: '$79',
      annual: '$790',
      features: ['Revenue forecasting', 'Expense prediction', 'Cash flow analysis', 'Scenario planning'],
      popular: false
    },
    {
      name: 'Workflow Automator',
      monthly: '$89',
      annual: '$890',
      features: ['Workflow automation', 'AI decision making', 'Process optimization', 'Custom triggers'],
      popular: false
    },
    {
      name: 'Smart Expense Tracker',
      monthly: '$19',
      annual: '$190',
      features: ['Receipt scanning', 'Auto-categorization', 'Expense reports', 'Budget tracking'],
      popular: false
    }
  ];

  const servicePricing = [
    {
      name: 'AI Services',
      monthly: '$2,500',
      annual: '$25,000',
      features: ['Machine Learning Solutions', 'Natural Language Processing', 'Computer Vision', 'AI Content Generation'],
      popular: false
    },
    {
      name: 'IT Services',
      monthly: '$3,500',
      annual: '$35,000',
      features: ['Infrastructure Management', 'Cybersecurity Solutions', 'Cloud Solutions', '24/7 Support'],
      popular: true
    },
    {
      name: 'Cloud Infrastructure',
      monthly: '$4,000',
      annual: '$40,000',
      features: ['Cloud Strategy & Planning', 'Migration Services', 'Cost Optimization', 'Multi-cloud Management'],
      popular: false
    },
    {
      name: 'Web Development',
      monthly: '$5,000',
      annual: '$50,000',
      features: ['Custom Web Applications', 'E-commerce Solutions', 'API Development', 'Performance Optimization'],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI and IT services. Choose the plan that fits your business needs. Starting from $19/month for micro SaaS tools." />
        <meta name="keywords" content="pricing, AI services pricing, IT services pricing, micro SaaS pricing, business solutions cost" />
        <meta property="og:title" content="Pricing - Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for our AI and IT services. Choose the plan that fits your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Pricing Plans</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Transparent pricing for our AI and IT services. Choose the perfect plan for your business needs.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="mx-4 relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span
                  className={`${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </button>
              <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Annual</span>
              {isAnnual && (
                <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                  Save 20%
                </span>
              )}
            </div>
          </div>

          {/* Micro SaaS Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Micro SaaS Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {microSaasPricing.map((tool, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow ${tool.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {tool.popular && (
                    <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium rounded-t-xl">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900">
                        {isAnnual ? tool.annual : tool.monthly}
                      </span>
                      <span className="text-gray-500">/{isAnnual ? 'year' : 'month'}</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {tool.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Professional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicePricing.map((service, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {service.popular && (
                    <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium rounded-t-xl">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">
                        {isAnnual ? service.annual : service.monthly}
                      </span>
                      <span className="text-gray-500">/{isAnnual ? 'year' : 'month'}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-600 flex items-center">
                          <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      Contact Sales
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Solutions */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white mb-16">
            <h2 className="text-3xl font-bold mb-4">Enterprise Solutions</h2>
            <p className="text-xl mb-8 opacity-90">
              Custom AI and IT solutions tailored to your specific business requirements
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Custom AI Development</h3>
                <p className="opacity-90">From $50,000/project</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Full IT Transformation</h3>
                <p className="opacity-90">From $100,000/project</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Dedicated Team</h3>
                <p className="opacity-90">From $15,000/month</p>
              </div>
            </div>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Schedule Consultation
            </button>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I change plans anytime?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer custom pricing?</h3>
                <p className="text-gray-600">Yes, we offer custom pricing for enterprise clients with specific requirements.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept all major credit cards, bank transfers, and can arrange custom billing for enterprise clients.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a free trial?</h3>
                <p className="text-gray-600">Yes, most of our micro SaaS tools offer a 14-day free trial. Contact us for service trials.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact our team to discuss your specific needs and get a custom quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Get Custom Quote
              </a>
              <a 
                href="tel:+13024640950" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                Call +1 (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;