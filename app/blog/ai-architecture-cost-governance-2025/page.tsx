import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='min-h-screen bg-white'>
      <article className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <header className='mb-8'>
          <p className='text-sm text-gray-500'>2025-09-11 • 8 min read • AI Engineering</p>
          <h1 className='text-3xl md:text-5xl font-bold text-gray-900 mb-4'>AI Architecture & Cost Governance in 2025</h1>
          <p className='text-lg text-gray-700'>Blueprints to keep AI systems reliable, observable, and cost-effective across experimentation, pilot, and scale.</p>
        </header>

        <section className='prose prose-blue max-w-none'>
          <h2>Principles</h2>
          <ul>
            <li>Separation of concerns: prompt, retrieval, tools, policy.</li>
            <li>Guardrails first: inputs, outputs, budgets, approvals.</li>
            <li>Observability: trace, metrics, costs tied to outcomes.</li>
          </ul>

          <h2>Reference Architecture</h2>
          <ol>
            <li>Gateway with auth, rate limits, and request shaping.</li>
            <li>Retrieval orchestration with caching and fallback paths.</li>
            <li>Tooling layer with idempotency and circuit breakers.</li>
            <li>Policy engine for PII, jailbreaks, and red teaming hooks.</li>
            <li>Cost governance: budgets, per-feature cost caps, alerts.</li>
          </ol>

          <h2>Controls That Matter</h2>
          <ul>
            <li>Testable prompts with fixtures and canaries.</li>
            <li>Tiered models with auto-downgrade based on SLOs.</li>
            <li>LLM + vector spend caps per tenant and feature.</li>
          </ul>

          <div className='mt-10 p-6 bg-blue-50 border border-blue-200 rounded-lg'>
            <h3 className='text-xl font-semibold text-blue-900 mb-2'>Need an Architecture Review?</h3>
            <p className='text-blue-800'>We harden AI systems with guardrails, observability, and cost controls—without slowing teams.</p>
            <div className='mt-4 flex gap-3'>
              <Link href='/contact' className='bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors'>Talk to Us</Link>
              <Link href='/services/ai-services' className='border border-blue-600 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-blue-50 transition-colors'>AI Services</Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

