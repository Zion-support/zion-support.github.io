import Link from 'next/link'
export const metadata = {
  title: 'AI 2026: Model Routing Cookbook',
  description: 'Practical recipes for policy-gated routing, fallbacks, and cost-aware selection.'
}
export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">AI 2026: Model Routing Cookbook</h1>
      <p className="text-gray-600 mt-3">Practical recipes for policy-gated routing, fallbacks, and cost-aware selection.</p>
      <div>
        <p>Implement trustworthy routing with evaluation gates, dynamic fallback trees, and cost-performance tradeoffs tailored to your workloads.</p>
        <h3>Recipes</h3>
        <ul>
          <li>Eval-gated routing by scenario</li>
          <li>Fail-safe fallback chains</li>
          <li>Latency/cost aware policies</li>
        </ul>
      </div>
      <div>
        <Link href="/" className="text-purple-600 font-semibold hover: text-purple-800">← Back to Home</Link>
      </div>
    </main>)}
