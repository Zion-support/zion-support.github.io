import React from 'react';

const AIBusinessIntelligencePlatformPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          AI Business Intelligence Platform
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Data-Driven Insights</h3>
            <p className="text-gray-600 mb-4">
              Transform your business data into actionable insights with our AI-powered BI platform.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Advanced Analytics</h4>
                <p className="text-gray-600 text-sm">Machine learning-powered data analysis</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Interactive Dashboards</h4>
                <p className="text-gray-600 text-sm">Real-time visualization and reporting</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Predictive Modeling</h4>
                <p className="text-gray-600 text-sm">Forecast trends and outcomes</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Natural Language Queries</h4>
                <p className="text-gray-600 text-sm">Ask questions in plain English</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIBusinessIntelligencePlatformPage;