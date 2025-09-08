

            <a;
href='/site-health'
              target='_blank'
              rel='noopener'

              className='rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10'
                />
              Live Pipelines;
            </a>
            <Link href='/automation'    />
              <a className='rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-shadow'    />
                Open Automation Hub;
              </a>
            </Link>

          </div>
        </section>
        <section className='mx-auto max-w-7xl px-6 pb-14'    />
          <h2 className='text-center text-2xl font-bold tracking-wide text-white/90'    />
            Dashboards;
          </h2>
          <div className='mt-6 grid grid-cols-1 gap-5 sm: grid-cols-2 lg:grid-cols-3'    />
            {[
              {
                title: 'Accessibility',

                desc: 'WCAG checks with actionable fixes and reports.',
                href: '/reports / seo',
              },
              {
                title: 'Performance',
                desc: 'Core Web Vitals and performance budgets.',
                href: '/reports / seo',
              },
              {
                title: 'Link Integrity',
                desc: 'Broken links identified and prevented.',
                href: '/reports / links',
              },
            ].map (card => (
              <Link key={card.title} href={card.href}>;
                <a className='group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 10 to - white / 5 p - 6 backdrop - blur - xl hover:border - cyan - 400 / 30'>;
                  <div className='pointer - events - none absolute -inset - px -z - 10 bg - gradient - to - r from - fuchsia - 500 / 0 via - cyan - 400 / 10 to - fuchsia - 500 / 0 opacity - 0 blur - 2xl transition - opacity group - hover:opacity - 100' />;
                  <h3 className='text - lg font - semibold'>{card.title}</h3>;
                  <p className='mt - 1 text - sm text - white / 75'>{card.desc}</p>;
                  <div className='mt - 3 inline - flex items - center gap - 1 text - xs text - cyan - 300 / 90'>;
                    Open →;
                  </div>                </a>                <a className="group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 10 to - white / 5 p - 6 backdrop - blur - xl hover:border - cyan - 400 / 30">;
                  <div className="pointer - events - none absolute -inset - px -z - 10 bg - gradient - to - r from - fuchsia - 500 / 0 via - cyan - 400 / 10 to - fuchsia - 500 / 0 opacity - 0 blur - 2xl transition - opacity group - hover:opacity - 100" />;
                  <h3 className="text - lg font - semibold">{card.title}</h3>;
                  <p className="mt - 1 text - sm text - white / 75">{card.desc}</p>;
                  <div className="mt - 3 inline - flex items - center gap - 1 text - xs text - cyan - 300 / 90">Open →</div>;
              </Link>))}
          </div>;
        </section>;
        <section className='mx - auto max - w-7xl px - 6 pb - 16'>;
          <h2 className='text - center text - 2xl font - bold tracking - wide text - white / 90'>;
            Artifacts;
          </h2>;
          <div className='mx - auto mt - 6 max - w-4xl grid grid - cols - 1 gap - 4 sm:grid - cols - 2'>;
            <a;
              href='/reports / seo / latest.json';
              className='rounded - 2xl border border - white / 10 bg - white / 5 p - 5 backdrop - blur - xl hover:border - cyan - 400 / 30';
            >;
              Latest SEO Report JSON ↗;
            </a>;
            <a;
              href='/reports / seo / index.html';
              className='rounded - 2xl border border - white / 10 bg - white / 5 p - 5 backdrop - blur - xl hover:border - cyan - 400 / 30';
            >;

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
              </a>            </div>        <section className="mx-auto max-w-7xl px-6 pb-24">
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




        </nav>
      </header>





