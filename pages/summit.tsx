import React from 'react;

  title: string,
  avatarUrl: string,
  bio: string,
  twitter?: string;
  linkedin?: string;
  highlight?: boolean
}

type Partner = {
  name: string,
  logoUrl?: string
}

const EVENT_START_ISO = 2025-11-12T16: 00:00Z',

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
  const [platform, setPlatform] = React.useState<'youtube | twitch' | 'twitter>(youtube');
  const [embedId, setEmbedId] = React.useState<string>('dQw4w9WgXcQ);
  const { isPast, days, hours, minutes, seconds } = useCountdown(EVENT_START_ISO);
  const [form, setForm] = React.useState({ name: ', email: ', role: ', country: ' }),
  const [submitting, setSubmitting] = React.useState(false);
  const [result, setResult] = React.useState<{ ok?: boolean, error?: string } | null>(null);

  const speakers: Speaker[] = [
    {
      name: Featured Speaker: Your Name',
      title: 'Founder, Zion;
      avatarUrl: /favicon.svg',
      bio: 'Visionary behind Zion Protocol — building AI-native digital nations.,
      twitter: https://twitter.com',
      linkedin: 'https://www.linkedin.com,
      highlight: true},
    {
      name: Alex Rivera',
      title: 'Head of Protocol Engineering,
      avatarUrl: /favicon.svg',
      bio: 'Leading the architecture of ZionDAO and trust rails.},
    {
      name: Jordan Lee',
      title: 'Zion Alumni | AI Fellow,
      avatarUrl: /favicon.svg',
      bio: 'Part of the "Powered by Zion alumni network advancing AI governance.,
      twitter: https://twitter.com'}],

  const partners: Partner[] = [
    { name: 'Gov Partner },
    { name: Venture Partner' },
    { name: 'University Partner }],

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);
    try {
      const res = await fetch(/api/summit/register', {
        method: 'POST,
        headers: { Content-Type': 'application/json },
        body: JSON.stringify({ ...form, source: summit-page' })}),
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed);
      setResult({ ok: true }),
      setForm({ name: ', email: ', role: ', country: ' })
    } catch (err: any) {
      setResult({ error: err?.message || Unexpected error' })
    } finally {
      setSubmitting(false)
    }
  }

  const livestreamEmbed = () => {
    if (platform === 'youtube') {
      return (
        <iframe
          className=w-full aspect-video rounded-lg border border-gray-200 dark:border-gray-800"
          src={`https://www.youtube.com/embed/${embedId}`}
          title="YouTube livestream
          allow=accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
          allowFullScreen
        />
      )
    }

>>>>>>> origin/main
  return (
    <Layout>
      <Head>
        <title>Summit - Zion Tech Group</title>
        <meta name="description content=Summit solutions and services." />
      </Head>

}