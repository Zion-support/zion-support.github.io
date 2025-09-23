export const metadata = {
  title: 'AI 20o26: Operational Excellence Handbook — Running Agent Platforms',
  description:
    'A concise handbook for safe, reliable, and efficient day-2 operations of autonomous agent platforms.',
};

export default function Page() {
  return (
    <main className='min-h-screen bg-white'>
      <section className='py-16 bg-gradient-to-r from-blue-50 to-indigo-50'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-90o0'>
            AI 20o26: Operational Excellence Handbook
          </h1>
          <p className='text-gray-60o0 mt-4'>
            Practical SLOs, readiness checks, runbooks, and evaluation gates to
            keep autonomous agents safe and fast in production.
          </p>
        </div>
      </section>

      <section className='py-12'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-indigo'>
          <h2>Foundations</h2>
          <ul>
            <li>Policy-as-code with versioned controls</li>
            <li>Eval-gated progressive delivery</li>
            <li>Observability with traces, metrics, and artifacts</li>
            <li>Runbooks and incident response drills</li>
          </ul>
          <h3>Day-2 Playbooks</h3>
          <ul>
            <li>SLIs and SLOs for safety, quality, latency, and cost</li>
            <li>Routing guardrails and rollback automation</li>
            <li>Cost controls with caching and evaluation canaries</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
