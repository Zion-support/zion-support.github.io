import React from 'react';
import Link from 'next/link';

const AutonomousBusinessOperations2026Showcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-cyan-500 bg-opacity-20 rounded-full px-8 py-4 mb-8 backdrop-blur-sm">
            <span className="text-lg font-semibold">🤖 AUTONOMOUS BUSINESS OPERATIONS 2026</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Fully Autonomous
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Business Systems
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed">
            Transform your organization into a self-operating, self-optimizing, and self-evolving entity 
            that runs 24/7 without human intervention while continuously improving performance.
          </p>
        </div>

        {/* Core Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Autonomous Decision Making */}
          <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-2xl p-8 border border-emerald-700 hover:border-emerald-500 transition-all duration-300">
            <div className="text-5xl mb-6">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-emerald-300">Autonomous Decision Making</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              AI systems that make complex business decisions in real-time, analyzing data streams, 
              market conditions, and strategic objectives to optimize outcomes.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-sm">Real-time market analysis</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-sm">Strategic planning automation</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-sm">Risk assessment & mitigation</span>
              </li>
            </ul>
            <Link 
              href="/content/autonomous-decision-making-2026"
              className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Learn More →
            </Link>
          </div>

          {/* Self-Optimizing Operations */}
          <div className="bg-gradient-to-br from-cyan-900 to-cyan-800 rounded-2xl p-8 border border-cyan-700 hover:border-cyan-500 transition-all duration-300">
            <div className="text-5xl mb-6">⚙️</div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-300">Self-Optimizing Operations</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Continuously evolving systems that monitor performance, identify bottlenecks, 
              and automatically implement improvements without human intervention.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-sm">Process optimization algorithms</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-sm">Resource allocation automation</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-sm">Performance monitoring & tuning</span>
              </li>
            </ul>
            <Link 
              href="/content/self-optimizing-operations-2026"
              className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
            >
              Learn More →
            </Link>
          </div>

          {/* Autonomous Customer Service */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 border border-blue-700 hover:border-blue-500 transition-all duration-300">
            <div className="text-5xl mb-6">💬</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Autonomous Customer Service</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              AI-powered customer service systems that handle inquiries, resolve issues, 
              and provide personalized experiences without human oversight.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm">Intelligent query resolution</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm">Personalized recommendations</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm">Proactive issue prevention</span>
              </li>
            </ul>
            <Link 
              href="/content/autonomous-customer-service-2026"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Learn More →
            </Link>
          </div>

          {/* Autonomous Financial Management */}
          <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-2xl p-8 border border-purple-700 hover:border-purple-500 transition-all duration-300">
            <div className="text-5xl mb-6">💰</div>
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Autonomous Financial Management</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Self-managing financial systems that handle budgeting, forecasting, 
              investment decisions, and compliance automatically.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm">Automated financial planning</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm">Investment optimization</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm">Regulatory compliance automation</span>
              </li>
            </ul>
            <Link 
              href="/content/autonomous-financial-management-2026"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Learn More →
            </Link>
          </div>

          {/* Autonomous Supply Chain */}
          <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 rounded-2xl p-8 border border-indigo-700 hover:border-indigo-500 transition-all duration-300">
            <div className="text-5xl mb-6">🚚</div>
            <h3 className="text-2xl font-bold mb-4 text-indigo-300">Autonomous Supply Chain</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Self-managing supply chains that predict demand, optimize logistics, 
              and ensure seamless operations across the entire value chain.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                <span className="text-sm">Demand forecasting</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                <span className="text-sm">Logistics optimization</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                <span className="text-sm">Vendor relationship management</span>
              </li>
            </ul>
            <Link 
              href="/content/autonomous-supply-chain-2026"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Learn More →
            </Link>
          </div>

          {/* Autonomous Human Resources */}
          <div className="bg-gradient-to-br from-pink-900 to-pink-800 rounded-2xl p-8 border border-pink-700 hover:border-pink-500 transition-all duration-300">
            <div className="text-5xl mb-6">👥</div>
            <h3 className="text-2xl font-bold mb-4 text-pink-300">Autonomous Human Resources</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              AI-driven HR systems that handle recruitment, performance management, 
              and employee development autonomously.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="text-sm">Intelligent candidate screening</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="text-sm">Performance analytics</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="text-sm">Learning path optimization</span>
              </li>
            </ul>
            <Link 
              href="/content/autonomous-hr-2026"
              className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
            >
              Learn More →
            </Link>
          </div>
        </div>

        {/* Implementation Roadmap */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 mb-16">
          <h3 className="text-4xl font-bold text-center mb-12 text-white">
            Implementation Roadmap
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">1</div>
              <h4 className="text-xl font-bold mb-3 text-emerald-300">Assessment & Planning</h4>
              <p className="text-gray-400 text-sm">Evaluate current operations and design autonomous system architecture</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">2</div>
              <h4 className="text-xl font-bold mb-3 text-cyan-300">Pilot Implementation</h4>
              <p className="text-gray-400 text-sm">Deploy autonomous systems in controlled environments for testing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">3</div>
              <h4 className="text-xl font-bold mb-3 text-blue-300">Gradual Rollout</h4>
              <p className="text-gray-400 text-sm">Expand autonomous capabilities across different business functions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">4</div>
              <h4 className="text-xl font-bold mb-3 text-purple-300">Full Autonomy</h4>
              <p className="text-gray-400 text-sm">Achieve complete business autonomy with continuous optimization</p>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold mb-2 text-white">85%</div>
            <div className="text-emerald-200 text-lg font-semibold">Cost Reduction</div>
            <div className="text-emerald-100 text-sm mt-2">Average operational cost savings with autonomous systems</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold mb-2 text-white">99.9%</div>
            <div className="text-cyan-200 text-lg font-semibold">Uptime</div>
            <div className="text-cyan-100 text-sm mt-2">Continuous operation without human intervention</div>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold mb-2 text-white">300%</div>
            <div className="text-blue-200 text-lg font-semibold">Efficiency Gain</div>
            <div className="text-blue-100 text-sm mt-2">Improved operational efficiency and productivity</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 rounded-3xl p-12">
            <h3 className="text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h3>
            <p className="text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join the autonomous business revolution and unlock unprecedented levels of efficiency, 
              innovation, and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-emerald-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/content/autonomous-business-implementation-guide"
                className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300"
              >
                Download Implementation Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomousBusinessOperations2026Showcase;