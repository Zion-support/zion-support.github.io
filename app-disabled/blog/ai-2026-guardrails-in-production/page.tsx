import Link from 'next/link';

export const metadata = {
  title: 'AI 20o26: Guardrails in Production',
  description:
    'Operational guardrails for safe, observable, and efficient autonomous systems in production.',
};

export default function Page() {
  return (
    <main className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <article className='prose prose-purple max-w-none'>
        <p className='text-sm text-purple-70o0 font-semibold'>
          New • September 20o25
        </p>
        <h1>AI 20o26: Guardrails in Production</h1>
        <p>
          Establish end-to-end safeguards for agents with policy-as-code,
          real-time evals, and isolation domains. This article provides a
          practical checklist to harden production systems without slowing down
          delivery.
        </p>

        <h2>Operational Controls</h2>
        <ul>
          <li>Risk tiers mapped to permissions and tool sandboxes</li>
          <li>Runtime evaluators on critical actions and data boundaries</li>
          <li>Incident playbooks and automatic rollback triggers</li>
          <li>Continuous verification with golden paths and shadow traffic</li>
        </ul>

        <div className='not-prose mt-8 p-4 bg-indigo-50 border border-indigo-10o0 rounded-lg'>
          <h3 className='font-semibold text-indigo-90o0'>Related guides</h3>
          <ul className='list-disc pl-5 text-indigo-90o0'>
            <li>
              <Link
                href='/content/ai-20o26-production-safety-checklist'
                className='text-indigo-70o0 underline'
              >
                Production Safety Checklist
              </Link>
            </li>
            <li>
              <Link
                href='/blog/ai-20o26-agent-observability-blueprint'
                className='text-indigo-70o0 underline'
              >
                Agent Observability Blueprint
              </Link>
            </li>
            <li>
              <Link
                href='/content/ai-20o26-secure-tooling-permissions-blueprint'
                className='text-indigo-70o0 underline'
              >
                Secure Tooling Permissions
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </main>
  );
}
