import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Enterprise Transformation 2025: 340% ROI Success Story',
  description: 'Discover how a Fortune 500 company achieved 340% ROI through comprehensive AI transformation. Learn the strategies, challenges, and results of this groundbreaking implementation.',
  keywords: ['AI transformation', 'enterprise AI', 'ROI success', 'AI case study', 'digital transformation', 'Fortune 500'],
};

export default function AIEnterpriseTransformationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🏆 SUCCESS STORY</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Enterprise Transformation 2025
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              How a Fortune 500 company achieved 340% ROI through comprehensive AI transformation. 
              Discover the strategies, challenges, and breakthrough results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#results"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Results
              </Link>
              <Link
                href="#strategy"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Learn Strategy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section id="results" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Transformation Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">340%</div>
              <div className="text-gray-600 font-semibold">ROI Increase</div>
              <div className="text-sm text-gray-500 mt-2">Within 12 months</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$2.4B</div>
              <div className="text-gray-600 font-semibold">Cost Savings</div>
              <div className="text-sm text-gray-500 mt-2">Annual reduction</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600 font-semibold">Efficiency Gain</div>
              <div className="text-sm text-gray-500 mt-2">Process optimization</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">18</div>
              <div className="text-gray-600 font-semibold">Months</div>
              <div className="text-sm text-gray-500 mt-2">Implementation time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Company Overview</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Challenge</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Manual processes causing 40% operational inefficiency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>High customer service costs ($50M annually)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Data silos preventing informed decision-making</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Competitive pressure requiring rapid innovation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Company Profile</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Fortune 500 manufacturing company</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>50,000+ employees globally</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>$15B annual revenue</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Operations in 30+ countries</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section id="strategy" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">AI Transformation Strategy</h2>
          
          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold mr-4">Phase 1</div>
                <h3 className="text-2xl font-bold text-gray-900">Foundation & Assessment</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Comprehensive AI readiness assessment</li>
                    <li>• Data quality and infrastructure audit</li>
                    <li>• Stakeholder alignment and change management</li>
                    <li>• Pilot project selection and planning</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Identified 15 high-impact use cases</li>
                    <li>• Established AI governance framework</li>
                    <li>• Trained 500+ employees on AI basics</li>
                    <li>• Secured $50M transformation budget</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold mr-4">Phase 2</div>
                <h3 className="text-2xl font-bold text-gray-900">Implementation & Scaling</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Deployed AI-powered customer service bots</li>
                    <li>• Implemented predictive maintenance systems</li>
                    <li>• Automated supply chain optimization</li>
                    <li>• Launched intelligent document processing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 60% reduction in customer service costs</li>
                    <li>• 40% improvement in equipment uptime</li>
                    <li>• 25% reduction in inventory costs</li>
                    <li>• 80% faster document processing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold mr-4">Phase 3</div>
                <h3 className="text-2xl font-bold text-gray-900">Optimization & Innovation</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Advanced analytics and business intelligence</li>
                    <li>• AI-driven product development</li>
                    <li>• Autonomous decision-making systems</li>
                    <li>• Continuous learning and improvement</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 95% improvement in decision speed</li>
                    <li>• 30% faster time-to-market for products</li>
                    <li>• 50% reduction in manual errors</li>
                    <li>• 340% overall ROI achievement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-3">AI/ML Platforms</h3>
              <ul className="text-gray-600 space-y-1">
                <li>TensorFlow & PyTorch</li>
                <li>Azure Machine Learning</li>
                <li>Amazon SageMaker</li>
                <li>Google Cloud AI</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold mb-3">Cloud Infrastructure</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Microsoft Azure</li>
                <li>AWS</li>
                <li>Google Cloud Platform</li>
                <li>Hybrid cloud architecture</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Data & Analytics</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Apache Spark</li>
                <li>Power BI</li>
                <li>Tableau</li>
                <li>Snowflake</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Lessons Learned</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-green-600 mb-4">✅ What Worked Well</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Strong executive sponsorship and clear vision</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Phased approach with quick wins</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Comprehensive change management program</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Investment in data quality and governance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">⚠️ Challenges Overcome</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Data silos and integration complexity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Employee resistance to change</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Finding skilled AI talent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Balancing innovation with risk management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your AI Transformation?</h2>
          <p className="text-xl opacity-90 mb-8">
            Get our comprehensive AI implementation guide and learn from this success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/ai-2025-implementation-guide"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Download Implementation Guide
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/case-studies/ai-financial-services-transformation" className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600">Financial Services AI</h3>
                <p className="text-gray-600">$2.4B cost savings through AI implementation</p>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-manufacturing-optimization" className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600">Manufacturing Optimization</h3>
                <p className="text-gray-600">40% efficiency improvement with AI</p>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-retail-transformation" className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600">Retail Transformation</h3>
                <p className="text-gray-600">600% ROI in retail AI implementation</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}