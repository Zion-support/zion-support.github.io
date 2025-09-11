
<<<<<<< HEAD
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

  method: 'POST';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  method: 'POST';

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
setForm ({;
  name: '', email: '', role: '', country: '' ;
}) ;
}catch (err: any) {;
  setResult ({;
  error: err?.message || 'Unexpected error' ;
}) ;
}finally {;
  setSubmitting (false) ;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



export default function SummitPage() {;
  const [platform, setPlatform] = React && React.useState<;
    'youtube' | 'twitch' | 'twitter';



<<<<<<< HEAD
<<<<<<< HEAD
export default function SummitPage() {;
  const [platform, setPlatform] = React && React.useState<;
    'youtube' | 'twitch' | 'twitter';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  >('youtube');
  const [embedId, setEmbedId] = React && React.useState<string>('dQw4w9WgXcQ');
  const { isPast, days, hours, minutes, seconds } =;
    useCountdown(EVENT_START_ISO);
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [form, setForm] = React.useState({

    name: '',
    email: '',
    role: '',
    country: '',

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  });
  const [submitting, setSubmitting] = React && React.useState(false);
  const [result, setResult] = React && React.useState<{;
    ok?: boolean;
    error?: string;
  } | null>(null);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const partners: Partner[] = [;
    { name: 'Gov Partner' },;
    { name: 'Venture Partner' },;
    { name: 'University Partner' },;
<<<<<<< HEAD
<<<<<<< HEAD
  ];
  const onSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  ];
  const onSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Head from 'next/head';
import React from 'react';
type Speaker = {
  name: string,
  title: string,
  avatarUrl: string,
  bio: string,
<<<<<<< HEAD
twitter?: string;
  linkedin?: string;
  highlight?: boolean
};
=======
  twitter?: string;
  linkedin?: string;
  highlight?: boolean
};

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
type Partner = {
  name: string,
  logoUrl?: string
};
<<<<<<< HEAD
const EVENT_START_ISO = '2025-11-12T16: 00:00Z',
=======

const EVENT_START_ISO = '2025-11-12T16: 00:00Z',

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
function useCountdown(targetIso: string) {
  const [remainingMs, setRemainingMs] = React.useState<number>(() => {
    return new Date(targetIso).getTime() - Date.now()
  });
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  React.useEffect(() => {
    const id = setInterval(() => {
      setRemainingMs(new Date(targetIso).getTime() - Date.now())
    }, 1000);
    return () => clearInterval(id)
  }, [targetIso]);
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const isPast = remainingMs <= 0;
  const totalSec = Math.max(0, Math.floor(remainingMs / 1000));
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
<<<<<<< HEAD
  return { isPast, days, hours, minutes, seconds }
}
=======

  return { isPast, days, hours, minutes, seconds }
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function SummitPage() {
  const [platform, setPlatform] = React.useState<'youtube' | 'twitch' | 'twitter'>('youtube');
  const [embedId, setEmbedId] = React.useState<string>('dQw4w9WgXcQ');
  const { isPast, days, hours, minutes, seconds } = useCountdown(EVENT_START_ISO);
  const [form, setForm] = React.useState({ name: '', email: '', role: '', country: '' }),
<<<<<<< HEAD
  const [submitting, setSubmitting] = React.useState(false);
  const [result, setResult] = React.useState<{ ok?: boolean, error?: string } | null>(null);
=======
  const [submitting, setSubmitting] = React.useState(false),
  const [result, setResult] = React.useState<{ ok?: boolean, error?: string } | null>(null),
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const speakers: Speaker[] = [
    {
      name: 'Featured Speaker: Your Name',
      title: 'Founder, Zion',
<<<<<<< HEAD
avatarUrl: '/favicon.svg',
      bio: 'Visionary behind Zion Protocol — building AI-native digital nations.',
=======
    avatarUrl: '/favicon.svg',
      bio: 'Visionary behind Zion Protocol — building AI-native digital nations.',
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

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
  const [embedId, setEmbedId] = React.useState<string>('dQw4w9WgXcQ');
  const { isPast, days, hours, minutes, seconds } =
    useCountdown(EVENT_START_ISO);
  const [form, setForm] = React.useState({
    name: ''
    email: ''
    role: ''
    country: ''
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    name: '',
    email: '',
    role: '',
    country: '',
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  });
  const [submitting, set_submitting] = React.useState (false);
  const [result, set_result] = React.useState<{
    ok?: boolean;
    error?: string;
  } | null>(null);
  const speakers: Speaker[] = [;
    {
      name: 'Featured Speaker: Your Name',
      title: 'Founder, Zion',
      avatar_url: '/favicon.svg',
      bio: 'Visionary behind Zion Protocol — building AI - native digital nations.',

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      twitter: 'https://twitter.com',
      linkedin: 'https://www.linkedin.com',
      highlight: true},
    {
      name: 'Alex Rivera',
      title: 'Head of Protocol Engineering',
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      avatar_url: '/favicon.svg',
      bio: 'Leading the architecture of ZionDAO and trust rails.',
    },    {

      name: 'Jordan Lee',
      title: 'Zion Alumni | AI Fellow',
      avatar_url: '/favicon.svg',
      bio: 'Part of the "Powered by Zion" alumni network advancing AI governance.',


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD



=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======



=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'summit-page' })}),
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed');
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setResult({ ok: true }),
      setForm({ name: '', email: '', role: '', country: '' })
    } catch (err: any) {
      setResult({ error: err?.message || 'Unexpected error' })
    } finally {
      setSubmitting(false)
<<<<<<< HEAD
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },
=======
    }
  };

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const livestreamEmbed = () => {
    if (platform === 'youtube') {
      return (
        <iframe
          className="w-full aspect-video rounded-lg border border-gray-200 dark:border-gray-800"
<<<<<<< HEAD
        />
      )

<<<<<<< HEAD
    }
if (platform === 'twitch') {
=======
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    if (platform === 'twitch') {


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
=======
          src={`https://www.youtube.com/embed/${embedId}`}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          title="YouTube livestream"
          allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
          allowFullScreen
        />
      )
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
          className="w-full aspect-video rounded-lg border border-gray-200 dark:border-gray-800"
          src={`https://player.twitch.tv/?channel=${embedId}&parent=${typeof window !== 'undefined' ? window.location.hostname : 'localhost'}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
          className="w-full aspect-video rounded-lg border border-gray-200 dark: border-gray-800"
          src={`https://player.twitch.tv/?channel=${embedId}&parent=${typeof window !== 'undefined' ? window.location.hostname : 'localhost'}`}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          title="Twitch livestream"
          allowFullScreen
        />
      )
<<<<<<< HEAD
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
=======
    }
    return (
      <iframe
        className="w-full aspect-video rounded-lg border border-gray-200 dark:border-gray-800"
        src={`https://twitter.com/i/broadcasts/${embedId}`}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        title="Twitter livestream"
        allowFullScreen
      />
    )
  },
  return (
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <li>Panel 1 — The Future of Digital Nations</li>
            <li>Panel 2 — ZionDAO in Action</li>
            <li>Demo — ZionGPT Live</li>
            <li>Featured Speaker — Founder</li>
          </ol>
        </section>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <section className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
          <h2 className="text-2xl font-bold mb-4">Event Info</h2>
          <ul className="space-y-2">
            <li><span className="font-medium">Date:</span> Nov 12, 2025</li>
            <li><span className="font-medium">Time:</span> 16:00 UTC</li>
            <li><span className="font-medium">Location:</span> Hybrid (Virtual + In‑Person)</li>
            <li><span className="font-medium">Tagline:</span> AI, Talent, Trust — Globalized</li>
          </ul>
<<<<<<< HEAD
<<<<<<< HEAD
        </section>
      </div>
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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              Globalized;
            </li>          </ul>;
        </section>;
      </div>;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        </section>
      </div>
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
                />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <section id="speakers" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <h2 className="text-2xl font-bold mb-6">Speakers</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((s) => (
            <div key={s.name} className={`p-4 rounded-lg border ${s.highlight ? 'border-neon-blue shadow-neon-blue' : 'border-gray-200 dark:border-gray-800'}`}>
              <div className="flex items-center gap-4">
                <img src={s.avatarUrl} alt={s.name} className="w-14 h-14 rounded-full border border-gray-200 dark:border-gray-800" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div>
                  <div className="font-semibold">{s.name}</div>
                  <div className="text-sm opacity-70">{s.title}</div>
                </div>
              </div>
              <p className="mt-3 text-sm">{s.bio}</p>
              <div className="mt-3 flex gap-3 text-sm">
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {s.twitter && <a className="underline" href={s.twitter} target="_blank" rel="noreferrer">Twitter</a>}
                {s.linkedin && <a className="underline" href={s.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
              </div>
            </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          ))}

        </div>;
      </section>;


=======
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>
      </section>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <section
        id='partners'
        className='mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black'>;
        <div className='flex items-center justify-between'>;
          <h2 className='text-2xl font-bold'>Partners</h2>;
          <a
            href='#register'
<<<<<<< HEAD
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

=======
            className='px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black border border-gray-200 dark:border-gray-800'
          >
            Become a Sponsor
          </a>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <section id="partners" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Partners</h2>
          <a href="#register" className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black border border-gray-200 dark:border-gray-800">Become a Sponsor</Link>


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {partners.map((p) => (
            <div key={p.name} className="h-16 rounded-md border border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center text-sm opacity-70">
              {p.logoUrl ? <img src={p.logoUrl} alt={p.name} className="max-h-12" /> : p.name}
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          ))}

        </div>;
      </section>;


      <section
        id='livestream'
        className='mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black'>;
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>;
          <h2 className='text-2xl font-bold'>Livestream</h2>;
          <div className='flex flex-wrap items-center gap-2'>;

=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <section id="livestream" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-2xl font-bold">Livestream</h2>
          <div className="flex flex-wrap items-center gap-2">
<<<<<<< HEAD

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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >;
              <option value='youtube'>YouTube</option>;
              <option value='twitch'>Twitch</option>;
              <option value='twitter'>Twitter</option>;
            </select>;
<<<<<<< HEAD
<<<<<<< HEAD
            <input;
              aria - label='Embed ID';
              className='px - 3 py - 2 rounded border border - gray - 300 dark:border - gray - 700 bg - transparent';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <input;
              aria - label='Embed ID';
              className='px - 3 py - 2 rounded border border - gray - 300 dark:border - gray - 700 bg - transparent';

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              placeholder={
                platform === 'youtube';
                  ? 'YouTube Video ID';
                  : platform === 'twitch';
                    ? 'Twitch Channel';
                    : 'Twitter Broadcast ID';
              }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>;
        </div>;
        <div className='mt-4'>{livestreamEmbed()}</div>;
      </section>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <section
        id='register'
        className='mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black'>;
        <h2 className='text-2xl font-bold mb-4'>Register</h2>;
        <form onSubmit={onSubmit} className='grid md:grid-cols-2 gap-4'>;
          <div>;
            <label className='block text-sm mb-1'>Name</label>;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <section id="register" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">

          <div>
            <label className="block text-sm mb-1">Name</label>
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {result?.error && (;
              <span className='text-red-600'>{result && result.error}</span>;
            )}          </div>;
        </form>;
      </section>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<span className="px-3 py-2 rounded bg-green-600 text-white">Watch Replay</span>
=======
              <span className="px-3 py-2 rounded bg-green-600 text-white">Watch Replay</span>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ) : (
              <span className="px-3 py-2 rounded bg-blue-600 text-white">Live in {days}d {hours}h {minutes}m {seconds}s</span>
            )}
          </div>
        </div>
        <div className="mt-4">
          {livestreamEmbed()}
        </div>
      </section>
<<<<<<< HEAD
      <section id="register" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
=======
      <section
        id='register'
        className='mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black'
      >
        <h2 className='text-2xl font-bold mb-4'>Register</h2>
        <form onSubmit={onSubmit} className='grid md:grid-cols-2 gap-4'>
      <section id="register" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<label className="block text-sm mb-1">Email</label>
=======
            <label className="block text-sm mb-1">Email</label>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <input
              type="email"
              required
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
<<<<<<< HEAD
<label className="block text-sm mb-1">Role</label>
=======
            <label className="block text-sm mb-1">Role</label>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <input
              required
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            />
          </div>
          <div>
<<<<<<< HEAD
<label className="block text-sm mb-1">Country</label>
=======
            <label className="block text-sm mb-1">Country</label>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <input
              required
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
            />
          </div>
<<<<<<< HEAD
<div className="md:col-span-2 flex items-center gap-3">
=======
          <div className="md:col-span-2 flex items-center gap-3">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <section className="mt-8 p-6 rounded-lg border border-gray-200 dark: border-gray-800 bg-white dark:bg-black">
        <h2 className="text-xl font-semibold">AI Session Summaries (Optional)</h2>
        <p className="text-sm opacity-70 mt-2">Auto-generated summaries and ZionGPT moderation prompts coming soon.</p>
      </section>
    </>
  )
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
