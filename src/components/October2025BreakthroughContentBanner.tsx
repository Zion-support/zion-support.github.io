import { Link } from "react-router-dom";

const October2025BreakthroughContentBanner = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 rounded-xl p-6 mb-8 animate-fade-in shadow-2xl">
      <div className="flex items-center justify-center gap-3 mb-4">

        <span className="text-lg font-bold text-emerald-400">🎉 OCTOBER 3, 2025: NEWEST AI BREAKTHROUGHS</span>

      </div>
      
      <p className="text-white text-lg font-semibold mb-4 text-center">
        ⚡ 2 BRAND NEW GUIDES RELEASED TODAY: Enterprise AI Automation (400%+ efficiency gains, 70% cost reduction) & 
        Quantum-AI Hybrid Systems (1000x processing speed, 99.9% accuracy)!
      </p>
      
      <p className="text-zion-slate-light text-sm mb-6 text-center max-w-4xl mx-auto">
        Master comprehensive enterprise automation frameworks and quantum-AI hybrid implementations that are transforming Fortune 500 companies today. 
        Get battle-tested strategies, implementation roadmaps, and real-world case studies.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
        <Link
          to="/blog/ai-2025-october-breakthrough-enterprise-automation"
          className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors inline-flex items-center justify-center gap-2"
        >

          Read Enterprise Automation Guide
        </Link>
        <Link
          to="/blog/ai-2025-october-quantum-ai-hybrid-systems"
          className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors inline-flex items-center justify-center gap-2"
        >

          Explore Quantum-AI Systems
        </Link>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white/10 rounded-xl p-4">
          <h3 className="text-white font-semibold mb-2 flex items-center">

            Enterprise AI Automation
          </h3>
          <ul className="space-y-1 text-sm text-zion-slate-light">
            <li className="flex items-center">

              <span>400%+ efficiency gains</span>
            </li>
            <li className="flex items-center">

              <span>70% cost reduction</span>
            </li>
            <li className="flex items-center">

              <span>95% faster decision-making</span>
            </li>
            <li className="flex items-center">

              <span>Complete implementation framework</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white/10 rounded-xl p-4">
          <h3 className="text-white font-semibold mb-2 flex items-center">

            Quantum-AI Hybrid Systems
          </h3>
          <ul className="space-y-1 text-sm text-zion-slate-light">
            <li className="flex items-center">

              <span>1000x processing speed</span>
            </li>
            <li className="flex items-center">

              <span>99.9% accuracy improvements</span>
            </li>
            <li className="flex items-center">

              <span>90% cost reduction</span>
            </li>
            <li className="flex items-center">

              <span>Real-world applications</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 justify-center">
        <span className="bg-emerald-100/20 text-emerald-200 px-3 py-1 rounded-full text-xs font-medium border border-emerald-300/20">Enterprise Automation</span>
        <span className="bg-cyan-100/20 text-cyan-200 px-3 py-1 rounded-full text-xs font-medium border border-cyan-300/20">Quantum-AI Hybrid</span>
        <span className="bg-purple-100/20 text-purple-200 px-3 py-1 rounded-full text-xs font-medium border border-purple-300/20">1000x Speed</span>
        <span className="bg-blue-100/20 text-blue-200 px-3 py-1 rounded-full text-xs font-medium border border-blue-300/20">400% ROI</span>
        <span className="bg-green-100/20 text-green-200 px-3 py-1 rounded-full text-xs font-medium border border-green-300/20">Fortune 500 Proven</span>
        <span className="bg-orange-100/20 text-orange-200 px-3 py-1 rounded-full text-xs font-medium border border-orange-300/20">Implementation Ready</span>
      </div>
    </div>
  );
};

export default React.memo(October2025BreakthroughContentBanner);