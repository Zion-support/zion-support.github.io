import React from 'react';
import Link from 'next/link';

export default function AI2025CybersecurityBanner() {
  return (
    <section className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔒 NEW CONTENT 2025</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            AI 2025 Cybersecurity Revolution
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Ultimate Guide to AI-Powered Security Solutions for Enterprise Protection. 
            Defend against evolving cyber threats with cutting-edge AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Features */}
          <div className="space-y-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-start">
                <div className="text-3xl mr-4">🛡️</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Threat Detection & Prevention</h3>
                  <p className="text-gray-200 text-sm">
                    AI algorithms analyze network traffic and user behavior to identify threats in real-time with 99.9% accuracy.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-start">
                <div className="text-3xl mr-4">⚡</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Automated Response</h3>
                  <p className="text-gray-200 text-sm">
                    AI systems automatically contain and neutralize threats within seconds, minimizing damage and recovery time.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-start">
                <div className="text-3xl mr-4">🔍</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>
                  <p className="text-gray-200 text-sm">
                    Machine learning models predict potential security vulnerabilities and attack vectors before they can be exploited.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div className="space-y-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Security Solutions</h3>
                <span className="text-sm font-semibold text-yellow-300">NEW GUIDE</span>
              </div>
              <ul className="space-y-2 text-gray-200 text-sm">
                <li>• Network Security AI</li>
                <li>• Endpoint Protection</li>
                <li>• Identity & Access Management</li>
                <li>• Security Operations Center (SOC)</li>
              </ul>
              <Link
                href="/blog/ai-2025-cybersecurity-revolution-ultimate-guide"
                className="inline-block mt-4 text-yellow-300 hover:text-yellow-200 font-semibold text-sm transition-colors"
              >
                Read Complete Guide →
              </Link>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-yellow-300 mb-1">99.9%</div>
                  <div className="text-xs opacity-90">Threat Detection</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-300 mb-1">95%</div>
                  <div className="text-xs opacity-90">Faster Response</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-300 mb-1">450%</div>
                  <div className="text-xs opacity-90">ROI Increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-300 mb-1">80%</div>
                  <div className="text-xs opacity-90">False Positive Reduction</div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">Compliance Standards</h3>
              <div className="grid grid-cols-1 gap-2 text-gray-200 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                  <span>GDPR Compliance</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                  <span>SOC 2 Type II</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                  <span>ISO 27001</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                  <span>HIPAA Compliance</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Secure Your Organization with AI?</h3>
            <p className="text-lg opacity-90 mb-6">
              Protect your business from evolving cyber threats with cutting-edge AI-powered security solutions. 
              Get expert implementation and 24/7 monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Security Assessment
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                View Security Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}