import { Link } from 'react-router-dom';
import { Bot, Target, DollarSign, Zap, TrendingUp, Activity, Cloud, Shield, CheckCircle, Cpu, ArrowRight, Clock } from 'lucide-react';

const October2025AutonomousInfrastructureBanner = () => {
  return (
    <div className="relative bg-gradient-to-br from-cyan-900/30 via-blue-900/30 to-purple-900/30 border-y border-cyan-500/40 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/40 rounded-full mb-4 animate-pulse">
            <Bot className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 font-semibold text-sm">🚀 BREAKING: OCTOBER 1, 2025 — AUTONOMOUS INFRASTRUCTURE REVOLUTION</span>
            <Bot className="w-5 h-5 text-cyan-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Real-Time Autonomous Infrastructure Orchestration
            <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              $3.2B Value Created | 99.99% Uptime | 87% Cost Reduction | 42x ROI
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Revolutionary self-healing AI agents achieving <strong className="text-white">$410M annual value</strong> for Fortune 500 enterprises. 
            Predictive incident prevention, autonomous remediation, and zero-touch operations with <strong className="text-cyan-400">97% autonomous success rate</strong>. 
            Transform from reactive firefighting to proactive excellence.
          </p>
        </div>
        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <Target className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white mb-1">99.99%</div>
            <div className="text-sm text-cyan-200">Uptime Achieved</div>
            <div className="text-xs text-gray-400 mt-1">8.6 sec downtime/year</div>
          <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <DollarSign className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white mb-1">87%</div>
            <div className="text-sm text-blue-200">Cost Reduction</div>
            <div className="text-xs text-gray-400 mt-1">$111M avg savings</div>
          <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/40 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white mb-1">97%</div>
            <div className="text-sm text-purple-200">Zero-Touch Ops</div>
            <div className="text-xs text-gray-400 mt-1">Fully autonomous</div>
          <div className="bg-gradient-to-br from-green-900/40 to-green-800/40 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white mb-1">42x</div>
            <div className="text-sm text-green-200">Average ROI</div>
            <div className="text-xs text-gray-400 mt-1">1.8-month payback</div>
        {/* Revolutionary Capabilities */}
        <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🤖 Revolutionary AI-Powered Capabilities
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <div className="font-semibold text-white mb-1">Predictive Incident Prevention</div>
                <div className="text-sm text-gray-300">
                  15-45 minute advance warning with 94% accuracy. Prevent incidents before user impact. AI analyzes 2.3M events/minute.
                </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="font-semibold text-white mb-1">Autonomous Self-Healing</div>
                <div className="text-sm text-gray-300">
                  97% success rate in under 30 seconds. Automatic rollback on failure. 250+ built-in remediation patterns.
                </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center">
                <Cloud className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <div className="font-semibold text-white mb-1">Intelligent Cost Optimization</div>
                <div className="text-sm text-gray-300">
                  87% cost reduction through real-time right-sizing, idle resource cleanup, and predictive capacity planning.
                </div>
        </div>
        {/* Fortune 500 Success Story */}
        <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 mb-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Fortune 100 Financial Services: $410M Annual Value Creation
              </h3>
              <p className="text-gray-300">
                $2.3T assets under management • 24/7 trading operations • 8,500 microservices • 47 countries
              </p>
            </div>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-black/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-cyan-400 mb-1">99.994%</div>
              <div className="text-sm text-gray-300">Uptime Achieved</div>
              <div className="text-xs text-gray-400 mt-1">3 minutes total downtime/year</div>
            <div className="bg-black/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-400 mb-1">$410M</div>
              <div className="text-sm text-gray-300">Annual Value Created</div>
              <div className="text-xs text-gray-400 mt-1">47x ROI in 12 months</div>
            <div className="bg-black/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-purple-400 mb-1">96%</div>
              <div className="text-sm text-gray-300">Incident Prevention</div>
              <div className="text-xs text-gray-400 mt-1">396 incidents prevented</div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-300">
                <strong className="text-white">Zero critical incidents</strong> during Black Friday (5.2M transactions/second handled)
              </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-300">
                <strong className="text-white">87% cost reduction</strong> — Operations cost from $127M to $16M annually
              </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-300">
                <strong className="text-white">Team reduced 85 → 12 people</strong> — freed for strategic initiatives, zero layoffs
              </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-300">
                <strong className="text-white">2.8-minute MTTR</strong> — down from 4.7 hours (99% improvement)
              </div>
        {/* Industry Applications */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🌍 Proven Across Industries
          </h3>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="bg-black/20 rounded-lg p-4 text-center hover:bg-black/30 transition-colors">
              <div className="text-2xl mb-2">🏦</div>
              <div className="font-semibold text-white text-sm mb-1">Financial Services</div>
              <div className="text-xs text-gray-400">$410M value, 99.994% uptime</div>
            <div className="bg-black/20 rounded-lg p-4 text-center hover:bg-black/30 transition-colors">
              <div className="text-2xl mb-2">🛒</div>
              <div className="font-semibold text-white text-sm mb-1">E-Commerce</div>
              <div className="text-xs text-gray-400">$287M savings, 3x scale</div>
            <div className="bg-black/20 rounded-lg p-4 text-center hover:bg-black/30 transition-colors">
              <div className="text-2xl mb-2">🏥</div>
              <div className="text-xs text-gray-400">99.99% uptime critical systems</div>
            <div className="bg-black/20 rounded-lg p-4 text-center hover:bg-black/30 transition-colors">
              <div className="text-2xl mb-2">🏭</div>
              <div className="text-xs text-gray-400">Zero production downtime</div>
            <div className="bg-black/20 rounded-lg p-4 text-center hover:bg-black/30 transition-colors">
              <div className="text-2xl mb-2">📡</div>
              <div className="text-xs text-gray-400">Scale without team growth</div>
        {/* Call-to-Action Buttons */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link
            to="/blog/ai-2025-oct-real-time-autonomous-infrastructure-orchestration-revolution"
            className="group bg-gradient-to-br from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex items-center justify-between mb-3">
              <Cpu className="w-8 h-8" />
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="font-bold text-lg mb-2">Read Technical Deep Dive</div>
            <div className="text-sm text-cyan-100">
              18-min read: Complete architecture, ML models, Python code examples, implementation roadmap
            </div>
          </Link>
          <Link
            to="/case-studies/ai-2025-oct-global-financial-services-autonomous-infrastructure-410-million-success"
            className="group bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex items-center justify-between mb-3">
              <Shield className="w-8 h-8" />
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="font-bold text-lg mb-2">View $410M Success Story</div>
            <div className="text-sm text-blue-100">
              Fortune 100 case study: 99.994% uptime, 87% cost reduction, 47x ROI, 12-month journey
            </div>
          </Link>
          <Link
            to="/services/autonomous-infrastructure-orchestration-services"
            className="group bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex items-center justify-between mb-3">
              <Target className="w-8 h-8" />
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="font-bold text-lg mb-2">Explore Services & Pricing</div>
            <div className="text-sm text-purple-100">
              Implementation packages, managed services, ROI projections, success guarantees
            </div>
          </Link>
        </div>
        {/* Free Assessment CTA */}
        <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            🎁 Free 2-Week Infrastructure Readiness Assessment
          </h3>
          <p className="text-lg text-white/90 mb-6 max-w-3xl mx-auto">
            Get a comprehensive evaluation of your infrastructure readiness for autonomous operations. 
            Includes ROI projection, implementation roadmap, and executive presentation. No cost. No obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Request Free Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="text-white text-sm">
              <Clock className="w-4 h-4 inline mr-1" />
              Typical assessment value: $75K • Yours free
            </div>
        {/* Trust Indicators */}
        <div className="mt-10 pt-8 border-t border-white/10 text-center">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm text-gray-400">
            <div>
              <div className="text-2xl font-bold text-white mb-1">12+</div>
              <div>Fortune 500 Deployments</div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">$3.2B</div>
              <div>Total Value Created</div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">99.99%</div>
              <div>Average Uptime Achieved</div>

            <div>
              <div className="text-2xl font-bold text-white mb-1">1.8mo</div>
              <div>Average Payback Period</div>
      </div>
  );
};
export default October2025AutonomousInfrastructureBanner;

</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>