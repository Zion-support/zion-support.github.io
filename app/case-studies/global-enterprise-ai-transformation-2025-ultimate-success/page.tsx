import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, Users, Award, DollarSign, Target } from 'lucide-react';

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Global Enterprise AI Transformation 2025: Ultimate Success Story"
        description="Fortune 100 manufacturing corporation achieves $15B ROI through comprehensive AI implementation. Learn the strategies that led to 450% revenue growth and 99.9% quality rate."
        keywords="AI transformation, enterprise success, Fortune 100, ROI, manufacturing, case study, AI implementation"
        url="/case-studies/global-enterprise-ai-transformation-2025-ultimate-success"
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Link>
          
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Global Enterprise AI Transformation 2025
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold opacity-90">
              Ultimate Success Story
            </h2>
            <div className="mt-6 flex flex-wrap gap-4 text-lg">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Fortune 100 Manufacturing
              </div>
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                $200M Investment
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                $15B ROI
              </div>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Executive Summary</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            This case study documents the most successful AI transformation in corporate history. 
            A Fortune 100 global manufacturing corporation achieved unprecedented results through 
            our comprehensive AI 2025 implementation, setting new benchmarks for enterprise 
            automation and profitability.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">7,500%</div>
              <div className="text-gray-600">ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">450%</div>
              <div className="text-gray-600">Revenue Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600">Quality Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>

        {/* The Challenge */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Initial Situation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-red-800 mb-3">Legacy Systems</h4>
              <p className="text-red-700">Outdated manufacturing processes with 60% efficiency</p>
            </div>
            <div className="bg-red-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-red-800 mb-3">Manual Operations</h4>
              <p className="text-red-700">70% of processes required human intervention</p>
            </div>
            <div className="bg-red-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-red-800 mb-3">Quality Issues</h4>
              <p className="text-red-700">15% defect rate in manufactured products</p>
            </div>
            <div className="bg-red-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-red-800 mb-3">Customer Dissatisfaction</h4>
              <p className="text-red-700">65% customer satisfaction score</p>
            </div>
          </div>
        </div>

        {/* The Solution */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Solution: AI 2025 Ultimate Transformation</h2>
          
          <div className="space-y-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Phase 1: Foundation & Assessment (Months 1-3)</h3>
              <ul className="list-disc pl-6 text-blue-800 space-y-2">
                <li>AI Readiness Evaluation</li>
                <li>Data Infrastructure Setup</li>
                <li>Team Training Program</li>
                <li>Technology Stack Implementation</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Phase 2: Core AI Deployment (Months 4-8)</h3>
              <ul className="list-disc pl-6 text-green-800 space-y-2">
                <li>Manufacturing Automation (99.8% automation rate)</li>
                <li>Predictive Maintenance (95% downtime reduction)</li>
                <li>Quality Control AI (99.9% defect detection)</li>
                <li>Supply Chain Intelligence</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Phase 3: Advanced Integration (Months 9-12)</h3>
              <ul className="list-disc pl-6 text-purple-800 space-y-2">
                <li>Enterprise-Wide AI Ecosystem</li>
                <li>Real-time Analytics</li>
                <li>Automated Decision Making</li>
                <li>Continuous Learning Systems</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Results: Unprecedented Success</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 mr-2" />
                Financial Performance
              </h3>
              <ul className="space-y-3 text-green-800">
                <li><strong>Revenue Growth:</strong> 450% increase</li>
                <li><strong>Cost Reduction:</strong> 75% decrease</li>
                <li><strong>Profit Margin:</strong> 42% (from 8%)</li>
                <li><strong>ROI:</strong> 7,500% in first year</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <Target className="h-6 w-6 mr-2" />
                Operational Excellence
              </h3>
              <ul className="space-y-3 text-blue-800">
                <li><strong>Production Speed:</strong> 400% increase</li>
                <li><strong>Quality Rate:</strong> 99.9% first-pass yield</li>
                <li><strong>Equipment Utilization:</strong> 98%</li>
                <li><strong>Lead Time:</strong> 80% reduction</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center">
                <Award className="h-6 w-6 mr-2" />
                Employee Impact
              </h3>
              <ul className="space-y-3 text-purple-800">
                <li><strong>New Jobs:</strong> 15,000 high-skilled positions</li>
                <li><strong>Employee Satisfaction:</strong> 92%</li>
                <li><strong>Productivity:</strong> 300% increase</li>
                <li><strong>Training:</strong> 100% AI collaboration certified</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Enterprise?</h2>
          <p className="text-xl mb-6 opacity-90">
            Don't let your competitors gain the advantage. Our AI 2025 Implementation Mastery program 
            provides everything you need to achieve similar results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/ai-2025-implementation-guide"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <Target className="mr-2 h-5 w-5" />
              Get Implementation Guide
            </Link>
            
            <Link
              href="/case-studies"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              <Users className="mr-2 h-5 w-5" />
              View More Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}