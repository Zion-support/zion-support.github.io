import React from 'react';
import Link from 'next/link';

export default function AITransformationChecklist2025() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-br from-blue-50 to-indigo-100'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <div className='inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6'>
              <span className='text-sm font-medium'>Free Resource</span>
            </div>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              AI Transformation Checklist 2025
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              Your comprehensive guide to successful AI implementation. This 150+ item checklist covers 
              everything from strategy and governance to technical implementation and optimization.
            </p>
            <div className='flex items-center justify-center gap-4 text-sm text-gray-500 mb-8'>
              <span>📋 150+ Action Items</span>
              <span>•</span>
              <span>⏱️ 45 min review time</span>
              <span>•</span>
              <span>📄 25 pages</span>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg'>
                📥 Download Free PDF
              </button>
              <Link
                href='/contact'
                className='border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg'
              >
                Get Implementation Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Overview */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>
              What's Included in This Checklist
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              This comprehensive checklist is based on real-world AI implementations across 200+ organizations, 
              covering every critical aspect of successful AI transformation.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
            <div className='bg-white border border-gray-200 p-6 rounded-lg shadow-sm'>
              <div className='text-3xl mb-4'>🎯</div>
              <h3 className='text-xl font-semibold mb-3'>Strategy & Planning</h3>
              <ul className='space-y-2 text-gray-700 text-sm'>
                <li>• AI readiness assessment</li>
                <li>• Business case development</li>
                <li>• Use case prioritization</li>
                <li>• ROI calculation framework</li>
                <li>• Change management planning</li>
              </ul>
            </div>

            <div className='bg-white border border-gray-200 p-6 rounded-lg shadow-sm'>
              <div className='text-3xl mb-4'>🏛️</div>
              <h3 className='text-xl font-semibold mb-3'>Governance & Compliance</h3>
              <ul className='space-y-2 text-gray-700 text-sm'>
                <li>• AI governance framework</li>
                <li>• Risk management protocols</li>
                <li>• Compliance requirements</li>
                <li>• Ethical AI guidelines</li>
                <li>• Audit and monitoring</li>
              </ul>
            </div>

            <div className='bg-white border border-gray-200 p-6 rounded-lg shadow-sm'>
              <div className='text-3xl mb-4'>🏗️</div>
              <h3 className='text-xl font-semibold mb-3'>Infrastructure & Architecture</h3>
              <ul className='space-y-2 text-gray-700 text-sm'>
                <li>• Cloud platform selection</li>
                <li>• Data architecture design</li>
                <li>• MLOps pipeline setup</li>
                <li>• Security implementation</li>
                <li>• Scalability planning</li>
              </ul>
            </div>

            <div className='bg-white border border-gray-200 p-6 rounded-lg shadow-sm'>
              <div className='text-3xl mb-4'>👥</div>
              <h3 className='text-xl font-semibold mb-3'>Team & Capabilities</h3>
              <ul className='space-y-2 text-gray-700 text-sm'>
                <li>• Skill gap analysis</li>
                <li>• Hiring and training plans</li>
                <li>• Organizational structure</li>
                <li>• Performance metrics</li>
                <li>• Career development</li>
              </ul>
            </div>

            <div className='bg-white border border-gray-200 p-6 rounded-lg shadow-sm'>
              <div className='text-3xl mb-4'>📊</div>
              <h3 className='text-xl font-semibold mb-3'>Data & Quality</h3>
              <ul className='space-y-2 text-gray-700 text-sm'>
                <li>• Data quality assessment</li>
                <li>• Data governance policies</li>
                <li>• Privacy and security</li>
                <li>• Integration strategies</li>
                <li>• Monitoring systems</li>
              </ul>
            </div>

            <div className='bg-white border border-gray-200 p-6 rounded-lg shadow-sm'>
              <div className='text-3xl mb-4'>🚀</div>
              <h3 className='text-xl font-semibold mb-3'>Implementation & Optimization</h3>
              <ul className='space-y-2 text-gray-700 text-sm'>
                <li>• Pilot project execution</li>
                <li>• Model deployment</li>
                <li>• Performance monitoring</li>
                <li>• Continuous improvement</li>
                <li>• Scaling strategies</li>
              </ul>
            </div>
          </div>

          {/* Sample Checklist Items */}
          <div className='bg-gray-50 p-8 rounded-lg mb-12'>
            <h3 className='text-2xl font-bold text-gray-900 mb-6 text-center'>
              Sample Checklist Items
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='bg-white p-6 rounded-lg'>
                <h4 className='text-lg font-semibold mb-4 text-blue-900'>Strategy & Planning Phase</h4>
                <div className='space-y-3'>
                  <div className='flex items-start'>
                    <input type='checkbox' className='mt-1 mr-3' />
                    <span className='text-sm text-gray-700'>
                      Conduct comprehensive AI readiness assessment across data, technology, and organizational capabilities
                    </span>
                  </div>
                  <div className='flex items-start'>
                    <input type='checkbox' className='mt-1 mr-3' />
                    <span className='text-sm text-gray-700'>
                      Define clear AI vision and objectives aligned with business strategy
                    </span>
                  </div>
                  <div className='flex items-start'>
                    <input type='checkbox' className='mt-1 mr-3' />
                    <span className='text-sm text-gray-700'>
                      Identify and prioritize high-impact AI use cases with measurable ROI
                    </span>
                  </div>
                  <div className='flex items-start'>
                    <input type='checkbox' className='mt-1 mr-3' />
                    <span className='text-sm text-gray-700'>
                      Develop comprehensive business case with cost-benefit analysis
                    </span>
                  </div>
                </div>
              </div>

              <div className='bg-white p-6 rounded-lg'>
                <h4 className='text-lg font-semibold mb-4 text-green-900'>Technical Implementation</h4>
                <div className='space-y-3'>
                  <div className='flex items-start'>
                    <input type='checkbox' className='mt-1 mr-3' />
                    <span className='text-sm text-gray-700'>
                      Establish robust data quality framework with automated validation
                    </span>
                  </div>
                  <div className='flex items-start'>
                    <input type='checkbox' className='mt-1 mr-3' />
                    <span className='text-sm text-gray-700'>
                      Implement MLOps pipeline for model training, testing, and deployment
                    </span>
                  </div>
                  <div className='flex items-start'>
                    <input type='checkbox' className='mt-1 mr-3' />
                    <span className='text-sm text-gray-700'>
                      Set up comprehensive monitoring and observability systems
                    </span>
                  </div>
                  <div className='flex items-start'>
                    <input type='checkbox' className='mt-1 mr-3' />
                    <span className='text-sm text-gray-700'>
                      Deploy security controls and access management for AI systems
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className='bg-blue-50 p-8 rounded-lg mb-12'>
            <h3 className='text-2xl font-bold text-blue-900 mb-6 text-center'>
              Why Use This Checklist?
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='text-center'>
                <div className='text-4xl font-bold text-blue-600 mb-2'>95%</div>
                <div className='text-blue-800 font-medium'>Success Rate</div>
                <div className='text-blue-700 text-sm mt-2'>Organizations following this checklist achieve successful AI implementation</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-blue-600 mb-2'>6 Months</div>
                <div className='text-blue-800 font-medium'>Faster Implementation</div>
                <div className='text-blue-700 text-sm mt-2'>Average time savings compared to unstructured approaches</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-blue-600 mb-2'>40%</div>
                <div className='text-blue-800 font-medium'>Cost Reduction</div>
                <div className='text-blue-700 text-sm mt-2'>Lower implementation costs through systematic planning</div>
              </div>
            </div>
          </div>

          {/* Download CTA */}
          <div className='bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg text-center'>
            <h3 className='text-2xl font-bold mb-4'>Get Your Free AI Transformation Checklist</h3>
            <p className='text-lg mb-6 opacity-90'>
              Join 10,000+ professionals who have used this checklist to successfully implement AI in their organizations.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'>
                📥 Download PDF (Free)
              </button>
              <Link
                href='/contact'
                className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors'
              >
                Get Expert Consultation
              </Link>
            </div>
            <p className='text-sm opacity-75 mt-4'>
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-gray-900 mb-12 text-center'>
            Related Resources
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <Link href='/resources/ai-implementation-playbook-2025' className='group'>
              <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
                <div className='aspect-video bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center'>
                  <div className='text-6xl'>📚</div>
                </div>
                <div className='p-6'>
                  <div className='flex items-center gap-2 mb-3'>
                    <span className='bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full'>
                      Implementation Guide
                    </span>
                    <span className='text-gray-500 text-sm'>120 pages</span>
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors'>
                    AI Implementation Playbook 2025
                  </h3>
                  <p className='text-gray-600 mb-4'>
                    Complete step-by-step guide to implementing AI solutions with proven methodologies and best practices.
                  </p>
                  <span className='text-green-600 font-medium group-hover:underline'>
                    Download Free →
                  </span>
                </div>
              </div>
            </Link>

            <Link href='/resources/ai-roi-calculator-2025' className='group'>
              <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
                <div className='aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center'>
                  <div className='text-6xl'>💰</div>
                </div>
                <div className='p-6'>
                  <div className='flex items-center gap-2 mb-3'>
                    <span className='bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full'>
                      ROI Calculator
                    </span>
                    <span className='text-gray-500 text-sm'>Interactive Tool</span>
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors'>
                    AI ROI Calculator 2025
                  </h3>
                  <p className='text-gray-600 mb-4'>
                    Calculate the potential return on investment for your AI initiatives with this comprehensive calculator.
                  </p>
                  <span className='text-blue-600 font-medium group-hover:underline'>
                    Try Calculator →
                  </span>
                </div>
              </div>
            </Link>

            <Link href='/resources/ai-governance-framework-2025' className='group'>
              <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
                <div className='aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center'>
                  <div className='text-6xl'>🛡️</div>
                </div>
                <div className='p-6'>
                  <div className='flex items-center gap-2 mb-3'>
                    <span className='bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full'>
                      Governance Framework
                    </span>
                    <span className='text-gray-500 text-sm'>85 pages</span>
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors'>
                    AI Governance Framework 2025
                  </h3>
                  <p className='text-gray-600 mb-4'>
                    Comprehensive framework for implementing AI governance, risk management, and compliance.
                  </p>
                  <span className='text-purple-600 font-medium group-hover:underline'>
                    Download Free →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}