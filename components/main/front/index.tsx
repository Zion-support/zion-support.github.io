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
              </a>
            ))}
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
  )
}

/* AUTO-GENERATED: FRONT_ACTIONS_START */
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
              </a>
  </div>
</section>
/* AUTO-GENERATED: FRONT_ACTIONS_END */
