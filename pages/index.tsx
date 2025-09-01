import Link from 'next/link'

const Card = ({ title, desc, href }: { title: string; desc: string; href: string }) => (
  <Link href={href}>
    <a className="block rounded-lg border border-gray-200/40 dark:border-gray-800/60 p-5 hover:border-indigo-500/60 hover:bg-indigo-500/5 transition">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm opacity-80 mt-1">{desc}</p>
    </a>
  </Link>
)

export default function HomePage() {
  const repoActions = `https://github.com/${process.env.NEXT_PUBLIC_REPO || 'Zion-Holdings/zion.app'}/actions`
  return (
    <div className="space-y-10">
      <header className="text-center py-10">
        <h1 className="text-3xl font-bold tracking-tight">Zion — Autonomous Cloud Automations</h1>
        <p className="opacity-80 mt-2">Runs continuously in the cloud. No human hands. No physical machines.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Card title="Lore AutoGen" desc="Genesis Bible, storyboard, prompts, voiceover, language packs, NFT sample." href="/media/lore" />
        <Card title="Rapid Sync" desc="High-frequency sitemap, sync-health, and git checks." href={repoActions} />
        <Card title="Quick Build Healer" desc="Auto-heals empty pages and app shim to keep builds green." href="/universe/genesis" />
        <Card title="Docs Indexer" desc="Continuously compiles a browsable docs/data index." href="/docs/INDEX.md" />
        <Card title="NFT Pack Generator" desc="Generates sample Genesis Key metadata on schedule." href="/nft/genesis-key-001.json" />
        <Card title="Storyboards JSON" desc="Machine-readable storyboard manifest for pipelines." href="/data/storyboards/zion-origin.json" />
        <Card title="Governance Guardian" desc="Ensures LICENSE, SECURITY, COC, CONTRIBUTING, funding are present." href="/docs/CHANGELOG.md" />
        <Card title="Changelog AutoCurator" desc="Summarizes recent commits into docs/CHANGELOG.md." href="/docs/CHANGELOG.md" />
        <Card title="L10n Builder" desc="Auto-generates localized homepages from language packs." href="/eo" />
        <Card title="OG Placeholder Generator" desc="Creates OG SVGs for docs and lore pages." href="/og" />
        <Card title="Performance Budget" desc="15-minute Next.js performance audit reports." href={repoActions} />
      </section>

            {/* Futuristic info strip */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ['24/7', 'Autonomous'],
                ['Main', 'Direct Sync'],
                ['0 Ops', 'Cloud‑Native'],
                ['Safety', 'Guardrails'],
              ].map(([k,v]) => (
                <div key={k} className="glow-card rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left">
                  <div className="text-lg font-bold text-white">{k}</div>
                  <div className="text-xs text-white/70">{v}</div>
                </div>
              ))}
            </div>

            {/* Trusted by */}
            <div className="mx-auto mt-10 max-w-5xl">
              <div className="text-xs uppercase tracking-widest text-white/50">Trusted by forward‑looking teams</div>
              <div className="mt-3 grid grid-cols-2 gap-3 opacity-80 sm:grid-cols-4">
                {['Nebula Labs', 'Aurora Cloud', 'Quanta AI', 'NovaOps'].map((brand) => (
                  <div key={brand} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center text-white/70 backdrop-blur-md">{brand}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Features</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Self‑Improving', desc: 'Agents continuously analyze, invent, and evolve automations.' },
              { title: 'Repo Sync', desc: 'Changes are committed and pushed automatically to main.' },
              { title: 'Zero Ops', desc: 'Runs fully in the cloud—no servers or manual intervention.' },
              { title: 'Safety‑First', desc: 'Conservative edits with logs, reports, and guardrails.' },
              { title: 'Scalable', desc: 'Generates domain‑specific factories on demand.' },
              { title: 'Observability', desc: 'Dashboards, reports, and artifacts across hubs.' },
                             { title: 'Futuristic UI', desc: 'Neon, animated, holographic surfaces with tilt and beams.' },
               { title: 'Cloud Automations', desc: 'Scheduled functions that replace GitHub Actions.' },
               { title: 'Edge‑Optimized', desc: 'Global performance with smart bundling and caching.' },
            ].map((f) => (
              <article key={f.title} className="group glow-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:border-cyan-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-white/75">{f.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">How it works</h2>
          <div className="mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              ['Discover', 'Scan code, issues, UX, and ops signals'],
              ['Plan', 'Draft safe, high‑impact improvements'],
              ['Apply', 'Open edits with conservative diffs'],
              ['Validate', 'Audit builds, links, a11y, and performance'],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 text-left backdrop-blur-xl">
                <div className="text-sm font-semibold text-white">{title}</div>
                <div className="mt-1 text-xs text-white/70">{desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Capabilities</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { title: 'Code Quality & Refactors', desc: 'Lints, fixes, and proposes refactors with type‑safety improvements.' },
              { title: 'Performance & A11y', desc: 'Optimizes bundles, assets, and accessibility with continuous checks.' },
              { title: 'Content & SEO', desc: 'Curates content, updates promotions, and tunes metadata for reach.' },
              { title: 'Front Systems', desc: 'Futuristic front with animated templates and layouts.' },
              { title: 'Automation Hub', desc: 'Orchestrate cloud agents and review outputs.' },
              { title: 'Reports & Insights', desc: 'Health, SEO and AI trend dashboards.' },
            ].map((c) => (
              <article key={c.title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-cyan-400/10 blur-2xl" />
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-white/75">{c.desc}</p>
              </article>
            ))}
          </div>
        </section>
 
        {/* Futuristic Templates */}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Futuristic Templates</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Beautiful, animated surfaces and layouts ready to accelerate front‑of‑house experiences.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/main/front"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Front Systems Hub</h3>
              <p className="mt-1 text-sm text-white/75">Explore comprehensive templates, effects, and layouts.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a></Link>
            <Link href="/automation"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Automation‑Driven UI</h3>
              <p className="mt-1 text-sm text-white/75">Live promos and content curated by continuous automations.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a></Link>
            <a href="/.netlify/functions/front-enhancer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">On‑Demand Front Enhancer</h3>
              <p className="mt-1 text-sm text-white/75">Trigger the curator now and see updates flow to main.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
          </div>
        </section>

        {/* New Autonomous Automations */}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">New Autonomous Automations</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/.netlify/functions/innovation-scout" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Innovation Scout</h3>
              <p className="mt-1 text-sm text-white/75">AI trends radar that feeds homepage promos in near‑real time.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Trigger <span aria-hidden>↗</span></div>
            </a>
            <a href="/.netlify/functions/content-curator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">LLM Content Curator</h3>
              <p className="mt-1 text-sm text-white/75">Curates useful links and content, commits, and updates the front.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Trigger <span aria-hidden>↗</span></div>
            </a>
            <a href="/.netlify/functions/knowledge-graph-orchestrator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Knowledge Graph</h3>
              <p className="mt-1 text-sm text-white/75">Auto‑rebuilds the repository knowledge graph and radar metrics.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Trigger <span aria-hidden>↗</span></div>
            </a>
            <a href="/.netlify/functions/code-health-orchestrator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Code Health Orchestrator</h3>
              <p className="mt-1 text-sm text-white/75">Dead code, links, and assets optimized with auto‑push to main.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Trigger <span aria-hidden>↗</span></div>
            </a>
            <a href="/.netlify/functions/security-audit-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Security Audit</h3>
              <p className="mt-1 text-sm text-white/75">Automated security scanning with artifacts committed to the repo.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Trigger <span aria-hidden>↗</span></div>
            </a>
            <a href="/.netlify/functions/media-orchestrator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Media Orchestrator</h3>
              <p className="mt-1 text-sm text-white/75">OG image refresh and automated media releases.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Trigger <span aria-hidden>↗</span></div>
            </a>
          </div>
        </section>

        {/* Benefits */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Benefits</h2>
          <div className="mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-3 md:grid-cols-2">
            {[
              '24/7 progress without human intervention',
              'Rapid feedback loop with safe, incremental edits',
              'Continuous delivery directly to main branch',
              'Fewer regressions via layered checks and reports',
              'Discoverable features with deep links across the app',
              'Futuristic UX that boosts engagement and clarity',
              'Netlify scheduled automations (no GitHub Actions needed)',
            ].map((b) => (
              <div key={b} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                <span className="text-sm text-white/80">{b}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl">
            <h3 className="text-2xl font-bold">Ready to build with autonomous cloud agents?</h3>
            <p className="mx-auto mt-2 max-w-2xl text-white/80">Scale development with a tireless fleet of self‑improving automations.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/services"><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover:bg-white">Get Started</a></Link>
              <Link href="/automation"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">View Automations</a></Link>
            </div>
          </div>
        </section>

        {/* Futuristic Spotlight */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore Zion</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Dive into the hubs and reports that showcase our features, capabilities, and benefits.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Front Systems Hub', desc: 'A curated, futuristic front experience.', href: '/main/front' },
              { title: 'Automation Hub', desc: 'Factories, agents, and live workflows.', href: '/automation' },
              { title: 'Site Health', desc: 'A11y, performance, and link integrity.', href: '/site-health' },
              { title: 'SEO Audit', desc: 'Continuous on‑site improvements and artifacts.', href: '/reports/seo' },
              { title: 'AI Trends', desc: 'Ecosystem signals that inspire new factories.', href: '/reports/ai-trends' },
              { title: 'Newsroom', desc: 'Autonomous updates and product evolution.', href: '/newsroom' },
              { title: 'Cloud Automations', desc: 'Netlify scheduled jobs powering the platform.', href: '/automation' },
            ].map((card) => (
              <Link key={card.title} href={card.href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="mt-1 text-sm text-white/75">{card.desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                </a>
              </Link>
            ))}
          </div>
        </section>
 
        {/* Automation Engine — New Tools */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Automation Engine — New Tools</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Now powered by scheduled cloud functions — no GitHub Actions required. Live homepage promos, health checks, and link integrity run automatically.</p>
                     <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
               { title: 'Frontpage Enhancer', desc: 'Auto‑advertises features and refreshes homepage content hourly.', href: '/.netlify/functions/frontpage-enhancer' },
               { title: 'Link & Health Scheduler', desc: 'Runs link checks, health scans, and sitemap updates every 6h.', href: '/.netlify/functions/link-and-health-scheduler' },
               { title: 'Marketing & Features Promo', desc: 'Regenerates homepage promos and deep links every 2h.', href: '/.netlify/functions/marketing-and-features-promo' },
               { title: 'Front Enhancer (fast)', desc: 'Runs front improvements every 10 minutes.', href: '/.netlify/functions/front-enhancer' },
               { title: 'Homepage Advertiser', desc: 'Pushes fresh highlights every 15 minutes.', href: '/.netlify/functions/homepage_advertiser' },
               { title: 'Cloud Orchestrator', desc: 'Coordinates broader agents on a 4h cadence.', href: '/.netlify/functions/cloud_orchestrator' },
               { title: 'Fast Orchestrator (1m)', desc: 'Continuously refreshes front + homepage and commits to main every minute.', href: '/.netlify/functions/fast-orchestrator' },
               { title: 'Continuous Orchestrator (5m)', desc: 'Runs a lightweight pipeline including sitemap and UI futurizer.', href: '/.netlify/functions/continuous-orchestrator' },
               { title: 'Front Maximizer', desc: 'High‑frequency auto‑advertising and futurizing every 5m.', href: '/.netlify/functions/front-maximizer' },
               { title: 'Continuous Front Runner', desc: 'Ultra‑fast subset runner every 3m.', href: '/.netlify/functions/continuous-front-runner' },
               { title: 'README Advertiser', desc: 'Refresh README and docs indexes every 6h.', href: '/.netlify/functions/readme-advertiser' },
               { title: 'Features/Capabilities/Benefits Advertiser (2m)', desc: 'Continuously advertises new features with deep links on the front pages.', href: '/.netlify/functions/features-capabilities-benefits-advertiser' },
               { title: 'Hyper Front Index Accelerator (1m)', desc: 'Ultra-fast front index futurizer and directory builder.', href: '/.netlify/functions/hyper-front-index-accelerator' },
               { title: 'Innovation Lab (15m)', desc: 'Invents new automations and updates the repo knowledge graph.', href: '/.netlify/functions/innovation-lab' },
               { title: 'Guardian Orchestrator (10m)', desc: 'Security, dead code, link and image guard with self-healing.', href: '/.netlify/functions/guardian-orchestrator' },
               { title: 'Media & Newsroom Runner (hourly)', desc: 'Auto media releases, OG images and newsroom updates.', href: '/.netlify/functions/media-press-runner' },
               { title: 'Docs & SEO Optimizer (30m)', desc: 'Docs index, changelog, sitemap and link health.', href: '/.netlify/functions/docs-seo-optimizer' },
               { title: 'Daily Deps Upgrade', desc: 'Conservative dependency upgrades every night.', href: '/.netlify/functions/deps-upgrade-daily' },
             ].map((tool) => (
              <a key={tool.title} href={tool.href} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{tool.title}</h3>
                <p className="mt-1 text-sm text-white/75">{tool.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
            ))}
          </div>
        </section>
 
        {/* New Autonomous Cloud Engines */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">New Autonomous Cloud Engines</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">These run entirely in the cloud, commit changes, and keep your repo evergreen, without any servers or human interaction.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Frontpage Enhancer', desc: 'Auto‑advertises features and refreshes homepage content hourly.', href: '/.netlify/functions/frontpage-enhancer' },
              { title: 'Link & Health Scheduler', desc: 'Runs link checks, health scans, and sitemap updates every 6h.', href: '/.netlify/functions/link-and-health-scheduler' },
              { title: 'Marketing & Features Promo', desc: 'Regenerates homepage promos and deep links every 2h.', href: '/.netlify/functions/marketing-and-features-promo' },
              { title: 'Front Enhancer (fast)', desc: 'Runs front improvements every 10 minutes.', href: '/.netlify/functions/front-enhancer' },
              { title: 'Homepage Advertiser', desc: 'Pushes fresh highlights every 15 minutes.', href: '/.netlify/functions/homepage_advertiser' },
              { title: 'Cloud Orchestrator', desc: 'Coordinates broader agents on a 4h cadence.', href: '/.netlify/functions/cloud_orchestrator' },
              { title: 'Fast Orchestrator (1m)', desc: 'Continuously refreshes front + homepage and commits to main every minute.', href: '/.netlify/functions/fast-orchestrator' },
              { title: 'Continuous Orchestrator (5m)', desc: 'Runs a lightweight pipeline including sitemap and UI futurizer.', href: '/.netlify/functions/continuous-orchestrator' },
              { title: 'Front Maximizer', desc: 'High‑frequency auto‑advertising and futurizing every 5m.', href: '/.netlify/functions/front-maximizer' },
              { title: 'Continuous Front Runner', desc: 'Ultra‑fast subset runner every 3m.', href: '/.netlify/functions/continuous-front-runner' },
              { title: 'README Advertiser', desc: 'Refresh README and docs indexes every 6h.', href: '/.netlify/functions/readme-advertiser' },
              { title: 'Features/Capabilities/Benefits Advertiser (2m)', desc: 'Continuously advertises new features with deep links on the front pages.', href: '/.netlify/functions/features-capabilities-benefits-advertiser' },
              { title: 'Hyper Front Index Accelerator (1m)', desc: 'Ultra-fast front index futurizer and directory builder.', href: '/.netlify/functions/hyper-front-index-accelerator' },
              // New tools
              { title: 'Automation Guardian (10m)', desc: 'Protective sweeps keep automations healthy and safe.', href: '/.netlify/functions/automation-guardian' },
              { title: 'Repo Radar Metrics (30m)', desc: 'Generates repository radar metrics and artifacts.', href: '/.netlify/functions/repo-radar-metrics' },
              { title: 'Docs Pages Indexer (4h)', desc: 'Indexes docs and regenerates search indices.', href: '/.netlify/functions/docs-pages-indexer' },
              { title: 'LLM Content Curator (3h)', desc: 'Curates content and proposes front‑page promos.', href: '/.netlify/functions/llm-content-curator' },
              { title: 'Security Audit (12h)', desc: 'Runs security audits and syncs results.', href: '/.netlify/functions/security-audit-runner' },
              { title: 'Dead Code Scanner (12h)', desc: 'Finds unused code and proposes cleanups.', href: '/.netlify/functions/dead-code-scanner' },
              { title: 'Netlify Auto‑Healer (30m)', desc: 'Applies remedial fixes when issues are detected.', href: '/.netlify/functions/netlify-auto-healer-runner' },
              { title: 'Auto Media Release (6h)', desc: 'Prepares social/media packages for new features.', href: '/.netlify/functions/auto-media-release' },
              { title: 'Newsroom Scheduler (1h)', desc: 'Generates newsroom content from repo activity.', href: '/.netlify/functions/newsroom-scheduler' },
              { title: 'OG Image Scheduler (6h)', desc: 'Regenerates OG images for fresh social previews.', href: '/.netlify/functions/og-image-scheduler' },
            ].map((tool) => (
              <a key={tool.title} href={tool.href} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{tool.title}</h3>
                <p className="mt-1 text-sm text-white/75">{tool.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
            ))}
          </div>
        </section>
 
        {/* AUTO-GENERATED: HOME_UPDATER_START */}

<section className="mx-auto max-w-7xl px-6 pb-16">
  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore more</h2>
  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            <Link href="/automation"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Automation — Live agents & reports</span></a></Link>

            <Link href="/newsroom"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Newsroom — Latest autonomous updates</span></a></Link>

            <Link href="/site-health"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Site Health — Audits & insights</span></a></Link>

            <Link href="/front"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Front — Explore more</span></a></Link>

            <a href="/.netlify/functions/cloud_orchestrator" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Cloud Orchestrator — Coordinates agents (4h)</span></a>

            <a href="/.netlify/functions/continuous-orchestrator" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Continuous Orchestrator — Multi-step curator (5m)</span></a>

            <a href="/.netlify/functions/fast-front-promoter" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Fast Front Promoter — Quick promos (15m)</span></a>

            <a href="/.netlify/functions/feature-advertiser" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Feature Advertiser — Scheduled function</span></a>

            <a href="/.netlify/functions/front-enhancer" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Front Enhancer — Futuristic front updates (10m)</span></a>

            <a href="/.netlify/functions/front-index-futurizer" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Front Index Futurizer — Scheduled function</span></a>

            <a href="/.netlify/functions/front-index-orchestrator" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Front Index Orchestrator — Scheduled function</span></a>

            <a href="/.netlify/functions/front-index-scheduler" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Front Index Scheduler — Scheduled function</span></a>

            <a href="/.netlify/functions/knowledge-and-innovation" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Knowledge & Innovation — Graphs, newsroom, changelogs (3h)</span></a>

            <a href="/.netlify/functions/guardian-security-fast" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Guardian Security — Security and integrity scans (6h)</span></a>

            <a href="/.netlify/functions/autonomous-factory-expander" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Autonomous Factory Expander — Front factories and OG images (30m)</span></a>

  </div>
</section>
{/* AUTO-GENERATED: HOME_UPDATER_END */}
  </main>
    </div>
  )
}
