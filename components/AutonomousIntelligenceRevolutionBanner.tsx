import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Target, TrendingUp } from 'lucide-react';

export default function AutonomousIntelligenceRevolutionBanner() {
  return (
    <div className="w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full px-4 py-2 mb-6">
              <Brain className="w-4 h-4" />
              <span className="text-sm font-semibold">AUTONOMOUS INTELLIGENCE REVOLUTION</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Future of AI is
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                Autonomous & Self-Improving
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how autonomous AI systems are creating self-improving intelligence that evolves and adapts without human intervention. 
              Transform your enterprise with systems that think, learn, and optimize themselves.
            </p>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">95% Operational Efficiency</h4>
                  <p className="text-sm text-gray-300">Automated processes with minimal human oversight</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">$15M+ Annual Savings</h4>
                  <p className="text-sm text-gray-300">Measurable ROI through intelligent automation</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">24/7 Autonomous Operation</h4>
                  <p className="text-sm text-gray-300">Continuous improvement without downtime</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Self-Improving Intelligence</h4>
                  <p className="text-sm text-gray-300">Systems that evolve and adapt automatically</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/blog/ai-autonomous-enterprise-systems-2026"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg text-center"
              >
                Read Full Article
              </Link>
              <Link to="/services/ai-autonomous-systems"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-center"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right Content - Featured Articles */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">NEW 2026</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Autonomous Enterprise Systems</h3>
              <p className="text-gray-300 text-sm mb-4">
                Self-improving AI that evolves without human intervention. 
                Achieve unprecedented efficiency and cost savings.
              </p>
              <Link to="/blog/ai-autonomous-enterprise-systems-2026"
                className="inline-flex items-center text-cyan-300 font-semibold hover:text-white transition-colors"
              >
                Read Article <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">BREAKTHROUGH</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Cognitive Computing Revolution</h3>
              <p className="text-gray-300 text-sm mb-4">
                Human-level reasoning and decision-making capabilities. 
                Transform your business with intelligent automation.
              </p>
              <Link to="/blog/ai-cognitive-computing-breakthrough-2026"
                className="inline-flex items-center text-cyan-300 font-semibold hover:text-white transition-colors"
              >
                Read Article <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">SUCCESS STORY</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">$25M Value Creation Case Study</h3>
              <p className="text-gray-300 text-sm mb-4">
                See how a Fortune 500 company achieved massive value creation 
                with AI cognitive computing systems.
              </p>
              <Link to="/case-studies/ai-cognitive-computing-success-2026"
                className="inline-flex items-center text-cyan-300 font-semibold hover:text-white transition-colors"
              >
                View Case Study <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}