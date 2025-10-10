'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const MicroSaasAnalyticsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Analytics - Zion Tech Group</title>
        <meta name="description" content="Business intelligence micro SaaS solution. Get actionable insights from your data with AI-powered analytics and reporting." />
        <meta name="keywords" content="micro SaaS analytics, business intelligence, data analytics, reporting, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Analytics
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your data into actionable insights with our intelligent analytics platform. 
              Make data-driven decisions with AI-powered reporting and visualization tools.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20">
              <h2 className="text-2xl font-semibold text-orange-400 mb-4">AI-Powered Insights</h2>
              <p className="text-gray-300 mb-6">
                Leverage machine learning algorithms to uncover hidden patterns and trends in your data, 
                providing predictive analytics and intelligent recommendations.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Predictive analytics and forecasting</li>
                <li>• Automated anomaly detection</li>
                <li>• Smart data visualization</li>
                <li>• Custom report generation</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
              <h2 className="text-2xl font-semibold text-green-400 mb-4">Real-Time Dashboards</h2>
              <p className="text-gray-300 mb-6">
                Monitor your key performance indicators with interactive, real-time dashboards 
                that update automatically and provide instant insights.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Interactive data visualization</li>
                <li>• Real-time KPI monitoring</li>
                <li>• Customizable dashboard layouts</li>
                <li>• Mobile-responsive design</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-orange-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-green-700 transition-all duration-300">
              Start Analyzing Your Data
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaasAnalyticsPage;