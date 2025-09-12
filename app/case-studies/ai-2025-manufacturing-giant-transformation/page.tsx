import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export const metadata = {
  title: 'Manufacturing Giant AI Transformation: $2.1B Value Creation Case Study',
  description: 'How a Fortune 500 manufacturing company achieved 400% efficiency gains and $2.1B in value creation through strategic AI implementation.',
  keywords: 'AI transformation, manufacturing AI, Fortune 500, efficiency gains, value creation, case study',
};

export default function ManufacturingGiantTransformation() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Manufacturing Giant AI Transformation: $2.1B Value Creation Case Study"
        description="How a Fortune 500 manufacturing company achieved 400% efficiency gains and $2.1B in value creation through strategic AI implementation."
        keywords="AI transformation, manufacturing AI, Fortune 500, efficiency gains, value creation, case study"
        url="/case-studies/ai-2025-manufacturing-giant-transformation"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full mb-4">
            🏭 FORTUNE 500 SUCCESS STORY
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Manufacturing Giant AI Transformation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How a Fortune 500 manufacturing company achieved 400% efficiency gains and $2.1B in value creation 
            through strategic AI implementation across their global operations.
          </p>
        </div>

        {/* Key Metrics Banner */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-2xl mb-12">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">$2.1B</div>
              <div className="text-sm opacity-90">Value Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">400%</div>
              <div className="text-sm opacity-90">Efficiency Gain</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-sm opacity-90">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">18</div>
              <div className="text-sm opacity-90">Months ROI</div>
            </div>
          </div>
        </div>

        {/* Company Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Overview</h2>
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">The Challenge</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 50+ manufacturing facilities worldwide</li>
                  <li>• Complex supply chain with 10,000+ suppliers</li>
                  <li>• Manual processes causing 30% inefficiency</li>
                  <li>• Rising operational costs threatening margins</li>
                  <li>• Increasing demand for customization</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">The Opportunity</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Rich data from IoT sensors and systems</li>
                  <li>• Strong digital infrastructure foundation</li>
                  <li>• Executive commitment to transformation</li>
                  <li>• Skilled workforce ready for upskilling</li>
                  <li>• Market demand for smart manufacturing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* AI Implementation Strategy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Implementation Strategy</h2>
          
          <div className="space-y-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Phase 1: Predictive Maintenance (Months 1-6)</h3>
              <p className="text-blue-800 mb-4">
                Implemented AI-powered predictive maintenance across all manufacturing facilities, 
                reducing unplanned downtime by 75% and extending equipment life by 40%.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">75%</div>
                  <div className="text-sm text-gray-600">Downtime Reduction</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">40%</div>
                  <div className="text-sm text-gray-600">Equipment Life Extension</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">$180M</div>
                  <div className="text-sm text-gray-600">Annual Savings</div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-bold text-purple-900 mb-4">Phase 2: Supply Chain Optimization (Months 7-12)</h3>
              <p className="text-purple-800 mb-4">
                Deployed AI algorithms to optimize supply chain operations, reducing inventory costs by 35% 
                and improving delivery times by 50% while maintaining 99.8% on-time delivery.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">35%</div>
                  <div className="text-sm text-gray-600">Inventory Cost Reduction</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">50%</div>
                  <div className="text-sm text-gray-600">Delivery Time Improvement</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">99.8%</div>
                  <div className="text-sm text-gray-600">On-Time Delivery</div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-bold text-green-900 mb-4">Phase 3: Quality Control Automation (Months 13-18)</h3>
              <p className="text-green-800 mb-4">
                Implemented computer vision and machine learning for automated quality control, 
                achieving 99.9% defect detection accuracy and reducing quality-related costs by 60%.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">99.9%</div>
                  <div className="text-sm text-gray-600">Defect Detection Accuracy</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">60%</div>
                  <div className="text-sm text-gray-600">Quality Cost Reduction</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">$120M</div>
                  <div className="text-sm text-gray-600">Annual Savings</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI/ML Technologies</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• TensorFlow & PyTorch for deep learning models</li>
                <li>• Apache Spark for big data processing</li>
                <li>• Kubernetes for container orchestration</li>
                <li>• MLOps pipeline for model deployment</li>
                <li>• Real-time inference engines</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Infrastructure</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• AWS/Azure cloud platforms</li>
                <li>• Edge computing for real-time processing</li>
                <li>• IoT sensors and data collection</li>
                <li>• Data lakes for historical analysis</li>
                <li>• API gateways for system integration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Financial Impact</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-blue-800">Total Value Created:</span>
                  <span className="font-bold text-blue-900">$2.1B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-800">Annual Cost Savings:</span>
                  <span className="font-bold text-blue-900">$450M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-800">ROI Timeline:</span>
                  <span className="font-bold text-blue-900">18 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-800">Revenue Growth:</span>
                  <span className="font-bold text-blue-900">25%</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-900 mb-4">Operational Impact</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-green-800">Efficiency Improvement:</span>
                  <span className="font-bold text-green-900">400%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-800">Quality Improvement:</span>
                  <span className="font-bold text-green-900">99.9%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-800">Customer Satisfaction:</span>
                  <span className="font-bold text-green-900">+35%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-800">Employee Productivity:</span>
                  <span className="font-bold text-green-900">+60%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-center">Key Success Factors</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">🎯</div>
                <h4 className="font-bold mb-2">Strategic Focus</h4>
                <p className="text-sm opacity-90">Clear objectives and phased approach</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">👥</div>
                <h4 className="font-bold mb-2">Team Alignment</h4>
                <p className="text-sm opacity-90">Cross-functional collaboration</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">📊</div>
                <h4 className="font-bold mb-2">Data-Driven</h4>
                <p className="text-sm opacity-90">Continuous measurement and optimization</p>
              </div>
            </div>
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Lessons Learned</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-bold text-yellow-900 mb-4">What Worked Well</h3>
              <ul className="space-y-2 text-yellow-800">
                <li>• Starting with high-impact, low-risk use cases</li>
                <li>• Investing heavily in data quality and infrastructure</li>
                <li>• Comprehensive change management program</li>
                <li>• Partnering with experienced AI consultants</li>
                <li>• Continuous monitoring and optimization</li>
              </ul>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-bold text-red-900 mb-4">Challenges Overcome</h3>
              <ul className="space-y-2 text-red-800">
                <li>• Legacy system integration complexity</li>
                <li>• Data silos and quality issues</li>
                <li>• Change resistance from employees</li>
                <li>• Scaling AI across multiple facilities</li>
                <li>• Maintaining model accuracy over time</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-8 rounded-2xl text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Manufacturing Operations?</h3>
          <p className="text-xl mb-6 opacity-90">
            Learn how our AI experts can help you achieve similar results in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services/ai-automation"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore AI Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>

        {/* Related Case Studies */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Related Success Stories</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/case-studies/ai-2025-global-tech-unicorn-transformation" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">$2.8B Tech Unicorn Transformation</h4>
              <p className="text-gray-600 text-sm">How AI transformed a startup into a global tech unicorn.</p>
            </Link>
            <Link href="/case-studies/ai-2025-financial-services-transformation-success" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">Financial Services AI Revolution</h4>
              <p className="text-gray-600 text-sm">Banking giant achieves 500% efficiency gains with AI.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}