import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Global Logistics AI Transformation: $80M Savings & 98% Efficiency | Zion Tech Group',
  description: 'Discover how a Fortune 100 logistics company achieved $80M annual savings, 98% on-time delivery, and 95% automated operations through comprehensive AI transformation.',
  keywords: 'AI logistics transformation, supply chain AI, logistics automation, AI case study, enterprise AI success',
};

export default function GlobalLogisticsAITransformation2026Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Success Story
          </span>
          <span className="text-gray-500">Fortune 100 Company</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Global Logistics AI Transformation: $80M Annual Savings & 98% Efficiency
        </h1>
        <p className="text-2xl text-gray-600 leading-relaxed">
          How a Fortune 100 logistics company transformed operations across 75 countries with AI-powered 
          route optimization, predictive maintenance, and intelligent warehouse automation.
        </p>
      </header>

      {/* Key Metrics Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
          <div className="text-4xl font-bold text-green-600 mb-2">$80M</div>
          <div className="text-gray-700 font-semibold">Annual Cost Savings</div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
          <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
          <div className="text-gray-700 font-semibold">On-Time Delivery</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
          <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
          <div className="text-gray-700 font-semibold">Automated Operations</div>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
          <div className="text-4xl font-bold text-orange-600 mb-2">75</div>
          <div className="text-gray-700 font-semibold">Countries Deployed</div>
        </div>
      </div>

      {/* Company Profile */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Profile</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Industry</h3>
            <p className="text-gray-700">Global Logistics & Transportation</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Company Size</h3>
            <p className="text-gray-700">Fortune 100, 150,000+ employees</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Operations</h3>
            <p className="text-gray-700">75 countries, 500+ distribution centers</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Annual Volume</h3>
            <p className="text-gray-700">2 billion packages, $100B+ revenue</p>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
        <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-6">
          <p className="text-lg text-gray-800 leading-relaxed">
            The company faced mounting pressure from increasing customer expectations, rising operational 
            costs, and aggressive competition. Traditional logistics methods were no longer sustainable 
            at scale, resulting in significant inefficiencies and lost opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Rising Costs</h3>
            <p className="text-gray-700">
              Operational costs increasing 15% annually due to fuel, labor, and infrastructure expenses.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="text-3xl mb-3">⏰</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Delivery Delays</h3>
            <p className="text-gray-700">
              Only 82% on-time delivery rate, leading to customer dissatisfaction and penalty costs.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="text-3xl mb-3">🔧</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Equipment Downtime</h3>
            <p className="text-gray-700">
              Unexpected breakdowns causing $200M+ annual losses and service disruptions.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Inefficient Planning</h3>
            <p className="text-gray-700">
              Manual route planning and capacity management leading to 30% suboptimal resource utilization.
            </p>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">The AI Solution</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Zion Tech Group designed and implemented a comprehensive AI transformation spanning the entire 
          logistics value chain, from warehouse operations to last-mile delivery.
        </p>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🛣️ AI-Powered Route Optimization</h3>
            <p className="text-gray-700 mb-4">
              Dynamic routing algorithms that optimize delivery routes in real-time based on traffic, 
              weather, vehicle capacity, and customer priorities.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Real-time traffic and weather integration</li>
              <li>Multi-stop route optimization across thousands of vehicles</li>
              <li>Predictive delivery time windows with 95% accuracy</li>
              <li>Fuel consumption reduction of 25%</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🏭 Intelligent Warehouse Automation</h3>
            <p className="text-gray-700 mb-4">
              AI-driven warehouse management with computer vision, robotics, and predictive inventory 
              optimization across 500+ global distribution centers.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Automated sorting and package handling (10x faster)</li>
              <li>Computer vision quality control (99.9% accuracy)</li>
              <li>Predictive inventory positioning to reduce transit times</li>
              <li>Autonomous mobile robots for warehouse operations</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🔧 Predictive Maintenance</h3>
            <p className="text-gray-700 mb-4">
              IoT sensors and AI algorithms monitoring 50,000+ vehicles and equipment units to predict 
              failures before they occur.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>95% reduction in unexpected breakdowns</li>
              <li>30% extension in equipment lifespan</li>
              <li>Automated maintenance scheduling and parts ordering</li>
              <li>$150M+ annual savings in maintenance costs</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 border border-orange-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">📦 Demand Forecasting & Planning</h3>
            <p className="text-gray-700 mb-4">
              Advanced ML models analyzing historical data, seasonal patterns, and market trends to 
              optimize capacity planning and resource allocation.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Demand prediction accuracy improved to 92%</li>
              <li>Optimized fleet size and workforce planning</li>
              <li>Peak season preparation with 40% better resource utilization</li>
              <li>Dynamic pricing optimization based on capacity and demand</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Implementation Timeline */}
      <div className="bg-gray-50 rounded-xl p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Implementation Timeline</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
              Month<br/>1-3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Discovery & Design</h3>
              <p className="text-gray-700">
                Process mapping, data assessment, solution architecture design, and pilot selection 
                across 5 key distribution centers.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
              Month<br/>4-9
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Pilot Deployment</h3>
              <p className="text-gray-700">
                Implementation of core AI systems in pilot locations, model training, and initial 
                optimization based on real-world data.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
              Month<br/>10-18
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Global Rollout</h3>
              <p className="text-gray-700">
                Phased deployment across all 75 countries and 500+ locations, with continuous 
                optimization and regional customization.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
              Ongoing
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Continuous Improvement</h3>
              <p className="text-gray-700">
                Ongoing model refinement, new capability additions, and expansion to additional 
                use cases based on operational data.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Transformational Results</h2>
        
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6">Financial Impact</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-4xl font-bold mb-2">$80M+</div>
              <div className="opacity-90">Annual cost savings achieved</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">750%</div>
              <div className="opacity-90">ROI within 24 months</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10 months</div>
              <div className="opacity-90">Payback period</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Operational Excellence</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">98% on-time delivery rate (up from 82%)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">95% process automation across operations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">25% fuel consumption reduction</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">40% improvement in capacity utilization</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Experience</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">Net Promoter Score increased by 45 points</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">Customer satisfaction rating: 4.8/5.0</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">70% reduction in delivery time variability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">Real-time tracking accuracy: 99.5%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Executive Quote */}
      <div className="bg-blue-50 border-l-4 border-blue-600 p-8 my-12">
        <p className="text-xl text-gray-800 italic mb-4">
          "This AI transformation has fundamentally changed how we operate. We're now able to deliver 
          better service at lower cost while being more sustainable. The ROI exceeded our most 
          optimistic projections."
        </p>
        <p className="text-gray-600 font-semibold">— Chief Operations Officer</p>
        <p className="text-gray-500 text-sm">Fortune 100 Global Logistics Company</p>
      </div>

      {/* Key Learnings */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Success Factors</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-gray-900 mb-3">🎯 Clear Vision & Buy-in</h3>
            <p className="text-gray-700 text-sm">
              Executive sponsorship and clear communication of transformation goals across all levels 
              of the organization.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">📊 Data-Driven Approach</h3>
            <p className="text-gray-700 text-sm">
              Comprehensive data collection and quality initiatives before model deployment to ensure 
              accurate predictions.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">👥 Change Management</h3>
            <p className="text-gray-700 text-sm">
              Extensive training programs and gradual rollout to ensure workforce adaptation and 
              minimize disruption.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">🔄 Iterative Optimization</h3>
            <p className="text-gray-700 text-sm">
              Continuous monitoring and refinement of AI models based on real-world performance 
              and feedback.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Transform Your Logistics Operations</h2>
        <p className="text-xl mb-6 opacity-90">
          Achieve similar results with AI-powered logistics and supply chain transformation. 
          Let's discuss how we can optimize your operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/services/ai-enterprise-automation"
            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
          >
            Explore Our Solutions
          </Link>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors text-center"
          >
            Schedule Consultation
          </a>
        </div>
      </div>

      {/* Related Content */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/case-studies/fortune-500-ai-transformation-success" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
              <span className="text-sm text-green-600 font-semibold">Case Study</span>
              <h3 className="text-lg font-bold text-gray-900 mt-2 group-hover:text-green-600 transition-colors">
                Fortune 500 Manufacturing
              </h3>
              <p className="text-sm text-gray-600 mt-2">$50M savings through AI</p>
            </div>
          </Link>
          <Link href="/blog/ai-hyperautomation-enterprise-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
              <span className="text-sm text-purple-600 font-semibold">Article</span>
              <h3 className="text-lg font-bold text-gray-900 mt-2 group-hover:text-purple-600 transition-colors">
                Hyperautomation Guide
              </h3>
              <p className="text-sm text-gray-600 mt-2">Complete digital transformation</p>
            </div>
          </Link>
          <Link href="/services/ai-supply-chain-optimization" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
              <span className="text-sm text-blue-600 font-semibold">Service</span>
              <h3 className="text-lg font-bold text-gray-900 mt-2 group-hover:text-blue-600 transition-colors">
                Supply Chain AI
              </h3>
              <p className="text-sm text-gray-600 mt-2">End-to-end optimization</p>
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}