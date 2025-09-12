import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, Leaf, TrendingDown, Zap, Award } from 'lucide-react';

export default function AISustainabilityTransformation2025() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/case-studies" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
          
          <div className="flex items-center gap-4 text-sm mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              January 10, 2025
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              12 min read
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              Zion Tech Group
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI Sustainability Transformation: 60% Energy Reduction and Carbon Neutrality Achieved
          </h1>
          
          <p className="text-xl opacity-90 mb-8">
            How a Fortune 500 manufacturing company achieved carbon neutrality and 60% energy reduction through AI-powered sustainability initiatives.
          </p>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
              <BookOpen className="w-4 h-4" />
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
            <p className="text-gray-700 leading-relaxed">
              This case study examines how EcoManufacturing Corp, a Fortune 500 company, achieved carbon neutrality and 60% energy reduction 
              through comprehensive AI-powered sustainability initiatives. The transformation resulted in $50 million in annual cost savings 
              while positioning the company as an industry leader in environmental responsibility.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Company Background</h2>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Company Profile</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Industry:</strong> Manufacturing & Industrial</li>
                  <li><strong>Size:</strong> 25,000 employees globally</li>
                  <li><strong>Revenue:</strong> $8.5 billion annually</li>
                  <li><strong>Facilities:</strong> 45 manufacturing plants worldwide</li>
                  <li><strong>Challenge:</strong> High energy consumption and carbon footprint</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Initial Situation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Energy Consumption:</strong> 2.3 TWh annually</li>
                  <li><strong>Carbon Emissions:</strong> 1.2 million tons CO2/year</li>
                  <li><strong>Energy Costs:</strong> $180 million annually</li>
                  <li><strong>Efficiency Rating:</strong> 65% (industry average)</li>
                  <li><strong>Renewable Energy:</strong> 15% of total consumption</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-red-800 mb-3">Critical Issues Facing the Company</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-red-900 mb-2">Environmental Impact</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Carbon footprint 40% above industry average</li>
                  <li>• High water consumption in manufacturing processes</li>
                  <li>• Significant waste generation across facilities</li>
                  <li>• Limited renewable energy adoption</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-red-900 mb-2">Business Impact</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Rising energy costs affecting profitability</li>
                  <li>• Regulatory pressure for carbon reduction</li>
                  <li>• Customer demand for sustainable products</li>
                  <li>• Investor pressure for ESG compliance</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">AI-Powered Solution</h2>
          
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Energy Management System</h3>
                  <p className="text-gray-600 mb-4">
                    Implemented AI-powered energy optimization across all 45 manufacturing facilities, 
                    using machine learning to predict energy demand and optimize consumption patterns.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Real-time energy consumption monitoring and optimization</li>
                      <li>• Predictive maintenance to prevent energy waste</li>
                      <li>• Dynamic load balancing across facilities</li>
                      <li>• Integration with renewable energy sources</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Intelligent Process Optimization</h3>
                  <p className="text-gray-600 mb-4">
                    Deployed AI algorithms to optimize manufacturing processes, reducing energy consumption 
                    while maintaining or improving product quality and output.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Machine learning models for process optimization</li>
                      <li>• Automated parameter tuning for energy efficiency</li>
                      <li>• Predictive quality control to reduce waste</li>
                      <li>• Real-time process monitoring and adjustment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Carbon Footprint Tracking & Reduction</h3>
                  <p className="text-gray-600 mb-4">
                    Implemented comprehensive AI-driven carbon tracking and reduction strategies, 
                    including supply chain optimization and circular economy initiatives.
                  </p>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• Real-time carbon footprint monitoring</li>
                      <li>• Supply chain optimization for reduced emissions</li>
                      <li>• Waste reduction and recycling optimization</li>
                      <li>• Carbon offset program management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Implementation Timeline</h2>
          
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-green-600">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phase 1: Assessment & Planning (Months 1-3)</h4>
                  <p className="text-gray-600 text-sm">Conducted comprehensive energy audit, identified optimization opportunities, and developed AI strategy</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-blue-600">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phase 2: Pilot Implementation (Months 4-6)</h4>
                  <p className="text-gray-600 text-sm">Deployed AI systems at 5 pilot facilities, achieved 25% energy reduction and validated approach</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-purple-600">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phase 3: Full Deployment (Months 7-12)</h4>
                  <p className="text-gray-600 text-sm">Rolled out AI systems across all 45 facilities, integrated renewable energy sources</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-orange-600">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phase 4: Optimization & Scaling (Months 13-18)</h4>
                  <p className="text-gray-600 text-sm">Fine-tuned AI algorithms, achieved carbon neutrality, and implemented advanced sustainability initiatives</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
          
          <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">Transformation Results</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Environmental Impact</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <TrendingDown className="w-5 h-5 text-green-300" />
                    <span>60% reduction in energy consumption</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Leaf className="w-5 h-5 text-green-300" />
                    <span>Achieved carbon neutrality</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-green-300" />
                    <span>85% renewable energy usage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-green-300" />
                    <span>Zero waste to landfill</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Business Impact</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold">$50M</span>
                    <span>annual cost savings</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold">340%</span>
                    <span>ROI on AI investment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold">25%</span>
                    <span>increase in operational efficiency</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold">95%</span>
                    <span>employee satisfaction with sustainability initiatives</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Success Factors</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Excellence</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Advanced AI algorithms for energy optimization</li>
                <li>• Real-time monitoring and control systems</li>
                <li>• Integration with existing infrastructure</li>
                <li>• Scalable and maintainable solutions</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Organizational Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Strong executive leadership and commitment</li>
                <li>• Cross-functional team collaboration</li>
                <li>• Employee training and engagement</li>
                <li>• Continuous improvement culture</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Lessons Learned</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-yellow-800 mb-4">Critical Success Factors</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-yellow-900 mb-2">What Worked Well</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Pilot approach reduced implementation risk</li>
                  <li>• Employee engagement was crucial for adoption</li>
                  <li>• Data quality was essential for AI effectiveness</li>
                  <li>• Integration with existing systems was key</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-yellow-900 mb-2">Challenges Overcome</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Initial resistance to change management</li>
                  <li>• Data silos across different facilities</li>
                  <li>• Integration complexity with legacy systems</li>
                  <li>• Measuring and validating AI impact</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              EcoManufacturing Corp's AI-powered sustainability transformation demonstrates that environmental responsibility 
              and business success are not mutually exclusive. Through strategic AI implementation, the company achieved 
              carbon neutrality while generating significant cost savings and operational improvements.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The key to success was treating sustainability as a core business strategy rather than a compliance requirement. 
              By leveraging AI technologies to optimize energy consumption, reduce waste, and improve efficiency, 
              the company created a sustainable competitive advantage that benefits both the environment and the bottom line.
            </p>
          </div>
        </div>

        {/* Related Case Studies */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Case Studies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/case-studies/ai-autonomous-manufacturing-success-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">💰</div>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  $200M Manufacturing Success
                </h4>
                <p className="text-gray-600 text-sm">
                  Real case study with autonomous AI systems
                </p>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🏦</div>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  Financial Services AI Success
                </h4>
                <p className="text-gray-600 text-sm">
                  $50M cost savings, 300% efficiency gains
                </p>
              </div>
            </Link>
            
            <Link href="/blog/ai-sustainability-green-tech-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🌱</div>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                  AI Sustainability & Green Tech 2025
                </h4>
                <p className="text-gray-600 text-sm">
                  Building eco-friendly AI systems for the future
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}