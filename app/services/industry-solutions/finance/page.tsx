import React from 'react';

export const metadata = {
  title: 'Finance Solutions | Zion Tech Group',
  description: 'Professional finance solutions for modern businesses. Transform your financial operations with our advanced finance technology.'
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Finance Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional finance solutions for modern businesses. Transform your financial operations with our advanced finance technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Analytics</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Real-time financial reporting</li>
              <li>• Predictive analytics</li>
              <li>• Risk assessment</li>
              <li>• Performance tracking</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Payment Processing</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Secure payment gateways</li>
              <li>• Multi-currency support</li>
              <li>• Fraud detection</li>
              <li>• Compliance management</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Management</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Budget planning</li>
              <li>• Expense tracking</li>
              <li>• Investment analysis</li>
              <li>• Tax optimization</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our finance solutions can help your business
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
}