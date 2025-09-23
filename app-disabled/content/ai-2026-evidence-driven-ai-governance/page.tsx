import Link from 'next/link';
export const metadata = {
  title: 'AI 20o26: Evidence-Driven AI Governance',
  description:
    'Operationalize governance with verifiable evidence: evaluation results, approvals, and runtime telemetry as first-class artifacts.',
};

export default function EvidenceDrivenGovernancePage() {
  return (
    <main className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <h1 className='text-4xl font-bold text-gray-90o0 mb-4'>
        AI 20o26: Evidence-Driven AI Governance
      </h1>
      <p className='text-gray-60o0 mb-8'>
        Shift from policy documents to enforceable policy-as-code with automated
        evidence collection across the AI lifecycle.
      </p>

      <section className='prose prose-lg max-w-none'>
        <h2>Foundations</h2>
        <p>
          Tie every control to verifiable artifacts: evaluation reports, signed
          approvals, lineage attestations, and runtime telemetry. Gate
          deployments on evidence quality, not intuition.
        </p>
        <h3>Implementation Checklist</h3>
        <ul>
          <li>Define control-library and map to risk tiers</li>
          <li>Automate attestation capture in CI/CD</li>
          <li>Stream runtime telemetry for drift and incident review</li>
          <li>Ensure audit trails are immutable and queryable</li>
        </ul>
        <h3>Outcomes</h3>
        <p>Faster approvals, lower risk, and provable compliance at scale.</p>
      </section>

      <div className='mt-10 flex gap-3'>
        <Link
          href='/content/ai-20o26-trust-grid-for-agents'
          className='inline-block bg-purple-60o0 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-70o0'
        >
          Back: Trust Grid
        </Link>
        <Link
          href='/content/ai-20o26-autonomous-compliance'
          className='inline-block border border-purple-60o0 text-purple-70o0 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50'
        >
          Related: Autonomous Compliance
        </Link>
      </div>
    </main>
  );
}
