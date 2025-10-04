import React from 'react';
import { Link } from 'react-router-dom';

const March2025AutonomousOperationsRevolutionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Animated Autonomous Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-emerald-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-teal-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping opacity-50"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Main Headline */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              🤖🤖🤖 MARCH 2025 AUTONOMOUS OPERATIONS REVOLUTION 🤖🤖🤖
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
              The Future of Business Automation
            </h2>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-emerald-400">99.9%</div>
              <div className="text-sm text-gray-300">Operational Autonomy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-teal-400">$2.7B+</div>
              <div className="text-sm text-gray-300">Cost Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-cyan-400">340%</div>
              <div className="text-sm text-gray-300">Efficiency Gains</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-green-400">99.99%</div>
              <div className="text-sm text-gray-300">System Uptime</div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-xl text-gray-200 leading-relaxed">
              💎💎💎 <strong>REVOLUTIONARY BREAKTHROUGH:</strong> Achieve 99.9% operational autonomy with zero human intervention in routine operations, delivering unprecedented efficiency gains and $2.7+ billion in cost savings! 💎💎💎
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/content/blog/ai-2025-march-autonomous-enterprise-operations-revolution"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              📖 Read Full Guide
            </Link>
            <Link
              href="/services/autonomous-operations-consultation"
              className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🚀 Start Implementation
            </Link>
            <Link
              href="/case-studies/autonomous-operations-success"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              💰 View Success Stories
            </Link>
          </div>

          {/* Core Technologies */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="text-2xl mb-3">🧠</div>
              <h3 className="text-xl font-bold mb-2 text-emerald-400">Autonomous Decision Intelligence</h3>
              <p className="text-gray-300 text-sm">
                Self-learning algorithms with contextual decision making, risk assessment automation, and continuous improvement
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="text-2xl mb-3">⚙️</div>
              <h3 className="text-xl font-bold mb-2 text-teal-400">Process Orchestration</h3>
              <p className="text-gray-300 text-sm">
                Intelligent workflow management with dynamic adaptation, cross-functional coordination, and exception handling
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="text-2xl mb-3">📊</div>
              <h3 className="text-xl font-bold mb-2 text-cyan-400">Resource Management</h3>
              <p className="text-gray-300 text-sm">
                Dynamic resource allocation with predictive planning, automated scheduling, and real-time cost optimization
              </p>
            </div>
          </div>

          {/* Industry Applications */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">🏭 Industry Transformations 🏭</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl mb-2">🏭</div>
                <div className="font-semibold text-sm">Manufacturing</div>
                <div className="text-xs text-gray-300">99.8% uptime</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl mb-2">🏦</div>
                <div className="font-semibold text-sm">Financial</div>
                <div className="text-xs text-gray-300">$2.1B fraud prevented</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl mb-2">🏥</div>
                <div className="font-semibold text-sm">Healthcare</div>
                <div className="text-xs text-gray-300">94% diagnostic accuracy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl mb-2">🚚</div>
                <div className="font-semibold text-sm">Logistics</div>
                <div className="text-xs text-gray-300">67% efficiency gain</div>
              </div>
            </div>
          </div>

          {/* Implementation Phases */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">🚀 Implementation Roadmap 🚀</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-emerald-400 mb-2">Phase 1</div>
                <h4 className="text-lg font-semibold mb-3">Foundation & Assessment</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Autonomous readiness evaluation</li>
                  <li>• Process complexity analysis</li>
                  <li>• Technology infrastructure assessment</li>
                  <li>• Pilot program development</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-teal-400 mb-2">Phase 2</div>
                <h4 className="text-lg font-semibold mb-3">Pilot Implementation</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Core autonomous systems deployment</li>
                  <li>• Process orchestration integration</li>
                  <li>• Training and development</li>
                  <li>• Performance monitoring</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">Phase 3</div>
                <h4 className="text-lg font-semibold mb-3">Scale & Optimize</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Enterprise-wide deployment</li>
                  <li>• System integration</li>
                  <li>• Governance frameworks</li>
                  <li>• Continuous improvement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-lg p-6 border border-orange-500/30">
            <p className="text-lg font-semibold text-white mb-2">
              ⚡ EXCLUSIVE: Free Autonomous Operations Assessment
            </p>
            <p className="text-gray-200">
              Discover your organization's autonomous operations potential with our complimentary readiness assessment and implementation roadmap.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default March2025AutonomousOperationsRevolutionBanner;