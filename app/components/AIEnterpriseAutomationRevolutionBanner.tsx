import Link from 'next/link';

export default function AIEnterpriseAutomationRevolutionBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <span className="text-3xl">🤖</span>
            <span className="font-bold text-lg">REVOLUTIONARY AI AUTOMATION</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            The Enterprise Automation
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {' '}Revolution is Here
            </span>
          </h2>
          
          <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your enterprise with autonomous AI systems that work 24/7, make intelligent decisions, 
            and deliver unprecedented results. Join the automation revolution that's reshaping industries.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-green-400">✓</span>
              <span>95% Process Automation</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-green-400">✓</span>
              <span>400% Productivity Gain</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-green-400">✓</span>
              <span>Zero Human Intervention</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Features */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Autonomous Decision Making</h3>
                  <p className="text-gray-300 leading-relaxed">
                    AI systems that analyze data, predict outcomes, and make decisions in real-time 
                    without human intervention. Achieve 99.7% accuracy in automated decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔄</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Self-Learning Systems</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Continuous improvement through machine learning. Our AI systems get smarter 
                    with every interaction, optimizing processes and reducing costs over time.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🛡️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Enterprise-Grade Security</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Bank-level security with zero-trust architecture. Your data and processes 
                    are protected by the most advanced AI security systems available.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Results */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-center">Revolutionary Results</h3>
            
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">400%</div>
                <div className="text-gray-300">Productivity Increase</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-white/5 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400 mb-1">95%</div>
                  <div className="text-sm text-gray-300">Process Automation</div>
                </div>
                <div className="text-center bg-white/5 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-400 mb-1">$5M+</div>
                  <div className="text-sm text-gray-300">Annual Savings</div>
                </div>
                <div className="text-center bg-white/5 rounded-lg p-4">
                  <div className="text-2xl font-bold text-teal-400 mb-1">99.9%</div>
                  <div className="text-sm text-gray-300">Uptime</div>
                </div>
                <div className="text-center bg-white/5 rounded-lg p-4">
                  <div className="text-2xl font-bold text-pink-400 mb-1">24/7</div>
                  <div className="text-sm text-gray-300">Operation</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link
              href="/services/ai-automation"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Automation Revolution
            </Link>
            <Link
              href="/case-studies/automation-success"
              className="border-2 border-white/30 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
          
          <p className="text-gray-400 text-sm">
            Join 500+ enterprises already revolutionizing their operations with AI automation
          </p>
        </div>
      </div>
    </section>
  );
}