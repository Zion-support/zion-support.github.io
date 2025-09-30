import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Supply Chain Optimization: 60% Cost Reduction Case Study | Zion Tech Group',
  description: 'See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement with AI supply chain optimization, saving $12M annually.',
  keywords: 'AI supply chain optimization, supply chain AI, manufacturing AI, cost reduction, efficiency improvement',
};

export default function AISupplyChainOptimization2025() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
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
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          A global manufacturing leader achieved unprecedented results with AI-powered supply chain optimization, 
          reducing costs by 60% and improving efficiency by 90% while saving $12M annually.
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>Published: January 20, 2025</span>
          <span>•</span>
          <span>Industry: Manufacturing</span>
        </div>
      </div>

      <article className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 mb-8 border border-green-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            A Fortune 500 manufacturing company partnered with Zion Tech Group to implement AI-driven supply chain optimization. 
            The results exceeded all expectations, achieving 60% cost reduction, 90% efficiency improvement, and $12M in annual savings 
            within 8 months of implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">60%</div>
            <div className="text-gray-600">Cost Reduction</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
            <div className="text-gray-600">Efficiency Improvement</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">$12M</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Background</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our client is a global manufacturing leader with operations across 15 countries, producing automotive components 
          for major OEMs. With annual revenues exceeding $2B, the company faced significant supply chain challenges including:
        </p>

        <div className="bg-red-50 rounded-lg p-6 mb-8 border border-red-200">
          <h3 className="text-lg font-semibold text-red-900 mb-3">Key Challenges:</h3>
          <ul className="space-y-2 text-red-800">
            <li>• Manual demand forecasting leading to 30% inventory inaccuracy</li>
            <li>• Reactive supply chain management causing frequent stockouts</li>
            <li>• High logistics costs due to inefficient routing and scheduling</li>
            <li>• Limited visibility into supplier performance and risk factors</li>
            <li>• Complex multi-tier supply chain with 500+ suppliers</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Solution Implementation</h2>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 1: Data Integration & Infrastructure</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          We began by integrating data from multiple sources including ERP systems, supplier databases, 
          IoT sensors, and external market data to create a comprehensive supply chain data lake.
        </p>

        <div className="bg-blue-50 rounded-lg p-6 mb-6 border border-blue-200">
          <h4 className="text-lg font-semibold text-blue-900 mb-3">Data Sources Integrated:</h4>
          <ul className="space-y-2 text-blue-800">
            <li>• ERP systems (SAP, Oracle)</li>
            <li>• Warehouse management systems</li>
            <li>• IoT sensors and RFID tags</li>
            <li>• Supplier performance databases</li>
            <li>• Market and weather data APIs</li>
            <li>• Transportation and logistics systems</li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 2: AI Model Development</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our AI team developed specialized machine learning models for different aspects of supply chain optimization.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-2 text-left">AI Model</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Accuracy Improvement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Demand Forecasting</td>
                <td className="border border-gray-300 px-4 py-2">Predict future demand patterns</td>
                <td className="border border-gray-300 px-4 py-2">85% → 95%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Inventory Optimization</td>
                <td className="border border-gray-300 px-4 py-2">Optimize stock levels across locations</td>
                <td className="border border-gray-300 px-4 py-2">30% → 92%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Supplier Risk Assessment</td>
                <td className="border border-gray-300 px-4 py-2">Predict supplier reliability</td>
                <td className="border border-gray-300 px-4 py-2">60% → 94%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Route Optimization</td>
                <td className="border border-gray-300 px-4 py-2">Minimize transportation costs</td>
                <td className="border border-gray-300 px-4 py-2">25% → 45%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 3: Real-Time Optimization Engine</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          We implemented a real-time optimization engine that continuously adjusts supply chain parameters 
          based on changing conditions and market dynamics.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Operational Improvements</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </span>
                <span>85% improvement in inventory optimization</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </span>
                <span>45% faster delivery times</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </span>
                <span>92% forecast accuracy</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </span>
                <span>90% overall efficiency gain</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Impact</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">$</span>
                </span>
                <span>$12M annual cost savings</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">$</span>
                </span>
                <span>60% reduction in supply chain costs</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">$</span>
                </span>
                <span>$8M reduction in inventory carrying costs</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">$</span>
                </span>
                <span>$4M savings in logistics optimization</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Success Factors</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Several factors contributed to the exceptional success of this AI implementation:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Executive Sponsorship</h4>
              <p className="text-gray-700 text-sm">Strong leadership support ensured adequate resources and organizational alignment.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Data Quality</h4>
              <p className="text-gray-700 text-sm">Comprehensive data integration and quality assurance processes.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Change Management</h4>
              <p className="text-gray-700 text-sm">Effective training and adoption programs for all stakeholders.</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Phased Implementation</h4>
              <p className="text-gray-700 text-sm">Gradual rollout minimized disruption and allowed for continuous optimization.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Performance Monitoring</h4>
              <p className="text-gray-700 text-sm">Real-time monitoring and continuous improvement processes.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Vendor Partnership</h4>
              <p className="text-gray-700 text-sm">Collaborative approach with suppliers and logistics partners.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">Lessons Learned</h2>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-8 border border-blue-200">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Key Insights for Future Implementations</h3>
          <ul className="space-y-3 text-blue-800">
            <li>• Start with high-impact, low-complexity use cases to build momentum</li>
            <li>• Invest heavily in data quality and integration infrastructure</li>
            <li>• Ensure strong change management and user adoption programs</li>
            <li>• Implement continuous monitoring and optimization processes</li>
            <li>• Foster collaborative relationships with all supply chain partners</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">Future Roadmap</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Building on this success, the client is expanding AI implementation to additional areas including 
          predictive maintenance, quality control, and customer demand optimization.
        </p>

        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Supply Chain?</h3>
          <p className="text-green-100 mb-6 leading-relaxed">
            Achieve similar results with our proven AI supply chain optimization framework. 
            Our experts can help you reduce costs, improve efficiency, and gain competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Get Supply Chain Audit
            </Link>
            <Link
              href="/services/supply-chain-optimization"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center"
            >
              Explore Services
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex items-center justify-between">
            <Link
              href="/case-studies"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              ← Back to All Case Studies
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-sm">Share this case study:</span>
              <div className="flex gap-2">
                <button className="text-gray-400 hover:text-blue-600 transition-colors">Twitter</button>
                <button className="text-gray-400 hover:text-blue-600 transition-colors">LinkedIn</button>
                <button className="text-gray-400 hover:text-blue-600 transition-colors">Email</button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}