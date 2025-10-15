import React from 'react';
import { Helmet } from 'react-helmet-async';

const DataEngineeringPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Data Engineering & ETL Services - Zion Tech Group</title>
        <meta name="description" content="Complete data engineering solutions including ETL pipelines, data warehousing, real-time processing, and analytics infrastructure." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Data Engineering & ETL Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build robust data infrastructure with complete data engineering solutions and ETL pipelines
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• ETL Pipeline Development</li>
                <li>• Data Warehousing</li>
                <li>• Real-time Processing</li>
                <li>• Data Lake Architecture</li>
                <li>• Data Quality Management</li>
                <li>• Stream Processing</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pricing</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">$2,500 - $35,000/month</div>
              <p className="text-gray-600">Flexible pricing based on data volume and processing requirements</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataEngineeringPage;