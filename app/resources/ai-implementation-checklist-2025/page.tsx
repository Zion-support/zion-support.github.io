import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon, UserIcon, TagIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import SEO from '../../../components/SEO';
import ErrorBoundary from '../../../components/ErrorBoundary';

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
    <ErrorBoundary>
      <SEO
        title="AI Implementation Checklist 2025: Your Complete Guide to Successful AI Deployment"
        description="A comprehensive, step-by-step checklist for implementing AI solutions in your organization. Includes timelines, budgets, success metrics, and proven strategies for 95% implementation success rate."
        keywords="Implementation Guide, AI Strategy, Checklist, Best Practices, ROI"
        url="/resources/ai-implementation-checklist-2025"
      />
      
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-6">
              <Link
                href="/resources"
                className="inline-flex items-center text-green-200 hover:text-white transition-colors"
              >
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                Back to Resources
              </Link>
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-200 border border-green-400/30">
                <TagIcon className="w-3 h-3 mr-1" />
                Implementation Guide
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white">
                <CalendarIcon className="w-3 h-3 mr-1" />
                15 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              AI Implementation Checklist 2025
            </h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              Your complete guide to successful AI deployment with proven strategies for 95% implementation success rate.
            </p>
          </div>
        </div>

        {/* Key Statistics */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                <div className="text-gray-600">Weeks Timeline</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">340%</div>
                <div className="text-gray-600">Average ROI</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Complete Implementation Checklist</h2>
              
              <p className="text-lg text-gray-600 mb-6">
                Follow this comprehensive checklist to ensure successful AI implementation in your organization. Each step is designed to maximize success and minimize risks.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pre-Implementation Phase (Weeks 1-2)</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Executive sponsorship and budget approval</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">AI readiness assessment completion</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Use case identification and prioritization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Project team assembly and roles definition</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Infrastructure Setup (Weeks 3-4)</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Cloud platform selection and setup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Data infrastructure preparation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Security framework implementation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Development environment configuration</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Solution Development (Weeks 5-8)</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-purple-500 mr-3" />
                    <span className="text-gray-700">Data preparation and feature engineering</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-purple-500 mr-3" />
                    <span className="text-gray-700">AI model development and training</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-purple-500 mr-3" />
                    <span className="text-gray-700">Model validation and testing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-purple-500 mr-3" />
                    <span className="text-gray-700">Deployment architecture design</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pilot Implementation (Weeks 9-10)</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-orange-500 mr-3" />
                    <span className="text-gray-700">Pilot environment deployment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-orange-500 mr-3" />
                    <span className="text-gray-700">User training and onboarding</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-orange-500 mr-3" />
                    <span className="text-gray-700">Performance monitoring and feedback collection</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-orange-500 mr-3" />
                    <span className="text-gray-700">Iterative improvements based on results</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Full Deployment (Weeks 11-12)</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-red-500 mr-3" />
                    <span className="text-gray-700">Enterprise-wide rollout</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-red-500 mr-3" />
                    <span className="text-gray-700">Comprehensive user training</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-red-500 mr-3" />
                    <span className="text-gray-700">Performance optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-red-500 mr-3" />
                    <span className="text-gray-700">Success metrics tracking and reporting</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8 mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Implement AI Successfully?</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Follow this checklist to achieve 95% implementation success rate and maximize your AI ROI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                  >
                    Get Implementation Support
                  </Link>
                  <Link
                    href="/tools/ai-readiness-assessment"
                    className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors text-center"
                  >
                    Take Readiness Assessment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}