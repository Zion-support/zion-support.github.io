import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';

export default function AISustainabilityTransformation2025() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Sustainability Transformation: 60% Energy Reduction Case Study"
        description="Real-world case study: How a Fortune 500 company achieved 60% energy reduction and carbon neutrality through AI-powered sustainability initiatives."
        keywords="AI sustainability, green AI, energy reduction, carbon neutrality, sustainable technology, AI case study, environmental AI"
        url="/case-studies/ai-sustainability-transformation-2025"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-sm text-green-600 mb-4">
            <span>Case Study</span>
            <span>•</span>
            <span>12 min read</span>
            <span>•</span>
            <span>Jan 20, 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Sustainability Transformation: 60% Energy Reduction & Carbon Neutrality
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How a Fortune 500 manufacturing company achieved carbon neutrality and 60% energy reduction 
            through AI-powered sustainability initiatives, saving $50M annually while improving operational efficiency.
          </p>
        </div>

        {/* Key Results Banner */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Transformation Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">60%</div>
              <div className="text-sm opacity-90">Energy Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">Carbon Neutral</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$50M</div>
              <div className="text-sm opacity-90">Annual Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">18</div>
              <div className="text-sm opacity-90">Months ROI</div>
            </div>
          </div>
        </div>

        {/* Company Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Company Overview</h2>
          
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Challenge</h3>
                <p className="text-gray-700 mb-4">
                  A Fortune 500 manufacturing company with 25 facilities across 12 countries 
                  faced mounting pressure to reduce their environmental footprint while maintaining 
                  operational efficiency and profitability.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• High energy consumption across global operations</li>
                  <li>• Regulatory pressure for carbon reduction</li>
                  <li>• Rising energy costs impacting margins</li>
                  <li>• Stakeholder demand for sustainability</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Company Profile</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Industry</span>
                    <span className="font-semibold">Manufacturing</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Employees</span>
                    <span className="font-semibold">45,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Facilities</span>
                    <span className="font-semibold">25 locations</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Revenue</span>
                    <span className="font-semibold">$8.2B</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Countries</span>
                    <span className="font-semibold">12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Problem</h2>
          
          <div className="space-y-8">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Environmental Impact Crisis</h3>
              <p className="text-gray-700 mb-4">
                The company's operations were consuming massive amounts of energy, with 
                inefficient processes and outdated systems leading to significant environmental impact.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Energy Consumption</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• 2.3M MWh annual energy consumption</li>
                    <li>• 15% above industry average</li>
                    <li>• $180M annual energy costs</li>
                    <li>• 1.2M tons CO2 emissions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Operational Inefficiencies</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Manual energy monitoring</li>
                    <li>• Reactive maintenance approach</li>
                    <li>• Inconsistent processes across facilities</li>
                    <li>• Limited visibility into consumption patterns</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Pressures</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Regulatory</h4>
                  <p className="text-gray-700 text-sm">New carbon tax regulations requiring 30% reduction by 2026</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Financial</h4>
                  <p className="text-gray-700 text-sm">Rising energy costs threatening profit margins</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Stakeholder</h4>
                  <p className="text-gray-700 text-sm">Investors and customers demanding sustainability action</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The AI-Powered Solution</h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Comprehensive AI Sustainability Platform</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Core AI Components</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Smart Energy Management</h5>
                      <p className="text-gray-600 text-sm">AI-powered real-time energy optimization across all facilities</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Predictive Maintenance</h5>
                      <p className="text-gray-600 text-sm">ML models predicting equipment failures before they occur</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Carbon Footprint Tracking</h5>
                      <p className="text-gray-600 text-sm">Real-time monitoring and optimization of carbon emissions</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Implementation Approach</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                      <span className="text-gray-700 text-sm">Data collection and analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                      <span className="text-gray-700 text-sm">AI model development and training</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                      <span className="text-gray-700 text-sm">Pilot implementation at 3 facilities</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                      <span className="text-gray-700 text-sm">Full-scale deployment across all locations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Smart Energy Optimization</h3>
                <p className="text-gray-700 text-sm mb-4">
                  AI algorithms continuously optimize energy consumption based on production schedules, 
                  weather patterns, and equipment efficiency.
                </p>
                <div className="text-green-600 font-semibold text-sm">35% energy reduction</div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-3xl mb-4">🔧</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Predictive Maintenance</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Machine learning models predict equipment failures, enabling proactive maintenance 
                  and reducing energy waste from inefficient equipment.
                </p>
                <div className="text-green-600 font-semibold text-sm">25% maintenance cost reduction</div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-3xl mb-4">🌱</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Carbon Tracking</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Real-time carbon footprint monitoring and optimization across all operations, 
                  enabling data-driven sustainability decisions.
                </p>
                <div className="text-green-600 font-semibold text-sm">100% carbon neutral</div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Implementation Timeline</h2>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">Q1</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase 1: Foundation (Months 1-3)</h3>
                  <p className="text-gray-700 mb-3">
                    Data collection, infrastructure setup, and AI model development for the pilot program.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Installed 15,000 IoT sensors across facilities</li>
                    <li>• Developed AI energy optimization models</li>
                    <li>• Created real-time monitoring dashboard</li>
                    <li>• Trained 200+ staff on new systems</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">Q2</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase 2: Pilot (Months 4-6)</h3>
                  <p className="text-gray-700 mb-3">
                    Implemented AI sustainability platform at 3 pilot facilities to test and refine the solution.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Deployed at 3 largest facilities</li>
                    <li>• Achieved 25% energy reduction in pilots</li>
                    <li>• Refined AI models based on real data</li>
                    <li>• Developed best practices playbook</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">Q3</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase 3: Scale (Months 7-9)</h3>
                  <p className="text-gray-700 mb-3">
                    Rolled out the solution across all 25 facilities with customized configurations for each location.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Deployed across all 25 facilities</li>
                    <li>• Customized models for each location</li>
                    <li>• Integrated with existing systems</li>
                    <li>• Achieved 45% average energy reduction</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">Q4</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase 4: Optimize (Months 10-12)</h3>
                  <p className="text-gray-700 mb-3">
                    Continuous optimization and advanced features deployment to achieve carbon neutrality.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Implemented advanced AI features</li>
                    <li>• Achieved 60% total energy reduction</li>
                    <li>• Reached carbon neutrality</li>
                    <li>• Established continuous improvement process</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Transformation Results</h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Environmental Impact</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Energy Reduction</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">Total Energy Reduction</span>
                        <span className="text-2xl font-bold text-green-600">60%</span>
                      </div>
                      <div className="text-sm text-gray-600">From 2.3M MWh to 920K MWh annually</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">Carbon Emissions</span>
                        <span className="text-2xl font-bold text-green-600">100%</span>
                      </div>
                      <div className="text-sm text-gray-600">Achieved carbon neutrality</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Financial Impact</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">Annual Energy Savings</span>
                        <span className="text-2xl font-bold text-green-600">$50M</span>
                      </div>
                      <div className="text-sm text-gray-600">Reduced from $180M to $130M</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">ROI Timeline</span>
                        <span className="text-2xl font-bold text-blue-600">18 months</span>
                      </div>
                      <div className="text-sm text-gray-600">Total investment: $75M</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">35%</div>
                <div className="text-gray-600 mb-2">Maintenance Cost Reduction</div>
                <div className="text-sm text-gray-500">Through predictive maintenance</div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">25%</div>
                <div className="text-gray-600 mb-2">Operational Efficiency Gain</div>
                <div className="text-sm text-gray-500">Improved process optimization</div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-gray-600 mb-2">Employee Satisfaction</div>
                <div className="text-sm text-gray-500">With new AI-powered tools</div>
              </div>
            </div>
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Lessons Learned</h2>
          
          <div className="space-y-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Success Factors</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Leadership Commitment</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Strong executive sponsorship and clear sustainability goals were essential for success.
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">Data Quality</h4>
                  <p className="text-gray-700 text-sm">
                    High-quality data from IoT sensors was critical for accurate AI model training.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Change Management</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Comprehensive training and change management ensured smooth adoption.
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">Phased Approach</h4>
                  <p className="text-gray-700 text-sm">
                    Starting with pilots allowed for learning and refinement before full deployment.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Challenges Overcome</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Integration Complexity</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Integrating AI systems with existing infrastructure required careful planning and testing.
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">Data Silos</h4>
                  <p className="text-gray-700 text-sm">
                    Breaking down data silos across facilities was crucial for unified optimization.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Staff Training</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Extensive training was needed to help staff adapt to AI-powered workflows.
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">Performance Monitoring</h4>
                  <p className="text-gray-700 text-sm">
                    Continuous monitoring and optimization were essential for sustained results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Roadmap */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Future Roadmap</h2>
          
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Next Phase Initiatives</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Advanced AI Features</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Autonomous energy trading based on market conditions</li>
                  <li>• Advanced predictive analytics for equipment optimization</li>
                  <li>• AI-powered supply chain sustainability optimization</li>
                  <li>• Real-time carbon offset recommendations</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Expansion Plans</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Extend AI sustainability platform to suppliers</li>
                  <li>• Develop industry-specific sustainability benchmarks</li>
                  <li>• Create sustainability-as-a-service offering</li>
                  <li>• Establish AI sustainability research lab</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-gray-900 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">The Bottom Line</h2>
            <p className="text-lg text-gray-300 mb-6">
              This transformation demonstrates that AI can drive both environmental sustainability and 
              business value. By achieving 60% energy reduction and carbon neutrality while saving $50M 
              annually, the company proves that sustainability and profitability can go hand in hand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/resources/green-ai-implementation-guide-2025"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
              >
                Download Green AI Guide
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center"
              >
                Start Your Transformation
              </Link>
            </div>
          </div>
        </section>

        {/* Related Case Studies */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/case-studies/ai-automation-manufacturing-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Automation in Manufacturing: 40% Cost Reduction
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  How AI automation transformed manufacturing operations and reduced costs by 40%.
                </p>
                <div className="text-blue-600 text-sm font-medium group-hover:underline">
                  Read Case Study →
                </div>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  Financial Services AI Transformation: $50M Savings
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Complete digital transformation in financial services with AI-powered solutions.
                </p>
                <div className="text-blue-600 text-sm font-medium group-hover:underline">
                  Read Case Study →
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}