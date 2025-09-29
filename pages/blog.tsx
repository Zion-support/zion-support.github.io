import React from "react";
import Head from "next/head";
import Link from "next/link";

const articles = [
  {
    category: { label: "AI Strategy", color: "indigo" },
    title: "Designing High-Impact AI Roadmaps",
    summary:
      "A practical framework to align AI investments with measurable business outcomes and reduce time-to-value.",
    href: "/blog/ai-roadmaps",
    bullets: [
      "Value-first use case selection",
      "Data readiness and governance",
      "Risk and compliance guardrails",
    ],
  },
  {
    category: { label: "Cloud FinOps", color: "pink" },
    title: "Cutting Cloud Spend Without Slowing Teams",
    summary:
      "Proven tactics for right-sizing, demand shaping, and engineering-friendly guardrails that keep velocity high.",
    href: "/blog/cloud-finops",
    bullets: [
      "Smart autoscaling defaults",
      "Cost-aware CI/CD policies",
      "Workload tagging and accountability",
    ],
  },
  {
    category: { label: "Security", color: "emerald" },
    title: "Zero-Trust in Practice for SaaS",
    summary:
      "A pragmatic guide to rolling out least-privilege, continuous verification, and blast radius controls.",
    href: "/blog/zero-trust-saas",
    bullets: [
      "Identity as the new perimeter",
      "Policy-as-code examples",
      "Telemetry-driven detection",
    ],
  },
  {
    category: { label: "Data Engineering", color: "blue" },
    title: "Building Reliable Real-Time Data Pipelines",
    summary:
      "Patterns and trade-offs for event-driven architectures that scale, stay observable, and minimize latency.",
    href: "/blog/real-time-pipelines",
    bullets: [
      "Exactly-once semantics strategies",
      "Schema evolution without downtime",
      "Cost-aware streaming with backpressure",
    ],
  },
  {
    category: { label: "Product Analytics", color: "orange" },
    title: "North-Star Metrics That Actually Drive Growth",
    summary:
      "How to define actionable metrics, avoid vanity traps, and align teams around measurable outcomes.",
    href: "/blog/north-star-metrics",
    bullets: [
      "Activation vs. retention trade-offs",
      "Cohort-based experimentation",
      "Leading indicators for monetization",
    ],
  },
  {
    category: { label: "MLOps", color: "purple" },
    title: "Operationalizing GenAI Safely and at Scale",
    summary:
      "Practical blueprints for evaluation, monitoring, and guardrails across the GenAI lifecycle.",
    href: "/blog/operationalizing-genai",
    bullets: [
      "Evaluation harnesses and benchmarks",
      "Prompt, policy, and safety testing",
      "Observability for drift and hallucinations",
    ],
  },
];

const Blog: React.FC = () => {
  return (
    <>
      <Head>
        <title>Zion Insights – Latest Articles & Case Studies</title>
        <meta
          name="description"
          content="Read the latest insights, guides, and case studies from Zion Tech Group on AI, cloud, and cybersecurity."
        />
      </Head>
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Zion Insights
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Fresh perspectives on AI, cloud infrastructure, cybersecurity, and digital transformation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div
                  className={`text-sm font-medium mb-2 text-${article.category.color}-600`}
                >
                  {article.category.label}
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4">{article.summary}</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                  {article.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <Link
                  href={article.href}
                  className={`font-medium hover:opacity-90 text-${article.category.color}-600`}
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Get insights in your inbox
          </h3>
          <p className="text-white/90 mb-6">
            Monthly, no spam. Trends, playbooks, and case studies.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-white text-indigo-700 font-semibold hover:bg-indigo-50"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Blog;

