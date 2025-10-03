import React from 'react';

const AIInvoiceProcessingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          AI Invoice Processing SaaS
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Automated Invoice Processing</h3>
            <p className="text-gray-600 mb-4">
              Our AI-powered invoice processing solution automates the entire invoice lifecycle, 
              from data extraction to approval workflows.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Automatic data extraction from invoices</li>
              <li>Intelligent approval routing</li>
              <li>Real-time processing status tracking</li>
              <li>Integration with existing ERP systems</li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInvoiceProcessingPage;