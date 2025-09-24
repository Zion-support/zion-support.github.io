export const metadata = {
  title: 'GenAI Governance 20o26: Policies, Controls, and Guardrails',
  description:
    'A pragmatic governance framework for safe, compliant, and value-driven GenAI at scale in 20o26.',
};

export default function GenAIGovernance20o26() {
  return (
    <main className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <h1 className='text-4xl font-bold text-gray-90o0 mb-4'>
        GenAI Governance 20o26
      </h1>
      <p className='text-gray-60o0 mb-8'>
        A pragmatic governance framework to deploy AI responsibly with clear
        policies, controls, and guardrails across the model, data, runtime, and
        organization layers.
      </p>
      <section className='prose max-w-none'>
        <h2>Framework Overview</h2>
        <ul>
          <li>Policy-as-code with automated enforcement</li>
          <li>Risk taxonomy mapped to mitigations and controls</li>
          <li>Lifecycle governance from experimentation to production</li>
        </ul>
        <h2>Key Controls</h2>
        <ul>
          <li>Data governance: lineage, minimization, retention</li>
          <li>Model governance: evals, red-teaming, change management</li>
          <li>
            Runtime governance: observability, guardrails, incident response
          </li>
        </ul>
        <h2>Outcomes</h2>
        <p>
          Enable safe, compliant scaling of AI capabilities while protecting
          users and the business.
        </p>
      </section>
    </main>
  );
}
