import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Download, CheckCircle, Clock, Users, Target, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Implementation Checklist: Complete Guide | Zion Tech Group',
  description: 'Download our comprehensive AI implementation checklist. Step-by-step guide to successfully implement AI in your organization with proven strategies and best practices.',
  keywords: 'AI implementation, checklist, guide, artificial intelligence, business transformation, AI strategy',
  openGraph: {
    title: 'AI Implementation Checklist: Complete Guide',
    description: 'Comprehensive checklist for successful AI implementation in your organization.',
    type: 'article',
    publishedTime: '2025-01-15T18:00:00Z',
    authors: ['Zion Tech Group'],
  },
};

export default function AIImplementationChecklist() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/resources" 
            className="inline-flex items-center text-indigo-200 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-indigo-200 mb-6">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              10 min read
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              For Business Leaders
            </div>
            <div className="flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              Free Download
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI Implementation Checklist
          </h1>
          <p className="text-xl text-indigo-100 leading-relaxed">
            Your complete guide to successfully implementing AI in your organization. Download our comprehensive checklist and avoid common pitfalls.
          </p>
        </div>
      </header>

      {/* Download Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Download className="w-8 h-8 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Download the Complete Checklist</h2>
            <p className="text-gray-600 mb-6">
              Get our comprehensive 50-point AI implementation checklist with detailed explanations, timelines, and success metrics.
            </p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Download Free Checklist
            </button>
            <p className="text-sm text-gray-500 mt-4">No email required • Instant download • PDF format</p>
          </div>
        </div>
      </section>

      {/* Checklist Preview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Checklist Preview</h2>
          
          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold text-sm">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Pre-Implementation Planning</h3>
              </div>
              <div className="ml-12 space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Define clear business objectives and success metrics</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Conduct comprehensive data audit and quality assessment</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Identify high-impact, low-risk use cases for initial implementation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Secure executive sponsorship and budget allocation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Assess current technology infrastructure and integration requirements</span>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-semibold text-sm">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Team and Skills Development</h3>
              </div>
              <div className="ml-12 space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Establish cross-functional AI implementation team</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Provide comprehensive AI training for key stakeholders</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Define roles and responsibilities for AI governance</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Create change management strategy and communication plan</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Establish partnerships with AI vendors or consultants</span>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold text-sm">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Technical Implementation</h3>
              </div>
              <div className="ml-12 space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Set up secure data pipeline and storage infrastructure</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Implement data governance and privacy protection measures</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Develop and test AI models with clean, validated data</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Create monitoring and alerting systems for AI performance</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Establish model versioning and deployment processes</span>
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-semibold text-sm">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Testing and Validation</h3>
              </div>
              <div className="ml-12 space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Conduct thorough testing with historical data</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Validate model accuracy and performance metrics</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Perform security and compliance audits</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Conduct user acceptance testing with end users</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Document all processes and create user guides</span>
                </div>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-600 font-semibold text-sm">5</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Deployment and Monitoring</h3>
              </div>
              <div className="ml-12 space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Deploy AI solution in production environment</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Monitor performance and user adoption metrics</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Collect feedback and iterate on improvements</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Scale successful implementations across organization</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Establish continuous learning and optimization processes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Use This Checklist?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Avoid Common Pitfalls</h3>
              <p className="text-gray-600">
                Our checklist is based on real-world implementations and helps you avoid the most common mistakes that lead to AI project failures.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Methodology</h3>
              <p className="text-gray-600">
                This checklist is based on our experience implementing AI solutions for Fortune 500 companies and successful startups.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Save Time and Money</h3>
              <p className="text-gray-600">
                Follow our structured approach to reduce implementation time by 40% and avoid costly mistakes that can derail your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/resources/ai-roi-calculator" className="group">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  AI ROI Calculator
                </h3>
                <p className="text-gray-600 mb-4">
                  Calculate the potential return on investment for your AI implementation project.
                </p>
                <span className="text-indigo-600 font-medium group-hover:underline">
                  Use Calculator →
                </span>
              </div>
            </Link>
            
            <Link href="/resources/ai-vendor-evaluation-template" className="group">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  AI Vendor Evaluation Template
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive template to evaluate and compare AI vendors and solutions.
                </p>
                <span className="text-indigo-600 font-medium group-hover:underline">
                  Download Template →
                </span>
              </div>
            </Link>
            
            <Link href="/resources/ai-governance-framework" className="group">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  AI Governance Framework
                </h3>
                <p className="text-gray-600 mb-4">
                  Establish proper governance and oversight for your AI initiatives.
                </p>
                <span className="text-indigo-600 font-medium group-hover:underline">
                  Download Framework →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with AI Implementation?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Our AI experts can help you implement this checklist and guide you through every step of your AI transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get AI Implementation Help
            </Link>
            <Link 
              href="/services/ai-services" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Explore AI Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}