import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Pricing Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg border">
            <h3 className="text-2xl font-bold mb-4">Starter</h3>
            <div className="text-4xl font-bold text-blue-600 mb-6">$99<span className="text-lg text-gray-500">/month</span></div>
            <ul className="space-y-3 mb-8">
              <li>• Basic website</li>
              <li>• 5 pages</li>
              <li>• Email support</li>
              <li>• SSL certificate</li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Choose Plan
            </button>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-600 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
              Popular
            </div>
            <h3 className="text-2xl font-bold mb-4">Professional</h3>
            <div className="text-4xl font-bold text-blue-600 mb-6">$299<span className="text-lg text-gray-500">/month</span></div>
            <ul className="space-y-3 mb-8">
              <li>• Custom website</li>
              <li>• 20 pages</li>
              <li>• Priority support</li>
              <li>• Analytics dashboard</li>
              <li>• SEO optimization</li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Choose Plan
            </button>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border">
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <div className="text-4xl font-bold text-blue-600 mb-6">$599<span className="text-lg text-gray-500">/month</span></div>
            <ul className="space-y-3 mb-8">
              <li>• Full-stack application</li>
              <li>• Unlimited pages</li>
              <li>• 24/7 support</li>
              <li>• Custom integrations</li>
              <li>• Performance monitoring</li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;