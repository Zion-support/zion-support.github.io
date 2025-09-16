import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Eval‑Ready API Gateways',
  description: 'Blueprint for evaluation‑gated API gateways: scorecards, policies, and safe rollouts.',
  keywords: [
    'evaluation gates',
    'policy as code',
    'api gateway',
    'release engineering',
    'ai safety',
  ],
};

const EvalReadyApiGateways2026: React.FC = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <p className="text-sm font-semibold text-purple-700">Blog • Release Engineering</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">AI 2026: Eval‑Ready API Gateways</h1>
        <p className="text-gray-600 mt-3">Wire scorecards and policy approvals into your gateway for safe, audit‑ready autonomy.</p>
      </header>

      <article className="prose prose-purple max-w-none">
        <h2>Why evaluation‑gated gateways?</h2>
        <p>
          As agents ship changes continuously, gateways become the enforcement point for policy‑as‑code, evaluation
          gates, and rollback contracts. This blueprint outlines a pragmatic approach.
        </p>

        <h2>Core capabilities</h2>
        <ul>
          <li>Policy checks and risk tiers at ingress</li>
          <li>Scorecard thresholds with route‑aware budgets</li>
          <li>Automatic rollback on failed canary metrics</li>
          <li>Evidence capture to an enterprise hub</li>
        </ul>

        <h2>Rollout strategy</h2>
        <p>
          Start with non‑critical routes, add progressive delivery, and keep a deterministic rollback path. Measure
          safety, quality, reliability, and cost SLOs.
        </p>
      </article>

      <footer className="mt-10 flex gap-3">
        <Link href="/blog/ai-2026-eval-gated-ci-cd-blueprint" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Eval‑Gated CI/CD</Link>
        <Link href="/blog/ai-2026-release-scorecards" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Release Scorecards</Link>
      </footer>
    </main>
  );
};

export default EvalReadyApiGateways2026;

