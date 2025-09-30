import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manufacturing IoT Automation: 85% Efficiency & $10M+ Savings | Zion Tech Group',
  description: 'See how smart manufacturing achieved 85% efficiency gains and $10M+ savings with IoT automation and AI. Real-world case study of digital transformation success.',
  keywords: 'manufacturing IoT automation, smart manufacturing, industrial automation, IoT case study, manufacturing efficiency, digital transformation',
  openGraph: {
    title: 'Manufacturing IoT Automation: 85% Efficiency & $10M+ Savings',
    description: 'See how smart manufacturing achieved 85% efficiency gains and $10M+ savings with IoT automation and AI.',
    type: 'article',
    publishedTime: '2026-01-20T00:00:00.000Z',
    authors: ['Zion Tech Group'],
  },
};

export default function ManufacturingIOTAutomation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              New Case Study
            </span>
            <span className="text-sm opacity-90">Manufacturing</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Manufacturing IoT Automation
          </h1>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            See how smart manufacturing achieved 85% efficiency gains and $10M+ savings 
            with IoT automation and AI. Real-world case study of digital transformation success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Optimize Your Manufacturing
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore IoT Services
            </Link>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-700">Efficiency Gains</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">$10M+</div>
              <div className="text-gray-700">Annual Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-700">Quality Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-600 mb-2">60%</div>
              <div className="text-gray-700">Downtime Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <div className="mb-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-600">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Case Study Overview</h3>
            <p className="text-blue-800">
              A leading manufacturing company transformed their operations with IoT automation and AI, 
              achieving unprecedented efficiency gains and cost savings. This case study details the 
              implementation process, challenges overcome, and remarkable results achieved.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Client Background</h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our client was a Fortune 500 manufacturing company with 15 production facilities worldwide, 
            employing over 50,000 workers. They faced significant challenges with manual processes, 
            equipment downtime, quality control issues, and rising operational costs.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-4">Initial Challenges</h3>
              <ul className="space-y-2 text-red-700">
                <li>• 40% manual process dependency</li>
                <li>• 25% equipment downtime</li>
                <li>• 15% quality defect rate</li>
                <li>• $50M+ annual operational costs</li>
                <li>• Limited real-time visibility</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-4">Business Objectives</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Reduce operational costs by 30%</li>
                <li>• Improve equipment uptime to 95%</li>
                <li>• Achieve 99% quality standards</li>
                <li>• Automate 80% of manual processes</li>
                <li>• Enable real-time monitoring</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Solution Architecture</h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We designed and implemented a comprehensive IoT automation solution that integrated 
            sensors, AI analytics, and predictive maintenance across all manufacturing facilities.
          </p>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold text-purple-900 mb-6">Technology Stack</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-2">IoT Sensors & Devices</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Temperature and pressure sensors</li>
                    <li>• Vibration and acoustic monitoring</li>
                    <li>• Camera vision systems</li>
                    <li>• RFID tracking systems</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-2">AI & Analytics</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Machine learning algorithms</li>
                    <li>• Predictive analytics</li>
                    <li>• Computer vision</li>
                    <li>• Natural language processing</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-2">Cloud Infrastructure</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• AWS IoT Core</li>
                    <li>• Edge computing nodes</li>
                    <li>• Real-time data streaming</li>
                    <li>• Scalable data storage</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-2">Integration Layer</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• ERP system integration</li>
                    <li>• MES connectivity</li>
                    <li>• API management</li>
                    <li>• Data synchronization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Implementation Process</h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The implementation was executed in four phases over 18 months, with careful planning 
            and stakeholder engagement to ensure minimal disruption to ongoing operations.
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl">
              <div className="w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Phase 1: Assessment & Planning (Months 1-3)</h4>
                <p className="text-gray-700">Comprehensive facility assessment, process mapping, and technology selection. Identified 200+ automation opportunities across 15 facilities.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Phase 2: Pilot Implementation (Months 4-9)</h4>
                <p className="text-gray-700">Deployed IoT automation in 3 pilot facilities, validating technology performance and achieving 60% efficiency improvements.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
              <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Phase 3: Scale Deployment (Months 10-15)</h4>
                <p className="text-gray-700">Rolled out automation across remaining 12 facilities, implementing standardized processes and centralized monitoring.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl">
              <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Phase 4: Optimization (Months 16-18)</h4>
                <p className="text-gray-700">Fine-tuned systems, implemented advanced analytics, and achieved full operational excellence with 85% efficiency gains.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Key Features Implemented</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Smart Manufacturing Features</h3>
              <ul className="space-y-3 text-blue-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Real-time production monitoring with 15,000+ sensors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Predictive maintenance with 95% accuracy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Automated quality control with computer vision</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Intelligent inventory management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Energy optimization and waste reduction</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-4">AI-Powered Analytics</h3>
              <ul className="space-y-3 text-green-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Real-time dashboards and KPI monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Anomaly detection and alert systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Demand forecasting and capacity planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Supply chain optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Performance benchmarking and reporting</span>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Results Achieved</h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The IoT automation implementation delivered exceptional results, exceeding all initial 
            objectives and establishing new industry benchmarks for manufacturing efficiency.
          </p>

          <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold text-green-900 mb-6">Performance Improvements</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center bg-white p-4 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                <div className="text-sm text-green-700">Efficiency Gains</div>
                <div className="text-xs text-green-600 mt-1">vs. 60% target</div>
              </div>
              <div className="text-center bg-white p-4 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">$10.2M</div>
                <div className="text-sm text-green-700">Annual Savings</div>
                <div className="text-xs text-green-600 mt-1">vs. $15M target</div>
              </div>
              <div className="text-center bg-white p-4 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-sm text-green-700">Quality Improvement</div>
                <div className="text-xs text-green-600 mt-1">vs. 99% target</div>
              </div>
              <div className="text-center bg-white p-4 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
                <div className="text-sm text-green-700">Downtime Reduction</div>
                <div className="text-xs text-green-600 mt-1">vs. 50% target</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Operational Benefits</h3>
              <ul className="space-y-2 text-purple-700">
                <li>• 90% reduction in manual processes</li>
                <li>• 99.8% equipment uptime achieved</li>
                <li>• 75% faster issue resolution</li>
                <li>• 50% reduction in energy consumption</li>
                <li>• 80% improvement in safety metrics</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Business Impact</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• 300% ROI achieved in 18 months</li>
                <li>• 25% increase in production capacity</li>
                <li>• 40% reduction in operational costs</li>
                <li>• 95% customer satisfaction improvement</li>
                <li>• 50% faster time-to-market</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Lessons Learned</h2>
          
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl mb-8">
            <h3 className="text-xl font-bold text-yellow-800 mb-4">Key Success Factors</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-800 mb-3">Technical Excellence</h4>
                <ul className="space-y-1 text-yellow-700 text-sm">
                  <li>• Comprehensive data integration strategy</li>
                  <li>• Scalable cloud infrastructure</li>
                  <li>• Advanced AI and machine learning</li>
                  <li>• Robust security and compliance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-800 mb-3">Change Management</h4>
                <ul className="space-y-1 text-yellow-700 text-sm">
                  <li>• Strong leadership commitment</li>
                  <li>• Comprehensive staff training</li>
                  <li>• Gradual rollout approach</li>
                  <li>• Continuous feedback and improvement</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Manufacturing?</h3>
            <p className="text-lg mb-6 opacity-90">
              Achieve similar results with IoT automation and AI. Our expert team can help you 
              implement smart manufacturing solutions and achieve 85% efficiency gains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
              >
                Explore IoT Services
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Case Studies</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/case-studies/ai-supply-chain-optimization-2026" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    AI Supply Chain Optimization 2026
                  </h4>
                  <p className="text-gray-600">
                    90% forecast accuracy & $12M+ cost reduction with AI-powered supply chain optimization.
                  </p>
                </div>
              </Link>
              <Link href="/case-studies/ai-enterprise-transformation-success-2026" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Enterprise AI Transformation Success
                  </h4>
                  <p className="text-gray-600">
                    $10M ROI case study with 95% automation & 300% productivity gains.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}