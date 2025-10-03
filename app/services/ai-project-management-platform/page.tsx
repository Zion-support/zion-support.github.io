// import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  ClockIcon, 
  ChartBarIcon, 
  UsersIcon,
  CogIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'AI Project Management Platform | Zion Tech Group',
  description: 'Revolutionary AI-powered project management platform with intelligent automation, predictive analytics, and seamless team collaboration.',
  keywords: 'AI project management, project automation, team collaboration, predictive analytics, project planning, AI productivity',
};

export default function AIProjectManagementPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Project Management Platform
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transform your project management with AI-powered automation, predictive analytics, and intelligent team collaboration tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Get Started Today
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/portfolio" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Intelligent Project Management Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage cutting-edge AI to streamline project workflows, predict risks, and optimize team productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <ChartBarIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Predictive Analytics</h3>
              <p className="text-gray-600">
                AI-powered insights predict project risks, resource needs, and completion timelines with 95% accuracy.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <CogIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Automation</h3>
              <p className="text-gray-600">
                Automate routine tasks, resource allocation, and progress tracking to focus on strategic decisions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <UsersIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Team Collaboration</h3>
              <p className="text-gray-600">
                Intelligent team matching, workload balancing, and communication optimization for peak performance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <ClockIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Tracking</h3>
              <p className="text-gray-600">
                Live project dashboards with AI-powered status updates and milestone predictions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheckIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk Management</h3>
              <p className="text-gray-600">
                Proactive risk identification and mitigation strategies powered by machine learning algorithms.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-6">
                <StarIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Optimization</h3>
              <p className="text-gray-600">
                Continuous improvement recommendations based on historical data and industry best practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transform Your Project Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience unprecedented efficiency and success rates with our AI-powered platform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">40% Faster Project Delivery</h4>
                    <p className="text-gray-600">AI optimization reduces project timelines and accelerates delivery.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">90% Risk Reduction</h4>
                    <p className="text-gray-600">Predictive analytics identify and mitigate risks before they impact projects.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">25% Cost Savings</h4>
                    <p className="text-gray-600">Optimized resource allocation and automated processes reduce operational costs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Enhanced Team Productivity</h4>
                    <p className="text-gray-600">Intelligent task assignment and collaboration tools boost team efficiency.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation Process</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">1</div>
                  <span className="text-gray-700">Project Assessment & Setup</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">2</div>
                  <span className="text-gray-700">AI Model Training & Integration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">3</div>
                  <span className="text-gray-700">Team Training & Onboarding</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">4</div>
                  <span className="text-gray-700">Go-Live & Continuous Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Your Project Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of companies already using our AI platform to deliver projects faster, cheaper, and more successfully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              Start Your Free Trial
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/case-studies" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}