export default function October2025NewFreshContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-blue-900/40 backdrop-blur-sm border-y border-purple-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/30 to-indigo-500/30 border border-purple-500/40 mb-6 animate-pulse">
            <span className="text-purple-300 font-bold text-xl tracking-wider uppercase">
              🎉 JUST PUBLISHED: October 1, 2025 — Fresh Enterprise AI Content!
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            Latest AI Innovations & Enterprise Success Stories
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
            Discover cutting-edge AI strategies that are transforming Fortune 500 enterprises: Zero-Trust Security 
            ($47M savings), Multi-Cloud Orchestration (68% cost reduction), and Conversational AI (87% autonomous resolution).
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Zero-Trust Security */}
          <div className="bg-gradient-to-br from-red-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl p-8 border border-red-500/30 hover:border-red-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 transform hover:-translate-y-2">
            <div className="text-5xl mb-6">🔒</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              AI-Powered Zero-Trust Security Revolution
            </h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Autonomous threat prevention with 99.7% accuracy, 0.28s response time, and $47M annual savings. 
              Fortune 500 bank prevents 127K+ advanced threats.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-red-500/20 px-3 py-1 rounded-full text-red-300 text-xs">Zero-Trust</span>
              <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-xs">AI Security</span>
              <span className="bg-orange-500/20 px-3 py-1 rounded-full text-orange-300 text-xs">$47M Saved</span>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white/5 rounded-lg p-3 text-center">
                <div className="text-2xl font-extrabold text-red-400">99.7%</div>
                <div className="text-xs text-gray-400">Prevention Rate</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3 text-center">
                <div className="text-2xl font-extrabold text-purple-400">94%</div>
                <div className="text-xs text-gray-400">Incident Reduction</div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <a 
                href="/blog/ai-2025-october-zero-trust-security-revolution"
                className="block bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-500/50 text-center text-sm"
              >
                Read Technical Guide →
              </a>
              <a 
                href="/case-studies/financial-services-zero-trust-success-2025"
                className="block border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center text-sm"
              >
                $47M Case Study →
              </a>
            </div>
          </div>

          {/* Multi-Cloud Orchestration */}
          <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 transform hover:-translate-y-2">
            <div className="text-5xl mb-6">☁️</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Multi-Cloud AI Orchestration Mastery
            </h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Unified intelligence platform across AWS, Azure, and GCP. E-commerce unicorn achieves 68% cost 
              reduction and 3.7x performance improvement.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-indigo-300 text-xs">Multi-Cloud</span>
              <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-xs">AI Orchestration</span>
              <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300 text-xs">68% Cost Cut</span>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white/5 rounded-lg p-3 text-center">
                <div className="text-2xl font-extrabold text-indigo-400">68%</div>
                <div className="text-xs text-gray-400">Cost Reduction</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3 text-center">
                <div className="text-2xl font-extrabold text-blue-400">3.7x</div>
                <div className="text-xs text-gray-400">Performance</div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <a 
                href="/blog/ai-2025-october-multi-cloud-orchestration-mastery"
                className="block bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 text-center text-sm"
              >
                Read Architecture Guide →
              </a>
              <a 
                href="/contact"
                className="block border-2 border-blue-500 text-blue-300 hover:bg-blue-500 hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center text-sm"
              >
                Get Assessment →
              </a>
            </div>
          </div>

          {/* Conversational AI */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2">
            <div className="text-5xl mb-6">🗣️</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Conversational AI Enterprise Revolution
            </h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Human-level customer experience with GPT-4. Retailer achieves 87% autonomous resolution, 
              94% satisfaction, and $47M annual savings.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-xs">Conversational AI</span>
              <span className="bg-pink-500/20 px-3 py-1 rounded-full text-pink-300 text-xs">GPT-4</span>
              <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300 text-xs">87% Auto-Resolve</span>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white/5 rounded-lg p-3 text-center">
                <div className="text-2xl font-extrabold text-purple-400">87%</div>
                <div className="text-xs text-gray-400">Auto Resolution</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3 text-center">
                <div className="text-2xl font-extrabold text-pink-400">94%</div>
                <div className="text-xs text-gray-400">Satisfaction</div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <a 
                href="/blog/ai-2025-october-conversational-ai-enterprise-revolution"
                className="block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 text-center text-sm"
              >
                Read Implementation Guide →
              </a>
              <a 
                href="/contact"
                className="block border-2 border-pink-500 text-pink-300 hover:bg-pink-500 hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center text-sm"
              >
                Get CX Assessment →
              </a>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Combined Enterprise Impact: $141M+ in Value Creation
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
              <div className="text-3xl font-extrabold text-green-400 mb-2">$141M+</div>
              <div className="text-sm text-gray-300">Total Value Created</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
              <div className="text-3xl font-extrabold text-purple-400 mb-2">99.7%</div>
              <div className="text-sm text-gray-300">Threat Prevention</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
              <div className="text-3xl font-extrabold text-blue-400 mb-2">68%</div>
              <div className="text-sm text-gray-300">Cloud Cost Savings</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
              <div className="text-3xl font-extrabold text-pink-400 mb-2">87%</div>
              <div className="text-sm text-gray-300">AI Autonomous Rate</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              These proven strategies are helping Fortune 500 enterprises transform operations, 
              reduce costs, and gain competitive advantage through practical AI deployment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Get Free Consultation →
              </a>
              <a 
                href="/blog"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Explore All Insights →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
