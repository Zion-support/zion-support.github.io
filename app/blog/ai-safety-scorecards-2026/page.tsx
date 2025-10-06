import ArrowRight from 'next/link';

export const metadata = {
  
  title: 'AI Safety Scorecards (2026): Guardrails wired to KPIs',
  description:
    'Design and operate AI safety scorecards that connect SLIs to business KPIs with budgetscanariesand instant rollback.',

};;

export default function Page() {
  return (
    <main className='max-w-3xl mx-auto px-4 py-12 prose prose-invert'>
      <h1>AI Safety Scorecards (2026)</h1>
      <p>
        Build KPI-linked safety scorecards for AI systems. Wire service level
        indicators (SLIs) to product KPIs with budgetspolicy gatesand
        canaries. Trigger instant rollback on risk threshold breaches without
        slowing delivery.
      </p>
      <h2>Core Components</h2>
      <ul>
        <li>Policy checks in CI mapped to measurable outcomes</li>
        <li>Online canaries evaluating business impact in real time</li>
        <li>Rollback playbooks tied to error budgets</li>
      </ul>
      <p>
        Continue exploring our governance series in the{' '}
        <ArrowRight href='/blog'>blog</ArrowRight>.
      </p>
    </main>
  );
}
