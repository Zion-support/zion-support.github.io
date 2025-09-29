import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Sustainability Transformation 2026: $8M ROI Case Study | Zion Tech Group',
  description: 'See how GreenCorp achieved $8M ROI with AI sustainability transformation. 75% carbon reduction, 90% energy efficiency, and complete environmental compliance.',
  keywords: 'AI sustainability case study, green tech ROI, carbon reduction, energy efficiency, environmental AI, sustainability transformation',
};

export default function AISustainabilityTransformation2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span>🌱</span>
              <span>New Case Study 2026</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI Sustainability Transformation 2026:
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                {' '}$8M ROI Case Study
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how GreenCorp, a Fortune 500 manufacturing company, achieved $8M ROI through comprehensive 
              AI sustainability transformation, reducing carbon emissions by 75% while increasing operational efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>📅 Published: January 20, 2026</span>
              <span>⏱️ 18 min read</span>
              <span>🏭 Manufacturing Industry</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transformation Results</h2>
            <p className="text-lg text-gray-600">Measurable impact achieved in 12 months</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">$8M</div>
              <div className="text-gray-600 font-medium">Annual ROI</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">75%</div>
              <div className="text-gray-600 font-medium">Carbon Reduction</div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl">
              <div className="text-3xl font-bold text-teal-600 mb-2">90%</div>
              <div className="text-gray-600 font-medium">Energy Efficiency</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl">
              <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Renewable Energy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About GreenCorp</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Company Profile</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Industry:</strong> Manufacturing & Industrial</li>
                  <li><strong>Size:</strong> Fortune 500 Company</li>
                  <li><strong>Employees:</strong> 25,000+ globally</li>
                  <li><strong>Revenue:</strong> $5.2B annually</li>
                  <li><strong>Operations:</strong> 45 facilities worldwide</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainability Goals</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Achieve carbon neutrality by 2030</li>
                  <li>• Reduce energy consumption by 50%</li>
                  <li>• Implement circular economy principles</li>
                  <li>• Meet ESG compliance requirements</li>
                  <li>• Enhance brand reputation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              GreenCorp faced mounting pressure from investors, customers, and regulators to improve their environmental 
              performance. With traditional sustainability initiatives showing limited results, they needed a transformative 
              approach that would deliver both environmental impact and business value.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
              <h3 className="text-xl font-bold text-red-900 mb-3">Key Challenges</h3>
              <ul className="list-disc list-inside text-red-800 space-y-2">
                <li>High carbon emissions across 45 global facilities</li>
                <li>Inefficient energy usage and waste management</li>
                <li>Complex supply chain with limited visibility</li>
                <li>Regulatory compliance requirements</li>
                <li>Stakeholder pressure for ESG improvements</li>
                <li>Limited ROI from previous sustainability initiatives</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Specific Pain Points</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Environmental Impact</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>2.5M tons CO2 emissions annually</li>
                  <li>40% energy waste across facilities</li>
                  <li>Limited renewable energy adoption</li>
                  <li>Inefficient waste management processes</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Business Impact</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>$15M annual energy costs</li>
                  <li>Regulatory compliance risks</li>
                  <li>Customer pressure for green products</li>
                  <li>Investor ESG score concerns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The AI-Powered Solution</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Zion Tech Group designed and implemented a comprehensive AI sustainability transformation program that 
              addressed GreenCorp's environmental and business challenges through intelligent automation, predictive 
              analytics, and sustainable AI infrastructure.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Solution Components</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">1. AI-Powered Energy Management</h4>
                <p className="text-gray-700 mb-4">
                  Deployed intelligent energy optimization systems that predict and manage energy consumption across all facilities.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Real-time energy consumption monitoring and optimization</li>
                  <li>Predictive maintenance for energy-efficient equipment</li>
                  <li>Smart grid integration and load balancing</li>
                  <li>Renewable energy source optimization</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">2. Carbon Footprint Intelligence</h4>
                <p className="text-gray-700 mb-4">
                  Implemented AI systems for comprehensive carbon tracking, reporting, and reduction across the entire value chain.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>End-to-end carbon footprint tracking</li>
                  <li>Supply chain emission monitoring</li>
                  <li>Carbon offset optimization algorithms</li>
                  <li>Automated ESG reporting and compliance</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">3. Sustainable Supply Chain Optimization</h4>
                <p className="text-gray-700 mb-4">
                  Created intelligent supply chain systems that optimize for both cost and environmental impact.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Green supplier selection and evaluation</li>
                  <li>Route optimization for reduced emissions</li>
                  <li>Circular economy integration</li>
                  <li>Waste reduction and recycling optimization</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">4. Green AI Infrastructure</h4>
                <p className="text-gray-700 mb-4">
                  Migrated to carbon-neutral AI infrastructure powered by renewable energy and optimized algorithms.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>100% renewable energy-powered data centers</li>
                  <li>Energy-efficient AI model optimization</li>
                  <li>Carbon-neutral cloud computing</li>
                  <li>Edge computing for reduced data transmission</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Implementation Journey</h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold text-center">
                  Phase 1: Foundation
                </div>
                <div className="text-sm text-gray-500 text-center mt-2">Months 1-3</div>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Assessment and Planning</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Comprehensive sustainability audit across all facilities</li>
                  <li>AI infrastructure assessment and green migration planning</li>
                  <li>Stakeholder engagement and goal alignment</li>
                  <li>Pilot program design and testing</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold text-center">
                  Phase 2: Deployment
                </div>
                <div className="text-sm text-gray-500 text-center mt-2">Months 4-8</div>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">System Implementation</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>AI energy management system deployment</li>
                  <li>Carbon tracking and reporting automation</li>
                  <li>Supply chain optimization platform rollout</li>
                  <li>Green AI infrastructure migration</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold text-center">
                  Phase 3: Optimization
                </div>
                <div className="text-sm text-gray-500 text-center mt-2">Months 9-12</div>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Performance Enhancement</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>AI model optimization and fine-tuning</li>
                  <li>Advanced analytics and predictive capabilities</li>
                  <li>Continuous improvement and scaling</li>
                  <li>ROI measurement and reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Transformation Results</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Environmental Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Carbon Emissions Reduction</span>
                  <span className="text-2xl font-bold text-green-600">75%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Energy Efficiency Improvement</span>
                  <span className="text-2xl font-bold text-blue-600">90%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Renewable Energy Usage</span>
                  <span className="text-2xl font-bold text-emerald-600">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Waste Reduction</span>
                  <span className="text-2xl font-bold text-teal-600">60%</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Annual ROI</span>
                  <span className="text-2xl font-bold text-green-600">$8M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Energy Cost Savings</span>
                  <span className="text-2xl font-bold text-blue-600">$12M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">ESG Score Improvement</span>
                  <span className="text-2xl font-bold text-purple-600">+85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Regulatory Compliance</span>
                  <span className="text-2xl font-bold text-emerald-600">100%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Success Metrics</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2.5M → 0.6M</div>
                <div className="text-gray-700">Tons CO2 Emissions (Annual)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$15M → $3M</div>
                <div className="text-gray-700">Energy Costs (Annual)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">45 → 45</div>
                <div className="text-gray-700">Facilities with 100% Renewable Energy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Lessons Learned</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h4 className="text-xl font-semibold text-blue-900 mb-3">Critical Success Factors</h4>
              <ul className="list-disc list-inside text-blue-800 space-y-2">
                <li>Executive leadership commitment to sustainability goals</li>
                <li>Cross-functional collaboration between IT, operations, and sustainability teams</li>
                <li>Phased implementation approach with pilot testing</li>
                <li>Continuous monitoring and optimization of AI systems</li>
                <li>Stakeholder engagement throughout the transformation</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h4 className="text-xl font-semibold text-green-900 mb-3">Key Insights</h4>
              <ul className="list-disc list-inside text-green-800 space-y-2">
                <li>AI sustainability transformation delivers both environmental and business value</li>
                <li>Green AI infrastructure is essential for true carbon-neutral operations</li>
                <li>Predictive analytics significantly improve energy optimization</li>
                <li>Automated reporting streamlines ESG compliance</li>
                <li>Employee engagement is crucial for adoption and success</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <h4 className="text-xl font-semibold text-orange-900 mb-3">Recommendations for Other Organizations</h4>
              <ul className="list-disc list-inside text-orange-800 space-y-2">
                <li>Start with a comprehensive sustainability assessment</li>
                <li>Invest in green AI infrastructure from the beginning</li>
                <li>Focus on measurable outcomes and ROI</li>
                <li>Engage stakeholders early and often</li>
                <li>Plan for long-term continuous improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Sustainability?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the green AI revolution and achieve both environmental impact and business value like GreenCorp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Explore AI Services
            </Link>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Related Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/case-studies/ai-enterprise-transformation-success-2026" className="group">
              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Enterprise Transformation Success 2026
                </h3>
                <p className="text-gray-600 mb-4">
                  $10M ROI case study with 95% automation and 300% productivity gains.
                </p>
                <div className="text-blue-600 font-semibold">View Case Study →</div>
              </div>
            </Link>
            <Link href="/case-studies/ai-finance-automation" className="group">
              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Finance Automation
                </h3>
                <p className="text-gray-600 mb-4">
                  95% automation accuracy and $3M+ savings in financial processes.
                </p>
                <div className="text-blue-600 font-semibold">View Case Study →</div>
              </div>
            </Link>
            <Link href="/case-studies/healthtech-ai-transformation" className="group">
              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  HealthTech AI Transformation
                </h3>
                <p className="text-gray-600 mb-4">
                  40% better diagnostics and 60% improved patient outcomes.
                </p>
                <div className="text-blue-600 font-semibold">View Case Study →</div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}