import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Manufacturing Transformation: 85% Efficiency Gain & $15M Annual Savings',
  description: 'See how a global manufacturer achieved 85% efficiency improvement and $15M annual savings through comprehensive AI transformation.',
  keywords: 'AI manufacturing, industrial automation, efficiency improvement, cost savings, digital transformation, case study',
};

export default function AIManufacturingTransformationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Success Story
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI Manufacturing Transformation: 85% Efficiency Gain & $15M Annual Savings
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            How a global manufacturer revolutionized operations with AI-powered automation and predictive analytics
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span>Published January 20, 2026</span>
            <span>•</span>
            <span>Manufacturing</span>
            <span>•</span>
            <span>15 min read</span>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl mb-8">
          <h2 className="text-3xl font-bold mb-6">Executive Summary</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-lg opacity-90">Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$15M</div>
              <div className="text-lg opacity-90">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">6 months</div>
              <div className="text-lg opacity-90">ROI Timeline</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
            <p className="text-lg text-gray-700 mb-6">
              Global Manufacturing Corp, a Fortune 500 company with 15 production facilities worldwide, was struggling with declining efficiency, rising operational costs, and increasing quality issues. Despite significant investments in traditional automation, the company faced:
            </p>
            
            <ul className="space-y-3 text-gray-700 mb-8">
              <li>• <strong>Declining efficiency:</strong> Production efficiency had dropped to 65% across all facilities</li>
              <li>• <strong>Rising costs:</strong> Operational costs increased by 25% over two years</li>
              <li>• <strong>Quality issues:</strong> Defect rates reached 8%, leading to customer complaints and returns</li>
              <li>• <strong>Predictive maintenance failures:</strong> Equipment downtime averaged 15% of production time</li>
              <li>• <strong>Supply chain disruptions:</strong> Inventory management was reactive rather than predictive</li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h4 className="text-lg font-semibold text-red-800 mb-2">Critical Business Impact</h4>
              <p className="text-red-700">
                The company was losing $2M monthly due to inefficiencies and was at risk of losing major contracts to more efficient competitors.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Solution</h2>
            <p className="text-lg text-gray-700 mb-6">
              Zion Tech Group implemented a comprehensive AI transformation strategy across all manufacturing operations, focusing on four key areas:
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">1. AI-Powered Predictive Maintenance</h3>
            <p className="text-lg text-gray-700 mb-6">
              Deployed machine learning models that analyze sensor data from 5,000+ equipment points to predict failures up to 30 days in advance.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-blue-800 mb-2">Key Features</h4>
              <ul className="space-y-2 text-blue-700">
                <li>• Real-time sensor data analysis from IoT devices</li>
                <li>• Machine learning models trained on 5 years of historical data</li>
                <li>• Automated maintenance scheduling and resource allocation</li>
                <li>• Integration with existing ERP and maintenance systems</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Intelligent Quality Control</h3>
            <p className="text-lg text-gray-700 mb-6">
              Implemented computer vision systems with 99.5% accuracy for real-time defect detection and quality assurance.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Supply Chain Optimization</h3>
            <p className="text-lg text-gray-700 mb-6">
              Deployed AI algorithms for demand forecasting, inventory optimization, and supplier performance analysis.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Production Line Optimization</h3>
            <p className="text-lg text-gray-700 mb-6">
              Implemented AI-driven scheduling and resource allocation to maximize throughput and minimize waste.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Timeline</h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Month 1-2: Assessment & Planning</h4>
                  <p className="text-gray-600">Comprehensive analysis of current operations and AI readiness assessment</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Month 3-4: Pilot Implementation</h4>
                  <p className="text-gray-600">Deployed AI solutions at 2 pilot facilities with real-time monitoring</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Month 5-6: Full Rollout</h4>
                  <p className="text-gray-600">Scaled AI solutions across all 15 facilities with comprehensive training</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-800 mb-3">Operational Efficiency</h4>
                <ul className="space-y-2 text-green-700">
                  <li>• 85% improvement in production efficiency</li>
                  <li>• 90% reduction in unplanned downtime</li>
                  <li>• 75% faster defect detection</li>
                  <li>• 60% improvement in resource utilization</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Financial Impact</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• $15M annual cost savings</li>
                  <li>• 300% ROI within 6 months</li>
                  <li>• 40% reduction in maintenance costs</li>
                  <li>• 25% improvement in profit margins</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Improvements</h3>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-sm text-gray-600">Defect Detection Accuracy</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">70%</div>
                  <div className="text-sm text-gray-600">Reduction in Defect Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">99.2%</div>
                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Stack</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">AI & Machine Learning</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• TensorFlow for predictive maintenance models</li>
                  <li>• OpenCV for computer vision quality control</li>
                  <li>• Scikit-learn for demand forecasting</li>
                  <li>• Apache Spark for big data processing</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Infrastructure</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• AWS IoT for sensor data collection</li>
                  <li>• Kubernetes for container orchestration</li>
                  <li>• Redis for real-time data caching</li>
                  <li>• Grafana for monitoring and visualization</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Lessons Learned</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h4 className="text-lg font-semibold text-yellow-800 mb-2">Key Success Factors</h4>
              <ul className="space-y-2 text-yellow-700">
                <li>• <strong>Executive sponsorship:</strong> Strong leadership support was crucial for success</li>
                <li>• <strong>Change management:</strong> Comprehensive training and communication programs</li>
                <li>• <strong>Data quality:</strong> Ensuring clean, accurate data was essential for AI model performance</li>
                <li>• <strong>Pilot approach:</strong> Starting small and scaling gradually reduced risk</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Future Roadmap</h2>
            <p className="text-lg text-gray-700 mb-6">
              Building on this success, Global Manufacturing Corp is now expanding AI implementation to:
            </p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li>• Autonomous robotics for material handling</li>
              <li>• AI-powered energy optimization</li>
              <li>• Advanced predictive analytics for market demand</li>
              <li>• Integration with customer systems for real-time order tracking</li>
            </ul>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Manufacturing?</h3>
              <p className="text-lg mb-6">
                See how AI can revolutionize your manufacturing operations and deliver similar results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Explore Our AI Services
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related Case Studies */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Case Studies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/case-studies/ai-supply-chain-optimization-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  AI Supply Chain Optimization: 60% Cost Reduction
                </h4>
                <p className="text-gray-600">See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement.</p>
              </div>
            </Link>
            <Link href="/case-studies/fintech-ai-risk-compliance-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  FinTech AI Risk Compliance: 70% Risk Reduction
                </h4>
                <p className="text-gray-600">How a leading fintech achieved 70% risk reduction with automated governance frameworks.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}