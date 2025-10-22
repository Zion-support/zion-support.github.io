import React from 'react';
import { Helmet } from 'react-helmet-async';

const DataAnalyticsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our advanced analytics solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Data Analytics</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your data into actionable insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Visualization</h3>
              <p className="text-gray-600">
                Create interactive dashboards and visualizations to understand your data better.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Predictive Analytics</h3>
              <p className="text-gray-600">
                Use machine learning to predict future trends and make data-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataAnalyticsPage;
