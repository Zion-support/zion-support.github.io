import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import SEO from '../../../components/SEO';
import ErrorBoundary from '../../../components/ErrorBoundary';

export const metadata: Metadata = {
  title: 'Fortune 500 AI Transformation: $3.2B Company Achieves 650% ROI with Intelligent Automation',
  description: 'How a global manufacturing leader transformed operations and achieved unprecedented results through comprehensive AI implementation.',
  keywords: ['Fortune 500', 'AI Transformation', 'ROI', 'Case Study', 'Success Story', '650% ROI'],
};

export default function Fortune500AITransformationPage() {
  return (
    <ErrorBoundary>
      <SEO
        title="Fortune 500 AI Transformation: $3.2B Company Achieves 650% ROI with Intelligent Automation"
        description="How a global manufacturing leader transformed operations and achieved unprecedented results through comprehensive AI implementation."
        keywords="Fortune 500, AI Transformation, ROI, Case Study, Success Story, 650% ROI"
        url="/case-studies/fortune-500-ai-transformation-2025-ultimate-success"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">🏆 FORTUNE 500 SUCCESS STORY</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Fortune 500 AI Transformation: 650% ROI Success
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
                How a $3.2B manufacturing company achieved unprecedented results through comprehensive AI implementation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Consultation
                </Link>
                <Link
                  href="/resources/ai-implementation-ultimate-roadmap-2025"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  View Implementation Guide
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}