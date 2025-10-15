import React from 'react';
import SEOHead from '../components/SEOHead';

const InventoryManagerPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Inventory Manager - Zion Tech Group"
        description="Advanced inventory management solution with AI-powered forecasting, automated reordering, and real-time tracking capabilities."
        keywords="inventory management, stock tracking, supply chain, automated reordering, AI forecasting, warehouse management"
        canonicalUrl="https://ziontechgroup.com/inventory-manager"
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Inventory Manager</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optimize your inventory with our AI-powered management solution featuring automated forecasting, reordering, and real-time tracking.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">AI-Powered Forecasting</h3>
                    <p className="text-gray-600">Predict demand patterns and optimize stock levels using machine learning algorithms.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Automated Reordering</h3>
                    <p className="text-gray-600">Set up automatic reorder points and supplier integration for seamless restocking.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Real-Time Tracking</h3>
                    <p className="text-gray-600">Monitor inventory levels, movements, and locations in real-time across multiple warehouses.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Barcode & QR Scanning</h3>
                    <p className="text-gray-600">Quick inventory updates using barcode and QR code scanning capabilities.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing</h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Business</h3>
                  <div className="text-4xl font-bold text-blue-600 mt-2">$149/month</div>
                  <p className="text-gray-600">up to 5 warehouses</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Unlimited products</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>AI forecasting</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Automated reordering</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Real-time tracking</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Mobile app access</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryManagerPage;