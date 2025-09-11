import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import SEO from '../components/SEO';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import ContentShowcase, { featuredContent, trendingContent, latestContent } from '../components/ContentShowcase';
import EnhancedContentShowcase from '../components/EnhancedContentShowcase';
import NewContentBanner from '../components/NewContentBanner';
import NewContentShowcase from '../components/NewContentShowcase';
import EnhancedNewsletter from '../components/EnhancedNewsletter';
import EnhancedNewsletterSignup from '../components/EnhancedNewsletterSignup';
import SuccessMetrics, { defaultMetrics, contentMetrics } from '../components/SuccessMetrics';

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions.',
  keywords: 'AI automation, cloud computing, micro SaaS, technology consulting, enterprise solutions, digital transformation',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
              <Link 
                href="/services" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive technology solutions for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">AI Automation</h3>
              <p className="text-gray-600">
                Streamline your operations with intelligent automation solutions.
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-600">
                Scalable and secure cloud solutions for your business needs.
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Micro SaaS</h3>
              <p className="text-gray-600">
                Custom software solutions tailored to your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}