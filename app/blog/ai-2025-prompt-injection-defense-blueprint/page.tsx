// @ts-nocheck

export const metadata = {
  title: 'Prompt Injection Defense 2025: Enterprise Blueprint for Safe GenAI',
  description:
    'Practical, enterprise-ready blueprint to defend against prompt injection with layered policies, model hardening, and continuous red teaming.',
  openGraph: {
    title: 'Prompt Injection Defense 2025',
    description:
      'Layered defenses for GenAI safety: input validation, context isolation, policy checks, and continuous evals.',
    type: 'article',
    publishedTime: '2025-09-30T00:00:00Z',
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white">
      <main className="container mx-auto px-6 py-12">
        <nav className="mb-8">
          <a href="/blog" className="text-blue-300 hover:text-blue-200 transition-colors">
            ← Back to Blog
          </a>
        </nav>

        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-blue-400/20 text-blue-300 text-sm rounded-full border border-blue-400/30">
                AI Safety & Governance
              </span>
              <span className="text-white/60 text-sm">September 30, 2025</span>
              <span className="text-white/60 text-sm">•</span>
              <span className="text-white/60 text-sm">14 min read</span>
            </div>

            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Prompt Injection Defense 2025: Enterprise Blueprint for Safe GenAI
            </h1>
            <p className="text-xl text-white/80">
              Defend GenAI systems against prompt injection with layered controls: policy gates, context
              isolation, output validators, and continuous red teaming. Ship reliable autonomy with
              measurable safety.
            </p>
          </header>

          <div className="prose prose-invert prose-lg max-w-none space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-6 text-blue-300">Threat Model: How Injection Bypasses Controls</h2>
              <ul className="space-y-3 text-white/80">
                <li>• Indirect prompt injection via retrieved or tool-provided context</li>
                <li>• Output hijacking with tool call manipulation and instruction override</li>
                <li>• Training data leakage prompts and jailbreak patterns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Layered Defense Architecture</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-200">Input & Retrieval Controls</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Schema validation and scope restriction</li>
                    <li>• Source allowlists and signed context</li>
                    <li>• Untrusted context demotion and chunk-level policies</li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3 text-cyan-200">Generation & Output Validation</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Policy prompts with must-cite and tool-usage contracts</li>
                    <li>• Structured outputs + JSON schema validation</li>
                    <li>• Safety classifiers and adversarial prompt filters</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-indigo-300">Continuous Red Teaming & Evals</h2>
              <ul className="space-y-2 text-white/80">
                <li>• Curate jailbreak corpora and prompt-injection patterns</li>
                <li>• Automate regressions with policy scorecards and SLAs</li>
                <li>• Track incident postmortems and close the loop with datasets</li>
              </ul>
            </section>

            <section className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4 text-center">Deploy Safely, Move Faster</h2>
              <p className="text-center text-white/80 mb-8 text-lg">
                Our team implements enterprise AI safety programs—from policy prompts and validators to
                live red teaming and monitoring—so you ship fast without surprises.
              </p>
              <div className="flex justify-center gap-4">
                <a href="/contact" className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg">
                  Talk to an Expert
                </a>
                <a href="/case-studies" className="border-2 border-cyan-500 text-cyan-300 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300">
                  View Case Studies
                </a>
              </div>
            </section>
          </div>

          <footer className="mt-16 pt-8 border-t border-white/20">
            <div className="flex items-center justify-between">
              <div className="text-white/60 text-sm">Written by Zion Tech Group Security Engineering</div>
              <div className="flex gap-4">
                <a href="/blog" className="text-blue-300 hover:text-blue-200 transition-colors">← Back to Blog</a>
                <a href="/contact" className="text-cyan-300 hover:text-cyan-200 transition-colors">Get in Touch</a>
              </div>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
}

