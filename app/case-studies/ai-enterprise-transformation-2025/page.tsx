import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Enterprise Transformation Case Study: 340% ROI Success Story',
  description: 'Discover how a Fortune 500 company achieved 340% ROI through comprehensive AI transformation. Learn the strategies, challenges, and results of this successful implementation.',
  keywords: ['AI case study', 'enterprise AI', 'AI transformation', 'ROI', 'Fortune 500', 'AI implementation', 'business transformation'],
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
              AI Enterprise Transformation
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              How a Fortune 500 company achieved 340% ROI through comprehensive AI transformation. 
              Discover the strategies, challenges, and results of this groundbreaking implementation.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">340%</div>
              <div className="text-gray-600 font-semibold">ROI Increase</div>
              <div className="text-sm text-gray-500 mt-1">Within 12 months</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$2.4M</div>
              <div className="text-gray-600 font-semibold">Cost Savings</div>
              <div className="text-sm text-gray-500 mt-1">Annual reduction</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600 font-semibold">Process Automation</div>
              <div className="text-sm text-gray-500 mt-1">Manual tasks eliminated</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">60%</div>
              <div className="text-gray-600 font-semibold">Faster Decision Making</div>
              <div className="text-sm text-gray-500 mt-1">Real-time insights</div>
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
                    <span>Manual processes causing 40% efficiency loss</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Data silos preventing informed decision making</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>High operational costs and resource waste</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Competitive pressure requiring innovation</span>
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
                    <span>$5B+ annual revenue</span>
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

      {/* Implementation Strategy */}
      <section id="strategy" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Implementation Strategy</h2>
          
          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold mr-4">
                  Phase 1
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Assessment & Planning</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Comprehensive process audit</li>
                    <li>• Data quality assessment</li>
                    <li>• Technology infrastructure review</li>
                    <li>• Stakeholder interviews</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Duration:</h4>
                  <p className="text-gray-600">8 weeks</p>
                  <h4 className="font-semibold text-gray-900 mb-3 mt-4">Key Deliverables:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• AI readiness report</li>
                    <li>• Implementation roadmap</li>
                    <li>• ROI projections</li>
                    <li>• Risk mitigation plan</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold mr-4">
                  Phase 2
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Pilot Implementation</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• AI model development</li>
                    <li>• Data pipeline setup</li>
                    <li>• User interface design</li>
                    <li>• Testing and validation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Duration:</h4>
                  <p className="text-gray-600">12 weeks</p>
                  <h4 className="font-semibold text-gray-900 mb-3 mt-4">Key Deliverables:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Working AI prototype</li>
                    <li>• Performance metrics</li>
                    <li>• User feedback report</li>
                    <li>• Scalability assessment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold mr-4">
                  Phase 3
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Full Deployment</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Enterprise-wide rollout</li>
                    <li>• Staff training programs</li>
                    <li>• Performance monitoring</li>
                    <li>• Continuous optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Duration:</h4>
                  <p className="text-gray-600">16 weeks</p>
                  <h4 className="font-semibold text-gray-900 mb-3 mt-4">Key Deliverables:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Fully operational AI system</li>
                    <li>• Trained workforce</li>
                    <li>• Performance dashboard</li>
                    <li>• Maintenance procedures</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technologies Implemented</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-gray-600">Predictive analytics and pattern recognition for process optimization</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-2">Natural Language Processing</h3>
              <p className="text-gray-600">Automated document processing and customer service enhancement</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-semibold mb-2">Computer Vision</h3>
              <p className="text-gray-600">Quality control and automated inspection systems</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Process Automation</h3>
              <p className="text-gray-600">RPA and workflow automation for repetitive tasks</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Data Analytics</h3>
              <p className="text-gray-600">Real-time dashboards and business intelligence</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold mb-2">Cloud Infrastructure</h3>
              <p className="text-gray-600">Scalable and secure cloud-based AI services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Results & Impact</h2>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Financial Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Cost Savings</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span>Operational efficiency gains:</span>
                      <span className="font-semibold text-green-600">$1.2M</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Reduced manual labor costs:</span>
                      <span className="font-semibold text-green-600">$800K</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Energy consumption reduction:</span>
                      <span className="font-semibold text-green-600">$200K</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Quality improvement savings:</span>
                      <span className="font-semibold text-green-600">$200K</span>
                    </li>
                    <li className="border-t pt-3 flex justify-between font-bold text-lg">
                      <span>Total Annual Savings:</span>
                      <span className="text-green-600">$2.4M</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Revenue Impact</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span>Faster time-to-market:</span>
                      <span className="font-semibold text-blue-600">+15%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Customer satisfaction:</span>
                      <span className="font-semibold text-blue-600">+25%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>New product development:</span>
                      <span className="font-semibold text-blue-600">+40%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Market share growth:</span>
                      <span className="font-semibold text-blue-600">+8%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Operational Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Efficiency Improvements</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span>Process automation:</span>
                      <span className="font-semibold text-purple-600">95%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Decision making speed:</span>
                      <span className="font-semibold text-purple-600">+60%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Error reduction:</span>
                      <span className="font-semibold text-purple-600">-85%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Resource utilization:</span>
                      <span className="font-semibold text-purple-600">+45%</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Quality Improvements</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span>Product quality score:</span>
                      <span className="font-semibold text-orange-600">+30%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Customer complaints:</span>
                      <span className="font-semibold text-orange-600">-70%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Defect detection:</span>
                      <span className="font-semibold text-orange-600">+90%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Compliance rate:</span>
                      <span className="font-semibold text-orange-600">+25%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Lessons Learned</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Success Factors</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Strong executive sponsorship and change management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Comprehensive data preparation and quality assurance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Phased approach with pilot testing and validation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Continuous training and user adoption programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Regular monitoring and performance optimization</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Challenges</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Data integration across legacy systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Change management and user adoption</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Scalability and performance optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Security and compliance requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>ROI measurement and validation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8">
            Learn how to achieve similar results with our proven AI implementation methodology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/ai-implementation-guide"
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
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors">
                  Financial Services AI Transformation
                </h3>
                <p className="text-gray-600">
                  How a major bank achieved 200% ROI through AI-powered fraud detection and risk management.
                </p>
              </div>
            </Link>

            <Link href="/case-studies/ai-manufacturing-optimization" className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors">
                  Manufacturing AI Optimization
                </h3>
                <p className="text-gray-600">
                  Smart factory implementation resulting in 50% efficiency gains and 30% cost reduction.
                </p>
              </div>
            </Link>

            <Link href="/case-studies/ai-healthcare-diagnostics" className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors">
                  Healthcare AI Diagnostics
                </h3>
                <p className="text-gray-600">
                  Medical AI system achieving 95% diagnostic accuracy and 40% faster patient care.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}