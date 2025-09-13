import React from 'react';
import { Metadata } from 'next';
import { Download, FileText, Video, BookOpen, CheckCircle, ArrowRight, Star, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI 2025 Automation Implementation Toolkit - Zion Tech Group',
  description: 'Complete toolkit for implementing AI automation in your business. Templates, guides, checklists, and best practices for successful automation.',
  keywords: 'AI automation toolkit, implementation guide, automation templates, AI resources',
};

const AutomationToolkitPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
              <FileText className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-300 font-medium">Implementation Toolkit</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI 2025 Automation
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Implementation Toolkit
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Everything you need to successfully implement AI automation in your business. 
              Comprehensive resources, templates, and step-by-step guides from industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform">
                <Download className="w-5 h-5 mr-2 inline" />
                Download Complete Toolkit
              </button>
              <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Preview Resources
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toolkit Stats */}
      <div className="py-16 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Templates & Checklists</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">25+</div>
              <div className="text-gray-300">Video Tutorials</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">100+</div>
              <div className="text-gray-300">Best Practices</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Expert Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Toolkit Contents */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete Implementation Resources
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need for successful AI automation implementation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Planning & Strategy */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Planning & Strategy</h3>
                  <p className="text-gray-300">Strategic planning resources</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  Business Process Assessment Template
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  ROI Calculator & Projection Tool
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  Implementation Roadmap Template
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  Stakeholder Communication Plan
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  Risk Assessment Checklist
                </li>
              </ul>
              <button className="mt-6 w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:scale-105 transition-transform">
                Download Planning Pack
              </button>
            </div>

            {/* Technical Implementation */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Technical Implementation</h3>
                  <p className="text-gray-300">Development & deployment guides</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  API Integration Templates
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  Database Schema Designs
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  Security Configuration Guide
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  Testing & QA Protocols
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  Deployment Automation Scripts
                </li>
              </ul>
              <button className="mt-6 w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:scale-105 transition-transform">
                Download Technical Pack
              </button>
            </div>

            {/* Video Tutorials */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Video Tutorials</h3>
                  <p className="text-gray-300">Step-by-step implementation videos</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  Getting Started with AI Automation (45 min)
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  Process Analysis & Mapping (30 min)
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  Tool Selection & Configuration (60 min)
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  Testing & Quality Assurance (25 min)
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  Monitoring & Optimization (35 min)
                </li>
              </ul>
              <button className="mt-6 w-full px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white font-medium rounded-lg hover:scale-105 transition-transform">
                Access Video Library
              </button>
            </div>

            {/* Best Practices */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Best Practices</h3>
                  <p className="text-gray-300">Industry insights & proven methods</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  Change Management Strategies
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  Team Training Programs
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  Performance Metrics & KPIs
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  Common Pitfalls & Solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  Scaling & Growth Strategies
                </li>
              </ul>
              <button className="mt-6 w-full px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-medium rounded-lg hover:scale-105 transition-transform">
                Download Best Practices
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Success Stories & Case Studies
            </h2>
            <p className="text-xl text-gray-300">
              Real-world implementations and their results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-3">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Fortune 500 Manufacturing</h3>
                  <p className="text-gray-400 text-sm">Automated Quality Control</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="text-3xl font-bold text-green-400 mb-1">85%</div>
                <div className="text-gray-300">Defect Reduction</div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Implemented AI-powered quality control systems that reduced defects by 85% 
                and improved production efficiency by 40%.
              </p>
              <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                Read Full Case Study →
              </button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Healthcare Provider</h3>
                  <p className="text-gray-400 text-sm">Patient Care Automation</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="text-3xl font-bold text-green-400 mb-1">60%</div>
                <div className="text-gray-300">Response Time Improvement</div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Automated patient scheduling and care coordination, reducing response times 
                by 60% and improving patient satisfaction scores.
              </p>
              <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                Read Full Case Study →
              </button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-3">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Financial Services</h3>
                  <p className="text-gray-400 text-sm">Fraud Detection System</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="text-3xl font-bold text-green-400 mb-1">95%</div>
                <div className="text-gray-300">Fraud Detection Accuracy</div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Deployed AI-powered fraud detection that achieved 95% accuracy while 
                reducing false positives by 70%.
              </p>
              <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                Read Full Case Study →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Implement AI Automation?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get access to our complete implementation toolkit and start transforming 
            your business operations today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform">
              <Download className="w-5 h-5 mr-2 inline" />
              Download Complete Toolkit
            </button>
            <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Schedule Expert Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationToolkitPage;