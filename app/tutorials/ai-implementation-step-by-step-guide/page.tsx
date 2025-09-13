import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users, Target, Zap, Brain, Shield, TrendingUp } from 'lucide-react';

export default function AIImplementationStepByStepGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            Tutorial
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Complete AI Implementation Guide: From Zero to Success
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive, step-by-step tutorial that will guide you through implementing AI solutions in your organization, 
            regardless of your current technical expertise level.
          </p>
        </div>

        {/* Tutorial Meta */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>45 min read</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>Beginner to Advanced</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4" />
            <span>Practical Implementation</span>
          </div>
        </div>

        {/* Prerequisites */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Prerequisites</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Requirements</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Basic understanding of business processes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Access to company data and systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Budget allocation for AI implementation</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Team Requirements</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Project manager or champion</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>IT team involvement</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>End-user representatives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step-by-Step Guide */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Implementation Steps</h2>
          
          {/* Step 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Assessment & Planning</h3>
                <p className="text-gray-700 mb-6">
                  Before implementing any AI solution, you need to understand your current state and define clear objectives.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Activities:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Conduct a comprehensive business process audit</li>
                    <li>• Identify pain points and inefficiencies</li>
                    <li>• Define success metrics and KPIs</li>
                    <li>• Assess current technology infrastructure</li>
                    <li>• Create a detailed project roadmap</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="text-blue-800 font-medium">
                    💡 <strong>Pro Tip:</strong> Start with high-impact, low-complexity processes to build momentum and demonstrate quick wins.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Preparation</h3>
                <p className="text-gray-700 mb-6">
                  Quality data is the foundation of successful AI implementation. This step is crucial for achieving accurate results.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Data Collection</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Gather data from all relevant sources</li>
                      <li>• Ensure data completeness and accuracy</li>
                      <li>• Document data lineage and sources</li>
                      <li>• Establish data governance policies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Data Cleaning</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Remove duplicates and outliers</li>
                      <li>• Handle missing values appropriately</li>
                      <li>• Standardize data formats</li>
                      <li>• Validate data quality</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <p className="text-green-800 font-medium">
                    ⚠️ <strong>Important:</strong> Poor data quality will lead to poor AI performance. Invest adequate time in this step.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Solution Selection</h3>
                <p className="text-gray-700 mb-6">
                  Choose the right AI solution based on your specific needs, budget, and technical capabilities.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Solution Options:</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Off-the-Shelf</h5>
                      <p className="text-sm text-gray-600">Quick deployment, limited customization</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Custom Development</h5>
                      <p className="text-sm text-gray-600">Full control, higher cost and time</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Hybrid Approach</h5>
                      <p className="text-sm text-gray-600">Balance of speed and customization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation & Testing</h3>
                <p className="text-gray-700 mb-6">
                  Deploy your AI solution in a controlled environment and thoroughly test before full rollout.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">A</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Pilot Testing</h4>
                      <p className="text-gray-600 text-sm">Start with a small group of users and limited data</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">B</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Performance Monitoring</h4>
                      <p className="text-gray-600 text-sm">Track accuracy, speed, and user satisfaction</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">C</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Iterative Improvement</h4>
                      <p className="text-gray-600 text-sm">Refine the solution based on feedback and results</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                5
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Deployment & Training</h3>
                <p className="text-gray-700 mb-6">
                  Roll out the solution to all users and ensure they are properly trained to use it effectively.
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Training Strategy:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Technical Training</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• System operation procedures</li>
                        <li>• Troubleshooting common issues</li>
                        <li>• Data input best practices</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Change Management</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Benefits communication</li>
                        <li>• Resistance management</li>
                        <li>• Success celebration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                6
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Monitoring & Optimization</h3>
                <p className="text-gray-700 mb-6">
                  Continuously monitor performance and optimize the solution to ensure long-term success.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Performance Metrics</h5>
                    <p className="text-sm text-gray-600">Track accuracy, speed, and user adoption rates</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Regular Reviews</h5>
                    <p className="text-sm text-gray-600">Monthly performance assessments and adjustments</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Continuous Learning</h5>
                    <p className="text-sm text-gray-600">Update models with new data and feedback</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Best Practices for Success</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Excellence</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-300 mt-1" />
                  <span>Implement robust security measures from day one</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-purple-300 mt-1" />
                  <span>Ensure scalable architecture for future growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-purple-300 mt-1" />
                  <span>Focus on user experience and adoption</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Organizational Success</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-purple-300 mt-1" />
                  <span>Involve stakeholders throughout the process</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-purple-300 mt-1" />
                  <span>Start small and scale gradually</span>
                </li>
                <li className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-purple-300 mt-1" />
                  <span>Invest in continuous learning and development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Implement AI in Your Organization?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get expert guidance and support for your AI implementation journey. Our team of specialists is ready to help you succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all inline-flex items-center gap-2"
            >
              Get Expert Help <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/resources" 
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all"
            >
              Download Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}