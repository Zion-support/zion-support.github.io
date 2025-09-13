import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Download, CheckCircle, Clock, Users, TrendingUp, BookOpen, Video, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Implementation Complete Guide 2025 - Master Enterprise AI',
  description: 'Comprehensive guide to implementing AI in your enterprise. Step-by-step methodology, best practices, tools, and real-world examples for successful AI transformation.',
  keywords: 'AI implementation, enterprise AI, AI guide, digital transformation, AI strategy, implementation roadmap',
};

export default function AIImplementationCompleteGuide2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Complete Implementation Guide
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Implementation 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Complete Guide 2025</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Master enterprise AI implementation with our comprehensive guide. From strategy to deployment, learn everything you need to successfully transform your business with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#download" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Download className="w-5 h-5 mr-2" />
                Download Complete Guide
              </Link>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Get Expert Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900 mb-2">12 Weeks</div>
              <div className="text-gray-600">Implementation Timeline</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Success Stories</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
              <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
              <CheckCircle className="w-8 h-8 text-orange-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Templates & Tools</div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Implementation Roadmap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know for successful AI implementation, organized in a logical, actionable sequence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Foundation & Assessment</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• AI readiness assessment</li>
                <li>• Technology infrastructure audit</li>
                <li>• Data quality evaluation</li>
                <li>• Team capability analysis</li>
                <li>• Budget and resource planning</li>
              </ul>
            </div>

            <div className="p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategy Development</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• AI vision and mission alignment</li>
                <li>• Use case prioritization</li>
                <li>• Technology stack selection</li>
                <li>• Governance framework design</li>
                <li>• Risk assessment and mitigation</li>
              </ul>
            </div>

            <div className="p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pilot Project</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Pilot selection criteria</li>
                <li>• MVP development approach</li>
                <li>• Testing and validation</li>
                <li>• Performance measurement</li>
                <li>• Lessons learned documentation</li>
              </ul>
            </div>

            <div className="p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scale & Deploy</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Enterprise-wide deployment</li>
                <li>• Integration with existing systems</li>
                <li>• Change management strategies</li>
                <li>• Training and adoption programs</li>
                <li>• Performance monitoring setup</li>
              </ul>
            </div>

            <div className="p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-red-600">5</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Optimization</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Continuous improvement processes</li>
                <li>• Advanced analytics implementation</li>
                <li>• AI model retraining</li>
                <li>• ROI measurement and reporting</li>
                <li>• Future roadmap planning</li>
              </ul>
            </div>

            <div className="p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-indigo-600">6</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Emerging technology adoption</li>
                <li>• Advanced AI capabilities</li>
                <li>• Competitive advantage strategies</li>
                <li>• Innovation culture building</li>
                <li>• Next-generation AI planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Included */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included in This Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive resources, templates, and tools to ensure your AI implementation success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation Templates</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Project charter template</li>
                <li>• Risk assessment matrix</li>
                <li>• ROI calculation worksheet</li>
                <li>• Change management plan</li>
                <li>• Success metrics framework</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Video className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Video Tutorials</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 20+ implementation videos</li>
                <li>• Expert interviews and insights</li>
                <li>• Case study deep dives</li>
                <li>• Technology demonstrations</li>
                <li>• Best practice presentations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Checklists & Tools</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Pre-implementation checklist</li>
                <li>• Technology evaluation matrix</li>
                <li>• Vendor assessment criteria</li>
                <li>• Security compliance checklist</li>
                <li>• Performance monitoring tools</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">ROI Calculator</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Interactive ROI calculator</li>
                <li>• Cost-benefit analysis tool</li>
                <li>• TCO estimation framework</li>
                <li>• Payback period calculator</li>
                <li>• Financial impact projections</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Support</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 30-day expert consultation</li>
                <li>• Implementation review sessions</li>
                <li>• Q&A with AI specialists</li>
                <li>• Peer networking opportunities</li>
                <li>• Ongoing support community</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Case Studies</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 15 detailed case studies</li>
                <li>• Industry-specific examples</li>
                <li>• Success and failure analysis</li>
                <li>• Lessons learned documentation</li>
                <li>• Benchmarking data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Download Your Complete AI Implementation Guide
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get instant access to our comprehensive 200+ page guide, including all templates, tools, and resources. Start your AI transformation journey today.
          </p>
          
          <div className="bg-white p-8 rounded-xl mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What You Get:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Complete implementation guide</li>
                  <li>• 50+ templates and tools</li>
                  <li>• 20+ video tutorials</li>
                  <li>• Expert consultation access</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Value:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Save 6+ months of research</li>
                  <li>• Avoid common pitfalls</li>
                  <li>• Accelerate implementation</li>
                  <li>• Ensure project success</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Format:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• PDF + Interactive tools</li>
                  <li>• Video library access</li>
                  <li>• Template downloads</li>
                  <li>• Mobile-friendly</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
              <Download className="w-5 h-5 mr-2" />
              Download Complete Guide
            </Link>
            <Link href="/contact" className="inline-flex items-center px-8 py-4 border border-blue-300 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Schedule Expert Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of enterprises that have successfully implemented AI using our proven methodology. Start your transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/case-studies" className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}