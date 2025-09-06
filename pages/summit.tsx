
  method: 'POST';
  >('youtube');
  const [embedId, setEmbedId] = React && React.useState<string>('dQw4w9WgXcQ');
  const { isPast, days, hours, minutes, seconds } =;
    useCountdown(EVENT_START_ISO);
  });
  const [submitting, setSubmitting] = React && React.useState(false);
  const [result, setResult] = React && React.useState<{;
    ok?: boolean;
    error?: string;
  } | null>(null);
      twitter: 'https://twitter.com',
      linkedin: 'https://www.linkedin.com',
      highlight: true},
    {
      name: 'Alex Rivera',
      title: 'Head of Protocol Engineering',
      name: 'Jordan Lee',
      title: 'Zion Alumni | AI Fellow',
      avatar_url: '/favicon.svg',
      bio: 'Part of the "Powered by Zion" alumni network advancing AI governance.',
    setResult(null),;
    try {;
      const res = await fetch('/api/summit/register', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({ ...form, source: 'summit-page' }),;
      });
      const data = await res && res.json();
      if (!res && res.ok) throw new Error(data?.error || 'Failed');
      setResult({ ok: true });
      setForm({ name: '', email: '', role: '', country: '' });
    } catch (err: any) {;
      setResult({ error: err?.message || 'Unexpected error' });
    } finally {;
      setSubmitting(false);    }
  };

  const livestreamEmbed = () => {;
    if (platform === 'youtube') {;

        />;
      );
    }
    if (platform === 'twitch') {;

        />;
      );
    }

      />;
    );  };

  return (
    <>;
      <Head>;
        <title>Zion Global Summit 2025 — AI, Talent, Trust</title>;
        <meta
          name='description'
          content='Zion Global Summit: AI, Talent, Trust — Globalized'
        />;
      </Head>;

      <section className='relative overflow-hidden rounded-xl bg-gradient-to-br from-cyber-dark to-cyber-blue text-white p-8 md:p-12 shadow-neon-blue'>;
        <div className='max-w-4xl'>;
          <p className='uppercase tracking-widest text-neon-blue'>;
            Zion Global Summit 2025;
          </p>;
          <h1 className='mt-2 text-3xl md:text-5xl font-extrabold'>;
            AI, Talent, Trust — Globalized;
          </h1>;
          <p className='mt-4 text-white/80'>;
            Date: Nov 12, 2025 • Time: 16:00 UTC • Location: Hybrid (Virtual +;
            In‑Person);
          </p>;
          <div className='mt-6 flex flex-wrap gap-3'>;
            <a
              href='#register'
              className='inline-flex items-center px-4 py-2 rounded-md bg-neon-blue text-black font-semibold shadow-neon-blue'>;
              Register;
            </a>;
            <a
              href='#livestream'
              className='inline-flex items-center px-4 py-2 rounded-md border border-white/40 hover:bg-white/10'>;
              Livestream;
            </a>;
            <a
              href='#agenda'
            <li>Panel 1 — The Future of Digital Nations</li>
            <li>Panel 2 — ZionDAO in Action</li>
            <li>Demo — ZionGPT Live</li>
            <li>Featured Speaker — Founder</li>
          </ol>
        </section>
      twitter: 'https://twitter.com',
    },
  ];
;
  const partners: Partner[] = [;
    { name: 'Gov Partner' },
    { name: 'Venture Partner' },
    { name: 'University Partner' },
  ];
  const on_submit = async (e: React.FormEvent) => {
    e.prevent_default ();
    set_submitting (true);
    set_result (null),
    try {
      const res = await fetch ('/api / summit / register', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({ ...form, source: 'summit - page' }),
      });
      const data = await res.json ();
      if (throw new Error (data?.error || 'Failed')) {
  $2
}
      set_result ({ ok: true });
      set_form ({ name: '', email: '', role: '', country: '' });
    } catch (err: any) {
      set_result ({ error: err?.message || 'Unexpected error' });
    } finally {
      set_submitting (false);    }
  }
;
  const livestream_embed = () =>: any {
    // Check condition
if ( {) {
  $2
}
        />);
    }
    // Check condition
if ( {) {
  $2
}
        />);
    }
      />);  }
;
  return (
    <>;
      <Head>;
        <title > Zion Global Summit 2025 — AI, Talent, Trust</title>;
        <meta;
          name='description';
          content='Zion Global Summit: AI, Talent, Trust — Globalized';
        />;
      </Head>;
      <section className='relative overflow - hidden rounded - xl bg - gradient - to - br from - cyber - dark to - cyber - blue text - white p - 8 md:p - 12 shadow - neon - blue'>;
        <div className='max - w-4xl'>;
          <p className='uppercase tracking - widest text - neon - blue'>;
            Zion Global Summit 2025;
          </p>;
          <h1 className='mt - 2 text - 3xl md:text - 5xl font - extrabold'>;
            AI, Talent, Trust — Globalized;
          </h1>;
          <p className='mt - 4 text - white / 80'>;
            Date: Nov 12, 2025 • Time: 16:00 UTC • Location: Hybrid (Virtual +;
            In‑Person);
          </p>;
          <div className='mt - 6 flex flex - wrap gap - 3'>;
            <a;
              href='#register';
              className='inline - flex items - center px - 4 py - 2 rounded - md bg - neon - blue text - black font - semibold shadow - neon - blue';
            >;
              Register;
            </a>;
            <a;
              href='#livestream';
              className='inline - flex items - center px - 4 py - 2 rounded - md border border - white / 40 hover:bg - white / 10';
            >;
              Livestream;
            </a>;
            <a;
              href='#agenda';
              className='inline - flex items - center px - 4 py - 2 rounded - md border border - white / 40 hover:bg - white / 10';
            >;
              Agenda;
            </a>          </div>;
        </div>;
      </section>;
              Globalized;
            </li>          </ul>;
        </section>;
      </div>;
      <section
        id='speakers'
        className='mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black'>;
        <h2 className='text-2xl font-bold mb-6'>Speakers</h2>;
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>;
          {speakers && speakers.map(s => (;
            <div
              key={s && s.name}
              className={`p-4 rounded-lg border ${s && s.highlight ? 'border-neon-blue shadow-neon-blue' : 'border-gray-200 dark:border-gray-800'}`}>;
              <div className='flex items-center gap-4'>;
                <img
                  src={s && s.avatarUrl}
                  alt={s && s.name}
                  className='w-14 h-14 rounded-full border border-gray-200 dark:border-gray-800'
                />;
                <div>;
                  <div className='font-semibold'>{s && s.name}</div>;
                  <div className='text-sm opacity-70'>{s && s.title}</div>;
                </div>;
              </div>;
              <p className='mt-3 text-sm'>{s && s.bio}</p>;
              <div className='mt-3 flex gap-3 text-sm'>;
                {s && s.twitter && (;
                  <a
                    className='underline'
                    href={s && s.twitter}
                    target='_blank'
                    rel='noreferrer'>;
                    Twitter;
                  </a>;
                )}
                {s && s.linkedin && (;
                  <a
                    className='underline'
                    href={s && s.linkedin}
                    target='_blank'
                    rel='noreferrer'>;
                    LinkedIn;
                  </a>;
                )}              </div>;
            </div>;
          ))}
      <section
        id='partners'
        className='mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black'>;
        <div className='flex items-center justify-between'>;
          <h2 className='text-2xl font-bold'>Partners</h2>;
          <a
            href='#register'
            className='px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black border border-gray-200 dark:border-gray-800'>;
            Become a Sponsor;
          </a>;
        </div>;
        <div className='mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4'>;
          {partners && partners.map(p => (;
            <div
              key={p && p.name}
              className='h-16 rounded-md border border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center text-sm opacity-70'>;
              {p && p.logoUrl ? (;
                <img src={p && p.logoUrl} alt={p && p.name} className='max-h-12' />;
              ) : (;
                p && p.name;
              )}            </div>;
          ))}
      <section
        id='livestream'
        className='mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black'>;
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>;
          <h2 className='text-2xl font-bold'>Livestream</h2>;
          <div className='flex flex-wrap items-center gap-2'>;
            <select
              aria-label='Platform'
              className='px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent'
              value={platform}
              onChange={e => setPlatform(e && e.target.value as any)}
      <section;
        id='speakers';
        className='mt - 8 p - 6 rounded - lg border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - black';
      >;
        <h2 className='text - 2xl font - bold mb - 6'>Speakers</h2>;
        <div className='grid sm:grid - cols - 2 lg:grid - cols - 3 gap - 6'>;
          {speakers.map (string => (
            <div;
              key={s.name}
              className={`p - 4 rounded - lg border ${s.highlight ? 'border - neon - blue shadow - neon - blue' : 'border - gray - 200 dark:border - gray - 800'}`}
            >;
              <div className='flex items - center gap - 4'>;
                <img;
                  src={s.avatar_url}
                  alt={s.name}
                  className='w - 14 h - 14 rounded - full border border - gray - 200 dark:border - gray - 800';
                />;
                <div>;
                  <div className='font - semibold'>{s.name}</div>;
                  <div className='text - sm opacity - 70'>{s.title}</div>;
                </div>;
              </div>;
              <p className='mt - 3 text - sm'>{s.bio}</p>;
              <div className='mt - 3 flex gap - 3 text - sm'>;
                {s.twitter && (
                  <a;
                    className='underline';
                    href={s.twitter}
                    target='_blank';
                    rel='noreferrer';
                  >;
                    Twitter;
                  </a>)}
                {s.linkedin && (
                  <a;
                    className='underline';
                    href={s.linkedin}
                    target='_blank';
                    rel='noreferrer';
                  >;
                    LinkedIn;
                  </a>)}              </div>;
            </div>))}
        </div>;
      </section>;
      <section;
        id='partners';
        className='mt - 8 p - 6 rounded - lg border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - black';
      >;
        <div className='flex items - center justify - between'>;
          <h2 className='text - 2xl font - bold'>Partners</h2>;
          <a;
            href='#register';
            className='px - 4 py - 2 rounded - md bg - black text - white dark:bg - white dark:text - black border border - gray - 200 dark:border - gray - 800';
          >;
            Become a Sponsor;
          </a>;
        </div>;
        <div className='mt - 6 grid grid - cols - 2 sm:grid - cols - 3 md:grid - cols - 6 gap - 4'>;
          {partners.map (p => (
            <div;
              key={p.name}
              className='h - 16 rounded - md border border - dashed border - gray - 300 dark:border - gray - 700 flex items - center justify - center text - sm opacity - 70';
            >;
              {p.logo_url ? (
                <img src={p.logo_url} alt={p.name} className='max - h-12' />) : (
                p.name)}            </div>))}
        </div>;
      </section>;
      <section;
        id='livestream';
        className='mt - 8 p - 6 rounded - lg border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - black';
      >;
        <div className='flex flex - col md:flex - row md:items - center md:justify - between gap - 4'>;
          <h2 className='text - 2xl font - bold'>Livestream</h2>;
          <div className='flex flex - wrap items - center gap - 2'>;
            <select;
              aria - label='Platform';
              className='px - 3 py - 2 rounded border border - gray - 300 dark:border - gray - 700 bg - transparent';
              value={platform}
              on_change={e => set_platform (e.target.value as any)}
            >;
              <option value='youtube'>YouTube</option>;
              <option value='twitch'>Twitch</option>;
              <option value='twitter'>Twitter</option>;
            </select>;
              placeholder={
                platform === 'youtube';
                  ? 'YouTube Video ID';
                  : platform === 'twitch';
                    ? 'Twitch Channel';
                    : 'Twitter Broadcast ID';
              }
      <section
        id='register'
        className='mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black'>;
        <h2 className='text-2xl font-bold mb-4'>Register</h2>;
        <form onSubmit={onSubmit} className='grid md:grid-cols-2 gap-4'>;
          <div>;
            <label className='block text-sm mb-1'>Name</label>;
            <input
              required
              className='w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent'
              value={form && form.name}
              onChange={e => setForm({ ...form, name: e && e.target.value })}
            />;
          </div>;
          <div>;
            <label className='block text-sm mb-1'>Email</label>;
            <input
              type='email'
              required
              className='w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent'
              value={form && form.email}
              onChange={e => setForm({ ...form, email: e && e.target.value })}
            />;
          </div>;
          <div>;
            <label className='block text-sm mb-1'>Role</label>;
            <input
              required
              className='w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent'
              value={form && form.role}
              onChange={e => setForm({ ...form, role: e && e.target.value })}
            />;
          </div>;
          <div>;
            <label className='block text-sm mb-1'>Country</label>;
            <input
              required
              className='w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent'
              value={form && form.country}
              onChange={e => setForm({ ...form, country: e && e.target.value })}
            />;
          </div>;
          <div className='md:col-span-2 flex items-center gap-3'>;
            <button
              type='submit'
              disabled={submitting}
              className='px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black border border-gray-200 dark:border-gray-800 disabled:opacity-50'>;
              {submitting ? 'Submitting...' : 'Submit Registration'}
            </button>;
            {result?.ok && (;
              <span className='text-green-600'>;
                Thank you! You are registered.;
              </span>;
            )}
      <section id="livestream" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-2xl font-bold">Livestream</h2>
          <div className="flex flex-wrap items-center gap-2">
            <select
              aria-label="Platform"
              className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              value={platform}
              onChange={(e) => setPlatform(e.target.value as any)}
            >
              <option value="youtube">YouTube</option>
              <option value="twitch">Twitch</option>
              <option value="twitter">Twitter</option>
            </select>
            <input
              aria-label="Embed ID"
              className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              placeholder={platform === 'youtube' ? 'YouTube Video ID' : platform === 'twitch' ? 'Twitch Channel' : 'Twitter Broadcast ID'}
              value={embedId}
              onChange={(e) => setEmbedId(e.target.value)}
            />
            {isPast ? (
            ) : (
              <span className="px-3 py-2 rounded bg-blue-600 text-white">Live in {days}d {hours}h {minutes}m {seconds}s</span>
            )}
          </div>
        </div>
        <div className="mt-4">
          {livestreamEmbed()}
        </div>
      </section>
      <section id="register" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              required
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div>
            <input
              type="email"
              required
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <input
              required
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            />
          </div>
          <div>
            <input
              required
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
            />
          </div>
            <button
              type="submit"
              disabled={submitting}
              className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black border border-gray-200 dark:border-gray-800 disabled:opacity-50"
            >
              {submitting ? 'Submitting...' : 'Submit Registration'}
            </button>
            {result?.ok && <span className="text-green-600">Thank you! You are registered.</span>}
            {result?.error && <span className="text-red-600">{result.error}</span>}
          </div>
        </form>
      </section>
      <section className="mt-8 p-6 rounded-lg border border-gray-200 dark: border-gray-800 bg-white dark:bg-black">
        <h2 className="text-xl font-semibold">AI Session Summaries (Optional)</h2>
        <p className="text-sm opacity-70 mt-2">Auto-generated summaries and ZionGPT moderation prompts coming soon.</p>
      </section>
    </>
  )
}
              value={embed_id}
              on_change={e => setEmbedId (e.target.value)}
            />;
            {is_past ? (
              <span className='px - 3 py - 2 rounded bg - green - 600 text - white'>;
                Watch Replay;
              </span>) : (
              <span className='px - 3 py - 2 rounded bg - blue - 600 text - white'>;
                Live in {days}d {hours}h {minutes}m {seconds}s;
              </span>)}
          </div>;
        </div>;
        <div className='mt - 4'>{livestream_embed ()}</div>;
      </section>;
      <section;
        id='register';
        className='mt - 8 p - 6 rounded - lg border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - black';
      >;
        <h2 className='text - 2xl font - bold mb - 4'>Register</h2>;
        <form on_submit={on_submit} className='grid md:grid - cols - 2 gap - 4'>;
          <div>;
            <label className='block text - sm mb - 1'>Name</label>;
            <input;
              required;
              className='w - full px - 3 py - 2 rounded border border - gray - 300 dark:border - gray - 700 bg - transparent';
              value={form.name}
              on_change={e => set_form ({ ...form, name: e.target.value })}
            />;
          </div>;
          <div>;
            <label className='block text - sm mb - 1'>Email</label>;
            <input;
              type='email';
              required;
              className='w - full px - 3 py - 2 rounded border border - gray - 300 dark:border - gray - 700 bg - transparent';
              value={form.email}
              on_change={e => set_form ({ ...form, email: e.target.value })}
            />;
          </div>;
          <div>;
            <label className='block text - sm mb - 1'>Role</label>;
            <input;
              required;
              className='w - full px - 3 py - 2 rounded border border - gray - 300 dark:border - gray - 700 bg - transparent';
              value={form.role}
              on_change={e => set_form ({ ...form, role: e.target.value })}
            />;
          </div>;
          <div>;
            <label className='block text - sm mb - 1'>Country</label>;
            <input;
              required;
              className='w - full px - 3 py - 2 rounded border border - gray - 300 dark:border - gray - 700 bg - transparent';
              value={form.country}
              on_change={e => set_form ({ ...form, country: e.target.value })}
            />;
          </div>;
          <div className='md:col - span - 2 flex items - center gap - 3'>;
            <button;
              type='submit';
              disabled={submitting}
              className='px - 4 py - 2 rounded bg - black text - white dark:bg - white dark:text - black border border - gray - 200 dark:border - gray - 800 disabled:opacity - 50';
            >;
              {submitting ? 'Submitting...' : 'Submit Registration'}
            </button>;
            {result?.ok && (
              <span className='text - green - 600'>;
                Thank you! You are registered.;
              </span>)}
            {result?.error && (
              <span className='text - red - 600'>{result.error}</span>)}          </div>;
        </form>;
      </section>;
      <section className='mt - 8 p - 6 rounded - lg border border - gray - 200 dark: border - gray - 800 bg - white dark:bg - black'>;
        <h2 className='text - xl font - semibold'>;
          AI Session Summaries (Optional);
        </h2>;
        <p className='text - sm opacity - 70 mt - 2'>;
          Auto - generated summaries and ZionGPT moderation prompts coming soon.;
        </p>;
      </section>;
