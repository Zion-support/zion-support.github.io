<<<<<<< HEAD
import Head from 'next/head',
import { useEffect, useMemo, useState } from 'react',
import EnhancedLayout from '../components/layout/EnhancedLayout',
import Link from 'next/link',
// Simple icons using inline SVG to avoid external assets
function StarIcon({ className = 'w-5 h-5 text-yellow-500' }: { className?: string }) {
  return (
    <svg className={className} viewBox=&quot;0 0 20 20&quot; fill=&quot;currentColor&quot; aria-hidden=&quot;true&quot;>
      <path d=&quot;M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.803-2.036a1 1 0 00-1.175 0l-2.803 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 00.95-.69l1.07-3.292z&quot; />
=======
import Head from 'next/head';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import Link from 'next/link';

// Simple icons using inline SVG to avoid external assets
function StarIcon(_{_className = 'w-5 h-5 text-yellow-500'}: {_className?: string}) {_return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.803-2.036a1 1 0 00-1.175 0l-2.803 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 00.95-.69l1.07-3.292z" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </svg>
  )
}

<<<<<<< HEAD
function AppleBadge({ href }: { href: string }) {
  return (
<<<<<<< HEAD
    <a href={href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 rounded-lg bg-black text-white px-4 py-2 shadow hover: opacity-90">
=======
function AppleBadge(_{_href}: {_href: string}) {_return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 rounded-lg bg-black text-white px-4 py-2 shadow hover:opacity-90">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M16.365 1.43c0 1.14-.42 2.18-1.26 3.11-.91 1.02-2.01 1.61-3.2 1.52-.12-1.02.37-2.12 1.21-3.06.86-.97 2.24-1.67 3.25-1.57-.01 0 .01 0 0 0zM20.51 17.14c-.45 1.05-1 2.03-1.66 2.93-.88 1.2-1.59 2.04-2.57 2.05-.97.02-1.28-.66-2.66-.66-1.38 0-1.72.64-2.69.68-1.09.04-1.93-1.02-2.82-2.22-1.54-2.1-2.73-5.93-1.14-8.52.79-1.27 2.2-2.08 3.73-2.1 1.16-.02 2.25.78 2.66.78.4 0 1.51-.96 2.85-.82.49.02 1.88.2 2.77 1.6-.07.05-1.65.97-1.63 2.88.02 2.3 2.06 3.07 2.09 3.08-.02.06-.39 1.36-1.93 1.62z" />
=======
    <a href={href} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;group inline-flex items-center gap-3 rounded-lg bg-black text-white px-4 py-2 shadow hover:opacity-90&quot;>
      <svg width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;currentColor&quot; aria-hidden>
        <path d=&quot;M16.365 1.43c0 1.14-.42 2.18-1.26 3.11-.91 1.02-2.01 1.61-3.2 1.52-.12-1.02.37-2.12 1.21-3.06.86-.97 2.24-1.67 3.25-1.57-.01 0 .01 0 0 0zM20.51 17.14c-.45 1.05-1 2.03-1.66 2.93-.88 1.2-1.59 2.04-2.57 2.05-.97.02-1.28-.66-2.66-.66-1.38 0-1.72.64-2.69.68-1.09.04-1.93-1.02-2.82-2.22-1.54-2.1-2.73-5.93-1.14-8.52.79-1.27 2.2-2.08 3.73-2.1 1.16-.02 2.25.78 2.66.78.4 0 1.51-.96 2.85-.82.49.02 1.88.2 2.77 1.6-.07.05-1.65.97-1.63 2.88.02 2.3 2.06 3.07 2.09 3.08-.02.06-.39 1.36-1.93 1.62z&quot; />
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      </svg>
      <div className=&quot;leading-tight&quot;>
        <div className=&quot;text-[10px] uppercase opacity-80&quot;>Download on the</div>
        <div className=&quot;text-sm font-semibold&quot;>App Store</div>
      </div>
    </a>
  )
}

<<<<<<< HEAD
function GoogleBadge({ href }: { href: string }) {
  return (
<<<<<<< HEAD
    <a href={href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 rounded-lg bg-[#121212] text-white px-4 py-2 shadow hover: opacity-90">
=======
function GoogleBadge(_{_href}: {_href: string}) {_return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 rounded-lg bg-[#121212] text-white px-4 py-2 shadow hover:opacity-90">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
=======
    <a href={href} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;group inline-flex items-center gap-3 rounded-lg bg-[#121212] text-white px-4 py-2 shadow hover:opacity-90&quot;>
      <svg width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; aria-hidden>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        <defs>
          <linearGradient id=&quot;g1&quot; x1=&quot;100%&quot; y1=&quot;0%&quot;>
            <stop offset=&quot;0%&quot; stopColor=&quot;#00A0FF&quot; />
            <stop offset=&quot;100%&quot; stopColor=&quot;#00E3FF&quot; />
          </linearGradient>
          <linearGradient id=&quot;g2&quot; x1=&quot;100%&quot; y1=&quot;0%&quot;>
            <stop offset=&quot;0%&quot; stopColor=&quot;#FFE000&quot; />
            <stop offset=&quot;100%&quot; stopColor=&quot;#FFA000&quot; />
          </linearGradient>
          <linearGradient id=&quot;g3&quot; x1=&quot;100%&quot; y1=&quot;0%&quot;>
            <stop offset=&quot;0%&quot; stopColor=&quot;#FF3A44&quot; />
            <stop offset=&quot;100%&quot; stopColor=&quot;#C31162&quot; />
          </linearGradient>
          <linearGradient id=&quot;g4&quot; x1=&quot;100%&quot; y1=&quot;0%&quot;>
            <stop offset=&quot;0%&quot; stopColor=&quot;#32A071&quot; />
            <stop offset=&quot;100%&quot; stopColor=&quot;#00F076&quot; />
          </linearGradient>
        </defs>
        <path d=&quot;M3.6 2.4c-.28.27-.44.66-.44 1.11v16.98c0 .45.16.83.44 1.1l.07.06 9.36-9.36v-.6L3.67 2.33 3.6 2.4z&quot; fill=&quot;url(#g1)&quot; />
        <path d=&quot;M16.2 15.99l-3.17-3.17v-.6l3.17-3.17.09.05 3.76 2.14c1.08.62 1.08 1.64 0 2.26l-3.76 2.14-.09.05z&quot; fill=&quot;url(#g2)&quot; />
        <path d=&quot;M16.29 15.94L13.03 12.68 3.6 22.11c.36.35.95.38 1.63 0l11.06-6.17z&quot; fill=&quot;url(#g3)&quot; />
        <path d=&quot;M16.29 9.06L5.23 2.89C4.55 2.5 3.96 2.54 3.6 2.89l9.43 9.43 3.26-3.26z&quot; fill=&quot;url(#g4)&quot; />
      </svg>
      <div className=&quot;leading-tight&quot;>
        <div className=&quot;text-[10px] uppercase opacity-80&quot;>Get it on</div>
        <div className=&quot;text-sm font-semibold&quot;>Google Play</div>
      </div>
    </a>
  )
}

<<<<<<< HEAD
function SmartBanner({ iosUrl, androidUrl, deepLink }: { iosUrl: string, androidUrl: string, deepLink: string }) {
  const [visible, setVisible] = useState(false),
  useEffect(() => {
    if (typeof window === 'undefined') return,
    const dismissed = localStorage.getItem('smartBannerDismissed') === '1',
    if (dismissed) return,
    const ua = navigator.userAgent || '',
    const isMobile = /iPhone|iPad|iPod|Android/i.test(ua),
    if (isMobile) setVisible(true)
  }, []),

  if (!visible) return null,
  const isIOS = typeof navigator !== 'undefined' && /iPhone|iPad|iPod/i.test(navigator.userAgent),
  const storeUrl = isIOS ? iosUrl : androidUrl,

  return (
    <div className=&quot;fixed inset-x-0 top-0 z-50&quot;>
      <div className=&quot;mx-auto max-w-5xl&quot;>
        <div className=&quot;m-2 rounded-xl bg-white/95 dark:bg-black/80 border border-gray-200 dark:border-gray-800 shadow flex items-center gap-3 px-4 py-3&quot;>
          <div className=&quot;h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500&quot; />
          <div className=&quot;flex-1&quot;>
            <div className=&quot;text-sm font-semibold&quot;>Zion App</div>
            <div className=&quot;text-xs opacity-70&quot;>Hire from anywhere. AI-match instantly.</div>
          </div>
          <div className=&quot;flex items-center gap-2&quot;>
            <a href={deepLink} className=&quot;text-xs px-3 py-1.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-500&quot;>Open</a>
            <a href={storeUrl} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700&quot;>Install</a>
=======
function SmartBanner(_{_iosUrl, _androidUrl, _deepLink}: {_iosUrl: string; androidUrl: string; deepLink: string}) {_const [visible, _setVisible] = useState(false);
  useEffect__(() => {
    if (typeof window === 'undefined') return;
    const _dismissed = localStorage.getItem('smartBannerDismissed') === '1';
    if (dismissed) return;
    const _ua = navigator.userAgent || '';
    const _isMobile = /iPhone|iPad|iPod|Android/i.test(ua);
    if (isMobile) setVisible(true);}, []);

  if (!visible) return null;
  const _isIOS = typeof navigator !== 'undefined' && /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const _storeUrl = isIOS ? iosUrl : androidUrl;

  return (_<div className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-5xl">
        <div className="m-2 rounded-xl bg-white/95 dark:bg-black/80 border border-gray-200 dark:border-gray-800 shadow flex items-center gap-3 px-4 py-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500" />
          <div className="flex-1">
            <div className="text-sm font-semibold">Zion App</div>
            <div className="text-xs opacity-70">Hire from anywhere. AI-match instantly.</div>
          </div>
          <div className="flex items-center gap-2">
            <a href={_deepLink} className="text-xs px-3 py-1.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-500">Open</a>
            <a href={_storeUrl} target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700">Install</a>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <button
<<<<<<< HEAD
              aria-label="Dismiss"
<<<<<<< HEAD
              onClick={() => { localStorage.setItem('smartBannerDismissed1'), setVisible(false) }}
              className="text-xs px-2 py-1 rounded-md hover: bg-gray-100 dark:hover:bg-gray-800"
=======
              aria-label=&quot;Dismiss&quot;
              onClick={() => { localStorage.setItem('smartBannerDismissed', '1'); setVisible(false); }}
              className=&quot;text-xs px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
              onClick={_() => { localStorage.setItem('smartBannerDismissed', _'1'); setVisible(false);}}
              className="text-xs px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

<<<<<<< HEAD
const IOS_APP_URL = process.env.NEXT_PUBLIC_IOS_APP_URL || 'https: //apps.apple.com/app/id0000000000',
const ANDROID_APP_URL = process.env.NEXT_PUBLIC_ANDROID_APP_URL || 'https://play.google.com/store/apps/details?id=com.zion.app',
const DEEP_LINK_URL = process.env.NEXT_PUBLIC_DEEP_LINK_URL || 'zion://open',

const SITE_BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || '',

const testimonials = [
  { name: 'Priya K.', role: 'Startup Founder', quote: 'We filled a remote role in 48 hours. The app made it effortless.' },
  { name: 'Marco V.', role: 'CTO', quote: 'AI matches were scarily accurate. Huge time-saver on sourcing.' },
  { name: 'Amira H.', role: 'Project Lead', quote: 'I love tracking milestones on the go. Clear visibility and fewer meetings.' }],

export default function MobileLaunchPage() {
  const [email, setEmail] = useState(''),
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle'),
  const [error, setError] = useState(''),

  // Auto-rotate testimonial index
  const [idx, setIdx] = useState(0),
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 4000),
    return () => clearInterval(t)
  }, []),

  const qrHref = useMemo(() => {
    const target = SITE_BASE_URL ? `${SITE_BASE_URL}/download` : (typeof window !== 'undefined' ? `${window.location.origin}/download` : '/download'),
    const encoded = encodeURIComponent(target),
    return `https://chart.googleapis.com/chart?cht=qr&chs=260x260&chl=${encoded}`
  }, []),

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(),
    setStatus('loading'),
    setError(''),
    try {
      const res = await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) }),
      if (!res.ok) throw new Error(await res.text()),
      setStatus('success'),
      setEmail('')
    } catch (err: any) {
      setStatus('error'),
      setError(err?.message || 'Something went wrong.')
    }
=======
const _IOS_APP_URL = process.env.NEXT_PUBLIC_IOS_APP_URL || 'https://apps.apple.com/app/id0000000000';
const _ANDROID_APP_URL = process.env.NEXT_PUBLIC_ANDROID_APP_URL || 'https://play.google.com/store/apps/details?id=com.zion.app';
const _DEEP_LINK_URL = process.env.NEXT_PUBLIC_DEEP_LINK_URL || 'zion://open';

const _SITE_BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || '';

const _testimonials = [
  {_name: 'Priya K.', _role: 'Startup Founder', _quote: 'We filled a remote role in 48 hours. The app made it effortless.'},
  {_name: 'Marco V.', _role: 'CTO', _quote: 'AI matches were scarily accurate. Huge time-saver on sourcing.'},
  {_name: 'Amira H.', _role: 'Project Lead', _quote: 'I love tracking milestones on the go. Clear visibility and fewer meetings.'}];

export default function MobileLaunchPage() {_const [email, _setEmail] = useState('');
  const [status, _setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [error, _setError] = useState('');

  // Auto-rotate testimonial index
  const [idx, _setIdx] = useState(0);
  useEffect__(() => {
    const _t = setInterval__(() => setIdx(_(i) => (i + 1) % testimonials.length), _4000);
    return () => clearInterval(t);}, []);

  const _qrHref = useMemo__(() => {_const _target = SITE_BASE_URL ? `${SITE_BASE_URL}/download` : (typeof window !== 'undefined' ? `${_window.location.origin}/download` : '/download');
    const _encoded = encodeURIComponent(target);
    return `https://chart.googleapis.com/chart?cht=qr&chs=260x260&chl=${_encoded}`;
  }, []);

  async function handleSubmit(_e: React.FormEvent) {_e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      const _res = await fetch('/api/subscribe', _{ method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({_email}) });
      if (!res.ok) throw new Error(await res.text());
      setStatus('success');
      setEmail('');
    } catch (err: unknown) {_setStatus('error');
      setError(err?.message || 'Something went wrong.');}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }

  return (
    <EnhancedLayout>
      <Head>
        <title>Zion Mobile App — iOS & Android</title>
        <meta name=&quot;description&quot; content=&quot;Hire from anywhere, AI-match instantly, and track milestones on the go with the Zion app.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;/download&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Zion Mobile App&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Hire from anywhere. AI-match instantly. Track milestones on the go.&quot; />
      </Head>

      <SmartBanner iosUrl={_IOS_APP_URL} androidUrl={_ANDROID_APP_URL} deepLink={_DEEP_LINK_URL} />

<<<<<<< HEAD
      {/* Hero */}
      <section className=&quot;relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white p-6 md:p-10&quot;>
        <div className=&quot;grid md:grid-cols-2 gap-10 items-center&quot;>
          <div>
            <h1 className=&quot;text-3xl md:text-5xl font-extrabold tracking-tight&quot;>Zion App</h1>
            <p className=&quot;mt-3 text-base md:text-lg opacity-90&quot;>Hire from anywhere, AI-match instantly, and track milestones on the go.</p>
            <div className=&quot;mt-6 flex flex-wrap items-center gap-3&quot;>
              <AppleBadge href={IOS_APP_URL} />
              <GoogleBadge href={ANDROID_APP_URL} />
              <Link href=&quot;/open-app&quot;><a className=&quot;inline-flex items-center gap-2 rounded-lg border border-white/30 px-4 py-2 text-white/90 hover:bg-white/10&quot;>Open app</a></a>
            </div>
          </div>
          <div className=&quot;flex items-center justify-center&quot;>
            {/* Phone mockup */}
            <div className=&quot;relative h-96 w-48 md:h-[28rem] md:w-64 rounded-[2rem] bg-white/95 text-gray-900 shadow-2xl ring-4 ring-white/30&quot;>
              <div className=&quot;absolute -top-1.5 left-1/2 -translate-x-1/2 h-6 w-28 rounded-b-2xl bg-gray-200&quot; />
              <div className=&quot;h-full w-full rounded-[2rem] overflow-hidden&quot;>
                <div className=&quot;h-full w-full bg-gradient-to-b from-gray-50 to-gray-200 p-4 flex flex-col&quot;>
                  <div className=&quot;text-xs font-semibold&quot;>Zion</div>
                  <div className=&quot;mt-2 flex-1 rounded-xl bg-white shadow-inner p-3&quot;>
                    <div className=&quot;font-semibold&quot;>Instant AI Matches</div>
                    <div className=&quot;mt-2 text-xs text-gray-600&quot;>Top candidates matched to your role in seconds…</div>
                    <div className=&quot;mt-3 h-28 rounded-md bg-gradient-to-br from-indigo-100 to-purple-100&quot; />
                    <div className=&quot;mt-3 grid grid-cols-3 gap-2&quot;>
                      <div className=&quot;h-10 rounded-md bg-gray-100&quot; />
                      <div className=&quot;h-10 rounded-md bg-gray-100&quot; />
                      <div className=&quot;h-10 rounded-md bg-gray-100&quot; />
=======
      {_/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white p-6 md:p-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Zion App</h1>
            <p className="mt-3 text-base md:text-lg opacity-90">Hire from anywhere, AI-match instantly, and track milestones on the go.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <AppleBadge href={_IOS_APP_URL} />
              <GoogleBadge href={_ANDROID_APP_URL} />
              <Link href="/open-app"><a className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-4 py-2 text-white/90 hover:bg-white/10">Open app</a></Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {_/* Phone mockup */}
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        {/* QR code */}
        <div className=&quot;mt-8 flex items-center gap-4&quot;>
          <img src={qrHref} alt=&quot;QR code to download Zion app&quot; className=&quot;h-28 w-28 rounded-lg bg-white/90 p-1 shadow&quot; />
          <div className=&quot;text-sm opacity-90&quot;>
=======
        {_/* QR code */}
        <div className="mt-8 flex items-center gap-4">
          <img src={_qrHref} alt="QR code to download Zion app" className="h-28 w-28 rounded-lg bg-white/90 p-1 shadow" />
          <div className="text-sm opacity-90">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            Scan to open this page on your phone
            <div className=&quot;opacity-80&quot;>Or tap a store badge above</div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Key features */}
      <section className=&quot;mt-10 grid md:grid-cols-3 gap-6&quot;>
        <div className=&quot;rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950&quot;>
          <div className=&quot;text-lg font-semibold&quot;>Hire from anywhere</div>
          <p className=&quot;mt-2 text-sm opacity-80&quot;>Global talent network with timezone-aware availability.</p>
          <div className=&quot;mt-4 h-36 rounded-xl bg-gradient-to-br from-emerald-100 to-cyan-100 dark:from-emerald-900/40 dark:to-cyan-900/40&quot; />
=======
      {_/* Key features */}
      <section className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950">
          <div className="text-lg font-semibold">Hire from anywhere</div>
          <p className="mt-2 text-sm opacity-80">Global talent network with timezone-aware availability.</p>
          <div className="mt-4 h-36 rounded-xl bg-gradient-to-br from-emerald-100 to-cyan-100 dark:from-emerald-900/40 dark:to-cyan-900/40" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
        <div className=&quot;rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950&quot;>
          <div className=&quot;text-lg font-semibold&quot;>AI-match instantly</div>
          <p className=&quot;mt-2 text-sm opacity-80&quot;>Smart matching surfaces top candidates in seconds.</p>
          <div className=&quot;mt-4 h-36 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40&quot; />
        </div>
        <div className=&quot;rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950&quot;>
          <div className=&quot;text-lg font-semibold&quot;>Track milestones</div>
          <p className=&quot;mt-2 text-sm opacity-80&quot;>Manage deliverables, approvals, and progress on the go.</p>
          <div className=&quot;mt-4 h-36 rounded-xl bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/40 dark:to-blue-900/40&quot; />
        </div>
      </section>

<<<<<<< HEAD
      {/* Trust & Community */}
      <section className=&quot;mt-12&quot;>
        <div className=&quot;flex items-center gap-2&quot;>
          {[...Array(5)].map((_, i) => (
=======
      {_/* Trust & Community */}
      <section className="mt-12">
        <div className="flex items-center gap-2">
          {_[...Array(5)].map(_(_, _i) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <StarIcon key={i} />
          ))}
          <span className=&quot;text-sm opacity-80&quot;>4.9 average rating</span>
        </div>
<<<<<<< HEAD
        <h2 className=&quot;mt-2 text-xl font-semibold&quot;>Why people love the Zion app</h2>
        <div className=&quot;relative mt-4 overflow-hidden&quot;>
          <div className=&quot;flex transition-transform duration-700&quot; style={{ transform: `translateX(-${idx * 100}%)`, width: `${testimonials.length * 100}%` }}>
            {testimonials.map((t) => (
              <div key={t.name} className=&quot;w-full md:w-1/3 flex-shrink-0 pr-4&quot;>
                <div className=&quot;rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-gray-950 h-full&quot;>
                  <p className=&quot;text-sm&quot;>“{t.quote}”</p>
                  <div className=&quot;mt-3 text-xs opacity-80&quot;>{t.name} • {t.role}</div>
=======
        <h2 className="mt-2 text-xl font-semibold">Why people love the Zion app</h2>
        <div className="relative mt-4 overflow-hidden">
          <div className="flex transition-transform duration-700" style={_{ transform: `translateX(-${idx * 100}%)`, width: `${_testimonials.length * 100}%` }}>
            {_testimonials.map(_(t) => (
              <div key={t.name} className="w-full md:w-1/3 flex-shrink-0 pr-4">
                <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-gray-950 h-full">
                  <p className="text-sm">“{_t.quote}”</p>
                  <div className="mt-3 text-xs opacity-80">{_t.name} • {_t.role}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Email opt-in */}
      <section className=&quot;mt-12 rounded-3xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950&quot;>
        <h3 className=&quot;text-lg font-semibold&quot;>Get early access to new features</h3>
        <p className=&quot;mt-1 text-sm opacity-80&quot;>Join the list and we’ll let you know when new capabilities drop.</p>
        <form onSubmit={handleSubmit} className=&quot;mt-4 flex flex-col sm:flex-row gap-3&quot;>
=======
      {_/* Email opt-in */}
      <section className="mt-12 rounded-3xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950">
        <h3 className="text-lg font-semibold">Get early access to new features</h3>
        <p className="mt-1 text-sm opacity-80">Join the list and we’ll let you know when new capabilities drop.</p>
        <form onSubmit={_handleSubmit} className="mt-4 flex flex-col sm:flex-row gap-3">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <input
            type=&quot;email&quot;
            required
<<<<<<< HEAD
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=&quot;you@company.com&quot;
            className=&quot;flex-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500&quot;
          />
          <button
            type=&quot;submit&quot;
            disabled={status === 'loading'}
            className=&quot;rounded-lg bg-indigo-600 text-white px-5 py-2 font-medium hover:bg-indigo-500 disabled:opacity-60&quot;
=======
            value={_email}
            onChange={_(_e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="flex-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            disabled={_status === 'loading'}
            className="rounded-lg bg-indigo-600 text-white px-5 py-2 font-medium hover:bg-indigo-500 disabled:opacity-60"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            {_status === 'loading' ? 'Submitting…' : 'Notify me'}
          </button>
        </form>
<<<<<<< HEAD
        {status === 'success' && <div className=&quot;mt-2 text-sm text-emerald-600&quot;>Thanks! You’re on the list.</div>}
        {status === 'error' && <div className=&quot;mt-2 text-sm text-rose-600&quot;>{error || 'Please try again later.'}</div>}
      </section>

      {/* Helper links */}
      <section className=&quot;mt-10 text-sm opacity-80&quot;>
        <div className=&quot;flex flex-wrap items-center gap-4&quot;>
          <Link href=&quot;/open-app&quot;><a className=&quot;underline&quot;>Deep link: /open-app</a></a>
=======
        {_status === 'success' && <div className="mt-2 text-sm text-emerald-600">Thanks! You’re on the list.</div>}
        {_status === 'error' && <div className="mt-2 text-sm text-rose-600">{error || 'Please try again later.'}</div>}
      </section>

      {_/* Helper links */}
      <section className="mt-10 text-sm opacity-80">
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/open-app"><a className="underline">Deep link: /open-app</a></Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <span>•</span>
          <Link href=&quot;/download&quot;><a className=&quot;underline&quot;>Shareable link: /download</a></a>
        </div>
      </section>
    </EnhancedLayout>
  )
}
