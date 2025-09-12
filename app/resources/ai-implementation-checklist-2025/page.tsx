import React from 'react';
import Link from 'next/link';

export default function AIImplementationChecklist2025() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-br from-purple-50 to-indigo-100'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <div className='inline-flex items-center bg-purple-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full mb-6'>
              <span className='mr-2'>📋</span>
              Free Resource
            </div>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              AI Implementation Checklist 2025
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              A comprehensive step-by-step guide to successfully implementing AI in your organization. 
              Download this free checklist and avoid common pitfalls while maximizing your AI ROI.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg'>
                📥 Download Free Checklist
              </button>
              <Link
                href='/contact'
                className='border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors text-lg'
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Content */}
      <article className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='prose prose-lg max-w-none'>
            <div className='bg-blue-50 border-l-4 border-blue-400 p-6 mb-8'>
              <div className='flex'>
                <div className='flex-shrink-0'>
                  <span className='text-2xl'>🎯</span>
                </div>
                <div className='ml-3'>
                  <h3 className='text-lg font-medium text-blue-800'>What You'll Get</h3>
                  <p className='mt-2 text-blue-700'>
                    This comprehensive checklist covers every aspect of AI implementation, from initial 
                    planning to post-deployment optimization. Use it to ensure nothing is overlooked.
                  </p>
                </div>
              </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Why This Checklist Matters</h2>
            <p className='text-lg text-gray-700 mb-6'>
              AI implementation failures cost organizations an average of $1.2M per project. Our checklist 
              is based on analysis of 500+ successful AI implementations and helps you avoid the most 
              common mistakes that lead to project failure.
            </p>

            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Checklist Overview</h2>
            
            <div className='space-y-8 mb-12'>
              <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>Phase 1: Pre-Implementation Planning (Weeks 1-4)</h3>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-2'>Strategic Planning</h4>
                    <ul className='text-sm text-gray-700 space-y-1'>
                      <li>☐ Define clear business objectives</li>
                      <li>☐ Identify use cases and success metrics</li>
                      <li>☐ Assess current data quality and availability</li>
                      <li>☐ Evaluate technical infrastructure readiness</li>
                      <li>☐ Secure executive sponsorship and budget</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-2'>Team & Resources</h4>
                    <ul className='text-sm text-gray-700 space-y-1'>
                      <li>☐ Assemble cross-functional AI team</li>
                      <li>☐ Define roles and responsibilities</li>
                      <li>☐ Establish governance framework</li>
                      <li>☐ Create project timeline and milestones</li>
                      <li>☐ Set up communication protocols</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>Phase 2: Data Preparation (Weeks 5-12)</h3>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-2'>Data Assessment</h4>
                    <ul className='text-sm text-gray-700 space-y-1'>
                      <li>☐ Conduct comprehensive data audit</li>
                      <li>☐ Identify data quality issues</li>
                      <li>☐ Map data sources and dependencies</li>
                      <li>☐ Assess data privacy and compliance requirements</li>
                      <li>☐ Create data inventory and documentation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-2'>Data Engineering</h4>
                    <ul className='text-sm text-gray-700 space-y-1'>
                      <li>☐ Design data pipeline architecture</li>
                      <li>☐ Implement data cleaning and preprocessing</li>
                      <li>☐ Set up data versioning and lineage tracking</li>
                      <li>☐ Establish data security and access controls</li>
                      <li>☐ Create data validation and monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>Phase 3: Model Development (Weeks 13-24)</h3>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-2'>Model Design</h4>
                    <ul className='text-sm text-gray-700 space-y-1'>
                      <li>☐ Select appropriate algorithms and frameworks</li>
                      <li>☐ Design model architecture and features</li>
                      <li>☐ Create training and validation datasets</li>
                      <li>☐ Implement baseline models for comparison</li>
                      <li>☐ Set up model versioning and experiment tracking</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-2'>Training & Validation</h4>
                    <ul className='text-sm text-gray-700 space-y-1'>
                      <li>☐ Train initial models and evaluate performance</li>
                      <li>☐ Implement cross-validation and testing</li>
                      <li>☐ Optimize hyperparameters and features</li>
                      <li>☐ Conduct bias and fairness testing</li>
                      <li>☐ Document model performance and limitations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>Phase 4: Deployment & Integration (Weeks 25-32)</h3>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-2'>Infrastructure Setup</h4>
                    <ul className='text-sm text-gray-700 space-y-1'>
                      <li>☐ Set up production environment and infrastructure</li>
                      <li>☐ Implement CI/CD pipelines for model deployment</li>
                      <li>☐ Configure monitoring and logging systems</li>
                      <li>☐ Set up model serving and API endpoints</li>
                      <li>☐ Implement security and access controls</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-2'>Integration & Testing</h4>
                    <ul className='text-sm text-gray-700 space-y-1'>
                      <li>☐ Integrate AI model with existing systems</li>
                      <li>☐ Conduct end-to-end testing and validation</li>
                      <li>☐ Perform load testing and performance optimization</li>
                      <li>☐ Train end users and create documentation</li>
                      <li>☐ Implement rollback and disaster recovery plans</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>Phase 5: Monitoring & Optimization (Ongoing)</h3>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-2'>Performance Monitoring</h4>
                    <ul className='text-sm text-gray-700 space-y-1'>
                      <li>☐ Monitor model performance and accuracy</li>
                      <li>☐ Track business metrics and ROI</li>
                      <li>☐ Monitor data drift and model degradation</li>
                      <li>☐ Set up alerts and automated responses</li>
                      <li>☐ Conduct regular model audits and reviews</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-2'>Continuous Improvement</h4>
                    <ul className='text-sm text-gray-700 space-y-1'>
                      <li>☐ Collect user feedback and performance data</li>
                      <li>☐ Plan and implement model updates</li>
                      <li>☐ Optimize costs and resource utilization</li>
                      <li>☐ Expand AI capabilities and use cases</li>
                      <li>☐ Document lessons learned and best practices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Key Success Factors</h2>
            
            <div className='bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8'>
              <h3 className='text-xl font-bold text-yellow-800 mb-4'>⚠️ Critical Success Factors</h3>
              <div className='space-y-4'>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-1'>Executive Support</h4>
                  <p className='text-sm text-gray-700'>Strong leadership commitment is essential for AI project success.</p>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-1'>Data Quality</h4>
                  <p className='text-sm text-gray-700'>High-quality, clean data is the foundation of successful AI implementation.</p>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-1'>Change Management</h4>
                  <p className='text-sm text-gray-700'>Proper change management ensures user adoption and project success.</p>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-1'>Iterative Approach</h4>
                  <p className='text-sm text-gray-700'>Start small, learn quickly, and scale based on results.</p>
                </div>
              </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Common Pitfalls to Avoid</h2>
            
            <div className='space-y-6 mb-8'>
              <div className='bg-red-50 border border-red-200 rounded-lg p-6'>
                <h3 className='text-lg font-semibold text-red-800 mb-2'>❌ Starting Without Clear Objectives</h3>
                <p className='text-red-700'>
                  Many AI projects fail because they lack clear business objectives and success metrics. 
                  Always start with a well-defined problem statement and measurable goals.
                </p>
              </div>

              <div className='bg-red-50 border border-red-200 rounded-lg p-6'>
                <h3 className='text-lg font-semibold text-red-800 mb-2'>❌ Ignoring Data Quality</h3>
                <p className='text-red-700'>
                  Poor data quality leads to poor AI performance. Invest time and resources in data 
                  cleaning, validation, and quality assurance before model development.
                </p>
              </div>

              <div className='bg-red-50 border border-red-200 rounded-lg p-6'>
                <h3 className='text-lg font-semibold text-red-800 mb-2'>❌ Underestimating Change Management</h3>
                <p className='text-red-700'>
                  AI adoption requires significant organizational change. Plan for user training, 
                  process updates, and cultural transformation from the beginning.
                </p>
              </div>

              <div className='bg-red-50 border border-red-200 rounded-lg p-6'>
                <h3 className='text-lg font-semibold text-red-800 mb-2'>❌ Lack of Monitoring and Maintenance</h3>
                <p className='text-red-700'>
                  AI models require ongoing monitoring and maintenance. Plan for model updates, 
                  performance monitoring, and continuous improvement from day one.
                </p>
              </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Download Your Free Checklist</h2>
            <p className='text-lg text-gray-700 mb-8'>
              Get the complete AI Implementation Checklist 2025, including detailed explanations, 
              templates, and additional resources to guide your AI journey.
            </p>

            <div className='bg-purple-50 border border-purple-200 rounded-lg p-8 text-center'>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Ready to Get Started?</h3>
              <p className='text-gray-700 mb-6'>
                Download your free checklist and start your AI implementation journey today.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <button className='bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors'>
                  📥 Download Free Checklist
                </button>
                <Link
                  href='/contact'
                  className='border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors'
                >
                  Get Expert Consultation
                </Link>
              </div>
              <p className='text-sm text-gray-500 mt-4'>
                No spam. We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Resources */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>More Free Resources</h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <Link href='/resources/ai-security-hardening-checklist' className='group'>
              <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow'>
                <h3 className='text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600'>
                  AI Security Hardening Checklist
                </h3>
                <p className='text-gray-600 text-sm'>
                  Essential security measures for AI systems and data protection.
                </p>
              </div>
            </Link>
            <Link href='/resources/ai-roi-calculator' className='group'>
              <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow'>
                <h3 className='text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600'>
                  AI ROI Calculator
                </h3>
                <p className='text-gray-600 text-sm'>
                  Calculate the potential return on investment for your AI projects.
                </p>
              </div>
            </Link>
            <Link href='/resources/ai-governance-framework' className='group'>
              <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow'>
                <h3 className='text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600'>
                  AI Governance Framework
                </h3>
                <p className='text-gray-600 text-sm'>
                  Complete framework for responsible AI governance and compliance.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}