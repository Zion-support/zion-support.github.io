import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const AdvancedAnalytics2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Advanced Analytics 2025
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Powerful analytics solutions for data-driven decision making
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-4">Data Visualization</h3>
            <p className="text-gray-600">Advanced data visualization and reporting</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-4">Predictive Analytics</h3>
            <p className="text-gray-600">AI-powered predictive modeling and forecasting</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-2xl font-bold mb-4">Business Intelligence</h3>
            <p className="text-gray-600">Comprehensive business intelligence solutions</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdvancedAnalytics2025;