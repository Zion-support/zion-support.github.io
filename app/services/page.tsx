import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Services | Zion Tech Group',
  description: 'Explore our comprehensive range of AI, micro SaaS, and IT services designed to transform your business.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-6 rounded-lg">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold text-white mb-4">AI Solutions</h3>
            <p className="text-gray-300 mb-4">
              Custom AI models, automation, and intelligent systems that transform your business operations.
            </p>
            <ul className="text-sm text-gray-400 space-y-1 mb-4">
              <li>• Machine Learning Models</li>
              <li>• Natural Language Processing</li>
              <li>• Computer Vision</li>
              <li>• Predictive Analytics</li>
            </ul>
            <Link
              href="/services/ai-solutions"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Learn More →
            </Link>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-4">Micro SaaS</h3>
            <p className="text-gray-300 mb-4">
              Scalable, secure micro SaaS products that solve specific business challenges.
            </p>
            <ul className="text-sm text-gray-400 space-y-1 mb-4">
              <li>• Custom Web Applications</li>
              <li>• API Development</li>
              <li>• Database Design</li>
              <li>• User Authentication</li>
            </ul>
            <Link
              href="/services/micro-saas"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Learn More →
            </Link>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <div className="text-4xl mb-4">☁️</div>
            <h3 className="text-xl font-semibold text-white mb-4">Cloud Infrastructure</h3>
            <p className="text-gray-300 mb-4">
              Scalable cloud solutions, DevOps, and infrastructure management for enterprise applications.
            </p>
            <ul className="text-sm text-gray-400 space-y-1 mb-4">
              <li>• Cloud Migration</li>
              <li>• Container Orchestration</li>
              <li>• CI/CD Pipelines</li>
              <li>• Monitoring & Logging</li>
            </ul>
            <Link
              href="/services/cloud"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Learn More →
            </Link>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <div className="text-4xl mb-4">⛓️</div>
            <h3 className="text-xl font-semibold text-white mb-4">Blockchain Solutions</h3>
            <p className="text-gray-300 mb-4">
              Smart contracts, DeFi platforms, and blockchain integration for secure, transparent operations.
            </p>
            <ul className="text-sm text-gray-400 space-y-1 mb-4">
              <li>• Smart Contract Development</li>
              <li>• DeFi Protocols</li>
              <li>• NFT Marketplaces</li>
              <li>• Security Auditing</li>
            </ul>
            <Link
              href="/services/blockchain"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Learn More →
            </Link>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-white mb-4">Data Analytics</h3>
            <p className="text-gray-300 mb-4">
              Transform raw data into actionable insights with advanced analytics and visualization tools.
            </p>
            <ul className="text-sm text-gray-400 space-y-1 mb-4">
              <li>• Data Warehousing</li>
              <li>• Business Intelligence</li>
              <li>• Real-time Dashboards</li>
              <li>• Predictive Modeling</li>
            </ul>
            <Link
              href="/services/analytics"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Learn More →
            </Link>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-white mb-4">Cybersecurity</h3>
            <p className="text-gray-300 mb-4">
              Comprehensive security solutions to protect your digital assets and ensure compliance.
            </p>
            <ul className="text-sm text-gray-400 space-y-1 mb-4">
              <li>• Security Audits</li>
              <li>• Penetration Testing</li>
              <li>• Compliance Consulting</li>
              <li>• Incident Response</li>
            </ul>
            <Link
              href="/services/security"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Learn More →
            </Link>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives real business value.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}