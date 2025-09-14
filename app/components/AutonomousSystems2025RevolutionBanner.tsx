import React from 'react';
import Link from 'next/link';

const AutonomousSystems2025RevolutionBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 bg-opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 bg-opacity-20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 bg-opacity-10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-full px-8 py-3 mb-8 shadow-lg">
            <span className="text-lg font-bold">🚀 AUTONOMOUS REVOLUTION 2025</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            The Future of Enterprise
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mt-4">
              Is Autonomous
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed">
            Transform your operations with next-generation autonomous AI systems that 
            operate independently, make intelligent decisions, and deliver unprecedented results.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 hover:border-opacity-40">
            <div className="text-5xl mb-6">🧠</div>
            <h3 className="text-xl font-bold mb-4">Autonomous Decision Making</h3>
            <p className="text-gray-200 leading-relaxed">
              AI systems that make complex business decisions in real-time without human intervention.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 hover:border-opacity-40">
            <div className="text-5xl mb-6">⚡</div>
            <h3 className="text-xl font-bold mb-4">Self-Optimizing Systems</h3>
            <p className="text-gray-200 leading-relaxed">
              Continuously improving operations that adapt and optimize performance automatically.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 hover:border-opacity-40">
            <div className="text-5xl mb-6">🔮</div>
            <h3 className="text-xl font-bold mb-4">Predictive Intelligence</h3>
            <p className="text-gray-200 leading-relaxed">
              Advanced forecasting and predictive analytics that anticipate future needs and opportunities.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 hover:border-opacity-40">
            <div className="text-5xl mb-6">🌐</div>
            <h3 className="text-xl font-bold mb-4">Enterprise-Wide Integration</h3>
            <p className="text-gray-200 leading-relaxed">
              Seamless coordination across all business units and systems for unified operations.
            </p>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-12 mb-16 border border-white border-opacity-20">
          <h3 className="text-3xl font-bold text-center mb-12">Proven Results Across Industries</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-gradient bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4">
                600%
              </div>
              <div className="text-xl font-semibold mb-2">Average ROI</div>
              <div className="text-gray-300">Within 18 months of implementation</div>
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold text-gradient bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                $2.8B
              </div>
              <div className="text-xl font-semibold mb-2">Benefits Generated</div>
              <div className="text-gray-300">Cost savings and revenue growth</div>
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold text-gradient bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                95%
              </div>
              <div className="text-xl font-semibold mb-2">Process Automation</div>
              <div className="text-gray-300">Routine operations now autonomous</div>
            </div>
          </div>
        </div>

        {/* Content Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-2xl font-bold mb-4">Ultimate Implementation Guide</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Complete step-by-step guide to implementing autonomous systems in your enterprise.
            </p>
            <Link 
              href="/blog/ai-2025-next-generation-autonomous-systems-ultimate-guide"
              className="inline-flex items-center text-white font-semibold hover:text-blue-200 transition-colors"
            >
              Read Guide →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-blue-700 rounded-2xl p-8 hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-4">Success Case Study</h3>
            <p className="text-green-100 mb-6 leading-relaxed">
              Real-world transformation story showing 600% ROI and $2.8B in benefits.
            </p>
            <Link 
              href="/case-studies/global-enterprise-ai-2025-autonomous-transformation-ultimate-success"
              className="inline-flex items-center text-white font-semibold hover:text-green-200 transition-colors"
            >
              View Case Study →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-pink-700 rounded-2xl p-8 hover:from-purple-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">🗺️</div>
            <h3 className="text-2xl font-bold mb-4">Implementation Roadmap</h3>
            <p className="text-purple-100 mb-6 leading-relaxed">
              Detailed roadmap with frameworks, tools, and best practices for success.
            </p>
            <Link 
              href="/resources/ai-2025-autonomous-enterprise-implementation-ultimate-roadmap"
              className="inline-flex items-center text-white font-semibold hover:text-purple-200 transition-colors"
            >
              Get Roadmap →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-12 mb-8">
            <h3 className="text-4xl font-bold mb-6">Ready to Begin Your Autonomous Transformation?</h3>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Join the autonomous revolution and unlock unprecedented business potential with 
              next-generation AI systems that operate independently and deliver extraordinary results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-cyan-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Transformation
              </Link>
              <Link
                href="/tools/autonomous-enterprise-readiness-assessment"
                className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                Assess Readiness
              </Link>
            </div>
          </div>
          
          <p className="text-lg text-gray-300">
            Trusted by 500+ enterprises worldwide • 99.9% success rate • 24/7 expert support
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutonomousSystems2025RevolutionBanner;