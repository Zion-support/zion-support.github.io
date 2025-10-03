import { Link } from 'react-router-dom';

export default function October2025TechBreakthroughsBanner() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 py-16 px-6 border-y border-indigo-500/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-semibold">
              🚀 OCTOBER 2025 — LATEST TECHNICAL BREAKTHROUGHS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Cutting-Edge AI Technologies Now Available
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Explore the latest advances in MLOps, Multimodal AI, and Edge Computing that are transforming enterprise operations
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* MLOps Card */}
          <Link 
            to="/blog/ai-2025-october-advanced-mlops-automation" 
            className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-xl p-6 hover:border-cyan-400/60 transition-all hover:shadow-xl hover:shadow-cyan-500/20"
          >
            <div className="mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold mb-3">
                ML
              </div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                Advanced MLOps Automation
              </h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                Zero-touch ML pipeline management achieving 95% faster iteration and 40% cost reduction
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-cyan-400">95%</span>
                <span className="text-white/60">Faster</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-blue-400">99.9%</span>
                <span className="text-white/60">Reliability</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-purple-400">24/7</span>
                <span className="text-white/60">Autonomous</span>
              </div>
            </div>
            <div className="mt-4 text-cyan-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
              Read More <span>→</span>
            </div>
          </Link>

          {/* Multimodal AI Card */}
          <Link 
            to="/blog/ai-2025-october-multimodal-ai-systems" 
            className="group bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-violet-400/30 rounded-xl p-6 hover:border-violet-400/60 transition-all hover:shadow-xl hover:shadow-violet-500/20"
          >
            <div className="mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-fuchsia-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold mb-3">
                MM
              </div>
              <h3 className="text-2xl font-bold text-violet-400 mb-2 group-hover:text-violet-300 transition-colors">
                Multimodal AI Systems
              </h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                Unified intelligence across vision, language & audio delivering 85% better accuracy
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-violet-400">85%</span>
                <span className="text-white/60">Accuracy</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-purple-400">$127B</span>
                <span className="text-white/60">Market '28</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-fuchsia-400">5.2x</span>
                <span className="text-white/60">ROI</span>
              </div>
            </div>
            <div className="mt-4 text-violet-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
              Read More <span>→</span>
            </div>
          </Link>

          {/* Edge AI Card */}
          <Link 
            to="/blog/ai-2025-october-edge-ai-deployment" 
            className="group bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-400/30 rounded-xl p-6 hover:border-emerald-400/60 transition-all hover:shadow-xl hover:shadow-emerald-500/20"
          >
            <div className="mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold mb-3">
                EDGE
              </div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors">
                Edge AI Deployment
              </h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                Ultra-low latency intelligence at scale with 10B+ daily inferences at the edge
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-emerald-400">&lt;1ms</span>
                <span className="text-white/60">Latency</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-teal-400">99.99%</span>
                <span className="text-white/60">Uptime</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-cyan-400">10B+</span>
                <span className="text-white/60">Inferences</span>
              </div>
            </div>
            <div className="mt-4 text-emerald-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
              Read More <span>→</span>
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-400/30 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-3">
            Ready to Implement These Technologies?
          </h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Our AI experts can help you evaluate and deploy these cutting-edge solutions in your enterprise
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all shadow-lg hover:shadow-cyan-500/50"
            >
              Schedule Consultation
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
