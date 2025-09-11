import React from 'react';
import Link from 'next/link';

export default function AIImplementationChecklistPage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-br from-blue-50 to-indigo-100'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <div className='inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4'>
              <span>📋</span>
              Free Resource
            </div>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              AI Implementation Checklist: Complete Guide for 2025
            </h1>
            <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              Download our comprehensive checklist to ensure successful AI implementation in your organization. 
              Covering strategy, technology, security, and change management.
            </p>
            <div className='flex items-center justify-center gap-6 text-sm text-gray-500'>
              <span>📄 47-Page PDF</span>
              <span>⏱️ 2 min download</span>
              <span>👥 25,000+ downloads</span>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl text-center'>
            <h2 className='text-3xl font-bold mb-4'>Get Your Free AI Implementation Checklist</h2>
            <p className='text-lg mb-6 opacity-90'>
              Join 25,000+ professionals who have successfully implemented AI using our proven framework.
            </p>
            <div className='max-w-md mx-auto flex gap-4 mb-6'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none'
              />
              <button className='bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'>
                Download Free
              </button>
            </div>
            <p className='text-sm opacity-75'>
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>What's Included in This Checklist</h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              A comprehensive 47-page guide covering every aspect of AI implementation
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4'>
                <span className='text-blue-600 text-2xl'>🎯</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-800 mb-3'>Strategy & Planning</h3>
              <ul className='space-y-2 text-gray-600'>
                <li>• Business case development</li>
                <li>• ROI calculation framework</li>
                <li>• Stakeholder alignment</li>
                <li>• Success metrics definition</li>
                <li>• Risk assessment matrix</li>
              </ul>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4'>
                <span className='text-green-600 text-2xl'>🔧</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-800 mb-3'>Technology Selection</h3>
              <ul className='space-y-2 text-gray-600'>
                <li>• Platform evaluation criteria</li>
                <li>• Integration requirements</li>
                <li>• Scalability considerations</li>
                <li>• Vendor comparison matrix</li>
                <li>• Proof of concept guidelines</li>
              </ul>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4'>
                <span className='text-purple-600 text-2xl'>🛡️</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-800 mb-3'>Security & Compliance</h3>
              <ul className='space-y-2 text-gray-600'>
                <li>• Data privacy requirements</li>
                <li>• Security audit checklist</li>
                <li>• Compliance frameworks</li>
                <li>• Access control policies</li>
                <li>• Incident response plan</li>
              </ul>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4'>
                <span className='text-orange-600 text-2xl'>👥</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-800 mb-3'>Change Management</h3>
              <ul className='space-y-2 text-gray-600'>
                <li>• Training program design</li>
                <li>• Communication strategy</li>
                <li>• Resistance management</li>
                <li>• Adoption metrics</li>
                <li>• Feedback collection</li>
              </ul>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4'>
                <span className='text-red-600 text-2xl'>📊</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-800 mb-3'>Implementation & Monitoring</h3>
              <ul className='space-y-2 text-gray-600'>
                <li>• Phased rollout plan</li>
                <li>• Performance monitoring</li>
                <li>• Quality assurance</li>
                <li>• Optimization strategies</li>
                <li>• Continuous improvement</li>
              </ul>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4'>
                <span className='text-indigo-600 text-2xl'>📈</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-800 mb-3'>Scaling & Optimization</h3>
              <ul className='space-y-2 text-gray-600'>
                <li>• Expansion criteria</li>
                <li>• Performance benchmarks</li>
                <li>• Cost optimization</li>
                <li>• Advanced features</li>
                <li>• Future roadmap planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className='py-16'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Success Stories</h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              See how organizations have used this checklist to achieve successful AI implementations
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                  <span className='text-blue-600 font-semibold'>TC</span>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-800'>TechCorp Inc.</h4>
                  <p className='text-sm text-gray-600'>Fortune 500 Technology</p>
                </div>
              </div>
              <p className='text-gray-700 mb-4'>
                "This checklist helped us implement AI automation across 15 departments in just 6 months. 
                The structured approach saved us months of planning time."
              </p>
              <div className='text-sm text-blue-600 font-semibold'>
                Result: 40% cost reduction, 6-month implementation
              </div>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center'>
                  <span className='text-green-600 font-semibold'>RM</span>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-800'>RetailMax</h4>
                  <p className='text-sm text-gray-600'>E-commerce Platform</p>
                </div>
              </div>
              <p className='text-gray-700 mb-4'>
                "The security and compliance section was invaluable. We avoided potential GDPR violations 
                and implemented robust data protection from day one."
              </p>
              <div className='text-sm text-green-600 font-semibold'>
                Result: Zero compliance issues, 90% faster deployment
              </div>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center'>
                  <span className='text-purple-600 font-semibold'>FS</span>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-800'>Finance Solutions</h4>
                  <p className='text-sm text-gray-600'>Financial Services</p>
                </div>
              </div>
              <p className='text-gray-700 mb-4'>
                "The change management framework helped us achieve 95% user adoption within 3 months. 
                Our team was fully prepared for the transition."
              </p>
              <div className='text-sm text-purple-600 font-semibold'>
                Result: 95% adoption rate, 3-month rollout
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Additional Resources</h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Complement your AI implementation with these additional tools and guides
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <Link href='/resources/ai-roi-calculator' className='group'>
              <div className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200'>
                <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4'>
                  <span className='text-blue-600 text-xl'>🧮</span>
                </div>
                <h3 className='text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors'>
                  AI ROI Calculator
                </h3>
                <p className='text-gray-600 text-sm'>
                  Calculate potential returns on your AI investment with our interactive tool.
                </p>
              </div>
            </Link>

            <Link href='/resources/ai-vendor-comparison' className='group'>
              <div className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200'>
                <div className='w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4'>
                  <span className='text-green-600 text-xl'>⚖️</span>
                </div>
                <h3 className='text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors'>
                  Vendor Comparison Matrix
                </h3>
                <p className='text-gray-600 text-sm'>
                  Compare leading AI platforms across key criteria and features.
                </p>
              </div>
            </Link>

            <Link href='/resources/ai-security-checklist' className='group'>
              <div className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200'>
                <div className='w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4'>
                  <span className='text-red-600 text-xl'>🔒</span>
                </div>
                <h3 className='text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors'>
                  Security Checklist
                </h3>
                <p className='text-gray-600 text-sm'>
                  Comprehensive security audit checklist for AI implementations.
                </p>
              </div>
            </Link>

            <Link href='/resources/change-management-template' className='group'>
              <div className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200'>
                <div className='w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4'>
                  <span className='text-purple-600 text-xl'>📋</span>
                </div>
                <h3 className='text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors'>
                  Change Management Template
                </h3>
                <p className='text-gray-600 text-sm'>
                  Ready-to-use templates for managing organizational change.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Need Help with Your AI Implementation?
            </h2>
            <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
              Our team of AI experts can help you implement this checklist and ensure successful 
              deployment of AI solutions in your organization.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
              >
                Schedule Consultation
              </Link>
              <Link
                href='/services/ai-services'
                className='border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors'
              >
                View AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}