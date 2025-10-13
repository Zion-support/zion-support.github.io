import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Competitive pricing for AI and IT solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Choose the perfect plan for your business needs.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$99/month</p>
              <ul className="text-gray-600 space-y-2">
                <li>Basic AI features</li>
                <li>Email support</li>
                <li>5GB storage</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-2 border-blue-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$299/month</p>
              <ul className="text-gray-600 space-y-2">
                <li>Advanced AI features</li>
                <li>Priority support</li>
                <li>50GB storage</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">Custom</p>
              <ul className="text-gray-600 space-y-2">
                <li>Full AI suite</li>
                <li>24/7 support</li>
                <li>Unlimited storage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
