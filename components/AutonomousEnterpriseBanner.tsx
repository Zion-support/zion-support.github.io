import React from 'react';
import Link from 'next/link';
ArrowRightCpuBrainZapShieldTrendingUpUsersActivity

export default function AutonomousEnterpriseBanner() {
  return (
    <div className="bg-gradient-to-r from-green-900 via-teal-900 to-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🤖 AUTONOMOUS ENTERPRISE SYSTEMS 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Future of Business Operations is Autonomous
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how autonomous AI systems are revolutionizing enterprise operationscreating self-managing businesses that adaptlearnand optimize without human intervention.
          </p>
        </div>

        {/* Core Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Cpu className="w-12 h-12 text-green-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Self-Monitor</h3>
            <p className="text-sm opacity-90">Continuously track performance metrics and system health</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Brain className="w-12 h-12 text-blue-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Self-Diagnose</h3>
            <p className="text-sm opacity-90">Identify issues before they impact operations</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Zap className="w-12 h-12 text-purple-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Self-Heal</h3>
            <p className="text-sm opacity-90">Automatically resolve issues and implement fixes</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Shield className="w-12 h-12 text-orange-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Self-Adapt</h3>
            <p className="text-sm opacity-90">Modify strategies based on changing conditions</p>
          </div>
        </div>

        {/* Breakthrough Metrics */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">2025 Breakthrough Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300 mb-2">95%</div>
              <div className="text-sm opacity-90">Operational Independence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">99.7%</div>
              <div className="text-sm opacity-90">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2">340%</div>
              <div className="text-sm opacity-90">Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-300 mb-2">$50B</div>
              <div className="text-sm opacity-90">Global Cost Savings</div>
            </div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Featured: Autonomous Enterprise Systems Guide</h3>
              <p className="text-lg opacity-90 mb-6">
                Learn how autonomous AI systems are revolutionizing enterprise operations in 2025creating self-managing businesses that adaptlearnand optimize without human intervention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/blog/ai-2025-autonomous-enterprise-systems"
                  className="bg-white text-green-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Read Full Guide
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/services/enterprise-automation"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-colors inline-flex items-center justify-center"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90 mb-4">Autonomous Operations</div>
              <div className="text-sm opacity-75">
                Self-managing business processes
              </div>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <h4 className="text-lg font-bold mb-3">Manufacturing</h4>
            <ul className="text-sm opacity-90 space-y-2 mb-4">
              <li>• Predictive maintenance</li>
              <li>• Quality control automation</li>
              <li>• Supply chain optimization</li>
            </ul>
            <div className="text-xs opacity-75">
              <strong>Results:</strong> 60% downtime reduction45% quality improvement
            </div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <h4 className="text-lg font-bold mb-3">Financial Services</h4>
            <ul className="text-sm opacity-90 space-y-2 mb-4">
              <li>• Autonomous credit assessment</li>
              <li>• Real-time fraud detection</li>
              <li>• Investment management</li>
            </ul>
            <div className="text-xs opacity-75">
              <strong>Results:</strong> 80% faster processing99.9% fraud accuracy
            </div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <h4 className="text-lg font-bold mb-3">Healthcare</h4>
            <ul className="text-sm opacity-90 space-y-2 mb-4">
              <li>• Patient monitoring systems</li>
              <li>• Treatment optimization</li>
              <li>• Resource management</li>
            </ul>
            <div className="text-xs opacity-75">
              <strong>Results:</strong> 30% better outcomes50% fewer readmissions
            </div>
          </div>
        </div>

        {/* Implementation Roadmap */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Implementation Roadmap</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Foundation</h4>
              <p className="text-sm opacity-90">Assessmentinfrastructurepilot programsteam training</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Expansion</h4>
              <p className="text-sm opacity-90">Process automationdata integrationlearning systems</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Optimization</h4>
              <p className="text-sm opacity-90">Advanced analyticself-healingcontinuous learning</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg opacity-90 mb-6">
            Ready to transform your enterprise with autonomous systems?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Autonomy Assessment
            </Link>
            <Link
              href="/services/enterprise-automation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-colors"
            >
              Explore Automation Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}