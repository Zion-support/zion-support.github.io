import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zion Tech Tools — Free Developer Utilities & AI Tools',
  description: 'Explore Zion Tech Group\'s free tools: ROI Calculator, Service Comparison, AI Service Router, Health Check, SSL Checker, Port Scanner, JSON Formatter, CSS Gradient Generator, and more.',
};

// Comprehensive tool catalog extracted from TOOL_LINKS and tool directories
const tools = [
  // ── Core Utility Tools ──
  {
    id: 'service-comparison',
    icon: '⚖️',
    title: 'Service Comparison',
    desc: 'Compare features, pricing, benefits, and timelines across 14,200+ services. Pick up to 3 for side-by-side deep comparison.',
    category: 'Business',
    href: '/tools/service-comparison',
  },
  {
    id: 'roi-calculator',
    icon: '📈',
    title: 'ROI Calculator',
    desc: 'Estimate business value of AI & IT services. Adjust monthly budget to see payback period, monthly return, and year-1 net gain.',
    category: 'Business',
    href: '/tools/roi-calculator',
  },
  {
    id: 'service-recommender',
    icon: '🎯',
    title: 'Service Recommender',
    desc: 'Get personalized AI & IT service recommendations based on your business needs and industry.',
    category: 'Business',
    href: '/tools/service-recommender',
  },

  // ── Security & Network Tools ──
  {
    id: 'health-check',
    icon: '🏥',
    title: 'Health Check',
    desc: 'Comprehensive website health monitoring: uptime, performance, SSL validity, and security vulnerabilities.',
    category: 'Security',
    href: '/tools/health-check',
  },
  {
    id: 'ssl-checker',
    icon: '🔒',
    title: 'SSL Checker',
    desc: 'Verify SSL certificate installation, expiration dates, chain of trust, and configuration issues.',
    category: 'Security',
    href: '/tools/ssl-checker',
  },
  {
    id: 'port-scanner',
    icon: '🌐',
    title: 'Port Scanner',
    desc: 'Scan TCP ports on any host to discover open services, detect running applications, and audit network exposure.',
    category: 'Security',
    href: '/tools/port-scanner',
  },
  {
    id: 'phishing-analyzer',
    icon: '🎣',
    title: 'Phishing Analyzer',
    desc: 'Analyze URLs and email content for phishing indicators, suspicious patterns, and social engineering tactics.',
    category: 'Security',
    href: '/tools/phishing-analyzer',
  },

  // ── AI & Intelligence Tools ──
  {
    id: 'ai-service-router',
    icon: '🤖',
    title: 'AI Service Router',
    desc: 'Intelligent routing engine that directs your requests to the optimal AI service based on task type, complexity, and context.',
    category: 'AI',
    href: '/tools/ai-service-router',
  },
  {
    id: 'ai-quick-audit',
    icon: '🧭',
    title: 'AI Quick Audit',
    desc: '8-question 2-minute AI readiness check with maturity score, gap analysis, and actionable next steps.',
    category: 'AI',
    href: '/tools/ai-quick-audit',
  },

  // ── Developer Tools ──
  {
    id: 'json-formatter',
    icon: '📋',
    title: 'JSON Formatter & Validator',
    desc: 'Format, validate, beautify, and prettify JSON with syntax highlighting and error detection.',
    category: 'Development',
    href: '/tools/json-formatter',
  },
  {
    id: 'css-gradient-generator',
    icon: '🌈',
    title: 'CSS Gradient Generator',
    desc: 'Visual CSS gradient builder with live preview, multiple gradient types, and copy-paste output.',
    category: 'Development',
    href: '/tools/css-gradient-generator',
  },

  // ── Analytics & Testing Tools ──
  {
    id: 'analytics',
    icon: '📊',
    title: 'Analytics Dashboard',
    desc: 'Comprehensive analytics view with traffic insights, user behavior tracking, and performance metrics.',
    category: 'Analytics',
    href: '/tools/analytics',
  },
  {
    id: 'favicon-generator',
    icon: '👻',
    title: 'Favicon Generator',
    desc: 'Generate favicons in multiple sizes and formats from your logo or image with instant preview.',
    category: 'Development',
    href: '/tools/favicon-generator',
  },

  // ── Career & Hiring Tools ──
  {
    id: 'track-engineer-fit',
    icon: '👔',
    title: 'Track Engineer Fit',
    desc: 'Assess engineering candidate fit for your team based on skills, experience, and project requirements.',
    category: 'HR',
    href: '/tools/track-engineer-fit',
  },
];

// Derive unique categories
const categories = [...new Set(tools.map((t) => t.category))];

export default function ToolsIndexPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* ── Header ── */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">🛠️ Zion Tech Tools</h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Free developer utilities, AI tools, and business calculators to accelerate your workflow.
            No signup required, no data stored.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Link href="tel:+130****0950" className="btn-primary text-lg">☎ +1 302 464 0950</Link>
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer" className="btn-secondary text-lg">
              📅 Book Consultation
            </a>
            <Link href="/contact/" className="btn-secondary text-lg">Contact Us</Link>
          </div>
        </header>

        {/* ── Tool Categories ── */}
        {categories.map((cat) => (
          <div key={cat} className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4 border-b border-slate-700 pb-2">
              {cat}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tools.filter((t) => t.category === cat).map((tool) => (
                <Link
                  key={tool.id}
                  href={tool.href}
                  className="group block p-5 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 hover:bg-slate-800 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{tool.icon}</span>
                    <div>
                      <h3 className="text-white font-semibold group-hover:text-emerald-400 transition-colors">
                        {tool.title}
                      </h3>
                      <p className="text-slate-400 text-sm mt-1">{tool.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* ── Summary Stats ── */}
        <div className="mt-12 text-center mb-8">
          <div className="inline-flex flex-wrap justify-center gap-6 text-slate-400">
            <span className="text-lg">
              <strong className="text-white">{tools.length}</strong> tools
            </span>
            <span className="text-lg">
              <strong className="text-white">{categories.length}</strong> categories
            </span>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="text-emerald-400">Need custom tools or integrations?</span>
            <Link href="/contact/" className="text-emerald-300 hover:text-emerald-200 underline">
              Contact us
            </Link>
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <section className="cta-section text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-4">Need More Than Free Tools?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            We offer AI implementation, IT automation, managed support, and custom integrations for teams that want production-ready solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+130****0950" className="btn-primary text-lg">☎ +1 302 464 0950</a>
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer" className="btn-secondary text-lg">
              📅 Book a Consultation
            </a>
            <Link href="/services/" className="btn-secondary text-lg">View Services</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
