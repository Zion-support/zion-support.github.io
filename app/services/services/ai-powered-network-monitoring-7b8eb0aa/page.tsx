import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI-Powered Network Monitoring',
  description:
    'Discuss network monitoring, anomaly detection and alerting requirements with Zion Tech Group.',
  alternates: {
    canonical:
      'https://ziontechgroup.com/services/ai-powered-network-monitoring-7b8eb0aa',
  },
};

export default function ServicePage() {
  return (
    <article aria-labelledby="service-title" className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-semibold text-purple-300">
          IT Operations
        </p>
        <h1 id="service-title" className="mb-6 text-4xl font-bold md:text-5xl">
          AI-Powered Network Monitoring
        </h1>
        <p className="mb-10 text-xl text-gray-300">
          Explore network monitoring, anomaly detection and proactive alerts for
          your environment. We start with your requirements and existing tools
          to define an appropriate scope.
        </p>

        <section aria-labelledby="scope-heading" className="mb-10">
          <h2 id="scope-heading" className="mb-5 text-2xl font-bold">
            Define your monitoring requirements
          </h2>
          <ul className="list-inside list-disc space-y-3 text-gray-300">
            <li>Network devices, sites and links that need monitoring.</li>
            <li>Anomaly detection needs and existing monitoring tools.</li>
            <li>Alert recipients, priorities and escalation requirements.</li>
          </ul>
        </section>

        <section
          aria-labelledby="pricing-heading"
          className="mb-10 rounded-xl border border-purple-500/50 bg-slate-900 p-6"
        >
          <h2 id="pricing-heading" className="mb-4 text-2xl font-bold">
            Pricing on request
          </h2>
          <p className="text-gray-300">
            Share your device count, locations, current tools and target
            timeframe by email. Zion will confirm the scope, availability and
            commercial terms in writing before any service is ordered.
          </p>
          <p className="mt-4 text-gray-300">
            Any purchase, booking or dispatch requires formal written client
            confirmation, the corresponding purchase order and Zion&apos;s
            specific release.
          </p>
        </section>

        <section aria-labelledby="contact-heading" className="rounded-xl bg-slate-900 p-6">
          <h2 id="contact-heading" className="mb-4 text-2xl font-bold">
            Start with your requirements
          </h2>
          <p className="mb-6 text-gray-300">
            Send a brief description of your environment so we can continue
            the discussion by email.
          </p>
          <a
            href="mailto:kleber@ziontechgroup.com?cc=commercial%40ziontechgroup.com&subject=Network%20monitoring%20requirements"
            className="inline-block rounded-lg bg-purple-600 px-6 py-3 font-semibold transition-colors hover:bg-purple-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300"
          >
            Email your requirements
          </a>
        </section>
      </div>
    </article>
  );
}
