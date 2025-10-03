import React from 'react';
import { Metadata } from 'next';
import { Link } from 'react-router-dom';

export const metadata: Metadata = {
  title: 'AI Document Automation Platform - Zion Tech Group',
  description: 'Automate document processing, data extraction, and workflow management with our AI-powered document automation platform. Reduce manual work by 90%.',
  keywords: 'document automation, AI document processing, data extraction, workflow automation, OCR, intelligent document management',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AIDocumentAutomation() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Document Automation Platform</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your document workflows with intelligent automation. Extract data, classify documents, 
          and automate approval processes with our advanced AI-powered platform.
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-12">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
            <div className="text-gray-600">Reduction in Manual Work</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">99.5%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Automated Processing</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Intelligent Data Extraction</h3>
          <p className="text-gray-600 mb-4">
            Automatically extract structured data from invoices, contracts, forms, and other documents using advanced OCR and NLP.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Invoice processing automation</li>
            <li>• Contract data extraction</li>
            <li>• Form field recognition</li>
            <li>• Multi-language support</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Document Classification</h3>
          <p className="text-gray-600 mb-4">
            Automatically categorize and route documents based on content, type, and business rules.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Automatic document routing</li>
            <li>• Content-based classification</li>
            <li>• Priority assignment</li>
            <li>• Compliance checking</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Workflow Automation</h3>
          <p className="text-gray-600 mb-4">
            Create automated approval workflows, notifications, and integrations with your existing systems.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Approval workflows</li>
            <li>• Automated notifications</li>
            <li>• System integrations</li>
            <li>• Exception handling</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance & Security</h3>
          <p className="text-gray-600 mb-4">
            Ensure document security and compliance with industry standards and regulations.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• GDPR compliance</li>
            <li>• HIPAA compliance</li>
            <li>• Audit trails</li>
            <li>• Data encryption</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics & Reporting</h3>
          <p className="text-gray-600 mb-4">
            Track document processing metrics, identify bottlenecks, and optimize workflows.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Processing metrics</li>
            <li>• Performance analytics</li>
            <li>• Cost tracking</li>
            <li>• ROI reporting</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Integration</h3>
          <p className="text-gray-600 mb-4">
            Seamlessly integrate with your existing systems and workflows through APIs and connectors.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• REST API access</li>
            <li>• Pre-built connectors</li>
            <li>• Custom integrations</li>
            <li>• Webhook support</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Starter</h3>
            <div className="text-3xl font-bold text-blue-600 mb-4">$299/month</div>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Up to 1,000 documents/month</li>
              <li>• Basic data extraction</li>
              <li>• Standard templates</li>
              <li>• Email support</li>
              <li>• Basic analytics</li>
            </ul>
            <Link href="/contact" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block">
              Get Started
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-500">
            <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">Most Popular</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional</h3>
            <div className="text-3xl font-bold text-blue-600 mb-4">$799/month</div>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Up to 10,000 documents/month</li>
              <li>• Advanced AI extraction</li>
              <li>• Custom workflows</li>
              <li>• Priority support</li>
              <li>• Advanced analytics</li>
              <li>• API access</li>
            </ul>
            <Link href="/contact" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block">
              Get Started
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
            <div className="text-3xl font-bold text-blue-600 mb-4">Custom</div>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Unlimited documents</li>
              <li>• Custom AI models</li>
              <li>• Dedicated support</li>
              <li>• On-premise deployment</li>
              <li>• Custom integrations</li>
              <li>• SLA guarantee</li>
            </ul>
            <Link href="/contact" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Our AI Document Automation?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry-Leading Accuracy</h3>
            <p className="text-gray-600 mb-4">
              Our AI models achieve 99.5% accuracy in document processing, reducing errors and ensuring reliable data extraction.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Scalable Architecture</h3>
            <p className="text-gray-600">
              Built on cloud-native architecture that scales automatically with your document volume, ensuring consistent performance.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Implementation</h3>
            <p className="text-gray-600 mb-4">
              Get up and running in days, not months. Our pre-built templates and easy configuration make deployment simple.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">ROI Guarantee</h3>
            <p className="text-gray-600">
              Most customers see ROI within 3 months through reduced manual work and improved accuracy.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to Automate Your Documents?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join hundreds of companies already using our AI document automation platform to streamline their workflows and reduce costs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
            Schedule Demo
          </Link>
          <Link href="tel:+13024640950" className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors">
            Call +1 302 464 0950
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:underline">kleber@ziontechgroup.com</a>
        </p>
      </div>
    </div>
  );
}