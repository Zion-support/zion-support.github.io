
import Head from 'next/head',
import Link from 'next/link';
import { Cpu, Gauge, GitBranch, Rocket, ShieldCheck, Zap, Activity, Globe, Layers, BarChart3, Search, Link2, Palette, LineChart  } from 'lucide-react';
import { motion, useScroll, useSpring  } from 'framer-motion';
import { useEffect, useState } from 'react';
export default function MainFrontIndex() {
  const { scrollYProgress } = useScroll();
  const progressX = null;

              { title: 'Revenue Ideas Promoter', href: '/.netlify/functions/revenue-ideas-promoter' }].map((tool) => (
              <a key={tool.title} href={tool.href} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 hover:border-cyan-400/30 hover:text-white transition-colors">
                <div className="text-base font-semibold text-white">{tool.title}</div>
                <div className="mt-1 text-xs text-white/70">Open ↗</div>
            ))}
          </div>
        </section>

      </div>
      {/* Back to top */}
      {showToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='fixed bottom-24 right-4 z-40 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-3 py-2 text-xs font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]'
          aria-label='Scroll to top'        >          className="fixed bottom-24 right-4 z-40 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-3 py-2 text-xs font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]"
          aria-label="Scroll to top"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
/* AUTO-GENERATED: FRONT_ACTIONS_START */
<section className='mx-auto max-w-7xl px-6 pb-14'>
  <h2 className='text-center text-2xl font-bold tracking-wide text-white/90'>
    GitHub Actions — Live Automations
  </h2>
  <p className='mx-auto mt-2 max-w-3xl text-center text-sm text-white/70'>
    Cloud‑native workflows that maintain, heal, and evolve the repo
    automatically.
  </p>
  <div className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/actions-catalog.yml'
      target='_blank'
      rel='noopener'
      className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover'
    >
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
      <div className='text-base font-semibold'>Actions Catalog & README</div>
      <div className='mt-1 text-sm text-white/75'>Scheduled: */5 * * * *</div>
      <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>
        Open <span aria-hidden>↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/auto-fix.yml'
      target='_blank'
      rel='noopener'
      className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover'
    >
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
      <div className='text-base font-semibold'>Autonomous Auto-Fix</div>
      <div className='mt-1 text-sm text-white/75'>Scheduled: */30 * * * *</div>
      <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>
        Open <span aria-hidden>↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/automerge-main.yml'
      target='_blank'
      rel='noopener'
      className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover'
    >
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
      <div className='text-base font-semibold'>Auto-merge to main</div>
      <div className='mt-1 text-sm text-white/75'>On push / schedule</div>
      <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>
        Open <span aria-hidden>↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/autonomous-meta.yml'
      target='_blank'
      rel='noopener'
      className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover'
    >
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
      <div className='text-base font-semibold'>Autonomous Meta Factory</div>
      <div className='mt-1 text-sm text-white/75'>Scheduled: */30 * * * *</div>
      <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>
        Open <span aria-hidden>↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/ci-self-heal.yml'
      target='_blank'
      rel='noopener'
      className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover'
    >
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
      <div className='text-base font-semibold'>CI Self-Heal</div>
      <div className='mt-1 text-sm text-white/75'>On push / schedule</div>
      <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>
        Open <span aria-hidden>↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/ci.yml'
      target='_blank'
      rel='noopener'
      className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover'
    >
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
      <div className='text-base font-semibold'>CI</div>
      <div className='mt-1 text-sm text-white/75'>On push / schedule</div>
      <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>
        Open <span aria-hidden>↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/cloud-maintenance.yml'
      target='_blank'
      rel='noopener'
      className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover'
    >
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
      <div className='text-base font-semibold'>
        Cloud Maintenance Automations
      </div>
      <div className='mt-1 text-sm text-white/75'>Scheduled: */30 * * * *</div>
      <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>
        Open <span aria-hidden>↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/cloud-marketing.yml'
      target='_blank'
      rel='noopener'
      className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover'
    >
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
      <div className='text-base font-semibold'>Cloud Marketing Automations</div>
      <div className='mt-1 text-sm text-white/75'>Scheduled: 0 */6 * * *</div>
      <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>
        Open <span aria-hidden>↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/continuous-improvement.yml'
      target='_blank'
      rel='noopener'
      className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover'
    >
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
      <div className='text-base font-semibold'>Continuous Improvement</div>
      <div className='mt-1 text-sm text-white/75'>Scheduled: 0 */6 * * *</div>
      <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>
        Open <span aria-hidden>↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/cursor-rules-autoupdate.yml'
      target='_blank'
      rel='noopener'
      className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover'
    >
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
      <div className='text-base font-semibold'>Cursor Rules Auto Update</div>
      <div className='mt-1 text-sm text-white/75'>Scheduled: 17 */6 * * *</div>
      <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>
        Open <span aria-hidden>↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/dependency-maintenance.yml'
      target='_blank'
      rel='noopener'
      className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover'
    >
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
      <div className='text-base font-semibold'>Dependency Maintenance</div>
      <div className='mt-1 text-sm text-white/75'>Scheduled: 17 5 * * *</div>
      <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>
        Open <span aria-hidden>↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/diverse-agent-matrix.yml'
      target='_blank'
      rel='noopener'
      className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover'
    >
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
      <div className='text-base font-semibold'>Diverse Agent Matrix</div>
      <div className='mt-1 text-sm text-white/75'>Scheduled: 7 * * * *</div>
      <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>
        Open <span aria-hidden>↗</span>
      </div>
    </a>
  </div>
</section>;
/* AUTO-GENERATED: FRONT_ACTIONS_END */
}</div> 
}</div> </div> </div>) ) 
}</div> </div> </motion.section> {
  /* Showcase */ 
}<motion.section > <h2 className="text-center text-2xl font-bold tracking-wide text-white/90" >Showcase: Features, Capabilities, Benefits</h2> <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70" >Jump into highlighted areas of the platform. Every card links to a deep section or dedicated page.</p> <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" > <Link href="#features" > <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="flex items-center gap-2" ><Zap className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold" >Explore Features</h3></div> <p className="mt-1 text-sm text-white/75" >Self‑improving systems, composable factories, observability and more.</p> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90" >Open <span aria-hidden>→</span></div> </a> </a> <Link href="#capabilities" > <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="flex items-center gap-2" ><Cpu className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold" >Browse Capabilities</h3></div> <p className="mt-1 text-sm text-white/75" >Design evolution, SEO, a11y, performance, refactors, and policy.</p> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90" >Open <span aria-hidden>→</span></div> </a> </a> <Link href="#benefits" > <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="flex items-center gap-2" ><Gauge className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold" >See Benefits</h3></div> <p className="mt-1 text-sm text-white/75" >Momentum, quality, safety, and measurable outcomes.</p> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90" >Open <span aria-hidden>→</span></div> </a> </a> <Link href="#feature-map" > <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="flex items-center gap-2" ><Globe className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold" >Feature Map</h3></div> <p className="mt-1 text-sm text-white/75" >A quick overview of what you can explore right now.</p> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90" >Open <span aria-hidden>→</span></div> </a> </a> <Link href="#guardrails" > <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="flex items-center gap-2" ><ShieldCheck className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold" >Guardrails</h3></div> <p className="mt-1 text-sm text-white/75" >Defense‑in‑depth checks and safety before shipping.</p> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90" >Open <span aria-hidden>→</span></div> </a> </a> <Link href="/automation" > <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="flex items-center gap-2" ><Rocket className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold" >Automation Hub</h3></div> <p className="mt-1 text-sm text-white/75" >Factories, agents, and live workflows in one place.</p> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90" >Open <span aria-hidden>→</span></div> </a> </a> </div> </motion.section> {
  label 

}</nav> </aside> {
  /* Engines: Alternative Automation Runtimes */ 
}<motion.section > <h2 className="text-center text-2xl font-bold tracking-wide text-white/90" >Autonomous Engines (Beyond GitHub Actions) </h2> <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70" >We run outside GitHub Actions using scheduled cloud functions and orchestrators. Explore the engines below.</p> <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" > <a href="/.netlify/functions/front-enhancer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="text-lg font-semibold" >Netlify Scheduled Functions</div> <p className="mt-1 text-sm text-white/75" >Cron-like cloud jobs that run every 20 minutes to enhance the front experience.</p> <div className="mt-3 text-xs text-cyan-300/90" >View logs via Netlify →</div> </a> <a > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="text-lg font-semibold" >Local Orchestrators</div> <p className="mt-1 text-sm text-white/75" >Node-based orchestrators that can run on any scheduler or platform.</p> <div className="mt-3 text-xs text-cyan-300/90" >Browse orchestration scripts ↗</div> </a> <a href="/automation" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="text-lg font-semibold" >Autonomous Cloud Orchestrator</div> <p className="mt-1 text-sm text-white/75" >End-to-end agents launching factories and syncing safe diffs to main.</p> <div className="mt-3 text-xs text-cyan-300/90" >Open Automation Hub →</div> </a> </div> <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" > <a href="/.netlify/functions/internal-link-graph-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="text-lg font-semibold" >Internal Link Graph</div> <p className="mt-1 text-sm text-white/75" >Live graph of internal navigation across pages.</p> <div className="mt-3 text-xs text-cyan-300/90" >Run now →</div> </a> <a href="/.netlify/functions/robots-enhancer-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="text-lg font-semibold" >Robots.txt Enhancer</div> <p className="mt-1 text-sm text-white/75" >Ensures sitemap and sensible defaults for crawling.</p> <div className="mt-3 text-xs text-cyan-300/90" >Run now →</div> </a> <a href="/.netlify/functions/alt-text-indexer-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="text-lg font-semibold" >Alt Text Indexer</div> <p className="mt-1 text-sm text-white/75" >Humanized alt suggestions for images across the site.</p> <div className="mt-3 text-xs text-cyan-300/90" >Run now →</div> </a> <a href="/.netlify/functions/content-registry-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="text-lg font-semibold" >Content Registry Builder</div> <p className="mt-1 text-sm text-white/75" >Continuously indexes pages and reports for discovery.</p> <div className="mt-3 text-xs text-cyan-300/90" >Run now →</div> </a> <a href="/.netlify/functions/autonomous-meta-orchestrator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover" > > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="text-lg font-semibold" >Rapid Sync (2m) </div> <p className="mt-1 text-sm text-white/75" >High‑frequency repo sync to push autonomous changes quickly.</p> <div className="mt-3 text-xs text-cyan-300/90" >Run now ↗</div> </a> <a href="/.netlify/functions/content-freshness-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover" > </a> <a href="/.netlify/functions/docs-link-audit-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="text-lg font-semibold" >Docs Link Audit</div> <p className="mt-1 text-sm text-white/75" >Scans docs for broken relative links and commits a CSV report.</p> <div className="mt-3 text-xs text-cyan-300/90" >Open →</div> </a> <a href="/.netlify/functions/image-dimension-audit-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="text-lg font-semibold" >Image Dimension Audit</div> <p className="mt-1 text-sm text-white/75" >Detects missing width/height in images and logs a report.</p> <div className="mt-3 text-xs text-cyan-300/90" >Open →</div> </a> <a href="/.netlify/functions/autonomous-master-orchestrator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="text-lg font-semibold" >Autonomous Master Orchestrator</div> <p className="mt-1 text-sm text-white/75" >Runs every minute: triggers all cloud functions and syncs to main.</p> <div className="mt-3 text-xs text-cyan-300/90" >Open ↗</div> </a> </div> </motion.section> {
  /* Autonomous Innovations */ 
}<motion.section > </a> <a href="/.netlify/functions/revenue-ideas-lab" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="flex items-center gap-2" ><LineChart className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold" >Revenue Ideas Lab</h3></div> <p className="mt-1 text-sm text-white/75" >Monetization experiments with safe, automatic repository sync.</p> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90" >Open <span aria-hidden>→</span></div> </a> <a href="/.netlify/functions/autonomous-invention-orchestrator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="flex items-center gap-2" ><Rocket className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold" >Autonomous Invention Orchestrator</h3></div> <p className="mt-1 text-sm text-white/75" >Continuously invents and applies front enhancements.</p> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90" >Open <span aria-hidden>→</span></div> </a> </div> </motion.section> </a>) ) 
}</div> </section>) : (<Link href= {
  card.href as string 
}><a className="mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline" >Open</a></a> 
}</article>) ) 
}</div> </section> {
  /* Netlify Automations */ 
}<motion.section <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="text-lg font-semibold"> {
  f.label 
}</div> <div className="mt-1 text-sm text-white/75"> {
  f.desc 
}</div> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Trigger <span aria-hidden>↗</span></div> 
}</div> </motion.section> </a> <a href="/.netlify/functions/autonomous-invention-orchestrator" target="blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="text-lg font-semibold" >Autonomous Invention Orchestrator</div> <div className="mt-1 text-sm text-white/75" >Invents and curates fresh automations and safely syncs diffs to main.</div> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90" >Trigger <span aria-hidden>↗</span></div> </a> </div> </section> {
  /* Feature Spotlight */ 
}<motion.section </a> </a>) ) 
}</div> </motion.section> <section className="mx-auto max-w-7xl px-6 pb-16"> <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/10 via-violet-600/10 to-cyan-600/10 p-6 backdrop-blur-xl"> <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.08] [background:radial-gradient (circle at center, rgba (255, 255, 255, 0.35) 0, rgba (255, 255, 255, 0) 60%), linear-gradient (90deg, rgba (255, 255, 255, 0.12) 1px, transparent 1px), linear-gradient (0deg, rgba (255, 255, 255, 0.12) 1px, transparent 1px) ] bg-[size:100% 100%, 2.5rem 2.5rem, 2.5rem 2.5rem] animate-grid" /> <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore Zion Systems</h2> <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Discover key features, capabilities, and benefits. Each card links to a dedicated page or live hub.</p> <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> <Link href="/automation"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /><h3 className="text-base font-semibold">Automation Hub</h3><p className="mt-1 text-sm text-white/75">Factories, agents, and live workflows</p><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link> <Link href="/reports/seo"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /><h3 className="text-base font-semibold">AI SEO Auditor</h3><p className="mt-1 text-sm text-white/75">Continuous on‑site SEO improvements</p><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link> <Link href="/site-health"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /><h3 className="text-base font-semibold">Site Health</h3><p className="mt-1 text-sm text-white/75">A11y, performance, and link integrity</p><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link> <Link href="/reports/ai-trends"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /><h3 className="text-base font-semibold">AI Trends Radar</h3><p className="mt-1 text-sm text-white/75">Signals that inspire new automations</p><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link> <Link href="/newsroom"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /><h3 className="text-base font-semibold">Newsroom</h3><p className="mt-1 text-sm text-white/75">Latest autonomous updates</p><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link> <a href="https://github.com/Zion-Holdings/zion.app/actions" target="blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"><div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /><h3 className="text-base font-semibold">Live Workflows</h3><p className="mt-1 text-sm text-white/75">Observe pipelines running 24/7</p><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a> /* AUTO-GENERATED: FRONT ADS END */ 
}{
  /* Outcome Benefits */ 
}<motion.section </a> </a>) ) 
}</div> </motion.section> {
  /* Suites */ 
}<motion.section suite.external ? () : () ) 
}</article>) ) 
}</div> </motion.section> {
  /* Superpowers */ 
}<motion.section </article>) ) 
}</div> </motion.section> {
  /* Get Started */ 
}<motion.section > <h2 className="text-center text-2xl font-bold tracking-wide text-white/90" >Get Started in Minutes</h2> <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-4" > <Link href="/automation" > <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="flex items-center gap-2" ><Rocket className="h-5 w-5 text-cyan-300" /><span className="text-sm font-semibold" >1. Explore Automations</span></div> <p className="mt-1 text-xs text-white/75" >See live autonomous suites and workflows.</p> </a> </a> <Link href="/reports/seo" > <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="flex items-center gap-2" ><Search className="h-5 w-5 text-cyan-300" /><span className="text-sm font-semibold" >2. Run SEO Audit</span></div> <p className="mt-1 text-xs text-white/75" >Get prioritized improvements and artifacts.</p> </a> </a> <Link href="/site-health" > <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="flex items-center gap-2" ><Gauge className="h-5 w-5 text-cyan-300" /><span className="text-sm font-semibold" >3. Check Site Health</span></div> <p className="mt-1 text-xs text-white/75" >A11y, performance, and link health dashboards.</p> </a> </a> <Link href="/reports/ai-trends" > <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="flex items-center gap-2" ><Globe className="h-5 w-5 text-cyan-300" /><span className="text-sm font-semibold" >4. Track AI Trends</span></div> <p className="mt-1 text-xs text-white/75" >Stay ahead with intelligence signals.</p> </a> </a> </div> </motion.section> {
  /* Features */ 
}<motion.section </a> </a>) ) 
}</div> </motion.section> {
  /* Outcomes */ 
}<motion.section > <h2 className="text-center text-2xl font-bold tracking-wide text-white/90" >Outcomes</h2> <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70" > Tangible, measurable wins delivered by autonomous cloud agents. </p> </a> </a>) ) 
}</div> </div> </div> </motion.section> {
  /* Feature Map */ 
}<motion.section > <h2 className="text-center text-2xl font-bold tracking-wide text-white/90" >Feature Map</h2> <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70" > A fast overview of what you can explore right now across the platform. </p> <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="text-base font-semibold"> {
  item.label 
}</div> <div className="mt-1 text-sm text-white/75"> {
  item.desc 
}</div> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div> 
}</div> </motion.section> {
  /* AUTO: catalog injection for automated advertising */ 
}{
  /* AUTO:FRONT INDEX DIRECTORY START */ </div> </section> /* AUTO:FRONT INDEX DIRECTORY END */ 
}{
  /* Platform Modules */ 
}<motion.section </a> </a>) ) 
}</div> </motion.section> {
  /* Neural Feature Matrix */ 
}<motion.section <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="text-base font-semibold"> {
  item.label 
}</div> <div className="mt-1 text-sm text-white/75"> {
  item.desc 
}</div> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div> 
}</div> </motion.section> {
  /* Extended Feature Directory */ 
}<motion.section <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="flex items-center gap-3"><Icon className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold"> {
  title 
}</h3></div> <p className="mt-1 text-sm text-white/75"> {
  desc 
}</p> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div> 
}</div> </motion.section> {
  /* Capability Deep Links */ 
}<motion.section <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="text-base font-semibold"> {
  label as string 
}</div> <div className="mt-1 text-sm text-white/75"> {
  desc as string 
}</div> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div> 
}</div> </motion.section> {
  /* Use Cases */ 
}<motion.section </article>) ) 
}</div> </motion.section> {
  /* Stats */ 
}<motion.section </a>) : (<Link key= {
  item.label 
}href= {
  item.href as string 
}> <a className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur hover:border-cyan-400/30" > <div className="text-2xl font-extrabold tracking-tight" > {
  item.value 
}</div> <div className="mt-1 text-xs text-white/70" > {
  item.label 
}</div> 
}</div> </motion.section> {
  /* Capabilities */ 
}<motion.section </a> </a>) ) 
}</div> </motion.section> {
  /* Why Zion */ 
}<motion.section 
}</div> </motion.section> {
  /* Value Pillars */ 
}<motion.section </a> </a>) ) 
}</div> </motion.section> {
  /* Benefits */ 
}<motion.section </a> </a>) ) 
}</div> </div> </div> 
}</div> </motion.section> {
  /* Benefits in Practice */ 
}<motion.section </a>) : (<Link key= {
  b.label 
}href= {
  b.href as string 
}> <a className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md hover:border-cyan-400/30" > <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0 0 12px rgba (52, 211, 153, 0.9) ]" /> <span className="text-sm text-white/80" ><span className="font-semibold text-white" > {
  b.label 
}</span> — {
  b.desc 
}<span className="ml-1 text-cyan-300/90" >→</span></span> 
}</div> </motion.section> </a> </a>) ) 
}</div> </section> {
  /* Ecosystem & Integrations */ 
}<motion.section > <h2 className="text-center text-2xl font-bold tracking-wide text-white/90" >Ecosystem & Integrations</h2> <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" > <a href="/site-health" target="blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="flex items-center gap-2" > <Rocket className="h-5 w-5 text-cyan-300" /> <h3 className="text-lg font-semibold" >GitHub Actions</h3> </div> <p className="mt-1 text-sm text-white/75" >Live pipelines, logs, and artifacts powering automations.</p> <div className="mt-3 text-xs text-cyan-300/90" >Open →</div> </a> </div> <p className="mt-1 text-sm text-white/75" >Zero‑ops hosting and functions for maintenance schedules.</p> <div className="mt-3 text-xs text-cyan-300/90" >Learn more →</div> </a> </div> <p className="mt-1 text-sm text-white/75" >Realtime data and storage for emerging automation needs.</p> <div className="mt-3 text-xs text-cyan-300/90" >Explore →</div> </a> </div> <p className="mt-1 text-sm text-white/75" >Futuristic micro‑interactions and motion design system.</p> <div className="mt-3 text-xs text-cyan-300/90" >Docs →</div> </a> </div> </motion.section> {
  /* Quality Gates & Guardrails */ 
}<motion.section </a> </a>) ) 
}</div> </motion.section> {
  /* Tech */ 
}<motion.section > {
  t 

}</div> </div> </motion.section> </a> </a>) ) 
}</div> </section> {
  /* CTA */ 
}<motion.section > <div className="animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl" > <h3 className="text-2xl font-bold" >Ready to build with autonomous cloud agents?</h3> <p className="mx-auto mt-2 max-w-2xl text-white/80" >Scale development with a tireless fleet of self‑improving automations.</p> <div className="mt-6 flex flex-wrap justify-center gap-3" > <Link href="/automation" ><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover:bg-white" >Get Started</a></a> <Link href="/automation" ><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10" >View Automations</a></a> </div> </div> </motion.section> {
  /* AUTO-GENERATED: FRONT FUTURIZER START */ 
}<section id="front-futurizer" className="mx-auto max-w-7xl px-6 pb-20" > <h2 className="text-center text-2xl font-bold tracking-wide text-white/90" >Explore More — Features, Capabilities, Benefits</h2> <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70" >A quick portal to the most impactful areas across Zion. Every tile and list item links to a live hub, report, or doc.</p> <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3" > <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl" > <div className="text-lg font-semibold" >Features</div> <ul className="mt-3 space-y-2" > <li className="flex items-start gap-2" > <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" /> <span className="text-sm text-white/80" >Self‑improving autonomous agents</span> </li> <li className="flex items-start gap-2" > <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" /> <span className="text-sm text-white/80" >Repo sync to main with safe diffs</span> </li> <li className="flex items-start gap-2" > <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" /> <span className="text-sm text-white/80" >Zero‑ops, cloud‑native runtime</span> </li> <li className="flex items-start gap-2" > <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" /> <span className="text-sm text-white/80" >Defense‑in‑depth guardrails</span> </li> </ul> </div> <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl" > <div className="text-lg font-semibold" >Capabilities</div> <ul className="mt-3 space-y-2" > <li className="flex items-start gap-2" > <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" /> <span className="text-sm text-white/80" >Code quality and refactors</span> </li> <li className="flex items-start gap-2" > <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" /> <span className="text-sm text-white/80" >A11y and performance tuning</span> </li> <li className="flex items-start gap-2" > <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" /> <span className="text-sm text-white/80" >Content curation and SEO</span> </li> <li className="flex items-start gap-2" > <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" /> <span className="text-sm text-white/80" >Observability and analytics</span> </li> </ul> </div> <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl" > <div className="text-lg font-semibold" >Benefits</div> <ul className="mt-3 space-y-2" > <li className="flex items-start gap-2" > <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" /> <span className="text-sm text-white/80" >24/7 progress without manual ops</span> </li> <li className="flex items-start gap-2" > <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" /> <span className="text-sm text-white/80" >Faster feedback with small edits</span> </li> <li className="flex items-start gap-2" > <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" /> <span className="text-sm text-white/80" >Higher confidence via layered checks</span> </li> <li className="flex items-start gap-2" > <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" /> <span className="text-sm text-white/80" >Links to hubs, reports, and docs</span> </li> </ul> </div> </div> <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" > <Link key="Automation Hub" href="/automation" > <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="text-base font-semibold" >Automation Hub</div> <div className="mt-1 text-sm text-white/75" >Factories, agents, and live workflows</div> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90" >Open <span aria-hidden>→</span></div> </a> </a> <Link key="Site Health" href="/site-health" > <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="text-base font-semibold" >Site Health</div> <div className="mt-1 text-sm text-white/75" >A11y, performance, and link integrity</div> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90" >Open <span aria-hidden>→</span></div> </a> </a> <Link key="SEO Audit" href="/reports/seo" > <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="text-base font-semibold" >SEO Audit</div> <div className="mt-1 text-sm text-white/75" >Continuous on‑site improvements and artifacts</div> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90" >Open <span aria-hidden>→</span></div> </a> </a> <Link key="AI Trends" href="/reports/ai-trends" > <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="text-base font-semibold" >AI Trends</div> <div className="mt-1 text-sm text-white/75" >Signals inspiring new factories and experiments</div> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90" >Open <span aria-hidden>→</span></div> </a> </a> <Link key="Newsroom" href="/newsroom" > <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="text-base font-semibold" >Newsroom</div> <div className="mt-1 text-sm text-white/75" >Autonomous updates and product evolution</div> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90" >Open <span aria-hidden>→</span></div> </a> </a> <a key="Documentation" href="/reports/seo" target="blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="text-base font-semibold" >Documentation</div> <div className="mt-1 text-sm text-white/75" >Technical notes and guides</div> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90" >Open <span aria-hidden>↗</span></div> </a> <a key="AI Changelog" href="/newsroom" target="blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="text-base font-semibold" >AI Changelog</div> <div className="mt-1 text-sm text-white/75" >Summarized autonomous changes and highlights</div> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90" >Open <span aria-hidden>↗</span></div> </a> <a key="Live Pipelines" href="/site-health" target="blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo" > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="text-base font-semibold" >Live Pipelines</div> <div className="mt-1 text-sm text-white/75" >Observe CI pipelines, logs, and artifacts</div> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90" >Open <span aria-hidden>↗</span></div> </a> </div> </section> {
  /* AUTO-GENERATED: FRONT FUTURIZER END */ 
}</div> <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70" > <Link href="/automation" ><a>Automations</a></a> <Link href="/newsroom" ><a>Newsroom</a></a> <Link href="/site-health" ><a>Site Health</a></a> <a href="/" target="blank" rel="noopener" >GitHub</a> </div> </div> </div> </footer> {
  /* AI Agents Gallery */ 
}<motion.section </a> </a>) ) 
}</div> </motion.section> {
  /* Capabilities Matrix */ 
}<motion.section <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="text-base font-semibold"> {
  item.title 
}</div> <div className="mt-1 text-sm text-white/75"> {
  item.desc 
}</div> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div> 
}</div> </motion.section> {
  /* Benefits Directory */ 
}<motion.section </a> </a>) ) 
}</div> </motion.section> {
  /* AUTO-GENERATED: FRONT ADS START */ 
}</div> </section> {
  /* AUTO-GENERATED: FRONT ADS END */ 
}{
  /* Feature Highlights (new) */ 
}<motion.section </a>) ) 
}</div> </motion.section> </a>) ) 
}</div> </section> </div> > ↑ Top </button>) 
}</div>) 
}/* AUTO-GENERATED: FRONT ACTIONS START */ </a> </div> </section> /* AUTO-GENERATED: FRONT ACTIONS END */
