import React from 'react';
import Link from 'next/link';
import { 
  UserGroupIcon, 
  CheckCircleIcon, 
  ClockIcon, 
  ChartBarIcon,
  CogIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  TargetIcon
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'AI Lead Generation Engine | Zion Tech Group',
  description: 'Intelligent lead generation platform with automated prospecting, qualification, and nurturing powered by advanced AI.',
  keywords: 'AI lead generation, automated prospecting, lead qualification, sales automation, AI sales, lead scoring, sales intelligence',
};

export default function AILeadGenerationEngine() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Lead Generation Engine
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-4xl mx-auto">
              Revolutionize your sales pipeline with AI-powered lead generation, qualification, and nurturing that delivers high-quality prospects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center justify-center"
              >
                Get Started Today
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/portfolio" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center justify-center"
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
              Intelligent Lead Generation Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of AI to identify, qualify, and nurture high-value prospects with unprecedented precision and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <TargetIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Prospecting</h3>
              <p className="text-gray-600">
                AI identifies ideal prospects based on company data, behavior patterns, and market signals.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <UserGroupIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lead Qualification</h3>
              <p className="text-gray-600">
                Intelligent scoring and qualification based on intent signals, engagement, and fit criteria.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <CogIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Outreach</h3>
              <p className="text-gray-600">
                Personalized, multi-channel outreach campaigns that adapt based on prospect behavior.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <ChartBarIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Predictive Analytics</h3>
              <p className="text-gray-600">
                Advanced analytics predict conversion probability and optimal engagement timing.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheckIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Quality</h3>
              <p className="text-gray-600">
                Continuous data enrichment and validation ensure accurate, up-to-date prospect information.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-6">
                <ClockIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Processing</h3>
              <p className="text-gray-600">
                Instant lead processing, scoring, and routing to the right sales team member.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Flow Section */}
      <div className="py-20 bg-gradient-to-r from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              End-to-End Lead Generation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From prospect identification to sales handoff, our AI orchestrates every step of the lead generation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TargetIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">1. Prospect Identification</h3>
              <p className="text-sm text-gray-600">AI identifies ideal prospects across multiple data sources</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">2. Lead Qualification</h3>
              <p className="text-sm text-gray-600">Intelligent scoring and qualification based on multiple criteria</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CogIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">3. Outreach Automation</h3>
              <p className="text-sm text-gray-600">Personalized, multi-channel outreach campaigns</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">4. Engagement Tracking</h3>
              <p className="text-sm text-gray-600">Real-time monitoring and response optimization</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">5. Sales Handoff</h3>
              <p className="text-sm text-gray-600">Qualified leads routed to sales team with context</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transform Your Sales Pipeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience unprecedented lead generation efficiency and conversion rates with our AI-powered platform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">300% More Qualified Leads</h4>
                    <p className="text-gray-600">AI-powered qualification ensures only high-value prospects reach your sales team.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">60% Higher Conversion Rates</h4>
                    <p className="text-gray-600">Personalized outreach and optimal timing drive better conversion outcomes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">75% Time Savings</h4>
                    <p className="text-gray-600">Automated processes free up sales teams to focus on closing deals.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Real-time Insights</h4>
                    <p className="text-gray-600">Continuous optimization based on performance data and market changes.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Lead Quality Score:</span>
                  <span className="font-semibold text-indigo-600">94%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Conversion Rate:</span>
                  <span className="font-semibold text-indigo-600">28%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Time to Qualification:</span>
                  <span className="font-semibold text-indigo-600">2.3 days</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Cost per Lead:</span>
                  <span className="font-semibold text-indigo-600">$45</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-indigo-100 rounded-lg">
                <p className="text-indigo-800 font-semibold text-center">
                  Average ROI: 450% in first year
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Your Lead Generation?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join leading companies already generating 3x more qualified leads with our AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center justify-center"
            >
              Start Your Free Trial
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/case-studies" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center justify-center"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}