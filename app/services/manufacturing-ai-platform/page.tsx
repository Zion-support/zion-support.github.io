import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Manufacturing AI Platform - Zion Tech Group',
  description: 'Revolutionary AI platform for manufacturing optimization, predictive maintenance, and autonomous operations.',
  keywords: 'manufacturing AI, predictive maintenance, industrial automation, smart manufacturing',
};

export default function ManufacturingAIPlatformPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Manufacturing AI Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your manufacturing operations with our advanced AI platform featuring 
              predictive maintenance, quality control, and autonomous optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
              <Link 
                href="/case-studies" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platform Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI solutions designed for modern manufacturing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Predictive Maintenance</h3>
              <p className="text-gray-600">
                AI-powered predictive maintenance reduces downtime by up to 40% and extends equipment life.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Control</h3>
              <p className="text-gray-600">
                Advanced computer vision and ML algorithms ensure 99.9% quality accuracy.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Autonomous Operations</h3>
              <p className="text-gray-600">
                Self-optimizing production lines that adapt to changing conditions in real-time.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Analytics</h3>
              <p className="text-gray-600">
                Real-time insights and analytics to optimize production efficiency and reduce costs.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Supply Chain Integration</h3>
              <p className="text-gray-600">
                Seamless integration with supply chain systems for end-to-end optimization.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Monitoring</h3>
              <p className="text-gray-600">
                AI-powered safety systems that prevent accidents and ensure compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world impact from our manufacturing AI implementations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-gray-600">Reduction in Downtime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$25M</div>
              <div className="text-gray-600">Annual Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Quality Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">350%</div>
              <div className="text-gray-600">ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Manufacturing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join leading manufacturers already leveraging our AI platform for unprecedented results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/case-studies" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}