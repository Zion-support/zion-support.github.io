import Head from 'next/head';
import Link from 'next/link';
import { Cpu, Gauge, GitBranch, Rocket, ShieldCheck, Zap, Activity, Globe, Layers, BarChart3, Search, Link2, Palette, LineChart } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function MainFrontIndex() {
  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, { stiffness: 90, damping: 20, mass: 0.2 });
  const [showToTop, setShowToTop] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowToTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true } as any);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className=&quot;relative min-h-screen overflow-hidden bg-slate-950 text-white&quot;>
      <Head>
        <title>Zion — Front Systems Hub | Autonomous Cloud Automations</title>
        <meta name=&quot;description&quot; content=&quot;Futuristic front experience showcasing Zion's autonomous cloud automations — features, capabilities, and benefits.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Zion — Front Systems Hub&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Explore the features, capabilities, and benefits behind our autonomous cloud automations.&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:image&quot; content=&quot;/og-image.png&quot; />
      </Head>
      {/* Scroll progress bar */}
      <motion.div style={{ scaleX: progressX }} className=&quot;fixed inset-x-0 top-0 z-40 h-0.5 origin-left bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400&quot; />
      {/* Animated Background */}
      <div aria-hidden className=&quot;pointer-events-none absolute inset-0 -z-10&quot;>
        {/* Aurora orbs */}
        <div className=&quot;absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float&quot; />
        <div className=&quot;absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow&quot; />
        <div className=&quot;absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast&quot; />
        {/* Subtle animated grid */}
        <div className=&quot;absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid&quot; />
        <div className=&quot;absolute inset-0 opacity-[0.06] hex-grid&quot; />
        {/* Star field */}
        <div className=&quot;absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]&quot;>
          <div className=&quot;twinkle-field absolute inset-0&quot; />
        </div>
        <div className=&quot;absolute inset-0 bg-aurora opacity-[0.18]&quot; />
        {/* Extra futuristic layers */}
        <div className=&quot;absolute inset-0 flex items-center justify-center opacity-30&quot;>
          <div className=&quot;absolute h-[52rem] w-[52rem] rounded-full border border-cyan-400/10 animate-[spin_60s_linear_infinite]&quot; />
          <div className=&quot;absolute h-[36rem] w-[36rem] rounded-full border border-fuchsia-400/10 animate-[spin_80s_linear_infinite] [animation-direction:reverse]&quot; />
          <div className=&quot;absolute h-[24rem] w-[24rem] rounded-full border border-violet-400/10 animate-[spin_100s_linear_infinite]&quot; />
        </div>
        <div className=&quot;absolute inset-0 mix-blend-soft-light opacity-[0.07] scanlines&quot; />
        {/* Neural mesh lines */}
        <div className=&quot;pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(34,211,238,0.08),transparent),radial-gradient(600px_400px_at_110%_10%,rgba(168,85,247,0.08),transparent)]&quot; />
        <div className=&quot;pointer-events-none absolute inset-0 opacity-20 [background:repeating-linear-gradient(0deg,transparent,transparent_31px,rgba(255,255,255,.06)_32px),repeating-linear-gradient(90deg,transparent,transparent_31px,rgba(255,255,255,.06)_32px)] [mask-image:radial-gradient(ellipse_at_center,black,transparent_65%)]&quot; />
        {/* Futuristic beams layers */}
        <div className=&quot;absolute inset-0 beams-layer beams-45&quot; />
        <div className=&quot;absolute inset-0 beams-layer beams--45&quot; />
        <div className=&quot;pointer-events-none absolute inset-0 beams opacity-[0.06]&quot; />
      </div>

      {/* Header */}
      <header className=&quot;sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-950/55 border-b border-white/10&quot;>
        <nav className=&quot;mx-auto flex max-w-7xl items-center justify-between px-6 py-4&quot;>
          <div className=&quot;text-2xl font-bold tracking-wide&quot;>
            <span className=&quot;bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon&quot;>Zion</span>
          </div>
          <div className=&quot;hidden items-center gap-6 md:flex&quot;>
            <Link href=&quot;/&quot;><a className=&quot;text-white/80 hover:text-white&quot;>Home</a></a>
            <Link href=&quot;#command-center&quot;><a className=&quot;text-white/80 hover:text-white&quot;>Command</a></a>
            <Link href=&quot;#features&quot;><a className=&quot;text-white/80 hover:text-white&quot;>Features</a></a>
            <Link href=&quot;#feature-map&quot;><a className=&quot;text-white/80 hover:text-white&quot;>Map</a></a>
            <Link href=&quot;#suites&quot;><a className=&quot;text-white/80 hover:text-white&quot;>Suites</a></a>
            <Link href=&quot;#capabilities&quot;><a className=&quot;text-white/80 hover:text-white&quot;>Capabilities</a></a>
            <Link href=&quot;#use-cases&quot;><a className=&quot;text-white/80 hover:text-white&quot;>Use Cases</a></a>
            <Link href=&quot;#pillars&quot;><a className=&quot;text-white/80 hover:text-white&quot;>Pillars</a></a>
            <Link href=&quot;#benefits&quot;><a className=&quot;text-white/80 hover:text-white&quot;>Benefits</a></a>
            <Link href=&quot;#templates&quot;><a className=&quot;text-white/80 hover:text-white&quot;>Templates</a></a>
            <Link href=&quot;#demos&quot;><a className=&quot;text-white/80 hover:text-white&quot;>Demos</a></a>
            <Link href=&quot;#highlights&quot;><a className=&quot;text-white/80 hover:text-white&quot;>Highlights</a></a>
            <Link href=&quot;#cases&quot;><a className=&quot;text-white/80 hover:text-white&quot;>Cases</a></a>
            <Link href=&quot;#reports&quot;><a className=&quot;text-white/80 hover:text-white&quot;>Reports</a></a>
            <Link href=&quot;#roadmap&quot;><a className=&quot;text-white/80 hover:text-white&quot;>Docs</a></a>
            <Link href=&quot;/automation&quot;><a className=&quot;text-white/80 hover:text-white&quot;>Automations</a></a>
          </div>
          <button aria-label=&quot;Open menu&quot; onClick={() => setMobileOpen(true)} className=&quot;md:hidden rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80&quot;>Menu</button>
        </nav>
        {/* Mobile overlay menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=&quot;fixed inset-0 z-40 bg-slate-950/80 backdrop-blur&quot;
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className=&quot;mx-auto mt-20 w-[92%] max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-xl&quot;
              onClick={(e) => e.stopPropagation()}
            >
              <div className=&quot;mb-4 flex items-center justify-between&quot;>
                <div className=&quot;text-lg font-semibold&quot;>Navigate</div>
                <button aria-label=&quot;Close menu&quot; onClick={() => setMobileOpen(false)} className=&quot;rounded-md border border-white/15 bg-white/5 px-2 py-1 text-xs&quot;>Close</button>
              </div>
              <div className=&quot;grid grid-cols-2 gap-3 text-sm&quot;>
                {[
                  ['Home','/'],
                  ['Command','#command-center'],
                  ['Features','#features'],
                  ['Map','#feature-map'],
                  ['Suites','#suites'],
                  ['Capabilities','#capabilities'],
                  ['Use Cases','#use-cases'],
                  ['Pillars','#pillars'],
                  ['Benefits','#benefits'],
                  ['Templates','#templates'],
                  ['Demos','#demos'],
                  ['Highlights','#highlights'],
                  ['Cases','#cases'],
                  ['Reports','#reports'],
                  ['Docs','#roadmap'],
                  ['Automations','/automation']].map(([label, href]) => (
                  (href as string).startsWith('#') ? (
                    <a key={label as string} href={href as string} onClick={() => setMobileOpen(false)} className=&quot;rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10&quot;>{label as string}</a>
                  ) : (
                    <Link key={label as string} href={href as string}>
                      <a onClick={() => setMobileOpen(false)} className=&quot;rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10&quot;>{label as string}</a>
                    </a>
                  )
                ))}
              </div>
              <div className=&quot;mt-4 flex justify-end&quot;>
                <Link href=&quot;/automation&quot;><a onClick={() => setMobileOpen(false)} className=&quot;rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 text-sm font-semibold&quot;>Launch Hub</a></a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </header>

      {/* Hero */}
      <div role=&quot;main&quot; className=&quot;relative z-10&quot;>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=&quot;mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-24&quot;
        >
          <div className=&quot;text-center&quot;>
            <div className=&quot;mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md&quot;>
              <span className=&quot;h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]&quot; />
              Front systems hub — tailored view of our autonomous capabilities
            </div>
                        <h1 className=&quot;mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl&quot;>
              <span className=&quot;gradient-text animate-shimmer bg-[length:200%_100%]&quot;>Futuristic Front Experience</span>
            </h1>
            <div className=&quot;mx-auto mt-3 flex max-w-2xl items-center justify-center gap-2 text-xs text-white/60&quot;>
              <a href=&quot;#feature-map&quot; className=&quot;hover:text-white&quot;>Feature Map</a>
              <span aria-hidden>•</span>
              <a href=&quot;#capabilities&quot; className=&quot;hover:text-white&quot;>Capabilities</a>
              <span aria-hidden>•</span>
              <a href=&quot;#benefits&quot; className=&quot;hover:text-white&quot;>Benefits</a>
              <span aria-hidden>•</span>
              <a href=&quot;#reports&quot; className=&quot;hover:text-white&quot;>Integrations</a>
            </div>
            <p className=&quot;mx-auto mt-5 max-w-3xl text-lg text-white/80&quot;>
              Explore the features, capabilities, and benefits that power Zion's autonomous cloud automations — optimized for your front‑of‑house experience.
            </p>
            <div className=&quot;mt-8 flex flex-wrap justify-center gap-3&quot;>
              <Link href=&quot;/automation&quot;><a className=&quot;rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-shadow&quot;>Explore Automations</a></a>
              <Link href=&quot;/automation&quot;><a className=&quot;rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10&quot;>View Cloud Automations</a></a>
            </div>

            {/* Cloud Automations Spotlight */}
            <div className=&quot;mx-auto mt-6 max-w-5xl text-left&quot;>
              <div className=&quot;mb-2 text-xs uppercase tracking-wide text-white/60&quot;>Cloud Automations (live)</div>
              <div className=&quot;grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4&quot;>
                <a className=&quot;glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10&quot; href=&quot;/.netlify/functions/agent-swarm-orchestrator&quot;>Agent Swarm Orchestrator ↗</a>
                <a className=&quot;glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10&quot; href=&quot;https://github.com/Zion-Holdings/zion.app/actions/workflows/ultra-rapid-sync.yml&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot;>Ultra Rapid Sync →</a>
                <a className=&quot;glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10&quot; href=&quot;https://github.com/Zion-Holdings/zion.app/actions/workflows/automation-advertiser.yml&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot;>Automation Advertiser →</a>
                <a className=&quot;glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10&quot; href=&quot;https://github.com/Zion-Holdings/zion.app/actions/workflows/knowledge-graph-radar.yml&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot;>Knowledge Graph & Radar →</a>
                <a className=&quot;glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10&quot; href=&quot;https://github.com/Zion-Holdings/zion.app/actions/workflows/site-health-guardian.yml&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot;>Site Health Guardian →</a>
                <a className=&quot;glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10&quot; href=&quot;/.netlify/functions/autonomous-meta-orchestrator&quot;>Meta Orchestrator →</a>
                <a className=&quot;glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10&quot; href=&quot;https://github.com/Zion-Holdings/zion.app/actions/workflows/autonomous-error-guardian.yml&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot;>Autonomous Error Guardian →</a>
                <a className=&quot;glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10&quot; href=&quot;https://github.com/Zion-Holdings/zion.app/actions/workflows/a11y-contrast-guardian.yml&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot;>A11y & Contrast Guardian →</a>
                <a className=&quot;glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10&quot; href=&quot;https://github.com/Zion-Holdings/zion.app/actions/workflows/marketing-pulse.yml&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot;>Marketing Pulse →</a>
                <a className=&quot;glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10&quot; href=&quot;https://github.com/Zion-Holdings/zion.app/actions/workflows/repo-radar-knowledge.yml&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot;>Repo Radar & Knowledge →</a>
              </div>
            </div>

            {/* Live metrics strip */}
            <div className=&quot;mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4&quot;>
              {[
                ['24/7', 'Autonomous'],
                ['Main', 'Direct Sync'],
                ['0 Ops', 'Cloud‑Native'],
                ['Safety', 'Guardrails']].map(([k,v]) => (
                <div key={k} className=&quot;glow-card rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left&quot;>
                  <div className=&quot;text-lg font-bold text-white&quot;>{k}</div>
                  <div className=&quot;text-xs text-white/70&quot;>{v}</div>
                </div>
              ))}
            </div>

            {/* Futuristic marquee */}
            <div className=&quot;relative mx-auto mt-8 max-w-5xl overflow-hidden&quot;>
              <div className=&quot;pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent&quot; />
              <div className=&quot;pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent&quot; />
              <div className=&quot;marquee&quot;>
                <div className=&quot;marquee__track&quot;>
                  {[
                    'Autonomous Agents',
                    'Repo Sync to Main',
                    'Zero‑Ops Cloud',
                    'Safety Guardrails',
                    'A11y + Performance',
                    'Observability',
                    'SEO Automation',
                    'Design Evolution'].flatMap((label) => [label, label]).map((label, idx) => (
                    <span key={`${label}-${idx}`} className=&quot;mx-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs text-white/80 backdrop-blur&quot;>
                      <span className=&quot;h-1.5 w-1.5 rounded-full bg-cyan-400&quot; /> {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className=&quot;mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2&quot;>
              {[
                ['Automation Hub', '/automation'],
                ['SEO Audit', '/reports/seo'],
                ['AI Trends', '/reports/ai-trends'],
                ['Newsroom', '/newsroom'],
                ['Site Health', '/site-health']].map(([label, href]) => (
                <Link key={label as string} href={href as string}>
                  <a className=&quot;rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur hover:bg-white/10&quot;>{label as string}</a>
                </a>
              ))}
            </div>
          </div>
        </motion.section>

                 {/* Showcase */}
         <motion.section
           id=&quot;showcase&quot;
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.5 }}
           className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
         >
           <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Showcase: Features, Capabilities, Benefits</h2>
           <p className=&quot;mx-auto mt-2 max-w-3xl text-center text-sm text-white/70&quot;>Jump into highlighted areas of the platform. Every card links to a deep section or dedicated page.</p>
           <div className=&quot;mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3&quot;>

            <Link href=&quot;#features&quot;>
              <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;flex items-center gap-2&quot;><Zap className=&quot;h-5 w-5 text-cyan-300&quot; /><h3 className=&quot;text-lg font-semibold&quot;>Explore Features</h3></div>
                <p className=&quot;mt-1 text-sm text-white/75&quot;>Self‑improving systems, composable factories, observability and more.</p>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
              </a>
            </a>
            <Link href=&quot;#capabilities&quot;>
              <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;flex items-center gap-2&quot;><Cpu className=&quot;h-5 w-5 text-cyan-300&quot; /><h3 className=&quot;text-lg font-semibold&quot;>Browse Capabilities</h3></div>
                <p className=&quot;mt-1 text-sm text-white/75&quot;>Design evolution, SEO, a11y, performance, refactors, and policy.</p>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
              </a>
            </a>
            <Link href=&quot;#benefits&quot;>
              <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;flex items-center gap-2&quot;><Gauge className=&quot;h-5 w-5 text-cyan-300&quot; /><h3 className=&quot;text-lg font-semibold&quot;>See Benefits</h3></div>
                <p className=&quot;mt-1 text-sm text-white/75&quot;>Momentum, quality, safety, and measurable outcomes.</p>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
              </a>
            </a>
            <Link href=&quot;#feature-map&quot;>
              <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;flex items-center gap-2&quot;><Globe className=&quot;h-5 w-5 text-cyan-300&quot; /><h3 className=&quot;text-lg font-semibold&quot;>Feature Map</h3></div>
                <p className=&quot;mt-1 text-sm text-white/75&quot;>A quick overview of what you can explore right now.</p>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
              </a>
            </a>
            <Link href=&quot;#guardrails&quot;>
              <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;flex items-center gap-2&quot;><ShieldCheck className=&quot;h-5 w-5 text-cyan-300&quot; /><h3 className=&quot;text-lg font-semibold&quot;>Guardrails</h3></div>
                <p className=&quot;mt-1 text-sm text-white/75&quot;>Defense‑in‑depth checks and safety before shipping.</p>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
              </a>
            </a>
            <Link href=&quot;/automation&quot;>
              <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;flex items-center gap-2&quot;><Rocket className=&quot;h-5 w-5 text-cyan-300&quot; /><h3 className=&quot;text-lg font-semibold&quot;>Automation Hub</h3></div>
                <p className=&quot;mt-1 text-sm text-white/75&quot;>Factories, agents, and live workflows in one place.</p>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
              </a>
            </a>
          </div>
        </motion.section>

        {/* Auto-Promoted Features (auto-generated) */}
        <section className=&quot;mx-auto max-w-7xl px-6 pb-16&quot;>
          <div className=&quot;mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4&quot;>
            <Link href=&quot;/automation&quot;><a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;><div className=&quot;text-base font-semibold&quot;>Automation Hub</div><div className=&quot;mt-1 text-sm text-white/75&quot;>Live agents & workflows</div><div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div></a></a>
            <Link href=&quot;/site-health&quot;><a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;><div className=&quot;text-base font-semibold&quot;>Site Health</div><div className=&quot;mt-1 text-sm text-white/75&quot;>A11y, performance, links</div><div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div></a></a>
            <Link href=&quot;/reports/seo&quot;><a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;><div className=&quot;text-base font-semibold&quot;>AI SEO Auditor</div><div className=&quot;mt-1 text-sm text-white/75&quot;>On‑site improvements</div><div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div></a></a>
            <Link href=&quot;/reports/ai-trends&quot;><a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;><div className=&quot;text-base font-semibold&quot;>AI Trends Radar</div><div className=&quot;mt-1 text-sm text-white/75&quot;>Signals powering strategy</div><div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div></a></a>
            <Link href=&quot;/newsroom&quot;><a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;><div className=&quot;text-base font-semibold&quot;>Newsroom</div><div className=&quot;mt-1 text-sm text-white/75&quot;>Product evolution</div><div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div></a></a>
            <a href=&quot;/reports/seo&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;><div className=&quot;text-base font-semibold&quot;>Docs & Guides</div><div className=&quot;mt-1 text-sm text-white/75&quot;>Technical notes</div><div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div></a>
            <a href=&quot;/newsroom&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;><div className=&quot;text-base font-semibold&quot;>AI Changelog</div><div className=&quot;mt-1 text-sm text-white/75&quot;>Summarized updates</div><div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div></a>
          </div>
        </section>

        {/* Floating Quick-Nav Dock */}
        <aside className=&quot;fixed left-4 top-1/2 z-30 -translate-y-1/2 block&quot;>
          <nav aria-label=&quot;Quick section navigation&quot; className=&quot;space-y-2&quot;>
            {[
              ['#command-center', 'Command'],
              ['#feature-map', 'Map'],
              ['#engines', 'Engines'],
              ['#suites', 'Suites'],
              ['#capabilities', 'Capabilities'],
              ['#use-cases', 'Use Cases'],
              ['#pillars', 'Pillars'],
              ['#benefits', 'Benefits'],
              ['#templates', 'Templates'],
              ['#demos', 'Demos'],
              ['#highlights', 'Highlights'],
              ['#cases', 'Cases'],
              ['#reports', 'Reports'],
              ['#guardrails', 'Guardrails'],
              ['#roadmap', 'Docs']].map(([href, label]) => (
              <a key={href} href={href} className=&quot;block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75 backdrop-blur-md hover:border-cyan-400/40 hover:text-white&quot;>
                {label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Engines: Alternative Automation Runtimes */}
        <motion.section
          id=&quot;engines&quot;
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Autonomous Engines (Beyond GitHub Actions)</h2>

          <p className=&quot;mx-auto mt-2 max-w-3xl text-center text-sm text-white/70&quot;>We run outside GitHub Actions using scheduled cloud functions and orchestrators. Explore the engines below.</p>

                    <div className=&quot;mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3&quot;>
             <a
               href=&quot;/.netlify/functions/front-enhancer&quot;
               className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;
             >
               <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
               <div className=&quot;text-lg font-semibold&quot;>Netlify Scheduled Functions</div>
               <p className=&quot;mt-1 text-sm text-white/75&quot;>Cron-like cloud jobs that run every 20 minutes to enhance the front experience.</p>
               <div className=&quot;mt-3 text-xs text-cyan-300/90&quot;>View logs via Netlify →</div>
             </a>
             <a
               href=&quot;https://github.com/Zion-Holdings/zion.app/tree/main/automation&quot;
               target=&quot;_blank&quot; rel=&quot;noopener&quot;
               className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;
             >
               <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
               <div className=&quot;text-lg font-semibold&quot;>Local Orchestrators</div>
               <p className=&quot;mt-1 text-sm text-white/75&quot;>Node-based orchestrators that can run on any scheduler or platform.</p>
               <div className=&quot;mt-3 text-xs text-cyan-300/90&quot;>Browse orchestration scripts ↗</div>
             </a>
             <a
               href=&quot;/automation&quot;
               className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;
             >
               <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
               <div className=&quot;text-lg font-semibold&quot;>Autonomous Cloud Orchestrator</div>
               <p className=&quot;mt-1 text-sm text-white/75&quot;>End-to-end agents launching factories and syncing safe diffs to main.</p>
               <div className=&quot;mt-3 text-xs text-cyan-300/90&quot;>Open Automation Hub →</div>
             </a>
           </div>

          <div className=&quot;mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3&quot;>
            <a href=&quot;/.netlify/functions/internal-link-graph-runner&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;text-lg font-semibold&quot;>Internal Link Graph</div>
              <p className=&quot;mt-1 text-sm text-white/75&quot;>Live graph of internal navigation across pages.</p>
              <div className=&quot;mt-3 text-xs text-cyan-300/90&quot;>Run now →</div>
            </a>
            <a href=&quot;/.netlify/functions/robots-enhancer-runner&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;text-lg font-semibold&quot;>Robots.txt Enhancer</div>
              <p className=&quot;mt-1 text-sm text-white/75&quot;>Ensures sitemap and sensible defaults for crawling.</p>
              <div className=&quot;mt-3 text-xs text-cyan-300/90&quot;>Run now →</div>
            </a>
            <a href=&quot;/.netlify/functions/alt-text-indexer-runner&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;text-lg font-semibold&quot;>Alt Text Indexer</div>
              <p className=&quot;mt-1 text-sm text-white/75&quot;>Humanized alt suggestions for images across the site.</p>
              <div className=&quot;mt-3 text-xs text-cyan-300/90&quot;>Run now →</div>
            </a>
            <a href=&quot;/.netlify/functions/content-registry-runner&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;text-lg font-semibold&quot;>Content Registry Builder</div>
              <p className=&quot;mt-1 text-sm text-white/75&quot;>Continuously indexes pages and reports for discovery.</p>
              <div className=&quot;mt-3 text-xs text-cyan-300/90&quot;>Run now →</div>
            </a>
            <a
              href=&quot;/.netlify/functions/autonomous-meta-orchestrator&quot;
              className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;
            >
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;text-lg font-semibold&quot;>Autonomous Meta Orchestrator</div>
              <p className=&quot;mt-1 text-sm text-white/75&quot;>Optimizes metadata, changelogs, and docs; commits results every 3m.</p>
              <div className=&quot;mt-3 text-xs text-cyan-300/90&quot;>Run now ↗</div>
            </a>
            <a
              href=&quot;/.netlify/functions/rapid-sync&quot;
              className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;
            >
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;text-lg font-semibold&quot;>Rapid Sync (2m)</div>
              <p className=&quot;mt-1 text-sm text-white/75&quot;>High‑frequency repo sync to push autonomous changes quickly.</p>
              <div className=&quot;mt-3 text-xs text-cyan-300/90&quot;>Run now ↗</div>
            </a>

            <a
              href=&quot;/.netlify/functions/content-freshness-runner&quot;
              className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;
            >
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;text-lg font-semibold&quot;>Content Freshness Audit</div>
              <p className=&quot;mt-1 text-sm text-white/75&quot;>Scores pages and docs by last update; commits freshness reports.</p>
              <div className=&quot;mt-3 text-xs text-cyan-300/90&quot;>Open →</div>
            </a>

            <a
              href=&quot;/.netlify/functions/docs-link-audit-runner&quot;
              className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;
            >
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;text-lg font-semibold&quot;>Docs Link Audit</div>
              <p className=&quot;mt-1 text-sm text-white/75&quot;>Scans docs for broken relative links and commits a CSV report.</p>
              <div className=&quot;mt-3 text-xs text-cyan-300/90&quot;>Open →</div>
            </a>

            <a
              href=&quot;/.netlify/functions/image-dimension-audit-runner&quot;
              className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;
            >
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;text-lg font-semibold&quot;>Image Dimension Audit</div>
              <p className=&quot;mt-1 text-sm text-white/75&quot;>Detects missing width/height in images and logs a report.</p>
              <div className=&quot;mt-3 text-xs text-cyan-300/90&quot;>Open →</div>
            </a>
            <a
              href=&quot;/.netlify/functions/autonomous-master-orchestrator&quot;
              className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;
            >
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;text-lg font-semibold&quot;>Autonomous Master Orchestrator</div>
              <p className=&quot;mt-1 text-sm text-white/75&quot;>Runs every minute: triggers all cloud functions and syncs to main.</p>
              <div className=&quot;mt-3 text-xs text-cyan-300/90&quot;>Open ↗</div>
            </a>
          </div>
        </motion.section>

        {/* Autonomous Innovations */}
        <motion.section
          id=&quot;innovations&quot;
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Autonomous Innovations</h2>
          <p className=&quot;mx-auto mt-2 max-w-3xl text-center text-sm text-white/70&quot;>New intelligent cloud automations running 24/7 — no human intervention required.</p>
          <div className=&quot;mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3&quot;>
            <a href=&quot;/.netlify/functions/autonomous-content-curator&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;flex items-center gap-2&quot;><Activity className=&quot;h-5 w-5 text-cyan-300&quot; /><h3 className=&quot;text-lg font-semibold&quot;>Autonomous Content Curator</h3></div>
              <p className=&quot;mt-1 text-sm text-white/75&quot;>Curates and promotes highlights on front pages; syncs to main.</p>
              <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
            </a>
            <a href=&quot;/.netlify/functions/revenue-ideas-lab&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;flex items-center gap-2&quot;><LineChart className=&quot;h-5 w-5 text-cyan-300&quot; /><h3 className=&quot;text-lg font-semibold&quot;>Revenue Ideas Lab</h3></div>
              <p className=&quot;mt-1 text-sm text-white/75&quot;>Monetization experiments with safe, automatic repository sync.</p>
              <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
            </a>
            <a href=&quot;/.netlify/functions/autonomous-invention-orchestrator&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;flex items-center gap-2&quot;><Rocket className=&quot;h-5 w-5 text-cyan-300&quot; /><h3 className=&quot;text-lg font-semibold&quot;>Autonomous Invention Orchestrator</h3></div>
              <p className=&quot;mt-1 text-sm text-white/75&quot;>Continuously invents and applies front enhancements.</p>
              <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
            </a>
          </div>
        </motion.section>

        {/* Autonomous Cloud Runners */}
        <section id=&quot;cloud-runners&quot; className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;>
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Autonomous Cloud Runners</h2>
          <div className=&quot;mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3&quot;>
            {[ 
              { title: 'Automation Guardian (10m)', desc: 'Monitors and auto-heals automations; commits fixes safely.', href: '/.netlify/functions/automation-guardian-runner' },
              { title: 'Components Docs Runner (30m)', desc: 'Regenerates components/docs indexes and README, then pushes.', href: '/.netlify/functions/components-docs-runner' }].map((tool) => (
              <a key={tool.title} href={tool.href} className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <h3 className=&quot;text-lg font-semibold&quot;>{tool.title}</h3>
                <p className=&quot;mt-1 text-sm text-white/75&quot;>{tool.desc}</p>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div>
              </a>
            ))}
          </div>
        </section>

        {/* Command Center */}
        <section id=&quot;command-center&quot; className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;>
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Command Center</h2>
          <div className=&quot;mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3&quot;>
            {[
              { title: 'Automation Hub', desc: 'Runbooks, factories, and live autonomous agents.', href: '/automation' },
              { title: 'Site Health', desc: 'A11y, performance, and link‑health dashboards.', href: '/site-health' },
              { title: 'SEO Audit', desc: 'Continuous on‑site SEO scans with proposed diffs.', href: '/reports/seo' },
              { title: 'AI Trends', desc: 'Intelligence signals from the AI/cloud ecosystem.', href: '/reports/ai-trends' },
              { title: 'Newsroom', desc: 'Curated updates and product evolution highlights.', href: '/newsroom' },
              { title: 'Cloud Automations', desc: 'Netlify scheduled functions powering jobs 24/7.', href: '/automation' },
              { title: 'Docs', desc: 'Technical notes and guides for the platform.', href: '/reports/seo', external: true },
              { title: 'AI Changelog', desc: 'Summarized autonomous changes and highlights.', href: '/newsroom', external: true }
            ].map((card) => (
              <article key={card.title} className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 holo tilt-on-hover&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <h3 className=&quot;text-lg font-semibold&quot;>{card.title}</h3>
                <p className=&quot;mt-1 text-sm text-white/75&quot;>{card.desc}</p>
                {card.external ? (
                  <a href={card.href} target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline&quot;>Open</a>
                ) : (
                  <Link href={card.href as string}><a className=&quot;mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline&quot;>Open</a></a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Netlify Automations */}
        <motion.section
          id=&quot;netlify-automations&quot;
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Netlify Automations</h2>
          <p className=&quot;mx-auto mt-2 max-w-3xl text-center text-sm text-white/70&quot;>Zero‑ops scheduled functions power background tasks that improve the site and ship small, safe diffs to main.</p>
          <div className=&quot;mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3&quot;>
            {[ 
              { label: 'Autonomous Cloud Brain (1m)', desc: 'Selectively triggers and syncs key pipelines every minute.', href: '/.netlify/functions/autonomous-cloud-brain' },
              { label: 'Homepage Advertiser', desc: 'Curates and updates the home explore section.', href: '/.netlify/functions/homepage_advertiser' },
              { label: 'Autonomous Meta Orchestrator', desc: 'Intelligently triggers cloud functions and syncs to main every minute.', href: '/.netlify/functions/autonomous-meta-orchestrator' },
              { label: 'Cloud Orchestrator', desc: 'Runs fast improvement cycle and git sync.', href: '/.netlify/functions/cloud_orchestrator' },
              { label: 'Autonomous Meta Orchestrator (1m)', desc: 'Curates and triggers critical cloud functions, then syncs.', href: '/.netlify/functions/autonomous-meta-orchestrator' },
              { label: 'Cloud Trigger Hub (2m)', desc: 'Triggers most functions concurrently, then rebuilds/stamps.', href: '/.netlify/functions/cloud-trigger-hub' },
              { label: 'Sitemap Runner', desc: 'Keeps sitemap fresh for SEO visibility.', href: '/.netlify/functions/sitemap_runner' },
              { label: 'SEO Audit Runner', desc: 'Analyzes meta and content signals; writes public report.', href: '/.netlify/functions/seo-audit-runner' },
              { label: 'AI Trends Radar', desc: 'Builds AI trends report from curated sources.', href: '/.netlify/functions/ai-trends-radar-runner' },
              { label: 'Dependency Auto‑Upgrade', desc: 'Safely bumps deps and verifies a clean build.', href: '/.netlify/functions/deps-auto-upgrade-runner' },
              { label: 'Autonomous Meta Orchestrator', desc: 'Invents and triggers cloud automations; syncs changes.', href: '/.netlify/functions/autonomous-meta-orchestrator' },
              { label: 'Trigger All & Commit', desc: 'Invokes all functions and triggers a build or commit.', href: '/.netlify/functions/trigger-all-and-commit' }
            ].map((f) => (
              <a key={f.label} href={f.href} target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;text-lg font-semibold&quot;>{f.label}</div>
                <div className=&quot;mt-1 text-sm text-white/75&quot;>{f.desc}</div>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Trigger <span aria-hidden>↗</span></div>
              </a>
            ))}
          </div>
        </motion.section>

        {/* New Cloud Automations */}
        <section className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;>
          <h3 className=&quot;text-center text-xl font-bold tracking-wide text-white/90&quot;>New Cloud Automations</h3>
          <div className=&quot;mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3&quot;>
            <a href=&quot;/.netlify/functions/stale-content-auditor-runner&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;text-lg font-semibold&quot;>Stale Content Auditor</div>
              <div className=&quot;mt-1 text-sm text-white/75&quot;>Finds stale pages/components/docs and publishes a report.</div>
              <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Trigger <span aria-hidden>↗</span></div>
            </a>

            <a href=&quot;/.netlify/functions/autonomous-invention-orchestrator&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;text-lg font-semibold&quot;>Autonomous Invention Orchestrator</div>
              <div className=&quot;mt-1 text-sm text-white/75&quot;>Invents and curates fresh automations and safely syncs diffs to main.</div>
              <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Trigger <span aria-hidden>↗</span></div>
            </a>
          </div>
        </section>

        {/* Feature Spotlight */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Feature Spotlight</h2>
          <p className=&quot;mx-auto mt-2 max-w-3xl text-center text-sm text-white/70&quot;>A quick tour of the most impactful capabilities — each card links to a deep dive.</p>
          <div className=&quot;mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3&quot;>
            {[
              { Icon: Rocket, title: 'Automation Hub', desc: 'Factories, agents, and live workflows', href: '/automation' },
              { Icon: Search, title: 'AI SEO Auditor', desc: 'Continuous on‑site SEO improvements', href: '/reports/seo' },
              { Icon: Gauge, title: 'Site Health', desc: 'A11y, performance, and link integrity', href: '/site-health' },
              { Icon: Globe, title: 'AI Trends Radar', desc: 'Signals that inspire new automations', href: '/reports/ai-trends' },
              { Icon: GitBranch, title: 'Main Sync', desc: 'Safe, incremental diffs shipped continuously', href: '/automation' },
              { Icon: ShieldCheck, title: 'Guardrails', desc: 'Defense‑in‑depth quality gates', href: '/site-health' }].map(({ Icon, title, desc, href }) => (
              <Link key={title} href={href}>
                <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
                  <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                  <div className=&quot;flex items-center gap-2&quot;>
                    <Icon className=&quot;h-5 w-5 text-cyan-300&quot; />
                    <h3 className=&quot;text-lg font-semibold&quot;>{title}</h3>
                  </div>
                  <p className=&quot;mt-1 text-sm text-white/75&quot;>{desc}</p>
                  <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
                </a>
              </a>
            ))}
          </div>
        </motion.section>

        {/* AUTO-GENERATED: FRONT_ADS_START */}
        <section className=&quot;mx-auto max-w-7xl px-6 pb-16&quot;>
          <div className=&quot;relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/10 via-violet-600/10 to-cyan-600/10 p-6 backdrop-blur-xl&quot;>
            <div aria-hidden className=&quot;pointer-events-none absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,2.5rem_2.5rem,2.5rem_2.5rem] animate-grid&quot; />
            <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Explore Zion Systems</h2>
            <p className=&quot;mx-auto mt-2 max-w-3xl text-center text-sm text-white/70&quot;>Discover key features, capabilities, and benefits. Each card links to a dedicated page or live hub.</p>
            <div className=&quot;mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4&quot;>
              <Link href=&quot;/automation&quot;><a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;><div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; /><h3 className=&quot;text-base font-semibold&quot;>Automation Hub</h3><p className=&quot;mt-1 text-sm text-white/75&quot;>Factories, agents, and live workflows</p><div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div></a></a>
              <Link href=&quot;/reports/seo&quot;><a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;><div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; /><h3 className=&quot;text-base font-semibold&quot;>AI SEO Auditor</h3><p className=&quot;mt-1 text-sm text-white/75&quot;>Continuous on‑site SEO improvements</p><div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div></a></a>
              <Link href=&quot;/site-health&quot;><a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;><div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; /><h3 className=&quot;text-base font-semibold&quot;>Site Health</h3><p className=&quot;mt-1 text-sm text-white/75&quot;>A11y, performance, and link integrity</p><div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div></a></a>
              <Link href=&quot;/reports/ai-trends&quot;><a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;><div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; /><h3 className=&quot;text-base font-semibold&quot;>AI Trends Radar</h3><p className=&quot;mt-1 text-sm text-white/75&quot;>Signals that inspire new automations</p><div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div></a></a>
              <Link href=&quot;/newsroom&quot;><a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;><div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; /><h3 className=&quot;text-base font-semibold&quot;>Newsroom</h3><p className=&quot;mt-1 text-sm text-white/75&quot;>Latest autonomous updates</p><div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div></a></a>
              <a href=&quot;https://github.com/Zion-Holdings/zion.app/actions&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;><div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; /><h3 className=&quot;text-base font-semibold&quot;>Live Workflows</h3><p className=&quot;mt-1 text-sm text-white/75&quot;>Observe pipelines running 24/7</p><div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div></a>
            </div>
          </div>
        </section>
        {/* AUTO-GENERATED: FRONT_ADS_END */}

        {/* Outcome Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Outcome‑Focused Benefits</h2>
          <p className=&quot;mx-auto mt-2 max-w-3xl text-center text-sm text-white/70&quot;>Choose an outcome and jump to the relevant systems that make it happen.</p>
          <div className=&quot;mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3&quot;>
            {[
              { label: 'Grow organic traffic', desc: 'On‑site SEO improvements, better metadata, richer links', href: '/reports/seo' },
              { label: 'Improve UX quality', desc: 'A11y fixes, performance gains, resilient links', href: '/site-health' },
              { label: 'Reduce engineering toil', desc: 'Automated upgrades, refactors, and maintenance', href: '/automation' },
              { label: 'Ship faster with confidence', desc: 'Small safe diffs synced to main', href: '/automation' },
              { label: 'Stay compliant & accessible', desc: 'Policy guardrails and WCAG checks', href: '/site-health' },
              { label: 'Learn from market signals', desc: 'AI + cloud trends to guide strategy', href: '/reports/ai-trends' }].map((b) => (
              <Link key={b.label} href={b.href}>
                <a className=&quot;group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-fuchsia-400/30&quot;>
                  <span className=&quot;mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]&quot; />
                  <span className=&quot;text-sm text-white/80&quot;><span className=&quot;font-semibold text-white&quot;>{b.label}</span> — {b.desc} <span className=&quot;ml-1 text-cyan-300/90&quot;>→</span></span>
                </a>
              </a>
            ))}
          </div>
        </motion.section>

        {/* Suites */}
        <motion.section
          id=&quot;suites&quot;
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Automation Suites</h2>
          <div className=&quot;mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3&quot;>
            {[
              { title: 'Quick Fixes', desc: 'Build rescue, sitemap/robots, security remediation', href: '/automation' },
              { title: 'Deep Maintenance', desc: 'Orchestrated smoke tests and link checks', href: '/automation' },
              { title: 'Marketing & SEO', desc: 'Content factories and on‑site optimizations', href: '/automation' },
              { title: 'Content Curation', desc: 'Homepage promos generated continuously', href: '/automation' },
              { title: 'Dependency Upgrades', desc: 'Minor/patch bumps with safe auto‑merge', href: '/automation' },
              { title: 'Live Workflows', desc: 'Observe pipelines running 24/7', href: '/site-health', external: true },
              { title: 'Site Health', desc: 'A11y, performance, link checks dashboards', href: '/site-health' },
              { title: 'AI SEO Auditor', desc: 'Continuous on‑site audits with safe proposed diffs', href: '/reports/seo' },
              { title: 'AI Trends Radar', desc: 'Signal scanning to inspire new factories', href: '/reports/ai-trends' }].map((suite) => (
              <article key={suite.title} className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <h3 className=&quot;text-lg font-semibold&quot;>{suite.title}</h3>
                <p className=&quot;mt-1 text-sm text-white/75&quot;>{suite.desc}</p>
                {suite.href && (
                  suite.external ? (
                    <a href={suite.href} target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline&quot;>Open</a>
                  ) : (
                    <Link href={suite.href}><a className=&quot;mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline&quot;>Open</a></a>
                  )
                )}
              </article>
            ))}
          </div>
        </motion.section>

        {/* Superpowers */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Superpowers</h2>
          <div className=&quot;mt-6 grid grid-cols-1 gap-5 md:grid-cols-3&quot;>
            {[
              { Icon: Rocket, title: 'Generative Factories', desc: 'Spins up domain‑specific automation factories that build for you.' },
              { Icon: ShieldCheck, title: 'Safety by Design', desc: 'Layered validations — type checks, builds, a11y, links, and more.' },
              { Icon: GitBranch, title: 'Main Sync', desc: 'Small, reviewable edits committed and pushed continuously.' }].map(({ Icon, title, desc }) => (
              <article key={title} className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <Icon className=&quot;h-6 w-6 text-cyan-300&quot; />
                <h3 className=&quot;mt-3 text-lg font-semibold&quot;>{title}</h3>
                <p className=&quot;mt-1 text-sm text-white/75&quot;>{desc}</p>
              </article>
            ))}
          </div>
        </motion.section>

        {/* Get Started */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Get Started in Minutes</h2>
          <div className=&quot;mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-4&quot;>
            <Link href=&quot;/automation&quot;>
              <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;flex items-center gap-2&quot;><Rocket className=&quot;h-5 w-5 text-cyan-300&quot; /><span className=&quot;text-sm font-semibold&quot;>1. Explore Automations</span></div>
                <p className=&quot;mt-1 text-xs text-white/75&quot;>See live autonomous suites and workflows.</p>
              </a>
            </a>
            <Link href=&quot;/reports/seo&quot;>
              <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;flex items-center gap-2&quot;><Search className=&quot;h-5 w-5 text-cyan-300&quot; /><span className=&quot;text-sm font-semibold&quot;>2. Run SEO Audit</span></div>
                <p className=&quot;mt-1 text-xs text-white/75&quot;>Get prioritized improvements and artifacts.</p>
              </a>
            </a>
            <Link href=&quot;/site-health&quot;>
              <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;flex items-center gap-2&quot;><Gauge className=&quot;h-5 w-5 text-cyan-300&quot; /><span className=&quot;text-sm font-semibold&quot;>3. Check Site Health</span></div>
                <p className=&quot;mt-1 text-xs text-white/75&quot;>A11y, performance, and link health dashboards.</p>
              </a>
            </a>
            <Link href=&quot;/reports/ai-trends&quot;>
              <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;flex items-center gap-2&quot;><Globe className=&quot;h-5 w-5 text-cyan-300&quot; /><span className=&quot;text-sm font-semibold&quot;>4. Track AI Trends</span></div>
                <p className=&quot;mt-1 text-xs text-white/75&quot;>Stay ahead with intelligence signals.</p>
              </a>
            </a>
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          id=&quot;features&quot;
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Features</h2>
          <div className=&quot;mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3&quot;>
            {[
              { Icon: Zap, title: 'Self‑Improving', desc: 'Agents continuously analyze, invent, and evolve automations.', href: '/automation' },
              { Icon: GitBranch, title: 'Repo Sync', desc: 'Changes are committed and pushed automatically to main.', href: '/automation' },
              { Icon: Cpu, title: 'Zero Ops', desc: 'Runs fully in the cloud—no servers or manual intervention.', href: '/automation' },
              { Icon: ShieldCheck, title: 'Safety‑First', desc: 'Conservative edits with logs, reports, and guardrails.', href: '/site-health' },
              { Icon: Gauge, title: 'Observability', desc: 'Dashboards, reports, and cloud automation artifacts.', href: '/site-health' },
              { Icon: Layers, title: 'Composable Systems', desc: 'Chain multiple factories into higher‑order workflows.', href: '/automation' },
              { Icon: Activity, title: 'AI SEO Auditor', desc: 'Continuously scans pages and proposes SEO improvements.', href: '/reports/seo' },
              { Icon: Globe, title: 'AI Trends Radar', desc: 'Tracks AI and cloud signals to inspire new automations.', href: '/reports/ai-trends' },
              { Icon: Search, title: 'Deep Indexing', desc: 'Content and code search powering smart linking and PRs.', href: '/newsroom' },
              { Icon: BarChart3, title: 'Live Dashboards', desc: 'Real‑time quality and impact metrics at a glance.', href: '/site-health' },
              { Icon: Activity, title: 'Health Monitors', desc: 'A11y, links, and performance monitored 24/7.', href: '/site-health' },
              { Icon: Globe, title: 'Intelligence Signals', desc: 'AI research integrated into product improvements.', href: '/reports/ai-trends' },
              { Icon: ShieldCheck, title: 'Security Scans', desc: 'Audit dependencies and surface risks with reports.', href: '/site-health' },
              { Icon: GitBranch, title: 'Automated Changelogs', desc: 'Summarized changes and AI notes published continuously.', href: '/newsroom' },
              { Icon: Rocket, title: 'OG Image Maker', desc: 'Auto‑generates rich Open Graph images for content.', href: '/newsroom' },
              { Icon: ShieldCheck, title: 'Policy & Compliance', desc: 'Safety rails and audits applied before shipping.', href: '/site-health' },
              { Icon: Layers, title: 'Factories Library', desc: 'Reusable building blocks for new automations.', href: '/automation' },
              { Icon: Gauge, title: 'Site Health API', desc: 'Programmatic access to health signals and artifacts.', href: '/site-health' },
              { Icon: Search, title: 'Link Integrity', desc: 'Broken links detected and fixed before shipping.', href: '/site-health' },
              { Icon: Palette, title: 'Design System Evolution', desc: 'Consistent, modern UI upgrades across the app.', href: '/newsroom' },
              { Icon: BarChart3, title: 'Analytics Exports', desc: 'Download artifacts and reports for deeper analysis.', href: '/reports/seo' },
              { Icon: Search, title: 'Automated PR Reviews', desc: 'Bots review diffs for quality, style, and policy.', href: '/automation' },
              { Icon: Gauge, title: 'Asset Optimizer', desc: 'Compresses images and scripts for faster pages.', href: '/site-health' },
              { Icon: Layers, title: 'i18n Readiness', desc: 'Prepares content and routes for localization.', href: '/newsroom' },
              { Icon: Globe, title: 'Sitemap & Robots', desc: 'Maintains search‑friendly routing metadata.', href: '/site-health' },
              { Icon: Palette, title: 'Design Tokens', desc: 'Automates consistent theming and spacing.', href: '/newsroom' },
              { Icon: LineChart, title: 'Experiment Telemetry', desc: 'Measures impact across experiments and releases.', href: '/reports/seo' },
              { Icon: Activity, title: 'Automated Dependencies', desc: 'Minor/patch upgrades proposed and merged safely.', href: '/automation' },
              { Icon: Search, title: 'Broken Link Defender', desc: 'Continuously scans and fixes link integrity issues.', href: '/site-health' },
              { Icon: LineChart, title: 'Experimentation', desc: 'Automate A/B setups and monitor telemetry automatically.', href: '/automation' },
              { Icon: Palette, title: 'Design Tokens & Theming', desc: 'Enforce consistent theming, spacing, and motion.', href: '/newsroom' },
              { Icon: Gauge, title: 'Image Pipeline', desc: 'Optimize and transform media assets automatically.', href: '/site-health' }
            ].map(({ Icon, title, desc, href }) => (
              <Link key={title} href={href}>
                <a className=&quot;group glow-card relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:border-cyan-400/30 tilt-on-hover neon-ring&quot;>
                  <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                  <div className=&quot;flex items-center gap-3&quot;>
                    <Icon className=&quot;h-5 w-5 text-cyan-300&quot; />
                    <h3 className=&quot;text-lg font-semibold&quot;>{title}</h3>
                  </div>
                  <p className=&quot;mt-2 text-sm text-white/75&quot;>{desc}</p>
                  <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Learn more <Link2 className=&quot;h-3.5 w-3.5&quot; /></div>
                </a>
              </a>
            ))}
          </div>
        </motion.section>

        {/* Outcomes */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Outcomes</h2>
          <p className=&quot;mx-auto mt-2 max-w-3xl text-center text-sm text-white/70&quot;>
            Tangible, measurable wins delivered by autonomous cloud agents.
          </p>
          <div className=&quot;relative mx-auto mt-6 max-w-6xl overflow-hidden&quot;>
            <div className=&quot;pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent&quot; />
            <div className=&quot;pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent&quot; />
            <div className=&quot;marquee&quot;>
              <div className=&quot;marquee__track&quot;>
                {[
                  { label: 'Accessibility fixes', href: '/site-health' },
                  { label: 'Performance boosts', href: '/site-health' },
                  { label: 'SEO improvements', href: '/reports/seo' },
                  { label: 'Safer main merges', href: '/automation' },
                  { label: 'Cleaner codebase', href: '/automation' },
                  { label: 'Better content curation', href: '/newsroom' },
                  { label: 'Operational visibility', href: '/site-health' },
                  { label: 'Experiment velocity', href: '/automation' }]
                  .flatMap((item) => [item, item])
                  .map((item, idx) => (
                    <Link key={`${item.label}-${idx}`} href={item.href}>
                      <a className=&quot;mx-3 my-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur hover:bg-white/10&quot;>
                        <span className=&quot;h-1.5 w-1.5 rounded-full bg-cyan-400&quot; /> {item.label}
                      </a>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Feature Map */}
        <motion.section
          id=&quot;feature-map&quot;
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Feature Map</h2>
          <p className=&quot;mx-auto mt-2 max-w-3xl text-center text-sm text-white/70&quot;>
            A fast overview of what you can explore right now across the platform.
          </p>
          <div className=&quot;mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4&quot;>
            {[
              { label: 'Automation Hub', desc: 'Live agents & workflows', href: '/automation' },
              { label: 'Repo Sync to Main', desc: 'Safe, incremental edits', href: '/automation' },
              { label: 'Zero‑Ops Cloud', desc: 'Fully managed execution', href: '/automation' },
              { label: 'Safety Guardrails', desc: 'Defense‑in‑depth checks', href: '/site-health' },
              { label: 'Observability', desc: 'Dashboards & artifacts', href: '/site-health' },
              { label: 'Composable Systems', desc: 'Higher‑order workflows', href: '/automation' },
              { label: 'AI SEO Auditor', desc: 'On‑site improvements', href: '/reports/seo' },
              { label: 'AI Trends Radar', desc: 'Intelligence signals', href: '/reports/ai-trends' },
              { label: 'Deep Indexing', desc: 'Smart linking & PRs', href: '/newsroom' },
              { label: 'Live Dashboards', desc: 'Impact at a glance', href: '/site-health' },
              { label: 'Health Monitors', desc: 'A11y, perf, links', href: '/site-health' },
              { label: 'Docs & Guides', desc: 'Technical notes', href: '/reports/seo', external: true }].map((item) => (
              item.external ? (
                <a key={item.label} href={item.href as string} target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
                  <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                  <div className=&quot;text-base font-semibold&quot;>{item.label}</div>
                  <div className=&quot;mt-1 text-sm text-white/75&quot;>{item.desc}</div>
                  <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div>
                </a>
              ) : (
                <Link key={item.label} href={item.href as string}>
                  <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
                    <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                    <div className=&quot;text-base font-semibold&quot;>{item.label}</div>
                    <div className=&quot;mt-1 text-sm text-white/75&quot;>{item.desc}</div>
                    <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
                  </a>
                </a>
              )
            ))}
          </div>
        </motion.section>

        {/* AUTO: catalog injection for automated advertising */}
        {/* AUTO:FRONT_INDEX_DIRECTORY_START */

<section id=&quot;auto-catalog&quot; className=&quot;mx-auto max-w-7xl px-6 pb-16&quot;>
  <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Autonomous Catalog</h2>
  <p className=&quot;mx-auto mt-2 max-w-3xl text-center text-sm text-white/70&quot;>Auto‑discovered features, capabilities, and resources. Kept fresh by in‑repo Node tools.</p>
  <div className=&quot;mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4&quot;>
          <Link href=&quot;/automation&quot;><a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring&quot;><div className=&quot;text-base font-semibold&quot;>Automation Hub</div><div className=&quot;mt-1 text-sm text-white/75&quot;>Factories, agents, and live workflows</div><div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div></a></a>
          <Link href=&quot;/site-health&quot;><a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring&quot;><div className=&quot;text-base font-semibold&quot;>Site Health</div><div className=&quot;mt-1 text-sm text-white/75&quot;>A11y, performance, and link dashboards</div><div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div></a></a>
          <Link href=&quot;/reports/seo&quot;><a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring&quot;><div className=&quot;text-base font-semibold&quot;>AI SEO Auditor</div><div className=&quot;mt-1 text-sm text-white/75&quot;>Continuous on‑site SEO improvements</div><div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div></a></a>
          <Link href=&quot;/reports/ai-trends&quot;><a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring&quot;><div className=&quot;text-base font-semibold&quot;>AI Trends Radar</div><div className=&quot;mt-1 text-sm text-white/75&quot;>Signals that inspire new automations</div><div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div></a></a>
          <Link href=&quot;/newsroom&quot;><a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring&quot;><div className=&quot;text-base font-semibold&quot;>Newsroom</div><div className=&quot;mt-1 text-sm text-white/75&quot;>Curated updates and product evolution highlights</div><div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div></a></a>
          <Link href=&quot;/main/front&quot;><a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring&quot;><div className=&quot;text-base font-semibold&quot;>Front Systems Hub</div><div className=&quot;mt-1 text-sm text-white/75&quot;>Curated, futuristic front experience</div><div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div></a></a>
          <a href=&quot;/reports/seo&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring&quot;><div className=&quot;text-base font-semibold&quot;>Docs & Guides</div><div className=&quot;mt-1 text-sm text-white/75&quot;>Technical notes and architecture</div><div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div></a>
          <a href=&quot;/newsroom&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring&quot;><div className=&quot;text-base font-semibold&quot;>AI Changelog</div><div className=&quot;mt-1 text-sm text-white/75&quot;>Summarized autonomous changes</div><div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div></a>
          <a href=&quot;/site-health&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring&quot;><div className=&quot;text-base font-semibold&quot;>Live Pipelines</div><div className=&quot;mt-1 text-sm text-white/75&quot;>CI logs & artifacts 24/7</div><div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div></a>
          <a href=&quot;https://ziontechgroup.com&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring&quot;><div className=&quot;text-base font-semibold&quot;>Zion Cloud</div><div className=&quot;mt-1 text-sm text-white/75&quot;>Deployments and cloud platform</div><div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div></a>

  </div>
</section>

/* AUTO:FRONT_INDEX_DIRECTORY_END */}

        {/* Platform Modules */}
        <motion.section
           id=&quot;modules&quot;
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.5 }}
           className=&quot;mx-auto max-w-7xl px-6 pb-16&quot;
         >
           <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Platform Modules</h2>
          <div className=&quot;mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3&quot;>
            {[
              { Icon: Rocket, title: 'Autonomous Factories', desc: 'Composable, domain‑specific automation factories.', href: '/automation' },
              { Icon: ShieldCheck, title: 'Guardrails', desc: 'Defense‑in‑depth validations and policy enforcement.', href: '/site-health' },
              { Icon: Gauge, title: 'Observability', desc: 'Dashboards, artifacts, and live CI telemetry.', href: '/site-health' },
              { Icon: Activity, title: 'SEO Ops', desc: 'Continuous audits and safe, suggested diffs.', href: '/reports/seo' },
              { Icon: Globe, title: 'AI Intelligence', desc: 'Trends radar to guide new automation ideas.', href: '/reports/ai-trends' },
              { Icon: Layers, title: 'Workflow Composer', desc: 'Chain factories into higher‑order systems.', href: '/automation' },
              { Icon: GitBranch, title: 'Main Sync Engine', desc: 'Small, reviewable edits merged continuously.', href: '/automation' },
              { Icon: Cpu, title: 'Zero‑Ops Runtime', desc: 'Cloud‑native execution with no servers to manage.', href: '/automation' },
              { Icon: BarChart3, title: 'Impact Analytics', desc: 'Track outcomes and ROI from automations.', href: '/site-health' }].map(({ Icon, title, desc, href }) => (
              <Link key={title} href={href}>
                <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring&quot;>
                  <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                  <div className=&quot;flex items-center gap-3&quot;>
                    <Icon className=&quot;h-5 w-5 text-cyan-300&quot; />
                    <h3 className=&quot;text-lg font-semibold&quot;>{title}</h3>
                  </div>
                  <p className=&quot;mt-2 text-sm text-white/75&quot;>{desc}</p>
                  <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <Link2 className=&quot;h-3.5 w-3.5&quot; /></div>
                </a>
              </a>
            ))}
          </div>
        </motion.section>

        {/* Neural Feature Matrix */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Neural Feature Matrix</h2>
          <p className=&quot;mx-auto mt-2 max-w-3xl text-center text-sm text-white/70&quot;>A denser, at-a-glance atlas of what Zion ships autonomously. Every tile links to the live hub, report, or docs.</p>
          <div className=&quot;mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4&quot;>
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
              { label: 'Docs & Guides', desc: 'Technical notes', href: '/reports/seo', external: true },
              { label: 'AI Changelog', desc: 'Summarized updates', href: '/newsroom', external: true },
                             { label: 'Cloud Automations', desc: 'Netlify scheduled functions', href: '/automation' },
               { label: 'Roadmap & Issues', desc: &quot;What's next&quot;, href: '//issues', external: true }
            ].map((item) => (
              item.external ? (
                <a key={item.label} href={item.href as string} target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring&quot;>
                  <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                  <div className=&quot;text-base font-semibold&quot;>{item.label}</div>
                  <div className=&quot;mt-1 text-sm text-white/75&quot;>{item.desc}</div>
                  <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div>
                </a>
              ) : (
                <Link key={item.label} href={item.href as string}>
                  <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring&quot;>
                    <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                    <div className=&quot;text-base font-semibold&quot;>{item.label}</div>
                    <div className=&quot;mt-1 text-sm text-white/75&quot;>{item.desc}</div>
                    <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
                  </a>
                </a>
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
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Extended Feature Directory</h2>
          <p className=&quot;mx-auto mt-2 max-w-3xl text-center text-sm text-white/70&quot;>A broader tour of autonomous capabilities. Each card links to the relevant hub, report, or live workflow.</p>
          <div className=&quot;mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3&quot;>
            {[
              { Icon: GitBranch, title: 'Automated Changelogs', desc: 'AI-authored CHANGELOG with continuous updates.', href: '/newsroom', external: true },
              { Icon: Rocket, title: 'Content Curation', desc: 'Homepage promos and deep links generated on the fly.', href: '/newsroom' },
              { Icon: Search, title: 'Deep Site Index', desc: 'Smarter internal linking and content discovery.', href: '/newsroom' },
              { Icon: ShieldCheck, title: 'Policy & Compliance', desc: 'Safety rails and audits before changes ship.', href: '/site-health' },
              { Icon: BarChart3, title: 'Impact Dashboards', desc: 'Real-time visibility into outcomes and ROI.', href: '/site-health' },
              { Icon: Layers, title: 'Factories Library', desc: 'Composable building blocks for new automations.', href: '/automation' },
              { Icon: Activity, title: 'Health Monitors', desc: 'A11y, links, and performance monitored 24/7.', href: '/site-health' },
              { Icon: Cpu, title: 'Zero-Ops Runtime', desc: 'Fully managed cloud execution with no servers.', href: '/automation' },
              { Icon: Globe, title: 'Intelligence Signals', desc: 'AI + cloud trend tracking fueling new ideas.', href: '/reports/ai-trends' }].map(({ Icon, title, desc, href, external }) => (
              external ? (
                <a key={title} href={href as string} target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring&quot;>
                  <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                  <div className=&quot;flex items-center gap-3&quot;><Icon className=&quot;h-5 w-5 text-cyan-300&quot; /><h3 className=&quot;text-lg font-semibold&quot;>{title}</h3></div>
                  <p className=&quot;mt-1 text-sm text-white/75&quot;>{desc}</p>
                  <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div>
                </a>
              ) : (
                <Link key={title} href={href as string}>
                  <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring&quot;>
                    <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                    <div className=&quot;flex items-center gap-3&quot;><Icon className=&quot;h-5 w-5 text-cyan-300&quot; /><h3 className=&quot;text-lg font-semibold&quot;>{title}</h3></div>
                    <p className=&quot;mt-1 text-sm text-white/75&quot;>{desc}</p>
                    <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
                  </a>
                </a>
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
          className=&quot;mx-auto max-w-7xl px-6 pb-16&quot;
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Capability Deep Links</h2>
          <p className=&quot;mx-auto mt-2 max-w-3xl text-center text-sm text-white/70&quot;>Jump directly to the systems that deliver each capability.</p>
          <div className=&quot;mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4&quot;>
            {[
              ['SEO Automation', 'On-site scans and safe diffs to improve visibility', '/reports/seo'],
              ['Site Health', 'A11y, performance, and resilient links at a glance', '/site-health'],
              ['Automation Hub', 'Factories and live autonomous workflows', '/automation'],
              ['AI Trends Radar', 'Signals inspiring new factories and experiments', '/reports/ai-trends'],
              ['Newsroom', 'Curated updates and product evolution highlights', '/newsroom'],
              ['Live Pipelines', 'Observe CI pipelines, logs, and artifacts', '/site-health'],
              ['Documentation', 'Technical notes, guides, and changelog', '/reports/seo'],
              ['AI Changelog', 'Summarized autonomous changes and highlights', '/newsroom']].map(([label, desc, href]) => (
              (href as string).startsWith('http') ? (
                <a key={label as string} href={href as string} target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-fuchsia-400/30&quot;>
                  <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                  <div className=&quot;text-base font-semibold&quot;>{label as string}</div>
                  <div className=&quot;mt-1 text-sm text-white/75&quot;>{desc as string}</div>
                  <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div>
                </a>
              ) : (
                <Link key={label as string} href={href as string}>
                  <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-fuchsia-400/30&quot;>
                    <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                    <div className=&quot;text-base font-semibold&quot;>{label as string}</div>
                    <div className=&quot;mt-1 text-sm text-white/75&quot;>{desc as string}</div>
                    <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
                  </a>
                </a>
              )
            ))}
          </div>
        </motion.section>

        {/* Use Cases */}
        <motion.section
          id=&quot;use-cases&quot;
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Use Cases</h2>
          <div className=&quot;mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3&quot;>
            {[
              { title: 'AI SEO Auditor', desc: 'Continuously scans pages and proposes SEO improvements with safe diffs.' },
              { title: 'Design Beautifier', desc: 'Upgrades UI components with modern, cohesive visual language.' },
              { title: 'Content Curator', desc: 'Surfaces and promotes high‑value content with links and metadata.' },
              { title: 'Performance Tuner', desc: 'Optimizes bundles, images, and scripts for faster loads.' },
              { title: 'A11y Guardian', desc: 'Catches and fixes accessibility issues before they ship.' },
              { title: 'Growth Experiments', desc: 'Spins up micro‑experiments and measures impact automatically.' }].map((u) => (
              <article key={u.title} className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-fuchsia-400/30&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <h3 className=&quot;text-lg font-semibold&quot;>{u.title}</h3>
                <p className=&quot;mt-1 text-sm text-white/75&quot;>{u.desc}</p>
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
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
        >
          <div className=&quot;neon-divider mx-auto mb-8 h-px w-full max-w-5xl&quot; />
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Live Impact</h2>
          <div className=&quot;mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6&quot;>
            {[
              { label: 'Workflows', value: '1,200+', href: '/site-health', external: true },
              { label: 'Commits Synced', value: '800+', href: '/automation' },
              { label: 'Automated Edits', value: '3,500+', href: '/automation' },
              { label: 'Uptime', value: '99.95%', href: '/site-health' },
              { label: 'A11y Checks', value: '20k+', href: '/site-health' },
              { label: 'SEO Fixes', value: '4.2k+', href: '/reports/seo' }].map((item) => (
              item.external ? (
                <a key={item.label} href={item.href as string} target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur hover:border-cyan-400/30&quot;>
                  <div className=&quot;text-2xl font-extrabold tracking-tight&quot;>{item.value}</div>
                  <div className=&quot;mt-1 text-xs text-white/70&quot;>{item.label}</div>
                </a>
              ) : (
                <Link key={item.label} href={item.href as string}>
                  <a className=&quot;rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur hover:border-cyan-400/30&quot;>
                    <div className=&quot;text-2xl font-extrabold tracking-tight&quot;>{item.value}</div>
                    <div className=&quot;mt-1 text-xs text-white/70&quot;>{item.label}</div>
                  </a>
                </a>
              )
            ))}
          </div>
        </motion.section>

        {/* Capabilities */}
        <motion.section
          id=&quot;capabilities&quot;
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Capabilities</h2>
          <div className=&quot;mt-6 grid grid-cols-1 gap-5 md:grid-cols-3&quot;>
            {[
              { Icon: Palette, title: 'Design Evolution', desc: 'Autonomously beautifies UI with consistent, futuristic patterns.', href: '/newsroom' },
              { Icon: BarChart3, title: 'Performance & A11y', desc: 'Optimizes bundles, assets, and accessibility with continuous checks.', href: '/site-health' },
              { Icon: LineChart, title: 'Content & SEO', desc: 'Curates content, updates promos, and tunes metadata for reach.', href: '/reports/seo' },
              { Icon: Layers, title: 'Code Quality & Refactors', desc: 'Lints, fixes, and proposes refactors with type‑safety improvements.', href: '/automation' },
              { Icon: Gauge, title: 'Observability & Reports', desc: 'Artifacts, dashboards, and live logs for every automation.', href: '/site-health' },
              { Icon: Globe, title: 'Intelligence Signals', desc: 'AI + cloud trend tracking to spark new factory ideas.', href: '/reports/ai-trends' },
              { Icon: GitBranch, title: 'Repo Sync to Main', desc: 'Small, safe diffs merged continuously for momentum.', href: '/automation' },
              { Icon: ShieldCheck, title: 'Guardrails & Policy', desc: 'Organization‑wide safety rules enforced automatically.', href: '/site-health' },
              { Icon: Cpu, title: 'Zero‑Ops Cloud', desc: 'Fully managed cloud execution with no servers to babysit.', href: '/automation' },
              { Icon: Activity, title: 'Automated Dependencies', desc: 'Minor/patch upgrades proposed and merged safely.', href: '/automation' },
              { Icon: Search, title: 'Broken Link Defender', desc: 'Continuously scans and fixes link integrity issues.', href: '/site-health' },
              { Icon: LineChart, title: 'Experimentation', desc: 'Automate A/B setups and monitor telemetry automatically.', href: '/automation' },
              { Icon: Palette, title: 'Design Tokens & Theming', desc: 'Enforce consistent theming, spacing, and motion.', href: '/newsroom' },
              { Icon: Gauge, title: 'Image Pipeline', desc: 'Optimize and transform media assets automatically.', href: '/site-health' }].map(({ Icon, title, desc, href }) => (
              <Link key={title} href={href}>
                <a className=&quot;relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30&quot;>
                  <div className=&quot;absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-cyan-400/10 blur-2xl&quot; />
                  <div className=&quot;flex items-center gap-2&quot;>
                    <Icon className=&quot;h-5 w-5 text-cyan-300&quot; />
                    <h3 className=&quot;text-lg font-semibold&quot;>{title}</h3>
                  </div>
                  <p className=&quot;mt-1 text-sm text-white/75&quot;>{desc}</p>
                </a>
              </a>
            ))}
          </div>
        </motion.section>

        {/* Why Zion */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Why Zion</h2>
          <div className=&quot;mx-auto mt-6 max-w-5xl grid grid-cols-1 gap-4 md:grid-cols-3&quot;>
            {[
              ['🚀', 'Speed', 'Continuous delivery to main with safe, incremental changes.'],
              ['🛡️', 'Safety', 'Conservative edits and guardrails keep production stable.'],
              ['📈', 'Scale', 'Automatically generates new factories as your needs grow.']].map(([icon, title, desc]) => (
              <div key={title as string} className=&quot;rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur&quot;>
                <div className=&quot;text-2xl&quot;>{icon as string}</div>
                <div className=&quot;mt-2 text-base font-semibold&quot;>{title as string}</div>
                <div className=&quot;mt-1 text-sm text-white/75&quot;>{desc as string}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Value Pillars */}
        <motion.section
          id=&quot;pillars&quot;
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Value Pillars</h2>
          <p className=&quot;mx-auto mt-2 max-w-3xl text-center text-sm text-white/70&quot;>Four pillars that guide every autonomous change — jump into the systems behind each.</p>
          <div className=&quot;mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4&quot;>
            {[
              { Icon: ShieldCheck, title: 'Security & Safety', desc: 'Guardrails, policy, and quality gates.', href: '/site-health' },
              { Icon: Rocket, title: 'Speed & Momentum', desc: 'Small diffs shipped continuously.', href: '/automation' },
              { Icon: Gauge, title: 'Quality & Reliability', desc: 'A11y, performance, and link integrity.', href: '/site-health' },
              { Icon: Layers, title: 'Scale & Composability', desc: 'Factories chained into higher‑order workflows.', href: '/automation' }].map(({ Icon, title, desc, href }) => (
              <Link key={title} href={href}>
                <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
                  <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                  <div className=&quot;flex items-center gap-3&quot;>
                    <Icon className=&quot;h-5 w-5 text-cyan-300&quot; />
                    <h3 className=&quot;text-lg font-semibold&quot;>{title}</h3>
                  </div>
                  <p className=&quot;mt-1 text-sm text-white/75&quot;>{desc}</p>
                </a>
              </a>
            ))}
          </div>
        </motion.section>

        {/* Benefits */}
        <motion.section
          id=&quot;benefits&quot;
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-20&quot;
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Benefits</h2>
          {/* Benefits ticker */}
          <div className=&quot;relative mx-auto mt-4 max-w-5xl overflow-hidden&quot;>
            <div className=&quot;pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent&quot; />
            <div className=&quot;pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent&quot; />
            <div className=&quot;marquee&quot;>
              <div className=&quot;marquee__track&quot;>
                {[
                  { label: '24/7 autonomous progress', href: '/automation' },
                  { label: 'Main branch delivery', href: '/automation' },
                  { label: 'A11y & performance wins', href: '/site-health' },
                  { label: 'Continuous SEO gains', href: '/reports/seo' },
                  { label: 'Transparent artifacts', href: '/site-health' },
                  { label: 'Guardrails & policy', href: '/site-health' },
                  { label: 'Faster iteration loops', href: '/newsroom' },
                  { label: 'Lower operational toil', href: '/automation' }].flatMap((i) => [i, i]).map((i, idx) => (
                  <Link key={`${i.label}-${idx}`} href={i.href}>
                    <a className=&quot;mx-3 my-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur hover:bg-white/10&quot;>
                      <span className=&quot;h-1.5 w-1.5 rounded-full bg-emerald-400&quot; /> {i.label}
                    </a>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className=&quot;mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-3 md:grid-cols-2&quot;>
            {[
              '24/7 progress without human intervention',
              'Rapid feedback loop with safe, incremental edits',
              'Continuous delivery directly to main branch',
              'Fewer regressions via layered checks and reports',
              'Higher velocity with automated maintenance',
              'Reduced costs via zero‑ops and automated QA',
              'Consistent design language and UX quality',
              'Transparent artifacts and live workflow logs',
              'Faster experiment velocity with measurable impact',
              'Improved search visibility via continuous SEO',
              'Happier users thanks to performance & a11y wins',
              'Lower operational risk through guardrails',
              'Improved discoverability via deep indexing and SEO',
              'Happier engineers with less toil and more creation',
              'Confident shipping through automated guardrails',
              'Predictable quality gates and SLOs upheld automatically',
              'Auditability for compliance with full traceability',
              'Happier teams: less toil, more product value',
              'Automated dependency upgrades and security scans',
              'Clear analytics and downloadable artifacts for every run',
              'Composable factories accelerate new initiatives'].map((b) => (
              <div key={b} className=&quot;flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md&quot;>
                <span className=&quot;mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]&quot; />
                <span className=&quot;text-sm text-white/80&quot;>{b}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Benefits in Practice */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-16&quot;
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Benefits in Practice</h2>
          <p className=&quot;mx-auto mt-2 max-w-3xl text-center text-sm text-white/70&quot;>See where each benefit shows up in the product.</p>
          <div className=&quot;mx-auto mt-6 max-w-5xl grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3&quot;>
            {[
              { label: '24/7 progress', desc: 'Agents keep shipping while you sleep', href: '/automation' },
              { label: 'Rapid feedback loop', desc: 'Tight iteration cycles on UX & code', href: '/newsroom' },
              { label: 'Main branch delivery', desc: 'Small, safe diffs merged continuously', href: '/site-health', external: true },
              { label: 'Fewer regressions', desc: 'Layered checks catch issues early', href: '/site-health' },
              { label: 'Increased reach', desc: 'Continuous SEO improvements', href: '/reports/seo' },
              { label: 'Strategic insights', desc: 'AI + cloud trend tracking', href: '/reports/ai-trends' }].map((b) => (
              b.external ? (
                <a key={b.label} href={b.href as string} target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md hover:border-cyan-400/30&quot;>
                  <span className=&quot;mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]&quot; />
                  <span className=&quot;text-sm text-white/80&quot;><span className=&quot;font-semibold text-white&quot;>{b.label}</span> — {b.desc} <span className=&quot;ml-1 text-cyan-300/90&quot;>↗</span></span>
                </a>
              ) : (
                <Link key={b.label} href={b.href as string}>
                  <a className=&quot;group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md hover:border-cyan-400/30&quot;>
                    <span className=&quot;mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]&quot; />
                    <span className=&quot;text-sm text-white/80&quot;><span className=&quot;font-semibold text-white&quot;>{b.label}</span> — {b.desc} <span className=&quot;ml-1 text-cyan-300/90&quot;>→</span></span>
                  </a>
                </a>
              )
            ))}
          </div>
        </motion.section>

        {/* Tailored Value by Team */}
        <section className=&quot;mx-auto max-w-7xl px-6 pb-16&quot;>
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Tailored Value by Team</h2>
          <div className=&quot;mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4&quot;>
            {[
              { title: 'Developers', desc: 'Code quality, refactors, upgrades, reliability', href: '/automation' },
              { title: 'Product', desc: 'Faster UX improvements, experiments, insights', href: '/newsroom' },
              { title: 'Marketing', desc: 'SEO automation, content curation, reach', href: '/reports/seo' },
              { title: 'Operations', desc: 'A11y, performance, and link‑health dashboards', href: '/site-health' }].map((card) => (
              <Link key={card.title} href={card.href}>
                <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30&quot;>
                  <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                  <h3 className=&quot;text-lg font-semibold&quot;>{card.title}</h3>
                  <p className=&quot;mt-1 text-sm text-white/75&quot;>{card.desc}</p>
                  <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <Link2 className=&quot;h-3.5 w-3.5&quot; /></div>
                </a>
              </a>
            ))}
          </div>
        </section>

        {/* Ecosystem & Integrations */}
        <motion.section
          id=&quot;reports&quot;
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Ecosystem & Integrations</h2>
          <div className=&quot;mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4&quot;>
            <a href=&quot;/site-health&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;flex items-center gap-2&quot;>
                <Rocket className=&quot;h-5 w-5 text-cyan-300&quot; />
                <h3 className=&quot;text-lg font-semibold&quot;>GitHub Actions</h3>
              </div>
              <p className=&quot;mt-1 text-sm text-white/75&quot;>Live pipelines, logs, and artifacts powering automations.</p>
              <div className=&quot;mt-3 text-xs text-cyan-300/90&quot;>Open →</div>
            </a>
            <a href=&quot;https://www.netlify.com/&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;flex items-center gap-2&quot;>
                <Globe className=&quot;h-5 w-5 text-cyan-300&quot; />
                <h3 className=&quot;text-lg font-semibold&quot;>Netlify</h3>
              </div>
              <p className=&quot;mt-1 text-sm text-white/75&quot;>Zero‑ops hosting and functions for maintenance schedules.</p>
              <div className=&quot;mt-3 text-xs text-cyan-300/90&quot;>Learn more →</div>
            </a>
            <a href=&quot;https://supabase.com/&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;flex items-center gap-2&quot;>
                <Layers className=&quot;h-5 w-5 text-cyan-300&quot; />
                <h3 className=&quot;text-lg font-semibold&quot;>Supabase</h3>
              </div>
              <p className=&quot;mt-1 text-sm text-white/75&quot;>Realtime data and storage for emerging automation needs.</p>
              <div className=&quot;mt-3 text-xs text-cyan-300/90&quot;>Explore →</div>
            </a>
            <a href=&quot;https://www.framer.com/motion/&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;flex items-center gap-2&quot;>
                <Palette className=&quot;h-5 w-5 text-cyan-300&quot; />
                <h3 className=&quot;text-lg font-semibold&quot;>Framer Motion</h3>
              </div>
              <p className=&quot;mt-1 text-sm text-white/75&quot;>Futuristic micro‑interactions and motion design system.</p>
              <div className=&quot;mt-3 text-xs text-cyan-300/90&quot;>Docs →</div>
            </a>
          </div>
        </motion.section>

        {/* Quality Gates & Guardrails */}
        <motion.section
          id=&quot;guardrails&quot;
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-16&quot;
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Quality Gates & Guardrails</h2>
          <div className=&quot;mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4&quot;>
            {[
              { title: 'Accessibility', desc: 'Automated checks and fixes for WCAG compliance.', href: '/site-health' },
              { title: 'Link Integrity', desc: 'Broken links detected before release.', href: '/site-health' },
              { title: 'Performance', desc: 'Budgets enforced and improved continuously.', href: '/site-health' },
              { title: 'Safe Diffs', desc: 'Conservative, reviewable changes synced to main.', href: '/automation' }].map((g) => (
              <Link key={g.title} href={g.href}>
                <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-fuchsia-400/30&quot;>
                  <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                  <h3 className=&quot;text-lg font-semibold&quot;>{g.title}</h3>
                  <p className=&quot;mt-1 text-sm text-white/75&quot;>{g.desc}</p>
                </a>
              </a>
            ))}
          </div>
        </motion.section>

        {/* Tech */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-16&quot;
        >
          <div className=&quot;rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md&quot;>
            <p className=&quot;text-white/70&quot;>Powered by modern cloud and AI tooling</p>
            <div className=&quot;mt-4 flex flex-wrap items-center justify-center gap-6&quot;>
              {['Next.js','TypeScript','Tailwind','Framer Motion','Supabase','Netlify'].map((t) => (
                <span key={t} className=&quot;rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] glow-pulse&quot;>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Quick Start */}
        <section className=&quot;mx-auto max-w-7xl px-6 pb-20&quot;>
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Quick Start</h2>
          <div className=&quot;mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-4 md:grid-cols-4&quot;>
            {[
              ['Explore', 'Browse live automations', '/automation'],
              ['Audit', 'Check site health', '/site-health'],
              ['Optimize', 'Run the SEO auditor', '/reports/seo'],
              ['Learn', 'Follow AI trends', '/reports/ai-trends']].map(([title, desc, href]) => (
              <Link key={title as string} href={href as string}>
                <a className=&quot;rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 text-left backdrop-blur-xl hover:border-cyan-400/30&quot;>
                  <div className=&quot;text-sm font-semibold text-white&quot;>{title as string}</div>
                  <div className=&quot;mt-1 text-xs text-white/70&quot;>{desc as string}</div>
                </a>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-24&quot;
        >
          <div className=&quot;animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl&quot;>
            <h3 className=&quot;text-2xl font-bold&quot;>Ready to build with autonomous cloud agents?</h3>
            <p className=&quot;mx-auto mt-2 max-w-2xl text-white/80&quot;>Scale development with a tireless fleet of self‑improving automations.</p>
            <div className=&quot;mt-6 flex flex-wrap justify-center gap-3&quot;>
              <Link href=&quot;/automation&quot;><a className=&quot;rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover:bg-white&quot;>Get Started</a></a>
              <Link href=&quot;/automation&quot;><a className=&quot;rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10&quot;>View Automations</a></a>
            </div>
          </div>
        </motion.section>

        {/* AUTO-GENERATED: FRONT_FUTURIZER_START */}

        <section id=&quot;front-futurizer&quot; className=&quot;mx-auto max-w-7xl px-6 pb-20&quot;>
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Explore More — Features, Capabilities, Benefits</h2>
          <p className=&quot;mx-auto mt-2 max-w-3xl text-center text-sm text-white/70&quot;>A quick portal to the most impactful areas across Zion. Every tile and list item links to a live hub, report, or doc.</p>
          <div className=&quot;mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3&quot;>
            <div className=&quot;rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl&quot;>
              <div className=&quot;text-lg font-semibold&quot;>Features</div>
              <ul className=&quot;mt-3 space-y-2&quot;>
            <li className=&quot;flex items-start gap-2&quot;>
              <span className=&quot;mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse&quot; />
              <span className=&quot;text-sm text-white/80&quot;>Self‑improving autonomous agents</span>
            </li>

            <li className=&quot;flex items-start gap-2&quot;>
              <span className=&quot;mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse&quot; />
              <span className=&quot;text-sm text-white/80&quot;>Repo sync to main with safe diffs</span>
            </li>

            <li className=&quot;flex items-start gap-2&quot;>
              <span className=&quot;mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse&quot; />
              <span className=&quot;text-sm text-white/80&quot;>Zero‑ops, cloud‑native runtime</span>
            </li>

            <li className=&quot;flex items-start gap-2&quot;>
              <span className=&quot;mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse&quot; />
              <span className=&quot;text-sm text-white/80&quot;>Defense‑in‑depth guardrails</span>
            </li>
              </ul>
            </div>
            <div className=&quot;rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl&quot;>
              <div className=&quot;text-lg font-semibold&quot;>Capabilities</div>
              <ul className=&quot;mt-3 space-y-2&quot;>
            <li className=&quot;flex items-start gap-2&quot;>
              <span className=&quot;mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse&quot; />
              <span className=&quot;text-sm text-white/80&quot;>Code quality and refactors</span>
            </li>

            <li className=&quot;flex items-start gap-2&quot;>
              <span className=&quot;mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse&quot; />
              <span className=&quot;text-sm text-white/80&quot;>A11y and performance tuning</span>
            </li>

            <li className=&quot;flex items-start gap-2&quot;>
              <span className=&quot;mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse&quot; />
              <span className=&quot;text-sm text-white/80&quot;>Content curation and SEO</span>
            </li>

            <li className=&quot;flex items-start gap-2&quot;>
              <span className=&quot;mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse&quot; />
              <span className=&quot;text-sm text-white/80&quot;>Observability and analytics</span>
            </li>
              </ul>
            </div>
            <div className=&quot;rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl&quot;>
              <div className=&quot;text-lg font-semibold&quot;>Benefits</div>
              <ul className=&quot;mt-3 space-y-2&quot;>
            <li className=&quot;flex items-start gap-2&quot;>
              <span className=&quot;mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse&quot; />
              <span className=&quot;text-sm text-white/80&quot;>24/7 progress without manual ops</span>
            </li>

            <li className=&quot;flex items-start gap-2&quot;>
              <span className=&quot;mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse&quot; />
              <span className=&quot;text-sm text-white/80&quot;>Faster feedback with small edits</span>
            </li>

            <li className=&quot;flex items-start gap-2&quot;>
              <span className=&quot;mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse&quot; />
              <span className=&quot;text-sm text-white/80&quot;>Higher confidence via layered checks</span>
            </li>

            <li className=&quot;flex items-start gap-2&quot;>
              <span className=&quot;mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse&quot; />
              <span className=&quot;text-sm text-white/80&quot;>Links to hubs, reports, and docs</span>
            </li>
              </ul>
            </div>
          </div>
          <div className=&quot;mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3&quot;>

            <Link key=&quot;Automation Hub&quot; href=&quot;/automation&quot;>
              <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;text-base font-semibold&quot;>Automation Hub</div>
                <div className=&quot;mt-1 text-sm text-white/75&quot;>Factories, agents, and live workflows</div>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
              </a>
            </a>

            <Link key=&quot;Site Health&quot; href=&quot;/site-health&quot;>
              <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;text-base font-semibold&quot;>Site Health</div>
                <div className=&quot;mt-1 text-sm text-white/75&quot;>A11y, performance, and link integrity</div>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
              </a>
            </a>

            <Link key=&quot;SEO Audit&quot; href=&quot;/reports/seo&quot;>
              <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;text-base font-semibold&quot;>SEO Audit</div>
                <div className=&quot;mt-1 text-sm text-white/75&quot;>Continuous on‑site improvements and artifacts</div>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
              </a>
            </a>

            <Link key=&quot;AI Trends&quot; href=&quot;/reports/ai-trends&quot;>
              <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;text-base font-semibold&quot;>AI Trends</div>
                <div className=&quot;mt-1 text-sm text-white/75&quot;>Signals inspiring new factories and experiments</div>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
              </a>
            </a>

            <Link key=&quot;Newsroom&quot; href=&quot;/newsroom&quot;>
              <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;text-base font-semibold&quot;>Newsroom</div>
                <div className=&quot;mt-1 text-sm text-white/75&quot;>Autonomous updates and product evolution</div>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
              </a>
            </a>

            <a key=&quot;Documentation&quot; href=&quot;/reports/seo&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;text-base font-semibold&quot;>Documentation</div>
              <div className=&quot;mt-1 text-sm text-white/75&quot;>Technical notes and guides</div>
              <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div>
            </a>

            <a key=&quot;AI Changelog&quot; href=&quot;/newsroom&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;text-base font-semibold&quot;>AI Changelog</div>
              <div className=&quot;mt-1 text-sm text-white/75&quot;>Summarized autonomous changes and highlights</div>
              <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div>
            </a>

            <a key=&quot;Live Pipelines&quot; href=&quot;/site-health&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;text-base font-semibold&quot;>Live Pipelines</div>
              <div className=&quot;mt-1 text-sm text-white/75&quot;>Observe CI pipelines, logs, and artifacts</div>
              <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div>
            </a>
          </div>
        </section>
{/* AUTO-GENERATED: FRONT_FUTURIZER_END */}

{/* Footer */}
        <footer className=&quot;mx-auto max-w-7xl px-6 pb-16&quot;>
          <div className=&quot;rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur&quot;>
            <div className=&quot;flex flex-col items-center justify-between gap-4 md:flex-row&quot;>
              <div className=&quot;text-lg font-bold tracking-wide&quot;>
                <span className=&quot;bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon&quot;>Zion</span>
              </div>
              <div className=&quot;flex flex-wrap justify-center gap-4 text-sm text-white/70&quot;>
                <Link href=&quot;/automation&quot;><a>Automations</a></a>
                <Link href=&quot;/newsroom&quot;><a>Newsroom</a></a>
                <Link href=&quot;/site-health&quot;><a>Site Health</a></a>
                <a href=&quot;/&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot;>GitHub</a>
              </div>
            </div>
          </div>
        </footer>

        {/* AI Agents Gallery */}
        <motion.section
          id=&quot;agents&quot;
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>AI Agents Gallery</h2>
          <p className=&quot;mx-auto mt-2 max-w-3xl text-center text-sm text-white/70&quot;>Meet the autonomous agents powering your outcomes. Each card links to a live system.</p>
          <div className=&quot;mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3&quot;>
            {[
              { Icon: Search, title: 'AI SEO Auditor', desc: 'Continuously improves on‑site SEO with safe diffs.', href: '/reports/seo' },
              { Icon: Link2, title: 'Link Healer', desc: 'Finds and fixes broken links with dashboards.', href: '/site-health' },
              { Icon: Palette, title: 'Design Beautifier', desc: 'Evolves UI with cohesive, futuristic patterns.', href: '/newsroom' },
              { Icon: Gauge, title: 'Performance Tuner', desc: 'Optimizes bundles and runtime for speed.', href: '/site-health' },
              { Icon: Layers, title: 'Factory Composer', desc: 'Chains automations into higher‑order workflows.', href: '/automation' },
              { Icon: GitBranch, title: 'Main Sync', desc: 'Ships small, safe diffs to main continuously.', href: '/automation' }].map(({ Icon, title, desc, href }) => (
              <Link key={title} href={href}>
                <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
                  <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                  <div className=&quot;flex items-center gap-2&quot;>
                    <Icon className=&quot;h-5 w-5 text-cyan-300&quot; />
                    <h3 className=&quot;text-lg font-semibold&quot;>{title}</h3>
                  </div>
                  <p className=&quot;mt-1 text-sm text-white/75&quot;>{desc}</p>
                  <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
                </a>
              </a>
            ))}
          </div>
        </motion.section>

        {/* Capabilities Matrix */}
        <motion.section
          id=&quot;capability-matrix&quot;
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-16&quot;
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Capabilities Matrix</h2>
          <p className=&quot;mx-auto mt-2 max-w-3xl text-center text-sm text-white/70&quot;>Explore a broader catalog of Zion capabilities. Each tile links to a live hub, report, or workflow.</p>
          <div className=&quot;mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4&quot;>
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
              { title: 'Docs & Changelog', desc: 'Technical notes & AI log', href: '/reports/seo', external: true }].map((item) => (
              item.external ? (
                <a key={item.title} href={item.href as string} target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
                  <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                  <div className=&quot;text-base font-semibold&quot;>{item.title}</div>
                  <div className=&quot;mt-1 text-sm text-white/75&quot;>{item.desc}</div>
                  <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div>
                </a>
              ) : (
                <Link key={item.title} href={item.href as string}>
                  <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
                    <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                    <div className=&quot;text-base font-semibold&quot;>{item.title}</div>
                    <div className=&quot;mt-1 text-sm text-white/75&quot;>{item.desc}</div>
                    <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
                  </a>
                </a>
              )
            ))}
          </div>
        </motion.section>

        {/* Benefits Directory */}
        <motion.section
          id=&quot;benefits-directory&quot;
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-16&quot;
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Benefits Directory</h2>
          <p className=&quot;mx-auto mt-2 max-w-3xl text-center text-sm text-white/70&quot;>Outcome‑focused advantages with direct links to the systems that deliver them.</p>
          <div className=&quot;mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3&quot;>
            {[
              { label: '24/7 Progress', desc: 'Always‑on autonomous delivery', href: '/automation' },
              { label: 'Safe Incremental Diffs', desc: 'Small, reviewable changes', href: '/automation' },
              { label: 'Zero‑Ops Cloud‑Native', desc: 'No servers to babysit', href: '/automation' },
              { label: 'Layered Quality Checks', desc: 'Guardrails & audits', href: '/site-health' },
              { label: 'Faster Iteration Loops', desc: 'Shorten idea‑to‑impact', href: '/newsroom' },
              { label: 'SEO Visibility Gains', desc: 'Continuous improvements', href: '/reports/seo' }].map((b) => (
              <Link key={b.label} href={b.href}>
                <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
                  <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                  <div className=&quot;flex items-center gap-2&quot;>
                    <span className=&quot;h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse&quot; />
                    <h3 className=&quot;text-base font-semibold&quot;>{b.label}</h3>
                  </div>
                  <p className=&quot;mt-1 text-sm text-white/75&quot;>{b.desc}</p>
                  <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Explore <span aria-hidden>→</span></div>
                </a>
              </a>
            ))}
          </div>
        </motion.section>

        {/* AUTO-GENERATED: FRONT_ADS_START */}

        <section id=&quot;auto-ads&quot; className=&quot;mx-auto max-w-7xl px-6 pb-16&quot;>
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Auto‑advertised Highlights</h2>
          <div className=&quot;mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4&quot;>
            <Link href=&quot;/automation&quot;><a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring&quot;><div className=&quot;text-base font-semibold&quot;>Automation Hub</div><div className=&quot;mt-1 text-sm text-white/75&quot;>Factories, agents, and live workflows</div></a></a>
            <Link href=&quot;/site-health&quot;><a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring&quot;><div className=&quot;text-base font-semibold&quot;>Site Health</div><div className=&quot;mt-1 text-sm text-white/75&quot;>A11y, performance, and link integrity</div></a></a>
            <Link href=&quot;/reports/seo&quot;><a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring&quot;><div className=&quot;text-base font-semibold&quot;>SEO Audit</div><div className=&quot;mt-1 text-sm text-white/75&quot;>Continuous on‑site improvements</div></a></a>
            <Link href=&quot;/reports/ai-trends&quot;><a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring&quot;><div className=&quot;text-base font-semibold&quot;>AI Trends</div><div className=&quot;mt-1 text-sm text-white/75&quot;>Ecosystem intelligence signals</div></a></a>
            <Link href=&quot;/newsroom&quot;><a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring&quot;><div className=&quot;text-base font-semibold&quot;>Newsroom</div><div className=&quot;mt-1 text-sm text-white/75&quot;>Autonomous updates & evolution</div></a></a>
            <Link href=&quot;/main/front&quot;><a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring&quot;><div className=&quot;text-base font-semibold&quot;>Front Systems Hub</div><div className=&quot;mt-1 text-sm text-white/75&quot;>Curated futuristic front experience</div></a></a>
            <Link href=&quot;/.netlify/functions/deps-auto-upgrade-runner&quot;><a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring&quot;><div className=&quot;text-base font-semibold&quot;>Deps Auto‑Upgrade</div><div className=&quot;mt-1 text-sm text-white/75&quot;>Keeps dependencies fresh safely</div></a></a>
            <Link href=&quot;/.netlify/functions/frontpage-advertiser&quot;><a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring&quot;><div className=&quot;text-base font-semibold&quot;>Frontpage Advertiser</div><div className=&quot;mt-1 text-sm text-white/75&quot;>Refreshes front promos automatically</div></a></a>
            <a href=&quot;https://github.com/Zion-Holdings/zion.app/actions&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring&quot;><div className=&quot;text-base font-semibold&quot;>Live Pipelines</div><div className=&quot;mt-1 text-sm text-white/75&quot;>CI logs & artifacts</div></a>
            <a href=&quot;https://github.com/Zion-Holdings/zion.app/tree/main/docs&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring&quot;><div className=&quot;text-base font-semibold&quot;>Docs & Guides</div><div className=&quot;mt-1 text-sm text-white/75&quot;>Technical notes</div></a>
          </div>
        </section>
 {/* AUTO-GENERATED: FRONT_ADS_END */}
 
        {/* Feature Highlights (new) */}
        <motion.section
          id=&quot;feature-highlights&quot;
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Feature Highlights</h2>
          <p className=&quot;mx-auto mt-2 max-w-3xl text-center text-sm text-white/70&quot;>Explore deep links across the app that showcase our capabilities and benefits.</p>
          <div className=&quot;mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3&quot;>
            {[
              { title: 'SEO Audit', desc: 'Continuous on‑site improvements and artifacts.', href: '/reports/seo' },
              { title: 'AI Trends', desc: 'Signals that inspire new automation factories.', href: '/reports/ai-trends' },
              { title: 'Site Health', desc: 'A11y, performance and link integrity.', href: '/site-health' },
              { title: 'Automation Hub', desc: 'Factories, agents and live workflows.', href: '/automation' },
              { title: 'Newsroom', desc: 'Autonomous updates and product evolution.', href: '/newsroom' },
              { title: 'Front Systems Hub', desc: 'Futuristic templates, effects and layouts.', href: '/main/front' }].map((card) => (
              <a key={card.title} href={card.href} className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <h3 className=&quot;text-lg font-semibold&quot;>{card.title}</h3>
                <p className=&quot;mt-1 text-sm text-white/75&quot;>{card.desc}</p>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
              </a>
            ))}
          </div>
        </motion.section>

        {/* Reports */}
        <section id=&quot;reports&quot; className=&quot;mx-auto max-w-7xl px-6 pb-16&quot;>
          {/* existing reports content */}
        </section>

        {/* New Intelligent Automations */}
        <section id=&quot;automations&quot; className=&quot;mx-auto max-w-7xl px-6 pb-20&quot;>
          <h2 className=&quot;text-2xl font-bold tracking-wide text-white/90 text-center&quot;>New Intelligent Automations</h2>
          <div className=&quot;mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4&quot;>
            {[
              { title: 'SEO Audit Runner', href: '/.netlify/functions/seo-audit-runner' },
              { title: 'AI Trends Radar', href: '/.netlify/functions/ai-trends-radar-runner' },
              { title: 'Front Index Directory Builder', href: '/.netlify/functions/front-index-directory-builder' },
              { title: 'Revenue Ideas Promoter', href: '/.netlify/functions/revenue-ideas-promoter' }].map((tool) => (
              <a key={tool.title} href={tool.href} className=&quot;rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 hover:border-cyan-400/30 hover:text-white transition-colors&quot;>
                <div className=&quot;text-base font-semibold text-white&quot;>{tool.title}</div>
                <div className=&quot;mt-1 text-xs text-white/70&quot;>Open ↗</div>
              </a>
            ))}
          </div>
        </section>

      </div>
      {/* Back to top */}
      {showToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className=&quot;fixed bottom-24 right-4 z-40 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-3 py-2 text-xs font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]&quot;
          aria-label=&quot;Scroll to top&quot;
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}

/* AUTO-GENERATED: FRONT_ACTIONS_START */
<section className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;>
  <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>GitHub Actions — Live Automations</h2>
  <p className=&quot;mx-auto mt-2 max-w-3xl text-center text-sm text-white/70&quot;>Cloud‑native workflows that maintain, heal, and evolve the repo automatically.</p>
  <div className=&quot;mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3&quot;>
              <a href=&quot;https://github.com/Zion-Holdings/zion/actions/workflows/actions-catalog.yml&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;text-base font-semibold&quot;>Actions Catalog & README</div>
                <div className=&quot;mt-1 text-sm text-white/75&quot;>Scheduled: */5 * * * *</div>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div>
              </a>
              <a href=&quot;https://github.com/Zion-Holdings/zion/actions/workflows/auto-fix.yml&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;text-base font-semibold&quot;>Autonomous Auto-Fix</div>
                <div className=&quot;mt-1 text-sm text-white/75&quot;>Scheduled: */30 * * * *</div>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div>
              </a>
              <a href=&quot;https://github.com/Zion-Holdings/zion/actions/workflows/automerge-main.yml&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;text-base font-semibold&quot;>Auto-merge to main</div>
                <div className=&quot;mt-1 text-sm text-white/75&quot;>On push / schedule</div>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div>
              </a>
              <a href=&quot;https://github.com/Zion-Holdings/zion/actions/workflows/autonomous-meta.yml&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;text-base font-semibold&quot;>Autonomous Meta Factory</div>
                <div className=&quot;mt-1 text-sm text-white/75&quot;>Scheduled: */30 * * * *</div>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div>
              </a>
              <a href=&quot;https://github.com/Zion-Holdings/zion/actions/workflows/ci-self-heal.yml&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;text-base font-semibold&quot;>CI Self-Heal</div>
                <div className=&quot;mt-1 text-sm text-white/75&quot;>On push / schedule</div>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div>
              </a>
              <a href=&quot;https://github.com/Zion-Holdings/zion/actions/workflows/ci.yml&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;text-base font-semibold&quot;>CI</div>
                <div className=&quot;mt-1 text-sm text-white/75&quot;>On push / schedule</div>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div>
              </a>
              <a href=&quot;https://github.com/Zion-Holdings/zion/actions/workflows/cloud-maintenance.yml&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;text-base font-semibold&quot;>Cloud Maintenance Automations</div>
                <div className=&quot;mt-1 text-sm text-white/75&quot;>Scheduled: */30 * * * *</div>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div>
              </a>
              <a href=&quot;https://github.com/Zion-Holdings/zion/actions/workflows/cloud-marketing.yml&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;text-base font-semibold&quot;>Cloud Marketing Automations</div>
                <div className=&quot;mt-1 text-sm text-white/75&quot;>Scheduled: 0 */6 * * *</div>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div>
              </a>
              <a href=&quot;https://github.com/Zion-Holdings/zion/actions/workflows/continuous-improvement.yml&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;text-base font-semibold&quot;>Continuous Improvement</div>
                <div className=&quot;mt-1 text-sm text-white/75&quot;>Scheduled: 0 */6 * * *</div>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div>
              </a>
              <a href=&quot;https://github.com/Zion-Holdings/zion/actions/workflows/cursor-rules-autoupdate.yml&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;text-base font-semibold&quot;>Cursor Rules Auto Update</div>
                <div className=&quot;mt-1 text-sm text-white/75&quot;>Scheduled: 17 */6 * * *</div>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div>
              </a>
              <a href=&quot;https://github.com/Zion-Holdings/zion/actions/workflows/dependency-maintenance.yml&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;text-base font-semibold&quot;>Dependency Maintenance</div>
                <div className=&quot;mt-1 text-sm text-white/75&quot;>Scheduled: 17 5 * * *</div>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div>
              </a>
              <a href=&quot;https://github.com/Zion-Holdings/zion/actions/workflows/diverse-agent-matrix.yml&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;text-base font-semibold&quot;>Diverse Agent Matrix</div>
                <div className=&quot;mt-1 text-sm text-white/75&quot;>Scheduled: 7 * * * *</div>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div>
              </a>
  </div>
</section>
/* AUTO-GENERATED: FRONT_ACTIONS_END */
