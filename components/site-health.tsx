import Head from 'next/head';
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function SiteHealth() {
  return (
    <div className='relative min-h-screen overflow-hidden bg-slate-950 text-white'>
      <Head>
        <title>Site Health — A11y, Performance, Links</title>
        <meta
          name='description'
          content='Dashboards and audits for accessibility, performance, and link integrity.'
        />
      </Head>

      <div aria-hidden className='pointer-events-none absolute inset-0 -z-10'>
        <div className='absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float' />
        <div className='absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow' />
        <div className='absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast' />
        <div className='absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid' />
        <div className='absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]'>
          <div className='twinkle-field absolute inset-0' />
        </div>
        <div className='absolute inset-0 beams opacity-[0.06]' />
      </div>

      <header className='relative z-10'>
        <nav className='mx-auto flex max-w-7xl items-center justify-between px-6 py-6'>
          <div className='text-2xl font-bold tracking-wide'>
            <span className='bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon'>
              Zion
            </span>
          </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <div className='hidden gap-6 md:flex text-white/80'>
            <Link href='/'>
              <a>Home</a>
            </Link>
            <Link href='/automation'>
              <a>Automations</a>
            </Link>
            <Link href='/reports/seo'>
              <a>SEO Audit</a>
            </Link>
            <Link href='/reports/ai-trends'>
              <a>AI Trends</a>
<<<<<<< HEAD
            </Link>          </div>
        </nav>
      </header>

=======
            </Link>
=======
export default function SiteHealth() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Head>
        <title>Site Health — A11y, Performance, Links</title>
        <meta name="description" content="Dashboards and audits for accessibility, performance, and link integrity." />
      </Head>

      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
          <div className="twinkle-field absolute inset-0" />
        </div>
        <div className="absolute inset-0 beams opacity-[0.06]" />
      </div>

      <header className="relative z-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="text-2xl font-bold tracking-wide">
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span>
          </div>
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <div className="hidden gap-6 md:flex text-white/80">
            <Link href="/"><a>Home</a></Link>
            <Link href="/automation"><a>Automations</a></Link>
            <Link href="/reports/seo"><a>SEO Audit</a></Link>
            <Link href="/reports/ai-trends"><a>AI Trends</a></Link>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </div>
        </nav>
      </header>

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <main className='relative z-10'>
        <section className='mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-20 text-center'>
          <div className='mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md'>
            <span className='h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]' />
<<<<<<< HEAD
=======
=======
      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-20 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            Real‑time health signals: A11y, Performance, Links
          </div>
          <h1 className='mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl'>
            <span className='gradient-text'>Site Health</span>
          </h1>
          <p className='mx-auto mt-5 max-w-3xl text-lg text-white/80'>
            Dashboards, audits, and guardrails that keep your experience fast,
            accessible, and reliable.
          </p>
          <div className='mt-8 flex flex-wrap justify-center gap-3'>
            <a
              href='/site-health'
              target='_blank'
              rel='noopener'
              className='rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10'
            >
              Live Pipelines
            </a>
            <Link href='/automation'>
              <a className='rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-shadow'>
                Open Automation Hub
              </a>
            </Link>
          </div>
        </section>

        <section className='mx-auto max-w-7xl px-6 pb-14'>
          <h2 className='text-center text-2xl font-bold tracking-wide text-white/90'>
            Dashboards
          </h2>
          <div className='mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {[
              {
                title: 'Accessibility',
                desc: 'WCAG checks with actionable fixes and reports.',
                href: '/reports/seo',
              },
              {
                title: 'Performance',
                desc: 'Core Web Vitals and performance budgets.',
                href: '/reports/seo',
              },
              {
                title: 'Link Integrity',
                desc: 'Broken links identified and prevented.',
                href: '/reports/links',
              },
            ].map(card => (
              <Link key={card.title} href={card.href}>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <a className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30'>
                  <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
                  <h3 className='text-lg font-semibold'>{card.title}</h3>
                  <p className='mt-1 text-sm text-white/75'>{card.desc}</p>
                  <div className='mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90'>
                    Open →
<<<<<<< HEAD
                  </div>                </a>
=======
                  </div>
=======
      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-20 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            Real‑time health signals: A11y, Performance, Links
          </div>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            <span className="gradient-text">Site Health</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-white/80">
            Dashboards, audits, and guardrails that keep your experience fast, accessible, and reliable.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="/site-health" target="_blank" rel="noopener" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">Live Pipelines</a>
            <Link href="/automation"><a className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-shadow">Open Automation Hub</a></Link>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Dashboards</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Accessibility', desc: 'WCAG checks with actionable fixes and reports.', href: '/reports/seo' },
              { title: 'Performance', desc: 'Core Web Vitals and performance budgets.', href: '/reports/seo' },
              { title: 'Link Integrity', desc: 'Broken links identified and prevented.', href: '/reports/links' }].map((card) => (
              <Link key={card.title} href={card.href}>
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="mt-1 text-sm text-white/75">{card.desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open →</div>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </a>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </Link>
            ))}
          </div>
        </section>

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <section className='mx-auto max-w-7xl px-6 pb-16'>
          <h2 className='text-center text-2xl font-bold tracking-wide text-white/90'>
            Artifacts
          </h2>
          <div className='mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <a
              href='/reports/seo/latest.json'
              className='rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30'
            >
              Latest SEO Report JSON ↗
            </a>
            <a
              href='/reports/seo/index.html'
              className='rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30'
            >
              SEO Audit Dashboard →
            </a>
          </div>
        </section>

        <section className='mx-auto max-w-7xl px-6 pb-24'>
          <div className='animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl'>
            <h3 className='text-2xl font-bold'>
              Keep quality high — continuously
            </h3>
            <p className='mx-auto mt-2 max-w-2xl text-white/80'>
              Automations enforce guardrails and publish transparent artifacts
              for every run.
            </p>
            <div className='mt-6 flex flex-wrap justify-center gap-3'>
              <Link href='/automation'>
                <a className='rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover:bg-white'>
                  Get Started
                </a>
              </Link>
              <a
                href='/site-health'
                target='_blank'
                rel='noopener'
                className='rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10'
              >
                View Pipelines
<<<<<<< HEAD
              </a>            </div>
=======
              </a>
=======
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Artifacts</h2>
          <div className="mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-4 sm: grid-cols-2">
            <a href="/reports/seo/latest.json" className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30">Latest SEO Report JSON ↗</a>
            <a href="/reports/seo/index.html" className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30">SEO Audit Dashboard →</a>
          </div>
        </section>

=======
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Artifacts</h2>
          <div className="mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-4 sm: grid-cols-2">
            <a href="/reports/seo/latest.json" className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30">Latest SEO Report JSON ↗</a>
            <a href="/reports/seo/index.html" className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30">SEO Audit Dashboard →</a>
          </div>
        </section>

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl">
            <h3 className="text-2xl font-bold">Keep quality high — continuously</h3>
            <p className="mx-auto mt-2 max-w-2xl text-white/80">Automations enforce guardrails and publish transparent artifacts for every run.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/automation"><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover:bg-white">Get Started</a></Link>
              <a href="/site-health" target="_blank" rel="noopener" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">View Pipelines</a>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </div>
        </section>
      </main>
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
