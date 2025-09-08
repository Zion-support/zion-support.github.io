










    { name: 'University Partner' },;


  ];



type Partner = {

  name: string,
  logoUrl?: string;
};

const EVENT_START_ISO = '2025-11-12T16: 00:00Z',
function useCountdown(targetIso: string) {
  const [remainingMs, setRemainingMs] = React.useState<number>(() => {
    return new Date(targetIso).getTime() - Date.now()
  });
  React.useEffect(() => {
    const id = setInterval(() => {

export default function SummitPage() {
  const [platform, setPlatform] = React.useState<'youtube' | 'twitch' | 'twitter'>('youtube');
  const [embedId, setEmbedId] = React.useState<string>('dQw4w9WgXcQ');
  const { isPast, days, hours, minutes, seconds } = useCountdown(EVENT_START_ISO);
  const [form, setForm] = React.useState({ name: '', email: '', role: '', country: '' }),
  const [submitting, setSubmitting] = React.useState(false);
  const [result, setResult] = React.useState<{ ok?: boolean, error?: string } | null>(null);

avatarUrl: '/favicon.svg',
      bio: 'Visionary behind Zion Protocol — building AI-native digital nations.',
  'Content - Type': 'application / json';
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

    name: ''
    email: ''
    role: ''
    country: ''



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


  },
  const livestreamEmbed = () => {
    if (platform === 'youtube') {
      return (
        <iframe
          className="w-full aspect-video rounded-lg border border-gray-200 dark:border-gray-800"
        />
      )




              className='inline-flex items-center px-4 py-2 rounded-md border border-white/40 hover:bg-white/10'
            >
              Agenda
            </a>
          </div>
        </div>
      </section>

<div className='grid md:grid-cols-3 gap-6 mt-8'>
          <ol className='space-y-3 list-decimal list-inside'>
            <li>Opening Keynote — Launching Zion Protocol</li>
















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





              <p className="mt-3 text-sm">{s.bio}</p>
              <div className="mt-3 flex gap-3 text-sm">





            <select
              aria-label='Platform'
              className='px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent'
              value={platform}
              onChange={e => setPlatform(e && e.target.value as any)}








      <section id="register" className="mt-8 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">

          <div>
            <label className="block text-sm mb-1">Name</label>





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





