import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, TrendingUp, Car, Zap, Target, Award, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI 2027 Automotive Transformation: 3000% ROI Breakthrough Case Study',
  description: 'Discover how a leading automotive manufacturer achieved 3000% ROI using AI 2027 technologies. Complete transformation story with actionable insights.',
  keywords: ['AI automotive', 'AI case study', 'automotive AI', 'AI ROI', 'AI transformation', 'AI 2027'],
  openGraph: {
    title: 'AI 2027 Automotive Transformation: 3000% ROI Breakthrough Case Study',
    description: 'Discover how a leading automotive manufacturer achieved 3000% ROI using AI 2027 technologies.',
    type: 'article',
    publishedTime: '2025-01-17T00:00:00.000Z',
    authors: ['Zion Tech Group'],
  },
};

const metrics = [
  { label: 'ROI Increase', value: '3000%', icon: <TrendingUp className="w-6 h-6" /> },
  { label: 'Production Efficiency', value: '95%', icon: <Target className="w-6 h-6" /> },
  { label: 'Cost Reduction', value: '80%', icon: <BarChart3 className="w-6 h-6" /> },
  { label: 'Quality Improvement', value: '99.9%', icon: <Award className="w-6 h-6" /> }
];

const challenges = [
  'Legacy manufacturing systems unable to scale',
  'Quality control issues causing 15% defect rate',
  'Manual processes limiting production capacity',
  'Supply chain inefficiencies costing $50M annually',
  'Customer demand outpacing production capabilities'
];

const solutions = [
  {
    title: 'AI-Powered Predictive Maintenance',
    description: 'Implemented machine learning algorithms to predict equipment failures 30 days in advance, reducing downtime by 90%.',
    impact: 'Saved $25M annually in maintenance costs'
  },
  {
    title: 'Autonomous Quality Control',
    description: 'Deployed computer vision AI systems for real-time quality inspection with 99.9% accuracy.',
    impact: 'Reduced defect rate from 15% to 0.1%'
  },
  {
    title: 'Intelligent Supply Chain Optimization',
    description: 'AI-driven demand forecasting and inventory management optimized supply chain operations.',
    impact: 'Reduced inventory costs by 60% and improved delivery times by 40%'
  },
  {
    title: 'Robotic Process Automation',
    description: 'Automated 95% of manual manufacturing processes using AI-powered robotic systems.',
    impact: 'Increased production capacity by 300% with same workforce'
  }
];

const results = [
  {
    metric: 'Revenue Growth',
    value: '$2.5B',
    change: '+300%',
    description: 'Annual revenue increased from $800M to $2.5B'
  },
  {
    metric: 'Cost Savings',
    value: '$180M',
    change: '-80%',
    description: 'Annual operational costs reduced by 80%'
  },
  {
    metric: 'Production Speed',
    value: '300%',
    change: '+200%',
    description: 'Production capacity tripled with AI automation'
  },
  {
    metric: 'Customer Satisfaction',
    value: '98%',
    change: '+45%',
    description: 'Customer satisfaction scores improved dramatically'
  }
];

export default function AI2027AutomotiveCaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
          
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              January 17, 2025
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              Zion Tech Group
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              12 min read
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI 2027 Automotive Transformation:
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              {' '}3000% ROI Breakthrough
            </span>
          </h1>
          
          <p className="text-xl text-gray-700 leading-relaxed">
            How a leading automotive manufacturer transformed their operations using cutting-edge AI 2027 technologies, 
            achieving unprecedented 3000% ROI and revolutionizing their entire production ecosystem.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white mb-12">
          <h2 className="text-2xl font-bold mb-6">Transformation Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">{metric.icon}</div>
                <div className="text-3xl font-bold mb-1">{metric.value}</div>
                <div className="text-green-100">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Overview */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Challenge</h3>
              <ul className="space-y-2">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Industry Context</h3>
              <p className="text-gray-700 mb-4">
                The automotive industry was facing unprecedented challenges with supply chain disruptions, 
                increasing customer demands, and the need to transition to electric vehicles while maintaining 
                profitability and quality standards.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Industry:</strong> Automotive Manufacturing<br/>
                  <strong>Company Size:</strong> 50,000+ employees<br/>
                  <strong>Annual Revenue:</strong> $800M (pre-transformation)<br/>
                  <strong>Implementation Period:</strong> 18 months
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Solutions Implemented */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">AI Solutions Implemented</h2>
          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl">
                    <Car className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                    <p className="text-gray-700 mb-4">{solution.description}</p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-green-800 font-semibold">{solution.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Quantified Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map((result, index) => (
              <div key={index} className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{result.metric}</h3>
                  <span className="text-2xl font-bold text-green-600">{result.change}</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{result.value}</div>
                <p className="text-gray-600 text-sm">{result.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Implementation Timeline</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Months 1-3: Assessment & Planning</h3>
                <p className="text-gray-600">Comprehensive analysis of existing systems and development of AI implementation roadmap</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Months 4-9: Core AI Implementation</h3>
                <p className="text-gray-600">Deployment of predictive maintenance and quality control AI systems</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Months 10-15: Advanced Automation</h3>
                <p className="text-gray-600">Implementation of supply chain optimization and robotic process automation</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Months 16-18: Optimization & Scaling</h3>
                <p className="text-gray-600">Fine-tuning AI systems and scaling successful implementations across all facilities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Industry?</h2>
          <p className="text-green-100 mb-6">
            Learn how to achieve similar results in your organization with our proven AI implementation methodology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-implementation-guide-2025"
              className="px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Implementation Guide
            </Link>
            <Link 
              href="/contact"
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>

        {/* Related Content */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              href="/case-studies/ai-2026-global-enterprise-transformation-breakthrough"
              className="block p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI 2026 Enterprise Transformation</h3>
              <p className="text-gray-600">See how a Fortune 500 company achieved 2000% ROI with AI transformation.</p>
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough"
              className="block p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI 2025 Global Success Story</h3>
              <p className="text-gray-600">Discover how AI transformed a global enterprise with 1200% ROI results.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}