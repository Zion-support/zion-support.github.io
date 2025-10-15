import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ZionInventoryManagerProPage() {
  return (
    <>
      <Helmet>
        <title>Zion Inventory Manager Pro - AI-Powered Inventory Management</title>
        <meta name="description" content="Advanced inventory management system with AI-powered demand forecasting, automated reordering, and real-time tracking. Optimize your inventory levels and reduce costs." />
        <meta name="keywords" content="inventory management, inventory tracking, demand forecasting, supply chain, warehouse management, AI inventory" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Zion Inventory Manager Pro
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The most intelligent inventory management system powered by AI. Optimize stock levels, predict demand, and automate reordering to reduce costs and improve efficiency.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Start Free Trial
              </a>
              <a href="/pricing" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View Pricing
              </a>
            </div>
          </div>
          
          {/* Features Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-8">Advanced Inventory Features</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Demand Forecasting</h3>
                    <p className="text-gray-600">Predict future demand with machine learning algorithms that analyze historical data, seasonal patterns, and market trends.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Automated Reordering</h3>
                    <p className="text-gray-600">Set up intelligent reorder points and quantities that automatically trigger purchase orders when inventory levels drop.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Tracking</h3>
                    <p className="text-gray-600">Monitor inventory levels across multiple locations with real-time updates, barcode scanning, and mobile access.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost Optimization</h3>
                    <p className="text-gray-600">Reduce carrying costs and stockouts with intelligent inventory optimization that balances service levels and costs.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-8">Pricing Plans</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">$79/month</div>
                  <ul className="space-y-2 text-gray-600">
                    <li>Up to 1,000 SKUs</li>
                    <li>Basic demand forecasting</li>
                    <li>Manual reordering</li>
                    <li>Basic reporting</li>
                    <li>Email support</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">$199/month</div>
                  <ul className="space-y-2 text-gray-600">
                    <li>Up to 10,000 SKUs</li>
                    <li>Advanced AI forecasting</li>
                    <li>Automated reordering</li>
                    <li>Advanced analytics</li>
                    <li>Priority support</li>
                    <li>Multi-location support</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">$499/month</div>
                  <ul className="space-y-2 text-gray-600">
                    <li>Unlimited SKUs</li>
                    <li>Custom AI models</li>
                    <li>White-label options</li>
                    <li>24/7 support</li>
                    <li>Custom integrations</li>
                    <li>Dedicated account manager</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Reduce Costs by 30%</h3>
                <p className="text-gray-600">Optimize inventory levels to minimize carrying costs while maintaining service levels.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Improve Accuracy by 95%</h3>
                <p className="text-gray-600">Real-time tracking and automated updates ensure accurate inventory counts and reporting.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Increase Efficiency by 50%</h3>
                <p className="text-gray-600">Automate routine tasks and optimize workflows to improve overall operational efficiency.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Save 15 Hours/Week</h3>
                <p className="text-gray-600">Automate inventory management tasks to free up time for strategic planning and growth.</p>
              </div>
            </div>
          </div>
          
          {/* Integration Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Seamless Integrations</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-semibold">Shopify</span>
                </div>
                <p className="text-sm text-gray-600">E-commerce</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-semibold">WooCommerce</span>
                </div>
                <p className="text-sm text-gray-600">E-commerce</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-semibold">QuickBooks</span>
                </div>
                <p className="text-sm text-gray-600">Accounting</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-semibold">SAP</span>
                </div>
                <p className="text-sm text-gray-600">ERP</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-semibold">Oracle</span>
                </div>
                <p className="text-sm text-gray-600">Database</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-semibold">Zapier</span>
                </div>
                <p className="text-sm text-gray-600">Automation</p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-semibold mb-4">Ready to Optimize Your Inventory?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of businesses using our AI-powered inventory management to reduce costs and improve efficiency.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Start Free Trial
              </a>
              <a href="/contact" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}