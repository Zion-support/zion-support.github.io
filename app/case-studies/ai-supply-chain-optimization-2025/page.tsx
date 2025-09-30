import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain | Zion Tech Group',
  description: 'See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually with AI supply chain optimization.',
  keywords: 'AI supply chain optimization, supply chain AI, manufacturing AI, cost reduction, efficiency improvement',
};

export default function AISupplyChainOptimization2025() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/case-studies" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Back to Case Studies
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
              Success Story
            </span>
            <span className="text-gray-500 text-sm">Manufacturing</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually with AI supply chain optimization.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Client Overview</h2>
          <p>
            <strong>Industry:</strong> Global Manufacturing<br/>
            <strong>Company Size:</strong> 50,000+ employees<br/>
            <strong>Challenge:</strong> Inefficient supply chain operations with high costs and delays<br/>
            <strong>Solution:</strong> AI-powered supply chain optimization platform
          </p>

          <h2>The Challenge</h2>
          <p>
            The client faced significant challenges in their supply chain operations:
          </p>
          <ul>
            <li>High inventory carrying costs due to overstocking</li>
            <li>Frequent stockouts leading to production delays</li>
            <li>Inefficient supplier management and procurement processes</li>
            <li>Lack of real-time visibility into supply chain performance</li>
            <li>Manual demand forecasting with low accuracy</li>
          </ul>

          <h2>Our Solution</h2>
          <p>
            We implemented a comprehensive AI-powered supply chain optimization platform that included:
          </p>
          <ul>
            <li>Predictive demand forecasting using machine learning</li>
            <li>Dynamic inventory optimization algorithms</li>
            <li>Automated supplier performance monitoring</li>
            <li>Real-time supply chain visibility dashboard</li>
            <li>Intelligent procurement recommendations</li>
          </ul>

          <h2>Results Achieved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-2">60%</h3>
              <p className="text-green-700">Cost Reduction</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">90%</h3>
              <p className="text-blue-700">Efficiency Improvement</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-800 mb-2">$12M</h3>
              <p className="text-purple-700">Annual Savings</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-800 mb-2">95%</h3>
              <p className="text-orange-700">Forecast Accuracy</p>
            </div>
          </div>

          <h2>Implementation Timeline</h2>
          <ul>
            <li><strong>Month 1-2:</strong> Assessment and data collection</li>
            <li><strong>Month 3-4:</strong> Platform development and testing</li>
            <li><strong>Month 5-6:</strong> Pilot implementation in select facilities</li>
            <li><strong>Month 7-8:</strong> Full deployment across all locations</li>
            <li><strong>Month 9-12:</strong> Optimization and continuous improvement</li>
          </ul>

          <h2>Key Technologies Used</h2>
          <ul>
            <li>Machine Learning for demand forecasting</li>
            <li>Optimization algorithms for inventory management</li>
            <li>Real-time data processing and analytics</li>
            <li>Cloud-based infrastructure for scalability</li>
            <li>API integrations with existing ERP systems</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-bold mb-4">Ready to Optimize Your Supply Chain?</h3>
            <p className="mb-4">
              Discover how AI can transform your supply chain operations and deliver significant cost savings and efficiency improvements.
            </p>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Supply Chain Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}