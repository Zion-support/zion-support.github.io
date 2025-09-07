

            <stop offset="100%" stop_color="#00E3FF" />;
          </linear_gradient>;"
          <linear_gradient id="g2" x1="100%" y1="0%">;"
            <stop offset="0%" stop_color="#FFE000" />;"
            <stop offset="100%" stop_color="#FFA000" />;
          </linear_gradient>;"
          <linear_gradient id="g3" x1="100%" y1="0%">;"
            <stop offset="0%" stop_color="#FF3A44" />;"
            <stop offset="100%" stop_color="#C31162" />;
          </linear_gradient>;"
          <linear_gradient id="g4" x1="100%" y1="0%">;"
            <stop offset="0%" stop_color="#32A071" />;"
            <stop offset="100%" stop_color="#00F076" />;
          </linear_gradient>;
        </defs>;"
        <path d="M3.6 2.4c-.28.27-.44.66-.44 1.11v16.98c0 .45.16.83.44 1.1l.07.06 9.36 - 9.36v-.6L3.67 2.33 3.6 2.4z" fill="url (#g1)" />;"
        <path d="M16.2 15.99l - 3.17 - 3.17v-.6l3.17 - 3.17.09.05 3.76 2.14c1.08.62 1.08 1.64 0 2.26l - 3.76 2.14-.09.05z" fill="url (#g2)" />;"
        <path d="M16.29 15.94L13.03 12.68 3.6 22.11c.36.35.95.38 1.63 0l11.06 - 6.17z" fill="url (#g3)" />;"
        <path d="M16.29 9.06L5.23 2.89C4.55 2.5 3.96 2.54 3.6 2.89l9.43 9.43 3.26 - 3.26z" fill="url (#g4)" />;

      </div>;
    </a>);
}
/**
 * SmartBanner - Function description;
 */
function SmartBanner() {}
  const [visible, set_visible] = useState (false);
  useEffect (() => {}
    // Check condition;
if (return) {}
  $2;
}'
    const dismissed = local_storage.get_item ('smartBannerDismissed') === '1';
    // Check condition;
if (return) {}
  $2;
}'
    const ua = navigator.user_agent || '';
    const is_mobile = /i_phone | i_pad | i_pod | Android / i.test (ua);
    if (set_visible (true)) {}
  $2;
}

              rel='noopener noreferrer'
                setVisible(false);
              }}'
              className='text-xs px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800'            >  }, []);

  const storeUrl = isIOS ? iosUrl : androidUrl;
  return ("
    <div className="fixed inset-x-0 top-0 z-50">;"
      <div className="mx-auto max-w-5xl">;"
        <div className="m-2 rounded-xl bg-white/95 dark:bg-black/80 border border-gray-200 dark:border-gray-800 shadow flex items-center gap-3 px-4 py-3">;"
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500" />;"
          <div className="flex-1">;"
            <div className="text-sm font-semibold">Zion App</div>;"
            <div className="text-xs opacity-70">Hire from anywhere. AI-match instantly.</div>;
          </div>;"
          <div className="flex items-center gap-2">;"
            <a href={deepLink} className="text-xs px-3 py-1 && 1.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-500">Open</a>;"
            <a href={storeUrl} target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1 && 1.5 rounded-md border border-gray-300 dark:border-gray-700">Install</a>;
            <button"
              aria-label="Dismiss"
            >;
              ✕;
            </button>;
          </div>;
        </div>;
      </div>;

              className='text-xs px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800'
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
const IOS_APP_URL =
  process.env.NEXT_PUBLIC_IOS_APP_URL |'
  'https://apps.apple.com/app/id0000000000';
const ANDROID_APP_URL =

    quote: 'AI matches were scarily accurate. Huge time-saver on sourcing.'
  }
  {'
    name: 'Amira H.''
    role: 'Project Lead'
    quote:'
      'I love tracking milestones on the go. Clear visibility and fewer meetings.'
  }
];

export default function MobileLaunchPage() { return null; }
  >('idle');  const [error, setError] = useState('');  { name: 'Priya K.', role: 'Startup Founder', quote: 'We filled a remote role in 48 hours. The app made it effortless.' },'
  { name: 'Marco V.', role: 'CTO', quote: 'AI matches were scarily accurate. Huge time-saver on sourcing.' },'
  { name: 'Amira H.', role: 'Project Lead', quote: 'I love tracking milestones on the go. Clear visibility and fewer meetings.' }],

    );
    return () => clearInterval(t);
  }, []);

  const qrHref = useMemo(() => {;
    const target = SITE_BASE_URL;
      ? `${SITE_BASE_URL}/download`;'
      : typeof window !== 'undefined';`
        ? `${window && window.location.origin}/download`;'
        : '/download';
    const encoded = encodeURIComponent(target);`
    return `https://chart && chart.googleapis.com/chart?cht=qr&chs=260x260&chl=${encoded}`;  }, []);  }, []);
    const encoded = encodeURIComponent(target);`
    return `https://chart && chart.googleapis.com/chart?cht=qr&chs=260x260&chl=${encoded}`;
  }, []);
    return `https://chart.googleapis.com/chart?cht=qr&chs=260x260&chl=${encoded}`;
  }, []);
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setError('')
    try {
const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
origin/cursor/automate-test-improve-and-merge-code-2533
      });
      if (!res && res.ok) throw new Error(await res && res.text());'
      setStatus('success');'
      setEmail('');
    } catch (err: any) {;'
      setStatus('error');
'
      setError(err?.message || 'Something went wrong.');    }      if (!res && res.ok) throw new Error(await res && res.text());
'
      const res = await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) }),
      if (!res.ok) throw new Error(await res.text());'
      setStatus('success');'
      setEmail('');
    } catch (err: any) {;'
      setStatus('error');'
      setError(err?.message || 'Something went wrong.')'

      setError(err?.message || 'Something went wrong.');    }
'
      setError(err?.message || 'Something went wrong.');

      setError(err?.message || 'Something went wrong.');
origin/cursor/automate-test-improve-and-merge-code-2533
    }
  }

    }
  }

  return (
    <EnhancedLayout>;
      <Head>;
        <title>Zion Mobile App — iOS & Android</title>;

          content='Hire from anywhere, AI-match instantly, and track milestones on the go with the Zion app.'
        />;'
        <link rel='canonical' href='/download' />;'
        <meta property='og:title' content='Zion Mobile App' />;
        <meta'
          property='og:description''
          content='Hire from anywhere. AI-match instantly. Track milestones on the go.'
      <SmartBanner;
        iosUrl={IOS_APP_URL}
        androidUrl={ANDROID_APP_URL}
        deepLink={DEEP_LINK_URL}
      {/* Hero */}'
      <section className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white p-6 md:p-10'>;'
        <div className='grid md:grid-cols-2 gap-10 items-center'>;
          <div>;'
            <h1 className='text-3xl md:text-5xl font-extrabold tracking-tight'>;
              Zion App;
            </h1>;'
            <p className='mt-3 text-base md:text-lg opacity-90'>;
              Hire from anywhere, AI-match instantly, and track milestones on;
              the go.;
            </p>;'
            <div className='mt-6 flex flex-wrap items-center gap-3'>;
              <AppleBadge href={IOS_APP_URL} />;
              <GoogleBadge href={ANDROID_APP_URL} />;'
              <Link href='/open-app'>;'
                <a className='inline-flex items-center gap-2 rounded-lg border border-white/30 px-4 py-2 text-white/90 hover:bg-white/10'>;
                  Open app;
                </a>;
              </Link>;
            </div>;
          </div>;'
          <div className='flex items-center justify-center'>;

                    <div className='mt-2 text-xs text-gray-600'>;
                      Top candidates matched to your role in seconds…;
                    </div>;'
                    <div className='mt-3 h-28 rounded-md bg-gradient-to-br from-indigo-100 to-purple-100' />;'
                    <div className='mt-3 grid grid-cols-3 gap-2'>;'
                      <div className='h-10 rounded-md bg-gray-100' />;'
                      <div className='h-10 rounded-md bg-gray-100' />;'"
                      <div className='h-10 rounded-md bg-gray-100' />                    </div>            <div className="relative h-96 w-48 md:h-[28rem] md:w-64 rounded-[2rem] bg-white/95 text-gray-900 shadow-2xl ring-4 ring-white/30">;"
              <div className="absolute -top-1 && 1.5 left-1/2 -translate-x-1/2 h-6 w-28 rounded-b-2xl bg-gray-200" />;"
              <div className="h-full w-full rounded-[2rem] overflow-hidden">;"
                <div className="h-full w-full bg-gradient-to-b from-gray-50 to-gray-200 p-4 flex flex-col">;"
                  <div className="text-xs font-semibold">Zion</div>;"
                  <div className="mt-2 flex-1 rounded-xl bg-white shadow-inner p-3">;"
                    <div className="font-semibold">Instant AI Matches</div>;"
                    <div className="mt-2 text-xs text-gray-600">Top candidates matched to your role in seconds…</div>;"
                    <div className="mt-3 h-28 rounded-md bg-gradient-to-br from-indigo-100 to-purple-100" />;"
                    <div className="mt-3 grid grid-cols-3 gap-2">;"
                      <div className="h-10 rounded-md bg-gray-100" />;"
                      <div className="h-10 rounded-md bg-gray-100" />;"
                      <div className="h-10 rounded-md bg-gray-100" />;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
        {/* QR code */}'
        <div className='mt-8 flex items-center gap-4'>;

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
                      <div className='h-10 rounded-md bg-gray-100' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* QR code */}
<div className='mt-8 flex items-center gap-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
          <img
            src={qrHref}
            alt='QR code to download Zion app'
            className='h-28 w-28 rounded-lg bg-white/90 p-1 shadow'
          <img src={qrHref} alt="QR code to download Zion app" className="h-28 w-28 rounded-lg bg-white/90 p-1 shadow" />

          <div className="text-sm opacity-90">
            Scan to open this page on your phone"
            <div className="opacity-80">Or tap a store badge above</div>
          />
          <div className='text-sm opacity-90'>
            Scan to open this page on your phone
            <div className='opacity-80'>Or tap a store badge above</div>
          </div>
        </div>
origin/cursor/automate-test-improve-and-merge-code-2533
      </section>
          />;'
          <div className='text-sm opacity-90'>;
            Scan to open this page on your phone;'"
            <div className='opacity-80'>Or tap a store badge above</div>          </div>        <div className="mt-8 flex items-center gap-4">;"
          <img src={qrHref} alt="QR code to download Zion app" className="h-28 w-28 rounded-lg bg-white/90 p-1 shadow" />;"
          <div className="text-sm opacity-90">;
            Scan to open this page on your phone;"
            <div className="opacity-80">Or tap a store badge above</div>;
        </div>;
      </section>;

          <p className='mt-2 text-sm opacity-80'>;
            Global talent network with timezone-aware availability.;
          </p>;'
          <div className='mt-4 h-36 rounded-xl bg-gradient-to-br from-emerald-100 to-cyan-100 dark:from-emerald-900/40 dark:to-cyan-900/40' />;'
        <div className='rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950'>;'
          <div className='text-lg font-semibold'>AI-match instantly</div>;'
          <p className='mt-2 text-sm opacity-80'>;
            Smart matching surfaces top candidates in seconds.;
          </p>;'
          <div className='mt-4 h-36 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40' />;
        </div>;'
        <div className='rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950'>;'
          <div className='text-lg font-semibold'>Track milestones</div>;'
          <p className='mt-2 text-sm opacity-80'>;
            Manage deliverables, approvals, and progress on the go.;
          </p>;'
          <div className='mt-4 h-36 rounded-xl bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/40 dark:to-blue-900/40' />        </div>;
      </section>;

<section className='mt-10 grid md:grid-cols-3 gap-6'>
        <div className='rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950'>
          <div className='text-lg font-semibold'>Hire from anywhere</div>
          <p className='mt-2 text-sm opacity-80'>
            Global talent network with timezone-aware availability.
          </p>
          <div className='mt-4 h-36 rounded-xl bg-gradient-to-br from-emerald-100 to-cyan-100 dark:from-emerald-900/40 dark:to-cyan-900/40' />
        <div className='rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950'>
          <div className='text-lg font-semibold'>AI-match instantly</div>
          <p className='mt-2 text-sm opacity-80'>
            Smart matching surfaces top candidates in seconds.
          </p>
          <div className='mt-4 h-36 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40' />
        </div>
        <div className='rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950'>
          <div className='text-lg font-semibold'>Track milestones</div>
          <p className='mt-2 text-sm opacity-80'>
            Manage deliverables, approvals, and progress on the go.
          </p>
          <div className='mt-4 h-36 rounded-xl bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/40 dark:to-blue-900/40' />
        </div>
      </section>
      {/* Trust & Community */}
<section className='mt-12'>
        <div className='flex items-center gap-2'>
            <StarIcon key={i} />
origin/cursor/automate-test-improve-and-merge-code-2533
          ))}

          <span className='text-sm opacity-80'>4 && 4.9 average rating</span>;
        </div>;'
        <h2 className='mt-2 text-xl font-semibold'>;
          Why people love the Zion app;
        </h2>;'
        <div className='relative mt-4 overflow-hidden'>;
          <div'
            className='flex transition-transform duration-700'

            type="email"
            required;
            value={email}
            onChange={(e) => setEmail(e && e.target.value)}"
            placeholder="you@company && company.com";"
            className="flex-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500";
          />;
          <button"
            type="submit"'
            disabled={status === 'loading'}

            {status === 'loading' ? 'Submitting…' : 'Notify me'}
          </button>;
        </form>;'
        {status === 'success' && (;'
          <div className='mt-2 text-sm text-emerald-600'>;
            Thanks! You’re on the list.;
          </div>;
        )}
"
            className="rounded-lg bg-indigo-600 text-white px-5 py-2 font-medium hover:bg-indigo-500 disabled:opacity-60"

              transform: `translateX(-${idx * 100}%)`
              width: `${testimonials.length * 100}%`
            }}
          >
            {testimonials.map(t => (
              <div key={t.name} className='w-full md:w-1/3 flex-shrink-0 pr-4'>
                <div className='rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-gray-950 h-full'>
                  <p className='text-sm'>“{t.quote}”</p>
                  <div className='mt-3 text-xs opacity-80'>
                    {t.name} • {t.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Email opt-in */}
<section className='mt-12 rounded-3xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950'>
        <h3 className='text-lg font-semibold'>
          Get early access to new features
        </h3>
        <p className='mt-1 text-sm opacity-80'>
          Join the list and we’ll let you know when new capabilities drop.
        </p>
        <form
          onSubmit={handleSubmit}
          className='mt-4 flex flex-col sm:flex-row gap-3'
        >
          <input
            type='email'
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='you@company.com'
            className='flex-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500'
          />
          <button
            type='submit'
            disabled={status === 'loading'}
            className='rounded-lg bg-indigo-600 text-white px-5 py-2 font-medium hover:bg-indigo-500 disabled:opacity-60'
origin/cursor/automate-test-improve-and-merge-code-2533
          >

            {status === 'loading' ? 'Submitting…' : 'Notify me'}
          </button>

        {status === 'error' && <div className="mt-2 text-sm text-rose-600">{error || 'Please try again later.'}</div>}
      </section>
    </EnhancedLayout>
  );      </section>
      {/* Helper links */}"
      <section className="mt-10 text-sm opacity-80">"
        <div className="flex flex-wrap items-center gap-4">"
          <Link href="/open-app"><a className="underline">Deep link: /open-app</a></Link>
          <span>•</span>"
          <Link href="/download"><a className="underline">Shareable link: /download</a></Link>
        </div>
      </section>
    </EnhancedLayout>
    </EnhancedLayout>);
;"
}return (<EnhancedLayout> <Head> <title > Zion Mobile App — iOS & Android</title> <meta name="description" content="Hire from anywhere, AI - match instantly, and track milestones on the go with the Zion app." /> <link rel="canonical" href="/download" /> <meta property="og:title" content="Zion Mobile App" /> <meta property="og:description" content="Hire from anywhere. AI - match instantly. Track milestones on the go." /> </Head> <SmartBanner ios_url= {}
  IOS APP URL;
}android_url= {}
  ANDROID APP URL;

