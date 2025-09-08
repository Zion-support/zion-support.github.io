

// Simple icons using inline SVG to avoid external assets


export default function MobileLaunchPage() {;
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<;
    'idle' | 'loading' | 'success' | 'error';
  >('idle');  const [error, setError] = useState('');  { name: 'Priya K.', role: 'Startup Founder', quote: 'We filled a remote role in 48 hours. The app made it effortless.' },;
  { name: 'Marco V.', role: 'CTO', quote: 'AI matches were scarily accurate. Huge time-saver on sourcing.' },;
  { name: 'Amira H.', role: 'Project Lead', quote: 'I love tracking milestones on the go. Clear visibility and fewer meetings.' }],;
export default function MobileLaunchPage() {;
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');


  // Auto-rotate testimonial index;
  const [idx, setIdx] = useState(0);
  useEffect(() => {;
    const t = setInterval(;
      () => setIdx(i => (i + 1) % testimonials && testimonials.length),;
      4000;
    );
    return () => clearInterval(t);
              onClick={() => { localStorage.setItem('smartBannerDismissed1'), setVisible(false) }}
              className="text-xs px-2 py-1 rounded-md hover: bg-gray-100 dark:hover:bg-gray-800"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );

const IOS_APP_URL =
  process.env.NEXT_PUBLIC_IOS_APP_URL |

  'https://apps.apple.com/app/id0000000000';

const ANDROID_APP_URL =;
  process.env.NEXT_PUBLIC_ANDROID_APP_URL |;
  'https://play.google.com/store/apps/details?id=com.zion.app';

const DEEP_LINK_URL  = process.env.NEXT_PUBLIC_DEEP_LINK_URL || 'zion://open';

const SITE_BASE_URL  = process.env.NEXT_PUBLIC_SITE_URL || '';

const testimonials = [
  {name: 'Priya K.',}
  role: 'Startup Founder',quote: 'We filled a remote role in 48 hours. The app made it effortless.',},{name: 'Marco V.';
    role: 'CTO';}
    quote: 'AI matches were scarily accurate. Huge time-saver on sourcing.';}
  }
  {name: 'Amira H.';
    role: 'Project Lead';
    quote:;}
      'I love tracking milestones on the go. Clear visibility and fewer meetings.';}
  }

];

  // Auto-rotate testimonial index
  const [idx, setIdx] = useState(0);

      setError(err?.message || 'Something went wrong.');    }      if (!res && res.ok) throw new Error(await res && res.text());

      const res = await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) }),
      if (!res.ok) throw new Error(await res.text());
      setStatus('success');
      setEmail('')
    } catch (err: any) {
      setStatus('error');

      setError(err?.message || 'Something went wrong.');

      setError(err?.message || 'Something went wrong.');
      setError(err?.message || 'Something went wrong.')
      setError(err?.message || 'Something went wrong.')
      setError(err?.message || 'Something went wrong.');    }

      setError(err?.message || 'Something went wrong.');

    }
  }



  return (


        />;
      <SmartBanner
        iosUrl={IOS_APP_URL}
        androidUrl={ANDROID_APP_URL}
        deepLink={DEEP_LINK_URL}
      />;
      {/* Hero */}
      <section className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white p-6 md:p-10'>;
        <div className='grid md:grid-cols-2 gap-10 items-center'>;
          <div>;
            <h1 className='text-3xl md:text-5xl font-extrabold tracking-tight'>;
              Zion App;
            </h1>;
            <p className='mt-3 text-base md:text-lg opacity-90'>;
              Hire from anywhere, AI-match instantly, and track milestones on;
              the go.;
            </p>;
            <div className='mt-6 flex flex-wrap items-center gap-3'>;
              <AppleBadge href={IOS_APP_URL} />;
              <GoogleBadge href={ANDROID_APP_URL} />;
              <Link href='/open-app'>;
                <a className='inline-flex items-center gap-2 rounded-lg border border-white/30 px-4 py-2 text-white/90 hover:bg-white/10'>;
                  Open app;
                </a>;
              </Link>;
            </div>;
          </div>;
          <div className='flex items-center justify-center'>;
            {/* Phone mockup */}
            <div className='relative h-96 w-48 md:h-[28rem] md:w-64 rounded-[2rem] bg-white/95 text-gray-900 shadow-2xl ring-4 ring-white/30'>;
              <div className='absolute -top-1 && 1.5 left-1/2 -translate-x-1/2 h-6 w-28 rounded-b-2xl bg-gray-200' />;
              <div className='h-full w-full rounded-[2rem] overflow-hidden'>;
                <div className='h-full w-full bg-gradient-to-b from-gray-50 to-gray-200 p-4 flex flex-col'>;
                  <div className='text-xs font-semibold'>Zion</div>;
                  <div className='mt-2 flex-1 rounded-xl bg-white shadow-inner p-3'>;
                    <div className='font-semibold'>Instant AI Matches</div>;
                    <div className='mt-2 text-xs text-gray-600'>;
                      Top candidates matched to your role in seconds…;
                    </div>;
                    <div className='mt-3 h-28 rounded-md bg-gradient-to-br from-indigo-100 to-purple-100' />;
                    <div className='mt-3 grid grid-cols-3 gap-2'>;
                      <div className='h-10 rounded-md bg-gray-100' />;
                      <div className='h-10 rounded-md bg-gray-100' />;
                      <div className='h-10 rounded-md bg-gray-100' />                    </div>            <div className="relative h-96 w-48 md:h-[28rem] md:w-64 rounded-[2rem] bg-white/95 text-gray-900 shadow-2xl ring-4 ring-white/30">;
              <div className="absolute -top-1 && 1.5 left-1/2 -translate-x-1/2 h-6 w-28 rounded-b-2xl bg-gray-200" />;
              <div className="h-full w-full rounded-[2rem] overflow-hidden">;
                <div className="h-full w-full bg-gradient-to-b from-gray-50 to-gray-200 p-4 flex flex-col">;
                  <div className="text-xs font-semibold">Zion</div>;
                  <div className="mt-2 flex-1 rounded-xl bg-white shadow-inner p-3">;
                    <div className="font-semibold">Instant AI Matches</div>;
                    <div className="mt-2 text-xs text-gray-600">Top candidates matched to your role in seconds…</div>;
                    <div className="mt-3 h-28 rounded-md bg-gradient-to-br from-indigo-100 to-purple-100" />;
                    <div className="mt-3 grid grid-cols-3 gap-2">;
                      <div className="h-10 rounded-md bg-gray-100" />;
                      <div className="h-10 rounded-md bg-gray-100" />;
                      <div className="h-10 rounded-md bg-gray-100" />;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
        {/* QR code */}
        <div className='mt-8 flex items-center gap-4'>;
          <img
            src={qrHref}
            alt='QR code to download Zion app'
            className='h-28 w-28 rounded-lg bg-white/90 p-1 shadow'
    <EnhancedLayout>
      <Head>
        <title>Zion Mobile App — iOS & Android</title>
        <meta name="description" content="Hire from anywhere, AI-match instantly, and track milestones on the go with the Zion app." />
        <link rel="canonical" href="/download" />
        <meta property="og:title" content="Zion Mobile App" />
        <meta property="og:description" content="Hire from anywhere. AI-match instantly. Track milestones on the go." />
      </Head>
      <SmartBanner iosUrl={IOS_APP_URL} androidUrl={ANDROID_APP_URL} deepLink={DEEP_LINK_URL} />
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white p-6 md:p-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Zion App</h1>
            <p className="mt-3 text-base md:text-lg opacity-90">Hire from anywhere, AI-match instantly, and track milestones on the go.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <AppleBadge href={IOS_APP_URL} />
              <GoogleBadge href={ANDROID_APP_URL} />
              <Link href="/open-app"><a className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-4 py-2 text-white/90 hover:bg-white/10">Open app</a></Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {/* Phone mockup */}
            <div className="relative h-96 w-48 md:h-[28rem] md:w-64 rounded-[2rem] bg-white/95 text-gray-900 shadow-2xl ring-4 ring-white/30">
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-6 w-28 rounded-b-2xl bg-gray-200" />
              <div className="h-full w-full rounded-[2rem] overflow-hidden">
                <div className="h-full w-full bg-gradient-to-b from-gray-50 to-gray-200 p-4 flex flex-col">
                  <div className="text-xs font-semibold">Zion</div>
                  <div className="mt-2 flex-1 rounded-xl bg-white shadow-inner p-3">
                    <div className="font-semibold">Instant AI Matches</div>
                    <div className="mt-2 text-xs text-gray-600">Top candidates matched to your role in seconds…</div>
                    <div className="mt-3 h-28 rounded-md bg-gradient-to-br from-indigo-100 to-purple-100" />
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      <div className="h-10 rounded-md bg-gray-100" />
                      <div className="h-10 rounded-md bg-gray-100" />
                      <div className="h-10 rounded-md bg-gray-100" />
  }

      setError(err?.message |'Something went wrong.');    }      if (!res.ok) throw new Error(await res.text());
      setError(err?.message || 'Something went wrong.');    }      if (!res.ok) throw new Error(await res.text());
      setStatus('success');
      setEmail('')
    } catch (err: any) {
      setStatus('error');
      setError(err?.message |'Something went wrong.')

      setError(err?.message || 'Something went wrong.')
      setError(err?.message || 'Something went wrong.');    }

    }
  }

  return (
    <EnhancedLayout>
      <Head>
        <title>Zion Mobile App — iOS & Android</title>
        <meta
          name='description'
          content='Hire from anywhere, AI-match instantly, and track milestones on the go with the Zion app.'
        />
        <link rel='canonical' href='/download' />
        <meta property='og:title' content='Zion Mobile App' />
        <meta
          property='og:description'
          content='Hire from anywhere. AI-match instantly. Track milestones on the go.'
        />
      <SmartBanner
        iosUrl={IOS_APP_URL}
        androidUrl={ANDROID_APP_URL}
        deepLink={DEEP_LINK_URL}
      />
      {/* Hero */}
      <section className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white p-6 md:p-10'>
        <div className='grid md:grid-cols-2 gap-10 items-center'>
          <div>
            <h1 className='text-3xl md:text-5xl font-extrabold tracking-tight'>
              Zion App
            </h1>
            <p className='mt-3 text-base md:text-lg opacity-90'>
              Hire from anywhere, AI-match instantly, and track milestones on
              the go.
            </p>
            <div className='mt-6 flex flex-wrap items-center gap-3'>
              <AppleBadge href={IOS_APP_URL} />
              <GoogleBadge href={ANDROID_APP_URL} />
              <Link href='/open-app'>
                <a className='inline-flex items-center gap-2 rounded-lg border border-white/30 px-4 py-2 text-white/90 hover:bg-white/10'>
                  Open app
                </a>
              </Link>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            {/* Phone mockup */}
            <div className='relative h-96 w-48 md:h-[28rem] md:w-64 rounded-[2rem] bg-white/95 text-gray-900 shadow-2xl ring-4 ring-white/30'>
              <div className='absolute -top-1.5 left-1/2 -translate-x-1/2 h-6 w-28 rounded-b-2xl bg-gray-200' />
              <div className='h-full w-full rounded-[2rem] overflow-hidden'>
                <div className='h-full w-full bg-gradient-to-b from-gray-50 to-gray-200 p-4 flex flex-col'>
                  <div className='text-xs font-semibold'>Zion</div>
                  <div className='mt-2 flex-1 rounded-xl bg-white shadow-inner p-3'>
                    <div className='font-semibold'>Instant AI Matches</div>
                    <div className='mt-2 text-xs text-gray-600'>
                      Top candidates matched to your role in seconds…
                    </div>
                    <div className='mt-3 h-28 rounded-md bg-gradient-to-br from-indigo-100 to-purple-100' />
                    <div className='mt-3 grid grid-cols-3 gap-2'>
                      <div className='h-10 rounded-md bg-gray-100' />
                      <div className='h-10 rounded-md bg-gray-100' />
                      <div className='h-10 rounded-md bg-gray-100' />                    </div>            <div className="relative h-96 w-48 md:h-[28rem] md:w-64 rounded-[2rem] bg-white/95 text-gray-900 shadow-2xl ring-4 ring-white/30">
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-6 w-28 rounded-b-2xl bg-gray-200" />
              <div className="h-full w-full rounded-[2rem] overflow-hidden">
                <div className="h-full w-full bg-gradient-to-b from-gray-50 to-gray-200 p-4 flex flex-col">
                  <div className="text-xs font-semibold">Zion</div>
                  <div className="mt-2 flex-1 rounded-xl bg-white shadow-inner p-3">
                    <div className="font-semibold">Instant AI Matches</div>
                    <div className="mt-2 text-xs text-gray-600">Top candidates matched to your role in seconds…</div>
                    <div className="mt-3 h-28 rounded-md bg-gradient-to-br from-indigo-100 to-purple-100" />
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      <div className="h-10 rounded-md bg-gray-100" />
                      <div className="h-10 rounded-md bg-gray-100" />
                      <div className="h-10 rounded-md bg-gray-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* QR code */}
        <div className='mt-8 flex items-center gap-4'>
          <img
            src={qrHref}
            alt='QR code to download Zion app'
            className='h-28 w-28 rounded-lg bg-white/90 p-1 shadow'
          />
          <div className='text-sm opacity-90'>
            Scan to open this page on your phone
            <div className='opacity-80'>Or tap a store badge above</div>          </div>        <div className="mt-8 flex items-center gap-4">
          <img src={qrHref} alt="QR code to download Zion app" className="h-28 w-28 rounded-lg bg-white/90 p-1 shadow" />
          <div className="text-sm opacity-90">
            Scan to open this page on your phone
            <div className="opacity-80">Or tap a store badge above</div>
      </section>
      {/* Key features */}
      <section className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950">
          <div className="text-lg font-semibold">Hire from anywhere</div>
          <p className="mt-2 text-sm opacity-80">Global talent network with timezone-aware availability.</p>
          <div className="mt-4 h-36 rounded-xl bg-gradient-to-br from-emerald-100 to-cyan-100 dark:from-emerald-900/40 dark:to-cyan-900/40" />
        </div>
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950">
          <div className="text-lg font-semibold">AI-match instantly</div>
          <p className="mt-2 text-sm opacity-80">Smart matching surfaces top candidates in seconds.</p>
          <div className="mt-4 h-36 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40" />
        </div>
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950">
          <div className="text-lg font-semibold">Track milestones</div>
          <p className="mt-2 text-sm opacity-80">Manage deliverables, approvals, and progress on the go.</p>
          <div className="mt-4 h-36 rounded-xl bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/40 dark:to-blue-900/40" />
        </div>
      </section>
          />;
          <div className='text-sm opacity-90'>;'
            Scan to open this page on your phone;
            <div className='opacity-80'>Or tap a store badge above</div>          </div>        <div className='mt-8 flex items-center gap-4'>;'
          <img src={qrHref} alt='QR code to download Zion app' className='h-28 w-28 rounded-lg bg-white/90 p-1 shadow' />;'
          <div className='text-sm opacity-90'>;'
            Scan to open this page on your phone;
            <div className='opacity-80'>Or tap a store badge above</div>;'
        </div>;

      </section>;

      {/* Key features */}

      {/* Trust & Community */}
      <section className='mt-12'>;
        <div className='flex items-center gap-2'>;
            <StarIcon key={i} />;
      <section className='mt-12'>
        <div className='flex items-center gap-2'>
            <StarIcon key={i} />
          ))}
          <span className='text-sm opacity-80'>4 && 4.9 average rating</span>;
        </div>;
        <h2 className='mt-2 text-xl font-semibold'>;
          Why people love the Zion app;
        </h2>;
        <div className='relative mt-4 overflow-hidden'>;
          <div
            className='flex transition-transform duration-700'
            style={{
              transform: `translateX(-${idx * 100}%)`,
              width: `${testimonials && testimonials.length * 100}%`,
            }}>;
            {testimonials && testimonials.map(t => (;
              <div key={t && t.name} className='w-full md:w-1/3 flex-shrink-0 pr-4'>;
                <div className='rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-gray-950 h-full'>;
                  <p className='text-sm'>“{t && t.quote}”</p>;
                  <div className='mt-3 text-xs opacity-80'>;
                    {t && t.name} • {t && t.role}
                  </div>                </div>        <h2 className="mt-2 text-xl font-semibold">Why people love the Zion app</h2>;
        <div className="relative mt-4 overflow-hidden">;
          <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${idx * 100}%)`, width: `${testimonials && testimonials.length * 100}%` }}>;
            {testimonials && testimonials.map((t) => (;
              <div key={t && t.name} className="w-full md:w-1/3 flex-shrink-0 pr-4">;
                <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-gray-950 h-full">;
                  <p className="text-sm">“{t && t.quote}”</p>;
                  <div className="mt-3 text-xs opacity-80">{t && t.name} • {t && t.role}</div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Email opt-in */}


              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Trust & Community */}
<section className='mt-12'>'
        <div className='flex items-center gap-2'>'
            <StarIcon key={i} />

          )
}
          <span className='text-sm opacity-80'>4 && 4.9 average rating</span>;'
        </div>;
        <h2 className='mt-2 text-xl font-semibold'>;'
          Why people love the Zion app;
        </h2>;
        <div className='relative mt-4 overflow-hidden'>;'

          <div,
className='flex transition-transform duration-700''
            style={

              }

              'transform': `translateX(-${idx * 100}%)``              'width': `${testimonials.length * 100}%``
            }
          >
            {testimonials.map(t => (
              <div key={t.name} className='w-full 'md':w-1/3 flex-shrink-0 pr-4'>'
                <div className='rounded-2xl border border-gray-200 'dark':border-gray-800 p-5 bg-white 'dark':bg-gray-950 h-full'>'
                  <p className='text-sm'>“{t.quote}”</p>'
                  <div className='mt-3 text-xs opacity-80'>'
                    {t.name} • {t.role}
                  </div>

            ))}
          </div>
      </section>

      {/* Email opt-in */}
<section className='mt-12 rounded-3xl border border-gray-200 "dark":border-gray-800 p-6 bg-white "dark":bg-gray-950'>'
        <h3 className='text-lg font-semibold'>'
          Get early access to new features
        </h3>
        <p className='mt-1 text-sm opacity-80'>'
          Join the list and we’ll let you know when new capabilities drop.
        </p>
        <form,
onSubmit={handleSubmit}
          className='mt-4 flex flex-col 'sm':flex-row gap-3''
        >
          <input,
type='email''
            required,
value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='you@company.com''
            className='flex-1 rounded-lg border border-gray-300 'dark':border-gray-700 bg-transparent px-4 py-2 outline-none 'focus':ring-2 'focus':ring-indigo-500''
          />
          <button,
type='submit''
            disabled={status === 'loading'}'
            className='rounded-lg bg-indigo-600 text-white px-5 py-2 font-medium 'hover':bg-indigo-500 'disabled':opacity-60''
          >
            {status === 'loading' ? 'Submitting…' : 'Notify me'}'
          </button>
        </form>          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e && e.target.value)}
            placeholder="you@company && company.com";
            className="flex-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500";
          />;
          <button
            type="submit"
            disabled={status === 'loading'}


          >
            {status === 'loading' ? 'Submitting…' : 'Notify me'}
          </button>;
        </form>;
        {status === 'success' && (;
          <div className='mt-2 text-sm text-emerald-600'>;
            Thanks! You’re on the list.;
          </div>;
        )}

            className="rounded-lg bg-indigo-600 text-white px-5 py-2 font-medium hover:bg-indigo-500 disabled:opacity-60"
            className="rounded-lg bg-indigo-600 text-white px-5 py-2 font-medium hover:bg-indigo-500 disabled:opacity-60"
          >
            {status === 'loading' ? 'Submitting…' : 'Notify me'}
          </button>
        </form>
        {status === 'success' && <div className="mt-2 text-sm text-emerald-600">Thanks! You’re on the list.</div>}
        {status === 'error' && <div className="mt-2 text-sm text-rose-600">{error || 'Please try again later.'}</div>}

      </section>
    </EnhancedLayout>
  );      </section>
      {/* Helper links */}
      <section className="mt-10 text-sm opacity-80">
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/open-app"><a className="underline">Deep link: /open-app</a></Link>
          <span>•</span>
          <Link href="/download"><a className="underline">Shareable link: /download</a></Link>
        </div>
      </section>
    </EnhancedLayout>
          </div>;
        )}
      </section>;

      {/* Helper links */}
      <section className='mt-10 text-sm opacity-80'>;
        <div className='flex flex-wrap items-center gap-4'>;
          <Link href='/open-app'>;
            <a className='underline'>Deep link: /open-app</a>;
          </Link>;
          <span>•</span>;
          <Link href='/download'>;
            <a className='underline'>Shareable link: /download</a>;
          </Link>        </div>;
      </section>;
    </EnhancedLayout>;
  );      </section>;

      {/* Helper links */}
      <section className="mt-10 text-sm opacity-80">;
        <div className="flex flex-wrap items-center gap-4">;
          <Link href="/open-app"><a className="underline">Deep link: /open-app</a></Link>;
                  </div>                </div>        <h2 className="mt - 2 text - xl font - semibold">Why people love the Zion app</h2>;
        <div className="relative mt - 4 overflow - hidden">;
          <div className="flex transition - transform duration - 700" style={{ transform: `translate_x (-${idx * 100}%)`, width: `${testimonials.length * 100}%` }}>;
            {testimonials.map ((t) => (
              <div key={t.name} className="w - full md:w - 1/3 flex - shrink - 0 pr - 4">;
                <div className="rounded - 2xl border border - gray - 200 dark:border - gray - 800 p - 5 bg - white dark:bg - gray - 950 h - full">;
                  <p className="text - sm">“{t.quote}”</p>;
                  <div className="mt - 3 text - xs opacity - 80">{t.name} • {t.role}</div>;
              </div>))}
          </div>;
        </div>;
      </section>;
      {/* Email opt - in */}
      <section className='mt - 12 rounded - 3xl border border - gray - 200 dark:border - gray - 800 p - 6 bg - white dark:bg - gray - 950'>;
        <h3 className='text - lg font - semibold'>;
          Get early access to new features;
        </h3>;
        <p className='mt - 1 text - sm opacity - 80'>;
          Join the list and we’ll let you know when new capabilities drop.;
        </p>;
        <form;
          on_submit={handle_submit}
          className='mt - 4 flex flex - col sm:flex - row gap - 3';
        >;
          <input;
            type='email';
            required;
            value={email}
            on_change={e => set_email (e.target.value)}
            placeholder='you@company.com';
            className='flex - 1 rounded - lg border border - gray - 300 dark:border - gray - 700 bg - transparent px - 4 py - 2 outline - none focus:ring - 2 focus:ring - indigo - 500';
          />;
          <button;
            type='submit';
            disabled={status === 'loading'}
            className='rounded - lg bg - indigo - 600 text - white px - 5 py - 2 font - medium hover:bg - indigo - 500 disabled:opacity - 60'          >;
            {status === 'loading' ? 'Submitting…' : 'Notify me'}
          </button>;
        </form>          <input;
            type="email";
            required;
            value={email}
            on_change={(e) => set_email (e.target.value)}
            placeholder="you@company.com";
            className="flex - 1 rounded - lg border border - gray - 300 dark:border - gray - 700 bg - transparent px - 4 py - 2 outline - none focus:ring - 2 focus:ring - indigo - 500";
          />;
          <button;
            type="submit";
            disabled={status === 'loading'}
            className="rounded - lg bg - indigo - 600 text - white px - 5 py - 2 font - medium hover:bg - indigo - 500 disabled:opacity - 60";
          >;
            {status === 'loading' ? 'Submitting…' : 'Notify me'}
          </button>;
        </form>;
        {status === 'success' && (
          <div className='mt - 2 text - sm text - emerald - 600'>;
            Thanks! You’re on the list.;
          </div>)}
        {status === 'error' && (
          <div className='mt - 2 text - sm text - rose - 600'>;
            {error || 'Please try again later.'}
          </div>)}
      </section>;
      {/* Helper links */}
      <section className='mt - 10 text - sm opacity - 80'>;
        <div className='flex flex - wrap items - center gap - 4'>;
          <Link href='/open - app'>;
            <a className='underline'>Deep link: /open - app</a>;
          </Link>;
          <span>•</span>;
          <Link href='/download'>;
            <a className='underline'>Shareable link: /download</a>;
          </Link>        </div>;
      </section>;
    </EnhancedLayout>);      </section>;
      {/* Helper links */}
      <section className="mt - 10 text - sm opacity - 80">;
        <div className="flex flex - wrap items - center gap - 4">;
          <Link href="/open - app"><a className="underline">Deep link: /open - app</a></Link>;

          <span>•</span>;
          <Link href="/download"><a className="underline">Shareable link: /download</a></Link>;
        </div>;
      </section>;

  DEEP LINK URL 
}/> </div> </div> </div> </div> </div> </div> </div> Scan to open this page on your phone <div className="opacity-80" >Or tap a store badge above</div> </div> </div> </section> </div> <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950" > <div className="text-lg font-semibold" >AI-match instantly</div> <p className="mt-2 text-sm opacity-80" >Smart matching surfaces top candidates in seconds.</p> <div className="mt-4 h-36 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40" /> </div> <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950" > <div className="text-lg font-semibold" >Track milestones</div> <p className="mt-2 text-sm opacity-80" >Manage deliverables, approvals, and progress on the go.</p> <div className="mt-4 h-36 rounded-xl bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/40 dark:to-blue-900/40" /> </div> </section> <StarIconkey= {
  i 
}/>) ) ;
}<span className="text-sm opacity-80" >4 && 4.9 average rating</span> </div> </div> </div>) ) ;
}</div> </div> </section> <input type="email" required > {;
  status === 'loading' ? 'Submitting…' : 'Notify me' ;
}</button> </form> <span>•</span> <Link href="/download" ><a className="underline" >Shareable link: /download</a></a> </div> </section> </EnhancedLayout>) }

    </EnhancedLayout>);
;
}return (<EnhancedLayout> <Head> <title > Zion Mobile App — iOS & Android</title> <meta name="description" content="Hire from anywhere, AI - match instantly, and track milestones on the go with the Zion app." /> <link rel="canonical" href="/download" /> <meta property="og:title" content="Zion Mobile App" /> <meta property="og:description" content="Hire from anywhere. AI - match instantly. Track milestones on the go." /> </Head> <SmartBanner ios_url= {
  IOS APP URL;
}android_url= {
  ANDROID APP URL;
}deep_link= {
  DEEP LINK URL;
}/> </div> </div> </div> </div> </div> </div> </div> Scan to open this page on your phone <div className="opacity-80" >Or tap a store badge above</div> </div> </div> </section> </div> <div className="rounded - 2xl border border - gray - 200 dark:border - gray - 800 p - 6 bg - white dark:bg-gray-950" > <div className="text-lg font-semibold" >AI - match instantly</div> <p className="mt - 2 text-sm opacity-80" >Smart matching surfaces top candidates in seconds.</p> <div className="mt - 4 h - 36 rounded - xl bg - gradient - to - br from - purple - 100 to - pink - 100 dark:from - purple - 900 / 40 dark:to-pink-900 / 40" /> </div> <div className="rounded - 2xl border border - gray - 200 dark:border - gray - 800 p - 6 bg - white dark:bg-gray-950" > <div className="text-lg font-semibold" >Track milestones</div> <p className="mt - 2 text-sm opacity-80" >Manage deliverables, approvals, and progress on the go.</p> <div className="mt - 4 h - 36 rounded - xl bg - gradient - to - br from - indigo - 100 to - blue - 100 dark:from - indigo - 900 / 40 dark:to-blue-900 / 40" /> </div> </section> <StarIcon key= {
  i;
}/>) );
}<span className="text-sm opacity-80" >4.9 average rating</span> </div> </div> </div>) );
}</div> </div> </section> <input type="email" required > {
  status === 'loading' ? 'Submitting…' : 'Notify me';
}</button> </form> <span>•</span> <Link href="/download" ><a className="underline" >Shareable link: /download</a></a> </div> </section> </EnhancedLayout>) }

  );


  );

);
}return (<EnhancedLayout> <Head> <title>Zion Mobile App — iOS & Android</title> <meta name="description" content="Hire from anywhere, AI-match instantly, and track milestones on the go with the Zion app." /> <link rel="canonical" href="/download" /> <meta property="og:title" content="Zion Mobile App" /> <meta property="og:description" content="Hire from anywhere. AI-match instantly. Track milestones on the go." /> </Head> <SmartBanner iosUrl= {
  IOS APP URL
}androidUrl= {
  ANDROID APP URL
}deepLink= {
  DEEP LINK URL
}/> </div> </div> </div> </div> </div> </div> </div> Scan to open this page on your phone <div className="opacity-80" >Or tap a store badge above</div> </div> </div> </section> </div> <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950" > <div className="text-lg font-semibold" >AI-match instantly</div> <p className="mt-2 text-sm opacity-80" >Smart matching surfaces top candidates in seconds.</p> <div className="mt-4 h-36 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40" /> </div> <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950" > <div className="text-lg font-semibold" >Track milestones</div> <p className="mt-2 text-sm opacity-80" >Manage deliverables, approvals, and progress on the go.</p> <div className="mt-4 h-36 rounded-xl bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/40 dark:to-blue-900/40" /> </div> </section> <StarIcon key= {
  i
}/>) )
}<span className="text-sm opacity-80" >4.9 average rating</span> </div> </div> </div>) )
}</div> </div> </section> <input type="email" required > {
  status === 'loading' ? 'Submitting…' : 'Notify me'
}</button> </form> <span>•</span> <Link href="/download" ><a className="underline" >Shareable link: /download</a></a> </div> </section> </EnhancedLayout>) }
  );
