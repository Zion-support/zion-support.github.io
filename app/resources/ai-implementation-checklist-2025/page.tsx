import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon, UserIcon, TagIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'AI Implementation Checklist 2025: Your Complete Guide to Successful AI Deployment',
  description: 'A comprehensive, step-by-step checklist for implementing AI solutions in your organization. Includes timelines, budgets, success metrics, and proven strategies for 95% implementation success rate.',
  keywords: ['Implementation Guide', 'AI Strategy', 'Checklist', 'Best Practices', 'ROI'],
  openGraph: {
    title: 'AI Implementation Checklist 2025: Your Complete Guide to Successful AI Deployment',
    description: 'A comprehensive, step-by-step checklist for implementing AI solutions in your organization. Includes timelines, budgets, success metrics, and proven strategies for 95% implementation success rate.',
    type: 'article',
    publishedTime: '2025-01-17',
    authors: ['Zion Tech Group'],
  },
};

export default function ResourceGuide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-white hover:text-gray-200 mb-8 transition-colors">
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🎯 RESOURCE GUIDE</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI Implementation Checklist 2025
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
            The definitive step-by-step guide to AI success. Don't miss any critical steps in your transformation journey. 
            Used by 500+ successful companies with 95% success rate.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-2" />
              January 17, 2025
            </div>
            <div className="flex items-center">
              <UserIcon className="w-4 h-4 mr-2" />
              Zion Tech Group
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="w-4 h-4 mr-2" />
              95% Success Rate
            </div>
          </div>
        </div>
      </div>

      {/* Checklist Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              This comprehensive checklist ensures your AI implementation succeeds. Follow these proven steps 
              used by Fortune 500 companies to achieve 95% success rates and 300%+ ROI.
            </p>
          </div>

          {/* Phase 1: Planning & Strategy */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Phase 1: Planning & Strategy (Weeks 1-2)</h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Define AI Objectives</h3>
                  <p className="text-gray-600">Set clear, measurable goals aligned with business strategy</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Assess Current Infrastructure</h3>
                  <p className="text-gray-600">Evaluate existing systems, data quality, and technical readiness</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Secure Executive Buy-in</h3>
                  <p className="text-gray-600">Get leadership commitment and budget approval</p>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2: Data Preparation */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Phase 2: Data Preparation (Weeks 3-4)</h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Data Audit & Quality Assessment</h3>
                  <p className="text-gray-600">Review data sources, quality, and accessibility</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Data Cleaning & Preprocessing</h3>
                  <p className="text-gray-600">Clean, normalize, and prepare data for AI models</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Data Security & Compliance</h3>
                  <p className="text-gray-600">Ensure GDPR, HIPAA, and industry compliance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3: Implementation */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Phase 3: Implementation (Weeks 5-8)</h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Choose AI Technology Stack</h3>
                  <p className="text-gray-600">Select appropriate AI frameworks and tools</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Model Development & Training</h3>
                  <p className="text-gray-600">Build and train AI models with your data</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Integration & Testing</h3>
                  <p className="text-gray-600">Integrate AI into existing systems and test thoroughly</p>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 4: Deployment & Monitoring */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Phase 4: Deployment & Monitoring (Weeks 9-12)</h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Pilot Deployment</h3>
                  <p className="text-gray-600">Start with limited rollout to test and refine</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Performance Monitoring</h3>
                  <p className="text-gray-600">Track metrics, accuracy, and business impact</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Full Scale Rollout</h3>
                  <p className="text-gray-600">Deploy across entire organization</p>
                </div>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Metrics to Track</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Technical Metrics</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Model accuracy & precision</li>
                  <li>• System uptime & reliability</li>
                  <li>• Processing speed & efficiency</li>
                  <li>• Data quality scores</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Business Metrics</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• ROI and cost savings</li>
                  <li>• Process automation rate</li>
                  <li>• User adoption & satisfaction</li>
                  <li>• Revenue impact</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your AI Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get expert guidance and ensure your AI implementation succeeds with our proven methodology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get AI Implementation Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}