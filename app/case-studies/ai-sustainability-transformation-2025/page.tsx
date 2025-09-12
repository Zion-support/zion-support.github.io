import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';

export default function AISustainabilityTransformation2025() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Sustainability Transformation Case Study 2025 - GreenTech Solutions"
        description="Discover how GreenTech Solutions achieved net-zero emissions and 40% cost reduction using AI-powered sustainability solutions. Real results, proven strategies."
        keywords="AI sustainability case study, green technology, carbon reduction, renewable energy, environmental AI, sustainability transformation"
        url="/case-studies/ai-sustainability-transformation-2025"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">🌱 SUCCESS STORY - JANUARY 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Sustainability Transformation: GreenTech Solutions Achieves Net-Zero
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            <span>📅 January 2025</span>
            <span>⏱️ 8 min read</span>
            <span>👁️ 1.8k views</span>
            <span>🏆 Award Winner</span>
          </div>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            How GreenTech Solutions leveraged AI to achieve net-zero emissions, reduce operational costs by 40%, 
            and become a sustainability leader in their industry. A comprehensive case study of real-world 
            AI implementation for environmental impact.
          </p>
        </header>

        {/* Executive Summary */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Executive Summary</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            GreenTech Solutions, a mid-sized manufacturing company, successfully implemented AI-powered 
            sustainability solutions across their operations, achieving remarkable results in just 18 months. 
            This case study details their journey, challenges, solutions, and measurable outcomes.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">Net-Zero</div>
              <div className="text-gray-600">Carbon Emissions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$2.3M</div>
              <div className="text-gray-600">Annual Savings</div>
            </div>
          </div>
        </div>

        {/* Company Background */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Background</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">GreenTech Solutions</h3>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Industry:</strong> Sustainable Manufacturing</li>
              <li><strong>Size:</strong> 500+ employees</li>
              <li><strong>Revenue:</strong> $50M annually</li>
              <li><strong>Location:</strong> Multiple facilities across North America</li>
              <li><strong>Challenge:</strong> High energy costs and carbon footprint</li>
            </ul>
          </div>
        </section>

        {/* The Challenge */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Environmental Impact</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• High carbon emissions from manufacturing processes</li>
                <li>• Inefficient energy usage across facilities</li>
                <li>• Waste generation and disposal costs</li>
                <li>• Regulatory compliance challenges</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Pressures</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Rising energy costs impacting profitability</li>
                <li>• Customer demand for sustainable products</li>
                <li>• Investor pressure for ESG compliance</li>
                <li>• Competitive disadvantage in green markets</li>
              </ul>
            </div>
          </div>
        </section>

        {/* AI Solution */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">AI-Powered Solution</h2>
          
          <div className="space-y-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">🤖 Energy Optimization System</h3>
              <p className="text-gray-700 mb-4">
                Implemented AI-powered energy management system that optimizes power consumption across all facilities.
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Real-time energy consumption monitoring</li>
                <li>Predictive maintenance for equipment</li>
                <li>Smart grid integration and load balancing</li>
                <li>Renewable energy source optimization</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">🌱 Carbon Footprint Tracking</h3>
              <p className="text-gray-700 mb-4">
                Deployed comprehensive carbon monitoring and reduction system using AI analytics.
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Automated carbon emission calculations</li>
                <li>Supply chain sustainability tracking</li>
                <li>Carbon offset recommendation engine</li>
                <li>ESG reporting automation</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">♻️ Waste Reduction AI</h3>
              <p className="text-gray-700 mb-4">
                Implemented AI system for waste minimization and circular economy optimization.
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Waste stream analysis and optimization</li>
                <li>Material reuse recommendation system</li>
                <li>Recycling efficiency improvements</li>
                <li>Circular supply chain management</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Timeline</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">Months 1-3: Assessment & Planning</h3>
                <p className="text-gray-600">Comprehensive audit of current systems and development of AI implementation roadmap.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">Months 4-9: Pilot Implementation</h3>
                <p className="text-gray-600">Deployed AI systems in one facility to test and refine solutions before full rollout.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">Months 10-15: Full Deployment</h3>
                <p className="text-gray-600">Rolled out AI solutions across all facilities with comprehensive training and support.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">Months 16-18: Optimization</h3>
                <p className="text-gray-600">Fine-tuned systems and achieved net-zero emissions with continuous improvement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Measurable Results</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">🌍 Environmental Impact</h3>
              <ul className="space-y-2">
                <li>✅ Achieved net-zero carbon emissions</li>
                <li>✅ 60% reduction in energy consumption</li>
                <li>✅ 75% decrease in waste generation</li>
                <li>✅ 100% renewable energy usage</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">💰 Business Impact</h3>
              <ul className="space-y-2">
                <li>✅ 40% reduction in operational costs</li>
                <li>✅ $2.3M annual savings achieved</li>
                <li>✅ 25% increase in customer satisfaction</li>
                <li>✅ 15% growth in sustainable product sales</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Learnings & Best Practices</h2>
          
          <div className="space-y-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">💡 Critical Success Factors</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Executive leadership commitment to sustainability goals</li>
                <li>• Cross-functional team collaboration and buy-in</li>
                <li>• Phased implementation approach with pilot testing</li>
                <li>• Continuous monitoring and optimization</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">⚠️ Challenges Overcome</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Data quality and integration issues</li>
                <li>• Change management and user adoption</li>
                <li>• Regulatory compliance complexity</li>
                <li>• Technology integration with legacy systems</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ROI Analysis */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">ROI Analysis</h2>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Investment Breakdown</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• AI Technology: $800K</li>
                  <li>• Implementation: $400K</li>
                  <li>• Training: $150K</li>
                  <li>• Total Investment: $1.35M</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Annual Returns</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Energy Cost Savings: $1.2M</li>
                  <li>• Waste Reduction: $400K</li>
                  <li>• Efficiency Gains: $700K</li>
                  <li>• Total Annual Savings: $2.3M</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">170% ROI</div>
              <div className="text-gray-600">Achieved in first year</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Sustainability Journey?</h3>
          <p className="text-lg mb-6 opacity-90">
            Learn how AI can help your organization achieve its sustainability goals while improving 
            operational efficiency and reducing costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Expert Consultation
            </Link>
            <Link
              href="/resources/ai-sustainability-implementation-guide-2025"
              className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
            >
              Download Implementation Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}