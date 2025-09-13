export const metadata = {
  title: "AI Governance Playbook: Guardrails That Don’t Slow You Down",
  description: "A lightweight framework for model risk, data privacy, and human approvals.",
};

export default function Page() {
  return (
    <article className='min-h-screen'>
      <header className='bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-center'>
        <div className='max-w-3xl mx-auto px-6'>
          <div className='text-xs uppercase tracking-wide text-blue-100 mb-3'>AI</div>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>AI Governance Playbook: Guardrails That Don’t Slow You Down</h1>
          <div className='text-blue-100/80'>September 12, 2025</div>
        </div>
      </header>
      <section className='py-12 px-4 sm:px-6 lg:px-8'>
        <div className='prose prose-invert max-w-3xl mx-auto'>
          <p>Standards for safe AI delivery without bureaucracy.</p>
          <ul>
            <li>Model risk tiers</li>
            <li>Data retention and PII handling</li>
            <li>Human-in-the-loop checkpoints</li>
            <li>Incident response drills</li>
          </ul>
        </div>
      </section>
    </article>
  );
}

