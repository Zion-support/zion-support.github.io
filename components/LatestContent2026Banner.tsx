import { Link } from 'react-router-dom';

export default function LatestContent2026Banner() {
  return (
    <section className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="text-3xl animate-pulse">🚀</span>
            <span className="font-bold text-xl">BREAKTHROUGH 2026:</span>
            <div className="flex flex-wrap gap-3 items-center">
              <Link to="/blog/ai-agent-swarms-enterprise-orchestration-2026" 
                className="underline hover:text-yellow-200 font-bold text-sm bg-white/20 px-3 py-1 rounded-full"
              >
                🐝 AI Agent Swarms: 10,000x Scale
              </Link>
              <span className="hidden md:inline text-white/60">•</span>
              <Link to="/blog/quantum-enhanced-ai-enterprise-breakthrough-2026" 
                className="underline hover:text-yellow-200 font-bold text-sm bg-white/20 px-3 py-1 rounded-full"
              >
                ⚛️ Quantum AI: 1000x Performance
              </Link>
              <span className="hidden md:inline text-white/60">•</span>
              <Link to="/case-studies/ai-agent-swarms-manufacturing-success-2026" 
                className="underline hover:text-yellow-200 text-sm bg-white/20 px-3 py-1 rounded-full"
              >
                $2.5B Manufacturing Success
              </Link>
            </div>
          </div>
          <Link to="/content-hub"
            className="bg-white text-purple-700 hover:bg-yellow-400 hover:text-purple-900 px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all shadow-lg"
          >
            Explore All Content →
          </Link>
        </div>
      </div>
    </section>
  );
}