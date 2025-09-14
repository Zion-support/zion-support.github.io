import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export const metadata: Metadata = {
  title: 'Global Manufacturing Giant Achieves 340% ROI with AI Transformation',
  description: 'How a Fortune 500 manufacturing company transformed operations with AI, achieving unprecedented efficiency and cost savings.',
  keywords: ['Manufacturing', 'AI Transformation', 'ROI', 'Automation', 'Success Story'],
  openGraph: {
    title: 'Global Manufacturing Giant Achieves 340% ROI with AI Transformation',
    description: 'Fortune 500 manufacturing company AI transformation success story with 340% ROI.',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['Manufacturing', 'AI Transformation', 'ROI'],
  },
};

export default function GlobalManufacturingAITransformationPage() {
  return (
    <div>
      <SEO
        title="Global Manufacturing Giant Achieves 340% ROI with AI Transformation"
        description="How a Fortune 500 manufacturing company transformed operations with AI, achieving unprecedented efficiency and cost savings."
        keywords="Manufacturing, AI Transformation, ROI, Automation, Success Story"
        url="/case-studies/global-manufacturing-ai-transformation"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">🏭 MANUFACTURING SUCCESS STORY</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Global Manufacturing Giant
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Achieves 340% ROI with AI Transformation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#results"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  View Results
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Get Similar Results
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Executive Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Company Background</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><strong>Industry:</strong> Global Manufacturing</li>
                    <li><strong>Employees:</strong> 125,000+ worldwide</li>
                    <li><strong>Revenue:</strong> $45 billion annually</li>
                    <li><strong>Facilities:</strong> 200+ manufacturing plants</li>
                    <li><strong>Products:</strong> Industrial equipment, consumer goods, automotive components</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Transformation Results</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><strong>ROI:</strong> 340% within 18 months</li>
                    <li><strong>Cost Savings:</strong> $2.18 billion annually</li>
                    <li><strong>Downtime Reduction:</strong> 60%</li>
                    <li><strong>Quality Improvement:</strong> 45%</li>
                    <li><strong>Inventory Reduction:</strong> 30%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
              
              <p className="text-lg text-gray-600 mb-8">
                The company faced several critical challenges that threatened their competitive position and operational efficiency.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Operational Inefficiencies</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Equipment Downtime</h4>
                  <p className="text-gray-600">15% of production time lost to unplanned maintenance</p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Quality Issues</h4>
                  <p className="text-gray-600">8% defect rate costing $2.3 billion annually</p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Supply Chain Complexity</h4>
                  <p className="text-gray-600">50,000+ suppliers across multiple continents</p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Manual Processes</h4>
                  <p className="text-gray-600">60% of operations required manual intervention</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Solution: Comprehensive AI Transformation</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 1: Predictive Maintenance (Months 1-6)</h3>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Implementation</h4>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>IoT Sensors:</strong> Installed 50,000+ sensors across all manufacturing equipment</li>
                  <li><strong>Machine Learning Models:</strong> Developed predictive maintenance algorithms</li>
                  <li><strong>Real-time Monitoring:</strong> 24/7 equipment health monitoring system</li>
                  <li><strong>Automated Alerts:</strong> Proactive maintenance scheduling and alerts</li>
                </ul>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">60%</div>
                    <div className="text-sm text-gray-600">Reduction in unplanned downtime</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">$180M</div>
                    <div className="text-sm text-gray-600">Annual savings</div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 2: Quality Control Automation (Months 7-12)</h3>
              
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Implementation</h4>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Computer Vision:</strong> AI-powered visual inspection systems</li>
                  <li><strong>Quality Analytics:</strong> Real-time quality monitoring and analysis</li>
                  <li><strong>Automated Testing:</strong> Robotic quality testing systems</li>
                  <li><strong>Predictive Quality:</strong> AI models predicting quality issues</li>
                </ul>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">75%</div>
                    <div className="text-sm text-gray-600">Reduction in defect rate</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">$1.2B</div>
                    <div className="text-sm text-gray-600">Quality cost savings</div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 3: Supply Chain Optimization (Months 13-18)</h3>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Implementation</h4>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Demand Forecasting:</strong> AI-powered demand prediction models</li>
                  <li><strong>Inventory Optimization:</strong> Intelligent inventory management</li>
                  <li><strong>Supplier Analytics:</strong> AI-driven supplier performance analysis</li>
                  <li><strong>Logistics Optimization:</strong> Autonomous logistics planning</li>
                </ul>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">30%</div>
                    <div className="text-sm text-gray-600">Reduction in inventory costs</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">$800M</div>
                    <div className="text-sm text-gray-600">Supply chain savings</div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6" id="results">Business Impact</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Results</h3>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Cost Savings</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Maintenance Costs:</strong> $180 million annual savings</li>
                      <li><strong>Quality Costs:</strong> $1.2 billion annual savings</li>
                      <li><strong>Supply Chain Costs:</strong> $800 million annual savings</li>
                      <li><strong>Total Annual Savings:</strong> $2.18 billion</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Revenue Impact</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Increased Production:</strong> 25% increase in production capacity</li>
                      <li><strong>New Product Lines:</strong> 15 new AI-optimized products</li>
                      <li><strong>Market Share:</strong> 8% increase in market share</li>
                      <li><strong>Revenue Growth:</strong> $3.2 billion additional revenue</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 bg-white p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">340%</div>
                  <div className="text-xl text-gray-700">Return on Investment within 18 months</div>
                  <div className="text-sm text-gray-500 mt-2">Payback Period: 3.2 months</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h3>
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4">For Manufacturing Companies</h4>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li><strong>Start with High-Impact Areas:</strong> Focus on maintenance and quality first</li>
                  <li><strong>Invest in Data Infrastructure:</strong> Quality data is essential for AI success</li>
                  <li><strong>Build Internal Capabilities:</strong> Develop AI expertise within the organization</li>
                  <li><strong>Plan for Scale:</strong> Design systems for enterprise-wide deployment</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Achieve Similar Results?</h2>
            <p className="text-xl mb-8 opacity-90">
              Transform your manufacturing operations with AI and achieve unprecedented ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Manufacturing AI Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}