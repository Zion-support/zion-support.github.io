<<<<<<< HEAD
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'AI Email Optimizer - Zion Tech Group',
  description: 'AI-powered email optimization tool that analyzes, improves, and A/B tests your email campaigns for maximum engagement and conversion rates.',
=======
import Link from "next/link";

export const metadata = {
  title: "AI Email Optimizer | Zion Tech Group",
  description: "Professional AI email optimizer services for your business needs.",
  keywords: "ai-email-optimizer, services, business, technology"
>>>>>>> 70a7e91307b7b137e58209a8df72dcd2ceb02acb
};

export default function AIEmailOptimizerPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI Email Optimizer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your email marketing with AI-powered optimization that analyzes, 
            improves, and A/B tests your campaigns for maximum engagement and conversion rates.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">📧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Content Analysis</h3>
              <p className="text-gray-600">
                AI analyzes your email content for engagement potential and suggests improvements.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🧪</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">A/B Testing</h3>
              <p className="text-gray-600">
                Automated A/B testing to find the most effective subject lines and content.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Analytics</h3>
              <p className="text-gray-600">
                Detailed insights into open rates, click-through rates, and conversion metrics.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Optimal Timing</h3>
              <p className="text-gray-600">
                AI determines the best send times for each recipient based on their behavior.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personalization</h3>
              <p className="text-gray-600">
                Dynamic content personalization based on recipient preferences and behavior.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Deliverability</h3>
              <p className="text-gray-600">
                Advanced spam detection and deliverability optimization to reach inboxes.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Optimize Your Email Campaigns?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Start using AI to improve your email marketing performance and drive better results.
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
=======
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Email Optimizer
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional AI email optimizer services for your business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">📧</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Email Optimization
          </h3>
          <p className="text-gray-600">
            Optimize your email campaigns for better open rates and engagement.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🎯</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Targeted Campaigns
          </h3>
          <p className="text-gray-600">
            Create targeted email campaigns that resonate with your audience.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Performance Analytics
          </h3>
          <p className="text-gray-600">
            Track and analyze email performance to improve your campaigns.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Optimize Your Email Campaigns?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your email optimization needs and create intelligent solutions.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
        >
          Get Started Today
        </a>
>>>>>>> 70a7e91307b7b137e58209a8df72dcd2ceb02acb
      </div>
    </div>
  );
}