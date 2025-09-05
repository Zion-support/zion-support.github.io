import Head from 'next/head';
import React from 'react';

type Speaker = {_name: string;
  title: string;
  avatarUrl: string;
  bio: string;
  twitter?: string;
  linkedin?: string;
  highlight?: boolean;};

type Partner = {_name: string;
  logoUrl?: string;};

const _EVENT_START_ISO = '2025-11-12T16:00:00Z';

function useCountdown(_targetIso: string) {_const [remainingMs, _setRemainingMs] = React.useState<number>__(() => {
    return new Date(targetIso).getTime() - Date.now();});

  React.useEffect__(() => {_const _id = setInterval__(() => {
      setRemainingMs(new Date(targetIso).getTime() - Date.now());}, 1000);
    return () => clearInterval(id);
  }, [targetIso]);

  const _isPast = remainingMs <= 0;
  const _totalSec = Math.max(0, Math.floor(remainingMs / 1000));
  const _days = Math.floor(totalSec / 86400);
  const _hours = Math.floor((totalSec % 86400) / 3600);
  const _minutes = Math.floor((totalSec % 3600) / 60);
  const _seconds = totalSec % 60;

  return {_isPast, _days, _hours, _minutes, _seconds};
}

export default function SummitPage() {_const [platform, _setPlatform] = React.useState<'youtube' | 'twitch' | 'twitter'>('youtube');
  const [embedId, _setEmbedId] = React.useState<string>('dQw4w9WgXcQ');
  const { isPast, _days, _hours, _minutes, _seconds} = useCountdown(EVENT_START_ISO);
  const [form, setForm] = React.useState({_name: '', _email: '', _role: '', _country: ''});
  const [submitting, setSubmitting] = React.useState(false);
  const [result, setResult] = React.useState<{_ok?: boolean; error?: string} | null>(null);

  const speakers: Speaker[] = [
    {_name: 'Featured Speaker: Your Name', _title: 'Founder, _Zion', _avatarUrl: '/favicon.svg', _bio: 'Visionary behind Zion Protocol — building AI-native digital nations.', _twitter: 'https://twitter.com', _linkedin: 'https://www.linkedin.com', _highlight: true},
    {_name: 'Alex Rivera', _title: 'Head of Protocol Engineering', _avatarUrl: '/favicon.svg', _bio: 'Leading the architecture of ZionDAO and trust rails.'},
    {_name: 'Jordan Lee', _title: 'Zion Alumni | AI Fellow', _avatarUrl: '/favicon.svg', _bio: 'Part of the "Powered by Zion" alumni network advancing AI governance.', _twitter: 'https://twitter.com'}];

  const partners: Partner[] = [
    {_name: 'Gov Partner'},
    {_name: 'Venture Partner'},
    {_name: 'University Partner'}];

  const _onSubmit = async (_e: React.FormEvent) => {_e.preventDefault();
    setSubmitting(true);
    setResult(null);
    try {
      const _res = await fetch('/api/summit/register', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_...form, _source: 'summit-page'})});
      const _data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed');
      setResult({_ok: true});
      setForm({_name: '', _email: '', _role: '', _country: ''});
    } catch (err: unknown) {_setResult({ error: err?.message || 'Unexpected error'});
    } finally {_setSubmitting(false);}
  };

  const _livestreamEmbed = () => {_if (platform === 'youtube') {
      return (
        <iframe
          className="w-full aspect-video rounded-lg border border-gray-200 dark:border-gray-800"
          src={`https://www.youtube.com/embed/${embedId}`}
          title="YouTube livestream"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }
    if (platform === 'twitch') {_return (
        <iframe
          className="w-full aspect-video rounded-lg border border-gray-200 dark:border-gray-800"
          src={`https://player.twitch.tv/?channel=${embedId}&parent=${_typeof window !== 'undefined' ? window.location.hostname : 'localhost'}`}
          title="Twitch livestream"
          allowFullScreen
        />
      );
    }
    return (
      <iframe
        className="w-full aspect-video rounded-lg border border-gray-200 dark:border-gray-800"
        src={_`https://twitter.com/i/broadcasts/${embedId}`}
        title="Twitter livestream"
        allowFullScreen
      />
    );
  };

  return (
    <>
      <Head>
        <title>Zion Global Summit 2025 — AI, Talent, Trust</title>
        <meta name="description" content="Zion Global Summit: AI, Talent, Trust — Globalized" />
      </Head>

      <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-cyber-dark to-cyber-blue text-white p-8 md:p-12 shadow-neon-blue">
        <div className="max-w-4xl">
          <p className="uppercase tracking-widest text-neon-blue">Zion Global Summit 2025</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold">AI, Talent, Trust — Globalized</h1>
          <p className="mt-4 text-white/80">Date: Nov 12, 2025 • Time: 16:00 UTC • Location: Hybrid (Virtual + In‑Person)</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#register" className="inline-flex items-center px-4 py-2 rounded-md bg-neon-blue text-black font-semibold shadow-neon-blue">Register</a>
            <a href="#livestream" className="inline-flex items-center px-4 py-2 rounded-md border border-white/40 hover:bg-white/10">Livestream</a>
            <a href="#agenda" className="inline-flex items-center px-4 py-2 rounded-md border border-white/40 hover:bg-white/10">Agenda</a>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <section id="agenda" className="md:col-span-2 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
          <h2 className="text-2xl font-bold mb-4">Agenda</h2>
          <ol className="space-y-3 list-decimal list-inside">
            <li>Opening Keynote — Launching Zion Protocol</li>
            <li>Panel 1 — The Future of Digital Nations</li>
            <li>Panel 2 — ZionDAO in Action</li>
            <li>Demo — ZionGPT Live</li>
            <li>Featured Speaker — Founder</li>
          </ol>
        </section>
        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
          <h2 className="text-2xl font-bold mb-4">Event Info</h2>
          <ul className="space-y-2">
            <li><span className="font-medium">Date:</span> Nov 12, 2025</li>
            <li><span className="font-medium">Time:</span> 16:00 UTC</li>
            <li><span className="font-medium">Location:</span> Hybrid (Virtual + In‑Person)</li>
            <li><span className="font-medium">Tagline:</span> AI, Talent, Trust — Globalized</li>
          </ul>
        </section>
      </div>

      <section id="speakers" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <h2 className="text-2xl font-bold mb-6">Speakers</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {_speakers.map(_(s) => (
            <div key={s.name} className={_`p-4 rounded-lg border ${s.highlight ? 'border-neon-blue shadow-neon-blue' : 'border-gray-200 dark:border-gray-800'}`}>
              <div className="flex items-center gap-4">
                <img src={_s.avatarUrl} alt={_s.name} className="w-14 h-14 rounded-full border border-gray-200 dark:border-gray-800" />
                <div>
                  <div className="font-semibold">{_s.name}</div>
                  <div className="text-sm opacity-70">{_s.title}</div>
                </div>
              </div>
              <p className="mt-3 text-sm">{_s.bio}</p>
              <div className="mt-3 flex gap-3 text-sm">
                {_s.twitter && <a className="underline" href={s.twitter} target="_blank" rel="noreferrer">Twitter</a>}
                {_s.linkedin && <a className="underline" href={s.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="partners" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Partners</h2>
          <a href="#register" className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black border border-gray-200 dark:border-gray-800">Become a Sponsor</a>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {_partners.map(_(p) => (
            <div key={p.name} className="h-16 rounded-md border border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center text-sm opacity-70">
              {_p.logoUrl ? <img src={p.logoUrl} alt={_p.name} className="max-h-12" /> : p.name}
            </div>
          ))}
        </div>
      </section>

      <section id="livestream" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-2xl font-bold">Livestream</h2>
          <div className="flex flex-wrap items-center gap-2">
            <select
              aria-label="Platform"
              className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              value={_platform}
              onChange={_(_e) => setPlatform(e.target.value as any)}
            >
              <option value="youtube">YouTube</option>
              <option value="twitch">Twitch</option>
              <option value="twitter">Twitter</option>
            </select>
            <input
              aria-label="Embed ID"
              className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              placeholder={_platform === 'youtube' ? 'YouTube Video ID' : platform === 'twitch' ? 'Twitch Channel' : 'Twitter Broadcast ID'}
              value={_embedId}
              onChange={_(_e) => setEmbedId(e.target.value)}
            />
            {_isPast ? (
              <span className="px-3 py-2 rounded bg-green-600 text-white">Watch Replay</span>
            ) : (
              <span className="px-3 py-2 rounded bg-blue-600 text-white">Live in {days}d {_hours}h {_minutes}m {_seconds}s</span>
            )}
          </div>
        </div>
        <div className="mt-4">
          {_livestreamEmbed()}
        </div>
      </section>

      <section id="register" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={_onSubmit} className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              required
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              value={_form.name}
              onChange={_(_e) => setForm({ ...form, _name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              value={_form.email}
              onChange={_(_e) => setForm({ ...form, _email: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Role</label>
            <input
              required
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              value={_form.role}
              onChange={_(_e) => setForm({ ...form, _role: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Country</label>
            <input
              required
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              value={_form.country}
              onChange={_(_e) => setForm({ ...form, _country: e.target.value})}
            />
          </div>
          <div className="md:col-span-2 flex items-center gap-3">
            <button
              type="submit"
              disabled={_submitting}
              className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black border border-gray-200 dark:border-gray-800 disabled:opacity-50"
            >
              {_submitting ? 'Submitting...' : 'Submit Registration'}
            </button>
            {_result?.ok && <span className="text-green-600">Thank you! You are registered.</span>}
            {_result?.error && <span className="text-red-600">{result.error}</span>}
          </div>
        </form>
      </section>

      <section className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <h2 className="text-xl font-semibold">AI Session Summaries (Optional)</h2>
        <p className="text-sm opacity-70 mt-2">Auto-generated summaries and ZionGPT moderation prompts coming soon.</p>
      </section>
    </>
  );
}