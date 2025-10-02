import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Solutions - Zion Tech Group',
  description: 'Comprehensive AI and technology solutions for enterprise transformation and digital innovation.',
  keywords: 'AI solutions, enterprise solutions, technology solutions, digital transformation',
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and technology solutions designed to transform your business 
              and drive unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Get Started
              </Link>
              <Link 
                href="/case-studies" 
                className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Solution Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end solutions covering every aspect of digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI & Machine Learning</h3>
              <p className="text-gray-600 mb-6">
                Advanced AI solutions including predictive analytics, automation, and intelligent decision-making systems.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Predictive Analytics</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Autonomous Systems</li>
              </ul>
              <Link 
                href="/services/ai-services" 
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Micro SaaS Solutions</h3>
              <p className="text-gray-600 mb-6">
                Scalable software-as-a-service applications designed for rapid deployment and growth.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Rapid Development</li>
                <li>• Scalable Architecture</li>
                <li>• Cloud-Native Design</li>
                <li>• API-First Approach</li>
              </ul>
              <Link 
                href="/services/micro-saas" 
                className="text-green-600 font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Infrastructure</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive IT services including cloud migration, DevOps, and infrastructure management.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Cloud Migration</li>
                <li>• DevOps & SRE</li>
                <li>• Infrastructure Management</li>
                <li>• Security & Compliance</li>
              </ul>
              <Link 
                href="/services/it-services" 
                className="text-purple-600 font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-lg">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Blockchain Solutions</h3>
              <p className="text-gray-600 mb-6">
                Secure, transparent blockchain implementations for supply chain, finance, and data integrity.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Smart Contracts</li>
                <li>• Supply Chain Tracking</li>
                <li>• Digital Identity</li>
                <li>• Decentralized Applications</li>
              </ul>
              <Link 
                href="/services/blockchain-solutions" 
                className="text-yellow-600 font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-lg">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cybersecurity</h3>
              <p className="text-gray-600 mb-6">
                Advanced security solutions protecting your digital assets and ensuring compliance.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Threat Detection</li>
                <li>• Security Monitoring</li>
                <li>• Compliance Management</li>
                <li>• Incident Response</li>
              </ul>
              <Link 
                href="/services/cybersecurity-solutions" 
                className="text-red-600 font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Analytics</h3>
              <p className="text-gray-600 mb-6">
                Transform your data into actionable insights with advanced analytics and business intelligence.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Business Intelligence</li>
                <li>• Real-time Analytics</li>
                <li>• Data Visualization</li>
                <li>• Predictive Modeling</li>
              </ul>
              <Link 
                href="/services/data-analytics" 
                className="text-indigo-600 font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored solutions designed for specific industry challenges and opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                AI-powered manufacturing optimization, predictive maintenance, and quality control.
              </p>
              <Link 
                href="/services/manufacturing-ai-platform" 
                className="text-blue-600 font-semibold hover:underline"
              >
                Manufacturing AI Platform →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Healthcare</h3>
              <p className="text-gray-600 mb-4">
                Healthcare AI solutions for patient care, diagnostics, and operational efficiency.
              </p>
              <Link 
                href="/services/healthcare-scheduling-saas" 
                className="text-blue-600 font-semibold hover:underline"
              >
                Healthcare Solutions →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Supply Chain</h3>
              <p className="text-gray-600 mb-4">
                Intelligent supply chain management with AI-powered optimization and forecasting.
              </p>
              <Link 
                href="/services/supply-chain-intelligence" 
                className="text-blue-600 font-semibold hover:underline"
              >
                Supply Chain Intelligence →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Finance</h3>
              <p className="text-gray-600 mb-4">
                FinTech solutions including fraud detection, risk management, and automated trading.
              </p>
              <Link 
                href="/services/ai-financial-analytics" 
                className="text-blue-600 font-semibold hover:underline"
              >
                Financial Solutions →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Retail</h3>
              <p className="text-gray-600 mb-4">
                Retail AI solutions for inventory management, customer analytics, and personalization.
              </p>
              <Link 
                href="/services/ai-retail-solutions" 
                className="text-blue-600 font-semibold hover:underline"
              >
                Retail Solutions →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">IoT & Edge</h3>
              <p className="text-gray-600 mb-4">
                IoT solutions and edge computing for real-time data processing and automation.
              </p>
              <Link 
                href="/services/iot-solutions" 
                className="text-blue-600 font-semibold hover:underline"
              >
                IoT Solutions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let us help you choose the right solutions for your specific needs and challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Custom Solution
            </Link>
            <Link 
              href="/enterprise" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Enterprise Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}