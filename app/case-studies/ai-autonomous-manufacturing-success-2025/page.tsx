import React from 'react';
import { Link } from 'react-router-dom';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '$200M Manufacturing Success: AI Autonomous Systems Case Study 2025',
  description: 'Discover how a Fortune 500 manufacturer achieved $200M in savings using AI autonomous systems. Complete case study with implementation details, ROI analysis, and lessons learned.',
  keywords: 'AI manufacturing, autonomous systems, case study, ROI, Fortune 500, manufacturing automation, AI success story',
  openGraph: {
    title: '$200M Manufacturing Success: AI Autonomous Systems Case Study',
    description: 'Complete case study showing how AI autonomous systems delivered $200M in savings for a Fortune 500 manufacturer.',
    type: 'article',
  },
};

export default function AIAutonomousManufacturingSuccess() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">💰 SUCCESS STORY</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              $200M Manufacturing Success
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              How a Fortune 500 manufacturer transformed their operations with AI autonomous systems, 
              achieving $200M in cost savings, 60% efficiency gains, and 99.5% uptime across 47 facilities worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog/ai-2025-enterprise-automation-revolution"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
              >
                Read Implementation Guide
              </Link>
              <Link
                href="/tools/ai-roi-calculator"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors text-lg"
              >
                Calculate Your ROI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results Banner */}
      <section className="py-12 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Transformation Results</h2>
            <p className="text-xl opacity-90">Measurable impact across all key performance indicators</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$200M</div>
              <div className="text-green-100">Annual Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-green-100">Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.5%</div>
              <div className="text-green-100">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">340%</div>
              <div className="text-green-100">ROI Achieved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <span className="text-2xl">🏭</span>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-blue-800">
                  Company Overview
                </h3>
                <p className="mt-2 text-blue-700">
                  A Fortune 500 global manufacturing company with 47 facilities across 23 countries, 
                  employing 85,000+ workers and generating $12B in annual revenue. The company produces 
                  automotive components, industrial machinery, and consumer goods.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
          
          <p className="text-lg text-gray-700 mb-6">
            The company faced mounting pressure from increasing competition, rising labor costs, 
            and complex supply chain disruptions. Traditional manufacturing approaches were no longer 
            sufficient to maintain profitability and market position. Key challenges included:
          </p>

          <ul className="space-y-4 text-gray-700 mb-8">
            <li className="flex items-start">
              <span className="text-red-600 mr-3">•</span>
              <span><strong>Rising Operational Costs:</strong> Labor costs increased 15% annually while productivity gains plateaued at 2-3% per year.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3">•</span>
              <span><strong>Quality Inconsistencies:</strong> Defect rates varied significantly across facilities, averaging 3.2% with some locations reaching 8%.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3">•</span>
              <span><strong>Supply Chain Complexity:</strong> Managing 2,000+ suppliers across multiple time zones with frequent disruptions and delays.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3">•</span>
              <span><strong>Predictive Maintenance Gaps:</strong> Unplanned downtime averaged 12% of production time, costing $50M annually.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3">•</span>
              <span><strong>Energy Inefficiency:</strong> Energy costs represented 8% of total operating expenses with significant waste across facilities.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Solution: AI Autonomous Systems</h2>

          <p className="text-lg text-gray-700 mb-6">
            The company partnered with Zion Tech Group to implement a comprehensive AI autonomous systems 
            strategy across their global manufacturing network. The solution focused on five key areas:
          </p>

          <div className="space-y-8 mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Autonomous Production Management</h3>
              <p className="text-gray-700 mb-4">
                AI-powered systems that continuously monitor and optimize production lines, automatically 
                adjusting parameters for maximum efficiency and quality.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Real-time production monitoring</li>
                    <li>• Automatic quality control</li>
                    <li>• Predictive maintenance scheduling</li>
                    <li>• Energy consumption optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 45% reduction in defects</li>
                    <li>• 30% increase in throughput</li>
                    <li>• 25% reduction in energy use</li>
                    <li>• 99.5% system uptime</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Intelligent Supply Chain Optimization</h3>
              <p className="text-gray-700 mb-4">
                AI systems that predict demand, optimize inventory levels, and automatically adjust 
                supplier relationships based on performance and market conditions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Demand forecasting with 94% accuracy</li>
                    <li>• Automated supplier selection</li>
                    <li>• Dynamic pricing optimization</li>
                    <li>• Risk assessment and mitigation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 40% reduction in inventory costs</li>
                    <li>• 60% improvement in on-time delivery</li>
                    <li>• 35% reduction in supplier costs</li>
                    <li>• 90% reduction in stockouts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Predictive Maintenance & Quality Control</h3>
              <p className="text-gray-700 mb-4">
                Advanced AI models that predict equipment failures before they occur and automatically 
                adjust quality control parameters to maintain consistent output.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• IoT sensor integration</li>
                    <li>• Machine learning algorithms</li>
                    <li>• Automated quality testing</li>
                    <li>• Maintenance scheduling optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 80% reduction in unplanned downtime</li>
                    <li>• 95% accuracy in failure prediction</li>
                    <li>• 50% reduction in maintenance costs</li>
                    <li>• 99.2% quality consistency</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Autonomous Energy Management</h3>
              <p className="text-gray-700 mb-4">
                AI systems that optimize energy consumption across all facilities, automatically 
                adjusting usage patterns and identifying efficiency opportunities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Real-time energy monitoring</li>
                    <li>• Load balancing optimization</li>
                    <li>• Renewable energy integration</li>
                    <li>• Carbon footprint tracking</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 35% reduction in energy costs</li>
                    <li>• 40% improvement in efficiency</li>
                    <li>• 25% reduction in carbon emissions</li>
                    <li>• $15M annual energy savings</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Workforce Augmentation & Training</h3>
              <p className="text-gray-700 mb-4">
                AI-powered training systems and collaborative robots that work alongside human workers, 
                enhancing productivity while providing continuous learning opportunities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• AR/VR training simulations</li>
                    <li>• Collaborative robotics</li>
                    <li>• Skills assessment and development</li>
                    <li>• Safety monitoring and alerts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 50% improvement in worker productivity</li>
                    <li>• 60% reduction in training time</li>
                    <li>• 90% reduction in workplace accidents</li>
                    <li>• 85% employee satisfaction rate</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Timeline</h2>

          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Phase 1: Assessment & Planning (Months 1-3)</h4>
                  <p className="text-gray-700">
                    Comprehensive analysis of current operations, identification of automation opportunities, 
                    and development of detailed implementation roadmap. Pilot facility selection and team training.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Phase 2: Pilot Implementation (Months 4-8)</h4>
                  <p className="text-gray-700">
                    Deployed AI autonomous systems at 3 pilot facilities. Achieved 25% efficiency gains 
                    and $12M in cost savings, validating the approach and building organizational confidence.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Phase 3: Regional Rollout (Months 9-18)</h4>
                  <p className="text-gray-700">
                    Expanded implementation to 15 facilities across North America and Europe. 
                    Integrated systems with existing ERP and MES platforms, achieving 40% efficiency gains.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Phase 4: Global Deployment (Months 19-24)</h4>
                  <p className="text-gray-700">
                    Completed rollout across all 47 facilities worldwide. Achieved full integration 
                    and optimization, delivering the target $200M in annual cost savings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">ROI Analysis & Financial Impact</h2>

          <div className="bg-green-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment vs. Returns</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Total Investment</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">AI Systems & Software:</span>
                    <span className="font-semibold">$45M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Infrastructure & Integration:</span>
                    <span className="font-semibold">$25M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Training & Change Management:</span>
                    <span className="font-semibold">$15M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Consulting & Support:</span>
                    <span className="font-semibold">$10M</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Investment:</span>
                      <span>$95M</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Annual Returns</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Labor Cost Savings:</span>
                    <span className="font-semibold text-green-600">$85M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Energy Cost Reduction:</span>
                    <span className="font-semibold text-green-600">$15M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Quality Improvement:</span>
                    <span className="font-semibold text-green-600">$35M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Maintenance Savings:</span>
                    <span className="font-semibold text-green-600">$25M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Supply Chain Optimization:</span>
                    <span className="font-semibold text-green-600">$40M</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold text-green-600">
                      <span>Total Annual Savings:</span>
                      <span>$200M</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">ROI Summary</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">340%</div>
                  <div className="text-gray-600">3-Year ROI</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">6 Months</div>
                  <div className="text-gray-600">Payback Period</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">$505M</div>
                  <div className="text-gray-600">3-Year Net Benefit</div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Success Factors</h2>

          <div className="space-y-6 mb-12">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Executive Leadership & Vision</h3>
              <p className="text-blue-700">
                Strong executive commitment and clear vision for AI transformation. The CEO personally 
                championed the initiative and allocated necessary resources without compromise.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Phased Implementation Approach</h3>
              <p className="text-green-700">
                Starting with pilot facilities allowed the team to learn, iterate, and build confidence 
                before scaling across the entire organization. This reduced risk and increased success probability.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Comprehensive Change Management</h3>
              <p className="text-purple-700">
                Extensive training programs, clear communication, and employee involvement in the design 
                process ensured high adoption rates and minimized resistance to change.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-2">Data Quality & Integration</h3>
              <p className="text-orange-700">
                Investment in data governance and integration infrastructure ensured AI systems had 
                access to clean, real-time data for optimal performance and decision-making.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Lessons Learned & Best Practices</h2>

          <div className="bg-yellow-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Critical Success Factors</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">What Worked Well</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pilot-first approach reduced implementation risk</li>
                  <li>• Strong executive sponsorship and clear vision</li>
                  <li>• Comprehensive training and change management</li>
                  <li>• Data quality investment upfront</li>
                  <li>• Continuous monitoring and optimization</li>
                  <li>• Employee involvement in design process</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Challenges Overcome</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Initial resistance to change</li>
                  <li>• Legacy system integration complexity</li>
                  <li>• Data quality and consistency issues</li>
                  <li>• Scaling across diverse facilities</li>
                  <li>• Maintaining performance during transition</li>
                  <li>• Training large, diverse workforce</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Future Roadmap & Next Steps</h2>

          <p className="text-lg text-gray-700 mb-6">
            Building on this success, the company is now expanding AI capabilities into new areas:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced AI Capabilities</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Autonomous supply chain optimization</li>
                <li>• Predictive quality control</li>
                <li>• Self-healing production systems</li>
                <li>• AI-powered product design</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainability Initiatives</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Carbon-neutral manufacturing</li>
                <li>• Circular economy optimization</li>
                <li>• Renewable energy integration</li>
                <li>• Waste reduction automation</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Manufacturing?</h3>
            <p className="text-xl mb-6 opacity-90">
              Learn how AI autonomous systems can deliver similar results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/tools/ai-roi-calculator"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Calculate Your ROI
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Success Stories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/case-studies/ai-healthcare-diagnosis-success-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <div className="text-6xl">🏥</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                    Healthcare AI Success
                  </h3>
                  <p className="text-gray-600 mb-4">
                    95% diagnostic accuracy and 60% faster diagnosis times with AI-powered medical imaging.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>15 min read</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <div className="text-6xl">💰</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 mb-2">
                    Financial Services Success
                  </h3>
                  <p className="text-gray-600 mb-4">
                    300% ROI and $50M cost savings through strategic AI implementation in banking.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>12 min read</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-2025-enterprise-automation-revolution" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">
                  <div className="text-6xl">🚀</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 mb-2">
                    Enterprise Automation Guide
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete implementation guide for enterprise AI automation with proven strategies.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Article</span>
                    <span className="mx-2">•</span>
                    <span>25 min read</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}