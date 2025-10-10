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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"></div>
      <Navigation /></Navigatio>

      <main className="container mx-auto px-4 py-16 pt-24"></mai>
        <div className="max-w-6 xl mx-auto"></div>
          <h1 className="text-4 xl md:text-5 xl font-bold text-white mb-6 neon-text text-center"></h1></<<<h1>AI</h1></<<h1>Analytics</h1> Dashboard<p className="text-xl text-gray-300 text-center mb-12">Get intelligent insights from your data with AI-powered analytics</p>
          </p>

          <div className="cyber-card p-8 mb-8"></div>
            <h2 className="text-2 xl font-bold text-white mb-6"></h2></<<<h2>Live</h2></<<h2>Dashboard</h2> Preview<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"></div>{metrics.map((metric) => (<div
                  key={metric.id}
                  className={`cyber-card p-4 cursor-pointer transition-all duration-300 ${
                    selectedMetric === metric.id ? 'border-cyan-400' : ''
                  }`}
                  onClick={() =>setSelectedMetric(metric.id)}</div>
                ><h3 className="text-sm text-gray-400 mb-2">{metric.name}</h>
                  <div className="text-2 xl font-bold text-white mb-1"></div>{metric.value}<div className="text-sm text-green-400">{metric.change}</div>
                </div>
              ))}
            </div>
            <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center"></div>
              <p className="text-gray-400">Interactive chart would be displayed here</p>
            </div>
          </div>

          <div className="cyber-card p-8 mb-8"></div>
            <h2 className="text-2 xl font-bold text-white mb-6">AI-Powered Features</h>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div className="space-y-4"></div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Predictive analytics</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Anomaly detection</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Automated reporting</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Custom dashboards</spa>
                </div>
              </div>
              <div className="space-y-4"></div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">Real-time monitoring</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">Data visualization</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">Alert system</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">API integrations</spa>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"></div>
            <div className="cyber-card p-6 text-center"></div>
              <h3 className="text-xl font-bold text-white mb-4"></h3></<<<h3>Starter</h3></h3><div className="text-3 xl font-bold text-cyan-400 mb-4">$99/month</div>
              <ul className="text-gray-300 space-y-2"></u>
                <li>5 data sources</li><<<<li>Basic</li></<<li>dashboards</li></li>
                <<<<li>Email</li></<<li>reports</li><<<<li>Email</li></<<li>support</li></li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center border-2 border-cyan-400"></div>
              <h3 className="text-xl font-bold text-white mb-4"></h3></<<<h3>Professional</h3></h3><div className="text-3 xl font-bold text-cyan-400 mb-4">$299/month</div>
              <ul className="text-gray-300 space-y-2"></u>
                <li>20 data sources</li><<<<li>Advanced</li></<<li>analytics</li></li>
                <<<<li>Real</li></li>-time alerts<<<<li>Priority</li></<<li>support</li><<<<li>Custom</li></<<li>metrics</li></li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center"></div>
              <h3 className="text-xl font-bold text-white mb-4"></h3></<<<h3>Enterprise</h3></h3><div className="text-3 xl font-bold text-cyan-400 mb-4">$799/month</div>
              <ul className="text-gray-300 space-y-2"></u>
                <<<<li>Unlimited</li></<<li>data</li> sources<<<<li>AI</li></<<li>predictions</li></li>
                <<<<li>Custom</li></<<li>integrations</li><li>24/7 support</li><<<<li>White</li></li>-label option</li>
              </ul>
            </div>
          </div>

          <div className="text-center"></div>
            <a
              href="tel:+13024640950"
              className="cyber-button mr-4"
            >📞 Call: (302) 464-0950</a><a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >Start Analytics</a>
            </a>
          </div>
        </div>
      </main>

      <Footer /></Foote>
    </div>
  );
};

export default AIAnalyticsDashboard;