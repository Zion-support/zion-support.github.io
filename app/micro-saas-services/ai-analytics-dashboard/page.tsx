'use client';
import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AIAnalyticsDashboard: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState('revenue');

  const metrics = [
    { id: 'revenue', name: 'Revenue', value: '$125,430', change: '+12.5%' },
    { id: 'users', name: 'Active Users', value: '8,432', change: '+8.2%' },
    { id: 'conversion', name: 'Conversion Rate', value: '3.24%', change: '+0.8%' },
    { id: 'engagement', name: 'Engagement', value: '67.8%', change: '+5.1%' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center">
            AI Analytics Dashboard
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12">
            Get intelligent insights from your data with AI-powered analytics
          </p>

          <div className="cyber-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Live Dashboard Preview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {metrics.map((metric) => (
                <div
                  key={metric.id}
                  className={`cyber-card p-4 cursor-pointer transition-all duration-300 ${
                    selectedMetric === metric.id ? 'border-cyan-400' : ''
                  }`}
                  onClick={() => setSelectedMetric(metric.id)}
                >
                  <h3 className="text-sm text-gray-400 mb-2">{metric.name}</h3>
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-green-400">{metric.change}</div>
                </div>
              ))}
            </div>
            <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Interactive chart would be displayed here</p>
            </div>
          </div>

          <div className="cyber-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">AI-Powered Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Predictive analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Anomaly detection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Automated reporting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Custom dashboards</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">Real-time monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">Data visualization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">Alert system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">API integrations</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="cyber-card p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Starter</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$99/month</div>
              <ul className="text-gray-300 space-y-2">
                <li>5 data sources</li>
                <li>Basic dashboards</li>
                <li>Email reports</li>
                <li>Email support</li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center border-2 border-cyan-400">
              <h3 className="text-xl font-bold text-white mb-4">Professional</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$299/month</div>
              <ul className="text-gray-300 space-y-2">
                <li>20 data sources</li>
                <li>Advanced analytics</li>
                <li>Real-time alerts</li>
                <li>Priority support</li>
                <li>Custom metrics</li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$799/month</div>
              <ul className="text-gray-300 space-y-2">
                <li>Unlimited data sources</li>
                <li>AI predictions</li>
                <li>Custom integrations</li>
                <li>24/7 support</li>
                <li>White-label option</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a
              href="tel:+13024640950"
              className="cyber-button mr-4"
            >
              📞 Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Start Analytics
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIAnalyticsDashboard;