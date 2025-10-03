import { Link } from 'react-router-dom';

export default function AutonomousEnterpriseOperations2027Banner() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 border-b border-blue-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6 animate-pulse">
            <span className="text-blue-400 font-bold text-2xl tracking-wider uppercase">
              🤖 BREAKING: Autonomous Enterprise Operations 2027
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent leading-tight">
            Complete Business Automation
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your organization with fully autonomous enterprise operations that achieve 
            <span className="text-blue-400 font-bold"> 99.9% automation rates</span>, 
            <span className="text-green-400 font-bold"> 85% cost reduction</span>, and 
            <span className="text-cyan-400 font-bold"> 24/7 autonomous operations</span>
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">99.9%</div>
              <div className="text-xs text-blue-300">Automation Rate</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">85%</div>
              <div className="text-xs text-green-300">Cost Reduction</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">24/7</div>
              <div className="text-xs text-purple-300">Autonomous Ops</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
              <div className="text-2xl font-extrabold text-orange-400 mb-1">$100M</div>
              <div className="text-xs text-orange-300">Average Savings</div>
            </div>
          </div>
          
          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
            <span className="bg-blue-500/20 px-4 py-2 rounded-full text-blue-300 border border-blue-500/30">
              🤖 Self-Managing Systems
            </span>
            <span className="bg-cyan-500/20 px-4 py-2 rounded-full text-cyan-300 border border-cyan-500/30">
              ⚡ Real-Time Decision Making
            </span>
            <span className="bg-green-500/20 px-4 py-2 rounded-full text-green-300 border border-green-500/30">
              🧠 Adaptive Intelligence
            </span>
            <span className="bg-purple-500/20 px-4 py-2 rounded-full text-purple-300 border border-purple-500/30">
              💰 $100M+ Average Savings
            </span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/blog/autonomous-enterprise-operations-2027"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              🤖 Explore Autonomous Operations →
            </Link>
            <Link to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              💼 Get Free Enterprise Assessment
            </Link>
            <Link to="/services/enterprise-automation" 
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              🚀 View Automation Services
            </Link>
          </div>
        </div>
        
        {/* Technology Showcase */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-6xl mb-6 text-center">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Intelligent Orchestration</h3>
            <p className="text-gray-300 mb-6 text-center">
              AI systems that orchestrate complex business processes across all departments 
              with superhuman precision and speed.
            </p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• 99.9% automation rate</li>
              <li>• Self-managing systems</li>
              <li>• Adaptive intelligence</li>
              <li>• Real-time optimization</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
            <div className="text-6xl mb-6 text-center">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Instant Decision Making</h3>
            <p className="text-gray-300 mb-6 text-center">
              Real-time decision processing that analyzes vast data and executes optimal 
              strategies instantaneously.
            </p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• 1000x faster decisions</li>
              <li>• Predictive analytics</li>
              <li>• Multi-variable optimization</li>
              <li>• Continuous learning</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300">
            <div className="text-6xl mb-6 text-center">💰</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Massive Cost Savings</h3>
            <p className="text-gray-300 mb-6 text-center">
              Achieve unprecedented cost reduction and efficiency gains with autonomous 
              operations that eliminate manual processes.
            </p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• $100M average savings</li>
              <li>• 85% cost reduction</li>
              <li>• 500% ROI achievement</li>
              <li>• 3-month payback</li>
            </ul>
          </div>
        </div>
        
        {/* Implementation Preview */}
        <div className="bg-gradient-to-r from-blue-900/50 via-cyan-900/50 to-teal-900/50 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              🚀 Complete Implementation Roadmap
            </h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Our comprehensive approach ensures smooth transition to autonomous operations 
              with minimal disruption and maximum value delivery.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
                <div className="text-4xl mb-4">📊</div>
                <h4 className="text-lg font-bold text-blue-400 mb-2">Assessment & Planning</h4>
                <p className="text-gray-300 text-sm">
                  Comprehensive analysis of current processes and automation opportunities.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30">
                <div className="text-4xl mb-4">⚙️</div>
                <h4 className="text-lg font-bold text-cyan-400 mb-2">System Development</h4>
                <p className="text-gray-300 text-sm">
                  Custom autonomous system development tailored to your requirements.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-500/30">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-lg font-bold text-teal-400 mb-2">Deployment & Optimization</h4>
                <p className="text-gray-300 text-sm">
                  Phased deployment with continuous monitoring and optimization.
                </p>
              </div>
            </div>
            <Link to="/services/enterprise-automation"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Start Your Automation Journey →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}