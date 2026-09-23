import Link from 'next/link';

export const metadata = {
  title: 'ElevenLabs — AI Synthetic Voice Cloning & Text-to-Speech',
  description: 'ElevenLabs is the leading AI voice technology platform that creates hyper-realistic synthetic voices from short audio samples. Their voice cloning technology captures vocal characteristics, accent, emotion, and speaking style to produce indistinguishable-from-human speech in 32 languages. With 1 million+ users and enterprise customers including The New York Times, Storytel, and Flo, ElevenLabs powers audiobook narration, podcast localization, video dubbing, and IVR replacement. Their Voice Library offers 10,000+ pre-built voices, while custom Voice Design creates unique brand voices from scratch.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/elevenlabs-synthetic-voice-cloning',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">ElevenLabs — AI Synthetic Voice Cloning &amp; Text-to-Speech</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">ElevenLabs is the leading AI voice technology platform that creates hyper-realistic synthetic voices from short audio samples. Their voice cloning technology captures vocal characteristics, accent, emotion, and speaking style to produce indistinguishable-from-human speech in 32 languages. With 1 million+ users and enterprise customers including The New York Times, Storytel, and Flo, ElevenLabs powers audiobook narration, podcast localization, video dubbing, and IVR replacement. Their Voice Library offers 10,000+ pre-built voices, while custom Voice Design creates unique brand voices from scratch.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://calendly.com/kleber-ziontechgroup/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition-colors"
            >
              Book a Consultation
            </a>
            <Link href="/services" className="inline-flex rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-200 hover:border-cyan-500/50 transition-colors">
              Browse All Services
            </Link>
            <Link href="/contact" className="inline-flex rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-200 hover:border-cyan-500/50 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Voice cloning from 1-minute audio sample with 95% similarity to original voice</li>
            <li>32 languages with native-sounding accents and natural prosody</li>
            <li>Emotion and tone control: adjust happiness, sadness, anger, whispering, shouting</li>
            <li>Voice Library: 10,000+ pre-built voices across ages, accents, and styles</li>
            <li>Voice Design: create unique synthetic voices without any reference audio</li>
            <li>API and SDK: real-time streaming TTS with &lt;200ms latency for interactive applications</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Produce audiobooks 10x faster without hiring voice actors</li>
            <li>Localize video content into 32 languages with consistent brand voice</li>
            <li>Replace expensive IVR systems with natural-sounding AI voice agents</li>
            <li>Content creators produce professional narration without recording equipment</li>
            <li>Used by 1 million+ users including major publishers and media companies</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">Free (10K chars/month)</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">$5/month (30K chars)</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">$330/month (2M chars + voice cloning)</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-slate-400">
          Need a tailored rollout? Call{' '}
          <a href="tel:+13024640950" className="text-cyan-400 hover:underline">+1 302 464 0950</a>
          {' '}or email{' '}
          <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:underline">kleber@ziontechgroup.com</a>.
        </p>
      </section>
    </main>
  );
}
