

  method: 'POST';

headers: {;
  'Content-Type': 'application/json' ;
};
body: JSON && JSON.stringify ({;
  ...form, source: 'summit-page' ;
}) ;
});
const data = await res && res.json ();
if (!res && res.ok) throw new Error (data?.error || 'Failed');
setResult ({;
  ok: true ;
});
setForm ({;
  name: '', email: '', role: '', country: '' ;
}) ;
}catch (err: any) {;
  setResult ({;
  error: err?.message || 'Unexpected error' ;
}) ;
}finally {;
  setSubmitting (false) ;



export default function SummitPage() {;
  const [platform, setPlatform] = React && React.useState<;
    'youtube' | 'twitch' | 'twitter';



  >('youtube');
  const [embedId, setEmbedId] = React && React.useState<string>('dQw4w9WgXcQ');
  const { isPast, days, hours, minutes, seconds } =;
    useCountdown(EVENT_START_ISO);

  const [form, setForm] = React && React.useState({;
    name: '',;
    email: '',;
    role: '',;
    country: '',;

  const [form, setForm] = React.useState({

    name: '',
    email: '',
    role: '',
    country: '',

  });
  const [submitting, setSubmitting] = React && React.useState(false);
  const [result, setResult] = React && React.useState<{;
    ok?: boolean;
    error?: string;
  } | null>(null);

  const speakers: Speaker[] = [;
    {;
      name: 'Featured Speaker: Your Name',;
      title: 'Founder, Zion',;
      avatarUrl: '/favicon && favicon.svg',;
      bio: 'Visionary behind Zion Protocol — building AI-native digital nations.',;
      twitter: 'https://twitter && twitter.com',;
      linkedin: 'https://www && www.linkedin.com',;
      highlight: true,;
    },    {;
      name: 'Alex Rivera',;
      title: 'Head of Protocol Engineering',;
      avatarUrl: '/favicon && favicon.svg',;
      bio: 'Leading the architecture of ZionDAO and trust rails.',;
    },    {;
      name: 'Jordan Lee',;
      title: 'Zion Alumni | AI Fellow',;
      avatarUrl: '/favicon && favicon.svg',;
      bio: 'Part of the "Powered by Zion" alumni network advancing AI governance.',;
      twitter: 'https://twitter && twitter.com',;
    },;
  ];
  const partners: Partner[] = [;
    { name: 'Gov Partner' },;
    { name: 'Venture Partner' },;
    { name: 'University Partner' },;

  ];
  const onSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();

import Head from 'next/head';
import React from 'react';
type Speaker = {
  name: string,
  title: string,
  avatarUrl: string,
  bio: string,
twitter?: string;
  linkedin?: string;
  highlight?: boolean
};
type Partner = {
  name: string,
  logoUrl?: string
};
const EVENT_START_ISO = '2025-11-12T16: 00:00Z',
function useCountdown(targetIso: string) {
  const [remainingMs, setRemainingMs] = React.useState<number>(() => {
    return new Date(targetIso).getTime() - Date.now()
  });
  React.useEffect(() => {
    const id = setInterval(() => {
      setRemainingMs(new Date(targetIso).getTime() - Date.now())
    }, 1000);
    return () => clearInterval(id)
  }, [targetIso]);
  const isPast = remainingMs <= 0;
  const totalSec = Math.max(0, Math.floor(remainingMs / 1000));
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  return { isPast, days, hours, minutes, seconds }
}
export default function SummitPage() {
  const [platform, setPlatform] = React.useState<'youtube' | 'twitch' | 'twitter'>('youtube');
  const [embedId, setEmbedId] = React.useState<string>('dQw4w9WgXcQ');
  const { isPast, days, hours, minutes, seconds } = useCountdown(EVENT_START_ISO);
  const [form, setForm] = React.useState({ name: '', email: '', role: '', country: '' }),
  const [submitting, setSubmitting] = React.useState(false);
  const [result, setResult] = React.useState<{ ok?: boolean, error?: string } | null>(null);
  const speakers: Speaker[] = [
    {
      name: 'Featured Speaker: Your Name',
      title: 'Founder, Zion',
avatarUrl: '/favicon.svg',
      bio: 'Visionary behind Zion Protocol — building AI-native digital nations.',
  'Content - Type': 'application / json';
}
body: JSON.stringify ({
  ...form, source: 'summit - page';
});
});
const data = await res.json ();
if (throw new Error (data?.error || 'Failed')) {
  $2
}
set_result ({
  ok: true;
});
set_form ({
  name: '', email: '', role: '', country: '';
});
}catch (err: any) {
  set_result ({
  error: err?.message || 'Unexpected error';
});
}finally {
  set_submitting (false);
export default /**
 * SummitPage - Function description
 */
function SummitPage() {
  const [platform, set_platform] = React.useState<;
    'youtube' | 'twitch' | 'twitter';
  >('youtube');
  const [embed_id, setEmbedId] = React.useState < string>('dQw4w9WgXcQ');
  const { is_past, days, hours, minutes, seconds } =;
    use_countdown (EVENT_START_ISO);
  const [form, set_form] = React.useState ({
const partners: Partner[] = [ {
  name: 'Gov Partner'
}
{
  name: 'Venture Partner'
}
{
  name: 'University Partner'
}];
const onSubmit = async (e: React.FormEvent) => {
  e.preventDefault ();
setSubmitting (true);
setResult (null);
try {
  const res = await fetch ('/api/summit/register', {
  method: 'POST';
headers: {
  'Content-Type': 'application/json'
}
body: JSON.stringify ({
  ...form, source: 'summit-page'
})
});
const data = await res.json ();
if (!res.ok) throw new Error (data?.error |'Failed');
setResult ({
  ok: true
});
setForm ({
  name: '', email: '', role: '', country: ''
})
}catch (err: any) {
  setResult ({
  error: err?.message |'Unexpected error'
})
}finally {
  setSubmitting (false)
  >('youtube');
  const [embedId, setEmbedId] = React.useState<string>('dQw4w9WgXcQ');
  const { isPast, days, hours, minutes, seconds } =
    useCountdown(EVENT_START_ISO);
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    role: '',
    country: '',
      setResult({ ok: true }),
      setForm({ name: '', email: '', role: '', country: '' })
    } catch (err: any) {
      setResult({ error: err?.message || 'Unexpected error' })
    } finally {
      setSubmitting(false)
  const livestreamEmbed = () => {
    if (platform === 'youtube') {
      return (
        <iframe
          className="w-full aspect-video rounded-lg border border-gray-200 dark:border-gray-800"
          <h2 className="text-2xl font-bold mb-4">Event Info</h2>
          <ul className="space-y-2">
            <li><span className="font-medium">Date:</span> Nov 12, 2025</li>
            <li><span className="font-medium">Time:</span> 16:00 UTC</li>
            <li><span className="font-medium">Location:</span> Hybrid (Virtual + In‑Person)</li>
            <li><span className="font-medium">Tagline:</span> AI, Talent, Trust — Globalized</li>
          </ul>

        </section>
      </div>

              className='inline-flex items-center px-4 py-2 rounded-md border border-white/40 hover:bg-white/10'>;
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
        className='mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black'
      >
        <h2 className='text-2xl font-bold mb-6'>Speakers</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {speakers.map(s => (
            <div
              key={s.name}
              className={`p-4 rounded-lg border ${s.highlight ? 'border-neon-blue shadow-neon-blue' : 'border-gray-200 dark:border-gray-800'}`}
            >
              <div className='flex items-center gap-4'>
                <img
                  src={s.avatarUrl}
                  alt={s.name}
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



      <section id="speakers" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <h2 className="text-2xl font-bold mb-6">Speakers</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((s) => (
            <div key={s.name} className={`p-4 rounded-lg border ${s.highlight ? 'border-neon-blue shadow-neon-blue' : 'border-gray-200 dark:border-gray-800'}`}>
              <div className="flex items-center gap-4">
                <img src={s.avatarUrl} alt={s.name} className="w-14 h-14 rounded-full border border-gray-200 dark:border-gray-800" />



                <div>
                  <div className="font-semibold">{s.name}</div>
                  <div className="text-sm opacity-70">{s.title}</div>
                </div>
              </div>
              <p className="mt-3 text-sm">{s.bio}</p>
              <div className="mt-3 flex gap-3 text-sm">