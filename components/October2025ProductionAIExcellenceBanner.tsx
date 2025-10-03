import { Link } from 'react-router-dom';

const October2025ProductionAIExcellenceBanner = () => {
  return (
    <div className="bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900 py-10 px-4 sm:px-6 lg:px-8 my-8 rounded-2xl shadow-2xl relative overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-center mb-4">
          <span className="inline-flex items-center px-4 py-2 bg-yellow-400 text-gray-900 rounded-full text-sm font-extrabold animate-bounce">
            🚀 NEW: PRODUCTION AI SYSTEMS MASTERY - OCTOBER 1, 2025 🚀
          </span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-white mb-4">
          Production AI Excellence: Deploy Enterprise-Grade AI Agents
        </h2>
        
        <p className="text-xl md:text-2xl text-center text-blue-100 mb-6 font-bold">
          $6.2B Operational Savings | 99.9% Reliability | Zero Security Incidents
        </p>
        
        <p className="text-lg text-center text-white mb-8 max-w-4xl mx-auto leading-relaxed">
          Master the complete framework for deploying AI agents in production with enterprise-grade reliability, 
          comprehensive security, and continuous optimization. Learn from Fortune 500 success stories.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="text-2xl mr-2">⚡</span>
              Key Capabilities Covered
            </h3>
            <ul className="space-y-2 text-white">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">✓</span>
                <span>Comprehensive observability & monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">✓</span>
                <span>Multi-layer security & compliance</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">✓</span>
                <span>Cost optimization & governance</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">✓</span>
                <span>Quality assurance & testing</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="text-2xl mr-2">📊</span>
              Proven Results
            </h3>
            <ul className="space-y-2 text-white">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">●</span>
                <span>99.9% uptime SLA compliance</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">●</span>
                <span>73% reduction in LLM costs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">●</span>
                <span>98.7% customer satisfaction</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">●</span>
                <span>450% ROI in 18 months</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/blog/ai-2025-october-production-ai-agent-deployment-excellence"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Read Complete Deployment Guide →
          </Link>
          <Link 
            to="/contact"
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-xl text-lg transition-all border-2 border-white/40"
          >
            Schedule Strategy Session
          </Link>
        </div>

        <div className="mt-8 text-center">
          <p className="text-white/90 text-sm">
            🏆 Trusted by 3,247 Fortune 500 enterprises worldwide | Published October 1, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default October2025ProductionAIExcellenceBanner;
