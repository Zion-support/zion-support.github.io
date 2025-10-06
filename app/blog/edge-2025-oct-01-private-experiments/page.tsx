// @ts-nocheck

export default function Page() {
  return (
    <main className='min-h-screen bg-white text-gray-900'>
      <section className='py-16'>
        <div className='max-w-3xl mx-auto px-4'>
          <h1 className='text-4xl font-bold mb-4'>
            Edge Experiments 2025: Consentless A/B with Zero‑PII
          </h1>
          <p className='text-gray-600 mb-6'>
            Published: 2025-10-01 • 7 min read • Analytics
          </p>
          <p className='leading-7 mb-4'>
            Run sub‑100ms experiments at the edge without collecting PII: use
            scoped identifiers, on‑device aggregationand differential privacy
            noise to get statistically validcompliant insights globally.
          </p>
          <ul className='list-disc pl-6 space-y-2 mb-6'>
            <li>Scoped IDs and ephemeral cohorts</li>
            <li>On‑device metrics with encrypted rollups</li>
            <li>DP noise injection and guardrailed decisioning</li>
          </ul>
          <p className='leading-7'>
            The result: faster iteration, lower risk, and trustworthy analytics
            that respect user privacy and regulations across regions.
          </p>
        </div>
      </section>
    </main>
  );
}
