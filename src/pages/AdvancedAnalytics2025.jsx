import React from 'react';

const AdvancedAnalytics2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Advanced Analytics 2025</h1>
          <p className="text-xl text-gray-700">
            Advanced analytics solutions for data-driven decision making
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">📈</div>
            <h2 className="text-2xl font-bold mb-4">Predictive Analytics</h2>
            <p className="text-gray-600">
              Predictive analytics for forecasting and trend analysis.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold mb-4">Data Mining</h2>
            <p className="text-gray-600">
              Advanced data mining and pattern recognition.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">📊</div>
            <h2 className="text-2xl font-bold mb-4">Business Intelligence</h2>
            <p className="text-gray-600">
              Comprehensive business intelligence solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnalytics2025;