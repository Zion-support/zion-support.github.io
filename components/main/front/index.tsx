<<<<<<< HEAD
import Head from 'next/head',
import Link from 'next/link',
import { Cpu, Gauge, GitBranch, Rocket, ShieldCheck, Zap, Activity, Globe, Layers, BarChart3, Search, Link2, Palette, LineChart } from 'lucide-react',
import { motion, useScroll, useSpring } from 'framer-motion',
import { useEffect, useState } from 'react',

export default function MainFrontIndex() {
  const { scrollYProgress } = useScroll(),
  const progressX = useSpring(scrollYProgress, { stiffness: 90, damping: 20, mass: 0.2 }),
  const [showToTop, setShowToTop] = useState(false),
  const [mobileOpen, setMobileOpen] = useState(false),
  useEffect(() => {
    const onScroll = () => setShowToTop(window.scrollY > 400),
    window.addEventListener('scroll', onScroll, { passive: true } as any),
    onScroll(),
    return () => window.removeEventListener('scroll', onScroll)
  }, []),
=======
import Head from 'next/head';
import Link from 'next/link';

export default function MainFrontIndex() {_const { scrollYProgress} = useScroll();
  const _progressX = useSpring(scrollYProgress, {_stiffness: 90, _damping: 20, _mass: 0.2});
  const [showToTop, setShowToTop] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect__(() => {_const _onScroll = () => setShowToTop(window.scrollY > 400);
    window.addEventListener('scroll', _onScroll, _{ passive: true} as any);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
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
=======
      {_/* Scroll progress bar */}
      <motion.div style={_{ scaleX: progressX}} className="fixed inset-x-0 top-0 z-40 h-0.5 origin-left bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400" />
      {_/* Animated Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {_/* Aurora orbs */}
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />
        {_/* Subtle animated grid */}
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid" />
        <div className="absolute inset-0 opacity-[0.06] hex-grid" />
        {_/* Star field */}
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
          <div className="twinkle-field absolute inset-0" />
        </div>
        <div className="absolute inset-0 bg-aurora opacity-[0.18]" />
        {_/* Extra futuristic layers */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="absolute h-[52rem] w-[52rem] rounded-full border border-cyan-400/10 animate-[spin_60s_linear_infinite]" />
          <div className="absolute h-[36rem] w-[36rem] rounded-full border border-fuchsia-400/10 animate-[spin_80s_linear_infinite] [animation-direction:reverse]" />
          <div className="absolute h-[24rem] w-[24rem] rounded-full border border-violet-400/10 animate-[spin_100s_linear_infinite]" />
        </div>
        <div className="absolute inset-0 mix-blend-soft-light opacity-[0.07] scanlines" />
        {_/* Neural mesh lines */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(34,211,238,0.08),transparent),radial-gradient(600px_400px_at_110%_10%,rgba(168,85,247,0.08),transparent)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:repeating-linear-gradient(0deg,transparent,transparent_31px,rgba(255,255,255,.06)_32px),repeating-linear-gradient(90deg,transparent,transparent_31px,rgba(255,255,255,.06)_32px)] [mask-image:radial-gradient(ellipse_at_center,black,transparent_65%)]" />
        {_/* Futuristic beams layers */}
        <div className="absolute inset-0 beams-layer beams-45" />
        <div className="absolute inset-0 beams-layer beams--45" />
        <div className="pointer-events-none absolute inset-0 beams opacity-[0.06]" />
      </div>

      {_/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-950/55 border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold tracking-wide">
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
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
                  ['Home/'],
                  ['Command#command-center'],
                  ['Features#features'],
                  ['Map#feature-map'],
                  ['Suites#suites'],
                  ['Capabilities#capabilities'],
                  ['Use Cases#use-cases'],
                  ['Pillars#pillars'],
                  ['Benefits#benefits'],
                  ['Templates#templates'],
                  ['Demos#demos'],
                  ['Highlights#highlights'],
                  ['Cases#cases'],
                  ['Reports#reports'],
                  ['Docs#roadmap'],
                  ['Automations/automation']].map(([label, href]) => (
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
=======
          <button aria-label="Open menu" onClick={_() => setMobileOpen(true)} className="md:hidden rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80">Menu</button>
        </nav>
        {_/* Mobile overlay menu */}
        {_mobileOpen && (_<motion.div
            initial={{ opacity: 0}}
            animate={_{ opacity: 1}}
            exit={_{ opacity: 0}}
            className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur"
            onClick={_() => setMobileOpen(false)}
          >
            <motion.div
              initial={_{ y: -20, _opacity: 0}}
              animate={_{ y: 0, _opacity: 1}}
              transition={_{ duration: 0.2}}
              className="mx-auto mt-20 w-[92%] max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-xl"
              onClick={_(_e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="text-lg font-semibold">Navigate</div>
                <button aria-label="Close menu" onClick={_() => setMobileOpen(false)} className="rounded-md border border-white/15 bg-white/5 px-2 py-1 text-xs">Close</button>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {_[
                  ['Home', _'/'], _['Command', _'#command-center'], _['Features', _'#features'], _['Map', _'#feature-map'], _['Suites', _'#suites'], _['Capabilities', _'#capabilities'], _['Use Cases', _'#use-cases'], _['Pillars', _'#pillars'], _['Benefits', _'#benefits'], _['Templates', _'#templates'], _['Demos', _'#demos'], _['Highlights', _'#highlights'], _['Cases', _'#cases'], _['Reports', _'#reports'], _['Docs', _'#roadmap'], _['Automations', _'/automation']].map(_([label, _href]) => (
                  (href as string).startsWith('#') ? (_<a key={label as string} href={_href as string} onClick={_() => setMobileOpen(false)} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">{_label as string}</a>
                  ) : (_<Link key={_label as string} href={_href as string}>
                      <a onClick={_() => setMobileOpen(false)} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">{_label as string}</a>
                    </Link>
                  )
                ))}
              </div>
              <div className="mt-4 flex justify-end">
                <Link href="/automation"><a onClick={_() => setMobileOpen(false)} className="rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 text-sm font-semibold">Launch Hub</a></Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </motion.div>
          </motion.div>
        )}
      </header>

<<<<<<< HEAD
      {/* Hero */}
      <div role=&quot;main&quot; className=&quot;relative z-10&quot;>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=&quot;mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-24&quot;
=======
      {_/* Hero */}
      <div role="main" className="relative z-10">
        <motion.section
          initial={_{ opacity: 0, _y: 20}}
          animate={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.6}}
          className="mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-24"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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

<<<<<<< HEAD
            {/* Cloud Automations Spotlight */}
<<<<<<< HEAD
=======
            {_/* Cloud Automations Spotlight */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <div className="mx-auto mt-6 max-w-5xl text-left">
              <div className="mb-2 text-xs uppercase tracking-wide text-white/60">Cloud Automations (live)</div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="/.netlify/functions/agent-swarm-orchestrator">Agent Swarm Orchestrator ↗</a>
                <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/ultra-rapid-sync.yml" target="_blank" rel="noopener noreferrer">Ultra Rapid Sync →</a>
                <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/automation-advertiser.yml" target="_blank" rel="noopener noreferrer">Automation Advertiser →</a>
                <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/knowledge-graph-radar.yml" target="_blank" rel="noopener noreferrer">Knowledge Graph & Radar →</a>
                <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/site-health-guardian.yml" target="_blank" rel="noopener noreferrer">Site Health Guardian →</a>
                <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="/.netlify/functions/autonomous-meta-orchestrator">Meta Orchestrator →</a>
                <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/autonomous-error-guardian.yml" target="_blank" rel="noopener noreferrer">Autonomous Error Guardian →</a>
                <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/a11y-contrast-guardian.yml" target="_blank" rel="noopener noreferrer">A11y & Contrast Guardian →</a>
                <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/marketing-pulse.yml" target="_blank" rel="noopener noreferrer">Marketing Pulse →</a>
                <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/repo-radar-knowledge.yml" target="_blank" rel="noopener noreferrer">Repo Radar & Knowledge →</a>
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              </div>
            </div>

<<<<<<< HEAD
            {/* Live metrics strip */}
            <div className=&quot;mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4&quot;>
              {[
<<<<<<< HEAD
                ['24/7Autonomous'],
                ['MainDirect Sync'],
                ['0 OpsCloud‑Native'],
                ['SafetyGuardrails']].map(([k,v]) => (
                <div key={k} className="glow-card rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left">
                  <div className="text-lg font-bold text-white">{k}</div>
                  <div className="text-xs text-white/70">{v}</div>
=======
                ['24/7', 'Autonomous'],
                ['Main', 'Direct Sync'],
                ['0 Ops', 'Cloud‑Native'],
                ['Safety', 'Guardrails']].map(([k,v]) => (
                <div key={k} className=&quot;glow-card rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left&quot;>
                  <div className=&quot;text-lg font-bold text-white&quot;>{k}</div>
                  <div className=&quot;text-xs text-white/70&quot;>{v}</div>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
            {_/* Live metrics strip */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {_[
                ['24/7', _'Autonomous'], _['Main', _'Direct Sync'], _['0 Ops', _'Cloud‑Native'], _['Safety', _'Guardrails']].map(_([k, _v]) => (
                <div key={k} className="glow-card rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left">
                  <div className="text-lg font-bold text-white">{_k}</div>
                  <div className="text-xs text-white/70">{_v}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              ))}
            </div>

<<<<<<< HEAD
            {/* Futuristic marquee */}
            <div className=&quot;relative mx-auto mt-8 max-w-5xl overflow-hidden&quot;>
              <div className=&quot;pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent&quot; />
              <div className=&quot;pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent&quot; />
              <div className=&quot;marquee&quot;>
                <div className=&quot;marquee__track&quot;>
                  {[
<<<<<<< HEAD
                    'Autonomous AgentsRepo Sync to MainZero‑Ops CloudSafety GuardrailsA11y + PerformanceObservabilitySEO AutomationDesign Evolution'].flatMap((label) => [label, label]).map((label, idx) => (
                    <span key={`${label}-${idx}`} className="mx-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs text-white/80 backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> {label}
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
            {_/* Futuristic marquee */}
            <div className="relative mx-auto mt-8 max-w-5xl overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent" />
              <div className="marquee">
                <div className="marquee__track">
                  {_[
                    'Autonomous Agents', _'Repo Sync to Main', _'Zero‑Ops Cloud', _'Safety Guardrails', _'A11y + Performance', _'Observability', _'SEO Automation', _'Design Evolution'].flatMap(_(label) => [label, _label]).map(_(label, _idx) => (
                    <span key={`${label}-${_idx}`} className="mx-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs text-white/80 backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> {_label}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </span>
                  ))}
                </div>
              </div>
            </div>

<<<<<<< HEAD
            {/* Quick Links */}
            <div className=&quot;mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2&quot;>
              {[
                ['Automation Hub/automation'],
                ['SEO Audit/reports/seo'],
                ['AI Trends/reports/ai-trends'],
                ['Newsroom/newsroom'],
                ['Site Health/site-health']].map(([label, href]) => (
                <Link key={label as string} href={href as string}>
                  <a className=&quot;rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur hover:bg-white/10&quot;>{label as string}</a>
                </a>
=======
            {_/* Quick Links */}
            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
              {_[
                ['Automation Hub', _'/automation'], _['SEO Audit', _'/reports/seo'], _['AI Trends', _'/reports/ai-trends'], _['Newsroom', _'/newsroom'], _['Site Health', _'/site-health']].map(_([label, _href]) => (
                <Link key={label as string} href={_href as string}>
                  <a className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur hover:bg-white/10">{_label as string}</a>
                </Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              ))}
            </div>
          </div>
        </motion.section>

                 {_/* Showcase */}
         <motion.section
<<<<<<< HEAD
           id=&quot;showcase&quot;
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.5 }}
           className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
=======
           id="showcase"
           initial={_{ opacity: 0, _y: 24}}
           whileInView={_{ opacity: 1, _y: 0}}
           viewport={_{ once: true, _amount: 0.2}}
           transition={_{ duration: 0.5}}
           className="mx-auto max-w-7xl px-6 pb-14"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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

<<<<<<< HEAD
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
<<<<<<< HEAD
              ['#command-centerCommand'],
              ['#feature-mapMap'],
              ['#enginesEngines'],
              ['#suitesSuites'],
              ['#capabilitiesCapabilities'],
              ['#use-casesUse Cases'],
              ['#pillarsPillars'],
              ['#benefitsBenefits'],
              ['#templatesTemplates'],
              ['#demosDemos'],
              ['#highlightsHighlights'],
              ['#casesCases'],
              ['#reportsReports'],
              ['#guardrailsGuardrails'],
              ['#roadmapDocs']].map(([href, label]) => (
              <a key={href} href={href} className="block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75 backdrop-blur-md hover:border-cyan-400/40 hover:text-white">
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                {label}
=======
        {_/* Auto-Promoted Features (auto-generated) */}
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Link href="/automation"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="text-base font-semibold">Automation Hub</div><div className="mt-1 text-sm text-white/75">Live agents & workflows</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
            <Link href="/site-health"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="text-base font-semibold">Site Health</div><div className="mt-1 text-sm text-white/75">A11y, performance, links</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
            <Link href="/reports/seo"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="text-base font-semibold">AI SEO Auditor</div><div className="mt-1 text-sm text-white/75">On‑site improvements</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
            <Link href="/reports/ai-trends"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="text-base font-semibold">AI Trends Radar</div><div className="mt-1 text-sm text-white/75">Signals powering strategy</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
            <Link href="/newsroom"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="text-base font-semibold">Newsroom</div><div className="mt-1 text-sm text-white/75">Product evolution</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
            <a href="/reports/seo" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="text-base font-semibold">Docs & Guides</div><div className="mt-1 text-sm text-white/75">Technical notes</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div></a>
            <a href="/newsroom" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="text-base font-semibold">AI Changelog</div><div className="mt-1 text-sm text-white/75">Summarized updates</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div></a>
          </div>
        </section>

        {_/* Floating Quick-Nav Dock */}
        <aside className="fixed left-4 top-1/2 z-30 -translate-y-1/2 block">
          <nav aria-label="Quick section navigation" className="space-y-2">
            {_[
              ['#command-center', _'Command'], _['#feature-map', _'Map'], _['#engines', _'Engines'], _['#suites', _'Suites'], _['#capabilities', _'Capabilities'], _['#use-cases', _'Use Cases'], _['#pillars', _'Pillars'], _['#benefits', _'Benefits'], _['#templates', _'Templates'], _['#demos', _'Demos'], _['#highlights', _'Highlights'], _['#cases', _'Cases'], _['#reports', _'Reports'], _['#guardrails', _'Guardrails'], _['#roadmap', _'Docs']].map(_([href, _label]) => (
              <a key={href} href={_href} className="block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75 backdrop-blur-md hover:border-cyan-400/40 hover:text-white">
                {_label}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </a>
            ))}
          </nav>
        </aside>

        {_/* Engines: Alternative Automation Runtimes */}
        <motion.section
<<<<<<< HEAD
          id=&quot;engines&quot;
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
=======
          id="engines"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
               href="https://github.com/Zion-Holdings/zion.app/tree/main/automation"
               target="_blank" rel="noopener noreferrer"
               className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover"
=======
               href=&quot;https://github.com/Zion-Holdings/zion.app/tree/main/automation&quot;
               target=&quot;_blank&quot; rel=&quot;noopener&quot;
               className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
<<<<<<< HEAD
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-lg font-semibold">Autonomous Meta Orchestrator</div>
              <p className="mt-1 text-sm text-white/75">Optimizes metadata, changelogs, and docs, commits results every 3m.</p>
              <div className="mt-3 text-xs text-cyan-300/90">Run now ↗</div>
            </a>
            <a
              href="/.netlify/functions/rapid-sync"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover: border-cyan-400/30 tilt-on-hover"
=======
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;text-lg font-semibold&quot;>Autonomous Meta Orchestrator</div>
              <p className=&quot;mt-1 text-sm text-white/75&quot;>Optimizes metadata, changelogs, and docs; commits results every 3m.</p>
              <div className=&quot;mt-3 text-xs text-cyan-300/90&quot;>Run now ↗</div>
            </a>
            <a
              href=&quot;/.netlify/functions/rapid-sync&quot;
              className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
<<<<<<< HEAD
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-lg font-semibold">Content Freshness Audit</div>
              <p className="mt-1 text-sm text-white/75">Scores pages and docs by last update, commits freshness reports.</p>
              <div className="mt-3 text-xs text-cyan-300/90">Open →</div>
=======
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;text-lg font-semibold&quot;>Content Freshness Audit</div>
              <p className=&quot;mt-1 text-sm text-white/75&quot;>Scores pages and docs by last update; commits freshness reports.</p>
              <div className=&quot;mt-3 text-xs text-cyan-300/90&quot;>Open →</div>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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

        {_/* Autonomous Innovations */}
        <motion.section
<<<<<<< HEAD
          id=&quot;innovations&quot;
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
=======
          id="innovations"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
<<<<<<< HEAD
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Autonomous Innovations</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">New intelligent cloud automations running 24/7 — no human intervention required.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm: grid-cols-2 lg:grid-cols-3">
            <a href="/.netlify/functions/autonomous-content-curator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-2"><Activity className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">Autonomous Content Curator</h3></div>
              <p className="mt-1 text-sm text-white/75">Curates and promotes highlights on front pages, syncs to main.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
=======
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Autonomous Innovations</h2>
          <p className=&quot;mx-auto mt-2 max-w-3xl text-center text-sm text-white/70&quot;>New intelligent cloud automations running 24/7 — no human intervention required.</p>
          <div className=&quot;mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3&quot;>
            <a href=&quot;/.netlify/functions/autonomous-content-curator&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;flex items-center gap-2&quot;><Activity className=&quot;h-5 w-5 text-cyan-300&quot; /><h3 className=&quot;text-lg font-semibold&quot;>Autonomous Content Curator</h3></div>
              <p className=&quot;mt-1 text-sm text-white/75&quot;>Curates and promotes highlights on front pages; syncs to main.</p>
              <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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

<<<<<<< HEAD
        {/* Autonomous Cloud Runners */}
        <section id=&quot;cloud-runners&quot; className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;>
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Autonomous Cloud Runners</h2>
          <div className=&quot;mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3&quot;>
            {[ 
              { title: 'Automation Guardian (10m)', desc: 'Monitors and auto-heals automations, commits fixes safely.', href: '/.netlify/functions/automation-guardian-runner' },
              { title: 'Components Docs Runner (30m)', desc: 'Regenerates components/docs indexes and README, then pushes.', href: '/.netlify/functions/components-docs-runner' }].map((tool) => (
              <a key={tool.title} href={tool.href} className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <h3 className=&quot;text-lg font-semibold&quot;>{tool.title}</h3>
                <p className=&quot;mt-1 text-sm text-white/75&quot;>{tool.desc}</p>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div>
=======
        {_/* Autonomous Cloud Runners */}
        <section id="cloud-runners" className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Autonomous Cloud Runners</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {_[ 
              { title: 'Automation Guardian (10m)', _desc: 'Monitors and auto-heals automations; commits fixes safely.', _href: '/.netlify/functions/automation-guardian-runner'},
              {_title: 'Components Docs Runner (30m)', _desc: 'Regenerates components/docs indexes and README, _then pushes.', _href: '/.netlify/functions/components-docs-runner'}].map(_(tool) => (
              <a key={_tool.title} href={_tool.href} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{_tool.title}</h3>
                <p className="mt-1 text-sm text-white/75">{_tool.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </a>
            ))}
          </div>
        </section>

<<<<<<< HEAD
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
<<<<<<< HEAD
                  <a href={card.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline">Open</a>
=======
                  <a href={card.href} target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline&quot;>Open</a>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                ) : (
                  <Link href={card.href as string}><a className=&quot;mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline&quot;>Open</a></a>
=======
        {_/* Command Center */}
        <section id="command-center" className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Command Center</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {_[
              { title: 'Automation Hub', _desc: 'Runbooks, _factories, _and live autonomous agents.', _href: '/automation'},
              {_title: 'Site Health', _desc: 'A11y, _performance, _and link‑health dashboards.', _href: '/site-health'},
              {_title: 'SEO Audit', _desc: 'Continuous on‑site SEO scans with proposed diffs.', _href: '/reports/seo'},
              {_title: 'AI Trends', _desc: 'Intelligence signals from the AI/cloud ecosystem.', _href: '/reports/ai-trends'},
              {_title: 'Newsroom', _desc: 'Curated updates and product evolution highlights.', _href: '/newsroom'},
              {_title: 'Cloud Automations', _desc: 'Netlify scheduled functions powering jobs 24/7.', _href: '/automation'},
              {_title: 'Docs', _desc: 'Technical notes and guides for the platform.', _href: '/reports/seo', _external: true},
              {_title: 'AI Changelog', _desc: 'Summarized autonomous changes and highlights.', _href: '/newsroom', _external: true}
            ].map(_(card) => (
              <article key={_card.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 holo tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{_card.title}</h3>
                <p className="mt-1 text-sm text-white/75">{_card.desc}</p>
                {_card.external ? (
                  <a href={card.href} target="_blank" rel="noopener" className="mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline">Open</a>
                ) : (
                  <Link href={_card.href as string}><a className="mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline">Open</a></Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                )}
              </article>
            ))}
          </div>
        </section>

        {_/* Netlify Automations */}
        <motion.section
<<<<<<< HEAD
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
              { label: 'SEO Audit Runner', desc: 'Analyzes meta and content signals, writes public report.', href: '/.netlify/functions/seo-audit-runner' },
              { label: 'AI Trends Radar', desc: 'Builds AI trends report from curated sources.', href: '/.netlify/functions/ai-trends-radar-runner' },
              { label: 'Dependency Auto‑Upgrade', desc: 'Safely bumps deps and verifies a clean build.', href: '/.netlify/functions/deps-auto-upgrade-runner' },
              { label: 'Autonomous Meta Orchestrator', desc: 'Invents and triggers cloud automations, syncs changes.', href: '/.netlify/functions/autonomous-meta-orchestrator' },
              { label: 'Trigger All & Commit', desc: 'Invokes all functions and triggers a build or commit.', href: '/.netlify/functions/trigger-all-and-commit' }
            ].map((f) => (
<<<<<<< HEAD
              <a key={f.label} href={f.href} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
=======
          id="netlify-automations"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Netlify Automations</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Zero‑ops scheduled functions power background tasks that improve the site and ship small, safe diffs to main.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {_[ 
              { label: 'Autonomous Cloud Brain (1m)', _desc: 'Selectively triggers and syncs key pipelines every minute.', _href: '/.netlify/functions/autonomous-cloud-brain'},
              {_label: 'Homepage Advertiser', _desc: 'Curates and updates the home explore section.', _href: '/.netlify/functions/homepage_advertiser'},
              {_label: 'Autonomous Meta Orchestrator', _desc: 'Intelligently triggers cloud functions and syncs to main every minute.', _href: '/.netlify/functions/autonomous-meta-orchestrator'},
              {_label: 'Cloud Orchestrator', _desc: 'Runs fast improvement cycle and git sync.', _href: '/.netlify/functions/cloud_orchestrator'},
              {_label: 'Autonomous Meta Orchestrator (1m)', _desc: 'Curates and triggers critical cloud functions, _then syncs.', _href: '/.netlify/functions/autonomous-meta-orchestrator'},
              {_label: 'Cloud Trigger Hub (2m)', _desc: 'Triggers most functions concurrently, _then rebuilds/stamps.', _href: '/.netlify/functions/cloud-trigger-hub'},
              {_label: 'Sitemap Runner', _desc: 'Keeps sitemap fresh for SEO visibility.', _href: '/.netlify/functions/sitemap_runner'},
              {_label: 'SEO Audit Runner', _desc: 'Analyzes meta and content signals; writes public report.', _href: '/.netlify/functions/seo-audit-runner'},
              {_label: 'AI Trends Radar', _desc: 'Builds AI trends report from curated sources.', _href: '/.netlify/functions/ai-trends-radar-runner'},
              {_label: 'Dependency Auto‑Upgrade', _desc: 'Safely bumps deps and verifies a clean build.', _href: '/.netlify/functions/deps-auto-upgrade-runner'},
              {_label: 'Autonomous Meta Orchestrator', _desc: 'Invents and triggers cloud automations; syncs changes.', _href: '/.netlify/functions/autonomous-meta-orchestrator'},
              {_label: 'Trigger All & Commit', _desc: 'Invokes all functions and triggers a build or commit.', _href: '/.netlify/functions/trigger-all-and-commit'}
            ].map(_(f) => (
              <a key={_f.label} href={_f.href} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-lg font-semibold">{_f.label}</div>
                <div className="mt-1 text-sm text-white/75">{_f.desc}</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Trigger <span aria-hidden>↗</span></div>
=======
              <a key={f.label} href={f.href} target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                <div className=&quot;text-lg font-semibold&quot;>{f.label}</div>
                <div className=&quot;mt-1 text-sm text-white/75&quot;>{f.desc}</div>
                <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Trigger <span aria-hidden>↗</span></div>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              </a>
            ))}
          </div>
        </motion.section>

<<<<<<< HEAD
        {/* New Cloud Automations */}
        <section className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;>
          <h3 className=&quot;text-center text-xl font-bold tracking-wide text-white/90&quot;>New Cloud Automations</h3>
          <div className=&quot;mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3&quot;>
            <a href=&quot;/.netlify/functions/stale-content-auditor-runner&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;text-lg font-semibold&quot;>Stale Content Auditor</div>
              <div className=&quot;mt-1 text-sm text-white/75&quot;>Finds stale pages/components/docs and publishes a report.</div>
              <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Trigger <span aria-hidden>↗</span></div>
=======
        {_/* New Cloud Automations */}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h3 className="text-center text-xl font-bold tracking-wide text-white/90">New Cloud Automations</h3>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/.netlify/functions/stale-content-auditor-runner" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-lg font-semibold">Stale Content Auditor</div>
              <div className="mt-1 text-sm text-white/75">Finds stale pages/components/docs and publishes a report.</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Trigger <span aria-hidden>↗</span></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </a>

            <a href=&quot;/.netlify/functions/autonomous-invention-orchestrator&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;text-lg font-semibold&quot;>Autonomous Invention Orchestrator</div>
              <div className=&quot;mt-1 text-sm text-white/75&quot;>Invents and curates fresh automations and safely syncs diffs to main.</div>
              <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Trigger <span aria-hidden>↗</span></div>
            </a>
          </div>
        </section>

        {_/* Feature Spotlight */}
        <motion.section
<<<<<<< HEAD
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
=======
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Feature Spotlight</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">A quick tour of the most impactful capabilities — each card links to a deep dive.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {_[
              { Icon: Rocket, _title: 'Automation Hub', _desc: 'Factories, _agents, _and live workflows', _href: '/automation'},
              {_Icon: Search, _title: 'AI SEO Auditor', _desc: 'Continuous on‑site SEO improvements', _href: '/reports/seo'},
              {_Icon: Gauge, _title: 'Site Health', _desc: 'A11y, _performance, _and link integrity', _href: '/site-health'},
              {_Icon: Globe, _title: 'AI Trends Radar', _desc: 'Signals that inspire new automations', _href: '/reports/ai-trends'},
              {_Icon: GitBranch, _title: 'Main Sync', _desc: 'Safe, _incremental diffs shipped continuously', _href: '/automation'},
              {_Icon: ShieldCheck, _title: 'Guardrails', _desc: 'Defense‑in‑depth quality gates', _href: '/site-health'}].map(_({_Icon, _title, _desc, _href}) => (
              <Link key={_title} href={_href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <h3 className="text-lg font-semibold">{_title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-white/75">{_desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </a>
              </a>
            ))}
          </div>
        </motion.section>

<<<<<<< HEAD
        {/* AUTO-GENERATED: FRONT_ADS_START */}
<<<<<<< HEAD
=======
        {_/* AUTO-GENERATED: FRONT_ADS_START */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/10 via-violet-600/10 to-cyan-600/10 p-6 backdrop-blur-xl">
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,2.5rem_2.5rem,2.5rem_2.5rem] animate-grid" />
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore Zion Systems</h2>
            <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Discover key features, capabilities, and benefits. Each card links to a dedicated page or live hub.</p>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Link href="/automation"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /><h3 className="text-base font-semibold">Automation Hub</h3><p className="mt-1 text-sm text-white/75">Factories, agents, and live workflows</p><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
              <Link href="/reports/seo"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /><h3 className="text-base font-semibold">AI SEO Auditor</h3><p className="mt-1 text-sm text-white/75">Continuous on‑site SEO improvements</p><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
              <Link href="/site-health"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /><h3 className="text-base font-semibold">Site Health</h3><p className="mt-1 text-sm text-white/75">A11y, performance, and link integrity</p><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
              <Link href="/reports/ai-trends"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /><h3 className="text-base font-semibold">AI Trends Radar</h3><p className="mt-1 text-sm text-white/75">Signals that inspire new automations</p><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
              <Link href="/newsroom"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /><h3 className="text-base font-semibold">Newsroom</h3><p className="mt-1 text-sm text-white/75">Latest autonomous updates</p><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
              <a href="https://github.com/Zion-Holdings/zion.app/actions" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /><h3 className="text-base font-semibold">Live Workflows</h3><p className="mt-1 text-sm text-white/75">Observe pipelines running 24/7</p><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a>
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            </div>
          </div>
        </section>
        {_/* AUTO-GENERATED: FRONT_ADS_END */}

        {_/* Outcome Benefits */}
        <motion.section
<<<<<<< HEAD
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
=======
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Outcome‑Focused Benefits</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Choose an outcome and jump to the relevant systems that make it happen.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {_[
              { label: 'Grow organic traffic', _desc: 'On‑site SEO improvements, _better metadata, _richer links', _href: '/reports/seo'},
              {_label: 'Improve UX quality', _desc: 'A11y fixes, _performance gains, _resilient links', _href: '/site-health'},
              {_label: 'Reduce engineering toil', _desc: 'Automated upgrades, _refactors, _and maintenance', _href: '/automation'},
              {_label: 'Ship faster with confidence', _desc: 'Small safe diffs synced to main', _href: '/automation'},
              {_label: 'Stay compliant & accessible', _desc: 'Policy guardrails and WCAG checks', _href: '/site-health'},
              {_label: 'Learn from market signals', _desc: 'AI + cloud trends to guide strategy', _href: '/reports/ai-trends'}].map(_(b) => (
              <Link key={_b.label} href={_b.href}>
                <a className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-fuchsia-400/30">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                  <span className="text-sm text-white/80"><span className="font-semibold text-white">{_b.label}</span> — {_b.desc} <span className="ml-1 text-cyan-300/90">→</span></span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </a>
              </a>
            ))}
          </div>
        </motion.section>

        {_/* Suites */}
        <motion.section
<<<<<<< HEAD
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
=======
          id="suites"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Automation Suites</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {_[
              { title: 'Quick Fixes', _desc: 'Build rescue, _sitemap/robots, _security remediation', _href: '/automation'},
              {_title: 'Deep Maintenance', _desc: 'Orchestrated smoke tests and link checks', _href: '/automation'},
              {_title: 'Marketing & SEO', _desc: 'Content factories and on‑site optimizations', _href: '/automation'},
              {_title: 'Content Curation', _desc: 'Homepage promos generated continuously', _href: '/automation'},
              {_title: 'Dependency Upgrades', _desc: 'Minor/patch bumps with safe auto‑merge', _href: '/automation'},
              {_title: 'Live Workflows', _desc: 'Observe pipelines running 24/7', _href: '/site-health', _external: true},
              {_title: 'Site Health', _desc: 'A11y, _performance, _link checks dashboards', _href: '/site-health'},
              {_title: 'AI SEO Auditor', _desc: 'Continuous on‑site audits with safe proposed diffs', _href: '/reports/seo'},
              {_title: 'AI Trends Radar', _desc: 'Signal scanning to inspire new factories', _href: '/reports/ai-trends'}].map(_(suite) => (
              <article key={_suite.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{_suite.title}</h3>
                <p className="mt-1 text-sm text-white/75">{_suite.desc}</p>
                {_suite.href && (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  suite.external ? (
<<<<<<< HEAD
                    <a href={suite.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline">Open</a>
=======
                    <a href={suite.href} target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline&quot;>Open</a>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                  ) : (
<<<<<<< HEAD
                    <Link href={suite.href}><a className=&quot;mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline&quot;>Open</a></a>
=======
                    <Link href={_suite.href}><a className="mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline">Open</a></Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  )
                )}
              </article>
            ))}
          </div>
        </motion.section>

        {_/* Superpowers */}
        <motion.section
<<<<<<< HEAD
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
=======
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Superpowers</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {_[
              { Icon: Rocket, _title: 'Generative Factories', _desc: 'Spins up domain‑specific automation factories that build for you.'},
              {_Icon: ShieldCheck, _title: 'Safety by Design', _desc: 'Layered validations — type checks, _builds, _a11y, _links, _and more.'},
              {_Icon: GitBranch, _title: 'Main Sync', _desc: 'Small, _reviewable edits committed and pushed continuously.'}].map(_({_Icon, _title, _desc}) => (
              <article key={_title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <Icon className="h-6 w-6 text-cyan-300" />
                <h3 className="mt-3 text-lg font-semibold">{_title}</h3>
                <p className="mt-1 text-sm text-white/75">{_desc}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </article>
            ))}
          </div>
        </motion.section>

        {_/* Get Started */}
        <motion.section
<<<<<<< HEAD
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
=======
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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

        {_/* Features */}
        <motion.section
<<<<<<< HEAD
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
=======
          id="features"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Features</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {_[
              { Icon: Zap, _title: 'Self‑Improving', _desc: 'Agents continuously analyze, _invent, _and evolve automations.', _href: '/automation'},
              {_Icon: GitBranch, _title: 'Repo Sync', _desc: 'Changes are committed and pushed automatically to main.', _href: '/automation'},
              {_Icon: Cpu, _title: 'Zero Ops', _desc: 'Runs fully in the cloud—no servers or manual intervention.', _href: '/automation'},
              {_Icon: ShieldCheck, _title: 'Safety‑First', _desc: 'Conservative edits with logs, _reports, _and guardrails.', _href: '/site-health'},
              {_Icon: Gauge, _title: 'Observability', _desc: 'Dashboards, _reports, _and cloud automation artifacts.', _href: '/site-health'},
              {_Icon: Layers, _title: 'Composable Systems', _desc: 'Chain multiple factories into higher‑order workflows.', _href: '/automation'},
              {_Icon: Activity, _title: 'AI SEO Auditor', _desc: 'Continuously scans pages and proposes SEO improvements.', _href: '/reports/seo'},
              {_Icon: Globe, _title: 'AI Trends Radar', _desc: 'Tracks AI and cloud signals to inspire new automations.', _href: '/reports/ai-trends'},
              {_Icon: Search, _title: 'Deep Indexing', _desc: 'Content and code search powering smart linking and PRs.', _href: '/newsroom'},
              {_Icon: BarChart3, _title: 'Live Dashboards', _desc: 'Real‑time quality and impact metrics at a glance.', _href: '/site-health'},
              {_Icon: Activity, _title: 'Health Monitors', _desc: 'A11y, _links, _and performance monitored 24/7.', _href: '/site-health'},
              {_Icon: Globe, _title: 'Intelligence Signals', _desc: 'AI research integrated into product improvements.', _href: '/reports/ai-trends'},
              {_Icon: ShieldCheck, _title: 'Security Scans', _desc: 'Audit dependencies and surface risks with reports.', _href: '/site-health'},
              {_Icon: GitBranch, _title: 'Automated Changelogs', _desc: 'Summarized changes and AI notes published continuously.', _href: '/newsroom'},
              {_Icon: Rocket, _title: 'OG Image Maker', _desc: 'Auto‑generates rich Open Graph images for content.', _href: '/newsroom'},
              {_Icon: ShieldCheck, _title: 'Policy & Compliance', _desc: 'Safety rails and audits applied before shipping.', _href: '/site-health'},
              {_Icon: Layers, _title: 'Factories Library', _desc: 'Reusable building blocks for new automations.', _href: '/automation'},
              {_Icon: Gauge, _title: 'Site Health API', _desc: 'Programmatic access to health signals and artifacts.', _href: '/site-health'},
              {_Icon: Search, _title: 'Link Integrity', _desc: 'Broken links detected and fixed before shipping.', _href: '/site-health'},
              {_Icon: Palette, _title: 'Design System Evolution', _desc: 'Consistent, _modern UI upgrades across the app.', _href: '/newsroom'},
              {_Icon: BarChart3, _title: 'Analytics Exports', _desc: 'Download artifacts and reports for deeper analysis.', _href: '/reports/seo'},
              {_Icon: Search, _title: 'Automated PR Reviews', _desc: 'Bots review diffs for quality, _style, _and policy.', _href: '/automation'},
              {_Icon: Gauge, _title: 'Asset Optimizer', _desc: 'Compresses images and scripts for faster pages.', _href: '/site-health'},
              {_Icon: Layers, _title: 'i18n Readiness', _desc: 'Prepares content and routes for localization.', _href: '/newsroom'},
              {_Icon: Globe, _title: 'Sitemap & Robots', _desc: 'Maintains search‑friendly routing metadata.', _href: '/site-health'},
              {_Icon: Palette, _title: 'Design Tokens', _desc: 'Automates consistent theming and spacing.', _href: '/newsroom'},
              {_Icon: LineChart, _title: 'Experiment Telemetry', _desc: 'Measures impact across experiments and releases.', _href: '/reports/seo'},
              {_Icon: Activity, _title: 'Automated Dependencies', _desc: 'Minor/patch upgrades proposed and merged safely.', _href: '/automation'},
              {_Icon: Search, _title: 'Broken Link Defender', _desc: 'Continuously scans and fixes link integrity issues.', _href: '/site-health'},
              {_Icon: LineChart, _title: 'Experimentation', _desc: 'Automate A/B setups and monitor telemetry automatically.', _href: '/automation'},
              {_Icon: Palette, _title: 'Design Tokens & Theming', _desc: 'Enforce consistent theming, _spacing, _and motion.', _href: '/newsroom'},
              {_Icon: Gauge, _title: 'Image Pipeline', _desc: 'Optimize and transform media assets automatically.', _href: '/site-health'}
            ].map(_({_Icon, _title, _desc, _href}) => (
              <Link key={_title} href={_href}>
                <a className="group glow-card relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:border-cyan-400/30 tilt-on-hover neon-ring">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <h3 className="text-lg font-semibold">{_title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-white/75">{_desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Learn more <Link2 className="h-3.5 w-3.5" /></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </a>
              </a>
            ))}
          </div>
        </motion.section>

        {_/* Outcomes */}
        <motion.section
<<<<<<< HEAD
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
=======
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Outcomes</h2>
          <p className=&quot;mx-auto mt-2 max-w-3xl text-center text-sm text-white/70&quot;>
            Tangible, measurable wins delivered by autonomous cloud agents.
          </p>
<<<<<<< HEAD
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
=======
          <div className="relative mx-auto mt-6 max-w-6xl overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent" />
            <div className="marquee">
              <div className="marquee__track">
                {_[
                  { label: 'Accessibility fixes', _href: '/site-health'},
                  {_label: 'Performance boosts', _href: '/site-health'},
                  {_label: 'SEO improvements', _href: '/reports/seo'},
                  {_label: 'Safer main merges', _href: '/automation'},
                  {_label: 'Cleaner codebase', _href: '/automation'},
                  {_label: 'Better content curation', _href: '/newsroom'},
                  {_label: 'Operational visibility', _href: '/site-health'},
                  {_label: 'Experiment velocity', _href: '/automation'}]
                  .flatMap(_(item) => [item, item])
                  .map(_(item, _idx) => (
                    <Link key={_`${item.label}-${_idx}`} href={_item.href}>
                      <a className="mx-3 my-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur hover:bg-white/10">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> {_item.label}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </a>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </motion.section>

        {_/* Feature Map */}
        <motion.section
<<<<<<< HEAD
          id=&quot;feature-map&quot;
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
=======
          id="feature-map"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Feature Map</h2>
          <p className=&quot;mx-auto mt-2 max-w-3xl text-center text-sm text-white/70&quot;>
            A fast overview of what you can explore right now across the platform.
          </p>
<<<<<<< HEAD
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
<<<<<<< HEAD
                <a key={item.label} href={item.href as string} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
=======
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {_[
              { label: 'Automation Hub', _desc: 'Live agents & workflows', _href: '/automation'},
              {_label: 'Repo Sync to Main', _desc: 'Safe, _incremental edits', _href: '/automation'},
              {_label: 'Zero‑Ops Cloud', _desc: 'Fully managed execution', _href: '/automation'},
              {_label: 'Safety Guardrails', _desc: 'Defense‑in‑depth checks', _href: '/site-health'},
              {_label: 'Observability', _desc: 'Dashboards & artifacts', _href: '/site-health'},
              {_label: 'Composable Systems', _desc: 'Higher‑order workflows', _href: '/automation'},
              {_label: 'AI SEO Auditor', _desc: 'On‑site improvements', _href: '/reports/seo'},
              {_label: 'AI Trends Radar', _desc: 'Intelligence signals', _href: '/reports/ai-trends'},
              {_label: 'Deep Indexing', _desc: 'Smart linking & PRs', _href: '/newsroom'},
              {_label: 'Live Dashboards', _desc: 'Impact at a glance', _href: '/site-health'},
              {_label: 'Health Monitors', _desc: 'A11y, _perf, _links', _href: '/site-health'},
              {_label: 'Docs & Guides', _desc: 'Technical notes', _href: '/reports/seo', _external: true}].map(_(item) => (
              item.external ? (
                <a key={_item.label} href={_item.href as string} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="text-base font-semibold">{_item.label}</div>
                  <div className="mt-1 text-sm text-white/75">{_item.desc}</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
=======
                <a key={item.label} href={item.href as string} target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
                  <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                  <div className=&quot;text-base font-semibold&quot;>{item.label}</div>
                  <div className=&quot;mt-1 text-sm text-white/75&quot;>{item.desc}</div>
                  <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                </a>
              ) : (
<<<<<<< HEAD
                <Link key={item.label} href={item.href as string}>
                  <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
                    <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                    <div className=&quot;text-base font-semibold&quot;>{item.label}</div>
                    <div className=&quot;mt-1 text-sm text-white/75&quot;>{item.desc}</div>
                    <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
=======
                <Link key={_item.label} href={_item.href as string}>
                  <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="text-base font-semibold">{_item.label}</div>
                    <div className="mt-1 text-sm text-white/75">{_item.desc}</div>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </a>
                </a>
              )
            ))}
          </div>
        </motion.section>

        {_/* AUTO: catalog injection for automated advertising */}
        {_/* AUTO:FRONT_INDEX_DIRECTORY_START */

<<<<<<< HEAD
<section id="auto-catalog" className="mx-auto max-w-7xl px-6 pb-16">
  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Autonomous Catalog</h2>
  <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Auto‑discovered features, _capabilities, _and resources. Kept fresh by in‑repo Node tools.</p>
  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/automation"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Automation Hub</div><div className="mt-1 text-sm text-white/75">Factories, _agents, _and live workflows</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/site-health"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Site Health</div><div className="mt-1 text-sm text-white/75">A11y, _performance, _and link dashboards</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/reports/seo"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">AI SEO Auditor</div><div className="mt-1 text-sm text-white/75">Continuous on‑site SEO improvements</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/reports/ai-trends"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">AI Trends Radar</div><div className="mt-1 text-sm text-white/75">Signals that inspire new automations</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/newsroom"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Newsroom</div><div className="mt-1 text-sm text-white/75">Curated updates and product evolution highlights</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/main/front"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Front Systems Hub</div><div className="mt-1 text-sm text-white/75">Curated, _futuristic front experience</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <a href="/reports/seo" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Docs & Guides</div><div className="mt-1 text-sm text-white/75">Technical notes and architecture</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div></a>
          <a href="/newsroom" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">AI Changelog</div><div className="mt-1 text-sm text-white/75">Summarized autonomous changes</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div></a>
          <a href="/site-health" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Live Pipelines</div><div className="mt-1 text-sm text-white/75">CI logs & artifacts 24/7</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div></a>
          <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Zion Cloud</div><div className="mt-1 text-sm text-white/75">Deployments and cloud platform</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div></a>
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  </div>
</section>

/* AUTO:FRONT_INDEX_DIRECTORY_END */}

        {_/* Platform Modules */}
        <motion.section
<<<<<<< HEAD
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
=======
           id="modules"
           initial={_{ opacity: 0, _y: 24}}
           whileInView={_{ opacity: 1, _y: 0}}
           viewport={_{ once: true, _amount: 0.2}}
           transition={_{ duration: 0.5}}
           className="mx-auto max-w-7xl px-6 pb-16"
         >
           <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Platform Modules</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {_[
              { Icon: Rocket, _title: 'Autonomous Factories', _desc: 'Composable, _domain‑specific automation factories.', _href: '/automation'},
              {_Icon: ShieldCheck, _title: 'Guardrails', _desc: 'Defense‑in‑depth validations and policy enforcement.', _href: '/site-health'},
              {_Icon: Gauge, _title: 'Observability', _desc: 'Dashboards, _artifacts, _and live CI telemetry.', _href: '/site-health'},
              {_Icon: Activity, _title: 'SEO Ops', _desc: 'Continuous audits and safe, _suggested diffs.', _href: '/reports/seo'},
              {_Icon: Globe, _title: 'AI Intelligence', _desc: 'Trends radar to guide new automation ideas.', _href: '/reports/ai-trends'},
              {_Icon: Layers, _title: 'Workflow Composer', _desc: 'Chain factories into higher‑order systems.', _href: '/automation'},
              {_Icon: GitBranch, _title: 'Main Sync Engine', _desc: 'Small, _reviewable edits merged continuously.', _href: '/automation'},
              {_Icon: Cpu, _title: 'Zero‑Ops Runtime', _desc: 'Cloud‑native execution with no servers to manage.', _href: '/automation'},
              {_Icon: BarChart3, _title: 'Impact Analytics', _desc: 'Track outcomes and ROI from automations.', _href: '/site-health'}].map(_({_Icon, _title, _desc, _href}) => (
              <Link key={_title} href={_href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <h3 className="text-lg font-semibold">{_title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-white/75">{_desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <Link2 className="h-3.5 w-3.5" /></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </a>
              </a>
            ))}
          </div>
        </motion.section>

        {_/* Neural Feature Matrix */}
        <motion.section
<<<<<<< HEAD
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
<<<<<<< HEAD
                <a key={item.label} href={item.href as string} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">
=======
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Neural Feature Matrix</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">A denser, at-a-glance atlas of what Zion ships autonomously. Every tile links to the live hub, report, or docs.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {_[
              { label: 'Automation Hub', _desc: 'Factories, _agents, _workflows', _href: '/automation'},
              {_label: 'Main Sync Engine', _desc: 'Safe diffs to main', _href: '/automation'},
              {_label: 'Zero‑Ops Cloud', _desc: 'Run in the cloud, _no servers', _href: '/automation'},
              {_label: 'Guardrails', _desc: 'Policy + safety gates', _href: '/site-health'},
              {_label: 'Site Health', _desc: 'A11y, _performance, _links', _href: '/site-health'},
              {_label: 'AI SEO Auditor', _desc: 'Continuous on‑site SEO', _href: '/reports/seo'},
              {_label: 'AI Trends Radar', _desc: 'Signals powering strategy', _href: '/reports/ai-trends'},
              {_label: 'Content Curation', _desc: 'Promos and deep links', _href: '/newsroom'},
              {_label: 'Factories Library', _desc: 'Composable building blocks', _href: '/automation'},
              {_label: 'Impact Dashboards', _desc: 'Artifacts and telemetry', _href: '/site-health'},
              {_label: 'Link Integrity', _desc: 'Broken links defender', _href: '/site-health'},
              {_label: 'Design Evolution', _desc: 'Futuristic UI upgrades', _href: '/newsroom'},
              {_label: 'Docs & Guides', _desc: 'Technical notes', _href: '/reports/seo', _external: true},
              {_label: 'AI Changelog', _desc: 'Summarized updates', _href: '/newsroom', _external: true},
                             {_label: 'Cloud Automations', _desc: 'Netlify scheduled functions', _href: '/automation'},
               {_label: 'Roadmap & Issues', _desc: "What's next", _href: '//issues', _external: true}
            ].map(_(item) => (
              item.external ? (
                <a key={_item.label} href={_item.href as string} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="text-base font-semibold">{_item.label}</div>
                  <div className="mt-1 text-sm text-white/75">{_item.desc}</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
=======
                <a key={item.label} href={item.href as string} target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring&quot;>
                  <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                  <div className=&quot;text-base font-semibold&quot;>{item.label}</div>
                  <div className=&quot;mt-1 text-sm text-white/75&quot;>{item.desc}</div>
                  <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                </a>
              ) : (
<<<<<<< HEAD
                <Link key={item.label} href={item.href as string}>
                  <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring&quot;>
                    <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                    <div className=&quot;text-base font-semibold&quot;>{item.label}</div>
                    <div className=&quot;mt-1 text-sm text-white/75&quot;>{item.desc}</div>
                    <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
=======
                <Link key={_item.label} href={_item.href as string}>
                  <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="text-base font-semibold">{_item.label}</div>
                    <div className="mt-1 text-sm text-white/75">{_item.desc}</div>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </a>
                </a>
              )
            ))}
          </div>
        </motion.section>

        {_/* Extended Feature Directory */}
        <motion.section
<<<<<<< HEAD
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
<<<<<<< HEAD
                <a key={title} href={href as string} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">
=======
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Extended Feature Directory</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">A broader tour of autonomous capabilities. Each card links to the relevant hub, report, or live workflow.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {_[
              { Icon: GitBranch, _title: 'Automated Changelogs', _desc: 'AI-authored CHANGELOG with continuous updates.', _href: '/newsroom', _external: true},
              {_Icon: Rocket, _title: 'Content Curation', _desc: 'Homepage promos and deep links generated on the fly.', _href: '/newsroom'},
              {_Icon: Search, _title: 'Deep Site Index', _desc: 'Smarter internal linking and content discovery.', _href: '/newsroom'},
              {_Icon: ShieldCheck, _title: 'Policy & Compliance', _desc: 'Safety rails and audits before changes ship.', _href: '/site-health'},
              {_Icon: BarChart3, _title: 'Impact Dashboards', _desc: 'Real-time visibility into outcomes and ROI.', _href: '/site-health'},
              {_Icon: Layers, _title: 'Factories Library', _desc: 'Composable building blocks for new automations.', _href: '/automation'},
              {_Icon: Activity, _title: 'Health Monitors', _desc: 'A11y, _links, _and performance monitored 24/7.', _href: '/site-health'},
              {_Icon: Cpu, _title: 'Zero-Ops Runtime', _desc: 'Fully managed cloud execution with no servers.', _href: '/automation'},
              {_Icon: Globe, _title: 'Intelligence Signals', _desc: 'AI + cloud trend tracking fueling new ideas.', _href: '/reports/ai-trends'}].map(_({_Icon, _title, _desc, _href, _external}) => (
              external ? (
                <a key={_title} href={_href as string} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-3"><Icon className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">{_title}</h3></div>
                  <p className="mt-1 text-sm text-white/75">{_desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
=======
                <a key={title} href={href as string} target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring&quot;>
                  <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                  <div className=&quot;flex items-center gap-3&quot;><Icon className=&quot;h-5 w-5 text-cyan-300&quot; /><h3 className=&quot;text-lg font-semibold&quot;>{title}</h3></div>
                  <p className=&quot;mt-1 text-sm text-white/75&quot;>{desc}</p>
                  <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                </a>
              ) : (
<<<<<<< HEAD
                <Link key={title} href={href as string}>
                  <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring&quot;>
                    <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                    <div className=&quot;flex items-center gap-3&quot;><Icon className=&quot;h-5 w-5 text-cyan-300&quot; /><h3 className=&quot;text-lg font-semibold&quot;>{title}</h3></div>
                    <p className=&quot;mt-1 text-sm text-white/75&quot;>{desc}</p>
                    <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
=======
                <Link key={_title} href={_href as string}>
                  <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="flex items-center gap-3"><Icon className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">{_title}</h3></div>
                    <p className="mt-1 text-sm text-white/75">{_desc}</p>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </a>
                </a>
              )
            ))}
          </div>
        </motion.section>

        {_/* Capability Deep Links */}
        <motion.section
<<<<<<< HEAD
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
              ['SEO AutomationOn-site scans and safe diffs to improve visibility/reports/seo'],
              ['Site HealthA11y, performance, and resilient links at a glance/site-health'],
              ['Automation HubFactories and live autonomous workflows/automation'],
              ['AI Trends RadarSignals inspiring new factories and experiments/reports/ai-trends'],
              ['NewsroomCurated updates and product evolution highlights/newsroom'],
              ['Live PipelinesObserve CI pipelines, logs, and artifacts/site-health'],
              ['DocumentationTechnical notes, guides, and changelog/reports/seo'],
              ['AI ChangelogSummarized autonomous changes and highlights/newsroom']].map(([label, desc, href]) => (
              (href as string).startsWith('http') ? (
<<<<<<< HEAD
                <a key={label as string} href={href as string} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-fuchsia-400/30">
=======
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-16"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Capability Deep Links</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Jump directly to the systems that deliver each capability.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {_[
              ['SEO Automation', _'On-site scans and safe diffs to improve visibility', _'/reports/seo'], _['Site Health', _'A11y, _performance, _and resilient links at a glance', _'/site-health'], _['Automation Hub', _'Factories and live autonomous workflows', _'/automation'], _['AI Trends Radar', _'Signals inspiring new factories and experiments', _'/reports/ai-trends'], _['Newsroom', _'Curated updates and product evolution highlights', _'/newsroom'], _['Live Pipelines', _'Observe CI pipelines, _logs, _and artifacts', _'/site-health'], _['Documentation', _'Technical notes, _guides, _and changelog', _'/reports/seo'], _['AI Changelog', _'Summarized autonomous changes and highlights', _'/newsroom']].map(_([label, _desc, _href]) => (
              (href as string).startsWith('http') ? (
                <a key={label as string} href={_href as string} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-fuchsia-400/30">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="text-base font-semibold">{_label as string}</div>
                  <div className="mt-1 text-sm text-white/75">{_desc as string}</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
=======
                <a key={label as string} href={href as string} target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-fuchsia-400/30&quot;>
                  <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                  <div className=&quot;text-base font-semibold&quot;>{label as string}</div>
                  <div className=&quot;mt-1 text-sm text-white/75&quot;>{desc as string}</div>
                  <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                </a>
              ) : (
<<<<<<< HEAD
                <Link key={label as string} href={href as string}>
                  <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-fuchsia-400/30&quot;>
                    <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                    <div className=&quot;text-base font-semibold&quot;>{label as string}</div>
                    <div className=&quot;mt-1 text-sm text-white/75&quot;>{desc as string}</div>
                    <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
=======
                <Link key={_label as string} href={_href as string}>
                  <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-fuchsia-400/30">
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="text-base font-semibold">{_label as string}</div>
                    <div className="mt-1 text-sm text-white/75">{_desc as string}</div>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </a>
                </a>
              )
            ))}
          </div>
        </motion.section>

        {_/* Use Cases */}
        <motion.section
<<<<<<< HEAD
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
=======
          id="use-cases"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Use Cases</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {_[
              { title: 'AI SEO Auditor', _desc: 'Continuously scans pages and proposes SEO improvements with safe diffs.'},
              {_title: 'Design Beautifier', _desc: 'Upgrades UI components with modern, _cohesive visual language.'},
              {_title: 'Content Curator', _desc: 'Surfaces and promotes high‑value content with links and metadata.'},
              {_title: 'Performance Tuner', _desc: 'Optimizes bundles, _images, _and scripts for faster loads.'},
              {_title: 'A11y Guardian', _desc: 'Catches and fixes accessibility issues before they ship.'},
              {_title: 'Growth Experiments', _desc: 'Spins up micro‑experiments and measures impact automatically.'}].map(_(u) => (
              <article key={_u.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-fuchsia-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{_u.title}</h3>
                <p className="mt-1 text-sm text-white/75">{_u.desc}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </article>
            ))}
          </div>
        </motion.section>

        {_/* Stats */}
        <motion.section
<<<<<<< HEAD
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
<<<<<<< HEAD
                <a key={item.label} href={item.href as string} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur hover:border-cyan-400/30">
                  <div className="text-2xl font-extrabold tracking-tight">{item.value}</div>
                  <div className="mt-1 text-xs text-white/70">{item.label}</div>
=======
                <a key={item.label} href={item.href as string} target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur hover:border-cyan-400/30&quot;>
                  <div className=&quot;text-2xl font-extrabold tracking-tight&quot;>{item.value}</div>
                  <div className=&quot;mt-1 text-xs text-white/70&quot;>{item.label}</div>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                </a>
              ) : (
                <Link key={item.label} href={item.href as string}>
                  <a className=&quot;rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur hover:border-cyan-400/30&quot;>
                    <div className=&quot;text-2xl font-extrabold tracking-tight&quot;>{item.value}</div>
                    <div className=&quot;mt-1 text-xs text-white/70&quot;>{item.label}</div>
=======
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <div className="neon-divider mx-auto mb-8 h-px w-full max-w-5xl" />
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Live Impact</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {_[
              { label: 'Workflows', _value: '1, _200+', _href: '/site-health', _external: true},
              {_label: 'Commits Synced', _value: '800+', _href: '/automation'},
              {_label: 'Automated Edits', _value: '3, _500+', _href: '/automation'},
              {_label: 'Uptime', _value: '99.95%', _href: '/site-health'},
              {_label: 'A11y Checks', _value: '20k+', _href: '/site-health'},
              {_label: 'SEO Fixes', _value: '4.2k+', _href: '/reports/seo'}].map(_(item) => (
              item.external ? (
                <a key={_item.label} href={_item.href as string} target="_blank" rel="noopener" className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur hover:border-cyan-400/30">
                  <div className="text-2xl font-extrabold tracking-tight">{_item.value}</div>
                  <div className="mt-1 text-xs text-white/70">{_item.label}</div>
                </a>
              ) : (
                <Link key={_item.label} href={_item.href as string}>
                  <a className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur hover:border-cyan-400/30">
                    <div className="text-2xl font-extrabold tracking-tight">{_item.value}</div>
                    <div className="mt-1 text-xs text-white/70">{_item.label}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </a>
                </a>
              )
            ))}
          </div>
        </motion.section>

        {_/* Capabilities */}
        <motion.section
<<<<<<< HEAD
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
=======
          id="capabilities"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Capabilities</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {_[
              { Icon: Palette, _title: 'Design Evolution', _desc: 'Autonomously beautifies UI with consistent, _futuristic patterns.', _href: '/newsroom'},
              {_Icon: BarChart3, _title: 'Performance & A11y', _desc: 'Optimizes bundles, _assets, _and accessibility with continuous checks.', _href: '/site-health'},
              {_Icon: LineChart, _title: 'Content & SEO', _desc: 'Curates content, _updates promos, _and tunes metadata for reach.', _href: '/reports/seo'},
              {_Icon: Layers, _title: 'Code Quality & Refactors', _desc: 'Lints, _fixes, _and proposes refactors with type‑safety improvements.', _href: '/automation'},
              {_Icon: Gauge, _title: 'Observability & Reports', _desc: 'Artifacts, _dashboards, _and live logs for every automation.', _href: '/site-health'},
              {_Icon: Globe, _title: 'Intelligence Signals', _desc: 'AI + cloud trend tracking to spark new factory ideas.', _href: '/reports/ai-trends'},
              {_Icon: GitBranch, _title: 'Repo Sync to Main', _desc: 'Small, _safe diffs merged continuously for momentum.', _href: '/automation'},
              {_Icon: ShieldCheck, _title: 'Guardrails & Policy', _desc: 'Organization‑wide safety rules enforced automatically.', _href: '/site-health'},
              {_Icon: Cpu, _title: 'Zero‑Ops Cloud', _desc: 'Fully managed cloud execution with no servers to babysit.', _href: '/automation'},
              {_Icon: Activity, _title: 'Automated Dependencies', _desc: 'Minor/patch upgrades proposed and merged safely.', _href: '/automation'},
              {_Icon: Search, _title: 'Broken Link Defender', _desc: 'Continuously scans and fixes link integrity issues.', _href: '/site-health'},
              {_Icon: LineChart, _title: 'Experimentation', _desc: 'Automate A/B setups and monitor telemetry automatically.', _href: '/automation'},
              {_Icon: Palette, _title: 'Design Tokens & Theming', _desc: 'Enforce consistent theming, _spacing, _and motion.', _href: '/newsroom'},
              {_Icon: Gauge, _title: 'Image Pipeline', _desc: 'Optimize and transform media assets automatically.', _href: '/site-health'}].map(_({_Icon, _title, _desc, _href}) => (
              <Link key={_title} href={_href}>
                <a className="relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-cyan-400/10 blur-2xl" />
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <h3 className="text-lg font-semibold">{_title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-white/75">{_desc}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </a>
              </a>
            ))}
          </div>
        </motion.section>

        {_/* Why Zion */}
        <motion.section
<<<<<<< HEAD
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
        >
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Why Zion</h2>
          <div className=&quot;mx-auto mt-6 max-w-5xl grid grid-cols-1 gap-4 md:grid-cols-3&quot;>
            {[
<<<<<<< HEAD
              ['🚀SpeedContinuous delivery to main with safe, incremental changes.'],
              ['🛡️SafetyConservative edits and guardrails keep production stable.'],
              ['📈ScaleAutomatically generates new factories as your needs grow.']].map(([icon, title, desc]) => (
              <div key={title as string} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="text-2xl">{icon as string}</div>
                <div className="mt-2 text-base font-semibold">{title as string}</div>
                <div className="mt-1 text-sm text-white/75">{desc as string}</div>
=======
              ['🚀', 'Speed', 'Continuous delivery to main with safe, incremental changes.'],
              ['🛡️', 'Safety', 'Conservative edits and guardrails keep production stable.'],
              ['📈', 'Scale', 'Automatically generates new factories as your needs grow.']].map(([icon, title, desc]) => (
              <div key={title as string} className=&quot;rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur&quot;>
                <div className=&quot;text-2xl&quot;>{icon as string}</div>
                <div className=&quot;mt-2 text-base font-semibold&quot;>{title as string}</div>
                <div className=&quot;mt-1 text-sm text-white/75&quot;>{desc as string}</div>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Why Zion</h2>
          <div className="mx-auto mt-6 max-w-5xl grid grid-cols-1 gap-4 md:grid-cols-3">
            {_[
              ['🚀', _'Speed', _'Continuous delivery to main with safe, _incremental changes.'], _['🛡️', _'Safety', _'Conservative edits and guardrails keep production stable.'], _['📈', _'Scale', _'Automatically generates new factories as your needs grow.']].map(_([icon, _title, _desc]) => (
              <div key={title as string} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="text-2xl">{_icon as string}</div>
                <div className="mt-2 text-base font-semibold">{_title as string}</div>
                <div className="mt-1 text-sm text-white/75">{_desc as string}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            ))}
          </div>
        </motion.section>

        {_/* Value Pillars */}
        <motion.section
<<<<<<< HEAD
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
=======
          id="pillars"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Value Pillars</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Four pillars that guide every autonomous change — jump into the systems behind each.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {_[
              { Icon: ShieldCheck, _title: 'Security & Safety', _desc: 'Guardrails, _policy, _and quality gates.', _href: '/site-health'},
              {_Icon: Rocket, _title: 'Speed & Momentum', _desc: 'Small diffs shipped continuously.', _href: '/automation'},
              {_Icon: Gauge, _title: 'Quality & Reliability', _desc: 'A11y, _performance, _and link integrity.', _href: '/site-health'},
              {_Icon: Layers, _title: 'Scale & Composability', _desc: 'Factories chained into higher‑order workflows.', _href: '/automation'}].map(_({_Icon, _title, _desc, _href}) => (
              <Link key={_title} href={_href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <h3 className="text-lg font-semibold">{_title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-white/75">{_desc}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </a>
              </a>
            ))}
          </div>
        </motion.section>

        {_/* Benefits */}
        <motion.section
<<<<<<< HEAD
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
=======
          id="benefits"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-20"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Benefits</h2>
          {_/* Benefits ticker */}
          <div className="relative mx-auto mt-4 max-w-5xl overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent" />
            <div className="marquee">
              <div className="marquee__track">
                {_[
                  { label: '24/7 autonomous progress', _href: '/automation'},
                  {_label: 'Main branch delivery', _href: '/automation'},
                  {_label: 'A11y & performance wins', _href: '/site-health'},
                  {_label: 'Continuous SEO gains', _href: '/reports/seo'},
                  {_label: 'Transparent artifacts', _href: '/site-health'},
                  {_label: 'Guardrails & policy', _href: '/site-health'},
                  {_label: 'Faster iteration loops', _href: '/newsroom'},
                  {_label: 'Lower operational toil', _href: '/automation'}].flatMap(_(i) => [i, i]).map(_(i, _idx) => (
                  <Link key={_`${i.label}-${_idx}`} href={_i.href}>
                    <a className="mx-3 my-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur hover:bg-white/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> {_i.label}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </a>
                  </a>
                ))}
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <div className=&quot;mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-3 md:grid-cols-2&quot;>
            {[
<<<<<<< HEAD
              '24/7 progress without human interventionRapid feedback loop with safe, incremental editsContinuous delivery directly to main branchFewer regressions via layered checks and reportsHigher velocity with automated maintenanceReduced costs via zero‑ops and automated QAConsistent design language and UX qualityTransparent artifacts and live workflow logs',
              'Faster experiment velocity with measurable impactImproved search visibility via continuous SEOHappier users thanks to performance & a11y winsLower operational risk through guardrailsImproved discoverability via deep indexing and SEOHappier engineers with less toil and more creationConfident shipping through automated guardrailsPredictable quality gates and SLOs upheld automatically',
              'Auditability for compliance with full traceabilityHappier teams: less toil, more product valueAutomated dependency upgrades and security scansClear analytics and downloadable artifacts for every runComposable factories accelerate new initiatives'].map((b) => (
              <div key={b} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                <span className="text-sm text-white/80">{b}</span>
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
          <div className="mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-3 md:grid-cols-2">
            {_[
              '24/7 progress without human intervention', _'Rapid feedback loop with safe, _incremental edits', _'Continuous delivery directly to main branch', _'Fewer regressions via layered checks and reports', _'Higher velocity with automated maintenance', _'Reduced costs via zero‑ops and automated QA', _'Consistent design language and UX quality', _'Transparent artifacts and live workflow logs', _'Faster experiment velocity with measurable impact', _'Improved search visibility via continuous SEO', _'Happier users thanks to performance & a11y wins', _'Lower operational risk through guardrails', _'Improved discoverability via deep indexing and SEO', _'Happier engineers with less toil and more creation', _'Confident shipping through automated guardrails', _'Predictable quality gates and SLOs upheld automatically', _'Auditability for compliance with full traceability', _'Happier teams: less toil, _more product value', _'Automated dependency upgrades and security scans', _'Clear analytics and downloadable artifacts for every run', _'Composable factories accelerate new initiatives'].map(_(b) => (
              <div key={b} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                <span className="text-sm text-white/80">{_b}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            ))}
          </div>
        </motion.section>

        {_/* Benefits in Practice */}
        <motion.section
<<<<<<< HEAD
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
<<<<<<< HEAD
                <a key={b.label} href={b.href as string} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md hover:border-cyan-400/30">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                  <span className="text-sm text-white/80"><span className="font-semibold text-white">{b.label}</span> — {b.desc} <span className="ml-1 text-cyan-300/90">↗</span></span>
=======
                <a key={b.label} href={b.href as string} target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md hover:border-cyan-400/30&quot;>
                  <span className=&quot;mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]&quot; />
                  <span className=&quot;text-sm text-white/80&quot;><span className=&quot;font-semibold text-white&quot;>{b.label}</span> — {b.desc} <span className=&quot;ml-1 text-cyan-300/90&quot;>↗</span></span>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                </a>
              ) : (
                <Link key={b.label} href={b.href as string}>
                  <a className=&quot;group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md hover:border-cyan-400/30&quot;>
                    <span className=&quot;mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]&quot; />
                    <span className=&quot;text-sm text-white/80&quot;><span className=&quot;font-semibold text-white&quot;>{b.label}</span> — {b.desc} <span className=&quot;ml-1 text-cyan-300/90&quot;>→</span></span>
=======
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-16"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Benefits in Practice</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">See where each benefit shows up in the product.</p>
          <div className="mx-auto mt-6 max-w-5xl grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {_[
              { label: '24/7 progress', _desc: 'Agents keep shipping while you sleep', _href: '/automation'},
              {_label: 'Rapid feedback loop', _desc: 'Tight iteration cycles on UX & code', _href: '/newsroom'},
              {_label: 'Main branch delivery', _desc: 'Small, _safe diffs merged continuously', _href: '/site-health', _external: true},
              {_label: 'Fewer regressions', _desc: 'Layered checks catch issues early', _href: '/site-health'},
              {_label: 'Increased reach', _desc: 'Continuous SEO improvements', _href: '/reports/seo'},
              {_label: 'Strategic insights', _desc: 'AI + cloud trend tracking', _href: '/reports/ai-trends'}].map(_(b) => (
              b.external ? (
                <a key={_b.label} href={_b.href as string} target="_blank" rel="noopener" className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md hover:border-cyan-400/30">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                  <span className="text-sm text-white/80"><span className="font-semibold text-white">{_b.label}</span> — {_b.desc} <span className="ml-1 text-cyan-300/90">↗</span></span>
                </a>
              ) : (
                <Link key={_b.label} href={_b.href as string}>
                  <a className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md hover:border-cyan-400/30">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                    <span className="text-sm text-white/80"><span className="font-semibold text-white">{_b.label}</span> — {_b.desc} <span className="ml-1 text-cyan-300/90">→</span></span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </a>
                </a>
              )
            ))}
          </div>
        </motion.section>

<<<<<<< HEAD
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
=======
        {_/* Tailored Value by Team */}
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Tailored Value by Team</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {_[
              { title: 'Developers', _desc: 'Code quality, _refactors, _upgrades, _reliability', _href: '/automation'},
              {_title: 'Product', _desc: 'Faster UX improvements, _experiments, _insights', _href: '/newsroom'},
              {_title: 'Marketing', _desc: 'SEO automation, _content curation, _reach', _href: '/reports/seo'},
              {_title: 'Operations', _desc: 'A11y, _performance, _and link‑health dashboards', _href: '/site-health'}].map(_(card) => (
              <Link key={_card.title} href={_card.href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold">{_card.title}</h3>
                  <p className="mt-1 text-sm text-white/75">{_card.desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <Link2 className="h-3.5 w-3.5" /></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </a>
              </a>
            ))}
          </div>
        </section>

        {_/* Ecosystem & Integrations */}
        <motion.section
<<<<<<< HEAD
          id=&quot;reports&quot;
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-14&quot;
=======
          id="reports"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
            <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-cyan-300" />
                <h3 className="text-lg font-semibold">Netlify</h3>
=======
            <a href=&quot;https://www.netlify.com/&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;flex items-center gap-2&quot;>
                <Globe className=&quot;h-5 w-5 text-cyan-300&quot; />
                <h3 className=&quot;text-lg font-semibold&quot;>Netlify</h3>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              </div>
              <p className=&quot;mt-1 text-sm text-white/75&quot;>Zero‑ops hosting and functions for maintenance schedules.</p>
              <div className=&quot;mt-3 text-xs text-cyan-300/90&quot;>Learn more →</div>
            </a>
<<<<<<< HEAD
            <a href="https://supabase.com/" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-cyan-300" />
                <h3 className="text-lg font-semibold">Supabase</h3>
=======
            <a href=&quot;https://supabase.com/&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;flex items-center gap-2&quot;>
                <Layers className=&quot;h-5 w-5 text-cyan-300&quot; />
                <h3 className=&quot;text-lg font-semibold&quot;>Supabase</h3>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              </div>
              <p className=&quot;mt-1 text-sm text-white/75&quot;>Realtime data and storage for emerging automation needs.</p>
              <div className=&quot;mt-3 text-xs text-cyan-300/90&quot;>Explore →</div>
            </a>
<<<<<<< HEAD
            <a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-cyan-300" />
                <h3 className="text-lg font-semibold">Framer Motion</h3>
=======
            <a href=&quot;https://www.framer.com/motion/&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover&quot;>
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <div className=&quot;flex items-center gap-2&quot;>
                <Palette className=&quot;h-5 w-5 text-cyan-300&quot; />
                <h3 className=&quot;text-lg font-semibold&quot;>Framer Motion</h3>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              </div>
              <p className=&quot;mt-1 text-sm text-white/75&quot;>Futuristic micro‑interactions and motion design system.</p>
              <div className=&quot;mt-3 text-xs text-cyan-300/90&quot;>Docs →</div>
            </a>
          </div>
        </motion.section>

        {_/* Quality Gates & Guardrails */}
        <motion.section
<<<<<<< HEAD
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
=======
          id="guardrails"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-16"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Quality Gates & Guardrails</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {_[
              { title: 'Accessibility', _desc: 'Automated checks and fixes for WCAG compliance.', _href: '/site-health'},
              {_title: 'Link Integrity', _desc: 'Broken links detected before release.', _href: '/site-health'},
              {_title: 'Performance', _desc: 'Budgets enforced and improved continuously.', _href: '/site-health'},
              {_title: 'Safe Diffs', _desc: 'Conservative, _reviewable changes synced to main.', _href: '/automation'}].map(_(g) => (
              <Link key={_g.title} href={_g.href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-fuchsia-400/30">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold">{_g.title}</h3>
                  <p className="mt-1 text-sm text-white/75">{_g.desc}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </a>
              </a>
            ))}
          </div>
        </motion.section>

        {_/* Tech */}
        <motion.section
<<<<<<< HEAD
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-16&quot;
=======
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
<<<<<<< HEAD
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">
            <p className="text-white/70">Powered by modern cloud and AI tooling</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-6">
<<<<<<< HEAD
              {['Next.jsTypeScriptTailwindFramer MotionSupabaseNetlify'].map((t) => (
                <span key={t} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] glow-pulse">
=======
          <div className=&quot;rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md&quot;>
            <p className=&quot;text-white/70&quot;>Powered by modern cloud and AI tooling</p>
            <div className=&quot;mt-4 flex flex-wrap items-center justify-center gap-6&quot;>
              {['Next.js','TypeScript','Tailwind','Framer Motion','Supabase','Netlify'].map((t) => (
                <span key={t} className=&quot;rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] glow-pulse&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                  {t}
=======
              {_['Next.js', _'TypeScript', _'Tailwind', _'Framer Motion', _'Supabase', _'Netlify'].map(_(t) => (
                <span key={t} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] glow-pulse">
                  {_t}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </span>
              ))}
            </div>
          </div>
        </motion.section>

<<<<<<< HEAD
        {/* Quick Start */}
        <section className=&quot;mx-auto max-w-7xl px-6 pb-20&quot;>
          <h2 className=&quot;text-center text-2xl font-bold tracking-wide text-white/90&quot;>Quick Start</h2>
          <div className=&quot;mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-4 md:grid-cols-4&quot;>
            {[
              ['ExploreBrowse live automations/automation'],
              ['AuditCheck site health/site-health'],
              ['OptimizeRun the SEO auditor/reports/seo'],
              ['LearnFollow AI trends/reports/ai-trends']].map(([title, desc, href]) => (
              <Link key={title as string} href={href as string}>
                <a className=&quot;rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 text-left backdrop-blur-xl hover:border-cyan-400/30&quot;>
                  <div className=&quot;text-sm font-semibold text-white&quot;>{title as string}</div>
                  <div className=&quot;mt-1 text-xs text-white/70&quot;>{desc as string}</div>
=======
        {_/* Quick Start */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Quick Start</h2>
          <div className="mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-4 md:grid-cols-4">
            {_[
              ['Explore', _'Browse live automations', _'/automation'], _['Audit', _'Check site health', _'/site-health'], _['Optimize', _'Run the SEO auditor', _'/reports/seo'], _['Learn', _'Follow AI trends', _'/reports/ai-trends']].map(_([title, _desc, _href]) => (
              <Link key={title as string} href={_href as string}>
                <a className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 text-left backdrop-blur-xl hover:border-cyan-400/30">
                  <div className="text-sm font-semibold text-white">{_title as string}</div>
                  <div className="mt-1 text-xs text-white/70">{_desc as string}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </a>
              </a>
            ))}
          </div>
        </section>

        {_/* CTA */}
        <motion.section
<<<<<<< HEAD
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=&quot;mx-auto max-w-7xl px-6 pb-24&quot;
=======
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-24"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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

        {_/* AUTO-GENERATED: FRONT_FUTURIZER_START */}

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
{_/* AUTO-GENERATED: FRONT_FUTURIZER_END */}

<<<<<<< HEAD
{/* Footer */}
        <footer className=&quot;mx-auto max-w-7xl px-6 pb-16&quot;>
          <div className=&quot;rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur&quot;>
            <div className=&quot;flex flex-col items-center justify-between gap-4 md:flex-row&quot;>
              <div className=&quot;text-lg font-bold tracking-wide&quot;>
                <span className=&quot;bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon&quot;>Zion</span>
=======
{_/* Footer */}
        <footer className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="text-lg font-bold tracking-wide">
                <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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

        {_/* AI Agents Gallery */}
        <motion.section
<<<<<<< HEAD
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
=======
          id="agents"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">AI Agents Gallery</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Meet the autonomous agents powering your outcomes. Each card links to a live system.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {_[
              { Icon: Search, _title: 'AI SEO Auditor', _desc: 'Continuously improves on‑site SEO with safe diffs.', _href: '/reports/seo'},
              {_Icon: Link2, _title: 'Link Healer', _desc: 'Finds and fixes broken links with dashboards.', _href: '/site-health'},
              {_Icon: Palette, _title: 'Design Beautifier', _desc: 'Evolves UI with cohesive, _futuristic patterns.', _href: '/newsroom'},
              {_Icon: Gauge, _title: 'Performance Tuner', _desc: 'Optimizes bundles and runtime for speed.', _href: '/site-health'},
              {_Icon: Layers, _title: 'Factory Composer', _desc: 'Chains automations into higher‑order workflows.', _href: '/automation'},
              {_Icon: GitBranch, _title: 'Main Sync', _desc: 'Ships small, _safe diffs to main continuously.', _href: '/automation'}].map(_({_Icon, _title, _desc, _href}) => (
              <Link key={_title} href={_href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <h3 className="text-lg font-semibold">{_title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-white/75">{_desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </a>
              </a>
            ))}
          </div>
        </motion.section>

        {_/* Capabilities Matrix */}
        <motion.section
<<<<<<< HEAD
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
<<<<<<< HEAD
                <a key={item.title} href={item.href as string} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
=======
          id="capability-matrix"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-16"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Capabilities Matrix</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Explore a broader catalog of Zion capabilities. Each tile links to a live hub, report, or workflow.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {_[
              { title: 'Autonomous Agents', _desc: 'Self‑improving cloud workers', _href: '/automation'},
              {_title: 'Repo Sync to Main', _desc: 'Safe, _continuous delivery', _href: '/automation'},
              {_title: 'AI SEO Auditor', _desc: 'On‑site improvements daily', _href: '/reports/seo'},
              {_title: 'AI Trends Radar', _desc: 'Signals for new factories', _href: '/reports/ai-trends'},
              {_title: 'Site Health', _desc: 'A11y, _performance, _links', _href: '/site-health'},
              {_title: 'Guardrails', _desc: 'Defense‑in‑depth quality', _href: '/site-health'},
              {_title: 'Design Evolution', _desc: 'Cohesive futuristic UI', _href: '/newsroom'},
              {_title: 'Observability', _desc: 'Dashboards & artifacts', _href: '/site-health'},
              {_title: 'Analytics', _desc: 'Outcomes & insights', _href: '/site-health'},
              {_title: 'Link Integrity', _desc: 'Broken link healing', _href: '/site-health'},
              {_title: 'Factory Composer', _desc: 'Higher‑order workflows', _href: '/automation'},
              {_title: 'Docs & Changelog', _desc: 'Technical notes & AI log', _href: '/reports/seo', _external: true}].map(_(item) => (
              item.external ? (
                <a key={_item.title} href={_item.href as string} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="text-base font-semibold">{_item.title}</div>
                  <div className="mt-1 text-sm text-white/75">{_item.desc}</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
=======
                <a key={item.title} href={item.href as string} target=&quot;_blank&quot; rel=&quot;noopener&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
                  <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                  <div className=&quot;text-base font-semibold&quot;>{item.title}</div>
                  <div className=&quot;mt-1 text-sm text-white/75&quot;>{item.desc}</div>
                  <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>↗</span></div>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                </a>
              ) : (
<<<<<<< HEAD
                <Link key={item.title} href={item.href as string}>
                  <a className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo&quot;>
                    <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                    <div className=&quot;text-base font-semibold&quot;>{item.title}</div>
                    <div className=&quot;mt-1 text-sm text-white/75&quot;>{item.desc}</div>
                    <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90&quot;>Open <span aria-hidden>→</span></div>
=======
                <Link key={_item.title} href={_item.href as string}>
                  <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="text-base font-semibold">{_item.title}</div>
                    <div className="mt-1 text-sm text-white/75">{_item.desc}</div>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </a>
                </a>
              )
            ))}
          </div>
        </motion.section>

        {_/* Benefits Directory */}
        <motion.section
<<<<<<< HEAD
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
=======
          id="benefits-directory"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-16"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Benefits Directory</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Outcome‑focused advantages with direct links to the systems that deliver them.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {_[
              { label: '24/7 Progress', _desc: 'Always‑on autonomous delivery', _href: '/automation'},
              {_label: 'Safe Incremental Diffs', _desc: 'Small, _reviewable changes', _href: '/automation'},
              {_label: 'Zero‑Ops Cloud‑Native', _desc: 'No servers to babysit', _href: '/automation'},
              {_label: 'Layered Quality Checks', _desc: 'Guardrails & audits', _href: '/site-health'},
              {_label: 'Faster Iteration Loops', _desc: 'Shorten idea‑to‑impact', _href: '/newsroom'},
              {_label: 'SEO Visibility Gains', _desc: 'Continuous improvements', _href: '/reports/seo'}].map(_(b) => (
              <Link key={_b.label} href={_b.href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
                    <h3 className="text-base font-semibold">{_b.label}</h3>
                  </div>
                  <p className="mt-1 text-sm text-white/75">{_b.desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Explore <span aria-hidden>→</span></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </a>
              </a>
            ))}
          </div>
        </motion.section>

        {_/* AUTO-GENERATED: FRONT_ADS_START */}

<<<<<<< HEAD
        <section id="auto-ads" className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Auto‑advertised Highlights</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Link href="/automation"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">Automation Hub</div><div className="mt-1 text-sm text-white/75">Factories, agents, and live workflows</div></a></Link>
            <Link href="/site-health"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">Site Health</div><div className="mt-1 text-sm text-white/75">A11y, performance, and link integrity</div></a></Link>
            <Link href="/reports/seo"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">SEO Audit</div><div className="mt-1 text-sm text-white/75">Continuous on‑site improvements</div></a></Link>
            <Link href="/reports/ai-trends"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">AI Trends</div><div className="mt-1 text-sm text-white/75">Ecosystem intelligence signals</div></a></Link>
            <Link href="/newsroom"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">Newsroom</div><div className="mt-1 text-sm text-white/75">Autonomous updates & evolution</div></a></Link>
            <Link href="/main/front"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">Front Systems Hub</div><div className="mt-1 text-sm text-white/75">Curated futuristic front experience</div></a></Link>
            <Link href="/.netlify/functions/deps-auto-upgrade-runner"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">Deps Auto‑Upgrade</div><div className="mt-1 text-sm text-white/75">Keeps dependencies fresh safely</div></a></Link>
            <Link href="/.netlify/functions/frontpage-advertiser"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">Frontpage Advertiser</div><div className="mt-1 text-sm text-white/75">Refreshes front promos automatically</div></a></Link>
            <a href="https://github.com/Zion-Holdings/zion.app/actions" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">Live Pipelines</div><div className="mt-1 text-sm text-white/75">CI logs & artifacts</div></a>
            <a href="https://github.com/Zion-Holdings/zion.app/tree/main/docs" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">Docs & Guides</div><div className="mt-1 text-sm text-white/75">Technical notes</div></a>
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          </div>
        </section>
 {_/* AUTO-GENERATED: FRONT_ADS_END */}
 
        {_/* Feature Highlights (new) */}
        <motion.section
<<<<<<< HEAD
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
=======
          id="feature-highlights"
          initial={_{ opacity: 0, _y: 24}}
          whileInView={_{ opacity: 1, _y: 0}}
          viewport={_{ once: true, _amount: 0.2}}
          transition={_{ duration: 0.5}}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Feature Highlights</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Explore deep links across the app that showcase our capabilities and benefits.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {_[
              { title: 'SEO Audit', _desc: 'Continuous on‑site improvements and artifacts.', _href: '/reports/seo'},
              {_title: 'AI Trends', _desc: 'Signals that inspire new automation factories.', _href: '/reports/ai-trends'},
              {_title: 'Site Health', _desc: 'A11y, _performance and link integrity.', _href: '/site-health'},
              {_title: 'Automation Hub', _desc: 'Factories, _agents and live workflows.', _href: '/automation'},
              {_title: 'Newsroom', _desc: 'Autonomous updates and product evolution.', _href: '/newsroom'},
              {_title: 'Front Systems Hub', _desc: 'Futuristic templates, _effects and layouts.', _href: '/main/front'}].map(_(card) => (
              <a key={_card.title} href={_card.href} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{_card.title}</h3>
                <p className="mt-1 text-sm text-white/75">{_card.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </a>
            ))}
          </div>
        </motion.section>

<<<<<<< HEAD
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
=======
        {_/* Reports */}
        <section id="reports" className="mx-auto max-w-7xl px-6 pb-16">
          {_/* existing reports content */}
        </section>

        {_/* New Intelligent Automations */}
        <section id="automations" className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-2xl font-bold tracking-wide text-white/90 text-center">New Intelligent Automations</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {_[
              { title: 'SEO Audit Runner', _href: '/.netlify/functions/seo-audit-runner'},
              {_title: 'AI Trends Radar', _href: '/.netlify/functions/ai-trends-radar-runner'},
              {_title: 'Front Index Directory Builder', _href: '/.netlify/functions/front-index-directory-builder'},
              {_title: 'Revenue Ideas Promoter', _href: '/.netlify/functions/revenue-ideas-promoter'}].map(_(tool) => (
              <a key={_tool.title} href={_tool.href} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 hover:border-cyan-400/30 hover:text-white transition-colors">
                <div className="text-base font-semibold text-white">{_tool.title}</div>
                <div className="mt-1 text-xs text-white/70">Open ↗</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </a>
            ))}
          </div>
        </section>

      </div>
<<<<<<< HEAD
      {/* Back to top */}
      {showToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className=&quot;fixed bottom-24 right-4 z-40 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-3 py-2 text-xs font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]&quot;
          aria-label=&quot;Scroll to top&quot;
=======
      {_/* Back to top */}
      {_showToTop && (_<button
          onClick={() => window.scrollTo({ top: 0, _behavior: 'smooth'})}
          className="fixed bottom-24 right-4 z-40 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-3 py-2 text-xs font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]"
          aria-label="Scroll to top"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          ↑ Top
        </button>
      )}
    </div>
  )
}

/* AUTO-GENERATED: FRONT_ACTIONS_START */
<<<<<<< HEAD
<section className="mx-auto max-w-7xl px-6 pb-14">
  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">GitHub Actions — Live Automations</h2>
  <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Cloud‑native workflows that maintain, heal, and evolve the repo automatically.</p>
  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/actions-catalog.yml" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Actions Catalog & README</div>
                <div className="mt-1 text-sm text-white/75">Scheduled: */5 * * * *</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/auto-fix.yml" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Autonomous Auto-Fix</div>
                <div className="mt-1 text-sm text-white/75">Scheduled: */30 * * * *</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/automerge-main.yml" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Auto-merge to main</div>
                <div className="mt-1 text-sm text-white/75">On push / schedule</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/autonomous-meta.yml" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Autonomous Meta Factory</div>
                <div className="mt-1 text-sm text-white/75">Scheduled: */30 * * * *</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/ci-self-heal.yml" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">CI Self-Heal</div>
                <div className="mt-1 text-sm text-white/75">On push / schedule</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/ci.yml" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">CI</div>
                <div className="mt-1 text-sm text-white/75">On push / schedule</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/cloud-maintenance.yml" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Cloud Maintenance Automations</div>
                <div className="mt-1 text-sm text-white/75">Scheduled: */30 * * * *</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/cloud-marketing.yml" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Cloud Marketing Automations</div>
                <div className="mt-1 text-sm text-white/75">Scheduled: 0 */6 * * *</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/continuous-improvement.yml" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Continuous Improvement</div>
                <div className="mt-1 text-sm text-white/75">Scheduled: 0 */6 * * *</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/cursor-rules-autoupdate.yml" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Cursor Rules Auto Update</div>
                <div className="mt-1 text-sm text-white/75">Scheduled: 17 */6 * * *</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/dependency-maintenance.yml" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Dependency Maintenance</div>
                <div className="mt-1 text-sm text-white/75">Scheduled: 17 5 * * *</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/diverse-agent-matrix.yml" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Diverse Agent Matrix</div>
                <div className="mt-1 text-sm text-white/75">Scheduled: 7 * * * *</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              </a>
  </div>
</section>
/* AUTO-GENERATED: FRONT_ACTIONS_END */
