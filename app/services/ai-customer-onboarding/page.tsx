import React from 'react';
import Link from 'next/link';
import { 
  UserPlusIcon, 
  CheckCircleIcon, 
  ClockIcon, 
  ChartBarIcon,
  CogIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'AI Customer Onboarding | Zion Tech Group',
  description: 'Intelligent customer onboarding platform with automated workflows, personalized experiences, and seamless integration.',
  keywords: 'AI customer onboarding, automated onboarding, customer experience, personalized onboarding, customer success, onboarding automation',
};

export default function AICustomerOnboarding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Customer Onboarding
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto">
              Transform customer onboarding with AI-powered personalization, automated workflows, and intelligent success tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center"
              >
                Get Started Today
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/portfolio" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center"
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
              Intelligent Onboarding Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create personalized, efficient onboarding experiences that drive customer success and reduce churn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <UserPlusIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personalized Journeys</h3>
              <p className="text-gray-600">
                AI creates unique onboarding paths based on customer profile, industry, and goals.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-6">
                <CogIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Workflows</h3>
              <p className="text-gray-600">
                Smart automation handles document collection, verification, and account setup.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <ChartBarIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Success Tracking</h3>
              <p className="text-gray-600">
                Real-time monitoring of onboarding progress and early warning for at-risk customers.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <HeartIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Engagement Optimization</h3>
              <p className="text-gray-600">
                AI-powered recommendations for optimal touchpoints and engagement strategies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheckIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Compliance Automation</h3>
              <p className="text-gray-600">
                Automated compliance checks and document verification for regulatory requirements.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <ClockIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Time Optimization</h3>
              <p className="text-gray-600">
                Streamlined processes reduce onboarding time from weeks to days.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Flow Section */}
      <div className="py-20 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless Onboarding Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial signup to first value realization, our AI guides customers every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlusIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">1. Welcome & Setup</h3>
              <p className="text-sm text-gray-600">Personalized welcome experience and initial configuration</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CogIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">2. Data Collection</h3>
              <p className="text-sm text-gray-600">Smart forms and document collection with validation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">3. Verification</h3>
              <p className="text-sm text-gray-600">Automated verification and compliance checks</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">4. Activation</h3>
              <p className="text-sm text-gray-600">Go-live support and success milestone tracking</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transform Your Customer Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deliver exceptional onboarding experiences that drive customer success and business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">75% Faster Time to Value</h4>
                    <p className="text-gray-600">Streamlined onboarding gets customers productive faster.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">40% Reduction in Churn</h4>
                    <p className="text-gray-600">Better onboarding experiences lead to higher retention rates.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">90% Automation Rate</h4>
                    <p className="text-gray-600">Minimal manual intervention required for standard onboarding.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Enhanced Customer Satisfaction</h4>
                    <p className="text-gray-600">Personalized experiences drive higher satisfaction scores.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Average Onboarding Time:</span>
                  <span className="font-semibold text-purple-600">2.3 days</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Customer Satisfaction:</span>
                  <span className="font-semibold text-purple-600">4.8/5.0</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Completion Rate:</span>
                  <span className="font-semibold text-purple-600">94%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Time to First Value:</span>
                  <span className="font-semibold text-purple-600">24 hours</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-purple-100 rounded-lg">
                <p className="text-purple-800 font-semibold text-center">
                  Average customer success rate: 96%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Customer Onboarding?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join leading companies already delivering exceptional onboarding experiences with our AI platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center"
            >
              Start Your Free Trial
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/case-studies" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}