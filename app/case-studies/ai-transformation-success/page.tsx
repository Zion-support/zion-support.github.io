import React from 'react';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, Users, Clock, DollarSign, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Case Study: Fortune 500 AI Transformation Success - 300% ROI Achieved',
  description: 'Learn how Zion Tech Group helped a Fortune 500 company achieve 300% ROI through comprehensive AI transformation, reducing costs by 45% and increasing efficiency by 250%.',
  keywords: 'AI transformation case study, enterprise AI implementation, ROI, business automation, machine learning success',
};

export default function AITransformationSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
              Success Story
            </span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
              Fortune 500 Client
            </span>
            <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
              300% ROI
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Fortune 500 AI Transformation: 300% ROI in 18 Months
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Discover how we transformed a global manufacturing company's operations through strategic AI implementation, achieving unprecedented results and setting new industry benchmarks.
          </p>
        </div>

        {/* Key Results Banner */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">🎉 Transformation Results</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">300%</div>
                <div className="text-green-100">Return on Investment</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">45%</div>
                <div className="text-green-100">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">250%</div>
                <div className="text-green-100">Efficiency Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">18</div>
                <div className="text-green-100">Months Timeline</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* Challenge Section */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
                <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4">🏭 Manufacturing Operations Pain Points</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span>High operational costs with 35% waste in production processes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span>Manual quality control leading to 12% defect rate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span>Inefficient supply chain management with frequent delays</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span>Predictive maintenance failures causing $2M annual downtime</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span>Limited real-time visibility into production metrics</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">🎯 Business Objectives</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Primary Goals</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Reduce operational costs by 30%</li>
                        <li>• Improve production efficiency</li>
                        <li>• Minimize equipment downtime</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Success Metrics</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• ROI within 24 months</li>
                        <li>• Quality improvement</li>
                        <li>• Employee satisfaction</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solution Section */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Our Solution</h2>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">🤖 AI-Powered Predictive Analytics</h3>
                    <p className="text-gray-300 mb-4">
                      Implemented machine learning models to predict equipment failures, optimize maintenance schedules, and reduce unplanned downtime by 80%.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-400 mb-1">80%</div>
                        <div className="text-sm text-gray-300">Downtime Reduction</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-purple-400 mb-1">$1.6M</div>
                        <div className="text-sm text-gray-300">Annual Savings</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-400 mb-1">95%</div>
                        <div className="text-sm text-gray-300">Prediction Accuracy</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">🔍 Computer Vision Quality Control</h3>
                    <p className="text-gray-300 mb-4">
                      Deployed advanced computer vision systems for real-time quality inspection, reducing defect rates from 12% to 2.5% and improving overall product quality.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-400 mb-1">79%</div>
                        <div className="text-sm text-gray-300">Defect Reduction</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-teal-400 mb-1">99.2%</div>
                        <div className="text-sm text-gray-300">Detection Accuracy</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-400 mb-1">60%</div>
                        <div className="text-sm text-gray-300">Faster Inspection</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">📊 Smart Supply Chain Optimization</h3>
                    <p className="text-gray-300 mb-4">
                      Implemented AI-driven supply chain management system that optimizes inventory levels, predicts demand, and reduces supply chain costs by 35%.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-purple-400 mb-1">35%</div>
                        <div className="text-sm text-gray-300">Cost Reduction</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-pink-400 mb-1">90%</div>
                        <div className="text-sm text-gray-300">Demand Accuracy</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-400 mb-1">50%</div>
                        <div className="text-sm text-gray-300">Inventory Optimization</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Measurable Results</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-3">💰 Financial Impact</h3>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Total Investment:</span>
                          <span className="font-semibold">$2.5M</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Annual Savings:</span>
                          <span className="font-semibold text-green-400">$7.5M</span>
                        </li>
                        <li className="flex justify-between">
                          <span>ROI:</span>
                          <span className="font-semibold text-green-400">300%</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Payback Period:</span>
                          <span className="font-semibold">4 months</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-3">📈 Operational Metrics</h3>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Production Efficiency:</span>
                          <span className="font-semibold text-blue-400">+250%</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Quality Improvement:</span>
                          <span className="font-semibold text-blue-400">+79%</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Downtime Reduction:</span>
                          <span className="font-semibold text-blue-400">-80%</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Cost Reduction:</span>
                          <span className="font-semibold text-blue-400">-45%</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Client Info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Client Information</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-400">Industry</div>
                    <div className="text-white font-medium">Manufacturing</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Company Size</div>
                    <div className="text-white font-medium">Fortune 500</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Employees</div>
                    <div className="text-white font-medium">25,000+</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Project Duration</div>
                    <div className="text-white font-medium">18 Months</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Team Size</div>
                    <div className="text-white font-medium">12 Specialists</div>
                  </div>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                <div className="space-y-2">
                  {[
                    'Machine Learning',
                    'Computer Vision',
                    'Predictive Analytics',
                    'IoT Sensors',
                    'Cloud Computing',
                    'Real-time Monitoring',
                    'Data Visualization',
                    'API Integration'
                  ].map((tech, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Ready for Your Transformation?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Let us help you achieve similar results with a customized AI transformation strategy.
                </p>
                <Link 
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-105"
                >
                  Start Your Journey
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <div className="text-center">
            <div className="text-4xl mb-4">💬</div>
            <blockquote className="text-2xl font-medium text-white mb-6 leading-relaxed">
              "Zion Tech Group's AI transformation exceeded our expectations. The 300% ROI speaks for itself, but the real value is in how they've positioned us as an industry leader in innovation."
            </blockquote>
            <div className="text-gray-300">
              <div className="font-semibold text-white">Sarah Johnson</div>
              <div>Chief Technology Officer</div>
              <div className="text-sm opacity-75">Fortune 500 Manufacturing Company</div>
            </div>
          </div>
        </div>

        {/* Related Case Studies */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">More Success Stories</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/case-studies/quantum-optimization-success" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <h4 className="text-lg font-semibold text-white group-hover:text-green-300 mb-2">
                  Quantum Optimization in Logistics
                </h4>
                <p className="text-gray-400 text-sm mb-3">
                  How we helped a logistics company achieve 40% cost savings using quantum algorithms.
                </p>
                <div className="flex items-center text-green-400 text-sm">
                  <span>Read Case Study</span>
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </div>
              </div>
            </Link>
            
            <Link href="/case-studies/cybersecurity-transformation" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <h4 className="text-lg font-semibold text-white group-hover:text-green-300 mb-2">
                  Cybersecurity Transformation
                </h4>
                <p className="text-gray-400 text-sm mb-3">
                  Zero security incidents in 2 years after implementing our AI-powered security platform.
                </p>
                <div className="flex items-center text-green-400 text-sm">
                  <span>Read Case Study</span>
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}