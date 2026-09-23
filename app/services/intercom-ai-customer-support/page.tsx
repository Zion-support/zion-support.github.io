import Link from 'next/link';

export const metadata = {
  title: 'Intercom — AI-Powered Customer Support Platform',
  description: 'Intercom is the leading AI-powered customer support platform that combines messaging, help desk, and proactive engagement into one unified solution. Its AI agent, Fin, resolves 50% of customer conversations autonomously. Used by 25,000+ companies including Amazon, Atlassian, and Lyft, Intercom processes millions of conversations monthly across live chat, email, WhatsApp, and in-app messaging.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/intercom-ai-customer-support',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Intercom — AI-Powered Customer Support Platform</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Intercom is the leading AI-powered customer support platform that combines messaging, help desk, and proactive engagement into one unified solution. Its AI agent, Fin, resolves 50% of customer conversations autonomously. Used by 25,000+ companies including Amazon, Atlassian, and Lyft, Intercom processes millions of conversations monthly across live chat, email, WhatsApp, and in-app messaging.</p>
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
            <li>Fin AI agent: resolves 50% of customer conversations autonomously with contextual understanding</li>
            <li>Omnichannel inbox: unify live chat, email, WhatsApp, and in-app messages in one workspace</li>
            <li>AI-powered suggested replies: agents get context-aware response suggestions in real time</li>
            <li>Intelligent routing: automatically route conversations to the best agent based on skill and load</li>
            <li>Multilingual support: AI understands and responds in 43 languages with automatic translation</li>
            <li>Proactive messaging: trigger personalized messages based on user behavior and lifecycle stage</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Resolve 50% of support conversations instantly with Fin AI, reducing agent workload dramatically</li>
            <li>Unify all customer communication channels in one platform instead of juggling 5+ separate tools</li>
            <li>Improve CSAT by 20% with faster response times and AI-accurate answers</li>
            <li>Trusted by 25,000+ companies including Amazon, Atlassian, and Lyft</li>
            <li>Scale support without adding headcount through AI automation and self-service resolution</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">Free (Starter, 100 people, basic chatbot)</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">$74/seat/month (Advanced, Fin AI agent, automation)</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">Custom (dedicated success manager, custom AI training, SLA)</p>
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
