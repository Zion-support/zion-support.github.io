import React from 'react';
import { Metadata } from 'next';
import { Link } from 'react-router-dom';

export const metadata: Metadata = {
  title: 'AI Workflow Automation Platform - Zion Tech Group',
  description: 'Automate complex business workflows with AI-powered automation. Reduce manual tasks, increase efficiency, and scale operations.',
  keywords: 'workflow automation, AI automation, business process automation, RPA, intelligent automation',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AIWorkflowAutomationPlatform() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Workflow Automation Platform</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Streamline your business operations with intelligent workflow automation. 
          Reduce manual tasks, eliminate errors, and scale your operations efficiently.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <div className="bg-blue-50 px-4 py-2 rounded-lg">
            <span className="text-blue-800 font-semibold">Starting from $299/month</span>
          </div>
          <div className="bg-green-50 px-4 py-2 rounded-lg">
            <span className="text-green-800 font-semibold">30-day free trial</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Visual Workflow Builder</h3>
          <p className="text-gray-600 mb-4">
            Create complex workflows with our drag-and-drop interface. No coding required for most automation tasks.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Drag-and-drop interface</li>
            <li>• Pre-built templates</li>
            <li>• Conditional logic</li>
            <li>• Multi-step processes</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Decision Making</h3>
          <p className="text-gray-600 mb-4">
            Let AI make intelligent decisions within your workflows based on data patterns and business rules.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Smart routing</li>
            <li>• Predictive analytics</li>
            <li>• Anomaly detection</li>
            <li>• Dynamic optimization</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Integration Hub</h3>
          <p className="text-gray-600 mb-4">
            Connect with 500+ popular business applications and services through our extensive integration library.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• CRM systems</li>
            <li>• Email platforms</li>
            <li>• Cloud storage</li>
            <li>• Payment processors</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Monitoring</h3>
          <p className="text-gray-600 mb-4">
            Monitor workflow performance in real-time with detailed analytics and instant alerts for issues.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Performance dashboards</li>
            <li>• Error tracking</li>
            <li>• Success metrics</li>
            <li>• Custom alerts</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>
          <p className="text-gray-600 mb-4">
            Bank-level security with encryption, access controls, and compliance with industry standards.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• End-to-end encryption</li>
            <li>• Role-based access</li>
            <li>• Audit trails</li>
            <li>• SOC 2 compliance</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Development</h3>
          <p className="text-gray-600 mb-4">
            Need specialized automation? Our team can develop custom workflows tailored to your unique requirements.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Custom integrations</li>
            <li>• Specialized workflows</li>
            <li>• API development</li>
            <li>• Dedicated support</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Use Cases</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">📧 Email Marketing</h3>
            <p className="text-gray-600">Automate email campaigns, lead nurturing, and customer onboarding sequences.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">📊 Data Processing</h3>
            <p className="text-gray-600">Automate data collection, cleaning, and reporting across multiple sources.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">💼 Customer Service</h3>
            <p className="text-gray-600">Route tickets, send follow-ups, and escalate issues automatically.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">💰 Financial Operations</h3>
            <p className="text-gray-600">Automate invoicing, payment processing, and financial reporting.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">📋 HR Processes</h3>
            <p className="text-gray-600">Streamline recruitment, onboarding, and employee management workflows.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🛒 E-commerce</h3>
            <p className="text-gray-600">Automate order processing, inventory management, and customer communications.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
            <div className="text-3xl font-bold text-blue-600 mb-4">$299<span className="text-lg text-gray-500">/month</span></div>
            <ul className="space-y-2 text-gray-600">
              <li>• 1,000 workflow executions/month</li>
              <li>• 10 integrations</li>
              <li>• Basic analytics</li>
              <li>• Email support</li>
            </ul>
            <Link to="/contact" className="block mt-6 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
          </div>
          
          <div className="border-2 border-blue-500 rounded-lg p-6 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
              Most Popular
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional</h3>
            <div className="text-3xl font-bold text-blue-600 mb-4">$799<span className="text-lg text-gray-500">/month</span></div>
            <ul className="space-y-2 text-gray-600">
              <li>• 10,000 workflow executions/month</li>
              <li>• 50 integrations</li>
              <li>• Advanced analytics</li>
              <li>• AI-powered optimization</li>
              <li>• Priority support</li>
            </ul>
            <Link to="/contact" className="block mt-6 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
            <div className="text-3xl font-bold text-blue-600 mb-4">Custom</div>
            <ul className="space-y-2 text-gray-600">
              <li>• Unlimited executions</li>
              <li>• Unlimited integrations</li>
              <li>• Custom analytics</li>
              <li>• White-label solution</li>
              <li>• Dedicated account manager</li>
            </ul>
            <Link to="/contact" className="block mt-6 bg-gray-600 text-white text-center py-2 rounded-lg hover:bg-gray-700 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Automate Your Workflows?</h2>
        <p className="text-gray-600 mb-6">Join thousands of businesses already saving time and reducing errors with our automation platform.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Start Free Trial
          </Link>
          <Link to="/contact" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
            Schedule Demo
          </Link>
        </div>
        <div className="mt-6 text-sm text-gray-500">
          <p>📞 Call us: <a href="tel:+13024640950" className="text-blue-600 hover:underline">+1 302 464 0950</a></p>
          <p>📧 Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:underline">kleber@ziontechgroup.com</a></p>
        </div>
      </div>
    </div>
  );
}