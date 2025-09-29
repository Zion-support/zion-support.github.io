import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Users, 
  Leaf, 
  TrendingUp, 
  Zap,
  Globe,
  Recycle,
  Shield,
  Award,
  Target
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Sustainability Transformation 2026: $10M ROI Case Study | Zion Tech Group',
  description: 'See how a Fortune 500 company achieved carbon neutrality and $10M ROI with comprehensive AI sustainability transformation. 95% automation, 80% energy reduction.',
  keywords: 'AI sustainability case study, carbon neutral AI, green AI transformation, sustainable technology ROI, environmental AI, energy efficiency',
  openGraph: {
    title: 'AI Sustainability Transformation 2026: $10M ROI Case Study',
    description: 'See how a Fortune 500 company achieved carbon neutrality and $10M ROI with comprehensive AI sustainability transformation.',
    type: 'article',
    publishedTime: '2025-01-20T00:00:00Z',
    authors: ['Zion Tech Group Team'],
  },
};

export default function AISustainabilityTransformation2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Featured Case Study
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              AI Sustainability Transformation 2026: $10M ROI Case Study
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              See how a Fortune 500 manufacturing company achieved carbon neutrality and $10M ROI with comprehensive AI sustainability transformation. 
              95% automation efficiency, 80% energy reduction, and complete environmental compliance.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                15 min read
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Zion Tech Group Team
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 mr-2">📅</span>
                January 20, 2025
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">$10M</div>
              <div className="text-gray-600 font-medium">Total ROI</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Automation Rate</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6">
              <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Carbon Neutral</div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6">
              <div className="text-3xl font-bold text-teal-600 mb-2">18</div>
              <div className="text-gray-600 font-medium">Months Timeline</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Global Manufacturing Corp, a Fortune 500 company with 25 manufacturing facilities across 12 countries, 
              faced mounting pressure to achieve carbon neutrality while maintaining competitive operations. Their traditional 
              manufacturing processes consumed 45MW of power daily, generating 35,000 tons of CO2 annually, with energy costs 
              exceeding $18M per year.
            </p>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Critical Challenges</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 35,000 tons annual CO2 emissions</li>
                <li>• $18M annual energy costs</li>
                <li>• 45MW daily power consumption</li>
                <li>• Regulatory compliance pressure</li>
                <li>• Investor ESG requirements</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">The Solution</h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Working with Zion Tech Group, Global Manufacturing Corp implemented a comprehensive AI sustainability transformation 
              that integrated renewable energy, intelligent automation, and carbon offset strategies across their entire operation.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Phase 1: Energy Infrastructure Overhaul (Months 1-6)</h3>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-green-600 mr-3" />
                  <h4 className="text-lg font-bold text-gray-900">Renewable Energy Integration</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Solar panel installation (25MW capacity)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Wind energy partnerships
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Smart grid integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Energy storage systems
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <Recycle className="w-8 h-8 text-blue-600 mr-3" />
                  <h4 className="text-lg font-bold text-gray-900">Smart Manufacturing</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    AI-powered production optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Predictive maintenance systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Waste reduction algorithms
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Real-time energy monitoring
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Phase 2: AI Automation Implementation (Months 7-12)</h3>
            
            <div className="bg-gray-50 rounded-lg p-6 my-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Intelligent Automation Systems</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Target className="w-5 h-5 text-green-600 mr-2" />
                    <span className="font-semibold text-gray-900">Production Optimization</span>
                  </div>
                  <p className="text-sm text-gray-600">AI agents optimize production schedules for maximum efficiency</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Shield className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-gray-900">Quality Control</span>
                  </div>
                  <p className="text-sm text-gray-600">Computer vision systems reduce defects by 85%</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Globe className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="font-semibold text-gray-900">Supply Chain</span>
                  </div>
                  <p className="text-sm text-gray-600">Intelligent logistics reduce transportation emissions</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Phase 3: Carbon Neutrality Achievement (Months 13-18)</h3>
            
            <div className="space-y-4 my-8">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                  <Leaf className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Carbon Offset Programs</h4>
                  <p className="text-gray-600">
                    Implemented comprehensive carbon offset initiatives including reforestation projects, 
                    renewable energy credits, and carbon capture partnerships.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">ESG Reporting & Compliance</h4>
                  <p className="text-gray-600">
                    Automated ESG reporting systems provide real-time sustainability metrics and ensure 
                    compliance with international environmental standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 rounded-full p-2 mr-4 mt-1">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Continuous Optimization</h4>
                  <p className="text-gray-600">
                    AI-powered systems continuously monitor and optimize energy consumption, 
                    production efficiency, and environmental impact across all facilities.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">The Results</h2>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transformation Outcomes</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Environmental Impact:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 100% carbon neutral operations</li>
                    <li>• 80% reduction in energy consumption</li>
                    <li>• 35,000 tons CO2 eliminated annually</li>
                    <li>• 95% waste reduction in production</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Business Impact:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• $10M total ROI achieved</li>
                    <li>• 95% automation efficiency</li>
                    <li>• 60% reduction in operational costs</li>
                    <li>• 25% increase in production capacity</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Financial Impact Breakdown</h3>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 my-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600 mb-2">$8.5M</div>
                  <div className="text-sm text-gray-600">Energy Cost Savings</div>
                  <div className="text-xs text-gray-500 mt-1">Annual reduction</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600 mb-2">$3.2M</div>
                  <div className="text-sm text-gray-600">Operational Efficiency</div>
                  <div className="text-xs text-gray-500 mt-1">Through automation</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-600 mb-2">$2.8M</div>
                  <div className="text-sm text-gray-600">Tax Incentives</div>
                  <div className="text-xs text-gray-500 mt-1">Green energy credits</div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                <div className="text-3xl font-bold text-gray-900">$10M Total ROI</div>
                <div className="text-sm text-gray-600">18-month payback period</div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Key Success Factors</h2>
            
            <div className="space-y-4 my-8">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Executive Leadership Commitment</h4>
                  <p className="text-gray-600">
                    Strong C-suite support and dedicated sustainability budget enabled rapid implementation 
                    and cross-functional collaboration across 25 facilities.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Phased Implementation Approach</h4>
                  <p className="text-gray-600">
                    Systematic rollout across facilities allowed for learning, optimization, and risk mitigation 
                    while maintaining operational continuity.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 rounded-full p-2 mr-4 mt-1">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technology Integration Excellence</h4>
                  <p className="text-gray-600">
                    Seamless integration of AI systems with existing infrastructure minimized disruption 
                    and maximized adoption across all operational levels.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Achieve Carbon Neutrality with AI?</h3>
              <p className="text-lg mb-6 opacity-90">
                Join Global Manufacturing Corp and 50+ other companies achieving carbon neutrality 
                while increasing profitability with AI sustainability solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  Get Sustainability Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/services/ai-sustainability-consulting"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Case Studies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/case-studies/ai-quantum-optimization-2026" className="group">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="text-sm text-purple-600 font-medium mb-2">Quantum Computing</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  AI Quantum Optimization 2026
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  See how a financial services company achieved 1000x optimization speed with quantum-enhanced AI.
                </p>
                <div className="flex items-center text-blue-600 font-medium text-sm">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-enterprise-transformation-success-2026" className="group">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">Enterprise AI</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Enterprise AI Transformation Success
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Discover how a Fortune 500 company achieved $10M ROI with comprehensive AI transformation.
                </p>
                <div className="flex items-center text-blue-600 font-medium text-sm">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>

            <Link href="/case-studies/fintech-ai-risk-compliance-2025" className="group">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="text-sm text-green-600 font-medium mb-2">FinTech</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  FinTech AI Risk Compliance
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Learn how a fintech achieved 70% risk reduction with automated governance frameworks.
                </p>
                <div className="flex items-center text-blue-600 font-medium text-sm">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}