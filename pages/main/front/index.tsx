import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
export default function FrontLanding() {
  return (
    <div className=&quot;relative min-h-screen overflow-hidden bg-slate-950 text-white&quot;>
      <Head>
        <title>Zion — Autonomous Cloud Automations</title>
        <meta name=&quot;description&quot; content=&quot;Futuristic, cloud-native autonomous automations that innovate, optimize, and sync changes to the repo continuously.&quot; />
import Head from 'next/head';
import Link from 'next/link';

export default function FrontLanding() {_return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Head>
        <title>Zion — Autonomous Cloud Automations</title>
        <meta name="description" content="Futuristic, _cloud-native autonomous automations that innovate, _optimize, _and sync changes to the repo continuously." />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </Head>

      {/* Animated background layers */}
      <div aria-hidden className=&quot;pointer-events-none absolute inset-0 -z-10&quot;>
        <div className=&quot;absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float&quot; />
        <div className=&quot;absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow&quot; />
        <div className=&quot;absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast&quot; />
        <div className=&quot;absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid&quot; />
        <div className=&quot;absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]&quot;>
          <div className=&quot;twinkle-field absolute inset-0&quot; />
        </div>
      </div>

      {/* Header */}
      <header className=&quot;relative z-10&quot;>
        <nav className=&quot;mx-auto flex max-w-7xl items-center justify-between px-6 py-6&quot;>
          <div className=&quot;text-2xl font-bold tracking-wide&quot;>
            <Link href=&quot;/&quot;><a className=&quot;bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon&quot;>Zion</Link></Link>
          </div>
          <div className=&quot;hidden gap-6 md:flex&quot;>
            <Link href=&quot;/&quot;><a className=&quot;text-white/80 hover:text-white&quot;>Home</Link></Link>
            <Link href=&quot;/automation&quot;><a className=&quot;text-white/80 hover:text-white&quot;>Automations</Link></Link>
            <Link href=&quot;/newsroom&quot;><a className=&quot;text-white/80 hover:text-white&quot;>Newsroom</Link></Link>
            <Link href=&quot;/contact&quot;><a className=&quot;text-white/80 hover:text-white&quot;>Contact</Link></Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <main className=&quot;relative z-10&quot;>
        <section className=&quot;mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-24&quot;>
          <div className=&quot;text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className=&quot;mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md&quot;
            >
              <span className=&quot;h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]&quot; />
              Autonomous agents running continuous improvements
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className=&quot;mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl&quot;
            >
              <span className=&quot;gradient-text&quot;>Autonomous Cloud Automations</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className=&quot;mx-auto mt-5 max-w-3xl text-lg text-white/80&quot;
            >
              Self-improving, cloud-native agents that invent, generate, and run new automation factories—fixing, optimizing, and syncing changes to the repository continuously.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className=&quot;mt-8 flex flex-wrap justify-center gap-3&quot;
            >
              <Link href="/automation"><a className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-shadow">Explore Automations</a></Link>
              <a href="https://github.com/Zion-Holdings/zion.app/actions/workflows/autonomous-meta.yml" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">Live Meta Factory</a>
            </motion.div>

            {/* Quick stats */}
            <div className=&quot;mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4&quot;>
              {[
                ['24/7Autonomous'],
                ['MainDirect Sync'],
                ['0 OpsCloud‑Native'],
                ['SafetyGuardrails']].map(([k, v]) => (
                <motion.div
                  key={k}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className=&quot;glow-card rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left&quot;
                >
                  <div className=&quot;text-lg font-bold text-white&quot;>{k}</div>
                  <div className=&quot;text-xs text-white/70&quot;>{v}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;>
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Features</h2>
          <div className=&quot;mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3&quot;>
            {[
              { title: 'Self‑Improving', desc: 'Agents continuously analyze, invent, and evolve automations.' },
              { title: 'Repo Sync', desc: 'Changes are committed and pushed automatically to main.' },
              { title: 'Zero Ops', desc: 'Runs fully in the cloud—no servers or manual intervention.' },
              { title: 'Safety‑First', desc: 'Conservative edits with logs, reports, and guardrails.' },
              { title: 'Scalable', desc: 'Generates domain‑specific factories on demand.' },
              { title: 'Observability', desc: 'Dashboards, reports, and GitHub Actions artifacts.' }].map((f) => (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className=&quot;group glow-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:border-cyan-400/30&quot;
              >
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <h3 className=&quot;text-lg font-semibold&quot;>{f.title}</h3>
                <p className=&quot;mt-1 text-sm text-white/75&quot;>{f.desc}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;>
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Capabilities</h2>
          <div className=&quot;mt-6 grid grid-cols-1 gap-5 md:grid-cols-3&quot;>
            {[
              { title: 'Code Quality & Refactors', desc: 'Lints, fixes, and proposes refactors with type‑safety improvements.' },
              { title: 'Performance & A11y', desc: 'Optimizes bundles, assets, and accessibility with continuous checks.' },
              { title: 'Content & SEO', desc: 'Curates content, updates promotions, and tunes metadata for reach.' }].map((c) => (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className=&quot;relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl&quot;
              >
                <div className=&quot;absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-cyan-400/10 blur-2xl&quot; />
                <h3 className=&quot;text-lg font-semibold&quot;>{c.title}</h3>
                <p className=&quot;mt-1 text-sm text-white/75&quot;>{c.desc}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className=&quot;mx-auto max-w-7xl px-6 pb-20&quot;>
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Benefits</h2>
          <div className=&quot;mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-3 md:grid-cols-2&quot;>
            {[
              '24/7 progress without human interventionRapid feedback loop with safe, incremental editsContinuous delivery directly to main branchFewer regressions via layered checks and reports'].map((b) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className=&quot;flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md&quot;
              >
                <span className=&quot;mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]&quot; />
                <span className=&quot;text-sm text-white/80&quot;>{b}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className=&quot;mx-auto max-w-7xl px-6 pb-24&quot;>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className=&quot;animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl&quot;
          >
            <h3 className=&quot;text-2xl font-bold&quot;>Ready to build with autonomous cloud agents?</h3>
            <p className=&quot;mx-auto mt-2 max-w-2xl text-white/80&quot;>Scale development with a tireless fleet of self‑improving automations.</p>
            <div className=&quot;mt-6 flex flex-wrap justify-center gap-3&quot;>
              <Link href=&quot;/services&quot;><a className=&quot;rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover:bg-white&quot;>Get Started</Link></Link>
              <Link href=&quot;/automation&quot;><a className=&quot;rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10&quot;>View Automations</Link></Link>
            </div>
          </motion.div>
        </section>

        {/* Explore more */}
          </div>
        </section>
      </main>
    </div>
  )
}