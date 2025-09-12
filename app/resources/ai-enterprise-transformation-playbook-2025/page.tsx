import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User, Tag, Download, CheckCircle, AlertCircle, Target, Zap, Shield, Globe, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Enterprise Transformation Playbook 2025: Complete Implementation Guide',
  description: 'Master AI transformation with our comprehensive 200-page playbook. Step-by-step framework, checklists, templates, and proven strategies for successful enterprise AI implementation.',
  keywords: 'AI transformation playbook, enterprise AI implementation, AI strategy guide, AI transformation framework, AI adoption guide',
  openGraph: {
    title: 'AI Enterprise Transformation Playbook 2025: Complete Implementation Guide',
    description: 'Master AI transformation with our comprehensive 200-page playbook with step-by-step framework and proven strategies.',
    type: 'article',
    publishedTime: '2025-01-17T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI', 'Transformation', 'Playbook', 'Enterprise', 'Implementation']
  }
};

export default function AIEnterpriseTransformationPlaybook() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Enterprise AI Transformation
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI Enterprise Transformation
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Playbook 2025</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              The definitive guide to AI transformation success. Our comprehensive 200-page playbook provides 
              everything you need to plan, implement, and scale AI across your enterprise—from strategy to execution.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                January 17, 2025
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                200 pages
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                Zion Tech Group
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Download Free Playbook
              </button>
              <Link 
                href="#preview" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Preview Contents
              </Link>
            </div>
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4 bg-white rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-sm text-gray-600">Pages of Content</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-md">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Templates & Checklists</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-sm text-gray-600">Case Studies</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-md">
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What's Included in This Playbook</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start p-6 bg-blue-50 rounded-xl">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic Framework</h3>
                  <p className="text-gray-600">Complete 6-phase AI transformation methodology with proven success patterns</p>
                </div>
              </div>
              
              <div className="flex items-start p-6 bg-green-50 rounded-xl">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation Checklists</h3>
                  <p className="text-gray-600">50+ detailed checklists covering every aspect of AI implementation</p>
                </div>
              </div>
              
              <div className="flex items-start p-6 bg-purple-50 rounded-xl">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">ROI Calculator</h3>
                  <p className="text-gray-600">Interactive tools to calculate and track AI transformation ROI</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start p-6 bg-orange-50 rounded-xl">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Start Templates</h3>
                  <p className="text-gray-600">Ready-to-use templates for project plans, budgets, and timelines</p>
                </div>
              </div>
              
              <div className="flex items-start p-6 bg-red-50 rounded-xl">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <AlertCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Risk Mitigation Guide</h3>
                  <p className="text-gray-600">Comprehensive risk assessment and mitigation strategies</p>
                </div>
              </div>
              
              <div className="flex items-start p-6 bg-teal-50 rounded-xl">
                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Case Studies</h3>
                  <p className="text-gray-600">25+ real-world case studies from Fortune 500 companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents Preview */}
      <section id="preview" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Table of Contents Preview</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Part I: Foundation & Strategy</h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3">1</span>
                  <span className="text-gray-700">AI Transformation Readiness Assessment</span>
                </div>
                <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3">2</span>
                  <span className="text-gray-700">Building Your AI Strategy & Vision</span>
                </div>
                <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3">3</span>
                  <span className="text-gray-700">Executive Sponsorship & Change Management</span>
                </div>
                <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3">4</span>
                  <span className="text-gray-700">Data Strategy & Infrastructure Planning</span>
                </div>
                <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3">5</span>
                  <span className="text-gray-700">Technology Stack Selection & Architecture</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Part II: Implementation & Execution</h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium mr-3">6</span>
                  <span className="text-gray-700">Pilot Program Design & Execution</span>
                </div>
                <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium mr-3">7</span>
                  <span className="text-gray-700">Scaling AI Across the Organization</span>
                </div>
                <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium mr-3">8</span>
                  <span className="text-gray-700">Talent Acquisition & Team Building</span>
                </div>
                <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium mr-3">9</span>
                  <span className="text-gray-700">AI Governance & Ethics Framework</span>
                </div>
                <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium mr-3">10</span>
                  <span className="text-gray-700">Measuring Success & ROI</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Part III: Advanced Topics & Future-Proofing</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center p-2 hover:bg-gray-50 rounded">
                  <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-medium mr-3">11</span>
                  <span className="text-gray-700">Multimodal AI Implementation</span>
                </div>
                <div className="flex items-center p-2 hover:bg-gray-50 rounded">
                  <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-medium mr-3">12</span>
                  <span className="text-gray-700">Edge AI & IoT Integration</span>
                </div>
                <div className="flex items-center p-2 hover:bg-gray-50 rounded">
                  <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-medium mr-3">13</span>
                  <span className="text-gray-700">AI Security & Compliance</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center p-2 hover:bg-gray-50 rounded">
                  <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-medium mr-3">14</span>
                  <span className="text-gray-700">Continuous Learning & Adaptation</span>
                </div>
                <div className="flex items-center p-2 hover:bg-gray-50 rounded">
                  <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-medium mr-3">15</span>
                  <span className="text-gray-700">Future AI Trends & Preparation</span>
                </div>
                <div className="flex items-center p-2 hover:bg-gray-50 rounded">
                  <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-medium mr-3">16</span>
                  <span className="text-gray-700">Building AI-First Culture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why This Playbook is Different</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Methodology</h3>
              <p className="text-gray-600">
                Based on 100+ successful AI transformations across Fortune 500 companies, 
                with a 95% success rate.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Actionable Content</h3>
              <p className="text-gray-600">
                Every section includes practical templates, checklists, and step-by-step 
                instructions you can implement immediately.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ROI-Focused</h3>
              <p className="text-gray-600">
                Includes detailed ROI calculations, cost-benefit analysis, and measurement 
                frameworks to ensure your investment pays off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Success Stories</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">$2.3B</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Manufacturing Giant</h3>
              <p className="text-gray-600 text-sm mb-4">
                Fortune 500 manufacturer achieved $2.3B in cost savings using our methodology
              </p>
              <div className="text-sm text-gray-500">ROI: 1,240% | Payback: 8 months</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">400%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Financial Services</h3>
              <p className="text-gray-600 text-sm mb-4">
                Major bank increased efficiency by 400% across all operations
              </p>
              <div className="text-sm text-gray-500">Time to Value: 6 months</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Healthcare System</h3>
              <p className="text-gray-600 text-sm mb-4">
                Healthcare network improved diagnostic accuracy by 95%
              </p>
              <div className="text-sm text-gray-500">Patient Satisfaction: +87%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Get Your Free Copy Today</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 10,000+ executives who have successfully transformed their organizations with AI. 
            Download your free copy and start your transformation journey today.
          </p>
          
          <div className="bg-white p-8 rounded-2xl max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What You'll Get</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  200-page comprehensive playbook
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  50+ implementation templates
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  ROI calculator & tools
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Risk assessment framework
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  25+ real-world case studies
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Executive presentation templates
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Implementation timeline
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Expert consultation access
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Download Free Playbook
            </button>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Schedule Expert Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/resources/ai-implementation-checklist-2025" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border">
                <div className="text-2xl mb-3">📋</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">AI Implementation Checklist</h3>
                <p className="text-gray-600">Step-by-step checklist for AI implementation</p>
              </div>
            </Link>
            <Link href="/resources/ai-roi-calculator-2025" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border">
                <div className="text-2xl mb-3">🧮</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">AI ROI Calculator</h3>
                <p className="text-gray-600">Calculate your AI transformation ROI</p>
              </div>
            </Link>
            <Link href="/case-studies/ai-transformation-fortune-500-2025" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border">
                <div className="text-2xl mb-3">🏢</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Fortune 500 Case Study</h3>
                <p className="text-gray-600">Real AI transformation success story</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}