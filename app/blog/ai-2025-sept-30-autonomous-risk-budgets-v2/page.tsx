// Using React 17+ automatic runtime; no import needed

export const metadata = {
  title: 'Autonomous Risk Budgets V2 (2025-09-30) | Zion Tech Group',
  description:
    'Next-generation operational risk budgets for autonomous AI systems. Practical scorecards, guardrails, and playbooks to reduce incidents by 80% and costs by 60%.',
  openGraph: {
    title: 'Autonomous Risk Budgets V2 (2025-09-30)',
    description:
      'Practical scorecards, guardrails, and playbooks to reduce incidents by 80% and costs by 60%.',
    type: 'article',
    url: 'https://ziontechgroup.com/blog/ai-2025-sept-30-autonomous-risk-budgets-v2',
    images: [
      { url: '/og-autonomous-risk-budgets-v2.jpg', width: 1200, height: 630, alt: 'Autonomous Risk Budgets V2' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autonomous Risk Budgets V2 (2025-09-30)',
    description:
      'Practical scorecards, guardrails, and playbooks to reduce incidents by 80% and costs by 60%.',
    images: ['/og-autonomous-risk-budgets-v2.jpg'],
  },
};

export default function AutonomousRiskBudgetsV2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-500/20 border border-indigo-500/30 mb-8">
              <span className="text-indigo-300 font-bold text-sm tracking-wider uppercase">New • Sep 30, 2025</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-300 via-sky-300 to-cyan-300 bg-clip-text text-transparent leading-tight">
              Autonomous Risk Budgets V2
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-10 font-semibold">Operational guardrails that scale with autonomy</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#playbook" className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all">View Playbook</a>
              <a href="/contact" className="border-2 border-indigo-400 text-indigo-300 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all">Get a Risk Audit</a>
            </div>
          </div>
        </div>
      </header>

      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <section className="mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Risk Budgets V2</h2>
              <div className="prose prose-lg text-gray-700">
                <p>
                  As enterprises adopt autonomous agents across operations, the cost of small mistakes compounds.
                  Risk Budgets V2 introduces dynamic, context-aware guardrails with live scorecards that enforce
                  safe behavior by design.
                </p>
              </div>
            </section>

            <section id="playbook" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Playbook</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {["Define risk classes & impact models","Encode budget policies as code","Attach scorecards to workflows","Automated rollbacks & kill-switches"].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="text-2xl mb-2">✅</div>
                    <div className="font-semibold text-gray-900">{item}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Outcomes</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { k: '80%', v: 'Incident Reduction' },
                  { k: '60%', v: 'Lower Ops Cost' },
                  { k: '99.9%', v: 'Uptime Maintained' },
                ].map((s, i) => (
                  <div key={i} className="bg-gradient-to-br from-indigo-50 to-sky-50 rounded-xl p-6 border border-indigo-100 text-center">
                    <div className="text-3xl font-extrabold text-indigo-600">{s.k}</div>
                    <div className="text-gray-700">{s.v}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-indigo-600 to-sky-600 rounded-2xl p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Bring Risk Budgets V2 to Your Org</h2>
              <p className="mb-8 opacity-95">We implement in 6 weeks with measurable KPIs.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13024640950" className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all">📞 Call +1 302 464 0950</a>
                <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-indigo-700 transition-all">Book a Workshop</a>
              </div>
            </section>

            <section className="mt-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Related Reads</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/blog/ai-operational-trust-scorecards-2026" className="group">
                  <div className="bg-white rounded-xl p-6 border hover:shadow-xl transition-all">
                    <div className="text-3xl mb-2">📊</div>
                    <div className="font-semibold group-hover:text-indigo-600">Operational Trust Scorecards</div>
                  </div>
                </a>
                <a href="/blog/ai-2027-operational-risk-budgets" className="group">
                  <div className="bg-white rounded-xl p-6 border hover:shadow-xl transition-all">
                    <div className="text-3xl mb-2">🛡️</div>
                    <div className="font-semibold group-hover:text-indigo-600">Risk Budgets 2027 Playbook</div>
                  </div>
                </a>
                <a href="/blog/ai-2026-reliable-genai-platform" className="group">
                  <div className="bg-white rounded-xl p-6 border hover:shadow-xl transition-all">
                    <div className="text-3xl mb-2">⚙️</div>
                    <div className="font-semibold group-hover:text-indigo-600">Reliable GenAI Platform</div>
                  </div>
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

