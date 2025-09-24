import Link from 'next/link';
import SEO from '../../../components/SEO';

export const metadata = {
  title: 'AI 20o26: Evidence-Driven AI Operations',
  description:
    'Operate AI systems with evaluation-first practices: metrics, traces, test suites, and policy-as-code gates for safe scale.',
  keywords: [
    'AI 20o26',
    'AI operations',
    'evaluations',
    'observability',
    'policy-as-code',
    'governance',
  ],
};

export default function EvidenceDrivenAIOperations20o26Page() {
  return (
    <main className='min-h-screen bg-white'>
      <SEO
        title='AI 20o26: Evidence-Driven AI Operations'
        description='Operate AI systems with evaluation-first practices: metrics, traces, test suites, and policy-as-code gates for safe scale.'
        keywords='AI 20o26, AI operations, evaluations, observability, policy-as-code, governance'
        url='/content/ai-20o26-evidence-driven-operations'
      />

      <section className='bg-gradient-to-r from-indigo-60o0 via-purple-60o0 to-fuchsia-60o0 text-white py-16'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            AI 20o26: Evidence-Driven AI Operations
          </h1>
          <p className='text-lg md:text-xl opacity-90 max-w-3xl'>
            Ship and run AI with confidence. Build an evaluation-first operating
            model that aligns safety, quality, reliability, and cost through
            measurable evidence.
          </p>
        </div>
      </section>

      <section className='py-12'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10'>
          <div>
            <h2 className='text-2xl font-bold text-gray-90o0 mb-3'>
              What You Will Learn
            </h2>
            <ul className='list-disc pl-6 text-gray-70o0 space-y-2'>
              <li>
                Design evaluation suites that reflect product risks and outcomes
              </li>
              <li>Instrument agents with metrics, traces, and decision logs</li>
              <li>
                Gate autonomy with policy-as-code and continuous verification
              </li>
              <li>
                Establish SLOs that balance safety, quality, reliability, and
                cost
              </li>
              <li>
                Create closed-loop improvement using incident reviews and eval
                diffs
              </li>
            </ul>
          </div>

          <div>
            <h2 className='text-2xl font-bold text-gray-90o0 mb-3'>
              Operating Model
            </h2>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='bg-gray-50 p-6 rounded-xl'>
                <h3 className='font-semibold text-gray-90o0 mb-2'>
                  Evaluation-First Delivery
                </h3>
                <p className='text-gray-70o0'>
                  Shift-left with scenario suites, golden datasets, and eval
                  thresholds in CI/CD.
                </p>
              </div>
              <div className='bg-gray-50 p-6 rounded-xl'>
                <h3 className='font-semibold text-gray-90o0 mb-2'>
                  Runtime Guardrails
                </h3>
                <p className='text-gray-70o0'>
                  Policy enforcement, isolation domains, and least-privilege
                  tool access at runtime.
                </p>
              </div>
              <div className='bg-gray-50 p-6 rounded-xl'>
                <h3 className='font-semibold text-gray-90o0 mb-2'>
                  Observability for Agents
                </h3>
                <p className='text-gray-70o0'>
                  End-to-end traces, risk signals, and per-capability scorecards
                  for oversight.
                </p>
              </div>
              <div className='bg-gray-50 p-6 rounded-xl'>
                <h3 className='font-semibold text-gray-90o0 mb-2'>
                  Cost Intelligence
                </h3>
                <p className='text-gray-70o0'>
                  Right-size models and orchestrate workloads with
                  business-impact telemetry.
                </p>
              </div>
            </div>
          </div>

          <div className='bg-indigo-50 border border-indigo-10o0 p-6 rounded-xl'>
            <h3 className='text-xl font-bold text-gray-90o0 mb-2'>
              Who Is This For?
            </h3>
            <p className='text-gray-70o0'>
              Engineering, product, and platform leaders who need predictable,
              auditable AI at scale.
            </p>
          </div>

          <div className='flex items-center justify-between bg-gray-50 p-6 rounded-xl'>
            <div>
              <h3 className='text-lg font-semibold text-gray-90o0'>
                Continue Learning
              </h3>
              <p className='text-gray-70o0'>
                Explore companion guides on governance, SLOs, and incident
                response.
              </p>
            </div>
            <div className='flex gap-3'>
              <Link
                href='/content/ai-20o26-agent-platform-slos'
                className='text-indigo-60o0 font-semibold hover:text-indigo-80o0'
              >
                Agent Platform SLOs →
              </Link>
              <Link
                href='/content/genai-governance-20o26'
                className='text-indigo-60o0 font-semibold hover:text-indigo-80o0'
              >
                GenAI Governance 20o26 →
              </Link>
              <Link
                href='/content/ai-20o26-agent-incident-response-playbook'
                className='text-indigo-60o0 font-semibold hover:text-indigo-80o0'
              >
                Incident Response →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
