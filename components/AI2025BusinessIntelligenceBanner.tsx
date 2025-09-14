import React from 'react';
import Link from 'next/link';

export default function AI2025BusinessIntelligenceBanner() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">📊 NEW CONTENT 2025</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            AI-Powered Business Intelligence Revolution
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Transform your data into actionable insights with next-generation AI analytics. 
            Make smarter decisions, predict future trends, and optimize your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Features */}
          <div className="space-y-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-start">
                <div className="text-3xl mr-4">🎯</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>
                  <p className="text-gray-200 text-sm">
                    Forecast future trends and outcomes with 95%+ accuracy using advanced machine learning models.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-start">
                <div className="text-3xl mr-4">⚡</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Real-time Processing</h3>
                  <p className="text-gray-200 text-sm">
                    Analyze data streams in real-time to make instant business decisions and optimizations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-start">
                <div className="text-3xl mr-4">💬</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Natural Language Queries</h3>
                  <p className="text-gray-200 text-sm">
                    Ask questions in plain English and get instant, intelligent responses from your data.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div className="space-y-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Industry Applications</h3>
                <span className="text-sm font-semibold text-yellow-300">NEW GUIDE</span>
              </div>
              <ul className="space-y-2 text-gray-200 text-sm">
                <li>• Retail & E-commerce personalization</li>
                <li>• Healthcare outcome prediction</li>
                <li>• Financial risk assessment</li>
                <li>• Manufacturing optimization</li>
              </ul>
              <Link
                href="/blog/ai-2025-business-intelligence-revolution"
                className="inline-block mt-4 text-yellow-300 hover:text-yellow-200 font-semibold text-sm transition-colors"
              >
                Read Complete Guide →
              </Link>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-yellow-300 mb-1">95%</div>
                  <div className="text-xs opacity-90">Prediction Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-300 mb-1">80%</div>
                  <div className="text-xs opacity-90">Faster Decisions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-300 mb-1">340%</div>
                  <div className="text-xs opacity-90">ROI Increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-300 mb-1">60%</div>
                  <div className="text-xs opacity-90">Cost Reduction</div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">Implementation Roadmap</h3>
              <div className="space-y-2 text-gray-200 text-sm">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold mr-3">1</span>
                  <span>Data Assessment & Strategy</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold mr-3">2</span>
                  <span>Data Integration & Preparation</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold mr-3">3</span>
                  <span>AI Model Development</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold mr-3">4</span>
                  <span>Dashboard & Visualization</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Revolutionize Your Business Intelligence?</h3>
            <p className="text-lg opacity-90 mb-6">
              Join industry leaders who are already leveraging AI-powered BI for competitive advantage. 
              Get expert implementation services and start your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}