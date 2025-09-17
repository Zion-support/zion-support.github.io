import React from 'react';

const AdvancedAnalytics2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Advanced Analytics 2025
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlock the power of data with advanced analytics solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-cyan-800/50 to-blue-800/50 rounded-xl p-6 backdrop-blur-sm border border-cyan-400/20">
            <h3 className="text-2xl font-bold mb-4 text-cyan-300">Predictive Analytics</h3>
            <p className="text-gray-300 mb-4">
              Forecast future trends and behaviors with machine learning
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Customer behavior prediction</li>
              <li>• Market trend analysis</li>
              <li>• Risk assessment</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-800/50 to-indigo-800/50 rounded-xl p-6 backdrop-blur-sm border border-blue-400/20">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Real-time Analytics</h3>
            <p className="text-gray-300 mb-4">
              Process and analyze data in real-time for instant insights
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Live dashboards</li>
              <li>• Stream processing</li>
              <li>• Instant alerts</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 rounded-xl p-6 backdrop-blur-sm border border-indigo-400/20">
            <h3 className="text-2xl font-bold mb-4 text-indigo-300">Business Intelligence</h3>
            <p className="text-gray-300 mb-4">
              Transform raw data into actionable business insights
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Data visualization</li>
              <li>• KPI tracking</li>
              <li>• Performance metrics</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Explore Analytics
          </button>
        </div>
      </div>
    </div>
  );
};

