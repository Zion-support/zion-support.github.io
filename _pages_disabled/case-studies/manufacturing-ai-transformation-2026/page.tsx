// import React from 'react';
import { Link } from 'react-router-dom';

export const metadata = {
  title: 'Manufacturing AI Transformation 2026: $18M ROI Case Study',
  description: 'How a Fortune 500 manufacturer achieved $18M ROI with AI-powered predictive maintenance, quality control, and supply chain optimization.',
  keywords: 'manufacturing AI, predictive maintenance, AI quality control, Industry 4.0, smart manufacturing, AI case study',
};

export default function ManufacturingAITransformation2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-6">
              <span>✅</span>
              SUCCESS STORY 2026
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Manufacturing AI Transformation 2026: $18M ROI Case Study
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              How a Fortune 500 manufacturer achieved $18M annual ROI with AI-powered predictive maintenance, 
              automated quality control, and intelligent supply chain optimization—reducing downtime by 85% 
              and defects by 92%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+13024640950"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Get Your Manufacturing AI Assessment
              </a>
              <Link
                href="/services/ai-predictive-maintenance"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                View AI Solutions
              </Link>
            </div>
          </div>
          
          {/* Key Results */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600">$18M</div>
              <div className="text-gray-600">Annual ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">85%</div>
              <div className="text-gray-600">Downtime Reduced</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">92%</div>
              <div className="text-gray-600">Fewer Defects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">70%</div>
              <div className="text-gray-600">Inventory Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Overview</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Company Profile</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• <strong>Industry:</strong> Automotive Manufacturing</li>
                <li>• <strong>Size:</strong> Fortune 500, 15,000+ employees</li>
                <li>• <strong>Facilities:</strong> 12 plants across 5 countries</li>
                <li>• <strong>Revenue:</strong> $3.2B annually</li>
                <li>• <strong>Production:</strong> 500,000+ units per year</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-red-100 to-orange-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Challenges</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Unplanned equipment downtime costing $12M/year</li>
                <li>• Quality defects at 8% causing costly recalls</li>
                <li>• Manual inspections missing 40% of defects</li>
                <li>• Excess inventory tying up $50M in capital</li>
                <li>• Supply chain disruptions causing delays</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">The Challenge</h3>
            <p className="text-gray-700">
              The manufacturer was struggling with aging equipment, quality issues, and supply chain inefficiencies. 
              Traditional preventive maintenance was reactive and costly, while manual quality inspections were slow 
              and inconsistent. They needed a comprehensive AI solution to modernize operations and remain competitive 
              in the rapidly evolving automotive industry.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Implemented */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">AI Solution Implemented</h2>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">🔧 AI-Powered Predictive Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Deployed IoT sensors and machine learning models to predict equipment failures before they occur.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• 15,000+ IoT sensors across all equipment</li>
                    <li>• Real-time vibration and temperature monitoring</li>
                    <li>• ML models trained on 10 years of failure data</li>
                    <li>• Predictive analytics dashboard for maintenance teams</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Results:</h4>
                  <ul className="space-y-1 text-green-700 text-sm">
                    <li>• 85% reduction in unplanned downtime</li>
                    <li>• 92% accuracy in failure prediction</li>
                    <li>• $8M annual maintenance savings</li>
                    <li>• 40% longer equipment lifespan</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">👁️ Computer Vision Quality Control</h3>
              <p className="text-gray-600 mb-4">
                Implemented AI-powered visual inspection systems to detect defects with superhuman accuracy.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• High-resolution cameras at 50+ inspection points</li>
                    <li>• Deep learning models for defect detection</li>
                    <li>• Real-time image processing and classification</li>
                    <li>• Automated sorting and rejection systems</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Results:</h4>
                  <ul className="space-y-1 text-green-700 text-sm">
                    <li>• 92% reduction in quality defects</li>
                    <li>• 99.8% inspection accuracy</li>
                    <li>• 10x faster inspection speeds</li>
                    <li>• $6M in recall cost savings</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">📦 Intelligent Supply Chain Optimization</h3>
              <p className="text-gray-600 mb-4">
                Deployed AI algorithms for demand forecasting, inventory optimization, and logistics planning.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• ML-based demand forecasting models</li>
                    <li>• Inventory optimization algorithms</li>
                    <li>• Route optimization for logistics</li>
                    <li>• Supplier performance prediction</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Results:</h4>
                  <ul className="space-y-1 text-green-700 text-sm">
                    <li>• 70% reduction in excess inventory</li>
                    <li>• 95% forecast accuracy</li>
                    <li>• $4M in inventory cost savings</li>
                    <li>• 50% fewer stockouts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Implementation Timeline</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">1</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 1: Assessment & Planning (Weeks 1-4)</h3>
                <p className="text-gray-600 mb-3">
                  Comprehensive assessment of existing systems, identification of AI opportunities, and detailed implementation roadmap development.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Deliverables:</strong> AI readiness assessment, ROI projections, implementation plan
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">2</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 2: Pilot Deployment (Weeks 5-16)</h3>
                <p className="text-gray-600 mb-3">
                  Deployed AI solutions in one pilot facility to validate effectiveness and refine models before full rollout.
                </p>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm text-purple-800">
                    <strong>Results:</strong> 80% downtime reduction in pilot, 90% defect reduction, validated ROI
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">3</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 3: Full Rollout (Weeks 17-32)</h3>
                <p className="text-gray-600 mb-3">
                  Scaled AI solutions across all 12 manufacturing facilities with localized customization and training programs.
                </p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Achievement:</strong> All facilities operational with AI systems, full ROI realized
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">4</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 4: Optimization & Expansion (Ongoing)</h3>
                <p className="text-gray-600 mb-3">
                  Continuous model refinement, additional use case implementation, and expansion to suppliers and partners.
                </p>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-sm text-orange-800">
                    <strong>Future:</strong> Expanding to autonomous robots, digital twins, and supplier integration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Impact */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Financial Impact & ROI</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">Total Annual ROI: $18M</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">💰 Cost Savings</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Maintenance Costs:</span>
                    <span className="font-bold text-green-600">$8M</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Quality/Recall Costs:</span>
                    <span className="font-bold text-green-600">$6M</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Inventory Carrying Costs:</span>
                    <span className="font-bold text-green-600">$4M</span>
                  </li>
                  <li className="flex justify-between items-center border-t pt-3">
                    <span className="text-gray-900 font-bold">Total Savings:</span>
                    <span className="font-bold text-green-600 text-xl">$18M</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">📊 Additional Benefits</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Productivity:</strong> 35% increase in output</li>
                  <li>• <strong>Quality:</strong> 92% reduction in defects</li>
                  <li>• <strong>Customer Satisfaction:</strong> 88% to 97%</li>
                  <li>• <strong>Employee Safety:</strong> 60% fewer incidents</li>
                  <li>• <strong>Sustainability:</strong> 40% energy reduction</li>
                  <li>• <strong>Time to Market:</strong> 50% faster</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Investment & Payback</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="text-3xl font-bold mb-2">$4.5M</div>
                <div className="text-sm opacity-90">Total Investment</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">3 Months</div>
                <div className="text-sm opacity-90">Payback Period</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">400%</div>
                <div className="text-sm opacity-90">Annual ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Client Testimonial</h3>
            </div>
            <blockquote className="text-lg text-gray-700 italic mb-6 text-center">
              "The AI transformation has been nothing short of revolutionary for our manufacturing operations. 
              We've seen dramatic improvements in uptime, quality, and efficiency that we never thought possible. 
              The $18M annual ROI exceeded our expectations, and we're now expanding AI to even more areas of our business. 
              Zion Tech Group's expertise and partnership were instrumental in our success."
            </blockquote>
            <div className="text-center">
              <p className="font-bold text-gray-900">Michael Chen</p>
              <p className="text-gray-600">VP of Manufacturing Operations</p>
              <p className="text-gray-500 text-sm">Fortune 500 Automotive Manufacturer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Takeaways</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-lg">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive &gt; Reactive</h3>
              <p className="text-gray-700 text-sm">
                AI-powered predictive maintenance eliminated 85% of unplanned downtime by identifying issues before failures occurred.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-lg">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Quality</h3>
              <p className="text-gray-700 text-sm">
                Computer vision delivered 99.8% inspection accuracy—far exceeding human capabilities while being 10x faster.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-lg">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data-Driven Decisions</h3>
              <p className="text-gray-700 text-sm">
                AI-powered analytics enabled real-time, data-driven decision making across all manufacturing operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Manufacturing Operations?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Discover how AI can deliver similar results for your manufacturing operations. 
            Get a free assessment and personalized roadmap to $10M+ in annual savings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Request Free Assessment
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Link href="/services/ai-predictive-maintenance" className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors">
              <div className="text-2xl mb-2">🔧</div>
              <div className="font-semibold">Predictive Maintenance</div>
            </Link>
            <Link href="/services/computer-vision-solutions" className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors">
              <div className="text-2xl mb-2">👁️</div>
              <div className="font-semibold">Quality Control AI</div>
            </Link>
            <Link href="/case-studies" className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors">
              <div className="text-2xl mb-2">📊</div>
              <div className="font-semibold">More Case Studies</div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}