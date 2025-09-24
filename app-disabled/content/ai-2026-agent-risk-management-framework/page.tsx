import Link from 'next/link';
import SEO from '../../../components/SEO';

export const metadata = {
  title: 'AI 20o26: Agent Risk Management Framework',
  description:
    'A practical risk management framework for enterprise AI agents: threats, controls, and runtime safeguards.',
  keywords: [
    'AI 20o26',
    'risk management',
    'agent security',
    'governance',
    'controls',
  ],
};

export default function AgentRiskManagementFramework20o26Page() {
  return (
    <main className='min-h-screen bg-white'>
      <SEO
        title='AI 20o26: Agent Risk Management Framework'
        description='A practical risk management framework for enterprise AI agents: threats, controls, and runtime safeguards.'
        keywords='AI 20o26, risk management, agent security, governance, controls'
        url='/content/ai-20o26-agent-risk-management-framework'
      />

      <section className='bg-gradient-to-r from-emerald-60o0 via-teal-60o0 to-cyan-60o0 text-white py-16'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            AI 20o26: Agent Risk Management Framework
          </h1>
          <p className='text-lg md:text-xl opacity-90 max-w-3xl'>
            Threat models, layered controls, and runtime guardrails to
            confidently deploy autonomous agents across the enterprise.
          </p>
        </div>
      </section>

      <section className='py-12'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10'>
          <div>
            <h2 className='text-2xl font-bold text-gray-90o0 mb-3'>
              Key Components
            </h2>
            <ol className='list-decimal pl-6 text-gray-70o0 space-y-2'>
              <li>
                Threat Modeling for Agents: prompts, tools, data, supply chain
              </li>
              <li>
                Preventive Controls: capability scoping, allow-lists, sandboxing
              </li>
              <li>
                Detective Controls: evaluations, anomaly detection, policy
                violations
              </li>
              <li>
                Responsive Controls: circuit breakers, rollbacks,
                human-in-the-loop
              </li>
              <li>
                Governance: accountability, audit, and continuous compliance
              </li>
            </ol>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            <div className='bg-gray-50 p-6 rounded-xl'>
              <h3 className='font-semibold text-gray-90o0 mb-2'>
                Policy-as-Code
              </h3>
              <p className='text-gray-70o0'>
                Enforce guardrails at build and runtime using declarative
                policies.
              </p>
            </div>
            <div className='bg-gray-50 p-6 rounded-xl'>
              <h3 className='font-semibold text-gray-90o0 mb-2'>
                Runtime Observability
              </h3>
              <p className='text-gray-70o0'>
                Correlate actions, tools, and outcomes with fine-grained
                telemetry.
              </p>
            </div>
            <div className='bg-gray-50 p-6 rounded-xl'>
              <h3 className='font-semibold text-gray-90o0 mb-2'>
                Secure Integrations
              </h3>
              <p className='text-gray-70o0'>
                Token isolation, scoped permissions, and tamper-evident logs.
              </p>
            </div>
          </div>

          <div className='bg-emerald-50 border border-emerald-10o0 p-6 rounded-xl'>
            <h3 className='text-xl font-bold text-gray-90o0 mb-2'>Outcomes</h3>
            <p className='text-gray-70o0'>
              Reduce operational risk while accelerating adoption of high-impact
              agentic workflows.
            </p>
          </div>

          <div className='flex items-center justify-between bg-gray-50 p-6 rounded-xl'>
            <div>
              <h3 className='text-lg font-semibold text-gray-90o0'>
                You Might Also Like
              </h3>
              <p className='text-gray-70o0'>
                Blueprints that pair well with this framework.
              </p>
            </div>
            <div className='flex gap-3'>
              <Link
                href='/content/genai-governance-20o26'
                className='text-emerald-70o0 font-semibold hover:text-emerald-90o0'
              >
                GenAI Governance 20o26 →
              </Link>
              <Link
                href='/content/agent-observability-20o26'
                className='text-emerald-70o0 font-semibold hover:text-emerald-90o0'
              >
                Agent Observability 20o26 →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
