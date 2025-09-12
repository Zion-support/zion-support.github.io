import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';
import ErrorBoundary from '../../../components/ErrorBoundary';

export default function AISustainabilityTransformation2025() {
  return (
    <ErrorBoundary>
      <SEO
        title="AI Sustainability Transformation: 60% Energy Reduction Case Study 2025"
        description="Discover how AI transformed a global corporation's sustainability efforts, achieving 60% energy reduction and carbon neutrality. Complete case study with implementation details and ROI analysis."
        keywords="AI sustainability, green AI, energy reduction, carbon neutrality, AI case study, sustainable technology"
        url="/case-studies/ai-sustainability-transformation-2025"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">🌱 SUSTAINABILITY SUCCESS</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Sustainability Transformation
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                How AI helped a global corporation achieve 60% energy reduction, carbon neutrality, 
                and $150M in sustainability savings while maintaining operational excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/resources/ai-sustainability-implementation-guide"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Download Sustainability Guide
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
                >
                  Start Your Green AI Journey
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Results */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">60%</div>
                <div className="text-gray-600">Energy reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600">Carbon neutral</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">$150M</div>
                <div className="text-gray-600">Annual savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
                <div className="text-gray-600">Waste reduction</div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Sustainability Challenge</h2>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                <h4 className="text-lg font-semibold text-red-800 mb-3">🌍 Critical Environmental Issues</h4>
                <ul className="space-y-2 text-red-700">
                  <li>• <strong>High Energy Consumption:</strong> 2.5M MWh annual energy usage across 50 facilities</li>
                  <li>• <strong>Carbon Footprint:</strong> 1.2M tonnes CO2 emissions per year</li>
                  <li>• <strong>Waste Generation:</strong> 500,000 tonnes of industrial waste annually</li>
                  <li>• <strong>Water Usage:</strong> 50M gallons of water consumed per year</li>
                  <li>• <strong>Regulatory Pressure:</strong> Facing $50M in potential carbon tax penalties</li>
                  <li>• <strong>Stakeholder Demands:</strong> Increasing pressure from investors and customers for sustainability</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">The AI-Powered Solution</h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We implemented a comprehensive AI sustainability platform that optimizes energy consumption, 
                reduces waste, and enables carbon-neutral operations while maintaining productivity and profitability.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Sustainability Systems</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">⚡ Smart Energy Management</h4>
                  <p className="text-gray-600 mb-4">
                    AI-powered energy optimization systems that automatically adjust power consumption 
                    based on demand, weather, and production schedules.
                  </p>
                  <div className="text-sm text-green-600 font-medium">
                    Results: 60% energy reduction, $80M annual savings
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">🌱 Carbon Footprint Optimization</h4>
                  <p className="text-gray-600 mb-4">
                    Advanced algorithms that optimize supply chains, transportation routes, 
                    and production processes to minimize carbon emissions.
                  </p>
                  <div className="text-sm text-blue-600 font-medium">
                    Results: 100% carbon neutrality achieved, 500K tonnes CO2 eliminated
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">♻️ Waste Reduction AI</h4>
                  <p className="text-gray-600 mb-4">
                    Intelligent systems that predict and prevent waste generation, 
                    optimize material usage, and enable circular economy practices.
                  </p>
                  <div className="text-sm text-purple-600 font-medium">
                    Results: 85% waste reduction, 400K tonnes diverted from landfills
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">💧 Water Conservation Systems</h4>
                  <p className="text-gray-600 mb-4">
                    AI-driven water management that optimizes usage, recycles wastewater, 
                    and prevents contamination through predictive monitoring.
                  </p>
                  <div className="text-sm text-teal-600 font-medium">
                    Results: 70% water reduction, 35M gallons saved annually
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation Journey</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Baseline Assessment & Goal Setting (Months 1-2)</h4>
                    <p className="text-gray-600 mb-3">
                      Comprehensive environmental audit across all facilities, establishing baseline metrics 
                      and setting ambitious but achievable sustainability targets.
                    </p>
                    <div className="text-sm text-green-600 font-medium">
                      Outcome: Clear roadmap with 25 sustainability KPIs established
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">AI System Development (Months 3-8)</h4>
                    <p className="text-gray-600 mb-3">
                      Developed specialized AI models for energy optimization, waste prediction, 
                      and carbon footprint tracking using IoT sensors and historical data.
                    </p>
                    <div className="text-sm text-green-600 font-medium">
                      Outcome: 20 AI models deployed with 95% accuracy
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Pilot Implementation (Months 9-12)</h4>
                    <p className="text-gray-600 mb-3">
                      Rolled out AI sustainability systems at 5 pilot facilities, measuring impact 
                      and refining algorithms based on real-world performance data.
                    </p>
                    <div className="text-sm text-green-600 font-medium">
                      Outcome: 40% average improvement across pilot sites
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Global Rollout (Months 13-18)</h4>
                    <p className="text-gray-600 mb-3">
                      Scaled successful AI systems across all 50 facilities worldwide, 
                      achieving consistent sustainability improvements across the organization.
                    </p>
                    <div className="text-sm text-green-600 font-medium">
                      Outcome: 60% overall improvement, carbon neutrality achieved
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Environmental Impact Analysis</h3>
              
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl p-8 mb-8">
                <h4 className="text-2xl font-bold mb-4">🌍 Sustainability Achievements</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-lg font-semibold mb-2">Environmental Metrics</h5>
                    <ul className="space-y-2 text-green-100">
                      <li>• Energy consumption: -60% (1.5M MWh saved)</li>
                      <li>• Carbon emissions: -100% (carbon neutral)</li>
                      <li>• Waste generation: -85% (425K tonnes reduced)</li>
                      <li>• Water usage: -70% (35M gallons saved)</li>
                      <li>• Renewable energy: +200% (now 80% of total)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold mb-2">Business Benefits</h5>
                    <ul className="space-y-2 text-green-100">
                      <li>• Cost savings: $150M annually</li>
                      <li>• Regulatory compliance: 100%</li>
                      <li>• ESG rating improvement: A+</li>
                      <li>• Customer satisfaction: +25%</li>
                      <li>• Employee engagement: +40%</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology Stack</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">🤖 AI & Machine Learning</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Predictive energy optimization models</li>
                    <li>• Computer vision for waste detection</li>
                    <li>• Natural language processing for compliance monitoring</li>
                    <li>• Reinforcement learning for process optimization</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">📊 IoT & Sensors</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Smart energy meters and sensors</li>
                    <li>• Air quality monitoring systems</li>
                    <li>• Water usage tracking devices</li>
                    <li>• Waste composition analyzers</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">☁️ Cloud Infrastructure</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Real-time data processing platforms</li>
                    <li>• Distributed computing for large-scale optimization</li>
                    <li>• Edge computing for immediate response</li>
                    <li>• Blockchain for carbon credit tracking</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">📈 Analytics & Reporting</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Real-time sustainability dashboards</li>
                    <li>• Automated ESG reporting systems</li>
                    <li>• Predictive analytics for trend analysis</li>
                    <li>• Mobile apps for field monitoring</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lessons Learned</h3>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">💡 Key Success Factors</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• <strong>Holistic Approach:</strong> Integrating sustainability into all business processes, not just as an add-on</li>
                  <li>• <strong>Data-Driven Decisions:</strong> Using AI to make evidence-based sustainability improvements</li>
                  <li>• <strong>Stakeholder Engagement:</strong> Involving employees, customers, and partners in the sustainability journey</li>
                  <li>• <strong>Technology Integration:</strong> Seamlessly integrating AI systems with existing infrastructure</li>
                  <li>• <strong>Continuous Improvement:</strong> Regular monitoring and optimization of AI models for better results</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Future Sustainability Goals</h3>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Building on this success, the company has set even more ambitious sustainability targets 
                for 2026, including becoming carbon negative and achieving zero waste to landfill across all operations.
              </p>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-6">
                <h4 className="text-lg font-semibold text-green-800 mb-3">🎯 2026 Sustainability Targets</h4>
                <ul className="space-y-2 text-green-700">
                  <li>• Carbon negative operations (removing more CO2 than producing)</li>
                  <li>• Zero waste to landfill across all facilities</li>
                  <li>• 100% renewable energy usage</li>
                  <li>• Water-positive operations (replenishing more than consuming)</li>
                  <li>• Circular economy implementation across supply chain</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Sustainability?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Get expert guidance on implementing AI-powered sustainability solutions in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Sustainability Consultation
              </Link>
              <Link
                href="/resources/ai-sustainability-implementation-guide"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Download Sustainability Guide
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}