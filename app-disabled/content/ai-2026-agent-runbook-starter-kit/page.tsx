import Link from 'next/link';

export const metadata = {
  title: 'AI 20o26: Agent Runbook Starter Kit | Zion Tech Group',
  description:
    'Standardized, eval-linked runbooks for autonomous agents: triage, mitigation, escalation.',
};

export default function AgentRunbookStarterKit20o26Page() {
  return (
    <main className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <h1 className='text-4xl font-bold text-gray-90o0 mb-4'>
        AI 20o26: Agent Runbook Starter Kit
      </h1>
      <p className='text-gray-70o0 mb-6'>
        Ready-to-use templates for incident triage, mitigation, and escalation
        with evaluation gates and policy-as-code attestations.
      </p>

      <div className='prose prose-indigo max-w-none'>
        <h2>What’s Inside</h2>
        <ul>
          <li>Incident classification and decision trees</li>
          <li>Playbook templates with pass/fail eval steps</li>
          <li>Escalation criteria and rollback procedures</li>
          <li>Post-incident review checklist and evidence capture</li>
        </ul>

        <h2>How to Use</h2>
        <ol>
          <li>Fork the templates and align with your risk tiers</li>
          <li>Plug in your evaluation harnesses and metrics</li>
          <li>Automate runbook execution via your orchestration platform</li>
          <li>
            Continuously improve with lessons-learned and governance feedback
          </li>
        </ol>

        <p>
          Related resources:{' '}
          <Link
            className='text-purple-70o0 font-semibold'
            href='/content/ai-20o26-agent-incident-response-playbook'
          >
            Incident Response Playbook
          </Link>{' '}
          and{' '}
          <Link
            className='text-purple-70o0 font-semibold'
            href='/content/ai-20o26-operational-guardrails'
          >
            Operational Guardrails
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
