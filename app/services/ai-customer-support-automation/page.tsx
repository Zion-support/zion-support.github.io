import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import React from 'react';

export const metadata = {
  title: 'AI Customer Support Automation - Zion Tech Group',
  description: 'Professional AI customer support automation solutions for your business needs.'
};

export default function AiCustomerSupportAutomationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Customer Support Automation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional AI customer support automation solutions for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Chatbot Integration</h3>
                <p className="text-gray-600 mb-4">
                  Intelligent chatbots that provide instant customer support 24/7.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Natural language processing</li>
                  <li>• Multi-language support</li>
                  <li>• Seamless handoff to humans</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Ticket Automation</h3>
                <p className="text-gray-600 mb-4">
                  Automated ticket routing and prioritization for faster resolution.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Smart categorization</li>
                  <li>• Priority assignment</li>
                  <li>• SLA monitoring</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Knowledge Base</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered knowledge base that learns and improves over time.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Self-updating content</li>
                  <li>• Context-aware responses</li>
                  <li>• Analytics and insights</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us?</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">24/7 Availability</h3>
                  <p className="text-gray-600">Never miss a customer inquiry with our round-the-clock AI support.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Cost Effective</h3>
                  <p className="text-gray-600">Reduce support costs while improving customer satisfaction.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Scalable Solution</h3>
                  <p className="text-gray-600">Grows with your business and handles increasing support volume.</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}