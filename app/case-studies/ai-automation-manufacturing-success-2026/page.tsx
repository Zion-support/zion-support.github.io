import React from 'react';
import { Link } from 'react-router-dom';

export default function AIManufacturingAutomationCaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Zion Tech Group
            </Link>
            <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Manufacturing Automation Success
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              How Global Manufacturing Leader Achieved $1.8B in Value Through AI-Powered Autonomous Operations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                $1.8B Value Created
              </span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                280% ROI
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                65% Cost Reduction
              </span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
                320% Productivity Increase
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  A global manufacturing company was facing increasing pressure to improve 
                  operational efficiency, reduce costs, and maintain high quality standards 
                  while scaling production capacity.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Manual processes causing production delays</li>
                  <li>Quality control issues and defects</li>
                  <li>High operational costs and waste</li>
                  <li>Limited predictive maintenance capabilities</li>
                  <li>Inconsistent production output</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Pain Points</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Production inefficiencies</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Quality control challenges</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">High operational costs</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Equipment downtime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Solution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We implemented a comprehensive AI-powered manufacturing automation platform 
              that transformed production processes and operational efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Autonomous Production Lines</h3>
              <p className="text-gray-600">
                AI-powered robotic systems that autonomously manage production workflows, 
                quality control, and equipment coordination.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Predictive Maintenance</h3>
              <p className="text-gray-600">
                Advanced machine learning algorithms that predict equipment failures 
                and optimize maintenance schedules to minimize downtime.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assurance AI</h3>
              <p className="text-gray-600">
                Computer vision and machine learning systems that perform real-time 
                quality inspections and defect detection with 99.8% accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Results & Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The AI automation transformation delivered exceptional results across all key metrics, 
              establishing new industry standards for manufacturing excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$1.8B</div>
              <div className="text-gray-600">Total Value Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">280%</div>
              <div className="text-gray-600">ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">65%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">320%</div>
              <div className="text-gray-600">Productivity Increase</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Achievements</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-semibold">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Production Efficiency</h4>
                    <p className="text-gray-600">Increased production output by 320%</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-semibold">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Improvement</h4>
                    <p className="text-gray-600">Reduced defects by 95% through AI quality control</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-semibold">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Downtime Reduction</h4>
                    <p className="text-gray-600">Minimized equipment downtime by 80%</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-semibold">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cost Optimization</h4>
                    <p className="text-gray-600">Reduced operational costs by 65%</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technology Stack</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <span className="text-gray-700">Industrial IoT</span>
                  <span className="text-blue-600 font-semibold">Sensors, PLCs</span>
                </div>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <span className="text-gray-700">Computer Vision</span>
                  <span className="text-blue-600 font-semibold">OpenCV, YOLO</span>
                </div>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <span className="text-gray-700">Predictive Analytics</span>
                  <span className="text-blue-600 font-semibold">Python, R</span>
                </div>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <span className="text-gray-700">Robotics Control</span>
                  <span className="text-blue-600 font-semibold">ROS, Python</span>
                </div>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <span className="text-gray-700">Edge Computing</span>
                  <span className="text-blue-600 font-semibold">NVIDIA Jetson</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Manufacturing Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join the AI revolution and achieve similar results for your manufacturing organization. 
            Our proven methodology and cutting-edge technology can deliver exceptional value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Transformation
            </Link>
            <Link to="/case-studies" 
              className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
              <p className="text-gray-300">
                Leading provider of AI and IT solutions for enterprise transformation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p>Phone: +1 302 464 0950</p>
                <p>Email: kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/services" className="block text-gray-300 hover:text-white">Services</Link>
                <Link to="/case-studies" className="block text-gray-300 hover:text-white">Case Studies</Link>
                <Link to="/contact" className="block text-gray-300 hover:text-white">Contact</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}