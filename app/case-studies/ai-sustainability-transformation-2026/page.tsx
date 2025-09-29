import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, CheckCircle, TrendingUp, Leaf, DollarSign, Zap } from 'lucide-react';

export const metadata = {
  title: 'AI Sustainability Transformation 2026: $10M ROI Case Study | Zion Tech Group',
  description: 'See how a Fortune 500 company achieved carbon neutrality and $10M ROI with comprehensive AI sustainability transformation and green technology.',
  keywords: 'AI sustainability, green technology, carbon neutrality, AI transformation, environmental AI, sustainable business, 2026 case study',
};

export default function AISustainabilityTransformation2026() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            NEW 2026
          </span>
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            FEATURED
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          AI Sustainability Transformation 2026: $10M ROI Case Study
        </h1>
        <div className="flex items-center gap-6 text-gray-600 mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>15 min read</span>
          </div>
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5" />
            <span>Sustainability</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            <span>Fortune 500</span>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          See how a Fortune 500 company achieved carbon neutrality and $10M ROI with comprehensive AI sustainability 
          transformation and green technology implementation across their entire operations.
        </p>
      </div>

      {/* Key Results */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Transformation Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">$10M</div>
            <div className="text-gray-600 font-medium">ROI Achieved</div>
            <div className="text-sm text-gray-500 mt-1">Annual return</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-600 font-medium">Carbon Neutral</div>
            <div className="text-sm text-gray-500 mt-1">Operations status</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">80%</div>
            <div className="text-gray-600 font-medium">Energy Reduction</div>
            <div className="text-sm text-gray-500 mt-1">AI-optimized consumption</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">$2M</div>
            <div className="text-gray-600 font-medium">Annual Savings</div>
            <div className="text-sm text-gray-500 mt-1">Operational costs</div>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12">
        <h2 className="text-xl font-bold text-blue-900 mb-4">Executive Summary</h2>
        <p className="text-blue-800 leading-relaxed">
          A leading Fortune 500 manufacturing company successfully implemented comprehensive AI sustainability 
          transformation across their global operations, achieving carbon neutrality while generating $10M in 
          annual ROI. The 18-month transformation involved AI-powered energy optimization, waste reduction systems, 
          and sustainable supply chain management, resulting in 80% energy reduction and $2M in annual operational savings.
        </p>
      </div>

      {/* Company Background */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Background</h2>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Company Profile</h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Industry:</strong> Manufacturing & Industrial</li>
                <li><strong>Size:</strong> Fortune 500 (Top 200)</li>
                <li><strong>Employees:</strong> 45,000+ globally</li>
                <li><strong>Revenue:</strong> $8.2B annually</li>
                <li><strong>Operations:</strong> 15 countries, 50+ facilities</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Sustainability Challenges</h3>
              <ul className="space-y-2 text-gray-600">
                <li>High carbon footprint (2.3M tons CO2/year)</li>
                <li>Energy costs rising 15% annually</li>
                <li>Regulatory pressure for emissions reduction</li>
                <li>Customer demand for sustainable products</li>
                <li>Supply chain sustainability gaps</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Analysis */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Challenge Analysis</h2>
        <div className="space-y-6">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-red-900 mb-3">Environmental Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">2.3M</div>
                <div className="text-sm text-red-700">Tons CO2/year</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">$45M</div>
                <div className="text-sm text-red-700">Annual energy costs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">15%</div>
                <div className="text-sm text-red-700">Waste generation rate</div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-orange-900 mb-3">Business Impact</h3>
            <ul className="space-y-2 text-orange-800">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span>Regulatory compliance costs increasing 25% annually</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span>Customer pressure for sustainable products and practices</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span>Supply chain partners requiring sustainability certifications</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span>Investor demands for ESG (Environmental, Social, Governance) reporting</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solution Implementation */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Sustainability Solution</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          We implemented a comprehensive AI-powered sustainability transformation that addressed energy consumption, 
          waste reduction, supply chain optimization, and carbon footprint tracking across all operations.
        </p>

        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">1. AI Energy Optimization System</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Real-time energy consumption monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Predictive maintenance for equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Smart grid integration and load balancing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Renewable energy source optimization</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Results Achieved</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Energy Reduction:</span>
                    <span className="font-semibold text-green-600">80%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cost Savings:</span>
                    <span className="font-semibold text-green-600">$36M annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Carbon Reduction:</span>
                    <span className="font-semibold text-green-600">1.8M tons CO2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">2. AI Waste Reduction System</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Intelligent waste sorting and categorization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Predictive waste generation modeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Circular economy optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Automated recycling process management</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Results Achieved</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Waste Reduction:</span>
                    <span className="font-semibold text-purple-600">75%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Recycling Rate:</span>
                    <span className="font-semibold text-purple-600">95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cost Savings:</span>
                    <span className="font-semibold text-purple-600">$8M annually</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">3. Sustainable Supply Chain AI</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Supplier sustainability scoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Carbon footprint tracking across supply chain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Route optimization for reduced emissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Sustainable material sourcing recommendations</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Results Achieved</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Supply Chain Emissions:</span>
                    <span className="font-semibold text-blue-600">-60%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Transportation Costs:</span>
                    <span className="font-semibold text-blue-600">-40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Supplier Compliance:</span>
                    <span className="font-semibold text-blue-600">98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Timeline</h2>
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Phase 1: Assessment & Planning (Months 1-3)</h4>
                <p className="text-gray-600">Comprehensive sustainability audit, baseline measurements, and strategic planning.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Phase 2: Energy Optimization (Months 4-8)</h4>
                <p className="text-gray-600">AI energy management system deployment and optimization across all facilities.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Phase 3: Waste Reduction (Months 9-12)</h4>
                <p className="text-gray-600">Intelligent waste management systems and circular economy implementation.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Phase 4: Supply Chain Optimization (Months 13-15)</h4>
                <p className="text-gray-600">Sustainable supply chain AI deployment and partner integration.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Phase 5: Optimization & Scaling (Months 16-18)</h4>
                <p className="text-gray-600">Performance optimization, scaling across all operations, and continuous improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & ROI */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & ROI Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-green-900 mb-4">Environmental Impact</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-green-800">Carbon Footprint Reduction:</span>
                <span className="text-2xl font-bold text-green-600">78%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-800">Energy Consumption:</span>
                <span className="text-2xl font-bold text-green-600">-80%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-800">Waste Generation:</span>
                <span className="text-2xl font-bold text-green-600">-75%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-800">Water Usage:</span>
                <span className="text-2xl font-bold text-green-600">-65%</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Financial Impact</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-blue-800">Total ROI:</span>
                <span className="text-2xl font-bold text-blue-600">$10M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-800">Annual Savings:</span>
                <span className="text-2xl font-bold text-blue-600">$2M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-800">Energy Cost Reduction:</span>
                <span className="text-2xl font-bold text-blue-600">$36M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-800">Payback Period:</span>
                <span className="text-2xl font-bold text-blue-600">8 months</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Lessons Learned</h2>
        <div className="space-y-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">Critical Success Factors</h3>
            <ul className="space-y-2 text-yellow-800">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <span>Executive leadership commitment and clear sustainability vision</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <span>Cross-functional team collaboration and stakeholder engagement</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <span>Phased implementation approach with measurable milestones</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <span>Continuous monitoring and optimization of AI systems</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-red-900 mb-3">Challenges Overcome</h3>
            <ul className="space-y-2 text-red-800">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span>Data integration across legacy systems and new AI platforms</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span>Change management and employee training for new processes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span>Regulatory compliance and reporting requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span>Supplier engagement and sustainability certification requirements</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Future Sustainability Roadmap</h2>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Next Phase Initiatives (2026-2027)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Carbon Negative Operations</h4>
                  <p className="text-gray-600 text-sm">Achieve net negative carbon emissions through advanced carbon capture and renewable energy.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Circular Economy AI</h4>
                  <p className="text-gray-600 text-sm">Implement AI-driven circular economy models for zero-waste manufacturing.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Biodiversity AI</h4>
                  <p className="text-gray-600 text-sm">AI-powered biodiversity monitoring and ecosystem restoration programs.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Climate Resilience</h4>
                  <p className="text-gray-600 text-sm">AI-driven climate risk assessment and adaptation strategies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white text-center mt-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Sustainability?</h2>
        <p className="text-xl mb-6 opacity-90">
          Achieve carbon neutrality and significant ROI with our AI sustainability solutions. 
          Get started with a free sustainability assessment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Assessment
          </Link>
          <Link
            href="/services/ai-sustainability"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
          >
            View Sustainability Services
          </Link>
        </div>
      </div>

      {/* Related Content */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Case Studies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/case-studies/ai-quantum-optimization-2026" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                AI Quantum Optimization 2026: 1000x Speed Improvement
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                See how a financial services company achieved 1000x optimization speed and $12M additional returns.
              </p>
              <div className="flex items-center text-blue-600 font-medium text-sm">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>
          <Link href="/blog/ai-sustainability-green-tech-2026" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                AI Sustainability & Green Tech 2026
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                Complete guide to achieving carbon-neutral AI operations with 80% energy reduction.
              </p>
              <div className="flex items-center text-blue-600 font-medium text-sm">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}