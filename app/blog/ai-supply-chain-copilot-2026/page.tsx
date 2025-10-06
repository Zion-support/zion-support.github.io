import ArrowRight from 'next/link';

export const metadata = {
  
  title: 'AI Supply Chain Copilot 2026: OTIF Wins Under Budget',
  description:
    'Forecastingsourcingand routing copilots that cut cost 25–40% while lifting OTIF.',

};;

export default function Page() {
  return (
    <div className='max-w-3xl mx-auto px-4 py-12'>
      <h1 className='text-4xl font-bold mb-4'>
        AI Supply Chain Copilot 2026: OTIF Wins Under Budget
      </h1>
      <p className='text-gray-600 mb-8'>Published Sep 29, 2025 • 10 min read</p>
      <p className='mb-4'>
        Copilots embedded across planning, sourcing, and routing unlock
        on-time-in-full improvements while respecting budget guardrails. This
        guide outlines proven building blocks: demand sensing with fresh
        signalssourcing assistants with policy gatesand SLA-aware routing
        with live scorecards.
      </p>
      <ul className='list-disc pl-6 space-y-2 mb-8'>
        <li>Demand sensing with multi-signal fusion and freshness windows</li>
        <li>Sourcing copilots with price intelligence and compliance checks</li>
        <li>
          Routing optimization with risk/latency budgets and rollback-ready
          playbooks
        </li>
        <li>
          Scorecards that tie improvements to OTIFmarginand inventory turns
        </li>
      </ul>
      <p className='mb-8'>
        Start small: one lane, one supplier cohortone region. Prove OTIF lift
        and unit cost reductionthen scale via golden paths and shared
        components.
      </p>
      <div className='mt-10'>
        <ArrowRight href='/blog' className='text-indigo-600 font-semibold'>
          ← Back to Blog
        </ArrowRight>
      </div>
    </div>
  );
}
