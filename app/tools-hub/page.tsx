import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Tools Hub | Zion Tech Group',
  description:
    'Browse all free tools from Zion Tech Group — AI tools, calculators, security scanners, comparison utilities, and developer utilities. No signup required.',
  alternates: { canonical: '/tools-hub' },
};

// ---------------------------------------------------------------------------
// Tool definitions — organized by category per the Tools Hub spec
// ---------------------------------------------------------------------------
const TOOLS_BY_CATEGORY = [
  {
    name: 'AI Tools',
    icon: '🤖',
    tools: [
      {
        id: 'ai-service-router',
        title: 'AI Service Router',
        desc: 'Route AI service requests to the right provider based on intent, cost, and capability.',
        href: '/tools/ai-service-router',
        icon: '🧭',
      },
      {
        id: 'ai-quick-audit',
        title: 'AI Quick Audit',
        desc: '8-question, 2-minute readiness check with a maturity score and recommended next steps.',
        href: '/tools/ai-quick-audit',
        icon: '🧭',
      },
    ],
  },
  {
    name: 'Calculators',
    icon: '📐',
    tools: [
      {
        id: 'roi-calculator',
        title: 'ROI Calculator',
        desc: 'Estimate payback period, monthly return, and year-1 net gain for AI & IT investments.',
        href: '/tools/roi-calculator',
        icon: '📈',
      },
      {
        id: 'pricing-calculator',
        title: 'Pricing Calculator',
        desc: 'Estimate project pricing and budget ranges across service categories.',
        href: '/pricing',
        icon: '💰',
        note: 'Redirects to Pricing page',
      },
    ],
  },
  {
    name: 'Security Tools',
    icon: '🔒',
    tools: [
      {
        id: 'ssl-checker',
        title: 'SSL Checker',
        desc: 'Free SSL/TLS certificate checker powered by SSL Labs — grade, expiry, protocols, and vulnerabilities.',
        href: '/tools/ssl-checker',
        icon: '🔒',
      },
      {
        id: 'port-scanner',
        title: 'Port Scanner',
        desc: 'Check 20 common service ports on any hostname or IP. Runs in your browser — no download needed.',
        href: '/tools/port-scanner',
        icon: '🔍',
      },
      {
        id: 'phishing-analyzer',
        title: 'Phishing Analyzer',
        desc: 'Paste email content to detect urgency tactics, credential harvesting, impersonation, and suspicious URLs.',
        href: '/tools/phishing-analyzer',
        icon: '🎣',
      },
    ],
  },
  {
    name: 'Comparison Tools',
    icon: '⚖️',
    tools: [
      {
        id: 'service-comparison',
        title: 'Service Comparison',
        desc: 'Compare features, pricing, benefits, and timelines across 400+ services. Deep-compare up to 3 side by side.',
        href: '/tools/service-comparison',
        icon: '⚖️',
      },
      {
        id: 'service-recommender',
        title: 'Service Recommender',
        desc: 'Answer 3 quick questions and get matched to the right AI, IT, or Cloud solution from our catalog.',
        href: '/tools/service-recommender',
        icon: '🎯',
      },
    ],
  },
  {
    name: 'Utilities',
    icon: '🛠️',
    tools: [
      {
        id: 'json-formatter',
        title: 'JSON Formatter',
        desc: 'Format, validate, and prettify JSON with syntax highlighting — runs entirely in your browser.',
        href: '/tools/json-formatter',
        icon: '📋',
      },
      {
        id: 'css-gradient-generator',
        title: 'CSS Gradient Generator',
        desc: 'Visual CSS gradient builder with live preview — copy the code when you’re happy.',
        href: '/tools/css-gradient-generator',
        icon: '🌈',
      },
      {
        id: 'track-engineer-fit',
        title: 'Track Engineer Fit',
        desc: 'AI-powered dashboard comparing candidate skills, role requirements, culture fit, and placement confidence.',
        href: '/tools/track-engineer-fit',
        icon: '👤',
      },
    ],
  },
] as const;

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function ToolsHubPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-4 py-20 text-center sm:px-6">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-300 mb-6">
            <span className="inline-block h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
            All Free Tools — One Place
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            🧰 Free Tools Hub
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-6">
            Every free tool from Zion Tech Group, organized by what you’re
            trying to do. No sign-up, no data stored — just open a tool and go.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              12 tools
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-purple-400" />
              5 categories
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
              100% free
            </span>
          </div>
        </div>

        {/* subtle bg decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
      </section>

      {/* ── Tool grid ────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-24 space-y-12">
        {TOOLS_BY_CATEGORY.map(({ name, icon, tools }) => (
          <section key={name}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{icon}</span>
              <h2 className="text-xl font-semibold text-white tracking-tight">
                {name}
              </h2>
              <span className="ml-auto text-xs text-slate-500">
                {tools.length} tool{tools.length !== 1 ? 's' : ''}
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* ── Submit a Tool Request CTA ─────────────────────────────────── */}
      <section className="relative border-t border-slate-800 pt-20 pb-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-5xl mb-4">💡</span>
          <h2 className="text-3xl font-bold text-white mb-3">
            Missing a tool you need?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Tell us what tool you’d like to see in the hub — we read every
            request and build the most-upvoted ones.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:tools@ziontechgroup.com?subject=Tool Request&body=Hi, I'd like to request a new free tool:%0A%0ATool name:%0A%0ADescription:%0A%0AUrgency/Use case:"
              className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-2 whitespace-nowrap"
            >
              ✏️ Submit a Tool Request
            </a>

            <Link
              href="/contact"
              className="btn-secondary text-lg px-10 py-4 inline-flex items-center gap-2 whitespace-nowrap"
            >
              💬 Talk to Us
            </Link>
          </div>

          <p className="text-slate-500 text-xs mt-6">
            Or email{' '}
            <a
              href="mailto:tools@ziontechgroup.com"
              className="text-purple-400 hover:underline"
            >
              tools@ziontechgroup.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

// ---------------------------------------------------------------------------
// ToolCard component
// ---------------------------------------------------------------------------
function ToolCard({
  tool,
}: {
  tool: (typeof TOOLS_BY_CATEGORY)[number]['tools'][number];
}) {
  const ExternalBadge =
    tool.href.startsWith('http') ? (
      <span className="inline-flex items-center gap-1 text-xs text-slate-500 ml-2">
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
        external
      </span>
    ) : null;

  return (
    <Link
      href={tool.href}
      className="group block rounded-xl border border-slate-700/60 bg-slate-800/40 p-5 transition hover:border-purple-500/40 hover:bg-slate-800/60 hover:shadow-lg hover:shadow-purple-500/5"
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <span className="text-3xl shrink-0 mt-0.5">{tool.icon}</span>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-white font-semibold text-base group-hover:text-purple-300 transition-colors truncate">
              {tool.title}
            </h3>
            {ExternalBadge}
          </div>

          <p className="text-slate-400 text-sm mt-1.5 leading-relaxed">
            {tool.desc}
          </p>

          {tool.note && (
            <p className="text-amber-400/80 text-xs mt-2 flex items-center gap-1">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
              {tool.note}
            </p>
          )}

          <div className="mt-4 flex items-center gap-2 text-sm">
            <span className="text-purple-400 group-hover:text-purple-300 transition-colors font-medium">
              Launch tool
            </span>
            <svg
              className="w-4 h-4 text-purple-400 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
