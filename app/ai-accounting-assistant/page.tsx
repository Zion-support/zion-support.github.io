
import React from 'react';
import SEOHead from '../components/SEOHead';

const AiAccountingAssistantPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Accounting Assistant - Zion Tech Group"
        description="Intelligent accounting solutions powered by AI"
        keywords="AI accounting, automated bookkeeping, financial management, accounting software"
      />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Accounting Assistant
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Streamline your accounting with AI-powered automation
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Automated Bookkeeping</h3>
                <p className="text-gray-600">AI-powered transaction categorization and reconciliation</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Financial Reporting</h3>
                <p className="text-gray-600">Generate comprehensive financial reports automatically</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiAccountingAssistantPage;

