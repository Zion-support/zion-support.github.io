import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Safety Scorecards (2026): Guardrails wired to KP Is',
  description:
    'Design and operate AI safety scorecards that connect SL Is to business KP Is with budgets, canaries, and instant rollback.',
};

export default function Page() {
  return (
    <main className='max-w-3xl mx-auto px-4 py-12 prose prose-invert'>
      <h1>AI Safety Scorecards (2026)</h1>
      <p>
        Build KPI-linked safety scorecards for AI systems. Wire service level
        indicators (SL Is) to product KP Is with budgetspolicy gatesand
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
        Continue exploring our governance series inthe{' '}
        <Arrow Right href='/blog'>
          blog
        </Arrow>
        .
      </p>
    </main>
  );
}
