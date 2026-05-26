// app/pricing-calculator/page.tsx — Pricing calculator with How It Works, FAQ, and CTA
import PricingCalculatorClient from './PricingCalculatorClient';
import Link from 'next/link';

// ── FAQ data ───────────────────────────────────────────────────────────────
const pricingFaqs = [
  {
    q: 'How does the pricing calculator work?',
    a: 'Select your preferred tier (Starter, Professional, or Enterprise), use the sliders to configure how many services you need per category, and choose your support level. The calculator instantly estimates your monthly cost based on tier pricing, per-service unit costs, and any support surcharges.',
  },
  {
    q: 'What is included in the base tier pricing?',
    a: 'Starter ($2,500/mo) includes up to 5 services with email support and standard SLA. Professional ($7,500/mo) includes up to 20 services with priority support, 99.9% SLA, and a dedicated account manager. Enterprise has no service limit and includes 24/7 support, 99.99% SLA, and custom integrations.',
  },
  {
    q: 'What happens if I exceed my tier\'s service cap?',
    a: 'Services beyond your tier cap are billed at $750/overage service per month. For Starter at 7 services, that\'s 2 overage units × $750 = $1,500/mo extra. Professional supports up to 20 included services before overage. Enterprise has no cap at all.',
  },
  {
    q: 'Is the Enterprise tier priced per-service?',
    a: 'Enterprise pricing uses a 1.15× multiplier on your total service category subtotal, with a $7,500/mo floor. This means Enterprise scales with your actual service count while including unlimited capacity, 24/7 support, and custom work. Contact us for volume discounts on larger deployments.',
  },
  {
    q: 'What do the per-service unit prices cover?',
    a: 'Each category has a flat per-service monthly rate: AI & Automation ($1,800), Security & Compliance ($1,600), Data & Analytics ($1,400), IT Infrastructure ($1,200), Cloud & DevOps ($1,100), and Workflow Automation ($900). These cover managed delivery, monitoring, updates, and standard support for each service under your chosen tier.',
  },
  {
    q: 'What support levels are available?',
    a: 'Standard support is included in every tier. Priority support (+25%) adds faster response times and escalation. Dedicated Account Manager (+50%) assigns a named AM who knows your environment, handles onboarding, and coordinates across Zion Tech Group teams.',
  },
  {
    q: 'How accurate is this estimate?',
    a: 'The calculator provides a reliable ballpark based on standard configurations. Actual pricing depends on integration complexity, data volume, custom development needs, and onboarding requirements. Contact us for a formal, binding quote tailored to your specific environment.',
  },
  {
    q: 'Do you offer annual billing discounts?',
    a: 'Yes. Annual billing (12× monthly) is available and typically includes a discount. Contact our sales team to discuss annual plans and multi-year commitments. The annualized total shown in the calculator is the straight 12× multiple — ask about savings.',
  },
  {
    q: 'Can I mix services from different categories?',
    a: 'Absolutely. The calculator supports any combination across all six categories. Mix AI agents with cloud infrastructure, security compliance with workflow automation — whatever your stack needs. Each service is priced independently within your chosen tier.',
  },
  {
    q: 'How do I get started after calculating my estimate?',
    a: 'Click "Get Your Custom Proposal" at the bottom of the page, fill in your details, and our team will reach out within 24 hours. We\'ll refine the estimate into a formal proposal with scope, timeline, and deliverables. Or call us at +1 302 464 0950.',
  },
];

// ── Steps data ─────────────────────────────────────────────────────────────
const steps = [
  {
    num: '01',
    title: 'Select Your Tier',
    description:
      'Choose between Starter, Professional, or Enterprise based on your team size and service needs. Each tier has a different service cap, support level, and base pricing.',
    icon: '📋',
  },
  {
    num: '02',
    title: 'Configure Services',
    description:
      'Use the sliders to pick how many services you need across AI, IT, cloud, security, data, and automation. Each category has a flat per-service monthly rate.',
    icon: '⚙️',
  },
  {
    num: '03',
    title: 'Choose Support Level',
    description:
      'Pick the support SLA that fits: Standard (included), Priority (+25%), or Dedicated Account Manager (+50%). Your choice applies to your entire bundle.',
    icon: '🎯',
  },
  {
    num: '04',
    title: 'Get Your Estimate',
    description:
      'See your real-time monthly and annual estimate. Adjust any variable and watch the price update instantly. Share the estimate or request a formal proposal.',
    icon: '💰',
  },
];

// ── FAQ JSON-LD schema ─────────────────────────────────────────────────────
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: pricingFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ziontechgroup.com/' },
    { '@type': 'ListItem', position: 2, name: 'Pricing Calculator', item: 'https://ziontechgroup.com/pricing-calculator/' },
  ],
};

export default function PricingCalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ═══════════════════════════════════════════════════════════════════
          HERO
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              💵 Interactive Estimator
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Pricing Calculator
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Estimate your monthly costs for AI, IT, cloud, security, data, and
              automation services — all in one place. Adjust tiers, services,
              and support level for an instant bundled estimate.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <a
                href="#calculator"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:from-purple-500 hover:to-pink-500 transition shadow-lg shadow-purple-900/30"
              >
                🧮 Calculate Now
              </a>
              <a
                href="#faq"
                className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/50 text-white px-8 py-3.5 rounded-xl font-semibold hover:border-purple-500/50 transition"
              >
                ❓ View FAQ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          HOW IT WORKS
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Four simple steps to estimate your monthly service costs.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/60 border border-slate-700/50 p-6 hover:border-purple-500/30 transition group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{step.icon}</span>
                <span className="text-sm font-bold text-purple-400/60 group-hover:text-purple-400 transition">
                  Step {step.num}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CALCULATOR
         ═══════════════════════════════════════════════════════════════════ */}
      <section
        id="calculator"
        className="relative overflow-hidden scroll-mt-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.08),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Configure Your Bundle
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Adjust your tier, service counts, and support level below. The
              estimate updates instantly.
            </p>
          </div>
          <PricingCalculatorClient />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          WHAT'S INCLUDED — Benefits
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What You Get
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Every service bundle includes these benefits on top of your
            selected tier.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: '🛡️',
              title: 'Managed Delivery',
              desc: 'We handle deployment, monitoring, updates, and maintenance so your team can focus on building.',
            },
            {
              icon: '📈',
              title: 'Transparent Pricing',
              desc: 'No hidden fees. Per-service unit costs are fixed within your tier. What you see is what you pay.',
            },
            {
              icon: '🔗',
              title: 'Cross-Category Bundles',
              desc: 'Mix services across AI, IT, cloud, security, data, and automation in a single monthly bill.',
            },
            {
              icon: '🚀',
              title: 'Flexible Scaling',
              desc: 'Add or remove services month-to-month. Scale up during growth, scale down when needed.',
            },
            {
              icon: '📞',
              title: 'Dedicated Support',
              desc: 'Every tier includes support. Upgrade to Priority or Dedicated AM for faster response and deeper SLAs.',
            },
            {
              icon: '🔐',
              title: 'Enterprise Security',
              desc: 'All bundles include encryption at rest and in transit, RBAC, compliance governance, and audits.',
            },
          ].map((benefit, i) => (
            <div
              key={i}
              className="rounded-2xl bg-slate-800/40 border border-slate-700/50 p-6 hover:border-purple-500/30 hover:bg-slate-800/60 transition"
            >
              <span className="text-3xl block mb-4">{benefit.icon}</span>
              <h3 className="text-lg font-bold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FAQ
         ═══════════════════════════════════════════════════════════════════ */}
      <section
        id="faq"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 scroll-mt-20"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Pricing FAQ
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Common questions about our pricing model, tiers, and how the
            calculator works.
          </p>
        </div>
        <div className="space-y-4">
          {pricingFaqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-slate-900/50 border border-slate-700 rounded-xl overflow-hidden hover:border-purple-500/50 transition-colors"
            >
              <summary className="cursor-pointer px-6 py-4 font-semibold text-white text-base sm:text-lg flex justify-between items-center gap-4">
                <span>{faq.q}</span>
                <span className="text-purple-400 shrink-0 transition-transform group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <div className="px-6 py-4 text-slate-300 leading-relaxed text-sm sm:text-base border-t border-slate-700/50">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CTA
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-gradient-to-r from-purple-900/40 via-slate-900/60 to-pink-900/40 border border-purple-500/30 rounded-2xl p-10 sm:p-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Your estimate is just the beginning. Connect with our team for a
            formal proposal, customized to your specific environment, workload,
            and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/configurator/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:from-purple-500 hover:to-pink-500 transition shadow-lg shadow-purple-900/30"
            >
              📄 Get Your Custom Proposal →
            </Link>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/50 text-white px-8 py-3.5 rounded-xl font-semibold hover:border-purple-500/50 transition"
            >
              📞 +1 302 464 0950
            </a>
          </div>
          <p className="text-slate-500 text-sm mt-6">
            Or email{' '}
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="text-purple-400 hover:underline"
            >
              kleber@ziontechgroup.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
