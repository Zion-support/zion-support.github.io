import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function AIHealthcareTransformation2025() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Healthcare Transformation Case Study 2025 | Zion Tech Group"
        description="Discover how a major healthcare system achieved 40% operational efficiency gains and 60% faster diagnosis times using our AI solutions."
        keywords="AI healthcare, medical AI, healthcare automation, diagnostic AI, healthcare transformation"
        url="/case-studies/ai-healthcare-transformation-2025"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center bg-blue-600/30 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-semibold">🏥 Healthcare Case Study</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              AI Healthcare
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Transformation</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              How a major healthcare system achieved 40% operational efficiency gains, 
              60% faster diagnosis times, and $2.3M annual savings through strategic AI implementation.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="font-semibold">Industry:</span> Healthcare
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="font-semibold">Scale:</span> 15,000+ employees
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="font-semibold">Duration:</span> 18 months
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="font-semibold">ROI:</span> 340% in 24 months
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  A major regional healthcare system was struggling with increasing patient volumes, 
                  diagnostic delays, and operational inefficiencies that were impacting both patient 
                  outcomes and financial performance.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-red-500 text-xl mr-3">⚠️</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">Diagnostic Delays</h3>
                      <p>Average diagnosis time was 72 hours, affecting patient outcomes</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 text-xl mr-3">⚠️</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">Resource Inefficiency</h3>
                      <p>40% of staff time spent on administrative tasks</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 text-xl mr-3">⚠️</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">Cost Pressure</h3>
                      <p>Rising operational costs with declining reimbursement rates</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Metrics Before AI</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Average Diagnosis Time</span>
                  <span className="text-2xl font-bold text-red-600">72 hours</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Administrative Overhead</span>
                  <span className="text-2xl font-bold text-red-600">40%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Patient Satisfaction</span>
                  <span className="text-2xl font-bold text-red-600">68%</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-700">Annual Operational Cost</span>
                  <span className="text-2xl font-bold text-red-600">$45M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Solution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We implemented a comprehensive AI ecosystem designed to transform every aspect 
              of healthcare delivery and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Diagnostic AI */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Diagnostic AI Platform</h3>
              <p className="text-gray-700 mb-6">
                Advanced machine learning models trained on millions of medical images 
                and patient records for rapid, accurate diagnosis.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-blue-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Medical Image Analysis
                </div>
                <div className="flex items-center text-sm text-blue-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Predictive Risk Assessment
                </div>
                <div className="flex items-center text-sm text-blue-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Treatment Recommendations
                </div>
              </div>
            </div>

            {/* Process Automation */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Process Automation</h3>
              <p className="text-gray-700 mb-6">
                Intelligent automation of administrative tasks, appointment scheduling, 
                and patient flow management.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Automated Scheduling
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Document Processing
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Resource Optimization
                </div>
              </div>
            </div>

            {/* Patient Experience */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Patient Experience AI</h3>
              <p className="text-gray-700 mb-6">
                Personalized patient interactions, virtual assistants, and 
                proactive health monitoring systems.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-purple-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Virtual Health Assistants
                </div>
                <div className="flex items-center text-sm text-purple-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Personalized Care Plans
                </div>
                <div className="flex items-center text-sm text-purple-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Remote Monitoring
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Remarkable Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The AI transformation delivered unprecedented improvements across all key metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <div className="text-4xl font-bold text-green-600 mb-2">60%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Faster Diagnosis</h3>
              <p className="text-gray-600 text-sm">Reduced from 72 to 29 hours</p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">💰</div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$2.3M</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Annual Savings</h3>
              <p className="text-gray-600 text-sm">Operational cost reduction</p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">📈</div>
              <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Efficiency Gain</h3>
              <p className="text-gray-600 text-sm">Operational productivity</p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">😊</div>
              <div className="text-4xl font-bold text-orange-600 mb-2">94%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Patient Satisfaction</h3>
              <p className="text-gray-600 text-sm">Up from 68%</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Metrics After AI Implementation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Average Diagnosis Time</span>
                  <span className="text-2xl font-bold text-green-600">29 hours</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Administrative Overhead</span>
                  <span className="text-2xl font-bold text-green-600">15%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Patient Satisfaction</span>
                  <span className="text-2xl font-bold text-green-600">94%</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Annual Operational Cost</span>
                  <span className="text-2xl font-bold text-green-600">$42.7M</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Staff Productivity</span>
                  <span className="text-2xl font-bold text-green-600">+65%</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-700">ROI (24 months)</span>
                  <span className="text-2xl font-bold text-green-600">340%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Implementation Timeline</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our phased approach ensured smooth integration with minimal disruption to operations.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-green-500"></div>
            
            <div className="space-y-12">
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                    <div className="text-sm text-blue-600 font-semibold mb-2">Phase 1 (Months 1-3)</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Assessment & Planning</h3>
                    <p className="text-gray-700">Comprehensive analysis of current systems, data infrastructure, and process mapping.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
                    <div className="text-sm text-purple-600 font-semibold mb-2">Phase 2 (Months 4-8)</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Pilot Implementation</h3>
                    <p className="text-gray-700">Deployed diagnostic AI in radiology department with 95% accuracy rate.</p>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                    <div className="text-sm text-green-600 font-semibold mb-2">Phase 3 (Months 9-15)</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Full Deployment</h3>
                    <p className="text-gray-700">Rolled out across all departments with comprehensive staff training.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                    <div className="text-sm text-orange-600 font-semibold mb-2">Phase 4 (Months 16-18)</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Optimization</h3>
                    <p className="text-gray-700">Fine-tuned systems and expanded capabilities based on performance data.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Healthcare Operations?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Join the healthcare revolution with AI solutions that deliver measurable results 
            and improved patient outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}