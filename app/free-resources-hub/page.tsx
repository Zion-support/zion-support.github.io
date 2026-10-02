// app/free-resources-hub/page.tsx — Free Resources Hub: All free tools, assessments & resources
'use client';

import Link from 'next/link';

const METADATA = {
  title: 'Free Tools & Resources | Zion Tech Group',
  description: 'Browse 100+ free AI tools, calculators, assessments, and technology resources from Zion Tech Group. No login required. Try before you buy.',
};

const FREE_AI_TOOLS = [
  { name: 'AI Service Router', href: '/tools/ai-service-router', emoji: '🧠', desc: 'Smart model routing, caching & failover for your AI workloads' },
  { name: 'ROI Calculator', href: '/tools/roi-calculator', emoji: '📊', desc: 'Estimate payback and TCO of AI and IT projects' },
  { name: 'AI Quick Audit', href: '/tools/ai-quick-audit', emoji: '🔍', desc: 'Quick AI readiness assessment for your stack' },
  { name: 'Service Comparison', href: '/tools/service-comparison', emoji: '⚖️', desc: 'Compare AI and IT services side by side' },
  { name: 'Service Recommender', href: '/tools/service-recommender', emoji: '🎯', desc: 'Get personalized service recommendations based on your needs' },
  { name: 'Health Check', href: '/tools/health-check', emoji: '❤️', desc: 'Check the health and performance of your services' },
  { name: 'SSL Checker', href: '/tools/ssl-checker', emoji: '🔒', desc: 'Verify SSL certificate configuration and expiration' },
  { name: 'Port Scanner', href: '/tools/port-scanner', emoji: '🔌', desc: 'Scan open ports on your servers and networks' },
  { name: 'JSON Formatter', href: '/tools/json-formatter', emoji: '📋', desc: 'Format, validate, and beautify JSON data' },
  { name: 'CSS Gradient Generator', href: '/tools/css-gradient-generator', emoji: '🎨', desc: 'Create beautiful CSS gradients for your designs' },
  { name: 'Track Engineer Fit', href: '/tools/track-engineer-fit', emoji: '👷', desc: 'Match engineering talent to project requirements' },
  { name: 'Phishing Analyzer', href: '/tools/phishing-analyzer', emoji: '🎣', desc: 'Analyze URLs and emails for phishing indicators' },
];

const FREE_ASSESSMENTS = [
  { name: 'AI Readiness Assessment', href: '/free-ai-readiness-audit', emoji: '📝', desc: 'Scored questionnaire with adoption roadmap — find out if you\'re ready for AI' },
  { name: 'Free AI Consultation', href: '/free-ai-consultation', emoji: '💬', desc: '30-minute free consultation to discuss your AI opportunities' },
  { name: 'Free AI Assessment', href: '/free-ai-assessment', emoji: '✅', desc: 'Comprehensive AI readiness assessment for your organization' },
  { name: 'Free Consultation', href: '/free-consultation', emoji: '🤝', desc: 'General IT and AI consultation — no obligation' },
  { name: 'Discovery $99', href: '/discovery', emoji: '🔎', desc: 'Map 1 process, get ROI estimate, and a 30-min session — just $99' },
];

const FREE_RESOURCES = [
  { name: 'Zion Tech Blog', href: '/blog', emoji: '📖', desc: 'Latest insights on AI, IT services, cloud, cybersecurity, and automation' },
  { name: 'Zion Academy', href: '/academy', emoji: '🎓', desc: 'Learning paths, courses, and training resources for IT professionals' },
  { name: 'FAQ', href: '/faq', emoji: '❓', desc: 'Frequently asked questions about Zion Tech Group services' },
  { name: 'Community', href: '/community', emoji: '👥', desc: 'Join the Zion Tech Group community of IT and AI professionals' },
  { name: 'Newsletter', href: '/newsletter', emoji: '📧', desc: 'Subscribe for weekly AI & IT insights and updates' },
  { name: 'Case Studies', href: '/case-studies', emoji: '📋', desc: 'Real-world examples of Zion Tech Group engagements (no confidential data)' },
  { name: 'Testimonials', href: '/testimonials', emoji: '⭐', desc: 'What our clients say about working with Zion' },
  { name: 'Changelog', href: '/changelog', emoji: '📝', desc: 'Latest updates, improvements, and new features' },
];

const FREE_TOOLS = [
  { name: 'ROI Calculator', href: '/tools/roi-calculator', emoji: '💰', desc: 'Calculate return on investment for AI and IT projects' },
  { name: 'Pricing Calculator', href: '/pricing-calculator', emoji: '💵', desc: 'Estimate pricing for Zion Tech Group services' },
  { name: 'AI Service Router', href: '/tools/ai-service-router', emoji: '🧠', desc: 'Route AI requests to the best model for your use case' },
  { name: 'SSL Checker', href: '/tools/ssl-checker', emoji: '🔒', desc: 'Check SSL certificate status and configuration' },
  { name: 'Port Scanner', href: '/tools/port-scanner', emoji: '🔌', desc: 'Scan for open ports on your infrastructure' },
  { name: 'JSON Formatter', href: '/tools/json-formatter', emoji: '📋', desc: 'Format and validate JSON data instantly' },
  { name: 'CSS Gradient Generator', href: '/tools/css-gradient-generator', emoji: '🎨', desc: 'Create custom CSS gradients visually' },
  { name: 'Phishing Analyzer', href: '/tools/phishing-analyzer', emoji: '🎣', desc: 'Check URLs for phishing threats' },
];

const TOOLS_HUB = [
  { name: 'Service Comparison', href: '/tools/service-comparison', emoji: '⚖️', desc: 'Compare AI and IT services side by side' },
  { name: 'Service Recommender', href: '/tools/service-recommender', emoji: '🎯', desc: 'Get AI-powered service recommendations' },
  { name: 'Health Check', href: '/tools/health-check', emoji: '❤️', desc: 'Monitor your service health and performance' },
];

export default function FreeResourcesHub() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800/60">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-slate-950 to-teal-900/10" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="relative container-page py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium mb-6">
              Free — no login required
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Free tools, resources & <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">assessments</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Try before you buy. Explore 50+ free AI tools, calculators, assessments, and technology resources.
              No credit card. No login. Just useful stuff.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/discovery" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all hover:scale-[1.02] shadow-lg shadow-emerald-500/25">
                Start with Discovery $99
                <span className="text-sm opacity-70">→</span>
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 hover:border-emerald-500/40 text-slate-300 hover:text-white font-medium transition-all">
                Talk to an engineer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Free AI Tools */}
      <section className="container-page py-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">🧠</span>
          <div>
            <h2 className="text-2xl font-bold text-white">Free AI Tools</h2>
            <p className="text-slate-400 text-sm">Smart tools for AI and IT professionals</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FREE_AI_TOOLS.map((tool) => (
            <Link key={tool.href} href={tool.href} className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 text-slate-300 hover:text-white hover:border-emerald-500/40 transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-emerald-500/5">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08), transparent 60%)' }} />
              <div className="relative">
                <span className="text-3xl mb-3 block">{tool.emoji}</span>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">{tool.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{tool.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-emerald-400 text-sm font-medium group-hover:gap-2 transition-all">
                  Open tool
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Free Assessments */}
      <section className="border-t border-slate-800/60 bg-slate-900/30 container-page py-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">📝</span>
          <div>
            <h2 className="text-2xl font-bold text-white">Free Assessments</h2>
            <p className="text-slate-400 text-sm">Know where you stand before you invest</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FREE_ASSESSMENTS.map((item) => (
            <Link key={item.href} href={item.href} className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 text-slate-300 hover:text-white hover:border-emerald-500/40 transition-all hover:shadow-lg hover:shadow-emerald-500/5">
              <div className="flex items-start gap-4">
                <span className="text-3xl shrink-0">{item.emoji}</span>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-emerald-300 transition-colors">{item.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-emerald-400 text-sm font-medium group-hover:gap-2 transition-all">
                    Start assessment
                    <span>→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Free Resources */}
      <section className="border-t border-slate-800/60 container-page py-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">📚</span>
          <div>
            <h2 className="text-2xl font-bold text-white">Free Resources</h2>
            <p className="text-slate-400 text-sm">Learn, read, and stay updated</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FREE_RESOURCES.map((item) => (
            <Link key={item.href} href={item.href} className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 text-slate-300 hover:text-white hover:border-emerald-500/40 transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-emerald-500/5">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08), transparent 60%)' }} />
              <div className="relative">
                <span className="text-3xl mb-3 block">{item.emoji}</span>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">{item.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-emerald-400 text-sm font-medium group-hover:gap-2 transition-all">
                  Visit
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Free Utilities */}
      <section className="border-t border-slate-800/60 bg-slate-900/30 container-page py-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">🔧</span>
          <div>
            <h2 className="text-2xl font-bold text-white">Free Utilities</h2>
            <p className="text-slate-400 text-sm">Calculators, scanners, and formatters</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FREE_TOOLS.map((item) => (
            <Link key={item.href} href={item.href} className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 text-slate-300 hover:text-white hover:border-emerald-500/40 transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-emerald-500/5">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08), transparent 60%)' }} />
              <div className="relative">
                <span className="text-3xl mb-3 block">{item.emoji}</span>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">{item.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-emerald-400 text-sm font-medium group-hover:gap-2 transition-all">
                  Use tool
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800/60 container-page py-16">
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 lg:p-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to go beyond free?</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            The free tools give you a taste. Discovery $99 gives you a map. Consulting, Starter, and Growth turn that map into results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/discovery" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all shadow-lg shadow-emerald-500/25">
              Discovery $99 — map 1 process
              <span className="text-sm opacity-70">→</span>
            </Link>
            <Link href="/plans" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 hover:border-emerald-500/40 text-slate-300 hover:text-white font-medium transition-all">
              View all plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
