import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Smart Invoice Generator | Zion Tech Group',
  description: 'AI-powered invoice automation with smart templates, payment tracking, and financial analytics. Reduce billing time by 80% and get paid 30% faster.',
  keywords: 'invoice automation, smart invoicing, AI billing, payment tracking, financial analytics, invoice generator'
};

export default function SmartInvoiceGeneratorPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Smart Invoice Generator
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              AI-powered invoice automation with smart templates, payment tracking, and financial analytics. 
              Reduce billing time by 80% and get paid 30% faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="#features"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Powerful Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-3">AI-Powered Generation</h3>
                <p className="text-gray-600">
                  Automatically generate professional invoices using AI that learns from your business patterns.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-3">Smart Analytics</h3>
                <p className="text-gray-600">
                  Track payment patterns, identify late payers, and optimize your billing strategy.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Instant Processing</h3>
                <p className="text-gray-600">
                  Generate and send invoices in seconds with our lightning-fast automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Invoicing?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already saving time and getting paid faster with our AI-powered invoice generator.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Your Free Trial
          </Link>
        </div>
      </div>
    </div>
  );
}