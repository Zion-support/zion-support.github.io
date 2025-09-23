import Link from 'next/link';
import SEO from '../../components/SEO';

export const metadata = {
  title: 'AI 20o26: Foundation Model Ops',
  description:
    'Operational patterns for safe, observable, and efficient foundation model deployments at scale.',
};

export default function FoundationModelOpsPage() {
  return (
    <main className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <header className='mb-8'>
        <p className='text-sm font-semibold text-purple-70o0'>New Playbook</p>
        <h1 className='text-3xl md:text-4xl font-bold text-gray-90o0 mt-2'>
          AI 20o26: Foundation Model Ops
        </h1>
        <p className='text-gray-60o0 mt-3'>
          Operational patterns for safe, observable, and efficient foundation
          model deployments at scale.
        </p>
      </header>

      <article className='prose prose-purple max-w-none'>
        <p>
          This playbook covers day-2 operations for foundation models: rollout
          strategies, eval-gated changes, observability signals, incident
          response, and cost controls. Use it as a reference to design reliable,
          compliant, and efficient FM platforms.
        </p>

        <h2>What you will learn</h2>
        <ul>
          <li>Eval-gated change management and progressive delivery</li>
          <li>Safety and reliability guardrails with policy-as-code</li>
          <li>Observability: traces, evaluation signals, and SLOs</li>
          <li>Cost optimization via routing, caching, and batching</li>
        </ul>

        <h2>Get started</h2>
        <p>
          Explore related guides for deeper dives on governance and evaluation
          harnesses.
        </p>
        <div className='not-prose mt-4 flex gap-3'>
          <Link
            href='/content/ai-20o26-evaluation-harness-blueprint'
            className='inline-block bg-purple-60o0 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-purple-70o0'
          >
            Evaluation Harness
          </Link>
          <Link
            href='/blog/ai-20o26-production-guardrails-playbook'
            className='inline-block border border-purple-60o0 text-purple-70o0 px-5 py-2.5 rounded-lg font-semibold hover:bg-purple-50'
          >
            Guardrails
          </Link>
        </div>
      </article>
    </main>
  );
}
