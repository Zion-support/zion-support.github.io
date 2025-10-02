import React from 'react';
<<<<<<< HEAD
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Manufacturing AI Platform - Zion Tech Group',
  description: 'Revolutionary AI platform for manufacturing optimization, predictive maintenance, quality control, and autonomous operations.',
  keywords: 'manufacturing AI, industrial AI, predictive maintenance, quality control, smart manufacturing',
  robots: {
    index: true,
    follow: true,
  },
};

export default function ManufacturingAIPlatform() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Manufacturing AI Platform</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your manufacturing operations with our comprehensive AI platform. 
          Achieve unprecedented efficiency, quality, and predictive capabilities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Predictive Maintenance</h3>
          <p className="text-gray-600 mb-4">
            Prevent equipment failures before they happen with AI-powered predictive maintenance algorithms.
          </p>
          <Link href="/case-studies/ai-automation-manufacturing-success-2026" className="text-blue-600 hover:text-blue-800 font-medium">
            Learn More →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Control</h3>
          <p className="text-gray-600 mb-4">
            Automated quality inspection and defect detection using computer vision and machine learning.
          </p>
          <Link href="/case-studies/ai-manufacturing-excellence-2026" className="text-blue-600 hover:text-blue-800 font-medium">
            Learn More →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Process Optimization</h3>
          <p className="text-gray-600 mb-4">
            Optimize production processes in real-time with AI-driven decision making and automation.
          </p>
          <Link href="/services/ai-autonomous-operations" className="text-blue-600 hover:text-blue-800 font-medium">
            Learn More →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Supply Chain Intelligence</h3>
          <p className="text-gray-600 mb-4">
            Intelligent supply chain management with demand forecasting and inventory optimization.
          </p>
          <Link href="/services/supply-chain-intelligence" className="text-blue-600 hover:text-blue-800 font-medium">
            Learn More →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Computer Vision</h3>
          <p className="text-gray-600 mb-4">
            Advanced visual inspection systems for real-time monitoring and quality assurance.
          </p>
          <Link href="/services/ai-virtual-assistant" className="text-blue-600 hover:text-blue-800 font-medium">
            Learn More →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Monitoring</h3>
          <p className="text-gray-600 mb-4">
            AI-powered safety systems to prevent accidents and ensure compliance with regulations.
          </p>
          <Link href="/security" className="text-blue-600 hover:text-blue-800 font-medium">
            Learn More →
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Manufacturing AI Platform Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Analytics</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-600 text-sm font-semibold">✓</span>
                </span>
                <span>Live production monitoring and performance analytics</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-600 text-sm font-semibold">✓</span>
                </span>
                <span>Predictive maintenance with 95% accuracy</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-600 text-sm font-semibold">✓</span>
                </span>
                <span>Quality control automation with computer vision</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-600 text-sm font-semibold">✓</span>
                </span>
                <span>Energy consumption optimization</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Capabilities</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-green-600 text-sm font-semibold">✓</span>
                </span>
                <span>Autonomous production line management</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-green-600 text-sm font-semibold">✓</span>
                </span>
                <span>Supply chain demand forecasting</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-green-600 text-sm font-semibold">✓</span>
                </span>
                <span>Worker safety monitoring and alerts</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-green-600 text-sm font-semibold">✓</span>
                </span>
                <span>Digital twin technology integration</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Assessment</h3>
            <p className="text-gray-600 text-sm">Analyze current manufacturing processes and identify AI opportunities</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">2</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Integration</h3>
            <p className="text-gray-600 text-sm">Seamlessly integrate AI sensors and systems with existing infrastructure</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">3</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Training</h3>
            <p className="text-gray-600 text-sm">Train AI models on your specific manufacturing data and processes</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-orange-600">4</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Optimization</h3>
            <p className="text-gray-600 text-sm">Continuously optimize AI models for maximum efficiency and accuracy</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">ROI Benefits</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Reduced Downtime</span>
              <span className="text-green-600 font-semibold">-40%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Quality Improvement</span>
              <span className="text-green-600 font-semibold">+25%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Energy Savings</span>
              <span className="text-green-600 font-semibold">-30%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Production Efficiency</span>
              <span className="text-green-600 font-semibold">+35%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Maintenance Costs</span>
              <span className="text-green-600 font-semibold">-50%</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technology Stack</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">AI/ML Technologies</h3>
              <p className="text-gray-600 text-sm">TensorFlow, PyTorch, Computer Vision, Time Series Analysis</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">IoT Integration</h3>
              <p className="text-gray-600 text-sm">Industrial sensors, edge computing, real-time data streaming</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Cloud Platform</h3>
              <p className="text-gray-600 text-sm">AWS Industrial IoT, Azure IoT Hub, Google Cloud IoT</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Visualization</h3>
              <p className="text-gray-600 text-sm">Real-time dashboards, predictive analytics, mobile access</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Revolutionize Your Manufacturing?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Join leading manufacturers who have transformed their operations with our AI platform. 
          Schedule a demo to see the platform in action.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Schedule Demo
          </Link>
          <Link 
            href="/case-studies/ai-automation-manufacturing-success-2026" 
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            View Manufacturing Case Studies
          </Link>
        </div>
      </div>
=======
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
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f3e7
    </div>
  );
}