
import React from 'react';
import SEOHead from '../components/SEOHead';

const AiAnalyticsDashboardPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Analytics Dashboard - Zion Tech Group"
        description="Comprehensive analytics dashboard with AI insights"
        keywords="analytics dashboard, business intelligence, data visualization, AI insights"
      />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Analytics Dashboard
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive analytics with AI-powered insights
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Real-time Analytics</h3>
                <p className="text-gray-600">Monitor your business metrics in real-time</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">AI Insights</h3>
                <p className="text-gray-600">Get intelligent recommendations and predictions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiAnalyticsDashboardPage;

