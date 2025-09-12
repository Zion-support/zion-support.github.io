import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';

export default function AISustainabilityTransformation2025() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Sustainability Transformation 2025: 60% Energy Reduction Case Study"
        description="Discover how a Fortune 500 manufacturing company achieved 60% energy reduction and carbon neutrality through AI-powered sustainability transformation. Complete case study with implementation details."
        keywords="AI sustainability, green AI, energy reduction, carbon neutrality, sustainable AI, environmental impact, green technology"
        url="/case-studies/ai-sustainability-transformation-2025"
      />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
              Case Study
            </span>
            <span className="text-gray-500 text-sm">15 min read</span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">Jan 28, 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI Sustainability Transformation: 60% Energy Reduction & Carbon Neutrality
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            How a Fortune 500 manufacturing company achieved unprecedented sustainability goals through 
            AI-powered optimization, reducing energy consumption by 60% and achieving carbon neutrality 
            while maintaining operational efficiency and profitability.
          </p>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold text-lg">ZT</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Zion Tech Group</div>
              <div className="text-sm text-gray-600">Sustainability & AI Solutions</div>
            </div>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
            <p className="text-lg opacity-90 mb-6">
              This case study demonstrates how strategic AI implementation can drive both environmental 
              sustainability and business value. Through a comprehensive AI-powered transformation, 
              our client achieved remarkable results while setting new industry standards for 
              sustainable manufacturing.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">60%</div>
                <div className="text-sm opacity-90">Energy Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Carbon Neutral</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">$12M</div>
                <div className="text-sm opacity-90">Annual Savings</div>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <nav className="bg-gray-50 rounded-xl p-6 mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Case Study Overview</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#challenge" className="text-blue-600 hover:text-blue-700">1. The Sustainability Challenge</a></li>
            <li><a href="#solution" className="text-blue-600 hover:text-blue-700">2. AI-Powered Solution</a></li>
            <li><a href="#implementation" className="text-blue-600 hover:text-blue-700">3. Implementation Process</a></li>
            <li><a href="#results" className="text-blue-600 hover:text-blue-700">4. Measurable Results</a></li>
            <li><a href="#technologies" className="text-blue-600 hover:text-blue-700">5. Key Technologies Used</a></li>
            <li><a href="#lessons" className="text-blue-600 hover:text-blue-700">6. Lessons Learned</a></li>
            <li><a href="#roi" className="text-blue-600 hover:text-blue-700">7. ROI & Business Impact</a></li>
            <li><a href="#replication" className="text-blue-600 hover:text-blue-700">8. Replication Guide</a></li>
          </ul>
        </nav>

        {/* The Challenge */}
        <section id="challenge" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Sustainability Challenge</h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <h3 className="text-lg font-semibold text-red-900 mb-3">Client Background</h3>
            <ul className="space-y-2 text-red-800">
              <li>• Fortune 500 manufacturing company</li>
              <li>• 15 production facilities worldwide</li>
              <li>• 25,000+ employees</li>
              <li>• $2.5B annual revenue</li>
              <li>• High energy consumption and carbon footprint</li>
            </ul>
          </div>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The client faced mounting pressure from stakeholders, regulatory requirements, and market 
            expectations to reduce their environmental impact. With energy costs rising and carbon 
            pricing becoming a reality, they needed a comprehensive solution that would:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Environmental Goals</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Reduce energy consumption by 50%</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Achieve carbon neutrality by 2025</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Minimize waste and water usage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Improve supply chain sustainability</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Constraints</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Maintain production efficiency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Preserve product quality standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Minimize operational disruption</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Ensure positive ROI within 3 years</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Initial Assessment Results</h3>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-red-600">2.3M</div>
                <div className="text-sm text-gray-600">MWh Annual Energy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">1.2M</div>
                <div className="text-sm text-gray-600">Tons CO2 Emissions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">$45M</div>
                <div className="text-sm text-gray-600">Annual Energy Costs</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">15%</div>
                <div className="text-sm text-gray-600">Energy Efficiency</div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-Powered Solution */}
        <section id="solution" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">AI-Powered Solution</h2>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We developed a comprehensive AI-powered sustainability platform that integrates multiple 
            technologies to optimize energy consumption, reduce waste, and minimize environmental impact 
            across all operations.
          </p>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Smart Energy Management System</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">AI-Powered Optimization</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Real-time energy consumption monitoring</li>
                    <li>• Predictive analytics for demand forecasting</li>
                    <li>• Automated load balancing and scheduling</li>
                    <li>• Renewable energy integration optimization</li>
                    <li>• Peak demand management and cost reduction</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Machine learning algorithms for pattern recognition</li>
                    <li>• IoT sensors for real-time data collection</li>
                    <li>• Cloud-based analytics and reporting</li>
                    <li>• Mobile app for facility managers</li>
                    <li>• Integration with existing ERP systems</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Waste Reduction & Circular Economy</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">AI-Driven Waste Management</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Computer vision for waste classification</li>
                    <li>• Predictive maintenance to reduce waste</li>
                    <li>• Material optimization algorithms</li>
                    <li>• Supply chain waste tracking</li>
                    <li>• Circular economy implementation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Sustainability Metrics</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Real-time waste tracking and reporting</li>
                    <li>• Carbon footprint calculation</li>
                    <li>• Water usage optimization</li>
                    <li>• Recycling rate improvement</li>
                    <li>• Sustainability scorecard</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Supply Chain Sustainability</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Green Supply Chain AI</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Supplier sustainability scoring</li>
                    <li>• Carbon footprint tracking across supply chain</li>
                    <li>• Route optimization for transportation</li>
                    <li>• Sustainable sourcing recommendations</li>
                    <li>• ESG compliance monitoring</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Impact Measurement</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Scope 1, 2, and 3 emissions tracking</li>
                    <li>• Lifecycle assessment automation</li>
                    <li>• Sustainability reporting automation</li>
                    <li>• Benchmarking against industry standards</li>
                    <li>• Continuous improvement recommendations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section id="implementation" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Process</h2>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            The implementation followed a phased approach over 18 months, ensuring minimal disruption 
            to operations while maximizing sustainability impact.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase 1: Assessment & Planning (Months 1-3)</h3>
                <p className="text-gray-700 mb-3">Comprehensive sustainability audit, baseline measurement, and solution design.</p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Energy consumption baseline analysis</li>
                  <li>• Carbon footprint assessment</li>
                  <li>• Technology infrastructure evaluation</li>
                  <li>• Stakeholder engagement and training</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase 2: Pilot Implementation (Months 4-6)</h3>
                <p className="text-gray-700 mb-3">Deployed AI solutions at 3 pilot facilities to test and refine approaches.</p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Smart energy management system deployment</li>
                  <li>• IoT sensor installation and calibration</li>
                  <li>• AI model training and optimization</li>
                  <li>• Performance monitoring and adjustment</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase 3: Full Rollout (Months 7-12)</h3>
                <p className="text-gray-700 mb-3">Scaled successful solutions across all 15 facilities worldwide.</p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Enterprise-wide system deployment</li>
                  <li>• Staff training and change management</li>
                  <li>• Integration with existing systems</li>
                  <li>• Continuous monitoring and optimization</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase 4: Optimization & Expansion (Months 13-18)</h3>
                <p className="text-gray-700 mb-3">Fine-tuned systems and expanded capabilities for maximum impact.</p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Advanced AI model refinement</li>
                  <li>• Additional sustainability initiatives</li>
                  <li>• Carbon offset program implementation</li>
                  <li>• Sustainability reporting automation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Measurable Results */}
        <section id="results" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Measurable Results</h2>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            The AI-powered sustainability transformation delivered exceptional results, exceeding 
            initial targets and setting new industry benchmarks for sustainable manufacturing.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Environmental Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Energy Consumption Reduction</span>
                  <span className="text-2xl font-bold text-green-600">60%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Carbon Emissions Reduction</span>
                  <span className="text-2xl font-bold text-green-600">75%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Waste Reduction</span>
                  <span className="text-2xl font-bold text-green-600">45%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Water Usage Reduction</span>
                  <span className="text-2xl font-bold text-green-600">30%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Renewable Energy Usage</span>
                  <span className="text-2xl font-bold text-green-600">85%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Annual Cost Savings</span>
                  <span className="text-2xl font-bold text-blue-600">$12M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">ROI Achievement</span>
                  <span className="text-2xl font-bold text-blue-600">340%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Payback Period</span>
                  <span className="text-2xl font-bold text-blue-600">18 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Production Efficiency</span>
                  <span className="text-2xl font-bold text-blue-600">+25%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Employee Satisfaction</span>
                  <span className="text-2xl font-bold text-blue-600">+40%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Carbon Neutral</div>
                <div className="text-xs text-gray-500 mt-1">Achieved 6 months ahead of schedule</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">1.2M</div>
                <div className="text-sm text-gray-600">Tons CO2 Eliminated</div>
                <div className="text-xs text-gray-500 mt-1">Equivalent to 260,000 cars off the road</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$45M</div>
                <div className="text-sm text-gray-600">Energy Cost Savings</div>
                <div className="text-xs text-gray-500 mt-1">Over 5-year period</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Technologies */}
        <section id="technologies" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Technologies Used</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">AI & Machine Learning</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Deep learning for energy optimization</li>
                  <li>• Computer vision for waste classification</li>
                  <li>• Natural language processing for sustainability reporting</li>
                  <li>• Reinforcement learning for process optimization</li>
                  <li>• Time series forecasting for demand prediction</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">IoT & Sensors</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Smart meters for energy monitoring</li>
                  <li>• Environmental sensors for air quality</li>
                  <li>• Water flow sensors for usage tracking</li>
                  <li>• Temperature and humidity sensors</li>
                  <li>• Vibration sensors for equipment monitoring</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cloud & Analytics</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Cloud-based data processing</li>
                  <li>• Real-time analytics dashboards</li>
                  <li>• Predictive maintenance algorithms</li>
                  <li>• Sustainability reporting automation</li>
                  <li>• Mobile applications for monitoring</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Integration & Security</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• ERP system integration</li>
                  <li>• API-based data connectivity</li>
                  <li>• Cybersecurity measures</li>
                  <li>• Data privacy compliance</li>
                  <li>• Scalable architecture design</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Lessons Learned */}
        <section id="lessons" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Lessons Learned</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Success Factors</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• Strong leadership commitment and clear sustainability vision</li>
                <li>• Comprehensive change management and employee engagement</li>
                <li>• Phased implementation approach with pilot testing</li>
                <li>• Integration with existing systems and processes</li>
                <li>• Continuous monitoring and optimization</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
              <h3 className="text-lg font-semibold text-orange-900 mb-3">Challenges Overcome</h3>
              <ul className="space-y-2 text-orange-800">
                <li>• Initial resistance to change and new technologies</li>
                <li>• Data quality and integration complexities</li>
                <li>• Balancing sustainability goals with operational efficiency</li>
                <li>• Managing multiple stakeholders and requirements</li>
                <li>• Ensuring ROI while achieving environmental targets</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Best Practices</h3>
              <ul className="space-y-2 text-green-800">
                <li>• Start with comprehensive baseline assessment</li>
                <li>• Focus on quick wins to build momentum</li>
                <li>• Invest in employee training and development</li>
                <li>• Establish clear metrics and KPIs</li>
                <li>• Maintain flexibility for continuous improvement</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ROI & Business Impact */}
        <section id="roi" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">ROI & Business Impact</h2>
          
          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-8 text-white mb-8">
            <h3 className="text-2xl font-bold mb-4">Financial Impact Summary</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">$12M</div>
                <div className="text-sm opacity-90">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">340%</div>
                <div className="text-sm opacity-90">ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">18</div>
                <div className="text-sm opacity-90">Months Payback</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">$60M</div>
                <div className="text-sm opacity-90">5-Year Value</div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Cost Savings Breakdown</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between">
                  <span>Energy cost reduction</span>
                  <span className="font-semibold">$8.2M</span>
                </li>
                <li className="flex justify-between">
                  <span>Waste management savings</span>
                  <span className="font-semibold">$1.8M</span>
                </li>
                <li className="flex justify-between">
                  <span>Water usage reduction</span>
                  <span className="font-semibold">$0.9M</span>
                </li>
                <li className="flex justify-between">
                  <span>Maintenance optimization</span>
                  <span className="font-semibold">$1.1M</span>
                </li>
                <li className="flex justify-between border-t pt-3">
                  <span className="font-semibold">Total Annual Savings</span>
                  <span className="font-bold text-green-600">$12M</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Benefits</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Enhanced brand reputation and market position</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Improved employee satisfaction and retention</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Regulatory compliance and risk reduction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Access to green financing and incentives</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Competitive advantage in sustainability</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Replication Guide */}
        <section id="replication" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Replication Guide</h2>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            This case study provides a replicable framework for organizations looking to implement 
            AI-powered sustainability transformations. Here's how to adapt this approach to your organization:
          </p>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Step 1: Assessment & Planning</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Conduct comprehensive sustainability baseline assessment</li>
                <li>• Identify key stakeholders and change champions</li>
                <li>• Define clear sustainability goals and metrics</li>
                <li>• Develop implementation roadmap and timeline</li>
                <li>• Secure leadership commitment and budget approval</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Step 2: Technology Selection</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Choose appropriate AI and IoT technologies</li>
                <li>• Ensure compatibility with existing systems</li>
                <li>• Plan for data integration and management</li>
                <li>• Consider scalability and future growth</li>
                <li>• Evaluate vendor capabilities and support</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Step 3: Implementation</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Start with pilot programs at select locations</li>
                <li>• Train staff and build internal capabilities</li>
                <li>• Monitor progress and adjust as needed</li>
                <li>• Scale successful solutions across organization</li>
                <li>• Establish continuous improvement processes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Sustainability?</h2>
            <p className="text-lg opacity-90 mb-6">
              This case study demonstrates that AI-powered sustainability transformation is not only 
              possible but highly profitable. Organizations can achieve both environmental goals and 
              significant business value through strategic AI implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/resources/green-ai-implementation-guide-2025"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
              >
                Download Implementation Guide
              </Link>
            </div>
          </div>
        </section>

        {/* Related Case Studies */}
        <section className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/case-studies/ai-automation-manufacturing-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Manufacturing Automation Success
                </h3>
                <p className="text-gray-600 text-sm">
                  40% cost reduction and 60% faster processing through intelligent automation.
                </p>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  Financial Services AI Transformation
                </h3>
                <p className="text-gray-600 text-sm">
                  $50M cost savings and 300% efficiency gains through AI-powered automation.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}