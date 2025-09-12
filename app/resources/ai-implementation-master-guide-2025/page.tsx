import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Tag, Star, Download, BookOpen, FileText, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Implementation Master Guide 2025: Complete 150-Page Playbook',
  description: 'Master AI implementation with our comprehensive 150-page guide. Step-by-step framework, checklists, templates, and proven strategies for successful AI transformation.',
  keywords: 'AI implementation, AI guide, AI transformation, AI strategy, AI roadmap, AI best practices, AI templates',
  openGraph: {
    title: 'AI Implementation Master Guide 2025: Complete 150-Page Playbook',
    description: 'Master AI implementation with our comprehensive 150-page guide. Step-by-step framework, checklists, templates, and proven strategies for successful AI transformation.',
    type: 'article',
    publishedTime: '2025-01-17T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI', 'Implementation', 'Guide', 'Strategy', 'Transformation'],
  },
};

const guideStats = [
  { label: 'Pages', value: '150+', icon: BookOpen },
  { label: 'Templates', value: '25+', icon: FileText },
  { label: 'Checklists', value: '15+', icon: CheckCircle },
  { label: 'Video Tutorials', value: '12+', icon: Download },
];

export default function AIImplementationMasterGuide2025() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Master Resource
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              AI Implementation Master Guide 2025
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto">
              Complete 150-Page Playbook with Templates, Checklists, and Proven Strategies
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-purple-200">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                150+ pages
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                Implementation Guide
              </div>
              <div className="flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Templates Included
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {guideStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Complete AI Implementation Playbook</h2>
            <p className="text-lg text-gray-600 mb-8">
              This comprehensive 150-page guide is the result of analyzing over 500 successful AI implementations 
              across industries. It provides everything you need to successfully implement AI in your organization, 
              from initial strategy development to full-scale deployment and optimization.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
            <ul className="list-disc list-inside text-lg text-gray-600 mb-8 space-y-2">
              <li><strong>Proven Frameworks:</strong> Tested methodologies from successful AI implementations</li>
              <li><strong>Practical Templates:</strong> Ready-to-use documents and tools you can customize</li>
              <li><strong>Real Case Studies:</strong> Detailed examples from Fortune 500 companies</li>
              <li><strong>Step-by-Step Processes:</strong> Clear, actionable instructions for each phase</li>
              <li><strong>Common Pitfalls:</strong> Learn from others' mistakes to avoid costly errors</li>
              <li><strong>ROI Optimization:</strong> Strategies to maximize returns on your AI investment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Complete AI Implementation Guide</h2>
          <p className="text-xl text-purple-100 mb-8">
            Download the complete 150-page guide with all templates, checklists, and tools. 
            Start your AI transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Download Full Guide
              <Download className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-colors"
            >
              Get Implementation Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}