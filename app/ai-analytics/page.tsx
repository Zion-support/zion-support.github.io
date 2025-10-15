
import React from 'react';
import SEOHead from '../components/SEOHead';

const AiAnalyticsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Analytics - Zion Tech Group"
        description="Advanced AI-powered analytics solutions"
        keywords="AI analytics, data analysis, business intelligence, machine learning"
      />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Analytics
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Unlock insights from your data with AI-powered analytics
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Data Processing</h3>
                <p className="text-gray-600">Process large datasets with AI algorithms</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Pattern Recognition</h3>
                <p className="text-gray-600">Identify patterns and trends in your data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiAnalyticsPage;

