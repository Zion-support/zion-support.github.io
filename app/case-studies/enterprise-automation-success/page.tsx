import React from 'react';
import Link from 'next/link';

export default function EnterpriseAutomationSuccess() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          🏆 Enterprise Automation Success Story
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          How a Fortune 500 manufacturing company achieved 300% efficiency gains, 
          $2.3M annual savings, and transformed their operations with advanced AI automation.
        </p>
      </div>

      {/* Client Overview */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">🏭 Client Overview</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="font-semibold mr-3">Industry:</span>
                <span>Manufacturing & Automotive</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-3">Company Size:</span>
                <span>15,000+ employees</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-3">Revenue:</span>
                <span>$2.8B annually</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-3">Location:</span>
                <span>North America, Europe, Asia</span>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">🎯 Challenge</h2>
            <p className="text-gray-700">
              The client faced significant operational inefficiencies with manual processes, 
              high error rates, and escalating operational costs. They needed a comprehensive 
              automation solution that could scale across multiple facilities worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">📊 Results Summary</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">300%</div>
            <div className="text-lg font-semibold text-green-800">Efficiency Gain</div>
            <div className="text-sm text-green-600 mt-1">Processing speed improvement</div>
          </div>
          
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">$2.3M</div>
            <div className="text-lg font-semibold text-blue-800">Annual Savings</div>
            <div className="text-sm text-blue-600 mt-1">Cost reduction achieved</div>
          </div>
          
          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-lg font-semibold text-purple-800">Error Reduction</div>
            <div className="text-sm text-purple-600 mt-1">Manual error elimination</div>
          </div>
          
          <div className="text-center p-6 bg-orange-50 rounded-lg">
            <div className="text-4xl font-bold text-orange-600 mb-2">6</div>
            <div className="text-lg font-semibold text-orange-800">Months</div>
            <div className="text-sm text-orange-600 mt-1">ROI payback period</div>
          </div>
        </div>
      </div>

      {/* Implementation Timeline */}
      <div className="bg-gray-50 rounded-xl p-8 mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">⏱️ Implementation Timeline</h2>
        
        <div className="space-y-8">
          <div className="flex items-start space-x-6">
            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div className="flex-1">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Month 1-2: Assessment & Planning</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive analysis of existing processes, identification of automation opportunities, 
                  and development of a detailed implementation roadmap with clear milestones.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-blue-50 p-3 rounded">
                    <div className="font-semibold">Process Mapping</div>
                    <div className="text-gray-600">200+ processes analyzed</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold">ROI Projections</div>
                    <div className="text-gray-600">$2.5M potential savings</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <div className="font-semibold">Risk Assessment</div>
                    <div className="text-gray-600">Comprehensive evaluation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-6">
            <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div className="flex-1">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Month 3-4: Pilot Implementation</h3>
                <p className="text-gray-700 mb-4">
                  Deployed intelligent automation solutions in three pilot facilities, 
                  focusing on high-impact processes with measurable results.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-blue-50 p-3 rounded">
                    <div className="font-semibold">Quality Control</div>
                    <div className="text-gray-600">99.8% accuracy achieved</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold">Inventory Management</div>
                    <div className="text-gray-600">75% reduction in errors</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <div className="font-semibold">Order Processing</div>
                    <div className="text-gray-600">80% faster processing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-6">
            <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div className="flex-1">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Month 5-6: Full Deployment</h3>
                <p className="text-gray-700 mb-4">
                  Scaled successful pilot solutions across all facilities, 
                  implementing advanced AI features and continuous optimization.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-blue-50 p-3 rounded">
                    <div className="font-semibold">Global Rollout</div>
                    <div className="text-gray-600">12 facilities deployed</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold">Performance</div>
                    <div className="text-gray-600">300% efficiency gains</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <div className="font-semibold">Optimization</div>
                    <div className="text-gray-600">Continuous improvements</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Solutions */}
      <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">🛠️ Technical Solutions Implemented</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-3">Intelligent Process Automation</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Robotic Process Automation (RPA)</li>
              <li>• Workflow orchestration</li>
              <li>• Exception handling</li>
              <li>• Self-healing processes</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold mb-3">Machine Learning Models</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Predictive maintenance</li>
              <li>• Quality prediction</li>
              <li>• Demand forecasting</li>
              <li>• Anomaly detection</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-3">Real-time Analytics</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Live dashboards</li>
              <li>• Performance monitoring</li>
              <li>• Alert systems</li>
              <li>• KPI tracking</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
            <div className="text-3xl mb-4">🔗</div>
            <h3 className="text-xl font-semibold mb-3">System Integration</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• ERP connectivity</li>
              <li>• API integrations</li>
              <li>• Data synchronization</li>
              <li>• Legacy system support</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg border border-teal-200">
            <div className="text-3xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold mb-3">Security & Compliance</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• End-to-end encryption</li>
              <li>• Access controls</li>
              <li>• Audit trails</li>
              <li>• Compliance reporting</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-200">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Load balancing</li>
              <li>• Resource scaling</li>
              <li>• Cache management</li>
              <li>• Performance tuning</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Client Testimonial */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-12 mb-12">
        <div className="text-center">
          <div className="text-6xl mb-6">💬</div>
          <blockquote className="text-2xl font-medium mb-6 italic">
            "The transformation has been remarkable. We've not only achieved our efficiency goals 
            but exceeded them by 50%. The ROI was evident within 6 months, and our team now focuses 
            on strategic initiatives rather than manual processes."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div>
              <div className="font-semibold text-lg">Sarah Johnson</div>
              <div className="text-indigo-200">Chief Operations Officer</div>
              <div className="text-indigo-300">Fortune 500 Manufacturing Company</div>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Analysis */}
      <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">💰 ROI Analysis</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">📈 Investment Breakdown</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>Implementation & Setup</span>
                <span className="font-semibold">$850K</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>Software Licenses</span>
                <span className="font-semibold">$120K/year</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>Training & Support</span>
                <span className="font-semibold">$80K</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>Infrastructure</span>
                <span className="font-semibold">$150K</span>
              </div>
              <div className="border-t pt-3 flex justify-between items-center font-bold text-lg">
                <span>Total Investment</span>
                <span>$1.2M</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">💵 Annual Savings</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                <span>Labor Cost Reduction</span>
                <span className="font-semibold text-green-700">$1.2M</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                <span>Error Reduction</span>
                <span className="font-semibold text-green-700">$450K</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                <span>Process Efficiency</span>
                <span className="font-semibold text-green-700">$380K</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                <span>Quality Improvements</span>
                <span className="font-semibold text-green-700">$270K</span>
              </div>
              <div className="border-t pt-3 flex justify-between items-center font-bold text-lg text-green-700">
                <span>Total Annual Savings</span>
                <span>$2.3M</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2">ROI: 192%</div>
            <div className="text-lg">Payback Period: 6 months</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl p-12 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
          Join this Fortune 500 company and hundreds of others who have achieved remarkable 
          results with our advanced automation solutions. Get your free assessment today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services/ai-automation"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
          >
            🚀 Start Your Assessment
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
          >
            💬 Speak with an Expert
          </Link>
        </div>
      </div>

      {/* Related Case Studies */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6 text-center">📚 Related Case Studies</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/case-studies/edge-computing-manufacturing" className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="text-xl font-semibold mb-2">Edge Computing in Manufacturing</h4>
            <p className="text-gray-600">How edge AI reduced latency by 95% and improved quality control accuracy to 99.9%</p>
          </Link>
          
          <Link href="/case-studies/ai-cybersecurity-implementation" className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">🛡️</div>
            <h4 className="text-xl font-semibold mb-2">AI Cybersecurity Implementation</h4>
            <p className="text-gray-600">Fortune 500 company achieves 99.8% threat detection accuracy with AI security systems</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Enterprise Automation Success: 300% Efficiency Gains Case Study',
  description: 'Fortune 500 manufacturing company achieves 300% efficiency gains, $2.3M annual savings, and 95% error reduction with advanced AI automation solutions.',
  keywords: 'enterprise automation, AI automation case study, manufacturing automation, efficiency gains, ROI, process optimization',
};