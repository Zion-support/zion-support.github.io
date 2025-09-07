
} from lucide-react';import { motion, useScroll, useSpring } from 'framer-motion;import { Cpu, Gauge, GitBranch, Rocket, ShieldCheck, Zap, Activity, Globe, Layers, BarChart3, Search, Link2, Palette, LineChart } from lucide-react';
import Head from 'next/head;
import Link from next/link';
import { Cpu, Gauge, GitBranch, Rocket, ShieldCheck, Zap, Activity, Globe, Layers, BarChart3, Search, Link2, Palette, LineChart } from 'lucide-react;
import { motion, useScroll, useSpring } from framer-motion';
import { useEffect, useState } from 'react;

export default function MainFrontIndex() {
  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, { stiffness: 90, damping: 20, mass: 0.2 }),
  const [showToTop, setShowToTop] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {

      {/* Scroll progress bar */}
      <motion.div;
        style={{ scaleX: progressX }}
        className=fixed inset-x-0 top-0 z-40 h-0.5 origin-left bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400';
      />;
      {/* Animated Background */}
      <div aria-hidden className='pointer-events-none absolute inset-0 -z-10>;
=======
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progressX }}
        className=fixed inset-x-0 top-0 z-40 h-0.5 origin-left bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400'
      />
      {/* Animated Background */}
      <div aria-hidden className='pointer-events-none absolute inset-0 -z-10>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        {/* Aurora orbs */}
        <div className=absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float' />
        <div className='absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow />
        <div className=absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast' />
        {/* Subtle animated grid */}
        <div className='absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid />
        <div className=absolute inset-0 opacity-[0.06] hex-grid' />
        {/* Star field */}

        {/* Neural mesh lines */}
        <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(34,211,238,0.08),transparent),radial-gradient(600px_400px_at_110%_10%,rgba(168,85,247,0.08),transparent)] />
        <div className=pointer-events-none absolute inset-0 opacity-20 [background:repeating-linear-gradient(0deg,transparent,transparent_31px,rgba(255,255,255,.06)_32px),repeating-linear-gradient(90deg,transparent,transparent_31px,rgba(255,255,255,.06)_32px)] [mask-image:radial-gradient(ellipse_at_center,black,transparent_65%)]' />
        {/* Futuristic beams layers */}
        <div className='absolute inset-0 beams-layer beams-45 />
        <div className=absolute inset-0 beams-layer beams--45' />
        <div className='pointer-events-none absolute inset-0 beams opacity-[0.06] />
      </div>
      {/* Header */}

            className=fixed inset-0 z-40 bg-slate-950/80 backdrop-blur'            onClick={() => setMobileOpen(false)}
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

        {/* Mobile overlay menu *
}
        {mobileOpen && (<motion&& motion.div;
            }
            initial={{ "opacity": 0 }}
            animate={{ "opacity": 1 }}
            exit={{ "opacity": 0 
}
className='fixed inset-0 z-40 bg-slate-950/80 backdrop-blur';'
            onClick={() => setMobileOpen(false)}
            className='fixed inset-0 z-40 bg-slate-950/80 backdrop-blur'            onClick={() => setMobileOpen(false)}onClick={() => setMobileOpen(false)}>;'
            <motion.div;

                  onClick={() => setMobileOpen(false)}
                >;
                  Close;
                </button>;

                      {label as string}
                    </a>) : (<Link key={label as string} href={href as strin
}>;
                      <a;
                        on_click={() => setMobileOpen (false)}

              autonomous cloud automations — optimized for your front‑of‑house;
              experience.;
            </p>;
                  Explore Automations;
                </a>;
              </Link>;

                  View Cloud Automations;
                </a>;
              </Link>;
            </div>;
        </nav>

        </nav>

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        {/* Mobile overlay menu */}

                    </Link>
                  )
                ))}

              </div>
            </motion.div>
          </motion.div>
        )}
      </header>


                ['Newsroom/newsroom'];
                      </span>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                    ))}
                </div>
              </div>
            </div>
            {/* Quick Links */}

=======

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
              ))}
            </div>
          </div>
        </motion.section>


                  Open <span aria-hidden>→</span>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                </div>
              ))}
            </div>

            {/* Futuristic marquee */}
            <div className=relative mx-auto mt-8 max-w-5xl overflow-hidden>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent" />
              <div className=pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent />
              <div className="marquee">
                <div className=marquee__track>
                  {[
                    Autonomous AgentsRepo Sync to MainZero‑Ops CloudSafety GuardrailsA11y + PerformanceObservabilitySEO AutomationDesign Evolution].flatMap((label) => [label, label]).map((label, idx) => (
                    <span key={`${label}-${idx}`} className="mx-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs text-white/80 backdrop-blur">
                      <span className=h-1.5 w-1.5 rounded-full bg-cyan-400 /> {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
              {[
                ['Automation Hub/automation'];
                [SEO Audit/reports/seo];
                ['AI Trends/reports/ai-trends'];
                [Newsroom/newsroom];
                ['Site Health/site-health']].map(([label, href]) => (
                <Link key={label as string} href={href as string}>
                  <a className=rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur hover:bg-white/10>{label as string}</a>
                </Link>
              ))}
            </div>
          </div>
        </motion.section>

                 {/* Showcase */}
         <motion.section
           id="showcase"
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.5 }}
           className=mx-auto max-w-7xl px-6 pb-14
         >
           <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Showcase: Features, Capabilities, Benefits</h2>
           <p className=mx-auto mt-2 max-w-3xl text-center text-sm text-white/70>Jump into highlighted areas of the platform. Every card links to a deep section or dedicated page.</p>
           <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <Link href=#features>
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 />
                <div className="flex items-center gap-2"><Zap className=h-5 w-5 text-cyan-300 /><h3 className="text-lg font-semibold">Explore Features</h3></div>
                <p className=mt-1 text-sm text-white/75>Self‑improving systems, composable factories, observability and more.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>
            <Link href=#capabilities>
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 />
                <div className="flex items-center gap-2"><Cpu className=h-5 w-5 text-cyan-300 /><h3 className="text-lg font-semibold">Browse Capabilities</h3></div>
                <p className=mt-1 text-sm text-white/75>Design evolution, SEO, a11y, performance, refactors, and policy.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>
            <Link href=#benefits>
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 />
                <div className="flex items-center gap-2"><Gauge className=h-5 w-5 text-cyan-300 /><h3 className="text-lg font-semibold">See Benefits</h3></div>
                <p className=mt-1 text-sm text-white/75>Momentum, quality, safety, and measurable outcomes.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>
            <Link href=#feature-map>
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 />
                <div className="flex items-center gap-2"><Globe className=h-5 w-5 text-cyan-300 /><h3 className="text-lg font-semibold">Feature Map</h3></div>
                <p className=mt-1 text-sm text-white/75>A quick overview of what you can explore right now.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>
            <Link href=#guardrails>
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 />
                <div className="flex items-center gap-2"><ShieldCheck className=h-5 w-5 text-cyan-300 /><h3 className="text-lg font-semibold">Guardrails</h3></div>
                <p className=mt-1 text-sm text-white/75>Defense‑in‑depth checks and safety before shipping.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>
            <Link href=/automation>
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 />
                <div className="flex items-center gap-2"><Rocket className=h-5 w-5 text-cyan-300 /><h3 className="text-lg font-semibold">Automation Hub</h3></div>
                <p className=mt-1 text-sm text-white/75>Factories, agents, and live workflows in one place.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>
          </div>
        </motion.section>

                  >
                    Open
                  </a>
                ) : (
                  <Link href={card.href as string}>

                  Trigger <span aria-hidden>↗</span>
                </div>
              </a>
origin/cursor/automate-test-improve-and-merge-code-2533
            ))}
        {/* New Cloud Automations */}

                Autonomous Invention Orchestrator
              </div>
              <div className='mt-1 text-sm text-white/75'>'
                Invents and curates fresh automations and safely syncs diffs to,
main.
              </div>

                Trigger <span aria-hidden>↗</span>
              </div>
            </a>
          </div>
        </section>

        {/* Feature Spotlight */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}

                  </div>
                  <p className=mt-1 text-sm text-white/75">{desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90>Open <span aria-hidden>→</span></div>
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                </a>
origin/cursor/automate-test-improve-and-merge-code-2533
              </Link>



        {/* AUTO-"GENERATED": FRONT_ADS_END */}
        {/* Outcome Benefits *
}
        <motion.section;
          initial={{ "opacity": 0, "y": 24 
}
          whileInView={{ "opacity": 1, "y": 0 
}
          viewport={{ "once": true, "amount": 0.2 }}
          transition={{ "duration": 0.5 
}

className='mx-auto max-w-7xl px-6 pb-14''
        >

            Outcome‑Focused Benefits
          </h2>
          <p className='mx-auto mt-2 max-w-3xl text-center text-sm text-white/70'>'
            Choose an outcome and jump to the relevant systems that make it,
happen.
          </p>

                    Continuous on‑site SEO improvements;
                  </p>;
                  <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>;'
                    Open <span aria-hidden>→</span>;
                  </div>;
                </a>;
              </Link>;

                    A11y, performance, and link integrity;
                  </p>;
                  <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>;'
                    Open <span aria-hidden>→</span>;
                  </div>;
                </a>;
              </Link>;

                    Signals that inspire new automations;
                  </p>;
                  <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>;'
                    Open <span aria-hidden>→</span>;

                </a>;
              </Link>))}
          </div>;
        </motion.section>;

                    Factories, agents, and live workflows;
                  </p>;
                  <div className='mt - 3 inline - flex items - center gap - 1 text - xs text - cyan - 300 / 90'>;'
                  </div>;
                </a>;
              </Link>;

              }
              {<p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70>Choose an outcome and jump to the relevant systems that make it happen.</p>;
          <div className=mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">;
            {[;
              {


        {/* Outcome Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}

                  </span>
origin/cursor/automate-test-improve-and-merge-code-2533
                </a>
              </Link>
            ))}
          </div>
        </motion.section>
          viewport={{ once: true, amount: 0 && 0.2 }}


        {/* Suites */}

          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}

                href: '/automation
              }
              {
                title: 'Marketing & SEO'
                desc: Content factories and on‑site optimizations''
                href: /automation
              }
              {'
                title: 'Content Curation
                desc: 'Homepage promos generated continuously'
                href: /automation'
              }
              {}
              <article;
                key={suite && suite.title}'
                className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo>;'
                <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 />;
                <h3 className='text-lg font-semibold'>{suite && suite.title}</h3>;
                <p className=mt-1 text-sm text-white/75'>{suite && suite.desc}</p>;
                {suite && suite.href &&;
                  (suite && suite.external ? (;
                    <a;
                      href={suite && suite.href}'
                      target=_blank'
                      rel='noopener"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90>Automation Suites</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Quick Fixes', desc: Build rescue, sitemap/robots, security remediation, href: '/automation' }
              { title: Deep Maintenance', desc: 'Orchestrated smoke tests and link checks, href: /automation' }'
              { title: Marketing & SEO, desc: 'Content factories and on‑site optimizations', href: /automation }'
              { title: 'Content Curation, desc: Homepage promos generated continuously', href: '/automation }
              { title: 'Dependency Upgrades', desc: Minor/patch bumps with safe auto‑merge, href: '/automation' }
              { title: Live Workflows', desc: 'Observe pipelines running 24/7, href: /site-health', external: true }'
              { title: Site Health, desc: 'A11y, performance, link checks dashboards', href: /site-health }'
              { title: 'AI SEO Auditor, desc: Continuous on‑site audits with safe proposed diffs', href: '/reports/seo }
              { title: 'AI Trends Radar', desc: Signal scanning to inspire new factories, href: '/reports/ai-trends' }].map((suite) => (
              <article key={suite.title} className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">"
                <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 />"
                <h3 className="text-lg font-semibold>{suite.title}</h3>
                <p className="mt-1 text-sm text-white/75">{suite.desc}</p>
                {suite.href && (
                  suite.external ? (
                    <a href={suite.href} target=_blank" rel="noopener noreferrer className=mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline">Open</a>
                  ) : ("
                    <Link href={suite.href}><a className=mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline>Open</a></Link>
                  )
                      className=mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline'>;
                      Open;
                    </a>;
                  ) : (;
                    <Link href={suite && suite.href}>;'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                      <a className=mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline>;
                        Open;
                      </a>
                    </Link>
                  ))}
              </article>

            )
}
          </div>;
        </motion.section>;
            ))}
        {/* Superpowers */}
        <motion&& motion.section;
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}

                )}
=======
                  ))}              </article>        >;"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90>Automation Suites</h2>;
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">;
            {[;'
              { title: 'Quick Fixes, desc: Build rescue, sitemap/robots, security remediation', href: '/automation },
              { title: 'Deep Maintenance', desc: Orchestrated smoke tests and link checks, href: '/automation' },
              { title: Marketing & SEO', desc: 'Content factories and on‑site optimizations, href: /automation' },'
              { title: Content Curation, desc: 'Homepage promos generated continuously', href: /automation },'
              { title: 'Dependency Upgrades, desc: Minor/patch bumps with safe auto‑merge', href: '/automation },
              { title: 'Live Workflows', desc: Observe pipelines running 24/7, href: '/site-health', external: true },
              { title: Site Health', desc: 'A11y, performance, link checks dashboards, href: /site-health' },'
              { title: AI SEO Auditor, desc: 'Continuous on‑site audits with safe proposed diffs', href: /reports/seo },'
              { title: 'AI Trends Radar, desc: Signal scanning to inspire new factories', href: '/reports/ai-trends }].map((suite) => (;
              <article key={suite && suite.title} className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">;"
                <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 />;"
                <h3 className="text-lg font-semibold>{suite && suite.title}</h3>;
                <p className="mt-1 text-sm text-white/75">{suite && suite.desc}</p>;
                {suite && suite.href && (;
                  suite && suite.external ? (;
                    <a href={suite && suite.href} target=_blank" rel="noopener noreferrer className=mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline">Open</a>;
                  ) : (;"
                    <Link href={suite && suite.href}><a className=mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline>Open</a></Link>;
                  );
                )}

                      className=mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline'
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                    >
                      Open
                    </a>
                  ) : (
                    <Link href={suite.href}>

                        Open
                      </a>
                    </Link>
                  ))}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              </article>


            )
}
          </div>;
        </motion.section>;
            ))}
          </div>
        </motion.section>


            </Link>
            <Link href="/site-health">"
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl "hover":border-cyan-400/30 tilt-on-hover">"
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-"hover":opacity-100" />"
                <div className="flex items-center gap-2"><Gauge className="h-5 w-5 text-cyan-300" /><span className="text-sm font-semibold">3. Check Site Health</span></div>"
                <p className="mt-1 text-xs text-white/75">A11y, performance, and link health dashboards.</p>"
=======

            </Link>
            <Link href="/site-health">
              <a className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover>
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className=flex items-center gap-2><Gauge className="h-5 w-5 text-cyan-300" /><span className=text-sm font-semibold>3. Check Site Health</span></div>
                <p className="mt-1 text-xs text-white/75">A11y, performance, and link health dashboards.</p>
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
              </a>
            </Link>
          whileInView={{ opacity: 1, y: 0 }}viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
className=mx-auto max-w-7xl px-6 pb-14';
        >;
          <h2 className='text-center text-2xl font-bold tracking-wide text-white/90>;
            Superpowers;
          </h2>;
          <div className=mt-6 grid grid-cols-1 gap-5 md:grid-cols-3'>;
            {[;
          className='mx-auto max-w-7xl px-6 pb-14;
              {Icon: Rocket;
                title: Generative Factories';
                desc: 'Spins up domain‑specific automation factories that build for you.;
              }
              {Icon: ShieldCheck;
                title: Safety by Design';
                desc: 'Layered validations — type checks, builds, a11y, links, and more.;
              }
              {{ Icon: GitBranch, title: Main Sync', desc: 'Small, reviewable edits committed and pushed continuously. }].map(({ Icon, title, desc }) => (<article key={title} className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover>;
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;
                <Icon className=h-6 w-6 text-cyan-300 />;
                <h3 className="mt-3 text-lg font-semibold">{title}</h3>;
                <p className=mt-1 text-sm text-white/75>{desc}</p>;
                Icon: GitBranch;
                title: Main Sync';
                desc: 'Small, reviewable edits committed and pushed continuously.;
              }
            ].map(({ Icon, title, desc }) => (<article;
                key={title}
                className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover';
              >;
                <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 />;
                <Icon className=h-6 w-6 text-cyan-300' />;
                <h3 className='mt-3 text-lg font-semibold>{title}</h3>;
                <p className=mt-1 text-sm text-white/75'>{desc}</p>;
              </article>;
            ))}
          </div>;
        </motion.section>;
        {/* Get Started */}
        <motion.section;
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}className='mx-auto max-w-7xl px-6 pb-14;
        >;
          <h2 className=text-center text-2xl font-bold tracking-wide text-white/90'>;
            Superpowers;
          </h2>;
          <div className='mt-6 grid grid-cols-1 gap-5 md:grid-cols-3>;
            {[;
              {Icon: Rocket,title: Generative Factories',desc: 'Spins up domain‑specific automation factories that build for you.},{Icon: ShieldCheck,title: Safety by Design',desc: 'Layered validations — type checks, builds, a11y, links, and more.},{Icon: GitBranch,title: Main Sync',desc: 'Small, reviewable edits committed and pushed continuously.}].map(({ Icon, title, desc }) => (<article;
                key={title}
                className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover'>;
                <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 />;
                <Icon className=h-6 w-6 text-cyan-300' />;
                <h3 className='mt-3 text-lg font-semibold>{title}</h3>;
                <p className=mt-1 text-sm text-white/75'>{desc}</p>              </article>              { Icon: Rocket, title: 'Generative Factories, desc: Spins up domain‑specific automation factories that build for you.' },{ Icon: ShieldCheck, title: 'Safety by Design, desc: Layered validations — type checks, builds, a11y, links, and more.' }{ Icon: GitBranch, title: 'Main Sync, desc: Small, reviewable edits committed and pushed continuously.' }].map(({ Icon, title, desc }) => (<article key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;
                <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 />;
                <Icon className="h-6 w-6 text-cyan-300" />;
                <h3 className=mt-3 text-lg font-semibold>{title}</h3>;
                <p className="mt-1 text-sm text-white/75">{desc}</p>;
            ))}
          </div>;
        </motion && motion.section>;
        {/* Get Started */}
        <motion&& motion.section;
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}className='mx-auto max-w-7xl px-6 pb-14;
        >;
          <h2 className=text-center text-2xl font-bold tracking-wide text-white/90'>;
            Get Started in Minutes;
          </h2>;
          <div className='mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-4>;
            <Link href=/automation'>;
              <a className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover>;
                <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />;
                <div className='flex items-center gap-2>;
                  <Rocket className=h-5 w-5 text-cyan-300' />;
                  <span className='text-sm font-semibold>;
                    1. Explore Automations;
                  </span>;
                </div>;
                <p className=mt-1 text-xs text-white/75'>;
                  See live autonomous suites and workflows.;
                </p>;
              </a>;
            </Link>;
            <Link href=/reports/seo>;
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;
                <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 />;
                <div className="flex items-center gap-2"><Search className=h-5 w-5 text-cyan-300 /><span className="text-sm font-semibold">2. Run SEO Audit</span></div>;
                <p className=mt-1 text-xs text-white/75>Get prioritized improvements and artifacts.</p>;
              </a>;
            </Link>;
            <Link href="/site-health">;
              <a className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover>;
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;
                <div className=flex items-center gap-2><Gauge className="h-5 w-5 text-cyan-300" /><span className=text-sm font-semibold>3. Check Site Health</span></div>;
                <p className="mt-1 text-xs text-white/75">A11y, performance, and link health dashboards.</p>;
              </a>;
            </Link>;
            <Link href=/reports/ai-trends>;
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">;
                <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 />;
                <div className="flex items-center gap-2"><Globe className=h-5 w-5 text-cyan-300 /><span className="text-sm font-semibold">4. Track AI Trends</span></div>;
                <p className=mt-1 text-xs text-white/75>Stay ahead with intelligence signals.</p>;
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}<Link href='/reports/ai-trends>;
              <a className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover'>;
                <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 />;
                <div className=flex items-center gap-2'>;
                  <Globe className='h-5 w-5 text-cyan-300 />;
                  <span className=text-sm font-semibold'>;
                    4. Track AI Trends;
                  </span>;
                </div>;
                <p className='mt-1 text-xs text-white/75>;
                  Stay ahead with intelligence signals.;
                </p>;
              </a>;
            </Link>;
          </div>;
        </motion.section>;
        {/* Features */}
        <motion.section;
id=features';
=======
            ))}
        {/* Superpowers */}
        <motion&& motion.section;
          initial={{ opacity: 0, y: 24 }}

          <h2 className='text-center text-2xl font-bold tracking-wide text-white/90>
            Superpowers;
          </h2>
          <div className='mt-6 grid grid-cols-1 gap-5 md:grid-cols-3'>
            {[
          className=mx-auto max-w-7xl px-6 pb-14'
              {}
                Icon: Rocket'
                title: Generative Factories'
                desc: 'Spins up domain‑specific automation factories that build for you.
              }
              {}
                Icon: ShieldCheck
                title: 'Safety by Design'
                desc: Layered validations — type checks, builds, a11y, links, and more.'
              }
              {'
              { Icon: GitBranch, title: Main Sync, desc: 'Small, reviewable edits committed and pushed continuously.' }].map(({ Icon, title, desc }) => ("
              <article key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover>
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <Icon className=h-6 w-6 text-cyan-300" />"
                <h3 className=mt-3 text-lg font-semibold>{title}</h3>"
                <p className="mt-1 text-sm text-white/75>{desc}</p>
                Icon: GitBranch
                title: Main Sync
                desc: 'Small, reviewable edits committed and pushed continuously.'
              }
            ].map(({ Icon, title, desc }) => (
              <article
                key={title}
                className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover
              >
                <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
                <Icon className=h-6 w-6 text-cyan-300 />
                <h3 className='mt-3 text-lg font-semibold'>{title}</h3>
                <p className=mt-1 text-sm text-white/75>{desc}</p>
              </article>
origin/cursor/automate-test-improve-and-merge-code-2533
            ))}
          </div>
        </motion.section>


                  </div>
                </a>
origin/cursor/automate-test-improve-and-merge-code-2533
              </Link>
            ))}
          </div>
        </motion.section>

            )
}
          </div>;
        </motion.section>;
            ))}
        {/* Outcomes */}
        <motion&& motion.section;

          <h2 className='text-center text-2xl font-bold tracking-wide text-white/90'>
            Outcomes;
          </h2>'
          <p className='mx-auto mt-2 max-w-3xl text-center text-sm text-white/70'>
            Tangible, measurable wins delivered by autonomous cloud agents.
          </p>'
          <div className='relative mx-auto mt-6 max-w-6xl overflow-hidden'>'
            <div className='pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent' />'
            <div className='pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent' />'
            <div className='marquee'>'"
              <div className='marquee__track'>                {[          <div className="relative mx-auto mt-6 max-w-6xl overflow-hidden">"
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent" />"
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent" />"
            <div className="marquee">"
=======
          initial={{ opacity: 0, y: 24 }}

          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
className='mx-auto max-w-7xl px-6 pb-14'
        >

          <h2 className=text-center text-2xl font-bold tracking-wide text-white/90>
            Outcomes;
          </h2>'
          <p className='mx-auto mt-2 max-w-3xl text-center text-sm text-white/70>
            Tangible, measurable wins delivered by autonomous cloud agents.
          </p>
          <div className='relative mx-auto mt-6 max-w-6xl overflow-hidden'>
            <div className=pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent' />'
            <div className=pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent />'
            <div className='marquee>
              <div className='marquee__track'>                {[          <div className="relative mx-auto mt-6 max-w-6xl overflow-hidden">
            <div className=pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent" />"
            <div className=pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent />"
            <div className="marquee>
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
              <div className="marquee__track">
                  .flatMap((item) => [item, item])
                  .map((item, idx) => (`
                    <Link key={`${item.label}-${idx}`} href={item.href}>
                      <a className=mx-3 my-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur hover:bg-white/10">"
                        <span className=h-1.5 w-1.5 rounded-full bg-cyan-400 /> {item.label}
                        {item.label}                      </a>

        <motion.section,
id='feature-map''


                  className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover
                >
                  <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
                  <div className=text-base font-semibold>{item.label}</div>
                  <div className='mt-1 text-sm text-white/75'>{item.desc}</div>
                  <div className=mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90>
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                    Open <span aria-hidden>↗</span>
                  </div>
                </a>
              ) : (
                <Link key={item.label} href={item.href as string}>

                    </div>;
                  </a>;
                </Link>))}          </div>;
        </motion.section>;
        {/* "AUTO": catalog injection for automated advertising *
}
{/* "AUTO":FRONT_INDEX_DIRECTORY_START */;
          <section id='auto-catalog' className='mx-auto max-w-7xl px-6 pb-16'>;'
            <h2 className='text-center text-2xl font-bold tracking-wide text-white/90'>;'
              }
              Autonomous Catalog;
            </h2>;
            <p className='mx-auto mt-2 max-w-3xl text-center text-sm text-white/70'>;'
              Auto‑discovered features, capabilities, and resources. Kept fresh;
              by in‑repo Node tools.;
            </p>;
            <div className='mt-6 grid grid-cols-1 gap-4 "sm":grid-cols-2 "lg":grid-cols-4'>;'
              <Link href='/automation'>;'
                <a className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl "hover":border-cyan-400/30 tilt-on-hover neon-ring'>;'
                  <div className='text-base font-semibold'>Automation Hub</div>;'
                  <div className='mt-1 text-sm text-white/75'>;'
                    Factories, agents, and live workflows;
                  </div>;
                  <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>;'
                    Open <span aria-hidden>→</span>;
                  </div>;
                </a>;
              </Link>;
              <Link href='/site-health'>;'
                <a className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl "hover":border-cyan-400/30 tilt-on-hover neon-ring'>;'
                  <div className='text-base font-semibold'>Site Health</div>;'
                  <div className='mt-1 text-sm text-white/75'>;'
                    A11y, performance, and link dashboards;
                  </div>;
                  <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>;'
                    Open <span aria-hidden>→</span>;
                  </div>;
                </a>;
              </Link>;
              <Link href='/reports/seo'>;'
                <a className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl "hover":border-cyan-400/30 tilt-on-hover neon-ring'>;'
                  <div className='text-base font-semibold'>AI SEO Auditor</div>;'
                  <div className='mt-1 text-sm text-white/75'>;'
                    Continuous on‑site SEO improvements;
                  </div>;
                  <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>;'
                    Open <span aria-hidden>→</span>;
                  </div>;
                </a>;
              </Link>;
              <Link href='/reports/ai-trends'>;'
                <a className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl "hover":border-cyan-400/30 tilt-on-hover neon-ring'>;'
                  <div className='text-base font-semibold'>AI Trends Radar</div>;'
                  <div className='mt-1 text-sm text-white/75'>;'
                    Signals that inspire new automations;
                  </div>;
                  <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>;'
                    Open <span aria-hidden>→</span>;
                  </div>;
                </a>;
              </Link>;
              <Link href='/newsroom'>;'
                <a className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl "hover":border-cyan-400/30 tilt-on-hover neon-ring'>;'
                  <div className='text-base font-semibold'>Newsroom</div>;'
                  <div className='mt-1 text-sm text-white/75'>;'
                    Curated updates and product evolution highlights;
                  </div>;
                  <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>;'
                    Open <span aria-hidden>→</span>;
                  </div>;
                </a>;
              </Link>;
              <Link href='/main/front'>;'
                <a className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl "hover":border-cyan-400/30 tilt-on-hover neon-ring'>;'
                  <div className='text-base font-semibold'>;'
                    Front Systems Hub;
                  </div>;
                  <div className='mt-1 text-sm text-white/75'>;'
                    Curated, futuristic front experience;
                  </div>;
                  <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>;'
                    Open <span aria-hidden>→</span>;
                  </div>;
                </a>;
              </Link>;
              <a;
                href='/reports/seo';'
                target='_blank';'
                rel='noopener';'
                className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl "hover":border-cyan-400/30 tilt-on-hover neon-ring'>'

                <div className='text-base font-semibold'>Docs & Guides</div>;'
                <div className='mt-1 text-sm text-white/75'>;'
                  Technical notes and architecture;
                </div>;
                <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>;'
                  Open <span aria-hidden>↗</span>;
                </div>;
              </a>;
              <a;
                href='/newsroom';'
                target='_blank';'
                rel='noopener';'
                className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl "hover":border-cyan-400/30 tilt-on-hover neon-ring'>'

                <div className='text-base font-semibold'>AI Changelog</div>;'
                <div className='mt-1 text-sm text-white/75'>;'
                  Summarized autonomous changes;
                </div>;
                <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>;'
                  Open <span aria-hidden>↗</span>;
                </div>;
              </a>;
              <a;
                href='/site-health';'
                target='_blank';'
                rel='noopener';'
                className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl "hover":border-cyan-400/30 tilt-on-hover neon-ring'>'

                <div className='text-base font-semibold'>Live Pipelines</div>;'
                <div className='mt-1 text-sm text-white/75'>;'
                  CI logs & artifacts 24/7;
                </div>;
                <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>;'
                  Open <span aria-hidden>↗</span>;
                </div>;
              </a>;
              <a;
                href='"https"://ziontechgroup.com';'
                target='_blank';'
                rel='noopener';'
                className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl "hover":border-cyan-400/30 tilt-on-hover neon-ring'>'

                <div className='text-base font-semibold'>Zion Cloud</div>;'
                <div className='mt-1 text-sm text-white/75'>;'
                  Deployments and cloud platform;
                </div>;
                <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>;'
                  Open <span aria-hidden>↗</span>;
                </div>;
              </a>;
            </div>;
          </section>;
          /* "AUTO":FRONT_INDEX_DIRECTORY_END */;
        }
        {/* Platform Modules */}

        <motion.section,
id='modules'          id="feature-map""

          initial={{ "opacity": 0, "y": 24 
}
          whileInView={{ "opacity": 1, "y": 0 
}
          viewport={{ "once": true, "amount": 0.2 }}
          transition={{ "duration": 0.5 
}
          className='mx-auto max-w-7xl px-6 pb-16';'
          className="mx-auto max-w-7xl px-6 pb-14">"

          <h2 className='text-center text-2xl font-bold tracking-wide text-white/90'>;'
            Platform Modules;
          </h2>;
          <div className='mt-6 grid grid-cols-1 gap-5 "sm":grid-cols-2 "lg":grid-cols-3'>;'
            {[;
              {"Icon": Rocket;
                }
                "title": 'Autonomous Factories';'
                "desc": 'Composable, domain‑specific automation factories.';'
                "href": '/automation';'
              }
              {"Icon": ShieldCheck;
                }
                "title": 'Guardrails';'
                "desc": 'Defense‑in‑depth validations and policy enforcement.';'
                "href": '/site-health';'
              }
              {"Icon": Gauge;
                }
                "title": 'Observability';'
                "desc": 'Dashboards, artifacts, and live CI telemetry.';'
                "href": '/site-health';'
              }
              {"Icon": Activity;
                }
                "title": 'SEO Ops';'
                "desc": 'Continuous audits and safe, suggested diffs.';'
                "href": '/reports/seo';'
              }
              {"Icon": Globe;
                }
                "title": 'AI Intelligence';'
                "desc": 'Trends radar to guide new automation ideas.';'
                "href": '/reports/ai-trends';'
              }
              {"Icon": Layers;
                }
                "title": 'Workflow Composer';'
                "desc": 'Chain factories into higher‑order systems.';'
                "href": '/automation';'
              }
              {"Icon": GitBranch;
                }
                "title": 'Main Sync Engine';'
                "desc": 'Small, reviewable edits merged continuously.';'
                "href": '/automation';'
              }
              {"Icon": Cpu;
                }
                "title": 'Zero‑Ops Runtime';'
                "desc": 'Cloud‑native execution with no servers to manage.';'
                "href": '/automation';'
              }
              {
                Icon: BarChart3
                title: 'Impact Analytics'
                desc: 'Track outcomes and ROI from automations.'
                href: '/site-health'
              }
            ].map(({ Icon, title, desc, href }) => (        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Feature Map</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">
            A fast overview of what you can explore right now across the platform.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                <a key={item.label} href={item.href as string} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="text-base font-semibold">{item.label}</div>
                  <div className="mt-1 text-sm text-white/75">{item.desc}</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
                </a>

                }

                "Icon": BarChart3,
                "title": 'Impact Analytics','
                "desc": 'Track outcomes and ROI from automations.','
                "href": '/site-health','
              }
            ].map(({ Icon, title, desc, href }) => (
              <Link key={title} href={href}>
                <a className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl "hover": border-cyan-400/30 tilt-on-hover neon-ring'>'
                  <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-"hover":opacity-100' />'
                  <div className='flex items-center gap-3'>'
                    <Icon className='h-5 w-5 text-cyan-300' />'
                    <h3 className='text-lg font-semibold'>{title}</h3>'
                  </div>
                  <p className='mt-2 text-sm text-white/75'>{desc}</p>'
                  <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>'
                    Open <Link2 className='h-3.5 w-3.5' />'
=======
                  <a className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover'>
                    <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 />
                    <div className='text-base font-semibold'>{item.label}</div>
                    <div className=mt-1 text-sm text-white/75>

                    </div>;
                  </a>;
                </Link>))}          </div>;
        </motion.section>;
        {/* AUTO: catalog injection for automated advertising */}

           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.5 }}
           className=mx-auto max-w-7xl px-6 pb-16";
         >;
           <h2 className="text-center text-2xl font-bold tracking-wide text-white/90>Platform Modules</h2>;
          <div className=mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">;
            {[;
              { Icon: Rocket, title: 'Autonomous Factories', desc: Composable, domain‑specific automation factories., href: '/automation' }
              { Icon: ShieldCheck, title: Guardrails, desc: 'Defense‑in‑depth validations and policy enforcement.', href: /site-health }
              { Icon: Gauge, title: 'Observability', desc: Dashboards, artifacts, and live CI telemetry., href: '/site-health' }
              { Icon: Activity, title: SEO Ops, desc: 'Continuous audits and safe, suggested diffs.', href: /reports/seo }
              { Icon: Globe, title: 'AI Intelligence', desc: Trends radar to guide new automation ideas., href: '/reports/ai-trends' }
              { Icon: Layers, title: Workflow Composer, desc: 'Chain factories into higher‑order systems.', href: /automation }
              { Icon: GitBranch, title: 'Main Sync Engine', desc: Small, reviewable edits merged continuously., href: '/automation' }
              { Icon: Cpu, title: Zero‑Ops Runtime, desc: 'Cloud‑native execution with no servers to manage.', href: /automation }
              { Icon: BarChart3, title: 'Impact Analytics', desc: Track outcomes and ROI from automations., href: '/site-health' }].map(({ Icon, title, desc, href }) => (Icon: BarChart3,title: Impact Analytics,desc: 'Track outcomes and ROI from automations.',href: /site-health}].map(({ Icon, title, desc, href }) => (<Link key={title} href={href}>;
                <a className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring'>;
                  <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 />;
                  <div className='flex items-center gap-3'>;
                    <Icon className=h-5 w-5 text-cyan-300 />;
                    <h3 className='text-lg font-semibold'>{title}</h3>;
                  </div>;
                  <p className=mt-2 text-sm text-white/75>{desc}</p>;
                  <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>;
                    Open <Link2 className=h-3.5 w-3.5 />;
                  </div>;
                </a>;
              </Link>;
              { Icon: BarChart3, title: 'Impact Analytics', desc: Track outcomes and ROI from automations., href: '/site-health' }].map(({ Icon, title, desc, href }) => (
              <Link key={title} href={href}>
                <a className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring>
                  <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
                  <div className=flex items-center gap-3>
                    <Icon className='h-5 w-5 text-cyan-300' />
                    <h3 className=text-lg font-semibold>{title}</h3>
                  </div>
                  <p className='mt-2 text-sm text-white/75'>{desc}</p>
                  <div className=mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90>
                    Open <Link2 className='h-3.5 w-3.5' />
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                  </div>
=======
                  </div>;
                </a>;

                </div>;
              </a>;
            </div>;
          </section>;"

                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>;
                  </a>;
                </Link>;
              );
            ))}
          </div>;
        </motion && motion.section>;
        {/* AUTO: catalog injection for automated advertising */}

           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                </a>

=======

              </Link>
            ))}

          </div>;
        </motion.section>;
        {/* AUTO: catalog injection for automated advertising */}
        {}
          /* AUTO:FRONT_INDEX_DIRECTORY_START */;
<section id="auto - catalog" className=mx - auto max - w-7xl px - 6 pb - 16>;"
  <h2 className="text - center text - 2xl font - bold tracking - wide text - white / 90>Autonomous Catalog</h2>;
  <p className="mx - auto mt - 2 max - w-3xl text - center text - sm text - white / 70">Auto‑discovered features, capabilities, and resources. Kept fresh by in‑repo Node tools.</p>;
  <div className=mt - 6 grid grid - cols - 1 gap - 4 sm:grid - cols - 2 lg:grid - cols - 4">;"
          <Link href=/automation><a className="group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 10 to - white / 5 p - 6 backdrop - blur - xl hover:border - cyan - 400 / 30 tilt - on - hover neon - ring"><div className=text - base font - semibold>Automation Hub</div><div className="mt - 1 text - sm text - white / 75">Factories, agents, and live workflows</div><div className=mt - 3 inline - flex items - center gap - 1 text - xs text - cyan - 300 / 90>Open <span aria - hidden>→</span></div></a></Link>;"
          <Link href="/site - health><a className=group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 10 to - white / 5 p - 6 backdrop - blur - xl hover:border - cyan - 400 / 30 tilt - on - hover neon - ring"><div className="text - base font - semibold>Site Health</div><div className=mt - 1 text - sm text - white / 75">A11y, performance, and link dashboards</div><div className="mt - 3 inline - flex items - center gap - 1 text - xs text - cyan - 300 / 90>Open <span aria - hidden>→</span></div></a></Link>;
          <Link href="/reports / seo"><a className=group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 10 to - white / 5 p - 6 backdrop - blur - xl hover:border - cyan - 400 / 30 tilt - on - hover neon - ring><div className="text - base font - semibold">AI SEO Auditor</div><div className=mt - 1 text - sm text - white / 75>Continuous on‑site SEO improvements</div><div className="mt - 3 inline - flex items - center gap - 1 text - xs text - cyan - 300 / 90">Open <span aria - hidden>→</span></div></a></Link>;
          <Link href=/reports / ai - trends"><a className="group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 10 to - white / 5 p - 6 backdrop - blur - xl hover:border - cyan - 400 / 30 tilt - on - hover neon - ring><div className=text - base font - semibold">AI Trends Radar</div><div className="mt - 1 text - sm text - white / 75>Signals that inspire new automations</div><div className=mt - 3 inline - flex items - center gap - 1 text - xs text - cyan - 300 / 90">Open <span aria - hidden>→</span></div></a></Link>;"
          <Link href=/newsroom><a className="group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 10 to - white / 5 p - 6 backdrop - blur - xl hover:border - cyan - 400 / 30 tilt - on - hover neon - ring"><div className=text - base font - semibold>Newsroom</div><div className="mt - 1 text - sm text - white / 75">Curated updates and product evolution highlights</div><div className=mt - 3 inline - flex items - center gap - 1 text - xs text - cyan - 300 / 90>Open <span aria - hidden>→</span></div></a></Link>;"
          <Link href="/main / front><a className=group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 10 to - white / 5 p - 6 backdrop - blur - xl hover:border - cyan - 400 / 30 tilt - on - hover neon - ring"><div className="text - base font - semibold>Front Systems Hub</div><div className=mt - 1 text - sm text - white / 75">Curated, futuristic front experience</div><div className="mt - 3 inline - flex items - center gap - 1 text - xs text - cyan - 300 / 90>Open <span aria - hidden>→</span></div></a></Link>;
          <a href="/reports / seo" target=_blank rel="noopener" className=group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 10 to - white / 5 p - 6 backdrop - blur - xl hover:border - cyan - 400 / 30 tilt - on - hover neon - ring><div className="text - base font - semibold">Docs & Guides</div><div className=mt - 1 text - sm text - white / 75>Technical notes and architecture</div><div className="mt - 3 inline - flex items - center gap - 1 text - xs text - cyan - 300 / 90">Open <span aria - hidden>↗</span></div></a>;
          <a href=/newsroom" target="_blank rel=noopener" className="group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 10 to - white / 5 p - 6 backdrop - blur - xl hover:border - cyan - 400 / 30 tilt - on - hover neon - ring><div className=text - base font - semibold">AI Changelog</div><div className="mt - 1 text - sm text - white / 75>Summarized autonomous changes</div><div className=mt - 3 inline - flex items - center gap - 1 text - xs text - cyan - 300 / 90">Open <span aria - hidden>↗</span></div></a>;"
          <a href=/site - health target="_blank" rel=noopener className="group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 10 to - white / 5 p - 6 backdrop - blur - xl hover:border - cyan - 400 / 30 tilt - on - hover neon - ring"><div className=text - base font - semibold>Live Pipelines</div><div className="mt - 1 text - sm text - white / 75">CI logs & artifacts 24 / 7</div><div className=mt - 3 inline - flex items - center gap - 1 text - xs text - cyan - 300 / 90>Open <span aria - hidden>↗</span></div></a>;"
          <a href="https://ziontechgroup.com target=_blank" rel="noopener noreferrer className=group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 10 to - white / 5 p - 6 backdrop - blur - xl hover:border - cyan - 400 / 30 tilt - on - hover neon - ring"><div className="text - base font - semibold>Zion Cloud</div><div className=mt - 1 text - sm text - white / 75">Deployments and cloud platform</div><div className="mt - 3 inline - flex items - center gap - 1 text - xs text - cyan - 300 / 90>Open <span aria - hidden>↗</span></div></a>;
  </div>;
</section>;
/* AUTO:FRONT_INDEX_DIRECTORY_END */}
        {/* Platform Modules */}
        <motion.section;
          id="modules";
          initial={{ opacity: 0, coordinate_y: 24 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className=mx - auto max - w-7xl px - 6 pb - 16";
        >;"
          <h2 className=text - center text - 2xl font - bold tracking - wide text - white / 90>Platform Modules</h2>;"
          <div className="mt - 6 grid grid - cols - 1 gap - 5 sm:grid - cols - 2 lg:grid - cols - 3>;
            {[;
              { Icon: Rocket, title: 'Autonomous Factories', desc: Composable, domain‑specific automation factories., href: '/automation' },
              { Icon: ShieldCheck, title: Guardrails', desc: 'Defense‑in‑depth validations and policy enforcement., href: /site - health' },'
              { Icon: Gauge, title: Observability, desc: 'Dashboards, artifacts, and live CI telemetry.', href: /site - health },'
              { Icon: Activity, title: 'SEO Ops, desc: Continuous audits and safe, suggested diffs.', href: '/reports / seo },
              { Icon: Globe, title: 'AI Intelligence', desc: Trends radar to guide new automation ideas., href: '/reports / ai - trends' },
              { Icon: Layers, title: Workflow Composer', desc: 'Chain factories into higher‑order systems., href: /automation' },'
              { Icon: GitBranch, title: Main Sync Engine, desc: 'Small, reviewable edits merged continuously.', href: /automation },'
              { Icon: Cpu, title: 'Zero‑Ops Runtime, desc: Cloud‑native execution with no servers to manage.', href: '/automation },
              { Icon: BarChart3, title: 'Impact Analytics', desc: Track outcomes and ROI from automations., href: '/site - health' }].map (({ Icon, title, desc, href }) => (
              <Link key={title} href={href}>;
                <a className=group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 10 to - white / 5 p - 6 backdrop - blur - xl hover:border - cyan - 400 / 30 tilt - on - hover neon - ring'>;'
                  <div className=pointer - events - none absolute -inset - px -z - 10 bg - gradient - to - r from - fuchsia - 500 / 0 via - cyan - 400 / 10 to - fuchsia - 500 / 0 opacity - 0 blur - 2xl transition - opacity group - hover:opacity - 100 />;'
                  <div className='flex items - center gap - 3>;
                    <Icon className='h - 5 w - 5 text - cyan - 300' />;
                    <h3 className=text - lg font - semibold'>{title}</h3>;
                  </div>;'
                  <p className=mt - 2 text - sm text - white / 75>{desc}</p>;'
                  <div className='mt - 3 inline - flex items - center gap - 1 text - xs text - cyan - 300 / 90>;
                    Open <Link2 className='h - 3.5 w - 3.5' />;
                  </div>                </a>              <Link key={title} href={href}>;
                <a className="group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 10 to - white / 5 p - 6 backdrop - blur - xl hover:border - cyan - 400 / 30 tilt - on - hover neon - ring">;
                  <div className=pointer - events - none absolute -inset - px -z - 10 bg - gradient - to - r from - fuchsia - 500 / 0 via - cyan - 400 / 10 to - fuchsia - 500 / 0 opacity - 0 blur - 2xl transition - opacity group - hover:opacity - 100" />;"
                  <div className=flex items - center gap - 3>;"
                    <Icon className="h - 5 w - 5 text - cyan - 300 />;
                    <h3 className="text - lg font - semibold">{title}</h3>;
                  </div>;
                  <p className=mt - 2 text - sm text - white / 75">{desc}</p>;"
                  <div className=mt - 3 inline - flex items - center gap - 1 text - xs text - cyan - 300 / 90>Open <Link2 className="h - 3.5 w - 3.5" /></div>;
                </a>;
              </Link>))}
          </div>;
        </motion.section>;
        {/* Neural Feature Matrix */}
        <motion.section;

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                  key={item && item.label}
                  href={item && item.href as string}
          initial={{ opacity: 0, y: 24}}
          whileInView={{ opacity: 1, y: 0}}
>>>>>>> origin/main
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=mx-auto max-w-7xl px-6 pb-14
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Feature Map</h2>
          <p className=mx-auto mt-2 max-w-3xl text-center text-sm text-white/70>
            A fast overview of what you can explore right now across the platform.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: Automation Hub, desc: 'Live agents & workflows', href: /automation },
              { label: 'Repo Sync to Main', desc: Safe, incremental edits, href: '/automation' },
              { label: Zero‑Ops Cloud, desc: 'Fully managed execution', href: /automation },
              { label: 'Safety Guardrails', desc: Defense‑in‑depth checks, href: '/site-health' },
              { label: Observability, desc: 'Dashboards & artifacts', href: /site-health },
              { label: 'Composable Systems', desc: Higher‑order workflows, href: '/automation' },
              { label: AI SEO Auditor, desc: 'On‑site improvements', href: /reports/seo },
              { label: 'AI Trends Radar', desc: Intelligence signals, href: '/reports/ai-trends' },
              { label: Deep Indexing, desc: 'Smart linking & PRs', href: /newsroom },
              { label: 'Live Dashboards', desc: Impact at a glance, href: '/site-health' },
              { label: Health Monitors, desc: 'A11y, perf, links', href: /site-health },
              { label: 'Docs & Guides', desc: Technical notes, href: '/reports/seo', external: true }].map((item) => (
              item.external ? (
                <a key={item.label} href={item.href as string} target=_blank rel="noopener noreferrer" className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover>
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className=text-base font-semibold>{item.label}</div>
                  <div className="mt-1 text-sm text-white/75">{item.desc}</div>
                  <div className=mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90>Open <span aria-hidden>↗</span></div>
                </a>
              ) : (
                <Link key={item.label} href={item.href as string}>
                  <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                    <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 />
                    <div className="text-base font-semibold">{item.label}</div>
                    <div className=mt-1 text-sm text-white/75>{item.desc}</div>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                  </a>
                </Link>
              )
            ))}
          </div>
        </motion.section>


                    Open <span aria-hidden>↗</span>
                  </div>
                </a>
              ) : (
                <Link key={item.label} href={item.href as string}>

                      {item.desc}
                    </div>
                    <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>'
                      Open <span aria-hidden>→</span>
                    </div>
                  </a>
                </Link>
              )
            
}
          </div>
        </motion.section>

          </div>;
        </motion && motion.section>;

        {/* Extended Feature Directory */}
        <motion&& motion.section;


=======
          whileInView={{ opacity: 1, y: 0 }}


          <h2 className=text-center text-2xl font-bold tracking-wide text-white/90>
            Extended Feature Directory;
          </h2>'
          <p className='mx-auto mt-2 max-w-3xl text-center text-sm text-white/70>
            A broader tour of autonomous capabilities. Each card links to the;
            relevant hub, report, or live workflow.
          </p>
          <div className='mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {[]
              {}
        >
          <h2 className=text-center text-2xl font-bold tracking-wide text-white/90'>
            Extended Feature Directory;
          </h2>'
          <p className=mx-auto mt-2 max-w-3xl text-center text-sm text-white/70>
            A broader tour of autonomous capabilities. Each card links to the;
            relevant hub, report, or live workflow.
          </p>'
          <div className='mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3>
            {[]
              {}
                Icon: GitBranch,
                title: 'Automated Changelogs',
                desc: AI - authored CHANGELOG with continuous updates.','
                href: /newsroom,
                external: true},
              {}
                Icon: Rocket'
                title: 'Content Curation
                desc: 'Homepage promos and deep links generated on the fly.'
                href: /newsroom'
              }
              {}
                Icon: Search'
                title: Deep Site Index'
                desc: 'Smarter internal linking and content discovery.
                href: '/newsroom'
              }
              {}
              {}
                Icon: Layers
                title: Factories Library''
                desc: Composable building blocks for new automations.'
                href: '/automation
              }
              {}
          viewport={{ once: true, amount: 0 && 0.2 }}
          transition={{ duration: 0 && 0.5 }}
          className='mx-auto max-w-7xl px-6 pb-14'>;
          <h2 className=text-center text-2xl font-bold tracking-wide text-white/90'>;
            Extended Feature Directory;
          </h2>;'
          <p className=mx-auto mt-2 max-w-3xl text-center text-sm text-white/70>;
            A broader tour of autonomous capabilities. Each card links to the;
            relevant hub, report, or live workflow.;
          </p>;'
          <div className='mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3>;
            {[;
              {
                Icon: GitBranch,
                title: 'Automated Changelogs',
                desc: AI-authored CHANGELOG with continuous updates.','
                href: /newsroom,
                external: true},
              {
                Icon: Rocket,'
                title: 'Content Curation,
                desc: 'Homepage promos and deep links generated on the fly.',
                href: /newsroom'},
              {
                Icon: Search,'
                title: Deep Site Index,'
                desc: 'Smarter internal linking and content discovery.,
                href: '/newsroom'},
              {
                Icon: ShieldCheck,
                title: Policy & Compliance','
                desc: Safety rails and audits before changes ship.,'
                href: '/site-health},
              {
                Icon: BarChart3,
                title: 'Impact Dashboards',
                desc: Real-time visibility into outcomes and ROI.','
                href: /site-health},
              {
                Icon: Layers,'
                title: 'Factories Library,
                desc: 'Composable building blocks for new automations.',
                href: /automation'},
              {
                Icon: Activity,'
                title: Health Monitors,'
                desc: 'A11y, links, and performance monitored 24/7.,
                href: '/site-health'},
              {
                Icon: Cpu,
                title: Zero-Ops Runtime','
                desc: Fully managed cloud execution with no servers.,'
                href: '/automation},
              {
                Icon: Globe,
                title: 'Intelligence Signals',
                desc: AI + cloud trend tracking fueling new ideas.','
                href: /reports/ai-trends}].map(({ Icon, title, desc, href, external }) =>;
              external ? (;
                <a;
                  key={title}
                  href={href as string}'
                  target='_blank
                  rel='noopener'
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Extended Feature Directory</h2>
          <p className=mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">A broader tour of autonomous capabilities. Each card links to the relevant hub, report, or live workflow.</p>"
          <div className=mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3>
            {[
              { Icon: GitBranch, title: Automated Changelogs', desc: 'AI-authored CHANGELOG with continuous updates., href: /newsroom', external: true }'
              { Icon: Rocket, title: Content Curation, desc: 'Homepage promos and deep links generated on the fly.', href: /newsroom }'
              { Icon: Search, title: 'Deep Site Index, desc: Smarter internal linking and content discovery.', href: '/newsroom }
              { Icon: ShieldCheck, title: 'Policy & Compliance', desc: Safety rails and audits before changes ship., href: '/site-health' }
              { Icon: BarChart3, title: Impact Dashboards', desc: 'Real-time visibility into outcomes and ROI., href: /site-health' }'
              { Icon: Layers, title: Factories Library, desc: 'Composable building blocks for new automations.', href: /automation }'
              { Icon: Activity, title: 'Health Monitors, desc: A11y, links, and performance monitored 24/7.', href: '/site-health }
              { Icon: Cpu, title: 'Zero-Ops Runtime', desc: Fully managed cloud execution with no servers., href: '/automation' }
              { Icon: Globe, title: Intelligence Signals', desc: 'AI + cloud trend tracking fueling new ideas., href: /reports/ai-trends' }].map(({ Icon, title, desc, href, external }) => (
              external ? ("
                <a key={title} href={href as string} target="_blank rel=noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring>
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className=flex items-center gap-3"><Icon className="h-5 w-5 text-cyan-300 /><h3 className=text-lg font-semibold">{title}</h3></div>"
                  <p className=mt-1 text-sm text-white/75>{desc}</p>"
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90>Open <span aria-hidden>↗</span></div>
                </a>
              ) : (
                <Link key={title} href={href as string}>
                  <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">
                    <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />"
                    <div className=flex items-center gap-3><Icon className="h-5 w-5 text-cyan-300" /><h3 className=text-lg font-semibold>{title}</h3></div>"
                    <p className="mt-1 text-sm text-white/75>{desc}</p>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                  </a>
                </Link>
              )
            ))}
                  className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring
                >
                  <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
                  <div className='flex items-center gap-3>
                    <Icon className=h-5 w-5 text-cyan-300' />
                    <h3 className='text-lg font-semibold>{title}</h3>
                  </div>
                  <p className=mt-1 text-sm text-white/75'>{desc}</p>
                  <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90>
                    Open <span aria-hidden>↗</span>
                  </div>
                </a>
              ) : (
                <Link key={title} href={href as string}>
                  <a className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring'>
                    <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 />
                    <div className=flex items-center gap-3'>
                      <Icon className='h-5 w-5 text-cyan-300 />
                      <h3 className=text-lg font-semibold'>{title}</h3>
                    </div>
                    <p className='mt-1 text-sm text-white/75>{desc}</p>
                    <div className=mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>
                      Open <span aria-hidden>→</span>
                    </div>
                  </a>
                </Link>
              )
            )}
origin/cursor/automate-test-improve-and-merge-code-2533
          </div>
        </motion.section>'
                  <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 />;'
                  <div className='flex items-center gap-3>;
                    <Icon className='h-5 w-5 text-cyan-300' />;
                    <h3 className=text-lg font-semibold'>{title}</h3>;
                  </div>;'
                  <p className=mt-1 text-sm text-white/75>{desc}</p>;'
                  <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90>;
                    Open <span aria-hidden>↗</span>;
                  </div>;
                </a>;
              ) : (;
                <Link key={title} href={href as string}>;
                  <a className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring'>;
                    <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />;'
                    <div className=flex items-center gap-3>;'
                      <Icon className='h-5 w-5 text-cyan-300 />;
                      <h3 className='text-lg font-semibold'>{title}</h3>;
                    </div>;
                    <p className=mt-1 text-sm text-white/75'>{desc}</p>;'
                    <div className=mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90>;
                      Open <span aria-hidden>→</span>;
                    </div>;
                  </a>;
                </Link>;
              );
            )}          </div>        >;
          <h2 className=text-center text-2xl font-bold tracking-wide text-white/90">Extended Feature Directory</h2>;"
          <p className=mx-auto mt-2 max-w-3xl text-center text-sm text-white/70>A broader tour of autonomous capabilities. Each card links to the relevant hub, report, or live workflow.</p>;"
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3>;
            {[;'
              { Icon: GitBranch, title: 'Automated Changelogs, desc: AI-authored CHANGELOG with continuous updates.', href: '/newsroom, external: true },
              { Icon: Rocket, title: 'Content Curation', desc: Homepage promos and deep links generated on the fly., href: '/newsroom' },
              { Icon: Search, title: Deep Site Index', desc: 'Smarter internal linking and content discovery., href: /newsroom' },'
              { Icon: ShieldCheck, title: Policy & Compliance, desc: 'Safety rails and audits before changes ship.', href: /site-health },'
              { Icon: BarChart3, title: 'Impact Dashboards, desc: Real-time visibility into outcomes and ROI.', href: '/site-health },
              { Icon: Layers, title: 'Factories Library', desc: Composable building blocks for new automations., href: '/automation' },
              { Icon: Activity, title: Health Monitors', desc: 'A11y, links, and performance monitored 24/7., href: /site-health' },'
              { Icon: Cpu, title: Zero-Ops Runtime, desc: 'Fully managed cloud execution with no servers.', href: /automation },'
              { Icon: Globe, title: 'Intelligence Signals, desc: AI + cloud trend tracking fueling new ideas.', href: '/reports/ai-trends }].map(({ Icon, title, desc, href, external }) => (;
              external ? (;
                <a key={title} href={href as string} target="_blank" rel=noopener noreferrer className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">;
                  <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;"
                  <div className=flex items-center gap-3><Icon className="h-5 w-5 text-cyan-300" /><h3 className=text-lg font-semibold>{title}</h3></div>;"
                  <p className="mt-1 text-sm text-white/75>{desc}</p>;
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>;
                </a>;
              ) : (;
                <Link key={title} href={href as string}>;
                  <a className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring">;"
                    <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 />;"
                    <div className="flex items-center gap-3><Icon className=h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold>{title}</h3></div>;
                    <p className="mt-1 text-sm text-white/75">{desc}</p>;
                    <div className=mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>;
                  </a>;
                </Link>;
              );
            ))}
          </div>;
        </motion && motion.section>;


            )}          </div>

          </div>
        </motion.section>

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        {/* Capability Deep Links */}
        <motion&& motion.section;
          initial={{ "opacity": 0, "y": 24 
}


=======

          <h2 className=text-center text-2xl font-bold tracking-wide text-white/90'>
            Capability Deep Links;
          </h2>'
          <p className=mx-auto mt-2 max-w-3xl text-center text-sm text-white/70>
            Jump directly to the systems that deliver each capability.
          </p>'
          <div className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4>
            {[]
              [
                'SEO Automation'
                On-site scans and safe diffs to improve visibility''
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                /reports/seo
              ]
              ['
                'Site Health
                'A11y, performance, and resilient links at a glance'
                /site-health'
              ]
              ['
                Automation Hub'
                'Factories and live autonomous workflows
                '/automation'
              ]
              [
                AI Trends Radar''
                Signals inspiring new factories and experiments'
                '/reports/ai-trends
              ]
              [
                'Newsroom'
                Curated updates and product evolution highlights''
                /newsroom
              ]
              ['
                'Live Pipelines
                'Observe CI pipelines, logs, and artifacts'
                /site-health'
              ]
              ['
                Documentation'
                'Technical notes, guides, and changelog
                '/reports/seo'
              ]
              [
                AI Changelog''
                Summarized autonomous changes and highlights'
                '/newsroom
              ]

                  <div className=mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>;
                    Open <span aria-hidden>↗</span>;
                  </div>;
                </a>;

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                    </div>
                  </a>
                </Link>
              )
            )}
          </div>
        </motion.section>
        {/* Use Cases */}

          </div>;
        </motion && motion.section>;
        {/* Stats */}
        <motion&& motion.section;

                  key={item && item.label}
                  href={item && item.href as string}'
                  target=_blank'
                  rel='noopener
                    {item.value}
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

                    </div>
                  </a>
                </Link>
              )
            )}
origin/cursor/automate-test-improve-and-merge-code-2533
          </div>
        </motion.section>


                      {item && item.label}
                    </div>;
                  </a>;
                </Link>;

                  </a>;
                </Link>;
              );
            ))}
          </div>;
        </motion && motion.section>;


          </div>
        </motion.section>


        {/* Capabilities *
}


}
          whileInView={{ "opacity": 1, "y": 0 
}
          viewport={{ "once": true, "amount": 0.2 }}
          transition={{ "duration": 0.5 
}


            ))}
          </div>
        </motion.section>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
        {/* Why Zion */}
        <motion&& motion.section;
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}

                'Continuous delivery to main with safe, incremental changes.'
              ]
              [
                🛡️''
                Safety'
                'Conservative edits and guardrails keep production stable.
              ]
              [
                '📈'
                Scale''
                Automatically generates new factories as your needs grow.
              ]
            ].map(([icon, title, desc]) => (

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                  {desc as string}
                </div>              </div>              ['🚀SpeedContinuous delivery to main with safe, incremental changes.'];
              [🛡️SafetyConservative edits and guardrails keep production stable.];
              ['📈ScaleAutomatically generates new factories as your needs grow.']].map(([icon, title, desc]) => (;
              <div key={title as string} className=rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">;
                <div className="text-2xl>{icon as string}</div>;
                <div className=mt-2 text-base font-semibold">{title as string}</div>;
                <div className="mt-1 text-sm text-white/75>{desc as string}</div>;
className=mx-auto max-w-7xl px-6 pb-14
        >
origin/cursor/automate-test-improve-and-merge-code-2533
=======
                  {desc as string}'
                </div>              </div>              ['🚀SpeedContinuous delivery to main with safe, incremental changes.];
              ['🛡️SafetyConservative edits and guardrails keep production stable.'];
              [📈ScaleAutomatically generates new factories as your needs grow.']].map(([icon, title, desc]) => (;
              <div key={title as string} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">;
                <div className=text-2xl">{icon as string}</div>;"
                <div className=mt-2 text-base font-semibold>{title as string}</div>;"
                <div className="mt-1 text-sm text-white/75>{desc as string}</div>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <h2 className=text-center text-2xl font-bold tracking-wide text-white/90>
            Why Zion;
          </h2>'
          <div className='mx-auto mt-6 max-w-5xl grid grid-cols-1 gap-4 md:grid-cols-3>
            {[]
              [
                '🚀'
                Speed''
                Continuous delivery to main with safe, incremental changes.
              ]
              ['
                '🛡️
                'Safety'
                Conservative edits and guardrails keep production stable.'
              ]
              ['
                📈'
                'Scale
                'Automatically generates new factories as your needs grow.'
              ]
            ].map(([icon, title, desc]) => (
              <div;
                key={title as string}
                className=rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur'
              >'
                <div className=text-2xl>{icon as string}</div>'
                <div className='mt-2 text-base font-semibold>
                  {title as string}
                </div>
                <div className='mt-1 text-sm text-white/75'>

            ))}

                href: '/automation'
              }
              {"
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Value Pillars</h2>"
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Four pillars that guide every autonomous change — jump into the systems behind each.</p>"
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
=======

          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}

                href: /automation
              }
              {
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Value Pillars</h2>
          <p className=mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Four pillars that guide every autonomous change — jump into the systems behind each.</p>"
          <div className=mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4>
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
            {['
              { Icon: ShieldCheck, title: 'Security & Safety, desc: Guardrails, policy, and quality gates.', href: '/site-health }
              { Icon: Rocket, title: 'Speed & Momentum', desc: Small diffs shipped continuously., href: '/automation' }
              { Icon: Gauge, title: Quality & Reliability', desc: 'A11y, performance, and link integrity., href: /site-health' }'
              { Icon: Layers, title: Scale & Composability, desc: 'Factories chained into higher‑order workflows.', href: /automation }].map(({ Icon, title, desc, href }) => (
              <Link key={title} href={href}>"
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo>
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className=flex items-center gap-3">"
                    <Icon className=h-5 w-5 text-cyan-300 />"
                    <h3 className="text-lg font-semibold>{title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-white/75">{desc}</p>
                Icon: Gauge
                title: 'Quality & Reliability'
                desc: A11y, performance, and link integrity.
                href: '/site-health'
              }
              {
                Icon: Layers
                title: Scale & Composability
                desc: 'Factories chained into higher‑order workflows.'
                href: /automation
              }
            ].map(({ Icon, title, desc, href }) => (
              <Link key={title} href={href}>

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                </a>
              </Link>
            ))}
          </div>
        </motion.section>


                        {i.label}
                      </a>
                    </Link>
                  ))}

          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className=mx-auto max-w-7xl px-6 pb-20
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Benefits</h2>
          {/* Benefits ticker */}
          <div className=relative mx-auto mt-4 max-w-5xl overflow-hidden>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent" />
            <div className=pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent />
            <div className="marquee">
              <div className=marquee__track>
                className='flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md';
              >;
                <span className=mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)] />;
                <span className='text-sm text-white/80'>{b}</span>;
              </div>;
=======
            </div>
          </div>
          <div className=mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-3 md:grid-cols-2>
            {[
              '24/7 progress without human intervention'
              Rapid feedback loop with safe, incremental edits
              'Continuous delivery directly to main branch'
              Fewer regressions via layered checks and reports
              'Higher velocity with automated maintenance'
              Reduced costs via zero‑ops and automated QA
              'Consistent design language and UX quality'
              Transparent artifacts and live workflow logs
              'Faster experiment velocity with measurable impact'
              Improved search visibility via continuous SEO
              'Happier users thanks to performance & a11y wins'
              Lower operational risk through guardrails
              'Improved discoverability via deep indexing and SEO'
              Happier engineers with less toil and more creation
              'Confident shipping through automated guardrails'
              Predictable quality gates and SLOs upheld automatically
              'Auditability for compliance with full traceability'
              Happier teams: less toil, more product value
              'Automated dependency upgrades and security scans'
              Clear analytics and downloadable artifacts for every run
              'Composable factories accelerate new initiatives'
            ].map(b => (
              <div
                key={b}
                className=flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md
              >
                <span className='mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]' />
                <span className=text-sm text-white/80>{b}</span>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
              </div>

            ))}
          </div>
        </motion.section>

        {/* Benefits in Practice */}
        <motion.section;

              }
              {
                title: 'Operations'
                desc: A11y, performance, and link‑health dashboards
                href: '/site-health'
              }
            ].map(card => (
              <Link key={card.title} href={card.href}>

                  </div>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                </a>
origin/cursor/automate-test-improve-and-merge-code-2533
              </Link>
            ))}
          </div>
        </section>

              </div>
              <p className='mt-1 text-sm text-white/75'>'
                Futuristic micro‑interactions and motion design system.
              </p>

          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}



            </a>
          </div>
        </motion.section>

                  <p className="mt-1 text-sm text-white/75>{g && g.desc}</p>;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
              </Link>;
            ))}
          </div>;
        </motion && motion.section>;

          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}

            <p className='text-white/70'>
              Powered by modern cloud and AI tooling;
            </p>
            <div className=mt-4 flex flex-wrap items-center justify-center gap-6'>
              {['
                Next.js'
                'TypeScript
                'Tailwind'
                Framer Motion''
                Supabase'
                'Netlify
              ].map(t => (
                <span;
                  key={t}
                  className='rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0 && 0.06)] glow-pulse'>                  {t}          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">;
            <p className=text-white/70">Powered by modern cloud and AI tooling</p>;"
            <div className=mt-4 flex flex-wrap items-center justify-center gap-6>;
              {[Next && Next.jsTypeScriptTailwindFramer MotionSupabaseNetlify'].map((t) => (;"
                <span key={t} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0 && 0.06)] glow-pulse>;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                </span>;
                  className='rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] glow-pulse
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.section>
        {/* Quick Start */}


              </Link>
            ))}

          </div>;
        </section>;

            ))}

                <div className='mt - 3 inline - flex items - center gap - 1 text - xs text - cyan - 300 / 90>;
                  Open <span aria - hidden>→</span>;
                </div>;
              </a>;

                <div className=mt - 3 inline - flex items - center gap - 1 text - xs text - cyan - 300 / 90'>;
                  Open <span aria - hidden>→</span>;
                </div>;
              </a>;

                <div className='mt - 3 inline - flex items - center gap - 1 text - xs text - cyan - 300 / 90>;
                  Open <span aria - hidden>→</span>;
                </div>;
              </a>;

                <div className=mt - 3 inline - flex items - center gap - 1 text - xs text - cyan - 300 / 90'>;
                  Open <span aria - hidden>→</span>;
                </div>;
              </a>;

                <div className='mt - 3 inline - flex items - center gap - 1 text - xs text - cyan - 300 / 90>;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                  Open <span aria - hidden>→</span>;
                </div>;
              </a>;
            </Link>;

                Open <span aria - hidden>↗</span>;
              </div>;
            </a>;
          </div>;

            </div>;
          </div>;
        </footer>;
          initial={{ "opacity": 0, "y": 24 
}
          whileInView={{ "opacity": 1, "y": 0 }}

              </div>


=======
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
              </div>
              <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90    />
                Open <span aria-hidden    />↗</span>
          <div className=mt - 8 grid grid - cols - 1 gap - 5 sm:grid - cols - 2 lg:grid - cols - 3'    />
            <Link key='Automation Hub href=/automation'    />
              <a className='group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 10 to - white / 5 p - 6 backdrop - blur - xl hover:border - cyan - 400 / 30 tilt - on - hover holo    />
                <div className=pointer - events - none absolute -inset - px -z - 10 bg - gradient - to - r from - fuchsia - 500 / 0 via - cyan - 400 / 10 to - fuchsia - 500 / 0 opacity - 0 blur - 2xl transition - opacity group - hover:opacity - 100'    />
                <div className='text - base font - semibold    />Automation Hub</div>
                <div className=mt - 1 text - sm text - white / 75'    />
                  Factories, agents, and live workflows
                </div>
                <div className='mt - 3 inline - flex items - center gap - 1 text - xs text - cyan - 300 / 90    />
                  Open <span aria - hidden    />→</span>
                </div>
              </a>
            </Link>
            <Link key=Site Health' href='/site - health    />
              <a className=group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 10 to - white / 5 p - 6 backdrop - blur - xl hover:border - cyan - 400 / 30 tilt - on - hover holo'    />
                <div className='pointer - events - none absolute -inset - px -z - 10 bg - gradient - to - r from - fuchsia - 500 / 0 via - cyan - 400 / 10 to - fuchsia - 500 / 0 opacity - 0 blur - 2xl transition - opacity group - hover:opacity - 100    />
                <div className=text - base font - semibold'    />Site Health</div>
                <div className='mt - 1 text - sm text - white / 75    />
                  A11y, performance, and link integrity
                </div>
                <div className=mt - 3 inline - flex items - center gap - 1 text - xs text - cyan - 300 / 90'    />
                  Open <span aria - hidden    />→</span>
                </div>
              </a>
            </Link>
            <Link key='SEO Audit href=/reports / seo'    />
              <a className='group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 10 to - white / 5 p - 6 backdrop - blur - xl hover:border - cyan - 400 / 30 tilt - on - hover holo    />
                <div className=pointer - events - none absolute -inset - px -z - 10 bg - gradient - to - r from - fuchsia - 500 / 0 via - cyan - 400 / 10 to - fuchsia - 500 / 0 opacity - 0 blur - 2xl transition - opacity group - hover:opacity - 100'    />
                <div className='text - base font - semibold    />SEO Audit</div>
                <div className=mt - 1 text - sm text - white / 75'    />
                  Continuous on‑site improvements and artifacts
                </div>
                <div className='mt - 3 inline - flex items - center gap - 1 text - xs text - cyan - 300 / 90    />
                  Open <span aria - hidden    />→</span>
                </div>
              </a>
            </Link>
            <Link key=AI Trends' href='/reports / ai - trends    />
              <a className=group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 10 to - white / 5 p - 6 backdrop - blur - xl hover:border - cyan - 400 / 30 tilt - on - hover holo'    />
                <div className='pointer - events - none absolute -inset - px -z - 10 bg - gradient - to - r from - fuchsia - 500 / 0 via - cyan - 400 / 10 to - fuchsia - 500 / 0 opacity - 0 blur - 2xl transition - opacity group - hover:opacity - 100    />
                <div className=text - base font - semibold'    />AI Trends</div>
                <div className='mt - 1 text - sm text - white / 75    />
                  Signals inspiring new factories and experiments
                </div>
                <div className=mt - 3 inline - flex items - center gap - 1 text - xs text - cyan - 300 / 90'    />
                  Open <span aria - hidden    />→</span>
                </div>
              </a>
            </Link>
            <Link key='Newsroom href=/newsroom'    />
              <a className='group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 10 to - white / 5 p - 6 backdrop - blur - xl hover:border - cyan - 400 / 30 tilt - on - hover holo    />
                <div className=pointer - events - none absolute -inset - px -z - 10 bg - gradient - to - r from - fuchsia - 500 / 0 via - cyan - 400 / 10 to - fuchsia - 500 / 0 opacity - 0 blur - 2xl transition - opacity group - hover:opacity - 100'    />
                <div className='text - base font - semibold    />Newsroom</div>
                <div className=mt - 1 text - sm text - white / 75'    />
                  Autonomous updates and product evolution
                </div>
                <div className='mt - 3 inline - flex items - center gap - 1 text - xs text - cyan - 300 / 90    />
                  Open <span aria - hidden    />→</span>
                </div>
              </a>
            </Link>
            <a
              key=Documentation'
              href='/reports / seo
              target=_blank'
              rel='noopener
              className=group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 10 to - white / 5 p - 6 backdrop - blur - xl hover:border - cyan - 400 / 30 tilt - on - hover holo'    />

              <div className='pointer - events - none absolute -inset - px -z - 10 bg - gradient - to - r from - fuchsia - 500 / 0 via - cyan - 400 / 10 to - fuchsia - 500 / 0 opacity - 0 blur - 2xl transition - opacity group - hover:opacity - 100    />
              <div className=text - base font - semibold'    />Documentation</div>
              <div className='mt - 1 text - sm text - white / 75    />
                Technical notes and guides
              </div>
              <div className=mt - 3 inline - flex items - center gap - 1 text - xs text - cyan - 300 / 90'    />
                Open <span aria - hidden    />↗</span>
              </div>
            </a>
            <a
              key='AI Changelog
              href=/newsroom'
              target='_blank
              rel=noopener'
              className='group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 10 to - white / 5 p - 6 backdrop - blur - xl hover:border - cyan - 400 / 30 tilt - on - hover holo    />

              <div className=pointer - events - none absolute -inset - px -z - 10 bg - gradient - to - r from - fuchsia - 500 / 0 via - cyan - 400 / 10 to - fuchsia - 500 / 0 opacity - 0 blur - 2xl transition - opacity group - hover:opacity - 100'    />
              <div className='text - base font - semibold    />AI Changelog</div>
              <div className=mt - 1 text - sm text - white / 75'    />
                Summarized autonomous changes and highlights
              </div>
              <div className='mt - 3 inline - flex items - center gap - 1 text - xs text - cyan - 300 / 90    />
                Open <span aria - hidden    />↗</span>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
              </div>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3>

            <Link key=Automation Hub" href="/automation>
              <a className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 />
                <div className=text-base font-semibold">Automation Hub</div>
                <div className="mt-1 text-sm text-white/75>Factories, agents, and live workflows</div>
                <div className=mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <Link key="Site Health href=/site-health">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo>
                <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold>Site Health</div>
                <div className=mt-1 text-sm text-white/75">A11y, performance, and link integrity</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90>Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <Link key=SEO Audit" href="/reports/seo>
              <a className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 />
                <div className=text-base font-semibold">SEO Audit</div>
                <div className="mt-1 text-sm text-white/75>Continuous on‑site improvements and artifacts</div>
                <div className=mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <Link key="AI Trends href=/reports/ai-trends">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo>
                <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold>AI Trends</div>
                <div className=mt-1 text-sm text-white/75">Signals inspiring new factories and experiments</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90>Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <Link key=Newsroom" href="/newsroom>
              <a className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 />
                <div className=text-base font-semibold">Newsroom</div>
                <div className="mt-1 text-sm text-white/75>Autonomous updates and product evolution</div>
                <div className=mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <a key="Documentation href=/reports/seo" target="_blank rel=noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo>
              <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-base font-semibold>Documentation</div>
              <div className=mt-1 text-sm text-white/75">Technical notes and guides</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90>Open <span aria-hidden>↗</span></div>
            </a>

            <a key=AI Changelog" href="/newsroom target=_blank" rel="noopener className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 />
              <div className=text-base font-semibold">AI Changelog</div>
              <div className="mt-1 text-sm text-white/75>Summarized autonomous changes and highlights</div>
              <div className=mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

            <a key="Live Pipelines href=/site-health" target="_blank rel=noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo>
              <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-base font-semibold>Live Pipelines</div>
              <div className=mt-1 text-sm text-white/75">Observe CI pipelines, logs, and artifacts</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90>Open <span aria-hidden>↗</span></div>
            </a>
          </div>
        </section>

              </div>
origin/cursor/automate-test-improve-and-merge-code-2533
            </div>
          </div>
        </footer>

                </a>
              </Link>

            )
}
          </div>;

            AI Agents Gallery;
          </h2>;
          <p className='mx-auto mt-2 max-w-3xl text-center text-sm text-white/70'>;'
            Meet the autonomous agents powering your outcomes. Each card links;
            to a live system.;
          </p>;

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                </a>;
              </Link>;
            ))}
          </div>;

          id=capability-matrix          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}<motion.section;
id='capability-matrix';
=======
        </motion && motion.section>;

        {/* Capabilities Matrix */}

                    Open <span aria-hidden>↗</span>
                  </div>
                </a>
              ) : (
                <Link key={item.title} href={item.href as string}>

                      Open <span aria-hidden>→</span>
                    </div>
                  </a>
                </Link>
              )
            
}
          </div>
        </motion.section>


                      Open <span aria-hidden>→</span>;
                    </div>;
                  </a>;
                </Link>;

                  </a>;
                </Link>;
              );
            ))}
          </div>;

            Benefits Directory;
          </h2>;
          <p className='mx-auto mt-2 max-w-3xl text-center text-sm text-white/70'>;'
            Outcome‑focused advantages with direct links to the systems that;
            deliver them.;
          </p>;

              }
        <motion&& motion.section
          id='benefits-directory'          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
              {

              }
=======
        </motion && motion.section>;

          </div>
        </motion.section>

        {/* Benefits Directory */}

          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}

                href: '/automation'
              }
              {

=======
                label: Zero‑Ops Cloud‑Native''
                desc: No servers to babysit'
                href: '/automation
              }
              {}
              {
                label: 'Faster Iteration Loops'
                desc: Shorten idea‑to‑impact''
                href: /newsroom
              }
              {
          <h2 className=text-center text-2xl font-bold tracking-wide text-white/90">Benefits Directory</h2>"
          <p className=mx-auto mt-2 max-w-3xl text-center text-sm text-white/70>Outcome‑focused advantages with direct links to the systems that deliver them.</p>"
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3>
            {['
              { label: '24/7 Progress, desc: Always‑on autonomous delivery', href: '/automation }
              { label: 'Safe Incremental Diffs', desc: Small, reviewable changes, href: '/automation' }
              { label: Zero‑Ops Cloud‑Native', desc: 'No servers to babysit, href: /automation' }'
              { label: Layered Quality Checks, desc: 'Guardrails & audits', href: /site-health }'
              { label: 'Faster Iteration Loops, desc: Shorten idea‑to‑impact', href: '/newsroom }
              { label: 'SEO Visibility Gains', desc: Continuous improvements, href: '/reports/seo' }].map((b) => (
              <Link key={b.label} href={b.href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                  <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />"
                  <div className=flex items-center gap-2>"
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse />
                    <h3 className="text-base font-semibold">{b.label}</h3>

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                </a>
              </Link>
            ))}
          </div>
        </motion.section>


          <h2 className='text-center text-2xl font-bold tracking-wide text-white/90'>
          </h2>'
          <div className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>'
            <Link href='/automation'>'
              <a className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring'>'
                <div className='text-base font-semibold'>Automation Hub</div>'
                <div className='mt-1 text-sm text-white/75'>
                  Factories, agents, and live workflows;
                </div>
              </a>
            </Link>'
            <Link href='/site-health'>'
              <a className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring'>'
                <div className='text-base font-semibold'>Site Health</div>'
                <div className='mt-1 text-sm text-white/75'>
                  A11y, performance, and link integrity;
                </div>
              </a>
            </Link>'
            <Link href='/reports/seo'>'
              <a className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring'>'
                <div className='text-base font-semibold'>SEO Audit</div>'
                <div className='mt-1 text-sm text-white/75'>
                </div>
              </a>
            </Link>'
            <Link href='/reports/ai-trends'>'
              <a className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring'>'
                <div className='text-base font-semibold'>AI Trends</div>'
                <div className='mt-1 text-sm text-white/75'>
                  Ecosystem intelligence signals;
                </div>
              </a>
            </Link>'
            <Link href='/newsroom'>'
              <a className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring'>'
                <div className='text-base font-semibold'>Newsroom</div>'
                <div className='mt-1 text-sm text-white/75'>
                  Autonomous updates & evolution;
                </div>
              </a>
            </Link>'
            <Link href='/main/front'>'
              <a className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring'>'
                <div className='text-base font-semibold'>Front Systems Hub</div>'
                <div className='mt-1 text-sm text-white/75'>
                  Curated futuristic front experience;
                </div>
              </a>
            </Link>'
            <Link href='/.netlify/functions/deps-auto-upgrade-runner'>'
              <a className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring'>'
                <div className='mt-1 text-sm text-white/75'>
=======
        {/* AUTO-GENERATED: FRONT_ADS_START */}

          <h2 className=text-center text-2xl font-bold tracking-wide text-white/90>
          </h2>'
          <div className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4>
            <Link href='/automation'>
              <a className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring'>'
                <div className=text-base font-semibold>Automation Hub</div>'
                <div className='mt-1 text-sm text-white/75>
                  Factories, agents, and live workflows;
                </div>
              </a>
            </Link>
            <Link href='/site-health'>
              <a className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring'>'
                <div className=text-base font-semibold>Site Health</div>'
                <div className='mt-1 text-sm text-white/75>
                  A11y, performance, and link integrity;
                </div>
              </a>
            </Link>
            <Link href='/reports/seo'>
              <a className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring'>'
                <div className=text-base font-semibold>SEO Audit</div>'
                <div className='mt-1 text-sm text-white/75>
                </div>
              </a>
            </Link>
            <Link href='/reports/ai-trends'>
              <a className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring'>'
                <div className=text-base font-semibold>AI Trends</div>'
                <div className='mt-1 text-sm text-white/75>
                  Ecosystem intelligence signals;
                </div>
              </a>
            </Link>
            <Link href='/newsroom'>
              <a className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring'>'
                <div className=text-base font-semibold>Newsroom</div>'
                <div className='mt-1 text-sm text-white/75>
                  Autonomous updates & evolution;
                </div>
              </a>
            </Link>
            <Link href='/main/front'>
              <a className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring'>'
                <div className=text-base font-semibold>Front Systems Hub</div>'
                <div className='mt-1 text-sm text-white/75>
                  Curated futuristic front experience;
                </div>
              </a>
            </Link>
            <Link href='/.netlify/functions/deps-auto-upgrade-runner'>
              <a className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring'>'
                <div className=mt-1 text-sm text-white/75>
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                  Keeps dependencies fresh safely;
                </div>
              </a>
            </Link>'
            <Link href='/.netlify/functions/frontpage-advertiser>
              <a className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl tilt-on-hover holo neon-ring'>
                <div className=text-base font-semibold'>
                  Frontpage Advertiser;
                </div>'
                <div className=mt-1 text-sm text-white/75>
                  Refreshes front promos automatically;
                </div>
              </a>
            </Link>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                  Factories, agents, and live workflows;
                </div>;
              </a>;
            </Link>;
                  A11y, performance, and link integrity;
                </div>;
              </a>;
            </Link>;
                  Ecosystem intelligence signals;
                </div>;
              </a>;

                  Autonomous updates & evolution;
                </div>;
              </a>;
            </Link>;
                  Curated futuristic front experience;
                </div>;
              </a>;
            </Link>;
                  Keeps dependencies fresh safely;
                </div>;
              </a>;
            </Link>;
                  Refreshes front promos automatically;
                </div>;
              </a>;
            </Link>;
        {/* Feature Highlights (new) */}


=======
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}

              }
              {
                title: Front Systems Hub
                desc: 'Futuristic templates, effects and layouts.'
                href: /main/front
              }
            ].map(card => (
              <a
                key={card.title}
                href={card.href}

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
            ))}
          </div>
        </motion.section>
        {/* Reports */}

=======

          {/* existing reports content */}
        </section>
        {/* New Intelligent Automations */}

              }
            ].map(tool => (
              <a
                key={tool.title}
                href={tool.href}

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
          </div>
        </motion.section>

        {/* Reports */}
        <section id=reports className="mx-auto max-w-7xl px-6 pb-16">
          {/* existing reports content */}
        </section>



              { title: 'Revenue Ideas Promoter', href: /.netlify/functions/revenue-ideas-promoter }].map((tool) => (
              <a key={tool.title} href={tool.href} className=rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 hover:border-cyan-400/30 hover:text-white transition-colors>
                <div className="text-base font-semibold text-white">{tool.title}</div>
                <div className=mt-1 text-xs text-white/70>Open ↗</div>

              <a key={tool.title} href={tool.href} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 hover:border-cyan-400/30 hover:text-white transition-colors">
                <div className=text-base font-semibold text-white>{tool.title}</div>
=======
          whileInView={{ opacity: 1, y: 0 }}'
              { title: 'Revenue Ideas Promoter, href: /.netlify/functions/revenue-ideas-promoter' }].map((tool) => ("
              <a key={tool.title} href={tool.href} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 hover:border-cyan-400/30 hover:text-white transition-colors>
                <div className="text-base font-semibold text-white">{tool.title}</div>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <div className=mt-1 text-xs text-white/70">Open ↗</div>
              { title: 'Revenue Ideas Promoter;}
  href: /.netlify/functions/revenue-ideas-promoter' ;}].map((tool) => ("
              <a key={tool.title} href={tool.href} className=\rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 hover:border-cyan-400/30 hover:text-white transition-colors\ />"
                <div className=\"text-base font-semibold text-white\ />{tool.titl}
}</div>
                <div className=\"mt-1 text-xs text-white/70\" />Open ↗</div>

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          </div>;

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
          </div>;
        </section>;
      </div>;
      </div>;
      {/* Back to top */}
      {showToTop && (</div>;
    </a>;


          ↑ Top;
        </button>;
      )}
    </div>;

        Open <span aria-hidden>↗</span>;
      </div>;
    </a>;
    <a;

        Open <span aria-hidden>↗</span>;
      </div>;
    </a>;
    <a;

        Open <span aria-hidden>↗</span>;
      </div>;
    </a>;
    <a;

        Open <span aria-hidden>↗</span>;
      </div>;
    </a>;
    <a;

        Open <span aria-hidden>↗</span>;
      </div>;
    </a>;
    <a;

        Open <span aria-hidden>↗</span>;
      </div>;
    </a>;
    <a;

        Open <span aria-hidden>↗</span>;
      </div>;
    </a>;
    <a;

        Open <span aria-hidden>↗</span>;
      </div>;
    </a>;
    <a;

        Open <span aria-hidden>↗</span>;
      </div>;
    </a>;
    <a;

        Open <span aria-hidden>↗</span>;
      </div>;
    </a>;
    <a;

        Open <span aria-hidden>↗</span>;
      </div>;
    </a>;
    <a;

        Open <span aria-hidden>↗</span>;
      </div>;
    </a>;
  </div>;


>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
        >
          ↑ Top
        </button>
      )}
    </div>


  </h2>
  <p className='mx-auto mt-2 max-w-3xl text-center text-sm text-white/70    />
    Cloud‑native workflows that maintain, heal, and evolve the repo
    automatically.
  </p>
  <div className=mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'    />
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/actions-catalog.yml
      target=_blank'
      rel='noopener
      className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover'    />

      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100    />
      <div className=text-base font-semibold'    />Actions Catalog & README</div>
      <div className='mt-1 text-sm text-white/75    />Scheduled: */5 * * * *</div>
      <div className=mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'    />
        Open <span aria-hidden    />↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/auto-fix.yml
      target=_blank'
      rel='noopener
      className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover'    />

      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100    />
      <div className=text-base font-semibold'    />Autonomous Auto-Fix</div>
      <div className='mt-1 text-sm text-white/75    />Scheduled: */30 * * * *</div>
      <div className=mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'    />
        Open <span aria-hidden    />↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/automerge-main.yml
      target=_blank'
      rel='noopener
      className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover'    />

      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100    />
      <div className=text-base font-semibold'    />Auto-merge to main</div>
      <div className='mt-1 text-sm text-white/75    />On push / schedule</div>
      <div className=mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'    />
        Open <span aria-hidden    />↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/autonomous-meta.yml
      target=_blank'
      rel='noopener
      className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover'    />

      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100    />
      <div className=text-base font-semibold'    />Autonomous Meta Factory</div>
      <div className='mt-1 text-sm text-white/75    />Scheduled: */30 * * * *</div>
      <div className=mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'    />
        Open <span aria-hidden    />↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/ci-self-heal.yml
      target=_blank'
      rel='noopener
      className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover'    />

      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100    />
      <div className=text-base font-semibold'    />CI Self-Heal</div>
      <div className='mt-1 text-sm text-white/75    />On push / schedule</div>
      <div className=mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'    />
        Open <span aria-hidden    />↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/ci.yml
      target=_blank'
      rel='noopener
      className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover'    />

      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100    />
      <div className=text-base font-semibold'    />CI</div>
      <div className='mt-1 text-sm text-white/75    />On push / schedule</div>
      <div className=mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'    />
        Open <span aria-hidden    />↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/cloud-maintenance.yml
      target=_blank'
      rel='noopener
      className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover'    />

      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100    />
      <div className=text-base font-semibold'    />
        Cloud Maintenance Automations
      </div>
      <div className='mt-1 text-sm text-white/75    />Scheduled: */30 * * * *</div>
      <div className=mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'    />
        Open <span aria-hidden    />↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/cloud-marketing.yml
      target=_blank'
      rel='noopener
      className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover'    />

      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100    />
      <div className=text-base font-semibold'    />Cloud Marketing Automations</div>
      <div className='mt-1 text-sm text-white/75    />Scheduled: 0 */6 * * *</div>
      <div className=mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'    />
        Open <span aria-hidden    />↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/continuous-improvement.yml
      target=_blank'
      rel='noopener
      className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover'    />

      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100    />
      <div className=text-base font-semibold'    />Continuous Improvement</div>
      <div className='mt-1 text-sm text-white/75    />Scheduled: 0 */6 * * *</div>
      <div className=mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'    />
        Open <span aria-hidden    />↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/cursor-rules-autoupdate.yml
      target=_blank'
      rel='noopener
      className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover'    />

      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100    />
      <div className=text-base font-semibold'    />Cursor Rules Auto Update</div>
      <div className='mt-1 text-sm text-white/75    />Scheduled: 17 */6 * * *</div>
      <div className=mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'    />
        Open <span aria-hidden    />↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/dependency-maintenance.yml
      target=_blank'
      rel='noopener
      className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover'    />

      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100    />
      <div className=text-base font-semibold'    />Dependency Maintenance</div>
      <div className='mt-1 text-sm text-white/75    />Scheduled: 17 5 * * *</div>
      <div className=mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'    />
        Open <span aria-hidden    />↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/diverse-agent-matrix.yml
      target=_blank'
      rel='noopener

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      </div>
    </a>
  </div>
          aria-label=Scroll to top'
origin/cursor/automate-test-improve-and-merge-code-2533

          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth }

          className=fixed bottom-24 right-4 z-40 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-3 py-2 text-xs font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]'
          aria-label='Scroll to top
        >
          ↑ Top
        </button>
      )}
    </div>

  <h2 className=text-center text-2xl font-bold tracking-wide text-white/90'>
    GitHub Actions — Live Automations
  </h2>'
  <p className=mx-auto mt-2 max-w-3xl text-center text-sm text-white/70>
    Cloud‑native workflows that maintain, heal, and evolve the repo
    automatically.
  </p>'
  <div className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/actions-catalog.yml'
      target=_blank''
      rel=noopener'
      className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover
    >
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
      <div className=text-base font-semibold'>Actions Catalog & README</div>'
      <div className=mt-1 text-sm text-white/75>Scheduled: */5 * * * *</div>'
      <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90>
        Open <span aria-hidden>↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/auto-fix.yml'
      target=_blank''
      rel=noopener'
      className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover
    >
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
      <div className=text-base font-semibold'>Autonomous Auto-Fix</div>'
      <div className=mt-1 text-sm text-white/75>Scheduled: */30 * * * *</div>'
      <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90>
        Open <span aria-hidden>↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/automerge-main.yml'
      target=_blank''
      rel=noopener'
      className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover
    >
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
      <div className=text-base font-semibold'>Auto-merge to main</div>'
      <div className=mt-1 text-sm text-white/75>On push / schedule</div>'
      <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90>
        Open <span aria-hidden>↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/autonomous-meta.yml'
      target=_blank''
      rel=noopener'
      className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover
    >
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
      <div className=text-base font-semibold'>Autonomous Meta Factory</div>'
      <div className=mt-1 text-sm text-white/75>Scheduled: */30 * * * *</div>'
      <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90>
        Open <span aria-hidden>↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/ci-self-heal.yml'
      target=_blank''
      rel=noopener'
      className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover
    >
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
      <div className=text-base font-semibold'>CI Self-Heal</div>'
      <div className=mt-1 text-sm text-white/75>On push / schedule</div>'
      <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90>
        Open <span aria-hidden>↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/ci.yml'
      target=_blank''
      rel=noopener'
      className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover
    >
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
      <div className=text-base font-semibold'>CI</div>'
      <div className=mt-1 text-sm text-white/75>On push / schedule</div>'
      <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90>
        Open <span aria-hidden>↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/cloud-maintenance.yml'
      target=_blank''
      rel=noopener'
      className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover
    >
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
      <div className=text-base font-semibold'>
        Cloud Maintenance Automations
      </div>'
      <div className=mt-1 text-sm text-white/75>Scheduled: */30 * * * *</div>'
      <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90>
        Open <span aria-hidden>↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/cloud-marketing.yml'
      target=_blank''
      rel=noopener'
      className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover
    >
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
      <div className=text-base font-semibold'>Cloud Marketing Automations</div>'
      <div className=mt-1 text-sm text-white/75>Scheduled: 0 */6 * * *</div>'
      <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90>
        Open <span aria-hidden>↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/continuous-improvement.yml'
      target=_blank''
      rel=noopener'
      className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover
    >
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
      <div className=text-base font-semibold'>Continuous Improvement</div>'
      <div className=mt-1 text-sm text-white/75>Scheduled: 0 */6 * * *</div>'
      <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90>
        Open <span aria-hidden>↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/cursor-rules-autoupdate.yml'
      target=_blank''
      rel=noopener'
      className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover
    >
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
      <div className=text-base font-semibold'>Cursor Rules Auto Update</div>'
      <div className=mt-1 text-sm text-white/75>Scheduled: 17 */6 * * *</div>'
      <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90>
        Open <span aria-hidden>↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/dependency-maintenance.yml'
      target=_blank''
      rel=noopener'
      className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover
    >
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
      <div className=text-base font-semibold'>Dependency Maintenance</div>'
      <div className=mt-1 text-sm text-white/75>Scheduled: 17 5 * * *</div>'
      <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90>
        Open <span aria-hidden>↗</span>
      </div>
    </a>
    <a
      href='https://github.com/Zion-Holdings/zion/actions/workflows/diverse-agent-matrix.yml'
      target=_blank''
      rel=noopener'
      className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover
    >
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
      <div className=text-base font-semibold'>Diverse Agent Matrix</div>'
      <div className=mt-1 text-sm text-white/75>Scheduled: 7 * * * *</div>'
      <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
        Open <span aria-hidden>↗</span>

      </div>
    </a>
  </div>

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
}</div> 
=======
</section>
}</div>
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7

}</div> </div> </div>) )
}</div> </div> </motion.section> {}

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
}</div>
}</div> </motion.section> {}
  /* Capabilities */
}<motion.section </a> </a>) )

  /* Quality Gates & Guardrails */
}<motion.section </a> </a>) )
}</div> </motion.section> {}
  /* Tech */
}<motion.section > {}
  t;
}</div> </div> </motion.section> </a> </a>) )

  /* AI Agents Gallery */
}<motion.section </a> </a>) )
}</div> </motion.section> {}
  /* Capabilities Matrix */
}<motion.section <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="text-base font-semibold> {}
  item.title
}</div> <div className="mt-1 text-sm text-white/75"> {
}</div> <div className=mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
}</div> </motion.section> {}
  /* Benefits Directory */
}<motion.section </a> </a>) )

/* AUTO-GENERATED: FRONT_ACTIONS_END */;
}</div> ;
}</div> </div> </div>) ) ;
}</div> </div> </motion && motion.section> {

  label ;
}</nav> </aside> {
  /* Engines: Alternative Automation Runtimes */ ;"
}<motion && motion.section > <h2 className=text-center text-2xl font-bold tracking-wide text-white/90 >Autonomous Engines (Beyond GitHub Actions) </h2> <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70" >We run outside GitHub Actions using scheduled cloud functions and orchestrators. Explore the engines below.</p> <div className=mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 > <a href="/.netlify/functions/front-enhancer" className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className=text-lg font-semibold >Netlify Scheduled Functions</div> <p className="mt-1 text-sm text-white/75" >Cron-like cloud jobs that run every 20 minutes to enhance the front experience.</p> <div className=mt-3 text-xs text-cyan-300/90 >View logs via Netlify →</div> </a> <a > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className=text-lg font-semibold >Local Orchestrators</div> <p className="mt-1 text-sm text-white/75" >Node-based orchestrators that can run on any scheduler or platform.</p> <div className=mt-3 text-xs text-cyan-300/90 >Browse orchestration scripts ↗</div> </a> <a href="/automation" className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className=text-lg font-semibold >Autonomous Cloud Orchestrator</div> <p className="mt-1 text-sm text-white/75" >End-to-end agents launching factories and syncing safe diffs to main.</p> <div className=mt-3 text-xs text-cyan-300/90 >Open Automation Hub →</div> </a> </div> <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" > <a href=/.netlify/functions/internal-link-graph-runner className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo" > <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 /> <div className="text-lg font-semibold" >Internal Link Graph</div> <p className=mt-1 text-sm text-white/75 >Live graph of internal navigation across pages.</p> <div className="mt-3 text-xs text-cyan-300/90" >Run now →</div> </a> <a href=/.netlify/functions/robots-enhancer-runner className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo" > <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 /> <div className="text-lg font-semibold" >Robots && Robots.txt Enhancer</div> <p className=mt-1 text-sm text-white/75 >Ensures sitemap and sensible defaults for crawling.</p> <div className="mt-3 text-xs text-cyan-300/90" >Run now →</div> </a> <a href=/.netlify/functions/alt-text-indexer-runner className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo" > <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 /> <div className="text-lg font-semibold" >Alt Text Indexer</div> <p className=mt-1 text-sm text-white/75 >Humanized alt suggestions for images across the site.</p> <div className="mt-3 text-xs text-cyan-300/90" >Run now →</div> </a> <a href=/.netlify/functions/content-registry-runner className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo" > <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 /> <div className="text-lg font-semibold" >Content Registry Builder</div> <p className=mt-1 text-sm text-white/75 >Continuously indexes pages and reports for discovery.</p> <div className="mt-3 text-xs text-cyan-300/90" >Run now →</div> </a> <a href=/.netlify/functions/autonomous-meta-orchestrator className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover" > > <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 /> <div className="text-lg font-semibold" >Rapid Sync (2m) </div> <p className=mt-1 text-sm text-white/75 >High‑frequency repo sync to push autonomous changes quickly.</p> <div className="mt-3 text-xs text-cyan-300/90" >Run now ↗</div> </a> <a href=/.netlify/functions/content-freshness-runner className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover" > </a> <a href=/.netlify/functions/docs-link-audit-runner className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover" > <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 /> <div className="text-lg font-semibold" >Docs Link Audit</div> <p className=mt-1 text-sm text-white/75 >Scans docs for broken relative links and commits a CSV report.</p> <div className="mt-3 text-xs text-cyan-300/90" >Open →</div> </a> <a href=/.netlify/functions/image-dimension-audit-runner className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover" > <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 /> <div className="text-lg font-semibold" >Image Dimension Audit</div> <p className=mt-1 text-sm text-white/75 >Detects missing width/height in images and logs a report.</p> <div className="mt-3 text-xs text-cyan-300/90" >Open →</div> </a> <a href=/.netlify/functions/autonomous-master-orchestrator className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover" > <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 /> <div className="text-lg font-semibold" >Autonomous Master Orchestrator</div> <p className=mt-1 text-sm text-white/75 >Runs every minute: triggers all cloud functions and syncs to main.</p> <div className="mt-3 text-xs text-cyan-300/90" >Open ↗</div> </a> </div> </motion && motion.section> {}><a className=mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline >Open</a></a> ;
}</article>) ) ;
}</div> </section> {
  /* Netlify Automations */ ;"
}<motion && motion.section <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 /> <div className=text-lg font-semibold"> {
  f && f.label ;"
}</div> <div className=mt-1 text-sm text-white/75> {
  f && f.desc ;"
}</div> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90>Trigger <span aria-hidden>↗</span></div> ;
}</div> </motion && motion.section> </a> <a href="/.netlify/functions/autonomous-invention-orchestrator" target=blank rel="noopener" className=group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover > <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className=text-lg font-semibold >Autonomous Invention Orchestrator</div> <div className="mt-1 text-sm text-white/75" >Invents and curates fresh automations and safely syncs diffs to main.</div> <div className=mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90 >Trigger <span aria-hidden>↗</span></div> </a> </div> </section> {
  /* Feature Spotlight */ ;

}{
  /* Outcome Benefits */ ;
}<motion && motion.section </a> </a>) ) ;
}</div> </motion && motion.section> {
  /* Suites */ ;
}<motion&& motion.section suite && suite.external ? () : () ) 
}</article>) ) ;
}</div> </motion && motion.section> {
  /* Superpowers */ ;
}<motion && motion.section </article>) ) ;
}</div> </motion && motion.section> {

  /* Features */ ;
}<motion && motion.section </a> </a>) ) ;
}</div> </motion && motion.section> {
  /* Outcomes */ ;"
}<motion && motion.section > <h2 className="text-center text-2xl font-bold tracking-wide text-white/90 >Outcomes</h2> <p className=mx-auto mt-2 max-w-3xl text-center text-sm text-white/70" > Tangible, measurable wins delivered by autonomous cloud agents. </p> </a> </a>) ) ;
}</div> </div> </div> </motion && motion.section> {
  /* Feature Map */ ;"
}<motion && motion.section > <h2 className=text-center text-2xl font-bold tracking-wide text-white/90 >Feature Map</h2> <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70" > A fast overview of what you can explore right now across the platform. </p> <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 /> <div className="text-base font-semibold"> {
  item && item.label ;
}</div> <div className=mt-1 text-sm text-white/75"> {
  item && item.desc ;"
}</div> <div className=mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90>Open <span aria-hidden>↗</span></div> ;
}</div> </motion && motion.section> {
  /* AUTO: catalog injection for automated advertising */ ;
}{
  /* AUTO:FRONT INDEX DIRECTORY START */ </div> </section> /* AUTO:FRONT INDEX DIRECTORY END */ ;
}{
  /* Platform Modules */ ;
}<motion && motion.section </a> </a>) ) ;
}</div> </motion && motion.section> {
  /* Neural Feature Matrix */ ;"
}<motion && motion.section <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100 /> <div className=text-base font-semibold"> {
  item && item.label ;"
}</div> <div className=mt-1 text-sm text-white/75> {
  item && item.desc ;"
}</div> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90>Open <span aria-hidden>↗</span></div> ;
}</div> </motion && motion.section> {
  /* Extended Feature Directory */ ;
}<motion && motion.section <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className=flex items-center gap-3><Icon className="h-5 w-5 text-cyan-300" /><h3 className=text-lg font-semibold> {
  title ;"
}</h3></div> <p className="mt-1 text-sm text-white/75> {
  desc ;
}</p> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div> ;
}</div> </motion && motion.section> {
  /* Capability Deep Links */ ;
}<motion && motion.section <div className=pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className="text-base font-semibold> {
  label as string ;
}</div> <div className="mt-1 text-sm text-white/75"> {
  desc as string ;
}</div> <div className=mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div> ;
}</div> </motion && motion.section> {
  /* Use Cases */ ;
}<motion && motion.section </article>) ) ;
}</div> </motion && motion.section> {
  /* Stats */ ;
}<motion && motion.section </a>) : (<Linkkey= {}
  item && item.label;
}href= {}
  item && item.href as string "
}> <a className=rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur hover:border-cyan-400/30 > <div className="text-2xl font-extrabold tracking-tight" > {
  item && item.value ;
}</div> <div className=mt-1 text-xs text-white/70" > {
  item && item.label ;
}</div> ;
}</div> </motion && motion.section> {
  /* Capabilities */ ;
}<motion && motion.section </a> </a>) ) ;
}</div> </motion && motion.section> {
  /* Why Zion */ ;
}<motion&& motion.section;
}</div> </motion && motion.section> {
  /* Value Pillars */ ;
}<motion && motion.section </a> </a>) ) ;
}</div> </motion && motion.section> {
  /* Benefits */ ;
}<motion && motion.section </a> </a>) ) ;
}</div> </div> </div> ;
}</div> </motion && motion.section> {
  /* Benefits in Practice */ ;

  b && b.label ;
}</span> — {
  b && b.desc ;"
}<span className=ml-1 text-cyan-300/90 >→</span></span> ;
}</div> </motion && motion.section> </a> </a>) ) ;
}</div> </section> {

  /* Quality Gates & Guardrails */ ;
}<motion && motion.section </a> </a>) ) ;
}</div> </motion && motion.section> {
  /* Tech */ ;
}<motion && motion.section > {
  t ;
}</div> </div> </motion && motion.section> </a> </a>) ) ;
}</div> </section> {
  /* CTA */ ;"
}<motion && motion.section > <div className="animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl > <h3 className=text-2xl font-bold" >Ready to build with autonomous cloud agents?</h3> <p className="mx-auto mt-2 max-w-2xl text-white/80 >Scale development with a tireless fleet of self‑improving automations.</p> <div className=mt-6 flex flex-wrap justify-center gap-3" > <Link href="/automation ><a className=rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover:bg-white" >Get Started</a></a> <Link href="/automation ><a className=rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10" >View Automations</a></a> </div> </div> </motion && motion.section> {}</div> <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70 > <Link href=/automation" ><a>Automations</a></a> <Link href="/newsroom ><a>Newsroom</a></a> <Link href=/site-health" ><a>Site Health</a></a> <a href="/ target=blank" rel="noopener >GitHub</a> </div> </div> </div> </footer> {
  /* AI Agents Gallery */ ;
}<motion && motion.section </a> </a>) ) ;
}</div> </motion && motion.section> {
  /* Capabilities Matrix */ ;
}<motion && motion.section <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /> <div className=text-base font-semibold> {
  item && item.title ;"
}</div> <div className="mt-1 text-sm text-white/75> {
  item && item.desc ;
}</div> <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div> ;
}</div> </motion && motion.section> {
  /* Benefits Directory */ ;
}<motion && motion.section </a> </a>) ) ;
}</div> </motion && motion.section> {
  /* AUTO-GENERATED: FRONT ADS START */ ;
}</div> </section> {
  /* AUTO-GENERATED: FRONT ADS END */ ;
}{
  /* Feature Highlights (new) */ ;
}<motion && motion.section </a>) ) ;
}</div> </motion && motion.section> </a>) ) ;
}</div> </section> </div> > ↑ Top </button>) ;
}</div>) ;

/* AUTO - GENERATED: FRONT_ACTIONS_END */;
}</div>;
}</div> </div> </div>) );

  /* Outcome Benefits */;
}<motion.section </a> </a>) );
}</div> </motion.section> {}
  /* Suites */;
}<motion.section suite.external ? () : () );
}</article>) );
}</div> </motion.section> {}
  /* Superpowers */;
}<motion.section </article>) );

  /* Features */;
}<motion.section </a> </a>) );
}</div> </motion.section> {}
  /* Outcomes */;
}<motion.section > <h2 className=text - center text - 2xl font - bold tracking - wide text - white / 90" >Outcomes</h2> <p className="mx - auto mt - 2 max - w-3xl text - center text - sm text - white / 70" > Tangible, measurable wins delivered by autonomous cloud agents. </p> </a> </a>) );
}</div> </div> </div> </motion.section> {}
}</div> </motion.section> {}
  /* AUTO: catalog injection for automated advertising */;
}{}
  /* AUTO:FRONT INDEX DIRECTORY START */ </div> </section> /* AUTO:FRONT INDEX DIRECTORY END */;
}{}
  /* Platform Modules */;
}<motion.section </a> </a>) );
}</div> </motion.section> {}
}</div> </motion.section> {}
  /* Use Cases */;
}<motion.section </article>) );
}</div> </motion.section> {}
  /* Stats */;
}<motion.section </a>) : (<Link key= {}
  item.label;
}href= {}
}</div> </motion.section> {}
  /* Capabilities */;
}<motion.section </a> </a>) );
}</div> </motion.section> {}
  /* Why Zion */;
}</div> </motion.section> {}
  /* Capabilities */}
}<motion.section </a /> </a>) )
}</div> </motion.section> {}
  /* Why Zion */}
}<motion.section;

}</div> </motion.section> {}
  /* Tech */
}<motion.section > {}
  t
}</div> </div> </motion.section> </a> </a>) )


=======
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
}{

origin/cursor/automate-test-improve-and-merge-code-2533
=======
}{}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  /* Feature Highlights (new) */ 
}<motion.section </a>) ) 
}</div> </motion.section> </a>) ) 
}</div> </section> </div> > ↑ Top </button>) 
}</div>) 


}
  /* Feature Highlights (new) */ }
}<motion.section </a />) ) 
}</div> </motion.section> </a>) ) 
}</div> </section> </div> > ↑ Top </button>) 
}</div>) 

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

origin/cursor/automate-test-improve-and-merge-code-2533

  /* Feature Highlights (new) */
}<motion.section </a>) )
}</div> </motion.section> </a>) )
}</div> </section> </div> > ↑ Top </button>)
}</div>)
}/* AUTO-GENERATED: FRONT ACTIONS START */ </a> </div> </section> /* AUTO-GENERATED: FRONT ACTIONS END */
}/* AUTO-GENERATED: FRONT ACTIONS START */ </a> </div> </section> /* AUTO-GENERATED: FRONT ACTIONS END */

=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
