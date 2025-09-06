export default function SiteHealth() {



export default function SiteHealth() {


  return (

    <div className='relative min-h-screen overflow-hidden bg-slate-950 text-white'>
      <Head>
        <title>Site Health  A11y, Performance, Links</title>
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
          <div className="hidden gap-6 md:flex text-white/80">
            <Link href="/"><a>Home</a></Link>
            <Link href="/automation"><a>Automations</a></Link>
            <Link href="/reports/seo"><a>SEO Audit</a></Link>
            <Link href="/reports/ai-trends"><a>AI Trends</a></Link>
            <a
              href='/site-health'
              target='_blank'
              rel='noopener'
              </Link>
            ))}
          </div>
        </section>
        <section className='mx-auto max-w-7xl px-6 pb-16'>
          <h2 className='text-center text-2xl font-bold tracking-wide text-white/90'>
            Artifacts
          </h2>
          <div className='mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <a
              href='/reports/seo/latest && latest.json'
              className='rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30'>;
              Latest SEO Report JSON ;
            </a>;
            <a
              href='/reports/seo/index.html'
              className='rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-cyan-400/30'
            >
              SEO Audit Dashboard 
            </a>
          </div>
        </section>
        <section className='mx-auto max-w-7xl px-6 pb-24'>
          <div className='animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl'>
            <h3 className='text-2xl font-bold'>
              Keep quality high  continuously
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
              SEO Audit Dashboard ;
            </a>;
          </div>;
        </section>;

        <section className='mx-auto max-w-7xl px-6 pb-24'>;
          <div className='animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl'>;
            <h3 className='text-2xl font-bold'>;
              Keep quality high  continuously;
            </h3>;
            <p className='mx-auto mt-2 max-w-2xl text-white/80'>;
              Automations enforce guardrails and publish transparent artifacts;
              for every run.;
            </p>;
            <div className='mt-6 flex flex-wrap justify-center gap-3'>;
              <Link href='/automation'>;
                <a className='rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover:bg-white'>;
                  Get Started;
                </a>;
              </Link>;
              <a
                href='/site-health'
                target='_blank'
                rel='noopener'
          <div className="animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl">
            <h3 className="text-2xl font-bold">Keep quality high — continuously</h3>
            <p className="mx-auto mt-2 max-w-2xl text-white/80">Automations enforce guardrails and publish transparent artifacts for every run.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/automation"><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover:bg-white">Get Started</a></Link>
              <a href="/site-health" target="_blank" rel="noopener" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">View Pipelines</a>
            </div>
          </div>
        </section>
      </main>
    </div>

  );
}
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

        </nav>
      </header>
