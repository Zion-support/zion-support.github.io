import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Evaluation Maturity Model 2025"
        description="A simple framework to assess and improve your AI evaluation maturity across metrics, data, automation, and governance."
        keywords="AI evaluation, maturity model, governance, automation, benchmarks, reliability"
        url="/resources/ai-2025-evaluation-maturity-model"
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <h1>AI Evaluation Maturity Model 2025</h1>
        <p className="lead">Assess your current state and get concrete steps to reach reliable, automated, and governed evaluation for AI systems.</p>

        <h2>Levels</h2>
        <ol>
          <li><strong>Ad-hoc:</strong> Manual spot checks, no versioning</li>
          <li><strong>Basic:</strong> Defined metrics, small curated datasets</li>
          <li><strong>Operational:</strong> CI automation, latency/cost tracked</li>
          <li><strong>Managed:</strong> Safety evals, dashboards, alerts</li>
          <li><strong>Optimized:</strong> Continuous improvement with business KPIs</li>
        </ol>

        <h2>Download</h2>
        <p>Get the worksheet and templates to accelerate adoption.</p>
        <p>
          Related: <Link href="/resources/ai-evaluation-checklist-2025">AI Evaluation Checklist 2025</Link>
        </p>
      </article>
    </div>
  );
}

