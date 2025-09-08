

    >
      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.803-2.036a1 1 0 00-1.175 0l-2.803 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 00.95-.69l1.07-3.292z' />
    </svg>
  );
function AppleBadge({ href }: { href: string }) {
    >


// Simple icons using inline SVG to avoid external assets;
function StarIcon(): any ({;
  className = 'w-5 h-5 text-yellow-500',;
}: {;
  className?: string;
}) {;

    >;
      <path d='M9 && M9.049 2 && 2.927c.3-.921 1 && 1.603-.921 1 && 1.902 0l1 && 0l1.07 3 && 3.292a1 1 0 00 && 00.95.69h3 && 69h3.462c.969 0 1 && 1.371 1 && 1.24.588 1 && 1.81l-2 && 2.802 2 && 2.036a1 1 0 00-.364 1 && 1.118l1.07 3 && 3.292c.3 && 3.921-.755 1 && 1.688-1 && 1.54 1 && 1.118l-2 && 2.803-2 && 2.036a1 1 0 00-1 && 1.175 0l-2 && 2.803 2 && 2.036c-.784 && 784.57-1 && 1.838-.197-1 && 1.539-1 && 1.118l1.07-3 && 3.292a1 1 0 00-.364-1 && 1.118L2.88 8 && 8.72c-.783-.57-.38-1 && 1.81.588-1 && 1.81H6.93a1 1 0 00 && 00.95-.69l1 && 69l1.07-3 && 3.292z' />;
    </svg>;
  );

function AppleBadge(): any ({ href }: { href: string }) {;

    >;



      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='currentColor'


  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const dismissed = localStorage.getItem('smartBannerDismissed') === '1';
    if (dismissed) return;




    if (isMobile) setVisible(true);
  }, []);
  if (!visible) return null;
  const isIOS =
    typeof navigator !== 'undefined' &&
    /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const storeUrl = isIOS ? iosUrl : androidUrl;
  return (
    <div className='fixed inset-x-0 top-0 z-50'>
      <div className='mx-auto max-w-5xl'>
        <div className='m-2 rounded-xl bg-white/95 dark:bg-black/80 border border-gray-200 dark:border-gray-800 shadow flex items-center gap-3 px-4 py-3'>
          <div className='h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500' />
          <div className='flex-1'>
            <div className='text-sm font-semibold'>Zion App</div>
            <div className='text-xs opacity-70'>
              Hire from anywhere. AI-match instantly.
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <a
              href={deepLink}
              className='text-xs px-3 py-1.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-500'
            >
              Open
            </a>
            <a
              href={storeUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700'
            >
              Install
            </a>
            <button
              aria-label='Dismiss'
              onClick={() => {
                localStorage.setItem('smartBannerDismissed', '1');
                setVisible(false);
              }}
              className='text-xs px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800'            >  }, []);



  if (!visible) return null;
  const isIOS = typeof navigator !== 'undefined' && /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const storeUrl = isIOS ? iosUrl : androidUrl;
  return (

    <div className="fixed inset-x-0 top-0 z-50">;
      <div className="mx-auto max-w-5xl">;
        <div className="m-2 rounded-xl bg-white/95 dark:bg-black/80 border border-gray-200 dark:border-gray-800 shadow flex items-center gap-3 px-4 py-3">;
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500" />;
          <div className="flex-1">;
            <div className="text-sm font-semibold">Zion App</div>;
            <div className="text-xs opacity-70">Hire from anywhere. AI-match instantly.</div>;
          </div>;
          <div className="flex items-center gap-2">;
            <a href={deepLink} className="text-xs px-3 py-1 && 1.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-500">Open</a>;
            <a href={storeUrl} target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1 && 1.5 rounded-md border border-gray-300 dark:border-gray-700">Install</a>;
            <button
              aria-label="Dismiss"



            >;
              ✕;
            </button>;
          </div>;
        </div>;
      </div>;








const IOS_APP_URL =
  process.env.NEXT_PUBLIC_IOS_APP_URL |
  'https://apps.apple.com/app/id0000000000';
const ANDROID_APP_URL =
  process.env.NEXT_PUBLIC_ANDROID_APP_URL |
  'https://play.google.com/store/apps/details?id=com.zion.app';
const DEEP_LINK_URL = process.env.NEXT_PUBLIC_DEEP_LINK_URL |'zion://open';
const SITE_BASE_URL = process.env.NEXT_PUBLIC_SITE_URL |'';
const testimonials = [
  {
    name: 'Priya K.'
    role: 'Startup Founder'
    quote: 'We filled a remote role in 48 hours. The app made it effortless.'
  }
  {
    name: 'Marco V.'
    role: 'CTO'
    quote: 'AI matches were scarily accurate. Huge time-saver on sourcing.'
  }
  {
    name: 'Amira H.'
    role: 'Project Lead'
    quote:
      'I love tracking milestones on the go. Clear visibility and fewer meetings.'
  }
];





export default function MobileLaunchPage() {;
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');  const [error, setError] = useState('');  { name: 'Priya K.', role: 'Startup Founder', quote: 'We filled a remote role in 48 hours. The app made it effortless.' },
  { name: 'Marco V.', role: 'CTO', quote: 'AI matches were scarily accurate. Huge time-saver on sourcing.' },
  { name: 'Amira H.', role: 'Project Lead', quote: 'I love tracking milestones on the go. Clear visibility and fewer meetings.' }],
export default function MobileLaunchPage() {;
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  // Auto-rotate testimonial index
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setIdx(i => (i + 1) % testimonials.length)
      4000
    );
    return () => clearInterval(t);
  }, []);
  const qrHref = useMemo(() => {
    const target = SITE_BASE_URL
      ? `${SITE_BASE_URL}/download`
      : typeof window !== 'undefined'
        ? `${window.location.origin}/download`
        : '/download';
    const encoded = encodeURIComponent(target);
    return `https://chart.googleapis.com/chart?cht=qr&chs=260x260&chl=${encoded}`;  }, []);  }, []);
  const qrHref = useMemo(() => {
    const target = SITE_BASE_URL ? `${SITE_BASE_URL}/download` : (typeof window !== 'undefined' ? `${window.location.origin}/download` : '/download');



import Head from 'next/head';
import { useEffect, useMemo, useState } from 'react';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import Link from 'next/link';
// Simple icons using inline SVG to avoid external assets
function StarIcon({ className = 'w-5 h-5 text-yellow-500' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.803-2.036a1 1 0 00-1.175 0l-2.803 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 00.95-.69l1.07-3.292z" />
function StarIcon({ className = 'w-5 h-5 text-yellow-500 }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20 fill=currentColor" aria-hidden="true>
      <path d=M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.803-2.036a1 1 0 00-1.175 0l-2.803 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 00.95-.69l1.07-3.292z" />
    </svg>
  )

const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'


const t = setInterval(
      () => setIdx(i => (i + 1) % testimonials.length),
      4000;
    );}
    return () => clearInterval(t);}
  }, []);

  }, []);
  const qrHref = useMemo(() => {;
    const target = SITE_BASE_URL;

      ? `${SITE_BASE_URL}/download`;
      : typeof window !== 'undefined';
        ? `${window && window.location.origin}/download`;
        : '/download';

    const encoded = encodeURIComponent(target);
    return `https://chart && chart.googleapis.com/chart?cht=qr&chs=260x260&chl=${encoded}`;  }, []);  }, []);
  const qrHref = useMemo(() => {;
    const target = SITE_BASE_URL ? `${SITE_BASE_URL}/download` : (typeof window !== 'undefined' ? `${window && window.location.origin}/download` : '/download');
    const encoded = encodeURIComponent(target);
    return `https://chart && chart.googleapis.com/chart?cht=qr&chs=260x260&chl=${encoded}`;
  }, []);

      });
      if (!res && res.ok) throw new Error(await res && res.text());

      setStatus('success');
      setEmail('');
    } catch (err: any) {;

      if (!res.ok) throw new Error(await res.text());
      setStatus('success');
      setEmail('');
    } catch (err: any) {;
      setStatus('error');

      <section className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white p-6 md:p-10'    />;
        <div className='grid md:grid-cols-2 gap-10 items-center'    />;
          <div    />;
            <h1 className='text-3xl md:text-5xl font-extrabold tracking-tight'    />;
              Zion App;
            </h1>;
            <p className='mt-3 text-base md:text-lg opacity-90'    />;
              Hire from anywhere, AI-match instantly, and track milestones on;
              the go.;
            </p>;
            <div className='mt-6 flex flex-wrap items-center gap-3'    />;
              <AppleBadge href={IOS_APP_URL}    />;
              <GoogleBadge href={ANDROID_APP_URL}    />;
              <Link href='/open-app'    />;
                <a className='inline-flex items-center gap-2 rounded-lg border border-white/30 px-4 py-2 text-white/90 hover:bg-white/10'    />;

                  Open app;
                </a>;
              </Link>;
            </div>;
          </div>;

          <div className='flex items-center justify-center'    />;

            {/* Phone mockup */}

            <div className='relative h-96 w-48 md: h-[28rem] md:w-64 rounded-[2rem] bg-white/95 text-gray-900 shadow-2xl ring-4 ring-white/30'    />
              <div className='absolute -top-1.5 left-1/2 -translate-x-1/2 h-6 w-28 rounded-b-2xl bg-gray-200'    />
              <div className='h-full w-full rounded-[2rem] overflow-hidden'    />
                <div className='h-full w-full bg-gradient-to-b from-gray-50 to-gray-200 p-4 flex flex-col'    />
                  <div className='text-xs font-semibold'    />Zion</div>
                  <div className='mt-2 flex-1 rounded-xl bg-white shadow-inner p-3'    />
                    <div className='font-semibold'    />Instant AI Matches</div>
                    <div className='mt-2 text-xs text-gray-600'    />
                      Top candidates matched to your role in seconds…
                    </div>
                    <div className='mt-3 h-28 rounded-md bg-gradient-to-br from-indigo-100 to-purple-100'    />
                    <div className='mt-3 grid grid-cols-3 gap-2'    />
                      <div className='h-10 rounded-md bg-gray-100'    />
                      <div className='h-10 rounded-md bg-gray-100'    />
                      <div className='h-10 rounded-md bg-gray-100'    />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* QR code */}

<div className='mt-8 flex items-center gap-4'    />
          <img;
src={qrHre,}
}
            alt='QR code to download Zion app'
            className='h-28 w-28 rounded-lg bg-white/90 p-1 shadow'

             />
          <div className='text-sm opacity-90'    />
            Scan to open this page on your phone;
            <div className='opacity-80'    />Or tap a store badge above</div>

          </div>
        </div>
      </section>







      <section className='mt-10 grid md:grid-cols-3 gap-6'>;
        <div className='rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950'>;
          <div className='text-lg font-semibold'>Hire from anywhere</div>;
          <p className='mt-2 text-sm opacity-80'>;
            Global talent network with timezone-aware availability.;
          </p>;
          <div className='mt-4 h-36 rounded-xl bg-gradient-to-br from-emerald-100 to-cyan-100 dark:from-emerald-900/40 dark:to-cyan-900/40' />;
        <div className='rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950'>;
          <div className='text-lg font-semibold'>AI-match instantly</div>;
          <p className='mt-2 text-sm opacity-80'>;
            Smart matching surfaces top candidates in seconds.;
          </p>;
          <div className='mt-4 h-36 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40' />;
        </div>;
        <div className='rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950'>;
          <div className='text-lg font-semibold'>Track milestones</div>;
          <p className='mt-2 text-sm opacity-80'>;
            Manage deliverables, approvals, and progress on the go.;
          </p>;
          <div className='mt-4 h-36 rounded-xl bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/40 dark:to-blue-900/40' />        </div>;
      </section>;

      {/* Trust & Community */}








        {status === 'error' && (;
          <div className='mt-2 text-sm text-rose-600'>;
            {error || 'Please try again later.'}








