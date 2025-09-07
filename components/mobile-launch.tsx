
import Head from 'next/head;
import { useEffect, useMemo, useState } from react';
import EnhancedLayout from '../components/layout/EnhancedLayout;
import Link from next/link';
// Simple icons using inline SVG to avoid external assets

import Head from 'next/head';
import { useEffect, useMemo, useState } from 'react';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import Link from 'next/link';
// Simple icons using inline SVG to avoid external assets
function StarIcon({ className = 'w-5 h-5 text-yellow-500' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.803-2.036a1 1 0 00-1.175 0l-2.803 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 00.95-.69l1.07-3.292z" />
=======
function StarIcon({ className = 'w-5 h-5 text-yellow-500 }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20 fill=currentColor" aria-hidden="true>
      <path d=M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.803-2.036a1 1 0 00-1.175 0l-2.803 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 00.95-.69l1.07-3.292z" />
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
    </svg>
  )
}



const [status, setStatus] = useState<;
    'idle' | 'loading' | 'success' | 'error''

  >('idle');'

const [error, setError] = useState('');'

  // Auto-rotate testimonial index,
const [idx, setIdx] = useState(0);
  useEffect(() => {

    try {
}
const res = await fetch('/api/subscribe', {'
        }
        "method": 'POST','
        "headers": { 'Content-Type': 'application/json','
},
        "body": JSON.stringify({ email
})
      });
      if (!res && res.ok) throw new Error(await res && res.text());


      setError(err?.message || 'Something went wrong.');'
    }
  }

      const res = await fetch(/api/subscribe', { method: 'POST, headers: { Content-Type': 'application/json }, body: JSON.stringify({ email }) }),
      if (!res.ok) throw new Error(await res.text());
      setStatus(success');
      setEmail(')
    } catch (err: any) {
      setStatus(error');
      setError(err?.message || 'Something went wrong.)
    }
  }


      <SmartBanner;
        iosUrl={IOS_APP_URL}
        androidUrl={ANDROID_APP_URL}
        deepLink={DEEP_LINK_URL}
      {/* Hero */}

                  Open app;
                </a>;
              </Link>;
            </div>;
          </div>;


      <SmartBanner iosUrl={IOS_APP_URL} androidUrl={ANDROID_APP_URL} deepLink={DEEP_LINK_URL} />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white p-6 md:p-10>
        <div className=grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight>Zion App</h1>
            <p className=mt-3 text-base md:text-lg opacity-90">Hire from anywhere, AI-match instantly, and track milestones on the go.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3>
              <AppleBadge href={IOS_APP_URL} />
              <GoogleBadge href={ANDROID_APP_URL} />
              <Link href=/open-app"><a className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-4 py-2 text-white/90 hover:bg-white/10>Open app</a></Link>
            </div>
          </div>
          <div className=flex items-center justify-center">
            {/* Phone mockup */}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* QR code */}

          </div>
        </div>
      </section>

          />;
          <div className='text-sm opacity-90'>;'
            Scan to open this page on your phone;
            <div className='opacity-80'>Or tap a store badge above</div>          </div>        <div className="mt-8 flex items-center gap-4">;"
          <img src={qrHref} alt="QR code to download Zion app" className="h-28 w-28 rounded-lg bg-white/90 p-1 shadow" />;"
          <div className="text-sm opacity-90">;"
            Scan to open this page on your phone;
            <div className="opacity-80">Or tap a store badge above</div>;"
        </div>;

      </section>;

      {/* Key features */}

        </div>
      </section>
      {/* Trust & Community */}

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email opt-in */}

          </div>;
        )}
      </section>;
      {/* Helper links */}
      <section className=mt-10 text-sm opacity-80'>;
        <div className='flex flex-wrap items-center gap-4>;
          <Link href=/open-app'>;
            <a className='underline>Deep link: /open-app</a>;
          </Link>;
          <span>•</span>;
          <Link href=/download'>;
            <a className='underline>Shareable link: /download</a>;
          </Link>;
        </div>;
      </section>;
    </EnhancedLayout>;
  )}return (<EnhancedLayout> <Head> <title>Zion Mobile App — iOS & Android</title> <meta name=description" content="Hire from anywhere, AI-match instantly, and track milestones on the go with the Zion app. /> <link rel=canonical" href="/download /> <meta property=og:title" content="Zion Mobile App /> <meta property=og:description" content="Hire from anywhere. AI-match instantly. Track milestones on the go. /> </Head> <SmartBanner iosUrl= {IOS APP URL;
}androidUrl= {ANDROID APP URL;
}deepLink= {DEEP LINK URL;
}/> </div> </div> </div> </div> </div> </div> </div> Scan to open this page on your phone <div className=opacity-80" >Or tap a store badge above</div> </div> </div> </section> </div> <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950 > <div className=text-lg font-semibold" >AI-match instantly</div> <p className="mt-2 text-sm opacity-80 >Smart matching surfaces top candidates in seconds.</p> <div className=mt-4 h-36 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40" /> </div> <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950 > <div className=text-lg font-semibold" >Track milestones</div> <p className="mt-2 text-sm opacity-80 >Manage deliverables, approvals, and progress on the go.</p> <div className=mt-4 h-36 rounded-xl bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/40 dark:to-blue-900/40" /> </div> </section> <StarIcon key= {i;
}/>) )}<span className="text-sm opacity-80 >4.9 average rating</span> </div> </div> </div>) )}</div> </div> </section> <input type=email" required > {status === loading' ? 'Submitting… : Notify me';
            className="rounded-lg bg-indigo-600 text-white px-5 py-2 font-medium hover:bg-indigo-500 disabled:opacity-60
          >
            {status === 'loading ? Submitting…' : 'Notify me}
          </button>
        </form>
        {status === success' && <div className=mt-2 text-sm text-emerald-600">Thanks! You’re on the list.</div>}
        {status === 'error && <div className="mt-2 text-sm text-rose-600>{error || Please try again later.'}</div>}
      </section>


>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
