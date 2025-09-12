import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';

export default function AISustainabilityTransformation2025() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Sustainability Transformation: 60% Energy Reduction Case Study"
        description="Discover how a Fortune 500 manufacturing company achieved 60% energy reduction and carbon neutrality through AI-powered sustainability transformation. Complete case study with results and implementation details."
        keywords="AI sustainability, green AI, energy reduction, carbon neutrality, sustainable manufacturing, AI case study, environmental impact"
        url="/case-studies/ai-sustainability-transformation-2025"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Case Studies
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-600">January 2025</span>
          </div>
          
          <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
            🌱 Sustainability Success
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Sustainability Transformation
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            How a Fortune 500 manufacturing company achieved 60% energy reduction and carbon neutrality 
            through AI-powered sustainability transformation.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>Case Study</span>
            <span>•</span>
            <span>Zion Tech Group</span>
            <span>•</span>
            <span>Jan 28, 2025</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl mb-12 flex items-center justify-center">
          <div className="text-8xl">🌱</div>
        </div>

        {/* Key Results */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
            <div className="text-green-800 font-medium">Energy Reduction</div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-blue-800 font-medium">Carbon Neutral</div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">$2.3M</div>
            <div className="text-purple-800 font-medium">Annual Savings</div>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">18</div>
            <div className="text-orange-800 font-medium">Months ROI</div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
          <p className="text-lg opacity-90 leading-relaxed">
            Global Manufacturing Corp, a Fortune 500 company with 15 facilities worldwide, successfully 
            implemented AI-powered sustainability solutions that reduced energy consumption by 60%, achieved 
            carbon neutrality, and generated $2.3M in annual cost savings. The transformation was completed 
            in 18 months with a 340% ROI.
          </p>
        </div>

        {/* Main Content */}
        <article className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Background</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Global Manufacturing Corp operates 15 manufacturing facilities across North America, Europe, 
            and Asia, producing automotive components for major OEMs. With annual revenue of $2.8 billion 
            and 12,000 employees, the company faced increasing pressure from customers, investors, and 
            regulators to reduce its environmental footprint.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Challenge</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>High energy consumption across 15 facilities (2.3M MWh annually)</li>
              <li>Carbon footprint of 1.2M tons CO2 equivalent per year</li>
              <li>Rising energy costs impacting profitability</li>
              <li>Customer demands for sustainable products</li>
              <li>Regulatory pressure for carbon reduction</li>
              <li>Limited visibility into energy usage patterns</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">AI Solution Implementation</h2>
          <p className="text-lg text-gray-700 mb-6">
            We implemented a comprehensive AI-powered sustainability platform that combined predictive 
            analytics, real-time monitoring, and automated optimization across all manufacturing facilities.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Components</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">🔮 Predictive Energy Management</h4>
              <p className="text-gray-700 mb-3">
                AI models predict energy demand and optimize consumption patterns in real-time.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Machine learning algorithms</li>
                <li>• Real-time optimization</li>
                <li>• Demand forecasting</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">🌡️ Smart Climate Control</h4>
              <p className="text-gray-700 mb-3">
                Intelligent HVAC systems that adapt to production schedules and weather conditions.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• IoT sensor networks</li>
                <li>• Automated adjustments</li>
                <li>• Zone-based control</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">⚡ Renewable Energy Integration</h4>
              <p className="text-gray-700 mb-3">
                AI optimizes the use of solar and wind energy based on production needs.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Solar panel optimization</li>
                <li>• Battery storage management</li>
                <li>• Grid integration</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">📊 Carbon Tracking & Reporting</h4>
              <p className="text-gray-700 mb-3">
                Real-time carbon footprint monitoring and automated sustainability reporting.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Real-time monitoring</li>
                <li>• Automated reporting</li>
                <li>• Compliance tracking</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Implementation Timeline</h2>
          <p className="text-lg text-gray-700 mb-6">
            The transformation was implemented in four phases over 18 months, with measurable results 
            achieved at each stage.
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Phase 1: Assessment & Planning (Months 1-3)</h4>
                <p className="text-gray-700 mb-4">
                  Comprehensive energy audit and AI solution design across all facilities.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Energy consumption baseline establishment</li>
                  <li>AI model development and testing</li>
                  <li>Infrastructure assessment and planning</li>
                  <li>Stakeholder alignment and training</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Phase 2: Pilot Implementation (Months 4-6)</h4>
                <p className="text-gray-700 mb-4">
                  Deployed AI solutions at 3 pilot facilities to validate approach and refine models.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Pilot facility selection and setup</li>
                  <li>AI system deployment and testing</li>
                  <li>Initial results measurement</li>
                  <li>Model refinement and optimization</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Phase 3: Full Rollout (Months 7-15)</h4>
                <p className="text-gray-700 mb-4">
                  Scaled successful pilot solutions across all 15 manufacturing facilities.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Systematic rollout across all facilities</li>
                  <li>Staff training and change management</li>
                  <li>Performance monitoring and optimization</li>
                  <li>Integration with existing systems</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Phase 4: Optimization & Scale (Months 16-18)</h4>
                <p className="text-gray-700 mb-4">
                  Fine-tuned systems and implemented advanced sustainability features.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Advanced AI model optimization</li>
                  <li>Carbon neutrality achievement</li>
                  <li>Continuous improvement processes</li>
                  <li>Knowledge transfer and documentation</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Results & Impact</h2>
          <p className="text-lg text-gray-700 mb-6">
            The AI sustainability transformation delivered exceptional results across all key metrics, 
            exceeding initial projections and establishing new industry benchmarks.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Environmental Impact</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-green-900 mb-3">Energy Reduction</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-green-800">Total Energy Reduction:</span>
                  <span className="font-bold text-green-900">60%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-800">Annual Energy Saved:</span>
                  <span className="font-bold text-green-900">1.38M MWh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-800">Peak Demand Reduction:</span>
                  <span className="font-bold text-green-900">45%</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-blue-900 mb-3">Carbon Footprint</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-blue-800">Carbon Reduction:</span>
                  <span className="font-bold text-blue-900">720K tons CO2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-800">Carbon Neutrality:</span>
                  <span className="font-bold text-blue-900">100%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-800">Renewable Energy:</span>
                  <span className="font-bold text-blue-900">85%</span>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Impact</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Metric</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Before</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">After</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Improvement</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Annual Energy Costs</td>
                  <td className="border border-gray-300 px-4 py-3">$3.8M</td>
                  <td className="border border-gray-300 px-4 py-3">$1.5M</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">-60%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Carbon Credits Value</td>
                  <td className="border border-gray-300 px-4 py-3">$0</td>
                  <td className="border border-gray-300 px-4 py-3">$2.1M</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">+$2.1M</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Customer Satisfaction</td>
                  <td className="border border-gray-300 px-4 py-3">78%</td>
                  <td className="border border-gray-300 px-4 py-3">94%</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">+16%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Regulatory Compliance</td>
                  <td className="border border-gray-300 px-4 py-3">65%</td>
                  <td className="border border-gray-300 px-4 py-3">100%</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">+35%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Operational Efficiency</td>
                  <td className="border border-gray-300 px-4 py-3">72%</td>
                  <td className="border border-gray-300 px-4 py-3">89%</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">+17%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Technology Architecture</h2>
          <p className="text-lg text-gray-700 mb-6">
            The AI sustainability platform was built using cutting-edge technologies and best practices 
            for scalability, reliability, and performance.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">AI & Machine Learning</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• TensorFlow for predictive models</li>
                <li>• Apache Spark for big data processing</li>
                <li>• Real-time stream processing</li>
                <li>• Automated model retraining</li>
                <li>• Edge computing for low latency</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Infrastructure & Data</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• AWS cloud infrastructure</li>
                <li>• IoT sensor networks (15,000+ sensors)</li>
                <li>• Real-time data pipelines</li>
                <li>• Data lake architecture</li>
                <li>• Microservices architecture</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Lessons Learned</h2>
          <p className="text-lg text-gray-700 mb-6">
            The implementation provided valuable insights that can benefit other organizations 
            embarking on similar sustainability transformations.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-green-900 mb-3">✅ Success Factors</h4>
              <ul className="text-green-800 space-y-2 text-sm">
                <li>• Strong leadership commitment</li>
                <li>• Cross-functional team collaboration</li>
                <li>• Phased implementation approach</li>
                <li>• Comprehensive change management</li>
                <li>• Continuous monitoring and optimization</li>
                <li>• Employee engagement and training</li>
              </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-yellow-900 mb-3">⚠️ Challenges Overcome</h4>
              <ul className="text-yellow-800 space-y-2 text-sm">
                <li>• Legacy system integration</li>
                <li>• Data quality and standardization</li>
                <li>• Change resistance from staff</li>
                <li>• Regulatory compliance complexity</li>
                <li>• Scalability across facilities</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">ROI Analysis</h2>
          <p className="text-lg text-gray-700 mb-6">
            The AI sustainability transformation delivered exceptional return on investment, 
            with payback achieved in just 18 months.
          </p>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">Financial Impact Summary</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Investment</h4>
                <ul className="space-y-2 text-sm">
                  <li>• AI Platform Development: $1.2M</li>
                  <li>• Infrastructure & Hardware: $800K</li>
                  <li>• Implementation & Training: $400K</li>
                  <li>• <strong>Total Investment: $2.4M</strong></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Annual Returns</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Energy Cost Savings: $2.3M</li>
                  <li>• Carbon Credit Revenue: $2.1M</li>
                  <li>• Operational Efficiency: $800K</li>
                  <li>• <strong>Total Annual Return: $5.2M</strong></li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white border-opacity-20">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">340% ROI</div>
                <div className="text-sm opacity-90">18-month payback period</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Future Roadmap</h2>
          <p className="text-lg text-gray-700 mb-6">
            Building on the success of the initial transformation, Global Manufacturing Corp is 
            planning additional sustainability initiatives to further reduce environmental impact.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h4 className="font-bold text-gray-900">Advanced Carbon Capture</h4>
                <p className="text-gray-700">Implement AI-powered carbon capture and storage systems</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h4 className="font-bold text-gray-900">Circular Economy Integration</h4>
                <p className="text-gray-700">AI-optimized waste reduction and material recycling programs</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h4 className="font-bold text-gray-900">Supply Chain Sustainability</h4>
                <p className="text-gray-700">Extend AI sustainability solutions to supplier network</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Conclusion</h2>
          <p className="text-lg text-gray-700 mb-8">
            The AI sustainability transformation at Global Manufacturing Corp demonstrates that 
            environmental responsibility and business success are not mutually exclusive. Through 
            strategic AI implementation, the company achieved carbon neutrality while generating 
            significant cost savings and improving operational efficiency.
          </p>

          <div className="bg-gray-900 text-white rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Sustainability Journey?</h3>
            <p className="text-gray-300 mb-6">
              Learn how AI can transform your organization's environmental impact while driving 
              business value. Download our comprehensive sustainability implementation guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/resources/green-ai-implementation-guide-2025"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
              >
                Download Guide
              </Link>
              <Link
                href="/services/ai-services"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center"
              >
                Get Expert Help
              </Link>
            </div>
          </div>
        </article>

        {/* Related Case Studies */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Case Studies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/case-studies/ai-automation-manufacturing-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Automation in Manufacturing
                </h4>
                <p className="text-gray-600 text-sm">
                  40% cost reduction and 60% faster processing times through AI automation
                </p>
              </div>
            </Link>
            <Link href="/case-studies/ai-healthcare-diagnosis-breakthrough-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Healthcare Diagnosis Breakthrough
                </h4>
                <p className="text-gray-600 text-sm">
                  95% diagnostic accuracy and 60% faster diagnosis times
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}