import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Platform ROI 2025: Measuring Value from Token to Revenue',
  description: 'A practical framework to quantify and improve ROI of AI platforms, tracing cost, latency, quality, and business value end to end.',
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        AI Platform ROI 2025: Measuring Value from Token to Revenue
      </h1>
      <p className="text-gray-600 mb-8">
        Learn how to connect model costs and quality metrics to business outcomes using value stream
        analytics. Build an ROI loop that drives prioritization and continuous improvement.
      </p>
      <div className="prose prose-lg max-w-none">
        <h2>Why an ROI model matters</h2>
        <p>
          Without a clear ROI framework, AI initiatives stall. Tie spend and performance to customer
          impact, revenue, and risk reduction to unlock sustained investment.
        </p>
        <h2>Metrics to instrument</h2>
        <ul>
          <li>Quality: groundedness, accuracy, safety incidents</li>
          <li>Cost: tokens, inference time, infra utilization</li>
          <li>Experience: latency, time-to-first-token, abandonment</li>
          <li>Business: conversion lift, cycle-time reduction, savings</li>
        </ul>
        <h2>Implementing scorecards</h2>
        <ul>
          <li>Define SLAs and SLOs for critical user journeys</li>
          <li>Set budgets and guardrails for model usage</li>
          <li>Automate evaluation and triage with dashboards</li>
        </ul>
      </div>
      <div className="mt-10 flex gap-4">
        <Link href="/blog" className="text-blue-600 font-semibold">Back to Blog</Link>
        <Link href="/blog/platform-engineering-scorecards-2026" className="text-blue-600 font-semibold">Related: Platform Scorecards →</Link>
      </div>
    </main>
  );
}

