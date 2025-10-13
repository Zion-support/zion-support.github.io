import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Choose the perfect plan for your business needs." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pricing
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Choose the perfect plan for your business needs.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
<<<<<<< HEAD
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">$99<span className="text-lg text-gray-600">/month</span></p>
              <ul className="space-y-2 text-gray-600">
                <li>Basic AI features</li>
                <li>Email support</li>
                <li>Standard templates</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-2 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">$299<span className="text-lg text-gray-600">/month</span></p>
              <ul className="space-y-2 text-gray-600">
                <li>Advanced AI features</li>
                <li>Priority support</li>
                <li>Custom templates</li>
                <li>Analytics dashboard</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">$999<span className="text-lg text-gray-600">/month</span></p>
              <ul className="space-y-2 text-gray-600">
                <li>Full AI suite</li>
                <li>24/7 dedicated support</li>
                <li>Custom development</li>
                <li>Advanced analytics</li>
                <li>White-label options</li>
              </ul>
=======
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
              <p className="text-gray-600">
                Description of the first feature.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
              <p className="text-gray-600">
                Description of the second feature.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
              <p className="text-gray-600">
                Description of the third feature.
              </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-6246
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}