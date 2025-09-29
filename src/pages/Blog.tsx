import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Insights – Latest Articles & Case Studies</title>
        <meta name="description" content="Read the latest insights, guides, and case studies from Zion Tech Group on AI, cloud, and cybersecurity." />
      </Helmet>
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Zion Insights</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Fresh perspectives on AI, cloud infrastructure, cybersecurity, and digital transformation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Article 1 */}
          <article className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="text-sm text-indigo-600 font-medium mb-2">AI Strategy</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Designing High-Impact AI Roadmaps</h2>
              <p className="text-gray-600 mb-4">
                A practical framework to align AI investments with measurable business outcomes and reduce time-to-value.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                <li>Value-first use case selection</li>
                <li>Data readiness and governance</li>
                <li>Risk and compliance guardrails</li>
              </ul>
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-700">Read more →</a>
            </div>
          </article>

          {/* Article 2 */}
          <article className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="text-sm text-pink-600 font-medium mb-2">Cloud FinOps</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Cutting Cloud Spend Without Slowing Teams</h2>
              <p className="text-gray-600 mb-4">
                Proven tactics for right-sizing, demand shaping, and engineering-friendly guardrails that keep velocity high.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                <li>Smart autoscaling defaults</li>
                <li>Cost-aware CI/CD policies</li>
                <li>Workload tagging and accountability</li>
              </ul>
              <a href="#" className="text-pink-600 font-medium hover:text-pink-700">Read more →</a>
            </div>
          </article>

          {/* Article 3 */}
          <article className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="text-sm text-emerald-600 font-medium mb-2">Security</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Zero-Trust in Practice for SaaS</h2>
              <p className="text-gray-600 mb-4">
                A pragmatic guide to rolling out least-privilege, continuous verification, and blast radius controls.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                <li>Identity as the new perimeter</li>
                <li>Policy-as-code examples</li>
                <li>Telemetry-driven detection</li>
              </ul>
              <a href="#" className="text-emerald-600 font-medium hover:text-emerald-700">Read more →</a>
            </div>
          </article>

        {/* Article 4 */}
        <article className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="p-6">
            <div className="text-sm text-blue-600 font-medium mb-2">Data Engineering</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Building Reliable Real-Time Data Pipelines</h2>
            <p className="text-gray-600 mb-4">
              Patterns and trade-offs for event-driven architectures that scale, stay observable, and minimize latency.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
              <li>Exactly-once semantics strategies</li>
              <li>Schema evolution without downtime</li>
              <li>Cost-aware streaming with backpressure</li>
            </ul>
            <a href="#" className="text-blue-600 font-medium hover:text-blue-700">Read more →</a>
          </div>
        </article>

        {/* Article 5 */}
        <article className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="p-6">
            <div className="text-sm text-orange-600 font-medium mb-2">Product Analytics</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">North-Star Metrics That Actually Drive Growth</h2>
            <p className="text-gray-600 mb-4">
              How to define actionable metrics, avoid vanity traps, and align teams around measurable outcomes.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
              <li>Activation vs. retention trade-offs</li>
              <li>Cohort-based experimentation</li>
              <li>Leading indicators for monetization</li>
            </ul>
            <a href="#" className="text-orange-600 font-medium hover:text-orange-700">Read more →</a>
          </div>
        </article>

        {/* Article 6 */}
        <article className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="p-6">
            <div className="text-sm text-purple-600 font-medium mb-2">MLOps</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Operationalizing GenAI Safely and at Scale</h2>
            <p className="text-gray-600 mb-4">
              Practical blueprints for evaluation, monitoring, and guardrails across the GenAI lifecycle.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
              <li>Evaluation harnesses and benchmarks</li>
              <li>Prompt, policy, and safety testing</li>
              <li>Observability for drift and hallucinations</li>
            </ul>
            <a href="#" className="text-purple-600 font-medium hover:text-purple-700">Read more →</a>
          </div>
        </article>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Get insights in your inbox</h3>
          <p className="text-white/90 mb-6">Monthly, no spam. Trends, playbooks, and case studies.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
              aria-label="Email address"
            />
            <button type="submit" className="px-6 py-3 rounded-lg bg-white text-indigo-700 font-semibold hover:bg-indigo-50">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Blog;

