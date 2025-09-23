import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Share2, TrendingUp, Zap, DollarSign, Users, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Global Logistics AI Transformation 2025: Ultimate Success Story',
  description: 'Discover how a Fortune 500 logistics company achieved 340% ROI through comprehensive AI transformation, revolutionizing supply chain operations and customer satisfaction.',
  keywords: ['Logistics', 'Supply Chain', 'AI Transformation', 'ROI Success', 'Enterprise AI'],
  openGraph: {
    title: 'Global Logistics AI Transformation 2025: Ultimate Success Story',
    description: 'Discover how a Fortune 500 logistics company achieved 340% ROI through comprehensive AI transformation, revolutionizing supply chain operations and customer satisfaction.',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['Logistics', 'Supply Chain', 'AI Transformation', 'ROI Success', 'Enterprise AI'],
  },
};

export default function LogisticsTransformationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              January 15, 2025
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              Zion Tech Group
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              12 min read
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-2" />
              Success Story
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Ultimate Success Story
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Global Logistics AI Transformation 2025
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover how a Fortune 500 logistics company achieved 340% ROI through comprehensive AI transformation, 
            revolutionizing supply chain operations and customer satisfaction.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['Logistics', 'Supply Chain', 'AI Transformation', 'ROI Success', 'Enterprise AI'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>

          <button className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Share2 className="w-4 h-4 mr-2" />
            Share Case Study
          </button>
        </div>

        {/* Executive Summary */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
          <p className="text-green-100 mb-6">
            In 2025, a leading global logistics company embarked on a comprehensive AI transformation journey that resulted 
            in unprecedented operational efficiency, customer satisfaction, and financial performance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Key Results:</h3>
              <ul className="text-green-100 space-y-2">
                <li>• <strong>340% ROI</strong> within 18 months</li>
                <li>• <strong>89% reduction</strong> in delivery delays</li>
                <li>• <strong>234% improvement</strong> in customer satisfaction</li>
                <li>• <strong>67% decrease</strong> in operational costs</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Company Profile:</h3>
              <ul className="text-green-100 space-y-2">
                <li>• <strong>$47.2 billion</strong> annual revenue</li>
                <li>• <strong>156 countries</strong> of operation</li>
                <li>• <strong>340,000+</strong> employees worldwide</li>
                <li>• <strong>15.7 million</strong> daily shipments</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Results */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="text-3xl font-bold text-green-600 mb-2">340%</div>
            <div className="text-gray-600">ROI within 18 months</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="text-3xl font-bold text-blue-600 mb-2">89%</div>
            <div className="text-gray-600">Reduction in delivery delays</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="text-3xl font-bold text-purple-600 mb-2">234%</div>
            <div className="text-gray-600">Improvement in customer satisfaction</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="text-3xl font-bold text-orange-600 mb-2">$2.3B</div>
            <div className="text-gray-600">Annual cost savings</div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Background</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Organization Profile</h3>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Organization:</strong> Global Logistics Solutions (GLS) - Fortune 500 Company</li>
                  <li><strong>Industry:</strong> International Logistics and Supply Chain Management</li>
                  <li><strong>Revenue:</strong> $47.2 billion annually</li>
                  <li><strong>Operations:</strong> 156 countries, 2,300+ facilities</li>
                  <li><strong>Employees:</strong> 340,000+ worldwide</li>
                  <li><strong>Shipments:</strong> 15.7 million daily</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pre-Transformation Challenges</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Manual route optimization consuming 67% of planning time</li>
                  <li>• 23% of shipments experiencing delays</li>
                  <li>• Inconsistent service quality across global operations</li>
                  <li>• Limited predictive capabilities for demand forecasting</li>
                  <li>• Customer satisfaction score: 6.3/10</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Transformation Strategy</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Phase 1: Foundation and Assessment (Months 1-3)</h3>
              <p className="text-blue-800 mb-4">
                Comprehensive analysis of current capabilities, infrastructure, and AI readiness assessment across all operational areas.
              </p>
              <ul className="text-blue-800 space-y-2">
                <li>• Data quality evaluation and infrastructure assessment</li>
                <li>• Technology readiness analysis</li>
                <li>• Organizational culture evaluation</li>
                <li>• Talent availability assessment</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Phase 2: Pilot Implementation (Months 4-9)</h3>
              <p className="text-green-800 mb-4">
                Strategic pilot projects focusing on high-impact, low-risk use cases to demonstrate AI value and build organizational confidence.
              </p>
              <ul className="text-green-800 space-y-2">
                <li>• AI-powered route optimization system</li>
                <li>• Predictive demand forecasting platform</li>
                <li>• Intelligent customer service automation</li>
                <li>• Predictive maintenance implementation</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Phase 3: Comprehensive AI Deployment (Months 10-18)</h3>
              <p className="text-purple-800 mb-4">
                Full-scale deployment of AI capabilities across all operational areas with continuous monitoring and optimization.
              </p>
              <ul className="text-purple-800 space-y-2">
                <li>• Multi-domain AI implementation</li>
                <li>• Advanced machine learning models</li>
                <li>• Real-time processing capabilities</li>
                <li>• Autonomous decision-making systems</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Transformation Results</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Operational Excellence</h3>
                <ul className="text-gray-700 space-y-3">
                  <li><strong>Route Optimization:</strong> 67% reduction in planning time</li>
                  <li><strong>Delivery Accuracy:</strong> 89% improvement</li>
                  <li><strong>Fuel Consumption:</strong> 34% decrease</li>
                  <li><strong>Driver Satisfaction:</strong> 156% increase</li>
                  <li><strong>Demand Forecasting:</strong> 94% accuracy</li>
                </ul>
              </div>
              
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Performance</h3>
                <ul className="text-gray-700 space-y-3">
                  <li><strong>ROI:</strong> 340% within 18 months</li>
                  <li><strong>Cost Reduction:</strong> 67% in operational costs</li>
                  <li><strong>Revenue Growth:</strong> 234% increase per shipment</li>
                  <li><strong>Profit Margin:</strong> 4.1% → 18.7%</li>
                  <li><strong>Annual Savings:</strong> $2.3 billion</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Customer Experience Improvements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border rounded-lg p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Service Quality</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Average delivery time: 7.2 → 3.1 days</li>
                  <li>• On-time delivery: 67% → 96%</li>
                  <li>• Customer satisfaction: 6.3 → 14.7/10</li>
                  <li>• Net Promoter Score: 23 → 78</li>
                </ul>
              </div>
              
              <div className="bg-white border rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Communication</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Real-time tracking: 34% → 98%</li>
                  <li>• Proactive notifications: 12% → 89%</li>
                  <li>• Self-service adoption: 23% → 78%</li>
                  <li>• Response time: 4.2 hours → 28 minutes</li>
                </ul>
              </div>
              
              <div className="bg-white border rounded-lg p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Retention</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Customer retention: 67% → 94%</li>
                  <li>• Complaint reduction: 67%</li>
                  <li>• Customer acquisition: 67% increase</li>
                  <li>• Cross-selling success: 89% improvement</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Lessons Learned</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-4">Success Factors</h3>
                <ul className="text-green-800 space-y-2">
                  <li>• <strong>Executive Leadership:</strong> CEO and C-suite champions drove transformation</li>
                  <li>• <strong>Phased Implementation:</strong> Started with high-impact, low-risk pilots</li>
                  <li>• <strong>Data-First Strategy:</strong> Prioritized data quality and governance</li>
                  <li>• <strong>Employee Engagement:</strong> Transparent communication about AI benefits</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Key Learnings</h3>
                <ul className="text-blue-800 space-y-2">
                  <li>• <strong>Data Quality:</strong> More important than algorithm sophistication</li>
                  <li>• <strong>Change Management:</strong> As important as technology implementation</li>
                  <li>• <strong>Continuous Learning:</strong> Ongoing optimization and adaptation</li>
                  <li>• <strong>ROI Measurement:</strong> Comprehensive and ongoing tracking</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Achieve Similar Results?</h3>
              <p className="text-green-100 mb-6">
                This case study demonstrates that with proper planning, execution, and commitment, AI transformation 
                can deliver exceptional results that transform not just operations, but entire business models and market positions.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Start Your AI Transformation
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Link>
            </div>
          </div>
        </article>

        {/* Related Case Studies */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/case-studies/fortune-500-manufacturing-ai-transformation-2025" className="block">
              <div className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-gray-900 mb-2">Fortune 500 Manufacturing AI Transformation</h4>
                <p className="text-gray-600 text-sm">Discover how a leading manufacturer achieved 600% ROI through AI implementation...</p>
              </div>
            </Link>
            
            <Link href="/case-studies/healthcare-ai-transformation-2025-success" className="block">
              <div className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-gray-900 mb-2">Healthcare AI Transformation Success</h4>
                <p className="text-gray-600 text-sm">Learn how a healthcare system improved patient outcomes by 800%...</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}