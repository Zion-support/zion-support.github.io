import React from 'react';
import { Helmet } from 'react-helmet-async';

const DataLakeSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Data Lake Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive data lake solutions for big data storage, analytics, and processing. Scalable data architecture with advanced analytics and machine learning capabilities." />
        <meta name="keywords" content="data lake, big data, data analytics, data storage, data processing, data architecture" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Data Lake Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock the power of your data with comprehensive data lake solutions. 
              Store, process, and analyze big data with scalable architecture and advanced analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Scalable Data Architecture
              </h2>
              <p className="text-gray-300 mb-6">
                Our data lake solutions provide a centralized repository for all your 
                structured and unstructured data. Built for scale, performance, and 
                advanced analytics with machine learning capabilities.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  Multi-format data storage
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  Real-time data processing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  Advanced analytics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  Machine learning integration
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Data Lake Metrics</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">10PB+</div>
                    <div className="text-sm text-gray-300">Data Storage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">99.9%</div>
                    <div className="text-sm text-gray-300">Availability</div>
                  </div>
                </div>
                <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  View Analytics
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Data Ingestion</h3>
              <p className="text-gray-300">
                Automated data ingestion from multiple sources with real-time processing.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Data Processing</h3>
              <p className="text-gray-300">
                Advanced data processing with Apache Spark, Hadoop, and custom solutions.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Analytics & ML</h3>
              <p className="text-gray-300">
                Built-in analytics and machine learning capabilities for data insights.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Transform Your Data Strategy
            </h2>
            <p className="text-gray-300 mb-8">
              Build a robust data lake foundation for your analytics and AI initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Design Data Lake
              </button>
              <button className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataLakeSolutionsPage;