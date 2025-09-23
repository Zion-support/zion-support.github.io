import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025TransformationDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [metrics, setMetrics] = useState({
    roi: 0,
    efficiency: 0,
    automation: 0,
    satisfaction: 0
  });

  useEffect(() => {
    // Animate metrics on load
    const animateMetrics = () => {
      setMetrics({
        roi: 50000,
        efficiency: 95,
        automation: 87,
        satisfaction: 98
      });
    };
    
    const timer = setTimeout(animateMetrics, 500);
    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'roi', label: 'ROI Analysis', icon: '💰' },
    { id: 'automation', label: 'Automation', icon: '🤖' },
    { id: 'insights', label: 'Insights', icon: '💡' }
  ];

  const roiData = [
    { month: 'Jan', value: 12000, target: 10000 },
    { month: 'Feb', value: 18500, target: 15000 },
    { month: 'Mar', value: 25000, target: 20000 },
    { month: 'Apr', value: 32000, target: 25000 },
    { month: 'May', value: 41000, target: 30000 },
    { month: 'Jun', value: 50000, target: 35000 }
  ];

  const automationStats = [
    { process: 'Customer Service', automation: 95, efficiency: 98 },
    { process: 'Data Processing', automation: 87, efficiency: 92 },
    { process: 'Content Generation', automation: 92, efficiency: 96 },
    { process: 'Analytics', automation: 89, efficiency: 94 },
    { process: 'Reporting', automation: 96, efficiency: 99 }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">🚀</div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">AI 2025 Transformation Dashboard</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Real-time insights into your AI transformation journey. Monitor performance, 
          track ROI, and optimize your AI implementation for maximum impact.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 m-1 ${
              activeTab === tab.id
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="text-xl">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl">
              <div className="text-3xl font-bold mb-2">{metrics.roi.toLocaleString()}%</div>
              <div className="text-green-100">ROI Increase</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl">
              <div className="text-3xl font-bold mb-2">{metrics.efficiency}%</div>
              <div className="text-blue-100">Efficiency Gain</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl">
              <div className="text-3xl font-bold mb-2">{metrics.automation}%</div>
              <div className="text-purple-100">Process Automation</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-xl">
              <div className="text-3xl font-bold mb-2">{metrics.satisfaction}%</div>
              <div className="text-orange-100">Customer Satisfaction</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/contact"
                className="bg-purple-600 text-white p-4 rounded-lg text-center font-semibold hover:bg-purple-700 transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/case-studies"
                className="bg-blue-600 text-white p-4 rounded-lg text-center font-semibold hover:bg-blue-700 transition-colors"
              >
                View Case Studies
              </Link>
              <Link
                href="/resources"
                className="bg-green-600 text-white p-4 rounded-lg text-center font-semibold hover:bg-green-700 transition-colors"
              >
                Download Resources
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ROI Analysis Tab */}
      {activeTab === 'roi' && (
        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">ROI Performance</h3>
            <div className="space-y-4">
              {roiData.map((data, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 text-sm font-semibold text-gray-600">{data.month}</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-4 relative">
                      <div
                        className="bg-green-500 h-4 rounded-full relative"
                        style={{ width: `${Math.min((data.value / data.target) * 100, 100)}%` }}
                      >
                        <div className="absolute right-0 top-0 text-xs text-white font-bold px-2">
                          ${data.value.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    Target: ${data.target.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Total Investment</h4>
              <div className="text-3xl font-bold text-blue-600 mb-2">$2.5M</div>
              <div className="text-gray-600">Initial AI implementation</div>
            </div>
            <div className="bg-green-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Total Returns</h4>
              <div className="text-3xl font-bold text-green-600 mb-2">$125M</div>
              <div className="text-gray-600">Generated revenue</div>
            </div>
          </div>
        </div>
      )}

      {/* Automation Tab */}
      {activeTab === 'automation' && (
        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Process Automation Status</h3>
            <div className="space-y-4">
              {automationStats.map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-gray-900">{stat.process}</h4>
                    <div className="text-sm text-gray-600">
                      {stat.automation}% automated
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-purple-500 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${stat.automation}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Efficiency: {stat.efficiency}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Insights Tab */}
      {activeTab === 'insights' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-4">Top Performing AI Model</h4>
              <div className="text-2xl font-bold mb-2">GPT-4 Advanced</div>
              <div className="text-purple-100">98% accuracy rate</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-4">Most Automated Process</h4>
              <div className="text-2xl font-bold mb-2">Customer Support</div>
              <div className="text-blue-100">95% automation rate</div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Insights & Recommendations</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-gray-900 mb-2">✅ High Impact Opportunity</h4>
                <p className="text-gray-600">
                  Your content generation process could benefit from advanced AI models. 
                  Potential ROI increase: 40-60%.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-gray-900 mb-2">📈 Optimization Suggestion</h4>
                <p className="text-gray-600">
                  Consider implementing real-time analytics for better decision making. 
                  Expected efficiency gain: 25-35%.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-semibold text-gray-900 mb-2">⚠️ Attention Required</h4>
                <p className="text-gray-600">
                  Data quality in your customer database needs improvement. 
                  This could increase AI accuracy by 15-20%.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-6 opacity-90">
            Get personalized AI recommendations and start your transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Get Started Now
            </Link>
            <Link
              href="/demo"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025TransformationDashboard;