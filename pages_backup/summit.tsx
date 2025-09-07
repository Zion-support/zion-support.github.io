const partners: Partner[] = [ {
  name: 'Gov Partner'
}

<<<<<<< HEAD:pages_backup/summit.tsx
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
=======
<<<<<<< HEAD
  method: 'POST';

try {;
  const res = await fetch ('/api/summit/register', {;
  name: 'Gov Partner';
}
{
  name: 'Venture Partner';
}
{
  name: 'University Partner';
}];
const on_submit = async (e: React.FormEvent) => {
  e.prevent_default ();
set_submitting (true);
set_result (null);
try {
  const res = await fetch ('/api / summit / register', {
  method: 'POST';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx

  method: 'POST';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
headers: {;
  'Content-Type': 'application/json' ;
};
body: JSON && JSON.stringify ({;
  ...form, source: 'summit-page' ;
});

});
const data = await res && res.json ();
if (!res && res.ok) throw new Error (data?.error || 'Failed');
setResult ({;
  ok: true ;
});

setForm ({;
  name: '', email: '', role: '', country: '' ;
});
}catch (err: any) {;
  setResult ({;
  error: err?.message || 'Unexpected error' ;
});
}finally {;
  setSubmitting (false) ;
<<<<<<< HEAD:pages_backup/summit.tsx
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx

export default function SummitPage() {;
  const [platform, setPlatform] = React && React.useState<;
    'youtube' | 'twitch' | 'twitter';

<<<<<<< HEAD:pages_backup/summit.tsx
=======


<<<<<<< HEAD
export default function SummitPage() {;
  const [platform, setPlatform] = React && React.useState<;
    'youtube' | 'twitch' | 'twitter';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
  >('youtube');
  const [embedId, setEmbedId] = React && React.useState<string>('dQw4w9WgXcQ');
  const { isPast, days, hours, minutes, seconds } =;
    useCountdown(EVENT_START_ISO);
<<<<<<< HEAD
=======

<<<<<<< HEAD:pages_backup/summit.tsx
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [form, setForm] = React && React.useState({;
    name: '',;
    email: '',;
    role: '',;
    country: '',;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [form, setForm] = React.useState({

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
    name: '',
    email: '',
    role: '',
    country: '',

<<<<<<< HEAD:pages_backup/summit.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
  });
  const [submitting, setSubmitting] = React && React.useState(false);
  const [result, setResult] = React && React.useState<{;
    ok?: boolean;
    error?: string;
  } | null>(null);
<<<<<<< HEAD
=======

<<<<<<< HEAD:pages_backup/summit.tsx
  ];

  const partners: Partner[] = [;'
    { name: 'Gov Partner' },;'
    { name: 'Venture Partner' },;'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
    { name: 'University Partner' },;
<<<<<<< HEAD
  ];
  const onSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
=======

  ];

<<<<<<< HEAD:pages_backup/summit.tsx
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
import Head from 'next/head';

import React from 'react';
type Speaker = {}
  name: string,
  title: string,
  avatarUrl: string,
  bio: string,
twitter?: string;
  linkedin?: string;
  highlight?: boolean;
};
<<<<<<< HEAD:pages_backup/summit.tsx

type Partner = {}
=======
type Partner = {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
  name: string,
  logoUrl?: string;
};
<<<<<<< HEAD:pages_backup/summit.tsx
'
const EVENT_START_ISO = '2025-11-12T16: 00:00Z',

function useCountdown(targetIso: string) {}
  const [remainingMs, setRemainingMs] = React.useState<number>(() => {}
    return new Date(targetIso).getTime() - Date.now()
  });

  React.useEffect(() => {}
    const id = setInterval(() => {}
=======
const EVENT_START_ISO = '2025-11-12T16: 00:00Z',
function useCountdown(targetIso: string) {
  const [remainingMs, setRemainingMs] = React.useState<number>(() => {
    return new Date(targetIso).getTime() - Date.now()
  });
  React.useEffect(() => {
    const id = setInterval(() => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
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
<<<<<<< HEAD:pages_backup/summit.tsx

export default function SummitPage() { return null; }
  const { isPast, days, hours, minutes, seconds } = useCountdown(EVENT_START_ISO);'
  const [form, setForm] = React.useState({ name: '', email: '', role: '', country: '' }),

=======
export default function SummitPage() {
  const [platform, setPlatform] = React.useState<'youtube' | 'twitch' | 'twitter'>('youtube');
  const [embedId, setEmbedId] = React.useState<string>('dQw4w9WgXcQ');
  const { isPast, days, hours, minutes, seconds } = useCountdown(EVENT_START_ISO);
  const [form, setForm] = React.useState({ name: '', email: '', role: '', country: '' }),
  const [submitting, setSubmitting] = React.useState(false);
  const [result, setResult] = React.useState<{ ok?: boolean, error?: string } | null>(null);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
  const speakers: Speaker[] = [
    {
      name: 'Featured Speaker: Your Name',
      title: 'Founder, Zion',
<<<<<<< HEAD:pages_backup/summit.tsx

=======
avatarUrl: '/favicon.svg',
      bio: 'Visionary behind Zion Protocol — building AI-native digital nations.',
  'Content - Type': 'application / json';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
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

  'Content - Type': 'application / json';
}
body: JSON.stringify ({'
  ...form, source: 'summit - page';
});
});
const data = await res.json ();'
if (throw new Error (data?.error || 'Failed')) {}
  $2;
}
set_result ({}
  ok: true;
});
set_form ({'
  name: '', email: '', role: '', country: '';
});
}catch (err: any) {}
  set_result ({'
  error: err?.message || 'Unexpected error';
});
}finally {}
  set_submitting (false);
export default /**;
 * SummitPage - Function description;
 */


  name: 'Gov Partner'
}
{'
  name: 'Venture Partner'
}
{'
  name: 'University Partner'
}];
const onSubmit = async (e: React.FormEvent) => {}
  e.preventDefault ();
setSubmitting (true);
setResult (null);
try {'
  const res = await fetch ('/api/summit/register', {'
  method: 'POST';
headers: {'
  'Content-Type': 'application/json'
}
body: JSON.stringify ({'
  ...form, source: 'summit-page'
})
});
if (!res.ok) throw new Error (data?.error |'Failed');
setResult ({}
  ok: true;
});
setForm ({'
  name: '', email: '', role: '', country: ''
})
}catch (err: any) {}
  setResult ({'
  error: err?.message |'Unexpected error'
})
}finally {}
  setSubmitting (false)

  >('youtube');
<<<<<<< HEAD:pages_backup/summit.tsx

=======
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
export default function SummitPage() {
  const [platform, setPlatform] = React.useState<
    'youtube' | 'twitch' | 'twitter'

export default function SummitPage() {
  const [platform, setPlatform] = React.useState<
    'youtube' | 'twitch' | 'twitter';
  >('youtube');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
  const [embedId, setEmbedId] = React.useState<string>('dQw4w9WgXcQ');
  const { isPast, days, hours, minutes, seconds } =
    useCountdown(EVENT_START_ISO);
  const [form, setForm] = React.useState({
<<<<<<< HEAD:pages_backup/summit.tsx

=======
    name: ''
    email: ''
    role: ''
    country: ''
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
    name: '',
    email: '',
    role: '',
    country: '',
<<<<<<< HEAD:pages_backup/summit.tsx

=======
<<<<<<< HEAD
  });
  const [submitting, setSubmitting] = React.useState(false);
  const [result, setResult] = React.useState<{
    ok?: boolean;
    error?: string;
  } | null>(null);
  const speakers: Speaker[] = [
    {
      name: 'Featured Speaker: Your Name'
      title: 'Founder, Zion'
      avatarUrl: '/favicon.svg'
      bio: 'Visionary behind Zion Protocol — building AI-native digital nations.'
      twitter: 'https://twitter.com'
      linkedin: 'https://www.linkedin.com'
      highlight: true
    },    {
      name: 'Alex Rivera'
      title: 'Head of Protocol Engineering'
      avatarUrl: '/favicon.svg'
      bio: 'Leading the architecture of ZionDAO and trust rails.'
    },    {
      name: 'Jordan Lee'
      title: 'Zion Alumni | AI Fellow'
      avatarUrl: '/favicon.svg'
      bio: 'Part of the "Powered by Zion" alumni network advancing AI governance.'
      twitter: 'https://twitter.com'
    }
  ];
  const partners: Partner[] = [
    { name: 'Gov Partner' }
    { name: 'Venture Partner' }
    { name: 'University Partner' }
  ];
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setResult(null)
    try {
      const res = await fetch('/api/summit/register', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ ...form, source: 'summit-page' })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error |'Failed');
      setResult({ ok: true });
      setForm({ name: '', email: '', role: '', country: '' });
    } catch (err: any) {
      setResult({ error: err?.message |'Unexpected error' });
    } finally {
      setSubmitting(false);    }
  }
  const livestreamEmbed = () => {
    if (platform === 'youtube') {
import Head from 'next/head';
import React from 'react';
type Speaker = {
  name: string;
  title: string;
  avatarUrl: string;
  bio: string;
  twitter?: string;
  linkedin?: string,;
  highlight?: boolean;
};
type Partner = {
  name: string;
  logoUrl?: string;
};
const EVENT_START_ISO = '2025-11-12T16: 00:00Z';
function useCountdown(targetIso: string) {;
  const [remainingMs, setRemainingMs] = React.useState<number>(() => {;
    return new Date(targetIso).getTime() - Date.now();
  });
  React.useEffect(() => {;
    const id = setInterval(() => {;
      setRemainingMs(new Date(targetIso).getTime() - Date.now());
    }, 1000),;
    return () => clearInterval(id);
  }, [targetIso]),;
  const isPast = remainingMs <= 0;
  const totalSec = Math.max(0, Math.floor(remainingMs / 1000)),;
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  return { isPast, days, hours, minutes, seconds   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
export default function SummitPage() {
  const [platform, setPlatform] = React.useState<'youtube' | 'twitch' | 'twitter'>('youtube'),
  const [embedId, setEmbedId] = React.useState<string>('dQw4w9WgXcQ'),
  const { isPast, days, hours, minutes, seconds } = useCountdown(EVENT_START_ISO),
  const [form, setForm] = React.useState({ name: '', email: '', role: '', country: '' }),
  const [submitting, setSubmitting] = React.useState(false),
  const [result, setResult] = React.useState<{ ok?: boolean, error?: string } | null>(null),
  const speakers: Speaker[] = [
    {
      name: 'Featured Speaker: Your Name',
      title: 'Founder, Zion',
      avatarUrl: '/favicon.svg',
      bio: 'Visionary behind Zion Protocol — building AI-native digital nations.',
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
  });
  const [submitting, setSubmitting] = React.useState(false);
  const [result, setResult] = React.useState<{
    ok?: boolean;
    error?: string;
  } | null>(null);

    {
      name: 'Featured Speaker: Your Name',
      title: 'Founder, Zion',
      avatarUrl: '/favicon.svg',
      bio: 'Visionary behind Zion Protocol — building AI-native digital nations.',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      twitter: 'https://twitter.com',
      linkedin: 'https://www.linkedin.com',
      highlight: true},
    {
      name: 'Alex Rivera',
      title: 'Head of Protocol Engineering',
<<<<<<< HEAD
=======

    setResult(null),;
    try {;'
      const res = await fetch('/api/summit/register', {;'
        method: 'POST',;'
        headers: { 'Content-Type': 'application/json' },;'
        body: JSON && JSON.stringify({ ...form, source: 'summit-page' }),;

avatarUrl: '/favicon.svg',
      bio: 'Visionary behind Zion Protocol — building AI-native digital nations.',
      twitter: 'https://twitter.com',
      linkedin: 'https://www.linkedin.com',
      highlight: true,
    },
    {
      name: 'Alex Rivera',
      title: 'Head of Protocol Engineering',
      avatarUrl: '/favicon.svg',
bio: 'Leading the architecture of ZionDAO and trust rails.',
    },

    {
      name: 'Jordan Lee',
      title: 'Zion Alumni | AI Fellow',
      avatarUrl: '/favicon.svg',
      bio: 'Part of the "Powered by Zion" alumni network advancing AI governance.',

<<<<<<< HEAD:pages_backup/summit.tsx
    try {
      const res = await fetch('/api/summit/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD



=======

=======



=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'summit-page' })}),
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed');
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
      setForm({ name: '', email: '', role: '', country: '' })
    } catch (err: any) {'
      setResult({ error: err?.message || 'Unexpected error' })
    } finally {}
      setSubmitting(false)
<<<<<<< HEAD:pages_backup/summit.tsx

    } catch (err: any) {
      setResult({ error: err?.message |'Unexpected error' });
    } finally {
      setSubmitting(false);
    }
  };

  const livestreamEmbed = () => {
    if (platform === 'youtube') {
/>
      );
    }
    if (platform === 'twitch') {
        />
      );
    }
      />
    );
  };

  return (
    <>
      <Head>
        <title>Zion Global Summit 2025 — AI, Talent, Trust</title>
<meta
          name='description'
          content='Zion Global Summit: AI, Talent, Trust — Globalized'
        />

      </Head>
      <section className='relative overflow-hidden rounded-xl bg-gradient-to-br from-cyber-dark to-cyber-blue text-white p-8 md:p-12 shadow-neon-blue'>
        <div className='max-w-4xl'>
          <p className='uppercase tracking-widest text-neon-blue'>
            Zion Global Summit 2025
          </p>
          <h1 className='mt-2 text-3xl md:text-5xl font-extrabold'>
          </p>
          <div className='mt-6 flex flex-wrap gap-3'>

        />
      )
=======
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },
  const livestreamEmbed = () => {
    if (platform === 'youtube') {
      return (
        <iframe
          className="w-full aspect-video rounded-lg border border-gray-200 dark:border-gray-800"
        />
      )

<<<<<<< HEAD
    }
if (platform === 'twitch') {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    if (platform === 'twitch') {

<<<<<<< HEAD:pages_backup/summit.tsx
  return (

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      return (
        <iframe
          className="w-full aspect-video rounded-lg border border-gray-200 dark: border-gray-800"
          src={`https://player.twitch.tv/?channel=${embedId}&parent=${typeof window !== 'undefined' ? window.location.hostname : 'localhost'}`}
          title="Twitch livestream"
          allowFullScreen
        />
      )
    }
    return (
      <iframe
className="w-full aspect-video rounded-lg border border-gray-200 dark:border-gray-800"
        src={`https://twitter.com/i/broadcasts/${embedId}`}
        title="Twitter livestream"
        allowFullScreen
      />
    )
<<<<<<< HEAD
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
          src={`https://www.youtube.com/embed/${embedId}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          title="YouTube livestream"
          allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
          allowFullScreen
        />
      )
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    if (platform === 'twitch') {
        />
      );
    }
      />
    );  }

      return (
        <iframe
          className="w-full aspect-video rounded-lg border border-gray-200 dark:border-gray-800"
          src={`https://player.twitch.tv/?channel=${embedId}&parent=${typeof window !== 'undefined' ? window.location.hostname : 'localhost'}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          title="Twitch livestream"
          allowFullScreen
        />
      )
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    return (
      <iframe
        className="w-full aspect-video rounded-lg border border-gray-200 dark:border-gray-800"
        src={`https://twitter.com/i/broadcasts/${embedId}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        title="Twitter livestream"
        allowFullScreen
      />
    )
  },
  return (
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
=======



  return (


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
            <a
              href='#register'

              className='inline-flex items-center px-4 py-2 rounded-md bg-neon-blue text-black font-semibold shadow-neon-blue'>;
              Register;
            </a>;
            <a'
              href='#livestream''
              className='inline-flex items-center px-4 py-2 rounded-md border border-white/40 hover:bg-white/10'>;
              Livestream;
            </a>;
            <a'
              href='#agenda'
<<<<<<< HEAD
    <>
      <Head>
        <title>Zion Global Summit 2025 — AI, Talent, Trust</title>
        <meta name="description" content="Zion Global Summit: AI, Talent, Trust — Globalized" />
      </Head>
      <section className='relative overflow-hidden rounded-xl bg-gradient-to-br from-cyber-dark to-cyber-blue text-white p-8 md:p-12 shadow-neon-blue'>
        <div className='max-w-4xl'>
          <p className='uppercase tracking-widest text-neon-blue'>
            Zion Global Summit 2025
          </p>
          <h1 className='mt-2 text-3xl md:text-5xl font-extrabold'>
            AI, Talent, Trust — Globalized
          </h1>
          <p className='mt-4 text-white/80'>
            Date: Nov 12, 2025 • Time: 16:00 UTC • Location: Hybrid (Virtual +
            In‑Person)
          </p>
          <div className='mt-6 flex flex-wrap gap-3'>
            <a
              href='#register'
              className='inline-flex items-center px-4 py-2 rounded-md bg-neon-blue text-black font-semibold shadow-neon-blue'
            >
              Register
            </a>
            <a
              href='#livestream'
              className='inline-flex items-center px-4 py-2 rounded-md border border-white/40 hover:bg-white/10'
            >
              Livestream
            </a>
            <a
              href='#agenda'
              className='inline-flex items-center px-4 py-2 rounded-md border border-white/40 hover:bg-white/10'
            >
              Agenda
            </a>          </div>
        </div>
      </section>
      <div className='grid md:grid-cols-3 gap-6 mt-8'>
        <section
          id='agenda'
          className='md:col-span-2 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black'
        >
          <h2 className='text-2xl font-bold mb-4'>Agenda</h2>
          <ol className='space-y-3 list-decimal list-inside'>            <li>Opening Keynote — Launching Zion Protocol</li>
      <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-cyber-dark to-cyber-blue text-white p-8 md:p-12 shadow-neon-blue">
        <div className="max-w-4xl">
          <p className="uppercase tracking-widest text-neon-blue">Zion Global Summit 2025</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold">AI, Talent, Trust — Globalized</h1>
          <p className="mt-4 text-white/80">Date: Nov 12, 2025 • Time: 16:00 UTC • Location: Hybrid (Virtual + In‑Person)</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#register" className="inline-flex items-center px-4 py-2 rounded-md bg-neon-blue text-black font-semibold shadow-neon-blue">Register</Link>
            <a href="#livestream" className="inline-flex items-center px-4 py-2 rounded-md border border-white/40 hover:bg-white/10">Livestream</Link>
            <a href="#agenda" className="inline-flex items-center px-4 py-2 rounded-md border border-white/40 hover:bg-white/10">Agenda</Link>
          </div>
        </div>
      </section>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <section id="agenda" className="md:col-span-2 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
          <h2 className="text-2xl font-bold mb-4">Agenda</h2>
          <ol className="space-y-3 list-decimal list-inside">
            <li>Opening Keynote — Launching Zion Protocol</li>
=======

              className='inline-flex items-center px-4 py-2 rounded-md border border-white/40 hover:bg-white/10'
            >
              Agenda
            </a>
          </div>
        </div>
      </section>

<div className='grid md:grid-cols-3 gap-6 mt-8'>
        <section
          id='agenda'
          className='md:col-span-2 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black'
        >
          <h2 className='text-2xl font-bold mb-4'>Agenda</h2>
          <ol className='space-y-3 list-decimal list-inside'>
            <li>Opening Keynote — Launching Zion Protocol</li>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <li>Panel 1 — The Future of Digital Nations</li>
            <li>Panel 2 — ZionDAO in Action</li>
            <li>Demo — ZionGPT Live</li>
            <li>Featured Speaker — Founder</li>
          </ol>
        </section>
<<<<<<< HEAD
=======

<<<<<<< HEAD:pages_backup/summit.tsx
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
          <h2 className="text-2xl font-bold mb-4">Event Info</h2>
          <ul className="space-y-2">
            <li><span className="font-medium">Date:</span> Nov 12, 2025</li>
            <li><span className="font-medium">Time:</span> 16:00 UTC</li>
            <li><span className="font-medium">Location:</span> Hybrid (Virtual + In‑Person)</li>

            <li><span className="font-medium">Tagline:</span> AI, Talent, Trust — Globalized</li>
          </ul>
<<<<<<< HEAD
        </section>
      </div>
=======

<<<<<<< HEAD:pages_backup/summit.tsx
=======
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

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
              Agenda;
            </a>          </div>;
        </div>;
      </section>;
<<<<<<< HEAD
      <div className='grid md:grid - cols - 3 gap - 6 mt - 8'>;
        <section;
          id='agenda';
          className='md:col - span - 2 p - 6 rounded - lg border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - black';
        >;
          <h2 className='text - 2xl font - bold mb - 4'>Agenda</h2>;
          <ol className='space - y-3 list - decimal list - inside'>            <li > Opening Keynote — Launching Zion Protocol</li>;
            <li > Panel 1 — The Future of Digital Nations</li>;
            <li > Panel 2 — ZionDAO in Action</li>;
            <li > Demo — ZionGPT Live</li>;
            <li > Featured Speaker — Founder</li>;
          </ol>;
        </section>;
        <section className='p - 6 rounded - lg border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - black'>;
          <h2 className='text - 2xl font - bold mb - 4'>Event Info</h2>;
          <ul className='space - y-2'>;
            <li>;
              <span className='font - medium'>Date:</span> Nov 12, 2025;
            </li>;
            <li>;
              <span className='font - medium'>Time:</span> 16:00 UTC;
            </li>;
            <li>;
              <span className='font - medium'>Location:</span> Hybrid (Virtual +;
              In‑Person);
            </li>;
            <li>;
              <span className='font - medium'>Tagline:</span> AI, Talent, Trust —;
=======

<<<<<<< HEAD:pages_backup/summit.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
              Globalized;
            </li>          </ul>;
        </section>;
      </div>;
<<<<<<< HEAD
=======

<<<<<<< HEAD:pages_backup/summit.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
      <section

<section className='p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black'>
          <h2 className='text-2xl font-bold mb-4'>Event Info</h2>
          <ul className='space-y-2'>
            <li>
              <span className='font-medium'>Date:</span> Nov 12, 2025
            </li>
            <li>
              <span className='font-medium'>Time:</span> 16:00 UTC
            </li>
            <li>
              <span className='font-medium'>Location:</span> Hybrid (Virtual +
              In‑Person)
            </li>
            <li>
              <span className='font-medium'>Tagline:</span> AI, Talent, Trust —
              Globalized
            </li>
          </ul>
origin/cursor/automate-test-improve-and-merge-code-2533
        </section>
      </div>

<section

        id='speakers'
<<<<<<< HEAD:pages_backup/summit.tsx
        className='mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black'>;
        <h2 className='text-2xl font-bold mb-6'>Speakers</h2>;

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>;
          {speakers && speakers.map(s => (;
            <div;
              key={s && s.name}'
              className={`p-4 rounded-lg border ${s && s.highlight ? 'border-neon-blue shadow-neon-blue' : 'border-gray-200 dark:border-gray-800'}`}>;'
              <div className='flex items-center gap-4'>;
                <img;
                  src={s && s.avatarUrl}
                  alt={s && s.name}'
                  className='w-14 h-14 rounded-full border border-gray-200 dark:border-gray-800'
=======
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
<<<<<<< HEAD


                />
=======
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

=======
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <section id="speakers" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <h2 className="text-2xl font-bold mb-6">Speakers</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((s) => (
            <div key={s.name} className={`p-4 rounded-lg border ${s.highlight ? 'border-neon-blue shadow-neon-blue' : 'border-gray-200 dark:border-gray-800'}`}>
              <div className="flex items-center gap-4">
                <img src={s.avatarUrl} alt={s.name} className="w-14 h-14 rounded-full border border-gray-200 dark:border-gray-800" />
<<<<<<< HEAD
=======

<<<<<<< HEAD:pages_backup/summit.tsx
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
                <div>
                  <div className="font-semibold">{s.name}</div>
                  <div className="text-sm opacity-70">{s.title}</div>
                </div>
              </div>
<<<<<<< HEAD:pages_backup/summit.tsx

=======
              <p className="mt-3 text-sm">{s.bio}</p>
              <div className="mt-3 flex gap-3 text-sm">
<<<<<<< HEAD
=======
<<<<<<< HEAD
                {s.twitter && <a className="underline" href={s.twitter} target="_blank" rel="noreferrer">Twitter</a>}
                {s.linkedin && <a className="underline" href={s.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
              </div>
            </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
          ))}

        </div>;
      </section>;

      <section

              <p className='mt-3 text-sm'>{s.bio}</p>
              <div className='mt-3 flex gap-3 text-sm'>
                {s.twitter && (
                  <a
                    className='underline'
                    href={s.twitter}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Twitter
                  </a>
                )}
                {s.linkedin && (
                  <a
                    className='underline'
                    href={s.linkedin}
                    target='_blank'
                    rel='noreferrer'
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

<section

        id='partners'
        className='mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black'>;
        <div className='flex items-center justify-between'>;

          <h2 className='text-2xl font-bold'>Partners</h2>;
          <a'
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

<<<<<<< HEAD:pages_backup/summit.tsx
=======
<<<<<<< HEAD
          ))}
        </div>;
      </section>;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <section id="partners" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Partners</h2>
          <a href="#register" className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black border border-gray-200 dark:border-gray-800">Become a Sponsor</a>

      <section id="partners" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Partners</h2>
          <a href="#register" className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black border border-gray-200 dark:border-gray-800">Become a Sponsor</Link>


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {partners.map((p) => ("
            <div key={p.name} className="h-16 rounded-md border border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center text-sm opacity-70">"
              {p.logoUrl ? <img src={p.logoUrl} alt={p.name} className="max-h-12" /> : p.name}
            </div>
<<<<<<< HEAD:pages_backup/summit.tsx

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
          ))}

        </div>;
      </section>;

      <section'
        id='livestream''
        className='mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black'>;'
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>;'
          <h2 className='text-2xl font-bold'>Livestream</h2>;'
          <div className='flex flex-wrap items-center gap-2'>;

      <section id="livestream" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-2xl font-bold">Livestream</h2>
          <div className="flex flex-wrap items-center gap-2">

<<<<<<< HEAD:pages_backup/summit.tsx
            <select'
              aria-label='Platform''
              className='px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent'
              value={platform}
              onChange={e => setPlatform(e && e.target.value as any)}

=======
            <select
              aria-label='Platform'
              className='px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent'
              value={platform}
              onChange={e => setPlatform(e && e.target.value as any)}
<<<<<<< HEAD
          ))}
        </div>;
      </section>;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
      <section;
        id='speakers';

        className='mt - 8 p - 6 rounded - lg border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - black';
      >;'
        <h2 className='text - 2xl font - bold mb - 6'>Speakers</h2>;'
        <div className='grid sm:grid - cols - 2 lg:grid - cols - 3 gap - 6'>;
          {speakers.map (string => (
            <div;
              key={s.name}'`
              className={`p - 4 rounded - lg border ${s.highlight ? 'border - neon - blue shadow - neon - blue' : 'border - gray - 200 dark:border - gray - 800'}`}
            >;'
              <div className='flex items - center gap - 4'>;
                <img;
                  src={s.avatar_url}
                  alt={s.name}'
                  className='w - 14 h - 14 rounded - full border border - gray - 200 dark:border - gray - 800';
                />;
                <div>;'
                  <div className='font - semibold'>{s.name}</div>;'
                  <div className='text - sm opacity - 70'>{s.title}</div>;
                </div>;
              </div>;'
              <p className='mt - 3 text - sm'>{s.bio}</p>;'
              <div className='mt - 3 flex gap - 3 text - sm'>;
                {s.twitter && (
                  <a;'
                    className='underline';
                    href={s.twitter}'
                    target='_blank';'
                    rel='noreferrer';
                  >;
                    Twitter;
                  </a>)}
                {s.linkedin && (
                  <a;'
                    className='underline';
                    href={s.linkedin}'
                    target='_blank';'
                    rel='noreferrer';
                  >;
                    LinkedIn;
                  </a>)}              </div>;
            </div>))}
        </div>;
      </section>;
      <section;'
        id='partners';'
        className='mt - 8 p - 6 rounded - lg border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - black';
      >;'
        <div className='flex items - center justify - between'>;'
          <h2 className='text - 2xl font - bold'>Partners</h2>;
          <a;'
            href='#register';'
            className='px - 4 py - 2 rounded - md bg - black text - white dark:bg - white dark:text - black border border - gray - 200 dark:border - gray - 800';
          >;
            Become a Sponsor;
          </a>;
        </div>;'
        <div className='mt - 6 grid grid - cols - 2 sm:grid - cols - 3 md:grid - cols - 6 gap - 4'>;
          {partners.map (p => (
            <div;

              className='h - 16 rounded - md border border - dashed border - gray - 300 dark:border - gray - 700 flex items - center justify - center text - sm opacity - 70';
            >;
              {p.logo_url ? ('
                <img src={p.logo_url} alt={p.name} className='max - h-12' />) : (
                p.name)}            </div>))}
        </div>;
      </section>;
      <section;'
        id='livestream';'
        className='mt - 8 p - 6 rounded - lg border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - black';
      >;'
        <div className='flex flex - col md:flex - row md:items - center md:justify - between gap - 4'>;'
          <h2 className='text - 2xl font - bold'>Livestream</h2>;'
          <div className='flex flex - wrap items - center gap - 2'>;
            <select;'
              aria - label='Platform';'
              className='px - 3 py - 2 rounded border border - gray - 300 dark:border - gray - 700 bg - transparent';

              className='h-16 rounded-md border border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center text-sm opacity-70'
            >
              {p.logoUrl ? (
                <img src={p.logoUrl} alt={p.name} className='max-h-12' />
              ) : (
                p.name
              )}
            </div>
          ))}
        </div>
      </section>

<section
        id='livestream'
        className='mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black'
      >
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
          <h2 className='text-2xl font-bold'>Livestream</h2>
          <div className='flex flex-wrap items-center gap-2'>
            <select
              aria-label='Platform'
              className='px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent'
origin/cursor/automate-test-improve-and-merge-code-2533
              value={platform}
              on_change={e => set_platform (e.target.value as any)}
<<<<<<< HEAD:pages_backup/summit.tsx

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
            >;
              <option value='youtube'>YouTube</option>;
              <option value='twitch'>Twitch</option>;
              <option value='twitter'>Twitter</option>;
            </select>;
<<<<<<< HEAD
            <input;
              aria - label='Embed ID';
              className='px - 3 py - 2 rounded border border - gray - 300 dark:border - gray - 700 bg - transparent';
=======

<<<<<<< HEAD:pages_backup/summit.tsx
=======
            <input;
              aria - label='Embed ID';
              className='px - 3 py - 2 rounded border border - gray - 300 dark:border - gray - 700 bg - transparent';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
              placeholder={
                platform === 'youtube';
                  ? 'YouTube Video ID';
                  : platform === 'twitch';
                    ? 'Twitch Channel';
                    : 'Twitter Broadcast ID';
              }
<<<<<<< HEAD
=======

<<<<<<< HEAD:pages_backup/summit.tsx
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </div>;
        </div>;
        <div className='mt-4'>{livestreamEmbed()}</div>;
      </section>;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
      <section
        id='register'
        className='mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black'>;
        <h2 className='text-2xl font-bold mb-4'>Register</h2>;

        <form onSubmit={onSubmit} className='grid md:grid-cols-2 gap-4'>;
          <div>;'
            <label className='block text-sm mb-1'>Name</label>;

<<<<<<< HEAD:pages_backup/summit.tsx
=======
      <section id="register" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">

          <div>
            <label className="block text-sm mb-1">Name</label>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
            <input
              required

              className='w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent'
              value={form && form.name}
              onChange={e => setForm({ ...form, name: e && e.target.value })}
            />;
          </div>;
          <div>;'
            <label className='block text-sm mb-1'>Email</label>;
            <input'
              type='email'
              required'
              className='w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent'
              value={form && form.email}
              onChange={e => setForm({ ...form, email: e && e.target.value })}
            />;
          </div>;
          <div>;'
            <label className='block text-sm mb-1'>Role</label>;
            <input;
              required'
              className='w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent'
              value={form && form.role}
              onChange={e => setForm({ ...form, role: e && e.target.value })}
            />;
          </div>;
          <div>;'
            <label className='block text-sm mb-1'>Country</label>;
            <input;
              required'
              className='w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent'
              value={form && form.country}
              onChange={e => setForm({ ...form, country: e && e.target.value })}
            />;
          </div>;'
          <div className='md:col-span-2 flex items-center gap-3'>;
            <button'
              type='submit'
              disabled={submitting}'
              className='px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black border border-gray-200 dark:border-gray-800 disabled:opacity-50'>;'
              {submitting ? 'Submitting...' : 'Submit Registration'}
            </button>;
            {result?.ok && (;'
              <span className='text-green-600'>;
                Thank you! You are registered.;
              </span>;
            )}
<<<<<<< HEAD
=======

<<<<<<< HEAD:pages_backup/summit.tsx
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {result?.error && (;
              <span className='text-red-600'>{result && result.error}</span>;
            )}          </div>;
        </form>;
      </section>;
      <section className='mt-8 p-6 rounded-lg border border-gray-200 dark: border-gray-800 bg-white dark:bg-black'>;
        <h2 className='text-xl font-semibold'>;
          AI Session Summaries (Optional);
        </h2>;
        <p className='text-sm opacity-70 mt-2'>;
          Auto-generated summaries and ZionGPT moderation prompts coming soon.;
        </p>;
      </section>;
    </>;
  );
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
      <section id="livestream" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-2xl font-bold">Livestream</h2>

          <div className="flex flex-wrap items-center gap-2">
            <select"
              aria-label="Platform""
              className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              value={platform}
              onChange={(e) => setPlatform(e.target.value as any)}
            >"
              <option value="youtube">YouTube</option>"
              <option value="twitch">Twitch</option>"
              <option value="twitter">Twitter</option>
            </select>
            <input"
              aria-label="Embed ID""
              className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"'
              placeholder={platform === 'youtube' ? 'YouTube Video ID' : platform === 'twitch' ? 'Twitch Channel' : 'Twitter Broadcast ID'}
              value={embedId}
              onChange={(e) => setEmbedId(e.target.value)}
            />
            {isPast ? ("
              <span className="px-3 py-2 rounded bg-green-600 text-white">Watch Replay</span>
            ) : ("
              <span className="px-3 py-2 rounded bg-blue-600 text-white">Live in {days}d {hours}h {minutes}m {seconds}s</span>
            )}
          </div>
        </div>"
        <div className="mt-4">
          {livestreamEmbed()}
        </div>
      </section>"
      <section id="register" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">"
        <h2 className="text-2xl font-bold mb-4">Register</h2>"
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">

          <div>

            <label className="block text-sm mb-1">Name</label>
            <input;
              required"
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div>"
            <label className="block text-sm mb-1">Email</label>
            <input"
              type="email"
              required"
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>"
            <label className="block text-sm mb-1">Role</label>
            <input;
              required"
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            />
          </div>
          <div>"
            <label className="block text-sm mb-1">Country</label>
            <input;
              required"
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
            />
          </div>"
          <div className="md:col-span-2 flex items-center gap-3">
            <button"
              type="submit"
              disabled={submitting}"
              className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black border border-gray-200 dark:border-gray-800 disabled:opacity-50"
            >'
              {submitting ? 'Submitting...' : 'Submit Registration'}

            {result?.error && <span className="text-red-600">{result.error}</span>}

            {result?.ok && (
              <span className='text-green-600'>
                Thank you! You are registered.
              </span>
            )}
            {result?.error && (
              <span className='text-red-600'>{result.error}</span>
            )}

          </div>
        </form>
      </section>

}
}
}"
      <section className="mt-8 p-6 rounded-lg border border-gray-200 dark: border-gray-800 bg-white dark:bg-black">"
        <h2 className="text-xl font-semibold">AI Session Summaries (Optional)</h2>"
        <p className="text-sm opacity-70 mt-2">Auto-generated summaries and ZionGPT moderation prompts coming soon.</p>
      </section>
    </>
  )
}

              value={embed_id}
              on_change={e => setEmbedId (e.target.value)}
            />;
            {is_past ? ('
              <span className='px - 3 py - 2 rounded bg - green - 600 text - white'>;
                Watch Replay;
              </span>) : ('
              <span className='px - 3 py - 2 rounded bg - blue - 600 text - white'>;
                Live in {days}d {hours}h {minutes}m {seconds}s;
              </span>)}
          </div>;
        </div>;'
        <div className='mt - 4'>{livestream_embed ()}</div>;
      </section>;
      <section;'
        id='register';'
        className='mt - 8 p - 6 rounded - lg border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - black';
      >;'
        <h2 className='text - 2xl font - bold mb - 4'>Register</h2>;'
        <form on_submit={on_submit} className='grid md:grid - cols - 2 gap - 4'>;
          <div>;'
            <label className='block text - sm mb - 1'>Name</label>;
            <input;
              required;'
              className='w - full px - 3 py - 2 rounded border border - gray - 300 dark:border - gray - 700 bg - transparent';
              value={form.name}
              on_change={e => set_form ({ ...form, name: e.target.value })}
            />;
          </div>;
          <div>;'
            <label className='block text - sm mb - 1'>Email</label>;
            <input;'
              type='email';
              required;'
              className='w - full px - 3 py - 2 rounded border border - gray - 300 dark:border - gray - 700 bg - transparent';
              value={form.email}
              on_change={e => set_form ({ ...form, email: e.target.value })}
            />;
          </div>;
          <div>;'
            <label className='block text - sm mb - 1'>Role</label>;
            <input;
              required;'
              className='w - full px - 3 py - 2 rounded border border - gray - 300 dark:border - gray - 700 bg - transparent';
              value={form.role}
              on_change={e => set_form ({ ...form, role: e.target.value })}
            />;
          </div>;
          <div>;'
            <label className='block text - sm mb - 1'>Country</label>;
            <input;
              required;'
              className='w - full px - 3 py - 2 rounded border border - gray - 300 dark:border - gray - 700 bg - transparent';
              value={form.country}
              on_change={e => set_form ({ ...form, country: e.target.value })}
            />;
          </div>;'
          <div className='md:col - span - 2 flex items - center gap - 3'>;
            <button;'
              type='submit';
              disabled={submitting}'
              className='px - 4 py - 2 rounded bg - black text - white dark:bg - white dark:text - black border border - gray - 200 dark:border - gray - 800 disabled:opacity - 50';
            >;'
              {submitting ? 'Submitting...' : 'Submit Registration'}
            </button>;
            {result?.ok && ('
              <span className='text - green - 600'>;
                Thank you! You are registered.;
              </span>)}
            {result?.error && ('
              <span className='text - red - 600'>{result.error}</span>)}          </div>;
        </form>;
      </section>;'
      <section className='mt - 8 p - 6 rounded - lg border border - gray - 200 dark: border - gray - 800 bg - white dark:bg - black'>;'
        <h2 className='text - xl font - semibold'>;
          AI Session Summaries (Optional);
        </h2>;'
        <p className='text - sm opacity - 70 mt - 2'>;
          Auto - generated summaries and ZionGPT moderation prompts coming soon.;
        </p>;
      </section>;

    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

            <select
              aria-label="Platform"
              className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              value={platform  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              onChange={(e) => setPlatform(e.target.value as any)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            >
              <option value="youtube">YouTube</option>
              <option value="twitch">Twitch</option>
              <option value="twitter">Twitter</option>
            </select>
            <input
              aria-label="Embed ID"
              className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              placeholder={platform === 'youtube' ? 'YouTube Video ID' : platform === 'twitch' ? 'Twitch Channel' : 'Twitter Broadcast ID'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              value={embedId  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              onChange={(e) => setEmbedId(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            />
            {isPast ? (
<span className="px-3 py-2 rounded bg-green-600 text-white">Watch Replay</span>
            ) : (
              <span className="px-3 py-2 rounded bg-blue-600 text-white">Live in {days}d {hours}h {minutes}m {seconds}s</span>
<<<<<<< HEAD:pages_backup/summit.tsx
            )  } catch (error) {
=======
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
<label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
<label className="block text-sm mb-1">Role</label>
            <input
              required
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            />
          </div>
          <div>
<label className="block text-sm mb-1">Country</label>
            <input
              required
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
            />
          </div>
<div className="md:col-span-2 flex items-center gap-3">
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
<<<<<<< HEAD
    </>);
;
      </section>
    </>
  )
}

                {s.twitter && <a className="underline" href={s.twitter} target="_blank" rel="noreferrer">Twitter</Link>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                {s.linkedin && <a className="underline" href={s.linkedin} target="_blank" rel="noreferrer">LinkedIn</Link>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>
            </div>
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>
      </section>
      <section
        id='partners'
        className='mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black'
      >
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-bold'>Partners</h2>
          <a
            href='#register'
            className='px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black border border-gray-200 dark:border-gray-800'
          >
            Become a Sponsor
          </a>
      <section id="partners" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Partners</h2>
          <a href="#register" className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black border border-gray-200 dark:border-gray-800">Become a Sponsor</Link>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {partners.map((p) => (
            <div key={p.name} className="h-16 rounded-md border border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center text-sm opacity-70">
              {p.logoUrl ? <img src={p.logoUrl} alt={p.name} className="max-h-12" /> : p.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>
      </section>
      <section
        id='livestream'
        className='mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black'
      >
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
          <h2 className='text-2xl font-bold'>Livestream</h2>
          <div className='flex flex-wrap items-center gap-2'>
      <section id="livestream" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-2xl font-bold">Livestream</h2>
          <div className="flex flex-wrap items-center gap-2">
            <select
              aria-label="Platform"
              className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              value={platform  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              onChange={(e) => setPlatform(e.target.value as any)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            >
              <option value="youtube">YouTube</option>
              <option value="twitch">Twitch</option>
              <option value="twitter">Twitter</option>
            </select>
            <input
              aria-label="Embed ID"
              className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              placeholder={platform === 'youtube' ? 'YouTube Video ID' : platform === 'twitch' ? 'Twitch Channel' : 'Twitter Broadcast ID'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              value={embedId  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              onChange={(e) => setEmbedId(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            />
            {isPast ? (
              <span className="px-3 py-2 rounded bg-green-600 text-white">Watch Replay</span>
            ) : (
              <span className="px-3 py-2 rounded bg-blue-600 text-white">Live in {days}d {hours}h {minutes}m {seconds}s</span>
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>
        </div>
        <div className="mt-4">
          {livestreamEmbed()  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>
      </section>
      <section
        id='register'
        className='mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black'
      >
        <h2 className='text-2xl font-bold mb-4'>Register</h2>
        <form onSubmit={onSubmit} className='grid md:grid-cols-2 gap-4'>
      <section id="register" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              required
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              value={form.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              onChange={(e) => setForm({ ...form, name: e.target.value })  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              value={form.email  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              onChange={(e) => setForm({ ...form, email: e.target.value })  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Role</label>
            <input
              required
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              value={form.role  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              onChange={(e) => setForm({ ...form, role: e.target.value })  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Country</label>
            <input
              required
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              value={form.country  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              onChange={(e) => setForm({ ...form, country: e.target.value })  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            />
          </div>
          <div className="md:col-span-2 flex items-center gap-3">
            <button
              type="submit"
              disabled={submitting  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black border border-gray-200 dark:border-gray-800 disabled:opacity-50"
            >
              {submitting ? 'Submitting...' : 'Submit Registration'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </button>
            {result?.ok && <span className="text-green-600">Thank you! You are registered.</span>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            {result?.error && <span className="text-red-600">{result.error}</span>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>
        </form>
      </section>
      <section className='mt-8 p-6 rounded-lg border border-gray-200 dark: border-gray-800 bg-white dark:bg-black'>
        <h2 className='text-xl font-semibold'>
          AI Session Summaries (Optional)
        </h2>
        <p className='text-sm opacity-70 mt-2'>
          Auto-generated summaries and ZionGPT moderation prompts coming soon.
        </p>
      </section>
    </>
);

}
}
}
      <section className="mt-8 p-6 rounded-lg border border-gray-200 dark: border-gray-800 bg-white dark:bg-black">
        <h2 className="text-xl font-semibold">AI Session Summaries (Optional)</h2>
        <p className="text-sm opacity-70 mt-2">Auto-generated summaries and ZionGPT moderation prompts coming soon.</p>
      </section>
    </>
  )
;
export default function SummitPage(req, res) {
  try {
  const [platform, setPlatform] = React.useState<'youtube' | 'twitch' | 'twitter'>('youtube');
  const [embedId, setEmbedId] = React.useState<string>('dQw4w9WgXcQ');
  const { isPast, days, hours, minutes, seconds } = useCountdown(EVENT_START_ISO);
  const [form, setForm] = React.useState({ name: '', email: '', role: '', country: '' });
  const [submitting, setSubmitting] = React.useState(false);
  const [result, setResult] = React.useState<{ ok?: boolean, error?: string } | null>(null),;
  const speakers: Speaker[] = [;
    {;
      name: 'Featured Speaker: Your Name';
      title: 'Founder, Zion',;
      avatarUrl: '/favicon.svg',;
      bio: 'Visionary behind Zion Protocol — building AI-native digital nations.',;
      twitter: 'https://twitter.com',;
      linkedin: 'https://www.linkedin.com',;
      highlight: true},;
    {;
      name: 'Alex Rivera',;
      title: 'Head of Protocol Engineering',;
      avatarUrl: '/favicon.svg',;
      bio: 'Leading the architecture of ZionDAO and trust rails.'},;
    {;
      name: 'Jordan Lee',;
      title: 'Zion Alumni | AI Fellow',;
      avatarUrl: '/favicon.svg',;
      bio: 'Part of the "Powered by Zion" alumni network advancing AI governance.',;
      twitter: 'https://twitter.com'}],;
  const partners: Partner[] = [;
    { name: 'Gov Partner' };
    { name: 'Venture Partner' },;
    { name: 'University Partner' }],;
  const onSubmit = async (e: React.FormEvent) => {;
    e.preventDefault();
    setSubmitting(true);
    setResult(null);
    try {
      const res = await fetch('/api/summit/register', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({ ...form, source: 'summit-page' })}),;
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed');
      setResult({ ok: true });
      setForm({ name: '', email: '', role: '', country: '' });
    } catch (error) {
      setResult({ error: err?.message || 'Unexpected error' });
    } finally {;
      setSubmitting(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  };
  const livestreamEmbed = () => {;
    if (platform === 'youtube') {;
      return (;
        <iframe;
          className="w-full aspect-video rounded-lg border border-gray-200 dark:border-gray-800";
          src={`https://www.youtube.com/embed/${embedId}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          title="YouTube livestream";
          allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture";
          allowFullScreen;
        />;
      );
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    if (platform === 'twitch') {;
      return (;
        <iframe;
          className="w-full aspect-video rounded-lg border border-gray-200 dark:border-gray-800";
          src={`https://player.twitch.tv/?channel=${embedId}&parent=${typeof window !== 'undefined' ? window.location.hostname : 'localhost'}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          title="Twitch livestream";
          allowFullScreen;
        />;
      );
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    return (;
      <iframe;
        className="w-full aspect-video rounded-lg border border-gray-200 dark:border-gray-800";
        src={`https://twitter.com/i/broadcasts/${embedId}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        title="Twitter livestream";
        allowFullScreen;
      />;
    );
  };
  return (;
    <>;
      <Head>;
        <title>Zion Global Summit 2025 — AI, Talent, Trust</title>;
        <meta name="description" content="Zion Global Summit: AI, Talent, Trust — Globalized" />;
      </Head>;
      <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-cyber-dark to-cyber-blue text-white p-8 md:p-12 shadow-neon-blue">;
        <div className="max-w-4xl">;
          <p className="uppercase tracking-widest text-neon-blue">Zion Global Summit 2025</p>;
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold">AI, Talent, Trust — Globalized</h1>;
          <p className="mt-4 text-white/80">Date: Nov 12, 2025 • Time: 16:00 UTC • Location: Hybrid (Virtual + In‑Person)</p>;
          <div className="mt-6 flex flex-wrap gap-3">;
            <a href="#register" className="inline-flex items-center px-4 py-2 rounded-md bg-neon-blue text-black font-semibold shadow-neon-blue">Register</a>;
            <a href="#livestream" className="inline-flex items-center px-4 py-2 rounded-md border border-white/40 hover:bg-white/10">Livestream</a>;
            <a href="#agenda" className="inline-flex items-center px-4 py-2 rounded-md border border-white/40 hover:bg-white/10">Agenda</a>;
          </div>;
        </div>;
      </section>;
      <div className="grid md:grid-cols-3 gap-6 mt-8">;
        <section id="agenda" className="md:col-span-2 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">;
          <h2 className="text-2xl font-bold mb-4">Agenda</h2>;
          <ol className="space-y-3 list-decimal list-inside">;
            <li>Opening Keynote — Launching Zion Protocol</li>;
            <li>Panel 1 — The Future of Digital Nations</li>;
            <li>Panel 2 — ZionDAO in Action</li>;
            <li>Demo — ZionGPT Live</li>;
            <li>Featured Speaker — Founder</li>;
          </ol>;
        </section>;
        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">;
          <h2 className="text-2xl font-bold mb-4">Event Info</h2>;
          <ul className="space-y-2">;
            <li><span className="font-medium">Date:</span> Nov 12, 2025</li>;
            <li><span className="font-medium">Time:</span> 16:00 UTC</li>;
            <li><span className="font-medium">Location:</span> Hybrid (Virtual + In‑Person)</li>;
            <li><span className="font-medium">Tagline:</span> AI, Talent, Trust — Globalized</li>;
          </ul>;
        </section>;
      </div>;
      <section id="speakers" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">;
        <h2 className="text-2xl font-bold mb-6">Speakers</h2>;
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">;
          {speakers.map((s) => (;
            <div key={s.name} className={`p-4 rounded-lg border ${s.highlight ? 'border-neon-blue shadow-neon-blue' : 'border-gray-200 dark:border-gray-800'}`}>;
              <div className="flex items-center gap-4">;
                <img src={s.avatarUrl} alt={s.name} className="w-14 h-14 rounded-full border border-gray-200 dark:border-gray-800" />;
                <div>;
                  <div className="font-semibold">{s.name}</div>;
                  <div className="text-sm opacity-70">{s.title}</div>;
                </div>;
              </div>;
              <p className="mt-3 text-sm">{s.bio}</p>;
              <div className="mt-3 flex gap-3 text-sm">;
                {s.twitter && <a className="underline" href={s.twitter} target="_blank" rel="noreferrer">Twitter</a>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                {s.linkedin && <a className="underline" href={s.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
            </div>;
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>;
      </section>;
      <section id="partners" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">;
        <div className="flex items-center justify-between">;
          <h2 className="text-2xl font-bold">Partners</h2>;
          <a href="#register" className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black border border-gray-200 dark:border-gray-800">Become a Sponsor</a>;
        </div>;
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">;
          {partners.map((p) => (;
            <div key={p.name} className="h-16 rounded-md border border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center text-sm opacity-70">;
              {p.logoUrl ? <img src={p.logoUrl} alt={p.name} className="max-h-12" /> : p.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>;
      </section>;
      <section id="livestream" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">;
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">;
          <h2 className="text-2xl font-bold">Livestream</h2>;
          <div className="flex flex-wrap items-center gap-2">;
            <select;
              aria-label="Platform";
              className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent";
              value={platform  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              onChange={(e) => setPlatform(e.target.value as any)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            >;
              <option value="youtube">YouTube</option>;
              <option value="twitch">Twitch</option>;
              <option value="twitter">Twitter</option>;
            </select>;
            <input;
              aria-label="Embed ID";
              className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent";
              placeholder={platform === 'youtube' ? 'YouTube Video ID' : platform === 'twitch' ? 'Twitch Channel' : 'Twitter Broadcast ID'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              value={embedId  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              onChange={(e) => setEmbedId(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            />;
            {isPast ? (;
              <span className="px-3 py-2 rounded bg-green-600 text-white">Watch Replay</span>;
            ) : (;
              <span className="px-3 py-2 rounded bg-blue-600 text-white">Live in {days}d {hours}h {minutes}m {seconds}s</span>;
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
        <div className="mt-4">;
          {livestreamEmbed()  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>;
      </section>;
      <section id="register" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">;
        <h2 className="text-2xl font-bold mb-4">Register</h2>;
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">;
          <div>;
            <label className="block text-sm mb-1">Name</label>;
            <input;
              required;
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent";
              value={form.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              onChange={(e) => setForm({ ...form, name: e.target.value })  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            />;
          </div>;
          <div>;
            <label className="block text-sm mb-1">Email</label>;
            <input;
              type="email";
              required;
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent";
              value={form.email  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              onChange={(e) => setForm({ ...form, email: e.target.value })  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            />;
          </div>;
          <div>;
            <label className="block text-sm mb-1">Role</label>;
            <input;
              required;
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent";
              value={form.role  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              onChange={(e) => setForm({ ...form, role: e.target.value })  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            />;
          </div>;
          <div>;
            <label className="block text-sm mb-1">Country</label>;
            <input;
              required;
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent";
              value={form.country  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              onChange={(e) => setForm({ ...form, country: e.target.value })  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            />;
          </div>;
          <div className="md:col-span-2 flex items-center gap-3">;
            <button;
              type="submit";
              disabled={submitting  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black border border-gray-200 dark:border-gray-800 disabled:opacity-50";
            >;
              {submitting ? 'Submitting...' : 'Submit Registration'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </button>;
            {result?.ok && <span className="text-green-600">Thank you! You are registered.</span>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            {result?.error && <span className="text-red-600">{result.error}</span>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </form>;
      </section>;
      <section className="mt-8 p-6 rounded-lg border border-gray-200 dark: border-gray-800 bg-white dark:bg-black">;
        <h2 className="text-xl font-semibold">AI Session Summaries (Optional)</h2>;
        <p className="text-sm opacity-70 mt-2">Auto-generated summaries and ZionGPT moderation prompts coming soon.</p>;
      </section>;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </>;
  );
  } catch (error) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>
        </div>
        <div className="mt-4">
          {livestreamEmbed()  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>
      </section>

<<<<<<< HEAD:pages_backup/summit.tsx
<section className='mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black'>
        <h2 className='text-xl font-semibold'>
          AI Session Summaries (Optional)
        </h2>
        <p className='text-sm opacity-70 mt-2'>
          Auto-generated summaries and ZionGPT moderation prompts coming soon.
        </p>
      </section>
    </>
  );
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/summit.tsx
