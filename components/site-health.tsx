import Head from 'next/head',
export default function SiteHealth() {
  return (
    <div className=&quot;relative min-h-screen overflow-hidden bg-slate-950 text-white&quot;>
      <Head>
        <title>Site Health — A11y, Performance, Links</title>
        <meta name=&quot;description&quot; content=&quot;Dashboards and audits for accessibility, performance, and link integrity.&quot; />
      </Head>

      <div aria-hidden className=&quot;pointer-events-none absolute inset-0 -z-10&quot;>
        <div className=&quot;absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float&quot; />
        <div className=&quot;absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow&quot; />
        <div className=&quot;absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast&quot; />
        <div className=&quot;absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid&quot; />
        <div className=&quot;absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]&quot;>
          <div className=&quot;twinkle-field absolute inset-0&quot; />        </div>
        <div className=&quot;absolute inset-0 beams opacity-[0.06]&quot; />
      </div>

      <header className=&quot;relative z-10&quot;>
        <nav className=&quot;mx-auto flex max-w-7xl items-center justify-between px-6 py-6&quot;>
          <div className=&quot;text-2xl font-bold tracking-wide&quot;>
            <span className=&quot;bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon&quot;>Zion</span>
          </div>
          <div className=&quot;hidden gap-6 md:flex text-white/80&quot;>
            <Link href=&quot;/&quot;><a>Home</a></a>
            <Link href=&quot;/automation&quot;><a>Automations</a></a>
            <Link href=&quot;/reports/seo&quot;><a>SEO Audit</a></a>
            <Link href=&quot;/reports/ai-trends&quot;><a>AI Trends</a></a>
          </div>
        </nav>
      </header>

      <main className=&quot;relative z-10&quot;>
        <section className=&quot;mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-20 text-center&quot;>
          <div className=&quot;mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md&quot;>
            <span className=&quot;h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]&quot; />
            Real‑time health signals: A11y, Performance, Links          </div>
          <h1 className=&quot;mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl&quot;>
            <span className=&quot;gradient-text&quot;>Site Health</span>
          </h1>
          <p className=&quot;mx-auto mt-5 max-w-3xl text-lg text-white/80&quot;>
            Dashboards, audits, and guardrails that keep your experience fast, accessible, and reliable.
          </p>
          <div className=&quot;mt-8 flex flex-wrap justify-center gap-3&quot;>
            <a href=&quot;/site-health&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10&quot;>Live Pipelines</a>
            <Link href=&quot;/automation&quot;><a className=&quot;rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-shadow&quot;>Open Automation Hub</a></a>          </div>
        </section>

        <section className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;>
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Dashboards</h2>
          <div className=&quot;mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3&quot;>
            {[
              { title: 'Accessibility', desc: 'WCAG checks with actionable fixes and reports.', href: '/reports/seo' },
              { title: 'Performance', desc: 'Core Web Vitals and performance budgets.', href: '/reports/seo' },
              { title: 'Link Integrity', desc: 'Broken links identified and prevented.', href: '/reports/links' }].map((card) => (
              <Link key={card.title} href={card.href}>
                <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30&quot;>
                  <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                  <h3 className=&quot;text-lg font-semibold&quot;>{card.title}</h3>
                  <p className=&quot;mt-1 text-sm text-white/75&quot;>{card.desc}</p>
                  <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open →</div>                </a>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Artifacts</h2>
          <div className="mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-4 sm: grid-cols-2">
            <a href="/reports/seo/latest.json" className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30">Latest SEO Report JSON ↗</a>
            <a href="/reports/seo/index.html" className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30">SEO Audit Dashboard →</a>          </div>
        </section>

        <section className=&quot;mx-auto max-w-7xl px-6 pb-24&quot;>
          <div className=&quot;animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl&quot;>
            <h3 className=&quot;text-2xl font-bold&quot;>Keep quality high — continuously</h3>
            <p className=&quot;mx-auto mt-2 max-w-2xl text-white/80&quot;>Automations enforce guardrails and publish transparent artifacts for every run.</p>
            <div className=&quot;mt-6 flex flex-wrap justify-center gap-3&quot;>
              <Link href=&quot;/automation&quot;><a className=&quot;rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover:bg-white&quot;>Get Started</a></a>
              <a href=&quot;/site-health&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10&quot;>View Pipelines</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}