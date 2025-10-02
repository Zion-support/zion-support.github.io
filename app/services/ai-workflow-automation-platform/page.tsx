import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Workflow Automation Platform - Zion Tech Group',
  description: 'Automate complex business processes with our AI-powered workflow platform. Reduce manual work, eliminate errors, and accelerate operations.',
  keywords: 'workflow automation, business process automation, AI automation, process optimization, digital transformation',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AIWorkflowAutomation() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Workflow Automation Platform</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Streamline your business operations with intelligent workflow automation. 
          Reduce manual tasks, eliminate bottlenecks, and accelerate your digital transformation.
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-12">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">75%</div>
            <div className="text-gray-600">Time Savings</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
            <div className="text-gray-600">Error Reduction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">50%</div>
            <div className="text-gray-600">Cost Reduction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Automated Operations</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Visual Workflow Builder</h3>
          <p className="text-gray-600 mb-4">
            Create complex workflows with our intuitive drag-and-drop interface. No coding required.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Drag-and-drop interface</li>
            <li>• Pre-built templates</li>
            <li>• Conditional logic</li>
            <li>• Multi-step processes</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Decision Making</h3>
          <p className="text-gray-600 mb-4">
            Let AI make intelligent decisions based on data patterns and business rules.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Smart routing</li>
            <li>• Automated approvals</li>
            <li>• Risk assessment</li>
            <li>• Predictive triggers</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">System Integrations</h3>
          <p className="text-gray-600 mb-4">
            Connect with 500+ applications and services through pre-built connectors and APIs.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• CRM integrations</li>
            <li>• ERP connections</li>
            <li>• Email platforms</li>
            <li>• Cloud services</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Process Monitoring</h3>
          <p className="text-gray-600 mb-4">
            Monitor workflow performance in real-time with comprehensive analytics and reporting.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Real-time monitoring</li>
            <li>• Performance metrics</li>
            <li>• Bottleneck identification</li>
            <li>• Custom dashboards</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Exception Handling</h3>
          <p className="text-gray-600 mb-4">
            Automatically handle exceptions and errors with intelligent retry mechanisms and alerts.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Automatic retries</li>
            <li>• Error notifications</li>
            <li>• Fallback processes</li>
            <li>• Manual intervention</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance & Audit</h3>
          <p className="text-gray-600 mb-4">
            Ensure compliance with industry regulations through comprehensive audit trails and controls.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Audit trails</li>
            <li>• Compliance reporting</li>
            <li>• Access controls</li>
            <li>• Data governance</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Starter</h3>
            <div className="text-3xl font-bold text-green-600 mb-4">$399/month</div>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Up to 5 workflows</li>
              <li>• Basic integrations</li>
              <li>• Standard templates</li>
              <li>• Email support</li>
              <li>• Basic analytics</li>
            </ul>
            <Link href="/contact" className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-center block">
              Get Started
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-green-500">
            <div className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">Most Popular</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional</h3>
            <div className="text-3xl font-bold text-green-600 mb-4">$999/month</div>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Up to 25 workflows</li>
              <li>• Advanced integrations</li>
              <li>• AI decision making</li>
              <li>• Priority support</li>
              <li>• Advanced analytics</li>
              <li>• API access</li>
            </ul>
            <Link href="/contact" className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-center block">
              Get Started
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
            <div className="text-3xl font-bold text-green-600 mb-4">Custom</div>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Unlimited workflows</li>
              <li>• Custom integrations</li>
              <li>• Dedicated support</li>
              <li>• On-premise deployment</li>
              <li>• Custom AI models</li>
              <li>• SLA guarantee</li>
            </ul>
            <Link href="/contact" className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-center block">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Use Cases</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">HR Onboarding</h3>
            <p className="text-gray-600 text-sm">
              Automate employee onboarding from application to first day, including document collection, system access, and training assignments.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Invoice Processing</h3>
            <p className="text-gray-600 text-sm">
              Automatically process invoices from receipt to payment, including validation, approval routing, and accounting system updates.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Customer Support</h3>
            <p className="text-gray-600 text-sm">
              Route support tickets, escalate issues, and automate responses based on ticket type and customer priority.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Sales Pipeline</h3>
            <p className="text-gray-600 text-sm">
              Automate lead qualification, follow-up sequences, and deal progression through your sales pipeline.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Compliance Monitoring</h3>
            <p className="text-gray-600 text-sm">
              Monitor regulatory compliance, generate reports, and trigger corrective actions automatically.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">IT Operations</h3>
            <p className="text-gray-600 text-sm">
              Automate IT incident response, system monitoring, and maintenance scheduling across your infrastructure.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Automate Your Business Processes Today</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of companies using our AI workflow automation platform to streamline operations, reduce costs, and accelerate growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors">
            Schedule Demo
          </Link>
          <Link href="tel:+13024640950" className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
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