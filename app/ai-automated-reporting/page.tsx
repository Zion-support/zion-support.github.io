
import React from 'react';
import SEOHead from '../components/SEOHead';

const AiAutomatedReportingPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Automated Reporting - Zion Tech Group"
        description="Automated reporting solutions powered by AI"
        keywords="automated reporting, AI reports, business intelligence, report generation"
      />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Automated Reporting
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Generate comprehensive reports automatically with AI
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Report Generation</h3>
                <p className="text-gray-600">Automatically generate reports from your data</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Custom Templates</h3>
                <p className="text-gray-600">Create custom report templates with AI assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiAutomatedReportingPage;

