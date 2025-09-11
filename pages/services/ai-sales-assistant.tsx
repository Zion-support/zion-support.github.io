import Head from 'next/head';
import Link from 'next/link';

export default function AISalesAssistant() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Head>
        <title>AI Sales Assistant — Services — Zion</title>
        <meta name="description" content="Qualify leads, personalize outreach, and schedule meetings autonomously." />
      </Head>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />
        <div className="absolute inset-0 beams opacity-[0.06]" />
      </div>
      <main className="relative z-10 mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold gradient-text">AI Sales Assistant</h1>
        <p className="mt-4 text-white/80">Automate lead qualification and personalized outreach across email and LinkedIn with CRM syncing.</p>
        <ul className="mt-6 space-y-2 text-white/80 list-disc pl-5">
          <li>ICP matching and scoring synced to CRM</li>
          <li>Persona-aware sequences with A/B testing</li>
          <li>Meeting scheduling and objection handling</li>
        </ul>
        <div className="mt-8 flex gap-3">
          <Link href="/services"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">Back to Services</a></Link>
          <Link href="/contact"><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover:bg-white">Get Started</a></Link>
        </div>
      </main>
    </div>
  );
}

