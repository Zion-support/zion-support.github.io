import Head from 'next/head';
import Link from 'next/link';
import Landing from '../components/Landing';
import DynamicReportLinks from '../components/DynamicReportLinks';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zion Tech Group — Autonomous Cloud Automation & AI Innovation</title>
        <meta name="description" content="Discover autonomous cloud automations, AI-powered systems, and cutting-edge technology solutions. Live monitoring, self-healing systems, and comprehensive reporting." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Cloud Automation & AI Innovation" />
        <meta property="og:description" content="Discover autonomous cloud automations, AI-powered systems, and cutting-edge technology solutions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="relative">
        <Landing />
      </div>
      
      <main className="mx-auto max-w-7xl px-6 py-12">
        {/* Quick Access Section */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Quick Access</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Navigate quickly to key sections and discover our comprehensive features
              </p>
            </div>
<<<<<<< HEAD
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Link 
                href="/automation"
                className="group bg-slate-800/50 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all text-center"
              >
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  Automation Hub
                </h3>
                <p className="text-white/70 text-sm">Live autonomous systems & monitoring</p>
=======
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              <span className="gradient-text">Autonomous Cloud Automations</span>
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-white/80">
              Self-improving, cloud-native agents that invent, generate, and run new automation factories—fixing, optimizing, and syncing changes to the repository continuously.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/automation"><a className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-shadow">Explore Automations</a></Link>
<<<<<<< HEAD
              <Link href="/automation"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">Live Meta Factory</a></Link>
=======
              <a href="/.netlify/functions/homepage-automation" target="_blank" rel="noopener" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">Live Homepage Automation</a>
>>>>>>> origin/chore/netlify-automations-futuristic-home
            </div>

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
              { title: 'Observability', desc: 'Dashboards, reports, and GitHub Actions artifacts.' },
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
            ].map((c) => (
              <article key={c.title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-cyan-400/10 blur-2xl" />
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-white/75">{c.desc}</p>
              </article>
            ))}
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
            ].map((card) => (
              <Link key={card.title} href={card.href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="mt-1 text-sm text-white/75">{card.desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                </a>
>>>>>>> origin/chore/futuristic-home-and-netlify-automations
              </Link>
              
              <Link 
                href="/site-health"
                className="group bg-slate-800/50 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all text-center"
              >
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  Site Health
                </h3>
                <p className="text-white/70 text-sm">Performance & diagnostics dashboard</p>
              </Link>
              
              <Link 
                href="/explore"
                className="group bg-slate-800/50 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all text-center"
              >
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  Explore Features
                </h3>
                <p className="text-white/70 text-sm">Discover all capabilities & benefits</p>
              </Link>
              
              <Link 
                href="/search"
                className="group bg-slate-800/50 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all text-center"
              >
                <div className="text-4xl mb-4">🔎</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  Search
                </h3>
                <p className="text-white/70 text-sm">Find content across the entire site</p>
              </Link>
            </div>
            
            <div className="text-center">
              <Link 
                href="/explore"
                className="inline-flex items-center gap-2 bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore All Features
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
        {/* Latest Reports Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Insights & Reports</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Stay updated with our latest research, insights, and technical content
            </p>
          </div>
          
          <DynamicReportLinks 
            limit={6} 
            showCategory={true}
            className="mb-8"
          />
          
          <div className="text-center">
            <Link 
              href="/reports"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Reports
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

<<<<<<< HEAD
        {/* Feature Highlights */}
        <section className="py-16 bg-slate-900/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover what makes Zion Tech Group the leader in autonomous cloud solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Autonomous Systems</h3>
              <p className="text-white/70 mb-4">
                Self-healing, self-optimizing cloud infrastructure that runs 24/7 without human intervention
              </p>
              <Link 
                href="/automation"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Insights</h3>
              <p className="text-white/70 mb-4">
                Advanced analytics and machine learning for predictive maintenance and optimization
              </p>
              <Link 
                href="/reports"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                Explore Reports →
              </Link>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-3">Developer Tools</h3>
              <p className="text-white/70 mb-4">
                Comprehensive component library and development resources for modern applications
              </p>
              <Link 
                href="/component-library"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                Browse Components →
              </Link>
            </div>
          </div>
        </section>
=======
        {/* Intelligent Docs & Topics */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Intelligent Docs & Topics</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Autonomous documentation and knowledge mapping generated directly from the codebase.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/.netlify/functions/component-props-docs-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Component Props Docs</h3>
              <p className="mt-1 text-sm text-white/75">Scans components and publishes props documentation (Markdown + JSON).</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

            <a href="/.netlify/functions/topics-map-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Topics Map</h3>
              <p className="mt-1 text-sm text-white/75">Builds a live topics map from pages and docs; publishes JSON + Markdown.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
          </div>
        </section>

        {/* AUTO-GENERATED: HOME_UPDATER_START */}
 <section className="mx-auto max-w-7xl px-6 pb-16">
   <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore more</h2>
   <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
>>>>>>> origin/chore/gh-actions-autonomous-docs-topics

<<<<<<< HEAD
        {/* Call to Action */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Join thousands of developers and organizations using Zion Tech Group's autonomous solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/explore"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Start Exploring
            </Link>
            
            <Link 
              href="/automation"
              className="border border-white/20 hover:border-cyan-400/50 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:bg-white/5"
            >
              View Live Systems
            </Link>
          </div>
        </section>
      </main>
=======
 
        {/* AUTO-GENERATED: HOME_UPDATER_START */

=======
 
        {/* AUTO-GENERATED: HOME_UPDATER_START */

>>>>>>> origin/chore/netlify-automations-futuristic-home
<section className="mx-auto max-w-7xl px-6 pb-16">
  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore more</h2>
  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            <Link href="/automation"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Automation — Live agents & reports</span></a></Link>

            <Link href="/newsroom"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Newsroom — Latest autonomous updates</span></a></Link>

            <Link href="/site-health"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Site Health — Audits & insights</span></a></Link>

            <Link href="/front"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Front — Explore more</span></a></Link>

<<<<<<< HEAD
=======
            <a href="/.netlify/functions/homepage-automation" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Netlify: Homepage Automation — Scheduled automation</span></a>

            <a href="/.netlify/functions/maintenance-scheduler" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Netlify: Maintenance Scheduler — Scheduled automation</span></a>

            <a href="/.netlify/functions/marketing-scheduler" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Netlify: Marketing Scheduler — Scheduled automation</span></a>

>>>>>>> origin/chore/netlify-automations-futuristic-home
            <a href="https://github.com/Zion-Holdings/zion.app/actions/workflows/autonomous-cloud.yml" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Autonomous Cloud — 15m cadence orchestrations</span></a>

            <a href="https://github.com/Zion-Holdings/zion.app/actions/workflows/optimize-images.yml" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Image Optimizer — Automatic asset slimming</span></a>

            <a href="https://github.com/Zion-Holdings/zion.app/actions/workflows/performance-audit.yml" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Performance Audit — Lighthouse & runtime checks</span></a>

            <a href="https://github.com/Zion-Holdings/zion.app/actions/workflows/rapid-git-sync.yml" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Rapid Git Sync — Fast repo syncing</span></a>

            <a href="https://github.com/Zion-Holdings/zion.app/actions/workflows/sitemap-auto-commit.yml" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Sitemap Auto‑Update — Fresh URLs daily</span></a>

  </div>
</section>
/* AUTO-GENERATED: HOME_UPDATER_END */}
<<<<<<< HEAD
=======
=======
            <Link href="/main/front"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Front Systems Hub — deep features & map</span></a></Link>
  
>>>>>>> origin/chore/netlify-cloud-automations-and-futuristic-homepage
            <Link href="/automation"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Automation Hub — live agents & reports</span></a></Link>
  
            <Link href="/newsroom"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Newsroom — latest autonomous updates</span></a></Link>
  
            <Link href="/site-health"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Site Health — audits & insights</span></a></Link>
  
<<<<<<< HEAD
            <Link href="/features"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Features — modules, templates, effects</span></a></Link>
=======
            <a href="/.netlify/functions/homepage-scheduler" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Cloud Automations — Netlify scheduled runner</span></a>
>>>>>>> origin/chore/netlify-cloud-automations-and-futuristic-homepage
  
            <Link href="/capabilities"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Capabilities — what it can do</span></a></Link>
  
            <Link href="/benefits"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Benefits — outcomes & value</span></a></Link>
  
    </div>
    </section>
  {/* AUTO-GENERATED: HOME_UPDATER_END */}
>>>>>>> origin/chore/futuristic-home-and-netlify-automations
=======
>>>>>>> origin/chore/netlify-automations-futuristic-home
 </main>
>>>>>>> origin/chore/futuristic-front-automation
    </div>
  );
}