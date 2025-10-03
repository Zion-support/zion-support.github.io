import { Link } from 'react-router-dom';

const AIEnterpriseAutomationRevolutionBanner = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full px-4 py-2 mb-6">
              <span className="text-2xl">🤖</span>
              <span className="text-sm font-bold">ENTERPRISE AUTOMATION REVOLUTION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Transform Your Enterprise with 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {' '}AI Automation
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experience the future of enterprise operations with our revolutionary AI automation platform. 
              Achieve 90% process automation, 70% cost reduction, and 300% productivity gains.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                <div className="text-3xl font-bold text-blue-400 mb-2">90%</div>
                <div className="text-sm text-gray-300">Process Automation</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                <div className="text-3xl font-bold text-purple-400 mb-2">70%</div>
                <div className="text-sm text-gray-300">Cost Reduction</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                <div className="text-3xl font-bold text-green-400 mb-2">300%</div>
                <div className="text-sm text-gray-300">Productivity Gains</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-sm text-gray-300">Autonomous Operations</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services/ai-enterprise-automation"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
              >
                Start Automation Journey
              </Link>
              <Link to="/case-studies/enterprise-automation-success"
                className="border-2 border-gray-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors"
              >
                View Success Stories
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-center">Automation Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-200">Intelligent Process Discovery</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-200">Autonomous Decision Making</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-200">Self-Healing Systems</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-200">Real-time Optimization</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-200">Predictive Maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIEnterpriseAutomationRevolutionBanner;