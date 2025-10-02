import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Solutions - Zion Tech Group',
  description: 'Comprehensive AI and IT solutions for enterprise transformation. Explore our portfolio of industry-leading solutions.',
  keywords: 'AI solutions, enterprise solutions, IT solutions, digital transformation, business solutions',
  robots: {
    index: true,
    follow: true,
  },
};

export default function Solutions() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Solutions</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive AI and IT solutions designed to transform your business operations, 
          enhance productivity, and drive sustainable growth across all industries.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Analytics</h3>
          <p className="text-gray-600 mb-4">
            Transform data into actionable insights with advanced AI analytics and business intelligence solutions.
          </p>
          <Link href="/services/ai-business-intelligence-2025" className="text-blue-600 hover:text-blue-800 font-medium">
            Learn More →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Autonomous Operations</h3>
          <p className="text-gray-600 mb-4">
            Enable self-managing systems with AI-driven automation and autonomous decision-making capabilities.
          </p>
          <Link href="/services/ai-autonomous-operations" className="text-blue-600 hover:text-blue-800 font-medium">
            Learn More →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud Infrastructure</h3>
          <p className="text-gray-600 mb-4">
            Modernize your infrastructure with scalable, secure cloud solutions and migration services.
          </p>
          <Link href="/services/ai-cloud-infrastructure-2025" className="text-blue-600 hover:text-blue-800 font-medium">
            Learn More →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Cybersecurity Solutions</h3>
          <p className="text-gray-600 mb-4">
            Protect your organization with advanced AI-powered cybersecurity and threat detection systems.
          </p>
          <Link href="/services/ai-cybersecurity-2025" className="text-blue-600 hover:text-blue-800 font-medium">
            Learn More →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Supply Chain Intelligence</h3>
          <p className="text-gray-600 mb-4">
            Optimize your supply chain with AI-driven forecasting, inventory management, and logistics solutions.
          </p>
          <Link href="/services/supply-chain-intelligence" className="text-blue-600 hover:text-blue-800 font-medium">
            Learn More →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Manufacturing AI</h3>
          <p className="text-gray-600 mb-4">
            Revolutionize manufacturing with AI-powered predictive maintenance, quality control, and process optimization.
          </p>
          <Link href="/services/manufacturing-ai-platform" className="text-blue-600 hover:text-blue-800 font-medium">
            Learn More →
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry Solutions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Healthcare & Life Sciences</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• AI-powered diagnostic tools and medical imaging</li>
              <li>• Drug discovery and development acceleration</li>
              <li>• Patient data analytics and personalized medicine</li>
              <li>• Healthcare workflow optimization</li>
            </ul>
            <Link href="/case-studies/healthcare-ai-transformation-2026" className="text-blue-600 hover:text-blue-800 font-medium mt-4 inline-block">
              View Healthcare Case Studies →
            </Link>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Services</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Fraud detection and risk management</li>
              <li>• Algorithmic trading and portfolio optimization</li>
              <li>• Customer service automation and chatbots</li>
              <li>• Regulatory compliance and reporting</li>
            </ul>
            <Link href="/case-studies/ai-finance-automation-success-2026" className="text-blue-600 hover:text-blue-800 font-medium mt-4 inline-block">
              View Financial Case Studies →
            </Link>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Retail & E-commerce</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Personalized recommendation engines</li>
              <li>• Inventory optimization and demand forecasting</li>
              <li>• Customer journey analytics and optimization</li>
              <li>• Supply chain and logistics automation</li>
            </ul>
            <Link href="/case-studies/retail-ai-transformation" className="text-blue-600 hover:text-blue-800 font-medium mt-4 inline-block">
              View Retail Case Studies →
            </Link>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Manufacturing</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Predictive maintenance and quality control</li>
              <li>• Production optimization and automation</li>
              <li>• Supply chain intelligence and visibility</li>
              <li>• Worker safety and compliance monitoring</li>
            </ul>
            <Link href="/case-studies/ai-automation-manufacturing-success-2026" className="text-blue-600 hover:text-blue-800 font-medium mt-4 inline-block">
              View Manufacturing Case Studies →
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Solution Development Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Discovery</h3>
            <p className="text-gray-600 text-sm">Understand your business challenges and identify solution opportunities</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">2</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Design</h3>
            <p className="text-gray-600 text-sm">Architect custom solutions tailored to your specific requirements</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">3</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Develop</h3>
            <p className="text-gray-600 text-sm">Build and test solutions with rigorous quality assurance</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-orange-600">4</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Deploy</h3>
            <p className="text-gray-600 text-sm">Implement solutions and provide ongoing support and optimization</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Solutions?</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Proven Expertise</h3>
                <p className="text-gray-600 text-sm">10+ years of experience delivering enterprise solutions</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Scalable Architecture</h3>
                <p className="text-gray-600 text-sm">Solutions designed to grow with your business</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Security First</h3>
                <p className="text-gray-600 text-sm">Enterprise-grade security built into every solution</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                <p className="text-gray-600 text-sm">Round-the-clock monitoring and support services</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technology Stack</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">AI & Machine Learning</h3>
              <p className="text-gray-600 text-sm">TensorFlow, PyTorch, OpenAI, Computer Vision, NLP</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Cloud Platforms</h3>
              <p className="text-gray-600 text-sm">AWS, Azure, Google Cloud with multi-cloud strategies</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600 text-sm">React, Node.js, Python, Kubernetes, Docker</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Data & Analytics</h3>
              <p className="text-gray-600 text-sm">PostgreSQL, MongoDB, Redis, Apache Kafka, Elasticsearch</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Let's discuss how our solutions can address your specific business challenges 
          and drive measurable results for your organization.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Solution Consultation
          </Link>
          <Link 
            href="/case-studies" 
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </div>
  );
}