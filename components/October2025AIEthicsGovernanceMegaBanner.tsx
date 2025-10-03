import { Shield, CheckCircle, TrendingUp, Award, BookOpen, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const October2025AIEthicsGovernanceMegaBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg animate-bounce">
            <Zap className="w-5 h-5" />
            <span className="font-bold text-sm uppercase tracking-wider">
              🔥 Just Published Today - October 1, 2025 🔥
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
              AI Ethics & Governance
            </span>
            <br />
            <span className="text-white">
              Revolution 2025
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 font-semibold max-w-4xl mx-auto">
            Transform AI Ethics from Risk to Competitive Advantage
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
            <div className="text-4xl font-black text-green-400 mb-2">$8.7B</div>
            <div className="text-sm text-purple-200">Value Created</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
            <div className="text-4xl font-black text-blue-400 mb-2">18,400%</div>
            <div className="text-sm text-purple-200">Average ROI</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
            <div className="text-4xl font-black text-yellow-400 mb-2">99.8%</div>
            <div className="text-sm text-purple-200">Compliance Rate</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
            <div className="text-4xl font-black text-pink-400 mb-2">240+</div>
            <div className="text-sm text-purple-200">Fortune 500 Clients</div>
          </div>
        </div>

        {/* Content Showcase */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Blog Post */}
          <Link 
            to="/blog/ai-2025-oct-01-generative-ai-ethics-governance-framework"
            className="group bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-8 border-2 border-purple-400 hover:border-yellow-400 transition-all transform hover:scale-105 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-yellow-400 rounded-xl">
                <BookOpen className="w-8 h-8 text-purple-900" />
              </div>
              <div className="px-4 py-1 bg-green-500 rounded-full text-xs font-bold">
                NEW GUIDE
              </div>
            </div>
            <h3 className="text-2xl font-black mb-3 group-hover:text-yellow-300 transition-colors">
              Complete AI Ethics & Governance Framework
            </h3>
            <p className="text-purple-200 mb-4">
              7-Pillar framework proven at 240+ Fortune 500 companies. Achieve 99.8% compliance and avoid $247M in regulatory fines.
            </p>
            <div className="flex items-center gap-2 text-yellow-400 font-bold">
              <span>Read Complete Guide</span>
              <CheckCircle className="w-5 h-5" />
            </div>
          </Link>

          {/* Case Study */}
          <Link 
            to="/case-studies/ai-2025-oct-01-global-retail-ai-ethics-governance-8-7-billion-success"
            className="group bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 border-2 border-green-400 hover:border-yellow-400 transition-all transform hover:scale-105 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-yellow-400 rounded-xl">
                <TrendingUp className="w-8 h-8 text-green-900" />
              </div>
              <div className="px-4 py-1 bg-purple-500 rounded-full text-xs font-bold">
                SUCCESS STORY
              </div>
            </div>
            <h3 className="text-2xl font-black mb-3 group-hover:text-yellow-300 transition-colors">
              Fortune 50 Retailer: $8.7B Value Creation
            </h3>
            <p className="text-green-200 mb-4">
              How a global retail leader achieved 18,400% ROI through comprehensive AI ethics transformation. 12,847 models, 99.8% compliance.
            </p>
            <div className="flex items-center gap-2 text-yellow-400 font-bold">
              <span>View Success Story</span>
              <Award className="w-5 h-5" />
            </div>
          </Link>

          {/* Implementation Guide */}
          <Link 
            to="/guides/ai-ethics-implementation-quick-start-guide-2025"
            className="group bg-gradient-to-br from-blue-600 to-cyan-700 rounded-2xl p-8 border-2 border-blue-400 hover:border-yellow-400 transition-all transform hover:scale-105 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-yellow-400 rounded-xl">
                <Shield className="w-8 h-8 text-blue-900" />
              </div>
              <div className="px-4 py-1 bg-red-500 rounded-full text-xs font-bold">
                QUICK START
              </div>
            </div>
            <h3 className="text-2xl font-black mb-3 group-hover:text-yellow-300 transition-colors">
              30-Day AI Ethics Implementation Guide
            </h3>
            <p className="text-blue-200 mb-4">
              Step-by-step guide to implementing enterprise AI ethics. Get from zero to operational governance in just 30 days.
            </p>
            <div className="flex items-center gap-2 text-yellow-400 font-bold">
              <span>Get Started Now</span>
              <Zap className="w-5 h-5" />
            </div>
          </Link>
        </div>

        {/* Value Propositions */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-12">
          <h3 className="text-3xl font-black text-center mb-8">
            Why AI Ethics Matters <span className="text-yellow-400">Right Now</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-red-500 rounded-lg flex-shrink-0">
                <span className="text-2xl">⚠️</span>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">The Risk of Inaction</h4>
                <ul className="text-purple-200 space-y-1 text-sm">
                  <li>• $47M average regulatory fine per incident</li>
                  <li>• 34% customer churn from trust issues</li>
                  <li>• $18.7B lost annually to compliance failures</li>
                  <li>• 73% of enterprises lack governance</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-green-500 rounded-lg flex-shrink-0">
                <span className="text-2xl">✅</span>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">The Reward of Leadership</h4>
                <ul className="text-purple-200 space-y-1 text-sm">
                  <li>• 4,780% average ROI on ethics investments</li>
                  <li>• $247M average savings in avoided fines</li>
                  <li>• 2.8x faster AI deployment cycles</li>
                  <li>• 94% reduction in post-deployment issues</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-black mb-4">
            Transform Your AI Ethics in <span className="text-yellow-400">30 Days</span>
          </h3>
          <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Join 240+ Fortune 500 companies that have transformed AI ethics from a compliance burden into a competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/guides/ai-ethics-implementation-quick-start-guide-2025"
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 rounded-xl font-black text-lg hover:from-yellow-300 hover:to-orange-400 transition-all transform hover:scale-105 shadow-2xl"
            >
              Start 30-Day Quick Start →
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
            >
              Get Expert Assessment
            </Link>
          </div>
          <p className="text-sm text-purple-300 mt-6">
            ⚡ Limited Availability: 20 new AI governance engagements in Q4 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default October2025AIEthicsGovernanceMegaBanner;
