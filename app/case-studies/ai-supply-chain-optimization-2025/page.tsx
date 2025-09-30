import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain | Zion Tech Group',
  description: 'See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually with AI supply chain optimization.',
  keywords: 'AI supply chain optimization, supply chain AI, manufacturing AI, cost reduction, efficiency improvement, case study',
};

export default function AISupplyChainOptimization2025() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                Manufacturing Success
              </span>
              <span className="text-gray-500 text-sm">January 20, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, 
              saving $12M annually with our AI-powered supply chain optimization solution.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
              <p className="text-gray-700 leading-relaxed">
                A global manufacturing company with operations across 15 countries was struggling with 
                complex supply chain inefficiencies, high inventory costs, and unpredictable demand patterns. 
                With over 10,000 suppliers and 50,000 SKUs, manual planning processes were no longer sustainable.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">$20M</div>
                <div className="text-sm text-red-700">Annual Inventory Costs</div>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">35%</div>
                <div className="text-sm text-orange-700">Forecast Accuracy</div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">45%</div>
                <div className="text-sm text-yellow-700">Stockout Rate</div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our AI Solution</h2>
            
            <div className="space-y-8 mb-12">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🤖 AI Demand Forecasting</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Implemented advanced machine learning models that analyze historical data, market trends, 
                  seasonality, and external factors to predict demand with 95% accuracy across all product lines.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <div className="text-2xl font-bold text-blue-600">95%</div>
                    <div className="text-sm text-gray-600">Forecast Accuracy</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <div className="text-2xl font-bold text-cyan-600">6mo</div>
                    <div className="text-sm text-gray-600">Forecast Horizon</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">⚡ Intelligent Inventory Optimization</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Deployed AI algorithms that continuously optimize inventory levels, reducing carrying costs 
                  while maintaining 99.5% service levels across all distribution centers.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-purple-200">
                    <div className="text-2xl font-bold text-purple-600">60%</div>
                    <div className="text-sm text-gray-600">Inventory Reduction</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-purple-200">
                    <div className="text-2xl font-bold text-pink-600">99.5%</div>
                    <div className="text-sm text-gray-600">Service Level</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-purple-200">
                    <div className="text-2xl font-bold text-rose-600">$8M</div>
                    <div className="text-sm text-gray-600">Cost Savings</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🚚 Dynamic Route Optimization</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  AI-powered logistics optimization that considers real-time traffic, weather, fuel costs, 
                  and delivery windows to minimize transportation costs and improve delivery performance.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <div className="text-2xl font-bold text-green-600">25%</div>
                    <div className="text-sm text-gray-600">Transportation Cost Reduction</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <div className="text-2xl font-bold text-teal-600">40%</div>
                    <div className="text-sm text-gray-600">Delivery Time Improvement</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <div className="text-2xl font-bold text-emerald-600">$3M</div>
                    <div className="text-sm text-gray-600">Annual Savings</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🛡️ Risk Management & Resilience</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Advanced AI risk assessment that identifies potential supply chain disruptions, 
                  recommends alternative suppliers, and automatically adjusts plans to maintain continuity.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-orange-200">
                    <div className="text-2xl font-bold text-orange-600">90%</div>
                    <div className="text-sm text-gray-600">Risk Detection Accuracy</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-orange-200">
                    <div className="text-2xl font-bold text-red-600">$1M</div>
                    <div className="text-sm text-gray-600">Disruption Cost Avoidance</div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Transformation Results</h2>
            
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Performance Improvements</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">60%</div>
                  <div className="text-sm text-gray-600 mb-1">Cost Reduction</div>
                  <div className="text-xs text-gray-500">Overall supply chain costs</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">90%</div>
                  <div className="text-sm text-gray-600 mb-1">Efficiency Gain</div>
                  <div className="text-xs text-gray-500">Operational efficiency improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-600 mb-2">$12M</div>
                  <div className="text-sm text-gray-600 mb-1">Annual Savings</div>
                  <div className="text-xs text-gray-500">Total cost savings achieved</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-600 mb-2">95%</div>
                  <div className="text-sm text-gray-600 mb-1">Forecast Accuracy</div>
                  <div className="text-xs text-gray-500">Demand prediction accuracy</div>
                </div>
              </div>
            </div>

            <div className="space-y-6 mb-12">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Before vs After Comparison</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-4 text-red-600">Before AI Implementation</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• $20M annual inventory costs</li>
                      <li>• 35% forecast accuracy</li>
                      <li>• 45% stockout rate</li>
                      <li>• 72-hour planning cycle</li>
                      <li>• Manual supplier management</li>
                      <li>• Reactive risk management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-4 text-green-600">After AI Implementation</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• $8M annual inventory costs</li>
                      <li>• 95% forecast accuracy</li>
                      <li>• 5% stockout rate</li>
                      <li>• Real-time planning</li>
                      <li>• Automated supplier optimization</li>
                      <li>• Proactive risk management</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">💰 Financial Impact Breakdown</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">$8M</div>
                    <div className="text-sm text-gray-600">Inventory Cost Reduction</div>
                    <div className="text-xs text-gray-500">60% reduction in carrying costs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">$3M</div>
                    <div className="text-sm text-gray-600">Transportation Savings</div>
                    <div className="text-xs text-gray-500">25% reduction in logistics costs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">$1M</div>
                    <div className="text-sm text-gray-600">Risk Mitigation</div>
                    <div className="text-xs text-gray-500">Disruption cost avoidance</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">Client Testimonial</h3>
              <blockquote className="text-lg text-blue-200 italic mb-6 leading-relaxed">
                "The AI supply chain optimization solution from Zion Tech Group has been transformational. 
                We've reduced our supply chain costs by 60% while improving efficiency by 90%. The $12M 
                in annual savings has allowed us to invest in new product development and market expansion. 
                The system's predictive capabilities have made our operations incredibly resilient."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">SM</span>
                </div>
                <div>
                  <div className="font-bold text-white">Sarah Mitchell</div>
                  <div className="text-blue-200 text-sm">Chief Operations Officer</div>
                  <div className="text-blue-300 text-sm">Global Manufacturing Corp</div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Timeline</h2>
            
            <div className="space-y-4 mb-12">
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h4 className="font-bold text-gray-900">Data Integration & Analysis (Weeks 1-4)</h4>
                  <p className="text-gray-600 text-sm">Connected all supply chain data sources and performed comprehensive analysis</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h4 className="font-bold text-gray-900">AI Model Development (Weeks 5-12)</h4>
                  <p className="text-gray-600 text-sm">Built and trained demand forecasting and optimization models</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h4 className="font-bold text-gray-900">Pilot Testing (Weeks 13-16)</h4>
                  <p className="text-gray-600 text-sm">Tested AI solutions with select product lines and regions</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h4 className="font-bold text-gray-900">Full Deployment (Weeks 17-20)</h4>
                  <p className="text-gray-600 text-sm">Rolled out AI solutions across all operations globally</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transform Your Supply Chain</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Join the supply chain revolution. Our AI solutions can help your organization achieve 
                similar results with intelligent optimization and predictive capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-lg font-bold hover:from-emerald-700 hover:to-green-700 transition-all shadow-lg"
                >
                  Start Your Supply Chain Transformation
                </Link>
                <Link
                  href="/services/supply-chain-optimization"
                  className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-bold hover:bg-emerald-600 hover:text-white transition-colors"
                >
                  Learn More About Our Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}