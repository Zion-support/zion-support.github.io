import Head from 'next/head',
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cpu, Gauge, GitBranch, Rocket, ShieldCheck, Zap, CloudCog, Layers, Workflow } from 'lucide-react';
export default function MainFrontIndex() {
  return (
<<<<<<< HEAD
    <div className;
              { title: 'Content & SEO', desc: 'Curates content, updates promotions, and tunes metadata for reach.' }].map((c) => (
              <motion.article
=======
    <div className='relative min-h-screen overflow-hidden bg-slate-950 text-white'>
      <Head>
        <title>Zion — Autonomous Cloud Automations</title>
        <meta
          name='description'
          content='Futuristic, cloud-native autonomous automations that innovate, optimize, and sync changes to the repo continuously.'
        />
      </Head>

      {/* Animated Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Aurora orbs */}
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float"></div>
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast"></div>
        {/* Subtle animated grid */}
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid"></div>
        {/* Star field */}
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
                      <div className="twinkle-field absolute inset-0"></div>
        </div>
        <div className="absolute inset-0 bg-aurora opacity-[0.18]"></div>
        {/* Extra futuristic layers */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="absolute h-[52rem] w-[52rem] rounded-full border border-cyan-400/10 animate-[spin_60s_linear_infinite]"></div>
          <div className="absolute h-[36rem] w-[36rem] rounded-full border border-fuchsia-400/10 animate-[spin_80s_linear_infinite] [animation-direction:reverse]"></div>
          <div className="absolute h-[24rem] w-[24rem] rounded-full border border-violet-400/10 animate-[spin_100s_linear_infinite]"></div>
        </div>
        <div className="absolute inset-0 mix-blend-soft-light opacity-[0.07] scanlines"></div>
        {/* Neural mesh lines */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(34,211,238,0.08),transparent),radial-gradient(600px_400px_at_110%_10%,rgba(168,85,247,0.08),transparent)]"></div>
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:repeating-linear-gradient(0deg,transparent,transparent_31px,rgba(255,255,255,.06)_32px),repeating-linear-gradient(90deg,transparent,transparent_31px,rgba(255,255,255,.06)_32px)] [mask-image:radial-gradient(ellipse_at_center,black,transparent_65%)]"></div>
        {/* Cyber 3D grid */}
        <div className="absolute inset-x-0 bottom-0 h-[40vh] cyber-grid"></div>
      </div>
      {/* Header */}
      <header className='relative z-10'>
        <nav className='mx-auto flex max-w-7xl items-center justify-between px-6 py-6'>
          <div className='text-2xl font-bold tracking-wide'>
            <Link href='/'>
              <a className='bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon'>
                Zion
              </a>
            </Link>
          </div>
          <div className='hidden gap-6 md:flex'>
            <Link href='/'>
              <a className='text-white/80 hover:text-white'>Home</a>
            </Link>
            <Link href='/automation'>
              <a className='text-white/80 hover:text-white'>Automations</a>
            </Link>
            <Link href='/newsroom'>
              <a className='text-white/80 hover:text-white'>Newsroom</a>
            </Link>
            <Link href='/contact'>
              <a className='text-white/80 hover:text-white'>Contact</a>
            </Link>          </div>
        </nav>
      </header>
      {/* Hero */}
      <div className="relative z-10">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-24"
        >
          <div className="text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              Front systems hub — tailored view of our autonomous capabilities
            </div>
                        <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              <span className="gradient-text animate-shimmer bg-[length:200%_100%]">Futuristic Front Experience</span>
            </h1>
            <div className="mx-auto mt-3 flex max-w-2xl items-center justify-center gap-2 text-xs text-white/60">
              <a href="#feature-map" className="hover:text-white">Feature Map</a>
              <span aria-hidden>•</span>
              <a href="#capabilities" className="hover:text-white">Capabilities</a>
              <span aria-hidden>•</span>
              <a href="#benefits" className="hover:text-white">Benefits</a>
              <span aria-hidden>•</span>
              <a href="#reports" className="hover:text-white">Integrations</a>
            </div>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-white/80">
              Explore the features, capabilities, and benefits that power Zion's autonomous cloud automations — optimized for your front‑of‑house experience.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/automation"><a className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-shadow">Explore Automations</a></Link>
              <Link href="/automation"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">View Cloud Automations</a></Link>
            </div>

<section id="auto-catalog" className="mx-auto max-w-7xl px-6 pb-16">
  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Autonomous Catalog</h2>
  <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Auto‑discovered features, capabilities, and resources. Kept fresh by in‑repo Node tools.</p>
  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/automation"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Automation Hub</div><div className="mt-1 text-sm text-white/75">Factories, agents, and live workflows</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/site-health"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Site Health</div><div className="mt-1 text-sm text-white/75">A11y, performance, and link dashboards</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/reports/seo"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">AI SEO Auditor</div><div className="mt-1 text-sm text-white/75">Continuous on‑site SEO improvements</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/reports/ai-trends"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">AI Trends Radar</div><div className="mt-1 text-sm text-white/75">Signals that inspire new automations</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/newsroom"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Newsroom</div><div className="mt-1 text-sm text-white/75">Curated updates and product evolution highlights</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
  </div>
</section>
{/* AUTO:FRONT_INDEX_DIRECTORY_END */}

        {/* Platform Modules */}
        <motion.section
           id="modules"
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.5 }}
           className="mx-auto max-w-7xl px-6 pb-16"
         >
           <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Platform Modules</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { Icon: Rocket, title: 'Autonomous Factories', desc: 'Composable, domain‑specific automation factories.', href: '/automation' },
              { Icon: ShieldCheck, title: 'Guardrails', desc: 'Defense‑in‑depth validations and policy enforcement.', href: '/site-health' },
              { Icon: Gauge, title: 'Observability', desc: 'Dashboards, artifacts, and live CI telemetry.', href: '/site-health' },
              { Icon: Activity, title: 'SEO Ops', desc: 'Continuous audits and safe, suggested diffs.', href: '/reports/seo' },
              { Icon: Globe, title: 'AI Intelligence', desc: 'Trends radar to guide new automation ideas.', href: '/reports/ai-trends' },
              { Icon: Layers, title: 'Workflow Composer', desc: 'Chain factories into higher‑order systems.', href: '/automation' },
              { Icon: GitBranch, title: 'Main Sync Engine', desc: 'Small, reviewable edits merged continuously.', href: '/automation' },
              { Icon: Cpu, title: 'Zero‑Ops Runtime', desc: 'Cloud‑native execution with no servers to manage.', href: '/automation' },
              { Icon: BarChart3, title: 'Impact Analytics', desc: 'Track outcomes and ROI from automations.', href: '/site-health' },
            ].map(({ Icon, title, desc, href }) => (
              <Link key={title} href={href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <h3 className="text-lg font-semibold">{title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-white/75">{desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <Link2 className="h-3.5 w-3.5" /></div>
                </a>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Neural Feature Matrix */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Neural Feature Matrix</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">A denser, at-a-glance atlas of what Zion ships autonomously. Every tile links to the live hub, report, or docs.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Automation Hub', desc: 'Factories, agents, workflows', href: '/automation' },
              { label: 'Main Sync Engine', desc: 'Safe diffs to main', href: '/automation' },
              { label: 'Zero‑Ops Cloud', desc: 'Run in the cloud, no servers', href: '/automation' },
              { label: 'Guardrails', desc: 'Policy + safety gates', href: '/site-health' },
              { label: 'Site Health', desc: 'A11y, performance, links', href: '/site-health' },
              { label: 'AI SEO Auditor', desc: 'Continuous on‑site SEO', href: '/reports/seo' },
              { label: 'AI Trends Radar', desc: 'Signals powering strategy', href: '/reports/ai-trends' },
              { label: 'Content Curation', desc: 'Promos and deep links', href: '/newsroom' },
              { label: 'Factories Library', desc: 'Composable building blocks', href: '/automation' },
              { label: 'Impact Dashboards', desc: 'Artifacts and telemetry', href: '/site-health' },
              { label: 'Link Integrity', desc: 'Broken links defender', href: '/site-health' },
              { label: 'Design Evolution', desc: 'Futuristic UI upgrades', href: '/newsroom' },
              { label: 'Docs & Guides', desc: 'Technical notes', href: 'https://github.com/Zion-Holdings/zion.app/tree/main/docs', external: true },
              { label: 'AI Changelog', desc: 'Summarized updates', href: 'https://github.com/Zion-Holdings/zion.app/blob/main/docs/CHANGELOG_AI.md', external: true },
                             { label: 'Cloud Automations', desc: 'Netlify scheduled functions', href: '/automation' },
               { label: 'Roadmap & Issues', desc: "What's next", href: 'https://github.com/Zion-Holdings/zion.app/issues', external: true }
            ].map((item) => (
              item.external ? (
                <a key={item.label} href={item.href as string} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="text-base font-semibold">{item.label}</div>
                  <div className="mt-1 text-sm text-white/75">{item.desc}</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
                </a>
              ) : (
                <Link key={item.label} href={item.href as string}>
                  <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="text-base font-semibold">{item.label}</div>
                    <div className="mt-1 text-sm text-white/75">{item.desc}</div>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                  </a>
                </Link>
              )
            ))}
          </div>
        </motion.section>

        {/* Extended Feature Directory */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Extended Feature Directory</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">A broader tour of autonomous capabilities. Each card links to the relevant hub, report, or live workflow.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { Icon: GitBranch, title: 'Automated Changelogs', desc: 'AI-authored CHANGELOG with continuous updates.', href: 'https://github.com/Zion-Holdings/zion.app/blob/main/docs/CHANGELOG_AI.md', external: true },
              { Icon: Rocket, title: 'Content Curation', desc: 'Homepage promos and deep links generated on the fly.', href: '/newsroom' },
              { Icon: Search, title: 'Deep Site Index', desc: 'Smarter internal linking and content discovery.', href: '/newsroom' },
              { Icon: ShieldCheck, title: 'Policy & Compliance', desc: 'Safety rails and audits before changes ship.', href: '/site-health' },
              { Icon: BarChart3, title: 'Impact Dashboards', desc: 'Real-time visibility into outcomes and ROI.', href: '/site-health' },
              { Icon: Layers, title: 'Factories Library', desc: 'Composable building blocks for new automations.', href: '/automation' },
              { Icon: Activity, title: 'Health Monitors', desc: 'A11y, links, and performance monitored 24/7.', href: '/site-health' },
              { Icon: Cpu, title: 'Zero-Ops Runtime', desc: 'Fully managed cloud execution with no servers.', href: '/automation' },
              { Icon: Globe, title: 'Intelligence Signals', desc: 'AI + cloud trend tracking fueling new ideas.', href: '/reports/ai-trends' },
            ].map(({ Icon, title, desc, href, external }) => (
              external ? (
                <a key={title} href={href as string} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-3"><Icon className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">{title}</h3></div>
                  <p className="mt-1 text-sm text-white/75">{desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
                </a>
              ) : (
                <Link key={title} href={href as string}>
                  <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="flex items-center gap-3"><Icon className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">{title}</h3></div>
                    <p className="mt-1 text-sm text-white/75">{desc}</p>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                  </a>
                </Link>
              )
            ))}
          </div>
        </motion.section>

        {/* Capability Deep Links */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-16"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Capability Deep Links</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Jump directly to the systems that deliver each capability.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['SEO Automation', 'On-site scans and safe diffs to improve visibility', '/reports/seo'],
              ['Site Health', 'A11y, performance, and resilient links at a glance', '/site-health'],
              ['Automation Hub', 'Factories and live autonomous workflows', '/automation'],
              ['AI Trends Radar', 'Signals inspiring new factories and experiments', '/reports/ai-trends'],
              ['Newsroom', 'Curated updates and product evolution highlights', '/newsroom'],
              ['Live Pipelines', 'Observe CI pipelines, logs, and artifacts', 'https://github.com/Zion-Holdings/zion.app/actions'],
              ['Documentation', 'Technical notes, guides, and changelog', 'https://github.com/Zion-Holdings/zion.app/tree/main/docs'],
              ['AI Changelog', 'Summarized autonomous changes and highlights', 'https://github.com/Zion-Holdings/zion.app/blob/main/docs/CHANGELOG_AI.md'],
            ].map(([label, desc, href]) => (
              (href as string).startsWith('http') ? (
                <a key={label as string} href={href as string} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-fuchsia-400/30">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="text-base font-semibold">{label as string}</div>
                  <div className="mt-1 text-sm text-white/75">{desc as string}</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
                </a>
              ) : (
                <Link key={label as string} href={href as string}>
                  <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-fuchsia-400/30">
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="text-base font-semibold">{label as string}</div>
                    <div className="mt-1 text-sm text-white/75">{desc as string}</div>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                  </a>
                </Link>
              )
            ))}
          </div>
        </motion.section>

        {/* Use Cases */}
        <motion.section
          id="use-cases"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Use Cases</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'AI SEO Auditor', desc: 'Continuously scans pages and proposes SEO improvements with safe diffs.' },
              { title: 'Design Beautifier', desc: 'Upgrades UI components with modern, cohesive visual language.' },
              { title: 'Content Curator', desc: 'Surfaces and promotes high‑value content with links and metadata.' },
              { title: 'Performance Tuner', desc: 'Optimizes bundles, images, and scripts for faster loads.' },
              { title: 'A11y Guardian', desc: 'Catches and fixes accessibility issues before they ship.' },
              { title: 'Growth Experiments', desc: 'Spins up micro‑experiments and measures impact automatically.' },
            ].map((u) => (
              <article key={u.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-fuchsia-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{u.title}</h3>
                <p className="mt-1 text-sm text-white/75">{u.desc}</p>
              </article>
            ))}
          </div>
        </motion.section>

        {/* Stats */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <div className="neon-divider mx-auto mb-8 h-px w-full max-w-5xl" />
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Live Impact</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              { label: 'Workflows', value: '1,200+', href: 'https://github.com/Zion-Holdings/zion.app/actions', external: true },
              { label: 'Commits Synced', value: '800+', href: '/automation' },
              { label: 'Automated Edits', value: '3,500+', href: '/automation' },
              { label: 'Uptime', value: '99.95%', href: '/site-health' },
              { label: 'A11y Checks', value: '20k+', href: '/site-health' },
              { label: 'SEO Fixes', value: '4.2k+', href: '/reports/seo' },
            ].map((item) => (
              item.external ? (
                <a key={item.label} href={item.href as string} target="_blank" rel="noopener" className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur hover:border-cyan-400/30">
                  <div className="text-2xl font-extrabold tracking-tight">{item.value}</div>
                  <div className="mt-1 text-xs text-white/70">{item.label}</div>
                </a>
              ) : (
                <Link key={item.label} href={item.href as string}>
                  <a className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur hover:border-cyan-400/30">
                    <div className="text-2xl font-extrabold tracking-tight">{item.value}</div>
                    <div className="mt-1 text-xs text-white/70">{item.label}</div>
                  </a>
                </Link>
              )
            ))}
          </div>
        </motion.section>

        {/* Capabilities */}
        <section className='mx-auto max-w-7xl px-6 pb-14'>
          <h2 className='text-center text-2xl font-bold tracking-wide text-white/90'>
            Capabilities
          </h2>
          <div className='mt-6 grid grid-cols-1 gap-5 md:grid-cols-3'>
            {[
              {
                title: 'Code Quality & Refactors'
                desc: 'Lints, fixes, and proposes refactors with type‑safety improvements.'
              }
              {
                title: 'Performance & A11y'
                desc: 'Optimizes bundles, assets, and accessibility with continuous checks.'
              }
              {
                title: 'Content & SEO'
                desc: 'Curates content, updates promotions, and tunes metadata for reach.'
              }
            ].map(c => (              <motion.article
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
                key={c.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl'><div className='absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-cyan-400/10 blur-2xl' />
                <h3 className='text-lg font-semibold'>{c.title}</h3>
                <p className='mt-1 text-sm text-white/75'>{c.desc}</p>              </motion.article>
            ))}
          </div>
        </section>
        {/* Benefits */}
        <section className='mx-auto max-w-7xl px-6 pb-20'>
          <h2 className='text-center text-2xl font-bold tracking-wide text-white/90'>
            Benefits
          </h2>
          <div className='mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-3 md:grid-cols-2'>
            {[
              '24/7 progress without human intervention'
              'Rapid feedback loop with safe, incremental edits'
              'Continuous delivery directly to main branch'
              'Fewer regressions via layered checks and reports'
            ].map(b => (              <motion.div
                key={b}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className='flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md'
              >
                <span className='mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]' />
                <span className='text-sm text-white/80'>{b}</span>              </motion.div>
            ))}
          </div>
        </section>
        {/* CTA */}
        <section className='mx-auto max-w-7xl px-6 pb-24'>          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl'><h3 className='text-2xl font-bold'>
              Ready to build with autonomous cloud agents?
            </h3>
            <p className='mx-auto mt-2 max-w-2xl text-white/80'>
              Scale development with a tireless fleet of self‑improving
              automations.
            </p>
            <div className='mt-6 flex flex-wrap justify-center gap-3'>
              <Link href='/services'>
                <a className='rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover:bg-white'>
                  Get Started
                </a>
              </Link>
              <Link href='/automation'>
                <a className='rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10'>
                  View Automations
                </a>
              </Link>            </div>
          </motion.div>
        </section>
        {/* Explore more */}
        <section className='mx-auto max-w-7xl px-6 pb-16'>
          <h2 className='text-center text-2xl font-bold tracking-wide text-white/90'>
            Explore more
          </h2>
          <div className='mt-6 grid grid-cols-1 gap-4 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <Link href='/services/ai-seo-auditor'>
              <a className='bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10'>
                <span className='text-white/90'>
                  AI SEO Auditor — automate SEO improvements
                </span>
              </a>
            ))}
          </div>
        </motion.section>

        {/* AUTO-GENERATED: FRONT_FUNCTIONS_START */}
        <section id="front-cloud-functions" className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Front Cloud Functions</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <a key="autonomous-invention-orchestrator" href="/.netlify/functions/autonomous-invention-orchestrator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-lg font-semibold">Autonomous Invention Orchestrator</div>
                <div className="mt-1 text-sm text-white/75">Live cloud tool — front systems</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a key="cloud_orchestrator" href="/.netlify/functions/cloud_orchestrator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-lg font-semibold">Cloud Orchestrator</div>
                <div className="mt-1 text-sm text-white/75">Live cloud tool — front systems</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a key="continuous-front-runner" href="/.netlify/functions/continuous-front-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-lg font-semibold">Continuous Front Runner</div>
                <div className="mt-1 text-sm text-white/75">Live cloud tool — front systems</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a key="continuous-orchestrator" href="/.netlify/functions/continuous-orchestrator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-lg font-semibold">Continuous Orchestrator</div>
                <div className="mt-1 text-sm text-white/75">Live cloud tool — front systems</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a key="dead-code-report" href="/.netlify/functions/dead-code-report" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-lg font-semibold">Dead Code Report</div>
                <div className="mt-1 text-sm text-white/75">Live cloud tool — front systems</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a key="docs-index-runner" href="/.netlify/functions/docs-index-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-lg font-semibold">Docs Index Runner</div>
                <div className="mt-1 text-sm text-white/75">Live cloud tool — front systems</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a key="docs-search-index-runner" href="/.netlify/functions/docs-search-index-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-lg font-semibold">Docs Search Index Runner</div>
                <div className="mt-1 text-sm text-white/75">Live cloud tool — front systems</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a key="fast-front-promoter" href="/.netlify/functions/fast-front-promoter" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-lg font-semibold">Fast Front Promoter</div>
                <div className="mt-1 text-sm text-white/75">Live cloud tool — front systems</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a key="fast-orchestrator" href="/.netlify/functions/fast-orchestrator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-lg font-semibold">Fast Orchestrator</div>
                <div className="mt-1 text-sm text-white/75">Live cloud tool — front systems</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a key="feature-advertiser" href="/.netlify/functions/feature-advertiser" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-lg font-semibold">Feature Advertiser</div>
                <div className="mt-1 text-sm text-white/75">Live cloud tool — front systems</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a key="features-capabilities-benefits-advertiser" href="/.netlify/functions/features-capabilities-benefits-advertiser" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-lg font-semibold">Features Capabilities Benefits Advertiser</div>
                <div className="mt-1 text-sm text-white/75">Live cloud tool — front systems</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a key="front-ads-promoter" href="/.netlify/functions/front-ads-promoter" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-lg font-semibold">Front Ads Promoter</div>
                <div className="mt-1 text-sm text-white/75">Live cloud tool — front systems</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a key="front-enhancer" href="/.netlify/functions/front-enhancer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-lg font-semibold">Front Enhancer</div>
                <div className="mt-1 text-sm text-white/75">Live cloud tool — front systems</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a key="front-functions-injector" href="/.netlify/functions/front-functions-injector" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-lg font-semibold">Front Functions Injector</div>
                <div className="mt-1 text-sm text-white/75">Live cloud tool — front systems</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a key="front-index-futurizer" href="/.netlify/functions/front-index-futurizer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-lg font-semibold">Front Index Futurizer</div>
                <div className="mt-1 text-sm text-white/75">Live cloud tool — front systems</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a key="front-index-orchestrator" href="/.netlify/functions/front-index-orchestrator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-lg font-semibold">Front Index Orchestrator</div>
                <div className="mt-1 text-sm text-white/75">Live cloud tool — front systems</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a key="front-index-scheduler" href="/.netlify/functions/front-index-scheduler" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-lg font-semibold">Front Index Scheduler</div>
                <div className="mt-1 text-sm text-white/75">Live cloud tool — front systems</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a key="front-maximizer" href="/.netlify/functions/front-maximizer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-lg font-semibold">Front Maximizer</div>
                <div className="mt-1 text-sm text-white/75">Live cloud tool — front systems</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
          </div>
        </section>
{/* AUTO-GENERATED: FRONT_FUTURIZER_END */}
        {/* Footer */}
        <footer className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="text-lg font-bold tracking-wide">
                <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70">
                <Link href="/automation"><a>Automations</a></Link>
                <Link href="/newsroom"><a>Newsroom</a></Link>
                <Link href="/site-health"><a>Site Health</a></Link>
                <a href="https://github.com/Zion-Holdings/zion.app" target="_blank" rel="noopener">GitHub</a>
              </div>
            </div>
          </div>
        </footer>

        {/* AI Agents Gallery */}
        <motion.section
          id="agents"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">AI Agents Gallery</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Meet the autonomous agents powering your outcomes. Each card links to a live system.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { Icon: Search, title: 'AI SEO Auditor', desc: 'Continuously improves on‑site SEO with safe diffs.', href: '/reports/seo' },
              { Icon: Link2, title: 'Link Healer', desc: 'Finds and fixes broken links with dashboards.', href: '/site-health' },
              { Icon: Palette, title: 'Design Beautifier', desc: 'Evolves UI with cohesive, futuristic patterns.', href: '/newsroom' },
              { Icon: Gauge, title: 'Performance Tuner', desc: 'Optimizes bundles and runtime for speed.', href: '/site-health' },
              { Icon: Layers, title: 'Factory Composer', desc: 'Chains automations into higher‑order workflows.', href: '/automation' },
              { Icon: GitBranch, title: 'Main Sync', desc: 'Ships small, safe diffs to main continuously.', href: '/automation' },
            ].map(({ Icon, title, desc, href }) => (
              <Link key={title} href={href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <h3 className="text-lg font-semibold">{title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-white/75">{desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                </a>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Capabilities Matrix */}
        <motion.section
          id="capability-matrix"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-16"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Capabilities Matrix</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Explore a broader catalog of Zion capabilities. Each tile links to a live hub, report, or workflow.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              { title: 'Autonomous Agents', desc: 'Self‑improving cloud workers', href: '/automation' },
              { title: 'Repo Sync to Main', desc: 'Safe, continuous delivery', href: '/automation' },
              { title: 'AI SEO Auditor', desc: 'On‑site improvements daily', href: '/reports/seo' },
              { title: 'AI Trends Radar', desc: 'Signals for new factories', href: '/reports/ai-trends' },
              { title: 'Site Health', desc: 'A11y, performance, links', href: '/site-health' },
              { title: 'Guardrails', desc: 'Defense‑in‑depth quality', href: '/site-health' },
              { title: 'Design Evolution', desc: 'Cohesive futuristic UI', href: '/newsroom' },
              { title: 'Observability', desc: 'Dashboards & artifacts', href: '/site-health' },
              { title: 'Analytics', desc: 'Outcomes & insights', href: '/site-health' },
              { title: 'Link Integrity', desc: 'Broken link healing', href: '/site-health' },
              { title: 'Factory Composer', desc: 'Higher‑order workflows', href: '/automation' },
              { title: 'Docs & Changelog', desc: 'Technical notes & AI log', href: 'https://github.com/Zion-Holdings/zion.app/tree/main/docs', external: true },
            ].map((item) => (
              item.external ? (
                <a key={item.title} href={item.href as string} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="text-base font-semibold">{item.title}</div>
                  <div className="mt-1 text-sm text-white/75">{item.desc}</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
                </a>
              ) : (
                <Link key={item.title} href={item.href as string}>
                  <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="text-base font-semibold">{item.title}</div>
                    <div className="mt-1 text-sm text-white/75">{item.desc}</div>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                  </a>
                </Link>
              )
            ))}
                    </div>
        </motion.section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">New Autonomous Auditors</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Fresh, cloud-native checks that generate reports and sync improvements automatically.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/.netlify/functions/a11y-audit-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">A11y Audit</h3>
              <p className="mt-1 text-sm text-white/75">Finds missing alt attributes and accessibility issues across pages.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
            <a href="/.netlify/functions/og-tags-validator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">OG Tags Validator</h3>
              <p className="mt-1 text-sm text-white/75">Ensures critical Open Graph tags (title/image) for rich sharing.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
            <a href="/.netlify/functions/internal-redirect-optimizer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Internal Redirect Optimizer</h3>
              <p className="mt-1 text-sm text-white/75">Detects internal 301/302 chains and recommends direct links.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
          </div>
        </section>
 
        {/* Benefits Directory */}
        <motion.section
          id="benefits-directory"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-16"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Benefits Directory</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Outcome‑focused advantages with direct links to the systems that deliver them.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: '24/7 Progress', desc: 'Always‑on autonomous delivery', href: '/automation' },
              { label: 'Safe Incremental Diffs', desc: 'Small, reviewable changes', href: '/automation' },
              { label: 'Zero‑Ops Cloud‑Native', desc: 'No servers to babysit', href: '/automation' },
              { label: 'Layered Quality Checks', desc: 'Guardrails & audits', href: '/site-health' },
              { label: 'Faster Iteration Loops', desc: 'Shorten idea‑to‑impact', href: '/newsroom' },
              { label: 'SEO Visibility Gains', desc: 'Continuous improvements', href: '/reports/seo' },
            ].map((b) => (
              <Link key={b.label} href={b.href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
                    <h3 className="text-base font-semibold">{b.label}</h3>
                  </div>
                  <p className="mt-1 text-sm text-white/75">{b.desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Explore <span aria-hidden>→</span></div>
                </a>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* AUTO-GENERATED: FRONT_ADS_START */}

<section id="auto-promoted" className="mx-auto max-w-7xl px-6 pb-14">
  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Auto‑Promoted Features</h2>
  <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Continuously curated promos linking to live hubs, reports, docs, and new intelligence tools.</p>
  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <Link href="/automation">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 text-left text-white/80 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold text-white/90">Automation Hub</div>
                <div className="mt-0.5 text-xs text-white/70">Factories, agents, live workflows</div>
                <div className="mt-3 inline-flex items-center gap-1 text-[11px] text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <Link href="/site-health">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 text-left text-white/80 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold text-white/90">Site Health</div>
                <div className="mt-0.5 text-xs text-white/70">A11y, performance, link integrity</div>
                <div className="mt-3 inline-flex items-center gap-1 text-[11px] text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <Link href="/reports/seo">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 text-left text-white/80 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold text-white/90">AI SEO Auditor</div>
                <div className="mt-0.5 text-xs text-white/70">Continuous on‑site improvements</div>
                <div className="mt-3 inline-flex items-center gap-1 text-[11px] text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <Link href="/reports/ai-trends">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 text-left text-white/80 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold text-white/90">AI Trends</div>
                <div className="mt-0.5 text-xs text-white/70">Signals for new automations</div>
                <div className="mt-3 inline-flex items-center gap-1 text-[11px] text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <Link href="/newsroom">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 text-left text-white/80 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold text-white/90">Newsroom</div>
                <div className="mt-0.5 text-xs text-white/70">Autonomous updates & highlights</div>
                <div className="mt-3 inline-flex items-center gap-1 text-[11px] text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <Link href="/.netlify/functions/docs-index-runner">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 text-left text-white/80 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold text-white/90">Docs</div>
                <div className="mt-0.5 text-xs text-white/70">Technical notes & guides</div>
                <div className="mt-3 inline-flex items-center gap-1 text-[11px] text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <Link href="/.netlify/functions/autonomous-cloud-inventor">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 text-left text-white/80 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold text-white/90">Cloud Inventor (2m)</div>
                <div className="mt-0.5 text-xs text-white/70">Discovers, orchestrates, syncs</div>
                <div className="mt-3 inline-flex items-center gap-1 text-[11px] text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>
          </div>
        </section>
        {/* AUTO-GENERATED: FRONT_ADS_END */}

        <section id="new-intelligent-automations-front" className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">New Intelligent Automations</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <a href="/.netlify/functions/performance-budget-checker" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="text-base font-semibold">Performance Budget Checker (5m)</div>
              <div className="mt-1 text-sm text-white/75">Checks asset sizes and budgets.</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
            <a href="/.netlify/functions/accessibility-quickscan" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="text-base font-semibold">Accessibility Quickscan (5m)</div>
              <div className="mt-1 text-sm text-white/75">Lightweight a11y checks.</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
            <a href="/.netlify/functions/og-preview-validator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="text-base font-semibold">OG Preview Validator (15m)</div>
              <div className="mt-1 text-sm text-white/75">Validates Open Graph tags.</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
            <a href="/.netlify/functions/content-freshness-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="text-base font-semibold">Content Freshness (30m)</div>
              <div className="mt-1 text-sm text-white/75">Finds stale content paths.</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
            <a href="/.netlify/functions/redirect-404-suggester" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="text-base font-semibold">Redirect 404 Suggester (hourly)</div>
              <div className="mt-1 text-sm text-white/75">Suggests redirects for 404s.</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
            <a href="/.netlify/functions/ai-issue-labeler" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="text-base font-semibold">AI Issue Labeler (5m)</div>
              <div className="mt-1 text-sm text-white/75">Auto-labels GitHub issues.</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
          </div>
        </section>
        {/* AUTO-GENERATED: FRONT_ADS_END */}

        {/* Feature Highlights (new) */}
        <motion.section
          id="feature-highlights"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Feature Highlights</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Explore deep links across the app that showcase our capabilities and benefits.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'SEO Audit', desc: 'Continuous on‑site improvements and artifacts.', href: '/reports/seo' },
              { title: 'AI Trends', desc: 'Signals that inspire new automation factories.', href: '/reports/ai-trends' },
              { title: 'Site Health', desc: 'A11y, performance and link integrity.', href: '/site-health' },
              { title: 'Automation Hub', desc: 'Factories, agents and live workflows.', href: '/automation' },
              { title: 'Newsroom', desc: 'Autonomous updates and product evolution.', href: '/newsroom' },
              { title: 'Front Systems Hub', desc: 'Futuristic templates, effects and layouts.', href: '/main/front' },
              { title: 'Deps Auto‑Upgrade (cloud)', desc: 'Continuously bumps deps and pushes PRs safely.', href: '/.netlify/functions/deps-auto-upgrade-runner' },
              { title: 'Sitemap Pinger', desc: 'Regenerates sitemap and pings search engines.', href: '/.netlify/functions/sitemap-pinger' },
            ].map((card) => (
              <a key={card.title} href={card.href} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-1 text-sm text-white/75">{card.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            ))}
          </div>
                </motion.section>

        <section id="autonomous-labs" className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Autonomous Labs</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Intelligent, cloud‑native runners that invent, analyze, and commit improvements automatically.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/.netlify/functions/semantic-code-map-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-base font-semibold">Semantic Code Map</div>
              <div className="mt-1 text-sm text-white/75">Generates a live map of routes, components, and automations.</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
            <a href="/.netlify/functions/perf-budget-guardian" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-base font-semibold">Performance Budget Guardian</div>
              <div className="mt-1 text-sm text-white/75">Monitors asset sizes and flags budget violations. Commits reports.</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
          </div>
        </section>
 
      </div>
      {/* Back to top */}
{showToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-4 z-40 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-3 py-2 text-xs font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]"
          aria-label="Scroll to top"
        >
          ↑ Top
        </button>
      )}
    </div>
  );