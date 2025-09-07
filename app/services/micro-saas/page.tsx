import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Micro SaaS Solutions | Zion Tech Group',
  description: 'Professional micro SaaS solutions for your business needs.',
  keywords: 'micro saas, software as a service, business solutions, technology',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Micro SaaS Solutions | Zion Tech Group',
    description: 'Professional micro SaaS solutions for your business needs.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zion Tech Group',
  },
};

export default function MicroSaaSPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Micro SaaS Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative micro SaaS products designed to solve specific business challenges 
            with powerful, focused solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">AI-Powered Tools</h3>
            <p className="text-gray-600 mb-4">
              Intelligent automation tools that streamline your workflows.
            </p>
            <a href="/contact" className="text-blue-600 hover:text-blue-800">
              Learn More →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Business Analytics</h3>
            <p className="text-gray-600 mb-4">
              Data-driven insights to help you make better decisions.
            </p>
            <a href="/contact" className="text-blue-600 hover:text-blue-800">
              Learn More →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Process Automation</h3>
            <p className="text-gray-600 mb-4">
              Automate repetitive tasks and boost productivity.
            </p>
            <a href="/contact" className="text-blue-600 hover:text-blue-800">
              Learn More →
            </a>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us to discuss your micro SaaS needs and discover how we can help.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}