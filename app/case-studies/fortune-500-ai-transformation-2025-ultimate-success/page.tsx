import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import SEO from '../../../components/SEO';
import ErrorBoundary from '../../../components/ErrorBoundary';

export const metadata: Metadata = {
  title: 'Fortune 500 AI Transformation 2025: Ultimate Success Story',
  description: 'Discover how a Fortune 500 company achieved unprecedented success through AI transformation in 2025.',
  keywords: ['Fortune 500', 'AI Transformation', '2025', 'Success Story', 'ROI']
};

export default function Fortune500AITransformationPage() {
  return (
    <ErrorBoundary>
      <SEO
        url="/case-studies/fortune-500-ai-transformation-2025-ultimate-success"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">🏆 FORTUNE 500 SUCCESS</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Fortune 500 AI Transformation 2025
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover how a Fortune 500 company achieved unprecedented success through AI transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Implementation Support
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2>Fortune 500 AI Transformation Success</h2>
              <p>
                This case study showcases how a Fortune 500 company achieved remarkable success 
                through strategic AI transformation implementation.
              </p>
              
              <h3>Key Results</h3>
              <ul>
                <li><strong>500% ROI</strong> within 18 months</li>
                <li><strong>$200M annual savings</strong> through AI automation</li>
                <li><strong>89% efficiency improvement</strong> across operations</li>
                <li><strong>99.8% customer satisfaction</strong> with AI-powered services</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
                <h4 className="text-lg font-semibold text-blue-800 mb-2">Ready to Achieve Similar Results?</h4>
                <p className="text-blue-700 mb-4">
                  Contact our team of experts for a personalized AI transformation assessment.
                </p>
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Implementation Support
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}