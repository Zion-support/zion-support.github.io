import React from 'react';
import Link from 'next/link';

export default function AutonomousSystemsShowcase2025() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Autonomous Systems Showcase 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the future of business operations with autonomous AI systems that work 24/7 to optimize
            maintainand evolve your business processes.
          </p>
        </div>

        {/* Autonomous Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl border border-purple-100">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Autonomous Operations</h3>
            <p className="text-gray-600 mb-4">
              Self-managing systems that handle complex business operations without human intervention
              optimizing performance in real-time.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• 24/7 autonomous monitoring</li>
              <li>• Real-time optimization</li>
              <li>• Predictive maintenance</li>
              <li>• Self-healing capabilities</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Intelligent Decision Making</h3>
            <p className="text-gray-600 mb-4">
              AI systems that make complex business decisions autonomouslylearning from outcomes 
              and continuously improving strategies.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Strategic decision automation</li>
              <li>• Risk assessment and mitigation</li>
              <li>• Resource allocation optimization</li>
              <li>• Market opportunity identification</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-100">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Adaptive Learning</h3>
            <p className="text-gray-600 mb-4">
              Systems that continuously learn and adapt to changing business conditions
              ensuring optimal performance at all times.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Continuous improvement algorithms</li>
              <li>• Pattern recognition and adaptation</li>
              <li>• Performance optimization</li>
              <li>• Future trend prediction</li>
            </ul>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Industry Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏭</span>
              </div>
              <h4 className="font-semibold mb-2">Manufacturing</h4>
              <p className="text-gray-600 text-sm">Autonomous production lines with predictive maintenance and quality control</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h4 className="font-semibold mb-2">Finance</h4>
              <p className="text-gray-600 text-sm">Autonomous tradingrisk managementand fraud detection systems</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏥</span>
              </div>
              <h4 className="font-semibold mb-2">Healthcare</h4>
              <p className="text-gray-600 text-sm">Autonomous patient monitoringdiagnosis assistanceand treatment optimization</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚚</span>
              </div>
              <h4 className="font-semibold mb-2">Logistics</h4>
              <p className="text-gray-600 text-sm">Autonomous supply chain optimization and delivery route management</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Operational Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-gray-600">90% reduction in manual operations</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-gray-600">99.9% system uptime reliability</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-gray-600">75% reduction in operational costs</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-gray-600">400% increase in process efficiency</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <span className="text-gray-600">Faster decision-making processes</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <span className="text-gray-600">Competitive advantage through automation</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <span className="text-gray-600">Scalable business operations</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <span className="text-gray-600">Future-proof technology investment</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Embrace Autonomous Systems?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Transform your business operations with autonomous AI systems that work around the clock 
              to optimize performance and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Autonomous Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}