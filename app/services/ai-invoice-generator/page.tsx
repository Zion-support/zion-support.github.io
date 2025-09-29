import React from 'react';

export const metadata = {
  title: 'AI Invoice Generator | Zion Tech Group',
  description: 'Professional AI-powered invoice generation services to streamline your billing process.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Invoice Generator
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Automate your invoicing process with AI-powered invoice generation that 
            creates professional, accurate invoices in seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Automated Invoice Creation
            </h2>
            <p className="text-gray-300 mb-6">
              Our AI analyzes your project data, time tracking, and client information 
              to automatically generate detailed, professional invoices that save you 
              hours of manual work.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Automatic invoice generation from project data
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Smart time tracking and expense calculation
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Customizable templates and branding
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Multi-currency and tax calculation support
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-lg font-semibold text-white">Smart Data Extraction</h4>
                <p className="text-gray-300">Automatically extract billing information from various sources</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-lg font-semibold text-white">Template Customization</h4>
                <p className="text-gray-300">Create branded invoice templates that match your business</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-lg font-semibold text-white">Payment Integration</h4>
                <p className="text-gray-300">Seamless integration with payment processors</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}