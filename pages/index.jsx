import dynamic from 'next/dynamic';
import Link from 'next/link';
import Layout from './components/Layout';
const ContentShowcaseBanner2026 = dynamic(() => import('../src/components/ContentShowcaseBanner2026'), { ssr: false });

const Home = () => {
  return (
    <Layout 
      title="Zion Tech Group - Leading Technology Solutions Provider"
      description="Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence."
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <main className="container mx-auto px-4 py-16">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Leading technology solutions provider helping businesses transform their digital presence 
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
              <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Explore Our Services
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
            </div>
            
            <ContentShowcaseBanner2026 />

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-colors">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-semibold mb-4">AI & Machine Learning</h3>
                <p className="text-lg">Custom AI solutions, chatbots, predictive analytics, and machine learning models tailored to your business needs.</p>
                <Link href="/services/ai-services" className="text-blue-200 hover:text-white mt-4 inline-block font-semibold">
                  Learn More →
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-colors">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-2xl font-semibold mb-4">Cloud Solutions</h3>
                <p className="text-lg">Scalable cloud architecture, migration services, and infrastructure design for modern applications and businesses.</p>
                <Link href="/services/it-services" className="text-blue-200 hover:text-white mt-4 inline-block font-semibold">
                  Learn More →
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-colors">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-semibold mb-4">Micro SAAS Solutions</h3>
                <p className="text-lg">Innovative micro SAAS applications including URL shorteners, invoice generators, password managers, and more.</p>
                <Link href="/services/micro-saas" className="text-blue-200 hover:text-white mt-4 inline-block font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Latest Insights Promo */}
            <div className="mt-20 text-left">
              <h2 className="text-3xl font-bold text-white mb-6">Latest insights</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/blog/ai-2026-autonomous-change-management-blueprint" className="block bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-6 border border-white/10">
                  <div className="text-sm text-blue-200 mb-2">Operations • 7 min read</div>
                  <h3 className="text-2xl font-semibold mb-2">Autonomous Change Management</h3>
                  <p className="text-white/80">Blueprint for safe, auditable change pipelines for agentic systems.</p>
                </Link>
                <Link href="/blog/ai-2026-agent-red-teaming-playbook" className="block bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-6 border border-white/10">
                  <div className="text-sm text-blue-200 mb-2">Safety • 6 min read</div>
                  <h3 className="text-2xl font-semibold mb-2">Agent Red Teaming</h3>
                  <p className="text-white/80">Continuously probe for jailbreaks, unsafe tool use, and policy gaps.</p>
                </Link>
                <Link href="/blog/ai-2026-compliance-evidence-automation" className="block bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-6 border border-white/10">
                  <div className="text-sm text-blue-200 mb-2">Governance • 5 min read</div>
                  <h3 className="text-2xl font-semibold mb-2">Compliance Evidence Automation</h3>
                  <p className="text-white/80">Automate policy checks and evidence capture to accelerate audits.</p>
                </Link>
                <Link href="/blog/ai-2026-governed-agent-operations-checklist" className="block bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-6 border border-white/10">
                  <div className="text-sm text-blue-200 mb-2">Operations • 6 min read</div>
                  <h3 className="text-2xl font-semibold mb-2">Governed Agent Operations Checklist</h3>
                  <p className="text-white/80">A pragmatic, audit‑ready checklist for safe, observable agent operations.</p>
                </Link>
                <Link href="/blog/ai-2026-cost-aware-observability-blueprint" className="block bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-6 border border-white/10">
                  <div className="text-sm text-blue-200 mb-2">Observability • 7 min read</div>
                  <h3 className="text-2xl font-semibold mb-2">Cost‑Aware Observability Blueprint</h3>
                  <p className="text-white/80">Unify traces, evals, and spend to stay fast, safe, and on budget.</p>
                </Link>
                <Link href="/blog/ai-2026-enterprise-architecture-modernization" className="block bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-6 border border-white/10">
                  <div className="text-sm text-blue-200 mb-2">Architecture • 8 min read</div>
                  <h3 className="text-2xl font-semibold mb-2">Enterprise Architecture Modernization</h3>
                  <p className="text-white/80">Evolve to AI‑ready, event‑driven platforms with SLOs and guardrails.</p>
                </Link>
                <Link href="/blog/ai-2026-zero-trust-agents" className="block bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-6 border border-white/10">
                  <div className="text-sm text-blue-200 mb-2">Security • 7 min read</div>
                  <h3 className="text-2xl font-semibold mb-2">Zero‑Trust Agents</h3>
                  <p className="text-white/80">Risk‑tiered tools, scoped credentials, and JIT approvals for safety.</p>
                </Link>
                <Link href="/blog/ai-2026-exec-guide-to-agent-slo-scorecards" className="block bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-6 border border-white/10">
                  <div className="text-sm text-blue-200 mb-2">Leadership • 5 min read</div>
                  <h3 className="text-2xl font-semibold mb-2">Executive Guide to Agent SLOs</h3>
                  <p className="text-white/80">Turn evals and traces into executive scorecards that drive decisions.</p>
                </Link>
                <Link href="/blog/ai-2026-agent-platform-readiness-checklist" className="block bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-6 border border-white/10">
                  <div className="text-sm text-blue-200 mb-2">Operations • 6 min read</div>
                  <h3 className="text-2xl font-semibold mb-2">Agent Platform Readiness</h3>
                  <p className="text-white/80">A pragmatic checklist for safe, observable, cost‑aware agent platforms.</p>
                </Link>
                <Link href="/blog/ai-2026-runtime-evidence-bundles" className="block bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-6 border border-white/10">
                  <div className="text-sm text-blue-200 mb-2">Operations • 6 min read</div>
                  <h3 className="text-2xl font-semibold mb-2">Runtime Evidence Bundles</h3>
                  <p className="text-white/80">Bundle evals, traces, policy events, and incidents per release.</p>
                </Link>
                <Link href="/blog/ai-2026-eval-scorecards-in-practice" className="block bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-6 border border-white/10">
                  <div className="text-sm text-blue-200 mb-2">AI Quality • 6 min read</div>
                  <h3 className="text-2xl font-semibold mb-2">Evaluation Scorecards in Practice</h3>
                  <p className="text-white/80">Translate raw evals into executive‑friendly scorecards wired to gates.</p>
                </Link>
                <Link href="/blog/ai-2026-governed-tool-approvals" className="block bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-6 border border-white/10">
                  <div className="text-sm text-blue-200 mb-2">Governance • 5 min read</div>
                  <h3 className="text-2xl font-semibold mb-2">Governed Tool Approvals</h3>
                  <p className="text-white/80">Risk‑tiered adapters, budgets, and just‑in‑time approvals for safety.</p>
                </Link>
                <Link href="/blog/ai-2026-safe-autonomy-in-production" className="block bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-6 border border-white/10">
                  <div className="text-sm text-blue-200 mb-2">Safety • 9 min read</div>
                  <h3 className="text-2xl font-semibold mb-2">Safe Autonomy in Production</h3>
                  <p className="text-white/80">Ship autonomy with guardrails, SLOs, approvals, and audit‑ready evidence.</p>
                </Link>
                <Link href="/blog/ai-2026-agent-observability-scorecards" className="block bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-6 border border-white/10">
                  <div className="text-sm text-blue-200 mb-2">Observability • 7 min read</div>
                  <h3 className="text-2xl font-semibold mb-2">Agent Observability Scorecards</h3>
                  <p className="text-white/80">Turn traces, evals, and policy events into trust signals leaders can act on.</p>
                </Link>
                <Link href="/blog/ai-2026-evidence-hub-in-practice" className="block bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-6 border border-white/10">
                  <div className="text-sm text-blue-200 mb-2">Operations • 8 min read</div>
                  <h3 className="text-2xl font-semibold mb-2">Evidence Hub in Practice</h3>
                  <p className="text-white/80">Unify evals, traces, policy outcomes, and incidents for faster, safer iteration.</p>
                </Link>
                <Link href="/blog/ai-2026-reliable-real-time-agents" className="block bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-6 border border-white/10">
                  <div className="text-sm text-blue-200 mb-2">Performance • 6 min read</div>
                  <h3 className="text-2xl font-semibold mb-2">Reliable Real‑Time Agents</h3>
                  <p className="text-white/80">Streaming UX, speculation, caching, and deterministic fallbacks.</p>
                </Link>
                <Link href="/blog/ai-2026-autonomous-evidence-led-ops" className="block bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-6 border border-white/10">
                  <div className="text-sm text-blue-200 mb-2">Operations • 6 min read</div>
                  <h3 className="text-2xl font-semibold mb-2">Autonomous, Evidence‑Led Ops</h3>
                  <p className="text-white/80">Run agents with auditable traces, eval gates, and runtime guardrails.</p>
                </Link>
              </div>
              <div className="mt-6">
                <Link href="/blog" className="text-blue-200 hover:text-white font-semibold">View all articles →</Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-200 mb-2">150+</div>
                <div className="text-lg">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-200 mb-2">50+</div>
                <div className="text-lg">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-200 mb-2">24/7</div>
                <div className="text-lg">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-200 mb-2">99%</div>
                <div className="text-lg">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Home;