import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import SEO from '../components/SEO';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import ContentShowcase, { featuredContent, trendingContent, latestContent } from '../components/ContentShowcase';
import EnhancedContentShowcase, { newFeaturedContent, trendingContent as newTrendingContent } from '../components/EnhancedContentShowcase';
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
      {/* Hero Section */}
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

      {/* New Content Banner */}
      <NewContentBanner variant="featured" />

      {/* Featured Content Showcase */}
      <EnhancedContentShowcase
        title="Revolutionary AI Content Just Released"
        subtitle="Discover the latest AI transformation strategies, real-world case studies, and implementation guides that are helping businesses achieve unprecedented growth and customer satisfaction."
        items={newFeaturedContent}
        variant="featured"
        viewAllHref="/blog"
      />

      {/* Services Section */}
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
            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-4">AI Automation</h3>
              <p className="text-gray-600 mb-4">
                Streamline your operations with intelligent automation solutions that deliver 300% productivity gains.
              </p>
              <Link href="/services/ai-automation" className="text-blue-600 hover:underline">
                Learn More →
              </Link>
            </div>
            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-600 mb-4">
                Scalable and secure cloud solutions for your business needs with 99.9% uptime guarantee.
              </p>
              <Link href="/services/cloud-infrastructure" className="text-blue-600 hover:underline">
                Learn More →
              </Link>
            </div>
            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-4">Micro SaaS</h3>
              <p className="text-gray-600 mb-4">
                Custom software solutions tailored to your specific requirements with rapid deployment.
              </p>
              <Link href="/services/micro-saas" className="text-blue-600 hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Content */}
      <EnhancedContentShowcase
        title="Trending AI Content"
        subtitle="Stay ahead with the most popular AI strategies and insights that are driving business success in 2025."
        items={newTrendingContent}
        variant="trending"
        viewAllHref="/blog"
      />

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-lg text-gray-600">
              Real metrics from our AI transformation projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">300%</div>
              <div className="text-sm text-gray-600">Average Productivity Gain</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-purple-600 mb-2">80%</div>
              <div className="text-sm text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Successful Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ companies already achieving unprecedented growth with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Start Your Transformation
            </Link>
            <Link 
              href="/case-studies" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}