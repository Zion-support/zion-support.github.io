import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

const AIBusinessIntelligence: React.FC = () => {
  const benefits = [
    "Improve customer retention by 20-35% with predictive analytics",
    "Accelerate decision-making by 60% with real-time data",
    "Reduce manual reporting time by 80% with automation",
    "Achieve 99.9% data accuracy with AI-powered validation"
  ];

  return (
    <Layout>
      <Head>
        <title>AI Business Intelligence - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered business intelligence solutions" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Business Intelligence</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business data into actionable insights with our advanced AI-powered intelligence platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Predictive Analytics</h3>
            <p className="text-gray-600 mb-4">
              Forecast future trends and outcomes with advanced machine learning algorithms.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Sales forecasting</li>
              <li>• Customer behavior prediction</li>
              <li>• Risk assessment</li>
              <li>• Market trend analysis</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Real-time Dashboards</h3>
            <p className="text-gray-600 mb-4">
              Monitor your business performance with live, interactive dashboards.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Live data updates</li>
              <li>• Custom metrics</li>
              <li>• Interactive visualizations</li>
              <li>• Mobile access</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Automated Reporting</h3>
            <p className="text-gray-600 mb-4">
              Generate comprehensive reports automatically with AI-powered insights.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Scheduled reports</li>
              <li>• Custom templates</li>
              <li>• Executive summaries</li>
              <li>• Data visualization</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Unlock Your Data's Potential</h2>
          <p className="text-lg text-gray-700 mb-6">
            Transform your business with AI-powered intelligence and data-driven decision making.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Get Started
            </a>
            <a href="/about" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
              Learn More
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AIBusinessIntelligence;