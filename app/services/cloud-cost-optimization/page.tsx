// import React from 'react';
import { Helmet } from 'react-helmet-async';

const CloudCostOptimizationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Cost Optimization | Zion Tech Group</title>
        <meta name="description" content="Professional cloud cost optimization services. Reduce AWS, Azure, and GCP costs by up to 60% with our automated FinOps solutions and expert analysis." />
        <meta name="keywords" content="cloud cost optimization, FinOps, AWS cost reduction, Azure optimization, cloud savings" />
        <link rel="canonical" href="https://ziontechgroup.com/services/cloud-cost-optimization" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Cloud Cost Optimization
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Reduce your cloud costs by up to 60% with our professional FinOps services. 
              Automated optimization, expert analysis, and continuous monitoring for AWS, Azure, and GCP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                📞 Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                ✉️ Free Cost Analysis
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Comprehensive Cost Optimization
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold mb-3">Cost Analysis</h3>
                <p className="text-gray-600">
                  Deep analysis of your cloud spending patterns and identification of optimization opportunities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-3">Automated Optimization</h3>
                <p className="text-gray-600">
                  AI-powered tools that automatically optimize resources and reduce costs continuously.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-3">Real-time Monitoring</h3>
                <p className="text-gray-600">
                  Monitor cloud costs in real-time with detailed dashboards and cost alerts.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">Right-sizing</h3>
                <p className="text-gray-600">
                  Optimize instance sizes and resource allocation based on actual usage patterns.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">💾</div>
                <h3 className="text-xl font-semibold mb-3">Storage Optimization</h3>
                <p className="text-gray-600">
                  Optimize storage costs with intelligent tiering and lifecycle management.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-semibold mb-3">Savings Tracking</h3>
                <p className="text-gray-600">
                  Track and report on cost savings with detailed ROI analysis and recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Optimization Service Plans
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Basic Analysis</h3>
                <div className="text-4xl font-bold text-indigo-600 mb-6">$2,500<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li>✓ Monthly cost analysis</li>
                  <li>✓ Basic optimization recommendations</li>
                  <li>✓ Cost tracking dashboard</li>
                  <li>✓ Email support</li>
                </ul>
                <a href="mailto:kleber@ziontechgroup.com" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-indigo-700 transition-colors">
                  Start Saving
                </a>
              </div>
              <div className="bg-indigo-600 p-8 rounded-xl text-white relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-semibold mb-4">Automated Optimization</h3>
                <div className="text-4xl font-bold mb-6">$5,000<span className="text-lg opacity-80">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li>✓ Automated cost optimization</li>
                  <li>✓ Real-time monitoring</li>
                  <li>✓ Advanced analytics</li>
                  <li>✓ Priority support</li>
                  <li>✓ Custom recommendations</li>
                </ul>
                <a href="mailto:kleber@ziontechgroup.com" className="w-full bg-white text-indigo-600 py-3 rounded-lg font-semibold text-center block hover:bg-gray-100 transition-colors">
                  Start Saving
                </a>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Enterprise FinOps</h3>
                <div className="text-4xl font-bold text-indigo-600 mb-6">Custom</div>
                <ul className="space-y-3 mb-8">
                  <li>✓ Dedicated FinOps team</li>
                  <li>✓ Custom optimization strategies</li>
                  <li>✓ Multi-cloud optimization</li>
                  <li>✓ White-label solution</li>
                  <li>✓ 24/7 support</li>
                </ul>
                <a href="tel:+13024640950" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-indigo-700 transition-colors">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Maximize Your Cloud ROI
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Significant Cost Savings</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-3">✓</span>
                    <span>Reduce cloud costs by up to 60%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-3">✓</span>
                    <span>Eliminate wasted resources and unused instances</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-3">✓</span>
                    <span>Optimize storage costs with intelligent tiering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-3">✓</span>
                    <span>Improve resource utilization efficiency</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-xl text-white">
                <h4 className="text-xl font-semibold mb-4">Average Savings</h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold">60%</div>
                    <div className="text-sm opacity-80">Cost reduction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">$50K+</div>
                    <div className="text-sm opacity-80">Annual savings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">300%</div>
                    <div className="text-sm opacity-80">ROI improvement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Start Saving on Cloud Costs Today</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our FinOps experts for a free cost analysis and discover how much you can save on your cloud infrastructure.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">📞 Phone</h3>
                <a href="tel:+13024640950" className="text-indigo-400 hover:text-indigo-300">
                  +1 302 464 0950
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">✉️ Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-indigo-400 hover:text-indigo-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">📍 Address</h3>
                <div className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudCostOptimizationPage;