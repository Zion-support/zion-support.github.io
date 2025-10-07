import ArrowRight from 'next/link';

export default function AI2026InnovationShowcaseBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Innovation Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(139,92,246,0.3),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.3),transparent_50%)]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <span className="text-3xl animate-bounce">🚀</span>
            <span className="font-bold text-lg">AI 2026 INNOVATION SHOWCASE</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            The Future of AI
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
              {' '}Innovation is Now
            </span>
          </h2>
          
          <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed mb-8">
            Experience groundbreaking AI innovations that are reshaping industries and creating 
            unprecedented opportunities. From autonomous systems to quantum-enhanced intelligence.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-violet-400">🧠</span>
              <span>AGI Development</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-purple-400">⚛️</span>
              <span>Quantum AI</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-indigo-400">🤖</span>
              <span>Autonomous Systems</span>
            </div>
          </div>
        </div>

        {/* Innovation Categories */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Core Innovations */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-violet-400/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">🧠</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Artificial General Intelligence</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Breakthrough AGI systems that can learn, reason, and adapt across any domain. 
                    The first commercially available AGI platform for enterprise applications.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-white/5 rounded-lg p-3">
                  <div className="text-xl font-bold text-violet-400">2026</div>
                  <div className="text-xs text-gray-400">Launch Year</div>
                </div>
                <div className="text-center bg-white/5 rounded-lg p-3">
                  <div className="text-xl font-bold text-purple-400">$2M</div>
                  <div className="text-xs text-gray-400">Annual Value</div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">⚛️</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Quantum-Enhanced AI</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Quantum computing integrated with AI for exponential problem-solving capabilities. 
                    Solve optimization problems 1 billion times faster than classical systems.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-white/5 rounded-lg p-3">
                  <div className="text-xl font-bold text-purple-400">1Bx</div>
                  <div className="text-xs text-gray-400">Speed Boost</div>
                </div>
                <div className="text-center bg-white/5 rounded-lg p-3">
                  <div className="text-xl font-bold text-pink-400">∞</div>
                  <div className="text-xs text-gray-400">Possibilities</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Emerging Technologies */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-indigo-400/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Autonomous Enterprise Systems</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Fully autonomous AI systems that manage entire business operations without human intervention. 
                    Self-healing, self-optimizing, and self-evolving enterprise infrastructure.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-white/5 rounded-lg p-3">
                  <div className="text-xl font-bold text-indigo-400">100%</div>
                  <div className="text-xs text-gray-400">Autonomous</div>
                </div>
                <div className="text-center bg-white/5 rounded-lg p-3">
                  <div className="text-xl font-bold text-blue-400">24/7</div>
                  <div className="text-xs text-gray-400">Operation</div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-pink-400/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">🌟</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Multimodal AI Integration</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Seamlessly integrate text, voice, image, and video processing in a single AI system. 
                    Revolutionary human-AI interaction capabilities for next-generation applications.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-white/5 rounded-lg p-3">
                  <div className="text-xl font-bold text-pink-400">5</div>
                  <div className="text-xs text-gray-400">Modalities</div>
                </div>
                <div className="text-center bg-white/5 rounded-lg p-3">
                  <div className="text-xl font-bold text-rose-400">99%</div>
                  <div className="text-xs text-gray-400">Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Timeline */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Innovation Timeline 2026</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">Q1</span>
              </div>
              <h4 className="font-bold mb-2">AGI Beta Launch</h4>
              <p className="text-sm text-gray-400">Limited enterprise access</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">Q2</span>
              </div>
              <h4 className="font-bold mb-2">Quantum AI Integration</h4>
              <p className="text-sm text-gray-400">First quantum-enhanced solutions</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">Q3</span>
              </div>
              <h4 className="font-bold mb-2">Autonomous Systems</h4>
              <p className="text-sm text-gray-400">Full enterprise deployment</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">Q4</span>
              </div>
              <h4 className="font-bold mb-2">Multimodal AI</h4>
              <p className="text-sm text-gray-400">Complete integration platform</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <ArrowRight
              href="/services/ai-innovation-2026"
              className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:from-violet-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
            >
              Access Innovation 2026
            </ArrowRight>
            <ArrowRight
              href="/blog/ai-innovation-showcase"
              className="border-2 border-white/30 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-violet-900 transition-all duration-300"
            >
              Explore Innovations
            </ArrowRight>
          </div>
          
          <div className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto">
            <p className="text-lg font-semibold mb-2">Be the first to experience the future</p>
            <p className="text-gray-300 text-sm">
              Join our exclusive innovation program and get early access to breakthrough AI technologies. 
              Limited to 100 enterprise clients in 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}