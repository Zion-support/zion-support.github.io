import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us - Zion Tech Group',
  description: 'Learn about Zion Tech Group\'s mission to deliver cutting-edge AI, micro SaaS, and IT solutions to enterprises worldwide.',
  keywords: 'about Zion Tech Group, company mission, AI experts, IT solutions team',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Zion Tech Group</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            We are a leading technology company specializing in AI, micro SaaS, and comprehensive IT solutions 
            that drive digital transformation for enterprises worldwide.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                To empower businesses with cutting-edge AI technologies and scalable solutions that deliver 
                measurable ROI and competitive advantages.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 mb-4">
                To be the global leader in AI-powered business solutions, transforming how organizations 
                operate, innovate, and grow.
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us?</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span className="text-gray-700">Proven track record with Fortune 500 companies</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span className="text-gray-700">Expert team with 10+ years of AI and enterprise experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span className="text-gray-700">End-to-end solutions from strategy to implementation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span className="text-gray-700">24/7 support and maintenance</span>
              </li>
            </ul>
          </div>
          
          <div className="text-center">
            <Link 
              href="/contact" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}