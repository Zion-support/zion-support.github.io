import React from 'react';
import { Link } from 'react-router-dom';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supply Chain Transformation 2026: $8.2M ROI Case Study',
  description: 'See how a Fortune 500 manufacturer achieved $8.2M annual savings with AI-powered supply chain transformation. 92% forecast accuracy, 85% stockout reduction, 99.5% on-time delivery.',
  keywords: 'supply chain transformation, AI supply chain, manufacturing automation, ROI case study, Fortune 500',
};

export default function SupplyChainTransformation2026Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-bold mb-6">
            <span className="text-2xl mr-2">📊</span>
            CASE STUDY
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Supply Chain Transformation 2026
          </h1>
          <p className="text-2xl text-green-100 mb-8 max-w-4xl mx-auto">
            Fortune 500 Manufacturer: $8.2M Annual Savings with AI-Powered Supply Chain Intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Similar Results
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl font-bold text-green-600 mb-2">$8.2M</div>
              <p className="text-gray-700 font-semibold">Annual Savings</p>
              <p className="text-sm text-gray-600 mt-2">Cost reduction achieved</p>
            </div>
            <div className="text-center bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl font-bold text-blue-600 mb-2">92%</div>
              <p className="text-gray-700 font-semibold">Forecast Accuracy</p>
              <p className="text-sm text-gray-600 mt-2">Demand prediction</p>
            </div>
            <div className="text-center bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
              <p className="text-gray-700 font-semibold">Stockout Reduction</p>
              <p className="text-sm text-gray-600 mt-2">Inventory optimization</p>
            </div>
            <div className="text-center bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl font-bold text-orange-600 mb-2">99.5%</div>
              <p className="text-gray-700 font-semibold">On-Time Delivery</p>
              <p className="text-sm text-gray-600 mt-2">Customer satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Company Profile</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Industry:</strong> Manufacturing</li>
                  <li><strong>Size:</strong> Fortune 500</li>
                  <li><strong>Revenue:</strong> $850M annually</li>
                  <li><strong>Employees:</strong> 2,500+</li>
                  <li><strong>Locations:</strong> 15 facilities globally</li>
                  <li><strong>Products:</strong> Industrial equipment</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Challenge</h3>
                <p className="text-gray-600 leading-relaxed">
                  The company faced significant supply chain inefficiencies with manual forecasting, 
                  frequent stockouts, delayed deliveries, and high inventory costs. Traditional 
                  methods were unable to handle the complexity of their global operations.
                </p>
              </div>
            </div>
          </div>

          {/* Problem Statement */}
          <div className="bg-red-50 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-red-900 mb-6">The Problem</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-red-900 mb-4">Key Issues</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 text-xl mr-3">•</span>
                    <span className="text-gray-700">Manual demand forecasting with 65% accuracy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 text-xl mr-3">•</span>
                    <span className="text-gray-700">Frequent stockouts affecting 30% of orders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 text-xl mr-3">•</span>
                    <span className="text-gray-700">High inventory carrying costs ($12M annually)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 text-xl mr-3">•</span>
                    <span className="text-gray-700">Delayed deliveries impacting customer satisfaction</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-900 mb-4">Business Impact</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 text-xl mr-3">•</span>
                    <span className="text-gray-700">Lost sales due to stockouts: $3.2M annually</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 text-xl mr-3">•</span>
                    <span className="text-gray-700">Excess inventory costs: $4.8M annually</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 text-xl mr-3">•</span>
                    <span className="text-gray-700">Customer satisfaction: 78% (industry avg: 85%)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 text-xl mr-3">•</span>
                    <span className="text-gray-700">Manual process costs: $2.1M annually</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-blue-50 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">The Solution</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">AI-Powered Supply Chain Platform</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">Machine learning demand forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">Real-time inventory optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">Automated replenishment systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">Predictive analytics for logistics</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Implementation Approach</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">12-month phased rollout</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">Integration with existing ERP systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">Staff training and change management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">Continuous monitoring and optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-green-50 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-6">Results Achieved</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-green-900 mb-4">Quantitative Results</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700"><strong>$8.2M</strong> annual cost savings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700"><strong>92%</strong> forecast accuracy (up from 65%)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700"><strong>85%</strong> reduction in stockouts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700"><strong>99.5%</strong> on-time delivery rate</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-900 mb-4">Business Impact</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700"><strong>1,074%</strong> ROI in first year</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700"><strong>12 months</strong> payback period</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700"><strong>95%</strong> customer satisfaction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700"><strong>40%</strong> reduction in manual processes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Stack</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">AI/ML Platform</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• TensorFlow/PyTorch</li>
                  <li>• Scikit-learn</li>
                  <li>• Apache Spark</li>
                  <li>• MLflow</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Data Infrastructure</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Apache Kafka</li>
                  <li>• Data Lakes (AWS S3)</li>
                  <li>• Real-time Databases</li>
                  <li>• ETL Pipelines</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Integration</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• SAP ERP Integration</li>
                  <li>• REST APIs</li>
                  <li>• Message Queues</li>
                  <li>• Cloud Platforms</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Testimonial</h2>
            <blockquote className="text-xl text-gray-700 italic mb-6">
              "The AI-powered supply chain transformation has revolutionized our operations. 
              We've achieved unprecedented accuracy in forecasting, eliminated stockouts, 
              and delivered exceptional customer satisfaction. The $8.2M annual savings 
              exceeded our expectations, and the ROI has been outstanding."
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                CS
              </div>
              <div>
                <p className="font-bold text-gray-900">Chief Supply Chain Officer</p>
                <p className="text-gray-600">Fortune 500 Manufacturing Company</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Supply Chain?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI-powered supply chain optimization can deliver 
            similar results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}