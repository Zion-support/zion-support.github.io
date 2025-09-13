import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI 2025 Implementation Guide: Complete Roadmap for Success',
  description: 'The ultimate AI implementation guide for 2025. Step-by-step roadmap, best practices, tools, and strategies to successfully implement AI in your organization.',
  keywords: ['AI implementation', 'AI guide', 'AI roadmap', 'AI strategy', 'AI best practices', 'AI tools'],
};

export default function AI2025ImplementationGuide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">📚 COMPREHENSIVE GUIDE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI 2025 Implementation Guide
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              The complete roadmap to successfully implement AI in your organization. 
              From strategy to execution, get everything you need to achieve 340% ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#download"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                Download Free Guide
              </Link>
              <Link
                href="#roadmap"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
              >
                View Roadmap
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included in This Guide
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to successfully implement AI in your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Planning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AI readiness assessment</li>
                <li>• ROI calculation framework</li>
                <li>• Technology stack selection</li>
                <li>• Change management strategy</li>
                <li>• Risk mitigation planning</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Implementation Tools</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Project templates</li>
                <li>• Checklist and workflows</li>
                <li>• Vendor evaluation criteria</li>
                <li>• Testing frameworks</li>
                <li>• Performance metrics</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best Practices</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Data preparation guidelines</li>
                <li>• Model training strategies</li>
                <li>• Deployment best practices</li>
                <li>• Monitoring and maintenance</li>
                <li>• Scaling considerations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section id="roadmap" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Implementation Roadmap
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow this proven 6-month roadmap to successful AI implementation
            </p>
          </div>

          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Assessment & Planning (Weeks 1-4)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Activities:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Conduct AI readiness assessment</li>
                        <li>• Identify use cases and priorities</li>
                        <li>• Calculate potential ROI</li>
                        <li>• Select technology stack</li>
                        <li>• Build project team</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Deliverables:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• AI strategy document</li>
                        <li>• Project charter</li>
                        <li>• Resource allocation plan</li>
                        <li>• Risk assessment report</li>
                        <li>• Success metrics definition</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Preparation (Weeks 5-8)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Activities:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Data inventory and mapping</li>
                        <li>• Data quality assessment</li>
                        <li>• Data cleaning and preprocessing</li>
                        <li>• Data pipeline development</li>
                        <li>• Privacy and security setup</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Deliverables:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Data quality report</li>
                        <li>• Data pipeline architecture</li>
                        <li>• Privacy compliance documentation</li>
                        <li>• Data governance framework</li>
                        <li>• Training datasets</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Model Development (Weeks 9-16)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Activities:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Model selection and design</li>
                        <li>• Feature engineering</li>
                        <li>• Model training and validation</li>
                        <li>• Performance optimization</li>
                        <li>• Model testing and evaluation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Deliverables:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Trained AI models</li>
                        <li>• Model performance metrics</li>
                        <li>• Feature importance analysis</li>
                        <li>• Model documentation</li>
                        <li>• Testing results</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Deployment & Testing (Weeks 17-20)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Activities:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Production environment setup</li>
                        <li>• Model deployment</li>
                        <li>• Integration testing</li>
                        <li>• User acceptance testing</li>
                        <li>• Performance monitoring setup</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Deliverables:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Production-ready system</li>
                        <li>• Deployment documentation</li>
                        <li>• Testing reports</li>
                        <li>• Monitoring dashboards</li>
                        <li>• User training materials</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    5
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Launch & Optimization (Weeks 21-24)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Activities:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Gradual rollout</li>
                        <li>• User training and support</li>
                        <li>• Performance monitoring</li>
                        <li>• Continuous optimization</li>
                        <li>• Success measurement</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Deliverables:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Fully deployed AI system</li>
                        <li>• Performance reports</li>
                        <li>• ROI analysis</li>
                        <li>• Lessons learned document</li>
                        <li>• Future roadmap</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools and Technologies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recommended Tools & Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proven tools and technologies for successful AI implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="font-bold text-gray-900 mb-2">Machine Learning</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>TensorFlow</li>
                <li>PyTorch</li>
                <li>Scikit-learn</li>
                <li>XGBoost</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-gray-900 mb-2">Data Processing</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Apache Spark</li>
                <li>Pandas</li>
                <li>NumPy</li>
                <li>Dask</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl mb-3">☁️</div>
              <h3 className="font-bold text-gray-900 mb-2">Cloud Platforms</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>AWS SageMaker</li>
                <li>Azure ML</li>
                <li>Google Cloud AI</li>
                <li>IBM Watson</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="font-bold text-gray-900 mb-2">DevOps & MLOps</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>MLflow</li>
                <li>Kubeflow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Download Your Free Implementation Guide
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Get instant access to the complete 150-page AI implementation guide with 
            templates, checklists, and step-by-step instructions.
          </p>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-bold mb-4">What You'll Get:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span>150-page comprehensive guide</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span>Project templates & checklists</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span>ROI calculation tools</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span>Vendor evaluation criteria</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span>Best practices & case studies</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span>Implementation timeline</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/download/ai-2025-implementation-guide.pdf"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Download Free Guide
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Related Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Additional resources to support your AI implementation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/tools/ai-roi-calculator" className="group">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🧮</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI ROI Calculator</h3>
                <p className="text-gray-600 mb-4">
                  Calculate the potential ROI of your AI investments with our interactive tool
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  <span>Try Calculator</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/webinars/ai-implementation-masterclass" className="group">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎥</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Implementation Masterclass</h3>
                <p className="text-gray-600 mb-4">
                  Join our expert-led masterclass on AI implementation best practices
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  <span>Register Now</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/case-studies" className="group">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Success Stories</h3>
                <p className="text-gray-600 mb-4">
                  Learn from real-world AI implementation success stories and case studies
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  <span>View Case Studies</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}