import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Download, FileText, Users, Target, Zap, Shield, BarChart3, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Implementation Checklist: Complete Guide for 2025 | Zion Tech Group',
  description: 'Download our comprehensive AI implementation checklist. Step-by-step guide to successfully implementing AI in your organization with proven frameworks.',
  keywords: 'AI implementation, AI checklist, AI strategy, AI deployment, AI planning, AI guide',
  openGraph: {
    title: 'AI Implementation Checklist: Complete Guide for 2025',
    description: 'Comprehensive checklist for successful AI implementation in enterprise environments.',
    type: 'article',
  },
};

export default function AIImplementationChecklist() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">Free Resource • January 2025</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Implementation Checklist: Complete Guide for 2025
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Download our comprehensive AI implementation checklist. A step-by-step guide to successfully 
              implementing AI in your organization with proven frameworks and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg inline-flex items-center justify-center">
                <Download className="mr-2 w-5 h-5" />
                Download Free Checklist
              </button>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg inline-flex items-center justify-center"
              >
                Get AI Consultation
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Resource Overview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What's Included in This Checklist
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive AI implementation checklist covers every aspect of successful AI deployment, 
              from initial planning to full-scale production.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Strategic Planning</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Business objective alignment</li>
                <li>• Use case identification</li>
                <li>• ROI calculation framework</li>
                <li>• Stakeholder engagement</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Team & Organization</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Skills assessment</li>
                <li>• Team structure planning</li>
                <li>• Training requirements</li>
                <li>• Change management</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Technology & Infrastructure</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Technology stack selection</li>
                <li>• Infrastructure requirements</li>
                <li>• Data pipeline design</li>
                <li>• Security considerations</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Data & Governance</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Data quality assessment</li>
                <li>• Privacy compliance</li>
                <li>• Model governance</li>
                <li>• Ethical AI guidelines</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <BarChart3 className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Implementation & Testing</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Pilot project planning</li>
                <li>• Testing frameworks</li>
                <li>• Performance monitoring</li>
                <li>• Quality assurance</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-indigo-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Deployment & Optimization</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Production deployment</li>
                <li>• Performance optimization</li>
                <li>• Scaling strategies</li>
                <li>• Continuous improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Checklist Preview
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here's a preview of the key sections included in our comprehensive AI implementation checklist.
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Phase 1: Strategic Planning */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Strategic Planning & Business Alignment
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Business Objectives</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Define clear business objectives for AI implementation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Identify key performance indicators (KPIs)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Establish success metrics and timelines
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Align AI goals with overall business strategy
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Use Case Identification</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Map current business processes
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Identify automation opportunities
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Prioritize use cases by impact and feasibility
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Validate use cases with stakeholders
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 2: Data & Infrastructure */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Data & Infrastructure Assessment
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Data Readiness</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Assess data quality and completeness
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Evaluate data governance policies
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Identify data sources and integration needs
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Plan data preprocessing requirements
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Infrastructure Requirements</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Evaluate current technology stack
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Plan compute and storage requirements
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Design scalable architecture
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Ensure security and compliance
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 3: Implementation */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                Implementation & Deployment
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Pilot Project</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Select pilot use case and scope
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Build and test AI models
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Validate performance and accuracy
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Gather user feedback and iterate
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Production Deployment</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Deploy to production environment
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Implement monitoring and alerting
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Train end users and support teams
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Establish maintenance procedures
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Use Our AI Implementation Checklist?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our checklist is based on real-world experience implementing AI solutions for hundreds of organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Framework</h3>
                  <p className="text-gray-600">
                    Based on successful AI implementations across various industries and company sizes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Coverage</h3>
                  <p className="text-gray-600">
                    Covers every aspect of AI implementation from strategy to deployment and optimization.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Actionable Steps</h3>
                  <p className="text-gray-600">
                    Each item includes specific actions and considerations to guide your implementation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Risk Mitigation</h3>
                  <p className="text-gray-600">
                    Helps identify and address common pitfalls before they become costly problems.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">ROI Optimization</h3>
                  <p className="text-gray-600">
                    Ensures your AI implementation delivers maximum business value and return on investment.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Alignment</h3>
                  <p className="text-gray-600">
                    Keeps all stakeholders aligned and ensures nothing falls through the cracks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Download Your Free AI Implementation Checklist
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Get instant access to our comprehensive checklist and start your AI implementation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              <Download className="mr-2 w-5 h-5" />
              Download Free Checklist
            </button>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center justify-center"
            >
              Get Expert Consultation
            </Link>
          </div>
          <p className="text-sm text-indigo-200 mt-4">
            No spam. Instant download. Free forever.
          </p>
        </div>
      </section>
    </div>
  );
}