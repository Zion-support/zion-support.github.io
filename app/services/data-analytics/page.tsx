import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = { 
  title: 'Data Analytics Solutions | Zion Tech Group',
  description: 'Advanced data analytics solutions including business intelligence, data visualization, predictive analytics, and data engineering. Turn data into actionable insights.'
};

export default function DataAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Data Analytics Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced data analytics solutions to transform your data into actionable business insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Business Intelligence</h3>
            <p className="text-gray-300">
              Comprehensive BI solutions to analyze and visualize your business data effectively.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Predictive Analytics</h3>
            <p className="text-gray-300">
              Leverage machine learning to predict trends and make data-driven decisions.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Data Engineering</h3>
            <p className="text-gray-300">
              Build robust data pipelines and infrastructure for scalable analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}