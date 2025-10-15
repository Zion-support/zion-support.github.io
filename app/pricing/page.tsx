import React from 'react';
import { Helmet } from 'react-helmet-async';

const PricingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI and IT services. Choose the plan that fits your business needs." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Pricing Plans</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Tools Pricing */}
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Tools</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">$29-199/month</div>
              <ul className="space-y-2 text-gray-600">
                <li>Individual AI tools</li>
                <li>API access</li>
                <li>Basic analytics</li>
                <li>Email support</li>
                <li>Monthly usage reports</li>
              </ul>
              <div className="mt-6">
                <a href="/contact" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-center block">
                  Get Started
                </a>
              </div>
            </div>

            {/* Micro SaaS Solutions */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Micro SaaS</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">$99-499/month</div>
              <ul className="space-y-2 text-gray-600">
                <li>Custom micro SaaS solutions</li>
                <li>White-label options</li>
                <li>Priority support</li>
                <li>Advanced analytics</li>
                <li>Custom integrations</li>
                <li>Weekly reports</li>
              </ul>
              <div className="mt-6">
                <a href="/contact" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-center block">
                  Contact Sales
                </a>
              </div>
            </div>

            {/* IT Services */}
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">IT Services</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">$199-999/month</div>
              <ul className="space-y-2 text-gray-600">
                <li>Cloud infrastructure management</li>
                <li>Network security</li>
                <li>Database optimization</li>
                <li>24/7 monitoring</li>
                <li>Emergency support</li>
                <li>Performance optimization</li>
              </ul>
              <div className="mt-6">
                <a href="/contact" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-center block">
                  Get Quote
                </a>
              </div>
            </div>

            {/* Enterprise Solutions */}
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">Custom</div>
              <ul className="space-y-2 text-gray-600">
                <li>Full digital transformation</li>
                <li>Dedicated team</li>
                <li>24/7 premium support</li>
                <li>Custom AI solutions</li>
                <li>Real-time monitoring</li>
                <li>SLA guarantees</li>
              </ul>
              <div className="mt-6">
                <a href="/contact" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-center block">
                  Schedule Call
                </a>
              </div>
            </div>
          </div>

          {/* Additional Pricing Information */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Pricing Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Content Moderator</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">$49/month</div>
                <p className="text-gray-600">Up to 10,000 content checks</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Predictor Pro</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">$199/month</div>
                <p className="text-gray-600">Advanced sales forecasting</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Workflow Automator</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">$99/month</div>
                <p className="text-gray-600">Unlimited workflow automation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;