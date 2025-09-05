import Head from 'next/head',
import React from 'react',
type Speaker = {
  name: string,
  title: string,
  avatarUrl: string,
  bio: string,
  twitter?: string,
  linkedin?: string,
  highlight?: boolean
},

type Partner = {
  name: string,
  logoUrl?: string
},

const EVENTSTART_ISO = '2025-11-12T16: 00:00Z',

function useCountdown(targetIso: string) {
  const [remainingMs, setRemainingMs] = React.useState<number>(() => {
    return new Date(targetIso).getTime() - Date.now()
  }),

  React.useEffect(() => {
    const id = setInterval(() => {
      setRemainingMs(new Date(targetIso).getTime() - Date.now())
    }, 1000),
    return () => clearInterval(id)
  }, [targetIso]),

  const isPast = remainingMs <= 0,
  const totalSec = Math.max(0, Math.floor(remainingMs / 1000)),
  const days = Math.floor(totalSec / 86400),
  const hours = Math.floor((totalSec % 86400) / 3600),
  const minutes = Math.floor((totalSec % 3600) / 60),
  const seconds = totalSec % 60,

  return { isPast, days, hours, minutes, seconds }
}

export default function SummitPage() {
  const [platform, setPlatform] = React.useState<'youtube' | 'twitch' | 'twitter'>('youtube'),
  const [embedId, setEmbedId] = React.useState<string>('dQw4w9WgXcQ'),
  const { isPast, days, hours, minutes, seconds } = useCountdown(EVENTSTART_ISO),
  const [form, setForm] = React.useState({ name: '', email: '', role: '', country: '' }),
  const [submitting, setSubmitting] = React.useState(false),
  const [result, setResult] = React.useState<{ ok?: boolean, error?: string } | null>(null),

  const speakers: Speaker[] = [
    {
      name: 'Featured Speaker: Your Name',
      title: 'Founder, Zion',
      avatarUrl: '/favicon.svg',
      bio: 'Visionary behind Zion Protocol — building AI-native digital nations.',
      twitter: 'https://twitter.com',
      linkedin: 'https://www.linkedin.com',
      highlight: true},
    {
      name: 'Alex Rivera',
      title: 'Head of Protocol Engineering',
      avatarUrl: '/favicon.svg',
      bio: 'Leading the architecture of ZionDAO and trust rails.'},
    {
      name: 'Jordan Lee',
      title: 'Zion Alumni | AI Fellow',
      avatarUrl: '/favicon.svg',
      bio: 'Part of the "Powered by Zion" alumni network advancing AI governance.',
      twitter: 'https://twitter.com'}],
  const partners: Partner[] = [
    { name: 'Gov Partner' },
    { name: 'Venture Partner' },
    { name: 'University Partner' }],

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
    setSubmitting(true),
    setResult(null),
    try {
      const res = await fetch('/api/summit/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'summit-page' })}),
      const data = await res.json(),
      if (!res.ok) throw new Error(data?.error || 'Failed'),
      setResult({ ok: true }),
      setForm({ name: '', email: '', role: '', country: '' })
    } catch (err: any) {
      setResult({ error: err?.message || 'Unexpected error' })
    } finally {
      setSubmitting(false)
    }
  },
import Head from 'next/head';
import React from 'react';

type Speaker = {name: string,
  title: string,
  avatarUrl: string,
  bio: string,
  twitter?: string;
  linkedin?: string;
  highlight?: boolean};

type Partner = {name: string,
  logoUrl?: string};

const EVENT_START_ISO = '2025-11-12T16:00:00Z';

function useCountdown(targetIso: string) {const [remainingMs, setRemainingMs] = React.useState<number>_(() => {
    return new Date(targetIso).getTime() - Date.now()});

  React.useEffect_(() => {const id = setInterval_(() => {
      setRemainingMs(new Date(targetIso).getTime() - Date.now())}, 1000);
    return () => clearInterval(id)
  }, [targetIso]);

  const isPast = remainingMs <= 0;
  const totalSec = Math.max(0, Math.floor(remainingMs / 1000));
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;

  return {isPast, days, hours, minutes, seconds}
}

export default function SummitPage() {const [platform, setPlatform] = React.useState<'youtube' | 'twitch' | 'twitter'>('youtube');
  const [embedId, setEmbedId] = React.useState<string>('dQw4w9WgXcQ');
  const { isPast, days, hours, minutes, seconds} = useCountdown(EVENTSTART_ISO);
  const [form, setForm] = React.useState({name: '', email: '', role: '', country: ''});
  const [submitting, setSubmitting] = React.useState(false);
  const [result, setResult] = React.useState<{ok?: boolean; error?: string} | null>(null);

  const speakers: Speaker[] = [
    {name: 'Featured Speaker: Your Name', title: 'Founder, Zion', avatarUrl: '/favicon.svg', bio: 'Visionary behind Zion Protocol — building AI-native digital nations.', twitter: 'https://twitter.com', linkedin: 'https://www.linkedin.com', highlight: true},
    {name: 'Alex Rivera', title: 'Head of Protocol Engineering', avatarUrl: '/favicon.svg', bio: 'Leading the architecture of ZionDAO and trust rails.'},
    {name: 'Jordan Lee', title: 'Zion Alumni | AI Fellow', avatarUrl: '/favicon.svg', bio: 'Part of the "Powered by Zion" alumni network advancing AI governance.', twitter: 'https://twitter.com'}];

  const partners: Partner[] = [
    {name: 'Gov Partner'},
    {name: 'Venture Partner'},
    {name: 'University Partner'}];

  const onSubmit = async (e: React.FormEvent) => {e.preventDefault();
    setSubmitting(true);
    setResult(null);
    try {
      const res = await fetch('/api/summit/register', _{
        method: 'POST', headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_...form, source: 'summit-page'})});
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed');
      setResult({ok: true});
      setForm({name: '', email: '', role: '', country: ''})
    } catch (err: unknown) {setResult({ error: err?.message || 'Unexpected error'})
    } finally {setSubmitting(false)}
  };

  const livestreamEmbed = () => {if (platform === 'youtube') {
      return (
        <iframe,
className=&quot;w-full aspect-video rounded-lg border border-gray-200 dark:border-gray-800&quot;
          src={`https://www.youtube.com/embed/${embedId}`}
          title="YouTube livestream"
          allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"          allowFullScreen
        />
      )
    }
    if (platform === 'twitch') {return (
        <iframe,
className=&quot;w-full aspect-video rounded-lg border border-gray-200 dark:border-gray-800&quot;
          src={`https://player.twitch.tv/?channel=${embedId}&parent=${typeof window !== 'undefined' ? window.location.hostname : 'localhost'}`}
          title=&quot;Twitch livestream&quot;          allowFullScreen
        />
      )
    }
    return (
      <iframe,
className=&quot;w-full aspect-video rounded-lg border border-gray-200 dark:border-gray-800&quot;
        src={`https://twitter.com/i/broadcasts/${embedId}`}
        title=&quot;Twitter livestream&quot;        allowFullScreen
      />
    )
  },

  return (
    <>
      <Head>
        <title>Zion Global Summit 2025 — AI, Talent, Trust</title>
        <meta name=&quot;description&quot; content=&quot;Zion Global Summit: AI, Talent, Trust — Globalized&quot; />
      </Head>

      <section className=&quot;relative overflow-hidden rounded-xl bg-gradient-to-br from-cyber-dark to-cyber-blue text-white p-8 md:p-12 shadow-neon-blue&quot;>
        <div className=&quot;max-w-4xl&quot;>
          <p className=&quot;uppercase tracking-widest text-neon-blue&quot;>Zion Global Summit 2025</p>
          <h1 className=&quot;mt-2 text-3xl md:text-5xl font-extrabold&quot;>AI, Talent, Trust — Globalized</h1>
          <p className=&quot;mt-4 text-white/80&quot;>Date: Nov 12, 2025 • Time: 16:00 UTC • Location: Hybrid (Virtual + In‑Person)</p>
          <div className=&quot;mt-6 flex flex-wrap gap-3&quot;>
            <a href=&quot;#register&quot; className=&quot;inline-flex items-center px-4 py-2 rounded-md bg-neon-blue text-black font-semibold shadow-neon-blue&quot;>Register</Link>
            <a href=&quot;#livestream&quot; className=&quot;inline-flex items-center px-4 py-2 rounded-md border border-white/40 hover:bg-white/10&quot;>Livestream</Link>
            <a href=&quot;#agenda&quot; className=&quot;inline-flex items-center px-4 py-2 rounded-md border border-white/40 hover:bg-white/10&quot;>Agenda</Link>
          </div>
        </div>
      </section>

      <div className=&quot;grid md:grid-cols-3 gap-6 mt-8&quot;>
        <section id=&quot;agenda&quot; className=&quot;md:col-span-2 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black&quot;>
          <h2 className=&quot;text-2xl font-bold mb-4&quot;>Agenda</h2>
          <ol className=&quot;space-y-3 list-decimal list-inside&quot;>
            <li>Opening Keynote — Launching Zion Protocol</li>
            <li>Panel 1 — The Future of Digital Nations</li>
            <li>Panel 2 — ZionDAO in Action</li>
            <li>Demo — ZionGPT Live</li>
            <li>Featured Speaker — Founder</li>
          </ol>
        </section>
        <section className=&quot;p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black&quot;>
          <h2 className=&quot;text-2xl font-bold mb-4&quot;>Event Info</h2>
          <ul className=&quot;space-y-2&quot;>
            <li><span className=&quot;font-medium&quot;>Date:</span> Nov 12, 2025</li>
            <li><span className=&quot;font-medium&quot;>Time:</span> 16:00 UTC</li>
            <li><span className=&quot;font-medium&quot;>Location:</span> Hybrid (Virtual + In‑Person)</li>
            <li><span className=&quot;font-medium&quot;>Tagline:</span> AI, Talent, Trust — Globalized</li>
          </ul>
        </section>
      </div>

      <section id=&quot;speakers&quot; className=&quot;mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black&quot;>
        <h2 className=&quot;text-2xl font-bold mb-6&quot;>Speakers</h2>
        <div className=&quot;grid sm:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
          {speakers.map((s) => (
            <div key={s.name} className={`p-4 rounded-lg border ${s.highlight ? 'border-neon-blue shadow-neon-blue' : 'border-gray-200 dark:border-gray-800'}`}>
              <div className=&quot;flex items-center gap-4&quot;>
                <img src={s.avatarUrl} alt={s.name} className=&quot;w-14 h-14 rounded-full border border-gray-200 dark:border-gray-800&quot; />
                <div>
                  <div className=&quot;font-semibold&quot;>{s.name}</div>
                  <div className=&quot;text-sm opacity-70&quot;>{s.title}</div>
                </div>
              </div>
              <p className=&quot;mt-3 text-sm&quot;>{s.bio}</p>
              <div className=&quot;mt-3 flex gap-3 text-sm&quot;>
                {s.twitter && <a className=&quot;underline&quot; href={s.twitter} target=&quot;blank&quot; rel=&quot;noreferrer&quot;>Twitter</Link>}
                {s.linkedin && <a className=&quot;underline&quot; href={s.linkedin} target=&quot;blank&quot; rel=&quot;noreferrer&quot;>LinkedIn</Link>}              </div>
            </div>
          ))}
        </div>
      </section>

      <section id=&quot;partners&quot; className=&quot;mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black&quot;>
        <div className=&quot;flex items-center justify-between&quot;>
          <h2 className=&quot;text-2xl font-bold&quot;>Partners</h2>
          <a href=&quot;#register&quot; className=&quot;px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black border border-gray-200 dark:border-gray-800&quot;>Become a Sponsor</Link>
        </div>
        <div className=&quot;mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4&quot;>
          {partners.map((p) => (
            <div key={p.name} className=&quot;h-16 rounded-md border border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center text-sm opacity-70&quot;>
              {p.logoUrl ? <img src={p.logoUrl} alt={p.name} className=&quot;max-h-12&quot; /> : p.name}            </div>
          ))}
        </div>
      </section>

      <section id=&quot;livestream&quot; className=&quot;mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black&quot;>
        <div className=&quot;flex flex-col md:flex-row md:items-center md:justify-between gap-4&quot;>
          <h2 className=&quot;text-2xl font-bold&quot;>Livestream</h2>
          <div className=&quot;flex flex-wrap items-center gap-2&quot;>
            <select,
aria-label=&quot;Platform&quot;
              className=&quot;px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent&quot;
              value={platform}
              onChange={(e) => setPlatform(e.target.value as any)}            >
              <option value=&quot;youtube&quot;>YouTube</option>
              <option value=&quot;twitch&quot;>Twitch</option>
              <option value=&quot;twitter&quot;>Twitter</option>
            </select>
            <input,
aria-label=&quot;Embed ID&quot;
              className=&quot;px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent&quot;
              placeholder={platform === 'youtube' ? 'YouTube Video ID' : platform === 'twitch' ? 'Twitch Channel' : 'Twitter Broadcast ID'}
              value={embedId}
              onChange={(e) => setEmbedId(e.target.value)}
            />
            {isPast ? (
              <span className=&quot;px-3 py-2 rounded bg-green-600 text-white&quot;>Watch Replay</span>
            ) : (
              <span className=&quot;px-3 py-2 rounded bg-blue-600 text-white&quot;>Live in {days}d {hours}h {minutes}m {seconds}s</span>
            )}
          </div>
        </div>
        <div className=&quot;mt-4&quot;>
          {livestreamEmbed()}
        </div>
      </section>

      <section id=&quot;register&quot; className=&quot;mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black&quot;>
        <h2 className=&quot;text-2xl font-bold mb-4&quot;>Register</h2>
        <form onSubmit={onSubmit} className=&quot;grid md:grid-cols-2 gap-4&quot;>          <div>
            <label className=&quot;block text-sm mb-1&quot;>Name</label>
            <input,
required
              className=&quot;w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent&quot;
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}            />
          </div>
          <div>
            <label className=&quot;block text-sm mb-1&quot;>Email</label>
            <input,
type=&quot;email&quot;
              required,
className=&quot;w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent&quot;
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}            />
          </div>
          <div>
            <label className=&quot;block text-sm mb-1&quot;>Role</label>
            <input,
required
              className=&quot;w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent&quot;
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}            />
          </div>
          <div>
            <label className=&quot;block text-sm mb-1&quot;>Country</label>
            <input,
required
              className=&quot;w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent&quot;
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}            />
          </div>
          <div className=&quot;md:col-span-2 flex items-center gap-3&quot;>
            <button,
type=&quot;submit&quot;
              disabled={submitting}
              className=&quot;px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black border border-gray-200 dark:border-gray-800 disabled:opacity-50&quot;            >
              {submitting ? 'Submitting...' : 'Submit Registration'}
            </button>
            {result?.ok && <span className=&quot;text-green-600&quot;>Thank you! You are registered.</span>}
            {result?.error && <span className=&quot;text-red-600&quot;>{result.error}</span>}          </div>
        </form>
      </section>

      <section className="mt-8 p-6 rounded-lg border border-gray-200 dark: border-gray-800 bg-white dark:bg-black">
        <h2 className="text-xl font-semibold">AI Session Summaries (Optional)</h2>
        <p className="text-sm opacity-70 mt-2">Auto-generated summaries and ZionGPT moderation prompts coming soon.</p>      </section>
    </>
  )
}