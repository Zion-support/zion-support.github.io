<<<<<<< HEAD
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Automated Workflow Builder - Zion Tech Group',
  description: 'Build and automate complex business workflows with our intuitive drag-and-drop workflow builder.',
=======
import Link from "next/link";

export const metadata = {
  title: "Automated Workflow Builder | Zion Tech Group",
  description: "Professional automated workflow builder services for your business needs.",
  keywords: "automated-workflow-builder, services, business, technology"
>>>>>>> 70a7e91307b7b137e58209a8df72dcd2ceb02acb
};

export default function AutomatedWorkflowBuilderPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Automated Workflow Builder
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create powerful, automated business workflows with our intuitive drag-and-drop builder. 
            Streamline processes, reduce manual work, and increase efficiency.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Drag & Drop Builder</h3>
              <p className="text-gray-600">
                Intuitive visual interface for building complex workflows without coding.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🔗</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Integration Hub</h3>
              <p className="text-gray-600">
                Connect with hundreds of apps and services to create seamless workflows.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Execution</h3>
              <p className="text-gray-600">
                Workflows run instantly with real-time monitoring and error handling.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics & Insights</h3>
              <p className="text-gray-600">
                Track workflow performance and identify optimization opportunities.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Security</h3>
              <p className="text-gray-600">
                Bank-level security with role-based access control and audit trails.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered</h3>
              <p className="text-gray-600">
                Smart suggestions and automated optimization for better workflow performance.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Build Your First Workflow?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Start automating your business processes today with our powerful workflow builder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Get Started
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
=======
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Automated Workflow Builder
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional automated workflow builder services for your business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🔄</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Workflow Automation
          </h3>
          <p className="text-gray-600">
            Automate business processes and workflows using AI technology.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">⚡</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Quick Setup
          </h3>
          <p className="text-gray-600">
            Set up automated workflows quickly and efficiently.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🎯</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Custom Workflows
          </h3>
          <p className="text-gray-600">
            Create custom workflows tailored to your specific needs.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Automate Your Workflows?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your workflow automation needs and create intelligent solutions.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
        >
          Get Started Today
        </a>
      </div>
>>>>>>> 70a7e91307b7b137e58209a8df72dcd2ceb02acb
    </div>
  );
}