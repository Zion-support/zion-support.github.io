<<<<<<< HEAD
import Head from 'next/head';

export default function SiteHealth() {
=======

  return (
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
            </Link>          </div>
        </nav>
      </header>

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

export default function SiteHealth() {


  return (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <div className="hidden gap-6 md:flex text-white/80">
            <Link href="/"><a>Home</a></Link>
            <Link href="/automation"><a>Automations</a></Link>
            <Link href="/reports/seo"><a>SEO Audit</a></Link>
            <Link href="/reports/ai-trends"><a>AI Trends</a></Link>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <a
              href='/site-health'
              target='_blank'
              rel='noopener'
<<<<<<< HEAD

                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="mt-1 text-sm text-white/75">{card.desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open →</div>

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              </Link>
            ))}
          </div>
        </section>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          <div className="animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl">
            <h3 className="text-2xl font-bold">Keep quality high — continuously</h3>
            <p className="mx-auto mt-2 max-w-2xl text-white/80">Automations enforce guardrails and publish transparent artifacts for every run.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/automation"><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover:bg-white">Get Started</a></Link>
              <a href="/site-health" target="_blank" rel="noopener" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">View Pipelines</a>

          </div>
        </section>
      </main>
    </div>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

        </nav>
      </header>
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
              <a
                href='/site-health'
                target='_blank'
                rel='noopener'
        <section className='mx - auto max - w-7xl px - 6 pb - 24'>;
          <div className='animated - border relative overflow - hidden rounded - 3xl border border - white / 10 bg - gradient - to - r from - fuchsia - 600 / 20 via - violet - 600 / 20 to - cyan - 600 / 20 p - 8 text - center backdrop - blur - xl'>;
            <h3 className='text - 2xl font - bold'>;
              Keep quality high — continuously;
            </h3>;
            <p className='mx - auto mt - 2 max - w-2xl text - white / 80'>;
              Automations enforce guardrails and publish transparent artifacts;
              for every run.;
            </p>;
            <div className='mt - 6 flex flex - wrap justify - center gap - 3'>;
              <Link href='/automation'>;
                <a className='rounded - xl bg - white / 90 px - 6 py - 3 font - semibold text - slate - 900 hover:bg - white'>;
                  Get Started;
                </a>;
              </Link>;
              <a;
                href='/site - health';
                target='_blank';
                rel='noopener';
                className='rounded - xl border border - white / 20 bg - white / 5 px - 6 py - 3 font - semibold backdrop - blur - md hover:bg - white / 10';
              >;
                View Pipelines;
              </a>            </div>        <section className="mx - auto max - w-7xl px - 6 pb - 24">;
          <div className="animated - border relative overflow - hidden rounded - 3xl border border - white / 10 bg - gradient - to - r from - fuchsia - 600 / 20 via - violet - 600 / 20 to - cyan - 600 / 20 p - 8 text - center backdrop - blur - xl">;
            <h3 className="text - 2xl font - bold">Keep quality high — continuously</h3>;
            <p className="mx - auto mt - 2 max - w-2xl text - white / 80">Automations enforce guardrails and publish transparent artifacts for every run.</p>;
            <div className="mt - 6 flex flex - wrap justify - center gap - 3">;
              <Link href="/automation"><a className="rounded - xl bg - white / 90 px - 6 py - 3 font - semibold text - slate - 900 hover:bg - white">Get Started</a></Link>;
              <a href="/site - health" target="_blank" rel="noopener" className="rounded - xl border border - white / 20 bg - white / 5 px - 6 py - 3 font - semibold backdrop - blur - md hover:bg - white / 10">View Pipelines</a>;
          </div>;
        </section>;
      </main>;
    </div>);
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
