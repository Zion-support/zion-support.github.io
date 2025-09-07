
import Head from 'next/head',;''
import Link from 'next/link',;''
import { Cpu, Gauge, GitBranch, Rocket, ShieldCheck, Zap, Activity, Globe, Layers, BarChart3, Search, Link2, Palette, LineChart } from 'lucide-react',;''
import { motion, useScroll, useSpring } from 'framer-motion',;''
import { useEffect, useState } from 'react',;'

;
export default function MainFrontIndex() {;}
  const { scrollYProgress } = useScroll(),;
  const progressX = useSpring(scrollYProgress, { stiffness:90, damping:20, mass:0.2 }),;
  const [showToTop, setShowToTop] = useState(false),;
  const [mobileOpen, setMobileOpen] = useState(false),;

  useEffect(() => {;
    const onScroll = () => setShowToTop(window.scrollY > 400),;'
    window.addEventListener('scroll', onScroll, { passive:true } as any),;'
    onScroll(),;'
    return () => window.removeEventListener('scroll', onScroll),;'
  }, []),;
  return (;'
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">;"
</div>
      <Head>;
</Head>"
        <meta property="og:description" content="Explore the features, capabilities, and benefits behind our autonomous cloud automations." />;"
</meta>"
        <meta name="twitter:card" content="summary_large_image" />;"
</meta>"
        <meta property="og:type" content="website" />;"
</meta>"
        <meta property="og:image" content="/og-image.png" />;"
</meta>
      </Head>;"
      <motion.div style={{ scaleX:progressX }} className="fixed inset-x-0 top-0 z-40 h-0.5 origin-left bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400" />;"
</motion>"
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">;"
</div>"
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />;"
</div>"
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />;"
</div>"
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />;"
</div>)"
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid" />;"
</div>"
        <div className="absolute inset-0 opacity-[0.06] hex-grid" />;"
</div>"
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">;"
</div>"
          <div className="twinkle-field absolute inset-0" />;"
</div>
        </div>;"
        <div className="absolute inset-0 bg-aurora opacity-[0.18]" />;"
</div>"
        <div className="absolute inset-0 flex items-center justify-center opacity-30">;"
</div>"
          <div className="absolute h-[52rem] w-[52rem] rounded-full border border-cyan-400/10 animate-[spin_60s_linear_infinite]" />;"
</div>"
          <div className="absolute h-[36rem] w-[36rem] rounded-full border border-fuchsia-400/10 animate-[spin_80s_linear_infinite] [animation-direction:reverse]" />;"
</div>"
          <div className="absolute h-[24rem] w-[24rem] rounded-full border border-violet-400/10 animate-[spin_100s_linear_infinite]" />;"
</div>
        </div>;"
        <div className="absolute inset-0 mix-blend-soft-light opacity-[0.07] scanlines" />;"
</div>"
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(34,211,238,0.08),transparent),radial-gradient(600px_400px_at_110%_10%,rgba(168,85,247,0.08),transparent)]" />;"
</div>"
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:repeating-linear-gradient(0deg,transparent,transparent_31px,rgba(255,255,255,.06)_32px),repeating-linear-gradient(90deg,transparent,transparent_31px,rgba(255,255,255,.06)_32px)] [mask-image:radial-gradient(ellipse_at_center,black,transparent_65%)]" />;"
</div>"
        <div className="absolute inset-0 beams-layer beams-45" />;"
</div>"
        <div className="absolute inset-0 beams-layer beams--45" />;"
</div>"
        <div className="pointer-events-none absolute inset-0 beams opacity-[0.06]" />;"
</div>
      </div>;"
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-950/55 border-b border-white/10">;"
</header>"
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">;"
</nav>"
          <div className="text-2xl font-bold tracking-wide">;"
</div>"
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span>;"
          </div>;"
          <div className="hidden items-center gap-6 md:flex">;"
</div>"
            <Link href="/"><a className="text-white/80 hover:text-white">Home</a></Link>;""
            <Link href="#command-center"><a className="text-white/80 hover:text-white">Command</a></Link>;""
            <Link href="#features"><a className="text-white/80 hover:text-white">Features</a></Link>;""
            <Link href="#feature-map"><a className="text-white/80 hover:text-white">Map</a></Link>;""
            <Link href="#suites"><a className="text-white/80 hover:text-white">Suites</a></Link>;""
            <Link href="#capabilities"><a className="text-white/80 hover:text-white">Capabilities</a></Link>;""
            <Link href="#use-cases"><a className="text-white/80 hover:text-white">Use Cases</a></Link>;""
            <Link href="#pillars"><a className="text-white/80 hover:text-white">Pillars</a></Link>;""
            <Link href="#benefits"><a className="text-white/80 hover:text-white">Benefits</a></Link>;""
            <Link href="#templates"><a className="text-white/80 hover:text-white">Templates</a></Link>;""
            <Link href="#demos"><a className="text-white/80 hover:text-white">Demos</a></Link>;""
            <Link href="#highlights"><a className="text-white/80 hover:text-white">Highlights</a></Link>;""
            <Link href="#cases"><a className="text-white/80 hover:text-white">Cases</a></Link>;""
            <Link href="#reports"><a className="text-white/80 hover:text-white">Reports</a></Link>;""
            <Link href="#roadmap"><a className="text-white/80 hover:text-white">Docs</a></Link>;""
            <Link href="/automation"><a className="text-white/80 hover:text-white">Automations</a></Link>;"
          </div>;"
          <button aria-label="Open menu" onClick={() => setMobileOpen(true)} className="md:hidden rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80">Menu</button>;"
        </nav>;
          <motion.div;
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}"
            className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur";"
            onClick={() => setMobileOpen(false)}
</motion>
            <motion.div;
              initial={{ y:-20, opacity:0 }}
              animate={{ y:0, opacity:1 }}
              transition={{ duration:0.2 }}"
              className="mx-auto mt-20 w-[92%] max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-xl";"
              onClick={(e) => e.stopPropagation()}
</motion>"
              <div className="mb-4 flex items-center justify-between">;"
</div>"
                <div className="text-lg font-semibold">Navigate</div>;""
                <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="rounded-md border border-white/15 bg-white/5 px-2 py-1 text-xs">Close</button>;"
              </div>;"
              <div className="grid grid-cols-2 gap-3 text-sm">;"
</div>"
                    <a key={label as string} href={href as string} onClick={() => setMobileOpen(false)} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">{label as string}</a>;"
                    <Link key={label as string} href={href as string}>;
</Link>"
                      <a onClick={() => setMobileOpen(false)} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">{label as string}</a>;"
                    </Link>;
              </div>;"
              <div className="mt-4 flex justify-end">;"
</div>"
                <Link href="/automation"><a onClick={() => setMobileOpen(false)} className="rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 text-sm font-semibold">Launch Hub</a></Link>;"

              </div>;
            </motion.div>;
          </motion.div>;
        )}

      </header>;"
      <div role="main" className="relative z-10">;"
</div>
        <motion.section;
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}"
          className="mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-24";"
        >;
</motion>"
          <div className="text-center">;"
</div>"
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md">;"
</div>"
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />;"
</span>
            </div>;"
                        <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">;"
</h1>"
              <span className="gradient-text animate-shimmer bg-[length:200%_100%]">Futuristic Front Experience</span>;"
            </h1>;"
            <div className="mx-auto mt-3 flex max-w-2xl items-center justify-center gap-2 text-xs text-white/60">;"
</div>"
              <a href="#feature-map" className="hover:text-white">Feature Map</a>;"
            </p>;"
            <div className="mt-8 flex flex-wrap justify-center gap-3">;"
</div>"
              <Link href="/automation"><a className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-shadow">Explore Automations</a></Link>;""
              <Link href="/automation"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">View Cloud Automations</a></Link>;"
            </div>;"
            <div className="mx-auto mt-6 max-w-5xl text-left">;"
</div>"
              <div className="mb-2 text-xs uppercase tracking-wide text-white/60">Cloud Automations (live)</div>;""
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">;"
</div>
              </div>;
            </div>;"
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">;"
</div>"
                <div key={k} className="glow-card rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left">;"
</div>"
                  <div className="text-lg font-bold text-white">{k}</div>;""
                  <div className="text-xs text-white/70">{v}</div>;"
                </div>;
            </div>;"
            <div className="relative mx-auto mt-8 max-w-5xl overflow-hidden">;"
</div>"
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent" />;"
</div>"
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent" />;"
</div>"
              <div className="marquee">;"
</div>"
                <div className="marquee__track">;"
</div>"
                    <span key={`${label}-${idx}`} className="mx-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs text-white/80 backdrop-blur">;"
</span>"
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> {label}"
</span>

                    </span>;
                </div>;
              </div>;

            </div>;"
            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">;"
</div>
                <Link key={label as string} href={href as string}>;
</Link>"
                  <a className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur hover:bg-white/10">{label as string}</a>;"

                </Link>;
            </div>;
          </div>;

        </motion.section>;
;
                 {/* Showcase */}
         <motion.section;"
           id="showcase";"
           initial={{ opacity:0, y:24 }}
           whileInView={{ opacity:1, y:0 }}
           viewport={{ once:true, amount:0.2 }}
           transition={{ duration:0.5 }}"
           className="mx-auto max-w-7xl px-6 pb-14";"
         >;
</motion>"
           <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Showcase:Features, Capabilities, Benefits</h2>;""
           <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Jump into highlighted areas of the platform. Every card links to a deep section or dedicated page.</p>;""
           <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">;"
</div>"
            <Link href="#features">;"
</Link>"
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="flex items-center gap-2"><Zap className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">Explore Features</h3></div>;"
              </a>;
            </Link>;"
            <Link href="#capabilities">;"
</Link>"
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="flex items-center gap-2"><Cpu className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">Browse Capabilities</h3></div>;""
                <p className="mt-1 text-sm text-white/75">Design evolution, SEO, a11y, performance, refactors, and policy.</p>;"
              </a>;
            </Link>;"
            <Link href="#benefits">;"
</Link>"
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="flex items-center gap-2"><Gauge className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">See Benefits</h3></div>;""
                <p className="mt-1 text-sm text-white/75">Momentum, quality, safety, and measurable outcomes.</p>;"
              </a>;
            </Link>;"
            <Link href="#feature-map">;"
</Link>"
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="flex items-center gap-2"><Globe className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">Feature Map</h3></div>;""
                <p className="mt-1 text-sm text-white/75">A quick overview of what you can explore right now.</p>;"
              </a>;
            </Link>;"
            <Link href="#guardrails">;"
</Link>"
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">Guardrails</h3></div>;"
              </a>;
            </Link>;"
            <Link href="/automation">;"
</Link>"
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="flex items-center gap-2"><Rocket className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">Automation Hub</h3></div>;""
                <p className="mt-1 text-sm text-white/75">Factories, agents, and live workflows in one place.</p>;"
              </a>;
            </Link>;
          </div>;
        </motion.section>;
;
        {/* Auto-Promoted Features (auto-generated) */}"
        <section className="mx-auto max-w-7xl px-6 pb-16">;"
</section>"
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">;"
</div>
          </div>;
        </section>;"
        <aside className="fixed left-4 top-1/2 z-30 -translate-y-1/2 block">;"
</aside>"
          <nav aria-label="Quick section navigation" className="space-y-2">;"
</nav>"
              <a key={href} href={href} className="block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75 backdrop-blur-md hover:border-cyan-400/40 hover:text-white">;"
</a>

              </a>;
          </nav>;

        </aside>;
        <motion.section;"
          id="engines";"
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}
          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-14";"
        >;
</motion>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Autonomous Engines (Beyond GitHub Actions)</h2>;""
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">We run outside GitHub Actions using scheduled cloud functions and orchestrators. Explore the engines below.</p>;""
                    <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">;"
</div>
             <a;"
               href="/.netlify/functions/front-enhancer";""
               className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo";"
             >;
</a>"
               <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
               <div className="text-lg font-semibold">Netlify Scheduled Functions</div>;""
               <p className="mt-1 text-sm text-white/75">Cron-like cloud jobs that run every 20 minutes to enhance the front experience.</p>;"
             </a>;
             <a;"
               href="https://github.com/Zion-Holdings/zion.app/tree/main/automation";""
               target="_blank" rel="noopener";""
               className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover";"
             >;
</a>"
               <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
               <div className="text-lg font-semibold">Local Orchestrators</div>;""
               <p className="mt-1 text-sm text-white/75">Node-based orchestrators that can run on any scheduler or platform.</p>;"
             </a>;
             <a;"
               href="/automation";""
               className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover";"
             >;
</a>"
               <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
               <div className="text-lg font-semibold">Autonomous Cloud Orchestrator</div>;""
               <p className="mt-1 text-sm text-white/75">End-to-end agents launching factories and syncing safe diffs to main.</p>;"
             </a>;
           </div>;"
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">;"
</div>"
            <a href="/.netlify/functions/internal-link-graph-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
              <div className="text-lg font-semibold">Internal Link Graph</div>;""
              <p className="mt-1 text-sm text-white/75">Live graph of internal navigation across pages.</p>;"
            </a>;"
            <a href="/.netlify/functions/robots-enhancer-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
              <div className="text-lg font-semibold">Robots.txt Enhancer</div>;""
              <p className="mt-1 text-sm text-white/75">Ensures sitemap and sensible defaults for crawling.</p>;"
            </a>;"
            <a href="/.netlify/functions/alt-text-indexer-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
              <div className="text-lg font-semibold">Alt Text Indexer</div>;""
              <p className="mt-1 text-sm text-white/75">Humanized alt suggestions for images across the site.</p>;"
            </a>;"
            <a href="/.netlify/functions/content-registry-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
              <div className="text-lg font-semibold">Content Registry Builder</div>;""
              <p className="mt-1 text-sm text-white/75">Continuously indexes pages and reports for discovery.</p>;"
            </a>;
            <a;"
              href="/.netlify/functions/autonomous-meta-orchestrator";""
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover";"
            >;
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
              <div className="text-lg font-semibold">Autonomous Meta Orchestrator</div>;""
              <p className="mt-1 text-sm text-white/75">Optimizes metadata, changelogs, and docs, commits results every 3m.</p>;"
            </a>;
            <a;"
              href="/.netlify/functions/rapid-sync";""
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover";"
            >;
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
              <div className="text-lg font-semibold">Rapid Sync (2m)</div>;"
            </a>;
            <a;"
              href="/.netlify/functions/content-freshness-runner";""
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover";"
            >;
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
              <div className="text-lg font-semibold">Content Freshness Audit</div>;""
              <p className="mt-1 text-sm text-white/75">Scores pages and docs by last update, commits freshness reports.</p>;"
            </a>;
            <a;"
              href="/.netlify/functions/docs-link-audit-runner";""
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover";"
            >;
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
              <div className="text-lg font-semibold">Docs Link Audit</div>;""
              <p className="mt-1 text-sm text-white/75">Scans docs for broken relative links and commits a CSV report.</p>;"
            </a>;
            <a;"
              href="/.netlify/functions/image-dimension-audit-runner";""
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover";"
            >;
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
              <div className="text-lg font-semibold">Image Dimension Audit</div>;""
              <p className="mt-1 text-sm text-white/75">Detects missing width/height in images and logs a report.</p>;"
            </a>;
            <a;"
              href="/.netlify/functions/autonomous-master-orchestrator";""
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover";"
            >;
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
              <div className="text-lg font-semibold">Autonomous Master Orchestrator</div>;""
              <p className="mt-1 text-sm text-white/75">Runs every minute:triggers all cloud functions and syncs to main.</p>;"
            </a>;
          </div>;
        </motion.section>;
;"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />"
</div>"
              <div className="text-lg font-semibold">Internal Link Graph</div>""
              <p className="mt-1 text-sm text-white/75">Live graph of internal navigation across pages.</p>""
              <div className="mt-3 text-xs text-cyan-300/90">Run now →</div>"
            </a>"
            <a href="/.netlify/functions/robots-enhancer-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">"
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />"
</div>"
              <div className="text-lg font-semibold">Robots.txt Enhancer</div>""
              <p className="mt-1 text-sm text-white/75">Ensures sitemap and sensible defaults for crawling.</p>""
              <div className="mt-3 text-xs text-cyan-300/90">Run now →</div>"
            </a>"
            <a href="/.netlify/functions/alt-text-indexer-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">"
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />"
</div>"
              <div className="text-lg font-semibold">Alt Text Indexer</div>""
              <p className="mt-1 text-sm text-white/75">Humanized alt suggestions for images across the site.</p>""
              <div className="mt-3 text-xs text-cyan-300/90">Run now →</div>"
            </a>"
            <a href="/.netlify/functions/content-registry-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">"
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />"
</div>"
              <div className="text-lg font-semibold">Content Registry Builder</div>""
              <p className="mt-1 text-sm text-white/75">Continuously indexes pages and reports for discovery.</p>""
              <div className="mt-3 text-xs text-cyan-300/90">Run now →</div>"
            </a>
            <a;"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover""
            >
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />"
</div>"
              <div className="text-lg font-semibold">Autonomous Meta Orchestrator</div>""
              <p className="mt-1 text-sm text-white/75">Optimizes metadata, changelogs, and docs; commits results every 3m.</p>""
              <div className="mt-3 text-xs text-cyan-300/90">Run now ↗</div>"
            </a>
            <a;"
              href="/.netlify/functions/rapid-sync"""
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover""
            >
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />"
</div>"
              <div className="text-lg font-semibold">Rapid Sync (2m)</div>""
              <p className="mt-1 text-sm text-white/75">High‑frequency repo sync to push autonomous changes quickly.</p>""
              <div className="mt-3 text-xs text-cyan-300/90">Run now ↗</div>"
            </a>

            <a;"
              href="/.netlify/functions/content-freshness-runner"""
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover""
            >
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />"
</div>"
              <div className="text-lg font-semibold">Content Freshness Audit</div>""
              <p className="mt-1 text-sm text-white/75">Scores pages and docs by last update; commits freshness reports.</p>""
              <div className="mt-3 text-xs text-cyan-300/90">Open →</div>"
            </a>

            <a;"
              href="/.netlify/functions/docs-link-audit-runner"""
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover""
            >
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />"
</div>"
              <div className="text-lg font-semibold">Docs Link Audit</div>""
              <p className="mt-1 text-sm text-white/75">Scans docs for broken relative links and commits a CSV report.</p>""
              <div className="mt-3 text-xs text-cyan-300/90">Open →</div>"
            </a>

            <a;"
              href="/.netlify/functions/image-dimension-audit-runner"""
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover""
            >
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />"
</div>"
              <div className="text-lg font-semibold">Image Dimension Audit</div>""
              <p className="mt-1 text-sm text-white/75">Detects missing width/height in images and logs a report.</p>""
              <div className="mt-3 text-xs text-cyan-300/90">Open →</div>"
            </a>
            <a;"
              href="/.netlify/functions/autonomous-master-orchestrator"""
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover""
            >
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />"
</div>"
              <div className="text-lg font-semibold">Autonomous Master Orchestrator</div>""
              <p className="mt-1 text-sm text-white/75">Runs every minute: triggers all cloud functions and syncs to main.</p>""
              <div className="mt-3 text-xs text-cyan-300/90">Open ↗</div>"

            </a>
          </div>
        </motion.section>
        {/* Autonomous Innovations */}

        <motion.section;"
          id="innovations";"
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}
          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-14";"
        >;
</motion>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Autonomous Innovations</h2>;""
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">;"
</div>"
            <a href="/.netlify/functions/autonomous-content-curator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
              <div className="flex items-center gap-2"><Activity className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">Autonomous Content Curator</h3></div>;""
              <p className="mt-1 text-sm text-white/75">Curates and promotes highlights on front pages, syncs to main.</p>;"
            </a>;"
            <a href="/.netlify/functions/revenue-ideas-lab" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
              <div className="flex items-center gap-2"><LineChart className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">Revenue Ideas Lab</h3></div>;""
              <p className="mt-1 text-sm text-white/75">Monetization experiments with safe, automatic repository sync.</p>;"
            </a>;"
            <a href="/.netlify/functions/autonomous-invention-orchestrator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
              <div className="flex items-center gap-2"><Rocket className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">Autonomous Invention Orchestrator</h3></div>;""
              <p className="mt-1 text-sm text-white/75">Continuously invents and applies front enhancements.</p>;"
            </a>;
          </div>;
        </motion.section>;
;
        {/* Autonomous Cloud Runners */}"
        <section id="cloud-runners" className="mx-auto max-w-7xl px-6 pb-14">;"
</section>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Autonomous Cloud Runners</h2>;""
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">;"
</div>"
              <a key={tool.title} href={tool.href} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <h3 className="text-lg font-semibold">{tool.title}</h3>;""
                <p className="mt-1 text-sm text-white/75">{tool.desc}</p>;"

              </a>;
          </div>;

        </section>;"
        <section id="command-center" className="mx-auto max-w-7xl px-6 pb-14">;"
</section>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Command Center</h2>;""
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">;"
</div>"
              <article key={card.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 holo tilt-on-hover">;"
</article>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <h3 className="text-lg font-semibold">{card.title}</h3>;""
                <p className="mt-1 text-sm text-white/75">{card.desc}</p>;""
                  <a href={card.href} target="_blank" rel="noopener" className="mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline">Open</a>;""
                  <Link href={card.href as string}><a className="mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline">Open</a></Link>;"

              </article>;
          </div>;

        </section>;
        <motion.section;"
          id="netlify-automations";"
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}
          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-14";"
        >;
</motion>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Netlify Automations</h2>;""
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">;"
</div>"
              <a key={f.label} href={f.href} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="text-lg font-semibold">{f.label}</div>;""
                <div className="mt-1 text-sm text-white/75">{f.desc}</div>;"

              </a>;
          </div>;

        </motion.section>;
;
        {/* New Cloud Automations */}"
        <section className="mx-auto max-w-7xl px-6 pb-14">;"
</section>"
          <h3 className="text-center text-xl font-bold tracking-wide text-white/90">New Cloud Automations</h3>;""
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">;"
</div>"
            <a href="/.netlify/functions/stale-content-auditor-runner" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
              <div className="text-lg font-semibold">Stale Content Auditor</div>;""
              <div className="mt-1 text-sm text-white/75">Finds stale pages/components/docs and publishes a report.</div>;"
            </a>;"
            <a href="/.netlify/functions/autonomous-invention-orchestrator" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
              <div className="text-lg font-semibold">Autonomous Invention Orchestrator</div>;""
              <div className="mt-1 text-sm text-white/75">Invents and curates fresh automations and safely syncs diffs to main.</div>;"
            </a>;
          </div>;
        </section>;

        <motion.section;
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}

          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-14";"
        >;
</motion>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Feature Spotlight</h2>;"
              <Link key={title} href={href}>;
</Link>"
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</a>"
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                  <div className="flex items-center gap-2">;"
</div>"
                    <Icon className="h-5 w-5 text-cyan-300" />;"
</Icon>"
                    <h3 className="text-lg font-semibold">{title}</h3>;"
                  </div>;"
                  <p className="mt-1 text-sm text-white/75">{desc}</p>;"

                </a>;
              </Link>;
          </div>;

        </motion.section>;
;
        {/* AUTO-GENERATED:FRONT_ADS_START */}"
        <section className="mx-auto max-w-7xl px-6 pb-16">;"
</section>"
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/10 via-violet-600/10 to-cyan-600/10 p-6 backdrop-blur-xl">;"
</div>"
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,2.5rem_2.5rem,2.5rem_2.5rem] animate-grid" />;"
</div>"
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore Zion Systems</h2>;""
            <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Discover key features, capabilities, and benefits. Each card links to a dedicated page or live hub.</p>;""
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">;"
</div>
            </div>;
          </div>;
        </section>;

        <motion.section;
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}

          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-14";"
        >;
</motion>
              <Link key={b.label} href={b.href}>;
</Link>"
                <a className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-fuchsia-400/30">;"
</a>"
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />;"
</span>

                </a>;
              </Link>;
          </div>;

        </motion.section>;
;
        {/* Suites */}
        <motion.section;"
          id="suites";"
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}
          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-14";"
        >;
</motion>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Automation Suites</h2>;""
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">;"
</div>"
              <article key={suite.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</article>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <h3 className="text-lg font-semibold">{suite.title}</h3>;""
                <p className="mt-1 text-sm text-white/75">{suite.desc}</p>;""
                    <a href={suite.href} target="_blank" rel="noopener" className="mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline">Open</a>;""
                    <Link href={suite.href}><a className="mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline">Open</a></Link>;"

              </article>;
          </div>;
        </motion.section>;{/* Superpowers */}
        <motion.section;
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}

          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-14";"
        >;
</motion>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Superpowers</h2>;""
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">;"
</div>"
              <article key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</article>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <Icon className="h-6 w-6 text-cyan-300" />;"
</Icon>"
                <h3 className="mt-3 text-lg font-semibold">{title}</h3>;""
                <p className="mt-1 text-sm text-white/75">{desc}</p>;"

              </article>;
          </div>;
        </motion.section>;{/* Get Started */}
        <motion.section;
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}

          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-14";"
        >;
</motion>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Get Started in Minutes</h2>;""
          <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-4">;"
</div>"
            <Link href="/automation">;"
</Link>"
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="flex items-center gap-2"><Rocket className="h-5 w-5 text-cyan-300" /><span className="text-sm font-semibold">1. Explore Automations</span></div>;""
                <p className="mt-1 text-xs text-white/75">See live autonomous suites and workflows.</p>;"
              </a>;
            </Link>;"
            <Link href="/reports/seo">;"
</Link>"
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="flex items-center gap-2"><Search className="h-5 w-5 text-cyan-300" /><span className="text-sm font-semibold">2. Run SEO Audit</span></div>;""
                <p className="mt-1 text-xs text-white/75">Get prioritized improvements and artifacts.</p>;"
              </a>;
            </Link>;"
            <Link href="/site-health">;"
</Link>"
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="flex items-center gap-2"><Gauge className="h-5 w-5 text-cyan-300" /><span className="text-sm font-semibold">3. Check Site Health</span></div>;""
                <p className="mt-1 text-xs text-white/75">A11y, performance, and link health dashboards.</p>;"
              </a>;
            </Link>;"
            <Link href="/reports/ai-trends">;"
</Link>"
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="flex items-center gap-2"><Globe className="h-5 w-5 text-cyan-300" /><span className="text-sm font-semibold">4. Track AI Trends</span></div>;""
                <p className="mt-1 text-xs text-white/75">Stay ahead with intelligence signals.</p>;"
              </a>;
            </Link>;
          </div>;
        </motion.section>;
;
        {/* Features */}
        <motion.section;"
          id="features";"
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}
          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-14";"
        >;
</motion>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Features</h2>;""
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">;"
</div>
              <Link key={title} href={href}>;
</Link>"
                <a className="group glow-card relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:border-cyan-400/30 tilt-on-hover neon-ring">;"
</a>"
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                  <div className="flex items-center gap-3">;"
</div>"
                    <Icon className="h-5 w-5 text-cyan-300" />;"
</Icon>"
                    <h3 className="text-lg font-semibold">{title}</h3>;"
                  </div>;"
                  <p className="mt-2 text-sm text-white/75">{desc}</p>;""
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Learn more <Link2 className="h-3.5 w-3.5" /></div>;"

                </a>;
              </Link>;
          </div>;
        </motion.section>;{/* Outcomes */}
        <motion.section;
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}

          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-14";"
        >;
</motion>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Outcomes</h2>;""
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">;"
</p>
          </p>;"
          <div className="relative mx-auto mt-6 max-w-6xl overflow-hidden">;"
</div>"
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent" />;"
</div>"
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent" />;"
</div>"
            <div className="marquee">;"
</div>"
              <div className="marquee__track">;"
</div>
                    <Link key={`${item.label}-${idx}`} href={item.href}>;
</Link>"
                      <a className="mx-3 my-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur hover:bg-white/10">;"
</a>"
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> {item.label}"
</span>

                      </a>;
                    </Link>;
              </div>;
            </div>;
          </div>;

        </motion.section>;
;
        {/* Feature Map */}
        <motion.section;"
          id="feature-map";"
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}
          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-14";"
        >;
</motion>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Feature Map</h2>;""
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">;"
</p>
          </p>;"
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">;"
</div>"
                <a key={item.label} href={item.href as string} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</a>"
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                  <div className="text-base font-semibold">{item.label}</div>;""
                  <div className="mt-1 text-sm text-white/75">{item.desc}</div>;"
                </a>;
                <Link key={item.label} href={item.href as string}>;
</Link>"
                  <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</a>"
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                    <div className="text-base font-semibold">{item.label}</div>;""
                    <div className="mt-1 text-sm text-white/75">{item.desc}</div>;"
                  </a>;
                </Link>;
          </div>;
        </motion.section>;
;
        {/* AUTO:catalog injection for automated advertising */}
        {/* AUTO:FRONT_INDEX_DIRECTORY_START */;
;"
<section id="auto-catalog" className="mx-auto max-w-7xl px-6 pb-16">;"
</section>"
  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Autonomous Catalog</h2>;"
  </div>;
</section>;
        <motion.section;"
           id="modules";"
           initial={{ opacity:0, y:24 }}
           whileInView={{ opacity:1, y:0 }}
           viewport={{ once:true, amount:0.2 }}
           transition={{ duration:0.5 }}"
           className="mx-auto max-w-7xl px-6 pb-16";"
         >;
</motion>"
           <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Platform Modules</h2>;""
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">;"
</div>
              <Link key={title} href={href}>;
</Link>"
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">;"
</a>"
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                  <div className="flex items-center gap-3">;"
</div>"
                    <Icon className="h-5 w-5 text-cyan-300" />;"
</Icon>"
                    <h3 className="text-lg font-semibold">{title}</h3>;"
                  </div>;"
                  <p className="mt-2 text-sm text-white/75">{desc}</p>;""
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <Link2 className="h-3.5 w-3.5" /></div>;"

                </a>;
              </Link>;
          </div>;
        </motion.section>;{/* Neural Feature Matrix */}
        <motion.section;
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}

          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-14";"
        >;
</motion>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Neural Feature Matrix</h2>;""
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">A denser, at-a-glance atlas of what Zion ships autonomously. Every tile links to the live hub, report, or docs.</p>;""
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">;"
</div>"
                <a key={item.label} href={item.href as string} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">;"
</a>"
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                  <div className="text-base font-semibold">{item.label}</div>;""
                  <div className="mt-1 text-sm text-white/75">{item.desc}</div>;"
                </a>;
                <Link key={item.label} href={item.href as string}>;
</Link>"
                  <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">;"
</a>"
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                    <div className="text-base font-semibold">{item.label}</div>;""
                    <div className="mt-1 text-sm text-white/75">{item.desc}</div>;"
                  </a>;
                </Link>;

          </div>;
        </motion.section>;{/* Extended Feature Directory */}
        <motion.section;
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}

          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-14";"
        >;
</motion>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Extended Feature Directory</h2>;""
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">A broader tour of autonomous capabilities. Each card links to the relevant hub, report, or live workflow.</p>;""
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">;"
</div>"
                <a key={title} href={href as string} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">;"
</a>"
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                  <div className="flex items-center gap-3"><Icon className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">{title}</h3></div>;""
                  <p className="mt-1 text-sm text-white/75">{desc}</p>;"
                </a>;
                <Link key={title} href={href as string}>;
</Link>"
                  <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">;"
</a>"
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                    <div className="flex items-center gap-3"><Icon className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">{title}</h3></div>;""
                    <p className="mt-1 text-sm text-white/75">{desc}</p>;"
                  </a>;
                </Link>;

          </div>;
        </motion.section>;{/* Capability Deep Links */}
        <motion.section;
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}

          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-16";"
        >;
</motion>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Capability Deep Links</h2>;""
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Jump directly to the systems that deliver each capability.</p>;""
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">;"
</div>"
                <a key={label as string} href={href as string} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-fuchsia-400/30">;"
</a>"
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                  <div className="text-base font-semibold">{label as string}</div>;""
                  <div className="mt-1 text-sm text-white/75">{desc as string}</div>;"
                </a>;
                <Link key={label as string} href={href as string}>;
</Link>"
                  <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-fuchsia-400/30">;"
</a>"
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                    <div className="text-base font-semibold">{label as string}</div>;""
                    <div className="mt-1 text-sm text-white/75">{desc as string}</div>;"
                  </a>;
                </Link>;
          </div>;
        </motion.section>;
;
        {/* Use Cases */}
        <motion.section;"
          id="use-cases";"
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}
          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-14";"
        >;
</motion>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Use Cases</h2>;""
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">;"
</div>"
              <article key={u.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-fuchsia-400/30">;"
</article>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <h3 className="text-lg font-semibold">{u.title}</h3>;""
                <p className="mt-1 text-sm text-white/75">{u.desc}</p>;"

              </article>;
          </div>;
        </motion.section>;{/* Stats */}
        <motion.section;
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}

          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-14";"
        >;
</motion>"
          <div className="neon-divider mx-auto mb-8 h-px w-full max-w-5xl" />;"
</div>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Live Impact</h2>;""
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">;"
</div>"
                <a key={item.label} href={item.href as string} target="_blank" rel="noopener" className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur hover:border-cyan-400/30">;"
</a>"
                  <div className="text-2xl font-extrabold tracking-tight">{item.value}</div>;""
                  <div className="mt-1 text-xs text-white/70">{item.label}</div>;"
                </a>;
                <Link key={item.label} href={item.href as string}>;
</Link>"
                  <a className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur hover:border-cyan-400/30">;"
</a>"
                    <div className="text-2xl font-extrabold tracking-tight">{item.value}</div>;""
                    <div className="mt-1 text-xs text-white/70">{item.label}</div>;"
                  </a>;
                </Link>;
          </div>;
        </motion.section>;
;
        {/* Capabilities */}
        <motion.section;"
          id="capabilities";"
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}
          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-14";"
        >;
</motion>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Capabilities</h2>;""
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">;"
</div>
              <Link key={title} href={href}>;
</Link>"
                <a className="relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">;"
</a>"
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-cyan-400/10 blur-2xl" />;"
</div>"
                  <div className="flex items-center gap-2">;"
</div>"
                    <Icon className="h-5 w-5 text-cyan-300" />;"
</Icon>"
                    <h3 className="text-lg font-semibold">{title}</h3>;"
                  </div>;"
                  <p className="mt-1 text-sm text-white/75">{desc}</p>;"

                </a>;
              </Link>;
          </div>;
        </motion.section>;{/* Why Zion */}
        <motion.section;
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}

          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-14";"
        >;
</motion>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Why Zion</h2>;""
          <div className="mx-auto mt-6 max-w-5xl grid grid-cols-1 gap-4 md:grid-cols-3">;"
</div>"
              <div key={title as string} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">;"
</div>"
                <div className="text-2xl">{icon as string}</div>;""
                <div className="mt-2 text-base font-semibold">{title as string}</div>;""
                <div className="mt-1 text-sm text-white/75">{desc as string}</div>;"

              </div>;
          </div>;

        </motion.section>;
;
        {/* Value Pillars */}
        <motion.section;"
          id="pillars";"
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}
          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-14";"
        >;
</motion>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Value Pillars</h2>;""
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">;"
</div>
              <Link key={title} href={href}>;
</Link>"
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</a>"
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                  <div className="flex items-center gap-3">;"
</div>"
                    <Icon className="h-5 w-5 text-cyan-300" />;"
</Icon>"
                    <h3 className="text-lg font-semibold">{title}</h3>;"
                  </div>;"
                  <p className="mt-1 text-sm text-white/75">{desc}</p>;"

                </a>;
              </Link>;
          </div>;

        </motion.section>;
;
        {/* Benefits */}
        <motion.section;"
          id="benefits";"
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}
          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-20";"
        >;
</motion>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Benefits</h2>;""
          <div className="relative mx-auto mt-4 max-w-5xl overflow-hidden">;"
</div>"
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent" />;"
</div>"
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent" />;"
</div>"
            <div className="marquee">;"
</div>"
              <div className="marquee__track">;"
</div>
                  <Link key={`${i.label}-${idx}`} href={i.href}>;
</Link>"
                    <a className="mx-3 my-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur hover:bg-white/10">;"
</a>"
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> {i.label}"
</span>

                    </a>;
                  </Link>;
              </div>;
            </div>;

          </div>;"
          <div className="mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-3 md:grid-cols-2">;"
</div>"
              <div key={b} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">;"
</div>"
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />;"
</span>"
                <span className="text-sm text-white/80">{b}</span>;"

              </div>;
          </div>;
        </motion.section>;{/* Benefits in Practice */}
        <motion.section;
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}

          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-16";"
        >;
</motion>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Benefits in Practice</h2>;""
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">See where each benefit shows up in the product.</p>;""
          <div className="mx-auto mt-6 max-w-5xl grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">;"
</div>"
                <a key={b.label} href={b.href as string} target="_blank" rel="noopener" className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md hover:border-cyan-400/30">;"
</a>"
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />;"
</span>
                </a>;
                <Link key={b.label} href={b.href as string}>;
</Link>"
                  <a className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md hover:border-cyan-400/30">;"
</a>"
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />;"
</span>
                  </a>;
                </Link>;
          </div>;
        </motion.section>;
;
        {/* Tailored Value by Team */}"
        <section className="mx-auto max-w-7xl px-6 pb-16">;"
</section>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Tailored Value by Team</h2>;""
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">;"
</div>
              <Link key={card.title} href={card.href}>;
</Link>"
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">;"
</a>"
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                  <h3 className="text-lg font-semibold">{card.title}</h3>;""
                  <p className="mt-1 text-sm text-white/75">{card.desc}</p>;""
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <Link2 className="h-3.5 w-3.5" /></div>;"

                </a>;
              </Link>;
          </div>;

        </section>;
        <motion.section;"
          id="reports";"
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}
          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-14";"
        >;
</motion>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Ecosystem & Integrations</h2>;""
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">;"
</div>"
            <a href="/site-health" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
              <div className="flex items-center gap-2">;"
</div>"
                <Rocket className="h-5 w-5 text-cyan-300" />;"
</Rocket>"
                <h3 className="text-lg font-semibold">GitHub Actions</h3>;"
              </div>;"
              <p className="mt-1 text-sm text-white/75">Live pipelines, logs, and artifacts powering automations.</p>;"
            </a>;"
            <a href="https://www.netlify.com/" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
              <div className="flex items-center gap-2">;"
</div>"
                <Globe className="h-5 w-5 text-cyan-300" />;"
</Globe>"
                <h3 className="text-lg font-semibold">Netlify</h3>;"
              </div>;
            </a>;"
            <a href="https://supabase.com/" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
              <div className="flex items-center gap-2">;"
</div>"
                <Layers className="h-5 w-5 text-cyan-300" />;"
</Layers>"
                <h3 className="text-lg font-semibold">Supabase</h3>;"
              </div>;"
              <p className="mt-1 text-sm text-white/75">Realtime data and storage for emerging automation needs.</p>;"
            </a>;"
            <a href="https://www.framer.com/motion/" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
              <div className="flex items-center gap-2">;"
</div>"
                <Palette className="h-5 w-5 text-cyan-300" />;"
</Palette>"
                <h3 className="text-lg font-semibold">Framer Motion</h3>;"
              </div>;
            </a>;
          </div>;
        </motion.section>;
;
        {/* Quality Gates & Guardrails */}
        <motion.section;"
          id="guardrails";"
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}
          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-16";"
        >;
</motion>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Quality Gates & Guardrails</h2>;""
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">;"
</div>
              <Link key={g.title} href={g.href}>;
</Link>"
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-fuchsia-400/30">;"
</a>"
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                  <h3 className="text-lg font-semibold">{g.title}</h3>;""
                  <p className="mt-1 text-sm text-white/75">{g.desc}</p>;"

                </a>;
              </Link>;
          </div>;
        </motion.section>;{/* Tech */}
        <motion.section;
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}

          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-16";"
        >;
</motion>"
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">;"
</div>"
            <p className="text-white/70">Powered by modern cloud and AI tooling</p>;""
            <div className="mt-4 flex flex-wrap items-center justify-center gap-6">;"
</div>"
                <span key={t} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] glow-pulse">;"
</span>

                </span>;
            </div>;
          </div>;

        </motion.section>;
;
        {/* Quick Start */}"
        <section className="mx-auto max-w-7xl px-6 pb-20">;"
</section>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Quick Start</h2>;""
          <div className="mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-4 md:grid-cols-4">;"
</div>
              <Link key={title as string} href={href as string}>;
</Link>"
                <a className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 text-left backdrop-blur-xl hover:border-cyan-400/30">;"
</a>"
                  <div className="text-sm font-semibold text-white">{title as string}</div>;""
                  <div className="mt-1 text-xs text-white/70">{desc as string}</div>;"

                </a>;
              </Link>;
          </div>;

        </section>;

        <motion.section;
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}

          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-24";"
        >;
</motion>"
          <div className="animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl">;"
</div>"
            <h3 className="text-2xl font-bold">Ready to build with autonomous cloud agents?</h3>;""
            <div className="mt-6 flex flex-wrap justify-center gap-3">;"
</div>"
              <Link href="/automation"><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover:bg-white">Get Started</a></Link>;""
              <Link href="/automation"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">View Automations</a></Link>;"
            </div>;
          </div>;
        </motion.section>;
;
        {/* AUTO-GENERATED:FRONT_FUTURIZER_START */}
;"
        <section id="front-futurizer" className="mx-auto max-w-7xl px-6 pb-20">;"
</section>"
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">A quick portal to the most impactful areas across Zion. Every tile and list item links to a live hub, report, or doc.</p>;""
          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">;"
</div>"
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">;"
</div>"
              <div className="text-lg font-semibold">Features</div>;""
              <ul className="mt-3 space-y-2">;"
</ul>"
            <li className="flex items-start gap-2">;"
</li>"
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />;"
</span>
            </li>;"
            <li className="flex items-start gap-2">;"
</li>"
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />;"
</span>"
              <span className="text-sm text-white/80">Repo sync to main with safe diffs</span>;"
            </li>;"
            <li className="flex items-start gap-2">;"
</li>"
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />;"
</span>
            </li>;"
            <li className="flex items-start gap-2">;"
</li>"
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />;"
</span>
            </li>;
              </ul>;
            </div>;"
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">;"
</div>"
              <div className="text-lg font-semibold">Capabilities</div>;""
              <ul className="mt-3 space-y-2">;"
</ul>"
            <li className="flex items-start gap-2">;"
</li>"
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />;"
</span>"
              <span className="text-sm text-white/80">Code quality and refactors</span>;"
            </li>;"
            <li className="flex items-start gap-2">;"
</li>"
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />;"
</span>"
              <span className="text-sm text-white/80">A11y and performance tuning</span>;"
            </li>;"
            <li className="flex items-start gap-2">;"
</li>"
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />;"
</span>"
              <span className="text-sm text-white/80">Content curation and SEO</span>;"
            </li>;"
            <li className="flex items-start gap-2">;"
</li>"
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />;"
</span>"
              <span className="text-sm text-white/80">Observability and analytics</span>;"
            </li>;
              </ul>;
            </div>;"
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">;"
</div>"
              <div className="text-lg font-semibold">Benefits</div>;""
              <ul className="mt-3 space-y-2">;"
</ul>"
            <li className="flex items-start gap-2">;"
</li>"
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />;"
</span>"
              <span className="text-sm text-white/80">24/7 progress without manual ops</span>;"
            </li>;"
            <li className="flex items-start gap-2">;"
</li>"
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />;"
</span>"
              <span className="text-sm text-white/80">Faster feedback with small edits</span>;"
            </li>;"
            <li className="flex items-start gap-2">;"
</li>"
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />;"
</span>"
              <span className="text-sm text-white/80">Higher confidence via layered checks</span>;"
            </li>;"
            <li className="flex items-start gap-2">;"
</li>"
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />;"
</span>"
              <span className="text-sm text-white/80">Links to hubs, reports, and docs</span>;"
            </li>;
              </ul>;
            </div>;
          </div>;"
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">;"
</div>"
            <Link key="Automation Hub" href="/automation">;"
</Link>"
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="text-base font-semibold">Automation Hub</div>;""
                <div className="mt-1 text-sm text-white/75">Factories, agents, and live workflows</div>;"
              </a>;
            </Link>;"
            <Link key="Site Health" href="/site-health">;"
</Link>"
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="text-base font-semibold">Site Health</div>;""
                <div className="mt-1 text-sm text-white/75">A11y, performance, and link integrity</div>;"
              </a>;
            </Link>;"
            <Link key="SEO Audit" href="/reports/seo">;"
</Link>"
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="text-base font-semibold">SEO Audit</div>;"
              </a>;
            </Link>;"
            <Link key="AI Trends" href="/reports/ai-trends">;"
</Link>"
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="text-base font-semibold">AI Trends</div>;""
                <div className="mt-1 text-sm text-white/75">Signals inspiring new factories and experiments</div>;"
              </a>;
            </Link>;"
            <Link key="Newsroom" href="/newsroom">;"
</Link>"
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="text-base font-semibold">Newsroom</div>;""
                <div className="mt-1 text-sm text-white/75">Autonomous updates and product evolution</div>;"
              </a>;
            </Link>;"
            <a key="Documentation" href="/reports/seo" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
              <div className="text-base font-semibold">Documentation</div>;""
              <div className="mt-1 text-sm text-white/75">Technical notes and guides</div>;"
            </a>;"
            <a key="AI Changelog" href="/newsroom" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
              <div className="text-base font-semibold">AI Changelog</div>;""
              <div className="mt-1 text-sm text-white/75">Summarized autonomous changes and highlights</div>;"
            </a>;"
            <a key="Live Pipelines" href="/site-health" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</a>"
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
              <div className="text-base font-semibold">Live Pipelines</div>;""
              <div className="mt-1 text-sm text-white/75">Observe CI pipelines, logs, and artifacts</div>;"
            </a>;
          </div>;
        </section>;"
        <footer className="mx-auto max-w-7xl px-6 pb-16">;"
</footer>"
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">;"
</div>"
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">;"
</div>"
              <div className="text-lg font-bold tracking-wide">;"
</div>"
                <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span>;"
              </div>;"
              <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70">;"
</div>"
                <Link href="/automation"><a>Automations</a></Link>;""
                <Link href="/newsroom"><a>Newsroom</a></Link>;""
                <Link href="/site-health"><a>Site Health</a></Link>;""
                <a href="/" target="_blank" rel="noopener">GitHub</a>;"
              </div>;
            </div>;
          </div>;
        </footer>;
        <motion.section;"
          id="agents";"
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}
          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-14";"
        >;
</motion>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">AI Agents Gallery</h2>;""
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Meet the autonomous agents powering your outcomes. Each card links to a live system.</p>;""
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">;"
</div>
              <Link key={title} href={href}>;
</Link>"
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</a>"
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                  <div className="flex items-center gap-2">;"
</div>"
                    <Icon className="h-5 w-5 text-cyan-300" />;"
</Icon>"
                    <h3 className="text-lg font-semibold">{title}</h3>;"
                  </div>;"
                  <p className="mt-1 text-sm text-white/75">{desc}</p>;"

                </a>;
              </Link>;
          </div>;

        </motion.section>;
;
        {/* Capabilities Matrix */}
        <motion.section;"
          id="capability-matrix";"
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}
          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-16";"
        >;
</motion>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Capabilities Matrix</h2>;""
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Explore a broader catalog of Zion capabilities. Each tile links to a live hub, report, or workflow.</p>;""
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">;"
</div>"
                <a key={item.title} href={item.href as string} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</a>"
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                  <div className="text-base font-semibold">{item.title}</div>;""
                  <div className="mt-1 text-sm text-white/75">{item.desc}</div>;"
                </a>;
                <Link key={item.title} href={item.href as string}>;
</Link>"
                  <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</a>"
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                    <div className="text-base font-semibold">{item.title}</div>;""
                    <div className="mt-1 text-sm text-white/75">{item.desc}</div>;"
                  </a>;
                </Link>;
          </div>;
        </motion.section>;
;
        {/* Benefits Directory */}
        <motion.section;"
          id="benefits-directory";"
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}
          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-16";"
        >;
</motion>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Benefits Directory</h2>;"
              <Link key={b.label} href={b.href}>;
</Link>"
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</a>"
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                  <div className="flex items-center gap-2">;"
</div>"
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />;"
</span>"
                    <h3 className="text-base font-semibold">{b.label}</h3>;"
                  </div>;"
                  <p className="mt-1 text-sm text-white/75">{b.desc}</p>;"
          </div>;
        </motion.section>;
;
        {/* AUTO-GENERATED:FRONT_ADS_START */}
;"
        <section id="auto-ads" className="mx-auto max-w-7xl px-6 pb-16">;"
</section>"
            <Link href="/.netlify/functions/frontpage-advertiser"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">Frontpage Advertiser</div><div className="mt-1 text-sm text-white/75">Refreshes front promos automatically</div></a></Link>;""
            <a href="https://github.com/Zion-Holdings/zion.app/actions" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">Live Pipelines</div><div className="mt-1 text-sm text-white/75">CI logs & artifacts</div></a>;""
            <a href="https://github.com/Zion-Holdings/zion.app/tree/main/docs" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">Docs & Guides</div><div className="mt-1 text-sm text-white/75">Technical notes</div></a>;"
          </div>;
        </section>;"
        <section id="auto-ads" className="mx-auto max-w-7xl px-6 pb-16">"
</section>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Auto‑advertised Highlights</h2>""
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">"
</div>"
            <Link href="/automation"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">Automation Hub</div><div className="mt-1 text-sm text-white/75">Factories, agents, and live workflows</div></a></Link>""
            <Link href="/site-health"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">Site Health</div><div className="mt-1 text-sm text-white/75">A11y, performance, and link integrity</div></a></Link>""
            <Link href="/reports/seo"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">SEO Audit</div><div className="mt-1 text-sm text-white/75">Continuous on‑site improvements</div></a></Link>""
            <Link href="/reports/ai-trends"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">AI Trends</div><div className="mt-1 text-sm text-white/75">Ecosystem intelligence signals</div></a></Link>""
            <Link href="/newsroom"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">Newsroom</div><div className="mt-1 text-sm text-white/75">Autonomous updates & evolution</div></a></Link>""
            <Link href="/main/front"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">Front Systems Hub</div><div className="mt-1 text-sm text-white/75">Curated futuristic front experience</div></a></Link>""
            <Link href="/.netlify/functions/deps-auto-upgrade-runner"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">Deps Auto‑Upgrade</div><div className="mt-1 text-sm text-white/75">Keeps dependencies fresh safely</div></a></Link>""
            <Link href="/.netlify/functions/frontpage-advertiser"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">Frontpage Advertiser</div><div className="mt-1 text-sm text-white/75">Refreshes front promos automatically</div></a></Link>""
            <a href="https://github.com/Zion-Holdings/zion.app/actions" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">Live Pipelines</div><div className="mt-1 text-sm text-white/75">CI logs & artifacts</div></a>""
            <a href="https://github.com/Zion-Holdings/zion.app/tree/main/docs" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring"><div className="text-base font-semibold">Docs & Guides</div><div className="mt-1 text-sm text-white/75">Technical notes</div></a>"
          </div>
        </section>
        <motion.section;"
          id="feature-highlights";"
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.2 }}
          transition={{ duration:0.5 }}"
          className="mx-auto max-w-7xl px-6 pb-14";"
        >;
</motion>"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Feature Highlights</h2>;""
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Explore deep links across the app that showcase our capabilities and benefits.</p>;""
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">;"
</div>"
              <a key={card.title} href={card.href} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <h3 className="text-lg font-semibold">{card.title}</h3>;""
                <p className="mt-1 text-sm text-white/75">{card.desc}</p>;"

              </a>;
          </div>;

        </motion.section>;
;
        {/* Reports */}"
        <section id="reports" className="mx-auto max-w-7xl px-6 pb-16">;"
</section>
        </section>;"
        <section id="automations" className="mx-auto max-w-7xl px-6 pb-20">;"
</section>"
          <h2 className="text-2xl font-bold tracking-wide text-white/90 text-center">New Intelligent Automations</h2>;""
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">;"
</div>"
              <a key={tool.title} href={tool.href} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 hover:border-cyan-400/30 hover:text-white transition-colors">;"
</a>"
                <div className="text-base font-semibold text-white">{tool.title}</div>;"

              </a>;
          </div>;

        </section>;
      </div>;
        <button;"
          onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}'
</button>
        </button>;
    </div>;'
<section className="mx-auto max-w-7xl px-6 pb-14">;"
</section>"
  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">;"
</div>"
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/actions-catalog.yml" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="text-base font-semibold">Actions Catalog & README</div>;""
                <div className="mt-1 text-sm text-white/75">Scheduled:*/5 * * * *</div>;"
              </a>;"
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/auto-fix.yml" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="text-base font-semibold">Autonomous Auto-Fix</div>;""
                <div className="mt-1 text-sm text-white/75">Scheduled:*/30 * * * *</div>;"
              </a>;"
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/automerge-main.yml" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="text-base font-semibold">Auto-merge to main</div>;""
                <div className="mt-1 text-sm text-white/75">On push / schedule</div>;"
              </a>;"
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/autonomous-meta.yml" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="text-base font-semibold">Autonomous Meta Factory</div>;""
                <div className="mt-1 text-sm text-white/75">Scheduled:*/30 * * * *</div>;"
              </a>;"
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/ci-self-heal.yml" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="text-base font-semibold">CI Self-Heal</div>;""
                <div className="mt-1 text-sm text-white/75">On push / schedule</div>;"
              </a>;"
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/ci.yml" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="text-base font-semibold">CI</div>;""
                <div className="mt-1 text-sm text-white/75">On push / schedule</div>;"
              </a>;"
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/cloud-maintenance.yml" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="text-base font-semibold">Cloud Maintenance Automations</div>;""
                <div className="mt-1 text-sm text-white/75">Scheduled:*/30 * * * *</div>;"
              </a>;"
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/cloud-marketing.yml" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="text-base font-semibold">Cloud Marketing Automations</div>;""
                <div className="mt-1 text-sm text-white/75">Scheduled:0 */6 * * *</div>;"
              </a>;"
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/continuous-improvement.yml" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="text-base font-semibold">Continuous Improvement</div>;""
                <div className="mt-1 text-sm text-white/75">Scheduled:0 */6 * * *</div>;"
              </a>;"
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/cursor-rules-autoupdate.yml" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="text-base font-semibold">Cursor Rules Auto Update</div>;""
                <div className="mt-1 text-sm text-white/75">Scheduled:17 */6 * * *</div>;"
              </a>;"
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/dependency-maintenance.yml" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="text-base font-semibold">Dependency Maintenance</div>;""
                <div className="mt-1 text-sm text-white/75">Scheduled:17 5 * * *</div>;"
              </a>;"
              <a href="https://github.com/Zion-Holdings/zion/actions/workflows/diverse-agent-matrix.yml" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;"
</a>"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
</div>"
                <div className="text-base font-semibold">Diverse Agent Matrix</div>;""
                <div className="mt-1 text-sm text-white/75">Scheduled:7 * * * *</div>;"

              </a>;
  </div>;
</section>;"